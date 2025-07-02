import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturedLeaders: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const leaders = [
    {
      id: '1',
      name: 'Dr. Amina Hassan',
      nameAr: 'د. أمينة حسان',
      title: 'Community Health Advocate',
      titleAr: 'مدافعة عن الصحة المجتمعية',
      location: 'Toronto, Canada',
      locationAr: 'تورونتو، كندا',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      achievement: 'Established 5 community health centers',
      achievementAr: 'أسست 5 مراكز صحية مجتمعية',
      description: 'Leading healthcare initiatives for Syrian refugees and immigrants across Canada.',
      descriptionAr: 'تقود مبادرات الرعاية الصحية للاجئين والمهاجرين السوريين في جميع أنحاء كندا.',
      impact: '2,500+ families served',
      impactAr: 'خدمت أكثر من 2,500 عائلة'
    },
    {
      id: '2',
      name: 'Omar Al-Rashid',
      nameAr: 'عمر الراشد',
      title: 'Educational Technology Pioneer',
      titleAr: 'رائد التكنولوجيا التعليمية',
      location: 'Damascus, Syria',
      locationAr: 'دمشق، سوريا',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      achievement: 'Developed digital learning platform',
      achievementAr: 'طور منصة تعلم رقمية',
      description: 'Creating innovative educational solutions for displaced students.',
      descriptionAr: 'إنشاء حلول تعليمية مبتكرة للطلاب النازحين.',
      impact: '10,000+ students reached',
      impactAr: 'وصل إلى أكثر من 10,000 طالب'
    },
    {
      id: '3',
      name: 'Layla Mahmoud',
      nameAr: 'ليلى محمود',
      title: 'Cultural Preservation Specialist',
      titleAr: 'أخصائية الحفاظ على الثقافة',
      location: 'Berlin, Germany',
      locationAr: 'برلين، ألمانيا',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
      achievement: 'Archived 1,000+ cultural artifacts',
      achievementAr: 'أرشفت أكثر من 1,000 قطعة ثقافية',
      description: 'Preserving Syrian heritage through digital documentation and storytelling.',
      descriptionAr: 'الحفاظ على التراث السوري من خلال التوثيق الرقمي والسرد.',
      impact: '50+ exhibitions organized',
      impactAr: 'نظمت أكثر من 50 معرضاً'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-12 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            {t('featured-leaders-title', 'Community Champions', 'أبطال المجتمع')}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {t(
              'featured-leaders-description',
              'Celebrating the remarkable individuals who are making a difference in our community.',
              'الاحتفال بالأفراد الرائعين الذين يحدثون فرقاً في مجتمعنا.'
            )}
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Leaders Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[-1, 0, 1].map((offset) => {
                  const index = (currentIndex + offset + leaders.length) % leaders.length;
                  const leader = leaders[index];
                  const isCenter = offset === 0;

                  return (
                    <motion.div
                      key={leader.id}
                      className={`bg-gradient-to-br from-white to-stone-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isCenter ? 'scale-105 ring-2 ring-emerald-200' : 'opacity-75'
                      }`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-center">
                        <div className="relative mb-6">
                          <img
                            src={leader.image}
                            alt={t('leader-name', leader.name, leader.nameAr)}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-200"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2 rounded-full">
                            <Award className="h-4 w-4" />
                          </div>
                        </div>

                        <h3 className={`text-xl font-bold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          {t('leader-name', leader.name, leader.nameAr)}
                        </h3>

                        <p className={`text-emerald-600 font-semibold mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          {t('leader-title', leader.title, leader.titleAr)}
                        </p>

                        <div className="flex items-center justify-center text-stone-500 mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className={`text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                            {t('leader-location', leader.location, leader.locationAr)}
                          </span>
                        </div>

                        <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                          <p className={`text-sm font-semibold text-emerald-800 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                            {t('leader-achievement', leader.achievement, leader.achievementAr)}
                          </p>
                        </div>

                        <p className={`text-stone-600 text-sm mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          {t('leader-description', leader.description, leader.descriptionAr)}
                        </p>

                        <div className="bg-stone-100 rounded-lg p-3 mb-4">
                          <p className={`text-xs font-medium text-stone-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                            {t('impact', 'Impact:', 'التأثير:')} {t('leader-impact', leader.impact, leader.impactAr)}
                          </p>
                        </div>

                        <button className="flex items-center justify-center space-x-2 w-full py-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                          <span className={`text-sm font-medium ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                            {t('learn-more', 'Learn More', 'اعرف المزيد')}
                          </span>
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {leaders.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-emerald-600 scale-125'
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLeaders;