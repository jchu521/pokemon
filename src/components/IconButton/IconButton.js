import React from "react";

import "./IconButton.scss";

export default function IconButton({
  icon,
  onClick,
  airaLabel,
  type,
  ...props
}) {
  return (
    <span
      className={`Icon Icon__Button Icon__Button--${type}`}
      dangerouslySetInnerHTML={{ __html: icon }}
      onClick={onClick}
      tabIndex="0"
      role="button"
      aria-label={airaLabel}
      {...props}
    />
  );
}
