'use client'
import { Button, Box, Flex, Text, TextInput, Group } from '@mantine/core'
import classes from './login.module.css'
import { useRouter } from 'next/navigation'

// good
//import ReservationCard from './ReservationCard'

export default function Page() {
  const router = useRouter()

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
          <TextInput variant='filled' description='Username' placeholder='Username' w='100%' pr='50' />
          <TextInput variant='filled' description='Password' placeholder='Password' w='100%' pr='50' />
          <Button className={classes.button}>Login</Button>
        </Group>
      </Flex>
    </Flex>
  )
}
