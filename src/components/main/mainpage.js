import React from "react";
import AboutHeader from "./about-header/about-header";
import BodyContent from "./body-content/body-content";
import DirectorsGrid from "./directors-grid/directors-grid";

const MainPage = () => {
  return (
    <main className="page__main">
      <div className="modal-overlay"></div>
      <div className="page__content">
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
