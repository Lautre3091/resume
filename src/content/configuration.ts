import Resume from "@/src/content/fr/resume/resume";
import CV from "@/src/content/fr/cv/cv";
import { Configuration } from "@/src/model/configuration.model";

export const configuration: Configuration = new Configuration({
  repoUrl: "https://github.com/Lautre3091/resume",

  variants: [
    {
      locale: {
        label: "Français",
        url: "fr",
        navigatorLanguage: /fr/,
        htmlLang: "fr",
        openGraph: "fr_FR",
      },
      infos: {
        anonymousName: "GGE",
        firstName: "Gweltaz",
        lastName: "Gestin",
        jobTitle: "Tech Lead, Full-stack",
        pageTitle: (variant) =>
          `${variant.infos.firstName()} ${variant.infos.lastName()} - ${variant.infos.jobTitle()}`,
        pageDesc: (variant) =>
          `CV de ${variant.infos.firstName()} ${variant.infos.lastName()}`,
        fullName: (variant) =>
          `${variant.infos.firstName()} ${variant.infos.lastName()}`,
        location: "Rennes",
      },
      socials: {
        linkedIn: "linkedin.com/in/gweltazgestin",
        github: "github.com/Lautre3091",
        gitlab: "gitlab.com/Lautre3091",
      },
      documents: [
        {
          singlePage: true,
          headerTitle: "CV",
          pdfName: "CV_GESTIN_Gweltaz_tech_lead.pdf",
          hoverDownload: "Télécharger le CV",
          hoverPrint: "Imprimer le CV",
          component: Resume,
        },
        {
          singlePage: false,
          headerTitle: "Dossier de compétence",
          pdfName: "CV_GESTIN_Gweltaz_tech_lead_dossier_de_competences.pdf",
          hoverDownload: "Télécharger le dossier de compétence",
          hoverPrint: "Imprimer le dossier de compétence",
          component: CV,
        },
      ],
    },
  ],
});
