import { React, useState } from "react";
import "./Main.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

function Main({ isPreLoaderOpen, isNothingFoundOpen }) {
  return (
    <main className="page__content">
      <NothingFound isNothingFoundOpen={isNothingFoundOpen} />
      <Preloader isPreLoaderOpen={isPreLoaderOpen} />
      <NewsCardList />
      <About />
      <Footer />
    </main>
  );
}

export default Main;
