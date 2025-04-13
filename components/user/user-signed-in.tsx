import { SignedIn, UserButton } from '@clerk/nextjs'

const UserSignedIn = () => {
  return (
    <SignedIn>
      <UserButton
        appearance={{
          elements: { userButtonPopoverCard: { pointerEvents: 'initial' } },
        }}
      />
    </SignedIn>
  )
}

export default UserSignedIn
