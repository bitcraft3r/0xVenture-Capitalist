export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    // add protected routes below
    "/profile", // BUG: page is unable to detect logged in on production
    "/admin",
  ]
};