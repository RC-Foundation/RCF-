import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, Camera, Music, Film } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AleppoRootsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const eventPhotos = [
    '/WhatsApp Image 2025-06-19 at 12.35.09 PM.jpeg',
    '/WhatsApp Image 2025-06-19 at 12.35.10 PM.jpeg',
    '/484134928_122145258254471410_1133353559349890810_n.jpg',
    '/WhatsApp Image 2025-06-17 at 12.41.33 AM.jpeg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
              {t('aleppo-roots-title', 'Aleppo Roots', 'جذور حلب')}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t(
                'aleppo-roots-subtitle',
                'A cultural celebration reconnecting communities and honoring the rich heritage of Aleppo',
                'احتفال ثقافي يعيد ربط المجتمعات ويكرم التراث الغني لحلب'
              )}
            </p>
            
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-full font-medium">
              <Calendar className="h-5 w-5 mr-2" />
              <span>March 15, 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-3xl font-bold text-emerald-800 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`} style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
                {t('event-overview', 'Event Overview', 'نظرة عامة على الحدث')}
              </h2>
              
              <div className={`prose prose-lg max-w-none text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                <p>
                  {t(
                    'overview-text-1',
                    'Aleppo Roots was a groundbreaking cultural event that took place on March 15, 2024, bringing together diverse communities to celebrate the rich cultural heritage of Aleppo. The event featured traditional music, dance performances, art exhibitions, storytelling sessions, and culinary experiences that showcased the unique identity of this historic city.',
                    'كانت "جذور حلب" حدثًا ثقافيًا رائدًا أقيم في 15 مارس 2024، جمع بين مجتمعات متنوعة للاحتفال بالتراث الثقافي الغني لحلب. تضمن الحدث موسيقى تقليدية وعروض رقص ومعارض فنية وجلسات سرد قصص وتجارب طهي عرضت الهوية الفريدة لهذه المدينة التاريخية.'
                  )}
                </p>
                
                <p>
                  {t(
                    'overview-text-2',
                    'The event was designed to foster connections between Aleppo natives now living abroad and those still residing in the city, creating a bridge across geographical boundaries. Through shared cultural experiences, Aleppo Roots aimed to strengthen community bonds and preserve cultural heritage for future generations.',
                    'تم تصميم الحدث لتعزيز الروابط بين مواطني حلب الذين يعيشون الآن في الخارج وأولئك الذين ما زالوا يقيمون في المدينة، مما يخلق جسرًا عبر الحدود الجغرافية. من خلال التجارب الثقافية المشتركة، هدفت "جذور حلب" إلى تقوية الروابط المجتمعية والحفاظ على التراث الثقافي للأجيال القادمة.'
                  )}
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4 flex items-center">
                  <Users className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <div className="font-bold text-emerald-800">350+</div>
                    <div className="text-sm text-emerald-600">
                      {t('attendees', 'Attendees', 'الحضور')}
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 flex items-center">
                  <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <div className="font-bold text-emerald-800">
                      {t('locations', '2 Locations', 'موقعان')}
                    </div>
                    <div className="text-sm text-emerald-600">
                      {t('aleppo-edmonton', 'Aleppo & Edmonton', 'حلب وإدمونتون')}
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 flex items-center">
                  <Music className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <div className="font-bold text-emerald-800">12</div>
                    <div className="text-sm text-emerald-600">
                      {t('performances', 'Performances', 'عروض')}
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 flex items-center">
                  <Heart className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <div className="font-bold text-emerald-800">100%</div>
                    <div className="text-sm text-emerald-600">
                      {t('positive-feedback', 'Positive Feedback', 'ردود فعل إيجابية')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/WhatsApp Image 2025-06-19 at 12.35.09 PM.jpeg" 
                alt="Aleppo Roots Event" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Calendar className="h-8 w-8 text-emerald-600" />
                <div className="mt-2 font-bold text-emerald-800">March 15, 2024</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold text-emerald-800 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`} style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
              {t('event-gallery', 'Event Gallery', 'معرض الحدث')}
            </h2>
            <p className={`text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'gallery-description',
                'Capturing the vibrant moments and connections made during Aleppo Roots',
                'التقاط اللحظات النابضة بالحياة والروابط التي تم إنشاؤها خلال جذور حلب'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
              >
                <img 
                  src={photo} 
                  alt={`Aleppo Roots Event ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Camera className="h-4 w-4 text-white mr-2" />
                        <span className="text-white text-sm">
                          {t('photo', 'Photo', 'صورة')} {index + 1}
                        </span>
                      </div>
                      <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Heart className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className={`inline-flex items-center px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              <Film className="h-5 w-5 mr-2" />
              {t('view-full-gallery', 'View Full Gallery', 'عرض المعرض الكامل')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AleppoRootsPage;