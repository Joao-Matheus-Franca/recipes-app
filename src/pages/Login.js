import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(INITIAL_STATE);

  const [btnDisabled, setBtn] = useState(true);

  const [redirect, setRedirect] = useState(false);

  const verifyInputs = () => {
    const minLength = 6;
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const password = state.password.length > minLength;
    const email = state.email.match(validEmail);
    if (password && email) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  useEffect(() => verifyInputs());

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email: state.email }));
    setRedirect(true);
  };

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="email">
        E-mail:
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ ({ target: { value } }) => {
            setState({ ...state, email: value });
          } }
        />
      </label>
      <br />
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ ({ target: { value } }) => {
            setState({ ...state, password: value });
          } }
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ btnDisabled }
        onClick={ handleClick }
      >
        Entrar
      </button>
      { redirect && <Redirect to="/meals" /> }
    </>
  );
}

export default Login;
