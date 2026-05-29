import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  FlaskConical, 
  Factory, 
  ShoppingBag, 
  CheckCircle, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Menu, 
  X, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe2,
  Users,
  Leaf,
  Heart,
  Droplet,
  Lock,
  Zap as Lightning,
  MapPinIcon,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const partnerSuppliers = [
    {
      id: 'lonza',
      name: 'Lonza',
      type: 'CAPSULE PARTNER',
      icon: '🔒',
      description: 'A global leader in pharmaceutical and nutraceutical manufacturing. Lonza supplies CSI with its premium capsule portfolio. From hard gelatin to vegetarian and delayed-release formats, Lonza&apos;s capsule solutions set the industry benchmark for quality, consistency, and bioavailability.',
      features: ['Hard Gelatin Capsules', 'Vegetarian Capsules', 'Delayed Release', 'Licaps®'],
      link: 'Visit Lonza'
    },
    {
      id: 'robertet',
      name: 'Robertet Health & Beauty',
      type: 'INGREDIENT PARTNER',
      icon: '💧',
      description: 'One of the world\'s foremost natural ingredient houses, Robertet&apos;s Health & Beauty division blends scientific innovation with nature to deliver sustainable wellness and beauty solutions. Their portfolio spans nutracosmetics, topical cosmetics, and functional food ingredients with traceable natural origins.',
      features: ['SOD B® Antioxidant', 'Lipowheát™', 'Nutracosmetics', 'Natural Extracts'],
      link: 'Visit Robertet Health & Beauty'
    },
    {
      id: 'gnosis',
      name: 'Gnosis by Lesaffre',
      type: 'EXCLUSIVE DISTRIBUTOR — PHILIPPINES',
      icon: '✈️',
      description: 'A biotech leader in fermentation-derived ingredients for nutraceuticals, pharma, and functional foods. As exclusive Philippine distributor, CSI brings Gnosis\'s full portfolio to local manufactures — including their acclaimed vitamins, probiotics, and branded active ingredients backed by extensive clinical data.',
      features: ['MenaQ7® Vitamin K2', 'Quatrefolic®', 'Adonat® SAMe', 'Biotics'],
      link: 'Visit Gnosis by Lesaffre'
    },
    {
      id: 'kerry',
      name: 'Kerry — Proactive Health',
      type: 'EXCLUSIVE DISTRIBUTOR — PHILIPPINES',
      icon: '⚡',
      description: 'Kerry&apos;s Proactive Health division delivers science-backed wellness ingredients that support 4 million consumers daily. As exclusive Philippine distributor, CSI provides local access to Kerry&apos;s clinically validated solutions spanning women\'s, cognitive, digestive, immune, and infant health.',
      features: ['Women&apos;s Health', 'Cognitive Health', 'Digestive Health', 'Immune Health', 'Infant Health'],
      link: 'Visit Kerry Proactive Health'
    },
    {
      id: 'adm',
      name: 'ADM (Archer Daniels Midland)',
      type: 'SWEETENERS & LIQUID FLAVORS PARTNER',
      icon: '🎯',
      description: 'With over 120 years of ingredient expertise, ADM is one of the world\'s most comprehensive food and beverage ingredient companies. CSI partners with ADM specifically for their industry-leading sweetener portfolio and customized liquid flavor solutions — giving clients the taste performance, sugar reduction capabilities, and formulation flexibility needed to win in today&apos;s health-conscious market.',
      features: ['Sweeteners', 'Natural flavors', 'Sugar reduction systems', 'Flavor modulation systems', 'Beverage-ready liquid formats'],
      link: 'Visit ADM Human Nutrition'
    }
  ];

  const services = [
    {
      id: 'toll-manufacturing',
      title: 'Toll Manufacturing',
      subtitle: 'Your formula. Our facility.',
      icon: Factory,
      description: 'Access production-grade equipment and flexible infrastructure — without the capital investment. We process raw materials into semi-finished or finished products at any batch size, from R&D pilot runs to full commercial scale. You retain IP ownership; we deliver execution.'
    },
    {
      id: 'supply-trading',
      title: 'Supply Trading',
      subtitle: 'Global sourcing. Local reliability.',
      icon: Globe,
      description: 'Streamline your supply chain by working with a single, trusted trading partner. We source premium raw materials from global suppliers that meet your exact specifications — eliminating the complexity of managing multiple vendors and reducing procurement risk.'
    },
    {
      id: 'quality-control',
      title: 'Quality Control Testing',
      subtitle: 'Safe. Effective. Verified.',
      icon: CheckCircle,
      description: 'Our qualified technical staff provide rigorous analytical testing to ensure your product meets purity, safety, and efficacy standards. Bring us your samples at any stage — we deliver documented, defensible results that protect your brand and your customers.'
    },
    {
      id: 'regulatory',
      title: 'Regulatory & Documentation',
      subtitle: 'Navigate compliance with confidence.',
      icon: ShieldCheck,
      description: 'Regulatory paperwork shouldn\'t slow down your launch. We assist with FDA license applications, trademark filings, patent applications, and all supporting documentation — so you can enter the market faster and with full legal standing.'
    }
  ];

  const ingredientCategories = [
    {
      id: 'skin-beauty',
      title: 'Skin & Beauty',
      icon: Heart,
      description: 'Inside-out beauty ingredients that deliver visible, measurable results.',
      details: 'Bovine & marine collagen (multiple sources) · Type II Collagen · Phytoceramides · Probiotic personal care actives'
    },
    {
      id: 'gut-wellness',
      title: 'Gut & Wellness',
      icon: Droplet,
      description: 'Customizable probiotic solutions for supplements and functional foods.',
      details: 'Custom CFU probiotic blends · Finished probiotic capsules · Kombucha & yogurt cultures · Probiotic liquid & powder formulations'
    },
    {
      id: 'natural-sweeteners',
      title: 'Natural Sweeteners',
      icon: Leaf,
      description: 'Clean-label sweetness for health-conscious formulations — with or without calories.',
      details: 'Monk Fruit Extract · Stevia (standard & STEVIA ACS 45 masked) · Sweet Tea Extract · Deionized Apple & Pear Juice'
    },
    {
      id: 'flavors-concentrates',
      title: 'Flavors & Concentrates',
      icon: Droplet,
      description: 'Taste differentiation across formats — from natural to synthetic, powder to liquid.',
      details: 'Natural · Nature-identical · Synthetic flavors · Acerola, apple, pear, orange, passion fruit, pomegranate, white grape concentrates'
    },
    {
      id: 'delivery-systems',
      title: 'Delivery Systems',
      icon: Lock,
      description: 'Protect your actives and ensure bioavailability with the right encapsulation format.',
      details: 'Hard gelatin (EGC) · Vegetarian · Delayed-release (DR) · Full-range capsule sizing for all dose forms'
    },
    {
      id: 'functional-essentials',
      title: 'Production Ingredients',
      icon: Factory,
      description: 'The functional backbone of every formulation — reliable, specification-grade, and always available.',
      details: 'Anhydrous Caffeine · Coffee Ingredients · Energy Premix · DL-Malic Acid · Citric Acid · Acidulants · Sodium Citrate'
    }
  ];



  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Logo/CSILOGO_colored.png" alt="CSI Logo" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <span className="block font-display text-xl font-bold tracking-tight text-primary">CHYMIST SALES INC.</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold opacity-80 italic">"We make it happen"</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-700 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-all hover:shadow-lg active:scale-95"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/Logo/CSILOGO_colored.png" alt="CSI Logo" className="h-10" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-800">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-primary text-white py-4 rounded-xl text-center text-lg font-bold shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col max-w-3xl"
          >
            <div className="text-white/80 text-xs uppercase tracking-[0.3em] font-bold mb-8">CHYMIST SALES INC. — 20 YEARS OF FMCG EXPERTISE</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
              Your <span className="text-yellow-400">Center of Solutions</span> for Food, Pharma & Cosmetics
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-12 leading-relaxed">
              From raw material to finished product — CSI is the single partner that covers every step of your supply chain. Toll manufacturing, global sourcing, quality assurance, and regulatory compliance, all under one roof.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#contact" className="bg-yellow-400 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all active:scale-95 flex items-center gap-2">
                Get a Customized Quote
              </a>
              <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                Explore Our Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 w-full max-w-2xl">
              <div>
                <dt className="text-4xl font-display font-bold text-yellow-400 italic">20+</dt>
                <dd className="text-[11px] uppercase tracking-widest font-bold text-white/70 mt-2">Years of FMCG experience</dd>
              </div>
              <div>
                <dt className="text-4xl font-display font-bold text-yellow-400 italic">4</dt>
                <dd className="text-[11px] uppercase tracking-widest font-bold text-white/70 mt-2">End-to-end services</dd>
              </div>
              <div>
                <dt className="text-4xl font-display font-bold text-yellow-400 italic">1</dt>
                <dd className="text-[11px] uppercase tracking-widest font-bold text-white/70 mt-2">Stop for everything</dd>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ingredient Portfolio Section */}
      <section id="ingredients" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-4 italic">INGREDIENT PORTFOLIO</h3>
            <h2 className="font-display text-5xl font-black text-slate-900 mb-8 leading-tight">
              Ingredients built around outcomes, not SKUs.
            </h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              We match your formulation goals to the right materials — from high-performance specialty bioactives to the essential production ingredients that form the backbone of every great product.
            </p>
          </div>

          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-primary mb-12 italic">SPECIALTY BIOACTIVES & FUNCTIONAL INGREDIENTS</h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ingredientCategories.slice(0, 6).map((cat) => {
              const IconComponent = cat.icon;
              return (
                <motion.div 
                  key={cat.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary mb-6">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 uppercase text-lg mb-2">{cat.title}</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{cat.description}</p>
                  <p className="text-slate-500 text-xs leading-relaxed border-t pt-4">
                    {cat.details}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                <Lock size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 uppercase text-sm mb-2">CORE MANUFACTURING & INDUSTRIAL & FUNCTIONAL ESSENTIALS</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>The functional backbone of every formulation — reliable, specification-grade, and always available.</strong> The workshorse manufacturers can&apos;t afford to compromise on. CSI supplies proven commodity and functional base ingredients that meet strict industrial and food-grade specifications, keeping your production line running without interruption.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Anhydrous Caffeine', 'Coffee Ingredients', 'Energy Premix', 'DL-Malic Acid', 'Citric Acid', 'Acidulants', 'Sodium Citrate'].map((tag) => (
                    <span key={tag} className="bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Services Section */}
      <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-4 italic">ABOUT CSI</h3>
              <h2 className="font-display text-5xl font-black text-slate-900 mb-8 leading-tight">
                Built to be more than a <span className="text-primary">supplier.</span>
              </h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Backed by over 20 years of FMCG expertise, Chymist Sales Inc. began as a raw material supplier for the Philippine food, nutritional, pharmaceutical, and cosmetics industries. Today, we have evolved into something far more strategic — a comprehensive solutions partner with the expertise, infrastructure, and dedicated teams to take your product from concept to commercial shelf.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We don&apos;t just deliver ingredients. We bring innovative thinking, supply chain efficiency, and made-to-specification manufacturing to every partnership.
              </p>
              <blockquote className="mt-8 pl-6 border-l-4 border-yellow-400 text-slate-700 italic text-lg">
                "Our vision is to be known as the Center of Comprehensive Solutions — creating what our clients need before they even know to ask."
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-slate-100 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <Zap size={24} />
                  </div>
                </div>
                <h4 className="font-display font-bold text-slate-900 uppercase text-sm mb-3">Innovative</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Patent-backed, research-driven products that keep your brand ahead of the market.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-slate-100 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <Lock size={24} />
                  </div>
                </div>
                <h4 className="font-display font-bold text-slate-900 uppercase text-sm mb-3">Integrity</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Honest, respectful partnerships built on the highest quality standards.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-slate-100 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <CheckCircle size={24} />
                  </div>
                </div>
                <h4 className="font-display font-bold text-slate-900 uppercase text-sm mb-3">Reliability</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Premium raw materials sourced globally. Name what you need — well deliver it.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-slate-100 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <Lightning size={24} />
                  </div>
                </div>
                <h4 className="font-display font-bold text-slate-900 uppercase text-sm mb-3">Efficiency</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Optimized one-stop processes that turn your vision into a finished product, faster.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-4 italic">WHAT WE DO</h3>
            <h2 className="font-display text-5xl font-black text-slate-900 mb-6 leading-tight">Four services. One seamless supply chain.</h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Every service is designed to connect to the next — so your product moves forward without friction, delays, or the overhead of managing multiple vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isFlagship = service.id === 'toll-manufacturing';
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl p-8 flex flex-col ${isFlagship ? 'border-2 border-primary bg-white' : 'bg-slate-50 border border-slate-200'}`}
                >
                  {isFlagship && (
                    <div className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      FLAGSHIP
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${isFlagship ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-600'}`}>
                    <IconComponent size={24} />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 uppercase text-lg mb-1">{service.title}</h4>
                  <p className={`text-sm italic mb-4 ${isFlagship ? 'text-primary' : 'text-slate-500'}`}>{service.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted Partner Suppliers */}
      <section id="partners" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-4 italic">TRUSTED PARTNER SUPPLIERS</h3>
            <h2 className="font-display text-5xl font-black text-slate-900 mb-8 leading-tight">
              World-class partners. Exclusive access.
            </h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              We don&apos;t just resell ingredients — we hold exclusive distribution rights for leading global innovators, giving your products preferential access to science-backed actives that competitors simply can&apos;t source locally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {partnerSuppliers.slice(0, 2).map((partner) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {partner.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-lg">{partner.name}</h4>
                    <p className="text-primary text-[10px] uppercase tracking-widest font-bold">{partner.type}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {partner.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-slate-200">
                  {partner.features.map((feature) => (
                    <span key={feature} className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="text-primary font-bold text-sm hover:underline flex items-center gap-2">
                  {partner.link}
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerSuppliers.slice(2).map((partner) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {partner.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900">{partner.name}</h4>
                    <p className="text-primary text-[10px] uppercase tracking-widest font-bold">{partner.type}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {partner.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-slate-200">
                  {partner.features.map((feature) => (
                    <span key={feature} className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="text-primary font-bold text-sm hover:underline flex items-center gap-2">
                  {partner.link}
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* About Section - Clean Layout */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-6 italic">Our Foundation</h2>
                <h3 className="font-display text-4xl md:text-5xl font-black text-slate-900 uppercase leading-[1.1] tracking-tighter">
                  Center of Comprehensive Solutions
                </h3>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-8 text-slate-600 font-light leading-relaxed">
                <p className="text-lg md:text-xl">
                  Established in 2018, <span className="font-bold text-primary italic underline decoration-primary/20 underline-offset-8">Chymist Sales Inc.</span> has become one of the trailblazers in manufacturing and supply of raw materials and ingredients across the Philippines.
                </p>
                <p className="text-sm md:text-base max-w-2xl mx-auto opacity-80">
                  We specialize in serving the Food & Beverages, Nutritional, Pharmaceutical, Industrial, and Cosmetics industries with expertise, superior infrastructure, and dedicated teams committed to innovating and producing quality outcomes.
                </p>
              </div>
            </motion.div>

            {/* Mission & Vision Grid - Centered */}
            <div className="grid md:grid-cols-2 gap-12 pt-16 border-t border-slate-100">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 rounded-full">
                  <ShieldCheck size={14} className="text-primary" />
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] italic">Our Mission</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                  To offer expertise in the development, production, and supply of products for commercial use that will help our customers.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 rounded-full">
                  <Zap size={14} className="text-primary" />
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] italic">Our Vision</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                  To be known as the “Center of Comprehensive Solutions” for our niche and future clients, creating innovative solutions through superior technologies.
                </p>
              </div>
            </div>

            {/* Core Focus / Values */}
            <div className="pt-16 space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.6em] font-bold text-slate-300 italic">Operating Principles</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { title: 'Innovative', desc: 'Research-backed' },
                  { title: 'Reliability', desc: 'Trust-based' },
                  { title: 'Efficiency', desc: 'Optimized' },
                  { title: 'Integrity', desc: 'Highest standards' }
                ].map((val) => (
                  <motion.div 
                    key={val.title}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-slate-200 px-8 py-5 rounded-[2rem] flex flex-col gap-1 transition-all hover:shadow-xl hover:border-primary/20 min-w-[180px]"
                  >
                    <span className="text-xs font-display font-black uppercase text-primary tracking-widest">{val.title}</span>
                    <span className="text-[9px] text-slate-400 font-medium uppercase tracking-[0.2em]">{val.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative pt-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-slate-200"></div>
              <p className="text-lg md:text-xl text-slate-900 italic font-medium leading-relaxed max-w-2xl mx-auto">
                "We work with businesses of all scales, from startups to legacy brands, delivering quality products at the best possible prices."
              </p>
              <div className="mt-8 inline-block px-6 py-2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full italic">
                We make it happen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - CTA */}
      <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-5xl md:text-6xl font-black mb-8 leading-tight">
                Let&apos;s build your next product together.
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mb-12 leading-relaxed">
                Tell us what you&apos;re working on — from a concept to a finished formulation — and we&apos;ll map out exactly how CSI can accelerate it.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                <div className="flex items-start gap-4">
                  <Mail className="text-yellow-400 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-1">Email</p>
                    <a href="mailto:CSI@Chymist.net" className="text-lg font-bold hover:text-yellow-400 transition-colors">
                      CSI@Chymist.net
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-yellow-400 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-1">Phone</p>
                    <a href="tel:+6328816932" className="text-lg font-bold hover:text-yellow-400 transition-colors">
                      +632.8816932
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-start gap-4">
                <MapPin className="text-yellow-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-1">Location</p>
                  <p className="text-lg font-bold">Carmona, Cavite, Philippines</p>
                </div>
              </div>

              <div className="mt-12 flex items-start gap-4">
                <Globe className="text-yellow-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-1">Website</p>
                  <a href="https://www.chymist.net" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-yellow-400 transition-colors">
                    www.chymist.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-primary-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <img src="/Logo/CSI_WHITE2.png" alt="CSI Logo" className="h-12 w-auto" />
                <span className="font-display text-2xl font-bold tracking-tight uppercase">Chymist Sales Inc.</span>
              </div>
              <p className="text-accent/60 max-w-sm leading-relaxed text-sm">
                Sourcing premium raw materials globally for over half a decade. From specialized ingredients to toll manufacturing, we make it happen.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-accent text-xs italic">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-accent text-xs italic">Solutions</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>Toll Manufacturing</li>
                <li>Supply Trading</li>
                <li>Quality Control</li>
                <li>Technical Support</li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-display font-bold uppercase tracking-widest mb-8 text-accent text-xs italic">Headquarters</h4>
              <p className="text-slate-400 text-sm leading-loose">
                KM 32, National Highway, San Pedro City, <br />
                Laguna 4024, Philippines
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 space-y-4 text-xs font-bold uppercase tracking-widest">
                <a href="tel:+6328813632" className="flex items-center gap-2 text-accent hover:text-white transition-colors italic">
                  <Phone size={14} /> +632-881-3632
                </a>
                <a href="mailto:csi@chymist.net" className="flex items-center gap-2 text-accent hover:text-white transition-colors italic">
                  <Mail size={14} /> csi@chymist.net
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Chymist Sales Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors italic italic"></a>
              <a href="#" className="hover:text-white transition-colors italic italic"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
