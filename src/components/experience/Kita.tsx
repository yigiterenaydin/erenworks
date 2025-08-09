import Image from "next/image";

export default function KitaDetail() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Kita Bärlis Oerlikon</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Nachweis und kurze Beschreibung</p>
      </div>

      <div className="rounded-xl border border-rose-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-3 shadow-sm">
        <Image
          src="/assets/bilder/kita.png"
          alt="Kita Nachweis"
          width={1200}
          height={800}
          className="w-full h-auto object-contain rounded-lg"
          priority
        />
      </div>

      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
        Unterstützung bei der Betreuung von Kindern im Alter von 0 bis 3 Jahren; Mithilfe beim Aufräumen
        sowie bei der Organisation von Materialien.
      </p>

      <div className="flex items-center gap-3">
        <a
          href="/assets/bilder/kita.png"
          download
          className="text-sm px-3 py-1.5 rounded-full border border-slate-300/70 dark:border-slate-700 hover:bg-rose-50/60 dark:hover:bg-slate-800/60"
        >
          Herunterladen
        </a>
      </div>
    </div>
  );
}


