import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Heart, Handshake, MapPin, Calendar, Award, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ImpactStats: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const AnimatedCounter: React.FC<{ value: number; inView: boolean }> = ({ value, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [inView, value]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
            {t('impact-title', 'Our Impact', 'تأثيرنا')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-stone-600 mb-8">
              {t(
                'impact-narrative',
                'Our work transcends borders and builds bridges between communities separated by geography but united by shared heritage and hope. Through grassroots organizing and cultural preservation, we create spaces where Syrian voices can flourish, where traditional knowledge meets innovative solutions, and where individual stories weave together into a powerful collective narrative of resilience.',
                'يتجاوز عملنا الحدود ويبني الجسور بين المجتمعات المنفصلة جغرافياً ولكن المتحدة بالتراث المشترك والأمل. من خلال التنظيم الشعبي والحفاظ على الثقافة، ننشئ مساحات حيث يمكن للأصوات السورية أن تزدهر، حيث تلتقي المعرفة التقليدية بالحلول المبتكرة، وحيث تنسج القصص الفردية معاً في سرد جماعي قوي للمرونة.'
              )}
            </p>
            <p className="text-lg text-stone-600">
              {t(
                'impact-narrative-2',
                'Every program we launch, every partnership we forge, and every story we preserve contributes to a growing ecosystem of support that strengthens our communities from within. We measure our success not just in numbers, but in the renewed sense of belonging, the preserved cultural practices, the new skills acquired, and the lasting connections formed across continents.',
                'كل برنامج نطلقه، وكل شراكة نقيمها، وكل قصة نحافظ عليها تساهم في نظام بيئي متنامٍ من الدعم يقوي مجتمعاتنا من الداخل. نقيس نجاحنا ليس فقط بالأرقام، ولكن بالشعور المتجدد بالانتماء، والممارسات الثقافية المحفوظة، والمهارات الجديدة المكتسبة، والروابط الدائمة المتكونة عبر القارات.'
              )}
            </p>
          </div>
        </motion.div>

        {/* ONLY THE GREEN BOX WITH ALL STATS INSIDE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('growing-network', 'Growing Network', 'شبكة متنامية')}
            </h3>
            <p className={`text-emerald-100 mb-8 max-w-3xl mx-auto text-lg ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'network-description',
                'Every day, our community grows stronger as more individuals join our mission to build bridges and create positive change.',
                'كل يوم، يصبح مجتمعنا أقوى حيث ينضم المزيد من الأفراد إلى مهمتنا لبناء الجسور وخلق التغيير الإيجابي.'
              )}
            </p>
          </div>

          {/* Main Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter value={1500} inView={inView} />+
              </div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('lives-impacted', 'Lives Impacted', 'حياة متأثرة')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter value={15} inView={inView} />
              </div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('countries', 'Countries', 'دولة')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter value={50} inView={inView} />+
              </div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('active-projects', 'Active Projects', 'مشروع نشط')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Handshake className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter value={25} inView={inView} />
              </div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('partnerships', 'Partnerships', 'شراكة')}
              </div>
            </div>
          </div>

          {/* Additional Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('satisfaction-rate', 'Satisfaction Rate', 'معدل الرضا')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('community-support', 'Community Support', 'دعم المجتمع')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('transparency', 'Transparency', 'الشفافية')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">85%</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('job-placement', 'Job Placement', 'معدل التوظيف')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">1,200+</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('stories-documented', 'Stories Documented', 'قصة موثقة')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('program-completion', 'Program Completion', 'إكمال البرنامج')}
              </div>
            </div>
          </div>

          {/* Additional Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2" />
              <div className="text-xl font-bold mb-1">8</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('cities-served', 'Cities Served', 'مدن مخدومة')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Calendar className="h-6 w-6 mx-auto mb-2" />
              <div className="text-xl font-bold mb-1">120+</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('events-hosted', 'Events Hosted', 'فعالية استضافت')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2" />
              <div className="text-xl font-bold mb-1">12</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('awards-received', 'Awards Received', 'جائزة مستلمة')}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Target className="h-6 w-6 mx-auto mb-2" />
              <div className="text-xl font-bold mb-1">500+</div>
              <div className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('volunteers', 'Volunteers', 'متطوع')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;