import React from 'react';

export default function TopBar({logo, heading, children, titleOnClick}) {
    return (
        <nav className="sticky top-0 z-50 h-16 bg-gray-300 top-0 w-screen flex items-center shadow pl-4">
            {logo}
            <h1 className="ml-5 heading-1">{titleOnClick ?
                <a href={titleOnClick}>{heading}</a> : heading }</h1>
            <div className="px-10 flex justify-start w-full items-center">
                {children && children.map((child, index) =>
                    <div key={index.toString()}>
                        {child}
                    </div>
                )}
            </div>
        </nav>
    );
}
