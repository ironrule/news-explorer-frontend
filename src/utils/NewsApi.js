const baseUrl = "https://nomoreparties.co/news/v2/everything";
const apiKey = "9bffc222f8114c1cb6466160d8ed635f";
const calculateDate = new Date(Date.now() - 0 * 24 * 60 * 60 * 1000);
const fromDate = `${calculateDate.getFullYear()}-${calculateDate.getMonth()}-${calculateDate.getDate()}`;
/**============================================
 *           Fetch and Check Functions
 *=============================================**/
export function request(urlLocation, options) {
  return fetch(urlLocation, options).then(checkResponse);
}

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
/**============================================
 *            Retrieve Articles
 *=============================================**/
export function getArticles(searchTerm) {
  return request(
    `${baseUrl}?q=${searchTerm}&from=${fromDate}&sortBy=popularity&pageSize=100&language=en&apiKey=${apiKey}`
  );
}
