import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Dining from "@/components/Dining";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingContact from "@/components/BookingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Dining />
      <Gallery />
      <Testimonials />
      <BookingContact />
      <Footer />
    </main>
  );
}
