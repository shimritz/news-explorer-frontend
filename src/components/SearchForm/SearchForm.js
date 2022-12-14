function SearchForm({ handleSearchClick }) {
  return (
    <form className="search-form">
      <h1 className="search-form__title">Whats going on in the world</h1>
      <h2 className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <div className="search-form__field-wrapper">
        <input
          className="search-form__field"
          placeholder="Enter a Topic"
        ></input>
        <button
          type="submit"
          className="search-form__button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {/* <input
        type="email"
        placeholder="Enter your email address"
        class="footer__form-input"
      />
      <button class="footer__form-button button button_type_dark">
        Join
        <img
          src="./images/tiny-arrow.png"
          alt="arrow icon"
          class="footer__button-icon"
        />
      </button> */}
    </form>
  );
}
export default SearchForm;
