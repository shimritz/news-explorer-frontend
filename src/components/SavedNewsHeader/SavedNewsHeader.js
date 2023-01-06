import { orginizeKeywords } from "../../utils/keywords";

function SavedNewsHeader({ currentUser, savedArticles }) {
  let keywords = [];
  if (savedArticles) {
    keywords = orginizeKeywords(savedArticles);
  }

  return (
    <div className="savedArticles-info">
      <p className="savedArticles-info__header">Saved articles</p>
      <h1 className="savedArticles-info__display-amount">
        {`${currentUser.name}, you have ${
          savedArticles ? savedArticles.length : 0
        } saved articles`}
      </h1>
      {keywords && keywords.length > 0 && (
        <p className="savedArticles-info__key-words">
          {`By keywords: ${keywords}`}
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
