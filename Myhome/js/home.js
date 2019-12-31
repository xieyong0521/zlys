window.addEventListener('load', function() {
    var font_circle = document.querySelector('.font-circle');
    var doorframe = document.querySelector('.doorframe')
    var ul = document.querySelector('.love')
    var lis = ul.querySelectorAll('li')
    var body = document.querySelector('body')
    var welcome = document.querySelector('.welcome')
    var audio = document.querySelector('audio')




    //自动播放音乐


    audio.focus();

    //调用圆球上下弹起倒计时动画函数 +倒计时
    var num = 3;
    animate(font_circle, 0);


    // 小球弹起结束 显示心图案
    setTimeout(function() {
            console.log(1);

            for (var i = 0; i < lis.length; i++) {
                lis[i].addEventListener('click', function() {
                    this.style.opacity = 1;
                })

            }
            var j = 0;
            var timer = setInterval(function() {

                if (j < lis.length) {
                    lis[j].click();
                    j++;


                } else if (j >= lis.length) {
                    console.log(j);
                    clearInterval(timer)
                }

            }, 100)

        }, 6800)
        //小球弹完之后  文字淡出
    setTimeout(function() {
        var num = 0;
        var timer = setInterval(function() {
            num = num + 0.2
            welcome.style.opacity = num;
            if (num == 1) {
                clearInterval(timer)
            }
        }, 500)
    }, 6800)




    //小球上下弹起的动画函数
    function animate(obj, target) {

        clearInterval(obj.timer)
        obj.timer = setInterval(function() {

            var step = (target - obj.offsetTop) / 10
            if (step > 0) {
                step = Math.ceil(step);
            } else {
                step = Math.floor(step);
            }

            obj.style.top = obj.offsetTop + step + 'px'
            if (obj.offsetTop <= 0) {
                animate(font_circle, doorframe.offsetHeight - font_circle.offsetHeight);
            } else if (obj.offsetTop >= doorframe.offsetHeight - font_circle.offsetHeight) {
                animate(font_circle, 0);
                num--;
                if (num <= 0) {

                    clearInterval(obj.timer);

                    obj.style.opacity = 0
                    body.style.backgroundColor = 'rgba(244, 115, 120, .2)'
                }
                font_circle.innerHTML = num;
            }

        }, 30)


    }
})