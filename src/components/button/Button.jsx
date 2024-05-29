import './Button.css'



function Button({buttonType = "button", buttonText, buttonVariant, clickHandler}) {
    return (
        <button
            type={buttonType}
            className={`${buttonVariant}-button`}
            onClick={clickHandler}
        >
            {buttonText}

            </button>
    )
}

export default Button;

