import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, location, handleButtonClick }) {
  const isSavedArticlesPage = location === "saved-news";

  return (
    <div className="news-card">
      {location === "home" ? (
        <h1 className="news-card__header">Search results</h1>
      ) : (
        <div style={{ paddingTop: 32 }} />
      )}
      <section className="news-card__list">
        {articles &&
          articles.map((article) => {
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
              />
            );
          })}
      </section>
      {location === "home" ? null : (
        <button type="button" className="news-card__showMore-btn">
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
