import { useEffect, useState } from "react";
import Image from "next/image";
import AboutImage from "../../../images/GettyImages-926309126.jpeg";
import AboutIntro from "./intro";
import { FetchQueryResponse } from "../../../services/graphcms.service";

const AboutHeader = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    async function FetchData() {
      const query =
        'query MyQuery {\n  pageContent(where: {key: "about-header__title"}) {\n    id\n    content\n  }\n}\n';
      const titleResponse = await FetchQueryResponse(query);
      setTitle(titleResponse.data.pageContent.content);
      console.log(titleResponse);
    }
    FetchData();
  }, []);

  return (
    <>
      <div className="about-header__title-container">
        <div className="about-header__bg about-header__bg--gradient-1-dark">
          <div className="about_header_picture">
            <Image
              height={140}
              width={1500}
              className="about_header_bg_picture media__image media__element b-loaded is-b-loaded"
              src={AboutImage}
              alt="abstract geometrical shapes"
            />
          </div>
        </div>
        <h1 className="about-header__title">
          <span>{title}</span>
        </h1>
      </div>
      <AboutIntro />
    </>
  );
};

export default AboutHeader;
