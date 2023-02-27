export default ({width, height, hiddeWhenZero}) => {
    return <>
        { hiddeWhenZero && <span 
        style={{width: `${width}px`, height: `${height}px`}} 
        className="
            inline-block
            border-[0.5rem]
            border-solid
            border-black
            border-b-transparent
            rounded-full
            box-border
            animate-spin
        "></span> }
    </>
}