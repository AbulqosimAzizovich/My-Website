import React from "react";
import TypewriterComponent from "typewriter-effect";
import docs from "../../assets/images/svg/docs.svg";
import "./style.scss";

const Home = () => {
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
                  strings: [
                    "Abdulqosim",
                    " a Web developer",
                    " a Python developer",
                  ],
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
                Hi, my name is Abdulqosim and I am 19 years old. I am
                currently a 2nd year student of Tashkent University of
                Information Technologies. And in addition, I successfully
                completed the Bootcamp-Frontend course of the "Najot Ta'lim"
                training center. My current knowledge is <span>HTML 5</span>,
                <span>CSS</span>, <span>SCSS</span>, <span>Tailwind CSS</span>,
                <span>Bootstrap</span>, <span>Python</span>, <span>C</span>,
                <span>C++</span>, <span>Javascript</span>, <span>MySql</span>,
                <span>ReactJS</span>, and <span>TypeScript</span>. And I can use
                Material UI, Ant Design, Flowbite and MD bootstrap libraries. As
                for languages, I know English and Russian at an intermediate
                level.
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

            <div className="res_h flex items-center gap-[20px] flex-wrap">
              <a
                href="https://www.facebook.com/profile.php?id=61550712167541"
                className="contact__btn flex items-center gap-x-2"
              >
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
  );
};

export default Home;
