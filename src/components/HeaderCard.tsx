interface CardProps {
    children: any;
}

export default function HeaderCard(props: CardProps) {
    return (
        <div className="flex align-center justify-between mb-5">
            {props.children}
        </div>
    );
}
