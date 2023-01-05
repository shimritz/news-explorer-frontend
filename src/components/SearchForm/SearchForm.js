import newsApi from "../../utils/NewsApi";

function SearchForm({ handleArticlesSearch, searchValue, setSearchValue }) {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await newsApi.getArticles(searchValue);
      handleArticlesSearch(res.articles);
      console.log("from searchform", res.articles);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form className="search-form" action="submit" onSubmit={handleSubmit}>
      <h1 className="search-form__title">Whats going on in the world</h1>
      <h2 className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <div className="search-form__field-wrapper">
        <input
          className="search-form__field"
          placeholder="Enter a Topic"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="submit" className="search-form__button">
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
