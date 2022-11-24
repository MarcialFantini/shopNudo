import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
