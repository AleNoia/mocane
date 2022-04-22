interface CardProps {
    children: any;
}

export default function FooterCard(props: CardProps) {
    return <div className="mb-7 w-full h-full">{props.children}</div>;
}
