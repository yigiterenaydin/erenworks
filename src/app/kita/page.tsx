import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Kita Bärlis Oerlikon – Nachweis",
  description: "Kita-Bescheinigung Vorschau",
};

export default function KitaPage() {
  return (
    <main className="min-h-screen bg-rose-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Kita Bärlis Oerlikon – Nachweis</h1>
          <Link href="/#experience" className="text-sm px-3 py-1.5 rounded-full border border-slate-300/60 dark:border-slate-700 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors">
            Zurück
          </Link>
        </div>

        <div className="rounded-xl border border-rose-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow">
          <div className="w-full flex justify-center">
            <Image
              src="/assets/bilder/kita.png"
              alt="Kita Bescheinigung"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
          <div className="mt-4 text-right">
            <a
              href="/assets/bilder/kita.png"
              download
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-slate-300/60 dark:border-slate-700 hover:bg-rose-50/60 dark:hover:bg-slate-800/60"
            >
              Herunterladen
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


