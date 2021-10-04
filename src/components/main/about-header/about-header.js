import Image from "next/image";
import AboutImage from "../../../images/GettyImages-926309126.jpeg";
import AboutIntro from "./intro";

const AboutHeader = ({ aboutHeader, aboutIntro }) => {
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
          <span>{aboutHeader}</span>
        </h1>
      </div>
      <AboutIntro aboutIntro={aboutIntro} />
    </>
  );
};

export default AboutHeader;
