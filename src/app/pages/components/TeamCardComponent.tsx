import Image, { StaticImageData } from 'next/image';

type TeamTypes = {
    pic: StaticImageData,
    name: string;
    totalEvents: number;
    sport: string;
}

type TeamCardStyle = {
    backgroundColor: string;
    textColor: string;
    secondaryBackgroundColor: string;
}

const TeamCard = (props: { sport: TeamTypes, cardColor: TeamCardStyle }) => {
    return (
        <div className={`w-max p-2 bg-[${props.cardColor.backgroundColor}] text-[${props.cardColor.textColor}] shadow-xl`}>
            <Image src={props.sport.pic}
                alt="Image"
                width={250}
            /><br />
            <span className="font-bold">{props.sport.name}</span>
            <div className={`flex mt-2 px-4 py-2 bg-[${props.cardColor.secondaryBackgroundColor}]`}>
                <div className="mr-10">
                    <span className="font-light text-sm">Total Events</span> <br />
                    <span className="font-semibold">{props.sport.totalEvents} Events</span>
                </div>
                <div>
                    <span className="font-light text-sm">Sport</span><br />
                    <span className="font-semibold">{props.sport.sport}</span>
                </div>
            </div>
        </div>
    );
};

export type { TeamTypes, TeamCardStyle };
export default TeamCard;
