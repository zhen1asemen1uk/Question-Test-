import styled from "styled-components";
import Button from "../../reusable/Button";

import Dropdown from "../../reusable/dropdown";
import { Head_Block, Task_Block } from "../Main";

// --------------------------------------------------------------------------------------------------

const Figure = styled.div`
    width: 100px;
    height: 100px;
    background: green;
`;

// --------------------------------------------------------------------------------------------------

const Slide_3 = ({ Drop, setDrop, Slide, setSlide }) => {
    //test data
    const arr = [
        { id: 0, title: "Green" },
        { id: 1, title: "Red" },
        { id: 2, title: "Yellow" },
    ];

    // --------------------------------------------------------------------------------------------------

    return (
        <>
            <Head_Block>
                <h1>{`Question ${Slide}`}</h1>
                <Task_Block>
                    <Figure />
                    <h4>{`What color is the square?`}</h4>
                </Task_Block>
            </Head_Block>

            <Dropdown array={arr} Value={Drop} setValue={setDrop} />
            <Button
                title={"Next"}
                onClick={() => (Drop ? setSlide(Slide + 1) : "")}
            />
        </>
    );
};

export default Slide_3;
