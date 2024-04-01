"use client";

import Image from 'next/image';
import { useState } from "react";
import { collections } from "@/app/variables";
import TicketCard, { TicketCardStyle } from "@/app/pages/components/TicketCardComponent";

import NextIcon from "/public/assets/icons/next.svg";
import PrevIcon from "/public/assets/icons/prev.svg";

const CarouselComponent = (props: { ticketstyle: TicketCardStyle }) => {
    const CollectionCards: JSX.Element[] = collections.map((collection: any, index: number) => (<TicketCard key={index} collection={collection} ticketstyle={props.ticketstyle} />));

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = CollectionCards.slice(startIndex, endIndex);

    /**
     * Function to go to the next page in the carousel.
     */
    const goToNextPage = () => {
        setCurrentPage((prevPage: any) => prevPage + 1);
    };

    /**
     * Function to navigate to the previous page in the carousel.
     */
    const goToPreviousPage = () => {
        setCurrentPage((prevPage: any) => prevPage - 1);
    };

    function SamplePrevArrowComponent() {
        return (
            <Image
                src={PrevIcon}
                alt="Image"
                width={25}
                className="relative top-[30%] left-[25%] my-4"
            />
        );
    }

    function SampleNextArrowComponent() {
        return (
            <Image
                src={NextIcon}
                alt="Image"
                width={25}
                className="relative left-[30%] my-4"
            />
        );
    }

    return (
        <div className="flex mx-auto h-max w-[90%]">
            <button onClick={goToPreviousPage} disabled={currentPage === 0} className="my-auto w-[5%] h-[20%] border-4 border-[#2C9CF0]">
                <SamplePrevArrowComponent />
            </button>
            <div className="w-max mx-auto">
                <div className="flex flex-row min-w-[75%]">
                    {itemsToShow}
                </div>
            </div>
            <button onClick={goToNextPage} disabled={endIndex >= CollectionCards.length} className="my-auto w-[5%] h-[20%] border-4 border-[#2C9CF0]">
                <SampleNextArrowComponent />
            </button>
        </div>
    );
}

export default CarouselComponent;