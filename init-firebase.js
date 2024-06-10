

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    // ...
    apiKey: "AIzaSyCekhUNgktNe_beFMCld8y8_hyhRXvG7U0",
        authDomain: "exattend.firebaseapp.com",
        projectId: "exattend",
        storageBucket: "exattend.appspot.com",
        messagingSenderId: "555960313645",
        appId: "1:555960313645:web:b1ab1d9f48051499ecd5a4",
        measurementId: "G-TG55FBLZ97"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get Elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");

  //Add Login Event
  btnLogin.addEventListener('click', e => {
      const email = txtEmail.value;
      const password = txtPassword.value;

      const auth = firebase.auth();

      //sign in with firebase auth
      auth.signInWithEmailAndPassword(email, password).then(user =>{
          alert("Login Successful :)");
      }).catch(err => {
          alert(err.message);
      });
      
  });

  //Add Signup Event
  btnSignup.addEventListener('click', e => {

      //get email and password
      const email = txtEmail.value;
      const password = txtPassword.value;

      const auth = firebase.auth();

      //sign in with firebase auth
      const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
          alert("Signup Successful :)")
      }).catch(err => {
          alert(err.message);
      });
    });
  