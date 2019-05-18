window.onscroll = () => {
    const nav = document.querySelector('#navigation');
    if(this.scrollY <= 10){
        nav.className = '';
    } else {
        nav.className = 'scroll';
    }

    console.log(nav.className);
};
