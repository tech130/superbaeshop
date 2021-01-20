import React, { useEffect } from "react";
import InfiniteList from "../common/InfiniteList";
import { useSelector, useDispatch } from "react-redux";
import {
    walletListName,
    fetchWallet,
    clearWallet,
    fetchMoreWallet,
} from "../../redux/user/wallet";
import AddressLoder from "../address/AddressLoder";
import WalletItem from "./WalletItem";

const WalletList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.pagination[walletListName] || {};
    }, []);

    useEffect(() => {
        dispatch(fetchWallet());
        return () => {
            dispatch(clearWallet());
        };
    }, []);

    return (
        <InfiniteList
            {...data}
            loader={<AddressLoder />}
            emptyTitle="No history"
            RenderItem={WalletItem}
            loadMore={() => dispatch(fetchMoreWallet())}
        />
    );
};

export default WalletList;
