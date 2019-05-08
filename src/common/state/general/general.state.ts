import { MOBILE_MAX_WIDTH } from '../../constants';
import { StringMap } from '../../models';

export enum SupportedLanguages {
  en = 'en-US',
  he = 'He'
}

export interface GeneralState {
  loading: boolean;
  language: string;
  languages: StringMap;
  isMobile: boolean;
}

const supportedLanguages: StringMap = {};
for (let l in SupportedLanguages) {
  supportedLanguages[l] = SupportedLanguages[l];
}

const generalInitialState: GeneralState = {
  loading: false,
  language: SupportedLanguages.en,
  languages: supportedLanguages,
  isMobile: window.innerWidth <= MOBILE_MAX_WIDTH
};

export default generalInitialState;
