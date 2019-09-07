export default class Asgar {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {

            let xhr = new XMLHttpRequest(),
                loading = document.getElementsByClassName("fa-sync")[0],
                checkURL = () => {
                    return window.location.href.includes('/projects') || window.location.href.includes('/speaking') || window.location.href.includes('/about');
                }

            xhr.onload = () => {

                if (xhr.status >= 200 && xhr.status < 300) {
                    if (loading) {
                        loading.style.display = 'none';
                    }

                    let data = JSON.parse(xhr.response),
                        author_social = document.getElementsByClassName("author-social")[0],
                        projects = document.getElementsByClassName("projects-list")[0],
                        events = document.getElementsByClassName("events-list")[0],
                        addItem = (html, parent) => {
                            let item = document.createElement("tr");
                            item.innerHTML = html;
                            parent.getElementsByTagName('tbody')[0].appendChild(item);
                        }

                    if(author_social) {
                        data.social_urls.forEach(object => {
                            let social_url = `<a href="${object.url}" title="${object.name}" target="_blank" rel="noopener"><i class="${object.icon == 'envelope' ? 'fas' : 'fab'} fa-${object.icon}" aria-hidden="true"></i></a>`,
                                item = document.createElement("span");

                            item.innerHTML = social_url;
                            author_social.appendChild(item);
                        });
                    }

                    if(projects) {
                        data.projects.forEach(object => {
                            let project = `<td>${object.name}</td><td>${object.description}</td><td class="text-center"><a href="${object.url}" title="Fork ${object.name}" target="_blank"><i class="fas fa-code-branch"></i></a></td>`;

                            addItem(project, projects);
                        });
                    }

                    if(events) {
                        data.events.forEach(object => {
                            let event = `<td>${object.name}</td><td>${object.year}</td><td class="text-center"><div class="row">${object.slides ? `<div class="one-half column"><a href="${object.slides}" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>` : ''}${object.video ? `<div class="one-half column"><a href="${object.video}" title="Video"><i class="fas fa-video"></i></a></div>` : ''}${object.url ? `<div class="one-half column"><a href="${object.url}" title="More"><i class="fas fa-link"></i></a></div>` : ''}</div></td>`;

                            addItem(event, events);
                        });
                    }
                } else {
                    console.log('Could not connect to the api!');
                }

            };

            if (checkURL()) {
                xhr.open('GET', '/custom/api');
                xhr.send();
            }

        });
    }
}

const run = new Asgar();