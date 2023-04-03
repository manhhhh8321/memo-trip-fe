interface IIcon {
    width?: number;
    height?: number;
}

export const LogoIcon = (props: IIcon) => {
    return (
        <svg
            width={props?.width || 48}
            height={props?.height || 48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M43.7333 35.1947L28.3719 10.667L4.2666 34.723L6.06268 37.6003L27.663 16.0442C29.2701 19.4404 30.1208 23.1667 30.1208 26.9402C30.1208 30.1949 29.5063 33.3552 28.3247 36.374L31.397 37.6003C32.7677 34.2042 33.4294 30.6193 33.4294 26.9402C33.4294 26.2326 33.3822 25.478 33.3348 24.7704L41.37 37.6003L43.7333 35.1947Z"
                fill="white"
            />
        </svg>
    );
};

export const PadlockIcon = () => {
    return (
        <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 7.16634V5.83301C4 3.62634 4.66667 1.83301 8 1.83301C11.3333 1.83301 12 3.62634 12 5.83301V7.16634"
                stroke="white"
                stroke-opacity="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11.3335 15.167H4.66683C2.00016 15.167 1.3335 14.5003 1.3335 11.8337V10.5003C1.3335 7.83366 2.00016 7.16699 4.66683 7.16699H11.3335C14.0002 7.16699 14.6668 7.83366 14.6668 10.5003V11.8337C14.6668 14.5003 14.0002 15.167 11.3335 15.167Z"
                stroke="white"
                stroke-opacity="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.6641 11.1663H10.6701"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M7.99715 11.1663H8.00314"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.32967 11.1663H5.33566"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const BackIcon = () => {
    return (
        <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.5249 4.94141L17.5832 9.99974L12.5249 15.0581"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M3.4165 10H17.4415"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const HouseIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 9L12 2L21 9"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9 22V12H15V22"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9 14H15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const ApartmentIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 10.5V9h-1.5v1.5H18zM21 9v1.5h-1.5V9H21zM14.25 9v1.5h-3V9h3zm-4.5 0v1.5h-3V9h3zm-4.5 0v1.5H3V9h2.25zM21 13.5h-3V12h3v1.5zm-4.5 0h-3V12h3v1.5zm-4.5 0h-3V12h3v1.5zm-4.5 0h-3V12h3v1.5zm13.5 1.5H3V15h21v1.5zm0 3H3V18h21v1.5zm0 3H3v-1.5h21V21z" />
        </svg>
    );
};

export const VillaIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 10.5h-3V6h-3v4.5h-3V3h-3v15h3v-4.5h3V21h3V10.5zM6 18H4.5v-4.5H6V18zM9 6V4.5h1.5V6H9zM15 6V4.5h1.5V6H15zM9 21V9h6v12H9zM12 6v1.5h-3V6h3z" />
        </svg>
    );
};
