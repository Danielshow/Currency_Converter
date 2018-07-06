import idb from './idb';

class DataBaseIdb{

  constructor(){
    this._dbPromise = this.openDatabase();
  }


  openDatabase(){
    if (!navigator.serviceWorker){
      return Promise.resolve();
    }
    return idb.open('converter-idb', 1, upgradedb => {
      let currencyVal = upgradedb.createObjectStore('currency', {keyPath: 'query'});
      /*
      currencyVal.put({
        query:'hello',
        amount: 10
      });
      */
      return currencyVal;
    });
  }

  addToDataBase(query, amount){
    this._dbPromise.then(db => {
        let tx = db.transaction('currency', 'readwrite');
        let currencyVal = tx.objectStore('currency');
        currencyVal.put({
          query,
          amount
        });
      });
    }

    getFromDataBase(query, cb){
      this._dbPromise.then(db => {
            return db.transaction('currency').objectStore('currency')
                    .get(query);
        }).then(value => {
          if (cb){
            cb(null, value);
          }
        })
        .catch(error => {
          if  (cb){
            cb(error, null)
          }
        });
    }

}


export default DataBaseIdb;
