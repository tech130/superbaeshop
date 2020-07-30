import React, { useRef } from "react";
import styled from "styled-components";
import useLazyImage from "../../hooks/layout/useLazyImage";

const ImgCon = styled.div`
    display: block;
    width: ${(props) => props.imgWidth || "100%"};
    height: ${(props) => props.imgHeight || "auto"};
    transition: filter 0.5s ease-in 0s;
    filter: ${(props) => `blur(${props.isLoading ? 10 : 0}px)`};

    img {
        width: 100%;
        height: 100%;
    }

    .placeholder-img {
        display: ${(props) => (props.isLoading ? "block" : "none")};
    }

    .responsive-img {
        display: ${(props) => (props.isLoading ? "none" : "block")};
    }
`;

const ResponsiveImage = ({
    image = {},
    alt = "",
    source = [],
    imgHeight,
    imgWidth,
    objFit,
}) => {
    const { src, srcSet, placeholder } = image;
    const ref = useRef(null);
    const isLoading = useLazyImage(ref, image);

    return (
        <ImgCon
            ref={ref}
            isLoading={isLoading}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
            objFit={objFit}
        >
            <img className="placeholder-img" src={placeholder} alt="" />
            <picture>
                {source.length > 0 &&
                    source.map((x, idx) => <source {...x} key={idx} />)}
                <img
                    className="responsive-img"
                    src={src}
                    srcSet={srcSet}
                    alt={alt}
                />
            </picture>
        </ImgCon>
    );
};

export default ResponsiveImage;
