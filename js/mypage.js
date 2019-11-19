$(function(){
  var k = $(window).height();//屏幕的高度
  $('.next').click(function(){
    $.fn.fullpage.moveSectionDown();
  })
  $('#box').fullpage({
    navigation: true,
    // 滚动到某一屏后的回调函数
    afterLoad: function( anchorLink, index ){
      if( index == 2){
        $('.next').hide();
        // 一到第二屏就让搜索框显示，并且向左移动
        $('.search').show().animate({"right" : 315}, 1500, function(){
          // 等搜索框到达位置后，沙发两个字显示出来
          $('.search-words').animate({"opacity" : 1}, 800, function(){
          //   // 沙发字显示出来后就让search隐藏，
            $('.search').hide();
          //   // 让.search-02向右上角移动
            $('.search-02').show().animate({'height': 30, 'bottom': 450, 
              'right': 195}, 2000
              );
          //     // 同时右下角的沙发显示，宽和高回到原来的大小
            $('.goods').show().animate({ 'width': 441, 'height': 218,
              'bottom':210, 'right': 210}, 2000, function(){
                $('.next').fadeIn();
              });
              // 同时上面的文字也变成白色的
              $('.words-02').animate({"opacity" : 1});
          });
        });
      }
    },
    // 滚动前的回调函数
    onLeave: function( index, nextIndex ,direction){
      // 从第二屏滚动到第三屏
      if( index == 2 && nextIndex == 3){
        $('.next').hide();
        // 上面的沙发向下掉时，沙发出现，向下移动，然后回到原来的大小，因为是向下移，所以是负数
        // 移动的距离 = 浏览器窗口的高 - （.shirt-03的bottom：200 + main的bottom：50 ）
        // 也就相当于top = 250
        // 在全局声明一下浏览器窗口的高 ：var k = $(window).height();
        $('.shirt-02').show().animate({'bottom': -(k - 250), 'left':190,  
          'width' :207 }, 2000, function(){
            // 掉下来后，旁边的选码图片显示
              $('.img-01-a').animate({'opacity':1}, 500, function(){
                // 选码图片显示后，购物车图片显示
                  $('.btn-01-a').animate({'opacity':1}, 500, function(){
                    $('.next').fadeIn();
                  });
              })
            });
            // 因为改变浏览器大小后，沙发的位置也会发生改变，这里是为了让沙发的位置
            // 随着改变浏览器大小的改变而改变
            $(window).resize(function () {//监听浏览器窗口的大小
              k = $(window).height(); //k是可视区的高
              b = k -250  //b是沙发距离底部的距离，bottom + top = k ; b = k - top
              $('.shirt-02').css("bottom",b+'px')
            });
            $('.cover').show()
      }
       // 从第三屏滚动到第四屏
      if( index == 3 && nextIndex == 4){
        $('.next').hide();
        //  取消上页对浏览器的监听
        $('window').unbind('resize');
          // 一滚动，第三页中间的沙发消失
         $('.shirt-02').hide();
        //  斜着的沙发出现，并且落到第四页的购物车里面
         $('.t1f').show().animate({'bottom': -(k - 250 + 50), 'left': 249}, 2000,
           function(){
            //  落下来后，从第三页掉下来的沙发隐藏，原来页面上的沙发显示
             $('.t1f').hide();
             $('.t1f-04').show();
            //  完成后购物车向左走
             $('.car').animate({'left': 2000}, 2000, 'easeInOutBounce',function(){
                // 下面的收获地址栏出现
                $('.t1').animate({'opacity':1}, 800, function(){
                    $('.t1s').animate({'opacity':1}, 1000,function(){
                      $('.next').fadeIn();
                    });
                    // 地址栏出现的时候，上面的文字换成白色，
                    $('.words-04').hide();
                    $('.words-04-a').animate({'opacity':1}, 2000);
                })
             })
         });
      }
      // 从第四屏滚动到第五屏
      if( index == 4 && nextIndex == 5){
        $('.next').hide();
        $('.hand').animate({'bottom': 0}, 1500, function(){
          $('.mouse').animate({'opacity': 1}, 1000);
          $('.t1f-05').show().animate({'bottom': 70}, 1000, function(){
            $('.bill').animate({'bottom': 390}, 1000,function(){
              $('.words-05').addClass('words-05-a');
              $('.next').fadeIn();
            })
          })
        })
      }
      // 从第五屏滚动到第六屏
      if( index == 5 && nextIndex == 6){
        $('.next').hide();
        $('.t1f-05').animate({'bottom': -(k - 500), 'left': '40%',
          'width':65 },1000,function(){
            $('.t1f-05').hide();
          });
        $('.box').animate({'left': '38%'}, 1000, function(){
          $('.box').animate({'bottom': 40}, 1000,function(){
            $('.box').hide();
            $('.zunyi').show();
            $('.section6').animate({'backgroundPositionX':'100%'}, 5000,function(){
              $('.man').animate({'height':305, 'bottom':116}, 1000., function(){
                $('.man').animate({'right':500}, 1000, function(){
                  $('.door').animate({'opacity': 1}, 1000, function(){
                    $('.women').show().animate({'height':294,
                      'right':380}, 1000, function(){
                        $('.please').show();
                        $('.next').fadeIn();
                    })
                  }); 
                  
                });
              })
              $('.words-06').show().animate({'left':'30%'}, 1000, 'easeOutElastic')
            })
            
          })
        })
      }

      // 从第六屏滚动到第七屏
      if( index == 6 && nextIndex == 7){
        $('.next').hide();
        setTimeout(function(){
          $('.star').animate({'width': 120}, 500, function(){
            $('.good-07').show();
            $('.next').fadeIn();
          })
        },1000)        
      }

      // 第八屏动画
       $(".shoping").mouseenter( function(){
         $('.start-2').show();}).mouseleave( function(){ $('.start-2').hide();
       });
       $(document).mousemove( function( e ){
         var mainY = $(window).height() - $('.hand-08').height();
         var x = e.clientX - $('.hand-08').width() / 2;
         var y = e.clientY + 10;
        
         if( y  < mainY ){
          y = mainY;
         }
         $('.hand-08').css( {'left': x, 'top': y} )
       });

       $('.tryagian').click(function(){
        $.fn.fullpage.moveTo(1);
        $('img, .move').attr('style','');
       })

    },
  })
})