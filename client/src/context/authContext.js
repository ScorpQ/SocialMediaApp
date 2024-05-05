'use client'
import { createContext, useState } from 'react'
const axios = require('axios')
export const AuthContext = createContext('asdf')

// useContext'in değerini güncellemek için gereken güncelleme kodlarını bile buraya yazmamız lazım.
// Dışarıdaki componentlerden sadece veriyi çekebiliriz. Dışarıda sadece güncelleme fonksiyonunu çağırır
// içine veri koyarız. Asla dışarıda sıfırdan ""bir güncelleme fonsk. yazamayız.


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("EWFWEFW")) || null);

  const login = async (credentials) => {
    return await axios({
      method: 'post',
      url: 'http://localhost:4000/auths/login',
      data: credentials,
      withCredentials: true,
      })
      .then(function (response) {
        //console.log(response)
        setCurrentUser(response.data)
      })
        // BURADA BACKENDDEN GÖNDERİLEN HATA MESAJINI YAKALIYORUZ.
      .catch(function (error) {
        throw error
      })
    }


  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
}

//It doesn’t matter how many layers of components there are between the provider and the  Children.
// When a Children anywhere inside of provider calls useContext(AuthContext), it will receive "TEST" as the value.
