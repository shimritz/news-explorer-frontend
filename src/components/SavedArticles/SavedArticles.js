import { useEffect, useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

import mainApi from "../../utils/MainApi";

function SavedArticles() {
  const [savedArticles, setSavedArticles] = useState(null);

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
      const updatedArticles = savedArticles.filter((article) => {
        return article._id !== id;
      });
      setSavedArticles(updatedArticles);
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
