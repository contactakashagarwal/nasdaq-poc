import Image from "next/image";

const Director = ({ director }) => {
  return (
    <section className="personCard">
      <header className="personCardHeader">
        <div className="personCardImageContainer">
          <figure className="personCardImage">
            <a
              className="imageAnchor"
              href="/about/our-people/melissa-m.-arnoldi"
            >
              <div className="dgPicture">
                <Image
                  className="directorImage"
                  src={director.image.url}
                  alt={director.name}
                  height={300}
                  width={300}
                />
              </div>
            </a>{" "}
          </figure>
        </div>
      </header>

      <div className="personCardInfo">
        <h2 className="personCardName">
          <a
            className="imageAnchor"
            href="/about/our-people/melissa-m.-arnoldi"
          >
            {" "}
            <span>{director.name}</span>
          </a>{" "}
        </h2>
        <h3 className="personCardSubhead">{director.subheading}</h3>
      </div>
    </section>
  );
};

export default Director;
