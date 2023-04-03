import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Outlet />
        </StyledAppLayout>
    );
};

const StyledAppLayout = styled.div``;
