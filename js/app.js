'use strict';

// ***** GLOBALS *****
let plantsArray = [];

let chosenWater;
let chosenLight;
/*let chosenHumidity; */
let ownsPet;

// ***** DOM WINDOWS *****

/*let panelTitle = document.getElementById('title');*/
let panelName = document.getElementById('name');
/*let panelSummary = document.getElementById('plant-summary');*/
/*let panelTraitsContainer = document.getElementById('traits-container');*/
let panelImage = document.getElementById('image');
let panelTraits = document.getElementById('plant-traits');


// ***** CONSTRUCTOR FUNCTION *****

function Plant(name, traitsDescription, imageExtension = 'jpg'){
  this.name = name;
  /*this.summary = summary;*/
  this.traitsDescription = traitsDescription;
  this.clicks = 0;
  this.image = `img/${name}.${imageExtension}`;}


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

  let prayerPlant = new Plant('Prayer plant',['Botanical name: Maranta leuconera','Light: This plant can tolerate indirect sunlight (partial light or shade).', 'Water: Water your prayer plant whenever the top layer becomes dry and never allow the potting soil to dry out completely.', 'Temperature: Prayer Plants prefer temperatures between 68° – 85°F.','Toxicity: This plant is considered non-toxic and pet-friendly']);
  let chineseEvergreen = new Plant('Chinese Evergreen', ['Botanical name: Aglaonema commutatum', 'Light: Keep this plant in low to indirect bright light.', 'Water: Allow the plant to dry out before watering again', 'Temperature: These plants do not like cold drafts or temperatures below about 70°F', 'Toxicity: This plant is toxic to dogs and cats']);
  let africanViolet = new Plant('African Violet', ['Botanical name:	Saintpaulia ionantha', 'Light: Bright indirect sunlight', 'Water: Keep soil moist with warm water and water when the soil volume is around 25% dry.', 'Temperature: This plant thrives at 70°F.', 'Toxicity: Non-toxic to cats and dogs.']);
  let jadePlant = new Plant('Jade Plant', ['Botanical name:	Crassula ovata', 'Light: Jade plants need at least six hours of bright indirect sunlight per day.', 'Water: Aim to keep the soil slightly moist but it should not stay wet or saturated. Reduce your watering to once monthly in the winter.', 'Temperature: Jade plants prefer temperatures ranging from 65 to 75°F', 'Toxicity: Toxic to dogs and cats']);
  let echeveria = new Plant('Echeveria', ['Botanical name: Echeveria spp.','Light: Echeverias need at least four to six hours of bright, direct sunlight daily.', 'Water: From Spring to Summer, keep the soil of your Echeveria slightly moist. From late Fall to Winter, let their soil dry out completely before watering.', 'Temperature: Echeverias thrive in hot, dry conditions. They are fine in temperatures no colder than 50°F', 'Toxicity: Non-toxic to cats and dogs.']);
  let aloeVera = new Plant('Aloe Vera', ['Botanical name: Aloe barbadensis miller', 'Light: Aloe Vera should be placed in a window with bright, indirect sunlight.', 'Water: Plan to water your aloe vera weekly or bi-weekly in the spring and summer waiting until the soil dries out fully. Water more sparingly during the fall and winter.', 'Temperature: Aim for a temperature between 55 and 85°F', 'Toxicity: Aloe Vera is toxic to humans and pets.']);
  let chineseMoneyPlant = new Plant('Chinese Money Plant', ['Botanical name: Pilea peperomioides', 'Light: The Chinese Money Plant thrives in medium to bright indirect light.', 'Water: Allow the plant to nearly dry out between waterings.', 'Temperature: This plant prefers temperatures ranging from 65 to 75°F', 'Toxicity: Non-toxic to cats and dogs.']);

  let pothos = new Plant('Pothos', ['Botanical name: Pilea peperomioides', 'Light: The Chinese Money Plant thrives in medium to bright indirect light.', 'Water: Allow the plant to nearly dry out between waterings.', 'Temperature: This plant prefers temperatures ranging from 65 to 75°F', 'Toxicity: Non-toxic to cats and dogs.']);

  let rubberPlant = new Plant('Rubber Plant', ['Botanical name: Pilea peperomioides', 'Light: The Chinese Money Plant thrives in medium to bright indirect light.', 'Water: Allow the plant to nearly dry out between waterings.', 'Temperature: This plant prefers temperatures ranging from 65 to 75°F', 'Toxicity: Non-toxic to cats and dogs.']);


  let fiddleLeaf = new Plant('Fiddle Leaf', ['Botanical name: Ficus lyrata', 'Light: This plant thrives in bright indirect light', 'Water: Water bi-weekly or when the top inch of soil feels dry.', 'Humidity: Position the plant away from drafty areas, as well as air-conditioning and heating vents. The Fiddle Leaf is fine between 60 and 85°F.', 'Toxicity: This plant is toxic to cats and dogs.']);
  let arecaPalm = new Plant('Areca Palm', ['Botanical name: Dypsis lutescens', 'Light: These plants like bright, indirect sunlight, but they also can tolerate full direct sunlight.', 'Water: Let the soil or potting mix dry out slightly between waterings.', 'Temperature: This plant thrives in average temperatures raging between 65 to 75°F.', 'Toxicity: Non-toxic to cats and dogs.']);
  let coralCactus = new Plant('Coral Cactus', ['Botanical name: Euphorbia lactea ‘Cristata’,', 'Light: The Coral Cactus thrives when it gets several hours of direct sunlight but not for long periods of time.', 'Water: The coral cactus is not drought-tolerant. Water when the top 2 to 4 inches of the soil feels dry.', 'Humidity: This plant prefers temperatures between 60-85 degrees.', 'Toxicity: Toxic to pets and humans.']);
  let snakePlant = new Plant('Snake Plant', ['Botanical name: Dracaena trifasciata', 'Light: Snake Plant can tolerate any light level, even shade rooms or corner. although it grows faster in light conditions.']);
  let zzPlant = new Plant('ZZ Plant', ['Botanical name: Dracaena trifasciata', 'second description for a plant 10']);
  let zebraHaworthia = new Plant('Zebra Haworthia', ['description for a plant 10', 'second description for a plant 10']);
  let sagoPlant = new Plant('Plant10', ['description for a plant 10', 'second description for a plant 10']);
  let donkeysTail = new Plant('Donkey\'s Tail', ['description for a plant 10', 'second description for a plant 10']);
  let africanSpear = new Plant('African Spear', ['description for a plant 10', 'second description for a plant 10']);

  plantsArray.push(prayerPlant, chineseEvergreen, africanViolet, jadePlant, echeveria, aloeVera, chineseMoneyPlant, pothos, rubberPlant, fiddleLeaf, arecaPalm, coralCactus, snakePlant, zzPlant, zebraHaworthia, sagoPlant, donkeysTail, africanSpear);
}

