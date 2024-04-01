import Image, { StaticImageData } from "next/image";

export type TicketTypes = {
    pic: StaticImageData,
    team: string;
    date: string;
    day: string;
    time: string;
    venue: string;
}

export type TicketCardStyle = {
    backgroundColor: string;
    textColor: string;
    secondaryTextColor: string;
    circularColor?: string;
}

const TicketCard = (props: { collection: TicketTypes, ticketstyle: TicketCardStyle }) => {
    return (
        <div className={`w-max p-2 bg-[${props.ticketstyle.backgroundColor}] shadow-xl mr-8`}>
            <Image src={props.collection.pic}
                alt="Image"
                width={250}
                className="mx-auto"
            />
            <div className="flex justify-between">
                <div className={`relative h-6 w-7 bg-[${props.ticketstyle.circularColor}] rounded-[50%] left-[-1.25rem] bottom-[-0.70rem]`}></div>
                <span className="border-b-4 border-[#A9ACB2] border-dashed h-6 w-full"></span>
                <div className={`relative h-6 w-7 bg-[${props.ticketstyle.circularColor}] rounded-[50%] right-[-1.25rem] bottom-[-0.70rem]`}></div>
            </div><br />
            <div className={`w-[90%] mx-auto text-center text-[${props.ticketstyle.textColor}]`}>
                <span className="font-semibold text-lg">{props.collection.team}</span> <br />
                <span className="font-medium text-sm">{props.collection.date} | {props.collection.day} | {props.collection.time}</span><br />
                <span className={`font-light text-sm text-[${props.ticketstyle.secondaryTextColor}]`}>{props.collection.venue}</span><br />
                <button className="mt-2 w-full px-4 py-2 bg-[#1D1D1F] text-white">Take Flight Collection</button>
            </div>
        </div>
    );
}

export default TicketCard;