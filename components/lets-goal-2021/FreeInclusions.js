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

const FreeInclusions = () => {
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
                    
                        <ColorBox
                        bg="#fff0ef"
                        image={require("./images/free-inclusions/planner.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Planner</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>

                    <ColorBox
                        width="300px"
                        bg="#fff0ef"
                        image={require("./images/free-inclusions/StickerBook.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Sticker Book</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>
                    <ColorBox
                        width="300px"
                        bg="#e1f1fe"
                        image={require("./images/free-inclusions/A5NoteBook.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Notebook</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>



                    <ColorBox
                        width="300px"
                        bg="#efebff"
                        image={require("./images/free-inclusions/pocketNotebookcopy.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Small Notebook</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>

                    <ColorBox
                        width="300px"
                        bg="#fff0ef"
                        image={require("./images/free-inclusions/Scrunchy.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Scrunchies</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>
                    <ColorBox
                        mt="70px"
                        width="360px"
                        bg="#e1f1fe"
                        image={require("./images/free-inclusions/PopSocketcopy.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Pop socket</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>



                    <ColorBox
                        mt="130px"
                        width="300px"
                        bg="#efebff"
                        image={require("./images/free-inclusions/Badge.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Badge</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>

                    <ColorBox
                        width="300px"
                        bg="#fff0ef"
                        image={require("./images/free-inclusions/Todolist.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >To do list</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>
                    <ColorBox
                        width="300px"
                        bg="#e1f1fe"
                        image={require("./images/free-inclusions/Notes.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Notes</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>



                    <ColorBox
                        width="300px"
                        bg="#efebff"
                        image={require("./images/free-inclusions/Bookmark.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Bookmark</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>

                    <ColorBox
                        mt="75px"
                        width="300px"
                        bg="#fff0ef"
                        image={require("./images/free-inclusions/PostCard.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Post card</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>
                    <ColorBox
                        width="300px"
                        bg="#e1f1fe"
                        image={require("./images/free-inclusions/PlayCard.jpg?resize")}
                    >
                        {/* <SmallHeadingText textAlign="center" >Play card</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub> */}
                    </ColorBox>



                    {/* <ColorBox
                        width="300px"
                        bg="#efebff"
                        image={require("./images/below-freebee/holographic stickers.png?resize")}
                    >
                        <SmallHeadingText textAlign="center" >Holographic Stickers</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub>
                    </ColorBox>

                    <ColorBox

                        width="300px"
                        bg="#fff0ef"
                        image={require("./images/below-freebee/box without bg.png?resize")}
                    >
                        <SmallHeadingText textAlign="center" >Pink Box</SmallHeadingText>
                        <ColorBoxContentSub>{"Lorem Ipsum is simply dummy"}</ColorBoxContentSub>
                    </ColorBox> */}

                </Row>

            </Container>
            {/* <Container fluid>
                <Row>
                    <Col sm={7} xs={7} >

                        <ColorBoxNew

                            width="100%"
                            height="280px"
                            bg="#fff"
                            image={require("./images/below-freebee/box without bg.png?resize")}
                        >
                            <SmallHeadingText textAlign="center" >Title</SmallHeadingText>
                        </ColorBoxNew>
                    </Col>
                    <Col sm={5} xs={5} >
                        <ColorBoxNew
                            height="280px"
                            width="100%"
                            bg="#fff"
                            image={require("./images/below-freebee/holographic stickers.png?resize")}
                        >
                            <SmallHeadingText textAlign="center" >Title</SmallHeadingText>
                        </ColorBoxNew>
                    </Col>
                </Row>
                <Row>
                <Col sm={4} xs={4}>

                    <ColorBoxNew

                        width="100%"
                        height="480px"
                        bg="#fff"
                        image={require("./images/below-freebee/notebok.png?resize")}
                    >
                        <SmallHeadingText textAlign="center" >Title</SmallHeadingText>
                    </ColorBoxNew>
                </Col>
                <Col sm={8} xs={8}>
                    <ColorBoxNew
                        height="225px"
                        width="100%"
                        bg="#fff"
                        image={require("./images/below-freebee/POP SOCKET.png?resize")}
                    >
                        <SmallHeadingText textAlign="center" >Title</SmallHeadingText>
                    </ColorBoxNew>
                    <ColorBoxNew
                        height="225px"
                        width="100%"
                        bg="#fff"
                        image={require("./images/below-freebee/POP SOCKET.png?resize")}
                    >
                        <SmallHeadingText textAlign="center" >Title</SmallHeadingText>
                    </ColorBoxNew>
                </Col>
            </Row>
        </Container> */}
        </Block >
    );
};

export default FreeInclusions;
