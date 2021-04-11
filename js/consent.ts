import cookieStorage from './cookieStore';

const consent = () => {
    const acceptBtn: HTMLElement = document.querySelector('.buttons__btn--accept');
    const rejectBtn: HTMLElement = document.querySelector('.buttons__btn--reject');
    const popup: HTMLElement = document.querySelector('.popup');
    const blurBg: HTMLElement = document.querySelector('.blur-bg');

    const onPopupClose = (): void => {
        popup.classList.toggle('hide');
        document.body.classList.remove('noscroll');
        blurBg.style.display = 'none';
    };

    acceptBtn.addEventListener('click', () => {
        const vendors: NodeListOf<HTMLElement> = document.querySelectorAll('input[type="checkbox"]:checked');
        let vendorList: Array<object> = [];
        [...vendors].map((vendor) => {
            const vendorName: string = vendor.parentElement.previousElementSibling.textContent;
            const vendorId: string = vendor.parentElement.parentElement.dataset.vendorId;
            vendorList.push({ id: vendorId, name: vendorName });
        });
        cookieStorage.setItem('consent', { confirm: true, vendors: vendorList });
        onPopupClose();
    });

    rejectBtn.addEventListener('click', () => {
        cookieStorage.setItem('consent', { confirm: false });
        onPopupClose();
    });
};

export default consent;
