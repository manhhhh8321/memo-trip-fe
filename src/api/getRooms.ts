import { axiosClient } from "./axiosClient";

export const getRooms = async (page: any) => {
    const query = {
        page: page,
    };

    if (page) {
        const { data } = await axiosClient.get(`/rooms`, { params: query });
        return data;
    }
    const { data } = await axiosClient.get("/rooms");
    return data;
};
