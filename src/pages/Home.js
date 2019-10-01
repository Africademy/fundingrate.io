import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Assets from '../components/Assets'
import { Button, Flex, Box, Text, Image, Sidebar } from '../primitives'

const SideNav = ({ links }) => {
  const onClick = p => {
    return console.log("Button Clicked:", p)
  }

  return (
    <Sidebar>
      <Flex alignItems="center" my={3}>
        <Image mr={2} src={Assets.Icons.Popular} size={28} /> Dashboard
      </Flex>
      {links.map(({ label, href }) => {
        return (
          <Button key={label} type="simple" onClick={onClick}>
            {label}
          </Button>
        )
      })}
    </Sidebar>
  )
}

const Home = p => {
  const links = [
    { label: 'Events', href: '/events' },
    { label: 'Trades', href: '/trades' },
    { label: 'Stats', href: '/Stats' },
  ]

  return (
    <Flex
      width={1}
      height={'100%'}
      bg="backing"
      // justifyContent="center"
      alignItems="center"
    >
      <SideNav links={links} />
      {/* <Header /> */}
      Hello World!
      {/* <Footer /> */}
    </Flex>
  )
}

export default Home