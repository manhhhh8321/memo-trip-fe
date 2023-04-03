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
