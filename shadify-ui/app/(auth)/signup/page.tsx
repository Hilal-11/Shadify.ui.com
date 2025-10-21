import React from 'react'

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { SignUp } from '@clerk/nextjs'

function signUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp />
    </div>
  )
}

export default signUp
