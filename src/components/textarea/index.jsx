export default function Textarea({ label, id, essential, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea name={id} id={id} required={essential} {...props}></textarea>
        </>
    );
}
