import React from 'react'
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const google = window.google;

function Sign() {

    const {user, setUser } = useState({}) // Remember to don't use useState to save the user in a fullstack app. Instead of that you can use Redux or globalState

    function handleCallbackResponse(response) {
      console.log('Encode JWT ID Token: ' + response.credential);
      let userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);    
    }
  
    useEffect(() => {
      /* Globla Google */
      google.accounts.id.initialize({
        client_id: '',
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        { theme: 'outline', size: 'large' }
      );
  
    }, []);

    // If we have no user: Sign in button
    // If we have user: Show the log out button
  

  return (
    <div>
        <div id='signInDiv'></div>
        {
            user && 
            <div>
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
            </div>
        }
    </div>
  )
}

export default Sign