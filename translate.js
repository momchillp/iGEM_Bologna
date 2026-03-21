// translate.js

// Translation dictionary
const translations = {
  "en": {
    "hero-title": "Engineering Precision Cancer Therapy",
    "hero-subtitle": "Using engineered bacteriophages to deliver CRISPR directly to tumor cells",
    "btn-project": "Explore Project",
    "btn-sponsor": "Become a Sponsor",
    "project": "Project",
    "team": "Team",
    "stat1": "Lab Hours",
    "stat2": "Team Members",
    "stat3": "Global Teams",
    "phage1": "Why?",
    "phage2": "Our M13 bacteriophage is engineered to deliver CRISPR machinery precisely to tumor cells.",
    "phage3": "How?",
    "phage4": "The capsid and tail fibers enable specific recognition of cell receptors, ensuring targeted gene editing.",
    "igem-title": "What is iGEM?",
    "igem-text": "iGEM is an international synthetic biology competition where student teams design and build biological systems using standardized genetic parts and integrating laboratory research, computational design, entrepreneurship, and science communication.",
    "igem-text2": `Each year, many different teams from universities around the world develop innovative projects addressing global challenges regarding issues in fields such as health, sustainability, biotechnology, or environmental protection.
At the end of the experience, each team will present the results obtained in a huge exhibition, and they will compete to win medals and special awards.
In 2025, more than 400 teams from 66 countries took part in the competition, with over 5000 participants.`,
    "project-title": "About Our Project",
    "project-text": "Our project goal is to develop a targeted delivery system using engineered bacteriophages as precise carriers for CRISPR/CAS gene-editing tools. By applying peptide-targeting technology, we program bacteriophages to recognize specific receptors expressed on cancer cells. This approach enables the selective delivery of gene-editing machinery directly to tumor cells, improving targeting accuracy while minimizing effects on healthy tissues",
    "project-aim-text": "The aim of this project is to develop a targeted double CAS9/gRNA delivery system capable of editing oncogenic punctual mutations in cancer cells. To accomplish this, we plan to use phage display to identify peptides that bind specific tumor cell receptors and engineer bacteriophages to deliver CAS9-base editor tools directly to these cells. The first validation step would be through a fluorescence-based proof of concept, starting in E. coli than moving in eukaryotic cancer cell lines. The system will be applied to edit point mutations in driver oncogenes.",
    "team-title": "Meet the Team",
    "team-text": "Our team is composed of international and interdisciplinary students with backgrounds in molecular biology, synthetic biology, bioinformatics, biochemistry, biomedical engineering, and genetics.",
    "team-extra": "This wide spectrum allows us to confront the project from multiple perspectives, including experimental design, computational modeling, and forward applications. The whole team collaborates closely to design experiments, analyze results, and communicate findings to achieve better results. Four more positions will be filled in the next month.",
    "sponsor-title": "Become a Sponsor",
    "sponsor-text": " Support our project and help us make an impact in synthetic biology.
  Partner with us to drive innovation and research forward.",
    "btn-contact": "Contact Us",
    "lorenzo-role": "BSc in Biotechnology, currently studying Molecular and Cell Biology.",
    "francesca-role": "BSc in Biotechnology, currently studying Molecular and Cell Biology.",
    "sara-role": "BSc in Biotechnology, currently studying Molecular and Cell Biology.",
    "mariana-role": "BSc in Pharmacological and Biological Chemistry, currently studying Molecular and Cell Biology.",
    "momchil-role": "Undergraduate, currently studying Genomics."
  },
  "it": {
    "hero-title": "Terapia del cancro di precisione ingegneristica",
    "hero-subtitle": "Utilizzo di batteriofagi geneticamente modificati per veicolare la tecnologia CRISPR direttamente alle cellule tumorali.",
    "btn-project": "Esplora progetto",
    "btn-sponsor": "Diventa uno sponsor",
    "project": "Progetto",
    "team": "Squadra",
    "stat1": "Orari di laboratorio",
    "stat2": "Membri della squadra",
    "stat3": "Squadre globali",
    "phage1": "Perché?",
    "phage2": "Il nostro batteriofago M13 è stato progettato per veicolare il sistema CRISPR con precisione alle cellule tumorali.",
    "phage3": "Come?",
    "phage4": "Il capside e le fibre della coda consentono il riconoscimento specifico dei recettori cellulari, garantendo una modifica genetica mirata.",
    "igem-title": "Cos'è iGEM?",
    "igem-text": "iGEM è una competizione internazionale di biologia sintetica in cui i team di studenti progettano e costruiscono sistemi biologici utilizzando parti genetiche standardizzate e integrando ricerca di laboratorio, design computazionale, imprenditorialità e comunicazione scientifica.",
    "igem-text2": `Ogni anno squadre provenienti da università di tutto il mondo sviluppano progetti innovativi per affrontare sfide globali in ambiti quali salute, sostenibilità, biotecnologia e tutela ambientale. Al termine della competizione, i team presentano i risultati ottenuti durante una grande esposizione internazionale e competono per l’assegnazione di medaglie e premi speciali. Nel 2025 hanno partecipato alla competizione oltre 400 team provenienti da 66 paesi, per un totale di più di 5000 partecipanti.`, 
    "project-title": "Il Nostro Progetto",
    "project-text": "L'obiettivo del nostro progetto è sviluppare un sistema di consegna mirata utilizzando batteriofagi ingegnerizzati come vettori precisi per strumenti di editing genico CRISPR/CAS. Applicando la tecnologia di targeting peptidico, programmiamo i batteriofagi per riconoscere recettori specifici espressi sulle cellule tumorali. Questo approccio consente la consegna selettiva della macchina di editing genico direttamente alle cellule tumorali, migliorando la precisione del targeting e minimizzando gli effetti sui tessuti sani.",
    "project-aim-text": "L'obiettivo di questo progetto è sviluppare un sistema di consegna mirato doppio CAS9/gRNA in grado di modificare mutazioni puntuali oncogeniche nelle cellule tumorali. Per realizzarlo, prevediamo di usare il phage display per identificare peptidi che si leghino a recettori specifici delle cellule tumorali e ingegnerizzare batteriofagi per consegnare strumenti CAS9-base editor direttamente a queste cellule. Il primo passo di validazione sarà tramite una prova di concetto basata su fluorescenza, iniziando in E. coli e successivamente in linee cellulari tumorali eucariotiche. Il sistema sarà applicato per modificare mutazioni puntuali in oncogeni driver.",
    "team-title": "Incontra il Team",
    "team-text": "Il nostro team è composto da studenti internazionali e interdisciplinari con background in biologia molecolare, biologia sintetica, bioinformatica, biochimica, ingegneria biomedica e genetica.",
    "team-extra": "Questa ampia gamma ci permette di affrontare il progetto da molteplici prospettive, incluso design sperimentale, modellizzazione computazionale e applicazioni future. L'intero team collabora strettamente per progettare esperimenti, analizzare risultati e comunicare i risultati per ottenere performance migliori. Quattro posizioni aggiuntive saranno occupate nel prossimo mese.",
    "sponsor-title": "Diventa Sponsor",
    "sponsor-text": "Sostieni il nostro progetto e aiutaci a lasciare il segno nella biologia sintetica.
Collabora con noi per promuovere l'innovazione e la ricerca.",
    "btn-contact": "Contattaci",
    "lorenzo-role": "Laurea triennale in Biotecnologie — attualmente studente di Biologia Molecolare e Cellulare.",
    "francesca-role": "Laurea triennale in Biotecnologie — attualmente studentessa di Biologia Molecolare e Cellulare.",
    "sara-role": "Laurea triennale in Biotecnologie — attualmente studentessa di Biologia Molecolare e Cellulare.",
    "mariana-role": "Laurea triennale in Chimica Farmaceutica e Biologica — attualmente studentessa di Biologia Molecolare e Cellulare.",
    "momchil-role": "Studente universitario — attualmente studia Genomica."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Translate function using data-i18n keys
  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang].hasOwnProperty(key)) {
        el.textContent = translations[lang][key];
      }
    });

    // Update active flag
    document.querySelectorAll(".flag-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`.flag-btn[data-lang="${lang}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    // Save language
    localStorage.setItem("lang", lang);
  }

  // Flag buttons click events
  document.querySelectorAll(".flag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      translatePage(lang);
    });
  });

  // On page load, use saved language or default to English
  const savedLang = localStorage.getItem("lang") || "en";
  translatePage(savedLang);
});