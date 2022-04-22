import type { NextPage } from "next";
import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";
import Layout from "../components/Layout";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import ContentCard from "../components/ContentCard";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

const Home: NextPage = () => {
    const tHead = [{ name: "Código" }, { name: "Nome" }, { name: "Idade" }];

    const clientes = [
        new Cliente("Ana", 21, "1"),
        new Cliente("Igor", 20, "1"),
        new Cliente("João", 23, "1"),
        new Cliente("Lucas", 21, "1"),
    ];
    return (
        <Layout>
            <Card>
                <HeaderCard>
                    <div>
                        <Title>Title</Title>
                        <Subtitle>Subtitle</Subtitle>
                    </div>
                </HeaderCard>
                <ContentCard>
                    <p className="text-base">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </ContentCard>
            </Card>
            <Table data={clientes} tHead={tHead} />
        </Layout>
    );
};

export default Home;
