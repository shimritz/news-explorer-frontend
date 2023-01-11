import { useState, useEffect } from "react";
import "./Main.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import { transformOnlineToLocal } from "../../utils/helpers";
import mainApi from "../../utils/MainApi";

function Main({
  onlineArticles,
  setOnlineArticles,
  searchValue,
  isNothingFoundOpen,
  isPreLoaderOpen,
  setIsSignInOpen,
}) {
  const [formatedOnlineArticles, setformatedOnlineArticles] = useState(null);
  useEffect(() => {
    if (onlineArticles && searchValue) {
      const transformedArticled = transformOnlineToLocal(
        onlineArticles,
        searchValue
      );
      setformatedOnlineArticles(transformedArticled);
    } else {
      setformatedOnlineArticles(null);
    }
  }, [onlineArticles]);

  async function handleSaveClick(id, article, isClicked) {
    if (isClicked) {
      try {
        mainApi.deleteArticle(id);
        const revertSaveArticlesIndex = formatedOnlineArticles.findIndex(
          (article) => article._id === id
        );

        const updatedArticles = [...onlineArticles];
        updatedArticles[revertSaveArticlesIndex].saved = false;
        setOnlineArticles([...updatedArticles]);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await mainApi.saveArticle(article);

        const savedArticlesIndex = formatedOnlineArticles.findIndex(
          (article) => article._id === id
        );

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
      <NothingFound isNothingFoundOpen={isNothingFoundOpen} />
      <Preloader isPreLoaderOpen={isPreLoaderOpen} />
      <NewsCardList
        articles={formatedOnlineArticles}
        location="main"
        handleButtonClick={handleSaveClick}
        setIsSignInOpen={setIsSignInOpen}
      />
      <About />
      <Footer />
    </main>
  );
}

export default Main;
