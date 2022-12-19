import { React } from "react";
import "./Main.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Main() {
  return (
    <main className="page__content">
      {/* //TODO: after search Click  */}

      <NothingFound />
      <Preloader />
      <NewsCardList />
      <About />
      <Footer />
    </main>
  );
}

export default Main;
