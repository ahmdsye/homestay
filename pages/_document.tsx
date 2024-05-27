import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderInfo from "@/components/header-info";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <HeaderInfo />
        <Header />
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
