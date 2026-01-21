let btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let option = this.innerHTML;
    switch (option){
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play()
      break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play()
      break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play()
      break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play()
      break;
      case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play()
      break;
      case "k":
        let cick = new Audio("sounds/snare.mp3");
        cick.play()
      break;
      case "l":
        let snare = new Audio("sounds/kick-bass.mp3");
        snare.play()
      break;
  }
  });}
  document.addEventListener("keydown",function(event){
    let key = event.key;
    switch(key){
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play()
      break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play()
      break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play()
      break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play()
      break;
      case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play()
      break;
      case "k":
        let cick = new Audio("sounds/snare.mp3");
        cick.play()
      break;
      case "l":
        let snare = new Audio("sounds/kick-bass.mp3");
        snare.play()
      break;
    }
  });
