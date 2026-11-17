
window.PORTFOLIO_SKILLS = [
  {
    "id": "skill-1",
    "title": "⚡ Développement Web & Fullstack",
    "items": [
      "Next.js 14 / React & TypeScript",
      "Applications Mobiles Hybrides (Capacitor)",
      "Node.js, Express & APIs REST",
      "Prisma ORM, PostgreSQL & MySQL",
      "Tailwind CSS, Responsive & PWA"
    ]
  },
  {
    "id": "skill-2",
    "title": "💻 Systèmes Unix & Langage C",
    "items": [
      "Langage C (Pointeurs, mémoire, POSIX)",
      "Appels système Unix (fork, pipe, execve, stat)",
      "Débogage avancé & Valgrind (zéro fuite)",
      "Bibliothèque graphique CSFML (Game loop 60 FPS)",
      "Assembleur & Machine Virtuelle Corewar"
    ]
  },
  {
    "id": "skill-3",
    "title": "🚀 DevOps, Cloud & CI/CD",
    "items": [
      "Docker & Docker Compose (Microservices)",
      "Pipelines CI/CD (GitHub Actions, GitLab CI)",
      "Surveillance système Linux (Top, /proc)",
      "Tests E2E automatisés (Playwright)"
    ]
  },
  {
    "id": "skill-4",
    "title": "🛡️ IA, Maths & Cybersécurité",
    "items": [
      "Algorithmes quantitatifs & Machine Learning",
      "Bibliothèque de DataFrames en C (Cuddle)",
      "Mathématiques appliquées (Taylor, Simpson, Hill)",
      "Audit de sécurité White-Box & Pentest (OWASP Top 10)"
    ]
  }
];

window.PORTFOLIO_PROFILE = {
  "name": "Nathan HOUNKPADODE",
  "fullName": "Nathan Schalom HOUNKPADODE",
  "badge": "Développeur Logiciel & Systèmes",
  "headline": "Concepteur d'applications <span class=\"highlight\">robustes & performantes</span>",
  "bio": "Développeur rigoureux passionné par la <strong>programmation Système & C</strong>, les architectures logicielles propres et le développement Fullstack moderne. Créateur d'applications en production (dont la plateforme spirituelle et mobile <strong>Lecture Quotidienne EEDSC</strong>).",
  "avatar": "avatar.png",
  "email": "nathan.hounkpadode@epitech.eu",
  "phone": "+229 01 91 63 63 13",
  "status": "Disponible pour opportunités & collaborations",
  "statusSubtext": "Développeur logiciel & web. Passionné par les défis d'ingénierie, la programmation système et les architectures modernes.",
  "github": "https://github.com/nathanhounkpadode-glitch",
  "headlinePrefix": "Concepteur d'applications",
  "headlineHighlight": "robustes & performantes"
};
// ================================================================
// DONNÉES DU PORTFOLIO — MODIFIABLES SANS TOUCHER AU CODE HTML !
// ================================================================

window.PORTFOLIO_CATEGORIES = [
  {
    "id": "all",
    "label": "Tous"
  },
  {
    "id": "perso",
    "label": "⭐ Projet Personnel",
    "btnClass": "filter-perso-btn",
    "badgeClass": "badge-perso",
    "defaultBadge": "⭐ PROJET PERSONNEL"
  },
  {
    "id": "psu",
    "label": "PSU — Système Unix",
    "btnClass": "",
    "badgeClass": "badge-psu",
    "defaultBadge": "Système Unix (PSU)"
  },
  {
    "id": "cpe",
    "label": "Algorithmes & C",
    "btnClass": "",
    "badgeClass": "badge-cpe",
    "defaultBadge": "Algorithmes & C (CPE)"
  },
  {
    "id": "graphic",
    "label": "Graphique & CSFML",
    "btnClass": "",
    "badgeClass": "badge-graphic",
    "defaultBadge": "Graphique 2D (CSFML)"
  },
  {
    "id": "mat",
    "label": "Mathématiques",
    "btnClass": "",
    "badgeClass": "badge-mat",
    "defaultBadge": "Calcul Scientifique"
  },
  {
    "id": "sec",
    "label": "Cybersécurité",
    "btnClass": "",
    "badgeClass": "badge-sec",
    "defaultBadge": "Cybersécurité"
  },
  {
    "id": "ai",
    "label": "IA & Data",
    "btnClass": "",
    "badgeClass": "badge-ai",
    "defaultBadge": "IA & Data en C"
  },
  {
    "id": "devops",
    "label": "DevOps & Cloud",
    "btnClass": "",
    "badgeClass": "badge-devops",
    "defaultBadge": "DevOps & CI/CD"
  },
  {
    "id": "web",
    "label": "Web & Backend",
    "btnClass": "",
    "badgeClass": "badge-web",
    "defaultBadge": "Backend / API REST"
  }
];

