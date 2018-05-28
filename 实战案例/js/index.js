
$(function(){


    //header轮播图
    ;(function(){
        var $bg = $('#h-bg p'),
            $btn = $('#h-tab .btn'),
            num = 0;
        $bg.eq(num).addClass('on');
        $btn.on('click',function(){
            var index  = $(this).index();
            if( num === index)return;
            $btn.eq(num).removeClass('active');
            $bg.eq(num).fadeOut(500);
            num = index;
            $btn.eq(num).addClass('active');
            $bg.eq(num).fadeIn(500);

        });

        setInterval(function(){
            $btn.eq(num).removeClass('active');
            $bg.eq(num).fadeOut(500);
            num ++;
            num %= $bg.length;
            $btn.eq(num).addClass('active');
            $bg.eq(num).fadeIn(500);
        },2000);

    })();


    ;(function(){
        var length = data.length;
        var $btn  = $('#sp-main .s-c-arrow  p'),
            $ul = $('#sp-main .s-c-img ul'),
            index = 0;//表示播放到第几张。
        var maxLength = length - 4;

        //首先，将内容全部渲染进页面
        function init(){
            var html = '';
            for(var i=0;i<length;i++){
                var d = data[i];
                html += "<li style='background-image:url("+d.src+")'><div class='txt'><h5>"+d.name+"</h5><p class='pos'>"+d.title+"</p><p class='summary'>"+d.description+"</p></div></li>";

            }
            $ul.html(html);
        }
        init();


        btn_hide_show(index);
        //轮播功能的实现
        $btn.click(function(){
            var width = $ul.children().eq(0).outerWidth(true);
            var i = $(this).index();
            index += (i?1:-1);
            index = Math.max(index,0);
            index = Math.min(index,maxLength);
            btn_hide_show(index);
            //能使用css的尽量不要使用js
            $ul.css('marginLeft',- index * width + 'px');
        });


        function btn_hide_show(index){
            var arr = [];
            if(index === 0){
                arr = ["hide","show"];
            }else if(index === maxLength ){
                arr = ["show","hide"];
            }else{
                arr = ["show","show"];
            }
            $btn.eq(0)[arr[0]]();
            $btn.eq(1)[arr[1]]();
        }
    })();

});




