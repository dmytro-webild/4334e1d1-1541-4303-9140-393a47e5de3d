"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "Projects", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="DevStudio"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "plain" }}
      title="Scaling Innovation Through Elite Web Craftsmanship."
      description="We architect high-performance websites and digital platforms built to convert, scale, and define your brand in a crowded digital landscape."
      tag="Trusted by 500+ Enterprises"
      buttons={[{ text: "Start Project", href: "#contact" }, { text: "Our Portfolio", href: "#products" }]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/african-american-male-programmer-working-cloud-computing-with-algorithm_482257-120315.jpg", imageAlt: "Tech Dashboard" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-vector/landing-page_52683-6021.jpg", imageAlt: "Landing Page Preview" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-techno-background-with-connecting-lines-dots_1048-11693.jpg", imageAlt: "Digital Network" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/top-view-nutritional-counter-app_23-2149880598.jpg", imageAlt: "App Interface" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-psd/flat-design-home-deco-template_23-2149498712.jpg", imageAlt: "UI Elements" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/employee-editing-documents-desktop-computer-office-desk_482257-126550.jpg", imageAlt: "Development Team" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "We bridge the gap between " },
        { type: "image", src: "http://img.b2bpic.net/free-photo/joyous-coworkers-having-fun-vibrant-office-while-reviewing-financial-graphs_482257-126650.jpg", alt: "Team Collaboration" },
        { type: "text", content: " vision and technical execution." },
      ]}
      buttons={[{ text: "Read Our Story", href: "#" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Performance Optimization", tags: ["Speed", "SEO"], imageSrc: "http://img.b2bpic.net/free-photo/fast-speed-broadband-accelerate-internet_53876-133585.jpg" },
        { id: "f2", title: "Responsive Design", tags: ["Cross-Device", "Mobile"], imageSrc: "http://img.b2bpic.net/free-photo/african-american-remote-worker-uses-chroma-key-screen-gadget_482257-121486.jpg" },
        { id: "f3", title: "Analytics Integration", tags: ["Growth", "Insights"], imageSrc: "http://img.b2bpic.net/free-photo/teleworker-home-office-gathering-information-from-internet-seminar_482257-119301.jpg" },
      ]}
      title="Built for Growth."
      description="Comprehensive engineering solutions tailored to your specific market goals."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      animationType="slide-up"
      products={[
        { id: "p1", name: "Fashion Portal", price: "High Impact", variant: "Case Study", imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-fashion-design-sketch-paper_23-2151487073.jpg" },
        { id: "p2", name: "Fintech UI", price: "Secure Dashboard", variant: "Web App", imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-with-computer_23-2149930993.jpg" },
        { id: "p3", name: "Bistro Booking", price: "High Traffic", variant: "Platform", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-working-together-project_23-2149286149.jpg" },
        { id: "p4", name: "Global Retail", price: "Scalable Store", variant: "E-Commerce", imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-shipping-internet-commerce-concept_53876-124434.jpg" },
        { id: "p5", name: "Health App", price: "HIPAA Ready", variant: "Mobile", imageSrc: "http://img.b2bpic.net/free-photo/hospital-cross-health-treatment-icon-graphic-concept_53876-120435.jpg" },
        { id: "p6", name: "Creative Agency", price: "Award Winning", variant: "Portfolio", imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320743.jpg" },
      ]}
      title="Selected Works."
      description="Proven success stories across multiple sectors."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", icon: Zap, title: "Avg Page Speed", value: "1.2s" },
        { id: "m2", icon: TrendingUp, title: "Conversion Rate", value: "34%" },
        { id: "m3", icon: Award, title: "Projects Delivered", value: "200+" },
      ]}
      title="Measurable Impact."
      description="Numbers that speak to our efficiency and dedication."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="depth-3d"
      testimonials={[
        { id: "t1", name: "Sarah Chen", role: "CEO", testimonial: "The performance boost they delivered was immediate.", imageSrc: "http://img.b2bpic.net/free-photo/relaxing-fume-banking-adult-absence_1134-936.jpg" },
        { id: "t2", name: "Mark Roberts", role: "Product Lead", testimonial: "Exceptional communication and attention to detail throughout the cycle.", imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-woman-with-short-curly-hair-wireless-earphones_574295-3790.jpg" },
        { id: "t3", name: "Emily Zhao", role: "CTO", testimonial: "Their engineering team is world-class, truly transformed our platform.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-black-jacket_613910-2534.jpg" },
        { id: "t4", name: "David Miller", role: "Marketing Director", testimonial: "Increased our lead flow by 50% within the first quarter.", imageSrc: "http://img.b2bpic.net/free-photo/business-woman-banner-concept-with-copy-space_23-2149601533.jpg" },
        { id: "t5", name: "Jessica Lee", role: "Founder", testimonial: "The best technical partner we've had in 5 years of startup operations.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg" },
      ]}
      title="Trusted Partners."
      description="Collaborating with global brands to drive digital success."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "What's the typical timeline?", content: "Projects usually range from 6 to 12 weeks depending on the complexity of the requirements." },
        { id: "q2", title: "Do you provide maintenance?", content: "Yes, we offer ongoing maintenance and support packages post-launch." },
        { id: "q3", title: "How do we communicate?", content: "We use standard project management tools and hold bi-weekly sync meetings to keep everyone aligned." },
      ]}
      title="Frequently Asked Questions."
      description="Clear answers to help you understand our process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to launch your next big project? Let's talk."
      buttons={[{ text: "Contact Us", href: "mailto:hello@devstudio.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="DevStudio"
      copyrightText="© 2025 DevStudio Inc. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
