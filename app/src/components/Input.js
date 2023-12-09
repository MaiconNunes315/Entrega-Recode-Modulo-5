import style from "@/styles/input.module.css";

export default function Input({ required, placeholder, type, title, name, onChange, value }) {
    return (
        <label className={style.label}>
            <input required={required} placeholder={placeholder} type={type} onChange={onChange} value={value} className={style.input} name={name} />
            <span className={style.span}>{title}</span>
        </label>
    )
}
