/**
 * @description Main class for the DOM class
 * @export
 * @class DOM
 */
export class DOM {
  /**
   * Creates an instance of DOM.
   * @memberof DOM
   */
  constructor() {}

  /**
   * @description Get any element from the page
   * @param {string} element
   * @param {object} parent
   * @returns DOM element
   * @memberof DOM
   */
  get(element, parent) {
    return parent
      ? parent.querySelector(element)
      : document.querySelector(element);
  }

  /**
   * @description Get all elements from a page
   * @param {string} elements
   * @returns Array of elements
   * @memberof DOM
   */
  getAll(elements) {
    return document.querySelectorAll(elements);
  }

  /**
   * @description Create an element inside the document or an element
   * @param {string} element
   * @param {object} parent
   * @returns Created element
   * @memberof DOM
   */
  make(element, parent) {
    return parent
      ? parent.createElement(element)
      : document.createElement(element);
  }

  /**
   * @description Check if an element has a class
   * @param {object} element
   * @param {string} className
   * @returns {boolean}
   * @memberof DOM
   */
  has(element, className) {
    return element.classList.contains(className);
  }

  /**
   * @description Toggle a class on element
   * @param {object} element
   * @param {string} className
   * @memberof DOM
   */
  toggle(element, className) {
    element.classList.toggle(className);
  }
}
