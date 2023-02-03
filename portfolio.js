import animationPathFullstack from './lottie/coding.json'
import animationPathCloudinfra from './lottie/cloudinfra.json'

export const greetings = {
  name: 'Alexis Santibanez',
  title: 'Hola bienvenid@',
  description: 'Desarrollador Full Stack con experiencia en aplicaciones con React, React Native, Python o Nodejs.',
  resumeLink: 'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
}

export const openSource = {
  githubUserName: 'asantiba',
}

export const contact = {}

export const socialLinks = {
  // url: 'https://asantiba.github.io/',
  linkedin: 'https://www.linkedin.com/in/alexis-santibanez-b59780a6/',
  github: 'https://github.com/asantiba',
}

export const skillsSection = {
  title: '¿Que puedo hacer?',
  subTitle:
    'Me desempeño principalmente como desarrollador FULL STACK, sin embargo, me gusta explorar y aprender cualquier área de la ingeniería civil informática.',
  data: {
    title: 'Full Stack Development',
    lottieAnimationFile: animationPathFullstack, // Path of Lottie Animation JSON File
    skills: [
      'Desarrollo de sitio web responsivo SPA (Single-Page-Apps) en React, Redux, Javascript, entre otros.',
      'Desarrollo de aplicación móvil en React Native.',
      'Desarrollo de API RESTFUL en Framework Express o Django.',
    ],
    softwareSkills: [
      {
        skillName: 'HTML-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'CSS-3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'React Native',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Redux',
        fontAwesomeClassname: 'logos:redux',
      },
      {
        skillName: 'Python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'Django',
        fontAwesomeClassname: 'vscode-icons:file-type-django',
      },
      {
        skillName: 'CUDA',
        fontAwesomeClassname: 'vscode-icons:file-type-cuda',
      },
      {
        skillName: 'PHP',
        fontAwesomeClassname: 'logos:php',
      },
      {
        skillName: 'Material UI',
        fontAwesomeClassname: 'logos:material-ui',
      },
      {
        skillName: 'React Bootstrap 5',
        fontAwesomeClassname: 'logos:bootstrap',
      },
    ],
  },
}

export const cloudSkillsSection = {
  title: 'Cloud Infra-Architecture',
  lottieAnimationFile: animationPathCloudinfra, // Path of Lottie Animation JSON File
  skills: [
    'Experiencia en Google Cloud Platforms y Amazon Web Services.',
    'Hosting y mantención de sitio web en instancia con integración de base de datos.',
  ],
  softwareSkills: [
    // ? Check README To get icon details
    {
      skillName: 'AWS',
      fontAwesomeClassname: 'logos:aws',
    },
    {
      skillName: 'Google Cloud Platform',
      fontAwesomeClassname: 'vscode-icons:file-type-gcloud',
    },
    {
      skillName: 'MySQL',
      fontAwesomeClassname: 'logos:mysql',
    },
    {
      skillName: 'Mongodb',
      fontAwesomeClassname: 'logos:mongodb',
    },
    {
      skillName: 'Github',
      fontAwesomeClassname: 'akar-icons:github-fill',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'logos:docker-icon',
    },
  ],
}

export const educationInfo = [
  {
    schoolName: 'Universidad Técnica Federico Santa María',
    subHeader: 'Ingeniería Civil Informática',
    duration: 'Marzo 2014 - Julio 2021',
    desc: 'Egresado en Ingeniería civil informática, en proceso de titulación (fecha estimada examen de grado: marzo).',
  },
]

export const experience = [
  {
    role: 'FullStack Developer - Practica Profesional',
    company: 'Departamento de Informática',
    imagenes: [`${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/scg.png`, `${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/scg2.png`],
    date: 'Abril 2022 – Enero 2023',
    desc: 'Desarrollo de aplicación web para administrar el proceso de Planificación y Control de Gestión en React, Redux, Express (Nodejs), Mysql, AWS (IAM, RDS, EC2, S3, Cloudfront, Route 53), Docker, Webpack, Material UI, JWT.',
  },
  {
    role: 'FullStack Developer - Freelance',
    company: 'Node Quantum',
    imagenes: [`${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/siderval1.png`, `${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/siderval2.png`],
    date: 'Octubre 2018 – Marzo 2020',
    desc: 'Desarrollador Fullstack en HTML, CSS, Javascript, Nodejs y Mysql. Orientado a desarrollo de portal educativo, y sistema a organización industrial que requiere digitalizar procesos de almacenamiento, producción y administración.',
  },
  {
    role: 'Software Developer - Práctica Industrial',
    company: 'Mindfree Ingeniería',
    imagenes: [],
    date: 'Enero 2018 – Marzo 2018',
    desc: 'Desarrollo en PHP, Laravel, Mysql. Enfocado a entregar soluciones en plataformas educacionales en Moodle, en Práctica Industrial.',
  },
]

export const projects = [
  {
    name: 'Estudiente',
    desc: 'Aplicación móvil que busca presentar un catálogo de tratamientos dentales a bajo costo, impartidos por estudiantes de odontología. Desarrollado en React Native, Django (Python), MongoDB, Firebase (Authentication, OAuth, Cloud Messaging) y AWS (EC2, RDS mysql, Cloudfront).',
    github: 'https://github.com/asantiba/estudiente_feria2019',
    imagenes: [
      `${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/estudiente1.png`,
      `${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/estudiente2.png`,
      `${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/estudiente3.png`,
    ],
  },
  {
    name: 'Sitio Estudiente',
    desc: 'Aplicación web de app Estudiente para informar y promocionar el producto desarrollado. Desarrollado en Javascript, Express, AWS (Ec2, CloudFront)',
    github: 'https://github.com/asantiba/sitio_estudiente',
    imagenes: [`${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/sitioEstudiente.jpg`],
  },
  {
    name: 'Portafolio',
    desc: 'Aplicación web de Portafolio de desarrollador de software. Desarrollado en Reactjs y Nextjs.',
    github: 'https://github.com/asantiba/portafolio',
    imagenes: [`${process.env.NEXT_PUBLIC_IMAGES}/img/imagenes/portafolio.png`],
  },
]

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Alexis Santibáñez',
  description:
    'Soy desarrollador Full Stack con experiencia en aplicaciones con Javascript, React, React Native, Python con framework Django, y/o Nodejs con framework Express.',
  author: 'Alexis Santibáñez',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://github.com/asantiba',
  keywords: ['Portafolio'],
}
