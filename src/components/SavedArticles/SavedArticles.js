import { useEffect } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

import mainApi from "../../utils/MainApi";

function SavedArticles({
  setSavedArticles,
  savedArticles,
  onlineArticles,
  setOnlineArticles,
}) {
  useEffect(() => {
    mainApi
      .getSavedArticles()
      .then((res) => {
        setSavedArticles(res.data);
      })
      .catch(console.error);
  }, []);

  function handleDeleteClick(id) {
    try {
      mainApi.deleteArticle(id);
      const updatedSavedArticles = savedArticles?.filter((article) => {
        return article._id !== id;
      });
      setSavedArticles(updatedSavedArticles);
      const updatedOnlineArticles = onlineArticles?.map((article) => {
        if (article._id === id && article.saved) {
          article.saved = false;
        }
        return article;
      });
      setOnlineArticles(updatedOnlineArticles);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="saved-articles">
      <NewsCardList
        articles={savedArticles}
        location="saved-news"
        setArticles={setSavedArticles}
        handleButtonClick={handleDeleteClick}
      />
      <Footer />
    </div>
  );
}

export default SavedArticles;
