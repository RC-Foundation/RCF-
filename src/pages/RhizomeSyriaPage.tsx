import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Award, Calendar, Globe, Image, Palette, Heart, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RhizomeSyriaPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const board = [
    {
      name: 'Ritta Alhayek',
      nameAr: 'ريتا الحايك',
      role: 'Chair',
      roleAr: 'رئيسة',
      bio: 'Oversees governance and direction with experience in strategic planning, community systems, and feminist organizing.',
      bioAr: 'تشرف على الحوكمة والتوجه بخبرة في التخطيط الاستراتيجي والأنظمة المجتمعية والتنظيم النسوي.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Abdullah Sejerie',
      nameAr: 'عبد الله سجرية',
      role: 'Logistics & Operations',
      roleAr: 'اللوجستيات والعمليات',
      bio: 'Leads logistical coordination and field-level implementation, ensuring reliable support systems across all regions.',
      bioAr: 'يقود التنسيق اللوجستي والتنفيذ على مستوى الميدان، مما يضمن أنظمة دعم موثوقة في جميع المناطق.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kinda Ali',
      nameAr: 'كندة علي',
      role: 'Strategy & Outreach',
      roleAr: 'الاستراتيجية والتوعية',
      bio: 'Guides long-term planning and stakeholder engagement, focusing on interregional networks and strategic alliances.',
      bioAr: 'توجه التخطيط طويل المدى ومشاركة أصحاب المصلحة، مع التركيز على الشبكات بين المناطق والتحالفات الاستراتيجية.',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Silva',
      nameAr: 'سيلفا',
      role: 'Programs Lead',
      roleAr: 'قائدة البرامج',
      bio: 'Manages Rhizome Syria\'s programmatic portfolio, with a focus on feminist frameworks, coastal civic organizing, and training modules. Silva brings experience in intersectional community work and participatory program design.',
      bioAr: 'تدير محفظة برامج ريزوم سوريا، مع التركيز على الأطر النسوية والتنظيم المدني الساحلي ووحدات التدريب. تجلب سيلفا خبرة في العمل المجتمعي التقاطعي وتصميم البرامج التشاركية.',
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
                'The Syrian branch of the Rhizome Community Foundation – nonpartisan, community-rooted, and anti-sectarian.',
                'الفرع السوري لمؤسسة مجتمع الريزوم - غير حزبي، متجذر في المجتمع، ومناهض للطائفية.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                    'Rhizome Syria is the Syrian partner in a joint venture agreement with Rhizome Canada, together forming the Rhizome Community Foundation. Both branches operate with full legal independence while remaining strategically connected through shared governance principles, coordinated programming, and mutual accountability. The partnership is grounded in a decentralized, feminist, and anti-authoritarian ethos.',
                    'ريزوم سوريا هي الشريك السوري في اتفاقية مشروع مشترك مع ريزوم كندا، وتشكلان معاً مؤسسة مجتمع الريزوم. يعمل كلا الفرعين باستقلالية قانونية كاملة مع البقاء مترابطين استراتيجياً من خلال مبادئ الحوكمة المشتركة والبرمجة المنسقة والمساءلة المتبادلة. تقوم الشراكة على أساس لامركزي ونسوي ومناهض للسلطوية.'
                  )}
                </p>
                
                <p>
                  {t(
                    'mission-text-2',
                    'Rhizome Syria works to strengthen social cohesion through cultural, feminist, and community initiatives. It is unaffiliated with any previous regime institutions and is explicitly anti-sectarian. The organization supports civil society networks, particularly in coastal, northern, and central Syria, and is committed to peacebuilding, cultural revitalization, and the empowerment of women and marginalized communities.',
                    'تعمل ريزوم سوريا على تعزيز التماسك الاجتماعي من خلال المبادرات الثقافية والنسوية والمجتمعية. وهي غير منتسبة لأي مؤسسات نظام سابقة وهي صراحة مناهضة للطائفية. تدعم المنظمة شبكات المجتمع المدني، خاصة في سوريا الساحلية والشمالية والوسطى، وهي ملتزمة ببناء السلام وإحياء الثقافة وتمكين النساء والمجتمعات المهمشة.'
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
                  {t('our-structure', 'Our Structure', 'هيكلنا')}
                </h3>
                
                <p className={`text-gray-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(
                    'structure-text',
                    'Rhizome Syria and Rhizome Canada operate as two legally distinct entities under a joint venture cooperation agreement, facilitating coordinated strategic planning, knowledge exchange, and dual accountability. The agreement enables secure funding flow, joint programming, and co-development of community-driven initiatives across geographies. Together, they form a transnational rhizomatic network committed to rebuilding Syria from the grassroots.',
                    'تعمل ريزوم سوريا وريزوم كندا ككيانين قانونيين منفصلين تحت اتفاقية تعاون مشروع مشترك، مما يسهل التخطيط الاستراتيجي المنسق وتبادل المعرفة والمساءلة المزدوجة. تمكن الاتفاقية من تدفق التمويل الآمن والبرمجة المشتركة والتطوير المشترك للمبادرات المجتمعية عبر الجغرافيات. معاً، يشكلان شبكة ريزومية عابرة للحدود ملتزمة بإعادة بناء سوريا من القاعدة الشعبية.'
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Activities */}
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
              {t('current-activities', 'Current Activities', 'الأنشطة الحالية')}
            </h2>
            <p className={`text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'activities-description',
                'Rhizome Syria operates a decentralized network of local partnerships while maintaining full adaptability in its engagement with formal and informal structures.',
                'تدير ريزوم سوريا شبكة لامركزية من الشراكات المحلية مع الحفاظ على قدرة تكيف كاملة في تفاعلها مع الهياكل الرسمية وغير الرسمية.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Feminist-led Community Support Center in Latakia',
                titleAr: 'مركز الدعم المجتمعي بقيادة نسوية في اللاذقية',
                description: 'Providing economic and organizational empowerment to women.',
                descriptionAr: 'توفير التمكين الاقتصادي والتنظيمي للنساء.',
                icon: Heart
              },
              {
                title: 'Collaborative Cultural Projects',
                titleAr: 'المشاريع الثقافية التعاونية',
                description: 'Theater, visual arts, and oral history initiatives in Aleppo and Latakia.',
                descriptionAr: 'مبادرات المسرح والفنون البصرية والتاريخ الشفوي في حلب واللاذقية.',
                icon: Palette
              },
              {
                title: 'Peacebuilding Dialogues',
                titleAr: 'حوارات بناء السلام',
                description: 'Participatory workshops across northern and central regions.',
                descriptionAr: 'ورش عمل تشاركية في المناطق الشمالية والوسطى.',
                icon: Shield
              },
              {
                title: 'Fundraising Campaigns',
                titleAr: 'حملات جمع التبرعات',
                description: 'Community platforms and fundraising initiatives on the coast.',
                descriptionAr: 'منصات مجتمعية ومبادرات جمع التبرعات على الساحل.',
                icon: Target
              },
              {
                title: 'Digital Storytelling',
                titleAr: 'السرد الرقمي',
                description: 'Memory preservation through participatory digital tools.',
                descriptionAr: 'الحفاظ على الذاكرة من خلال الأدوات الرقمية التشاركية.',
                icon: Image
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <activity.icon className="h-7 w-7 text-emerald-700" />
                </div>
                
                <h3 className={`text-lg font-bold text-emerald-800 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`activity-${index}-title`, activity.title, activity.titleAr)}
                </h3>
                
                <p className={`text-gray-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`activity-${index}-desc`, activity.description, activity.descriptionAr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
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
              {t('key-initiatives', 'Key Initiatives', 'المبادرات الرئيسية')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Latakia Community Support Hub',
                titleAr: 'مركز دعم مجتمع اللاذقية',
                description: 'A core site offering economic resilience programs, organizational mentoring, and a base for civil society incubation.',
                descriptionAr: 'موقع أساسي يقدم برامج المرونة الاقتصادية والإرشاد التنظيمي وقاعدة لاحتضان المجتمع المدني.',
                icon: Users
              },
              {
                title: 'Cultural Revitalization Program',
                titleAr: 'برنامج إحياء الثقافة',
                description: 'Arts-based programs in Aleppo and Latakia supporting local artists, preserving collective memory, and creating spaces for community recovery.',
                descriptionAr: 'برامج قائمة على الفنون في حلب واللاذقية تدعم الفنانين المحليين وتحافظ على الذاكرة الجماعية وتخلق مساحات لتعافي المجتمع.',
                icon: Palette
              },
              {
                title: 'Interregional Women\'s Summit',
                titleAr: 'قمة المرأة بين المناطق',
                description: 'A national forum gathering Syrian women leaders to co-develop policy, training modules, and interregional alliances.',
                descriptionAr: 'منتدى وطني يجمع القيادات النسائية السورية لتطوير السياسات ووحدات التدريب والتحالفات بين المناطق.',
                icon: Calendar
              },
              {
                title: 'Peacebuilding Sessions',
                titleAr: 'جلسات بناء السلام',
                description: 'Localized facilitation of dialogue in conflict-affected areas with grassroots councils and youth networks.',
                descriptionAr: 'تيسير محلي للحوار في المناطق المتأثرة بالنزاع مع المجالس الشعبية وشبكات الشباب.',
                icon: Target
              },
              {
                title: 'Hams Initiative',
                titleAr: 'مبادرة همس',
                description: 'A secure, anonymous, community-run platform for sharing sensitive information essential for maintaining civil peace.',
                descriptionAr: 'منصة آمنة ومجهولة ومدارة من المجتمع لمشاركة المعلومات الحساسة الضرورية للحفاظ على السلم المدني.',
                icon: Globe
              },
              {
                title: 'Community Digital Photo Wall',
                titleAr: 'جدار الصور الرقمية المجتمعية',
                description: 'An open-source image archive documenting everyday life and community stories through a decentralized media repository.',
                descriptionAr: 'أرشيف صور مفتوح المصدر يوثق الحياة اليومية وقصص المجتمع من خلال مستودع إعلامي لامركزي.',
                icon: Image
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-600"
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
              {t('our-board-syria', 'Our Board (Syria)', 'مجلس إدارتنا (سوريا)')}
            </h2>
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
              {t('get-involved-title', 'Ready to join or partner?', 'مستعد للانضمام أو الشراكة؟')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t(
                'get-involved-description',
                'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.',
                'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors">
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </button>
              <button className="px-8 py-4 bg-emerald-900 text-white font-semibold rounded-full hover:bg-emerald-950 transition-colors">
                {t('volunteer', 'Volunteer', 'تطوع')}
              </button>
            </div>
            <div className="mt-6 text-emerald-200">
              <p>
                {t('contact-info', 'Contact us at', 'اتصل بنا على')} info@rhizomesyria.org
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RhizomeSyriaPage;