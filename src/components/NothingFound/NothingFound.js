import notFoundImage from "../../assets/images/not-found_v1.png";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        className="nothing-found__image"
        src={notFoundImage}
        alt="Not found face"
      ></img>
      <h1 className="nothing-found__header">Nothing found</h1>
      <p className="nothing-found__message">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
