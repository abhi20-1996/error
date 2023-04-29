
var signupBtn=document.getElementById("signup");
var logoutBtn=document.getElementById("logout");


signupBtn.addEventListener("click", (event) =>{
    event.preventDefault();
  var inName=document.getElementById("name").value;
var inEmail=document.getElementById("email").value;
var inPass=document.getElementById("pass").value;
  if(inName=="" || inEmail=="" || inPass==""){
  document.getElementById("error").style.display="block";
  }
 localStorage.setItem("name", inName)
  localStorage.setItem("email", inEmail)
  localStorage.setItem("passward", inPass)
    document.getElementById("head").style.display="none";
    document.getElementById("logni").style.display="none";
    document.getElementById("profile").innerHTML=
      `
      <h1>Profile</h1>
    <div>
      <p id="proname">Full Name:${inName}</p>
    </div>
    <div>
      <p id="proemail">Email:${inEmail}</p>
    </div>
    <div>
      <p id="propass">Passward:${inPass}</p>
    </div>
    <button id="logout">
      Logout
    </button>
    `
  }); 
logoutBtn.addEventListener("click", (event) =>{
  localStorage.setItem("name")
  localStorage.setItem("email")
  localStorage.setItem("passward")
  document.getElementById("head").style.display="block";
    document.getElementById("logni").style.display="block";
  
});
