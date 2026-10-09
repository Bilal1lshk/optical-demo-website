import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionSection from "@/components/CollectionSection";
import VisionSimSection from "@/components/VisionSimSection";
import ClinicServicesSection from "@/components/ClinicServicesSection";
import LensStudio from "@/components/LensStudio";
import FaceShapeGuide from "@/components/FaceShapeGuide";
import LabSection from "@/components/LabSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import StoreVisitSection from "@/components/StoreVisitSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Lumina Optical & Eye Clinic — Designer Eyewear & Clinical Diagnostics",
  description:
    "Independent optical boutique and medical eye clinic: 60-point computerized diagnostics, retinal OCT imaging, handcrafted titanium frames, and in-house same-day lenses.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0e1411] dark:bg-[#090b0a] dark:text-[#f4f6f5] overflow-x-hidden transition-colors duration-250">
      {/* Unified Navigation (Max 5 Navlinks) */}
      <Navbar />

      {/* Unified Boutique & Clinic Experience */}
      <main>
        {/* 1. Hero with Interactive 3D Eyewear */}
        <Hero />

        {/* 2. Designer Eyewear Collection */}
        <CollectionSection />

        {/* 3. Clinical Diagnostics & Interactive Vision Acuity Simulator (#clinic) */}
        <VisionSimSection />

        {/* 4. Specialized Optometric Care & Hospital-grade Services */}
        <ClinicServicesSection />

        {/* 5. Proprietary Lens Studio & Visualizer (#lens-lab) */}
        <LensStudio />

        {/* 6. Facial Ergonomics & Style Matcher */}
        <FaceShapeGuide />

        {/* 7. Inside the Optical Lab & Diamond Surfacing */}
        <LabSection />

        {/* 8. Client Testimonials & Verified Proof (#reviews) */}
        <ReviewsSection />

        {/* 9. Unified Appointment Scheduler (#book) */}
        <BookingSection />

        {/* 10. Flagship Studio Location & Lab Suite (#visit) */}
        <StoreVisitSection />
      </main>

      {/* Minimalist Footer & Direct WhatsApp Line */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
