"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const UserLinks = () => {
  const {status} = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders   </Link>
          <span onClick={()=> signOut()}>Logout</span>
        </div>
        
        ) 
        : 
        (<Link href="/login">Login</Link>)}
    </div>
  )
}

export default UserLinks
