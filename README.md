# 0xVenture Capitalist

![0xVenture Capitalist Homepage](https://github.com/sov3333/0xVenture-Capitalist/assets/8282076/38768bd7-6b09-4ea5-9a7e-aeee6170b78d)

An idle/clicker/incremental browser game inspired by AdVenture Capitalist.

Invest in different businesses and gain revenue, starting out with a single lemonade stand. Hire managers to earn while you're away, and make as much money as possible!

## Technologies Used

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Languages: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [TypeScript](https://www.typescriptlang.org/)
- Framework: [React](https://react.dev/)
- Meta Framework: [Next.JS v13.4 with `app` directory](https://nextjs.org/docs)
- State Management: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Database & ORM: [MongoDB](https://www.mongodb.com/), [Prisma](https://www.prisma.io/mongodb)
- Authentication: [Auth.js](https://authjs.dev/)
- Design:

  - [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
  - [Radix UI](https://www.radix-ui.com/)
  - [Radix Icons](https://icons.radix-ui.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [React Hot Toast](https://react-hot-toast.com/)
  - [Framer Motion](https://www.framer.com/motion/)

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/sov3333/0xVenture-Capitalist.git
```

2. Install dependencies:

```bash
cd your-repo
npm i
```

3. Set up the database:

Create a MongoDB database and obtain the connection URL. Rename the `.env.example` file to `.env` and update the `DATABASE_URL` with your MongoDB connection URL.

Sync Prisma client API with the DB:

```bash
npx prisma db push
```

Whenever Prisma schema is changed, need to manually invoke `npx prisma db push` in order to accomodate the changes in the Prisma Client API.

4. Fill in remaining values in `.env`:

- `NEXTAUTH_SECRET` - use random hex string e.g. https://generate-secret.now.sh/32.
- `[AuthProvider]_ID` and `[AuthProvider]_SECRET` for Google/Twitter/Github.

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit http://localhost:3000 to see the app running.

## User Stories

- As a player, I want to invest in various businesses to generate revenue.
- As a player, I want to hire managers to earn money even when I'm not actively playing.
- As a player, I want to track my progress and see how much money I've earned.
- As a player, I want to upgrade my businesses to increase their revenue.
- As a player, I want to unlock new businesses as I progress in the game.
- As a player, I want to have an engaging and visually appealing user interface.

- As a player, I want to be guided on how to play when I first start playing.
- As a player, I want the experience of playing the game to be smooth with no errors.

## Wireframes

![0xVenture Capitalist Game Page](https://github.com/sov3333/0xVenture-Capitalist/assets/8282076/3550d8f8-9846-4fa2-b786-1ebb9d01c305)

## Approach

Using an iterative approach, first focusing on building the core functionality and gradually adding features to enhance the gameplay experience.

Here are the major steps taken during the development process:

1. **Project Setup**: Set up the development environment, including installing the necessary dependencies and configuring the project structure.

2. **Backend Development**: Build the backend using Node.js, Express, and MongoDB. Designed the database schema and implemented the API endpoints for creating, reading, updating, and deleting data.

3. **Frontend Development**: Implemented the frontend using React and Next.js. Designed the user interface, including the game mechanics, investment options, and revenue tracking. Used Tailwind CSS for styling and Framer Motion for animations.

4. **Integration**: Integrated the frontend with the backend, enabling seamless communication between the client and server. Implemented authentication using Auth.js to support user and admin logins with different access levels.

5. **Testing and Refinement**: Thoroughly tested the application to identify and fix any bugs or issues. Gathered feedback from users and made improvements based on their suggestions.

6. **Deployment**: Deployed the application to a hosting platform, making it accessible to users through a live URL.

Throughout the development process, followed best practices such as **\*\***\*\***\*\***\_\_**\*\***\*\***\*\***, writing clean and maintainable code, and using version control with Git.

## Unsolved Problems and Challenges

During the development process, encountered some challenges and had a few unsolved problems. These include:

1. **Optimization**: As the game progresses and the player accumulates more businesses and managers, the performance of the application may be impacted. Actively working on optimizing the code and implementing strategies such as data pagination and caching to improve the overall performance.

2. **Balance and Gameplay**: Balancing the game mechanics and ensuring an engaging gameplay experience is an ongoing challenge. Continuously refining the revenue generation, upgrade costs, and progression system to strike the right balance between challenge and reward.

3. **Security**: While authentication has been implemented using Auth.js, ensuring the security of user data and preventing unauthorized access is crucial. Taken measures to secure the application, but ongoing monitoring and updates are necessary to address any potential security vulnerabilities.

4. **User Feedback and Iteration**: Gathering user feedback and incorporating it into the application is an ongoing process. Encourage users to provide feedback and suggestions, which will help identify areas for improvement and enhance the overall user experience.

Despite these challenges, we are committed to addressing them and continuously improving the application to provide an enjoyable and seamless gaming experience.

## Acknowledgments

I would like to acknowledge the following resources that inspired and supported the development of 0xVenture Capitalist:

1. [AdVenture Capitalist | World's Easiest Game!](https://hyperhippo.com/games/adventure-capitalist/)

2. [The Math of Idle Games part 1](https://blog.kongregate.com/the-math-of-idle-games-part-i/)

![formula](https://user-images.githubusercontent.com/8282076/235336622-6ce21750-a825-48fe-b390-a821c7c03bfc.png)

## Conclusion

0xVenture Capitalist is a captivating idle/clicker/incremental browser game that allows players to invest in businesses, generate revenue, and strive for financial success. With its intuitive user interface, engaging gameplay mechanics, and seamless integration of backend and frontend technologies, the game offers an immersive experience for players.

Hope you enjoy playing 0xVenture Capitalist as much as I enjoyed creating it. Feel free to provide feedback, report any issues, or contribute to the project's ongoing development. Thank you!

## License

This project is licensed under the MIT License.
