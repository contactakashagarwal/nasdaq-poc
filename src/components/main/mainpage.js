import React from "react";
import AboutHeader from "./about-header/about-header";
import BodyContent from "./body-content/body-content";
import DirectorsGrid from "./directors-grid/directors-grid";

const MainPage = () => {
  return (
    <main class="page__main">
      <div class="modal-overlay"></div>
      <div class="page__content">
        <article>
          <section>
            <AboutHeader />
            <DirectorsGrid />
            <BodyContent />
          </section>
        </article>
      </div>
    </main>
  );
};

export default MainPage;
