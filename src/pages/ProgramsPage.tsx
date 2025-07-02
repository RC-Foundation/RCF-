import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Palette, 
  Users, 
  Laptop, 
  Heart, 
  Globe,
  Filter,
  MapPin,
  Calendar,
  Target,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProgramsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', en: 'All Programs', ar: 'جميع البرامج', icon: Globe },
    { key: 'education', en: 'Education', ar: 'التعليم', icon: BookOpen },
    { key: 'culture', en: 'Culture', ar: 'الثقافة', icon: Palette },
    { key: 'community', en: 'Community', ar: 'المجتمع', icon: Users },
    { key: 'technology', en: 'Technology', ar: 'التكنولوجيا', icon: Laptop },
    { key: 'health', en: 'Health', ar: 'الصحة', icon: Heart }
  ];

  const programs = [
    {
      id: '1',
      title: 'Digital Literacy Initiative',
      titleAr: 'مبادرة محو الأمية الرقمية',
      category: 'education',
      description: 'Comprehensive digital skills training for Syrian refugees and immigrants, covering basic computer skills, internet safety, and online job searching.',
      descriptionAr: 'تدريب شامل على المهارات الرقمية للاجئين والمهاجرين السوريين، يغطي مهارات الكمبيوتر الأساسية والسلامة على الإنترنت والبحث عن وظائف عبر الإنترنت.',
      location: 'Toronto, Montreal, Vancouver',
      locationAr: 'تورونتو، مونتريال، فانكوفر',
      participants: 450,
      duration: '12 weeks',
      durationAr: '12 أسبوعاً',
      status: 'active',
      impact: '85% job placement rate',
      impactAr: 'معدل توظيف 85%',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Basic computer skills',
        'Internet navigation',
        'Email and communication',
        'Online job applications',
        'Digital safety'
      ],
      featuresAr: [
        'مهارات الكمبيوتر الأساسية',
        'التنقل في الإنترنت',
        'البريد الإلكتروني والتواصل',
        'طلبات العمل عبر الإنترنت',
        'السلامة الرقمية'
      ]
    },
    {
      id: '2',
      title: 'Cultural Heritage Documentation',
      titleAr: 'توثيق التراث الثقافي',
      category: 'culture',
      description: 'Preserving Syrian cultural heritage through digital storytelling, oral history collection, and traditional arts workshops.',
      descriptionAr: 'الحفاظ على التراث الثقافي السوري من خلال السرد الرقمي وجمع التاريخ الشفوي وورش الفنون التقليدية.',
      location: 'Damascus, Aleppo, Berlin',
      locationAr: 'دمشق، حلب، برلين',
      participants: 320,
      duration: 'Ongoing',
      durationAr: 'مستمر',
      status: 'active',
      impact: '1,200+ stories documented',
      impactAr: 'أكثر من 1,200 قصة موثقة',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Oral history collection',
        'Traditional crafts workshops',
        'Digital storytelling',
        'Cultural events',
        'Heritage preservation'
      ],
      featuresAr: [
        'جمع التاريخ الشفوي',
        'ورش الحرف التقليدية',
        'السرد الرقمي',
        'الفعاليات الثقافية',
        'الحفاظ على التراث'
      ]
    },
    {
      id: '3',
      title: 'Youth Leadership Development',
      titleAr: 'تطوير القيادة الشبابية',
      category: 'community',
      description: 'Empowering young Syrian leaders through mentorship, leadership training, and community project implementation.',
      descriptionAr: 'تمكين القادة الشباب السوريين من خلال الإرشاد والتدريب على القيادة وتنفيذ المشاريع المجتمعية.',
      location: 'Multiple cities',
      locationAr: 'مدن متعددة',
      participants: 180,
      duration: '6 months',
      durationAr: '6 أشهر',
      status: 'active',
      impact: '95% program completion',
      impactAr: 'معدل إكمال البرنامج 95%',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Leadership workshops',
        'Mentorship program',
        'Community projects',
        'Public speaking training',
        'Networking events'
      ],
      featuresAr: [
        'ورش القيادة',
        'برنامج الإرشاد',
        'المشاريع المجتمعية',
        'تدريب الخطابة',
        'فعاليات التواصل'
      ]
    },
    {
      id: '4',
      title: 'Community Health Outreach',
      titleAr: 'التوعية الصحية المجتمعية',
      category: 'health',
      description: 'Providing health education, mental health support, and connecting families with healthcare resources.',
      descriptionAr: 'توفير التثقيف الصحي ودعم الصحة النفسية وربط العائلات بموارد الرعاية الصحية.',
      location: 'Toronto, Damascus',
      locationAr: 'تورونتو، دمشق',
      participants: 280,
      duration: 'Ongoing',
      durationAr: 'مستمر',
      status: 'active',
      impact: '2,500+ families served',
      impactAr: 'خدمت أكثر من 2,500 عائلة',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Health education workshops',
        'Mental health support',
        'Healthcare navigation',
        'Wellness programs',
        'Community clinics'
      ],
      featuresAr: [
        'ورش التثقيف الصحي',
        'دعم الصحة النفسية',
        'التنقل في الرعاية الصحية',
        'برامج العافية',
        'العيادات المجتمعية'
      ]
    },
    {
      id: '5',
      title: 'Innovation Hub',
      titleAr: 'مركز الابتكار',
      category: 'technology',
      description: 'Supporting Syrian entrepreneurs and innovators with technology resources, mentorship, and startup incubation.',
      descriptionAr: 'دعم رواد الأعمال والمبتكرين السوريين بموارد التكنولوجيا والإرشاد واحتضان الشركات الناشئة.',
      location: 'Berlin, Toronto',
      locationAr: 'برلين، تورونتو',
      participants: 120,
      duration: '12 months',
      durationAr: '12 شهراً',
      status: 'planned',
      impact: '15 startups launched',
      impactAr: '15 شركة ناشئة أُطلقت',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Startup incubation',
        'Technology training',
        'Mentorship network',
        'Funding support',
        'Innovation workshops'
      ],
      featuresAr: [
        'احتضان الشركات الناشئة',
        'التدريب التقني',
        'شبكة الإرشاد',
        'دعم التمويل',
        'ورش الابتكار'
      ]
    },
    {
      id: '6',
      title: 'Women Empowerment Circle',
      titleAr: 'دائرة تمكين المرأة',
      category: 'community',
      description: 'Supporting Syrian women through skill development, entrepreneurship training, and peer support networks.',
      descriptionAr: 'دعم النساء السوريات من خلال تطوير المهارات والتدريب على ريادة الأعمال وشبكات الدعم النظير.',
      location: 'Multiple locations',
      locationAr: 'مواقع متعددة',
      participants: 350,
      duration: '8 weeks',
      durationAr: '8 أسابيع',
      status: 'active',
      impact: '70% started businesses',
      impactAr: '70% بدأن أعمالاً تجارية',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Business training',
        'Financial literacy',
        'Networking events',
        'Childcare support',
        'Mentorship program'
      ],
      featuresAr: [
        'التدريب التجاري',
        'محو الأمية المالية',
        'فعاليات التواصل',
        'دعم رعاية الأطفال',
        'برنامج الإرشاد'
      ]
    }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const stats = [
    { label: 'Active Programs', labelAr: 'برامج نشطة', value: programs.filter(p => p.status === 'active').length },
    { label: 'Total Participants', labelAr: 'إجمالي المشاركين', value: programs.reduce((sum, p) => sum + p.participants, 0) },
    { label: 'Countries', labelAr: 'دولة', value: 8 },
    { label: 'Success Rate', labelAr: 'معدل النجاح', value: '92%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('programs-title', 'Our Programs', 'برامجنا')}
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t(
                'programs-subtitle',
                'Comprehensive initiatives designed to empower, educate, and connect Syrian communities worldwide.',
                'مبادرات شاملة مصممة لتمكين وتعليم وربط المجتمعات السورية في جميع أنحاء العالم.'
              )}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm text-emerald-200 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`stat-${index}`, stat.label, stat.labelAr)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('filter-programs', 'Filter Programs', 'تصفية البرامج')}
            </h2>
            <div className="flex items-center text-stone-600">
              <Filter className="h-5 w-5 mr-2" />
              <span>{filteredPrograms.length} {t('programs-found', 'programs found', 'برنامج موجود')}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  } ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {t(`category-${category.key}`, category.en, category.ar)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={t('program-title', program.title, program.titleAr)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : program.status === 'planned'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {t(`status-${program.status}`, program.status, program.status)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold text-stone-900 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('program-title', program.title, program.titleAr)}
                  </h3>

                  <p className={`text-stone-600 mb-4 line-clamp-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('program-description', program.description, program.descriptionAr)}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-stone-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t('program-location', program.location, program.locationAr)}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-stone-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t('program-duration', program.duration, program.durationAr)}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-stone-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{program.participants} {t('participants', 'participants', 'مشارك')}</span>
                    </div>

                    <div className="flex items-center text-sm text-emerald-600">
                      <Target className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t('program-impact', program.impact, program.impactAr)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('key-features', 'Key Features:', 'الميزات الرئيسية:')}
                    </h4>
                    <ul className="space-y-1">
                      {program.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className={`text-sm text-stone-600 flex items-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                          {currentLanguage.code === 'ar' ? program.featuresAr[featureIndex] : feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors group">
                    <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                      {t('learn-more', 'Learn More', 'اعرف المزيد')}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('join-programs-title', 'Ready to Get Involved?', 'مستعد للمشاركة؟')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t(
                'join-programs-description',
                'Join our programs and become part of a global community working towards positive change.',
                'انضم إلى برامجنا وكن جزءاً من مجتمع عالمي يعمل من أجل التغيير الإيجابي.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors">
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </button>
              <button className="px-8 py-4 bg-emerald-800 text-white font-semibold rounded-full hover:bg-emerald-900 transition-colors">
                {t('volunteer', 'Volunteer', 'تطوع')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;