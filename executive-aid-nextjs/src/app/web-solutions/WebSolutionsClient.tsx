'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
  Calendar,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your form handling service here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Hire a Virtual Assistant Today</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Service Type</option>
            <option value="financial-management">Financial Management</option>
              <option value="custom-web-app">Professional Website Development</option>
              <option value="project-management">Project management</option>
              <option value="research-analytics">Research and Data Analytics</option>
              <option value="digital-marketing">Digital marketing</option>
              <option value="admin-assistance">Administrative assistance</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-900 text-white py-3 px-6 rounded-full font-bold hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
        >
          Get Started Now
        </button>
      </form>
    </div>
  );
};

export default function WebSolutionsClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState<string[]>([]);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Images for Razorbill CRM
  const razorbillImages = [
    "/images/razorbill1.png",
    "/images/razorbill2.png",
    "/images/razorbill3.png",
    "/images/razorbill4.png"
  ];

  // Images for Project Management
  const projectmgmtImages = [
    "/images/projectmgmt1.png",
    "/images/projectmgmt2.png",
    "/images/projectmgmt3.png",
    "/images/projectmgmt4.png"
  ];

    // Images for Financial Management
  const financialmgmtImages = [
    "/images/financialmgmt1.png",
    "/images/financialmgmt2.png",
    "/images/financialmgmt3.png",
    "/images/financialmgmt4.png",
    "/images/financialmgmt5.png",
    "/images/financialmgmt6.png",
    "/images/financialmgmt7.jpg",
    "/images/financialmgmt8.jpg",
  ];
  // Images for Research & Data Analytics
  const researchImages = [
    "/images/research1.png",
    "/images/research2.png",
    "/images/research3.png",
    "/images/research4.png",
    "/images/research5.png",
    "/images/research6.png"
  ];

  // Images for Calendar Management
  const calendarImages = [
    "/images/calendar1.png",
    "/images/calendar2.png",
    "/images/calendar3.png",
    "/images/calendar4.png"
  ];

  // Images for Email Management
  const emailmgmtImages = [
    "/images/emailmgmt1.png",
    "/images/emailmgmt2.png",
    "/images/emailmgmt3.png",
    "/images/emailmgmt4.png"
  ];

    // Images for Document Management
  const docmgmtImages = [
    "/images/docmgmt1.png",
    "/images/docmgmt2.png",
    "/images/docmgmt3.png",
    "/images/docmgmt4.png"
  ];
  // Images for Data Entry
  const dataEntryImages = [
    "/images/dataentry1.png",
    "/images/dataentry2.png",
    "/images/dataentry3.png",
    "/images/dataentry4.png"
  ];

    // Images for Social Media Management
  const socialmediaImages = [
    "/images/socialmedia1.png",
    "/images/socialmedia2.jpg",
    "/images/socialmedia3.png",
    "/images/socialmedia4.png"
  ];

  // Images for Content Creation
  const contentCreationImages = [
    "/images/contentcreation1.jpg",
    "/images/contentcreation2x.png",
    "/images/contentcreation3.png",
    "/images/contentcreation4.png"
  ];

    // Images for Professional Website Development
  const websiteImages = [
    "/images/website1.png",
    "/images/website2.png",
    "/images/website3.png",
    "/images/website4.png"
  ];
  // Images for Digital Marketing
  const digitalMarketingImages = [
    "/images/digitalmarketing1.png",
    "/images/digitalmarketing2.png",
    "/images/digitalmarketing3.png",
    "/images/digitalmarketing4.png"
  ];
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
      title: 'Razorbill CRM',
      description: 'A comprehensive Customer Relationship Management system designed to streamline business operations, manage customer interactions, and drive sales growth.',
      features: [
        'Software As A Service',
        'CRM',
        'Point of Sale',
        'Booking and Reservations',
        'Inventory Management',
        'E-commerce Software',

      ],
      status: 'Live Production',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Project Management',
      description: 'An advanced project management system that provides real-time tracking, automated alerts, and comprehensive reporting for efficient task control.',
      features: [
        'Project Planning',
        'Task Scheduling',
        'Resource Allocation',
        'Risk Management',
        'Budget Tracking',
        'Milestone Monitoring',
        'Team Collaboration',
        'Progress Reporting',
      ],
      status: 'Live Production',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Financial Management',
      description: 'A comprehensive financial management system that provides real-time insights, budgeting tools, and reporting features to optimize financial performance.',
      features: [
        'Budgeting & Forecasting',
        'Expense Tracking',
        'Payroll Management',
        'Invoicing & Billing',
        'Tax Filing',
        'Financial Reporting',
        'Cash Flow Monitoring',
        'Cost Control'
      ],
      status: 'Live Production',
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'Research & Data Analytics',
      description: 'An advanced research and data analytics platform that provides real-time insights, automated reporting, and comprehensive data visualization tools.',
      features: [
        'Market Research',
        'Data Visualization',
        'Predictive Analytics',
        'Customer Insights',
        'Business Intelligence',
        'Trend Analysis',
        'Reporting Dashboards',
        'Performance Metrics'
      ],
      status: 'Live Production',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'Calendar Management',
      description: 'An efficient calendar management system for businesses to manage schedules and client bookings.',
      features: [
        'Appointment Scheduling',
        'Meeting Coordination',
        'Reminders & Alerts',
        'Time Zone Adjustments',
        'Shared Calendar Setup'
      ],
      status: 'Live Production',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: 6,
      title: 'Email Management',
      description: 'An efficient email management system for businesses to manage client communications and scheduling.',
      features: [
        'Email Tracking',
        'Automated Responses',
        'Template Management',
        'Analytics & Reporting',
        'Integration with CRM',
        'Inbox Organization',
        'Priority Sorting & Filtering',
        'Follow-up Tracking',
        'Mailing List Management'
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    },
    {
      id: 7,
      title: 'Document Management',
      description: 'A comprehensive document management system for businesses to organize, store, and track electronic documents.',
      features: [
        'File Structuring & Organization',
        'Version Control',
        'Secure Sharing & Access',
        'Cloud Storage Setup',
        'Quick Retrieval Systems'
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    },
    {
      id: 8,
      title: 'Data Entry & Processing',
      description: 'A comprehensive data entry and processing system for businesses to manage and streamline their data workflows.',
      features: [
        'Automated Data Capture',
        'Data Validation & Cleansing',
        'Integration with Existing Systems',
        'Real-time Data Processing',
        'Reporting & Analytics',
        'Spreadsheet Management',
        'Database Updating',
        'Records Verification',
        'Quality Assurance'
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    },
     
    {
      id: 9,
      title: 'Social Media Management',
      description: 'A comprehensive social media management system for businesses to manage and streamline their social media presence.',
      features: [
        'Post Scheduling',
        'Analytics & Reporting',
        'Engagement Tracking',
        'Content Curation',
        'Multi-Platform Support',
        'Audience Engagement',
        'Community Monitoring',
        'Hashtag & Trend Research'
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    },
        
    {
      id: 10,
      title: 'Content Creation & Strategy',
      description: 'A comprehensive content creation and strategy system for businesses to manage and streamline their content workflows.',
      features: [
        'Automated Content Generation',
        'Content Planning & Scheduling',
        'SEO Optimization Tools',
        'Collaboration & Feedback',
        'Blog & Article Writing',
        'Graphic & Visual Design',
        'Content Calendar Planning',
        'SEO Optimization',
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    },
    {
      id: 11,
      title: 'Professional Website Development',
      description: 'End-to-end website development solutions that transform your ideas into scalable, high-performing digital platforms.',
      features: [
        'Custom Website Design & Development',
        'User Experience (UX)',
        'User Interface (UI) Optimization',
        'Performance Analytics & Reporting',
        'SEO-Friendly Architecture',
        'E-commerce Solutions & Payment Integration',
        'Responsive Design for All Devices',
        'Ongoing Maintenance & Support',
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    },
      
    {
      id: 12,
      title: 'Digital Marketing Campaigns',
      description: 'A comprehensive digital marketing campaign management system for businesses to manage and streamline their marketing efforts.',
      features: [
        'Automated Campaign Creation',
        'Target Audience Segmentation',
        'Multi-Channel Distribution',
        'Performance Tracking & Analytics',
        'Email Marketing',
        'Paid Ads (Google, Social)',
        'Landing Page Optimization',
        'Conversion Tracking',
        
      ],
      status: 'Live Production',
      icon: <Mail className="w-8 h-8" />
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} currentPage="/web-solutions" contactLink="/" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Portfolio
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto">
            Explore our portfolio of tailored support services. From custom web solutions and financial management, to calendar and document management, including social media strategy and brand growth, we deliver everything you need to keep your business running smarter and growing stronger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/credentials" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              Explore Our Credentials
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">10+</div>
              <div className="text-gray-600">Weekly Time Savings</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">5-30%</div>
              <div className="text-gray-600">Productivity Boost</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">Up to 95%</div>
              <div className="text-gray-600">Reduction in Business Disruptions</div>
            </div>
          </div>
        </div>
      </section> 
      
      {/* Portfolio Projects */}
      {/* Business Support Services */}
      <section id="catalog" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Business Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our custom web solutions, project management, financial management, and data-driven research empower businesses to achieve more.
            </p>
          </div>

          {/* Project 1 - Razorbill CRM */}
          <div id="custom-softwares-and-web-solutions" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <Image src="/images/Razorbill_512.png" alt="Razorbill Logo" width={100} height={100} className="mb-4" />
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Custom Softwares and Web Solutions:
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-600 font-light" >
                    Razorbill Technologies
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Razorbill Technologies delivers custom web development and SaaS solutions designed for your business performance and growth.</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[0].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-200 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {razorbillImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(razorbillImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Razorbill CRM Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
            </div>
            {/* Modal for image gallery */}
            {modalOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex items-center justify-center w-full mb-4">
                    <button
                      className="p-2  mr-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                      }
                      aria-label="Previous"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <div className="flex-1 flex justify-center">
                      <Image
                        src={modalImages[modalImageIndex]}
                        alt={`Razorbill CRM Screenshot ${modalImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="rounded-xl object-contain"
                      />
                    </div>
                    <button
                      className="p-2  ml-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                      }
                      aria-label="Next"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                  <div className="text-gray-700 text-center mt-2">
                    Image {modalImageIndex + 1} of {modalImages.length}
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Project 2 -Project Management */}
          <div id ="project-management" className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-mt-24 ">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {projectmgmtImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(projectmgmtImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Project Management Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
              {/* Modal for image gallery */}
              {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                    <button
                      className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      <X size={32} />
                    </button>
                    <div className="flex items-center justify-center w-full mb-4">
                      <button
                        className="p-2  mr-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                        }
                        aria-label="Previous"
                      >
                        <ChevronLeft size={40} />
                      </button>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={modalImages[modalImageIndex]}
                          alt={`Project Management Screenshot ${modalImageIndex + 1}`}
                          width={600}
                          height={400}
                          className="rounded-xl object-contain"
                        />
                      </div>
                      <button
                        className="p-2  ml-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                        }
                        aria-label="Next"
                      >
                        <ChevronRight size={40} />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center mt-2">
                      Image {modalImageIndex + 1} of {modalImages.length}
                    </div>
                  </div>
                </div>
              )}
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Project Management:
                    </h1>
                    
                  </div>   
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    From initiation and planning to execution and delivery, our project management services ensure every phase runs smoothly, keeping your projects on track, within budget, and aligned with your goals.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[1].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-indigo-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Project 3 - Financial Management */}
          <div id="financial-management" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Financial Management:
                  </h1>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Streamline your finances with expert management solutions that cover bookkeeping, budgeting, and reporting empowering smarter decisions and long-term stability.</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[2].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-200 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-4 gap-4">
                  {financialmgmtImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(financialmgmtImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Financial Management Screenshot ${idx + 1}`}
                        width={180}
                        height={120}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
            </div>
            {/* Modal for image gallery */}
            {modalOpen &&(
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex items-center justify-center w-full mb-4">
                    <button
                      className="p-2  mr-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                      }
                      aria-label="Previous"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <div className="flex-1 flex justify-center">
                      <Image
                        src={modalImages[modalImageIndex]}
                        alt={`Financial Management Screenshot ${modalImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="rounded-xl object-contain"
                      />
                    </div>
                    <button
                      className="p-2  ml-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                      }
                      aria-label="Next"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                  <div className="text-gray-700 text-center mt-2">
                    Image {modalImageIndex + 1} of {modalImages.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project 4 -Research & Data Analytics */}
          <div id="research-and-data-analytics" className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-3 gap-4">
                  {researchImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                         setModalImages(researchImages);
                         setModalImageIndex(idx);
                         setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Research & Data Analytics Screenshot ${idx + 1}`}
                        width={180}
                        height={120}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
              {/* Modal for image gallery */}
              {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                    <button
                      className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      <X size={32} />
                    </button>
                    <div className="flex items-center justify-center w-full mb-4">
                      <button
                        className="p-2  mr-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                        }
                        aria-label="Previous"
                      >
                        <ChevronLeft size={40} />
                      </button>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={modalImages[modalImageIndex]}
                          alt={`Research & Data Analytics Screenshot ${modalImageIndex + 1}`}
                          width={600}
                          height={400}
                          className="rounded-xl object-contain"
                        />
                      </div>
                      <button
                        className="p-2  ml-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                        }
                        aria-label="Next"
                      >
                        <ChevronRight size={40} />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center mt-2">
                      Image {modalImageIndex + 1} of {modalImages.length}
                    </div>
                  </div>
                </div>
              )}
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Research & Data Analytics:
                    </h1>
                    
                  </div>   
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our Research & Data Analytics services empower businesses to make informed decisions by leveraging data-driven insights. We specialize in data collection, analysis, and visualization to help you understand your market, customers, and performance.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[3].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-indigo-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Administrative Assistance */}
      <section id="catalog" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Administrative Assistance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay organized and in control with seamless support for calendars, emails, documents, and day-to-day operations; freeing your time for what matters most.
            </p>
          </div>

          {/* Project 1 - Calendar Management */}
          <div id="calendar-management" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Calendar Management:
                  </h1>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Stay on top of your schedule with efficient calendar management; organizing meetings, appointments, and deadlines so nothing important slips through the cracks.</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[4].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-200 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {calendarImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(calendarImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Razorbill CRM Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
            </div>
            {/* Modal for image gallery */}
            {modalOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex items-center justify-center w-full mb-4">
                    <button
                      className="p-2  mr-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                      }
                      aria-label="Previous"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <div className="flex-1 flex justify-center">
                      <Image
                        src={modalImages[modalImageIndex]}
                        alt={`Calendar Screenshot ${modalImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="rounded-xl object-contain"
                      />
                    </div>
                    <button
                      className="p-2  ml-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                      }
                      aria-label="Next"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                  <div className="text-gray-700 text-center mt-2">
                    Image {modalImageIndex + 1} of {modalImages.length}
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Project 2 -Email Management */}
          <div id="email-management" className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {emailmgmtImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(emailmgmtImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Email Management Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
              {/* Modal for image gallery */}
              {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                    <button
                      className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      <X size={32} />
                    </button>
                    <div className="flex items-center justify-center w-full mb-4">
                      <button
                        className="p-2  mr-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                        }
                        aria-label="Previous"
                      >
                        <ChevronLeft size={40} />
                      </button>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={modalImages[modalImageIndex]}
                          alt={`Email Management Screenshot ${modalImageIndex + 1}`}
                          width={600}
                          height={400}
                          className="rounded-xl object-contain"
                        />
                      </div>
                      <button
                        className="p-2  ml-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                        }
                        aria-label="Next"
                      >
                        <ChevronRight size={40} />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center mt-2">
                      Image {modalImageIndex + 1} of {modalImages.length}
                    </div>
                  </div>
                </div>
              )}
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Email Management:
                    </h1>
                    
                  </div>   
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Streamline your inbox with professional email management; filtering, prioritizing, and responding so your communication remains clear, timely, and stress-free.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[5].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-indigo-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Project 3 - Document Management */}
          <div id="document-management" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Document Management:
                  </h1>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Streamline your document workflows with expert management solutions that cover organization, retrieval, and sharing empowering smarter decisions and long-term stability.</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[6].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-200 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {docmgmtImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(docmgmtImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Financial Management Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
            </div>
            {/* Modal for image gallery */}
            {modalOpen &&(
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex items-center justify-center w-full mb-4">
                    <button
                      className="p-2  mr-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                      }
                      aria-label="Previous"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <div className="flex-1 flex justify-center">
                      <Image
                        src={modalImages[modalImageIndex]}
                        alt={`Financial Management Screenshot ${modalImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="rounded-xl object-contain"
                      />
                    </div>
                    <button
                      className="p-2  ml-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                      }
                      aria-label="Next"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                  <div className="text-gray-700 text-center mt-2">
                    Image {modalImageIndex + 1} of {modalImages.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project 4 -Data Entry & Processing */}
          <div id="data-entry-and-processing" className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {dataEntryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                         setModalImages(dataEntryImages);
                         setModalImageIndex(idx);
                         setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Research & Data Analytics Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
              {/* Modal for image gallery */}
              {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                    <button
                      className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      <X size={32} />
                    </button>
                    <div className="flex items-center justify-center w-full mb-4">
                      <button
                        className="p-2  mr-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                        }
                        aria-label="Previous"
                      >
                        <ChevronLeft size={40} />
                      </button>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={modalImages[modalImageIndex]}
                          alt={`Research & Data Analytics Screenshot ${modalImageIndex + 1}`}
                          width={600}
                          height={400}
                          className="rounded-xl object-contain"
                        />
                      </div>
                      <button
                        className="p-2  ml-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                        }
                        aria-label="Next"
                      >
                        <ChevronRight size={40} />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center mt-2">
                      Image {modalImageIndex + 1} of {modalImages.length}
                    </div>
                  </div>
                </div>
              )}
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Data Entry & Processing:
                    </h1>
                    
                  </div>   
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Maintain accuracy and efficiency with reliable data entry and processing, turning raw information into well-organized records you can easily act on.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[7].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-indigo-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


     {/* Marketing Assistance */}
      <section id="catalog" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Marketing Assistance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engage, inspire, and grow your audience through impactful content, smart social media strategies, and brand-building campaigns that drive results.
            </p>
          </div>

          {/* Project 1 - Social Media Management */}
          <div id="social-media-management" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Social Media Management:
                  </h1>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Build a consistent online presence with engaging social media management; curating content, monitoring interactions, and growing your audience across platforms.
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[8].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-200 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {socialmediaImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(socialmediaImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Razorbill CRM Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
            </div>
            {/* Modal for image gallery */}
            {modalOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex items-center justify-center w-full mb-4">
                    <button
                      className="p-2  mr-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                      }
                      aria-label="Previous"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <div className="flex-1 flex justify-center">
                      <Image
                        src={modalImages[modalImageIndex]}
                        alt={`Calendar Screenshot ${modalImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="rounded-xl object-contain"
                      />
                    </div>
                    <button
                      className="p-2  ml-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                      }
                      aria-label="Next"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                  <div className="text-gray-700 text-center mt-2">
                    Image {modalImageIndex + 1} of {modalImages.length}
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Project 2 -Content Creation & Strategy */}
          <div id="content-creation-and-strategy" className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {contentCreationImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(contentCreationImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Email Management Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
              {/* Modal for image gallery */}
              {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                    <button
                      className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      <X size={32} />
                    </button>
                    <div className="flex items-center justify-center w-full mb-4">
                      <button
                        className="p-2  mr-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                        }
                        aria-label="Previous"
                      >
                        <ChevronLeft size={40} />
                      </button>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={modalImages[modalImageIndex]}
                          alt={`Email Management Screenshot ${modalImageIndex + 1}`}
                          width={600}
                          height={400}
                          className="rounded-xl object-contain"
                        />
                      </div>
                      <button
                        className="p-2  ml-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                        }
                        aria-label="Next"
                      >
                        <ChevronRight size={40} />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center mt-2">
                      Image {modalImageIndex + 1} of {modalImages.length}
                    </div>
                  </div>
                </div>
              )}
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Content Creation & Strategy:
                    </h1>
                    
                  </div>   
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Deliver powerful messaging through creative content and tailored strategies; designed to connect with your audience and reinforce your brand identity.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[9].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-indigo-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Project 3 - Professional Website Development */}
          <div id="professional-website-development" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Professional Website Development:
                  </h1>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  End-to-end website development solutions that transform your ideas into scalable, high-performing digital platforms.
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[10].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-200 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {websiteImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setModalImages(websiteImages);
                        setModalImageIndex(idx);
                        setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Financial Management Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
            </div>
            {/* Modal for image gallery */}
            {modalOpen &&(
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex items-center justify-center w-full mb-4">
                    <button
                      className="p-2  mr-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                      }
                      aria-label="Previous"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <div className="flex-1 flex justify-center">
                      <Image
                        src={modalImages[modalImageIndex]}
                        alt={`Financial Management Screenshot ${modalImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="rounded-xl object-contain"
                      />
                    </div>
                    <button
                      className="p-2  ml-4"
                      onClick={() =>
                        setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                      }
                      aria-label="Next"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                  <div className="text-gray-700 text-center mt-2">
                    Image {modalImageIndex + 1} of {modalImages.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project 4 - Digital Marketing Campaign */}
          <div id="digital-marketing-campaign" className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {digitalMarketingImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                         setModalImages(digitalMarketingImages);
                         setModalImageIndex(idx);
                         setModalOpen(true);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Research & Data Analytics Screenshot ${idx + 1}`}
                        width={280}
                        height={180}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Click to view larger images and browse our portfolio.
                </div>
              </div>
              {/* Modal for image gallery */}
              {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center">
                    <button
                      className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      <X size={32} />
                    </button>
                    <div className="flex items-center justify-center w-full mb-4">
                      <button
                        className="p-2  mr-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)
                        }
                        aria-label="Previous"
                      >
                        <ChevronLeft size={40} />
                      </button>
                      <div className="flex-1 flex justify-center">
                        <Image
                          src={modalImages[modalImageIndex]}
                          alt={`Research & Data Analytics Screenshot ${modalImageIndex + 1}`}
                          width={600}
                          height={400}
                          className="rounded-xl object-contain"
                        />
                      </div>
                      <button
                        className="p-2  ml-4"
                        onClick={() =>
                          setModalImageIndex((modalImageIndex + 1) % modalImages.length)
                        }
                        aria-label="Next"
                      >
                        <ChevronRight size={40} />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center mt-2">
                      Image {modalImageIndex + 1} of {modalImages.length}
                    </div>
                  </div>
                </div>
              )}
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Digital Marketing Campaign:
                    </h1>
                    
                  </div>   
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Maximize visibility and impact with targeted digital marketing campaigns; driving traffic, conversions, and measurable results for your business.
                  </p>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[11].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-indigo-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>                 

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s discuss your vision and create a custom web solution that drives your business forward.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-indigo-900 text-white p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400">Email Us</div>
                    <div className="text-gray-600">support@executiveaid.org</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-indigo-900 text-white p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400">Call Us</div>
                    <div className="text-gray-600">+233256108055</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
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
  );
}