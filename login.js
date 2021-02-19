
document.getElementById("namebutton").addEventListener("click", display);
var displayname = document.getElementById("particularname");
var namebox = document.getElementById("name");
var contentbox = document.getElementById("results");

function display(){
    var name = document.getElementById("username").value;
    console.log(name);
    displayname.innerHTML = name;
    namebox.style.display = "none";
    contentbox.style.display = "flex";
    contentbox.style.flexDirection = "row";
}