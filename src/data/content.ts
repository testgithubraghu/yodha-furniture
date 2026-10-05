// Editable content for Yodha Furniture
// Update placeholders here and they reflect across the site.

export const brand = {
  name: "YODHA FURNITURE",
  tagline: "Custom Furniture Manufacturer in Bengaluru",
  shortName: "YODHA",
  email: "yodhafurnitures@gmail.com",
  phone: "", // placeholder — add number when available
  whatsapp: "https://wa.me/919999999999?text=Hi%20Yodha%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20custom%20furniture", // placeholder — update number
  address:
    "Behind Kadusonnapanahalli Bus Stop, Kannur Main Road, Mitganahalli, Kannuru, Bengaluru, Karnataka 560077",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1234567890123!2d77.654321!3d13.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA3N8KwMzknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  established: "[YEAR]", // placeholder
  customers: "[NUMBER]", // placeholder
  yearsExperience: "[YEARS]", // placeholder
  social: {
    facebook: "https://facebook.com/yodhafurniture",
    instagram: "https://instagram.com/yodhafurniture",
    youtube: "https://youtube.com/@yodhafurniture",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const categories = [
  {
    slug: "chairs",
    name: "Chairs",
    description:
      "Designer chairs built for comfort, from dining seating to accent pieces for homes and offices in Bengaluru.",
    image:
      "https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Designer chairs displayed in a warm Bengaluru furniture studio",
    metaTitle: "Designer Chairs in Bengaluru",
    metaDescription:
      "Buy designer chairs in Bengaluru from Yodha Furniture. Custom dining chairs, accent chairs and office chairs crafted to your size and finish.",
  },
  {
    slug: "dining-tables",
    name: "Dining Tables",
    description:
      "Wooden dining tables sized for your family and space, crafted by a leading dining table manufacturer in Bengaluru.",
    image:
      "https://images.pexels.com/photos/7005296/pexels-photo-7005296.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Solid wood dining table in a modern Bengaluru dining room",
    metaTitle: "Dining Table Manufacturer in Bengaluru",
    metaDescription:
      "Yodha Furniture makes solid wood dining tables in Bengaluru. Custom sizes, factory-direct pricing and free site measurement.",
  },
  {
    slug: "cots",
    name: "Cots",
    description:
      "Sturdy wooden cots and beds designed for restful sleep and built to last in Bengaluru homes.",
    image:
      "https://images.pexels.com/photos/7061415/pexels-photo-7061415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Custom wooden cot and bed frame made in Bengaluru",
    metaTitle: "Wooden Cots & Beds in Bengaluru",
    metaDescription:
      "Get custom wooden cots and beds in Bengaluru from Yodha Furniture. Made-to-measure bed frames with delivery and installation.",
  },
  {
    slug: "sofas",
    name: "Sofas",
    description:
      "Premium custom sofas and sofa sets, upholstered and sized to fit your living room perfectly.",
    image:
      "https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Premium custom sofa set in a Bengaluru living room",
    metaTitle: "Custom Sofas in Bengaluru",
    metaDescription:
      "Yodha Furniture is a custom sofa maker in Bengaluru. Order made-to-measure sofa sets, sectional sofas and upholstered lounges.",
  },
  {
    slug: "custom-furniture",
    name: "Custom Furniture",
    description:
      "Bespoke furniture for every room. Share your idea and we design, build and install it across Bengaluru.",
    image:
      "https://images.pexels.com/photos/5711885/pexels-photo-5711885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Bespoke custom furniture designed and built in Bengaluru",
    metaTitle: "Custom Furniture Makers in Bengaluru",
    metaDescription:
      "Bespoke furniture makers in Bengaluru. Yodha Furniture designs and builds custom pieces for homes, offices and retail spaces.",
  },
];

export const stats = [
  { value: brand.yearsExperience, label: "Years of experience" },
  { value: "[CUSTOMERS]", label: "Customers served" }, // placeholder
  { value: "[PRODUCTS]", label: "Products delivered" }, // placeholder
  { value: "[PROJECTS]", label: "Custom projects" }, // placeholder
];

export const services = [
  {
    number: "01",
    title: "Custom furniture design",
    description:
      "Share your space, style and budget. We design bespoke furniture that fits your Bengaluru home or office perfectly.",
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "Built in our Bengaluru workshop with solid wood, quality hardware and careful joinery for lasting strength.",
  },
  {
    number: "03",
    title: "Free site measurement",
    description:
      "We visit your site across Bengaluru to take accurate measurements so every piece fits the first time.",
  },
  {
    number: "04",
    title: "Delivery & installation",
    description:
      "Timely delivery and professional installation, handled by our own team for a clean, ready-to-use finish.",
  },
  {
    number: "05",
    title: "After-sales support",
    description:
      "Service and support after delivery, because furniture should look and work great for years.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your needs, style, measurements and budget over a call or site visit in Bengaluru.",
  },
  {
    number: "02",
    title: "Design & drawing",
    description:
      "Our team prepares drawings and material options so you can visualise the piece before production.",
  },
  {
    number: "03",
    title: "Crafting",
    description:
      "Skilled makers cut, join, finish and upholster your furniture with close attention to detail.",
  },
  {
    number: "04",
    title: "Delivery & installation",
    description:
      "We deliver and install the finished piece at your home or office, ready for everyday use.",
  },
];

export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/4564013/pexels-photo-4564013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Custom wooden dining table manufactured in Bengaluru",
  },
  {
    src: "https://images.pexels.com/photos/6284236/pexels-photo-6284236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Premium upholstered sofa set in a Bengaluru living room",
  },
  {
    src: "https://images.pexels.com/photos/16985123/pexels-photo-16985123.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Designer chair collection crafted in Bengaluru",
  },
  {
    src: "https://images.pexels.com/photos/6032437/pexels-photo-6032437.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Solid wood cot and bedroom furniture",
  },
  {
    src: "https://images.pexels.com/photos/7214474/pexels-photo-7214474.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Bespoke wardrobe and storage unit",
  },
  {
    src: "https://images.pexels.com/photos/7109995/pexels-photo-7109995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Modern office furniture made in Bengaluru",
  },
];

