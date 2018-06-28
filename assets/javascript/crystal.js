var game = {
	wins: 0, 
	losses:0,
	userScore: 0,
	jewel1: 0,
	jewel2: 0,
	jewel3: 0,
	jewel4: 0, 
	randomNumber: 0,	

	randomGenerate: function(min, max) { 
		return Math.floor(Math.random() * (max - min) + min);
		
	},
	

	beginGame: function() {
		this.randomNumber = this.randomGenerate(19, 120);
		this.jewel1 = this.randomGenerate(1, 12);
		this.jewel2 = this.randomGenerate(1, 12);
		this.jewel3 = this.randomGenerate(1, 12);
		this.jewel4 = this.randomGenerate(1, 12);
		$("#scoreNumber").html(this.randomNumber);
	},
 
 	resetGame: function(){ 
 		this.beginGame();
 		this.userScore = 0;
 	},
 	 
 	
 	updateScore: function(value){  
 		if( this.userScore < this.randomNumber) {
			this.userScore = this.userScore + value;
 		};
		
 		if (this.userScore === this.randomNumber) { 
			 this.wins++;
             $("#wins").html("Wins : "  + this.wins);
             alert("You won!");
 			 this.resetGame();

 		}
		
 		else if	( this.userScore > this.randomNumber) {
			 this.losses++;
             $("#losses").html("Losses : " + this.losses);
             alert("You Lost!");
 			this.resetGame();

 		};
		 
 	},
	
 };


		game.beginGame();
		$("#jewel1").on("click", function(){
			game.updateScore(game.jewel1);
			$("#scoretext").html( "Your Number:" + game.userScore);

		});
		$("#jewel2").on("click", function(){
			game.updateScore(game.jewel2);
			$("#scoretext").html( "Your Number:" + game.userScore);

		});
		$("#jewel3").on("click", function(){
			game.updateScore(game.jewel3);
			$("#scoretext").html( "Your Number:" + game.userScore);

		});
		$("#jewel4").on("click", function(){
			game.updateScore(game.jewel4);
			$("#scoretext").html( "Your Number:" + game.userScore);

		});