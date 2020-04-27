import firebase from 'firebase';

export const initializeFirebase = () =>{
    const config = {
        messagingSenderId: '394237423721'
    };
    firebase.initializeApp(config);
};

export const askForPremissionToReceiveNotifications = async () =>{
    try{
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log(`token: ${token}`);
        localStorage.setItem('notification-token', token);

        return token;
    }catch(error){
        console.error(error);
    }
}