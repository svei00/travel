import React from 'react'

interface Props {
    title: string;
    onClick?: () => void; // Question mark means that it is not required
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean; 
}

function Button ({ title, onClick, width, loading, padding, noIcon }: Props) {
    return (
        <button
            className='button'
            onClick={onClick}
        >
            <span>
                
            </span>
        </button>
    );
}

export default Button;