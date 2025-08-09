import DetailCard from "./DetailCard";

export default function SunriseDetail() {
  const imageUrl = "/assets/bilder/sunrise.png";
  const docUrl = "/assets/pdfs/sunrise.pdf";

  return (
    <DetailCard
      title="Sunrise GmbH – Kaufmann EFZ"
      subtitle="Einblick in kaufmännische Tätigkeiten in der Telekommunikationsbranche"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Teilnahme an einem Informationstag mit Einblicken in kaufmännische Tätigkeiten in der Telekommunikationsbranche.
    </DetailCard>
  );
}


