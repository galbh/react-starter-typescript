import i18n from '../../../i18n';

export enum GeneralActionTypes {
  LOADING_START = '@@general/LOADING_START',
  LOADING_DONE = '@@general/LOADING_DONE',
  CHANGE_LANGUAGE = '@@general/CHANGE_LANGUAGE',
  ON_SCREEN_RESIZE = '@@general/ON_SCREEN_RESIZE'
}

export const StartLoaderAction = () => {
  return {
    type: GeneralActionTypes.LOADING_START
  };
};

export const StopLoaderAction = () => {
  return {
    type: GeneralActionTypes.LOADING_DONE
  };
};

export const ChangeLanguageAction = (language: string) => {
  i18n.changeLanguage(language);
  return {
    type: GeneralActionTypes.CHANGE_LANGUAGE,
    payload: language
  };
};

export function OnScreenResize() {
  return {
    type: GeneralActionTypes.ON_SCREEN_RESIZE
  };
}
