'use client'
import { createContext, useState,useEffect } from 'react'
const axios = require('axios')
export const AuthContext = createContext('asdf')

// useContext'in değerini güncellemek için gereken güncelleme kodlarını bile buraya yazmamız lazım.
// Dışarıdaki componentlerden sadece veriyi çekebiliriz. Dışarıda sadece güncelleme fonksiyonunu çağırır
// içine veri koyarız. Asla dışarıda sıfırdan ""bir güncelleme fonsk. yazamayız.

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(typeof window !== "undefined" ? localStorage.getItem("user") : null)

  const login = async (credentials) => {
    return await axios({
      method: 'post',
      url: 'http://localhost:4000/auths/login',
      data: credentials,
      withCredentials: true,
    })
      .then(function (response) {
        setCurrentUser(response.data)
      })
      // BURADA BACKENDDEN GÖNDERİLEN HATA MESAJINI YAKALIYORUZ.
      .catch(function (error) {
        throw error
      })
  }

  useEffect(() => {
    setCurrentUser(localStorage.getItem("user"))
  },[])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  },[currentUser])

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
}
