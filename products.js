import dynamic from "next/dynamic";
import ProductLoader from "./components/product/ProductLoader";

const options = { loading: () => <ProductLoader /> };

const Sticker = dynamic(() => import("./components/sticker/Sticker"), options);
const ProPlanner = dynamic(
    () => import("./components/professional-planner/ProPlanner"),
    options
);
const LetsGoal2021 = dynamic(
    () => import("./components/lets-goal-2021/LetsGoal2021"),
    options
);
const Bundle = dynamic(() => import("./components/bundle/Bundle"), options);
const Mask = dynamic(
    () => import("./components/mask-bundle/MaskBundle"),
    options
);

export default {
    "ultimate-sticker-book": {
        slug: "ultimate-sticker-book",
        component: <Sticker />,
        id: 4,
    },
    "the-professional-planner": {
        slug: "the-professional-planner",
        component: <ProPlanner />,
        id: 1,
    },
    "lets-goal-2021-planner": {
        slug: "lets-goal-2021-planner",
        component: <LetsGoal2021 />,
        id: 2,
    },
    "bundle-2021": {
        slug: "bundle-2021",
        component: <Bundle />,
        id: 3,
    },
    "face-mask-bundle": {
        slug: "face-mask-bundle",
        component: <Mask />,
        id: 5,
    },
};

export const getFirstProduct = (state) => state.headerProducts[0] || "";
