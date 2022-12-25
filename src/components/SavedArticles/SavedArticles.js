import React, { useEffect } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";

import mainApi from "../../utils/MainApi";

function SavedArticles() {
  // const [token, setToken] = React.useState(localStorage.getItem("jwt"));
  // useEffect(() => {
  //   Mainapi.getSavedArticles(token);
  // }, []);

  return (
    <div className="saved-articles">
      <NewsCardList />
      <Footer />
    </div>
  );
}

export default SavedArticles;
