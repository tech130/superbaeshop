import React from "react";
import Block from "../styled/Block";
import Banner from './Banner';
import ColorPicker from './ColorPicker';
import PagesSlider from "../lets-goal-2021/PageSlider";
import FreeInclusions from "../lets-goal-2021/FreeInclusions";

const images=[
    './images/free-inclusions/black/MySpacePlanner.jpg',
    './images/free-inclusions/black/StickerBook.jpg',
    './images/free-inclusions/black/A5NoteBook.jpg',
    './images/free-inclusions/black/pocketNotebook.jpg',
    './images/free-inclusions/black/Scrunchy.jpg',
    './images/free-inclusions/black/PopSocket.jpg',
    './images/free-inclusions/black/Badge.jpg',
    './images/free-inclusions/black/Todolist.jpg',
    './images/free-inclusions/black/Notes.jpg',
    './images/free-inclusions/black/Bookmark.jpg',
    './images/free-inclusions/black/PostCard.jpg',
    './images/free-inclusions/black/PlayCard.jpg',
]
const slug="my-space-2022-planner-black";
const BlackPlanner = () => {
    return (
        <>
        <Banner />
          
        <FreeInclusions images={images} slug={slug} />
        <Block padding="0px 0px 45px 0px">

        <ColorPicker slug={slug}/>
        </Block>
        <PagesSlider />
        </>
    );
};





export default BlackPlanner;
