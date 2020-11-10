import React from 'react';


import './custom-button.styles.scss';

const CustomButton = ( {children, isGoogleSignin, isInverted, ...otherProps }) => (
    <button className={`${isInverted ? 'inverted' : '' } ${isGoogleSignin ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;