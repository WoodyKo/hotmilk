$(function(){

	$("#button").click(function(){
		if(!document.getElementById("form").checkValidity()){
			alert("全ての項目を入力してください");
			return;
		}
		
		if ($(":checkbox[name='ticket_skill']").prop('checked')) {
			$(":checkbox[name='ticket_skill']")[0].value=1;
		}

		/*var button = $(this);
		button.attr("disabled",true);*/

		var formdata = {
			"user":{
				"token":"123" //仮
			},
			"ticket":{
				title:$("#ticket_title").val(),
				body:$("#ticket_content").val(),
				price:$("#ticket_price").val(),
				time:$("#ticket_time").val(),
				place:$("#ticket_location").val(),
				tags:$("#ticket_tag").val() //デザインのと違う
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
				alert("error.");
				console.log(xhr,textStatus,errorThrown);
			},
			complete: function(){
				button.attr("disabled",false);
			}
		});
	});
});
