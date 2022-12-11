import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NewsCard from "../NewsCard/NewsCard";
import { articles } from "../../utils/articles";

function NewsCardList() {
  const location = useLocation();
  const [isSavedArticlesPage, setIsSavedArticlesPage] = useState(false);

  useEffect(() => {
    location.pathname === "/saved-news"
      ? setIsSavedArticlesPage(true)
      : setIsSavedArticlesPage(false);
  }, [location]);

  return (
    // <>
    <div className="news-card">
      <h1 className="news-card__header">Search results</h1>
      <section className="news-card__list">
        {articles.map((article) => {
          return (
            <NewsCard
              key={article.id}
              img={article.image}
              title={article.title}
              date={article.date}
              text={article.text}
              source={article.source}
              isSavedArticlesPage={isSavedArticlesPage}
              keywordLable={article.keywordLable}
              // onCardClick={onCardClick}
            />
          );
        })}
      </section>
      {isSavedArticlesPage ? null : (
        <button type="button" className="news-card__showMore-btn">
          Show More
        </button>
      )}
    </div>
    // </>
  );
}

export default NewsCardList;