'use strict';

// ***** GLOBALS *****
let plantsArray = [];

let chosenWater;
let chosenLight;
let chosenHumidity;
let ownsPet;

// ***** DOM WINDOWS *****

/*let panelTitle = document.getElementById('title');*/
let panelName = document.getElementById('name');
let panelSummary = document.getElementById('plant-summary');
/*let panelTraitsContainer = document.getElementById('traits-container');*/
let panelImage = document.getElementById('image');
let panelTraits = document.getElementById('plant-traits');


// ***** CONSTRUCTOR FUNCTION *****

function Plant(name, summary, traitsDescription /*imageExtension = 'jpg', frequencyWater, amountLight, humidityLevel, petOwner*/){
  this.name = name;
  this.summary = summary;
  this.traitsDescription = traitsDescription;
  this.clicks = 0;
  /*this.image = `img/${name}.${imageExtension}`;
  this.frequencyWater = frequencyWater;
  this.amountLight = amountLight;
  this.humidityLevel = humidityLevel;
this.petOwner = petOwner;*/}



// ***** EXECUTABLE CODE *****

// Local storage continues here
// get data from local storage
let retrievedPlants = localStorage.getItem('myPlants');
console.log('Products from local storage >>>', retrievedPlants);

//convert data to useable code
let parsedPlants = JSON.parse(retrievedPlants);
console.log('parsed plants >>>', parsedPlants);

// path to persist data
if(retrievedPlants) {
  plantsArray = parsedPlants;
} else {

  let zamioculcas = new Plant('Zamioculcas', 'bla bla bla', ['description for a zamioculcas', 'second description for a zamioculcas'] /*'Monthly', 'Low', 'Low', 'Pet safe'*/);
  let snakePlant = new Plant('Snake Plant', 'bla bla bla', ['description for a snake plant', 'second description for a snake plant']/*'Monthly', 'Medium', 'Medium', 'Pet safe'*/);
  let peruPlant = new Plant('Peru Plant', 'bla bla bla', ['description for a peru Plant', 'second description for a peru plant']/*'Bi-Weekly', 'High', 'High', 'Not pet safe'*/);
  let peperomia = new Plant('Peperomia', 'bla bla bla', ['description for a peperomia', 'second description for a peperomia']/*'Weekly', 'Weekly', 'Low', 'High', 'Pet safe'*/);
  let cactus = new Plant('Cactus', 'bla bla bla', ['description for a Cactus','second description for a cactus']);
  let plant6 = new Plant('Plant6', 'bla bla bla', ['description for a plant 6', 'second description for a plant 6']);
  let plant7 = new Plant('Plant7', 'bla bla bla', ['description for a plant 7', 'second description for a plant 7']);
  let plant8 = new Plant('Plant8', 'bla bla bla', ['description for a plant 8', 'second description for a plant 8']);
  let plant9 = new Plant('Plant9', 'bla bla bla', ['description for a plant 9', 'second description for a plant 9']);
  let plant10 = new Plant('Plant10', 'bla bla bla', ['description for a plant 10', 'second description for a plant 10']);

  plantsArray.push(zamioculcas, snakePlant, peruPlant, peperomia, cactus, plant6, plant7, plant8, plant9, plant10);
}

// ***** EXECUTABLE CODE *****

// Render plant recommendation
function renderPlantRecommendation(){

  document.getElementById('container').style.visibility = 'visible';

  switch (chosenWater){
  case 'weekly':
    switch (chosenLight){
    case 'low':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    case 'medium':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    case 'high':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    } break;
  case 'bi-weekly':
    switch (chosenLight){
    case 'low':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    case 'medium':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    case 'high':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    } break;
  case 'monthly':
    switch (chosenLight){
    case 'low':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    case 'medium':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    case 'high':
      switch (chosenHumidity){
      case 'low':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'medium':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      case 'high':
        switch (ownsPet){
        case 'yes':
          panelName.textContent = plantsArray[0].name;
          panelSummary.textContent = plantsArray[0].summary;
          for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[0].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[0].image;
          plantsArray[0].clicks++;
          break;
        case 'no':
          panelName.textContent = plantsArray[1].name;
          panelSummary.textContent = plantsArray[1].summary;
          for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
            let liElem = document.createElement('li');
            panelTraits.appendChild(liElem);
            liElem.textContent = plantsArray[1].traitsDescription[i];
          }
          panelImage = document.getElementById('image');
          panelImage.src = plantsArray[1].image;
          plantsArray[1].clicks++;
          break;
        } break;
      } break;
    } break;
  }
  inputForm.reset();
}








