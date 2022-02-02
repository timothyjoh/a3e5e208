import Header from "@src/components/Header"
import Footer from "@src/components/Footer"

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
