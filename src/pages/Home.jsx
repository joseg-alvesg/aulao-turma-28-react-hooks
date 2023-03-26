import React, { useCallback, useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import './styles/home.css';

export default function Home() {
  const { email, data, setData } = useContext(AppContext);

  const fetchData = useCallback(async () => {
    const request = await fetch('https://api.thedogapi.com/v1/images/search');
    const response = await request.json();
    setData({ image: response[0].url, id: response[0].id });
  }, [setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="home">
      <p>
        Usuario logado
        {' '}
        <span>{email}</span>
      </p>
      <img src={ data.image } alt={ data.id } />
      <button type="button" onClick={ fetchData }>Doguinho aleatorio</button>
    </div>
  );
}
