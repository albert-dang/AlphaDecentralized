var redditStocks
fetch(`https://dangitsal.pythonanywhere.com/api/redditstocks`)
.then(response => response.json())
.then((jsonData) => {
    console.log(JSON.stringify(jsonData))
    redditStocks = jsonData
})
.catch((error) => {
console.error(error)
})