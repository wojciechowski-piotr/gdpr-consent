const createPopup = () => {
    const popupDiv: HTMLElement = document.createElement('div');
    document.body.prepend(popupDiv);
    popupDiv.classList.add('popup');
    popupDiv.innerHTML = `
        <h2 class="title">GDPR consent</h2>
        <p class="short-info">
            Brand would like permission to share your personal data with our ad partners to allow them to show ads tailored to your interests
        </p>
        <div class="vendors">
        </div>
        <div class="buttons">
            <button class="buttons__btn--accept">Accept</button>
            <button class="buttons__btn--reject">Reject</button>
        </div>
    `;
    document.body.classList.add('noscroll');

    return popupDiv;
};

export default createPopup;
