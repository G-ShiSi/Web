window.addEventListener('load', function () {
    var prev = this.document.querySelector('.prev')
    var next = this.document.querySelector('.next')
    var focus = this.document.querySelector('.focus')
    var promoNav = this.document.querySelector('.promo-nav')
    var focusWidth = focus.offsetWidth

    focus.addEventListener('mouseenter', function () {
        //鼠标经过轮播图 左右箭头显示
        prev.style.display = 'block';
        next.style.display = 'block';
        window.clearInterval(timer)
        timer = null

    })
    focus.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        //这里timer不需要再定义
        timer = window.setInterval(function () {
            next.click()
        }, 2000)
    })
    //返回有几张焦点图
    //圆点自动适配与点击操作
    for (var i = 0; i < focus.children[0].childElementCount; i++) {
        var newLi = this.document.createElement('li')
        newLi.setAttribute('data-index', i)
        promoNav.appendChild(newLi)
        promoNav.children[0].className = 'selected'
        newLi.addEventListener('click', function () {

            for (var i = 0; i < promoNav.children.length; i++) {
                promoNav.children[i].className = '';
            }
            this.className = 'selected';
            //当我们点击了某个li，获取其索引号
            var index = this.getAttribute('data-index')
            //点击小圆圈，移动图片
            //ul的移动距离就是小圆圈的索引号乘以宽度


            animate(focus.children[0], -index * focusWidth)
        })
    }

    //克隆第一张图片放到ul最后面
    var first = focus.children[0].children[0].cloneNode(true);
    focus.children[0].appendChild(first)
    var num = 0;
    //flag节流阀
    var flag = true
    next.addEventListener('click', function () {
        if (flag) {
            flag = false
            num++;
            if (num != focus.children[0].childElementCount - 1) {
                animate(focus.children[0], -focusWidth * num, function () {
                    flag = true
                })
                console.log('这是第' + (num + 1) + '张');
                for (var i = 0; i < promoNav.children.length; i++) {
                    promoNav.children[i].className = '';
                }
                promoNav.children[num].className = 'selected'
            } else {
                // animate(focus.children[0], 0)

                animate(focus.children[0], -focusWidth * num, function () {
                    focus.children[0].style.left = 0
                    num = 0
                    flag = true
                })
                num = 0
                console.log('这是第' + (num + 1) + '张');
                for (var i = 0; i < promoNav.children.length; i++) {
                    promoNav.children[i].className = '';
                }
                promoNav.children[num].className = 'selected'
            }

        }

    })
    prev.addEventListener('click', function () {
        if (flag) {
            flag = false
            num--
            if (num > -1) {
                console.log('这是第' + (num + 1) + '张');
                animate(focus.children[0], -focusWidth * num, function () {
                    flag = true
                })
                for (var i = 0; i < promoNav.children.length; i++) {
                    promoNav.children[i].className = '';
                }
                promoNav.children[num].className = 'selected'
            } else {
                focus.children[0].style.left = -(focus.children[0].childElementCount - 1) * focusWidth + 'px'
                num = focus.children[0].childElementCount - 1
                num--
                animate(focus.children[0], -focusWidth * num, function () {
                    flag = true
                })
                console.log('这是第' + (num + 1) + '张');
                for (var i = 0; i < promoNav.children.length; i++) {
                    promoNav.children[i].className = '';
                }
                promoNav.children[num].className = 'selected'
            }
        }



    })
    var timer = window.setInterval(function () {
        //手动调用点击事件
        next.click()
    }, 2000)
})