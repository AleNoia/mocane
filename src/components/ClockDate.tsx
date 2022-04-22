import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar, Clock } from "./Icons";

export default function Hero() {
    const [clock, setClock] = useState("00:00:00");
    const [today, setToday] = useState(format(new Date(), "dd/MM/yyyy"));

    useEffect(() => {
        setTimeout(
            () => setClock(new Date().toLocaleTimeString("pt-BR")),
            1000
        );
        setToday(format(new Date(), "dd/MM/yyyy"));
    }, [clock]);

    return (
        <div className="flex text-white font-bold">
            <div className="flex text-white font-bold">
                <Calendar className="mr-2" />
                <span className="text-base text-white mr-5">{today}</span>
            </div>
            <div className="flex text-white font-bold">
                <Clock className="mr-2" />
                <span className="text-base text-white mr-5">{clock}</span>
            </div>
        </div>
    );
}
