"use client"

import Image from 'next/image'
import React from 'react'
import "./loginPage.css"
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const LoginPage = () => {

  const {data, status} = useSession();
  const router = useRouter();

  // console.log("data: " + data);
  // console.log("status: " + status);

  if (status === "loading") {
    return <p>...Loading...</p>
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className='login-container'>

      {/* BOX */}
      <div className='login-box'>

        {/* IMAGE CONTAINER  */}
        <div >
          <Image src="/loginBg.png" alt='' height={300} width={300} className='login-image'/>
        </div>

        {/* FORM CONTAINER  */}
        <div className='login-text'>
          <h1>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className='signin-button' onClick={() => signIn("google")}>
            <Image src="/google.png" alt='' height={20} width={20}/> 
            {/* provider name inside signin */}
            <span>Sign in with Google</span>
          </button>

          <button className='signin-button'>
            <Image src="/facebook.png" alt='' height={20} width={20}/>
            <span>Sign in with Facebook</span>
          </button>
          <p className='login-problem'>
            Have a Problem? <Link href="/contact" className='login-problem-link'> Contact us </Link>
          </p>
        </div>

      </div>
    </div>
  )
}

export default LoginPage
