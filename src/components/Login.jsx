import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import AppContext from '../contexts/AppContext';
import './styles/Login.css';

const MAX_PASSWORD = 4;

export default function Login() {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const history = useHistory();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') {
      return setEmail(value);
    }
    setPassword(value);
  };

  const handleClick = () => {
    const validEmail = validator.isEmail(email);
    const validPassw = password.length > MAX_PASSWORD;
    if (validEmail && validPassw) {
      return history.push('/home');
    }
    global.alert('Email ou senha invalidos');
  };

  return (
    <div className="login">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Digite sua senha"
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Digite sua senha"
        onChange={ handleChange }
      />
      <button type="button" onClick={ handleClick }>Entrar</button>
    </div>
  );
}
