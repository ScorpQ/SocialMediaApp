'use client'
import "./navbar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Link from 'next/link'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


export default function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
    <div className="left">
      <Link href="/" style={{ textDecoration: "none" }}>
        <span>lamasocial</span>
      </Link>
      <HomeOutlinedIcon />
      {/* 
      {darkMode ? (
        <WbSunnyOutlinedIcon onClick={toggle} />
      ) : (
        <DarkModeOutlinedIcon onClick={toggle} />
      )}
      */}
      <GridViewOutlinedIcon />
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    <div className="right">
      <PersonOutlinedIcon />
      <EmailOutlinedIcon />
      <NotificationsOutlinedIcon />
      <div className="user">
        {/*
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
        */}
        <span>{currentUser?.name}</span>
      </div>
    </div>
  </div>
  )
}
