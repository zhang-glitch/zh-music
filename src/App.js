
import React, { memo } from 'react'

import "assets/css/base.css"
import Footer from "components/footer"
import Header from "components/header"

import {useRoutes} from 'react-router-dom';
import routes from '@/router'

import {AppWrapper} from './style'
import PlayTools from '@/components/play-tools'

const App = memo(() => {
  const element = useRoutes(routes)
  return (
    <AppWrapper>
      <Header />
      {element}
      <PlayTools />
      <Footer />
    </AppWrapper>
  )
})

export default App;
