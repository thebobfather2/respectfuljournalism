import { Button } from '@material-ui/core'
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='MainHomeContainer'>
        <Link to='/Landing'><Button className='EnterShop'>Enter Bobby Rabbits</Button></Link>
    </div>
  )
}

export default Home