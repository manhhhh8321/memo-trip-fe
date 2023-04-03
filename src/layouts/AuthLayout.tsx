import { Outlet } from "react-router-dom";
import styled from "styled-components";

import bg from "@assets/Images/bg_auth.svg";
import platonic from "@assets/Images/platonic_image.svg";
import { theme } from "@utils";
import { LogoIcon } from "@assets";

export const AuthLayout = () => {
    return (
        <StyledAuthLayout>
            <div className="layout">
                <div className="header">
                    <LogoIcon />
                </div>
                <Outlet />
                <img className="image" src={platonic} alt="platonic" />
            </div>
        </StyledAuthLayout>
    );
};

const StyledAuthLayout = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-color: ${theme.colors.backgroud_main};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .layout {
        margin: 0 auto;
        width: ${theme.widths.wide_1440};
        height: 100%;
        position: relative;
        .header {
            width: 100%;
            padding: 1rem 3rem;
        }
    }
    .image {
        position: absolute;
        top: -5%;
        right: -25%;
        width: 140rem;
        height: 130rem;
    }
`;
