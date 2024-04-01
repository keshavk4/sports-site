import { TeamTypes } from "@/app/pages/components/TeamCardComponent";
import { TicketTypes } from "@/app/pages/components/TicketCardComponent";

import Pic1 from "/public/assets/images/sacramento.png";
import Pic2 from "/public/assets/images/las vegas.png";
import Pic3 from "/public/assets/images/new jersey.png";

import Team from "/public/assets/images/collection.png";
import Team2 from "/public/assets/images/collection2.png";

import Advertisement from "/public/assets/images/ad.png";
import { AdvertisementTypes } from "@/app/pages/components/adComponent";

const teams: TeamTypes[] = [
    {
        pic: Pic1,
        name: "Sacramento River Cats",
        totalEvents: 48,
        sport: "Baseball"
    },
    {
        pic: Pic2,
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sport: "Baseball"
    },
    {
        pic: Pic3,
        name: "New Jersey Devils",
        totalEvents: 15,
        sport: "Ice Hockey"
    },
    {
        pic: Pic2,
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sport: "Baseball"
    },

];

const collections: TicketTypes[] = [
    {
        pic: Team,
        team: "Las Vegas Aviators",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        venue: "Las Vegas Ballpark, Las Vegas, Nevada"
    },
    {
        pic: Team2,
        team: "Sacramento River Cats",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        venue: "Sutter Health Park, Sacramento, California"
    },
    {
        pic: Team,
        team: "Las Vegas Aviators",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        venue: "Las Vegas Ballpark, Las Vegas, Nevada"
    },
    {
        pic: Team2,
        team: "Sacramento River Cats",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        venue: "Sutter Health Park, Sacramento, California"
    },
    {
        pic: Team,
        team: "Las Vegas Aviators",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        venue: "Las Vegas Ballpark, Las Vegas, Nevada"
    }
];

const advertisements: AdvertisementTypes = {
    pic: Advertisement,
    title: "Advertisement Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

export { teams, collections, advertisements };