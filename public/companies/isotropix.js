const details = {
  headerParas: [
    "I've been extremely lucky to work as both a developer and consultant for some <i>fantastic</i> companies over the last 12 years, creating iPad apps, web apps, award-winning VFX pipeline tools, and game-changing design applications, all of which push the boundaries of what an end user can achieve.",
    "I love making data flow between applications in occasionally odd but incredibly useful ways. As such, the majority of my freelance work today involves either prototyping new and unique workflows between existing technologies, or increasing the accessibility of disparate and often esoteric datasets, by creating new applications along with the pipelines necessary to support them.",
    "A selection of the projects I have worked on are presented below, covering a wide range of platforms, coding languages, and deliverables. Whilst the majority of these projects are for clients in the VFX and design industries, several of my more recent freelance projects also involve exploring creative ways of working with, and increasing the accessibility of, scientific data.",
    "I live in <b>Bristol, UK</b>, and can be contacted at <span class='text-cv font-bold tracking-wider'>matt@mattbrealey.com</span>.",
  ],
  jobs: [
    {
      title: "Developer",
      company: "Natural History Museum",
      startDate: "Aug 2020",
      endDate: "Present",
      skills: ["Prototyping", "Web-App", "SvelteJS", "TailwindCSS", "Python", "SfM", "3D"],
      detailsText: "Created a <i>Svelte</i> web-app and <i>Falcon</i> back-end that uses <i>OpenSfM</i>, a python-based open-source structure-from-motion library, to automatically convert imagery uploaded by museum employees into 3D scenes they can navigate in their browser. Whilst the primary goal of the project was to support imagery from archaeological sites, I also worked closely with members of the NHM's <i>Planetary Surfaces Group</i> to ensure that the app would support imagery captured with the <i>Pancam</i> instrument on-board the <i>ExoMars</i> rover which is launching in 2022, giving them an accessible way of analysing the rover's surroundings in 3D."
    },
    {
      title: "Pipeline TD",
      company: "Bait Studio",
      startDate: "Jan 2020",
      endDate: "Dec 2021",
      skills: ["Prototyping", "VFX", "Pipeline", "Ftrack", "Web-App", "SvelteJS", "TailwindCSS", "Python"],
      detailsText: "Created <i>Trawler</i>, a minimalist asset library tool for small/mid-sized studios, as part of a project funded by <i>Clwstwr</i>, an R&D program based in South Wales. <i>Trawler</i> consisted of a <i>Svelte</i> web-app and <i>Falcon</i> back-end, running perpetually on the studio's render farm. It automatically tracked assets throughout the studio without enforcing particular file-structures or artist workflows - a 'hands-off' approach that proved extremely useful, as <i>Trawler</i> was available and up-to-date whenever an artist needed it. Additionally consulted on all aspects of a pipeline overhaul, currently scheduled for early-2022."
    },
    {
      title: "Senior iOS Developer",
      company: "Swatchbook",
      startDate: "Feb 2019",
      endDate: "Present",
      skills: ["iOS", "iPad", "Swift", "Design", "Prototyping", "UX", "UI", "3D"],
      detailsText: "Was the sole developer on the first version of the <i>Mix</i> iPad app, a tool targeted towards apparel & product designers at large brands, that allows them to quickly iterate during the materialisation of products. The app uses the real-world materials and 3D models in a user's <i>Swatchbook</i> account, and uses a rules-based approach to automatically suggest variants of a design, all of which can be viewed in 3D or AR, and which can subsequently be rated, edited, and saved for further review/production. Currently the lead iOS developer in a team of 4 working on the next release of the product."
    },
    {
      title: "Developer",
      company: "Filigree",
      startDate: "Mar 2018",
      endDate: "Jun 2018",
      skills: ["Prototyping", "Web-App", "React", "Node", "Electron", "Python"],
      detailsText: "Prototyped the initial build of the <i>Filigree</i> application (then known as <i>Wire</i>) which used a combination of <i>React</i>, <i>Express</i>, <i>GraphQL</i> and <i>Electron</i> to create a desktop app that communicated with the core application code via a <i>Python</i> wrapper. Optimisation of the dataflow throughout the pipeline was the key challenge throughout this work."
    },
    {
      title: "Lead Developer",
      company: "Territory Studio",
      startDate: "Nov 2017",
      endDate: "Sept 2018",
      skills: ["VFX", "Prototyping", "React", "Node", "Web-App", "Shotgun", "Python"],
      detailsText: "Designed and prototyped the <i>Territory Toolkit</i>, an app that provided a custom unified interface to <i>Shotgun</i> inside both the <i>Adobe Creative Suite</i> and <i>Cinema 4D</i>. Using a combination of <i>Python</i>, <i>Node</i>, <i>React</i> and <i>Express</i>, the <i>Toolkit</i> massively sped up asset generation and review, whilst minimising manual data-entry throughout the studio. The app won the <i>2018 Shotgun Pipeline Award</i>."
    },
    {
      title: "Pipeline TD",
      company: "Territory Studio",
      startDate: "Oct 2016",
      endDate: "Mar 2017",
      skills: ["VFX", "Pipeline", "Prototyping", "Shotgun", "Python"],
      detailsText: "Managed development of a full film/commercial VFX pipeline at a motion-graphics oriented, London-based VFX studio. Required extensive knowledge of the 2D/3D digital content-creation process, and an ability to navigate and utilise relevant APIs, recognising and planning around any inherent limitations. Primarily focused around using <i>Shotgun</i> as a review hub for motion-graphics and VFX artists."
    },
    {
      title: "Colorway Product Manager",
      company: "The Foundry",
      startDate: "May 2014",
      endDate: "Sept 2016",
      skills: ["Team Management", "UX", "UI", "Design", "Python", "Prototyping", "3D"],
      detailsText: "Researched, designed, and prototyped a groundbreaking application for the design industry. Oversaw a team of five developers, two Q.A.s and a product designer to develop the first release. Completed significant technical workflow planning for the second, massively expanded release, to target the product design, packaging and art-working industries at an enterprise level. Delivering an extremely ambitious application on time, it remains something I’m immensely proud of."
    },
    {
      title: "Product Designer",
      company: "The Foundry",
      startDate: "June 2012",
      endDate: "April 2014",
      skills: ["Prototyping", "UX", "UI", "VFX", "Python"],
      detailsText: "Worked primarily on <i>Hiero</i> for its first three releases post-launch, soon expanding to oversee workflow designs for all <i>Foundry</i> applications. Quickly prototyped tools to solve a broad range of 2D and 3D workflow problems throughout the VFX pipeline, from modelling and texture painting, to final compositing and finishing. Worked closely with studios to ensure that the tools solved the widest range of problems, whilst not compromising functionality."
    },
    {
      title: "Creative Specialist",
      company: "The Foundry",
      startDate: "Oct 2010",
      endDate: "May 2012",
      skills: ["Presenting", "Demoing", "Prototyping", "VFX", "Python"],
      detailsText: "Presented <i>The Foundry</i>’s software and VFX techniques across the world, to groups ranging from 5-500 people covering various levels of expertise. Continued to develop tools specifically to solve the creative problems I encountered."
    }
  ]
}

export { details }