import DetailCard from "./DetailCard";

export default function ZkbParcoursInformatik() {
  const imageUrl = "/assets/bilder/kantonalbankSchnupperparcoursInformatik.png";
  const docUrl = "/assets/pdfs/kantonalbankSchnupperparcoursInformatik.pdf";

  return (
    <DetailCard
      title="ZKB – Schnupperparcours Informatik"
      subtitle="Einblick in IT‑Ausbildung, Web‑Übungen und Austausch mit Lernenden"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Informatik‑Schnuppertag mit Website‑Übungen (HTML/CSS), Logikaufgaben und Einblick in den Lehrablauf.
      Austausch mit Lernenden, Mitarbeitenden und Personalverantwortlichen.
    </DetailCard>
  );
}


