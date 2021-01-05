//declaring request in order to retrieve price data 
const request = require('request');

//produces a request based on a specific URL
function doRequest(url) {
    return new Promise(function (resolve, reject) {
      request(url, function (error, res, body) {
        if (!error && res.statusCode == 200) {
          resolve(body);
        } else {
          reject(error);
        }
      });
    });
}

//prints data to the terminal
function printInfo (price) {
    let satsPrice = price/100000000;
    let randomSats = Math.floor(Math.random() * 10000);
    let satsTotal = Math.round((satsPrice * randomSats) * 1000 + Number.EPSILON ) / 1000;

    console.log(`Price PER Sat: $${satsPrice}`);
    console.log(`Sats to purchase today: ${randomSats}`);
    console.log(`Total for Sats Purchased: $${satsTotal}`);
}

//retrieves the price data from blockchain.info
async function main() {
    let res = await doRequest('https://blockchain.info/de/ticker');
    
    const data = JSON.parse(res);
    value = (parseInt(data.CAD.buy, 10) + parseInt(data.CAD.sell, 10)) / 2;

    printInfo(value);
}

//title of program being converted to raw for the backslashes
const title = String.raw`

 $$$$$$\   $$$$$$\ $$$$$$$$\  $$$$$$\         $$$$$$\   $$$$$$\  $$\       $$$$$$\  
$$  __$$\ $$  __$$\\__$$  __|$$  __$$\       $$  __$$\ $$  __$$\ $$ |     $$  __$$\ 
$$ /  \__|$$ /  $$ |  $$ |   $$ /  \__|      $$ /  \__|$$ /  $$ |$$ |     $$ /  \__|
\$$$$$$\  $$$$$$$$ |  $$ |   \$$$$$$\        $$ |      $$$$$$$$ |$$ |     $$ |      
 \____$$\ $$  __$$ |  $$ |    \____$$\       $$ |      $$  __$$ |$$ |     $$ |      
$$\   $$ |$$ |  $$ |  $$ |   $$\   $$ |      $$ |  $$\ $$ |  $$ |$$ |     $$ |  $$\ 
\$$$$$$  |$$ |  $$ |  $$ |   \$$$$$$  |      \$$$$$$  |$$ |  $$ |$$$$$$$$\\$$$$$$  |
 \______/ \__|  \__|  \__|    \______/        \______/ \__|  \__|\________|\______/ 
`;

//print title to terminal
console.log(title);

//call for the sats
main();




