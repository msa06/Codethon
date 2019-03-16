let isLogin = false;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("User Login");
    isLogin = true;
    
  } else {
    // No user is signed in.
    console.log("User LogOut");
    isLogin = false;
   
  }
});

