import { Head_Block, Task_Block } from "../Main";

import Button from "../../reusable/Button";
import Input from "../../reusable/Input";

// --------------------------------------------------------------------------------------------------

const Slide_2 = ({ Text, setText, Slide, setSlide }) => {
    
    // --------------------------------------------------------------------------------------------------

    return (
        <>
            <Head_Block>
                <h1>{`Question ${Slide}`}</h1>
                <Task_Block>
                    <h4>{`How much will be 2 + 2 = ?`}</h4>
                </Task_Block>
            </Head_Block>

            <Input setValue={setText} value={Text} placeholder={"You answer"} />
            <Button
                title={"Next"}
                onClick={() => (Text ? setSlide(Slide + 1) : "")}
            />
        </>
    );
};

export default Slide_2;
