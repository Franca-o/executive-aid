'use client';

import { useState, useEffect } from 'react';
import { Star, Send, X } from 'lucide-react';
import type { ReviewInsert } from '@/lib/supabase';

interface ReviewFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  standalone?: boolean;
}

const services = [
  'Financial Management',
  'Administrative Assistance',
  'Digital Marketing',
  'Project Management',
  'Research and Data Analytics Services',
  'Professional Website Development',
];

export default function ReviewForm({ isOpen = true, onClose, standalone = false }: ReviewFormProps) {
  const [formData, setFormData] = useState<ReviewInsert>({
    client_name: '',
    email: '',
    service_type: '',
    rating: 0,
    comment: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validate required fields
      if (!formData.client_name || !formData.service_type || !formData.rating || !formData.comment) {
        setSubmitStatus('error');
        return;
      }

      // Validate rating range
      if (formData.rating < 1 || formData.rating > 5) {
        setSubmitStatus('error');
        return;
      }

      const { supabase } = await import('@/lib/supabase');

      // If an image was provided, upload it to Supabase Storage first
      let imageUrl: string | null = null;
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `reviews/${Date.now()}_${Math.random().toString(36).slice(2)}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('review-images')
          .upload(fileName, imageFile, { cacheControl: '3600', upsert: false });

        if (uploadError) {
          console.error('Error uploading image:', uploadError);
          setSubmitStatus('error');
          setIsSubmitting(false);
          return;
        }

        const { data: publicData } = supabase.storage.from('review-images').getPublicUrl(uploadData.path || fileName);
        imageUrl = publicData?.publicUrl || null;
      }

      // Build insert payload, include image_url only if available
      const payload: any = {
        client_name: formData.client_name,
        email: formData.email,
        service_type: formData.service_type,
        rating: formData.rating,
        comment: formData.comment,
        approved: false
      };

      if (imageUrl) payload.image_url = imageUrl;

      // Try inserting with image_url if present; if the DB rejects unknown column, retry without it
      let insertResult = await supabase.from('executive_aid_reviews').insert([payload]);
      if (insertResult.error && imageUrl) {
        console.warn('Insert with image_url failed, retrying without image_url:', insertResult.error);
        const { error: retryError } = await supabase
          .from('executive_aid_reviews')
          .insert([{
            client_name: formData.client_name,
            email: formData.email,
            service_type: formData.service_type,
            rating: formData.rating,
            comment: formData.comment,
            approved: false
          }]);

        if (retryError) {
          console.error('Error inserting review (retry):', retryError);
          setSubmitStatus('error');
          return;
        }
      } else if (insertResult.error) {
        console.error('Error inserting review:', insertResult.error);
        setSubmitStatus('error');
        return;
      }


      setSubmitStatus('success');
      setFormData({
        client_name: '',
        email: '',
        service_type: '',
        rating: 0,
        comment: ''
      });
      setImageFile(null);
      setImagePreview(null);
        setTimeout(() => {
          if (onClose) {
            onClose();
          }
          setSubmitStatus('idle');
        }, 2000);
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    setImageFile(file);
    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
  };

  const removeImage = () => {
    setImageFile(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  if (!standalone && !isOpen) return null;

  const content = (
    <div className="p-6">
      {/* Header */}
      <div className={`flex ${standalone ? 'justify-center' : 'justify-between'} items-center mb-6`}>
        <h2 className="text-2xl font-bold text-indigo-900">Leave a Review</h2>
        {!standalone && onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        )}
      </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-center font-medium">
                Thank you! Your review has been submitted and will be published after moderation.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-center font-medium">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="client_name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="client_name"
                name="client_name"
                value={formData.client_name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Image (Optional) */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Your Image (Optional)
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-600"
              />
              {imagePreview && (
                <div className="mt-2 flex items-start space-x-3">
                  <img src={imagePreview} alt="preview" className="h-24 w-24 object-cover rounded-md border" />
                  <div>
                    <p className="text-sm text-gray-600">Preview</p>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="mt-2 inline-flex items-center px-2 py-1 text-sm bg-red-100 text-red-700 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-1">
                Service You Received *
              </label>
              <select
                id="service_type"
                name="service_type"
                value={formData.service_type}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating *
              </label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-colors"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= (hoverRating || formData.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review *
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Tell us about your experience..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.client_name || !formData.service_type || !formData.rating || !formData.comment}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Review'}</span>
            </button>
          </form>
        </div>
      );

  if (standalone) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {content}
      </div>
    </div>
  );
}
