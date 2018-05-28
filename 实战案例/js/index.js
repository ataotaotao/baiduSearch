
$(function(){


    //header轮播图
    (function(){
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

});




