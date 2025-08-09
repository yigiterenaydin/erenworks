import DetailCard from "./DetailCard";

export default function WeberDetail() {
  const imageUrl = "/assets/bilder/weber.png";
  const docUrl = "/assets/pdfs/weber.pdf";

  return (
    <DetailCard
      title="E. Weber & Cie AG – Kaufmann EFZ"
      subtitle="Vielseitiger Einblick in kaufmännische Abläufe"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Schnuppertag mit Einblicken in Kundendienst, Buchhaltung, Einkauf, Marketing und Verkauf.
    </DetailCard>
  );
}


