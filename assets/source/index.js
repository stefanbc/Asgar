export default class Asgar {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {

            let xhr = new XMLHttpRequest(),
                loading = document.getElementsByClassName("fa-sync")[0],
                checkURL = () => {
                    return window.location.href.includes('/projects') || window.location.href.includes('/speaking');
                }

            xhr.onload = () => {

                if (xhr.status >= 200 && xhr.status < 300) {
                    loading.style.display = 'none';

                    let data = JSON.parse(xhr.response),
                        projects = document.getElementsByClassName("projects-list")[0],
                        events = document.getElementsByClassName("events-list")[0],
                        addItem = (html, parent) => {
                            let item = document.createElement("tr");
                            item.innerHTML = html;
                            parent.getElementsByTagName('tbody')[0].appendChild(item);
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