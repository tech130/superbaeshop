import React from "react";
import Img from "../styled/Img";

const Picture = ({
    src = "",
    alt = "",
    fluid = false,
    width = "",
    srcSet = "",
    source = [],
    className = "",
    ...rest
}) => {
    return (
        <picture>
            {source.length > 0 &&
                source.map((x, idx) => <source {...x} key={idx} />)}
            <Img
                className={className}
                width={fluid ? "100%" : width}
                src={src}
                srcSet={srcSet}
                alt={alt}
                {...rest}
            />
        </picture>
    );
};

export const ResponsivePicture = ({ image, ...rest }) => {
    const { src, srcSet, placeholder } = image;
    return (
        <Picture
            src={src}
            srcSet={srcSet}
            placeholder={placeholder}
            {...rest}
        />
    );
};

export default Picture;
