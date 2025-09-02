let userData = null;

export const userStore = {
  setUser(data) {
    userData = data;
    localStorage.setItem('userData', JSON.stringify(data));
  },

  getUser() {
    if (!userData) {
      const stored = localStorage.getItem('userData');
      
      
      if (stored && stored !== 'undefined' && stored !== 'null' && stored !== '') {
        try {
          userData = JSON.parse(stored);
        } catch (error) {
          console.error('Erro ao fazer parse do userData:', error, 'Valor:', stored);
          userData = null;
          localStorage.removeItem('userData'); 
        }
      } else {
        return userData = null;
      }
    }
    return userData;
  },

  clearUser() {
    userData = null;
    localStorage.removeItem('userData');
  }
};