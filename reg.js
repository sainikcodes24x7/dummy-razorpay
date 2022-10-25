const firebaseConfig = {
    apiKey: "AIzaSyB7YE_AeEMUc_TtVpbuW7sTQ9ccW2YWwjY",
    authDomain: "reg-form-cd759.firebaseapp.com",
    databaseURL: "https://reg-form-cd759-default-rtdb.firebaseio.com",
    projectId: "reg-form-cd759",
    storageBucket: "reg-form-cd759.appspot.com",
    messagingSenderId: "742824896353",
    appId: "1:742824896353:web:93482252a6553f416a8720"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
//   var msgContent = getElementVal("msgContent");
  var phone = getElementVal("phone");
  var college = getElementVal("college");
  var year = getElementVal("year");
  var ieee = getElementVal("ieee");
  var address = getElementVal("address");

  saveMessages(name, emailid, phone, college, year, address, ieee);
  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();


  }

  const saveMessages = (name, emailid, phone, college, year, address, ieee) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      college: college,
      year: year,
      address: address,
      ieee: ieee,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };