import React from "react";
// import {Button}  from "./button";
import EnglishLangIcon from "../Assets/icons/english-lang.svg";
import SwahiliLangIcon from "../Assets/icons/swahili-lang.svg";


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
            <p className="mt-5">
              We Care About You And Your Safety. Providing You With
              Comprehensive <br/>Life Insurance When You Need It The Most.
            </p>
            <div className="div mt-5">
            <button className="custom--btn me-4"><img src={EnglishLangIcon} alt="english" className="langIcon me-3"/>English</button>  <button className="custom--btn me-2"><img src={SwahiliLangIcon} alt="english" className="langIcon me-3"/>Swahili</button>  
            </div>
           
          </div>
        </div>
        <div className="carousel-item">
          <div className="info">
            <h1 className="fs-1">
              Having <span className="text-primary">Pleasant</span> Experience Whiles <br /> Enjoying <span className="text-danger">Travel Insurance</span>
            </h1>
            <p className="mt-5">
              We Care About You And Your Safety. Providing You With
              Comprehensive <br/>Life Insurance When You Need It The Most.
            </p>
            <div className="div mt-5">
            <button className="custom--btn me-2">English</button>  <button className="custom--btn me-2">Swahili</button>  
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="info">
            <h1 className="fs-1">
            <span className="text-primary">Auto Insurance</span> To Protect Your <span className="text-primary">Assets</span><br /> From Unexpected <span className="text-danger">Incidents</span>
            </h1>
            <p className="mt-5">
              We Care About You And Your Safety. Providing You With
              Comprehensive <br/>Life Insurance When You Need It The Most.
            </p>
            <div className="div mt-5">
            <button className="custom--btn me-2">English</button>  <button className="custom--btn me-2">Swahili</button>  
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="info">
            <h1 className="fs-1">
            The Most <span className="text-primary">Reliable</span> and{" "}
              <span className="text-primary">Fastest</span> Way <br />
              To Get <span className="text-danger">Insurance</span> At Your
              Finger Tips
            </h1>
            <p className="mt-5">
              We Care About You And Your Safety. Providing You With
              Comprehensive <br/>Life Insurance When You Need It The Most.
            </p>
            <div className="div mt-5">
            <button className="custom--btn me-2">English</button>  <button className="custom--btn me-2">Swahili</button>  
            </div>
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
