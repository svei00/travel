import react, { useEffect, useRef, useState } from 'react';

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
  const [marchFocus, setMatchFocus] = useState(false);

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

  return (
    <>
      <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 
          'offscreen'} aria-live='assertive'>
              {errMsg}
          </p>
          <h1>Register</h1>
          <form>
              <label htmlFor='username'>
                Username:
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
          </form>
      </section>
    </>
  )
}

export default Register