import { PAGES } from './pages';

/**
 * @description Main class for the Asgar Ghost Theme
 * @export
 * @class Asgar
 */
class Asgar {

    /**
     * Creates an instance of Asgar.
     * @memberof Asgar
     */
    constructor() {
        this.apiURL = 'custom/api';
        this.pages = PAGES;
    }

    /**
     * @description Loads data on content load using an async connection
     * @memberof Asgar
     */
    loadData() {
        document.addEventListener("DOMContentLoaded", () => {
            let xhr = new XMLHttpRequest();

            xhr.onload = () => {

                if (xhr.status >= 200 && xhr.status < 300) {
                    this.currentPage = this.getCurrentPage();
                    this.toggleLoading();
                    this.addData(xhr.response);
                }

            };

            if (this.getCurrentPage()) {
                xhr.open('GET', `/${this.apiURL}`);
                xhr.send();
            }

        });
    }

    /**
     * @description Adds the data to each element based on the page that has been loaded
     * @param {*} data
     * @memberof Asgar
     */
    addData(data) {
        const parsedData = JSON.parse(data);
        let parentElement = this.getParentElement(`${this.currentPage.name}-list`);

        if(this.currentPage && parentElement) {
            this.currentPage.pageElement = parentElement;
            this.currentPage.data = parsedData[this.currentPage.name];

            let template = this.parseTemplate(this.currentPage.childTemplate);

            this.currentPage.data.forEach(item => {
                this.addChildElement(template(item), this.currentPage.pageElement, this.currentPage.childType);
            });
        }
    }

    /**
     * @description Retrive an element using the class name
     * @param {*} element
     * @returns element
     * @memberof Asgar
     */
    getParentElement(element) {
        return document.getElementsByClassName(element)[0];
    }

    /**
     * @description Add a child element to it's parent element
     * @param {*} childTemplate
     * @param {*} parentElement
     * @param {string} [childType='row']
     * @memberof Asgar
     */
    addChildElement(childTemplate, parentElement, childType = 'row') {
        let item = document.createElement(childType === 'row' ? "tr" : "span");
        item.innerHTML = childTemplate;

        if (childType === 'row') {
            parentElement.getElementsByTagName('tbody')[0].appendChild(item);
        } else if (childType === 'col') {
            parentElement.appendChild(item);
        }
    }

    /**
     * @description Return the active page name
     * @returns string with the page name
     * @memberof Asgar
     */
    getCurrentPageName() {
        return location.pathname.replace(/\//ig, '');
    }

    /**
     * @description Return the active page meta data
     * @returns object of the current active page
     * @memberof Asgar
     */
    getCurrentPage() {
        if (this.getCurrentPageName()) {
            return this.pages.find(({ name }) => name === this.getCurrentPageName());
        }
    }

    /**
     * @description Toggles the loading icon
     * @memberof Asgar
     */
    toggleLoading() {
        let loading = document.getElementsByClassName("fa-sync")[0];

        if (loading) {
            loading.style.display = 'none';
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
        }
    }
}

const asgar = new Asgar();
asgar.loadData();