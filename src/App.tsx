import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { PhotoProvider } from './contexts/PhotoContext';
import { UserProvider } from './contexts/UserContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/common/LoadingScreen';
import CustomCursor from './components/common/CustomCursor';
import ParticleSystem from './components/common/ParticleSystem';
import './styles/rtl-fixes.css'; // Import RTL-specific styles
import './styles/unified-theme.css'; // Import unified visual identity
import './styles/recovery-dashboard.css'; // Import Recovery Dashboard styles

// Lazy load larger page components
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const RhizomeSyriaWrapper = lazy(
  () => import('./components/common/RhizomeSyriaWrapper')
);
const CommunityWallAndCalendarPage = lazy(
  () => import('./pages/CommunityWallAndCalendarPage')
);
const KnowledgeHubPage = lazy(() => import('./pages/KnowledgeHubPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminApprovalPage = lazy(() => import('./pages/AdminApprovalPage'));
const RhizomeSyriaSubpage = lazy(() => import('./pages/RhizomeSyriaSubpage'));
const RhizomeCanadaSubpage = lazy(() => import('./pages/RhizomeCanadaSubpage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));
const RecoveryDashboardPage = lazy(
  () => import('./pages/recovery-dashboard/RecoveryDashboardPage')
);

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-emerald-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-primary-green border-opacity-50 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading page...</p>
    </div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <PhotoProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50">
              <LoadingScreen />
              <CustomCursor />
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/about"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <AboutPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/programs"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <ProgramsPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/rhizome-syria"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <RhizomeSyriaWrapper />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/community-wall"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <CommunityWallAndCalendarPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/knowledge-hub"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <KnowledgeHubPage />
                      </Suspense>
                    }
                  />
                  {/* Calendar route redirects to community wall */}
                  <Route
                    path="/calendar"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <CommunityWallAndCalendarPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/join"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <JoinPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <ContactPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <AdminApprovalPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/rhizome-syria-subpage"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <RhizomeSyriaSubpage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/rhizome-canada-subpage"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <RhizomeCanadaSubpage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/recovery-dashboard"
                    element={
                      <Suspense fallback={<PageLoader />}>
                        <RecoveryDashboardPage />
                      </Suspense>
                    }
                  />
                </Routes>
              </main>
              <Footer />
              <ParticleSystem />
            </div>
          </Router>
        </PhotoProvider>
      </UserProvider>
    </LanguageProvider>
  );
}
export default App;
