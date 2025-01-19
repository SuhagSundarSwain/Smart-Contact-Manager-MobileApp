import {createContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {SCM_BACKEND_SERVER} from '@env';

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

const ThemeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(useColorScheme() === 'dark');

  useEffect(() => {
    fetch(`${SCM_BACKEND_SERVER}/getTheme`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setDarkMode(data['theme'] === 'dark');
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
