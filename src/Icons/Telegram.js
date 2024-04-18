import * as React from "react";

const Telegram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={props.width || 30} height={props.height || 30} {...props}>
    <path d="M9.417 15.181l-.397 5.624c.697-.2 1.004-.31 1.36-.534l3.466-2.466 6.906 4.795c1.2.834 2.18.404 2.55-1.202l4-18c.498-2.202-1.44-3.15-2.65-2.45L.647 9.581C-1.002 10.35-.353 11.35.897 11.05l7.917-1.77 10.336 6.95c.808.54 1.57.25 1.7-.65.13-.9-.67-1.33-1.47-1.65L9.417 15.181z"/>
  </svg>
);

export default Telegram;