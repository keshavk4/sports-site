import Image, { StaticImageData } from "next/image";
import Advertisement from "/public/assets/images/ad.png";

export type AdvertisementTypes = {
    pic: StaticImageData,
    title: string;
    description: string;
}

export type AdvertisementStyle = {
    backgroundColor: string;
    textColor: string;
    secondaryTextColor: string;
}

const AdvertisementComponent = (props: { advertisement: AdvertisementTypes, adStyle: AdvertisementStyle }) => {
    return (
        <div className={`w-[250px] h-[36rem] p-2 bg-[${props.adStyle.backgroundColor}] shadow-xl`}>
            <div className="flex">
                <Image src={Advertisement}
                    alt="Image"
                    width={250}
                /><br />
                <span className="h-min px-3 py-1 relative bg-black text-white text-xs right-[2.55rem]">
                    Ad
                </span>
            </div><br />
            <span className={`px-4 py-2 font-bold text-xl text-[${props.adStyle.textColor}]`}>{props.advertisement.title}</span>
            <span className={`block w-[250px] px-4 py-2 text-[${props.adStyle.secondaryTextColor}] text-sm`}>
                {props.advertisement.description}
            </span>
        </div>
    );
}

export default AdvertisementComponent;