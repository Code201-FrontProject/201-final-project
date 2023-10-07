

// DOM manipulation
let containerElem = document.getElementById('container');


// Get data from storage
let retrievedPlants = localStorage.getItem('plants');

let parsedPlants = JSON.parse(retrievedPlants);


// Render catalog of plant recommendations


for (let i = 0; i < parsedPlants.length; i++) {
  document.getElementById('container').style.visibility = 'visible';
  if (parsedPlants[i].clicks > 0) {


    let panelTitle = document.createElement('h1');
    containerElem.appendChild(panelTitle);
    panelTitle.textContent = parsedPlants[i].name;

    let timesPlantRecommended = document.createElement('p');
    containerElem.appendChild(timesPlantRecommended);
    timesPlantRecommended.textContent = `This plant has been recommended to you ${parsedPlants[i].clicks} time(s)`;

    let panelContent = document.createElement('div');
    containerElem.appendChild(panelContent);

    // let panelSummary = document.createElement('p');
    // panelContent.appendChild(panelSummary);
    // panelSummary.textContent = parsedPlants[i].summary;

    let traitsList = document.createElement('ul');
    panelContent.appendChild(traitsList);

    for (let j = 0; j < parsedPlants[i].traitsDescription.length; j++) {
      let liElem = document.createElement('li');
      traitsList.appendChild(liElem);
      liElem.textContent = parsedPlants[i].traitsDescription[j];
    }

    let imageContainer = document.createElement('div');
    panelContent.appendChild(imageContainer);

    let contentImage = document.createElement('img');
    imageContainer.appendChild(contentImage);
    contentImage.src = parsedPlants[i].image;

    let line = document.createElement('hr');
    panelContent.appendChild(line);




  }

}
