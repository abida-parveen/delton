import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = ({children,isGoogleSignin,inverted,...otherProps}) => {
    return(
        <button className={` ${inverted ? 'inverted' : '' }
            ${isGoogleSignin ? 'google-sign-in' : '' } 
            custom-button`} 
            {...otherProps}
            >
                {children}
        </button>
    )
}
export default CustomButton