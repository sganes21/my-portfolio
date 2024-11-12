export interface ProfessionalRole {
  title: string;
  year: string;
  description: string[];

}

export const projects: ProfessionalRole[] = [
  {
    title: "Technical Lead",
    year: "June 2022 - Present",
    description:
      ["Software lead managing teams responsible for the development of the customized operating system and cybersecurity posture for the Velys software platform."],
     
  },
  {
    title: "Senior Product Development Engineer",
    year: "August 2019 - May 2022",
    description:
      ["Leading wide range of software documentation efforts in preparation for 510k submission and full commercial launch."],
  },
  {
    title: "Software Developer",
    year: "October 2014 - August 2019",
    description:
      ["Designing first generation image guided medical device products (focus on surgical robots).","Responsible for developing and optimizing proprietary algorithms that directs device to image registration of a needle guide prototype in CT images.", "Principal author of three patents." ],
  },
];
