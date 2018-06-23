// ckeck off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color:"black",
	// 	textDecoration: "none"
	// 	});
	// }
	// else{
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// 	});
	// }
	
});
$(this).css("textDecoration", "none");

$("ul").on("click", "span", function(){

	$(this).parent().fadeOut(1000, function(){
		
		$(this).remove();

	});
	event.stopPropagation();
});
 
$("input[type='text']").keypress(function(){
	if (event.which === 13){
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span> <i class='fas fa-trash'></i> </span> " + todo + "</li>");
	}
	
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})









