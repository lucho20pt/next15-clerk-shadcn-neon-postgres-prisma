# Next.js + Clerk + ShadCN + Neon + Prisma Boilerplate

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It integrates **Clerk** for authentication, **ShadCN** for UI components, **Neon** for PostgreSQL database hosting, and **Prisma** as the ORM.

## Features

- **Authentication**: Powered by [Clerk](https://clerk.dev) for user authentication and session management.
- **Database**: Uses [Neon](https://neon.tech) as the PostgreSQL database, with schema management via [Prisma](https://www.prisma.io).
- **UI Components**: Built with [ShadCN](https://shadcn.dev) for a modern and accessible design system.
- **Server Actions**: Includes server-side actions for syncing and fetching user data between Clerk and Neon.
- **Dark Mode**: Theme toggle functionality for light and dark modes.
- **Modular Components**: Refactored components for better maintainability and scalability.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/next15-clerk-shadcn-neon-postgres-prisma.git
cd next15-clerk-shadcn-neon-postgres-prisma
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`components/`**: Contains reusable UI components like `Sidebar`, `Header`, and `UserPanel`.
- **`actions/`**: Includes server-side actions like `syncUserAction` and `getUserFromNeon`.
- **`services/`**: Handles separation of concerns between Clerk and Neon with `clerk.service.ts` and `neon.service.ts`.
- **`prisma/`**: Contains the Prisma schema and migrations for managing the database.

## Features Implemented

### Authentication
- Integrated Clerk for user authentication.
- Synced user data from Clerk to Neon using `syncUserAction`.

### Database
- Used Prisma to define the `User` model and manage database interactions.
- Added `getUserFromNeon` to fetch user data from Neon.

### UI Components
- **Sidebar**: Acts as a container for components like `UserPanel` and navigation links.
- **UserPanel**: Displays user information (authenticated or unauthenticated) based on the user's state.

### Theme Toggle
- Added a theme toggle component to switch between light and dark modes.

## Learn More

To learn more about the tools and technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Clerk Documentation](https://clerk.dev/docs) - Learn about authentication with Clerk.
- [Prisma Documentation](https://www.prisma.io/docs) - Learn about database management with Prisma.
- [Neon Documentation](https://neon.tech/docs) - Learn about PostgreSQL hosting with Neon.
- [ShadCN Documentation](https://shadcn.dev) - Learn about building modern UI components.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.