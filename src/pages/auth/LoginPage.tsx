import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "@api";
import { toast } from "react-toastify";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setToken } from "./authAction";
import { setAuth } from "@redux";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const params = {
            email,
            password,
        };

        try {
            const res = await axiosClient.post("/auth/login", params);
            console.log(res);
            if (res.status === 201) {
                const { accessToken } = res.data;
                localStorage.setItem("token", accessToken);
                dispatch(setAuth({accessToken: accessToken}));
                toast.success("Login successfully", { position: toast.POSITION.TOP_RIGHT });
                navigate("/home");
            }
        } catch (error) {
            toast.error("Invalid email or password", { position: toast.POSITION.TOP_RIGHT });
            console.log(error);
        }
    };

    const handleGoBack = () => {
        navigate("/home");
    };

    return (
        <StyledLogin>
            <LoginForm onSubmit={handleSubmit}>
                <Title>Login</Title>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
                <RegisterLink>
                    Don't have an account? <a href="#">Register</a>
                </RegisterLink>
                <GoBackButton onClick={handleGoBack}>Go Back</GoBackButton>
            </LoginForm>
        </StyledLogin>
    );
};

const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    width: 20%;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 24px;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
`;

const Button = styled.button`
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: #0077cc;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #005fa3;
    }
`;

const RegisterLink = styled.p`
    margin-top: 16px;
    font-size: 14px;
    text-align: center;

    a {
        color: #0077cc;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const GoBackButton = styled.button`
    margin-top: 16px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: #e6e6e6;
    color: #333;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }
`;

export { LoginPage };
