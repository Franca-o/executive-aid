'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { HireVAModal } from '@/components/HireVAModal';
import ReviewsSection from '@/components/ReviewSection';

export default function CredentialsClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Add animations
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

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .card-hover-effect {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-hover-effect:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transform: translateY(-8px) scale(1.02);
      }

      .button-hover-glow:hover {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const webSolutions = [
    {
      id: 1,
      title: 'Nepakie',
      description: 'A comprehensive Customer Relationship Management system designed to streamline business operations, manage customer interactions, and drive sales growth.',
      features: [
        'Custom UI/UX Design',
        'Interactive Features',
        'SEO & Performance Optimization',
        'Analytics & Tracking',
        'Professional Design',
        'Content Management',
        'Responsive Layout ',
        'Maintenance & Support',

      ],
      status: 'Live Production',
      icon: <Users className="w-8 h-8" />
    }
  ]


  return (
    <div className="min-h-screen bg-gray-50">
    <div className="font-mono">
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} currentPage="/credentials" contactLink="/#cta" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Our Credentials
          </h1>
          <p className="text-base md:text-2xl mb-8 max-w-3xl mx-auto">
            We&apos;ve partnered with many businesses to bring their visions to life. Here are a few select projects from clients who have trusted us to proudly showcase their work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </button>
            <Link href="/web-solutions" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>


      {/* Reviews Section */}
      <ReviewsSection />
      {/* Portfolio Projects */}
      {/* Business Support Services */}
      <section id="catalog" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project 3 - Nepakie E-commerce */}
          <div className="mb-16">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="order-2 lg:order-1">
                          <div className="mb-6">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                              Nepakie Shower Gel:
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                              Professional Business Website
                            </h2>
                          </div>
                          
                          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Nepakie Professional Website is a modern, user-friendly online platform designed to showcase Nepakie&apos;s business services and products. The platform features professional design, content management capabilities, and optimized user experience to effectively communicate the brand&apos;s value proposition.
                          </p>
                          
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {webSolutions[0].features.map((feature, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
          
                          <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <div className='text-gray-500'>
                                  <strong>Professional Design:</strong> Clean, modern design that reflects the brand&apos;s professionalism and quality.
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <div className='text-gray-500'>
                                  <strong>Content Management:</strong> Easy-to-update content management system for maintaining fresh information.
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <div className='text-gray-500'>
                                  <strong>Service Showcase:</strong> Comprehensive display of services and business offerings.
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <div className='text-gray-500'>
                                  <strong>Mobile Optimized:</strong> Responsive design that works perfectly on all devices.
                                </div>
                              </li>
                            </ul>
                          </div>
          
                          <div className="flex items-center space-x-4">
                            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                              ✓ Live Production
                            </span>
                          </div>
                        </div>
                        
                        {/* Image */}
                        <div className="order-1 lg:order-2">
                          <div className="relative">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-4">
                              <Image 
                                src="/images/nepakie screenshot.png" 
                                alt="Nepakie Professional Website Screenshot" 
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain rounded-lg"
                              />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                              <div className="text-sm text-gray-600">Professional Website</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                    

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our virtual assistant services can streamline your operations and boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Learn More
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
      </div>
       {/* Hire VA Modal */}
            <HireVAModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
    </div>
  
  );
} 