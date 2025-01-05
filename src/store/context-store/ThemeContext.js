import {createContext} from 'react';
import {useColorScheme} from 'react-native';

const ThemeContext = createContext({rkMode: false});

const ThemeContextProvider = ({children}) => {
  const darkMode = useColorScheme() === 'dark';
  return (
    <ThemeContext.Provider value={{darkMode}}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
