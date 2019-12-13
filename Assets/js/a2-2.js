

let DelayValue=0;
let count = 0;

document.getElementById('startbutton').addEventListener('click', replayAni);



var rangeInput1 = document.getElementById("rangeinput1");
var rangeInput2 = document.getElementById("rangeinput2");

rangeInput1.addEventListener('mouseup', rangeInputUpdate1);
rangeInput2.addEventListener('mouseup', rangeInputUpdate2);

function rangeInputUpdate1(){
    if (this.value > 0 && this.value <= 10000) {
      DelayValue=this.value;
      console.log(this.value);
      document.getElementById('rangevalue1').innerHTML=+DelayValue+" s";
        // alert("First");
    } else{
        // alert("Second");
    }
    replayAni();
}

function rangeInputUpdate2(){
  if (this.value > 0 && this.value <= 100) {
    DelayValue=this.value;
    console.log(this.value);
    document.getElementById('rangevalue2').innerHTML=+DelayValue+" s" ;
      // alert("First");
  } else{
      // alert("Second");
  };
  replayAni();

}






//popmotion setup

//create styler for the things need to be animated
const boxStyler = popmotion.styler(document.querySelector('#box'));
const box01Styler = popmotion.styler(document.querySelector('#box01'));
const box02Styler = popmotion.styler(document.querySelector('#box02'));

// const ballBorder = popmotion.value({
//   borderColor: '',
//   borderWidth: 0
// }, ({ borderColor, borderWidth }) => box01Styler.set({
//   boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
// }));


// popmotion.listen(document, 'mousemove')
//   .start((e) => console.log(e)); //popmotion listen event

function replayAni (){
  window.location.reload();
}



popmotion.tween({ 
  from: { 
      scale: .7
  },
  to: { 
      scale: 1
  },
  duration: 1000
}).start(boxStyler.set);

popmotion.tween()
.start(v => console.log("popmotion start"))



const box01Ani=popmotion.tween({ 
  from: { 
      scale: .7
  },
  to: { 
      scale: 1.2
  },
  duration: 1000,
  // ease: easing.backOut,
  
}).start(box01Styler.set);

// box01Ani.start({update: box01Ani.set});

// box01Ani.start({
//   update: box01Ani.set
  
// })



popmotion.tween({ 
  from: { 
      scale: .7
  },
  to: {
      x:300,
      scale: 1.5
  },
  duration: 0
}).start(box02Styler.set);


// popmotion.listen(box01Styler, 'mousedown touchstart').start((e) => {
//   e.preventDefault();
//   count++;
//   box01Styler.innerHTML = count;
  

//   gravity
//     .set(Math.min(0, ballY.get()))
//     .setVelocity(-1200);

//   tween({
//     from: { borderWidth: 0, borderColor: 'rgb(20, 215, 144, 1)' },
//     to: { borderWidth: 30, borderColor: 'rgb(20, 215, 144, 0)' }
//   }).start(ballBorder);
// });




