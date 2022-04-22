interface TitletProps {
    children: string;
}

export default function Title(props: TitletProps) {
    return (
        <h1 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            {props.children}
        </h1>
    );
}
