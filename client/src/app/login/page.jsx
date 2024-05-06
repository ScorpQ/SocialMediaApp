'use client'
import { Button, Box, Flex, Text, TextInput, Group } from '@mantine/core'
import classes from './login.module.css'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/authContext'

export default function Page() {
  const router = useRouter()
  const { login } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    user_name: '',
    password: '',
  })

  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: '',
  })

  const handleChange = ({ target }) => {
    setCredentials((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleClick = async () => {
    try{
      await login(credentials)
      router.push('/')
    }catch(e){
      setErrorMessage({
        error: true,  
        message: e.response.data, 
      })
    }
  }

  return (
    <Flex justify='center' align='center' className={classes.loginPage}>
      <Flex className={classes.loginPanel}>
        <Group className={classes.leftPanel}>
          <Text className={classes.leftTitleText}>Hello World.</Text>
          <Text className={classes.leftText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem
            dignissimos, error nam, consequatur.
          </Text>
          <Text className={classes.leftText}>Don't you have a account?</Text>
          <Button className={classes.button} onClick={() => router.push('/register')}>
            Register
          </Button>
        </Group>
        <Group className={classes.rightPanel}>
          <Text className={classes.rightTitleText}>Login</Text>
          <TextInput
            onChange={handleChange}
            name='user_name'
            variant='filled'
            description='Username'
            placeholder='Username'
            w='100%'
            pr='50'
          />
          <TextInput
            onChange={handleChange}
            name='password'
            variant='filled'
            description='Password'
            placeholder='Password'
            w='100%'
            pr='50'
          />
          <Button onClick={handleClick} className={classes.button}> 
            Login
          </Button>
          { errorMessage.error && errorMessage.message}
        </Group>
      </Flex>
    </Flex>
  )
}
