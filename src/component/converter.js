import https from 'https';

function convertCurrency(amount, fromCurrency, toCurrency, cb) {
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  const query = `${fromCurrency}_${toCurrency}`;

  const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;

  https.get(url, res => {
      let body = '';

      res.on('data', chunk => {
          body += chunk;
      });

      res.on('end', () => {
          try {
            const jsonObj = JSON.parse(body);

            const val = jsonObj[query];
            if (val) {
              const total = val * amount;
              cb(null, Math.round(total * 100) / 100);
            } else {
              const err = new Error(`Value not found for ${query}`);
              console.log(err);
              cb(err);
            }
          } catch(e) {
            console.log("Parse error: ", e);
            cb(e);
          }
      });
  }).on('error', e => {
        console.log("Got an error: ", e);
        cb(e);
  });
}

//uncomment to test
export default convertCurrency;