/*
    case 'medium':
      switch(ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[2].name;
        panelSummary.textContent = plantsArray[2].summary;
        for (let i = 0; i < plantsArray[2].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[2].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[2].image;
        plantsArray[2].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[3].name;
        panelSummary.textContent = plantsArray[3].summary;
        for (let i = 0; i < plantsArray[3].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[3].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[3].image;
        plantsArray[3].clicks++;
        break;
      } break;

    case 'high':
      switch(ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[4].name;
        panelSummary.textContent = plantsArray[4].summary;
        for (let i = 0; i < plantsArray[2].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[4].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[4].image;
        plantsArray[4].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[5].name;
        panelSummary.textContent = plantsArray[5].summary;
        for (let i = 0; i < plantsArray[5].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[3].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[5].image;
        plantsArray[5].clicks++;
        break;
      } break;
    } break;

  case 'bi-weekly':
    switch (chosenLight){
    case 'low':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[0].name;
        panelSummary.textContent = plantsArray[0].summary;
        for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[0].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[0].image;
        plantsArray[0].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[1].name;
        panelSummary.textContent = plantsArray[1].summary;
        for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[1].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[1].image;
        plantsArray[1].clicks++;
        break;
      } break;

    case 'medium':
      switch(ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[2].name;
        panelSummary.textContent = plantsArray[2].summary;
        for (let i = 0; i < plantsArray[2].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[2].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[2].image;
        plantsArray[2].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[3].name;
        panelSummary.textContent = plantsArray[3].summary;
        for (let i = 0; i < plantsArray[3].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[3].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[3].image;
        plantsArray[3].clicks++;
        break;
      } break;

    case 'high':
      switch(ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[4].name;
        panelSummary.textContent = plantsArray[4].summary;
        for (let i = 0; i < plantsArray[2].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[4].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[4].image;
        plantsArray[4].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[5].name;
        panelSummary.textContent = plantsArray[5].summary;
        for (let i = 0; i < plantsArray[5].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[3].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[5].image;
        plantsArray[5].clicks++;
        break;
      } break;


    } break;

  case 'monthly':
    switch (chosenLight){
    case 'low':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[0].name;
        panelSummary.textContent = plantsArray[0].summary;
        for (let i = 0; i < plantsArray[0].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[0].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[0].image;
        plantsArray[0].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[1].name;
        panelSummary.textContent = plantsArray[1].summary;
        for (let i = 0; i < plantsArray[1].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[1].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[1].image;
        plantsArray[1].clicks++;
        break;
      } break;

    case 'medium':
      switch(ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[2].name;
        panelSummary.textContent = plantsArray[2].summary;
        for (let i = 0; i < plantsArray[2].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[2].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[2].image;
        plantsArray[2].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[3].name;
        panelSummary.textContent = plantsArray[3].summary;
        for (let i = 0; i < plantsArray[3].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[3].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[3].image;
        plantsArray[3].clicks++;
        break;
      } break;

    case 'high':
      switch(ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[4].name;
        panelSummary.textContent = plantsArray[4].summary;
        for (let i = 0; i < plantsArray[2].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[4].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[4].image;
        plantsArray[4].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[5].name;
        panelSummary.textContent = plantsArray[5].summary;
        for (let i = 0; i < plantsArray[5].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[3].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[5].image;
        plantsArray[5].clicks++;
        break;
      } break;


    } break;
  }*/
// resets the form:
/*inputForm.reset();*/


// ***** EVENT HANDLERS *****

// Event Handler function for submit button
// Callback function
function handleSubmit(event){
  event.preventDefault();
  chosenWater = event.target.water.value;
  chosenLight = event.target.light.value;
  chosenHumidity = event.target.humidity.value;
  ownsPet = event.target.pets.value;

  panelTraits.innerHTML = '';
  renderPlantRecommendation();

  //LOCAL STORAGE
  let stringifiedPlants = JSON.stringify(plantsArray);

  // Stringified plantsArrays was stored locally in "plants";
  localStorage.setItem('plants', stringifiedPlants);
}

// Grab the element to listen to
let inputForm = document.querySelector('form');
// attached the event listener to the element
inputForm.addEventListener('submit', handleSubmit);
