import { useEffect, useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

type ImageItem = {
  src: string;
  alt?: string;
  title?: string;
};

export default function Resultats() {
  const [images, setImages] = useState<ImageItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try to load a manifest JSON from public/resultats/index.json
    fetch('/resultats/index.json')
      .then((r) => {
        if (!r.ok) throw new Error('Manifest introuvable');
        return r.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Format de manifest invalide');
        setImages(data.map((it: any) => ({ src: it.src, alt: it.alt || '', title: it.title || '' })));
      })
      .catch(() => {
        setError("Impossible de charger la liste d'images. Placez un fichier 'public/resultats/index.json' listant les images.");
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-primary">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Galerie des résultats</h1>
            <p className="text-muted-foreground">Images et documents présents</p>
          </div>

          {error && (
            <div className="max-w-2xl mx-auto mb-8 text-center text-red-600">
              {error}
            </div>
          )}

          {!images && !error && (
            <div className="text-center">Chargement…</div>
          )}

          {images && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                  <img src={img.src} alt={img.alt || `image-${idx}`} className="w-full h-48 object-contain bg-gray-50" />
                  <div className="p-3">
                    <div className="font-medium text-sm mb-2">{img.title || img.alt}</div>
                    <div className="flex justify-between items-center">
                      <a href={img.src} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button variant="outline" size="sm">Voir</Button>
                      </a>
                      <a href={img.src} download className="inline-block">
                        <Button variant="ghost" size="sm">Télécharger</Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>
      </main>
      <Footer />
    </div>
  );
}
