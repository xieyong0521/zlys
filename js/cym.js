window.addEventListener('load', () => {
    const article = document.querySelectorAll('article');
    const lis = document.querySelectorAll('.m_food_top ul li');
    const nav_item = document.querySelectorAll('.m_join .nav_item li');
    console.log(nav_item);
    console.log(article);

    for (let i = 0; i < lis.length; i++) {
        console.log(i);
        lis[i].setAttribute('index', i);     //给li添加自定义类名index
        lis[i].addEventListener('click', () => {
            for (let i = 0; i < article.length; i++) {
                article[i].className = '';
            }
            article[i].className = 'current';
        });
        nav_item[i].addEventListener('click', () => {
            lis[i].click();
        });
    };
});



