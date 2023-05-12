# 0xVenture Capitalist

0xVenture Capitalist is a browser game inspired by AdVenture Capitalist, where players invest in businesses to generate revenue and strive for financial success.

It is an idle/clicker/incremental game that educates players about investing, blockchain and cryptocurrencies.

<img width="640" alt="0xVenture Capitalist Homepage" src="https://github.com/sov3333/0xVenture-Capitalist/assets/8282076/4f5f7fd1-5daa-4536-8a59-75db3b0093ac">

![0xVenture Capitalist Gameplay x1.5 speed](https://i.imgur.com/z75a3jD.gif)

> _Invest in different blockchain businesses and gain revenue, starting out with a single lemonade stand. Hire managers to earn while you're away, and make as much money as possible._
>
> _Become a blockchain business tycoon, and **MAKE YOUR FORTUNE**!_

## Overview

### User Stories

- As a player, I want to invest in various businesses to generate revenue.
- As a player, I want to hire managers to earn money even when I'm not actively playing.
- As a player, I want to track my progress and see how much money I've earned.
- As a player, I want to upgrade my businesses to increase their revenue.
- As a player, I want to unlock new businesses as I progress in the game.
- As a player, I want to have an engaging and visually appealing user interface.
- As a player, I want to experience smooth gameplay with no errors.
- As a player, I want to learn about investing, blockchain and cryptocurrencies.
- As a player, I want to be guided on how to play when I first start playing.
- As a player, I want to earn rewards for playing the game.

### Wireframes

<img width="712" alt="0xVenture Capitalist Game" src="https://github.com/sov3333/0xVenture-Capitalist/assets/8282076/d760046f-7017-45e7-bf26-b8c32f50eac4">
<img width="641" alt="0xVenture Capitalist About" src="https://github.com/sov3333/0xVenture-Capitalist/assets/8282076/84ccd48a-59ff-4718-bf44-81473d8df519">

### Backend Routes

| CRUD | Method | Endpoint                              | Description                                                                                                                                         |
| ---- | ------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| C    | POST   | /api/auth/[...nextauth]               | Create new user.                                                                                                                                    |
| R    | GET    | /api/player/[email]                   | Get a `User` by `user.email`.                                                                                                                       |
| R    | GET    | /api/player/business/[userId]         | Get all `Business` with `userId`.                                                                                                                   |
| U    | PUT    | /api/player/business/buy/[userId]     | Buy a `Business` for `userId`, update `user.coins`, `business.quantity`, and `business.time` or `business.revenue` from unlock bonus if any.        |
| U    | PUT    | /api/player/business/collect/[userId] | Collect profits for `userId`, update `user.coins`.                                                                                                  |
| U    | PUT    | /api/player/business/manager/[userId] | Purchase a manager for `Business` for `userId`, update `user.coins` and `business.managerOwned`.                                                    |
| C    | POST   | /api/player/business/seed/[id]        | Create all `Business` and `Upgrade` for `userId`.                                                                                                   |
| R    | GET    | /api/upgrade/[userId]                 | Get all `Upgrade` with `userId`.                                                                                                                    |
| U    | PUT    | /api/upgrade/buy/[userId]             | Purchase an `Upgrade` for `userId`, update `user.coins`, `upgrade.purchased`, and `business.revenue`.                                               |
| D    | DELETE | /api/admin/reset/[userId]             | If requester's `user.admin === true`, delete all `Business` and `Upgrade` with `userId`, reset `user.coins` to 0, and increment `user.resets` by 1. |

## Technologies Used

The game is built using [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To provide a visually appealing user interface, an interactive and engaging experience, and with smooth gameplay mechanics, the following libraries are used:

- Languages: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [TypeScript](https://www.typescriptlang.org/)
- Framework: [React](https://react.dev/)
- Meta Framework: [Next.JS v13.4 with `app` directory](https://nextjs.org/docs)
- State Management: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Database & ORM: [MongoDB](https://www.mongodb.com/), [Prisma](https://www.prisma.io/mongodb)
- Authentication: [Auth.js](https://authjs.dev/)
- UI/UX:

  - [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
  - [Radix UI](https://www.radix-ui.com/)
  - [Radix Icons](https://icons.radix-ui.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [React Hot Toast](https://react-hot-toast.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Use Sound](https://github.com/joshwcomeau/use-sound)

- AI Tools:

  - [GitHub Copilot](https://github.com/features/copilot)
  - [ChatGPT](https://chat.openai.com/)
  - [Lexica](https://lexica.art/)

## Motivations & Approach

I decided to use `Next.js`, `TypeScript`, `Auth.js`, `Prisma`, `TailwindCSS` and `Radix UI` from the start. The usual process is to decide on a stack after the project is scoped, but I wanted to challenge myself to learn new technologies and build a full-stack application with a modern tech stack.

After the initial planning phase, I used an iterative approach to develop the game, first focusing on building the core functionality and gradually adding features to enhance the gameplay experience, and quickly work towards a working prototype.

This allowed me to launch the game publicly in 10 days, fix major bugs on launch day, and further iterate on it to improve the user experience.

Here are the major steps taken during the development process:

0. **Project Setup & Deployment**: Set up the development environment and install the necessary dependencies. Configure the Next.js v13 app router project structure and setup boilerplate for Navbar, Authentication, Prisma and DB connection. Deployed the application to Vercel early, enabling easier detection of bugs related to production vs localhost.

1. **Planning**: Brainstormed ideas and decided on "an educational game about finance/investing". Researched existing games to find inspiration for a game that would be fun play, technically challenging to build, and achieveable within the given timeframe. Found AdVenture Capitalist, and decided to clone it. Researched the game, learned from existing clones, and asked ChatGPT for help.

![ChatGPT assistant to build a browser game](https://github.com/sov3333/0xVenture-Capitalist/assets/8282076/88349f18-57c4-4c1a-8dc6-1cd2c19bb7e3)

2. **Backend Development**: Build the backend using the Next.js v13 app router, and MongoDB with Prisma for database. Designed the database schema and implemented the API endpoints for creating, reading, updating, and deleting data.

3. **Frontend Development**: Implemented the frontend using React, TypeScript and Next.js. Used Zustand for state management. Designed the user interface, including the game mechanics, investment options, and revenue tracking. Used Tailwind CSS for styling, Radix UI for pre-made components, React Hot Toast for notifications, Framer Motion for animations, and Use Sound for sound effects.

4. **Integration**: Integrated the frontend with the backend, enabling seamless communication between the client and server. Implemented passwordless OAuth 2.0 authentication using Auth.js to support user and admin logins with different access levels. Strived for 0 breaking/critical UX issues before launching publicly.

5. **Testing and Refinement**: Thoroughly tested the application to identify and fix any bugs or issues. Gathered feedback from users and made improvements based on their suggestions.

Throughout the development process, followed best practices such as limiting the use of `client components` to where user interaction is required, writing clean, DRY, and maintainable code, and using version control with Git.

## Challenges & Unsolved Problems

During the development process, encountered some challenges and had a few unsolved problems. These include:

0. **Performance & Optimization - Laggy UI & Critical UX Issues**:

It takes ~2 seconds for an action to get a response on the live server, if the action involves calling the backend API to Prisma to MongoDB and needs to wait for a response, especially if there are additional checks and multiple requests in a single action.

As the game progresses and the player accumulates more businesses and managers, the front-end components re-render more often and more backend api calls are made, and as a result, the performance of the application may be further impacted. Occassionally, a player's browser may run out of memory, causing the client to crash.

Furthermore, the higher the number of concurrent players, the more backend API calls are made, which may result in the server crashing.

Possible solutions to optimize the code and implement strategies to improve overall performance include:

- fix bugs that cause memory leaks (e.g. dismount timers when not in use, unsubscribe from event listeners, etc.)
- take advantage of server-side rendering and server components to reduce frontend load
- optimize use of `useState`, `useEffect`, `useRef` etc. to prevent unnecessary re-renders
- effective use of `useMemo` and `useCallback` etc. to memorize expensive values and computations
- optimize server & db locations to reduce latency (e.g. use CDN, or edge network)
- scale up server & db to handle more concurrent requests
- code splitting to reduce bundle size
- hydration to reduce time to interactive
- caching, lazy loading, data pagination to reduce number of API calls

1. **Performance & Optimization - MongoDB & Concurrent Players**:

MongoDB Altas free tier limitation ([source](https://www.mongodb.com/community/forums/t/request-limit-in-the-free-tier/9804/2)):

- _100 crud requests per second_ at max

To maximize usage, we want to reduce the number of API calls to MongoDB (per player, per second) as much as possible. Ideally, we want to make <1 CRUD request per second per player, so that we can have 100+ concurrent players while on the free tier.

In the initial version of the game, 1 API call to MongoDB is made every time revenue is auto-collected, which can be 20+ times per second per business. As a result, the app could only support less than 5 concurrent users. This is not scalable.

As a temporary solution, the auto-generated revenue is first saved to Zustand store, and then pushed to MongoDB every 30 seconds. In a perfect world, this scales the app up to enable a max of 3,000 concurrent players (3,000 requests / 30 seconds = 100 req/s) while on the free MongoDB tier.

Some other possible solutions include:

- queue API calls to MongoDB (e.g. use `Promise.all` to batch API calls)
- reduce API calls for remaining player actions (e.g. collect revenue manually, buy business, hire manager, etc.)
- throttle / rate limit the number of API calls
- use React Query (Tanstack Query) or Redis to cache data
- use GraphQL to reduce the number of API calls
- use "static" or "closure" functions

2. **Syncing Database vs Store/State**:

Notably, this version uses MongoDB as the primary source of truth, and Zustand was implemented later on to improve UX with instant updates to the UI.

As a result, there are 2 states to manage: the database and the store/state, and they are not always in sync.

There are several cases where a discrepancy occurs between the database and the store/state, where one is updated but not the other. This mostly involves the 30 second window when the auto-generated revenue is saved to the store but not yet pushed to the database. Examples include:

- the player refreshes the page, resulting in the store/state being reset to the database values.
- the player purchases an upgrade or investment, resulting in database value becoming negative while the store/state value is still positive.
- the profits earned when a player is actively playing vs when offline are calculated differently (offline profits pays pro-rated revenue vs if actively playing you would earn 0 if timer is not yet reached), resulting in offline profits being higher/faster.

Possible solutions include:

- use Zustand as primary source of truth with occassional updates to MongoDB

3. **Gameplay Bugs, Loopholes and Exploits**:

A major bug is that the player is able to purchase an upgrade multiple times, even though there are basic checks in place to try prevent multiple buys.

When purchasing the upgrade, the following checks are made on the backend API route:

- if the player has enough money to purchase the upgrade
- if the player has already purchased the upgrade

On the frontend, the purchase upgrade button is also disabled once the player clicks on it, until the function to purchase the upgrade is completed.

One possible reason for this bug is that almost-simultaneous calls manage to pass the check of `upgrade.purchased = false` and `coins > upgradeCost`.

Possible solutions:

- implement a more robust check on the backend API route
- disable the button on the frontend for a longer period of time
- implement a queue system to handle multiple requests
- implement a random delay (0-1s) before the purchase upgrade function is executed

4. **Security**:

Ensuring the security of user data and preventing unauthorized access is crucial.

Measures taken to secure the application include:

- using HTTPS
- using Auth.js for authentication
- using `next-auth` to create API routes
- using `next-auth` to create protected pages

Other security measures to consider:

- protect API routes such that they can't be called directly with bogus data and/or by user without authorization
- using `next-rate-limit` to limit the number of requests
- using `next-secure-headers` to set security-related HTTP headers
- using `next-csp` to set Content Security Policy headers
- etc.

5. **User Feedback, Testing and Iteration**:

While the application has been thoroughly tested, there may be some bugs or issues that have not been identified.

If you encounter any problems while playing the game, please report them [by creating an issue](https://github.com/sov3333/0xVenture-Capitalist/issues/new) so that they can be addressed.

Gathering user feedback and incorporating it into the application is an ongoing process. Encourage users to provide feedback and suggestions, which will help identify areas for improvement and enhance the overall user experience.

## Future Development

0. **Mobile-friendly UI**: The game is currently optimized for desktop and tablet screens, but not yet for mobile. This is a future development that will be implemented in the next version of the game.

1. **Cloning All Features**: Due to time constraints, not all features of AdVenture Capitalist were cloned. Some of the features that were not implemented include:

- angel investors (reset game)
- moon/mars expansion
- unlocks for 5,000+ quantity of businesses
- achievements (milestones)
- events
- advertisements
- etc.

2. **New Features**: Some new features that could be implemented in the future include:

- Leaderboard
- Web3 integration
- NFTs for players/characters, skins, etc.
- Weekly/monthly rewards
- Multiplayer
- etc.

3. **Explore Alternative Technologies**: Some other technologies that could be explored in the future include:

- JS frameworks: [Deno](https://deno.com/)+[Fresh](https://fresh.deno.dev/), [Svelte](https://svelte.dev/), [Astro](https://astro.build/), [Qwik](https://qwik.builder.io/), [Solid](https://www.solidjs.com/), [Bun](https://bun.sh/), [Vue](https://vuejs.org/)
- TypeScript libraries: [Zod](https://github.com/colinhacks/zod), [tRPC](https://trpc.io/)
- State management: [Jotai](https://jotai.org/), [Redux Toolkit](https://redux-toolkit.js.org/)
- Database: [Firebase](https://firebase.google.com/), [Supabase](https://supabase.com/), [Planetscale](https://planetscale.com/), [Cassandra](https://cassandra.apache.org/), [FaunaDB](https://fauna.com/), [PocketBase](https://pocketbase.io/), [CockroachDB](https://www.cockroachlabs.com/)
- Caching: [Tanstack Query](https://tanstack.com/query/latest) (also for state), [Redis](https://redis.io/) (also for db)
- Object Relational Mapper: [Drizzle](https://www.npmjs.com/package/drizzle-orm)
- Authentication: [Clerk](https://clerk.com/)
- Web3: [Thirdweb](https://thirdweb.com/), [Wagmi](https://wagmi.sh/), [Ethers](https://docs.ethers.org/v6/), [Siwe](https://docs.login.xyz/general-information/siwe-overview)
- Testing: [Playwright](https://playwright.dev/), [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/)
- API: [GraphQL](https://graphql.org/)
- Containerization: [Docker](https://www.docker.com/)
- Mobile frameworks: [React Native](https://reactnative.dev/), [Flutter](https://flutter.dev/)
- Game frameworks: [Unity](https://unity.com/), [Phaser](https://phaser.io/)
- Headless? Serverless? Edge? ["Edge is slower if data-fetching is involved but not optimized"](https://www.youtube.com/watch?v=yOP5-3_WFus)

References:

- [How to OVER Engineer a Website // What is a Tech Stack?](https://youtu.be/Sxxw3qtb3_g)
- [Web Development In 2023 - A Practical Guide](https://youtu.be/u72H_zZzkcw)
- [2023 JavaScript Predictions: What to Expect](https://youtu.be/8SgwWpm8M4Y)
- [2023 Frontend Dev and more](https://youtu.be/1v_TEnpqHXE?t=268)
- [7 better ways to create a React app](https://youtu.be/2OTq15A5s0Y)
- [I built the same app 10 times // Which JS Framework is best?](https://www.youtube.com/watch?v=cuHDQhDhvPE)
- [My Bleeding Edge Tech Stack for 2025](https://youtu.be/rFP7rUYtOOg)
- [5 dev trends to follow in 2023](https://youtu.be/J6lrVTrVHK4)

## Installation and Setup

0. Clone the repository:

```bash
git clone https://github.com/sov3333/0xVenture-Capitalist.git
```

1. Install dependencies:

```bash
cd your-repo
npm i
```

2. Set up the database:

Create a MongoDB database and obtain the connection URL. Rename the `.env.example` file to `.env` and update the `DATABASE_URL` with your MongoDB connection URL.

Sync Prisma client API with the DB:

```bash
npx prisma db push
```

Whenever Prisma schema is changed, need to manually invoke `npx prisma db push` in order to accomodate the changes in the Prisma Client API.

3. Fill in remaining values in `.env`:

- `NEXTAUTH_SECRET` - use random hex string e.g. https://generate-secret.now.sh/32.
- `[AuthProvider]_ID` and `[AuthProvider]_SECRET` for Google/Twitter/Github.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit http://localhost:3000 to see the app running.

## Acknowledgments

I would like to acknowledge the following resources that inspired and supported the development of 0xVenture Capitalist:

0. [AdVenture Capitalist | World's Easiest Game!](https://hyperhippo.com/games/adventure-capitalist/)

1. [The Math of Idle Games part 1](https://blog.kongregate.com/the-math-of-idle-games-part-i/)

![formula](https://user-images.githubusercontent.com/8282076/235336622-6ce21750-a825-48fe-b390-a821c7c03bfc.png)

2. AdVenture Capitalist clones in JavaScript by [@Rukmoni](https://github.com/Rukmoni/captialist--game), [@matart15](https://github.com/matart15/adventure-capitalist-clone) and [@Satttoshi](https://github.com/Satttoshi/idle-boss).

3. YouTube tutorials:

- [Next.js 13 - The Basics](https://youtu.be/__mSgDEOyv8)
- [Securely Fetching Data in NextJS 13 Server and Client Components!](https://youtu.be/RK3xRielPl4)
- [The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)](https://youtu.be/6aP9nyTcd44)
- [NextJS 13 Introduction - Building a fullstack app using Prisma & Mongodb](https://youtu.be/L5JU1oR29TM)
- [Set up a (Next.js + Zustand + Typescript) app | Part 1](https://youtu.be/J0IQ8Oe0AJE)
- [Authentication with Next Auth and Next.js 13](https://youtu.be/cDWytA0V2kI)
- [Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023](https://youtu.be/c_-b_isI4vg)

4. Icons on Flaticon.com created by [designbydai](https://www.flaticon.com/authors/designbydai), [Taufik Ramadhan](https://www.flaticon.com/authors/taufik-ramadhan), [Freepik](https://www.flaticon.com/authors/freepik), [justicon](https://www.flaticon.com/authors/justicon), [itim2101](https://www.flaticon.com/authors/itim2101), [Flowicon](https://www.flaticon.com/authors/flowicon), [Konkapp](https://www.flaticon.com/authors/konkapp), and [iconjam](https://www.flaticon.com/authors/iconjam).

5. Sound effects on Freesounds.org created by [yottasounds](https://freesound.org/people/yottasounds/), [JomelleJager](https://freesound.org/people/JomelleJager/), [Bertrof](https://freesound.org/people/Bertrof/), [Mr._Fritz_](https://freesound.org/people/Mr._Fritz_/), [The-Sacha-Rush](https://freesound.org/people/The-Sacha-Rush/), and [plasterbrain](https://freesound.org/people/plasterbrain/), and music on Itch.io created by [JDSherbert](https://jdsherbert.itch.io/minigame-music-pack?download).

## Conclusion

0xVenture Capitalist is a captivating idle/clicker/incremental browser game that allows players to invest in businesses, generate revenue, and strive for financial success. With its intuitive user interface, engaging gameplay mechanics, and seamless integration of backend and frontend technologies, the game offers an immersive experience for players.

Hope you enjoy playing 0xVenture Capitalist as much as I enjoyed creating it. Feel free to provide feedback, report any issues, or contribute to the project's ongoing development.

See you on the moon!

## License

This project is licensed under the MIT License.
