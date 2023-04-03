import { Navbar } from "@layouts";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LazyLoadComponent from "react-lazy-load";
import { axiosClient } from "@api";
import { debounce } from "lodash";
import { DESCRIPTION } from "@configs";
import { ApartmentIcon, HouseIcon, VillaIcon } from "@assets";

export const HomePage = () => {
    const [rooms, setRooms] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchRooms = async (pageNumber: any) => {
        setLoading(true);
        const { data } = await axiosClient.get(`/room?page=${pageNumber}&limit=${limit}`);
        if (data.data.items.length < limit) {
            setHasMore(false);
        }
        setRooms((prevRooms) => [...prevRooms, ...data.data.items]);
        setLoading(false);
    };

    const handleScroll = debounce(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
            setPage((prevPage) => prevPage + 1); // use functional update
        }
    }, 500);

    useEffect(() => {
        fetchRooms(page);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderRooms = () => {
        return rooms.map((room: any) => (
            <LazyLoadComponent key={room.id}>
                <Room>
                    <RoomImage src={room.image} />
                    <RoomDetails>
                        <RoomAddress>{room.address}</RoomAddress>
                        <RoomDescription>{room.description.name}</RoomDescription>
                        <RoomPrice>{room.price} VND</RoomPrice>
                    </RoomDetails>
                </Room>
            </LazyLoadComponent>
        ));
    };

    return (
        <StyledHome>
            <Navbar />
            <DescriptionContainer>
                {DESCRIPTION.map((item) => (
                    <React.Fragment key={item}>
                        {item === "House" && <HouseIcon />}
                        {item === "Apartment" && <ApartmentIcon />}
                        {item === "Villa" && <VillaIcon />}
                        {/* {item === "Condo" && <CondoIcon />}
                        {item === "Townhouse" && <TownhouseIcon />}
                        {item === "Cabin" && <CabinIcon />}
                        {item === "Bungalow" && <BungalowIcon />}
                        {item === "Loft" && <LoftIcon />}
                        {item === "Studio" && <StudioIcon />}
                        {item === "Treehouse" && <TreehouseIcon />}
                        {item === "Boat" && <BoatIcon />} */}
                    </React.Fragment>
                ))}
            </DescriptionContainer>
            <RoomsContainer>{renderRooms()}</RoomsContainer>
            {loading && <p>Loading...</p>}
            <Footer>&copy; 2023 Memorable Trip Co.Ltd</Footer>
        </StyledHome>
    );
};

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RoomsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 5rem;
    align-items: center;
    justify-content: center;
`;

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    padding: 0.5rem;

    svg {
        margin-right: 0.5rem;
    }
`;

const Room = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 300px;
`;

const RoomImage = styled.img`
    height: 200px;
    object-fit: cover;
    width: 100%;
`;

const RoomDetails = styled.div`
    background-color: #f2f2f2;
    padding: 1rem;
`;

const RoomAddress = styled.h3`
    font-size: 1.2rem;
    margin: 0;
`;

const RoomDescription = styled.p`
    font-size: 0.9rem;
    margin: 0;
`;
const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2f2f2;
    text-align: center;
    padding: 1rem;
`;

const RoomPrice = styled.p`
    font-size: 1.2rem;
    margin: 0;
`;
