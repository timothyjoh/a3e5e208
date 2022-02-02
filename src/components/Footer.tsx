import Link from "next/link"
import Image from "next/image"
import invertedLogo from "@public/logos/logo/inverted/logo.svg"

export const Footer: React.FC = () => (
  <footer className="footer bg-green-dark-100">
    <div className="container-xl">
      <div className="row">
        <div className="col-12 col-lg-3 mb-4">
          <div className="app-logo app-logo_size-md header__app-logo header__app-logo_mobile">
            <Link href="/">
              <a className="h-100">
                <Image src={invertedLogo} alt="OneVet logo" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 mb-4">
          <ul className="row no-gutters list-unstyled mb-0">
            <li className="col-6 mb-2 mb-md-3">
              <Link href="/">
                <a className="text-decoration-none footer__link">About Us</a>
              </Link>
            </li>
            <li className="col-6 mb-2 mb-md-3">
              <Link href="/">
                <a className="text-decoration-none footer__link">Terms of Service</a>
              </Link>
            </li>
            <li className="col-6 mb-2 mb-md-3">
              <Link href="/">
                <a className="text-decoration-none footer__link">Contact Us</a>
              </Link>
            </li>
            <li className="col-6 mb-2 mb-md-3">
              <Link href="/">
                <a className="text-decoration-none footer__link">Privacy Policy</a>
              </Link>
            </li>
            <li className="col-6">
              <Link href="/">
                <a className="text-decoration-none footer__link">Careers</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-7 col-md-6 col-lg-4 col-xl-3 offset-xl-1">
          <ul className="list-unstyled mb-3">
            <li className="d-inline-block mr-2">
              <Link href="/">
                <a className="footer__social-link" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Link>
            </li>
            <li className="d-inline-block mr-2">
              <Link href="/">
                <a className="footer__social-link" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
            </li>
            <li className="d-inline-block">
              <Link href="/">
                <a className="footer__social-link" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </Link>
            </li>
          </ul>
          <p className="text-white-100 accent-2 mb-0">© Copyright One Vet Inc 2022</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
