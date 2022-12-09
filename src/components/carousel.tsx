import React from "react";


export default function carousel() {
  
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
           <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="info">
            <h1 className="fs-1">
              The Most <span className="text-primary">Reliable</span> and{" "}
              <span className="text-primary">Fastest</span> Way <br />
              To Get <span className="text-danger">Insurance</span> At Your
              Finger Tips
            </h1>
            <p>
              We Care About You And Your Safety. Providing You With
              Comprehensive Life Insurance When You Need It The Most.

            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="info">
            <h1 className="fs-1">
              Having Pleasant Experience Whiles <br /> Enjoying Travel Insurance
            </h1>
            <p>
              We Care About You And Your Safety. Providing You With
              Comprehensive Life Insurance When You Need It The Most.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="info">
            <h1 className="fs-1">
              Having Pleasant Experience Whiles <br /> Enjoying Travel Insurance
            </h1>
            <p>
              We Care About You And Your Safety. Providing You With
              Comprehensive Life Insurance When You Need It The Most.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="info">
            <h1 className="fs-1">
              Auto Insurance To Protect Your Assets <br /> From Unexpected
              Incidents
            </h1>
            <p>
              We Care About You And Your Safety. Providing You With
              Comprehensive Life Insurance When You Need It The Most
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
