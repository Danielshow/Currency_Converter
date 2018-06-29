function registerServiceWorker() {
  if ('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('../public/sw.js')
    .then(function(registration){
      console.log('Service worker registration successful');
    })
    .catch(function(err){
      console.log('Service worker registration failed', err);
    });
  }
}

export default registerServiceWorker;
