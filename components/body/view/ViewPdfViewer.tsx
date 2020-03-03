import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import pdfjs from "pdfjs-dist"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry"
import * as styles from "public/static/styles/main.scss"
import { repos } from "../../../utils/repos"
import common_data from "../../../common/common_data"
import common from "../../../common/common"

type Type = {
  documentData: any
  pageChange: any
  ratio: number
  readPage: number
  text: any
}

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function({
  documentData,
  pageChange,
  ratio,
  readPage,
  text
}: Type) {
  const isMobile = useSelector(state => state.main.isMobile)
  const myInfo = useSelector(state => state.main.myInfo)
  const initArr: string[] = []
  const [thumbArr, setThumbArr] = useState(initArr)
  const [presentPage, setPresentPage] = useState(readPage)
  let currentScroll = 0
  let totalScroll = 0

  // pdf data get
  const getPdfData = (pdfUrl: string) =>
    new Promise((resolve, reject) => {
      let url = pdfUrl.replace(/&amp;/g, "&")
      const xhtml = new XMLHttpRequest()
      xhtml.onprogress = handleUpdateProgress
      xhtml.responseType = "arraybuffer"
      xhtml.open("GET", url, true)
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

  // 캔버스 가로 길이 GET
  const getCanvasWidth = () => {
    let windowWidth = document.getElementById("canvasLayer")!.offsetWidth
    let widthMargin = isMobile ? 0 : common_data.style.common.margin * 2

    if (windowWidth + widthMargin >= common_data.style.container.width) {
      return common_data.style.container.width - widthMargin
    } else if (
      windowWidth < common_data.style.container.width &&
      windowWidth > common_data.style.md.max.width
    ) {
      return windowWidth
    } else {
      return windowWidth
    }
  }

  // 썸네일 주소 배열 SET
  const setThumbAddr = () => {
    let arr = [documentData.totalPages]
    for (let i = 0; i < documentData.totalPages; i++) {
      arr[i] = common.getThumbnail(documentData.documentId, 1024, i + 1, "")
    }
    setThumbArr(arr)
  }

  // 뷰어 wrapper SET
  const handleWrapperHeight = () => {
    let ele = document.getElementById("pdfViewerWrapper")
    if (ele) {
      let height = Number(ele.offsetWidth / ratio)
      let path = window.location.pathname.split("/")[3]
      let page = Number(path ? path.split("-")[0] : 0)

      ele.style.maxHeight = Math.floor(height) + "px"
      ele.scrollTop = (page > 0 ? page - 1 : 0) * height
    }
  }

  // update progress
  const handleUpdateProgress = (e: any) => {
    let contentLength
    if (e.lengthComputable) {
      contentLength = e.total
    } else {
      contentLength = parseInt(e.target.getResponseHeader("content-length"), 10)
    }

    let scrollPercentage = Math.floor((e.loaded / contentLength) * 100)

    document.getElementById("totalLoadingBar")!.style.width =
      (scrollPercentage > 100 ? 100 : scrollPercentage) + "%"
  }

  // 스크롤 관리
  const handleOnScroll = (e: any) => {
    let calcNum = e.target.scrollTop / e.target.offsetHeight
    let page = parseInt(String(calcNum), 10)
    if (presentPage !== page) {
      pageChange(page)
      setPresentPage(page)
    }

    handlePageBar(e)
  }

  // active 페이지 바 관리
  const handlePageBar = (e: any) => {
    currentScroll = e.target.scrollTop
    totalScroll =
      document.getElementById("canvasLayer")!.offsetHeight -
      e.target.offsetHeight
    let scrollPercentage = (currentScroll / totalScroll) * 100

    document.getElementById("activeLoadingBar")!.style.width =
      scrollPercentage + "%"
  }

  // pdf 렌더 관리
  const handlePdfViewerRendering = () => {
    document.getElementById("thumbnailWrapper")!.style.display = "none"
    document.getElementById("canvasLayer")!.style.display = "block"
    document.getElementById("textLayer")!.style.display = "block"
  }

  // PDF 렌더링
  const renderPDF = async (pdfUrl: string) => {
    let canvasContainer = document.getElementById("canvasLayer")!
    let pdfData = await getPdfData(pdfUrl)
    let _pdfData = atob(typeof pdfData === "string" ? pdfData : "")

    // 텍스트 렌더링
    const textRender = async (page, viewport) =>
      page.getTextContent().then((textContent: any) => {
        if (!document.getElementById("textLayer")) return false

        const textLayerDiv = document.createElement("div")
        textLayerDiv.setAttribute("class", "textRender")
        textLayerDiv.style.zIndex = "2"
        textLayerDiv.style.height = Math.floor(viewport.height) + "px"
        textLayerDiv.style.width = Math.floor(viewport.width) + "px"

        document.getElementById("textLayer")!.appendChild(textLayerDiv)

        return pdfjs.renderTextLayer({
          enhanceTextSelection: true,
          textContent,
          container: textLayerDiv,
          viewport,
          textDivs: []
        })
      })

    // 특정 페이지 렌더링
    const renderPage = (page: any) => {
      let unscaledViewport = page.getViewport(1)
      let scale = getCanvasWidth() / unscaledViewport.width
      let viewport = page.getViewport({ scale: scale })

      return page
        .getOperatorList()
        .then((opList: any) => {
          let svgGfx = new pdfjs.SVGGraphics(page.commonObjs, page.objs)
          return svgGfx
            .getSVG(opList, viewport)
            .then(svg => canvasContainer!.appendChild(svg))
        })
        .then(() => textRender(page, viewport))
    }

    // 다수 페이지 렌더링
    const renderPages = async (pdfDoc: any) => {
      for (let num = 1; num <= pdfDoc.numPages; num++) {
        await pdfDoc.getPage(num).then(renderPage)

        if (num === pdfDoc.numPages) {
          handlePdfViewerRendering()
        }
      }
    }

    pdfjs.disableWorker = false
    pdfjs.getDocument({ data: _pdfData }).then(renderPages)
  }

  // ArrayBuffer to Base64
  const _arrayBufferToBase64 = (buffer: any) => {
    let binary = ""
    let bytes = new Uint8Array(buffer)
    let len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return binary
  }

  useEffect(() => {
    ;(async function() {
      const { pdfUrl } = await repos.Document.getDocumentPdfUrl(
        documentData.documentId
      )
      let canvasEle = document.getElementById("canvasLayer")!

      if (canvasEle && !canvasEle.hasChildNodes()) {
        void (await renderPDF(pdfUrl))
      }
    })()

    setThumbAddr()

    handleWrapperHeight()
  }, [])

  return (
    <div className={styles.vpv_container} onScroll={e => handleOnScroll(e)}>
      <div id={"pdfViewerWrapper"} className={styles.vpv_wrapper}>
        <div id={"thumbnailWrapper"} className={styles.vpv_thumbnailWrapper}>
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
                      ? "img-cloudy"
                      : ""
                  }
                />
              ))
            : "no data"}
        </div>
        <div id="canvasLayer" />
        <div id="textLayer" />
      </div>
    </div>
  )
}
