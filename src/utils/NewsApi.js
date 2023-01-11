class NewsApi {
  constructor({ baseUrl, headers, key }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.key = key;
    this.time = new Date();
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };

  _getLastWeek = () => {
    return new Date(
      this.time.getFullYear(),
      this.time.getMonth(),
      this.time.getDate() - 7
    ).getTime();
  };

  getArticles = (query) => {
    const lastWeek = this._getLastWeek();
    const url = `${
      this.baseUrl
    }?q=${query}&from=${lastWeek}&to=${this.time.getTime()}&pageSize=100&apiKey=${
      this.key
    }`;

    return fetch(url).then(this._checkResponse);
  };
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  headers: {
    "Content-Type": "application/json",
  },
  key: process.env.REACT_APP_NEWS_API_KEY,
});

export default newsApi;
