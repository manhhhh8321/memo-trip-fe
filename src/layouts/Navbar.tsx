import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, MenuOutlined, BellOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth, useAppSelector } from "@redux";
import { Button } from "antd/lib/radio";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { store } from "@redux";

const { Header } = Layout;

const StyledHeader = styled(Header)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
    }

    .menu {
        margin-right: auto;
    }

    .ant-menu-item {
        font-weight: 600;
        font-size: 16px;
    }
`;

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useAppSelector(selectAuth);
    const [showLoginButton, setShowLoginButton] = useState(!auth);

    const handleLogout = () => {
        dispatch(logout());

        setShowLoginButton(true);
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <StyledHeader>
            <div className="logo" />
            <Menu className="menu" theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="3" icon={<MenuOutlined />}>
                    Menu
                </Menu.Item>
                <Menu.Item key="4" icon={<BellOutlined />}>
                    Notifications
                </Menu.Item>
            </Menu>

            <Menu>
                {showLoginButton ? (
                    <Button type="primary" onClick={handleLogin}>
                        Login
                    </Button>
                ) : (
                    <Button onClick={handleLogout}>Logout</Button>
                )}
            </Menu>
        </StyledHeader>
    );
};
