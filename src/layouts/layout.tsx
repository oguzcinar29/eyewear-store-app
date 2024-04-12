import Header from "@/components/Navbar/Header";
import HomeHero from "@/components/Home/HomeHero";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutUs/AboutHero";
import ContactHero from "@/components/Contact/ContactHero";

type Props = {
  children: React.ReactNode;
  page: string;
};
export default function Layout({ children, page }: Props) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {page === "home" && (
        <div className="h-screen relative bg-pink-50  ">
          <Header page="home" />
          <HomeHero />
        </div>
      )}
      {page === "gender" && (
        <div>
          <Header page="gender" />
        </div>
      )}
      {page === "info" && (
        <div className="relative">
          <Header page="home" />
          <AboutHero />
        </div>
      )}
      {page === "info2" && (
        <div className="relative">
          <Header page="home" />
          <ContactHero />
        </div>
      )}

      <div>{children}</div>
      <Footer />
    </div>
  );
}
