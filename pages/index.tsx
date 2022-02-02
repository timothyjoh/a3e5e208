import type { NextPageWithLayout } from "@src/types/NextPageWithLayout"

import { MainLayout } from "@src/layouts/MainLayout"
import "@styles/index.module.scss"

export const Index: NextPageWithLayout = () => {
  return (
    <div id="homepage">
      <div className="container-fluid section heading-section">
        <div className="row no-gutters heading__row mb-3">
          <h1 className="responsive-font section__header">A New Breed of Pet Care</h1>
          <p className="sub-headline responsive-font section__sub-headline responsive-font">
            Whenever you need it. In person, online, on the fly.
          </p>
          <p className="body-1 responsive-font section__header-info">
            Our expert caregivers and technology provide personalized veterinary care designed
            around how you and your pet live today.
          </p>
        </div>

        <div className="content__row text-center">
          <button
            className="btn btn-primary px-5"
            data-toggle="modal"
            data-target="#location--book-now-modal"
          >
            Book Now
          </button>
        </div>

        <div className="container-xl h-100">
          <div className="card card_main h-100">
            <div className="row no-gutters h-100">
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="card__img-container"></div>
              </div>

              <div className="col-12 col-lg-6 col-xl-5">
                <div className="card-body">
                  <h3 className="mb-3 text-center text-lg-left responsive-font">
                    Open 7 Days a Week
                  </h3>

                  <h4 className="mb-3 text-center text-lg-left responsive-font">
                    Routine & Urgent Care
                  </h4>

                  <p className="body-1 text-gray-dark-100 mb-4 text-center text-lg-left">
                    Mon – Fri: 8am – 6pm <br />
                    Sat – Sun: 9am – 5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section services-section">
        <div className="row no-gutters heading__row text-center">
          <div className="col-12">
            <h2 className="responsive-font section__subheader">One Vet Services</h2>
            <p className="body-1 responsive-font section__header-info">
              We want pet parenthood to be as easy as a walk in the park
            </p>
          </div>
        </div>
        <div className="row no-gutters content__row">
          <div className="col-12 col-md-7 col-lg-4 section-card services-section__section-card order-3">
            <div className="row no-gutters section-card__row">
              <div className="col-12">
                <i className="graphics_primary-cross"></i>
                <h4 className="responsive-font homepage__h4 section-card__header">Instant Care</h4>
                <p className="body-1 responsive-font section-card__text">
                  Fast, immediate care and support for all the curveballs life throws at your pet.
                </p>
              </div>
              <div className="col-9 col-sm-8 col-md-7 col-lg-10 section-card__btns-block">
                <p className="body-1 text-muted">Coming Soon</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-4 section-card services-section__section-card order-1">
            <div className="row no-gutters section-card__row">
              <div className="col-12">
                <i className="graphics_primary-clinic"></i>
                <h4 className="responsive-font homepage__h4 section-card__header ">
                  In-Person Care
                </h4>
                <p className="body-1 responsive-font section-card__text">
                  Our Pet Care Centers and care teams offer convenient hours, online scheduling and
                  transparent pricing.
                </p>
              </div>
              <div className="col-9 col-sm-8 col-md-7 col-lg-10 section-card__btns-block">
                <p className="body-1 text-muted">Coming Soon</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-4 section-card services-section__section-card order-2">
            <div className="row no-gutters section-card__row">
              <div className="col-12">
                <i className="graphics_primary-laptop"></i>
                <h4 className="responsive-font homepage__h4 section-card__header">Virtual Care</h4>
                <p className="body-1 responsive-font section-card__text">
                  Access your expert medical team from anywhere. A trusted veterinarian is just a
                  video call away.
                </p>
              </div>
              <div className="col-9 col-sm-8 col-md-7 col-lg-10 section-card__btns-block">
                <p className="body-1 text-muted">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section pet-care-section">
        <div className="row no-gutters heading__row">
          <h2 className="responsive-font section__subheader ">Pet Care: The Way It Should Be</h2>
        </div>

        <div className="row no-gutters content__row">
          <div className="col-12 col-md-6 col-lg-4 section-card pet-care-section__section-card">
            <i className="graphics_secondary-medal"></i>
            <h4 className="responsive-font homepage__h4 section-card__header">
              Expert Medical Care
            </h4>
            <p className="body-1 responsive-font section-card__text">
              Medical expertise combined with technology that is designed to create a care
              experience unlike any other.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 section-card pet-care-section__section-card">
            <i className="graphics_secondary-space"></i>
            <h4 className="responsive-font homepage__h4 section-card__header">
              Happy Spaces & Places
            </h4>
            <p className="body-1 responsive-font section-card__text">
              Beautifully designed, calming spaces. Wait less. See your veterinarian more at
              convenient hours.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 section-card pet-care-section__section-card">
            <i className="graphics_secondary-location"></i>
            <h4 className="responsive-font homepage__h4 section-card__header">
              When & Where You Need Us
            </h4>
            <p className="body-1 responsive-font section-card__text">
              Pet care powered by technology. Your care team is available 24/7. We keep you in the
              know at every step.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 section-card pet-care-section__section-card">
            <i className="graphics_secondary-award"></i>
            <h4 className="responsive-font homepage__h4 section-card__header">Your One Team</h4>
            <p className="body-1 responsive-font section-card__text">
              We became veterinarians to help pets. Then we built One Vet to do it better.
              Transforming pet care by designing it around you.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 section-card pet-care-section__section-card">
            <i className="graphics_secondary-heart"></i>
            <h4 className="responsive-font homepage__h4 section-card__header">
              Part of the Family
            </h4>
            <p className="body-1 responsive-font section-card__text">
              The One Vet care team takes the time to get to know you. We incorporate best-in-class
              clinical thinking with a thoughtful, personalized approach.
            </p>
          </div>
        </div>
      </div>

      <div id="one-plus" className="container-fluid section membership-section">
        <div className="row no-gutters heading__row">
          <div className="col-12">
            <h2 className="responsive-font section__subheader mb-2">Want all the Purrrks?</h2>
            <h2 className="responsive-font section__subheader position-relative">
              <div className="membership">onePlus</div> is where it’s at
              <span className="membership-section__offer-badge bg-gold-100">
                $500 in
                <br />
                total value
              </span>
            </h2>
            <p className="body-1 responsive-font section__header-info">
              Unleash our benefits at just $195/year
            </p>
          </div>
          <div className="col-8 col-md-4 mt-3">
            <button
              className="btn btn-primary px-5"
              data-toggle="modal"
              data-target="#one-plus-membership-modal"
            >
              Join Now
            </button>
          </div>
        </div>

        <div className="row no-gutters content__row">
          <div className="col-12">
            <ul className="membership-section__list">
              <li className="list-item">
                <div className="list-item__icon-block">
                  <div className="rounded-circle bg-green-dark-100 d-flex align-items-center justify-content-center list-item__icon">
                    <i className="far fa-check fa-sm text-white-100"></i>
                  </div>
                </div>
                <div className="list-item__text-block">
                  <h4 className="responsive-font homepage__h4 text-block__header mb-0">
                    1 Annual Preventative Diagnostics Package{" "}
                    <span className="body-1 text-green-dark-85">($335 value)</span>
                  </h4>
                </div>
              </li>
              <li className="list-item">
                <div className="list-item__icon-block">
                  <div className="rounded-circle bg-green-dark-100 d-flex align-items-center justify-content-center list-item__icon">
                    <i className="far fa-check fa-sm text-white-100"></i>
                  </div>
                </div>
                <div className="list-item__text-block item__text-block">
                  <h4 className="responsive-font homepage__h4 text-block__header mb-0">
                    1 Annual In-Person Exam{" "}
                    <span className="body-1 text-green-dark-85">($65 value)</span>
                  </h4>
                </div>
              </li>
              <li className="list-item">
                <div className="list-item__icon-block">
                  <div className="rounded-circle bg-green-dark-100 d-flex align-items-center justify-content-center list-item__icon">
                    <i className="far fa-check fa-sm text-white-100"></i>
                  </div>
                </div>
                <div className="list-item__text-block item__text-block">
                  <h4 className="responsive-font homepage__h4 text-block__header mb-0">
                    2 15-Minute Virtual Care Visits{" "}
                    <span className="body-1 text-green-dark-85">($60 total value)</span>
                  </h4>
                </div>
              </li>
              <li className="list-item">
                <div className="list-item__icon-block">
                  <div className="rounded-circle bg-green-dark-100 d-flex align-items-center justify-content-center list-item__icon">
                    <i className="far fa-check fa-sm text-white-100"></i>
                  </div>
                </div>
                <div className="list-item__text-block item__text-block">
                  <h4 className="responsive-font homepage__h4 text-block__header mb-0">
                    1 One Vet Welcome Swag Package
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid section quotes-section">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          data-interval="0"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-item__content">
                <blockquote className="blockquote text-center">
                  <p className="label responsive-font">Word around the park</p>
                  <p className="body-1 responsive-font carousel__text pb-4 mb-0">
                    “Some people talk to animals. Not many listen though. That’s the problem.”
                  </p>
                  <footer className="blockquote-footer">A.A. Milne</footer>
                </blockquote>
                <div className="carousel-item__rating">
                  <i className="fas fa-star text-gold-100"></i>
                  <i className="fas fa-star text-gold-100"></i>
                  <i className="fas fa-star text-gold-100"></i>
                  <i className="fas fa-star text-gold-100"></i>
                  <i className="fas fa-star text-gold-100"></i>
                </div>
              </div>
            </div>
          </div>

          <a
            className="btn carousel-btn carousel-btn-prev d-none"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <i className="fal fa-chevron-left"></i>
          </a>
          <a
            className="btn carousel-btn carousel-btn-next d-none"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <i className="fal fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

Index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Index
