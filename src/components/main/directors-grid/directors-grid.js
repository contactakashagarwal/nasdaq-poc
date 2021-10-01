import React, { useEffect, useState } from "react";
import { FetchQueryResponse } from "../../../services/graphcms.service";
import Director from "./director/director";

const DirectorsGrid = () => {
  const [directors, setDirectors] = useState([]);
  const [gridTitle, setGridTitle] = useState("");

  useEffect(async () => {
    //fetch data from graphcms
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
  }, []);

  return (
    <>
      <div class="dg_layout">
        <div class="dg_layoutMain">
          <section class="people-grid">
            <div class="people-grid__header">
              <h1 class="peopleGridTitle">{gridTitle}</h1>
              <p class="peopleGridDescription"></p>
            </div>
            <div class="people-grid__section">
              <div class="people-grid__cards peopleGridCardsLarge">
                {directors.map((director) => {
                  return <Director key={director.id} director={director} />;
                })}
              </div>
              <button class="people-grid__button">See More</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DirectorsGrid;
