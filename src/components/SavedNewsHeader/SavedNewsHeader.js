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
          savedArticles && savedArticles.length
        } saved articles`}
      </h1>
      {keywords && (
        <p className="savedArticles-info__key-words">
          {`By keywords: ${keywords}`}
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
