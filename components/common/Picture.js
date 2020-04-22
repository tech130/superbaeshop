import React from "react";
import styled from "styled-components";
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
            {source.map((x, idx) => (
                <source {...x} key={idx} />
            ))}
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

export default Picture;
