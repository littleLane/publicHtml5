(function(){
	var nowpage = 0;		//当前页
	var documentHeight = $(document).height();
	var documentWidth = $(document).width();
	
	var media = document.getElementById("media");
	
	initData();		//初始化数据
	bindEvent();	//绑定事件
	
	//初始化数据
	function initData(){
		//初始化最外层div的高度
		$(".wrap_box").css("height", documentHeight);
		
		$("#phoneNum").val("测试联系电话");
		$("#emailNum").val("测试邮箱号");
	}
	
	//绑定事件
	function bindEvent(){
		//点击暂停/播放音乐
		$("#audioBtn").click(function(){
			$(this).toggleClass("rotation");
			
			if($(this).hasClass("rotation")){
				media.play();
			}else{
				media.pause();
			}
		});
		
		//滑动翻页效果
		new iSlider({
		    wrap: '#sectionList',
		    item: '.main-page',
		    onslide: function(index) {
		        $("#sectionList section").eq(index).addClass("z-current").siblings().removeClass("z-current");
		    }
		});
		
		//底部箭头移动效果
		setInterval(function(){
			$(".ui_arrow1").animate({
				bottom: "20px",
				opacity: 0.2
			}, 800).animate({
				bottom: "1px",
				opacity: 1
			}, 800)
		}, 800);
		
		setInterval(function(){
			$(".ui_arrow2").animate({
				bottom: "38px",
				opacity: 0.2
			}, 800).animate({
				bottom: "20px",
				opacity: 1
			}, 800)
		}, 800);
	}
})()