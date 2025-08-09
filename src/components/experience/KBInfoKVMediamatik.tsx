import DetailCard from "./DetailCard";

export default function KBInfoKVMediamatik() {
  const imageUrl = "/assets/bilder/KBInfoKVMediamatik.png";
  const docUrl = "/assets/pdfs/KBInfoKVMediamatik.pdf";

  return (
    <DetailCard
      title="ZKB – Informationsveranstaltung KV Branche Bank & Mediamatik"
      subtitle="Einblick in KV Bank & Mediamatik, Lehrablauf und Austausch mit Lernenden"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Informationsveranstaltung in der ZKB mit Überblick zu KV Branche Bank und Mediamatik, Einblick in
      Tätigkeiten, Ausbildungsweg und Bewerbungsprozess.
    </DetailCard>
  );
}


