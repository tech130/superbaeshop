import React, { useRef, useEffect } from "react";
import useOnScreen from "../../hooks/layout/useOnScreen";
import EmptyList from "./EmptyList";

const InfiniteList = ({
    loader = null,
    fetching = false,
    allIds = [],
    RenderItem = () => null,
    next,
    loadMore = null,
    count,
    emptyTitle = "",
}) => {
    return (
        <>
            {Array.isArray(allIds) && allIds.length > 0 ? (
                allIds.map((item, idx) => (
                    <RenderItem id={item} key={item + "---" + idx} />
                ))
            ) : count === 0 ? (
                <EmptyList title={emptyTitle} />
            ) : null}
            {fetching ? loader : next ? <LoadMore loadMore={loadMore} /> : null}
        </>
    );
};

const LoadMore = ({ loadMore = null }) => {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (loadMore && onScreen) {
            loadMore();
        }
    }, [onScreen]);

    return <div ref={ref} />;
};

export default InfiniteList;
