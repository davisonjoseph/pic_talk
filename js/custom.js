// JavaScript Document
$(function(){
	$("#menu1").click(function(){
		$(".image_panel").hide();
		$(".image_panel1").show();
		});
	$("#menu2").click(function(){
		$(".image_panel").hide();
		$(".image_panel2").show();
		});
	$("#menu3").click(function(){
		$(".image_panel").hide();
		$(".image_panel3").show();
		});
	$("#menu4").click(function(){
		$(".image_panel").hide();
		$(".image_panel4").show();
		});
		
	$(".image_panel li img").click(function(){
		var text = $(this).attr("data");
		$("#play_text").val(text);
		});

	});