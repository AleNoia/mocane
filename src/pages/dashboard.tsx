import type { NextPage } from "next";
import HeaderCard from "../components/HeaderCard";
import Layout from "../components/LayoutAdmin";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import ContentCard from "../components/ContentCard";
import Hero from "../components/Hero";
import Chart from "../components/Chart";
import Data from "./database";
import Table from "../components/Table";
import Card from "../components/Card";
import Footer from "../components/Footer";
import GroupDataCard from "../components/GroupDataCard";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
    const { unitsTotalSale, productTotalSale } = useSelector(
        (state: any) => state.sales
    );
    const tHead = [{ name: "Unidade" }, { name: "vendas" }];
    console.log(Data);

    return (
        <Layout>
            <Hero data={Data.sales} />

            <main className="z-10 h-64 w-12/12 px-4 py-10">
                <div className="w-full h-full">
                    <section className="grid grid-cols-3 gap-4 mb-10">
                        <div className="col-span-2">
                            <Card>
                                <HeaderCard>
                                    <div>
                                        <Title>Gráfico de vendas</Title>
                                        <Subtitle>
                                            Valores vendidos durante 6 meses
                                        </Subtitle>
                                    </div>
                                </HeaderCard>
                                <ContentCard>
                                    <Chart />
                                </ContentCard>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card>
                                <HeaderCard>
                                    <div>
                                        <Title>Ranking de unidades</Title>
                                        <Subtitle>
                                            Ranking das melhores 5 unidades
                                        </Subtitle>
                                    </div>
                                </HeaderCard>
                                <ContentCard>
                                    <Table
                                        data={unitsTotalSale}
                                        tHead={tHead}
                                    />
                                </ContentCard>
                            </Card>
                        </div>
                    </section>
                    <section className="grid grid-cols-3 gap-4 mb-10">
                        <div className="col-span-1">
                            <Card>
                                <HeaderCard>
                                    <div>
                                        <Title>Ranking de produtos</Title>
                                        <Subtitle>
                                            Ranking dos melhores 5 produtos
                                        </Subtitle>
                                    </div>
                                </HeaderCard>
                                <ContentCard>
                                    <Table
                                        data={productTotalSale}
                                        tHead={tHead}
                                    />
                                </ContentCard>
                            </Card>
                        </div>
                        <div className="col-span-2">
                            <GroupDataCard />
                        </div>
                    </section>
                    <Footer />
                </div>
            </main>
        </Layout>
    );
};

export default Home;
