const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

			

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
	if(user){
		
		var email = user.email;
	}
	
}




auth.onAuthStateChanged(function(user){
	
	if(user){
		
		var email = user.email;
		alert(email + "is logged in");
		
		location.replace("index.html")
		
	}else{
		
		alert("No Active User,please sign up first!");

	}
	
	
	
});
