'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Plus, 
  Minus, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Twitter,
  Award,
  Users,
  Target,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { HireVAModal } from '@/components/HireVAModal';

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
  linkedin?: string;
}

export default function AboutClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What exactly does a virtual assistant do?",
      answer: "A virtual assistant provides remote administrative, technical, or creative assistance to clients. At ExecutiveAid, our VAs handle tasks like email and calender management, data entry, research, SaaS administration, social media management, content creation, accounting and more, allowing you to focus on growing your business. "
    },
    {
      question: "Do you provide custom web solutions and applications?",
      answer: (
    <>
      Absolutely! We offer comprehensive web development services and SaaS solutions under Razorbill Technologies; including CRM systems, POS, booking & reservations platforms, inventory management, and e-commerce softwares.
      <br />
      <Link href="/razorbill" className="text-indigo-900 font-bold underline ml-1">
        Learn more
      </Link>
    </>
      )
    },
    {
      question: "What industries do you serve?",
      answer: "While our primary focus is on supporting underserved industries, our broad and flexible virtual assistant services are designed to meet the unique demands of a wide range of sectors, including real estate, e-commerce, healthcare, beauty, food, entertainment, pharmaceutical industries and startups of any kind."
    },

    {
      question: "Can your VAs help with accounting and financial management?",
      answer: "Absolutely. Our virtual assistants can support your accounting and financial management needs by handling tasks such as bookkeeping, payroll calculations, expense tracking, budget preparation, and financial reporting. We help streamline your financial processes, giving you the clarity and confidence to make informed business decisions."
    },
    {
      question: "What administrative tasks can your virtual assistants handle?",
      answer: "Calendar management, document organization, email management, data entry, scheduling, travel arrangements, and general office admin."
    },
    
    {
      question: "Can you help with research and data analytics?",
      answer: "Definitely. Our team excels at conducting market research, competitor analysis, data collection, and analytics. We also assist with academic research support such as organizing sources, compiling literature, and preparing reports or presentations, providing actionable insights for both business and educational purposes."
    },
    {
      question: "What project management services do you offer?",
      answer: "We provide end-to-end project management including project planning, coordination, timelines, team communication, tracking, and reporting."
    },
    {
      question: "How quickly can you start working?",
      answer: "Typically, we can get started within 3 days. Our virtual assistants are ready to go, but we take the time to fully understand your business, your workflow, and exactly how you want us to assist you. We conduct a free business clarity audit at your pace, ensuring everything aligns perfectly before diving in. With our VAs on standby, we’re ready to begin whenever you are."
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Emmanuel Mprah",
      role: "Managing Director",
      image: "/images/ebo1.png",
      skills:[],
      linkedin: 'https://www.linkedin.com/in/emmanuel-mprah-737b61238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: "Winston Nene Sackey",
      role: "Executive Director",
      image: "/images/winston.jpg",
      skills: []
    }
  ];

  const founder = teamMembers.find(m => m.name === 'Emmanuel Mprah');

  return (
    <div className="font-mono">
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} currentPage="/about" contactLink="/#cta" />

       {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Every great journey begins with a vision. At Executive Aid, ours has always been clear; to create meaningful impact by helping businesses and individuals thrive.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
            <section className="py-10 md:py-16 bg-white border-t border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-gray-900">
                   Our  Story<br />
                  </h2>
                </div>
                <div className="md:flex items-stretch">
                  {/* Image Container */}
                  <div className="md:w-2/5 flex flex-col items-stretch">
                    <div className="border border-gray-300 w-full h-auto flex">
                      <Image 
                        src="/images/EboMprah1.jpg" 
                        alt="CEO's picture" 
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 px-2 text-center">
                      <p className="text-base text-gray-900 font-bold">Emmanuel Mprah</p>
                      <p className="text-base text-gray-900">Founder</p>
                      {founder?.linkedin && (
                        <div className="mt-2">
                          <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-indigo-700 hover:underline">
                            <Linkedin className="w-4 h-4 mr-2" />
                            <span>LinkedIn</span>
                          </Link>
                        </div>
                      )}
                    </div>
                    </div>
                  {/* Text Container */}
                  <div className="md:w-3/5 md:pl-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-6 inline-block">
                      The Story: Bridging Gaps, Unlocking Talent, Driving Growth.
                      </h1>
                      <p className="text-base text-gray-900">In today&apos;s fast-paced business world, we noticed a growing gap: ambitious leaders and executives were bogged down by daily tasks that distracted them from their true strengths.</p>
                        <p className="text-base text-gray-900"> After years of working alongside small to medium-level professionals, we saw a recurring challenge; business owners were constantly overwhelmed, not because they lacked capability, but because reliable support was hard to come by.</p>
                        <p className="text-base text-gray-900">At the same time, we noticed another issue closer to home: in many parts of Ghana, especially in rural and underserved areas and industries, finding high-value, skilled employees is extremely difficult. 
                          Talented individuals often remain untapped due to limited access to formal job markets, while local businesses struggle to find dependable assistance.</p>
                        <p className="text-base text-gray-900">ExecutiveAid was created to bridge both gaps; providing  efficient virtual assistance to executives and professionals while also harnessing technology to connect Ghana&apos;s skilled workforce to local and global opportunities.
                          Today, we stand as a trusted extension of your team; supporting productivity, enabling growth, and unlocking talent across Ghana and beyond.</p>   
                    </div>
                  </div>
                </div>
                {/* Centered Button Group */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/" className="bg-indigo-900 text-white px-8 py-3 font-bold rounded-full hover:bg-indigo-700 transition-all duration-300">
                  Ready to Get Started?
                </Link>
                <Link href="#team" className="border-2 border-indigo-900 text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-indigo-900 hover:text-white transition-all duration-300">
                  Meet The Management
                </Link>
              </div>
              </div>
            </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ExecutiveAid.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Partnership</h3>
              <p className="text-gray-600">
&quot;Your growth is our mission.&quot; We don&apos;t just complete tasks; we work alongside you to help your business grow sustainably. We patiently guide you, support your systems, and design simple, effective solutions to save you time and drive measurable results.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dependability</h3>
              <p className="text-gray-600">
&quot;Count on us, every time.&quot; We show up when you need us, respond promptly, and deliver quality work consistently. Your business operations continue smoothly because you can rely on us every step of the way.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
&quot;We deliver what we promise.&quot; We operate with honesty, transparency, and clear communication, ensuring you can trust us fully with your business while building a relationship based on mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How We Work: Simple, Streamlined, Seamless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1: Consultation */}
            <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-8 transition hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/consultation.jpg" // Replace with your image path
                alt="Consultation"
                width={220}
                height={220}
                className="rounded-2xl object-cover mb-6 shadow-md"
              />
              <div className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center text-xl font-bold rounded-full mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                CONSULTATION
              </h3>
              <p className="text-sm text-gray-700 text-center">
                We begin with a comprehensive needs assessment and together outline expectations, tasks, and deliverables.
              </p>
            </div>
            {/* Step 2: Onboarding */}
            <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-8 transition hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/onboarding.jpg" // Replace with your image path
                alt="Onboarding"
                width={220}
                height={220}
                className="rounded-2xl object-cover mb-6 shadow-md"
              />
              <div className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center text-xl font-bold rounded-full mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                ONBOARDING
              </h3>
              <p className="text-sm text-gray-700 text-center">
                We match you with trained, reliable virtual assistants and enterprise solutions that integrate seamlessly with your operations.
              </p>
            </div>
            {/* Step 3: Partnership */}
            <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-8 transition hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/partner.jpg" // Replace with your image path
                alt="Partnership"
                width={220}
                height={220}
                className="rounded-2xl object-cover mb-6 shadow-md"
              />
              <div className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center text-xl font-bold rounded-full mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                PARTNERSHIP
              </h3>
              <p className="text-sm text-gray-700 text-center">
                We become an extension of your team, scaling support as your business grows and adapting to your evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white border-t border-b border-gray-100" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our mission to empower businesses through exceptional virtual assistant services and our vision for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-gray-300 p-6 md:p-8 bg-white rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                  MISSION
                </h2>
              </div>
              <p className="text-base md:text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                At ExecutiveAid, we aim to empower businesses and professionals through customized, top-notch administrative, marketing and business support. We are dedicated to redefining efficiency and giving our clients the time they need to focus on their core business goals.
              </p>
            </div>
            <div className="border border-gray-300 p-6 md:p-8 bg-white rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                  VISION
                </h2>
              </div>
              <p className="text-base md:text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                To be the driving force of human talent and technology behind ambitious leaders, fueling the growth of businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Management Section */}
      <section className="py-16 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Management
            </h2>
           {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Our leadership team brings together expertise in finance, technology, and operations to deliver exceptional solutions for executives and businesses.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-72 h-72 rounded-2xl mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={288}
                      height={288}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-900 font-semibold mb-2">{member.role}</p>
                  {/* LinkedIn shown only in Our Story for the founder */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about working with ExecutiveAid. Find answers to common questions about our services and processes.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-500">
                <button 
                  className="w-full p-4 md:p-6 flex justify-between items-center text-left font-bold text-base md:text-xl bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-gray-900">{faq.question}</span>
                  {openFaq === index ? <Minus size={20} className="text-indigo-900 w-5 h-5 md:w-6 md:h-6" /> : <Plus size={20} className="text-indigo-900 w-5 h-5 md:w-6 md:h-6" />}
                </button>
                {openFaq === index && (
                  <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-300">
                    <p className="text-sm md:text-lg text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with ExecutiveAid&apos;s virtual assistant services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </button>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <Image
              src="/images/EAID-logo.jpg" 
              alt="ExecutiveAid Logo"
              width={60}
              height={60}
              className="mr-2"
                            />
              <h3 className="text-xl font-bold mb-4">
                EXECUTIVE<span className="text-indigo-400">AID</span>
              </h3>
              <p className="text-gray-400">
                Professional virtual assistant services that transform businesses and drive success.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">Who We Are</Link></li>
                <li><Link href="/about#team" className="hover:text-white transition">Management</Link></li>
                 <li>
                      <a href="/about#how-it-works" className="hover:text-white transition">
                        Our Process
                      </a>
                    </li>
                <li><Link href="/about#mission" className="hover:text-white transition">Mission & Vision</Link></li>
                <li><Link href="/" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/web-solutions#financial-management" className="hover:text-white transition"> Financial Management</Link></li>
                <li><Link href="/web-solutions#project-management" className="hover:text-white transition"> Project Management</Link></li>
                <li><Link href="/web-solutions#research-and-data-analytics" className="hover:text-white transition"> Research and Data Analytics</Link></li>
                <li><Link href="/web-solutions#calendar-management" className="hover:text-white transition"> Administrative Assistance</Link></li>
                <li><Link href="/web-solutions#digital-marketing-campaign" className="hover:text-white transition"> Digital Marketing</Link></li>
                <li><Link href="https://razorbilltechnologies.com/" className="hover:text-white transition">Razorbill Technologies (Custom Web Solutions)</Link></li>
             
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources & Policies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about#faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/policies/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:support@executiveaid.org" className="hover:text-white transition">
                    support@executiveaid.org
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+233256108055" className="hover:text-white transition">
                    +233256108055
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/executiveaid/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/executiveaid/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/233256108055" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/executiveaidltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ExecutiveAid Ltd. All rights reserved.</p>
            <p>Powered by Razorbill Technologies</p>
          </div>
        </div>
      </footer>
      {/* Hire VA Modal */}
      <HireVAModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        />
    </div>
  );
} 