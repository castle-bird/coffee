function Input({ label, id, type = "text", className = "" }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} className={`default ${className}`} />
        </>
    );
}

export default Input;
