import { createSlice } from "@reduxjs/toolkit";
import Data from "../../pages/database";

// Retornar a quantidade de vendas
const getSales = () => {
    return Data.sales.length;
};

// Retornar a quantidade total de itens vendidos
const getTotalSales = () => {
    const values = Data.sales.map((value) => {
        return Number(value.quantidade);
    });
    return values.reduce(function (soma, i) {
        return soma + i;
    });
};

// Retornar os meses, em número, que houveram vendas
const getMonths = () => {
    const gettingMonths = Data.sales.map((sale) => {
        return sale.data.split("/")[0];
    });

    return [...new Set(gettingMonths)];
};

// Retornar o nome das unidades
const getUnits = () => {
    const gettingMonths = Data.sales.map((sale) => {
        return sale.unidade;
    });

    return [...new Set(gettingMonths)];
};

// Retornar o nome dos produtos
const getProducts = () => {
    const gettingProducts = Data.sales.map((sale) => {
        return sale.produto;
    });

    return [...new Set(gettingProducts)];
};

// Retornar as vendas separadas pelo mês
const getMonthsSales = () => {
    const gettingMonthsSales = getMonths().map((month) => {
        return Data.sales.filter((sale) => {
            const months = sale.data.split("/")[1] === month;
            return months;
        });
    });
    return gettingMonthsSales;
};

// Retornar as unidades
const getUnitsData = () => {
    const gettingMonthsSales = getUnits().map((unit) => {
        return Data.sales.filter((sale) => {
            const units = sale.unidade === unit;
            return units;
        });
    });
    return gettingMonthsSales;
};

// Retornar as vendas das unidades
const getUnitsSales = () => {
    return getUnits().map((unit) => {
        return Data.sales.filter((sale) => {
            const units = sale.unidade === unit;
            return units;
        });
    });
};

// Retornar as vendas dos produtos
const getProdutSales = () => {
    return getProducts().map((produto) => {
        return Data.sales.filter((sale) => {
            const units = sale.produto === produto;
            return units;
        });
    });
};

// Retornar os valores das vendas das unidades
const getUnitsSalesValue = () => {
    return getUnitsSales().map((value) => {
        return value.map((value) => {
            return value.valor_total;
        });
    });
};

// Retornar os valores das vendas dos produtos
const getProductSalesValue = () => {
    return getProdutSales().map((value) => {
        return value.map((value) => {
            return value.valor_total;
        });
    });
};

// Retornar os valores totais das vendas das unidades
const getUnitsTotalSale = () => {
    const valuesSales = getUnitsSalesValue().map((value) => {
        return value.reduce(function (soma, i) {
            return Number(soma) + Number(i);
        });
    });
    return [
        { name: "DIRCEU", value: valuesSales[0] },
        { name: "MOCAMBINHO", value: valuesSales[1] },
        { name: "CENTRO", value: valuesSales[2] },
        { name: "PEDRA MOLE", value: valuesSales[3] },
        { name: "PARQUE PIAUI", value: valuesSales[4] },
    ].sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
};

// Retornar os valores totais das vendas dos produtos
const getProductTotalSale = () => {
    const valuesSales = getProductSalesValue().map((value) => {
        return value.reduce(function (soma, i) {
            return Number(soma) + Number(i);
        });
    });
    return [
        { name: "Camisa Oxford", value: valuesSales[0] },
        { name: "Camiseta Pima", value: valuesSales[1] },
        { name: "Camiseta Navy", value: valuesSales[2] },
        { name: "Camisa Linho", value: valuesSales[3] },
        { name: "Camiseta Joa", value: valuesSales[4] },
    ].sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
};

// Retornar o valor total de venda de um mês em específico
const getTotalSellMonth = (index) => {
    const values = getMonthsSales()[index].map((value) => {
        return Number(value.valor_total);
    });
    return values.reduce(function (soma, i) {
        return soma + i;
    });
};

// Retornar o valor total das vendas
const getTotalValueSales = () => {
    const values = Data.sales.map((value) => {
        return Number(value.valor_total);
    });
    return values.reduce(function (soma, i) {
        return soma + i;
    });
};

// Retornar os valores totais das vendas separadas por meses
const getSalesValuesByMonth = () => {
    return getMonthsSales().map((value) => {
        const months = value.map((value) => {
            return value.valor_total;
        });
        return months;
    });
};

// Retorna o valor total vendido por mês
const getSalesValueTotalByMonth = () => {
    const valueMonths = getSalesValuesByMonth().map((value) => {
        return value.reduce(function (soma, i) {
            return Number(soma) + Number(i);
        });
    });
    return valueMonths;
};

// Retornar a média de venda por mês
const getAverageSales = () => {
    const sum = getSalesValueTotalByMonth().reduce(function (soma, i) {
        return soma + i;
    });
    return sum / getMonths().length;
};

// Retornar o crescimento da empresa em compração ao mês anterior
const getGrowthByMonth = () => {
    const newAray = getSalesValueTotalByMonth();
    const secondLast = getSalesValueTotalByMonth().slice(-2, -1);
    const last = newAray.pop();

    return (Number(last) / Number(secondLast) - 1) * 100;
};

console.log(getProductTotalSale());
console.log(getProducts());

const salesSlice = createSlice({
    name: "sales",
    initialState: {
        sales: Data.sales,
        clientes: getSales(),
        totalSales: getTotalSales(),
        months: getMonths(),
        monthsSales: getMonthsSales(),
        averageSales: getAverageSales(),
        totalValueSales: getTotalValueSales(),
        growthByMonth: getGrowthByMonth(),
        salesValueTotalByMonth: getSalesValueTotalByMonth(),
        qtdUnits: getUnits().length,
        getUnitsData: getUnitsData(),
        unitsTotalSale: getUnitsTotalSale(),
        productTotalSale: getProductTotalSale(),
    },
    reducers: {},
});

export default salesSlice.reducer;
