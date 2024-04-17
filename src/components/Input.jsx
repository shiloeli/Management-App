import { forwardRef } from "react";

const Input = forwardRef(function Input({ label,texterea, ...props}, ref){
    const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
    return(
        <p className="flex flex-col gap-1 my-4">
            <label ref={ref} className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {texterea ? (<textarea className={classes} {...props} />
            ) : (
            <input ref={ref} className={classes} {...props} />)}
        </p>
    );
});

export default Input;