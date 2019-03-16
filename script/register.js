let name = document.getElementById('fullname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let college = document.getElementById('college');
let mobile = document.getElementById('mobile');

let registerbtn = document.getElementById('registerbtn');
var db = firebase.firestore();
let User = {
  name:'',
  email:'',
  password:'',
  college:'',
  mobile:'',
};


registerbtn.addEventListener('click',register);

function register(e){
  console.log('Register')

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(result){
      //Store in Database
        
      User.name = name.value;
      User.email = email.value;
      User.password = password.value;
      User.college = college.value;
      User.mobile = mobile.value;
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(error);
  });
  
  

  //Clear the fields
  name.value = '';
  email.value = '';
  password.value = '';
  college.value = '';
  mobile.value = '';

  db.collection("users").add(User)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
     console.error("Error adding document: ", error);
  });

  e.preventDefault();
}