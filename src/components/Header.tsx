import Link from "next/link"
import Image from "next/image"
import logo from "@public/logos/logo/full-color/logo.svg"
import invertedLogo from "@public/logos/logo/inverted/logo.svg"

const headerLinks = {
  Services: "/",
  "About Us": "/",
  Locations: "/",
}

export const Header: React.FC = () => (
  <div className="header" data-hook="header">
    <div
      className="collapse navbar-collapse header__navbar-collapse d-md-none"
      id="navbar-collapse"
      data-hook="navbar-collapse"
    >
      <ul className="nav flex-column align-items-center navbar-collapse__nav">
        {Object.keys(headerLinks).map((key) => (
          <li key={key} className="nav-item mb-3">
            <Link href="/">
              <a className="nav-link text-white-100 h4">{key}</a>
            </Link>
          </li>
        ))}

        <li className="nav-item">
          <Link href="/">
            <a className="nav-link text-white-100 h4">Log in</a>
          </Link>
        </li>
      </ul>
    </div>

    <nav className="navbar navbar-expand-md header__navbar">
      <div className="container-xl h-100 header__container">
        <div className="app-logo app-logo_size-md">
          <a className="h-100" href="/">
            <Image src={logo} alt="OneVet logo" />
          </a>
        </div>
        <div className="app-logo app-logo_size-md header__app-logo header__app-logo_mobile">
          <a className="h-100" href="/">
            <Image src={invertedLogo} alt="OneVet logo" />
          </a>
        </div>

        <div className="d-none d-md-flex ml-auto">
          <ul className="nav align-items-center">
            {Object.keys(headerLinks).map((key) => (
              <li key={key} className="nav-item ">
                <Link href="/">
                  <a className="nav-link">{key}</a>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/">
            <a className="btn btn-light px-5 ml-3">Log in</a>
          </Link>
        </div>

        <button
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler header__navbar-toggler ml-auto collapsed p-2 mr-n2"
          data-hook="navbar-toggler"
          data-target="#navbar-collapse"
          data-toggle="collapse"
          type="button"
        >
          <i className="fal fa-bars fa-lg text-secondary navbar-toggler__bars"></i>
          <i className="fal fa-times fa-2x text-white-100 navbar-toggler__times"></i>
        </button>
      </div>
    </nav>
  </div>
)

export default Header
