export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    // add protected routes below
    "/profile",
    "/admin",
  ]
};