import styled from "styled-components";

const InputStyled = styled.button`
    margin: ${(p) => p.margin || "10px"};
    padding: ${(p) => p.padding || "10px 5px"};

    width: ${(p) => p.w || "100px"};
    height: ${(p) => p.h || "50px"};

    border: 2px silver black;

    font-weight: bold;

    color: black;
    background: white;
`;

const Button = ({
    title,
    onClick,

    w,
    h,
    p,
    m,
}) => {
    return (
        <>
            <InputStyled onClick={onClick} padding={p} magrin={m} w={w} h={h}>
                {title}
            </InputStyled>
        </>
    );
};

export default Button;
