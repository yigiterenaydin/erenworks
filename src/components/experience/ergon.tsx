import DetailCard from "./DetailCard";

export default function ErgonDetail() {
  const imageUrl = "/assets/bilder/ergon.png";
  const docUrl = "/assets/pdfs/ergon.pdf";

  return (
    <DetailCard
      title="Ergon Smart Software – Informatiker EFZ"
      subtitle="Einblicke in ICT‑Lehrberufe und praktische Übungen"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Mehrere Informationsveranstaltungen zu Informatik und digitalem Business; Kennenlernen der Firma, Projekte,
      Voraussetzungen und Selektionsprozess, inkl. praktischen Übungen.
    </DetailCard>
  );
}


