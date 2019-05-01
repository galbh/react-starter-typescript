import urlTitleDictionary from './url-title-dictionary.json';
import { MOBILE_MAX_WIDTH } from '../../constants';

const sharedState = {
  loading: false,
  supportedLanguages: { en: 'en-US', he: 'He' },
  language: localStorage.i18nextLng || 'en-US',
  rtlLanguages: ['He'],
  isRtl() { return this.rtlLanguages.indexOf(this.language) > -1; },
  isMobile: window.innerWidth <= MOBILE_MAX_WIDTH,
  getTitle: key => sharedState.urlTitleDictionary[key],
  urlTitleDictionary,
  services: {}
};

export default sharedState;
