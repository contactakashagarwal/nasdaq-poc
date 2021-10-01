import React from "react";
import Image from "next/image";

const Director = ({ director }) => {
  return (
    <section class="personCard">
      <header class="personCardHeader">
        <div class="personCardImageContainer">
          <figure class="personCardImage">
            <a class="imageAnchor" href="/about/our-people/melissa-m.-arnoldi">
              <div class="dgPicture">
                <Image
                  class="directorImage"
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

      <div class="personCardInfo">
        <h2 class="personCardName">
          <a class="imageAnchor" href="/about/our-people/melissa-m.-arnoldi">
            {" "}
            <span>{director.name}</span>
          </a>{" "}
        </h2>
        <h3 class="personCardSubhead">{director.subheading}</h3>
      </div>
    </section>
  );
};

export default Director;
