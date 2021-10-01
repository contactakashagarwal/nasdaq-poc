import React, { useState, useEffect } from "react";
import { FetchQueryResponse } from "../../../services/graphcms.service";

const AboutIntro = () => {
  const [intro, setIntro] = useState();
  useEffect(async () => {
    const query =
      'query MyQuery {\n  pageContent(where: {key: "about-header__intro-copy"}) {\n    id\n    content\n  }\n}\n';
    const introResponse = await FetchQueryResponse(query);
    setIntro(introResponse.data.pageContent.content);
    console.log(introResponse);
  }, []);

  return (
    <div class="about-header__container">
      <div class="about-header__eyebrow">.</div>
      <div class="about-header__intro-copy">
        <p>{intro}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default AboutIntro;
