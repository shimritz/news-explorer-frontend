import notFoundImage from "../../assets/images/not-found_v1.png";

function NothingFound({ isNothingFoundOpen }) {
  return (
    <div
      className={isNothingFoundOpen ? "nothing-found" : "nothing-found_hidden"}
    >
      <img
        className="nothing-found__image"
        src={notFoundImage}
        alt="Not found face"
      ></img>
      <h2 className="nothing-found__header">Nothing found</h2>
      <p className="nothing-found__message">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
