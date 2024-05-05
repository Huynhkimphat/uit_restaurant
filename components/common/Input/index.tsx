import React, { useState } from 'react'

function Input(props: any) {
    const [value, setValue] = useState('')
    let { name, customerInfo, type, updateValue } = props
    if (!type) {
        type = 'text';
    }
    // const [data, setData] = useState(customerInfo)
    const handleInputChange = (event: any) => {
        setValue(event.target.value);
    }

    const handleInputBlur = (event: any) => {
        const data = customerInfo;
        console.log(event.target);
        // data[name.toLowerCase()] = event.target.value;

        updateValue(data);
    }
    return (
        <input
            className="w-full p-4 rounded-[4px] text-black"
            data-value={customerInfo}
            type={type}
            value={value}
            name={name}
            id={name}
            placeholder={`Please enter your ${name}`}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
        />
    )
}

export default Input;