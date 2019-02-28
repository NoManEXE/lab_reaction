(function() {})();

let reactionTime = function() {
  return new Date().getTime();
};

let startTime = 0;
let finishTime = 0;

let pressAction = true;

let latentTime = 0;
let f6Time = 0;

document.addEventListener(
  "keydown",
  event => {
    const keyName = event.key;

    //if (keyName === 'Space') {
    // do not alert when only Control key is pressed.
    //  return;
    //}
    if (pressAction === true) {
      pressAction = false;
      if (event.keyCode === 0x20) {
        //alert(`Combination of space + ${keyName}`);

        let randomTime = (Math.floor(Math.random() * 5) + 1) * 1000;
        //console.log(randomTime)
        setTimeout(function() {
          let circle = document.getElementById("circle");
          choose = Math.round(Math.random() * 2);
          switch (choose) {
            case 0:
              circle.style.backgroundColor = "red";
              console.log("Red color:");
              break;
            case 1:
              circle.style.background = "green";
              console.log("Green color:");
              break;
            case 2:
              circle.style.background = "blue";
              console.log("Blue color:");
              break;
            default:
              circle.style.background = "green";
              console.log("Green color:");
              break;
          }

          startTime = reactionTime();
        }, randomTime);
      } else if (event.keyCode === 54) {
        finishTime = reactionTime();
        f6Time = finishTime - startTime;
        console.log("f6 time " + f6Time / 1000);
        console.log("full time ", (latentTime + f6Time) / 1000);
      }
    }
  },
  false
);

document.addEventListener(
  "keyup",
  event => {
    const keyName = event.key;

    if (event.keyCode === 0x20) {
      pressAction = true;
      //alert(`Combination of space + ${keyName}`);
      finishTime = reactionTime();
      latentTime = finishTime - startTime;
      startTime = reactionTime();
      console.log("latent time - " + latentTime / 1000);
    } else if (event.keyCode === 54) {
      pressAction = true;
      startTime = 0;
      finishTime = 0;
      circle.style.backgroundColor = "#999";
    }
  },
  false
);

function reactionTest() {
  alert("hello");
}
