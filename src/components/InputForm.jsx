export default function InputForm({name, changeHandler, info}) {

    return (
        <p>
            <label htmlFor={name}>{name}</label>
            <input type="number" 
                name={name} 
                id={name} 
                onChange={changeHandler}
                value={info[name]}
                required />
        </p>
    );
}