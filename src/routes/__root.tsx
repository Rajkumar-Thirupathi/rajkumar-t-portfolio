import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md gradient-bg px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rajkumar T — Full Stack Developer" },
      { name: "description", content: "Portfolio of Rajkumar T, aspiring Java & Full Stack Developer specializing in Spring Boot, MySQL and modern web." },
      { name: "author", content: "Rajkumar T" },
      { property: "og:title", content: "Rajkumar T — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Rajkumar T, aspiring Java & Full Stack Developer specializing in Spring Boot, MySQL and modern web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rajkumar T — Full Stack Developer" },
      { name: "twitter:description", content: "Portfolio of Rajkumar T, aspiring Java & Full Stack Developer specializing in Spring Boot, MySQL and modern web." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5d428175-8184-4528-b9ba-ec5bf0761416/id-preview-4381e95a--53eb8a63-bbdc-4cce-9426-125afb0fb362.lovable.app-1776450863600.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5d428175-8184-4528-b9ba-ec5bf0761416/id-preview-4381e95a--53eb8a63-bbdc-4cce-9426-125afb0fb362.lovable.app-1776450863600.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
