import { useState, useEffect } from "react";
import "./Main.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import { transformOnlineToLocal } from "../../utils/helpers";
import mainApi from "../../utils/MainApi";

function Main({ onlineArticles, setOnlineArticles, searchValue }) {
  const [formatedOnlineArticles, setformatedOnlineArticles] = useState(null);
  useEffect(() => {
    console.log("onlineArticles", onlineArticles);
    console.log("searchValue", searchValue);
    if (onlineArticles && searchValue) {
      const transformedArticled = transformOnlineToLocal(
        onlineArticles,
        searchValue
      );
      setformatedOnlineArticles(transformedArticled);
    }
  }, [onlineArticles, searchValue]);
  console.log("formatedOnlineArticles", formatedOnlineArticles);

  async function handleSaveClick(id, article, isClicked) {
    if (isClicked) {
      try {
        mainApi.deleteArticle(id);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await mainApi.saveArticle(article);

        const savedArticlesIndex = formatedOnlineArticles.findIndex(
          (article) => article._id === id
        );

        console.log("onlineArticles", onlineArticles);
        console.log("index", savedArticlesIndex);
        console.log("id", id);
        console.log("res", res);
        const updatedArticles = [...onlineArticles];
        updatedArticles[savedArticlesIndex]._id = res.data._id;
        updatedArticles[savedArticlesIndex].saved = true;
        setOnlineArticles([...updatedArticles]);
        return res;
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <main className="page__content">
      <NothingFound />
      <Preloader />
      <NewsCardList
        articles={formatedOnlineArticles}
        location="main"
        handleButtonClick={handleSaveClick}
      />
      <About />
      <Footer />
    </main>
  );
}

export default Main;
