import i18n from "../../../i18n";

export const LOADING_START = 'LOADING_START';
export const LOADING_DONE = 'LOADING_DONE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ON_SCREEN_RESIZE = 'ON_SCREEN_RESIZE';

export function StartLoaderAction() {
  return {
    type: LOADING_START
  };
}

export function StopLoaderAction() {
  return {
    type: LOADING_DONE
  };
}

export function ChangeLanguageAction(language) {
  i18n.changeLanguage(language);
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
}

export function OnScreenResize() {
  return {
    type: ON_SCREEN_RESIZE
  };
}
