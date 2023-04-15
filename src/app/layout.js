import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Providers from "./Providers";

export const metadata = {
  title: "MovieTime",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header*/}
          <Header />
          {/*Navbar*/}
          <Navbar />
          {/*Searchbar*/}
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
