import DetailCard from "./DetailCard";

export default function EwzDetail() {
  const imageUrl = "/assets/bilder/Ewz.png";
  const docUrl: string | null = "/assets/pdfs/ewz.pdf";

  return (
    <DetailCard
      title="EWZ – Berufsinfo Veranstaltung"
      subtitle="Einblicke in kaufmännische und technische Berufsbilder"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Teilnahme an einer Berufsinformationsveranstaltung mit Einblicken in verschiedene kaufmännische und
      technische Berufsbilder sowie Austausch mit Lernenden und Ausbildungsverantwortlichen.
    </DetailCard>
  );
}


