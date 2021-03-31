import DOM from "./services/dom";
import Http from "./services/http";
import Storage from "./services/storage";

import { GLOBALS } from "./common/globals";
import { PAGES } from "./common/pages";
import Utils from "./common/utils";

/**
 * @description Main class for the Asgar Ghost Theme
 * @export
 * @class Asgar
 */
export default class Asgar {
  /**
   * Creates an instance of Asgar.
   * @memberof Asgar
   */
  constructor() {
    this.http = new Http();
    this.dom = new DOM();
    this.storage = new Storage();

    this.globals = GLOBALS;
    this.pages = PAGES;
    this.utils = new Utils();
    this.data = "";
  }

  /**
   * @description Loads data and adds events
   * @memberof Asgar
   */
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this._loadData();
      this._loadEvents();
    });
  }

  /**
   * @description Loads data for pages that require it
   * @memberof Asgar
   */
  _loadData() {
    if (this.getCurrentPage()) {
      this.data = JSON.parse(this.storage.get("asg_data"));

      this.currentPage = this.getCurrentPage();
      this.toggleLoading();

      if (this.data) {
        this.addData(this.data);
      } else {
        this.http.get(this.globals.api).then((data) => {
          this.data = data;
          this.storage.set("asg_data", JSON.stringify(data));
          this.addData(data);
        }, (error) => {
          console.log(error);
        });
      }
    }
  }

  /**
   * @description Initialize global events
   * @memberof Asgar
   */
  _loadEvents() {
    this.darkModeEvent();
  }

  /**
   * @description Creates the dark mode event
   * @memberof Asgar
   */
  darkModeEvent() {
    let colorSwitcher = this.dom.get(".color-switcher"),
      body = this.dom.get("body"),
      setDarkMode = (status) => {
        this.dom.toggle(colorSwitcher, "fa-flip-horizontal");
        this.dom.toggle(body, "dark-mode");
        this.storage.set("asg_dm", status);
      };

    // Detect if the system is in dark mode on first visit or if the user turned on dark mode
    if (
      (this.utils.checkSystemDarkMode() &&
        this.storage.get("asg_dm") === null) ||
      this.storage.get("asg_dm")
    ) {
      setDarkMode(true);
    }

    colorSwitcher.addEventListener("click", () => {
      setDarkMode(!this.dom.has(body, "dark-mode"));
    });
  }

  /**
   * @description Adds the data to each element based on the page that has been loaded
   * @param {*} data
   * @memberof Asgar
   */
  addData(data) {
    let parentElement = this.dom.get(`.${this.currentPage.name}-list`);

    if (this.currentPage && parentElement) {
      this.currentPage.pageElement = parentElement;
      this.currentPage.data = data[this.currentPage.name];

      let template = this.parseTemplate(this.currentPage.childTemplate);

      this.currentPage.data.forEach((item) => {
        this.addChildElement(
          template(item),
          this.currentPage.pageElement,
          this.currentPage.childType
        );
      });
    }
  }

  /**
   * @description Add a child element to it's parent element
   * @param {*} childTemplate
   * @param {*} parentElement
   * @param {string} [childType="row"]
   * @memberof Asgar
   */
  addChildElement(childTemplate, parentElement, childType = "row") {
    let item = this.dom.make(childType === "row" ? "tr" : "span");
    item.innerHTML = childTemplate;

    if (childType === "row") {
      this.dom.get("tbody", parentElement).appendChild(item);
    } else if (childType === "col") {
      parentElement.appendChild(item);
    }
  }

  /**
   * @description Return the active page meta data
   * @returns object of the current active page
   * @memberof Asgar
   */
  getCurrentPage() {
    return this.pages.find(
      ({ name }) => name === this.utils.getCurrentPageName()
    );
  }

  /**
   * @description Toggles the loading icon
   * @memberof Asgar
   */
  toggleLoading() {
    let loading = this.dom.get(".fa-sync");

    if (loading) {
      loading.style.display = "none";
    }
  }

  /**
   * @description Parses string to template literal
   * @param {*} literal string
   * @returns Function that interpolates the template literal with data values
   * @memberof Asgar
   */
  parseTemplate(literal) {
    return (data) => {
      const dataKeys = [];
      const dataVals = [];

      if (data) {
        for (let key in data) {
          dataKeys.push(key);
          dataVals.push(data[key]);
        }

        let func = new Function(...dataKeys, "return `" + literal + "`;");

        return func(...dataVals);
      }
    };
  }
}
