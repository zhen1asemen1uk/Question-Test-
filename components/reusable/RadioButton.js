import React from "react";
import styled from "styled-components";

const FakeRadio = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 20px;
    width: 20px;

    background-color: white;
    border: 1px solid black;

    margin-right: 5px;

    :after {
        content: "";
        position: absolute;
        display: none;
    }
`;

const LabelConteiner = styled.label`
    position: relative;

    display: flex;
    align-items: center;

    margin: 5px;

    cursor: pointer;

    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    :hover input ~ ${FakeRadio} {
        background-color: whitesmoke;
    }
    input:checked ~ ${FakeRadio} {
        background-color: white;
    }
    input:checked ~ ${FakeRadio}:after {
        display: block;
    }
    ${FakeRadio}:after {
        width: 12px;
        height: 12px;

        background: navy;
    }
`;

const RadioInput = styled.input``;

export default function RadioButtonForEditVac({
    value,
    setValue,
    checked,
    name,
    id,
    label,
    disabled,
}) {
    return (
        <LabelConteiner>
            <RadioInput
                id={id}
                type="radio"
                name={name}
                value={value}
                disabled={disabled}
                onChange={(e) => setValue(e.target.value)}
                checked={checked == value ? true : ""}
            />
            <FakeRadio />
            {label}
        </LabelConteiner>
    );
}
