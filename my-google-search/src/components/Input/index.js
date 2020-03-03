import React from "react";
import "./style.css"

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
export function Input(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

// Destructuring the type, className, children and onClick props, applying them to the button element
export function SearchButton({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["search btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}