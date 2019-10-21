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
        this.pages = [
            {
                name: 'about',
                template: '<a href="${url}" title="${name}" target="_blank" rel="noopener"><i class="${icon === "envelope" ? "fas" : "fab"} fa-${icon}" aria-hidden="true"></i></a>',
                type: 1
            },
            {
                name: 'projects',
                template: '<td>${name}</td><td>${description}</td><td class="text-center"><a href="${url}" title="Fork ${name}" target="_blank"><i class="fas fa-code-branch"></i></a></td>',
                type: 0
            },
            {
                name: 'speaking',
                template: '<td>${name}</td><td>${year}</td><td class="text-center"><div class="row">${slides ? `<div class="one-half column"><a href="${slides}" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>` : ""}${video ? `<div class="one-half column"><a href="${video}" title="Video"><i class="fas fa-video"></i></a></div>` : ""}${url ? `<div class="one-half column"><a href="${url}" title="More"><i class="fas fa-link"></i></a></div>` : ""}</div></td>',
                type: 0
            }
        ];
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
        const parsedData = JSON.parse(data);
        let currentPage = {};

        this.pages.forEach(page => {
            if (this.getParentElement(`${page.name}-list`)) {
                currentPage = {
                    pageElement: this.getParentElement(`${page.name}-list`),
                    childTemplate: page.template,
                    childType: page.type,
                    data: parsedData[page.name]
                };
            }
        });

        if (currentPage) {
            let template = this.parseTemplate(currentPage.childTemplate);

            currentPage.data.forEach(item => {
                this.addChildElement(template(item), currentPage.pageElement, currentPage.childType);
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
     * @param {number} [childType=0]
     * @memberof Asgar
     */
    addChildElement(childTemplate, parentElement, childType = 0) {
        let item = document.createElement(childType === 0 ? "tr" : "span");
        item.innerHTML = childTemplate;

        if (childType === 0) {
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
        return this.pages.some(page => page.name === location.pathname.replace(/\//ig, ''));
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

            for (let key in data) {
                dataKeys.push(key);
                dataVals.push(data[key]);
            }

            let func = new Function(...dataKeys, "return `" + literal + "`;");

            return func(...dataVals);
        }
    }
}

const asgar = new Asgar();
asgar.loadData();