import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Block from "../styled/Block";
import ResponsiveImage from "../common/ResponsiveImage";
import AnimateText from "../styled/AnimateText";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import Banner from './Banner';
import ColorPicker from './ColorPicker';
import PagesSlider from "../lets-goal-2021/PageSlider";
import FreeInclusions from "../lets-goal-2021/FreeInclusions";

const images=[
    './images/free-inclusions/planner.jpg',
    './images/free-inclusions/StickerBook.jpg',
    './images/free-inclusions/A5NoteBook.jpg',
    './images/free-inclusions/pocketNotebookcopy.jpg',
    './images/free-inclusions/Scrunchy.jpg',
    './images/free-inclusions/PopSocketcopy.jpg',
    './images/free-inclusions/Badge.jpg',
    './images/free-inclusions/Todolist.jpg',
    './images/free-inclusions/Notes.jpg',
    './images/free-inclusions/Bookmark.jpg',
    './images/free-inclusions/PostCard.jpg',
    './images/free-inclusions/PlayCard.jpg',
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
