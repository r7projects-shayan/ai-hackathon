import React from "react";
export const SearchSVG = ({ fillColor = "#000000", className = "", ...props}) => {
    return (
        <svg fill={fillColor} xmlns="http://wwww3org/2000/svg" className={className} {...props} height={props?.width || 20} width={props?.height || 20} viewBox={`0 0 ${props?.widht || 20} ${props?.height || 20}`}
        >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 250292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 17.430123 5 13 C 5 8.5698774 8.5698774 8.5698774 5 13 5 z"/>
        </svg>
    );
};