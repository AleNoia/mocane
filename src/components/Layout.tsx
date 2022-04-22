import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
    children: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex items-center justify-center `}>
            <div
                className={`fixed w-screen h-screen bg-gradient-to-r from-[#4facfe] to-[#00f2fe]`}
            ></div>
            <div className={`grid grid-cols-3 gap-4 h-screen z-10`}>
                <div className={`flex justify-end h-screen items-start`}>
                    <div className={"h-screen"}>
                        <Sidebar />
                    </div>
                </div>
                <div
                    className={`flex min-w-full items-center flex-col justify-between mt-5`}
                >
                    <section
                        className={`flex min-w-full flex-col justify-center items-center mb-5`}
                    >
                        <main className={`min-w-full`}>{props.children}</main>
                    </section>
                    <Footer />
                </div>
                <div></div>
            </div>
        </div>
    );
}
