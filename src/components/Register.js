import react, { useEffect, useRef, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs' 
import { FaCheck, FaTimes } from 'react-icons/fa' 

// User Input Validation
const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;

// User Input Password
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.]).{8,24}$/;


const Register = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // UseEffect to validate the username
  useEffect(() => {
    const result = user_regex.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // UseEffect to validate the password
  useEffect(() => {
    const result = pwd_regex.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.prevemtDefault();

    // If button is enabled with JS Hack
    const v1 = user_regex.test(user);
    const v2 = pwd_regex.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href='#'>Sign In</a>
          </p>
        </section>
      ) : (

      <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 
          'offscreen'} aria-live='assertive'>
              {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor='username'>
                Username:
                <span className={validName ? 'valid' : 'hide'}>
                  <FaCheck />
                </span>
                <span className={validName || !user ? 'hide' : 'invalid'}>
                  <FaTimes />
                </span>
              </label>
              <input 
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p id='uidnote' className={userFocus && user && 
              !validName ? 'instructions' : 'offscreen' }>
                <BsInfoCircle />
                 4 to 24 characters <br/>
                Must begin with a Letter. <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              <label htmlFor='password'>
                Password :
                <span className={validPwd ? 'valid' : 'hide'}>
                  <FaCheck />
                </span>
                <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                  <FaTimes />
                </span>
              </label>
              <input 
                type='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby='pwdnote'
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 
              'offscreen' }>
                <BsInfoCircle />
                 8 to 24 characters <br/>
                Must include uppercase and lowercase letters, a number and a special 
                character. <br />
                Allowed special characters:  
                <span aria-label='exclamation mark'>!</span>
                <span aria-label='at symbol'>@</span>
                <span aria-label='hashtag'>#</span>
                <span aria-label='dollar sign'>$</span>
                <span aria-label='percent'>%</span>
              </p>

              <label htmlFor='confirm_pwd'>
                Confirm Password :
                <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
                  <FaCheck />
                </span>
                <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
                  <FaTimes />
                </span>
              </label>
              <input 
                type='password'
                id='confirm_pwd'
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby='confirmnote'
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 
              'offscreen' }>
                <BsInfoCircle />
                 Passwords must match.
              </p>

              <button className='button' disabled={!validName || !validPwd || !validMatch ? true : false}>
                Sign Up
              </button>
          </form>
          <p>
            Already registered?<br/>
            <span>
              {/* Router right here! */}
              <a href='#'> Sign in</a>
            </span>
          </p>
      </section>
      )}
    </>
  )
}

export default Register