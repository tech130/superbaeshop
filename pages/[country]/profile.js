import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import MyProfile from "../../components/profile/MyProfile";
import { fetchProfile } from "../../redux/user/user";

const Profile = () => {
    return (
        <Layout isAuthRoute>
            <MyProfile />
        </Layout>
    );
};

Profile.getInitialProps = async (ctx) => {
    const { token } = await common(ctx, true);
    if (token && !ctx.isServer) {
        await ctx.store.dispatch(fetchProfile());
    }
};

export default Profile;
