import { useSelector } from "react-redux";
import Card from "../components/Card";

export default function CardDashbaord() {
    const { clientes, qtdUnits, productTotalSale } = useSelector(
        (state: any) => state.sales
    );

    return (
        <Card>
            <div className="flex justify-center h-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10">
                <div className="flex-col gap-10 flex justify-center ">
                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-[#01578E]">
                                {clientes}
                            </h6>
                            <p className="font-bold text-slate-500">
                                Número total de clientes
                            </p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-[#01578E]">
                                {qtdUnits}
                            </h6>
                            <p className="font-bold text-slate-500">
                                Quantidade de unidades
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-[#01578E]">
                                {productTotalSale[0].name}
                            </h6>
                            <p className="font-bold text-slate-500">
                                Produto mais vendidos
                            </p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-[#01578E]">
                                {productTotalSale[4].name}
                            </h6>
                            <p className="font-bold text-slate-500">
                                Produto menos vendidos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
