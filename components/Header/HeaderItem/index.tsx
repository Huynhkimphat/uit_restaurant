import React from 'react'

function HeaderItem(props: any) {
    const { message } = props
    return (
        <div className='bg-transparent rounded-sm p-2 hover:bg-[#007e3e]'>{message}</div>
    )
}

export default HeaderItem