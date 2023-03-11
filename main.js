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
  topicListElem.innerHTML = "" // Remove all current children

  for (const topic of topics) {
    // let newHtml = getTopicHtml(topic);
    let button = document.createElement("button")
    
    button.textContent = topic
    button.className = "btn btn-primary"
    button.addEventListener("click", () => {
      getAndSetGraph(topic)
    })

    topicListElem.appendChild(button)
  }
}

function getAndSetGraph(topic) {
  getData(topic)
    .catch(() => {
      document.getElementById("graph").innerHTML = "<p> Oh no! There was an error retrieving your" 
      + "data for the topic: " + topic + " please try another topic.</p>";
    })
}

function getData(topic) {
  return new Promise((resolve, reject) => {
    //Get the data for a specific topic
    reject("Implement the database lookup later")
  })
}

function getSiteVisits() {
  return new Promise((resolve, reject) => {
    //Get the data for How many site visits there ahve been
    reject("Implement the database lookup later")
  })
}

function getNumFavoriteTopics() {
  return new Promise((resolve, reject) => {
    //Get the data for a how many favorite topics they have later
    reject("Implement the database lookup later")
  })
}

function setFavorite() {
  return new Promise((resolve, reject) => {
    //Set the favorite in the database later
    reject("Implement the database lookup later")
  })
}

function getFavorites() {
  return new Promise((resolve, reject) => {
    //Get the Favorites data later
    reject("Implement the database lookup later")
  })
}

/////////////////////////////////////////////////

// Main Code

getAndSetTopics()

/////////////////////////////////////////////////

// Backup Data

backupTopics = [
  "Instagram",
  "Cooking",
  "Sports",
  "Rock Climbing"
]