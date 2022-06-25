var requestUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=AUD,JPY,EUR&tryConversion=true'
var testUrl = 'https://v6.exchangerate-api.com/v6/cf8dd31c0dcdffdf669dd241/pair/EUR/USD/50.00';
var exchangeRate = document.querySelector('#rate');
var buttonEl = document.querySelector('#button');
var cryptoOption = document.querySelector('#optionCrypto');

var pageNumber = document.getElementById('#page')


function API() {
    fetch(testUrl)
        .then(function (r) {
            console.log(r);
            r.json()
                .then(function (data) {
                    console.log(data);
                })
        })
}
API();

buttonEl.addEventListener('click',function(){

    console.log(cryptoOption.value);
    fetch(requestUrl)

    .then(function(r){
        console.log(r)
        r.json()
        .then(function(data){
            console.log(data);
           return exchangeRate.textContent = data.AUD
        })

    }) 
});

function getNews() {
    var newsUrl = "https://newsdata.io/api/1/news?apikey=pub_85818e8fe3690ecbe2081cc04c5826a5838f&language=en&q=currency";
    fetch(newsUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayNews(data)
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};

var newsLinksContainer = document.getElementById("newsLinks");
 var newsEl = document.createElement('ul');

function displayNews(data) {
    const newsList = data.results;
    if (newsList.length === 0) {
        newsLinksContainer.textContent = 'No News found.';
        return;
    }
    for (var i = 0; i < 5; i++) {
        var newsLink = document.createElement('li');
        var newsLinkEl = document.createElement('a')
        newsLinkEl.setAttribute('href', newsList[i].link);
        var newsTitleEl = document.createElement('span');
        newsTitleEl.innerHTML = newsList[i].title;
        newsLinkEl.appendChild(newsTitleEl);
        newsLink.appendChild(newsLinkEl);
        newsEl.appendChild(newsLink)
        newsLinksContainer.appendChild(newsEl);
    }
}

getNews();