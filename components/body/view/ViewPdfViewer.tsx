import React, { ReactElement, useEffect, useState } from 'react'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
import * as styles from 'public/static/styles/main.scss'
import repos from '../../../utils/repos'
import commonData from '../../../common/commonData'
import common from '../../../common/common'
import log from 'utils/log'
import { useMain } from '../../../redux/main/hooks'

interface ViewPdfViewerProps {
  documentData
  pageChange
  ratio: number
  readPage: number
  text
}

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function({
  documentData,
  pageChange,
  ratio,
  readPage,
  text
}: ViewPdfViewerProps): ReactElement {
  const { isMobile, myInfo } = useMain()
  const initArr: string[] = []
  const [thumbArr, setThumbArr] = useState(initArr)
  const [presentPage, setPresentPage] = useState(readPage)
  let currentScroll = 0
  let totalScroll = 0

  // ArrayBuffer to Base64
  const _arrayBufferToBase64 = (buffer): string => {
    let binary = ''
    let bytes = new Uint8Array(buffer)
    let len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return binary
  }

  const getCanvasWidth = (): number => {
    const el = document.getElementById('canvasLayer') as HTMLElement

    if (!el) return 0

    let windowWidth = el.offsetWidth
    let widthMargin = isMobile ? 0 : commonData.style.common.margin * 2

    if (windowWidth + widthMargin >= commonData.style.container.width) {
      return commonData.style.container.width - widthMargin
    } else if (
      windowWidth < commonData.style.container.width &&
      windowWidth > commonData.style.md.max.width
    ) {
      return windowWidth
    } else {
      return windowWidth
    }
  }

  const setThumbnailUrlAddress = (): void => {
    let arr = [documentData.totalPages]
    for (let i = 0; i < documentData.totalPages; i++) {
      arr[i] = common.getThumbnail(documentData.documentId, 1024, i + 1, '')
    }
    setThumbArr(arr)
  }

  const setViewerWrapperHeight = (): void => {
    let ele = document.getElementById('pdfViewerWrapper')
    if (ele) {
      let height = Number(ele.offsetWidth / ratio)
      let path = window.location.pathname.split('/')[3]
      let page = Number(path ? path.split('-')[0] : 0)

      ele.style.maxHeight = Math.floor(height) + 'px'
      ele.scrollTop = (page > 0 ? page - 1 : 0) * height
    }
  }

  const handleUpdateProgress = (e): void => {
    let contentLength

    if (e.lengthComputable) {
      contentLength = e.total
    } else {
      contentLength = parseInt(e.target.getResponseHeader('content-length'), 10)
    }

    let scrollPercentage = Math.floor((e.loaded / contentLength) * 100)
    const el = document.getElementById('totalLoadingBar') as HTMLElement

    if (el) {
      el.style.width = (scrollPercentage > 100 ? 100 : scrollPercentage) + '%'
    }
  }

  const handlePdfData = (pdfUrl: string): Promise<string> =>
    new Promise((resolve, reject) => {
      let url = pdfUrl.replace(/&amp;/g, '&')
      const xhtml = new XMLHttpRequest()
      xhtml.onprogress = handleUpdateProgress
      xhtml.responseType = 'arraybuffer'
      xhtml.open('GET', url, true)
      xhtml.onreadystatechange = () => {
        if (xhtml.readyState === 4) {
          // Makes sure the document is ready to parse.
          if (xhtml.status === 200) {
            // Makes sure it's found the file.
            resolve(_arrayBufferToBase64(xhtml.response))
          } else {
            reject()
          }
        }
      }

      xhtml.send(null)
    })

  const handleActivePageBar = (e): void => {
    const canvasContainer = document.getElementById(
      'canvasLayer'
    ) as HTMLElement
    const elLoadingBar = document.getElementById(
      'activeLoadingBar'
    ) as HTMLElement
    currentScroll = e.target.scrollTop
    totalScroll = canvasContainer.offsetHeight - e.target.offsetHeight
    let scrollPercentage = (currentScroll / totalScroll) * 100

    elLoadingBar.style.width = scrollPercentage + '%'
  }

  const handleScrolling = (e): void => {
    let calcNum = e.target.scrollTop / e.target.offsetHeight
    let page = parseInt(String(calcNum), 10)
    if (presentPage !== page) {
      pageChange(page)
      setPresentPage(page)
    }

    handleActivePageBar(e)
  }

  const handlePdfViewerRendering = (): void => {
    const elThumbnailWrapper = document.getElementById(
      'thumbnailWrapper'
    ) as HTMLElement
    const canvasContainer = document.getElementById(
      'canvasLayer'
    ) as HTMLElement
    const textContainer = document.getElementById('textLayer') as HTMLElement

    elThumbnailWrapper.style.display = 'none'
    canvasContainer.style.display = 'block'
    textContainer.style.display = 'block'
  }

  const renderPDF = async (pdfUrl: string) => {
    const canvasContainer = document.getElementById(
      'canvasLayer'
    ) as HTMLElement
    const textContainer = document.getElementById('textLayer') as HTMLElement
    let pdfData = await handlePdfData(pdfUrl)
    let _pdfData = atob(pdfData)

    // 텍스트 렌더링
    const textRender = async (page, viewport) =>
      page.getTextContent().then((textContent: any) => {
        if (!document.getElementById('textLayer')) return false

        const textLayerDiv = document.createElement('div')
        textLayerDiv.setAttribute('class', 'textRender')
        textLayerDiv.style.zIndex = '2'
        textLayerDiv.style.height = Math.floor(viewport.height) + 'px'
        textLayerDiv.style.width = Math.floor(viewport.width) + 'px'

        textContainer.appendChild(textLayerDiv)

        return pdfjs.renderTextLayer({
          enhanceTextSelection: true,
          textContent,
          container: textLayerDiv,
          viewport,
          textDivs: []
        })
      })

    // 특정 페이지 렌더링
    const renderPage = page => {
      let unscaledViewport = page.getViewport(1)
      let scale = getCanvasWidth() / unscaledViewport.width
      let viewport = page.getViewport({ scale: scale })

      return page
        .getOperatorList()
        .then(opList => {
          let svgGfx = new pdfjs.SVGGraphics(page.commonObjs, page.objs)
          return svgGfx
            .getSVG(opList, viewport)
            .then(svg => canvasContainer.appendChild(svg))
        })
        .then(() => textRender(page, viewport))
    }

    // 다수 페이지 렌더링
    const renderPages = async pdfDoc => {
      for (let num = 1; num <= pdfDoc.numPages; num++) {
        await pdfDoc.getPage(num).then(renderPage)

        if (num === pdfDoc.numPages) {
          handlePdfViewerRendering()
        }
      }
    }

    pdfjs.disableWorker = false
    await pdfjs.getDocument({ data: _pdfData }).promise.then(renderPages)
  }

  useEffect(() => {
    log.ViewPdfViewer.init()
    ;(async function() {
      const { pdfUrl } = await repos.Document.getDocumentPdfUrl(
        documentData.documentId
      )
      const canvasContainer = document.getElementById(
        'canvasLayer'
      ) as HTMLElement

      if (canvasContainer && !canvasContainer.hasChildNodes()) {
        void (await renderPDF(pdfUrl))
      }
    })()

    setThumbnailUrlAddress()
    setViewerWrapperHeight()
  }, [])

  return (
    <div className={styles.vpv_container} onScroll={e => handleScrolling(e)}>
      <div id={'pdfViewerWrapper'} className={styles.vpv_wrapper}>
        <div id={'thumbnailWrapper'} className={styles.vpv_thumbnailWrapper}>
          {thumbArr.length > 0
            ? thumbArr.map((addr, idx) => (
                <img
                  key={idx}
                  title={documentData.title}
                  src={addr}
                  alt={text[idx]}
                  data-small=""
                  data-normal=""
                  data-full=""
                  className={
                    documentData.forceTracking && !myInfo.email
                      ? 'img-cloudy'
                      : ''
                  }
                />
              ))
            : 'no data'}
        </div>
        <div id="canvasLayer" />
        <div id="textLayer" />
      </div>
    </div>
  )
}
