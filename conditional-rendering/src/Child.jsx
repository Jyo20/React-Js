import React from 'react'
///**********************************if else Statement******* */
export default function Child({isLoggedIn}) {
  if(isLoggedIn){
    return (
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>User_Name </li>
            <li>Logout</li>
        </ul>
    )
  }else{
    return(
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Login</li>
            <li>Signup</li>
        </ul>
    )
  }
}


//*****************************Ternary Operator within jsx */

import React from 'react'

export default function Child({isLoggedIn}) {
    let Guest=()=>{
        return(
            <>
            <li>Signup</li>
            <li>Login</li>
            </>
        )
    }
    let User=()=>{
        return(
            <>
            <li>User_Name</li>
            <li>Logout</li>
            </>

        )
    }
  return (
    <>
    <ul>
       <li>Home</li>
       <li>Products</li>
       <li>About</li>
       {isLoggedIn==true ? <User/>:<Guest/>}
        </ul>
        </>
  )
}

//***************Switch Case */

import React from 'react'

export default function Child({isLoggedIn}) {
    switch(isLoggedIn){
        case true:
            return(
                <>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>User_Name</li>
                    <li>Logout</li>
                </ul>
                </>
            )
            case false:
                return(
                    <>
                    <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Signup</li>
                    </ul>
                    </>
                )
                default :
                        <></>
    }
   
 
}
