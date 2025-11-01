import React from 'react';

const MemberCard = ({ name, role, image }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg w-64 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Member Image */}
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-100">
                <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Member Info */}
            <h3 className="text-lg font-semibold text-black text-center mb-1" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                letterSpacing: '-0.01em'
            }}>
                {name}
            </h3>
            <p className="text-sm text-gray-500 text-center font-normal" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}>
                {role}
            </p>
        </div>
    );
};

export default MemberCard;