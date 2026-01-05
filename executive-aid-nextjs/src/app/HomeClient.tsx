'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin,
  CheckCircle,
  BarChart3,
  Users,
  Globe,
  MessageCircle,
  Twitter
} from 'lucide-react';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HeroForm } from '@/components/HeroForm';
import { HireVAModal } from '@/components/HireVAModal';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function HomeClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Scroll animation hooks for different sections
  const [heroRef, heroVisible] = useScrollAnimation();
  const [helpCard1Ref, helpCard1Visible] = useScrollAnimation();
  const [helpCard2Ref, helpCard2Visible] = useScrollAnimation();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add CSS animations to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes staggerFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
      }

      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
      }

      .animate-stagger-fade-in {
        animation: staggerFadeIn 0.6s ease-out forwards;
      }

      .animate-delay-100 {
        animation-delay: 0.1s;
      }

      .animate-delay-200 {
        animation-delay: 0.2s;
      }

      .animate-delay-300 {
        animation-delay: 0.3s;
      }

      .animate-delay-400 {
        animation-delay: 0.4s;
      }

      .animate-delay-500 {
        animation-delay: 0.5s;
      }

      .animate-delay-600 {
        animation-delay: 0.6s;
      }

      .opacity-0 {
        opacity: 0;
      }

      /* Enhanced hover effects */
      .card-hover-effect {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-hover-effect:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.1);
        transform: translateY(-8px) scale(1.02);
      }

      .button-hover-glow:hover {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        transform: translateY(-2px);
      }

      .icon-bounce:hover {
        animation: bounce 0.6s ease-in-out;
      }

      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          transform: translate3d(0, -8px, 0);
        }
        70% {
          transform: translate3d(0, -4px, 0);
        }
        90% {
          transform: translate3d(0, -2px, 0);
        }
      }

      .text-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-mono">
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} currentPage="/" contactLink="#cta" />

      {/* Hero Section */}
      <header className="relative py-12 md:py-20 min-h-[70vh] overflow-hidden">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/person-office-work-day.jpg"
            alt="Professional virtual assistants working in modern office environment in Ghana"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div ref={heroRef} className={`md:w-3/5 mb-6 md:mb-8 text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="mb-8">
                <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4 tracking-tighter leading-none transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  YOU DESERVE TO ADVANCE YOUR <span className="text-gradient">BUSINESS</span>
                </h1>
                <p className={`text-base md:text-xl mb-6 md:mb-8 border-l-4 border-indigo-900 pl-4 transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  GROW YOUR BUSINESS WITH  RELIABLE VIRTUAL ASSISTANTS <br /> AND SIMPLIFIED ENTERPRISE SOLUTIONS
                </p>
                <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8 transition-all duration-1000 delay-600 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-indigo-900 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold hover:bg-gray-100 transition-all duration-300 border border-gray-300 text-center rounded-full button-hover-glow"
                  >
                    Hire a VA today
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center items-center">
              <div className="backdrop-blur-md bg-white/30 rounded-2xl border border-white/40 shadow-lg p-4 md:p-6 w-full max-w-md">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Business Owner Types Section */}
      <section className="py-10 md:py-16 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 inline-block">
              Envision your business one year from today.<br />
              <span className="text-indigo-900">Will you have the clarity to pivot?</span><br />
              <span className="text-indigo-900">Will you know what&apos;s working, and what&apos;s not?</span><br />
            </h2>
          </div>
          <div className="md:flex items-stretch">
            {/* Image Container */}
            <div className="md:w-2/5 flex items-stretch">
              <div className="border border-gray-300 w-full h-auto flex">
                <Image 
                  src="/images/frustrated_owner2.jpg" 
                  alt="Frustrated business owner" 
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text Container */}
            <div className="md:w-3/5 md:pl-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Or... let me guess:</h3>
                {[
                  "Still drowning in day-to-day chaos?",
                  "Buried under paperwork and time-sucking admin tasks?",
                  "Drowning in emails, chasing appointments, and constantly losing track of your schedule?",
                  "Wasting hours managing inventory, client lists, and back-and-forth messages instead of letting automation do the heavy lifting?",
                  "Wrestling with accounting, budgeting, and messy spreadsheets instead of making confident financial decisions?"
                ].map((desc, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-900 text-white rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base text-gray-700">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Section */}
      <section className="py-10 md:py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our expert remote assistance in Ghana can transform your business operations and give you back valuable time to focus on what matters most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div ref={helpCard1Ref} className={`border border-gray-500 bg-white p-6 md:p-8 rounded-2xl card-hover-effect transition-all duration-1000 ${helpCard1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
                We assist professionals and businesses who:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Need expert support to fill in the gaps in their business operations.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Want to focus on strategy and growth, not administrative tasks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Want to prioritize generating revenue.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Need work done on a budget without compromising quality
                  </p>
                </div>
              </div>
            </div>
            <div ref={helpCard2Ref} className={`border border-gray-500 bg-white p-6 md:p-8 rounded-2xl card-hover-effect transition-all duration-1000 delay-200 ${helpCard2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
                What we provide:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-bold">ERP Solutions + Skilled VAs:</span>   ERP software and trained VAs in Ghana ready to support your business from day one.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-bold">Specialized Expertise:</span>  Specialised skills in email & calendar management, website development, digital marketing, accounting & budgeting, project management, research & data analytics, and more.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-bold">Flexible Support:</span> Flexible plans and pricing that scale with your business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white border-t border-b border-gray-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With ready-to-work professional virtual assistants and enterprise solutions, we provide seamless, high-impact support across business, administrative, and marketing functions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Support */}
            <Link href="/services#business-support" className="bg-gray-50 rounded-2xl p-8 card-hover-effect block transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive business solutions to streamline operations, manage projects, and handle financial processes efficiently.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Custom applications and web solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Project management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Basic financial management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Research and data analytics
                </li>
              </ul>
            </Link>

            {/* Administrative Assistance */}
            <Link href="/services#administrative-assistance" className="bg-gray-50 rounded-2xl p-8 card-hover-effect block transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Administrative Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Professional administrative support to help you stay organized, manage your schedule, and handle daily business operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Calendar management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Document management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Email management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Data entry
                </li>
              </ul>
            </Link>

            {/* Marketing Assistance */}
            <Link href="/services#marketing-assistance" className="bg-gray-50 rounded-2xl p-8 card-hover-effect block transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Marketing Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Strategic marketing support to boost your online presence, engage your audience, and grow your brand across digital platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Social media management and marketing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Content creation and strategy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Brand engagement and growth
                </li>
              </ul>
            </Link>
          </div>
          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our tailor-made solutions ensure streamlined operations and peak efficiency, enabling businesses to tap into skilled professionals and advanced technology, no matter where they&apos;re located.
            </p>
            <Link href="/services" className="inline-flex items-center bg-indigo-900 text-white px-8 py-3 font-bold rounded-full hover:bg-indigo-800 transition-all duration-300">
              Learn More About Our Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white" id="cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied managers and business owners in Ghana who have streamlined their operations and boosted productivity with ExecutiveAid&apos;s premium virtual assistant services and AI powered enterprise solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Hire a VA today
            </button>
            <Link href="/credentials" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Why Ghana&apos;s Top SMEs Trust ExecutiveAid! 
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