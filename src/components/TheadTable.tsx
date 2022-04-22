import CheckBox from "./CheckBox";

interface TheadTableProps {
    data: Array<any>;
    haveCheckbox?: Boolean;
}

export default function Table(props: TheadTableProps) {
    return (
        <>
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        {props.haveCheckbox ? <CheckBox /> : null}
                    </th>
                    {props.data.map((item, i) => (
                        <th key={item.name} scope="col" className="px-6 py-3">
                            {item.name}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    );
}
