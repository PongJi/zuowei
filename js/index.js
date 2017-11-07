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

	getNowFormatDate()
}