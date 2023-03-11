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
    reject("Implement the database lookup later")
  })
}

function setTopicsOnPage(topics) {
  newHtml = ""
  for (const topic of topics) {
    newHtml += getTopicHtml(topic)
  }
  const topicListElem = document.getElementById("topicList")
  topicListElem.innerHTML = newHtml
}

function getTopicHtml(topic) {
  topicHtml = "<button class=\"btn btn-primary\">" + topic + "</button>"
  return topicHtml
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