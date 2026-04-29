import React, { useState, useEffect, useRef } from "react";
import {
    BookOpen,
    Music,
    Palette,
    Globe2,
    Star,
    ShieldCheck,
    Lock,
    Clock,
    Check,
    ChevronDown,
    Zap,
    Heart,
    Gift,
    Timer,
    Volume2,
    Brain,
    Smile,
    Apple,
    ChevronRight,
    CreditCard,
    InfinityIcon,
    Play,
    MessageCircle,
    Mail,
    Headphones,
    Tv,
    Smartphone,
    Tablet,
    Monitor,
    Calendar,
    Sparkle,
    PaintBucket,
    UtensilsCrossed,
    Library,
    Languages,
    GraduationCap,
} from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/aw2hie4_853925";

const ASSETS = {
    logo:
        "https://customer-assets.emergentagent.com/job_alfakids-fonica/artifacts/kqm4x1bw_logo%20fundo.png",
    heroTransformation:
        "https://customer-assets.emergentagent.com/job_17097804-122b-4a92-87b7-164651faf587/artifacts/2bzjxipo_Whisk_ed55bae0e7213e9bff142f245155be27eg.png",
    eightStimuli:
        "https://customer-assets.emergentagent.com/job_17097804-122b-4a92-87b7-164651faf587/artifacts/njv2c6yp_Whisk_cf6cda1e44d947b867844120b01b9a0adr.png",
    multiDevice:
        "https://customer-assets.emergentagent.com/job_17097804-122b-4a92-87b7-164651faf587/artifacts/4ca8sfxf_LOGO%20PV%202%20TELA%20LOGIN.png",
};

const VIDEOS = {
    access: "/videos/access.mp4",
    testimonial: "/videos/testimonial.mp4",
    childReading:
        "https://customer-assets.emergentagent.com/job_alfakids-fonica/artifacts/6s4gfwy3_Leitores%20Implac%C3%A1veis%202.mp4",
    bonusOverview: "/videos/bonus.mp4",
};

/* ---------- Reveal-on-scroll wrapper ---------- */
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, []);
    const delayClass = delay ? `reveal-delay-${delay}` : "";
    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? "is-visible" : ""} ${delayClass} ${className}`}
        >
            {children}
        </Tag>
    );
};

/* ---------- Shared CTA Button ---------- */
const CtaButton = ({ children, testid, size = "lg", pulse = true, className = "" }) => (
    <a
        href={CHECKOUT_URL}
        data-testid={testid}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-3 rounded-full bg-green-600 hover:bg-green-700 active:scale-95 transition-all duration-200 text-white font-extrabold uppercase tracking-wide shadow-cta ${
            size === "lg"
                ? "px-8 py-5 text-lg md:text-xl"
                : "px-6 py-3 text-sm md:text-base"
        } ${pulse ? "pulse-glow" : ""} ${className}`}
    >
        <Zap className="w-5 h-5 md:w-6 md:h-6 fill-yellow-300 text-yellow-300" />
        <span>{children}</span>
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    </a>
);

