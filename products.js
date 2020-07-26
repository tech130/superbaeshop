import Sticker from "./components/sticker/Sticker";
import ProPlanner from "./components/professional-planner/ProPlanner";
import LetsGoal2021 from "./components/lets-goal-2021/LetsGoal2021";
import Bundle from "./components/bundle/Bundle";

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
};
