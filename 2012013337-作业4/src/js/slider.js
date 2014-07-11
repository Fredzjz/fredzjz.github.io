$(function(){
	$.ajax({
		url:'getImgJson.html',
		type:'get',
		success:function(data){
			data = eval('(' + data + ')');
			var oul = $('.wrap');
			for (var i=0; i<data.length; i++) {
				oul.children('ul').append('<li><img src="../ext/images/'+data[i].img+'" alt="'+data[i].title+'"></li>');
				if (i == 0) {
					oul.children('ol').append('<li class="current">'+(i+1)+'</li>');
					oul.children('p').text(data[i].title);
				} else {
					oul.children('ol').append('<li>'+(i+1)+'</li>');
				}
			}
			oul.show();
			
			var oul = $('.wrap ul');
			var ali = $('.wrap ul li');
			var numLi = $('.wrap ol li');
			var aliWidth = $('.wrap ul li').eq(0).width();
			var _now = 0;	//这个是控制数字样式的计数器
			var _now2 = 0;	//这个是控制图片运动距离的计数器
			var timeId;
			var aimg = $('.wrap ul img');
			var op = $('.wrap p');
		
			numLi.click(function(){
				var index = $(this).index();
				_now = index;
				_now2=index;
				var imgAlt = aimg.eq(_now).attr('alt');
				op.html(imgAlt);
				$(this).addClass('current').siblings().removeClass();
				oul.animate({'left':-aliWidth*index},500);
			});
		
			function slider(){
				if(_now==numLi.size()-1){
					ali.eq(0).css({
							'position':'relative',
							'left': oul.width()
					});
					_now=0;
				}else{
					_now++;
				}
		
				_now2++;
		
				numLi.eq(_now).addClass('current').siblings().removeClass();
		
				var imgAlt = aimg.eq(_now).attr('alt');
				op.html(imgAlt);
		
				oul.animate({'left':-aliWidth*_now2},500,function(){
					if(_now==0){
						ali.eq(0).css('position','static');
						oul.css('left',0);
						_now2=0;
					}
				});
			}
		
			timeId = setInterval(slider,3500);
		
			$('.wrap').hover(function(){
				clearInterval(timeId);
			},function(){
				timeId = setInterval(slider,3500);
			});

		}
	});
	
	function flushComment(data) {
		$('#content').empty();
		data = eval('(' + data + ')');
		for (var i=0; i<data.length; i++) {
			$('#content').append('<div class="title"><h6>'+data[i].name+'</h6><div>'+data[i].comment+'</div></div>');
		}
	}
	
	if (window.localStorage.currentPage) {
		var currentPage = window.localStorage.currentPage;
	} else {
		var currentPage = 1;
	}
	
	$.ajax({
		url:'getCommnent'+currentPage+'.html',
		type:'get',
		success:function(data){
			flushComment(data);
		}
	});
	
	$('#banner .nav a').click(function(){
		currentPage = $(this).index()+1;
		window.localStorage.currentPage = currentPage;
		$.ajax({
			url:'getCommnent'+currentPage+'.html',
			type:'get',
			success:function(data){
				flushComment(data);
			}
		});
	});
	
	$('#change img').mouseover(function(){
		$(this).attr('src','../ext/images/change2.jpg');
	}).mouseleave(function(){
		$(this).attr('src','../ext/images/change1.jpg');
	})
});
