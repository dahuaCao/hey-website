$(document).ready(function(){   
    // 侧边栏滑动模块
    (function(){
        var sidebar=$('.sidebar');
        var mask=$('.mask');
        var sidebar_trigger=$('.sidebar_trigger');
        var showSidebar=function(){
            mask.fadeIn();
            sidebar.animate({'right':0});
        }
        var hideSidebar=function(){
            mask.fadeOut();
            sidebar.css('right',-sidebar.width());
        }
        sidebar_trigger.bind('click',showSidebar);
        mask.bind('click',hideSidebar);
    })();
    //返回顶部模块
    (function(){
        var isPC=function(){
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            if(window.screen.width>=768){
                 flag = true;           
            }
            return flag;
            
            };
        if(isPC()){
            //如果是PC端，就出现back2top
            var backtotop=$('.back-to-top');
            backtotop.bind('click', function(){
                $('html,body').animate({scrollTop:0},800)
            });
            $(window).on('scroll',function(){
                if($(window).scrollTop()>400){
                    backtotop.fadeIn();
                }else{
                    backtotop.fadeOut();
                }
            });
        }else{
            //如果是移动端，就不需要出现back2top
        }       
    })();
    // 招聘信息-下拉手风琴效果
    (function(){
        //全部下拉内容隐藏
        $(".bellows__content-wrapper").hide();
        //默认选中第一个
        $(".bellows__item:eq(1)").addClass("bellows--is-open");
        $(".bellows__content-wrapper:eq(1)").show();
        //点击事件
        $(".bellows__header").click(function(){
            //判断当前tab状态
            if($(this).parent(".bellows__item").get(0)===$('.bellows--is-open').get(0)){
                $(this).next().slideUp();//自己关闭
                $(this).parent(".bellows__item").removeClass("bellows--is-open");
            }else{
                $(this).next().slideDown();//内容展开
                $(this).parent(".bellows__item").addClass("bellows--is-open");//父节点增加展开样式
                $(".bellows__header").not(this).next().slideUp();//除了自己其他兄弟都关闭
                $(".bellows__header").not(this).parent(".bellows__item").removeClass("bellows--is-open");//移除其他兄弟父节点的样式
            }
        });
    })();
    // 合作机构图片加载
    (function(){
        for (var i = 0; i < 41; i++) {
          var imgName = "cooperation_" + (i+1) + ".png"
          var str = '<img src="./img/org-logo-large/'+ imgName + '" alt="合作机构" class="cooperations">';
          if(i != 24){
            $('#org2 > .org-container-wap').append(str);
          }
        } 
    })();
});
