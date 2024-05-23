import React from "react";

export default function Image({ src, alt }) {
    return (
        <div className="w-[88px] h-[88px] rounded-full bg-grayish-cyan-4">
            <img src={src} alt={alt} />
        </div>
    );
}