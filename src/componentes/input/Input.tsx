import { PropsWithChildren } from "react";

function Input(tipo: string, id: string, children: string){
    return(
        <div>
            <label htmlFor={id}>{children}</label>
            <input type={tipo} id={id} />
        </div>
    )
}
export default Input;