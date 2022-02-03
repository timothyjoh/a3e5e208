import Head from "next/head"
import Header from "@src/components/Header"
import Footer from "@src/components/Footer"

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/40753faccc.js"
          crossOrigin="anonymous"
          key="fontawesome"
          async
        ></script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
