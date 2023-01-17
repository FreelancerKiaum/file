
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAelhv_8yEqJrobKwLKhrzBRKcOGJElrhw",
    authDomain: "auth-bd240.firebaseapp.com",
    projectId: "auth-bd240",
    storageBucket: "auth-bd240.appspot.com",
    messagingSenderId: "680910966187",
    appId: "1:680910966187:web:5d819711cc448b4c9396ee"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


  
  submitData.addEventListener('click', (e) => {

    var email = document.getElementById(email).value;
    var password = document.getElementById(psw).value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        alert("User create a sucessfuly");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

        alert(errorMessage)
    
});

  });