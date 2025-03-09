function Button({ onClick, className = "", type = "button", children }) {
    return (
        <button className={`default ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
