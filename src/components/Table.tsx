import ToolbarTable from "./ToolbarTable";
import TheadTable from "./TheadTable";
import Row from "./Row";

interface TableProps {
    data: Array<object>;
    tHead: Array<object>;
    haveToolbar?: Boolean;
    haveCheckbox?: Boolean;
}

export default function Table(props: TableProps) {
    return (
        <div className="min-w-full relative overflow-x-auto sm:rounded-lg mb-3">
            {props.haveToolbar ? <ToolbarTable /> : null}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TheadTable
                    data={props.tHead}
                    haveCheckbox={props.haveCheckbox}
                />
                <tbody>
                    <Row data={props.data} />
                </tbody>
            </table>
        </div>
    );
}
