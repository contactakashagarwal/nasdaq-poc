import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MainPage from "../../components/main/mainpage";
import { FetchQueryResponse } from "../../services/graphcms.service";
import { event, eventUsingGa } from "../../lib/ga";
import { useEffect } from "react";

function BoardOfDirectors({
  directors,
  directorsGridTitle,
  aboutHeader,
  aboutIntro,
}) {
  useEffect(() => {
    // event({
    //   action: "Listing Board New",
    //   params: {
    //     custom: "Initialize custom event",
    //   },
    // });
    // eventUsingGa({
    //   category: "Taboola_Load",
    //   action: "Load_5000_ms",
    // });
  }, []);

  return (
    <div>
      <Header />
      <MainPage
        aboutHeader={aboutHeader}
        aboutIntro={aboutIntro}
        directors={directors}
        directorsGridTitle={directorsGridTitle}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const query =
    'query MyQuery {\n   directors {\n    id\n    name\n    subheading\n    image {\n      id\n      url\n    }\n  }\n\n  pageContents(\n    where: {key_starts_with: "board_"}\n  ) {\n    key\n    content\n  }\n}\n';
  const boardData = await FetchQueryResponse(query);
  const directorsGridTitle =
    boardData.data.pageContents.find(
      (pc) => pc.key === "board_people-grid__title"
    )?.content ?? "";
  const aboutHeader =
    boardData.data.pageContents.find(
      (pc) => pc.key === "board_about-header__title"
    )?.content ?? "";
  const aboutIntro =
    boardData.data.pageContents.find(
      (pc) => pc.key === "board_about-header__intro-copy"
    )?.content ?? "";

  return {
    props: {
      directors: boardData.data.directors,
      directorsGridTitle,
      aboutHeader,
      aboutIntro,
    },
    revalidate: 60,
  };
}

export default BoardOfDirectors;
