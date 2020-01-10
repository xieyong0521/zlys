window.addEventListener('load', () => {
    const table = document.querySelector('table');
    table.addEventListener('selectstart', e => {
        e.preventDefault();
    });
    // 全选反选机制模块
    function select() {
        const check_all = document.querySelector('.check_all');
        const check = document.querySelectorAll('.check');
        // 如果打开页面即为全选状态则初始化全选的状态
        if(check_all.checked) {
            for (let i = 0; i < check.length; i++) {
                check[i].checked = check_all.checked;
            }
            money_sum();
        }
        check_all.addEventListener('click', () => {
            for (let i = 0; i < check.length; i++) {
                check[i].checked = check_all.checked;
            }
            money_sum();
        });
        for (let i = 0; i < check.length; i++) {
            check[i].addEventListener('click', () => {
                money_sum();
                let flag = 0;
                for (let i = 0; i < check.length; i++) {
                    if (!check[i].checked) {
                        flag = 0;
                        check_all.checked = '';
                        return false;
                    } else {
                        flag = 1;
                    }
                }
                flag ? check_all.click() : false;
            });
        }
    }
    // 合计价格计算模块
    function money_sum() {
        const amount = document.querySelectorAll('.amount');
        const bal = document.querySelector('.bal');
        const check = document.querySelectorAll('.check');
        let sum = 0;
        for (let i = 0; i < amount.length; i++) {
            if (check[i].checked) {
                sum += parseFloat(amount[i].innerText.slice(1));
            }
        }
        bal.innerText = '￥' + sum;
    }
    // 数量加减框功能模块
    const num_ipt = document.querySelectorAll('.sum');
    const plus = document.querySelectorAll('.plus');
    const sub = document.querySelectorAll('.sub');
    const amount = document.querySelectorAll('.amount');
    const price = document.querySelectorAll('.price');
    function sum(ipt, plus, sub, amount, price) {
        for (let i = 0; i < ipt.length; i++) {
            const cost = price[i].innerText.slice(1);
            // 正则表达式限制输入数字以外的内容
            ipt[i].addEventListener('keyup', () => {
                // 如果输入小于1则把值变为1
                ipt[i].value = ipt[i].value < 1 ? 1 : ipt[i].value;
                ipt[i].value = ipt[i].value.replace(/[\D](d\.)?/g, '');
                amount[i].innerText = '￥' + (ipt[i].value * cost);
                money_sum();
            });
            plus[i].addEventListener('click', () => {
                ipt[i].value++;
                amount[i].innerText = '￥' + (ipt[i].value * cost);
                money_sum();
            });
            sub[i].addEventListener('click', () => {
                ipt[i].value > 1 ? ipt[i].value-- : false;
                amount[i].innerText = '￥' + (ipt[i].value * cost);
                money_sum();
            });
        }
    }
    // 删除模块
    function delItem() {
        const delPro = document.querySelector('.delPro');
        delPro.addEventListener('click', () => {
            const check = document.querySelectorAll('.check');
            const items = document.querySelectorAll('.items');
            const tbody = document.querySelector('tbody');
            for(let i = 0; i < check.length; i++) {
                if (check[i].checked) {
                    tbody.removeChild(items[i]);
                }
            }
            money_sum();
        });
    }
    //  排序模块
    function sort() {
        // 降序
        function sortDown() {
            let tbody = document.querySelector('tbody');
            let items = document.querySelectorAll('.items');
            for(let k = 0; k < items.length; k++) {
                let price = document.querySelectorAll('.price');
                tbody = document.querySelector('tbody');
                items = document.querySelectorAll('.items');
                for(let i = 0; i < items.length; i++) {
                    price = document.querySelectorAll('.price');
                    tbody = document.querySelector('tbody');
                    items = document.querySelectorAll('.items');
                    let prev = parseFloat(price[i].innerText.slice(1));
                    for(let j = 0; j < items.length; j++) {
                        let next = parseFloat(price[j].innerText.slice(1));
                        if (prev > next) {
                            let old = tbody.replaceChild(items[i], items[j])
                            tbody.insertBefore(old, items[i]);
                        }
                    }
                }
            }
        }
        // 升序
        function sortUp() {
            let tbody = document.querySelector('tbody');
            let items = document.querySelectorAll('.items');
            for(let k = 0; k < items.length; k++) {
                let price = document.querySelectorAll('.price');
                tbody = document.querySelector('tbody');
                items = document.querySelectorAll('.items');
                for(let i = 0; i < items.length; i++) {
                    price = document.querySelectorAll('.price');
                    tbody = document.querySelector('tbody');
                    items = document.querySelectorAll('.items');
                    let prev = parseFloat(price[i].innerText.slice(1));
                    for(let j = 0; j < items.length; j++) {
                        let next = parseFloat(price[j].innerText.slice(1));
                        if (prev < next) {
                            let old = tbody.replaceChild(items[i], items[j])
                            tbody.insertBefore(old, items[i]);
                        }
                    }
                }
            }
        }
        // 按钮
        const sortBtn = document.querySelector('.sort');
        let flag = 0;
        sortBtn.addEventListener('click', () => {
            flag == 0 ? sortDown() : sortUp();
            flag = flag == 0 ? 1 : 0;
        });
    }
    sort();
    delItem();
    sum(num_ipt, plus, sub, amount, price);
    select();
    money_sum();
});