// ***** EXECUTABLE CODE *****

// Render plant recommendation
function renderPlantRecommendation(){

  document.getElementById('container').style.visibility = 'visible';

  switch (chosenWater){
  case 'weekly':
    switch (chosenLight){
    case 'low':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[0].name;
        /*panelSummary.textContent = plantsArray[0].summary;*/
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
        /*panelSummary.textContent = plantsArray[1].summary;*/
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
        panelName.textContent = plantsArray[2].name;
        /*panelSummary.textContent = plantsArray[2].summary;*/
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
        /*panelSummary.textContent = plantsArray[1].summary;*/
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
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[4].name;
        /*panelSummary.textContent = plantsArray[0].summary;*/
        for (let i = 0; i < plantsArray[4].traitsDescription.length; i++) {
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
        /*panelSummary.textContent = plantsArray[1].summary;*/
        for (let i = 0; i < plantsArray[5].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[5].traitsDescription[i];
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
        panelName.textContent = plantsArray[6].name;
        /*panelSummary.textContent = plantsArray[6].summary;*/
        for (let i = 0; i < plantsArray[6].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[6].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[6].image;
        plantsArray[6].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[7].name;
        /*panelSummary.textContent = plantsArray[7].summary;*/
        for (let i = 0; i < plantsArray[7].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[7].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[7].image;
        plantsArray[7].clicks++;
        break;
      } break;
    case 'medium':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[8].name;
        /*panelSummary.textContent = plantsArray[8].summary;*/
        for (let i = 0; i < plantsArray[8].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[8].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[8].image;
        plantsArray[8].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[9].name;
        /*panelSummary.textContent = plantsArray[9].summary;*/
        for (let i = 0; i < plantsArray[9].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[9].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[9].image;
        plantsArray[9].clicks++;
        break;
      } break;
    case 'high':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[10].name;
        /*panelSummary.textContent = plantsArray[10].summary;*/
        for (let i = 0; i < plantsArray[10].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[10].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[10].image;
        plantsArray[10].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[11].name;
        /*panelSummary.textContent = plantsArray[11].summary;*/
        for (let i = 0; i < plantsArray[11].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[11].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[11].image;
        plantsArray[11].clicks++;
        break;
      } break;
    } break;
  case 'monthly':
    switch (chosenLight){
    case 'low':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[12].name;
        /*panelSummary.textContent = plantsArray[12].summary;*/
        for (let i = 0; i < plantsArray[12].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[12].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[12].image;
        plantsArray[12].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[13].name;
        /*panelSummary.textContent = plantsArray[13].summary;*/
        for (let i = 0; i < plantsArray[13].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[13].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[13].image;
        plantsArray[13].clicks++;
        break;
      } break;
    case 'medium':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[14].name;
        /*panelSummary.textContent = plantsArray[14].summary;*/
        for (let i = 0; i < plantsArray[14].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[14].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[14].image;
        plantsArray[14].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[15].name;
        /*panelSummary.textContent = plantsArray[15].summary;*/
        for (let i = 0; i < plantsArray[15].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[15].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[15].image;
        plantsArray[15].clicks++;
        break;
      } break;
    case 'high':
      switch (ownsPet){
      case 'yes':
        panelName.textContent = plantsArray[16].name;
        /*panelSummary.textContent = plantsArray[16].summary;*/
        for (let i = 0; i < plantsArray[16].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[16].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[16].image;
        plantsArray[16].clicks++;
        break;
      case 'no':
        panelName.textContent = plantsArray[17].name;
        /*panelSummary.textContent = plantsArray[1].summary;*/
        for (let i = 0; i < plantsArray[17].traitsDescription.length; i++) {
          let liElem = document.createElement('li');
          panelTraits.appendChild(liElem);
          liElem.textContent = plantsArray[17].traitsDescription[i];
        }
        panelImage = document.getElementById('image');
        panelImage.src = plantsArray[17].image;
        plantsArray[17].clicks++;
        break;
      } break;
    } break;
  }
  inputForm.reset();
}


// ***** EVENT HANDLERS *****

// Event Handler function for submit button
// Callback function
function handleSubmit(event){
  event.preventDefault();
  chosenWater = event.target.water.value;
  chosenLight = event.target.light.value;
  /*chosenHumidity = event.target.humidity.value;*/
  ownsPet = event.target.pets.value;

  panelTraits.innerHTML = '';
  renderPlantRecommendation();

  //LOCAL STORAGE
  let stringifiedPlants = JSON.stringify(plantsArray);
  console.log('stringified plants >>>>', stringifiedPlants);

  // Stringified plantsArrays was stored locally in "plants";
  localStorage.setItem('plants', stringifiedPlants);
}

// Grab the element to listen to
let inputForm = document.querySelector('form');
// attached the event listener to the element
inputForm.addEventListener('submit', handleSubmit);

console.log('parsed plants >>>', parsedPlants);
