import { useCallback } from "react";

interface CardDashbaordProps {
    data: any;
    text: string;
    icon: any;
    color: string;
    isPercentage?: Boolean;
}

export default function CardDashbaord(props: CardDashbaordProps) {
    const classFontColor = useCallback(() => {
        if (props.isPercentage) {
            return Number(props.data.replace("%", "")) <= 0
                ? "text-red-500"
                : "text-green-500";
        }
        return "text-grey-900";
    }, []);

    return (
        <div className="xl:w-3/12 md:w-3/12 p-4 ">
            <div className="p-6 rounded-lg bg-white">
                <div
                    className={`w-14 h-14 inline-flex items-center justify-center rounded-full ${props.color} text-white mb-4`}
                >
                    {props.icon}
                </div>
                <div className="flex w-100 flex-col items-end justify-end">
                    <h2
                        className={`text-4xl ${classFontColor()} font-bold title-font mb-2`}
                    >
                        {props.data}
                    </h2>
                    <p className="leading-relaxed text-base font-medium text-slate-500">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    );
}
