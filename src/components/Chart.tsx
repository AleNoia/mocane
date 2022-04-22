import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        Mês: "Julho",
        Valor: 16523.5,
    },
    {
        Mês: "Agosto",
        Valor: 14942.9,
    },
    {
        Mês: "Setembro",
        Valor: 14442.6,
    },
    {
        Mês: "Outubro",
        Valor: 15696.7,
    },
    {
        Mês: "Novembro",
        Valor: 17559.6,
    },
    {
        Mês: "Dezembro",
        Valor: 15450.09,
    },
];

function Chart() {
    function numberFormatter(num: any) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "Mi" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        const item = lookup
            .slice()
            .reverse()
            .find((val) => num >= val.value);
        return item
            ? `R$ ${(num / item.value).toFixed(2).replace(rx, "$1")}${
                  item.symbol
              }`
            : "0";
    }

    return (
        <div className="w-full h-full">
            <ResponsiveContainer width={"99%"} height={300}>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Mês" scale="band" />
                    <YAxis tickFormatter={numberFormatter} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Valor" barSize={60} fill="#44A1DB" />
                    <Line
                        type="linear"
                        dataKey="Valor"
                        stroke="#FFC300"
                        strokeWidth={2.5}
                        dot={{ r: 4 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
