function InfoList({ title }: { title: string }) {
  return (
    <div className="list-block">
      <h2>{title}</h2>
      <ul className="info-list">
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
      </ul>
    </div>
  )
}

export default InfoList
