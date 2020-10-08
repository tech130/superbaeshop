import React, { useRef, memo } from "react";
import styled, { css } from "styled-components";
import useLazyImage from "../../hooks/layout/useLazyImage";

const ImgCon = styled.div`
    display: block;
    width: ${(props) => props.imgWidth || "100%"};
    height: ${(props) => props.imgHeight || "auto"};
    ${(props) =>
        props.padding &&
        css`
            padding: ${props.padding};
        `};
    ${(props) =>
        props.margin &&
        css`
            margin: ${props.margin};
        `};
`;

const PlaceholderImg = styled.img`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isLoading ? "block" : "none")};
`;

const ResponsiveImg = styled.img`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isLoading ? "none" : "block")};
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

    return (
        <ImgCon
            ref={ref}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
            objFit={objFit}
        >
            <PlaceholderImg isLoading={isLoading} src={image.placeholder} alt="" />
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
        </ImgCon>
    );
};

export default memo(ResponsiveImage);
