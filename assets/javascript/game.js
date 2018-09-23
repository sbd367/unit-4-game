var wins = 0;
var losses = 0;

var currentP = 0;

var number = Math.floor((Math.random()* 100) + 19);

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
	$('#currentS').text('Current Pot: ');
	$('#currentS').append(currentP);
	$('#targetK').text('Target Pot: ');
    $('#targetK').append(number);
    showTheBois();
    
}


var reset = function(){
	currentP = 0;
    number = Math.floor((Math.random()* 100)+20);

	$('#targetK').text('Target Pot :');
    $('#targetK').append(number);
     

	bubblesP = Math.floor((Math.random()* 15));
    julianP = Math.floor((Math.random()* 15));
    conkyP = Math.floor((Math.random()* 15));
    rickyP = Math.floor((Math.random()* 15));
    show();
}


var check = function (){

	if (currentP == number) {
        wins = wins + 1;
        alert("you did it!")
        reset();   
    }

	else if(currentP > number){
        losses = losses + 1;
        alert("Loser");
        reset();   
    }

	else{
		show();
    }
}

    $('#currentS').append(currentP);
    $('#targetK').append(number);
    

	$(document).ready(function(){

	$('#julian').click(function(){
        currentP = currentP + julianP;
        check();
        
    })
    
	$('#bubbles').click(function(){
        currentP  = currentP  + bubblesP;
        check();
        
    })
    
	$('#conky').click(function(){
        currentP  = currentP  + conkyP;
        check();
        
    })
    
	$('#ricky').click(function(){
        currentP  = currentP  + rickyP;
        check();
        
    })

    show();

});
