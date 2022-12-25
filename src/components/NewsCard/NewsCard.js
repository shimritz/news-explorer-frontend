import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function NewsCard({
  id,
  img,
  title,
  date,
  text,
  source,
  link,
  isSavedArticlesPage,
  keyword,
}) {
  const currentUser = useContext(CurrentUserContext);
  let [isClicked, setIsClicked] = useState(false);
  let [cardId, setCardId] = useState(id);
  let [articleSaveButtonClassName, setArticleSaveButtonClassName] =
    useState("article__save-btn");

  useEffect(() => {
    if (isClicked) {
      setArticleSaveButtonClassName("article__save-btn_type_selected");
    } else {
      setArticleSaveButtonClassName("article__save-btn");
    }
  }, [isClicked]);

  async function handleSaveClick() {
    if (isClicked) {
      try {
        mainApi.deleteArticle(cardId);
      } catch (error) {
        console.error(error);
      }
      setIsClicked(false);
    } else {
      const article = {
        keyword,
        title,
        text,
        date,
        source,
        link,
        image: img,
        owner: currentUser._id,
      };
      try {
        const res = await mainApi.saveArticle(article);
        setCardId(res.data._id);
        setIsClicked(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleDeleteClick() {
    setIsClicked(true);
  }

  return (
    <div id={cardId}>
      <article className="article">
        <img className="article__image" src={img} alt="article" href={link} />
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
          <p className="article__key-word-label">{keyword}</p>
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
