import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// Simple placeholder DataSourcesMap component
const DataSourcesMap = () => {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage.code === 'ar';

  return (
    <div className="data-sources-map bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 relative">
      <h2
        className={`text-2xl font-bold mb-2 text-purple-800 ${isArabic ? 'text-right' : 'text-left'}`}
      >
        {isArabic ? 'خريطة مصادر البيانات' : 'Data Sources Map'}
      </h2>
      <p className={`text-slate-600 ${isArabic ? 'text-right' : 'text-left'}`}>
        {isArabic
          ? 'خريطة تفاعلية لمصادر البيانات قيد التطوير. سيتم تفعيلها قريبًا.'
          : 'Interactive map of data sources is under development. It will be available soon.'}
      </p>
    </div>
  );
};

export default DataSourcesMap;
