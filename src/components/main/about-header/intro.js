import { useState, useEffect } from "react";
import { FetchQueryResponse } from "../../../services/graphcms.service";

const AboutIntro = () => {
  const [intro, setIntro] = useState();
  useEffect(() => {
    async function FetchData() {
      const query =
        'query MyQuery {\n  pageContent(where: {key: "about-header__intro-copy"}) {\n    id\n    content\n  }\n}\n';
      const introResponse = await FetchQueryResponse(query);
      setIntro(introResponse.data.pageContent.content);
      console.log(introResponse);
    }
    FetchData();
  }, []);

  return (
    <div className="about-header__container">
      <div className="about-header__eyebrow">.</div>
      <div className="about-header__intro-copy">
        <p>{intro}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default AboutIntro;
