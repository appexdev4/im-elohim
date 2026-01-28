import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/WhatsApp Image 2026-01-23 at 19.59.16.jpeg";
import heroImage2 from "@/assets/WhatsApp Image 2026-01-23 at 19.59.17 (1).jpeg";
import heroImage3 from "@/assets/WhatsApp Image 2026-01-23 at 19.59.17 (2).jpeg";
import heroImage4 from "@/assets/WhatsApp Image 2026-01-23 at 19.59.17 (3).jpeg";
import heroImage5 from "@/assets/WhatsApp Image 2026-01-23 at 19.59.17.jpeg";
import { CalendarDays, Clock, ArrowRight, Trophy, BookOpen, Users, Star } from "lucide-react";

const newsArticles = [
	{
		id: 1,
		title: "Résultats exceptionnels au Brevet 2025",
		excerpt:
			"Nos élèves de 3ème obtiennent 98% de réussite avec mention, dépassant largement la moyenne nationale.",
		date: "Juin 2025",
		category: "Résultats",
		readTime: "3 min",
		image: ["🏆"],
		featured: true,
		content:
			"Cette année encore, Elohim School se distingue par l'excellence de ses résultats. Avec 98% de réussite au Diplôme National du Brevet et 85% de mentions, nos élèves démontrent la qualité de notre enseignement personnalisé.",
	},
	{
		id: 2,
		title: "Tavaux pratique des sciences",
		excerpt:
			"Un espace moderne équipé des dernières technologies pour stimuler la curiosité scientifique de nos élèves.",
		date: "10 Janvier 2024",
		category: "Infrastructure",
		readTime: "2 min",
		image: ["🔬"],
		featured: false,
		content:
			"Notre nouveau laboratoire de 200m² permet aux élèves du secondaire de réaliser des expériences avancées en chimie, physique et SVT. Un investissement de 150k€ pour l'excellence éducative.",
	},
	{
		id: 3,
		title: "concours d'élocution",
		excerpt:
			"15 élèves partent en immersion linguistique au centre culturel dans le cadre de notre programme d'échanges.",
		date: "5 Janvier 2024",
		category: "International",
		readTime: "4 min",
		image: ["🌍"],
		featured: false,
		content:
			"Notre partenariat avec le Colegio San Patricio de Madrid permet à nos élèves de vivre une expérience unique d'immersion linguistique et culturelle pendant 2 semaines.",
	},
	{
		id: 4,
		title: "concours de lecture",
		excerpt:
			"Nos élèves brillent au concours Kangourou et remportent plusieurs prix au niveau régional.",
		date: "28 Décembre 2023",
		category: "Concours",
		readTime: "2 min",
		image: ["🎯"],
		featured: false,
		content:
			"Emma, Paul et Lucas décrochent respectivement les 1er, 3ème et 5ème prix régionaux du concours Kangourou des mathématiques. Une fierté pour notre établissement !",
	},
	{
		id: 5,
		title: "la fête de Noël",
		excerpt:
			"la fête de Noël a été un moment magique de partage et de joie pour toute la communauté scolaire.",
		date: "25 Décembre 2025",
		category: "Fête",
		readTime: "2 min",
		image: [heroImage, heroImage2, heroImage3, heroImage4, heroImage5],
		featured: false,
		content:
			"Cette année, notre fête de Noël a rassemblé élèves, parents et enseignants autour de spectacles, ateliers créatifs et un grand repas convivial. Un moment inoubliable !",
	},
];

const upcomingEvents = [
	{
		title: "Réunion parents-professeurs",
		date: "25 Janvier 2024",
		time: "18h00 - 20h00",
		description:
			"Rencontres individuelles pour faire le point sur les progrès de votre enfant",
	},
	{
		title: "Spectacle de fin d'année",
		date: "15 Février 2024",
		time: "19h30",
		description:
			"Représentation théâtrale présentée par les élèves du secondaire",
	},
	{
		title: "Portes ouvertes",
		date: "2 Mars 2024",
		time: "9h00 - 16h00",
		description: "Découvrez notre établissement et rencontrez nos équipes",
	},
];

