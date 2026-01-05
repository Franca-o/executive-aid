'use client';

import { useForm, ValidationError } from '@formspree/react';

interface HireVAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireVAModal = ({ isOpen, onClose }: HireVAModalProps) => {
  const [state, handleSubmit] = useForm("mzzezpze"); // Same Formspree form ID

  if (!isOpen) return null;

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
          <div className="text-center">
            <h3 className="text-indigo-900 font-bold text-xl mb-4 border-b border-gray-300 pb-2">
              THANK YOU!
            </h3>
            <p className="text-gray-700 my-6">
              Your request has been received. We&apos;ll contact you shortly to discuss your virtual assistant needs.
            </p>
            <button 
              onClick={onClose}
              className="bg-indigo-900 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-800 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative border border-white/20 shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        <h3 className="text-xl md:text-2xl text-indigo-900 font-bold mb-4 border-b border-gray-300 pb-2">
          HIRE A VIRTUAL ASSISTANT
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 font-mono text-sm text-gray-600 md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full" 
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
            
            <input 
              type="email" 
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 font-mono text-sm text-gray-600 md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full" 
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
            
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 font-mono text-sm text-gray-600 md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full" 
              required
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
            
            <select
              name="service"
              className="w-full px-4 py-3 border border-gray-300 font-mono text-sm text-gray-600 md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
              required
            >
              <option value="">SELECT SERVICE NEEDED</option>
              <option value="financial-management">Financial Management</option>
              <option value="custom-web-app">Professional Website Development</option>
              <option value="project-management">Project management</option>
              <option value="research-analytics">Research and Data Analytics</option>
              <option value="digital-marketing">Digital marketing</option>
              <option value="admin-assistance">Administrative assistance</option>
            </select>
            <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
            
            <textarea 
              name="message"
              placeholder="DESCRIBE YOUR NEEDS AND GOALS"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 font-mono text-sm md:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-2xl" 
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
            
            <button 
              type="submit" 
              disabled={state.submitting}
              className={`w-full py-3 font-bold text-base border border-gray-300 rounded-full transition-all duration-300 ${
                state.submitting 
                  ? 'bg-gray-200 text-gray-500' 
                  : 'bg-indigo-900 text-white hover:bg-indigo-800 button-hover-glow'
              }`}
            >
              {state.submitting ? 'SENDING REQUEST...' : 'SUBMIT REQUEST'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 