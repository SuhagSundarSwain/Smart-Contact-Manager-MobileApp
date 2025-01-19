import {SCM_BACKEND_SERVER} from '@env';

export const setDarkThemeApi = async isDarkMode => {
  return fetch(`${SCM_BACKEND_SERVER}/setTheme`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({theme: isDarkMode ? 'dark' : 'light'}),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong...');
      }
      return res.json();
    })
    .then(data => {
      if (data['theme'] === 'dark') {
        return true;
      }
      return false;
    })
    .catch(err => {
      console.log(err);
      return !isDarkMode;
    });
};
