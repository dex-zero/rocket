 import { ComponentProps } from "react"
 import { twMerge } from "tailwind-merge"
 
 interface IconButtonProps extends ComponentProps <'button'> {
    transparent?: boolean
 }

 export function IconButton({transparent, ...props}: IconButtonProps){
    return(
        <button 
            {...props} 
            // className={transparent
            //         ? "rounded-md border border-white/10 bg-black/10 p-1.5" 
            //         : "rounded-md border border-white/10 bg-white/10 p-1.5"
            // }
            className= {twMerge(
                'rounded-md border border-white/10 p-1.5',
                transparent ? 'bg-black/20' : 'bg-white/10',
                props.disabled ? 'opacity-50' : null,
            )}
        />
    )
 }