const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', dragStart);
  draggable.addEventListener('dragend', dragEnd);
  draggable.addEventListener('touchstart', dragStart);
  draggable.addEventListener('touchend', dragEnd);
})

function dragStart(e) {
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
  const afterElement = getDragAfterElement(e.target, e.clientY)
  const draggable = document.querySelector('.dragging')
  if (afterElement == null) {
    e.target.appendChild(draggable);
  } else {
    container.insertBefore(draggable, afterElement);
  }
}

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  })
})

containers.forEach(container => {
  container.addEventListener('touchmove', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.touches[0].pageY)
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}