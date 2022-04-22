import Sidebar from "./Sidebar";

interface LayoutProps {
    children: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-no-wrap">
            <div className={`fixed w-screen h-screen bg-[#e3f2fd]`}></div>
            <div className={`fixed top-0 left-0 w-screen h-screen`}>
                <Sidebar />
            </div>
            <div className="z-10 w-full ml-64">
                <div>{props.children}</div>
            </div>
        </div>
    );
}