/* ---------- Inline Video Player ---------- */
const VideoBlock = ({ src, testid, className = "", caption }) => (
    <div
        data-testid={testid}
        className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-indigo-100 bg-indigo-950 ${className}`}
    >
        <video
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block max-h-[70vh] object-contain bg-black"
        >
            <source src={src} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
        </video>
        {caption && (
            <div className="absolute bottom-12 inset-x-0 bg-gradient-to-t from-black/60 to-transparent text-white text-xs md:text-sm font-semibold px-4 py-3 pointer-events-none">
                {caption}
            </div>
        )}
    </div>
);

/* ---------- Sticky Header ---------- */
const Header = () => (
    <header
        data-testid="sticky-header"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-indigo-100/60"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
            <a href="#top" className="flex items-center" data-testid="brand-logo">
                <img
                    src={ASSETS.logo}
                    alt="Alfakids"
                    className="h-12 md:h-14 w-auto object-contain"
                />
            </a>
            <CtaButton testid="header-cta" size="sm" pulse={false}>
                Quero agora
            </CtaButton>
        </div>
    </header>
);

/* ---------- Hero ---------- */
const Hero = () => (
    <section
        id="top"
        data-testid="hero-section"
        className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden sparkle-bg"
    >
        <Sparkle className="absolute top-28 left-8 w-6 h-6 text-purple-400 sparkle" />
        <Sparkle
            className="absolute top-40 right-10 w-8 h-8 text-pink-400 sparkle"
            style={{ animationDelay: "0.8s" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo centered */}
            <Reveal>
                <div className="flex justify-center mb-8 md:mb-10">
                    <img
                        src={ASSETS.logo}
                        alt="Alfakids"
                        data-testid="brand-logo-hero"
                        className="w-56 sm:w-72 md:w-80 h-auto drop-shadow-[0_20px_40px_rgba(99,102,241,0.25)] float-slow"
                    />
                </div>
            </Reveal>

            {/* Top badge */}
            <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 shadow-sm mb-6">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    <span className="text-xs md:text-sm font-bold text-indigo-900 uppercase tracking-wider">
                        Método Alfasonoro™ — exclusivo Alfakids
                    </span>
                </div>
            </Reveal>

            {/* Title in 2 lines */}
            <Reveal delay={1}>
                <h1
                    data-testid="hero-headline"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-indigo-950"
                >
                    <span className="block">
                        Seu filho lendo em até{" "}
                        <span className="rainbow-text">30 dias</span>,
                    </span>
                    <span className="block mt-1">
                        de forma leve e divertida com o Panda.
                    </span>
                </h1>
            </Reveal>

            {/* Image BELOW the title */}
            <Reveal delay={2}>
                <div className="relative mt-10 mb-10 max-w-2xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-indigo-200/40 rounded-[3rem] blur-3xl -z-10" />
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-white/60 backdrop-blur border border-white shadow-2xl">
                        <img
                            src={ASSETS.heroTransformation}
                            alt="Antes e depois com o Panda Alfakids"
                            className="w-full h-auto object-cover float-slow"
                            data-testid="hero-main-image"
                        />
                    </div>
                </div>
            </Reveal>

            {/* Subtext + benefits centered */}
            <Reveal delay={2}>
                <p className="text-lg md:text-xl text-indigo-900/75 font-medium leading-relaxed max-w-2xl mx-auto">
                    O método fônico que une <strong>som, ritmo e imagem</strong> para
                    alfabetizar crianças de verdade — sem brigas, sem pressão e sem
                    tela que só distrai.
                </p>
            </Reveal>

            <Reveal delay={3}>
                <ul className="mt-8 space-y-3 inline-block text-left">
                    {[
                        "Plano passo a passo do Dia 1 ao Dia 30",
                        "+100 videoaulas do Panda e biblioteca completa",
                        "Acesso vitalício de TV, celular, tablet e PC",
                    ].map((item, i) => (
                        <li
                            key={i}
                            data-testid={`hero-benefit-${i}`}
                            className="flex items-start gap-3"
                        >
                            <span className="mt-0.5 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4 text-green-700" strokeWidth={3} />
                            </span>
                            <span className="text-base md:text-lg text-indigo-950 font-semibold">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </Reveal>

            {/* CTA centered */}
            <Reveal delay={3}>
                <div className="mt-10 flex flex-col items-center gap-3">
                    <CtaButton testid="hero-cta-button">Começar por R$ 37</CtaButton>
                    <div className="flex items-center gap-2 text-sm text-indigo-900/70 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-green-700" />
                        Garantia de 7 dias
                    </div>
                </div>
            </Reveal>

            {/* Social proof centered */}
            <Reveal delay={4}>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="flex -space-x-2">
                        {["bg-pink-300", "bg-amber-300", "bg-emerald-300", "bg-indigo-300"].map(
                            (c, i) => (
                                <div
                                    key={i}
                                    className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-xs font-black text-white`}
                                >
                                    {["M", "J", "L", "A"][i]}
                                </div>
                            )
                        )}
                    </div>
                    <div className="text-left">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>
                        <p className="text-xs text-indigo-900/70 font-semibold">
                            +8.000 famílias ensinando com o Panda
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