export const testimonials = [
  {
    quote:
      "Yodha Furniture built a custom dining table that fits our Bengaluru apartment perfectly. Great craftsmanship and on-time delivery.",
    name: "Anita R.",
    location: "Hennur, Bengaluru",
  },
  {
    quote:
      "The sofa set is exactly what we wanted. Made to measure, sturdy and comfortable. Highly recommended furniture maker.",
    name: "Karthik S.",
    location: "Yelahanka, Bengaluru",
  },
  {
    quote:
      "Professional team, free site visit and clean installation. Our office furniture looks excellent.",
    name: "Priya M.",
    location: "Whitefield, Bengaluru",
  },
];

export const faqs = [
  {
    question: "Do you make custom furniture in Bengaluru?",
    answer:
      "Yes. Yodha Furniture designs and builds bespoke furniture across Bengaluru, including Kannuru, Hennur, Bagalur, Kothanur, Yelahanka and Whitefield.",
  },
  {
    question: "Do you offer free site measurement?",
    answer:
      "Yes. We provide free site measurement within Bengaluru so every piece is made to fit your exact space.",
  },
  {
    question: "Can I order furniture made to my size?",
    answer:
      "Absolutely. All our sofas, dining tables, cots, chairs and storage pieces can be customised to your dimensions, material and finish preferences.",
  },
  {
    question: "Do you deliver and install?",
    answer:
      "Yes. We handle delivery and installation with our own team across Bengaluru for a clean, ready-to-use finish.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We work with solid wood, engineered wood, veneers, upholstery fabrics and quality hardware sourced for durability and finish.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill in the contact form, call or WhatsApp us with your requirements. We will share an estimate after understanding your design and measurements.",
  },
  {
    question: "Do you make furniture for offices and shops?",
    answer:
      "Yes. We manufacture custom furniture for homes, offices, retail stores and other commercial spaces in Bengaluru.",
  },
  {
    question: "Where is your workshop located?",
    answer:
      "Our workshop is behind Kadusonnapanahalli Bus Stop on Kannur Main Road, Mitganahalli, Kannuru, Bengaluru, Karnataka 560077.",
  },
];

export const localAreas = [
  "Kannuru",
  "Mitganahalli",
  "Hennur",
  "Kothanur",
  "Bagalur",
  "Yelahanka",
  "Whitefield",
  "Indiranagar",
  "Koramangala",
  "Sadashivanagar",
  "Hebbal",
  "Jayanagar",
  "JP Nagar",
  "HSR Layout",
  "Electronic City",
  "Outer Ring Road",
  "Sarjapur Road",
] as const;

export const seoDefaults = {
  title: "Yodha Furniture | Custom Furniture Manufacturer in Bengaluru",
  titleTemplate: "%s | Yodha Furniture",
  description:
    "Yodha Furniture crafts premium sofas, dining tables, chairs, cots and custom furniture in Bengaluru. Made to measure for homes and offices. Get a free quote.",
  siteUrl: "https://yodhafurniture.com",
  locale: "en-IN",
  themeColor: "#1F1A17",
} as const;
