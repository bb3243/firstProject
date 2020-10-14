let trumpData;


window.addEventListener('load', function () {
    console.log('page is loaded');
    fetch("Trump2.json")
    .then(response => response.json())
    .then(data => {
        console.log("number of tweets available:" + data.length);
        let nameElement = document.getElementById('Trump-tweet');
        nameElement.innerHTML = data.length;
    })

    let button = document.getElementById('trump-random-button');
    button.addEventListener('click', function() {
        fetch("Trump2.json")
        .then(response => response.json())
        .then(data => {
            console.log("Random button was clicked");
            //pick a random tweet
            let randomNumber = Math.floor(Math.random()*data.length);

            //populating the info
            let nbrElement = document.getElementById('t-nbr');
            nbrElement.innerHTML = randomNumber;

            let txtElement = document.getElementById('t-txt');
            txtElement.innerHTML = data[randomNumber].text;

            let favoriteElement = document.getElementById('t-favorite');
            favoriteElement.innerHTML = data[randomNumber].favorite_count;

            let retweetElement = document.getElementById('t-retweet');
            retweetElement.innerHTML = data[randomNumber].retweet_count;

            let isRetweetElement = document.getElementById('t-isRetweet');
            isRetweetElement.innerHTML = data[randomNumber].is_retweet;
        })

        .catch(err => {
             console.log("error!!" + error);

            let nbrElement = document.getElementById('t-txt');
            nbrElement.innerHTML = "";

            let txtElement = document.getElementById('t-txt');
            txtElement.innerHTML = "Could not find a tweet! It's a fake news!";

            let favoriteElement = document.getElementById('t-favorite');
            favoriteElement.innerHTML = "";

            let retweetElement = document.getElementById('t-retweet');
            retweetElement.innerHTML = "";

            let isRetweetElement = document.getElementById('t-isRetweet');
            isRetweetElement.src = "";
        })
    })

    
})

let button = document.getElementById('trump-button');
button.addEventListener('click', function() {
    let inputText = document.getElementById("trump-input").value;

    fetch("Trump2.json")
    .then(response => response.json())
    .then(data => {
        console.log("Find button was clicked");
        let inputText = document.getElementById("trump-input").value;
        console.log(inputText);

        let results = [];
        //console.log(data);
        for (var i=0 ; i < data.length ; i++)
                {

                if (data[i].text.includes(inputText)) {
                    //results.push(data[i].text);
                    results.push(data[i]);
                    console.log(results);
                    //data.list[i].text.find( record => record.name === inputText)
                    //  let searchElement = document.getElementById('t-search');
                    //  //searchElement.innerHTML = results.push(data[i].text);
                    //  searchElement.innerHTML = results;
                    
                }                 
        }
        console.log(results.length);
        trumpData = results.length;
    })
})

function setup(){
    console.log("Setup!");
    createCanvas(600,400);
    background(210,50,50);

}
function draw(){
    ellipse (300,300,50);
    if (trumpData){
        for (let i=0; i< trumpData; i++){
            ellipse(50 + (50*i), 200, 25);
        }
    }
  
}