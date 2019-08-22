import React from 'react'

import './form-input.style.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (

    <div className="group">
    {console.log({label})}
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {/* lable ? */}
        {/* <label className={`${props.value.length ? 'shrink' : ''} form-input-lable`>
            {lable}
        </label> */
        }
        { label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} onChange={handleChange} {...otherProps}>
            {label}
        </label>) :null}
    </div> 
)

export default FormInput;