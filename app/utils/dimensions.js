// random numbers generator for positioning
export function randomHeight(height) {
  if (height) {
    return Math.floor(Math.random() * height + 1);
  } else {
    return Math.floor(Math.random() * 500 + 1);
  }
}

export function randomWidth(width) {
  if (width) {
    return Math.floor(Math.random() * width + 1);
  } else {
    return Math.floor(Math.random() * 500 + 1);
  }
}

export const positionLeft = () => {
  return randomWidth();
}

export const positionTop = () => {
  return randomHeight();
}