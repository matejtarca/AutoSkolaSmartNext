import React from "react";

// function fade(element) {
//   var op = 1; // initial opacity
//   var timer = setInterval(function () {
//     if (op <= 0.1) {
//       clearInterval(timer);
//       element.style.display = "none";
//     }
//     element.style.opacity = op;
//     element.style.filter = "alpha(opacity=" + op * 100 + ")";
//     op -= op * 0.1;
//   }, 50);
// }

type ToastProps = {
  text: string;
};
const Toast = ({ text }: ToastProps) => {
  return (
    <div
      className="toast successtoast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="mr-auto">Autoškola SMART</strong>
      </div>
      <div className="toast-body">{text}</div>
    </div>
  );
};

export default Toast;
