import React from 'react'

function Card (props) {
  const dragStart = e  => {
    const target = e.target;

    e.dataTransfer.setData('icard', target.id);


  }

  const dragOver = e => {
    e.stopPropagation();
  }


  return (
    <div id="props.id" draggable={props.draggable} onDragStart={dragStart} onDragOver={dragOver} className={props.className}>
      {props.children}
    </div>
  )
}

export default Card;
