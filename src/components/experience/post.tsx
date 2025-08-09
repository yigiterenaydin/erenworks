import Image from "next/image";
import { FiExternalLink, FiFileText } from "react-icons/fi";

export default function PostDetail() {
  const imageUrl = "/assets/bilder/post.png";
  const docUrl = "/assets/pdfs/post.pdf";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-4 items-start">
        <div className="rounded-lg border border-rose-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-2 shadow-sm flex justify-center">
          <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="block" aria-label="Bild in neuem Tab öffnen">
            <Image
              src={imageUrl}
              alt="Post Immobilien Nachweis"
              width={420}
              height={280}
              className="w-36 sm:w-44 md:w-full h-auto object-contain rounded-md"
              sizes="(max-width: 768px) 9rem, (max-width: 1024px) 11rem, 220px"
              priority
            />
          </a>
        </div>

        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Post Immobilien AG, Zürich – Kaufmann EFZ</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Einblick in kaufmännische Abläufe eines grossen Unternehmens</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            Einblick in die kaufmännischen Prozesse und Arbeitsabläufe eines grossen Unternehmens.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={docUrl}
              download
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-slate-300/70 dark:border-slate-700 hover:bg-rose-50/60 dark:hover:bg-slate-800/60"
            >
              <FiFileText /> Beleg herunterladen
            </a>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-slate-300/70 dark:border-slate-700 hover:bg-rose-50/60 dark:hover:bg-slate-800/60"
            >
              <FiExternalLink /> Im neuen Tab öffnen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


