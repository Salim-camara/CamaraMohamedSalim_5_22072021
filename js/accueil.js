// *************************Animation navbar

const navigation = document.querySelector('.top_bar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 600) {
        navigation.classList.add('top_bar_bg');
    }else {
        navigation.classList.remove('top_bar_bg');
    }
});
