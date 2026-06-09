import TestimonialImage from "./TestimonialImage";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-primary">
      <div className="container-custom grid items-center gap-6 py-12 sm:gap-8 sm:py-16 lg:grid-cols-2 lg:py-20">
        <TestimonialImage />
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
