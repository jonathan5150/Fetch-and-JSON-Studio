// TODO: add code here

window.addEventListener("load", function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then( function(response) {
            response.json().then( function(data) {
                const div = document.getElementById("container");

                const numAstronauts = document.getElementById("numAstronauts");

                numAstronauts.innerHTML = "There are " + data.length + " astronauts!";

                data.sort(function(a, b) {
                    return a.hoursInSpace < b.hoursInSpace ? 1 : -1
                })
                
                for (let i = 0; i < data.length; i++) {

                    if (data[i].active === true) {
                        div.innerHTML += `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                                        <li style="color:green;">Active: ${data[i].active}</li>
                                        <li>Skills: ${data[i].skills.join(", ")}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src="${data[i].picture}">
                            </div>
                        `;
                    }

                    else {
                        div.innerHTML += `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                                        <li>Active: ${data[i].active}</li>
                                        <li>Skills: ${data[i].skills.join(", ")}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src=${data[i].picture}>
                            </div>
                        `;
                    }

                }
            });
        }
    );
});
