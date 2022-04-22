import { useCallback } from "react";
import CheckBox from "./CheckBox";

interface RowProps {
    data: Array<any>;
}

export default function Row(props: RowProps) {
    const getFormattedValue = useCallback(
        (number, style = "currency") =>
            parseFloat(number).toLocaleString("pt-BR", {
                style,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                ...(style === "currency" && { currency: "BRL" }),
            }),
        []
    );

    return (
        <>
            {props.data.map((item, i) => (
                <tr
                    key={item.name}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <td className="w-4 p-4">{i + 1}</td>
                    <td scope="col" className="px-6 py-3">
                        {item.name}
                    </td>
                    <td scope="col" className="px-6 py-3">
                        {getFormattedValue(item.value)}
                    </td>
                </tr>
            ))}
        </>
    );
}
