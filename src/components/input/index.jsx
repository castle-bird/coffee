function Input({ label, id, type = "text", className = "", essential, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                name={id}
                id={id}
                type={type}
                className={`default ${className}`}
                required={essential}
                {...props}
            />
        </>
    );
}

export default Input;
