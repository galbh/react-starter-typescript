import { MOBILE_MAX_WIDTH } from '../../constants';
import { StringMap } from '../../models';
import i18n from '../../../i18n';

export enum SupportedLanguages {
  en = 'en-US',
  he = 'He'
}

export enum Directions {
  RTL = 'rtl',
  LTR = 'ltr'
}

export const RtlLanguages = [SupportedLanguages.he];

export interface GeneralState {
  loading: boolean;
  language: string;
  languages: StringMap;
  isMobile: boolean;
}

const supportedLanguages: StringMap = {};
for (let l in SupportedLanguages) {
  const value = SupportedLanguages[l];
  supportedLanguages[value] = value;
}

const generalInitialState: GeneralState = {
  loading: false,
  language: i18n.language,
  languages: supportedLanguages,
  isMobile: window.innerWidth <= MOBILE_MAX_WIDTH
};

export default generalInitialState;
