window.addEventListener('load', () => {
    const article = document.querySelectorAll('article');       //8个大盒子article
    const lis = document.querySelectorAll('.m_food_top ul li');
    const nav_item = document.querySelectorAll('.m_join .nav_item li');
    // console.log(nav_item);
    // console.log(article);
    // console.log(lis);
    for (let i = 0; i < lis.length; i++) {
        // console.log(i);

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


    const cates1 = document.querySelectorAll('.cate1');
    const cates2 = document.querySelectorAll('.cate2');
    const cates3 = document.querySelectorAll('.cate3');
    const cates4 = document.querySelectorAll('.cate4');
    const cates5 = document.querySelectorAll('.cate5');
    const cates6 = document.querySelectorAll('.cate6');
    const cates7 = document.querySelectorAll('.cate7');
    const cates8 = document.querySelectorAll('.cate8');
    const pag1 = document.querySelectorAll('.pageJump>.fenye>.pag1');
    const pag2 = document.querySelectorAll('.pageJump>.fenye>.pag2');
    const pag3 = document.querySelectorAll('.pageJump>.fenye>.pag3');
    const pag4 = document.querySelectorAll('.pageJump>.fenye>.pag4');
    const pag5 = document.querySelectorAll('.pageJump>.fenye>.pag5');
    const pag6 = document.querySelectorAll('.pageJump>.fenye>.pag6');
    const pag7 = document.querySelectorAll('.pageJump>.fenye>.pag7');
    const pag8 = document.querySelectorAll('.pageJump>.fenye>.pag8');
    const pu = document.querySelectorAll('.page-up');
    const pd = document.querySelectorAll('.page-down');
    const first = document.querySelectorAll('.first');
    const last = document.querySelectorAll('.last');
    function fn(cate, pag, pu, pd) {
        let num = 0;
        for (let i = 0; i < pag.length; i++) {
            // console.log(i);
            pag[i].addEventListener('click', () => {
                for (let i = 0; i < pag.length; i++) {
                    pag[i].className = '';
                    cate[i].className = 'cate';
                }
                pag[i].className = 'active';
                cate[i].className = 'current';
                num = i;        //点击事件时获取点击的索引号i给num
            });

        }

        for (let i = 0; i < lis.length; i++) {
            // 上一页
            pu[i].addEventListener('click', () => {
                for (let i = 0; i < pag.length; i++) {
                    pag[i].className = '';
                    cate[i].className = 'cate';
                }
                num--;
                num = num < 0 ? 0 : num;
                pag[num].className = 'active';
                cate[num].className = 'current';
            });

            //下一页
            pd[i].addEventListener('click', () => {
                for (let i = 0; i < pag.length; i++) {
                    pag[i].className = '';
                    cate[i].className = 'cate';
                }
                // console.log(pag.length);
                num++;
                num = num > pag.length - 1 ? pag.length - 1 : num;
                // console.log(num);
                pag[num].className = 'active';
                cate[num].className = 'current';
            });
            // 首页
            first[i].addEventListener('click', () => {
                for (let i = 0; i < pag.length; i++) {
                    pag[i].className = '';
                    cate[i].className = 'cate';
                }
                pag[0].className = 'active';
                cate[0].className = 'current';
                num = 0;
            })

            // 尾页
            last[i].addEventListener('click', () => {
                for (let i = 0; i < pag.length; i++) {
                    pag[i].className = '';
                    cate[i].className = 'cate';
                }
                pag[pag.length - 1].className = 'active';
                cate[pag.length - 1].className = 'current';
                num = pag.length - 1;
            })

        }

    }
    fn(cates1, pag1, pu, pd)
    fn(cates2, pag2, pu, pd)
    fn(cates3, pag3, pu, pd)
    fn(cates4, pag4, pu, pd)
    fn(cates5, pag5, pu, pd)
    fn(cates6, pag6, pu, pd)
    fn(cates7, pag7, pu, pd)
    fn(cates8, pag8, pu, pd)



})