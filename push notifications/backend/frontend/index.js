function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

const publickey = 'BPGqUbEHnALHDfJFkNBQyfpSI8EiRtXgj0tpEET0fmi7WAKquhCy_cBCnrE2kVAsLuDdyl6k7Cjb64rnkWmyniY';

//check for sw
if('serviceWorker' in navigator){
    send();
}

//register service worker
//register push
//send the push
async function send(){
    console.log('registering service worker');
    const register = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).catch(err => console.error(err));
    console.log('Service worker registered');


    console.log('registering push');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publickey)
    });
    console.log('push registered');

    console.log('sending push notification');
    await fetch('/subscribe', {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscription)
    });
    console.log('Push sent');
}