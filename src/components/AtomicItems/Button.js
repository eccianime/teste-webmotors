import React from 'react';
import styled from "styled-components";

const BasicButton = styled.button`
    cursor: pointer;
    border-radius: 2px;
    outline: none;
    font-weight: bold;
`

const Button = ({ children, ...props }) => (
    <BasicButton {...props}>{children}</BasicButton>
)

export default Button;