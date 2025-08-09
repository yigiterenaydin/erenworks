import DetailCard from "./DetailCard";

export default function PostDetail() {
  const imageUrl = "/assets/bilder/post.png";
  const docUrl = "/assets/pdfs/post.pdf";

  return (
    <DetailCard
      title="Post Immobilien AG, Zürich – Kaufmann EFZ"
      subtitle="Einblick in kaufmännische Abläufe eines grossen Unternehmens"
      imageUrl={imageUrl}
      docUrl={docUrl}
    >
      Einblick in die kaufmännischen Prozesse und Arbeitsabläufe eines grossen Unternehmens.
    </DetailCard>
  );
}


