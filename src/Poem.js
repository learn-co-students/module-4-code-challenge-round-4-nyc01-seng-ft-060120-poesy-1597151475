import React from "react";


function Poem (props) {
  return (
    <div>
      <h3>{ props.poem.title }</h3>
      <p>{ props.poem.content }</p>
      <p>
        <strong>- By { props.poem.author }</strong>
        </p>
      <button onClick = { () => { props.markRead(props.poem) } } >Mark as {props.poem.read ? "unread" : "read"}</button>
    </div>
  )
}
export default Poem;
