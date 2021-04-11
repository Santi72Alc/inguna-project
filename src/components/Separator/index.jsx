import React from 'react';

export default function Separator({ id, className, children }) {
    return (
        <div id={id} className={className}>
            {children}
        </div>
    );
}
