import { useEffect, useState } from "react";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();


export function useAuthentication() {
const [authenticated, setAuthenticated] = useState('loading');

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            console.log(user)
            if(user){
                setAuthenticated(user);
            } else {
                setAuthenticated();
            }
        }, (error)=>{
            console.log(error);
        })
    }, []);

    function login(){
        auth.signInWithPopup(provider);
    }
    function logout(){
        auth.signOut().then((resp)=>{

        }).catch((error)=>{

        })
    }


    return {
        login,
        logout,
        loggedIn: authenticated
    }
}

/*
auth.signInWithPopup(provider);
auth.onAuthStateChanged((user)=>{
console.log(user);
}, (error)=>{
  console.log(error);
});*/