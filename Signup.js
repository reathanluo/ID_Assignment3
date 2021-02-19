	
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
	
}



function signIn(){
	
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
	
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
