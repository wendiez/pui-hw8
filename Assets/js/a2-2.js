



function tween({
  from = 0,
  to = 1,
  duration = 300,
  ease = easeOut,
  onUpdate
} = {}) {
  const delta = to - from;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const latest = from + ease(progress) * delta;

    if (onUpdate) onUpdate(latest);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function easeOut(progress, power = 2) {
  return 1 - (1 - progress) ** power;
}

const box = document.querySelector('#box');
const box01 = document.querySelector('#box01');
const box02 = document.querySelector('#box02');

tween({
  from: 0,
  to: 300,
  duration: 500,
  onUpdate: v => {
    box.style.transform = `translateX(${v}px) translateZ(0)`;
    box01.style.transform = `translateX(${v}px) translateZ(0)`;
    box02.style.transform = `translateX(${v}px) translateZ(0)`;
  }
});