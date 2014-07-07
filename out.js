$(function(){
	$("#listCourseBox tr").each(function(){
		$(this).find('.course-num').css({
			'color':'red',
			'font-size':'30px'
		});
		
		$(this).find('.blue-button').removeClass('blue-button');
		$(this).find('img').width('200px');
		$(this).find('.student').each(function(){
			$(this).children('a').text('1073741824').css('color','red');
		})
  	});
});
