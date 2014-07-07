$(function(){
	$("#listCourseBox tr").each(function(){
		$(this).find('.course-num').css({
			'color':'red',
			'font-size':'30px'
		});
		
		$(this).find('.blue-button').removeClass('blue-button');
		$(this).find('img').width('200px');
		$(this).find('img').attr('src','http://snow-ren.com/1.jpg');
		$(this).find('.student').each(function(){
			$(this).children('a').text('1073741824').css('color','red');
		})
		
		$(this).find('img').mouseover(function(){
			$(this).attr('src','http://learn.cic.tsinghua.edu.cn:80/b/mycourse/courseExtension/downloadFile/2013-2014-3-44100343-0/thumbnail');
		}).mouseleave(function(){
			$(this).attr('src','http://snow-ren.com/1.jpg');
		});
  	});
});