import React from "react";
import "./style.scss";

const Error = () => {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">
                  404 <br />
                  not found
                </h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Sayt hozirda ishlab chiqilmoqda </h3>
                <h3>The site is currently under development</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
