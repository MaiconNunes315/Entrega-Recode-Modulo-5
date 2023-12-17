import style from '@/styles/users/formRegister.module.css';

export default function Form({ children, title, subtitle, onSubmit }) {
    return (
        <form className={style.form} onSubmit={onSubmit}>
            <p className={style.title}>{title}</p>
            <p className={style.message}>{subtitle}</p>
            {children}
        </form>
    )
}
