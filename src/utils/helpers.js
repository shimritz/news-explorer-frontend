export const transformOnlineToLocal = (data, searchValue) => {
  return data.map((article, index) => {
    return {
      _id: article._id || index,
      image: article.urlToImage,
      title: article.title,
      date: article.publishedAt,
      text: article.description,
      source: article.author || article.source.name,
      link: article.url,
      isSavedArticlesPage: false,
      keyword: searchValue,
      saved: article.saved || false,
    };
  });
};
