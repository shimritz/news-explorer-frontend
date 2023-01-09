import { useState, useContext, useEffect, memo } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useLocation } from "react-router-dom";

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
  handleButtonClick,
  isSaved = false,
  setIsSignInOpen,
}) {
  const currentUser = useContext(CurrentUserContext);
  let [isClicked, setIsClicked] = useState(isSaved);
  let [articleSaveButtonClassName, setArticleSaveButtonClassName] =
    useState("article__save-btn");
  const location = useLocation();

  useEffect(() => {
    isClicked
      ? setArticleSaveButtonClassName("article__save-btn_type_selected")
      : setArticleSaveButtonClassName("article__save-btn");
  }, [isClicked]);

  async function handleDeleteClick() {
    try {
      await handleButtonClick(id);
      setIsClicked(false);
    } catch (error) {
      console.error(error);
    }
  }
  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };

  async function handleSaveClick() {
    if (!currentUser) {
      setIsSignInOpen(true);
      return;
    }

    try {
      await handleButtonClick(
        id,
        {
          keyword,
          title,
          text,
          date,
          source,
          link,
          image: img,
          owner: currentUser._id,
        },
        isClicked
      );

      const revertClicked = !isClicked;
      setIsClicked(revertClicked);
    } catch (error) {
      console.error(error);
    }
  }

  const buttonAction =
    location.pathname === "/saved-news" ? handleDeleteClick : handleSaveClick;

  return (
    <article className="article">
      <img className="article__image" src={img} alt="article" />
      {isSavedArticlesPage ? (
        <button
          type="button"
          className="article__delete-btn"
          second_data-hover="Remove from saved"
          aria-label="Delete article"
          onClick={buttonAction}
        />
      ) : (
        <button
          type="button"
          className={articleSaveButtonClassName}
          data-hover="Sign in to save articles"
          aria-label="save article"
          onClick={buttonAction}
        />
      )}
      {isSavedArticlesPage ? (
        <p className="article__key-word-label">{keyword}</p>
      ) : null}
      <div className="article__info">
        <p className="article__info_date">{formatDate(date)}</p>
        <a href={link}>
          <h2 className="article__info_title">{title}</h2>
        </a>
        <p className="article__info_text">{text}</p>
        <div className="article__footer">
          <h2 className="article__footer_source-name">{source}</h2>
        </div>
      </div>
    </article>
  );
}

export default memo(NewsCard);
