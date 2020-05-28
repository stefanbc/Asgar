/**
 * @description Main Http class for async calls
 * @export
 * @class Http
 */
export class Http {
  /**
   * Creates an instance of Http.
   * @memberof Http
   */
  constructor() {}

  /**
   * @description Makes an async call
   * @param {string} url
   * @returns Promise with data or error
   * @memberof Http
   */
  get(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.status);
        }
      };

      xhr.open("GET", url);
      xhr.send();
    });
  }
}
