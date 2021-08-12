window.onload = () => {
    const transition_item = document.querySelector('.transition-1');
    const transition_item_2 = document.querySelector('.transition-2');
    const anchors = document.querySelectorAll('.slide');

    setTimeout(() => {
        transition_item.classList.remove('is-active');
        transition_item_2.classList.remove('is-active-2');
    }, 300);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', a => {
            a.preventDefault();
            let target = a.target.href;

            transition_item.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 300);
        })
    }
};

