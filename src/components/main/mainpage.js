import React from "react";
import AboutHeader from "./about-header/about-header";
import BodyContent from "./body-content/body-content";
import DirectorsGrid from "./directors-grid/directors-grid";

const MainPage = ({
  directors,
  directorsGridTitle,
  aboutHeader,
  aboutIntro,
}) => {
  return (
    <main className="page__main">
      <div className="modal-overlay"></div>
      <div className="page__content">
        <article>
          <section>
            <AboutHeader aboutHeader={aboutHeader} aboutIntro={aboutIntro} />
            <DirectorsGrid
              directors={directors}
              directorsGridTitle={directorsGridTitle}
            />
            <BodyContent />
          </section>
        </article>
      </div>
    </main>
  );
};

export default MainPage;
