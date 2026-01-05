'use client';

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MessageSquarePlus } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import type { Review } from '@/lib/supabase';
import ReviewForm from './ReviewForm';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [average, setAverage] = useState<number>(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const { supabase } = await import('@/lib/supabase');
      
      const { data, error } = await supabase
        .from('executive_aid_reviews')
        .select('*')
        .eq('approved', true)
        .order('display_order', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        return;
      }

      setReviews(data || []);
      
      if (data && data.length > 0) {
        const avg = data.reduce((sum: number, r: Review) => sum + r.rating, 0) / data.length;
        setAverage(Number(avg.toFixed(1)));
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      {/* Header with Leave Review Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-gray-600 mb-6">
            See what our clients say about working with Executive Aid
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            <MessageSquarePlus className="h-5 w-5" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-900 mb-2"></div>
            <div className="text-gray-600">Clients</div>
          </div>
          
          {/* Dynamic Ratings Stat */}
          <div className="p-6">
            {!isLoading && reviews.length > 0 ? (
              <>
                <div className="text-4xl font-bold text-indigo-900 mb-2">
                  ⭐ {average}/5
                </div>
                <div className="text-gray-600">
                  Client Ratings ({reviews.length} reviews)
                </div>
              </>
            ) : (
              <div className="text-gray-600">
                Client Ratings
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-900 mb-2"></div>
            <div className="text-gray-600">Virtual Assistants</div>
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      {!isLoading && reviews.length > 0 ? (
        <div className="max-w-5xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={review.id || i}>
                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                  <p className="text-lg text-indigo-900 font-semibold mb-1">
                    {review.client_name}
                  </p>
                  <p className="text-yellow-500 mb-2">
                    {"⭐".repeat(review.rating)}
                  </p>
                  <p className="text-gray-700 mb-3">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <p className="text-sm text-gray-500">
                    — {review.service_type}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : isLoading ? (
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-2">Loading reviews...</p>
        </div>
      ) : (
        <div className="text-center text-gray-500 max-w-md mx-auto">
          <MessageSquarePlus className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg">No reviews yet.</p>
          <p className="text-sm mt-2">Be the first to share your experience with Executive Aid!</p>
        </div>
      )}

      {/* Review Form Modal */}
      <ReviewForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}