(function($){
	$.fn.selectInput=function(){
		var select=$(this);
		select.append('<option class="uesr" value="自定义输入">自定义输入</option>');
		select.after('<input id="optionInput" value=""></input>')
		var lenOption=select.children().length;
		var optionInput=$('#optionInput');
		optionInput.css({
			"width": select.width()-16,
			"height": select.height()-2,
			"position": "relative",
			"left":-select.width(),
			"border": 0,
			"padding": 1+'px',
			"display": 'none',
		});

		select.on('change',function(){
			if(this.selectedIndex==lenOption-1){
				optionInput.show().focus();
			}
		})
		optionInput.blur(function(){
			var value=$(this).val();
			var opt=select.find('option:eq('+ (lenOption-2) +')');
			if(value.length!=0){
				opt.val(value);
				opt.text(value)
				select.val(value);
			}else{
				select.val(select.find('option:eq(0)').val());
			}
			$(this).hide();
		})
	}
})(jQuery);