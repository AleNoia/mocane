interface TitletProps {
    children: string;
}

export default function Title(props: TitletProps) {
    return (
        <p className={`text-base font-normal text-gray-500 dark:text-gray-400`}>
            {props.children}
        </p>
    );
}
