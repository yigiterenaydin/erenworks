import DetailCard from "./DetailCard";

export default function KBInforInformatikBus() {
  const imageUrl = "/assets/bilder/KBInforInformatikBus.png";
  const docUrl = "/assets/pdfs/KBInforInformatikBus.pdf";

  return (
    <DetailCard
      title="ZKB – Informationsveranstaltung Informatik & Entwicklung digitales Business"
      subtitle="Überblick zu IT‑/EDB‑Lehre, Bewerbungs‑ und Rekrutierungsprozess"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Beim Kennenlernen der Zürcher Kantonalbank und ihrer Ausbildungswelt erhielt ich Einblicke in den
      Ablauf der IT- und EDB-Lehre, inklusive der drei Lernorte, informierte mich über den Bewerbungs- und
      Rekrutierungsprozess, konnte allgemeine Fragen zu den Lehren klären und mich mit Lernenden sowie
      Ausbildungsverantwortlichen austauschen.
    </DetailCard>
  );
}


