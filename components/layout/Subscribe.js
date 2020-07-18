import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Flex from "../styled/Flex";
import P from "../styled/P";
import Input from "../form/Input";
import Button from "../styled/Button";
import SubmitButton from "../form/SubmitButton";

const Subscribe = () => {
    return (
        <Block padding="50px 0px 70px 0px">
            <Container>
                <Flex
                    margin="0px 0px 25px 0px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon />
                </Flex>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <P
                            textAlign="center"
                            weight="600"
                            margin="0px 0px 15px 0px"
                        >
                            Sign up for our monthly email newsletter for our
                            best new deals, news and announcement.
                        </P>
                    </Col>
                    <Col lg={4} md={6} lgOffset={4} mdOffset={3}>
                        <Row>
                            <Col noGutter col={9}>
                                <Input placeholder="Enter your email" />
                            </Col>
                            <Col noGutter col={3}>
                                <SubmitButton>Subscribe</SubmitButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

function Icon(props) {
    return (
        <svg height={40} viewBox="0 0 480.511 480.511" width={40} {...props}>
            <path d="M176.255 64c-17.645 0-32 14.355-32 32v128c0 17.645 14.355 32 32 32h128c17.645 0 32-14.355 32-32V96c0-17.645-14.355-32-32-32zm144 32v128c0 8.822-7.178 16-16 16h-128c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h128c8.823 0 16 7.178 16 16zm-41 19.576a8 8 0 01-8 8h-61.261a8 8 0 010-16h61.261a8 8 0 018 8zm161 103.003v220.828c0 22.664-18.438 41.104-41.104 41.104H81.359c-22.665 0-41.104-18.439-41.104-41.104V218.281a8 8 0 0116 0v41.083l170.142 82.625c8.809 4.278 18.911 4.278 27.717 0l119.182-57.879a8 8 0 016.99 14.392l-119.182 57.879c-13.249 6.434-28.445 6.436-41.697 0l-163.152-79.23v162.256c0 13.842 11.261 25.104 25.104 25.104h317.793c13.842 0 25.104-11.262 25.104-25.104V218.579a8 8 0 0115.999 0zM84.255 240V32c0-17.645 14.355-32 32-32h248c17.645 0 32 14.355 32 32v208a8 8 0 01-16 0V32c0-8.822-7.178-16-16-16h-248c-8.822 0-16 7.178-16 16v208a8 8 0 01-16 0zm83.864 122.646a7.999 7.999 0 010 11.314l-49.952 49.951a7.974 7.974 0 01-5.657 2.343c-7.063 0-10.712-8.601-5.657-13.657l49.952-49.951a8.004 8.004 0 0111.314 0zm155.587 0l49.952 49.951c5.047 5.047 1.418 13.657-5.657 13.657a7.974 7.974 0 01-5.657-2.343l-49.952-49.951a8 8 0 0111.314-11.314z" />
        </svg>
    );
}

export default Subscribe;
