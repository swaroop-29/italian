var arr=document.querySelectorAll(".drum");

for(var i=0;i<arr.length;i++)
{
	arr[i].addEventListener("click",function ()
	{
	var buttonInnerHtml=this.textContent;

	makeSound(buttonInnerHtml);

	buttonAnimation(buttonInnerHtml);
	}
	);
}

document.addEventListener("keydown",function(event){
	makeSound(event.key);

	buttonAnimation(event.key);
}

);

function makeSound(key)
{


switch(key)
	{
		case "w":
						var tom1=new Audio("sounds/bomb.mp3");
						tom1.play();
						break;
		case "a":
			var tom2=new Audio("sounds/dindin.mp3");
						tom2.play();
						break;
		case "s":
			var tom3=new Audio("sounds/gara.mp3");
						tom3.play();
						break;

		case "d":
			var tom4=new Audio("sounds/patapim.mp3");
						tom4.play();
						break;
		case "j":
				var snare=new Audio("sounds/tuntun.mp3");
				snare.play();
						break;
		case "k":
			var crash=new Audio("sounds/trala.mp3");
						crash.play();
						break;

		case "l":
			var kick=new Audio("sounds/tripi.mp3");
						kick.play();
						break;
		default: console.log(buttonInnerHtml);

		
	}
}

function buttonAnimation(currentKey)
{
	var activeButton=document.querySelector("."+currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);

}