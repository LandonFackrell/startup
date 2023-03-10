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
  getData(topic)
    .catch(() => {
      document.getElementById("trendDataHeader").innerText = topic + "\'s Trend data";
      document.getElementById("graph").innerHTML = "<p> Oh no! There was an error retrieving your" 
      + "data for the topic: " + topic + ". Please try another topic.</p>";
    });
}

function getData(topic) {
  return new Promise((resolve, reject) => {
    //Get the data for a specific topic
    reject("Implement the database lookup later");
  })
}

function setFavorite(topic) {
  favoriteTopics.append(topic);
  async function pushFavorites() {
    //Implement pushing favorites to db later
  }
  pushFavorites()
}

function getFavorites() {
  return new Promise((resolve, reject) => {
    //Get the Favorites data later
    reject("Implement the database lookup later")
  })
}

function setupFavorites() {
  getFavorites()
    .then(() => {
      document.getElementById("numFavoriteTopicsVal").innerText = favoriteTopics.length
    })
    .catch(() => {
      document.getElementById("numFavoriteTopicsVal").innerText = "Err"
    })
}

function getSiteVisits() {
  return new Promise((resolve, reject) => {
    //Get the data for How many site visits there ahve been
    reject("Implement the database lookup later");
  })
}

function setupSiteVisits() {
  getSiteVisits()
    .then(() => {
      document.getElementById("numSiteVisitsVal").innerText = numSiteVisits
    })
    .catch(() => {
      document.getElementById("numSiteVisitsVal").innerText = "Err"
    })
}

/////////////////////////////////////////////////

//User Data
let favoriteTopics = []

// Backup Data

let numSiteVisits = 0

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

  setupSiteVisits()
}

main()