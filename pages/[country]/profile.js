import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import MyProfile from "../../components/profile/MyProfile";

const Profile = () => {
    return (
        <Layout isAuthRoute>
            <MyProfile />
        </Layout>
    );
};

Profile.getInitialProps = async (ctx) => {
    await common(ctx, true);
};

export default Profile;
