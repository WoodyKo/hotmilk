$(function(){

	$("#button").click(function(){
		if(!document.getElementById("form").checkValidity()){
			alert("全ての項目を入力してください");
			return;
		}
		
		if (!$(":checkbox[name='skype']").prop('checked') && !$(":checkbox[name='hangouts']").prop('checked') && !$(":input[name='ticket_location']").val()) {
			alert("希望場所を指定してください。");
			return;
		} 

		if ($(":checkbox[name='skype']").prop('checked')) {
			$(":checkbox[name='skype']").val("true");
		} else {
			$(":checkbox[name='skype']").val("false");
		}
		
		if($(":checkbox[name='hangouts']").prop('checked')) {
            $(":checkbox[name='hangouts']").val("true");
        } else {
			$(":checkbox[name='hangouts']").val("false");
		}

		var formdata = {
			"user":{
				"token":"123" //仮
			},
			"ticket":{
				title:$("#ticket_title").val(),
				body:$("#ticket_content").val(),
				price:$("#ticket_price").val(),
				time:$("#ticket_time").val(),
				skype:$("#skype").val(),
				hangouts:$("#hangouts").val(),
				place:$("#ticket_location").val(),
				tags:$("#ticket_tag").val()
			}
		};

		var send_data = JSON.stringify(formdata);
		console.log(formdata);
		console.log(send_data);

		$.ajax({
			type: 'POST',
			url: './receiveticket.php',
			dataType: 'json',
			contentType: 'application/json',
			data: send_data,
			success: function(json_data){
				if(!json_data[0]){
					alert("Transaction error." + json_data[1]);
					return;
				}
		
				alert(JSON.stringify(json_data)); 
			},
			error: function(xhr,textStatus,errorThrown){						
				console.log("error.");
				console.log(xhr,textStatus,errorThrown);
			},
			complete: function(json_data){
				console.log("complete.");
				console.log(json_data);
			}
		});
	});
});
