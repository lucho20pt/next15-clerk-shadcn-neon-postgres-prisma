import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  import { Button } from '@/components/ui/button'
  
  const UserLogin = () => {
    return (
      <nav className="flex justify-center items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
  
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
  
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    )
  }
  
  export default UserLogin
  