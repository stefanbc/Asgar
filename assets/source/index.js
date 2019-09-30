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
                xhr.open('GET', '/custom/api');
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

        let authorSocial = this.getElement("author-social"),
            projects = this.getElement("projects-list"),
            events = this.getElement("events-list");

        if(authorSocial) {
            data.social_urls.forEach(object => {
                let element = `<a href="${object.url}" title="${object.name}" target="_blank" rel="noopener"><i class="${object.icon === 'envelope' ? 'fas' : 'fab'} fa-${object.icon}" aria-hidden="true"></i></a>`;
                this.addElement(element, authorSocial);
            });
        }

        if(projects) {
            data.projects.forEach(object => {
                let element = `<td>${object.name}</td><td>${object.description}</td><td class="text-center"><a href="${object.url}" title="Fork ${object.name}" target="_blank"><i class="fas fa-code-branch"></i></a></td>`;
                this.addElement(element, projects);
            });
        }

        if(events) {
            data.events.forEach(object => {
                let element = `<td>${object.name}</td><td>${object.year}</td><td class="text-center"><div class="row">${object.slides ? `<div class="one-half column"><a href="${object.slides}" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>` : ''}${object.video ? `<div class="one-half column"><a href="${object.video}" title="Video"><i class="fas fa-video"></i></a></div>` : ''}${object.url ? `<div class="one-half column"><a href="${object.url}" title="More"><i class="fas fa-link"></i></a></div>` : ''}</div></td>`;
                this.addElement(element, events);
            });
        }
    }

    /**
     * @description Retrive an element using the class name
     * @param {*} element
     * @returns element
     * @memberof Asgar
     */
    getElement(element) {
        return document.getElementsByClassName(element)[0];
    }

    /**
     * @description Adds an item to it's parent element
     * @param {*} element
     * @param {*} parentElement
     * @param {boolean} [table=true]
     * @memberof Asgar
     */
    addElement(element, parentElement, table = true) {
        let item = document.createElement(table ? "tr" : "span");
        item.innerHTML = element;

        if (table) {
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
        return window.location.href.includes('/projects') || window.location.href.includes('/speaking') || window.location.href.includes('/about');
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

Asgar();