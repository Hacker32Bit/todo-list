const Button = ({text, colorName}) => {

    const style = {
        color: colorName ? colorName : "black"
    }

    return (<button style={style}>{text}</button>);
}

export default Button;