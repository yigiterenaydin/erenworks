import DetailCard from "./DetailCard";

export default function ZkbParcoursKVBank() {
  const imageUrl = "/assets/bilder/kantonalbankparcoursKVBrancheBank.png";
  const docUrl: string | null = "/assets/pdfs/kantonalbankparcoursKVBrancheBank.pdf";

  return (
    <DetailCard
      title="ZKB – Schnupperparcours KV Branche Bank"
      subtitle="Einblick in Filiale, Ausbildungswelt und KV‑Berufsbild"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Schnupperparcours in einer ZKB‑Filiale mit Fokus auf KV Branche Bank: Kennenlernen von Aufgaben,
      Ausbildungsablauf mit drei Lernorten und Austausch mit Lernenden sowie Mitarbeitenden.
    </DetailCard>
  );
}


