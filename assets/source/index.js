/**
 * @description Main class for the Asgar Ghost Theme
 * @export
 * @class Asgar
 */
export default class Asgar {
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
                } else {
                    console.log('Could not connect to the api!');
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

        let author_social = document.getElementsByClassName("author-social")[0],
            projects = document.getElementsByClassName("projects-list")[0],
            events = document.getElementsByClassName("events-list")[0];

        if(author_social) {
            data.social_urls.forEach(object => {
                let element = `<a href="${object.url}" title="${object.name}" target="_blank" rel="noopener"><i class="${object.icon == 'envelope' ? 'fas' : 'fab'} fa-${object.icon}" aria-hidden="true"></i></a>`;
                this.addItem(element, author_social);
            });
        }

        if(projects) {
            data.projects.forEach(object => {
                let element = `<td>${object.name}</td><td>${object.description}</td><td class="text-center"><a href="${object.url}" title="Fork ${object.name}" target="_blank"><i class="fas fa-code-branch"></i></a></td>`;
                this.addItem(element, projects);
            });
        }

        if(events) {
            data.events.forEach(object => {
                let element = `<td>${object.name}</td><td>${object.year}</td><td class="text-center"><div class="row">${object.slides ? `<div class="one-half column"><a href="${object.slides}" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>` : ''}${object.video ? `<div class="one-half column"><a href="${object.video}" title="Video"><i class="fas fa-video"></i></a></div>` : ''}${object.url ? `<div class="one-half column"><a href="${object.url}" title="More"><i class="fas fa-link"></i></a></div>` : ''}</div></td>`;
                this.addItem(element, events);
            });
        }
    }

    /**
     * @description Adds an item to it's parent element
     * @param {*} element
     * @param {*} parentElement
     * @param {boolean} [table=true]
     * @memberof Asgar
     */
    addItem(element, parentElement, table = true) {
        if (table) {
            let item = document.createElement("tr");
            item.innerHTML = element;
            parentElement.getElementsByTagName('tbody')[0].appendChild(item);
        } else {
            let item = document.createElement("span");
            item.innerHTML = element;
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

const run = new Asgar();