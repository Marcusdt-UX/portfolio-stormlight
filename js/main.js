var firebaseConfig = {
  apiKey: "AIzaSyAw9zagFAVtKyTnUX_GBZlWp_eVzOgAW7M",
  authDomain: "stormlight-b09f9.firebaseapp.com",
  databaseURL: "https://stormlight-b09f9-default-rtdb.firebaseio.com",
  projectId: "stormlight-b09f9",
  storageBucket: "stormlight-b09f9.appspot.com",
  messagingSenderId: "343413387550",
  appId: "1:343413387550:web:da2469c3c664bd5619d90f",
  measurementId: "${config.measurementId}"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.getElementById("contact").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.getElementById("contact").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }