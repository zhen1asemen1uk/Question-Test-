import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "./reusable/Button";

const Answer_Block = styled.h1`
    color: ${(p) => p.color || "black"};
`;

const Total = ({ Radio, Text, Drop, setSlide, setRadio, setText, setDrop }) => {
    const [Answer, setAnswer] = useState(0);

    useEffect(() => {
        +Radio == 1 ? setAnswer((prev) => prev + 1) : "";
        +Text == 4 ? setAnswer((prev) => prev + 1) : "";
        +Drop?.id == 0 ? setAnswer((prev) => prev + 1) : "";

        setRadio(0);
        setText("");
        setDrop(null);
    }, [Radio, Text, Drop]);

    return (
        <>
            <Answer_Block color={Answer > 0 ? "green" : "red"}>
                {`Total score: ${Answer}`}
            </Answer_Block>
            <Button title={"Try again"} onClick={() => setSlide(0)} />
        </>
    );
};

export default Total;
