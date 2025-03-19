import TextareaContainer from "./styled";

export default function Textarea({ label, id, essential, ...props }) {
    return (
        <TextareaContainer>
            <label htmlFor={id}>{label}</label>
            <textarea name={id} id={id} required={essential} {...props}></textarea>
        </TextareaContainer>
    );
}
