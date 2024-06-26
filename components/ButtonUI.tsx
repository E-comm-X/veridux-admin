const ButtonUI = ({
  text,
  children,
}: {
  text?: string
  children?: React.ReactNode
}) => {
  return (
    <button className=" flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-4 py-2 ">
      {children}
      {text}
    </button>
  )
}

export default ButtonUI
