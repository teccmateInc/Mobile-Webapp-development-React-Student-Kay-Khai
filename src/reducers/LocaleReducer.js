import { SET_LOCALE } from '../actions/types';
import { LOCALES } from '../config/i18n/locales';

const getLanguage = () => {
    let language =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;

    if (language) {
        language = language.toLowerCase();
        if ([LOCALES.ENGLISH, LOCALES.CHINESE].includes(language)) {
            return language;
        }
    }

    return LOCALES.ENGLISH;
};


const reducer = (state = getLanguage(), action) => {
    if (action.type === SET_LOCALE) {
        return action.payload;
    }

    return state;
}

export default reducer;