//Get the available topics
function getAndSetTopics() {
  let topics = []
  fetchTopics(topics)
  .catch(() => {
    topics = backupTopics
  })
  .finally(() => {
    setTopicsOnPage(topics)
  })
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/index.html'));
}

//Fetch the topics from the databse
function fetchTopics(topics) {
  return new Promise((resolve, reject) => {
    //Get the topics from the database
    reject("Implement the database lookup later");
  })
}

function setTopicsOnPage(topics) {

  const topicListElem = document.getElementById("topicList");
  topicListElem.innerHTML = ""; // Remove all current children

  for (const topic of topics) {
    // let newHtml = getTopicHtml(topic);
    let button = document.createElement("button");
    
    button.textContent = topic;
    button.className = "btn btn-primary";
    button.addEventListener("click", () => {
      getAndSetGraph(topic)
    });

    topicListElem.appendChild(button);
  }
}

function getAndSetGraph(topic) {
  document.getElementById("trendDataHeader").innerText = topic + "\'s Trend data";
  let data = getData(topic)
  try{
    setGraph(data);
  }
  catch{
      document.getElementById("graph").innerHTML = "<p> Oh no! There was an error retrieving your" 
      + "data for the topic: " + topic + ". Please try another topic.</p>";
  }
}

function setGraph(data) {
  document.getElementById("graph").innerHTML = "<img src=\"/graphs/"+ data +"\" alt = \"graph\">"
}

function getData(topic) {
  // In the future confiure a solution to not store the images locally. Mongo doesn't store images. 
  // Or instead have csvs and convert those to graphs
  return topic + ".png";
}

function setFavorite(topic) {
  favoriteTopics.append(topic);
  async function pushFavorites() {
    //Implement pushing favorites to db later
  }
  pushFavorites()
}

async function getFavorites(email) {
  resp = await fetch(`/api/favorites/${email}`);
  body = await resp.json();
  return body.favoriteTopics;
}

async function setupFavorites() {
  const favoriteTopics = await getFavorites(localStorage.getItem("userName"))
  document.getElementById("numFavoriteTopicsVal").innerText = favoriteTopics.length
}

function setSiteVisits(){
  document.getElementById("numSiteVisitsVal").innerText = localStorage.getItem("siteVisits")
}

/////////////////////////////////////////////////

//User Data
let favoriteTopics = []

// Backup Data

let backupTopics = [
  "Instagram",
  "Cooking",
  "Sports",
  "Rock Climbing"
]

/////////////////////////////////////////////////

// Main Code

function main() {
  getAndSetTopics()

  setupFavorites()

  setSiteVisits()
}

main()