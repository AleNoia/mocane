import { useMemo, useEffect, useState, useCallback } from "react";
import CardDashbaord from "./CardDashboard";
import { CurrencyDollar, ChartBar, ShoppingCart, Calendar } from "./Icons";
import ClockDate from "./ClockDate";
import { useSelector } from "react-redux";

interface HeroProps {
    data: Array<Object>;
}

export default function Hero(props: HeroProps) {
    const { totalSales, totalValueSales, averageSales, growthByMonth } =
        useSelector((state: any) => state.sales);

    const getFormattedPercentage = useCallback(
        (number) => `${number.toFixed(2)} %`,
        []
    );

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
        <div className="px-4 py-10 bg-gradient-to-br from-[#01395C] via-[#01578E] to-[#44A1DB]  mx-auto">
            <div>
                <div className="flex justify-between mb-10">
                    <h1 className="text-6xl text-white font-bold">Bem vindo</h1>
                    <ClockDate />
                </div>
                <div className="flex flex-wrap -m-4">
                    <CardDashbaord
                        icon={<ShoppingCart />}
                        data={totalSales}
                        color="bg-[#44A1DB]"
                        text="Número total de vendas"
                    />
                    <CardDashbaord
                        icon={<CurrencyDollar />}
                        data={getFormattedValue(totalValueSales)}
                        color="bg-green-500"
                        text="Valor total de vendas"
                    />
                    <CardDashbaord
                        icon={<Calendar />}
                        data={getFormattedValue(averageSales)}
                        color="bg-[#01578E]"
                        text="Média de venda ao mês"
                    />
                    <CardDashbaord
                        icon={<ChartBar />}
                        data={getFormattedPercentage(growthByMonth)}
                        color="bg-yellow-300"
                        isPercentage={true}
                        text="Crescimento da empresa"
                    />
                </div>
            </div>
        </div>
    );
}