export default function News() {
	const navigate = useNavigate();
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [currentImages, setCurrentImages] = useState<string[]>([]);

	const openGallery = (images: string[]) => {
		navigate("/gallery", { state: { images } });
	};

	const featuredArticle = newsArticles.find((article) => article.featured);
	const otherArticles = newsArticles.filter((article) => !article.featured);

	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="pt-16">
				{/* Hero Section */}
				<section className="py-20 hero-gradient text-white">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
							Actualités & Événements
						</h1>
						<p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
							Suivez la vie de notre établissement, les succès de nos élèves et nos
							projets pédagogiques innovants.
						</p>
					</div>
				</section>

				{/* Article principal */}
				{featuredArticle && (
					<section className="py-20 bg-white">
						<div className="container mx-auto px-4">
							<div className="max-w-4xl mx-auto">
								<Card className="overflow-hidden elevated-shadow hover-lift animate-fade-in-up">
									<CardContent className="p-0">
										<div className="grid lg:grid-cols-2 gap-8">
											<div className="p-8 space-y-6">
												<div className="flex items-center gap-2">
													<Badge className="success-gradient text-white">
														À la Une
													</Badge>
													<Badge variant="outline">
														{featuredArticle.category}
													</Badge>
												</div>

												<h2 className="text-2xl md:text-3xl font-bold text-primary">
													{featuredArticle.title}
												</h2>

												<p className="text-muted-foreground leading-relaxed">
													{featuredArticle.content}
												</p>

												<div className="flex items-center gap-4 text-sm text-muted-foreground">
													<div className="flex items-center gap-1">
														<CalendarDays className="h-4 w-4" />
														{featuredArticle.date}
													</div>
													<div className="flex items-center gap-1">
														<Clock className="h-4 w-4" />
														{featuredArticle.readTime} de lecture
													</div>
												</div>

												<a
													href="#"
													className="block text-center text-primary underline"
													onClick={(e) => {
														e.preventDefault();
														openGallery(Array.isArray(featuredArticle.image) ? featuredArticle.image : [featuredArticle.image]);
													}}
												>
													Voir la galerie des résultats
												</a>
											</div>

											<div className="lg:p-8 p-4 flex items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10">
												{Array.isArray(featuredArticle.image) && featuredArticle.image.map((img, index) => (
													<div key={index} className="text-8xl mx-2">
														{img}
													</div>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</section>
				)}

				{/* Grille d'actualités */}
				<section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16 animate-fade-in-up">
							<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
								Toutes nos actualités
							</h2>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								Découvrez les dernières nouvelles de la vie scolaire et les succès de
								nos élèves.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{otherArticles.map((article, index) => (
								<Card
									key={article.id}
									className="hover-lift card-shadow animate-fade-in-up"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<CardHeader className="pb-4">
										<div className="flex justify-between items-start mb-4">
											<Badge variant="secondary">{article.category}</Badge>
											<div className="text-4xl">
												{typeof article.image[0] === "string" && !article.image[0].match(/^[\p{Emoji}\p{Emoji_Presentation}]+$/u) ? (
													<img src={article.image[0]} alt="Article Image" className="w-12 h-12 object-cover" />
												) : (
													article.image[0]
												)}
											</div>
										</div>
										<h3 className="text-lg font-semibold text-primary leading-tight">
											{article.title}
										</h3>
									</CardHeader>

									<CardContent className="space-y-4">
										<p className="text-muted-foreground text-sm leading-relaxed">
											{article.excerpt}
										</p>

										<div className="flex items-center justify-between text-xs text-muted-foreground">
											<div className="flex items-center gap-1">
												<CalendarDays className="h-3 w-3" />
												{article.date}
											</div>
											<div className="flex items-center gap-1">
												<Clock className="h-3 w-3" />
												{article.readTime}
											</div>
										</div>

										<a
											href="#"
											className="block text-center text-primary underline"
											onClick={(e) => {
												e.preventDefault();
												openGallery(Array.isArray(article.image) ? article.image : [article.image]);
											}}
										>
											Voir la galerie
										</a>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Événements à venir */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-16 animate-fade-in-up">
								<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
									Événements à Venir
								</h2>
								<p className="text-lg text-muted-foreground">
									Ne manquez pas les prochains temps forts de la vie de notre école.
								</p>
							</div>

							<div className="space-y-6">
								{upcomingEvents.map((event, index) => (
									<Card
										key={index}
										className="hover-lift card-shadow animate-fade-in-up"
										style={{ animationDelay: `${index * 0.1}s` }}
									>
										<CardContent className="p-6">
											<div className="grid md:grid-cols-4 gap-4 items-center">
												<div className="text-center md:text-left">
													<div className="text-2xl font-bold text-accent">
														{event.date.split(" ")[0]}
													</div>
													<div className="text-sm text-muted-foreground">
														{event.date.split(" ").slice(1).join(" ")}
													</div>
													<div className="text-sm font-medium text-primary">
														{event.time}
													</div>
												</div>

												<div className="md:col-span-2">
													<h3 className="text-lg font-semibold text-primary mb-2">
														{event.title}
													</h3>
													<p className="text-muted-foreground text-sm">
														{event.description}
													</p>
												</div>

												<div className="text-center md:text-right">
													<Button variant="outline" size="sm">
														Plus d'infos
													</Button>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter */}
				<section className="py-20 hero-gradient text-white">
					<div className="container mx-auto px-4 text-center">
						<div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up">
							<h2 className="text-3xl font-bold">
								Restez informé de toutes nos actualités
							</h2>
							<p className="text-white/90">
								Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles
								de l'école directement dans votre boîte email.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
								<input
									type="email"
									placeholder="Votre email"
									className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder:text-gray-500"
								/>
								<a
									href="https://www.whatsapp.com/channel/0029VbBiGYS5Ui2aQ0uwjb2o"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block"
								>
									<Button className="success-gradient text-white hover-lift px-6 py-3">
										S'abonner
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>

				</main>
			<Footer />
		</div>
	);
}