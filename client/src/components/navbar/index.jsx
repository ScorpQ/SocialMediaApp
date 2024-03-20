'use client'
import Image from 'next/image'
import { Autocomplete, Burger, Button, Box, Flex, Text, TextInput, Group } from '@mantine/core'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/navigation'
import classes from './header.module.css'

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
]

export default function Home() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
      {link.label}
    </a>
  ))

  return (
    <Flex className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='sm' />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom='sm'>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder='Search'
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom='xs'
          />
        </Group>
      </div>
    </Flex>
  )
}
