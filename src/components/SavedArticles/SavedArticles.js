import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";

function SavedArticles() {
  return (
    <div className="saved-articles">
      <NewsCardList />
      <Footer />
    </div>
  );
}

export default SavedArticles;
