/**
 * @description Class for working with local storage
 * @export
 * @class Storage
 */
export class Storage {
  /**
   * Creates an instance of Storage.
   * @memberof Storage
   */
  constructor() {
    this.storage = window.localStorage;
  }

  /**
   * @description Gets an item from local storage
   * @param {string} item
   * @returns item parsed from local storage
   * @memberof Storage
   */
  get(item) {
    return JSON.parse(this.storage.getItem(item));
  }

  /**
   * @description Sets an item in local storage
   * @param {string} item
   * @param {*} value
   * @memberof Storage
   */
  set(item, value) {
    this.storage.setItem(item, JSON.stringify(value));
  }

  /**
   * @description Removes and item from local storage
   * @param {string} item
   * @memberof Storage
   */
  remove(item) {
    this.storage.removeItem(item);
  }
}
