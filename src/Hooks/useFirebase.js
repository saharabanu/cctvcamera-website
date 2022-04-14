import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();


const useFirebase =()=>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token,setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

// register user 
    const registerUser=(email,password,name,navigate)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    setError('');
    const newUser = {email,displayName:name };
    setUser(newUser);
    // // save user to database 
    saveUser(email,name,'POST');
    
    // send name to firebase after creation 
    updateProfile(auth.currentUser, {
      displayName: name,
      
    }).then(() => {
      
    }).catch((error) => {
     
    });
    navigate('/');
  })
  .catch((error) => {
    setError(error.code);
    
  }) 
  .finally(()=>setIsLoading(false));

    }
// login user 
    const loginUser =(email,password,location,navigate)=>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const destination = location?.state?.from || '/';
    navigate(destination);
    setError('');
  })
  .catch((error) => {
    setError(error.code);
  })
  .finally(()=>setIsLoading(false));
    }

    // google sign in 
    const signinWithGoogle =(location,navigate)=>{
      setIsLoading(true);
      
      signInWithPopup(auth, googleProvider)
      .then((result) => {
    
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    const destination = location?.state?.from || '/';
    navigate(destination);
    setError('');

    
  }).catch((error) => {
    setError(error.code)
  })
  .finally(()=>setIsLoading(false));
    }


  

    // observer user state 
    useEffect(()=>{
     const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(idToken =>{
               setToken(idToken)
              })
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return ()=> unsubscribed;
    },[]);

    useEffect(()=>{
      fetch(`https://lit-badlands-25658.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=> setAdmin(data.admin))
    },[user.email])



    const logOut =()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }
  


    const saveUser =(email,displayName, method)=>{
      const user ={email,displayName};
      fetch('https://lit-badlands-25658.herokuapp.com/users',{
        method: method,
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
      })
      .then()

    }

    return {
        user,
        admin,
        error,
        token,
        isLoading,
        registerUser,
        loginUser,
        signinWithGoogle,
        logOut
    }
}

export default useFirebase;