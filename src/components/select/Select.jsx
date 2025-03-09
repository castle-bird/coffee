export default function Select({ label, id, options, optionsValue, essential, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} required={essential} {...props}>
                {options.map((option, idx) => (
                    <option value={optionsValue[idx]} key={idx}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
}
