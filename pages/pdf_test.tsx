import React from 'react'
import Layout from 'components/Layout'
import dynamic from 'next/dist/next-server/lib/dynamic'
import { repos } from '../utils/repos'

// DocumentCard - No SSR
const ViewPdfWithoutSSR = dynamic(
  () => import('../components/body/view/ViewPdfViewer'),
  { ssr: false }
)
// Create Document Component
export default function index({ pdfUrl }) {
  return (
    <Layout title='Polaris Share'>
      <ViewPdfWithoutSSR pdfUrl={pdfUrl} />
    </Layout>
  )
}

index.getInitialProps = async () => {
  const tmpId = 'd8df9f58673047119a0eaca9e5b7d130'
  const { pdfUrl } = await repos.Document.getDocumentPdfUrl(tmpId)
  return { pdfUrl }
}
