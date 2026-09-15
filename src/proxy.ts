import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Temporary redirect of the whole site to GitHub.
//
// This expires on its own: after REDIRECT_UNTIL the proxy stops
// redirecting and the site serves normally again, so nobody has to remember
// to undo it. Delete this file once it is no longer wanted.
//
// Midnight Pacific on 18 Sept 2026, i.e. the 15th, 16th and 17th are
// redirected and the site is back on the 18th.
const REDIRECT_UNTIL = Date.parse("2026-09-18T07:00:00Z");
const TARGET = "https://github.com/m13v";

export default function proxy(request: NextRequest) {
  if (Date.now() >= REDIRECT_UNTIL) {
    return NextResponse.next();
  }

  // 307, never 308/301: a permanent redirect gets cached hard by browsers and
  // search engines and would outlive the three days by a long way.
  return NextResponse.redirect(TARGET, 307);
}

export const config = {
  // Everything except API routes, Next internals, and files that must keep
  // serving (favicon, robots, sitemap, images, and anything with an extension).
  matcher: [
    "/((?!api|ingest|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/|.*\\.[\\w]+$).*)",
  ],
};
