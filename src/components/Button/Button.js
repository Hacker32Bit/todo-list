import "./button.css"

const Button = ({text, color = "black", bcolor = "#95a5a6"}) => {
    return (
        <button style={{ color: color, backgroundColor: bcolor }}>{text}</button>
        );
}

export default Button;