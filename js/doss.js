window.addEventListener('load', () => {
    const article = document.querySelectorAll('article');
    const sub_nav = document.querySelectorAll('.sub_nav a');
    const nav_item = document.querySelectorAll('.join .nav_item li');
    console.log(nav_item);
    for(let i = 0; i < article.length; i++) {
            sub_nav[i].addEventListener('click', () => {
                for(let i = 0; i < article.length; i++) {
                    sub_nav[i].className = '';
                    article[i].className = '';
                }
                sub_nav[i].className = 'current';
                article[i].className = 'current';
            });
            nav_item[i].addEventListener('click', () => {
                sub_nav[i].click();
            });
    }
});