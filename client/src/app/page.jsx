'use client'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Stories from "../components/stories"
import Posts from "../components/posts"
import Share from "../components/share"
import "./globals.css"


export default function Home() {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
  </div>
  )
}
