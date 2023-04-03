import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import { AppLayout, AuthLayout } from "@layouts";
import { HomePage, LoginPage } from "@pages";
import { selectAuth, useAppSelector } from "@redux";
import { useEffect } from "react";

export const PATH_LOGIN = "/login";
export const PATH_FORGOT_PASSWORD = "/forgot-password";
export const PATH_VERIFY_CODE = "/verify-code";
export const PATH_RESET_PASSWORD = "/reset-password";

export const PATH_HOME = "/";

const normalRoutes = [PATH_HOME];
const authRoutes = [PATH_LOGIN, PATH_FORGOT_PASSWORD, PATH_VERIFY_CODE, PATH_RESET_PASSWORD];

function Router() {
    const routes = [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: PATH_HOME,
                    element: <HomePage />,
                },
            ],
        },
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: PATH_LOGIN,
                    element: <LoginPage />,
                },
            ],
        },

        {
            path: "*",
            element: <div>error</div>,
        },
    ];

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { auth } = useAppSelector(selectAuth);

    useEffect(() => {
        //WHAT: check normal path
        const isNormalRoute =
            pathname === PATH_HOME
                ? true
                : normalRoutes.some((item: string) => {
                      if (item === PATH_HOME) {
                          return false;
                      }
                      return pathname.includes(item);
                  });

        const isAuthRoute = authRoutes.some((item: string) => pathname.includes(item));
        if (auth) {
            if (isAuthRoute) {
                navigate(PATH_HOME);
            }
        } else if (isNormalRoute) {
            navigate(PATH_LOGIN);
        }
    }, [auth, pathname]);

    return useRoutes(routes);
}

export default Router;
