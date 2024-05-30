// src/app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'EpicArcade',
  description: 'Your Favorite Game Store!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
