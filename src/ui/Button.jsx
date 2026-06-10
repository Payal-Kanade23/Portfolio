
function Button({text , icon ,onClick , className}){
    return(
        <button onClick={onClick} className={`flex items-center justify-center  text-white font-medium  rounded-[7px]  ${className}`}
>
            {text}
            {icon}
        </button>
    )
}
export default Button;