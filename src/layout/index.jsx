import Header from "@/layout/header";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <div className="sss-dashboard">
      <Header />
      <main className="sss-dashboard-content ">{children}</main>
      <Footer />
    </div>
  );
}
