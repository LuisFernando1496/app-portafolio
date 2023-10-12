import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  iconMaya,

  s_egresados,
  telesis,
  blog_memorial,
  erp_tj,
  erp_val,

  threejs,
  iconMercaArte,
  iconInusual,
  iconMemorial,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
 
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Desarrollador Frontend",
    icon: backend,
  },
  {
    title: "Mantenimiento y optimizacion de sitios",
    icon: backend,
  }
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack",
    company_name: "Universidad Maya",
    icon: iconMaya,
    iconBg: "#383E56",
    date: "Mayo 2022 - a la fecha",
    points: [
      "Colaborar con el equipo en el desarrollo de FrontEnd con Angular 4.4 la aplicacion de control escolar.",
      "Desarrollador BackEnd para nuevos modulos con Laravel 5.4 y 8.",
      "Desarrollo del modulo de facturacion usando API de Factura.com",
      "Ser parte del equipo que desarrolla un CRM para el control de ventas e inscripciones en línea, el cual también se pretende conectar con otras aplicaciones de la institución como la aplicación de Control escolar, plataforma virtual de tareas y cursos, pagos en línea y control de comisiones por vendedor.",
      "Administrar los servidores de la universidad en donde se encuentran alojados los sistemas usando: Distribución de Linux Ubuntu Server 18.04, Nginx Servidor web, Proxy. Windows Server 2012 SII.",
      "Se implementó el uso de WebHook para notificar pagos realizados en OxxoPay de la pasarela de pago Conekta en la aplicación de pagos en línea desarrollada en .NET Core 3.0.",
    ],
  },
  {
    title: "Full-Stack",
    company_name: "MercaArte",
    icon: iconMercaArte,
    iconBg: "#E6DEDD",
    date: "Agosto 2021 - A la fecha",
    points: [
      "Desarrollo e implementacion de un ERP para TJGreens Shop.",
      "Despliegue del sistema en Amazon Web Services y posteriormente en  Google cloud Platform.",
      "Desarrollo e implementacion de un ERP para Valparaiso DaySpa. El despliegue de la aplicacion en Amazon Web Services",
      "Herramientas usadas: Distribución de Linux Ubuntu Server 20, Certbot para usar HTTPS, Laravel v6, javascript ECMASCRIPT 6, JQuery, MySQL, GitHub, EC2, RDS, Route 53.",

    ],
  },
  {
    title: "Full-Stack",
    company_name: "InusualSoftware",
    icon: iconInusual,
    iconBg: "#E6DEDD",
    date: "Agosto 2021 - Abril 2022",
    points: [
      "Levantamiento de requerimientos con los clientes nuevos.",
      "Presentación de la demo del punto de venta.",
      "Asesoría técnica con los clientes.",
      "Administración de servidores en CPanel.",
      "Planeación y diseño de sistemas nuevos.",

    ],
  },
  {
    title: "Full-Stack",
    company_name: "Memorial Portal Divino",
    icon: iconMemorial,
    iconBg: "#E6DEDD",
    date: "Mayo 2021 - Agosto 2021",
    points: [
      "Desarrollar de backend y frontend usando Laravel 8, jetstream y Laravel fortify como metodos de autenticación en donde también se incluye el diseño. Ademas de implementar las pasarelas de pago como PayPal, Mercado Pago y Stripe.",
      "Detectar errores en el sistema.",
      "Desplegar el sistema en un servidor el cual se compro en Hostinger con cpanel.",

    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "Control escolar",
    description:
      `Sistema realizado para llevar el control escolar de cualquier escuela, ya que esta desarrollado de forma genérica. Se puede llevar el control
      de estudiantes, matriculas, profesores, calificaciones, generación de boletas, materias, horarios, suspensión de alumnos, cuenta con diferentes
      roles de usuarios administrador, profesores, alumnos y tutores.`,
    tags: [
      {
        name: "Laravel 8",
        color: "blue-text-gradient",
      },
      {
        name: "JetStream",
        color: "green-text-gradient",
      },
      {
        name: "Livewire",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: telesis,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bolsa de trabajo",
    description:
      `Sistema desarrollado para gestionar la bolsa de trabajo y convenios que tiene el Tecnológico Nacional de México campus Tuxtla, dentro del
      sistema se puede agregar imágenes y descripción del trabajo para que los alumnos o egresados puedan visualizar las opciones. Además el sistema
      muestra actividades que necesitan los alumnos para completar su retícula. Tiene un modulo para poder chatear en tiempo real para aclarar dudas.`,
    tags: [
      {
        name: "Laravel 8",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
    ],
    image: s_egresados,
    source_code_link: "https://github.com/",
  },
  {
    name: "ERP punto de venta",
    description:
      `Punto de venta generico, para control de inventarios, ventas, usuarios, sucursales, clientes y para la generacion de reportes.`,
    tags: [
      {
        name: "Laravel 6",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap 4",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: erp_tj,
    source_code_link: "https://github.com/",
  },
  {
    name: "Control de punto de venta",
    description:
     `Sistema para el control de ventas y almecen, ademas permite realiza el control de accesos y membresias de clientes`,
    tags: [
      {
        name: "Laravel 8",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel stisla",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: erp_val,
    source_code_link: "https://github.com/",
  },
  {
    name: "Memorial portal divino",
    description:
      `Este sitio web esta diseñado usando la estructura de blog para que los usuarios puedan interactuar entre si, en el se pueden 
      realizar posteos de personas que han fallesido y sus seres queridos desean rendir un homenaje subiendo imagenes, musica o videos cortos,
      los demas usuarios pueden comentar o reaccionar al post. Los post se mantienen si se realiza una suscripcion anual de $100.00 MXN.`,
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel sactum",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "green-text-gradient",
      },
      {
        name: "Mercado Pago",
        color: "green-text-gradient",
      },
     
    ],
    image: blog_memorial,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
