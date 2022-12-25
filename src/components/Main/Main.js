import { React } from "react";
import "./Main.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

function Main({ onlineArticles, searchValue }) {
  return (
    <main className="page__content">
      <NothingFound />
      <Preloader />
      <NewsCardList onlineArticles={onlineArticles} searchValue={searchValue} />
      <About />
      <Footer />
    </main>
  );
}

export default Main;
