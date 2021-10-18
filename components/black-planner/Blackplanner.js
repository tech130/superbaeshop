import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Block from "../styled/Block";
import ResponsiveImage from "../common/ResponsiveImage";
import AnimateText from "../styled/AnimateText";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";


const BlackPlanner = () => {
    return (
        <>
            <Block padding="0px 0px 35px 0px">
                <Container>
                    <Row alignItems="center">
                        
                        <Col lg={5} className="responsemarginTop">
                            <MainHeading className="text-center text-sm-start">
                               black  <AnimateText> planner</AnimateText>
                            </MainHeading>
                            <SmallHeading mb="35px" weight={700} className="text-center text-sm-start">
                                Crafted just for you!
                            </SmallHeading>
                            <div className="text-center text-sm-start">
                                {/* <ProPlannerPrice slug={"the-professional-planner"} /> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Block>
            
        </>
    );
};





export default BlackPlanner;
