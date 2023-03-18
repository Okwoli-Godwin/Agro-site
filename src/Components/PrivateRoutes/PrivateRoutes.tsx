// import React from 'react'
// import { Navigate } from "react-router-dom"
// import {useAppSelector} from "../Global/Store"


// const PrivateRoutes = ({ children }: any) => {
//     const selector = UseAppSelector((state) => state.Client)
  
//     if (selector?.name) {
//         return children;
//     } else {
//         <Navigate to="/" replace></Navigate>
//     }
// }

// export default PrivateRoutes

import React from 'react'

const PrivateRoutes = () => {
  return (
    <div>PrivateRoutes</div>
  )
}

export default PrivateRoutes