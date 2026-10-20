type Props = {
  title: string;
  items: string[];
};

function InfoList({ title, items }: Props) {
  return (
    <div className="list-block">
      <h2>{title}</h2>
      <ul className="info-list">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default InfoList
