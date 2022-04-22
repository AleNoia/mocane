interface CardProps {
    children: any;
    className?: string;
}

export default function Card(props: CardProps) {
    return (
        <div
            className={`p-4 w-full h-max bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 ${props.className}}`}
        >
            {props.children}
        </div>
    );
}
