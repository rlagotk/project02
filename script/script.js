jQuery(document).ready(function(){
    $('.nav_mn>li').mouseover(function(){
        $(this).find('.sub_mn').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.sub_mn').stop().slideUp(500);
    });    
   
});


jQuery(document).ready(function(){
    $('#main_img a:gt(0)').hide();
    setInterval(function(){
        $('#main_img a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('#main_img');
    },3000);
});


jQuery(document).ready(function(){
    var now = 0;
    var setIntervalld;
    
    $('.l_arow').click(function(e){
        e.preventDefault();
        var i = now + 1;
        if(i == 3){
            i = 0;
        }
        move(i);
    });
    
    $('.r_arow').click(function(e){
        e.preventDefault();
        var i = now + 1;
        if(i == 3){
            i = 0;
        }
        move2(i);
    });
    
function move(i){
    if(now == i) return;
    
    var nowEl = $('.img_box li').eq(now);
    var nextEl = $('.img_box li').eq(i);
    nowEl.css({left:0}).stop().animate({left:"-380px"});
    nextEl.css({left:"380px"}).stop().animate({left:0});
    
    now = i; 
}
    
function move2(i){
    if(now == i) return;
    
    var nowEl = $('.img_box li').eq(now);
    var nextEl = $('.img_box li').eq(i);
    nowEl.css({left:0}).stop().animate({left:"380px"});
    nextEl.css({left:"-380px"}).stop().animate({left:0});
    
    now = i;
}
    

$(document).ready(function(){
    mobile_menu();
});

function mobile_menu(){
    /* 변수 선언 */
    var $menu = null;
    var $left_gnb = null; // 영역 전체
    var $depth1_wrap = null;
    var $depth1 = null;
    var $depth1_btn = null;
    
    /* 시작 함수 */
    function start(){
        init();
        init_event();
    }
    /* 변수 초기화 함수 */
    function init(){
        $menu = $('.menu');
        $left_gnb = $('.left_gnbWrap'); // 영역 전체
        $depth1_wrap = $('.left_gnb>li');
        $depth1 = $depth1_wrap.children('ul');
        $depth1_btn = $depth1_wrap.children('a');
    }
    /* 이벤트 함수 */
    function init_event(){
        
        /* 모바일 메뉴 버튼 클릭했을때 모바일 메뉴영역 나오게 하기 */
        $menu.click(function(event){
            event.preventDefault();
            $left_gnb.addClass('on');
        });
        
        /* x버튼 눌렀을때 모바일 메뉴 닫기 */
        $('.close').click(function(event){
            event.preventDefault();

            $left_gnb.removeClass('on');
            
            // x버튼 누르면 시간차 약간두고 소메뉴 닫히게 하기
            setTimeout(function(){
                $depth1_btn.removeClass('on');
                $depth1.slideUp();
            },300)
        });
        
        /* depth1의 각메뉴 클릭시 depth2 나오게 하기 */
        $depth1_btn.click(function(event){
            event.preventDefault();
            var $this = $(this);
            var $this_ul = $this.siblings('ul');

            var check = $this.hasClass('on');
            if(check){
                $this.removeClass('on');
                $this_ul.stop(true,true).slideUp();
            }else{
                $depth1_btn.removeClass('on');
                $depth1.stop().slideUp();
                $this.addClass('on');
                $this_ul.stop(true,true).slideDown();
            }
        });
        
        /* 디바이스 크기 변경시 모바일 메뉴영역 숨기기 */
        $(window).resize(function(){
            $left_gnb.removeClass('on');
        });
    }
    
    start(); // 시작 호출
}    
    
});
























