$(document).ready(function(){

    $(".add").on("click",function(){
        var itemNumber = $(".counter");
        if (itemNumber) == 0 {itemNumber = 0};
        	var newValue = parse_int(itemNumber) + 1;
        }
        $(.counter).show(newValue);


        
    });
});