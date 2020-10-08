import React, { useRef, memo } from "react";
import styled from "styled-components";
import useLazyImage from "../../hooks/layout/useLazyImage";

const ImgCon = styled.div`
    display: block;
    position: relative;
    width: ${(props) => props.imgWidth || "100%"};
    height: ${(props) => props.imgHeight || "auto"};
`;

const PlaceholderImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.isLoading ? 1 : 0)};
`;

const ResponsiveImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

const ResponsiveImage = ({
    image = {},
    alt = "",
    source = [],
    imgHeight,
    imgWidth,
    objFit,
}) => {
    const ref = useRef(null);
    const isLoading = useLazyImage(ref, image);

    const picture = (
        <picture>
            {source.length > 0 &&
                source.map((x, idx) => <source {...x} key={idx} />)}
            <ResponsiveImg
                isLoading={isLoading}
                src={image.src}
                srcSet={image.srcSet}
                alt={alt}
            />
        </picture>
    );

    return (
        <ImgCon
            ref={ref}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
            objFit={objFit}
        >
            <PlaceholderImg
                isLoading={isLoading}
                src={image.placeholder}
                alt=""
            />
            {!isLoading && picture}
            <noscript>{picture}</noscript>
        </ImgCon>
    );
};

export default memo(ResponsiveImage);
