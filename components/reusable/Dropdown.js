import { useState } from "react";

import styled from "styled-components";

const Wrapp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Drop = styled.div`
    padding: 5px 20px;
    width: 100%;
    margin-top: 15px;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    color: #2a172d;
    font-weight: bolder;
    padding: 12px;
    border: 1px solid black;

    box-sizing: border-box;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid black;

    box-sizing: border-box;
    margin: 0 auto;
`;

const Row = styled.div`
    padding: 12px;

    cursor: pointer;

    :hover {
        background: whitesmoke;
    }
`;

const Dropdown = ({ array, Value, setValue }) => {
    const [Open, setOpen] = useState(false);

    return (
        <Wrapp>
            <Drop>
                <Title onClick={() => setOpen(!Open)}>
                    {Value?.title || "Choose"}
                </Title>
                <Content
                    style={Open ? { display: "flex" } : { display: "none" }}
                >
                    {array?.map((item) => {
                        return (
                            <Row
                                key={item.id}
                                onClick={() => {
                                    setOpen(false);
                                    setValue({
                                        id: item.id,
                                        title: item.title,
                                    });
                                }}
                            >
                                {item.title}
                            </Row>
                        );
                    })}
                </Content>
            </Drop>
        </Wrapp>
    );
};

export default Dropdown;
