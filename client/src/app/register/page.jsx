'use client'
import { Button, Box, Flex, Text, TextInput, Group } from '@mantine/core'
import classes from './register.module.css'
import { useRouter } from 'next/navigation'

// good
//import ReservationCard from './ReservationCard'

export default function Page() {
  const router = useRouter()

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
          <TextInput variant='filled' description='Username' placeholder='Username' w='100%' pr='50' />
          <TextInput variant='filled' description='Email' placeholder='Password' w='100%' pr='50' />
          <TextInput variant='filled' description='Password' placeholder='Password' w='100%' pr='50' />
          <TextInput variant='filled' description='Name' placeholder='Password' w='100%' pr='50' />
          <Button className={classes.button}>Register</Button>
        </Group>
      </Flex>
    </Flex>
  )
}
