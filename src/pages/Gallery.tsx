import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Gallery() {
	const location = useLocation();
	const navigate = useNavigate();
	const images = location.state?.images || [];

	if (!images || images.length === 0) {
		return (
			<div className="min-h-screen">
				<Navigation />
				<main className="pt-16 pb-16">
					<section className="py-20 text-center">
						<h1 className="text-3xl font-bold text-primary mb-4">
							Galerie vide
						</h1>
						<p className="text-muted-foreground mb-8">
							Aucune image à afficher.
						</p>
						<Button onClick={() => navigate(-1)}>Retour</Button>
					</section>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="pt-16 pb-16">
				{/* Hero Section */}
				<section className="py-12 hero-gradient text-white">
					<div className="container mx-auto px-4">
						<button
							onClick={() => navigate(-1)}
							className="flex items-center gap-2 text-white hover:text-white/80 mb-6"
						>
							<ArrowLeft className="h-5 w-5" />
							Retour
						</button>
						<h1 className="text-4xl md:text-5xl font-bold">
							Galerie d'images
						</h1>
					</div>
				</section>

				{/* Galerie */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{images.map((img: string | { src?: string }, index: number) => {
								const imageSrc = typeof img === "string" ? img : img?.src || "";
								const isEmoji = typeof img === "string" && img.match(/^[\p{Emoji}\p{Emoji_Presentation}]+$/u);

								return (
									<div
										key={index}
										className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
									>
										{isEmoji ? (
											<div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-8xl">
												{img}
											</div>
										) : imageSrc ? (
											<img
												src={imageSrc}
												alt={`Image ${index + 1}`}
												className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
											/>
										) : (
											<div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">
												Image non disponible
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
