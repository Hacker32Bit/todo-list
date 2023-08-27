const Button = ({text, color = "black"}) => {
    return (
        <button style={{ color }}>{text}</button>
        );
}

export default Button;