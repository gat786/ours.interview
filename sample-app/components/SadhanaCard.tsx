import Image from "next/image";

import styles from "components/components.module.css";
export interface SadhanaCardProps {
  title: string;
  icon: string;
  cardBg: string;
  leadBy?: string;
  alumniOf?: string;
  artists?: string[];
  description: string;
  minutes: number;
  startTime: string;
}

const SadhanaCard = (props: SadhanaCardProps) => {
  return (
    <div className="flex md:flex-row flex-col gap-9">
      <div
        style={{ backgroundColor: props.cardBg }}
        className="w-60 h-44 flex-shrink-0 rounded-3xl flex flex-col relative justify-center"
      >
        <div className="relative h-2/3">
          <Image src={props.icon} className="object-none" layout="fill" />
        </div>
        <div className="absolute top-4 left-4 bg-white px-2 rounded-md">
          <p className="text-sm">{props.startTime}</p>
        </div>
      </div>

      <div className={`relative text-gray-800 ${styles.sadhanaCardText}`}>
        <p className="absolute top-0 right-0 text-primary">
          {props.minutes} min
        </p>
        <p className="font-bold nunito text-xl mbe-1 ">{props.title}</p>
        {props.leadBy ? (
          <div className="mbe-4">
            <p>
              Led by <strong>{props.leadBy}</strong>
            </p>
            <p>
              Alumni of <strong>{props.alumniOf}</strong>
            </p>
          </div>
        ) : (
          <p className="text-sm mbe-4">
            Artists <strong>{props.artists?.join(" + ")}</strong>
          </p>
        )}

        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default SadhanaCard;
