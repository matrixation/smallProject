/**
 * Created by matrix on 2017/5/26.
 */
var $ = require("../lib/jquery-2.1.1.min.js");
var Swiper = require("../lib/swiper.min.js");

$(function(){
    var page={
        init:function(){
                this.myswiper();
                this.menuckick();
                this.menuli();
                this.one_lunbo();
                this.one_gundong();
        },
        myswiper:function(){
            new Swiper('.nav_list_left .swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 6,
                paginationClickable: true,
                spaceBetween: 10
            });
            new Swiper('nav .swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
            $(".swiper-slide").on('click',function(){
                $(this).addClass('underline').siblings().removeClass('underline');
            });
        },
        menuckick:function(){
            $('.header-bottom-con,.i,.mark').click(function(){
                $(".mark").toggle();
                $('.allMenu').toggle();
            });
        },
        menuli:function(){
            $('.menus li a').on('click',function(){
                $(this).addClass('active').parent().siblings().children().removeClass('active');
            });
        },
        one_gundong:function(){
            var num=0;
            var _length=$(".hot-news-item").length;
            setInterval(move,2000);
            function move(){
                if(num<_length-1){
                    num++;
                    $(".hot_content").animate({top:-num * 18},1000);
                }else{
                    num=0;
                    $(".hot_content").animate({top:-num * 18},0);
                }
            }
        },
        one_lunbo:function(){
            var lun=document.getElementById('lun');
            var ali=lun.getElementsByTagName('li');
            var abtn=lun.getElementsByTagName('button');
            var _index=0;
            _index++;
            function show(index){
                for(var i=0;i<ali.length;i++){
                    abtn[i].index=i;
                    ali[i].className='noe';
                    abtn[i].className='';
                }
                ali[index].className='show';
                abtn[index].className='active';
            }
            var timer=setInterval(move,1000);
            function move(){
                var index=_index++%3;
                show(index);
            }
        }
    }
    page.init();
})
