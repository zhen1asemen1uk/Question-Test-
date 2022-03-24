import styled from "styled-components";
import Button from "../../reusable/Button";

import RadioButton from "../../reusable/RadioButton";
import { Head_Block, Task_Block } from "../Main";

// --------------------------------------------------------------------------------------------------

const Figure = styled.div`
    width: 100px;
    height: 100px;

    border-radius: 100%;

    background: red;
`;

// --------------------------------------------------------------------------------------------------

const Slide_1 = ({ Radio, setRadio, Slide, setSlide }) => {
    
    // --------------------------------------------------------------------------------------------------

    return (
        <>
            <Head_Block>
                <h1>{`Question ${Slide}`}</h1>
                <Task_Block>
                    <Figure />
                    <h4>{`What figure is depicted??`}</h4>
                </Task_Block>
            </Head_Block>
            <div>
                <RadioButton
                    label={"Square"}
                    setValue={setRadio}
                    value={0}
                    checked={Radio}
                    name={"radio_1"}
                />
                <RadioButton
                    label={"Circle"}
                    setValue={setRadio}
                    value={1}
                    checked={Radio}
                    name={"radio_1"}
                />
                <RadioButton
                    label={"Ellipse"}
                    setValue={setRadio}
                    value={2}
                    checked={Radio}
                    name={"radio_1"}
                />
            </div>
            <Button title={"Next"} onClick={() => setSlide(Slide + 1)} />
        </>
    );
};

export default Slide_1;
