import React from 'react'

interface Props {
    children: React.ReactNode,
    className: string,
    variant: 'primary' | 'links',
}

function Button({ children, className, variant }: Props) {
    const btnStyle = {
        primary: 'text-base min-w-[120px] min-h-[55px] bg-primary text-basic px-8 rounded-[6px] hover:scale-110 hover:font-semibold transform duration-700',
        links: 'text-base hover:scale-110 hover:font-semibold transform duration-700',
    }
    return (
        <div>
            <button className={`${btnStyle[variant]} ${className}`}>{children}</button>
        </div>
    )
}

export default Button
