import React from 'react'
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './trip.css';
import './sign.css';

const google = window.google;

function Sign() {

    const {user, setUser } = useState({}) // Remember to don't use useState to save the user in a fullstack app. Instead of that you can use Redux or globalState

    function handleCallbackResponse(response) {
      console.log('Encode JWT ID Token: ' + response.credential);
      let userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      // document.getElementById('signInDiv').hidden = true; // hiddens the button    
    }

    function handleSignOut(event) {
        setUser({});
        // document.getElementById('signInDiv').hidden = false; // shows the button
    }
  
    useEffect(() => {
      /* Globla Google */
      google.accounts.id.initialize({
        client_id: '271074291629-mj4p3p44fvgaf08p71darrmhloqtivf7.apps.googleusercontent.com', // Your client id
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        { theme: 'outline', size: 'large' }
      );
        
        // If you want to validate throug Chrome
        // google.accounts.id.prompt();

    }, []);

    // If we have no user: Sign in button
    // If we have user: Show the log out button
  

  return (
    <div className='trip'>
        <div id='signInDiv'> Render?</div>
        {/* { Object.keys(user).length !== 0 &&
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>    
        } */}
        
        {
            user && 
            <div>
                <h1>Do I render?</h1>
                <img src={user.picture} alt='profile'></img>
                <h3>{user.name}</h3>
            </div>
        }
    </div> 
  )
}

export default Sign