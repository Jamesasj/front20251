import { useEffect, useState } from "react";
import styles from "./style.module.css";
export default function MyInput({name, value, type, onChange, sdisable}) {
    const [disable, setDisable] = useState(false);
    const [contador, setContador] = useState(0);
    useEffect(() => {
        setDisable(sdisable);
    }, [])

    useEffect(()=>{
        setContador(contador+1)
    }, [value])

    return (<>
        <div>
            <label className={styles.container}>{name + " " +contador}</label>
            <input disabled={disable} type={type} value={value} onChange={onChange}></input>
        </div>
    </>)
}