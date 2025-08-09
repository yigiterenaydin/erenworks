import DetailCard from "./DetailCard";

export default function UbsDetail() {
  const imageUrl = "/assets/bilder/UBS.png";
  const docUrl = "/assets/pdfs/UBS.pdf";

  return (
    <DetailCard
      title="UBS – Kaufmännische Grundbildung"
      subtitle="Einblicke in zentrale Bereiche und Tätigkeiten einer internationalen Bank"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Teilnahme an einem UBS‑Schnuppertag mit spielerischem Einstieg in bankspezifische Themen, Informationen zur
      Lehre und zum Rekrutierungsprozess sowie Austausch mit Lernenden und Mitarbeitenden.
    </DetailCard>
  );
}


