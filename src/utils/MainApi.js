//TODO
//   createUser-register
// login
//get userBiId
//getCurrentUser
// }

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (res) => {
    console.log("res", res);
    return res.ok ? res.json() : Promise.reject(res);
  };

  saveArticle(data) {
    console.log("article to save", data);
    console.log("headers", this._headers);
    return fetch(`${this._baseUrl}/articles/`, {
      method: "POST",
      headers: this._headers,
      mode: "cors",
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/${id}`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify(id),
      mode: "cors",
    }).then(this._checkResponse);
  }

  getSavedArticles() {
    console.log("headers", this._headers);
    return fetch(`${this._baseUrl}/articles`, {
      method: "GET",
      headers: this._headers,
      mode: "cors",
    }).then(this._checkResponse);
  }

  register(email, password, name) {
    const url = `${this._baseUrl}/signup`;

    return fetch(url, {
      method: "POST",
      headers: this._headers,
      mode: "cors",
      body: JSON.stringify({ email, password, name }),
    }).then(this._checkResponse);
  }

  login(email, password) {
    const url = `${this._baseUrl}/signin`;
    console.log("url", url);

    return fetch(url, {
      method: "POST",
      headers: this._headers,
      mode: "cors",
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkResponse)
      .then((res) => {
        console.log("reeees", res);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data, jwt: res.token })
        );
        return res;
      });
  }

  setAuthorizationHeader(token) {
    this._headers["Authorization"] = "Bearer " + token;
  }
}

const mainApi = new MainApi({
  // baseUrl: "https://api.news-explorer-sz.students.nomoredomainssbs.ru",
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
