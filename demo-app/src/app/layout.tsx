import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { ThemeProvider } from "../theme/ThemeProvider";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@/components/navBar/NavBar";
// import { ThemeProvider as MuiThemeProvider } from "@mui/material";
// import theme from "@/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js Todo App",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ThemeProvider>
          <div>
            <CssBaseline />
            <AppBar />
            <main>
              <Container maxWidth={false}>{children}</Container>
            </main>
          </div>
        </ThemeProvider>
        {/* EXAMPLE: THIS WILL NOT WORK BECAUSE ALL CLIENT SPECIFIC CODE MUST BE WRAPPED IN A CLIENT COMPONENT */}
        {/* <MuiThemeProvider theme={theme}>
          <div>
            <CssBaseline />
            <AppBar />
            <main>
              <Container maxWidth={false}>{children}</Container>
            </main>
          </div>
        </MuiThemeProvider> */}
      </body>
    </html>
  );
}
