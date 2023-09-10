import React from "react";
import TypewriterComponent from "typewriter-effect";
import docs from "../../assets/images/svg/docs.svg";
import "./style.scss";

const Home = () => {
  const downloadFile = () => {
    window.location.href = { document };
  };
  return (
    <div className="container">
      <div className="intro__wrapper">
        <div>
          <p className="intro__general">Hi There 👋👋👋</p>
          <div className="home__title">
            <h2>I am </h2>
            <span>
              <TypewriterComponent
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: ["Abdulqosim", " a Web developer", " a Python developer"],
                }}
              />
            </span>
          </div>
          <p className="general__end">
            C, C++, Python, MySql, Java-Script, HTML5, SCSS, CSS, React...
          </p>
        </div>

        <div className="home__general">
          <div className="left">
            <div className="intro__title">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                libero omnis quam odit! Laudantium eius nulla non sed aliquam!
                Provident dolor, placeat iste, et velit voluptatum nisi nostrum
                a non deserunt dignissimos voluptatem excepturi reiciendis cum
                ut distinctio nemo quam assumenda eos sunt? Nam dolores sunt
                nemo deleniti officia vitae totam ab, eius officiis quo? Nobis
                eos tempora voluptatum quasi fugit molestias est rerum iure
                optio aliquid, id, hic debitis, culpa delectus consequuntur
                natus nihil voluptatem asperiores impedit eum.
              </p>
            </div>

            <div className="home__buttons">
              <a
                href="https://drive.google.com/uc?export=download&id=1s7BU_2qZqLHlkqomT1BMvFhuwKvrvQJB"
                download
                className="home__download--btn"
              >
                <img src={docs} alt="" />
                <span>Download CV</span>
              </a>
              <button className="home__btn">
                <p>More</p>
              </button>
            </div>
          </div>

          <div className="right">
            <h3>Find Me On</h3>

            <div>
              <div className="flex items-center gap-[20px] flex-wrap">
                <a href="" className="contact__btn flex items-center gap-x-2">
                  <i className="bx bxl-facebook-circle text-[28px] text-sky-600"></i>
                  <p className="contact">Facebook</p>
                </a>

                <a
                  href="https://t.me/SD6639"
                  className="contact__btn flex items-center gap-x-2"
                >
                  <i className="bx bxl-telegram text-[28px] text-sky-400"></i>
                  <p className="contact">Telegram</p>
                </a>

                <a
                  href="https://www.instagram.com/developer_azizovich/#"
                  className="contact__btn flex items-center gap-x-2"
                >
                  <i className="bx bxl-instagram text-[28px] text-[#c92bb7]"></i>
                  <p className="contact">Instagram</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/abdulqosim-azizovich-0a1202282/"
                  className="contact__btn flex items-center gap-x-2"
                >
                  <i className="bx bxl-linkedin text-[28px] text-sky-600"></i>
                  <p className="contact">Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
