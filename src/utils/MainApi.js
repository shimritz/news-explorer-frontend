class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    // this.time = new Date();
  }
  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };

  //   _getLastWeek = () => {
  //     return new Date(
  //       this.time.getFullYear(),
  //       this.time.getMonth(),
  //       this.time.getDate() - 7
  //     ).getTime();
  //   };

  getArticles = (query) => {
    const lastWeek = this._getLastWeek();
    // const url = `${
    //   this.baseUrl
    // }?q=${query}&from=${lastWeek}&to=${this.time.getTime()}&pageSize=100&apiKey=${
    //   this.headers.authorization
    // }`;

    // return fetch(url).then(this._checkResponse);
  };
}

const api = new Api({
  baseUrl: "my-url-from-google",
  headers: {
    authorization: "my authorization jwt key",
    "Content-Type": "application/json",
  },
});

export default api;
