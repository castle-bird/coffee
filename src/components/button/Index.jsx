function Button({ onClick, className = "", children }) {
    return (
        <button className={`default ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
