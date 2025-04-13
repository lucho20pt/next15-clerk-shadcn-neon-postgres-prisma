import { SignInButton, SignUpButton, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const UserSignedOut = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <SignedOut>
        <SignInButton
          mode="modal"
          appearance={{
            elements: { modalContent: { pointerEvents: 'initial' } },
          }}
        >
          <Button variant="outline">Sign In</Button>
        </SignInButton>

        <SignUpButton
          mode="modal"
          appearance={{
            elements: { modalContent: { pointerEvents: 'initial' } },
          }}
        >
          <Button variant="outline">Sign Up</Button>
        </SignUpButton>
      </SignedOut>
    </div>
  )
}

export default UserSignedOut
