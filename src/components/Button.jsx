/* eslint-disable react/prop-types */
import './ButtonStyle.css'
const Button = ({ type, title }) => {
    return (
        <>
            <button
                type={type}
                className="custom-button"
            >
                {title}
            </button>

        </>
    )
}

export default Button