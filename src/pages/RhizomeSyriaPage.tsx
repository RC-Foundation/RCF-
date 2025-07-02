import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Award, Calendar, Globe, Image, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RhizomeSyriaPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const board = [
    {
      name: 'Ritta Alhayek',
      nameAr: 'ريتا الحايك',
      role: 'Chair',
      roleAr: 'رئيسة',
      bio: 'Leading the board with extensive experience in community development and strategic planning. Ritta brings a wealth of knowledge in organizational leadership and cross-cultural collaboration.',
      bioAr: 'تقود مجلس الإدارة بخبرة واسعة في التنمية المجتمعية والتخطيط الاستراتيجي. تجلب ريتا ثروة من المعرفة في القيادة التنظيمية والتعاون عبر الثقافات.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Abdullah Sejerie',
      nameAr: 'عبد الله سجرية',
      role: 'Logistics',
      roleAr: 'اللوجستيات',
      bio: 'Overseeing operational logistics and ensuring smooth implementation of programs across all regions. Abdullah coordinates resources and manages the practical aspects of our initiatives.',
      bioAr: 'يشرف على اللوجستيات التشغيلية ويضمن التنفيذ السلس للبرامج في جميع المناطق. ينسق عبد الله الموارد ويدير الجوانب العملية لمبادراتنا.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kinda Ali',
      nameAr: 'كندة علي',
      role: 'Strategy',
      roleAr: 'الاستراتيجية',
      bio: 'Developing strategic frameworks and long-term planning for sustainable community impact. Kinda focuses on creating innovative approaches to community engagement and program development.',
      bioAr: 'تطوير الأطر الاستراتيجية والتخطيط طويل المدى للتأثير المجتمعي المستدام. تركز كندة على إنشاء مناهج مبتكرة للمشاركة المجتمعية وتطوير البرامج.',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Hassan Traboulsi',
      nameAr: 'حسان طرابلسي',
      role: 'Executive Director',
      roleAr: 'المدير التنفيذي',
      bio: 'Leading day-to-day operations and program implementation with a focus on community-driven solutions. Hassan brings extensive experience in grassroots organizing and social development.',
      bioAr: 'يقود العمليات اليومية وتنفيذ البرامج مع التركيز على الحلول المجتمعية. يجلب حسان خبرة واسعة في التنظيم الشعبي والتنمية الاجتماعية.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
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
              {t('rhizome-syria-title', 'Rhizome Syria', 'ريزوم سوريا')}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t(
                'rhizome-syria-subtitle',
                'The Syrian arm of the Rhizome Community Foundation, free from past regime affiliations and committed to anti-sectarian values.',
                'الذراع السوري لمؤسسة مجتمع الريزوم، متحرر من ارتباطات النظام السابق وملتزم بقيم مناهضة للطائفية.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-3xl font-bold text-emerald-800 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`} style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
                {t('our-mission', 'Our Mission', 'مهمتنا')}
              </h2>
              
              <div className={`prose prose-lg max-w-none text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                <p>
                  {t(
                    'mission-text-1',
                    'Rhizome Syria is the Syrian arm of the Rhizome Community Foundation. Free from past regime affiliations and committed to anti-sectarian values, it works to strengthen social cohesion through lived cultural exchange and community engagement as paths to rebuilding the country.',
                    'ريزوم سوريا هي الذراع السوري لمؤسسة مجتمع الريزوم. متحررة من ارتباطات النظام السابق وملتزمة بقيم مناهضة للطائفية، تعمل على تعزيز التماسك الاجتماعي من خلال التبادل الثقافي المعاش والمشاركة المجتمعية كمسارات لإعادة بناء البلاد.'
                  )}
                </p>
                
                <p>
                  {t(
                    'mission-text-2',
                    'Rhizome Syria operates a decentralized network of strategic local partnerships nationwide, maintaining independence and adaptability in its interactions with official bodies. It actively supports feminist movements in Syria\'s coastal region, incubating pioneering initiatives led by women.',
                    'تدير ريزوم سوريا شبكة لامركزية من الشراكات المحلية الاستراتيجية على الصعيد الوطني، مع الحفاظ على الاستقلالية والقدرة على التكيف في تفاعلاتها مع الهيئات الرسمية. وتدعم بنشاط الحركات النسوية في المنطقة الساحلية السورية، وتحتضن مبادرات رائدة تقودها النساء.'
                  )}
                </p>
                
                <p>
                  {t(
                    'mission-text-3',
                    'On the ground, Rhizome Syria manages a community support center in Latakia, providing economic and organizational empowerment training to women. It leads collaborative cultural projects in Aleppo and Latakia, supports local theater and visual arts, and engages in peace-building programs across the north and central regions, alongside fundraising campaigns on the coast.',
                    'على أرض الواقع، تدير ريزوم سوريا مركزًا للدعم المجتمعي في اللاذقية، وتقدم تدريبات التمكين الاقتصادي والتنظيمي للنساء. وتقود مشاريع ثقافية تعاونية في حلب واللاذقية، وتدعم المسرح المحلي والفنون البصرية، وتشارك في برامج بناء السلام في مناطق الشمال والوسط، إلى جانب حملات جمع التبرعات على الساحل.'
                  )}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/WhatsApp Image 2025-06-19 at 12.35.09 PM copy.jpeg" 
                alt="Rhizome Syria Activities" 
                className="w-full h-auto rounded-xl shadow-xl mb-8"
              />
              
              <div className="bg-emerald-50 rounded-xl p-6 shadow-md">
                <h3 className={`text-xl font-bold text-emerald-800 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('key-facts', 'Key Facts', 'حقائق رئيسية')}
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <span className={`text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(
                        'fact-1',
                        'Operates in multiple regions across Syria with a focus on coastal and northern areas',
                        'تعمل في مناطق متعددة عبر سوريا مع التركيز على المناطق الساحلية والشمالية'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <span className={`text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(
                        'fact-2',
                        'Supports over 500 women through economic empowerment programs',
                        'تدعم أكثر من 500 امرأة من خلال برامج التمكين الاقتصادي'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <span className={`text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(
                        'fact-3',
                        'Recognized for innovative peace-building methodologies',
                        'معترف بها لمنهجياتها المبتكرة في بناء السلام'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <span className={`text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(
                        'fact-4',
                        'Maintains strategic partnerships with international organizations',
                        'تحافظ على شراكات استراتيجية مع منظمات دولية'
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
              {t('our-initiatives', 'Our Initiatives', 'مبادراتنا')}
            </h2>
            <p className={`text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'initiatives-description',
                'Focused programs addressing key challenges and opportunities across Syria',
                'برامج مركزة تعالج التحديات والفرص الرئيسية في جميع أنحاء سوريا'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Latakia Community Support Hub',
                titleAr: 'مركز دعم مجتمع اللاذقية',
                description: 'Comprehensive resource center providing economic support, organizational empowerment, and strategic assistance for local civil society groups.',
                descriptionAr: 'مركز موارد شامل يقدم الدعم الاقتصادي والتمكين التنظيمي والمساعدة الاستراتيجية للمجموعات المجتمعية المحلية.',
                icon: Users
              },
              {
                title: 'Cultural Revitalization Program',
                titleAr: 'برنامج إحياء الثقافة',
                description: 'Artistic and cultural initiatives in Aleppo and Latakia designed to foster community recovery, preserve heritage, and promote social unity.',
                descriptionAr: 'مبادرات فنية وثقافية في حلب واللاذقية مصممة لتعزيز تعافي المجتمع والحفاظ على التراث وتعزيز الوحدة الاجتماعية.',
                icon: Palette
              },
              {
                title: 'Interregional Women\'s Summit',
                titleAr: 'قمة المرأة بين المناطق',
                description: 'Annual national gathering bringing together women leaders for strategic planning, best-practice exchange, and collaborative action planning.',
                descriptionAr: 'تجمع وطني سنوي يجمع القيادات النسائية للتخطيط الاستراتيجي وتبادل أفضل الممارسات والتخطيط للعمل التعاوني.',
                icon: Calendar
              },
              {
                title: 'Peacebuilding Sessions',
                titleAr: 'جلسات بناء السلام',
                description: 'Nationwide dialogue facilitation and peacebuilding workshops conducted in collaboration with local councils, with particular focus on northern regions and Aleppo.',
                descriptionAr: 'تيسير الحوار على الصعيد الوطني وورش عمل بناء السلام التي تجري بالتعاون مع المجالس المحلية، مع التركيز بشكل خاص على المناطق الشمالية وحلب.',
                icon: Target
              },
              {
                title: 'Hams Initiative',
                titleAr: 'مبادرة همس',
                description: 'A secure, anonymous reporting platform enabling safe sharing of critical information vital for maintaining civil peace throughout Syria.',
                descriptionAr: 'منصة إبلاغ آمنة ومجهولة تمكن من المشاركة الآمنة للمعلومات الحيوية للحفاظ على السلم المدني في جميع أنحاء سوريا.',
                icon: Globe
              },
              {
                title: 'Community Digital Photo Wall',
                titleAr: 'جدار الصور الرقمية المجتمعية',
                description: 'A collaborative digital platform targeting a 50,000 image stockpile, open to community members to contribute photos that capture local stories, culture, and community life across regions.',
                descriptionAr: 'منصة رقمية تعاونية تستهدف مخزونًا من 50,000 صورة، مفتوحة لأعضاء المجتمع للمساهمة بالصور التي تلتقط القصص المحلية والثقافة وحياة المجتمع عبر المناطق.',
                icon: Image
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <initiative.icon className="h-7 w-7 text-emerald-700" />
                </div>
                
                <h3 className={`text-xl font-bold text-emerald-800 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`initiative-${index}-title`, initiative.title, initiative.titleAr)}
                </h3>
                
                <p className={`text-gray-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`initiative-${index}-desc`, initiative.description, initiative.descriptionAr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold text-emerald-800 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`} style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
              {t('our-board', 'Our Board', 'مجلس إدارتنا')}
            </h2>
            <p className={`text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'board-description',
                'Meet the dedicated board members driving our mission forward in Syria',
                'تعرف على أعضاء مجلس الإدارة المتفانين الذين يدفعون مهمتنا إلى الأمام في سوريا'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover object-center"
                />
                
                <div className="p-6">
                  <h3 className={`text-lg font-bold text-emerald-800 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`board-member-${index}-name`, member.name, member.nameAr)}
                  </h3>
                  
                  <p className={`text-emerald-600 font-medium mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`board-member-${index}-role`, member.role, member.roleAr)}
                  </p>
                  
                  <p className={`text-gray-600 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`board-member-${index}-bio`, member.bio, member.bioAr)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-3xl font-bold mb-6">
              {t('get-involved-title', 'Get Involved with Rhizome Syria', 'شارك مع ريزوم سوريا')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t(
                'get-involved-description',
                'Join our network of change-makers and contribute to building a more resilient and connected Syria.',
                'انضم إلى شبكتنا من صناع التغيير وساهم في بناء سوريا أكثر مرونة وترابطًا.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors">
                {t('volunteer', 'Volunteer', 'تطوع')}
              </button>
              <button className="px-8 py-4 bg-emerald-900 text-white font-semibold rounded-full hover:bg-emerald-950 transition-colors">
                {t('contact-us', 'Contact Us', 'اتصل بنا')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RhizomeSyriaPage;