window.PORTFOLIO_PROJECTS = [
  {
    "id": "proj-1",
    "title": "📖 Lecture Quotidienne EEDSC",
    "subtitle": "[ Projet Personnel & Développement Indépendant ]",
    "category": "perso",
    "badgeText": "⭐ PROJET PERSONNEL",
    "badgeClass": "badge-perso",
    "date": "Nov. 2026 • En Production",
    "featured": true,
    "description": "<strong>Projet personnel &amp; initiative originale</strong> : Plateforme spirituelle et communautaire complète conçue et développée de A à Z pour l'<em>Église Évangélique de la Délivrance et du Salut en Christ</em> (Cotonou). Architecture Next.js (App Router) et déclinaison mobile hybride via Capacitor.",
    "features": [
      "<strong>2 modes de lecture</strong> : Linéaire (Genèse à Apocalypse) et Mixte (Alliance Quotidienne).",
      "<strong>4 plans personnalisés</strong> : Immersion Réveil (3 mois), 6 mois, 9 mois et 1 an.",
      "<strong>Multilingue 4 langues avec audio</strong> : Français (Louis Segond), Anglais (KJV), Fongbé (<em>Biblu Wiwe gbè</em>) et Goun (<em>Wéyé Wéwé gbè</em>).",
      "<strong>Mur de Prière &amp; Intercession</strong> : Requêtes communautaires avec bouton interactif « Je prie 🙏 ».",
      "<strong>Partage WhatsApp</strong> : Envoi automatisé du verset du jour en un clic."
    ],
    "tags": [
      "★ PROJET PERSONNEL",
      "Next.js 14",
      "TypeScript",
      "Capacitor (Mobile)",
      "Tailwind CSS",
      "Multilingue (4 langues)"
    ]
  },
  {
    "id": "proj-2",
    "title": "Minishell 1 & 2 (Interpréteur UNIX)",
    "subtitle": "",
    "category": "psu",
    "badgeText": "Système Unix (PSU)",
    "badgeClass": "badge-psu",
    "date": "Juin - Juil. 2026",
    "featured": false,
    "description": "Développement en C d'un interpréteur de commandes complet conforme aux spécifications POSIX. Parsing syntaxique, gestion des pipes chaînés (<code>|</code>), redirections d'entrées/sorties (<code>&lt;</code>, <code>&gt;</code>, <code>&gt;&gt;</code>), signaux POSIX et builtins natifs (<code>cd</code>, <code>env</code>, <code>setenv</code>).",
    "features": [],
    "tags": [
      "Langage C",
      "POSIX",
      "Syscalls (fork, execve, pipe)",
      "Gestion Mémoire",
      "Valgrind"
    ]
  },
  {
    "id": "proj-3",
    "title": "Corewar : Robot Factory (Assembleur C)",
    "subtitle": "",
    "category": "cpe",
    "badgeText": "Compilation & C (CPE)",
    "badgeClass": "badge-cpe",
    "date": "Août 2026",
    "featured": false,
    "description": "Compilateur / assembleur complet en C pour le jeu Corewar. Analyse lexicale et syntaxique de programmes assembleurs (<code>.s</code>), encodage binaire des instructions et registres de la machine virtuelle, calcul des offsets d'adressage et génération de fichiers bytecode exécutables (<code>.cor</code>).",
    "features": [],
    "tags": [
      "Langage C",
      "Assembleur",
      "Bytecode Compiler",
      "Parsing Binaire",
      "Makefile"
    ]
  },
  {
    "id": "proj-4",
    "title": "MyTop — Moniteur Système Linux en C",
    "subtitle": "",
    "category": "psu",
    "badgeText": "Système Linux (PSU)",
    "badgeClass": "badge-psu",
    "date": "Mai - Juin 2026",
    "featured": false,
    "description": "Recréation de l'utilitaire système <code>top</code> sous Linux en C. Extraction et analyse en temps réel des métriques du système de fichiers virtuel <code>/proc</code> (état des processus, utilisation CPU, mémoire physique et swap, Uptime, load averages) avec affichage interactif dynamique.",
    "features": [],
    "tags": [
      "Langage C",
      "Système Linux",
      "Parsing /proc",
      "Surveillance CPU & RAM",
      "Syscalls"
    ]
  },
  {
    "id": "proj-5",
    "title": "MySudo — Délégation de Privilèges Root",
    "subtitle": "",
    "category": "psu",
    "badgeText": "Système & Sécurité (PSU)",
    "badgeClass": "badge-psu",
    "date": "Avril 2026",
    "featured": false,
    "description": "Re-implémentation sécurisée de l'utilitaire système <code>sudo</code> sous Linux en langage C (binaire SetUID root). Gestion et vérification des permissions utilisateurs, lecture sécurisée des hachages de mots de passe dans <code>/etc/shadow</code> et exécution sous privilèges élevés.",
    "features": [],
    "tags": [
      "Langage C",
      "Sécurité Linux",
      "SetUID Root",
      "/etc/shadow",
      "Syscalls Unix"
    ]
  },
  {
    "id": "proj-6",
    "title": "MyLs — Explorateur de Fichiers POSIX",
    "subtitle": "",
    "category": "psu",
    "badgeText": "Système Unix (PSU)",
    "badgeClass": "badge-psu",
    "date": "Mars 2026",
    "featured": false,
    "description": "Ré-implémentation complète de la commande UNIX <code>ls</code> en C. Utilisation des appels système <code>stat</code>, <code>lstat</code> et <code>opendir/readdir</code>. Prise en charge des drapeaux classiques (<code>-l, -a, -R, -d, -r, -t</code>), droits d'accès, utilisateurs, groupes et formatage temporel.",
    "features": [],
    "tags": [
      "Langage C",
      "POSIX Stat",
      "Système de Fichiers",
      "Flags UNIX"
    ]
  },
  {
    "id": "proj-7",
    "title": "Organized — Gestionnaire & Tri Dynamique",
    "subtitle": "",
    "category": "cpe",
    "badgeText": "Algorithmes & C (CPE)",
    "badgeClass": "badge-cpe",
    "date": "Avril - Juin 2026",
    "featured": false,
    "description": "Système de gestion d'inventaire interactif développé en C. Implémentation de structures de listes chaînées génériques en mémoire, parsing de commandes en ligne et algorithmes de tri récursif multi-critères dynamiques (QuickSort / MergeSort).",
    "features": [],
    "tags": [
      "Langage C",
      "Listes Chaînées Génériques",
      "Tri Dynamique",
      "Pointeurs de fonctions",
      "Valgrind"
    ]
  },
  {
    "id": "proj-8",
    "title": "Setting Up — Plus Grand Carré 2D",
    "subtitle": "",
    "category": "cpe",
    "badgeText": "Prog. Dynamique (CPE)",
    "badgeClass": "badge-cpe",
    "date": "Mars 2026",
    "featured": false,
    "description": "Algorithme de programmation dynamique en C pour identifier le plus grand carré disponible sur une grille 2D encombrée d'obstacles. Traitement haute vitesse optimisé pour des matrices comptant des millions de cases sans surcharge mémoire.",
    "features": [],
    "tags": [
      "Langage C",
      "Programmation Dynamique",
      "Optimisation Matricielle",
      "Algorithmique"
    ]
  },
  {
    "id": "proj-9",
    "title": "Secured — Bibliothèque Hash Table",
    "subtitle": "",
    "category": "cpe",
    "badgeText": "Structures & C (CPE)",
    "badgeClass": "badge-cpe",
    "date": "Juin 2026",
    "featured": false,
    "description": "Conception d'une bibliothèque dynamique de table de hachage en langage C (<code>libhashtable.a</code>) implémentant l'algorithme DJB2. Gestion rigoureuse de l'allocation dynamique et des collisions, validée à 100% sans aucune fuite mémoire avec Valgrind.",
    "features": [],
    "tags": [
      "Langage C",
      "Algorithme DJB2",
      "Structure de Données",
      "Valgrind",
      "Makefile"
    ]
  },
  {
    "id": "proj-10",
    "title": "Amazed — Résolveur de Labyrinthes",
    "subtitle": "",
    "category": "cpe",
    "badgeText": "Graphes & Algorithmes (CPE)",
    "badgeClass": "badge-cpe",
    "date": "Juil. 2026",
    "featured": false,
    "description": "Moteur algorithmique haute performance de recherche de chemin optimal dans des réseaux de salles et galeries complexes (problème d'écoulement et théorie des graphes). Optimisation des temps de parcours et allocation dynamique minimale (BFS / Dijkstra).",
    "features": [],
    "tags": [
      "Langage C",
      "Théorie des Graphes",
      "BFS / Dijkstra",
      "Algorithmique"
    ]
  },
  {
    "id": "proj-11",
    "title": "My_Printf & Mini_Printf (Recréation C)",
    "subtitle": "",
    "category": "cpe",
    "badgeText": "Algorithmes & C (CPE)",
    "badgeClass": "badge-cpe",
    "date": "Fév. - Mars 2026",
    "featured": false,
    "description": "Recréation fidèle de la fonction système <code>printf</code> de la bibliothèque standard en C. Gestion poussée des arguments variadiques (<code>stdarg.h</code>), spécificateurs de conversion (<code>%s, %d, %i, %c, %x, %X, %o, %u, %p, %%</code>), drapeaux de formatage, padding et bufferisation d'affichage.",
    "features": [],
    "tags": [
      "Langage C",
      "Variadic Arguments (stdarg)",
      "Conversion Binaire/Hexa",
      "Bufferisation"
    ]
  },
  {
    "id": "proj-12",
    "title": "MyRadar — Contrôle Aérien 2D",
    "subtitle": "",
    "category": "graphic",
    "badgeText": "Graphique 2D (CSFML)",
    "badgeClass": "badge-graphic",
    "date": "Mai - Juin 2026",
    "featured": false,
    "description": "Simulateur interactif de trafic aérien en temps réel développé en C avec la bibliothèque CSFML. Gestion fluide de centaines d'avions avec détection optimisée de collisions grâce à un algorithme de partitionnement spatial (Quadtree) à 60 FPS constants.",
    "features": [],
    "tags": [
      "Langage C",
      "CSFML",
      "Quadtree",
      "Calculs Vectoriels",
      "60 FPS"
    ]
  },
  {
    "id": "proj-13",
    "title": "MyHunter — Jeu Vidéo 2D en C",
    "subtitle": "",
    "category": "graphic",
    "badgeText": "Graphique 2D (CSFML)",
    "badgeClass": "badge-graphic",
    "date": "Mars - Avril 2026",
    "featured": false,
    "description": "Jeu vidéo interactif en C utilisant la bibliothèque CSFML (inspiré de Duck Hunt). Architecture basée sur une boucle événementielle cadencée à 60 FPS constants, gestion des sprites et textures, détection de collisions curseur/cibles et système de score dynamique.",
    "features": [],
    "tags": [
      "Langage C",
      "CSFML",
      "Game Loop",
      "Animations 2D",
      "60 FPS"
    ]
  },
  {
    "id": "proj-14",
    "title": "Obsidian — Audit de Sécurité White-Box & Black-Box",
    "subtitle": "",
    "category": "sec",
    "badgeText": "Cybersécurité / Audit",
    "badgeClass": "badge-sec",
    "date": "Sept. - Oct. 2026",
    "featured": false,
    "description": "Audit méthodique et approfondi de sécurité logicielle réalisé en double approche boîte noire et boîte blanche. Analyse statique de code source (SAST), modélisation des menaces, identification des vulnérabilités critiques et rédaction des rapports d'audit et plans de remédiation conformes OWASP.",
    "features": [],
    "tags": [
      "Audit White-Box",
      "Audit Black-Box",
      "SAST Code Review",
      "Analyse de Menaces",
      "Rapport d'Audit"
    ]
  },
  {
    "id": "proj-15",
    "title": "Hack&Juice — Test d'Intrusion & Exploitation Web",
    "subtitle": "",
    "category": "sec",
    "badgeText": "Cybersécurité / Pentest",
    "badgeClass": "badge-sec",
    "date": "Août 2026",
    "featured": false,
    "description": "Campagne de test d'intrusion web offensif couvrant l'ensemble du spectre OWASP Top 10. Exploitation pratique d'injections SQL & NoSQL, contournement de mécanismes d'authentification et de CAPTCHA, falsification de jetons cryptographiques, exploitation de Null Bytes et analyse de fuites de données sensibles.",
    "features": [],
    "tags": [
      "Pentesting Web",
      "OWASP Top 10",
      "Injections SQL/NoSQL",
      "Burp Suite",
      "Bypass CAPTCHA"
    ]
  },
  {
    "id": "proj-16",
    "title": "Cuddle — Bibliothèque DataFrame & IA en C",
    "subtitle": "",
    "category": "ai",
    "badgeText": "IA & Data en C",
    "badgeClass": "badge-ai",
    "date": "Juil. - Août 2026",
    "featured": false,
    "description": "Conception d'une bibliothèque native en langage C (<code>libcuddle.a</code>) pour la manipulation de DataFrames et données tabulaires pour le Machine Learning (équivalent de Pandas en C). Lecture/écriture de fichiers CSV (<code>df_read_csv</code>, <code>df_write_csv</code>), inspection de structure (<code>df_head</code>, <code>df_tail</code>, <code>df_shape</code>) et gestion mémoire haute performance.",
    "features": [],
    "tags": [
      "Langage C",
      "DataFrames en C",
      "Parsing CSV",
      "Prétraitement IA",
      "libcuddle.a"
    ]
  },
  {
    "id": "proj-17",
    "title": "TARDIS — Analyse Prédictive & ML",
    "subtitle": "",
    "category": "ai",
    "badgeText": "Machine Learning",
    "badgeClass": "badge-ai",
    "date": "Sept. - Oct. 2026",
    "featured": false,
    "description": "Dashboard interactif et entraînement d'un modèle de Machine Learning pour l'anticipation de flux de trafic. Analyse exploratoire approfondie (EDA), nettoyage et ingénierie de variables, avec restitution graphique en temps réel sous Streamlit.",
    "features": [],
    "tags": [
      "Python",
      "Scikit-learn",
      "Pandas / NumPy",
      "Streamlit"
    ]
  },
  {
    "id": "proj-18",
    "title": "Popeye — Orchestration Micro-Services Docker",
    "subtitle": "",
    "category": "devops",
    "badgeText": "DevOps & Conteneurs",
    "badgeClass": "badge-devops",
    "date": "Juil. 2026",
    "featured": false,
    "description": "Conteneurisation complète et orchestration d'une architecture micro-services distribuée (Poll, Redis, Worker, PostgreSQL, Result). Écriture de Dockerfiles optimisés multi-stage et orchestration globale via Docker Compose avec isolation réseau étanche et gestion sécurisée des variables d'environnement.",
    "features": [],
    "tags": [
      "Docker",
      "Docker Compose",
      "Micro-services",
      "Multi-stage Build",
      "Réseaux Isolés"
    ]
  },
  {
    "id": "proj-19",
    "title": "Chocolatine — Pipeline CI/CD GitHub Actions",
    "subtitle": "",
    "category": "devops",
    "badgeText": "CI/CD & Automatisation",
    "badgeClass": "badge-devops",
    "date": "Août 2026",
    "featured": false,
    "description": "Automatisation complète du cycle d'intégration continue via GitHub Actions. Définition de workflows rigoureux : analyse statique et vérification du Coding Style, compilation multi-cible sans warnings et exécution automatisée des suites de tests unitaires à chaque push et pull request.",
    "features": [],
    "tags": [
      "GitHub Actions",
      "CI/CD Pipeline",
      "Automatisation",
      "Tests & Linting",
      "Makefile"
    ]
  },
  {
    "id": "proj-20",
    "title": "EpyTodo — API REST Modulaire",
    "subtitle": "",
    "category": "web",
    "badgeText": "Backend / API REST",
    "badgeClass": "badge-web",
    "date": "Sept. 2026",
    "featured": false,
    "description": "Application de gestion de tâches avec API REST sécurisée. Conception en couches modulaires (routes, contrôleurs, middlewares), authentification avec JSON Web Tokens (JWT), validation des requêtes et persistance sous base relationnelle MySQL.",
    "features": [],
    "tags": [
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT & Bcrypt"
    ]
  },
  {
    "id": "proj-21",
    "title": "101pong — Cinématique & Vecteurs 3D",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Calcul Scientifique",
    "badgeClass": "badge-mat",
    "date": "Mars 2026",
    "featured": false,
    "description": "Modélisation physique en espace tridimensionnel de la trajectoire d'une balle. Calcul des coordonnées cartésiennes au temps $t+n$, du vecteur vitesse, prédiction de l'impact avec le plan de la batte et calcul précis de l'angle d'incidence en degrés.",
    "features": [],
    "tags": [
      "Python",
      "Cinématique 3D",
      "Calcul Vectoriel",
      "Géométrie Espace"
    ]
  },
  {
    "id": "proj-22",
    "title": "102architect — Transformations Géométriques 2D",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Algèbre Linéaire",
    "badgeClass": "badge-mat",
    "date": "Mars - Avril 2026",
    "featured": false,
    "description": "Moteur de calcul de transformations affines du plan en coordonnées homogènes. Implémentation des matrices élémentaires (translation, homothétie, rotation, symétrie axiale), composition par produit matriciel 3×3 et projection des coordonnées de points.",
    "features": [],
    "tags": [
      "Python",
      "Coordonnées Homogènes",
      "Produit Matriciel",
      "Transformations Affines"
    ]
  },
  {
    "id": "proj-23",
    "title": "103cipher — Chiffrement Matriciel de Hill",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Cryptographie",
    "badgeClass": "badge-mat",
    "date": "Avril 2026",
    "featured": false,
    "description": "Système cryptographique de chiffrement et déchiffrement polygraphique basé sur les matrices inversibles. Construction dynamique de la matrice clé carrée, calcul du déterminant, inversion matricielle modulaire et multiplication matrice-vecteur.",
    "features": [],
    "tags": [
      "Python / C",
      "Chiffrement de Hill",
      "Inversion de Matrice",
      "Arithmétique Modulaire"
    ]
  },
  {
    "id": "proj-24",
    "title": "104neutrinos — Statistiques en Flux Continu",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Statistiques",
    "badgeClass": "badge-mat",
    "date": "Avril 2026",
    "featured": false,
    "description": "Traitement statistique en temps réel d'un flux continu de données physiques. Calcul en ligne et actualisation dynamique sans réallocation des métriques : moyenne arithmétique, moyenne quadratique (RMS), moyenne harmonique et écart-type (variance).",
    "features": [],
    "tags": [
      "Python",
      "Moyenne Quadratique (RMS)",
      "Écart-Type",
      "Flux Continu"
    ]
  },
  {
    "id": "proj-25",
    "title": "105demography — Régressions & Extrapolation",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Analyse de Données",
    "badgeClass": "badge-mat",
    "date": "Mai 2026",
    "featured": false,
    "description": "Modélisation prédictive de populations mondiales à partir des données démographiques de l'ONU. Ajustement par la méthode des moindres carrés (Fit I & Fit II), calcul du coefficient de corrélation linéaire de Pearson et extrapolation à l'horizon 2050.",
    "features": [],
    "tags": [
      "Python",
      "Moindres Carrés",
      "Corrélation de Pearson",
      "Extrapolation"
    ]
  },
  {
    "id": "proj-26",
    "title": "106bombyx — Modèle Logistique & Chaos",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Systèmes Dynamiques",
    "badgeClass": "badge-mat",
    "date": "Juin - Juil. 2026",
    "featured": false,
    "description": "Simulation mathématique de dynamique de population via la suite logistique de Verhulst. Calcul des états d'équilibre, détection des cycles et bifurcations périodiques et génération de données pour le tracé du diagramme de bifurcation du chaos.",
    "features": [],
    "tags": [
      "Python",
      "Suite Logistique",
      "Théorie du Chaos",
      "Bifurcations"
    ]
  },
  {
    "id": "proj-27",
    "title": "107transfer — Fonctions de Transfert",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Traitement Signal",
    "badgeClass": "badge-mat",
    "date": "Juil. 2026",
    "featured": false,
    "description": "Analyse de transmission de signaux dans des composants électroniques montés en cascade. Évaluation d'expressions rationnelles de polynômes (numérateurs / dénominateurs) et calcul de la réponse en fréquence globale du système pour $x \\in [0, 1]$.",
    "features": [],
    "tags": [
      "Python",
      "Fonctions de Transfert",
      "Polynômes",
      "Traitement du Signal"
    ]
  },
  {
    "id": "proj-28",
    "title": "108trigo — Trigonométrie & Exponentielle Matricielle",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Calcul Matriciel",
    "badgeClass": "badge-mat",
    "date": "Juil. - Août 2026",
    "featured": false,
    "description": "Calcul de fonctions analytiques appliquées à des matrices carrées d'ordre $n$ ($\\cos, \\sin, \\cosh, \\sinh, \\exp$). Algorithme d'approximation numérique par développement en séries entières de Taylor jusqu'au seuil de convergence ($10^{-7}$).",
    "features": [],
    "tags": [
      "Python",
      "Séries de Taylor",
      "Exponentielle Matricielle",
      "Algèbre Linéaire"
    ]
  },
  {
    "id": "proj-29",
    "title": "109titration — Dérivation Discrète & Dosage Chimique",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Analyse Numérique",
    "badgeClass": "badge-mat",
    "date": "Août 2026",
    "featured": false,
    "description": "Détermination automatique du point d'équivalence d'un titrage acido-basique. Calcul des dérivées première et seconde discrètes par différences finies centrées, interpolation polynomiale locale et localisation précise du zéro de la dérivée seconde.",
    "features": [],
    "tags": [
      "Python",
      "Dérivée Discrète",
      "Différences Finies",
      "Interpolation"
    ]
  },
  {
    "id": "proj-30",
    "title": "110borwein — Méthodes d'Intégration Numérique",
    "subtitle": "",
    "category": "mat",
    "badgeText": "Calcul Intégral",
    "badgeClass": "badge-mat",
    "date": "Août 2026",
    "featured": false,
    "description": "Calcul numérique haute précision des intégrales de Borwein $\\int_0^\\infty \\prod \\frac{\\sin(x/a_k)}{x/a_k} dx$. Implémentation comparative de trois schémas d'intégration numérique : méthode des rectangles (point milieu), méthode des trapèzes et règle de Simpson.",
    "features": [],
    "tags": [
      "Python",
      "Intégration Numérique",
      "Règle de Simpson",
      "Méthode des Trapèzes"
    ]
  }
];
