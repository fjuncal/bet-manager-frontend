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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <header
              style={{
                padding: "1rem",
                backgroundColor: theme.colors.primary,
                color: "#fff",
              }}
            >
              <h1>Bet Manager</h1>
            </header>
            <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
            <footer
              style={{
                padding: "1rem",
                backgroundColor: theme.colors.primary,
                color: "#fff",
              }}
            >
              <p>Footer Content</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
