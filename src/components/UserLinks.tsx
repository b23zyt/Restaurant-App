"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const UserLinks = () => {

  //get user status in client component using useSession
  const {status} = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders   </Link>
          <span onClick={()=> signOut()} style={{cursor: "pointer", marginLeft: "1rem"}}>Logout</span>
        </div>
        
        ) 
        : 
        (<Link href="/login">Login</Link>)}
    </div>
  )
}

export default UserLinks
