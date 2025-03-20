import { SignedIn, UserButton } from '@clerk/nextjs'

const UserSignedIn = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <SignedIn>
        <UserButton
          appearance={{
            elements: { userButtonPopoverCard: { pointerEvents: 'initial' } },
          }}
        />
      </SignedIn>
    </div>
  )
}

export default UserSignedIn
