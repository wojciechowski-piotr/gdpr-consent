const blurBg = () => {
    const div: HTMLElement = document.createElement('div');
    document.body.prepend(div);
    div.classList.add('blur-bg');
};

export default blurBg;
