import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import { theme } from "@utils";
import { PadlockIcon } from "@assets";

interface IInputShare {
    label?: string;
    placeholder?: string;
    value: string;
    error?: string;
    touch?: boolean;
    type?: string;
    name?: string;
}

export const InputShare = (props: IInputShare) => {
    const { label, placeholder, value, error, touch, type = "text", name } = props;
    const showError = !!error && touch;

    return (
        <StyledInputShare password={type === "password"}>
            <label id={`input-${name}`} className="lable">
                {label}
            </label>
            <div className="input-box">
                {type === "password" && (
                    <div className="input-password">
                        <PadlockIcon />
                    </div>
                )}
                <Input placeholder={placeholder} className="input" value={value} type={type} />
                {/* {type === "password" && <div></div>} */}
            </div>
            {showError && <p className="error">{error}</p>}
        </StyledInputShare>
    );
};

const StyledInputShare = styled.div<{ password?: boolean }>`
    margin-top: 1.5rem;
    .lable {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${theme.colors.white};
        margin-bottom: 1rem;
        display: block;
    }
    .input-box {
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: 100%;
        height: 5.2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .input-password {
            padding-left: 2rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        .input {
            background-color: transparent;
            border: none;
            outline: none;
            border-color: transparent;
            height: 100%;
            font-size: 1.5rem;
            color: ${theme.colors.white};
            padding: 0 2rem;
            padding-left: ${(p) => (p?.password ? "1rem" : "2rem")};
            ::placeholder {
                color: ${theme.colors.color_placeholder};
                opacity: 1; /* Firefox */
            }
            :-ms-input-placeholder {
                color: ${theme.colors.color_placeholder};
            }

            ::-ms-input-placeholder {
                color: ${theme.colors.color_placeholder};
            }
        }
    }
    .error {
        color: ${theme.colors.color_error};
        margin-top: 0.5rem;
        display: block;
    }
    .ant-input-affix-wrapper > input.ant-input {
        background-color: transparent;
    }
    .ant-input:focus {
        border-color: none !important;
        outline: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
`;
