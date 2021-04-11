import createPopup from './popup';
import cookieStorage from './cookieStore';
import vendors from './vendors';
import consent from './consent';
import blurBg from './blurBg';

window.addEventListener('load', () => {
    const isConsent: string = cookieStorage.getItem('consent');

    if (!isConsent || isConsent === '{"confirm":false}') {
        blurBg();
        createPopup();
        vendors();
        consent();
    }
});
