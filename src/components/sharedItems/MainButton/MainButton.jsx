import React from 'react';

const MainButton = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gray-100 text-black px-6 py-2 rounded-full hover:bg-gray-50 font-medium cursor-pointer transition ${className}`}
        >
            {children}
        </button>
    );
};

export default MainButton;
