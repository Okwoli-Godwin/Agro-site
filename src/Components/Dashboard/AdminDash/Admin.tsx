import React from 'react'
import Dashhead from '../Dashhead'
import Side from './Side'

const Admin = () => {
  return (
    <div style={{display:"flex"}}>
      <div>
        <Dashhead/>
        <Side/>
      </div>
    </div>
  )
}

export default Admin