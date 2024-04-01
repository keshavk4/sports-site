"use client";

import Image from "next/image";
import { useState } from "react";
import { advertisements, teams } from "@/app/variables";
import CarouselComponent from "@/app/pages/components/CarouselComponent";
import { TicketCardStyle } from "@/app/pages/components/TicketCardComponent";
import TeamCard, { TeamCardStyle, TeamTypes } from "@/app/pages/components/TeamCardComponent";
import AdvertisementComponent, { AdvertisementStyle } from "@/app/pages/components/adComponent";

import DayNightIconLight from "/public/assets/icons/icons8-day-and-night-50 (light).png";
import DayNightIconDark from "/public/assets/icons/icons8-day-and-night-50 (dark).png";

interface HomepageStyle {
    backgroundColor: string;
    textColor: string;
    midSectionStyle: string;
}

export const HomePage = () => {
    const [isDay, setIsDay] = useState<boolean>(true);
    const [homepageStyle, setHomepageStyle] = useState<HomepageStyle>({
        backgroundColor: "#F7F7F8",
        textColor: "#000000",
        midSectionStyle: "bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]"
    });

    const [teamCardStyle, setTeamCardStyle] = useState<TeamCardStyle>({
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
        secondaryBackgroundColor: "#F7F7F8"
    });

    const [advertisementsStyle, setAdvertisementsStyle] = useState<AdvertisementStyle>({
        backgroundColor: "#FFFFFF",
        textColor: "#222D3A",
        secondaryTextColor: "#525965"
    });

    const [ticketstyle, setTicketStyle] = useState<TicketCardStyle>({
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
        secondaryTextColor: "#1D1D1F",
        circularColor: "#F0F4FF"
    });

    /**
     * Handles the click event and toggles the day/night mode styles.
     */
    const handleThemeMode = () => {
        setIsDay(!isDay);
        if (isDay) {
            setHomepageStyle({
                backgroundColor: "#F7F7F8",
                textColor: "#000000",
                midSectionStyle: "bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]"
            });

            setTeamCardStyle({
                backgroundColor: "#FFFFFF",
                textColor: "#000000",
                secondaryBackgroundColor: "#F7F7F8"
            });

            setAdvertisementsStyle({
                backgroundColor: "#FFFFFF",
                textColor: "#222D3A",
                secondaryTextColor: "#525965"
            });

            setTicketStyle({
                backgroundColor: "#FFFFFF",
                textColor: "#000000",
                secondaryTextColor: "#1D1D1F",
                circularColor: "#F0F4FF"
            });

        } else {
            setHomepageStyle({
                backgroundColor: "#292B32",
                textColor: "#FFFFFF",
                midSectionStyle: "bg-gradient-to-b from-[#18282A] to-[#020024]"
            });

            setTeamCardStyle({
                backgroundColor: "#3B3E47",
                textColor: "#FFFFFF",
                secondaryBackgroundColor: "#292B32"
            });

            setAdvertisementsStyle({
                backgroundColor: "#3B3E47",
                textColor: "#FFFFFF",
                secondaryTextColor: "#DFDFDF"
            });

            setTicketStyle({
                backgroundColor: "#3B3E47",
                textColor: "#FFFFFF",
                secondaryTextColor: "#DFDFDF",
                circularColor: "#080A25"
            });
        }
    };

    return (
        <section className={`p-4 bg-[${homepageStyle.backgroundColor}]`}>
            <section className="w-max mx-auto">
                <div className="flex justify-between">
                    <h1 className={`w-max border-b-4 border-b-[#738FFF] text-4xl font-extrabold text-[${homepageStyle.textColor}]`}>Sports</h1><br />
                    <Image
                        src={isDay ? DayNightIconDark : DayNightIconLight}
                        alt="Day and Night Icon"
                        width={50}
                        height={50}
                        className="relative right-[2%]"
                        onClick={handleThemeMode}
                    />
                </div>
                <br />
                <div className="flex">
                    {
                        teams.map((sport: TeamTypes, index: number) => (
                            <div key={index} className="flex">
                                <div key={index} className="mr-4">
                                    <TeamCard key={index} sport={sport} cardColor={teamCardStyle} />
                                </div>
                                {(index + 1) % 4 === 0 &&
                                    <div className="mr-4">
                                        <AdvertisementComponent advertisement={advertisements} adStyle={advertisementsStyle} />
                                    </div>}
                            </div>
                        ))
                    }
                </div>
                <br /><br />
                <button className="block w-max mx-auto bg-[#2C9CF0] px-8 py-4 text-white">See More</button>
            </section>

            <br /><br /><br /><br />

            <section className={`py-12 ${homepageStyle.midSectionStyle}`}>
                <h1 className={`w-max mx-auto text-4xl font-extrabold text-[${homepageStyle.textColor}]`}>Collection Spotlight</h1><br />
                <p className={`w-[80%] mx-auto text-center text-[${homepageStyle.textColor}]`}>Discover extraordinary moments with our Spotlight Collection metatickets - exclusive access to premium events for an unforgettable experience. Grab yours today!</p><br /><br />
                <CarouselComponent ticketstyle={ticketstyle} />
            </section>
        </section>
    );
}