const Input = ({ className, title, id, placeholder, name }) => (
    <div className={className}>
    <label htmlFor={id} title={title}>
        {name}
    </label>
    <input type="text" id={id} placeholder={placeholder}></input>
    </div>
);

export default Input;

export const fields = [
    {
    // title: "category",
    id: "category1",
    placeholder: "Adjective",
    name: "Category",
    },
    {
    // title: "category",
    id: "category2",
    placeholder: "Adult",
    name: "Word",
    },
    {
    // title: "category",
    id: "category3",
    placeholder: "[ˈædʌlt]",
    name: "Transcription",
    },
    {
    // title: "category",
    id: "category3",
    placeholder: "взрослый",
    name: "Translation",
    },
]