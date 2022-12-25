import { useState, useEffect } from "react";
import "./Main.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import { transformOnlineToLocal } from "../../utils/helpers";

function Main({ onlineArticles, searchValue }) {
  const [formatedOnlineArticles, setformatedOnlineArticles] = useState(null);
  console.log(onlineArticles ? onlineArticles[0] : null);
  useEffect(() => {
    if (onlineArticles && searchValue) {
      const transformetArticled = transformOnlineToLocal(
        onlineArticles,
        searchValue
      );
      console.log(transformetArticled);
      setformatedOnlineArticles(transformetArticled);
    }
  }, [onlineArticles, searchValue]);

  return (
    <main className="page__content">
      <NothingFound />
      <Preloader />
      <NewsCardList articles={formatedOnlineArticles} location="main" />
      <About />
      <Footer />
    </main>
  );
}

export default Main;
