chrome.storage.sync.get("enable", (res) => {
    if (res.enable) {
        var div = document.createElement("div");
        var imgPath = chrome.extension.getURL('img/mohawk.jpg');
        div.innerHTML = `<div id="clippy"></div>
                            <img id="clippyImg" src=${imgPath}/>`;
        document.body.appendChild(div);

        const quotesURL = chrome.runtime.getURL('quotes.json');
        var quotes;
        fetch(quotesURL).then((response) => response.json())
            .then((json) => {
                quotes = json;
                sayQuote(quotes);
                setInterval( () => sayQuote(quotes), 5000 + Math.random()*3000);
            })
            .catch((error) => console.log(error, error.message));
        
        
    }    

});

function sayQuote(qts) {
    var quote = qts.quotes[Math.floor(Math.random() * qts.quotes.length)];
    document.getElementById("clippy").innerHTML = `<div id="speech-bubble"><p>${quote}</p></div>`;
    console.log(quote);
}