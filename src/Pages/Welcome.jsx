import { Button } from '@material-ui/core'
import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='MainHomeContainer'>
        <Link to='/Home'><Button className='EnterShop'>Enter</Button></Link>
    </div>
  )
}

export default Welcome