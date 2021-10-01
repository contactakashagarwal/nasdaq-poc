import { useEffect, useState } from "react";
import { FetchQueryResponse } from "../../../services/graphcms.service";
import Director from "./director/director";

const DirectorsGrid = () => {
  const [directors, setDirectors] = useState([]);
  const [gridTitle, setGridTitle] = useState("");

  useEffect(() => {
    //fetch data from graphcms

    async function FetchData() {
      const query =
        'query MyQuery {\n  directors {\n    id\n    name\n    subheading\n    image {\n      id\n      url\n    }\n  }\n  pageContent(where: {key: "people-grid__title"}) {\n    content\n  }\n}\n';
      const response = await FetchQueryResponse(query);
      console.log(response);
      if (response) {
        if (response.data.directors.length > 0) {
          setDirectors(response.data.directors);
        }
        if (response.data.pageContent) {
          setGridTitle(response.data.pageContent.content);
        }
      }
    }
    FetchData();
  }, []);

  return (
    <div className="dg_layout">
      <div className="dg_layoutMain">
        <section className="people-grid">
          <div className="people-grid__header">
            <h1 className="peopleGridTitle">{gridTitle}</h1>
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
