import Cookies from "universal-cookie";
import urls from "../apiService/urls";
import createServerApi from "../apiService/createServerApi";
import { TOKEN_KEY } from "../utils/constants";
import { updateUser, clearUser } from "./user/user";
import { fetchMaster } from "./master";
import { fetchHeaderProducts } from "./product/product";
import { fetchCart } from "./user/cart";

export const redirect = (ctx, location = "/") => {
    if (ctx.res) {
        ctx.res.writeHead(302, {
            Location: location,
        });
        ctx.res.end();
        return;
    }
};

export const handleToken = async ({ req, store }) => {
    if (req && req.headers) {
        const cookies = new Cookies(req.headers.cookie);
        const token = cookies.get(TOKEN_KEY);
        if (token) {
            const Api = createServerApi({
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            try {
                const profile = await Api({ url: urls.myProfile });
                const user = {
                    token,
                    ...profile.data,
                };
                store.dispatch(updateUser(user));
                return user;
            } catch (err) {
                store.dispatch(clearUser());
                return {};
            }
        }
        return {};
    }
    return {};
};

export const common = async (ctx, userRoute = false) => {
    if (ctx.req) {
        try {
            await handleToken(ctx);
        } catch (err) {
            console.log(err);
        }
    }
    const user = ctx.store.getState().user;
    if (userRoute) {
        if (!user.token) {
            redirect(ctx);
        }
    }
    await ctx.store.dispatch(fetchMaster());
    await ctx.store.dispatch(fetchHeaderProducts());
    if (user.token) {
        await ctx.store.dispatch(fetchCart());
    }
};
