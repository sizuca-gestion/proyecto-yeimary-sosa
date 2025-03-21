export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/about",
    "/courses",
    "/courses/(.*)",
    "/data-protection",
    "/incidents",
    "/incidents/(.*)",
    "/privacy",
    "/profile",
    "/profile/(.*)",
    "/profile-history/(.*)",
    "/profiles/(.*)",
  ],
};
