function registerServiceWorker() {
  if ('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('./sw.js')
    .then((registration)=>{
      console.log('Service worker registration successful');
    })
    .catch((err) => {
      console.log('Service worker registration failed', err);
    });
  }
}


export default registerServiceWorker;
