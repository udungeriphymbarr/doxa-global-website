import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../builtbyteetechs/WhatsAppButton";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Layout;
