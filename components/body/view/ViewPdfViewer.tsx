import React, { useEffect } from "react";
import * as styles from "public/static/styles/main.scss";
import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

type Type = {
  pdfUrl: string;
};

const _arrayBufferToBase64 = buffer => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
};

// pdf data get
const getPdfData = pdfUrl =>
  new Promise((resolve, reject) => {
    let url = pdfUrl.replace(/&amp;/g, "&");
    const xhtml = new XMLHttpRequest();
    xhtml.onprogress = updateProgress;
    xhtml.responseType = "arraybuffer";
    xhtml.open("GET", url, true);
    xhtml.onreadystatechange = () => {
      if (xhtml.readyState === 4) {
        // Makes sure the document is ready to parse.
        if (xhtml.status === 200) {
          // Makes sure it's found the file.
          resolve(_arrayBufferToBase64(xhtml.response));
        } else {
          reject();
        }
      }
    };

    xhtml.send(null);
  });

// update progress
const updateProgress = () => {
  /*let contentLength;
  if (e.lengthComputable) {
    contentLength = e.total;
  } else {
    contentLength = parseInt(
      e.target.getResponseHeader("content-length"),
      10
    );
  }

  $("#toolbarProgress").css(
    "width",
    Math.floor((e.loaded / contentLength) * 100) + "%"
  );*/
  // console.log(Math.floor((e.loaded / contentLength) * 100) + " %");
};

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function({ pdfUrl }: Type) {
  // PDF 렌더링
  const renderPDF = async () => {
    let canvasContainer = document.getElementById("canvasLayer");
    let pdfData = await getPdfData(pdfUrl);
    let _pdfData = atob(typeof pdfData === "string" ? pdfData : "");
    let options = { scale: 1.5 };

    // 특정 페이지 렌더링
    const renderPage = (page: any) => {
      let viewport = page.getViewport(options.scale);
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      canvasContainer!.appendChild(canvas);

      return page
        .render(renderContext)
        .then(() => page.getTextContent())
        .then(textContent => {
          const textLayerDiv = document.createElement("div");
          textLayerDiv.setAttribute("class", "textRender");
          textLayerDiv.style.zIndex = "2";
          textLayerDiv.style.height = Math.floor(viewport.height) + "px";
          textLayerDiv.style.width = Math.floor(viewport.width) + "px";

          document.getElementById("textLayer")!.appendChild(textLayerDiv);

          return pdfjs.renderTextLayer({
            enhanceTextSelection: true,
            textContent,
            container: textLayerDiv,
            viewport,
            textDivs: []
          });
        });
    };

    // 다수 페이지 렌더링
    const renderPages = async (pdfDoc: any) => {
      for (let num = 1; num <= pdfDoc.numPages; num++) {
        await pdfDoc.getPage(num).then(renderPage);
      }
    };

    pdfjs.disableWorker = true;
    pdfjs.getDocument({ data: _pdfData }).then(renderPages);
  };

  useEffect(() => {
    void renderPDF();
  }, []);

  return (
    <div className={styles.vpv_wrapper}>
      <div id="canvasLayer" />
      <div id="textLayer" />
    </div>
  );
}
