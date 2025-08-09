import DetailCard from "./DetailCard";

export default function KornhausDetail() {
  const imageUrl = "/assets/bilder/kornhaus.png";
  const docUrl = "/assets/pdfs/kornhaus.pdf";

  return (
    <DetailCard
      title="Kornhaus Verwaltungs AG – KV Treuhand / Immobilien"
      subtitle="Einblicke in Treuhand‑/Immobilienbereich und kaufmännische Abläufe"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Einblicke in die Tätigkeiten im Treuhand‑ und Immobilienbereich, Kennenlernen kaufmännischer Abläufe und
      Rekrutierungsprozesse; Austausch mit Lernenden und Mitarbeitenden.
    </DetailCard>
  );
}