/* ---------- Antes/Depois Transformation ---------- */
const Transformation = () => {
    const antes = [
        "Trava ao ler palavras simples e perde a paciência",
        "Resiste a abrir o caderno — vira briga todo dia",
        "Fica para trás na escola e perde confiança",
        "Passa tempo na tela sem aprender nada",
    ];
    const depois = [
        "Junta letras e sílabas sozinho, com orgulho",
        "Pede para estudar com o Panda todo dia",
        "Vai para a escola na frente dos coleguinhas",
        "Usa a tela de forma produtiva e divertida",
    ];
    return (
        <section
            data-testid="transformation-section"
            className="py-20 md:py-28 bg-white relative"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                            Você reconhece essa cena?
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight">
                            Do choro na hora da tarefa{" "}
                            <span className="rainbow-text">ao sorriso</span> ao ler sozinho.
                        </h2>
                        <p className="mt-5 text-lg text-indigo-900/70 font-medium">
                            Muitos pais passam noites ansiosos vendo o filho travar em
                            palavras simples. Com o Alfasonoro, em semanas, essa história
                            muda de verdade.
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <Reveal delay={1}>
                        <div className="relative rounded-3xl bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 border border-red-100 p-7 md:p-9 shadow-sm h-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 border border-red-200 mb-5">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="text-xs font-black uppercase tracking-widest text-red-700">
                                    Antes do Alfasonoro
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-5">
                                A rotina trava toda noite.
                            </h3>
                            <ul className="space-y-3">
                                {antes.map((t, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 w-6 h-6 rounded-full bg-red-500/90 flex items-center justify-center shrink-0 text-white font-black text-xs">
                                            ✕
                                        </span>
                                        <span className="text-indigo-950/90 font-semibold text-sm md:text-base">
                                            {t}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={2}>
                        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-green-200 p-7 md:p-9 shadow-xl h-full">
                            <div className="absolute -top-3 right-6 bg-green-600 text-white text-xs font-black uppercase px-3 py-1.5 rounded-full shadow-lg">
                                ⭐ Resultado
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 mb-5">
                                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-green-700">
                                    Depois do Alfasonoro
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-5">
                                Tudo leve, todo dia.
                            </h3>
                            <ul className="space-y-3">
                                {depois.map((t, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0 shadow-sm">
                                            <Check
                                                className="w-4 h-4 text-white"
                                                strokeWidth={3}
                                            />
                                        </span>
                                        <span className="text-indigo-950 font-semibold text-sm md:text-base">
                                            {t}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-5">
                    {[
                        {
                            icon: <Smile className="w-6 h-6" />,
                            label: "Aprende brincando",
                            desc: "Vídeos animados, músicas e jogos eliminam a resistência.",
                            color: "bg-pink-100 text-pink-700",
                        },
                        {
                            icon: <Brain className="w-6 h-6" />,
                            label: "Memória que fixa",
                            desc: "Som + imagem + repetição ativam 8 áreas do cérebro.",
                            color: "bg-purple-100 text-purple-700",
                        },
                        {
                            icon: <Heart className="w-6 h-6" />,
                            label: "Vínculo em casa",
                            desc: "Você vira o herói do momento de aprender.",
                            color: "bg-red-100 text-red-700",
                        },
                    ].map((b, i) => (
                        <Reveal key={i} delay={i + 1}>
                            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 hover:-translate-y-1 transition-all h-full">
                                <div
                                    className={`w-11 h-11 rounded-xl ${b.color} flex items-center justify-center shrink-0`}
                                >
                                    {b.icon}
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-indigo-950">
                                        {b.label}
                                    </h3>
                                    <p className="text-sm text-indigo-900/70 font-medium mt-1">
                                        {b.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- ACCESS / What's inside ---------- */
const Access = () => {
    const items = [
        {
            tag: "1",
            title: "MÉTODO COMPLETO DE 30 DIAS",
            sub: "Aprenda a ler com um passo a passo guiado, na ordem certa.",
            icon: <Calendar className="w-7 h-7" />,
            color: "from-indigo-500 to-blue-500",
            list: [
                "Dia 1–14: Som das letras",
                "Dia 15–19: Formação de sílabas",
                "Dia 20–25: Leitura de palavras simples",
                "Dia 26–27: Sílabas complexas",
                "Dia 28–30: Leitura de palavras complexas",
            ],
        },
        {
            tag: "2",
            title: "AULAS COM O PANDA",
            sub: "Lúdico e eficiente — feito para o cérebro infantil.",
            icon: <Play className="w-7 h-7" />,
            color: "from-rose-500 to-pink-500",
            list: [
                "Vogais com Panda",
                "Consoantes com Panda",
                "Sílabas com Panda",
                "Músicas com clipes animados",
            ],
        },
        {
            tag: "3",
            title: "+100 VÍDEOS DE ALFABETIZAÇÃO",
            sub: "Playlist organizada — só dar play e acompanhar.",
            icon: <Library className="w-7 h-7" />,
            color: "from-emerald-500 to-teal-500",
            list: [
                "Playlist organizada por temas e níveis",
                "Vídeos e músicas interativas",
                "Conteúdo novo toda semana",
            ],
        },
        {
            tag: "4",
            title: "INGLÊS PARA CRIANÇAS",
            sub: "Aprendizado simples, intuitivo e divertido.",
            icon: <Languages className="w-7 h-7" />,
            color: "from-sky-500 to-indigo-500",
            list: [
                "Palavras do dia a dia",
                "Clique e ouça a pronúncia em inglês",
                "Vocabulário visual com flashcards",
            ],
        },
        {
            tag: "5",
            title: "RECURSOS PEDAGÓGICOS COMPLETOS",
            sub: "PDFs prontos para imprimir e atividades práticas.",
            icon: <BookOpen className="w-7 h-7" />,
            color: "from-violet-500 to-purple-500",
            list: [
                "+100 atividades de alfabetização",
                "Atividades para autismo e TDAH",
                "Leitura guiada e atividades práticas",
            ],
        },
    ];

    const bonuses = [
        {
            tag: "BÔNUS #5",
            title: "ÁREA DE DESENHO COM IA",
            sub: "Pintura inteligente — magia pura para a criança.",
            icon: <PaintBucket className="w-8 h-8" />,
            gradient: "from-pink-500 to-fuchsia-500",
            bg: "from-pink-50 via-fuchsia-50 to-pink-100",
            list: [
                "Envie uma foto real",
                "Transforme em 3 estilos de desenho",
                "Imprima e pinte em casa",
            ],
        },
        {
            tag: "BÔNUS #7",
            title: "ALIMENTAÇÃO INFANTIL SAUDÁVEL",
            sub: "Lancheira descomplicada e refeições que a criança come.",
            icon: <UtensilsCrossed className="w-8 h-8" />,
            gradient: "from-green-500 to-emerald-500",
            bg: "from-green-50 via-emerald-50 to-green-100",
            list: [
                "Cardápios e lancheiras saudáveis",
                "Lista de compras",
                "Receitas (inclusive para alérgicos)",
                "Guia de supermercado e guia do açúcar",
            ],
        },
    ];

    return (
        <section
            data-testid="access-section"
            className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                            Tudo o que está dentro
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight">
                            Veja o que você terá acesso{" "}
                            <span className="rainbow-text">no Alfakids</span>
                        </h2>
                        <p className="mt-5 text-lg text-indigo-900/70 font-medium">
                            Tudo organizado para a criança aprender de forma simples, leve
                            e guiada.
                        </p>
                    </div>
                </Reveal>

                {/* Main items grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {items.map((it, i) => (
                        <Reveal key={it.title} delay={(i % 3) + 1}>
                            <div className="relative h-full rounded-3xl bg-white p-7 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-indigo-50 hover:-translate-y-1 hover:shadow-2xl transition-all">
                                <div className="flex items-center gap-3 mb-5">
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${it.color} text-white flex items-center justify-center shadow-lg`}
                                    >
                                        {it.icon}
                                    </div>
                                    <span className="text-3xl font-black text-indigo-100 leading-none">
                                        {it.tag}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-indigo-950 mb-2">
                                    {it.title}
                                </h3>
                                <p className="text-sm text-indigo-900/70 font-medium mb-4">
                                    {it.sub}
                                </p>
                                <ul className="space-y-2">
                                    {it.list.map((l, j) => (
                                        <li
                                            key={j}
                                            className="flex items-start gap-2 text-sm text-indigo-950 font-semibold"
                                        >
                                            <Check
                                                className="w-4 h-4 text-green-600 mt-0.5 shrink-0"
                                                strokeWidth={3}
                                            />
                                            <span>{l}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Bonus highlight strip */}
                <Reveal>
                    <div className="mt-16 mb-8 flex items-center justify-center gap-3">
                        <div className="h-px flex-1 bg-amber-200" />
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 shadow-md">
                            <Gift className="w-5 h-5 text-amber-700" />
                            <span className="text-sm font-black uppercase tracking-widest text-amber-800">
                                + Dois bônus em destaque
                            </span>
                        </div>
                        <div className="h-px flex-1 bg-amber-200" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {bonuses.map((b, i) => (
                        <Reveal key={b.title} delay={i + 1}>
                            <div
                                data-testid={`bonus-${i}`}
                                className={`relative rounded-3xl p-8 md:p-10 bg-gradient-to-br ${b.bg} border-2 border-dashed border-amber-300 shadow-xl hover:shadow-2xl transition-all h-full`}
                            >
                                <div className="absolute -top-3 -right-3 bg-amber-400 text-amber-950 text-xs font-black uppercase px-3 py-1.5 rounded-full shadow-lg">
                                    Grátis
                                </div>
                                <div
                                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${b.gradient} text-white items-center justify-center shadow-lg mb-5`}
                                >
                                    {b.icon}
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">
                                    {b.tag}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2">
                                    {b.title}
                                </h3>
                                <p className="text-indigo-900/70 font-medium mb-5">
                                    {b.sub}
                                </p>
                                <ul className="space-y-2">
                                    {b.list.map((l, j) => (
                                        <li
                                            key={j}
                                            className="flex items-start gap-2 text-sm text-indigo-950 font-semibold"
                                        >
                                            <Check
                                                className="w-4 h-4 text-green-600 mt-0.5 shrink-0"
                                                strokeWidth={3}
                                            />
                                            <span>{l}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="mt-12 text-center">
                        <CtaButton testid="access-cta">Quero meu acesso por R$ 37</CtaButton>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

/* ---------- Video: Acesso ainda hoje ---------- */
const AccessVideo = () => (
    <section data-testid="access-video-section" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                        <Play className="w-4 h-4 text-green-700 fill-green-700" />
                        <span className="text-xs md:text-sm font-black uppercase tracking-widest text-green-800">
                            Tour pelo aplicativo
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight">
                        Veja por dentro do{" "}
                        <span className="rainbow-text">nosso App</span>.
                    </h2>
                </div>
            </Reveal>
            <Reveal delay={1}>
                <VideoBlock src={VIDEOS.access} testid="video-access" />
            </Reveal>
        </div>
    </section>
);

/* ---------- Methodology — 8 Estímulos ---------- */
const Methodology = () => {
    const stimuli = [
        { name: "Som", desc: "ativação auditiva", color: "from-red-400 to-orange-400" },
        { name: "Ritmo", desc: "organização neural", color: "from-amber-400 to-yellow-400" },
        { name: "Repetição", desc: "fixação sináptica", color: "from-lime-400 to-green-400" },
        { name: "Imagem", desc: "memória visual", color: "from-emerald-400 to-teal-400" },
        { name: "Gesto", desc: "aprendizagem corporal", color: "from-cyan-400 to-sky-400" },
        { name: "Melodia", desc: "+ emoção + retenção", color: "from-blue-400 to-indigo-400" },
        { name: "Associação", desc: "conexão simbólica", color: "from-violet-400 to-purple-400" },
        { name: "Memória", desc: "consolidação cognitiva", color: "from-fuchsia-400 to-pink-400" },
    ];

    return (
        <section
            data-testid="methodology-section"
            className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                            Ciência da aprendizagem
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950">
                            Os 8 estímulos do Método{" "}
                            <span className="rainbow-text">Alfasonoro™</span>
                        </h2>
                        <p className="mt-5 text-lg text-indigo-900/70 font-medium">
                            Cada aula ativa um gatilho cognitivo diferente. É isso que
                            faz o cérebro infantil absorver a leitura muito mais rápido.
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-12 gap-8 items-center">
                    <Reveal delay={1} className="md:col-span-5 order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-3">
                            {stimuli.map((s, i) => (
                                <div
                                    key={s.name}
                                    className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    <div
                                        className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.color} mb-2 flex items-center justify-center`}
                                    >
                                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="font-black text-indigo-950">{s.name}</p>
                                    <p className="text-xs text-indigo-900/60 font-semibold">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={2} className="md:col-span-7 order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-pink-300/20 to-indigo-300/30 rounded-[3rem] blur-3xl -z-10" />
                            <img
                                src={ASSETS.eightStimuli}
                                alt="Os 8 estímulos do método Alfasonoro"
                                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white float-slow"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

/* ---------- Testimonials with video + written ---------- */
const Testimonials = () => {
    const testimonials = [
        {
            name: "Andressa Matos Schimit",
            city: "São Paulo, SP",
            avatar: "https://i.pravatar.cc/150?img=47",
            quote:
                "Eu já estava preocupada com meu filho, ele não conseguia ler quase nada, travava nas palavras… Em uma semana com o Panda ele começou a juntar as letras sozinho, sem medo. Virou um momento divertido aqui em casa. Recomendo muito!",
        },
        {
            name: "Paula Ferreira",
            city: "Belo Horizonte, MG",
            avatar: "https://i.pravatar.cc/150?img=49",
            quote:
                "O Método Alfasonoro salvou a rotina. Minha filha de 5 anos aprendeu as vogais na primeira semana só cantando com o Panda. Nunca vi algo funcionar tão rápido.",
        },
        {
            name: "Ricardo Lima",
            city: "Curitiba, PR",
            avatar: "https://i.pravatar.cc/150?img=12",
            quote:
                "Comprei meio desconfiado. Em 30 dias meu filho já lia palavras curtas. O melhor é que ele pede pra usar todo dia.",
        },
        {
            name: "Juliana Costa",
            city: "Recife, PE",
            avatar: "https://i.pravatar.cc/150?img=44",
            quote:
                "Meu filho é autista e o Alfakids foi a primeira coisa que prendeu a atenção dele do início ao fim. Em 3 semanas ele já reconhece as vogais e canta as músicas. Choro de alegria.",
        },
    ];

    return (
        <section
            data-testid="testimonials-section"
            className="py-20 md:py-28 sparkle-light relative"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 mb-5">
                            <Star className="w-4 h-4 fill-amber-900 text-amber-900" />
                            <span className="text-xs font-black uppercase tracking-widest text-amber-900">
                                O que as famílias estão falando
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950">
                            <span className="rainbow-text">Resultados</span> Reais
                        </h2>
                    </div>
                </Reveal>

                {/* Video testimonial */}
                <Reveal delay={1}>
                    <div className="max-w-3xl mx-auto mb-12">
                        <VideoBlock
                            src={VIDEOS.testimonial}
                            testid="video-testimonial"
                            caption="Depoimento real de uma mãe Alfakids"
                        />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <Reveal key={t.name} delay={(i % 3) + 1}>
                            <div className="relative rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-indigo-50 hover:-translate-y-1 transition-all h-full">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star
                                            key={j}
                                            className="w-5 h-5 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-indigo-950 font-medium leading-relaxed mb-6">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-indigo-50">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                                    />
                                    <div>
                                        <p className="font-black text-indigo-950 text-sm">
                                            {t.name}
                                        </p>
                                        <p className="text-xs text-indigo-900/60 font-semibold">
                                            {t.city}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Child Reading Video ---------- */
const ChildReading = () => (
    <section
        data-testid="child-reading-section"
        className="py-20 md:py-28 bg-white relative"
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
                        <BookOpen className="w-4 h-4 text-indigo-700" />
                        <span className="text-xs md:text-sm font-black uppercase tracking-widest text-indigo-800">
                            Leitores Alfakids
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight">
                        É <span className="rainbow-text">assim</span> que seu filho
                        vai estar lendo.
                    </h2>
                    <p className="mt-5 text-lg text-indigo-900/70 font-medium">
                        Crianças reais, alfabetizadas com o método Alfasonoro™. O
                        próximo pode ser o seu.
                    </p>
                </div>
            </Reveal>
            <Reveal delay={1}>
                <VideoBlock src={VIDEOS.childReading} testid="video-child-reading" />
            </Reveal>
        </div>
    </section>
);

/* ---------- Devices Showcase (TV / Celular / Tablet / PC) ---------- */
const Devices = () => (
    <section
        data-testid="devices-section"
        className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
                <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                    Acesso total
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight">
                    Seu filho aprende na{" "}
                    <span className="rainbow-text">
                        TV, no celular, no tablet ou no PC
                    </span>
                    .
                </h2>
                <p className="mt-5 text-lg text-indigo-900/70 font-medium leading-relaxed">
                    Tudo em um app leve, rápido e seguro. Sem anúncios, sem rolagem
                    infinita, sem distração. Só aprendizado de verdade — em qualquer
                    dispositivo da casa.
                </p>

                <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { icon: <Tv className="w-6 h-6" />, label: "TV" },
                        {
                            icon: <Smartphone className="w-6 h-6" />,
                            label: "Celular",
                        },
                        { icon: <Tablet className="w-6 h-6" />, label: "Tablet" },
                        { icon: <Monitor className="w-6 h-6" />, label: "PC" },
                    ].map((d, i) => (
                        <div
                            key={d.label}
                            data-testid={`device-${d.label.toLowerCase()}`}
                            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm border border-indigo-100"
                        >
                            <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
                                {d.icon}
                            </div>
                            <span className="text-sm font-black text-indigo-950">
                                {d.label}
                            </span>
                        </div>
                    ))}
                </div>

                <ul className="mt-7 space-y-3">
                    {[
                        "Funciona on-line em qualquer dispositivo",
                        "Conteúdo novo toda semana",
                        "Feito para crianças a partir de 3 anos",
                        "100% seguro e sem anúncios",
                    ].map((t, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-3 text-indigo-950 font-semibold"
                        >
                            <span className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center shadow-md">
                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                            </span>
                            {t}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                    <CtaButton testid="devices-cta">Quero liberar agora</CtaButton>
                </div>
            </Reveal>
            <Reveal delay={2}>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-purple-200/30 to-pink-200/40 rounded-[3rem] blur-3xl -z-10" />
                    <img
                        src={ASSETS.multiDevice}
                        alt="Acesse de qualquer dispositivo"
                        className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
                    />
                </div>
            </Reveal>
        </div>
    </section>
);

/* ---------- Bonus Overview Video ---------- */
const BonusOverviewVideo = () => (
    <section
        data-testid="bonus-overview-section"
        className="py-16 md:py-20 bg-white relative"
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
                        <Sparkle className="w-4 h-4 text-purple-700" />
                        <span className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-800">
                            Veja na prática
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight">
                        Um tour completo pelo{" "}
                        <span className="rainbow-text">Alfakids</span>.
                    </h2>
                </div>
            </Reveal>
            <Reveal delay={1}>
                <VideoBlock src={VIDEOS.bonusOverview} testid="video-bonus-overview" />
            </Reveal>
        </div>
    </section>
);

/* ---------- Pricing ---------- */
const Pricing = () => {
    const included = [
        "Método Completo de 30 Dias (PDFs + cronograma)",
        "Aulas com o Panda (vogais, consoantes, sílabas)",
        "+100 vídeos de alfabetização",
        "Inglês para crianças (pronúncia + flashcards)",
        "Recursos pedagógicos completos",
        "Atividades para autismo e TDAH",
        "Bônus: Área de Desenho com IA",
        "Bônus: Alimentação Infantil Saudável",
        "Suporte humano para tirar dúvidas",
        "Acesso vitalício — paga 1 vez, usa para sempre",
    ];

    return (
        <section
            id="pricing"
            data-testid="pricing-section"
            className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
        >
            <Sparkle className="absolute top-12 left-12 w-10 h-10 text-purple-400/70 sparkle" />
            <Sparkle
                className="absolute bottom-16 right-20 w-12 h-12 text-pink-400/70 sparkle"
                style={{ animationDelay: "1s" }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-12">
                        <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                            Acesso VITALÍCIO hoje
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950">
                            Desbloqueie o{" "}
                            <span className="rainbow-text">Alfakids completo</span>
                        </h2>
                    </div>
                </Reveal>

                <Reveal delay={1}>
                    <div
                        data-testid="pricing-card"
                        className="relative bg-white rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)] border border-indigo-100 overflow-hidden"
                    >
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-400 via-amber-400 via-green-400 via-sky-400 to-purple-500" />
                        <div className="grid md:grid-cols-5 gap-0">
                            <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-indigo-100">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 mb-4">
                                    <InfinityIcon className="w-4 h-4 text-green-700" />
                                    <span className="text-xs font-black uppercase tracking-widest text-green-800">
                                        Acesso vitalício
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2">
                                    Alfakids + Alfasonoro™
                                </h3>
                                <p className="text-indigo-900/70 font-medium mb-6">
                                    Pagamento único. Acesso imediato e para sempre.
                                </p>
                                <ul className="space-y-3">
                                    {included.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-0.5 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0 shadow-sm">
                                                <Check
                                                    className="w-4 h-4 text-white"
                                                    strokeWidth={3}
                                                />
                                            </span>
                                            <span className="text-indigo-950 font-semibold text-sm md:text-base">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:col-span-2 p-8 md:p-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col justify-center">
                                <div className="text-center">
                                    <p className="text-sm font-bold text-indigo-900/60 line-through">
                                        De R$ 197,00
                                    </p>
                                    <p className="text-xs font-black uppercase tracking-widest text-purple-600 mt-1 mb-2">
                                        Hoje por apenas
                                    </p>
                                    <div className="flex items-start justify-center gap-1 mb-1">
                                        <span className="text-2xl font-black text-indigo-950 mt-3">
                                            R$
                                        </span>
                                        <span
                                            data-testid="price-amount"
                                            className="text-7xl md:text-8xl font-black text-indigo-950 leading-none"
                                        >
                                            37
                                        </span>
                                    </div>
                                    <p className="text-sm text-indigo-900/70 font-semibold mb-2">
                                        pagamento único
                                    </p>
                                    <p className="text-xs font-black text-green-700 mb-6 inline-flex items-center gap-1">
                                        <InfinityIcon className="w-3 h-3" />
                                        ACESSO VITALÍCIO
                                    </p>

                                    <CtaButton
                                        testid="pricing-cta-button"
                                        className="w-full"
                                    >
                                        Comprar agora
                                    </CtaButton>

                                    <div className="mt-5 flex items-center justify-center gap-3 text-xs text-indigo-900/70 font-semibold">
                                        <Lock className="w-4 h-4" />
                                        Compra 100% segura • Cakto
                                    </div>
                                    <div className="mt-2 flex items-center justify-center gap-2 text-xs text-indigo-900/60">
                                        <CreditCard className="w-4 h-4" /> Pix • Cartão
                                        • Boleto
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Delivery / Support card */}
                <Reveal delay={2}>
                    <div
                        data-testid="delivery-card"
                        className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 p-7 md:p-9"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-green-600 flex items-center justify-center shadow-md">
                                <Zap className="w-5 h-5 text-white fill-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-indigo-950">
                                Acesso liberado em poucos minutos
                            </h3>
                        </div>
                        <p className="text-indigo-900/80 font-medium mb-5">
                            Logo após a compra você recebe os dados de acesso ao app
                            no <strong>WhatsApp</strong> e no seu <strong>e-mail</strong>.
                            Por isso é fundamental conferir se o número e o e-mail
                            informados no checkout estão corretos.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div
                                data-testid="delivery-whatsapp"
                                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-green-100"
                            >
                                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                                    <MessageCircle className="w-5 h-5 text-green-700" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-wider text-green-700">
                                        WhatsApp
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-950">
                                        Acesso enviado direto pra você
                                    </p>
                                </div>
                            </div>
                            <div
                                data-testid="delivery-email"
                                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-indigo-100"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-indigo-700" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-wider text-indigo-700">
                                        E-mail
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-950">
                                        Confirmação + login do app
                                    </p>
                                </div>
                            </div>
                            <div
                                data-testid="delivery-support"
                                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-purple-100"
                            >
                                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                                    <Headphones className="w-5 h-5 text-purple-700" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-wider text-purple-700">
                                        Suporte humano
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-950">
                                        Estamos aqui pra te auxiliar
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                            <p className="text-sm text-amber-900 font-semibold">
                                <strong>Importante:</strong> confira no checkout se seu{" "}
                                <strong>WhatsApp</strong> e <strong>e-mail</strong> estão
                                corretos. É por eles que você vai receber o acesso ao
                                aplicativo.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={3}>
                    <div className="mt-8 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex flex-col items-center justify-center text-white shadow-lg">
                            <ShieldCheck className="w-8 h-8" />
                            <span className="text-xs font-black mt-1">7 DIAS</span>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-black text-indigo-950">
                                Garantia incondicional de 7 dias
                            </h3>
                            <p className="text-indigo-900/70 font-medium mt-1">
                                Testou, não curtiu, não serviu? Basta enviar uma
                                mensagem e devolvemos 100% do seu dinheiro. Sem
                                burocracia.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

/* ---------- FAQ ---------- */
const FaqItem = ({ q, a, i }) => {
    const [open, setOpen] = useState(i === 0);
    return (
        <div className="bg-white rounded-2xl border border-indigo-100 overflow-hidden shadow-sm">
            <button
                data-testid={`faq-trigger-${i}`}
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-indigo-50/40 transition"
            >
                <span className="font-extrabold text-indigo-950 text-base md:text-lg">
                    {q}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-indigo-900 shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>
            {open && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-indigo-900/75 font-medium leading-relaxed">
                    {a}
                </div>
            )}
        </div>
    );
};

const Faq = () => {
    const faqs = [
        {
            q: "Como recebo o acesso após a compra?",
            a: "Imediatamente após o pagamento, você recebe os dados de acesso no WhatsApp e no seu e-mail cadastrados no checkout. Confira se ambos estão corretos para garantir o recebimento.",
        },
        {
            q: "O acesso é mesmo vitalício?",
            a: "Sim. Pagamento único de R$ 37 e você usa para sempre. Sem mensalidade, sem renovação, sem surpresa.",
        },
        {
            q: "A partir de que idade meu filho pode usar?",
            a: "A partir dos 3 anos. O método foi desenhado para o cérebro infantil em fase de alfabetização — inclusive crianças atípicas (TEA, TDAH) respondem muito bem.",
        },
        {
            q: "Funciona em qualquer aparelho?",
            a: "Sim. Funciona em TV, celular, tablet e PC com internet. O aplicativo é leve e abre em segundos.",
        },
        {
            q: "Quanto tempo por dia meu filho deve estudar?",
            a: "15 a 20 minutos por dia já são suficientes para a promessa de 30 dias. Pouco tempo, muita constância.",
        },
        {
            q: "Tem suporte se eu tiver dúvidas?",
            a: "Sim, contamos com suporte humano pra te auxiliar quando precisar. Você não fica sozinha em nenhum momento.",
        },
        {
            q: "Funciona mesmo em 30 dias?",
            a: "Sim — e se não funcionar, você tem 7 dias para pedir reembolso total, sem precisar justificar nada. O risco é zero pra você.",
        },
    ];

    return (
        <section
            data-testid="faq-section"
            className="py-20 md:py-28 bg-white relative"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-12">
                        <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                            Dúvidas frequentes
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950">
                            Tudo que os pais{" "}
                            <span className="rainbow-text">perguntam</span>.
                        </h2>
                    </div>
                </Reveal>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <Reveal key={i} delay={(i % 4) + 1}>
                            <FaqItem q={f.q} a={f.a} i={i} />
                        </Reveal>
                    ))}
                </div>
                <Reveal>
                    <div className="mt-12 text-center">
                        <CtaButton testid="faq-cta">Ainda dá tempo — por R$ 37</CtaButton>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

/* ---------- Final CTA ---------- */
const FinalCta = () => (
    <section
        data-testid="final-cta-section"
        className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 mb-6 shadow-sm">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-xs md:text-sm font-black uppercase tracking-widest text-red-700">
                        Oferta por tempo limitado
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-indigo-950 leading-tight">
                    Daqui 30 dias seu filho pode estar{" "}
                    <span className="rainbow-text">lendo sozinho</span>.
                </h2>
                <p className="mt-6 text-lg md:text-xl text-indigo-900/70 font-medium max-w-2xl mx-auto">
                    Ou você continua esperando a escola resolver. A escolha é sua,
                    mas o cérebro do seu filho não espera.
                </p>
            </Reveal>
            <Reveal delay={1}>
                <div className="mt-10 inline-flex flex-col items-center gap-4">
                    <CtaButton testid="final-cta-button">
                        Garantir acesso por R$ 37
                    </CtaButton>
                    <div className="flex items-center gap-5 text-xs md:text-sm font-semibold text-indigo-900/70 flex-wrap justify-center">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-green-700" />
                            Garantia 7 dias
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Lock className="w-4 h-4 text-green-700" />
                            Pagamento seguro
                        </span>
                        <span className="flex items-center gap-1.5">
                            <InfinityIcon className="w-4 h-4 text-green-700" />
                            Acesso vitalício
                        </span>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

/* ---------- Footer ---------- */
const Footer = () => (
    <footer data-testid="footer" className="bg-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <img
                    src={ASSETS.logo}
                    alt="Alfakids"
                    className="h-14 w-auto object-contain bg-white/5 rounded-2xl p-1.5"
                />
                <div>
                    <p className="text-xs text-indigo-300 max-w-xs">
                        Método Alfasonoro™ • Alfabetizando com o Panda
                    </p>
                </div>
            </div>
            <div className="text-xs text-indigo-300 text-center md:text-right max-w-md">
                © {new Date().getFullYear()} Alfakids. Todos os direitos reservados.
                Esta página não é afiliada ao Facebook/Meta nem ao Google. Resultados
                variam conforme o engajamento da criança e dos responsáveis.
            </div>
        </div>
    </footer>
);

/* ---------- Page ---------- */
export default function SalesPage() {
    useEffect(() => {
        document.title =
            "Alfakids — Alfabetização em 30 dias com o Método Alfasonoro";
    }, []);

    return (
        <div
            className="min-h-screen overflow-x-hidden"
            data-testid="alfakids-sales-page"
        >
            <Header />
            <main className="pt-20">
                <Hero />
                <Access />
                <AccessVideo />
                <Transformation />
                <Methodology />
                <Testimonials />
                <ChildReading />
                <Devices />
                <BonusOverviewVideo />
                <Pricing />
                <Faq />
                <FinalCta />
            </main>
            <Footer />
        </div>
    );
}
