import styled from "styled-components";

const InputStyled = styled.input`
    margin: ${(p) => p.margin || "0"};
    padding: ${(p) => p.padding || "5px 10px"};

    width: ${(p) => p.w || "300px"};
    height: ${(p) => p.h || "50px"};

    border: 2px silver black;

    color: black;
    background: white;
    outline: none;
`;

const Input = ({
    value,
    setValue,

    type = "text",

    w,
    h,
    p,
    m,

    placeholder,
}) => {
    return (
        <>
            <InputStyled
                value={value || ""}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                type={type}
                padding={p}
                magrin={m}
                w={w}
                h={h}
            />
        </>
    );
};

export default Input;
