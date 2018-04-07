export function isEventInClassNameNode(event, checkClassName, isShallowCheck = false) {
  let isInside = false;
  let target = event.target || event.srcElement;

  while (target !== null) {
    if (target.classList && target.classList.contains(checkClassName)) {
      isInside = true;
      break;
    }
    target = isShallowCheck ? null : target.parentNode;
  }

  return isInside;
}
