import newsApi from "../../utils/NewsApi";

function SearchForm({
  handleArticlesSearch,
  searchValue,
  setSearchValue,
  handleSearchClick,
}) {
  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (searchValue.length > 0) {
      handleSearchClick();
      try {
        const res = await newsApi.getArticles(searchValue);
        if (res.articles && res.articles.length > 0) {
          handleArticlesSearch(res.articles);
        } else {
          handleArticlesSearch(null);
        }
      } catch (error) {
        console.error(error);
      }
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
          value={searchValue}
          onChange={handleSearchValueChange}
        ></input>
        <button type="submit" className="search-form__button">
          Search
        </button>
      </div>
    </form>
  );
}
export default SearchForm;
