window.onload = function() {
	//获取当前时间：年/月/日
	function getNowFormatDate() {
	    var date = new Date();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    var week = date.getDay();

	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + "年"+ month +"月" + strDate+ "日";

	    //网页左上角显示最新的时间
	    var Otime = document.getElementsByClassName('date')[0];
		Otime.innerHTML = currentdate;

		//网页左上角显示最新的星期几
		var weekdays=new Array(7)
		weekdays = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
		var weekday=weekdays[week];//返回当前时间是星期几
		var Oweekday = document.getElementsByClassName('week')[0];
		Oweekday.innerHTML = weekday;
		};
	getNowFormatDate();

	//全部商品分类点击事件
	var Oli = document.getElementsByClassName('goods-list')[0];
	var Opic = document.getElementsByClassName('pic-show')[0];
	var Ogoods = document.getElementsByClassName('goods-banner')[0];
	var Ocontent = document.getElementsByClassName('content')[0];

	Ogoods.style.display = 'none';

	Oli.addEventListener('mouseenter',function(){	
		if(Opic.style.display == 'none'){ 
         	Opic.style.display = 'block';
         	Ogoods.style.display = 'none';        	
            Ocontent.style.marginTop = 24+'px';
        }
        else{
            Opic.style.display = 'none';
            Ogoods.style.display = 'block';
            Ocontent.style.marginTop = 324+'px';
        }
	},false);
};


$(function(){
	//banner图动画效果
	var timer=null;
	var index=0;

	//右下角指示灯
	$(".banner .light li").mouseover(function(){
		index =$(this).index();//获取当前li的索引值
		$(this).addClass("active").siblings().removeClass();
		$(".banner .pic li").eq(index).fadeIn().siblings().fadeOut();
	});

	//下一页切换
	$(".next").click(function(){
		index++;
		if(index>5){
			index = 0;
		}
		$(".banner .light li").eq(index).addClass("active").siblings().removeClass();
		$(".banner .pic li").eq(index).fadeIn().siblings().fadeOut();
	}); 

	//上一页切换
	$(".prev").click(function(){
		index--;
		if(index<0){
			index = 5;
		}
		$(".banner .light li").eq(index).addClass("active").siblings().removeClass();
		$(".banner .pic li").eq(index).fadeIn().siblings().fadeOut();
	}); 

	//banner动画开始
	function auto(){
		timer = setInterval(function(){
			index++;
			if(index>5){
				index = 0
			};
			$(".banner .light li").eq(index).addClass("active").siblings().removeClass();
			$(".banner .pic li").eq(index).fadeIn().siblings().fadeOut();
		},2000);

	}

	auto();
	
	//鼠标划入banner区域动画停止
	$(".banner").mouseenter(function(){
		// $(this).css({'cursor':'pointer'});
		clearInterval(timer);
	});

	//鼠标划入banner区域动画继续
	$(".banner").mouseleave(function(){
		auto();
	});
});
