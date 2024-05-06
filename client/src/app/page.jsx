'use client'
const sass = require('sass');
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

// good
import Navbar from '../components/navbar'


export default function Home() {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)
  return (
<>
  <Navbar/>
  <h1>TEST</h1></>
  )
}
