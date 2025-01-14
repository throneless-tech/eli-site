// random numbers generator for positioning
let min = -1000;
let max = 1000;

export function randomHeight(height) {
  if (height) {
    return Math.floor(Math.random() * height + 1);
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export function randomWidth(width) {
  if (width) {
    return Math.floor(Math.random() * width + 1);
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export const positionLeft = () => {
  return randomWidth();
}

export const positionTop = () => {
  return randomHeight();
}