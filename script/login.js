
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    document.getElementById('logoutbtn').style.display = "block";
  } else {
    
    document.getElementById('logoutbtn').style.display = "none";
  }
});
let User = {
  name:'',
  email:'',
  password:'',
  college:'',
  mobile:'',
};

var db = firebase.firestore();
db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      User = doc.data()
      console.log(User.name);
      
  });
});
const email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      loginbtn = document.querySelector('#loginbtn'),
      logoutbtn = document.querySelector('#logoutbtn');

loginbtn.addEventListener('click',login);
logoutbtn.addEventListener('click',logout);


function login(e){

  firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(error);
  });

  //Clear Data
  email.value = '';
  password.value = '';

  e.preventDefault();
}
function logout(e){

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  e.preventDefault();

}

