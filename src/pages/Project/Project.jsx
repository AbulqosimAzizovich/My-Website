import React from "react";
import mail from "../../assets/images/svg/mail.svg"
import "./style.scss";

const Project = () => {
  return (
    <>
      <div className="container">
        <div className="project__wrapper">
          <div className="pr__title">
            <h1>MY PROJECT</h1>
            <p>Latest Project</p>
          </div>

          <div className="project__list">
            <div className="project__list--card">
              <div className="project__list--card-image">
                <img src="" alt="" />
              </div>

              <h3>Lorem ipsum dolor sit amet.</h3>

              <button>
                <span>View Details</span>
              </button>
            </div>

            <div className="project__list--card">
              <div className="project__list--card-image">
                <img src="" alt="" />
              </div>

              <h3>Lorem ipsum dolor sit amet.</h3>

              <button>
                <span>View Details</span>
              </button>
            </div>

            <div className="project__list--card">
              <div className="project__list--card-image">
                <img src="" alt="" />
              </div>

              <h3>Lorem ipsum dolor sit amet.</h3>

              <button>
                <span>View Details</span>
              </button>
            </div>
          </div>

          <div className="more__projects">
            <div className="more__projects--about">
              <h4>Have any project in mind?</h4>
              <p>I’m available for freelancing</p>
            </div>
            <div className="more__projects--buttons">
              <button className="more__projects--buttons-btn1">
                <span>More Projects</span>
              </button>
              <button className="more__projects--buttons-btn2">
                <img src={mail} alt="Mail" />
                <span>Email Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
