interface CardProps {
  children: any;
}

export default function FooterCard(props: CardProps) {
  return <div className="flex align-center justify-end">{props.children}</div>;
}
