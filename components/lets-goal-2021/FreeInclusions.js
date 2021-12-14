import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import ResponsiveImage from "../common/ResponsiveImage";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import AnimateText from "../styled/AnimateText";

const ColorBoxStyl = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    // background-color: ${(props) => props.bg || "#fddecb"};
    background-color: #fff;
    margin-bottom: 25px;
    margin-top: ${(props) => props.mt || "95px"};
    min-height: 200px;
    border-radius: 25px;
    box-shadow: 1px 1px 18px 1px #efebff;
    border: 1px solid #efebff;
`;
const ColorBoxStylNew = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    background-color: ${(props) => props.bg || "#fddecb"};
    background-color: #fff;
    // min-height: 250px;
    position:relative;
    // padding-bottom: 60px;
    height:${(props) => props.height || "100%"};
    border: 1px solid transparent ;
    justify-content: center;
    box-shadow: 1px 1px 18px 1px #efebff;
    border-radius: 30px;
    // margin: 30px 0px;
`;

const ColorBoxImg = styled.div`
    width:${(props) => props.width || "100%"};
    margin: auto;
    margin-top:${(props) => props.mt === '' ? "-95px" : '-' + props.mt}; 
`;
const ColorBoxImgNew = styled.div`
    // width:${(props) => props.width || "100%"};
    // width: 100%;
    // margin: auto;
    // padding:20px;
    width: 300px;
    height: 300px;
    margin: auto;
    padding: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        // width: auto;
        // height: 100%;
    }
    @media (min-width: 786px) {
        width: 230px;
        height: 230px;
    }
    @media (min-width: 992px) {
        width: 300px;
        height: 300px;
    }
`;

const ColorBoxContent = styled.div`
    margin-top: auto;
    padding: 30px 0px;
`;
// const SmallHeadingText = styled.p`
//     font-size: 24px;
//     text-transform: capitalize;
//     font-weight: 700;
//     text-align: center;
//     margin-bottom: 0;
//     color: black;
// `;
// const ColorBoxContentSub = styled.p`
//     font-size: 16px;
//     font-weight: 500;
//     text-align: center;
//     margin-bottom: 0;
//     color: #262626;
// `;
const ColorBoxContentNew = styled.div`
    margin-top: auto;
    position: absolute;
    bottom: 15px;
    width: 100%;
`;
const images=[
    './images/free-inclusions/planner.jpg',
    './images/free-inclusions/StickerBook.jpg',
    './images/free-inclusions/A5NoteBook.jpg',
    './images/free-inclusions/pocketNotebookcopy.jpg',
    
    './images/free-inclusions/PopSocketcopy.jpg',
    './images/free-inclusions/Badge.jpg',
    './images/free-inclusions/Todolist.jpg',
    './images/free-inclusions/Notes.jpg',
    './images/free-inclusions/Bookmark.jpg',
    './images/free-inclusions/PostCard.jpg',
    './images/free-inclusions/PlayCard.jpg',
]
const ColorBoxNew = ({ width = "", mt = "", bg, children, image = {} }) => {
    return (
        <Col md={4}>
            <ColorBoxStyl bg={bg} mt={mt}>
                {image.src && (
                    <ColorBoxImg width={width} mt={mt}>
                        <ResponsiveImage image={image} />
                    </ColorBoxImg>
                )}
                <ColorBoxContent>{children}</ColorBoxContent>
            </ColorBoxStyl>
        </Col>
    );
};

const ColorBox = ({ width = "", height = "",img="", mt = "", bg, children, image = {} }) => {
    return (
        <Col xs={12} sm={12} md={4} lg={4} xl={3} className="mb-5">
            <ColorBoxStylNew bg={bg} mt={mt} height={height}>
                {image.src && (
                    <ColorBoxImgNew width={width} mt={mt}>
                        <ResponsiveImage  imgWidth={"100%"} image={image} />
                    </ColorBoxImgNew>
                )}
                <ColorBoxContentNew>{children}</ColorBoxContentNew>

            </ColorBoxStylNew>
        </Col>
    );
};

const FreeInclusions = ({images,slug}) => {
    return (
        <Block padding="50px 0px 50px 0px">
            <Container>
                <Block padding="0px 0px 45px 0px">
                    <MainHeading textAlign="center">The Freebies are so <AnimateText> cool!</AnimateText></MainHeading>
                    <SmallHeading textAlign="center" >
                        And they are all yours
                    </SmallHeading>
                </Block>
                <Row justifyContent="center">
                {
                        images.map((item,index)=>{
                            return(
                                <ColorBox key ={index}
                                    bg="#fff0ef"
                                    image={require(`${item}?resize`)}
                                >
                            </ColorBox>
                            )
                        })
                    }
                        {/* <ColorBox
                        bg="#fff0ef"
                        image={require("./images/free-inclusions/planner.jpg?resize")}
                    >
                        <SmallHeadingText textAlign="center" >Planner</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub>
                    </ColorBox> */}
                </Row>
            </Container>
            
        </Block >
    );
};

export default FreeInclusions;
