import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { LogoIcon } from "@assets";

export const AuthLayout = () => {
    return (
        <StyledAuthLayout>
            <div className="layout">
                <Outlet />
            </div>
        </StyledAuthLayout>
    );
};

const StyledAuthLayout = styled.div`
  
`;

