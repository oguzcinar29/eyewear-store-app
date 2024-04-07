import Header from "@/components/Navbar/Header";
import HomeHero from "@/components/Home/HomeHero";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  page: string;
};
export default function Layout({ children, page }: Props) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {page === "home" && (
        <div className="h-screen relative  bg-pink-100">
          <Header />
          <HomeHero />
        </div>
      )}

      <div>{children}</div>
      <Footer />
    </div>
  );
}
