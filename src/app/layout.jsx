
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Profile Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
