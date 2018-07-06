import https from 'https';
import DataBaseIdb from './database';

const p = new DataBaseIdb();
//p.addToDataBase();

function convertCurrency(amount, fromCurrency, toCurrency, cb) {
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);

  const query = `${fromCurrency}_${toCurrency}`;
  const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;
  p.getFromDataBase(query, (error, value) =>{
    if (error){
      return cb(error);
    }

    if (!value){
      https.get(url, res => {
          let body = '';

          res.on('data', chunk => {
              body += chunk;
          });

          res.on('end', () => {
              try {
                const jsonObj = JSON.parse(body);

                const val = jsonObj[query];
                p.addToDataBase(query, val);

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
    else{
          let total = value.amount * amount;
          cb(null, (Math.round(total * 100) / 100));
        }
  })
}


export default convertCurrency;
