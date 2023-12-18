const ButtonUI = ({text , children}) => {
    return (
        <button className=" flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-2 py-2 w-fit">
            {children}
            {text}
        </button>
    )
}

export default ButtonUI