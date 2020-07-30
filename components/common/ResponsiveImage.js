import React, { useRef, memo } from "react";
import styled from "styled-components";
import useLazyImage from "../../hooks/layout/useLazyImage";

const ImgCon = styled.div`
    display: block;
    width: ${(props) => props.imgWidth || "100%"};
    height: ${(props) => props.imgHeight || "auto"};
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
    const { src, srcSet, placeholder } = image;
    const sizes = "(max-width: 700px) 100vw, 700px";
    const ref = useRef(null);
    const isLoading = useLazyImage(ref, { src, srcSet, sizes });

    return (
        <ImgCon
            ref={ref}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
            objFit={objFit}
        >
            <PlaceholderImg isLoading={isLoading} src={placeholder} alt="" />
            <RenderPicture
                source={source}
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                isLoading={isLoading}
                alt={alt}
            />
            <noscript>
                <RenderPicture
                    source={source}
                    src={src}
                    srcSet={srcSet}
                    sizes={sizes}
                    alt={alt}
                />
            </noscript>
        </ImgCon>
    );
};

//
// eslint-disable-next-line react/display-name
const RenderPicture = memo(
    ({ isLoading = false, source = [], src, srcSet, sizes, alt }) => (
        <picture>
            {source.length > 0 &&
                source.map((x, idx) => <source {...x} key={idx} />)}
            <ResponsiveImg
                isLoading={isLoading}
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
            />
        </picture>
    )
);

export default memo(ResponsiveImage);
