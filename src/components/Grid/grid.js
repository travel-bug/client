import React from "react";

export function Container({ fluid, children, props }) {
  return <div className={`container${fluid ? "-fluid" : ""}`} {...props}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : "justify-content-md-center"}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}