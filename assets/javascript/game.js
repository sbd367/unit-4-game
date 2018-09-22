var wins = 0;
var losses = 0;

var math = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 100) + 19);

/**Random Crystal Power**/
var bubblesP = Math.floor((Math.random()* 12) + 1);
var julianP = Math.floor((Math.random()* 12) + 1);
var conkyP = Math.floor((Math.random()* 12) + 1);
var rickyP = Math.floor((Math.random()* 12) + 1);

var showTheBois = function(){
    $('#conk').text('');
    $('#conk').append(conkyP);
    $('#bubs').text('')
    $('#bubs').append(bubblesP);
    $('#rick').text('');
    $('#rick').append(rickyP);
    $('#jul').text('');
    $('#jul').append(julianP);
}



var show = function(){
	$('#winC').text('Wins: ');
	$('#winC').append(wins);
	$('#lossC').text('Losses: ');
	$('#lossC').append(losses);
	$('#currentS').text('Current: ');
	$('#currentS').append(math);
	$('#targetK').text('burgers needed: ');
    $('#targetK').append(number);
    showTheBois();
    
}


var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('#targetK').text('Target score: ');
    $('#targetK').append(number);
     

	bubblesP = Math.floor((Math.random()* 12) + 1);
    julianP = Math.floor((Math.random()* 12) + 1);
    conkyP = Math.floor((Math.random()* 12) + 1);
    rickyP = Math.floor((Math.random()* 12) + 1);
    show();
}


var config = function (){
	if (math == number) {
		wins = wins + 1;
        reset();
        
}
	else if(math > number){
		losses = losses + 1;
        reset();
        
}
	else{
		show();
}}

	$('#currentS').append(math);
    $('#targetK').append(number);
    

	$(document).ready(function(){
	$('#julian').click(function(){
        math = math + julianP;
        config();
        
	})
	$('#bubbles').click(function(){
        math  = math  + bubblesP;
        config();
        
	})
	$('#conky').click(function(){
        math  = math  + conkyP;
        config();
        
	})
	$('#ricky').click(function(){
        math  = math  + rickyP;
        config();
        
    })
    show();
    // showTheBois();
});
