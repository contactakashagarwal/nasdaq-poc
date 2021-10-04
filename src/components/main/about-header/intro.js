const AboutIntro = ({ aboutIntro }) => {
  return (
    <div className="about-header__container">
      <div className="about-header__eyebrow">.</div>
      <div className="about-header__intro-copy">
        <p>{aboutIntro}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default AboutIntro;
