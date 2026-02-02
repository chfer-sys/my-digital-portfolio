import { clerkMiddleware, createRouteMatcher, getAuth } from "@clerk/nextjs/server";
import { isAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";
import arcjet, { detectBot } from "@arcjet/next";

// Initialize Arcjet with your key from Vercel environment
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Detect and block automated bots
    detectBot({
      mode: "LIVE", // Block on detection; use "DRY_RUN" to test without blocking
      allow: [], // Allow known bots if needed
    }),
  ],
});

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher(['/admin','/resources(.*)', '/projects']);

export default clerkMiddleware(async (auth, req) => {
  // Check with Arcjet for bot detection
  const decision = await aj.protect(req);
  
  if (decision.isDenied()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (isProtectedRoute(req)) await auth.protect()
})




export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};