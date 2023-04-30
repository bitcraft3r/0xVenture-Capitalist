# Blockchain Billionaire

A game inspired by AdVenture Capitalist.

- [Next.JS v13.3 with `app` directory](https://beta.nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
- [Prisma](https://www.prisma.io/mongodb)
- [PlanetScale](https://planetscale.com/)
- [Auth.js](https://authjs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Radix Icons](https://icons.radix-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)
- [ESLint](https://eslint.org/)
- State Management: React Query / Zustand ?

## Setup

1. Create app
   `npx create-next-app@latest --experimental-app`

2. Prisma with Planetscale (MySQL)

```
npm install prisma --save-dev
npx prisma init --datasource-provider mysql

# after setup `schema.prisma`, and add `DATABASE_URL` in `.env`:
npx prisma db push

# new collections should now appear in db
```

Run `npx prisma db push` whenever new changes made to `schema.prisma`.

https://www.prisma.io/docs/guides/database/planetscale

For vercel setup: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue.

3. Prisma with Auth.js

```
npm install next-auth @prisma/client @next-auth/prisma/adapter
```

Then setup `PrismaClient` in `@/app/libs/prismadb.ts`, and `PrismaAdapter` in `@/pages/api/auth/[...nextauth].ts`: https://authjs.dev/reference/adapter/prisma.


## References

1. [The Math of Idle Games part 1](https://blog.kongregate.com/the-math-of-idle-games-part-i/)

![formula](https://user-images.githubusercontent.com/8282076/235336622-6ce21750-a825-48fe-b390-a821c7c03bfc.png)
