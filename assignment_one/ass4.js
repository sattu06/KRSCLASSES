function printError(elemId, hintTag) {
  document.getElementById(elemId).innerHTML = hintTag;
}



var submit = document.getElementById("regbtn");
submit.onclick = function () {
  validateform();
 
};
function validateform() {
  var form = document.getElementById("myform");
  var name = myform.Name.value;
  var phone = myform.Phone.value;
  var email = myform.Email.value;
  var gender = myform.Gender.value;
  var qualification = myform.Qualification.value;
  var course = myform.Course.value;

  var country = myform.Country.value;
  var check = myform.Check;
  var check1 = myform.Check.value;
  var comment = myform.Comment.value;

  var nameerr = true;
  var phoneerr = true;
  var emailerr = true;
  var gendererr = true;
  var qualificationerr = true;
  var courseerr = true;
  var countryerr = true;
  var checkerr = true;
  var commenterr = true;

  if (name == "") {
    printError("nameerr", "Enter valid name");
  } else {
    printError("nameerr", "");
    nameerr = false;
  }
  if (phone == "") {
    printError("phoneerr", "Enter valid number");
  } else if (phone.length < 10 || phone.length > 12) {
    printError("phoneerr", "Enter valid number");
  } else {
    printError("phoneerr", "");
    phoneerr = false;
  }
  if (email == "") {
    printError("emailerr", "Enter valid email");
  } else if (email.includes("@)")) {
    printError("emailerr", "Enter valid email");
  } else {
    printError("emailerr", "");
    emailerr = false;
  }
  if (gender == "") {
    printError("gendererr", "Select your gender");
  } else {
    printError("gendererr", "");
    gendererr = false;
  }
  if (qualification == "") {
    printError("qualificationerr", "Select your qualification");
  } else {
    printError("qualificationerr", "");
    qualificationerr = false;
  }
  if (course == "") {
    printError("courseerr", "Select your course");
  } else {
    printError("courseerr", "");
    courseerr = false;
  }
  if (country == "Select") {
    printError("countryerr", "Please select your country");
  } else {
    printError("countryerr", "");
    countryerr = false;
  }
  if (!check.checked) {
    printError("checkerr", "please check the condition");
  } else {
    printError("checkerr", "");
    checkerr = false;
  }
  if (comment == "") {
    printError("commenterr", "Enter your comment");
  } else {
    printError("commenterr", "");
    commenterr = false;
  }

  if (
    (nameerr ||
      phoneerr ||
      emailerr ||
      gendererr ||
      qualificationerr ||
      courseerr ||
      countryerr ||
      checkerr ||
      commenterr) == true
  ) {
    return false;
  } else {
    var dataPreview =
      "You've entered the following details: \n" +
      "Full Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n";
    +"Email Address: " +
      email +
      "\n" +
      "Gender: " +
      gender +
      "\n" +
      "Qualification: " +
      qualification +
      "\n";
    "Course: " + course + "\n";
    "Country: " + country + "\n";
    "Comment: " + comment + "\n";
    alert(dataPreview);
  }
}