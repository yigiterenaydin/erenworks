import DetailCard from "./DetailCard";

export default function KitaDetail() {
  const imageUrl = "/assets/bilder/kita.png";
  const docUrl = "/assets/pdfs/Kita%20Schnupperlehre.pdf";

  return (
    <DetailCard
      title="Kita Bärlis Oerlikon"
      subtitle="Nachweis und kurze Beschreibung"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Unterstützung bei der Betreuung von Kindern im Alter von 0 bis 3 Jahren;
      <br />
      Mithilfe beim Aufräumen sowie bei der Organisation von Materialien.
    </DetailCard>
  );
}


