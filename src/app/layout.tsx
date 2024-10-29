"use client";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
