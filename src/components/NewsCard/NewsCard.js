// const { date, title, text, source, image } = require("../../utils/articles");

import { useState } from "react";

function NewsCard({
  img,
  title,
  date,
  text,
  source,
  isSavedArticlesPage,
  keywordLable,
}) {
  let [isClicked, setIsClicked] = useState(false);
  function handleSaveClick() {
    // setIsClicked(true);
    setIsClicked(!isClicked);
  }

  function handleDeleteClick() {
    setIsClicked = true;
  }

  const articleSaveButtonClassName = ` ${
    isClicked ? "article__save-btn_type_selected" : "article__save-btn"
  }`;

  return (
    <div id="article-template">
      <article className="article">
        <img className="article__image" src={img} alt="article image" />
        {/* if isSavedArticlesPage true then add button x otherwise add button y */}
        {isSavedArticlesPage ? (
          <button
            type="button"
            className="article__delete-btn"
            second_data-hover="Remove from saved"
            // className="article__save-btn article__save-btn_type_selected"
            aria-label="Delete article"
            onClick={handleDeleteClick}
          />
        ) : (
          <button
            type="button"
            className={articleSaveButtonClassName}
            // className="article__save-btn_type_selected"
            data-hover="Sign in to save articles"
            // className="article__save-btn article__save-btn_type_selected"
            aria-label="save article"
            onClick={handleSaveClick}
          />
        )}
        {isSavedArticlesPage ? (
          <p className="article__key-word-label">{keywordLable}</p>
        ) : null}
        <div className="article__info">
          <p className="article__info_date">{date}</p>
          <h2 className="article__info_title">{title}</h2>
          <p className="article__info_text">{text}</p>
          <div className="article__footer">
            <h2 className="article__footer_source-name">{source}</h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default NewsCard;
