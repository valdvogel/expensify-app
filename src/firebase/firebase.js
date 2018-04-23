import *  as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_DOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSASING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });

//     console.log(expenses);
// });

//child_remove
//child_changed
//child_added

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {

//         const expenses = [];

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });

//         console.log(expenses);
//     }).catch ((e) => {
//         console.log(e);
// });


// database.ref('expenses').push({
//     description: 'Expense 1',
//     note: 'Expense 1',
//     amount: 25.50,
//     createdAt: '23 / 04 / 2018'
// });

// database.ref('user').push({
//     name: 'Jose',
//     email: 'valdvogel@hotmail.com',
// });

// database.ref('notes/-LAHgeRQytbGsXAYma2T').on('value',(snapshot)=>{
//     console.log(snapshot.val());
// });


// database.ref('notes').push({
//     title: 'Coisa 1',
//     body:'corpo 1'
// });



// database.ref('notes').on('value',(snapshot)=> {
//     const o = snapshot.val();
//     console.log(o);
// });



// database.ref().on('value',(snapshot)=> {
//     const user = snapshot.val();

//     console.log(user.name,' is in ', user.location.city);
// });


// database.ref('notes').on('value',(snapshot)=> {
//     console.log(snapshot.val());
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         console.log(snapshot.val());
//     })
//     .catch(()=>{
//         console.log('failed ==>>' ,e);
//     });

// database.ref().set({
//     name: "Jose Valdvogel",
//     age: 33,
//     isSingle: true,
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }

// }).then(()=>{
//     console.log('save');
// }).catch((e)=>{
//     console.log('failed ==>>' ,e);
// });

// database.ref().update({
//     name: "Jose",
//     age:34,
//     job: "developer"
// });


//database.ref('isSingle').set(null);

// database.ref('isSingle')
// .remove()
// .then(()=>{
//     console.log("Remove succeeded.");
// }).catch((e)=>{
//     console.log("Remove failed: " + e.message);

// });