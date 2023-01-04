function SavedNewsHeader({ currentUser, savedArticles }) {
  console.log("saved", savedArticles);
  let keywords = [];
  if (savedArticles) {
    for (let i = 0; i < savedArticles.length; i++) {
      // console.log(i, savedArticles[i].keyword);
      keywords.push(savedArticles[i].keyword);
    }
  }
  console.log("keywords", keywords);

  return (
    <div className="savedArticles-info">
      <p className="savedArticles-info__header">Saved articles</p>
      <h1 className="savedArticles-info__display-amount">
        {`${currentUser.name}, you have ${
          savedArticles && savedArticles.length
        } saved articles`}
      </h1>
      <p className="savedArticles-info__key-words">
        {`By keywords: ${keywords.join(", ")}`}
      </p>
    </div>
  );
}

export default SavedNewsHeader;
