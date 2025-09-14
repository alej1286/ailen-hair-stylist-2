import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

const GoogleAnalyticsWrapper = ({ children }) => {
  useGoogleAnalytics();
  return children;
};

export default GoogleAnalyticsWrapper;