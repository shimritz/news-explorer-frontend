import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NewsCard from "../NewsCard/NewsCard";
import { articles } from "../../utils/articles";
import mainApi from "../../utils/MainApi";

function NewsCardList({ onlineArticles, searchValue }) {
  console.log("articel", onlineArticles ? onlineArticles[0] : null);
  const [savedArticles, setSavedArticles] = useState(null);

  const location = useLocation();
  const [isSavedArticlesPage, setIsSavedArticlesPage] = useState(false);

  useEffect(() => {
    location.pathname === "/saved-news"
      ? setIsSavedArticlesPage(true)
      : setIsSavedArticlesPage(false);
  }, [location]);

  useEffect(() => {
    if (isSavedArticlesPage) {
      mainApi
        .getSavedArticles()
        .then((res) => {
          console.log("here");
          setSavedArticles(res.data);
        })
        .catch(console.error);
    } else {
      setSavedArticles(articles);
    }
  }, [isSavedArticlesPage]);

  console.log("savedArticles", savedArticles);
  console.log("isSavedArticlesPage", isSavedArticlesPage);

  return (
    <div className="news-card">
      {!isSavedArticlesPage ? (
        <h1 className="news-card__header">Search results</h1>
      ) : (
        <div style={{ paddingTop: 32 }} />
      )}
      <section className="news-card__list">
        {onlineArticles
          ? onlineArticles.map((article, index) => {
              return (
                <NewsCard
                  key={index}
                  img={article.urlToImage}
                  title={article.title}
                  date={article.publishedAt}
                  text={article.description}
                  link={article.url}
                  source={article.author}
                  isSavedArticlesPage={isSavedArticlesPage}
                  keyword={searchValue}
                  // onCardClick={onCardClick}
                />
              );
            })
          : savedArticles &&
            savedArticles.map((article) => {
              return (
                <NewsCard
                  key={article.id}
                  img={article.image}
                  title={article.title}
                  date={article.date}
                  text={article.text}
                  link={article.link}
                  source={article.source}
                  isSavedArticlesPage={isSavedArticlesPage}
                  keyword={article.keyword}
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
