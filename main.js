
if (window.matchMedia("(max-width: 412px)").matches) {

    const footerMenu = document.querySelector('#footer-menu')
    const footerMenuItems = footerMenu.querySelectorAll('.footer__menu-item')
    const menuCases = footerMenuItems[1];
    const menuThanks = footerMenuItems[3];
    const thanksLink = menuThanks.querySelector('a')
    
    thanksLink.innerHTML = 'Благодарность клиентов';
    
    const tmp = menuCases.innerHTML;
    
    menuCases.innerHTML = menuThanks.innerHTML;
    
    menuThanks.innerHTML = tmp;
  }
