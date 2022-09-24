import classNames from "classnames";
import React from "react";


function Button(props) {
  return (
    <button
      className={classNames('button', {
        'button--outline': props.outline,
      })}>
      {props.children}
    </button>
  )
}

export default Button;