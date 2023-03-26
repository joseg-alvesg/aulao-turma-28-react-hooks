import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({
    image: '',
    id: '',
  });

  const context = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    data,
    setData,
  }), [
    email,
    password,
    data,
  ]);

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
