import idb from 'idb';

var dbPromise = idb.open('test-db', 4, function(upgradeDb){
  //create another store
  switch(upgradeDb.oldVersion){
    case 0:
      let keyVal = upgradeDb.createObjectStore('keyval');
      keyVal.put('world', 'hello');

      //version 2
    case 1:
      upgradeDb.createObjectStore('people', {keyPath: 'name'});

      //added index to be able to sort
    case 2:
      var peopleStore = upgradeDb.transaction.objectStore('people');
      peopleStore.createIndex('animal', 'favoriteAnimal');

    case 3:
      var peopleStore = upgradeDb.transaction.objectStore('people');
      peopleStore.createIndex('age', 'age');
  }
});

//to read from the database

db.Promise.then(function(db){
  var tx = db.transaction('keyval');
  var keyVal = tx.objectStore('keyVal');
  return keyVal.get('hello');
}).then(function(val){
  console.log('the value of hello is', val)
})

//add a value to database

db.Promise.then(function(db){
  var tx = db.transaction('keyval', 'readwrite');
  var keyVal = tx.objectStore('keyval');
  keyVal.put('bar', 'foo');
  return tx.complete;
}).then(function(){
    console.log('Added');
})

db.Promise.then(function(db){
  var tx = db.transaction('keyval', 'readwrite');
  var keyVal = tx.objectStore('keyval');
  keyVal.put('cat', 'favoriteAnimal');
  return tx.complete;
}).then(function(){
  console.log('added');
})

db.Promise.then(function(db){
  var tx = db.transaction('people', 'readwrite');
  var peopleStore = tx.objectStore('people');
//put multikey keys and values
  peopleStore.put({
    name: 'daniel',
    age: 25,
    favoriteAnimal: 'cat'
  });

  peopleStore.put({
    name: 'tolu',
    age: 25,
    favoriteAnimal: 'dog'
  });

  return tx.complete;
}).then(function(){
  console.log('added');
})

//get all
db.Promise.then(function(db){
  var tx = db.transaction('people');
  var peopleStore = tx.objectStore('people');
  //animalIndex
  var animalIndex = peopleStore.index('animal');

  return animalIndex.getAll();
}).then(function(){
  console.log('yes');
})
//order by age

db.Promise.then(function(db){
  var tx = db.transaction('people');
  var peopleStore = tx.objectStore('people');

  var ageIndex = peopleStore.index('age');
  //cursor.update()
  //cursor.delete()
  //cursor.advance(2) skips two item
  //can use cursore to take the object one after the other
  return ageIndex.openCursor();
}).then(function logp(cursor){
  if (!cursor) return;
  console.log(cursor.value.name) //acess the className
  return cursor.continue().then(logp);//continue to the next
}).then(function(){
  console.log('done');
})
