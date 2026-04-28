import React, { useState, useEffect } from "react";
import {
    Sparkles,
    Play,
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
    Image as ImageIcon,
    ChevronRight,
    CreditCard,
    Infinity as InfinityIcon,
} from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/aw2hie4_853925";

const ASSETS = {
    logo:
        "https://customer-assets.emergentagent.com/job_alfakids-fonica/artifacts/kqm4x1bw_logo%20fundo.png",
    mainArt:
        "https://customer-assets.emergentagent.com/job_17097804-122b-4a92-87b7-164651faf587/artifacts/2bzjxipo_Whisk_ed55bae0e7213e9bff142f245155be27eg.png",
    eightStimuli:
        "https://customer-assets.emergentagent.com/job_17097804-122b-4a92-87b7-164651faf587/artifacts/njv2c6yp_Whisk_cf6cda1e44d947b867844120b01b9a0adr.png",
    multiDevice:
        "https://customer-assets.emergentagent.com/job_17097804-122b-4a92-87b7-164651faf587/artifacts/4ca8sfxf_LOGO%20PV%202%20TELA%20LOGIN.png",
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
        {/* Centered brand logo */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-10 md:mb-14">
            <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-300/30 via-pink-200/30 to-indigo-300/30 blur-2xl -z-10" />
                <img
                    src={ASSETS.logo}
                    alt="Alfakids"
                    data-testid="brand-logo-hero"
                    className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-[0_20px_40px_rgba(99,102,241,0.25)] float-slow"
                />
            </div>
        </div>

        {/* Decorative sparkles */}
        <Sparkles className="absolute top-28 left-8 w-6 h-6 text-purple-400 sparkle" />
        <Sparkles
            className="absolute top-40 right-10 w-8 h-8 text-pink-400 sparkle"
            style={{ animationDelay: "0.8s" }}
        />
        <Sparkles
            className="absolute bottom-10 left-1/4 w-5 h-5 text-indigo-400 sparkle"
            style={{ animationDelay: "1.6s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="fade-up">
                <div
                    data-testid="hero-badge"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 shadow-sm mb-6"
                >
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    <span className="text-xs md:text-sm font-bold text-indigo-900 uppercase tracking-wider">
                        Método Alfasonoro™ — exclusivo Alfakids
                    </span>
                </div>

                <h1
                    data-testid="hero-headline"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-indigo-950"
                >
                    Seu filho lendo em até{" "}
                    <span className="rainbow-text">30 dias</span>, de forma leve,
                    divertida e com o Panda.
                </h1>

                <p
                    data-testid="hero-subheadline"
                    className="mt-6 text-lg md:text-xl text-indigo-900/75 font-medium leading-relaxed max-w-xl"
                >
                    O método fônico que une <strong>som, ritmo e imagem</strong> para
                    alfabetizar crianças de verdade — sem brigas, sem pressão e sem tela
                    que só distrai.
                </p>

                <ul className="mt-8 space-y-3">
                    {[
                        "Plano passo a passo do Dia 1 ao Dia 30",
                        "+100 videoaulas do Panda e biblioteca completa",
                        "Acesso de qualquer dispositivo — TV, celular e PC",
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

                <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <CtaButton testid="hero-cta-button">Começar por R$ 37</CtaButton>
                    <div className="flex items-center gap-2 text-sm text-indigo-900/70 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-green-700" />
                        Garantia de 7 dias
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {[
                            "bg-pink-300",
                            "bg-amber-300",
                            "bg-emerald-300",
                            "bg-indigo-300",
                        ].map((c, i) => (
                            <div
                                key={i}
                                className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-xs font-black text-white`}
                            >
                                {["M", "J", "L", "A"][i]}
                            </div>
                        ))}
                    </div>
                    <div>
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
            </div>

            {/* Right: Hero art */}
            <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-indigo-200/40 rounded-[3rem] blur-3xl -z-10" />
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white/60 backdrop-blur border border-white shadow-2xl">
                    <img
                        src={ASSETS.mainArt}
                        alt="Panda Alfasonoro — Alfakids"
                        className="w-full h-auto object-cover float-slow"
                        data-testid="hero-main-image"
                    />
                </div>

                {/* Floating badge */}
                <div
                    data-testid="hero-floating-card"
                    className="absolute -bottom-5 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl border border-indigo-100 p-4 flex items-center gap-3 float-slow"
                    style={{ animationDelay: "0.5s" }}
                >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <Timer className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-indigo-950">Resultado em</p>
                        <p className="text-lg font-black text-green-700">30 dias</p>
                    </div>
                </div>

                <div
                    data-testid="hero-floating-card-2"
                    className="absolute -top-2 -right-2 md:-top-4 md:-right-8 bg-white rounded-2xl shadow-xl border border-indigo-100 p-4 flex items-center gap-3 float-slow"
                    style={{ animationDelay: "1.2s" }}
                >
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                        <Volume2 className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-indigo-950">Método</p>
                        <p className="text-lg font-black text-purple-700">Fônico</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/* ---------- Antes/Depois Problem Transformation ---------- */
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
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                        Você reconhece essa cena?
                    </p>
                    <h2
                        data-testid="transformation-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight"
                    >
                        Do choro na hora da tarefa{" "}
                        <span className="rainbow-text">ao sorriso</span> ao ler
                        sozinho.
                    </h2>
                    <p className="mt-5 text-lg text-indigo-900/70 font-medium">
                        Muitos pais passam noites ansiosos vendo o filho travar em
                        palavras simples. Com o Alfasonoro, em semanas, essa história
                        muda de verdade.
                    </p>
                </div>

                {/* Antes / Depois cards */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {/* ANTES */}
                    <div
                        data-testid="transformation-before"
                        className="relative rounded-3xl bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 border border-red-100 p-7 md:p-9 shadow-sm"
                    >
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
                                <li
                                    key={i}
                                    data-testid={`before-item-${i}`}
                                    className="flex items-start gap-3"
                                >
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

                    {/* DEPOIS */}
                    <div
                        data-testid="transformation-after"
                        className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-green-200 p-7 md:p-9 shadow-xl"
                    >
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
                                <li
                                    key={i}
                                    data-testid={`after-item-${i}`}
                                    className="flex items-start gap-3"
                                >
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
                </div>

                {/* 3 benefit pillars */}
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
                        <div
                            key={i}
                            data-testid={`transformation-point-${i}`}
                            className="flex gap-4 p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 hover:-translate-y-1 transition-all"
                        >
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
                    ))}
                </div>
            </div>
        </section>
    );
};

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
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                        Ciência da aprendizagem
                    </p>
                    <h2
                        data-testid="methodology-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950"
                    >
                        Os 8 estímulos do Método{" "}
                        <span className="rainbow-text">Alfasonoro™</span>
                    </h2>
                    <p className="mt-5 text-lg text-indigo-900/70 font-medium">
                        Cada aula ativa um gatilho cognitivo diferente. É isso que faz o
                        cérebro infantil absorver a leitura muito mais rápido.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-5 order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-3">
                            {stimuli.map((s, i) => (
                                <div
                                    key={s.name}
                                    data-testid={`stimulus-${i}`}
                                    className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    style={{ animationDelay: `${i * 0.06}s` }}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.color} mb-2 flex items-center justify-center`}
                                    >
                                        <Check
                                            className="w-5 h-5 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                    <p className="font-black text-indigo-950">{s.name}</p>
                                    <p className="text-xs text-indigo-900/60 font-semibold">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-pink-300/20 to-indigo-300/30 rounded-[3rem] blur-3xl -z-10" />
                            <img
                                src={ASSETS.eightStimuli}
                                alt="Os 8 estímulos do método Alfasonoro"
                                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white float-slow"
                                data-testid="eight-stimuli-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------- Modules Bento ---------- */
const Modules = () => {
    const modules = [
        {
            title: "Videoaulas do Panda",
            desc: "5 vídeos de vogais com articulação e som puro. Clipes musicais animados (A, E, I liberados — O e U em breve). Consoantes e sílabas em lançamento.",
            icon: <Play className="w-7 h-7" />,
            color: "from-red-500 to-pink-500",
            bg: "from-red-50 to-pink-50",
            span: "md:col-span-2 md:row-span-2",
            tag: "Módulo 1",
        },
        {
            title: "Programa 30 Dias",
            desc: "Cronograma passo a passo: PDFs exclusivos do Dia 01 ao 07 (novo padrão Alfakids) + material completo do Dia 08 ao 30.",
            icon: <BookOpen className="w-7 h-7" />,
            color: "from-amber-500 to-orange-500",
            bg: "from-amber-50 to-orange-50",
            span: "md:col-span-2",
            tag: "Módulo 2",
        },
        {
            title: "Biblioteca +100 aulas",
            desc: "Playlist exclusiva no YouTube organizada por temas e níveis — sempre à mão.",
            icon: <Music className="w-7 h-7" />,
            color: "from-emerald-500 to-teal-500",
            bg: "from-emerald-50 to-teal-50",
            span: "md:col-span-2",
            tag: "Módulo 3",
        },
        {
            title: "Aprender em Inglês",
            desc: "Flashcards digitais de vocabulário concreto — objetos, cores e números com introdução visual e natural.",
            icon: <Globe2 className="w-7 h-7" />,
            color: "from-sky-500 to-blue-500",
            bg: "from-sky-50 to-blue-50",
            span: "md:col-span-2",
            tag: "Módulo 4",
        },
        {
            title: "Recursos & IA",
            desc: "PDFs prontos para imprimir + Pintura Inteligente com IA: envie uma foto e ela vira desenho para colorir na hora.",
            icon: <Palette className="w-7 h-7" />,
            color: "from-violet-500 to-purple-500",
            bg: "from-violet-50 to-purple-50",
            span: "md:col-span-2",
            tag: "Módulo 5",
        },
    ];

    return (
        <section
            data-testid="modules-section"
            className="py-20 md:py-28 bg-white relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                        O que seu filho vai receber
                    </p>
                    <h2
                        data-testid="modules-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950"
                    >
                        5 módulos pensados para{" "}
                        <span className="rainbow-text">alfabetizar brincando</span>.
                    </h2>
                </div>

                <div className="grid md:grid-cols-6 gap-5">
                    {modules.map((m, i) => (
                        <div
                            key={m.title}
                            data-testid={`module-card-${i}`}
                            className={`${m.span} group relative rounded-3xl p-6 md:p-8 bg-gradient-to-br ${m.bg} border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                        >
                            <div
                                className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} text-white items-center justify-center shadow-lg mb-5`}
                            >
                                {m.icon}
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest text-indigo-900/50 mb-2">
                                {m.tag}
                            </p>
                            <h3 className="text-xl md:text-2xl font-black text-indigo-950 mb-2">
                                {m.title}
                            </h3>
                            <p className="text-sm md:text-base text-indigo-900/70 font-medium leading-relaxed">
                                {m.desc}
                            </p>

                            {/* Decorative sparkle */}
                            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Multi-device showcase ---------- */
const DeviceShowcase = () => (
    <section
        data-testid="devices-section"
        className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                    Acesso total
                </p>
                <h2
                    data-testid="devices-headline"
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 leading-tight"
                >
                    Seu filho aprende na{" "}
                    <span className="rainbow-text">TV, no celular ou no PC</span>.
                </h2>
                <p className="mt-5 text-lg text-indigo-900/70 font-medium leading-relaxed">
                    Tudo em um app leve, rápido e seguro. Sem anúncios, sem rolagens
                    infinitas, sem distração. Só aprendizado de verdade.
                </p>
                <ul className="mt-8 space-y-3">
                    {[
                        "Funciona on-line em qualquer dispositivo",
                        "Conteúdo novo toda semana",
                        "Feito para crianças a partir de 3 anos",
                        "100% seguro e sem anúncios",
                    ].map((t, i) => (
                        <li
                            key={i}
                            data-testid={`devices-benefit-${i}`}
                            className="flex items-center gap-3 text-indigo-950 font-semibold"
                        >
                            <span className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center shadow-md">
                                <Check
                                    className="w-4 h-4 text-white"
                                    strokeWidth={3}
                                />
                            </span>
                            {t}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                    <CtaButton testid="devices-cta">Quero liberar agora</CtaButton>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-purple-200/30 to-pink-200/40 rounded-[3rem] blur-3xl -z-10" />
                <img
                    src={ASSETS.multiDevice}
                    alt="Acesse de qualquer dispositivo"
                    className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
                    data-testid="devices-image"
                />
            </div>
        </div>
    </section>
);

/* ---------- Bonuses ---------- */
const Bonuses = () => {
    const bonuses = [
        {
            tag: "Bônus #1 • Exclusivo",
            title: "Alimentação Saudável para Criança",
            desc: "Cardápios semanais, bebidas, lista de compras e receitas para crianças alérgicas. Lancheira descomplicada e saudável.",
            value: "R$ 97",
            icon: <Apple className="w-8 h-8" />,
            gradient: "from-green-400 to-emerald-500",
            bg: "from-green-50 via-emerald-50 to-green-100",
        },
        {
            tag: "Bônus #2 • Pintura com IA",
            title: "Colorir Qualquer Foto em Desenho",
            desc: "Tire uma foto real — do pet, da família, do brinquedo — e nossa IA transforma em desenho pra colorir em segundos. Mágica pura.",
            value: "R$ 147",
            icon: <ImageIcon className="w-8 h-8" />,
            gradient: "from-pink-400 to-fuchsia-500",
            bg: "from-pink-50 via-fuchsia-50 to-pink-100",
        },
    ];

    return (
        <section
            data-testid="bonuses-section"
            className="py-20 md:py-28 bg-white relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-5">
                        <Gift className="w-4 h-4 text-amber-700" />
                        <span className="text-xs font-black uppercase tracking-widest text-amber-800">
                            Bônus inclusos hoje
                        </span>
                    </div>
                    <h2
                        data-testid="bonuses-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950"
                    >
                        Você ainda leva{" "}
                        <span className="rainbow-text">2 presentes</span> que
                        transformam a rotina.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {bonuses.map((b, i) => (
                        <div
                            key={b.title}
                            data-testid={`bonus-card-${i}`}
                            className={`relative rounded-3xl p-8 md:p-10 bg-gradient-to-br ${b.bg} border-2 border-dashed border-amber-300 shadow-xl hover:shadow-2xl transition-all`}
                        >
                            <div className="absolute -top-3 -right-3 bg-amber-400 text-amber-950 text-xs font-black uppercase px-3 py-1.5 rounded-full shadow-lg">
                                Grátis
                            </div>
                            <div
                                className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${b.gradient} text-white items-center justify-center shadow-lg mb-5`}
                            >
                                {b.icon}
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest text-indigo-900/60 mb-2">
                                {b.tag}
                            </p>
                            <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-3">
                                {b.title}
                            </h3>
                            <p className="text-indigo-900/70 font-medium leading-relaxed mb-5">
                                {b.desc}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-900/60">
                                <span className="line-through">
                                    Valor real: {b.value}
                                </span>
                                <span className="font-black text-green-700">
                                    → incluso
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Testimonials ---------- */
const Testimonials = () => {
    const testimonials = [
        {
            name: "Andressa Matos Schimit",
            city: "São Paulo, SP",
            quote:
                "Eu já estava preocupada com meu filho, ele não conseguia ler quase nada, travava nas palavras… Em uma semana com o Panda ele começou a juntar as letras sozinho, sem medo. Virou um momento divertido aqui em casa. Recomendo muito!",
        },
        {
            name: "Paula Ferreira",
            city: "Belo Horizonte, MG",
            quote:
                "O Método Alfasonoro salvou a rotina. Minha filha de 5 anos aprendeu as vogais na primeira semana só cantando com o Panda. Nunca vi algo funcionar tão rápido.",
        },
        {
            name: "Ricardo Lima",
            city: "Curitiba, PR",
            quote:
                "Comprei meio desconfiado. Em 30 dias meu filho já lia palavras curtas. O melhor é que ele pede pra usar todo dia.",
        },
    ];

    return (
        <section
            data-testid="testimonials-section"
            className="py-20 md:py-28 sparkle-light relative"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 mb-5">
                        <Star className="w-4 h-4 fill-amber-900 text-amber-900" />
                        <span className="text-xs font-black uppercase tracking-widest text-amber-900">
                            O que as famílias estão falando
                        </span>
                    </div>
                    <h2
                        data-testid="testimonials-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950"
                    >
                        Resultados de verdade, em casas de verdade.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            data-testid={`testimonial-card-${i}`}
                            className="relative rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-indigo-50 hover:-translate-y-1 transition-all"
                        >
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
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-black">
                                    {t.name[0]}
                                </div>
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
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Pricing ---------- */
const Pricing = () => {
    const included = [
        "Programa Alfabetização em 30 dias (PDFs completos)",
        "Videoaulas do Panda com som puro",
        "Biblioteca +100 aulas no YouTube",
        "Flashcards de inglês (áudio e pronúncia)",
        "Pintura Inteligente com IA",
        "Músicas infantis interativas com instrumentos",
        "Atividades para autismo",
        "100+ jogos e atividades de alfabetização",
        "Bônus: Alimentação saudável para criança",
        "Bônus: Colorir qualquer foto em desenho",
    ];

    return (
        <section
            data-testid="pricing-section"
            className="py-20 md:py-28 sparkle-bg relative overflow-hidden"
        >
            <Sparkles className="absolute top-12 left-12 w-10 h-10 text-purple-400/70 sparkle" />
            <Sparkles
                className="absolute bottom-16 right-20 w-12 h-12 text-pink-400/70 sparkle"
                style={{ animationDelay: "1s" }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                        Acesso completo hoje
                    </p>
                    <h2
                        data-testid="pricing-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950"
                    >
                        Desbloqueie o{" "}
                        <span className="rainbow-text">Alfakids completo</span>
                    </h2>
                </div>

                <div
                    data-testid="pricing-card"
                    className="relative bg-white rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)] border border-indigo-100 overflow-hidden"
                >
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-400 via-amber-400 via-green-400 via-sky-400 to-purple-500" />

                    <div className="grid md:grid-cols-5 gap-0">
                        <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-indigo-100">
                            <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2">
                                Alfakids + Alfasonoro™
                            </h3>
                            <p className="text-indigo-900/70 font-medium mb-6">
                                Plano anual completo. Acesso imediato.
                            </p>
                            <ul className="space-y-3">
                                {included.map((item, i) => (
                                    <li
                                        key={i}
                                        data-testid={`pricing-item-${i}`}
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
                                <p className="text-sm text-indigo-900/70 font-semibold mb-6">
                                    pagamento único • acesso por 1 ano
                                </p>

                                <CtaButton testid="pricing-cta-button" className="w-full">
                                    Comprar agora
                                </CtaButton>

                                <div className="mt-5 flex items-center justify-center gap-3 text-xs text-indigo-900/70 font-semibold">
                                    <Lock className="w-4 h-4" />
                                    Compra 100% segura • Cakto
                                </div>
                                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-indigo-900/60">
                                    <CreditCard className="w-4 h-4" /> Pix • Cartão • Boleto
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Guarantee */}
                <div
                    data-testid="guarantee-card"
                    className="mt-8 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-100 flex flex-col md:flex-row items-center gap-6"
                >
                    <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex flex-col items-center justify-center text-white shadow-lg">
                        <ShieldCheck className="w-8 h-8" />
                        <span className="text-xs font-black mt-1">7 DIAS</span>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-black text-indigo-950">
                            Garantia incondicional de 7 dias
                        </h3>
                        <p className="text-indigo-900/70 font-medium mt-1">
                            Testou, não curtiu, não serviu? Basta enviar um e-mail e
                            devolvemos 100% do seu dinheiro. Sem burocracia, sem pergunta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------- FAQ ---------- */
const FaqItem = ({ q, a, i }) => {
    const [open, setOpen] = useState(i === 0);
    return (
        <div
            data-testid={`faq-item-${i}`}
            className="bg-white rounded-2xl border border-indigo-100 overflow-hidden shadow-sm"
        >
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
            q: "A partir de que idade meu filho pode usar?",
            a: "A partir dos 3 anos. O método foi desenhado para o cérebro infantil em fase de alfabetização — inclusive crianças atípicas (TEA, TDAH) respondem muito bem.",
        },
        {
            q: "Preciso de internet ou de computador potente?",
            a: "Não. O Alfakids funciona em qualquer celular, tablet, notebook ou smart TV com internet. O aplicativo é leve e abre em segundos.",
        },
        {
            q: "Quanto tempo por dia meu filho deve estudar?",
            a: "15 a 20 minutos por dia já são suficientes para a promessa de 30 dias. Sem sobrecarga. Pouco tempo, muita constância.",
        },
        {
            q: "É pagamento único? Tem mensalidade?",
            a: "Pagamento único de R$ 37 por 1 ano inteiro de acesso. Sem mensalidade, sem surpresa.",
        },
        {
            q: "Funciona mesmo em 30 dias?",
            a: "Sim — e se não funcionar, você tem 7 dias para pedir reembolso total, sem precisar justificar nada. O risco é zero para você.",
        },
        {
            q: "Como recebo o material após a compra?",
            a: "Imediatamente após o pagamento via Cakto, você recebe o acesso por e-mail e já pode começar com seu filho no mesmo dia.",
        },
    ];

    return (
        <section
            data-testid="faq-section"
            className="py-20 md:py-28 bg-white relative"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-purple-600 mb-3">
                        Dúvidas frequentes
                    </p>
                    <h2
                        data-testid="faq-headline"
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950"
                    >
                        Tudo que os pais{" "}
                        <span className="rainbow-text">perguntam</span>.
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} i={i} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <CtaButton testid="faq-cta">Ainda dá tempo — por R$ 37</CtaButton>
                </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 mb-6 shadow-sm">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="text-xs md:text-sm font-black uppercase tracking-widest text-red-700">
                    Oferta por tempo limitado
                </span>
            </div>
            <h2
                data-testid="final-cta-headline"
                className="text-3xl sm:text-4xl lg:text-6xl font-black text-indigo-950 leading-tight"
            >
                Daqui 30 dias seu filho pode estar{" "}
                <span className="rainbow-text">lendo sozinho</span>.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-indigo-900/70 font-medium max-w-2xl mx-auto">
                Ou você continua esperando a escola resolver. A escolha é sua, mas o
                cérebro do seu filho não espera.
            </p>

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
                        Acesso por 1 ano
                    </span>
                </div>
            </div>
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
        <div className="min-h-screen overflow-x-hidden" data-testid="alfakids-sales-page">
            <Header />
            <main className="pt-16">
                <Hero />
                <Transformation />
                <Methodology />
                <Modules />
                <DeviceShowcase />
                <Bonuses />
                <Testimonials />
                <Pricing />
                <Faq />
                <FinalCta />
            </main>
            <Footer />
        </div>
    );
}
