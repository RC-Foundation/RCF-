import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Project {
  id: string;
  lat: number;
  lng: number;
  name: string;
  nameAr: string;
  city: string;
  cityAr: string;
  description: string;
  descriptionAr: string;
  participants: number;
  startDate: string;
}

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, currentLanguage } = useLanguage();

  const projects: Project[] = [
    {
      id: '1',
      lat: 33.5138,
      lng: 36.2765,
      name: 'Digital Literacy Workshop',
      nameAr: 'ورشة محو الأمية الرقمية',
      city: 'Damascus',
      cityAr: 'دمشق',
      description: 'Empowering communities through digital skills and technology education.',
      descriptionAr: 'تمكين المجتمعات من خلال المهارات الرقمية والتعليم التقني.',
      participants: 85,
      startDate: '2024-01-15'
    },
    {
      id: '2',
      lat: 36.2021,
      lng: 37.1343,
      name: 'Community Garden Initiative',
      nameAr: 'مبادرة الحديقة المجتمعية',
      city: 'Aleppo',
      cityAr: 'حلب',
      description: 'Creating sustainable food systems and social spaces in urban areas.',
      descriptionAr: 'إنشاء أنظمة غذائية مستدامة ومساحات اجتماعية في المناطق الحضرية.',
      participants: 120,
      startDate: '2023-11-01'
    },
    {
      id: '3',
      lat: 34.7478,
      lng: 36.7259,
      name: 'Oral History Archive',
      nameAr: 'أرشيف التاريخ الشفوي',
      city: 'Homs',
      cityAr: 'حمص',
      description: 'Preserving community stories and cultural heritage through digital documentation.',
      descriptionAr: 'الحفاظ على قصص المجتمع والتراث الثقافي من خلال التوثيق الرقمي.',
      participants: 65,
      startDate: '2024-02-01'
    },
    {
      id: '4',
      lat: 35.5201,
      lng: 35.793,
      name: 'Youth Arts Program',
      nameAr: 'برنامج الفنون الشبابية',
      city: 'Latakia',
      cityAr: 'اللاذقية',
      description: 'Supporting young artists and creative expression in coastal communities.',
      descriptionAr: 'دعم الفنانين الشباب والتعبير الإبداعي في المجتمعات الساحلية.',
      participants: 45,
      startDate: '2024-03-01'
    }
  ];

  useEffect(() => {
    // Initialize Leaflet map
    if (typeof window !== 'undefined' && mapRef.current) {
      const L = (window as any).L;
      if (L) {
        const map = L.map(mapRef.current, {
          zoomControl: false,
          attributionControl: false
        }).setView([35.0, 38.5], 6);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(map);

        // Add zoom control to a specific position
        L.control.zoom({
          position: 'bottomright'
        }).addTo(map);

        // Custom marker icon
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #b91c1c; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
          iconSize: [15, 15],
          iconAnchor: [7, 7]
        });

        projects.forEach(project => {
          const marker = L.marker([project.lat, project.lng], { icon: customIcon })
            .addTo(map)
            .on('click', () => setSelectedProject(project));
        });

        // Add custom styles to the map
        const mapContainer = mapRef.current;
        if (mapContainer) {
          mapContainer.style.border = '2px solid #b91c1c';
          mapContainer.style.borderRadius = '12px';
          mapContainer.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        }

        return () => {
          map.remove();
        };
      }
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl font-bold text-center mb-8 text-emerald-800 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`} style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
            {t('map-title', 'Interactive Activities Map', 'خريطة الأنشطة التفاعلية')}
          </h2>
          <p className={`text-center text-gray-600 mb-10 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'map-description',
              'Explore ongoing projects and activities. Click a marker for more details.',
              'استكشف المشاريع والأنشطة الجارية. انقر على علامة للحصول على مزيد من التفاصيل.'
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              ref={mapRef}
              className="map-container"
              style={{ height: '400px', width: '400px', margin: '0 auto' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {selectedProject ? (
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <h3 className={`text-xl font-semibold mb-4 text-emerald-700 ${
                  currentLanguage.code === 'ar' ? 'font-arabic' : ''
                }`}>
                  {t('project-name', selectedProject.name, selectedProject.nameAr)}
                </h3>
                <p className={`text-gray-600 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('project-description', selectedProject.description, selectedProject.descriptionAr)}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                    <span className={`text-sm font-medium ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('project-city', selectedProject.city, selectedProject.cityAr)}
                    </span>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <Users className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                    <span className="text-sm font-medium">
                      {selectedProject.participants} {t('participants', 'participants', 'مشارك')}
                    </span>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                    <span className="text-sm font-medium">
                      {new Date(selectedProject.startDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 text-center border border-emerald-100 shadow-lg">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('select-project', 'Select a Project', 'اختر مشروعاً')}
                </h3>
                <p className={`text-gray-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(
                    'click-marker',
                    'Click on a marker to view project details',
                    'انقر على علامة لعرض تفاصيل المشروع'
                  )}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;