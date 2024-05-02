'use client'
import { Button, Box, Flex, Text, TextInput, Group } from '@mantine/core'
import classes from './register.module.css'
import { useRouter } from 'next/navigation'
const axios = require('axios')
import { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    name: '',
    user_name: '',
    password: '',
    email: '',
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

  const handleClick = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/auths/register',
      data: credentials,
    })
      .then(function (response) {
        console.log(response)
        setErrorMessage((prev) => ({ ...prev, error: false }))
      })

      // BURADA BACKENDDEN GÖNDERİLEN HATA MESAJINI YAKALIYORUZ.
      .catch(function (error) {
        setErrorMessage({
          error: true,
          message: error.response.data,
        })
      })
  }

  return (
    <Flex justify='center' align='center' className={classes.loginPage}>
      <Flex className={classes.loginPanel}>
        <Group className={classes.leftPanel}>
          <Text className={classes.leftTitleText}>Lama Social.</Text>
          <Text className={classes.leftText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem
            dignissimos, error nam, consequatur.
          </Text>
          <Text className={classes.leftText}>Do you have a account?</Text>
          <Button className={classes.button} onClick={() => router.push('/login')}>
            Login
          </Button>
        </Group>
        <Group className={classes.rightPanel}>
          <Text className={classes.rightTitleText}>Register</Text>
          <TextInput
            variant='filled'
            description='Username'
            name='user_name'
            onChange={handleChange}
            placeholder='Username'
            w='100%'
            pr='50'
          />
          <TextInput
            variant='filled'
            description='Email'
            name='email'
            onChange={handleChange}
            placeholder='Password'
            w='100%'
            pr='50'
          />
          <TextInput
            variant='filled'
            description='Password'
            name='password'
            onChange={handleChange}
            placeholder='Password'
            w='100%'
            pr='50'
          />
          <TextInput
            variant='filled'
            description='Name'
            name='name'
            onChange={handleChange}
            placeholder='Password'
            w='100%'
            pr='50'
          />
          <Button className={classes.button} onClick={handleClick}>
            Register
          </Button>
          {errorMessage.error && errorMessage.message}
        </Group>
      </Flex>
    </Flex>
  )
}
