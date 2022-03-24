import React, { useState } from "react";
import styled from "styled-components";

import Button from "../reusable/Button";

import Slide_1 from "./sections/Slide_1";
import Slide_2 from "./sections/Slide_2";
import Slide_3 from "./sections/Slide_3";

import Total from "../Total";

// --------------------------------------------------------------------------------------------------

export const Head_Block = styled.div``;

export const Task_Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// --------------------------------------------------------------------------------------------------

const Main = () => {
    //states
    const [Radio, setRadio] = useState(0);
    const [Text, setText] = useState("");
    const [Drop, setDrop] = useState(null);

    const [Slide, setSlide] = useState(0);

    //function
    const slideFn = () => {
        switch (Slide) {
            case 1:
                return (
                    <Slide_1
                        Radio={Radio}
                        setRadio={setRadio}
                        Slide={Slide}
                        setSlide={setSlide}
                    />
                );

            case 2:
                return (
                    <Slide_2
                        Text={Text}
                        setText={setText}
                        Slide={Slide}
                        setSlide={setSlide}
                    />
                );

            case 3:
                return (
                    <Slide_3
                        Drop={Drop}
                        setDrop={setDrop}
                        Slide={Slide}
                        setSlide={setSlide}
                    />
                );

            case 4:
                return (
                    <Total
                        Radio={Radio}
                        Text={Text}
                        Drop={Drop}
                        setSlide={setSlide}
                        setRadio={setRadio}
                        setText={setText}
                        setDrop={setDrop}
                    />
                );

            default:
                return (
                    <>
                        <Button
                            title={"Start"}
                            onClick={() => setSlide(Slide + 1)}
                        />
                    </>
                );
        }
    };

    // --------------------------------------------------------------------------------------------------

    return <>{slideFn()}</>;
};

export default Main;
