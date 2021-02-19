
// document.getElementById("namebutton").addEventListener("click", display);
// var displayname = document.getElementById("particularname");
// var namebox = document.getElementById("name");
// var contentbox = document.getElementById("content");

// function display(){
//     var name = document.getElementById("username").value;
//     console.log(name);
//     displayname.innerHTML = name;
//     namebox.style.display = "none";
//     contentbox.style.display = "flex";
//     contentbox.style.flexDirection = "row";
// }



// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCyW46_8ogSNxiXXRffoEe5uMcsqiwhfU",
    authDomain: "idassignment3.firebaseapp.com",
    projectId: "idassignment3",
    storageBucket: "idassignment3.appspot.com",
    messagingSenderId: "1035894007629",
    appId: "1:1035894007629:web:2cb5dbc8958c88957eb904"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
