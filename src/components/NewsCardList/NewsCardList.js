import { useState } from "react";
import { memo } from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, location, handleButtonClick }) {
  console.log("NewsCardList", "rendered");
  const isSavedArticlesPage = location === "saved-news";
  const [cardsToShow, setCardsToShow] = useState(3);

  const handleShowmore = () => {
    setCardsToShow(cardsToShow + 3);
  };

  return (
    <div className="news-card">
      {location === "home" ? (
        <h1 className="news-card__header">Search results</h1>
      ) : (
        <div style={{ paddingTop: 32 }} />
      )}
      <section className="news-card__list">
        {articles &&
          // articles.map((article) => {
          articles.slice(0, cardsToShow).map((article) => {
            return (
              <NewsCard
                key={article._id}
                id={article._id}
                img={article.image}
                title={article.title}
                date={article.date}
                text={article.text}
                link={article.link}
                source={article.source}
                isSavedArticlesPage={isSavedArticlesPage}
                keyword={article.keyword}
                handleButtonClick={handleButtonClick}
                isSaved={article.saved}
              />
            );
          })}
      </section>
      {!isSavedArticlesPage ? (
        <div className="news-card__showMore-btn-wrapper">
          <button
            type="button"
            className="news-card__showMore-btn"
            onClick={handleShowmore}
          >
            Show More
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default memo(NewsCardList);
