function Input({ label, id, type = "text", className = "", essential, value, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                name={id}
                id={id}
                type={type}
                className={`default ${className}`}
                required={essential}
                value={value}
                {...props}
            />
        </>
    );
}

export default Input;
