import Director from "./director/director";

const DirectorsGrid = ({ directors, directorsGridTitle }) => {
  return (
    <div className="dg_layout">
      <div className="dg_layoutMain">
        <section className="people-grid">
          <div className="people-grid__header">
            <h1 className="peopleGridTitle">{directorsGridTitle}</h1>
            <p className="peopleGridDescription"></p>
          </div>
          <div className="people-grid__section">
            <div className="people-grid__cards peopleGridCardsLarge">
              {directors.map((director) => {
                return <Director key={director.id} director={director} />;
              })}
            </div>
            <button className="people-grid__button">See More</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DirectorsGrid;
