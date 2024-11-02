import "./globals.css";

export const metadata = {
  title: "IBLIX ( Movie Recomendation System )",
  description: "Login Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
