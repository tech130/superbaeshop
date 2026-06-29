import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
    fetchOrders,
    clearOrders,
    orderListName,
    fetchMoreOrders,
} from "../../redux/user/orders";
import { OrderItemCnt } from "./OrderItem";
import InfiniteList from "../common/InfiniteList";
import OrderLoader from "./OrderLoader";
import { H4 } from "../styled/Headings";
import useUser from "../../hooks/redux/user/useUser";
import Block from "../styled/Block";
import MainHeading from "../styled/MainHeading";

const OrderListing = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.pagination[orderListName] || {};
    }, shallowEqual);

    useEffect(() => {
        dispatch(fetchOrders());
        return () => {
            dispatch(clearOrders());
        };
    }, []);

    return (
        <>
            <Block padding="0px 0px 10px 0px">
                <MainHeading>My Orders</MainHeading>
            </Block>
            <InfiniteList
                loader={
                    <>
                        <OrderLoader />
                        <OrderLoader />
                    </>
                }
                RenderItem={({ id }) => <OrderItemCnt id={id} />}
                loadMore={() => dispatch(fetchMoreOrders())}
                emptyTitle="You have no orders"
                {...data}
            />
        </>
    );
};

const OrderList = () => {
    const { token } = useUser();

    if (token) {
        return <OrderListing />;
    }
    return null;
};

export default OrderList;
