window.addEventListener('load', function() {
    var menu_heads = document.querySelectorAll('.menu_head');
    var menu2 = document.querySelector('.menu2');
    var li = menu2.querySelector('li')
    var focus = document.querySelector('.focus')
    var as = focus.querySelectorAll('a')
    var circle_l = document.querySelector('.circle-l')
    var circle_r = document.querySelector('.circle-r')
    var ul = focus.querySelector('ul')
    var btn = document.querySelector('.btn')
    var btn2 = document.querySelector('.btn2')
    var shrink = document.querySelector('.shrink')
    var message = document.querySelector('.message')


    //点击减号框框缩小
    shrink.addEventListener('click', function() {
            if (this.className == 'shrink') {
                message.style.height = 35 + 'px'
                this.className = 'kuang'

            } else if (this.className == 'kuang') {
                message.style.height = 270 + 'px'
                this.className = 'shrink'
            }
            // console.log(this.className);


        })
        //下拉菜单制作开始
        //遍历所有的菜单栏头部
    menu_heads.forEach(function(value, index) {
            //获取当前头部中li的数量

            // 鼠标经过显示二级菜单
            value.addEventListener('mouseenter', function() {
                var lis = this.querySelectorAll('li')
                    //计算当前二级菜单的高度
                var height = lis.length * li.offsetHeight;
                if (height > 0) {
                    animate(this.querySelector('.menu2'), height)
                }


            })
            value.addEventListener('mouseleave', function() {
                var lis = this.querySelectorAll('li')
                    //计算当前二级菜单的高度
                var height = lis.length * li.offsetHeight;
                if (height > 0) {
                    animate(this.querySelector('.menu2'), 0)
                }

            })

        })
        //长度伸长动画
    function animate(obj, target) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetHeight) / 10
            if (step > 0) {
                step = Math.ceil(step);
            } else if (step < 0) {
                step = Math.floor(step);
            }
            obj.style.height = obj.offsetHeight + step + 'px'
        }, 30)
    }
    //下拉菜单动画结束
    //轮播图动态效果


    var flag = true;


    var index = 0;
    //点击左键播放下一张 达到最后一张禁用按钮 按钮变红
    btn2.addEventListener('mouseup', function() {
        console.log(index);

        if (index == 3) {
            circle_r.disabled = true
            circle_r.style.border = '1px dotted red'


        } else {
            circle_r.disabled = false
            circle_r.style.border = '1px dotted white'
            circle_l.style.border = '1px dotted white'
        }
    })


    circle_r.addEventListener('click', clickRight)

    function clickRight() {

        if (flag) {
            index++;
            flag = false;

            //点击后遍历图片使图片缩放
            as.forEach(function(value, index) {
                    value.parentNode.style.padding = "1%"
                    value.querySelector('span').style.opacity = 0;
                    focus.style.background = '-webkit-linear-gradient(left, rgba(54, 226, 248, 0.5) 138px, rgba(0, 0, 0, 0) 1300px)'
                })
                //图片缩放后进行移动
            var timer = setTimeout(function() {

                    animate2(ul, -index * focus.offsetWidth);

                    clearTimeout(timer)
                }, 600)
                //移动完成图片回归原始大小
            var timer2 = setTimeout(function() {
                clearTimeout(timer2)
                as.forEach(function(value, index) {
                    value.parentNode.style.padding = ""
                    value.querySelector('span').style.opacity = 1;
                    focus.style.background = '-webkit-linear-gradient(left, rgba(40, 255, 96, 0.5) 138px, rgba(0, 0, 0, 0) 1300px)'
                })
                flag = true;

            }, 1500)
        }



    }
    //右键同上

    btn.addEventListener('mouseup', function() {


        if (index == 0) {
            circle_l.disabled = true
            circle_l.style.border = '1px dotted red'

        } else {
            circle_l.disabled = false
            circle_l.style.border = '1px dotted white'
            circle_r.style.border = '1px dotted white'
        }
    })
    circle_l.addEventListener('click', clickLeft)

    function clickLeft() {
        if (flag) {
            flag = false;
            index--;
            as.forEach(function(value, index) {
                value.parentNode.style.padding = "1%"
                value.querySelector('span').style.opacity = 0;
                focus.style.background = '-webkit-linear-gradient(left, rgba(122, 41, 123, 0.5) 138px, rgba(0, 0, 0, 0) 1300px)'
            })

            var timer2 = setTimeout(function() {
                animate2(ul, -index * focus.offsetWidth, );
                clearTimeout(timer2)

            }, 600)
            var timer = setTimeout(function() {
                as.forEach(function(value, index) {
                    value.parentNode.style.padding = ""
                    value.querySelector('span').style.opacity = 1;
                    focus.style.background = '-webkit-linear-gradient(left, rgba(255, 192, 0, 0.5) 138px, rgba(0, 0, 0, 0) 1300px)'
                })
                flag = true;
                clearTimeout(timer)
            }, 1500)

        }




    }

    function animate2(obj, target, callback) {

        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 6;
            if (step > 0) {
                step = Math.ceil(step);
            } else {
                step = Math.floor(step);
            }

            obj.style.left = obj.offsetLeft + step + 'px';

            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
        }, 15)


    }


    //tab栏切换功能
    var lis = document.querySelector('.adc_down').querySelectorAll('li');
    var adcs = document.querySelectorAll('.adc_top1')
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.opacity = .7
                adcs[i].style.display = 'none'
            }
            console.log(i);

            this.style.opacity = 1
            adcs[this.index].style.display = 'block'
        })
        lis[i].addEventListener('mouseleave', function() {
            console.log(this);

            this.style.opacity = 1
            adcs[this.index].style.display = 'block'
        })
    }

})