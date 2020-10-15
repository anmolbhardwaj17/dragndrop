import React from 'react'

function Side (props) {
  const data = e => {
      e.preventDefault();

      const icard = e.dataTransfer.getData('icard');

      const card = document.getElementById(icard);
      card.style.display = "block";

      e.target.appendChild(card);
  }

  const drag = e => {
    e.preventDefault();
  }


  return (
    <div id={props.id} onDrop={data} onDragOver={drag} className={props.className}>
      {props.children}
    </div>
  )
}

export default Side;
