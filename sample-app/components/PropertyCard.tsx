import Image from "next/image";

export interface PropertyProps {
  icon: string;
  title: string;
  subtitle: string;
}

const PropertyCard = (props: PropertyProps) => {
  return (
    <div className="w-60 justify-self-center flex flex-col gap-4 items-center nunito text-center my-8">
      <div className="relative h-12 w-12">
        <Image src={props.icon} layout="fill" />
      </div>
      <p className="font-bold text-xl">{props.title}</p>
      <p className="text-gray-700">{props.subtitle}</p>
    </div>
  );
};

export default PropertyCard;
