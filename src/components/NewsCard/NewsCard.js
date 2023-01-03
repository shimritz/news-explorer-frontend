import { useState, useContext, useEffect } from "react";
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
}) {
  const currentUser = useContext(CurrentUserContext);
  let [isClicked, setIsClicked] = useState(isSaved);
  // let [cardId, setCardId] = useState(id);
  let [articleSaveButtonClassName, setArticleSaveButtonClassName] =
    useState("article__save-btn");
  const location = useLocation();

  useEffect(() => {
    if (isClicked) {
      console.log("isClicked reactive", isClicked);
      console.log("id reactive", id);
    }

    isClicked
      ? setArticleSaveButtonClassName("article__save-btn_type_selected")
      : setArticleSaveButtonClassName("article__save-btn");
  }, [isClicked]);

  // async function handleSaveClick() {
  //   if (isClicked) {
  //     try {
  //       mainApi.deleteArticle(cardId);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setIsClicked(false);
  //   } else {
  //     const article = {
  //       keyword,
  //       title,
  //       text,
  //       date,
  //       source,
  //       link,
  //       image: img,
  //       owner: currentUser._id,
  //     };
  //     try {
  //       const res = await mainApi.saveArticle(article);
  //       setCardId(res.data._id);
  //       setIsClicked(true);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }

  async function handleDeleteClick() {
    console.log("delete clicked");
    try {
      await handleButtonClick(id);
      setIsClicked(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSaveClick() {
    console.log("handleSaveClick clicked");
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
      // console.log("res", res);
      // if (res) {
      // setCardId(res.data._id);
      const revertClicked = !isClicked;
      setIsClicked(revertClicked);
      // }
    } catch (error) {
      console.error(error);
    }
  }

  const buttonAction =
    location.pathname === "/saved-news" ? handleDeleteClick : handleSaveClick;

  return (
    // <div id={cardId}>
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
          onClick={buttonAction}
        />
      ) : (
        <button
          type="button"
          className={articleSaveButtonClassName}
          // className="article__save-btn_type_selected"
          data-hover="Sign in to save articles"
          // className="article__save-btn article__save-btn_type_selected"
          aria-label="save article"
          onClick={buttonAction}
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
    // </div>
  );
}

export default NewsCard;
