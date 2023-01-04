import { useEffect, useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

import mainApi from "../../utils/MainApi";

function SavedArticles({ setSavedArticles, savedArticles }) {
  useEffect(() => {
    mainApi
      .getSavedArticles()
      .then((res) => {
        console.log("res", res);
        setSavedArticles(res.data);
        // console.log(savedArticles[0]);
      })
      .catch(console.error);
  }, []);

  // const count = savedArticles.reduce(
  //   (counter, obj) => (obj._id === "0" ? (counter += 1) : counter),
  //   0
  // );

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
