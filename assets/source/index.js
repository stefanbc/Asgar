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
        this.apiURL = 'custom/api';
        this.pages = [
            {
                name: 'about',
                template: '<a href="${item.url}" title="${item.name}" target="_blank" rel="noopener"><i class="${item.icon === "envelope" ? "fas" : "fab"} fa-${item.icon}" aria-hidden="true"></i></a>',
                type: 1
            },
            {
                name: 'projects',
                template: '<td>${item.name}</td><td>${item.description}</td><td class="text-center"><a href="${item.url}" title="Fork ${item.name}" target="_blank"><i class="fas fa-code-branch"></i></a></td>',
                type: 0
            },
            {
                name: 'speaking',
                template: '<td>${item.name}</td><td>${item.year}</td><td class="text-center"><div class="row">${item.slides ? `<div class="one-half column"><a href="${item.slides}" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>` : ""}${item.video ? `<div class="one-half column"><a href="${item.video}" title="Video"><i class="fas fa-video"></i></a></div>` : ""}${item.url ? `<div class="one-half column"><a href="${item.url}" title="More"><i class="fas fa-link"></i></a></div>` : ""}</div></td>',
                type: 0
            }
        ];

        this.loadData();
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
                    this.toggleLoading();
                    this.addData(xhr.response);
                }

            };

            if (this.checkURL()) {
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
        data = JSON.parse(data);
        let parentObject = [];

        this.pages.forEach(page => {
            if (this.getParentElement(`${page.name}-list`)) {
                parentObject[page.name] = {
                    parentElement: this.getParentElement(`${page.name}-list`),
                    template: page.template,
                    type: page.type,
                    data: data[page.name]
                };
            }
        });

        parentObject.forEach(object => {
            if(object.parentElement) {
                object.data.forEach(item => {
                    this.addChildElement(item.template, object.parentElement, object.type);
                });
            }
        });
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
     * @param {*} childElement
     * @param {*} parentElement
     * @param {number} [type=0]
     * @memberof Asgar
     */
    addChildElement(childElement, parentElement, type = 0) {
        let item = document.createElement(type === 0 ? "tr" : "span");
        item.innerHTML = childElement;

        if (type === 0) {
            parentElement.getElementsByTagName('tbody')[0].appendChild(item);
        } else {
            parentElement.appendChild(item);
        }
    }

    /**
     * @description Checkes if the current page is one of the supported pages
     * @returns boolean
     * @memberof Asgar
     */
    checkURL() {
        return this.pages.includes(location.pathname.replace(/\//ig, ''));
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
}

const asgar = new Asgar();
asgar();