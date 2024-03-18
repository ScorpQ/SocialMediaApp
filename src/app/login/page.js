import { Container, Flex } from '@mantine/core'
import classes from './login.module.css'
export default function Page() {
  return (
    <Flex justify='center' align='center' className={classes.loginPage}>
      <Container m={10} size='60rem' className={classes.loginPanel}>
        30rem Container without padding 0rem Container without padding 0rem Container without padding 0rem Container
        without pa0rem Container without padding0rem Container without padding0rem Container without padding0rem
        Container without paddingdding
      </Container>
    </Flex>
  )
}
