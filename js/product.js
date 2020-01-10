window.addEventListener('load', () => {
    // 禁用商品界面选定文字
    const pro_hd = document.querySelector('.pro_hd');
    pro_hd.addEventListener('selectstart', e => {
        e.preventDefault();
    });
    const pic = document.querySelector('.pro_hd .pic');
    const mask = document.querySelector('.pro_hd .mask');
    const big = document.querySelector('.big');
    const article = document.querySelectorAll('article');
    const title = document.querySelectorAll('.title li');
    const num_ipt = document.querySelector('.sum');
    const plus = document.querySelector('.plus');
    const sub = document.querySelector('.sub');
    const amount = document.querySelector('.amount');
    const price = document.querySelector('.price');
    function checkout(item, nav) {
        for (let i = 0; i < item.length; i++) {
            nav[i].addEventListener('click', () => {
                for (let i = 0; i < item.length; i++) {
                    item[i].style = 'display:none';
                }
                item[i].style = 'display:block';
            });
        }
    }

    function zoom(pic, mask, big) {
        const bImg = big.querySelector('img');
        pic.addEventListener('mouseover', () => {
            mask.style.display = 'block';
            big.style.display = 'block'
        });
        pic.addEventListener('mousemove', e => {
            let mX = e.pageX;
            let mY = e.pageY;

            let bhw = (mask.offsetHeight / 2);
            let bX = mX - pic.offsetLeft - bhw;
            let bY = mY - pic.offsetTop - bhw;
            let maxX = pic.offsetWidth - mask.offsetWidth;
            let maxY = pic.offsetHeight - mask.offsetHeight;
            if (bX <= 0) {
                bX = 0;
                bY = bY <= 0 ? 0 : bY;
                bY = bY >= maxY ? maxY : bY;
            } else if (bX >= maxX) {
                bX = maxX;
                bY = bY <= 0 ? 0 : bY;
                bY = bY >= maxY ? maxY : bY;
            } else if (bY <= 0) {
                bY = 0;
            } else if (bY >= maxY) {
                bY = maxY;
            }
            mask.style.left = bX + 'px';
            mask.style.top = bY + 'px';
            bImg.style.left = -bX * 2 + 'px';
            bImg.style.top = -bY * 2 + 'px';
        });
        pic.addEventListener('mouseout', () => {
            mask.style.display = 'none';
            big.style.display = 'none'
        });
    }
    function sum(ipt, plus, sub, amount, price) {
        const cost = price.innerText.slice(1);
        // 正则表达式限制输入数字以外的内容
        ipt.addEventListener('keyup', () => {
            ipt.value = ipt.value.replace(/[\D](d\.)?/g, '');
            amount.innerText = '￥' + (ipt.value * cost);
        });
        plus.addEventListener('click', () => {
            ipt.value++;
            amount.innerText = '￥' + (ipt.value * cost);
        });
        sub.addEventListener('click', () => {
            ipt.value > 1 ? ipt.value-- : false;
            amount.innerText = '￥' + (ipt.value * cost);
        });
    }
    sum(num_ipt, plus, sub, amount, price);
    zoom(pic, mask, big);
    checkout(article, title);
});