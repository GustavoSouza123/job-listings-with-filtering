import React from "react";

export default function Image({ src }) {
    return (
        <div className="w-[88px] h-[88px] sm:w-[48px] sm:h-[48px] rounded-full sm:absolute sm:top-[calc(-32px-24px)]">
            <img src={src} alt="job image" />
        </div>
    );
}