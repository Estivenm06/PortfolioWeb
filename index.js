let language;
const buttonEn = document.querySelector(".buttonEn");
const buttonEs = document.querySelector(".buttonEs");

const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const projects = document.querySelector(".projects");

const im = document.querySelector('.im');

// IIFE Function
(function () {
  const alreadyLanguage = localStorage.getItem("language");
  if (alreadyLanguage) {
    language = JSON.parse(alreadyLanguage);
  } else {
    language = "en";
    localStorage.setItem("language", JSON.stringify(language));
  }
  applyLanguageStyle();
  applyContentWithLanguage();
})();

// Apply Language Function
function applyLanguageStyle() {
  buttonEn.className = "buttonEn";
  buttonEs.className = "buttonEs";
  buttonEn.classList.add(
    "bg-stone-600",
    "px-3",
    "py-1",
    "text-white",
    "rounded-l-lg",
    "shadow-md"
  );
  buttonEs.classList.add(
    "bg-gray-200",
    "px-3",
    "py-1",
    "text-stone-600",
    "rounded-r-lg",
    "shadow-md"
  );

  if (language === "en") {
    buttonEs.classList.add(
      "hover:bg-stone-600",
      "transition-colors",
      "duration-200",
      "ease-in-out",
      "cursor-pointer",
      "hover:text-white"
    );
    buttonEn.classList.add("bg-gray-200", "text-stone-600");
  } else if (language === "es") {
    buttonEn.classList.remove("bg-stone-600", "text-white");
    buttonEn.classList.add(
      "hover:bg-stone-600",
      "transition-colors",
      "duration-200",
      "ease-in-out",
      "cursor-pointer",
      "hover:text-white",
      "bg-gray-200",
      "text-stone-600"
    );
    buttonEs.classList.add("bg-stone-600", "text-white");
  }
}

// Function to insert the content of the page
function applyContentWithLanguage() {
  if (language === "en") {
  // Im
  im.innerText = "Web Developer";
  // Column 1
  column1.innerHTML = `
    <h1 class='text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7'>Profile</h1>
    <p class='font-light leading-relaxed'>
    I'm a passionate junior developer with experience in JavaScript,
    TypeScript, Python, React.js, and backend development with Node.js.
    Fluent in English and Spanish, I thrive in diverse teams and bring
    strong communication skills, eagerness to learn, and a drive to
    contribute to dynamic environments.
  </p>
</article>
<article>
  <h1
    class='text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7'
  >
    Skills
  </h1>
  <ul class='flex flex-col justify-center items-center gap-5'>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>Javascript</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>UI Design</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>React / React Native</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>MongoDB</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>Node.js</p>
    </li>
  </ul>
</article>
<article>
  <h1
    class='text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7'
  >
    Languages
  </h1>
  <ul
    class='flex flex-col justify-center items-center text-balance gap-5'
  >
    <li class='flex justify-center flex-col items-center'>
      <h4
        class='font-bold uppercase text-md text-stone-800 text-center'
      >
        Spanish
      </h4>
      <p class='font-light'>Native</p>
    </li>
    <li class='flex flex-col justify-center items-center'>
      <h4
        class='font-bold uppercase text-md text-stone-800 text-center'
      >
        English
      </h4>
      <a
        href='https:cert.efset.org/4vECty'
        target='_blank'
        class='text-blue-800 hover:font-bold duration-300 transition-all font-light'
        >B2 Upper Intermediate</a
      >
    </li>
  </ul>
    `;
  // Column 2
  column2.innerHTML = `
    <h1
          class="text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7"
        >
          Studies
        </h1>
        <ul class="flex flex-col justify-center items-center gap-5">
          <li class="flex flex-col justify-center items-center">
            <h4 class="font-bold uppercase text-md text-stone-800">
              Universidad del Norte
            </h4>
            <p class="font-light">Systems engineering, 2025 - en curso</p>
          </li>
          <li class="flex flex-col justify-center items-center">
            <h4 class="font-bold uppercase text-md text-stone-800">
              Codetec
            </h4>
            <p class="font-light">Graphic Designer, 2023 - 2024</p>
          </li>
        </ul>
      </article>
      <article>
        <h1
          class="text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7"
        >
          Experience
        </h1>
        <ul class="flex flex-col justify-center items-center gap-5">
          <li>
            <h4
              class="font-bold uppercase text-md text-stone-800 text-center"
            >
              Monitor (Volunteer)
            </h4>
            <span
              class="font-semibold uppercase text-sm text-stone-400 text-center"
              >Fundacion ROFÉ - Mar 2024 to Nov 2024
            </span>
            <p class="font-light leading-relaxed">
              My role as a monitor was to be the leader of young aspiring
              entrepreneurs interested in web logic programming, guiding them
              throughout their courses so they are able to learn new knowledge
              and emphasize web development.
            </p>
          </li>
          <li>
            <h4
              class="font-bold uppercase text-md text-stone-800 text-center"
            >
              Nurse Robot
            </h4>
            <span
              class="font-semibold uppercase text-sm text-stone-400 text-center"
              >Unisimón - Feb 2024 to Nov 2024
            </span>

            <p class="font-light leading-relaxed">
              My role as a leader of this project was to make a robot with new
              technology to innovate in the healthcare field, which focused on
              a program to recognize vital signs with less effort and reducing
              the risk of misdiagnosis.
            </p>
          </li>
        </ul>
    `;
    // Projects
  projects.innerHTML = `
    <h1
        class="text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7"
      >
        PROJECTS
      </h1>
      <ul class="grid sm:grid-cols-2 justify-center items-stretch gap-5">
        <li class="h-full">
          <a
            href="https://estivenm06.github.io/final-project/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-indigo-800 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h2 class="text-stone-800 text-lg text-pretty">
              Nebulã Corporation
              <span class="font-bold">(First Version)</span>
            </h2>
            <p class="text-sm text-light text-justify leading-relaxed">
              Our mission is to bring the wonders of the universe to your
              screen, allowing you to explore the cosmos from the comfort of
              your home.
            </p>
            <ul class="flex gap-2 w-full mt-5 flex-wrap">
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                GIT
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                HTML
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                CSS
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                JavaScript
              </li>
            </ul>
          </a>
        </li>
        <li class="h-full">
          <a
            href="https://novacorporation.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-indigo-800 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h2 class="text-stone-800 text-lg text-pretty">
              Nebulã Corporation
              <span class="font-bold">(Latest Version)</span>
            </h2>
            <p class="text-sm text-light text-justify leading-relaxed">
              Our mission is to bring the wonders of the universe to your
              screen, allowing you to explore the cosmos from the comfort of
              your home.
            </p>
            <ul class="flex gap-2 w-full mt-5 flex-wrap">
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                GIT
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                HTML
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                CSS
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                JavaScript
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                TailwindCSS
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                Webpack
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                Pug
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                Express.JS
              </li>
            </ul>
          </a>
        </li>
        <li class="h-full">
          <a
            href="https://leave-request-dashboard-2g4p.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-sky-600 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h2 class="text-stone-800 text-pretty text-lg">
              Leave Request Dashboard
            </h2>
            <p class="text-sm text-light leading-relaxed">
              Modern web application designed to simplify and streamline the
              process of requesting and managing employee leaves.
            </p>
            <ul class="flex gap-2 w-full mt-5 flex-wrap">
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                GIT
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                Next.JS
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                React
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                TailwindCSS
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                UI5WebComponents
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                TypeScript
              </li>
            </ul>
          </a>
        </li>
        <li class="h-full">
          <a
            href="https://learnai-ruddy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-stone-800 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h2 class="text-pretty text-lg text-stone-800">Learn AI</h2>

            <p class="text-sm text-light leading-relaxed">
              Educational web application designed to introduce users to the
              fundamentals of artificial intelligence in an accessible and
              interactive way.
            </p>
            <ul class="flex gap-2 w-full mt-5 flex-wrap">
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                GIT
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                React
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                UI5WebComponents
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                Vite
              </li>
            </ul>
          </a>
        </li>
        <li class="h-full">
          <a
            href="https://e-commerce-nextjs-eight-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-stone-800 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h2 class="text-pretty text-lg text-stone-800">E-commerce</h2>

            <p class="text-sm text-light leading-relaxed">
              The project features a dynamic product catalog with category
              filtering, smooth loading states using skeleton components, and
              a fully functional shopping cart managed through the useReducer
              hook with persistence via localStorage.
            </p>
            <ul class="flex gap-2 w-full mt-5 flex-wrap">
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                Next.JS
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                React
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                TypeScript
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                GIT
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                UI5WebComponents
              </li>
              <li
                class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md"
              >
                TailwindCSS
              </li>
            </ul>
          </a>
        </li>
      </ul>
    `;
  } else if (language === "es") {
  // Soy
  im.innerText = "Desarrollador Web";
  // Columna 1
  column1.innerHTML = `
    <h1 class='text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7'>Perfil</h1>
<p class='font-light leading-relaxed'>
  Soy un apasionado desarrollador junior con experiencia en JavaScript,
  TypeScript, Python, React.js y desarrollo backend con Node.js.
  Fluido en inglés y español, destaco en equipos diversos y aporto
  sólidas habilidades de comunicación, disposición para aprender y
  motivación para contribuir en entornos dinámicos.
</p>
</article>
<article>
  <h1 class='text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7'>
    Habilidades
  </h1>
  <ul class='flex flex-col justify-center items-center gap-5'>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>JavaScript</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>Diseño de Interfaces (UI)</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>React / React Native</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>MongoDB</p>
    </li>
    <li class='flex justify-center flex-col items-center'>
      <p class='font-light'>Node.js</p>
    </li>
  </ul>
</article>
<article>
  <h1 class='text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7'>
    Idiomas
  </h1>
  <ul class='flex flex-col justify-center items-center text-balance gap-5'>
    <li class='flex justify-center flex-col items-center'>
      <h4 class='font-bold uppercase text-md text-stone-800 text-center'>
        Español
      </h4>
      <p class='font-light'>Nativo</p>
    </li>
    <li class='flex flex-col justify-center items-center'>
      <h4 class='font-bold uppercase text-md text-stone-800 text-center'>
        Inglés
      </h4>
      <a
        href='https://cert.efset.org/4vECty'
        target='_blank'
        class='text-blue-800 hover:font-bold duration-300 transition-all font-light'
      >
        B2 Intermedio Alto
      </a>
    </li>
  </ul>
</article>
    `;
  // Columna 2
  column2.innerHTML = `<h1
    class="text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7"
  >
    Estudios
  </h1>
  <ul class="flex flex-col justify-center items-center gap-5">
    <li class="flex flex-col justify-center items-center">
      <h4 class="font-bold uppercase text-md text-stone-800">
        Universidad del Norte
      </h4>
      <p class="font-light">Ingeniería de Sistemas, 2025 - en curso</p>
    </li>
    <li class="flex flex-col justify-center items-center">
      <h4 class="font-bold uppercase text-md text-stone-800">
        Codetec
      </h4>
      <p class="font-light">Diseño Gráfico, 2023 - 2024</p>
    </li>
  </ul>
  </article>
  <article>
    <h1
      class="text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7"
    >
      Experiencia
    </h1>
    <ul class="flex flex-col justify-center items-center gap-5">
      <li>
        <h4
          class="font-bold uppercase text-md text-stone-800 text-center"
        >
          Monitor (Voluntariado)
        </h4>
        <span
          class="font-semibold uppercase text-sm text-stone-400 text-center"
          >Fundación ROFÉ - Mar 2024 a Nov 2024
        </span>
        <p class="font-light leading-relaxed">
          Mi rol como monitor fue ser el líder de jóvenes aspirantes a
          emprendedores interesados en la programación lógica web, guiándolos
          a lo largo de sus cursos para que pudieran adquirir nuevos
          conocimientos y enfocarse en el desarrollo web.
        </p>
      </li>
      <li>
        <h4
          class="font-bold uppercase text-md text-stone-800 text-center"
        >
          Robot Enfermero
        </h4>
        <span
          class="font-semibold uppercase text-sm text-stone-400 text-center"
          >Unisimón - Feb 2024 a Nov 2024
        </span>
  
        <p class="font-light leading-relaxed">
          Mi rol como líder de este proyecto fue crear un robot con nuevas
          tecnologías para innovar en el área de la salud, enfocado en un
          programa que reconociera signos vitales con menos esfuerzo y redujera
          el riesgo de diagnósticos erróneos.
        </p>
      </li>
    </ul>
  </article>`;
  // Proyectos 
  projects.innerHTML = `
<h1
  class="text-xl font-bold uppercase tracking-[0.5rem] text-center mb-7"
>
  PROYECTOS
</h1>
<ul class="grid sm:grid-cols-2 justify-center items-stretch gap-5">
  <li class="h-full">
    <a
      href="https://estivenm06.github.io/final-project/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-indigo-800 hover:shadow-lg transition-all duration-300 h-full"
    >
      <h2 class="text-stone-800 text-lg text-pretty">
        Nebulã Corporation
        <span class="font-bold">(Primera Versión)</span>
      </h2>
      <p class="text-sm text-light text-justify leading-relaxed">
        Nuestra misión es llevar las maravillas del universo a tu pantalla,
        permitiéndote explorar el cosmos desde la comodidad de tu hogar.
      </p>
      <ul class="flex gap-2 w-full mt-5 flex-wrap">
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">GIT</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">HTML</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">CSS</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">JavaScript</li>
      </ul>
    </a>
  </li>
  <li class="h-full">
    <a
      href="https://novacorporation.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-indigo-800 hover:shadow-lg transition-all duration-300 h-full"
    >
      <h2 class="text-stone-800 text-lg text-pretty">
        Nebulã Corporation
        <span class="font-bold">(Última Versión)</span>
      </h2>
      <p class="text-sm text-light text-justify leading-relaxed">
        Nuestra misión es llevar las maravillas del universo a tu pantalla,
        permitiéndote explorar el cosmos desde la comodidad de tu hogar.
      </p>
      <ul class="flex gap-2 w-full mt-5 flex-wrap">
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">GIT</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">HTML</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">CSS</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">JavaScript</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">TailwindCSS</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">Webpack</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">Pug</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">Express.JS</li>
      </ul>
    </a>
  </li>
  <li class="h-full">
    <a
      href="https://leave-request-dashboard-2g4p.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-sky-600 hover:shadow-lg transition-all duration-300 h-full"
    >
      <h2 class="text-stone-800 text-pretty text-lg">
        Panel de Solicitudes de Permiso
      </h2>
      <p class="text-sm text-light leading-relaxed">
        Aplicación web moderna diseñada para simplificar y optimizar el
        proceso de solicitud y gestión de permisos de empleados.
      </p>
      <ul class="flex gap-2 w-full mt-5 flex-wrap">
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">GIT</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">Next.JS</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">React</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">TailwindCSS</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">UI5WebComponents</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">TypeScript</li>
      </ul>
    </a>
  </li>
  <li class="h-full">
    <a
      href="https://learnai-ruddy.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-stone-800 hover:shadow-lg transition-all duration-300 h-full"
    >
      <h2 class="text-pretty text-lg text-stone-800">Learn AI</h2>
      <p class="text-sm text-light leading-relaxed">
        Aplicación web educativa diseñada para introducir a los usuarios en los
        fundamentos de la inteligencia artificial de una manera accesible e
        interactiva.
      </p>
      <ul class="flex gap-2 w-full mt-5 flex-wrap">
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">GIT</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">React</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">UI5WebComponents</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">Vite</li>
      </ul>
    </a>
  </li>
  <li class="h-full">
    <a
      href="https://e-commerce-nextjs-eight-sooty.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col ring-1 z-10 shadow-sm ring-gray-100 p-4 rounded-sm hover:text-stone-800 hover:ring-stone-800 hover:shadow-lg transition-all duration-300 h-full"
    >
      <h2 class="text-pretty text-lg text-stone-800">E-commerce</h2>
      <p class="text-sm text-light leading-relaxed">
        El proyecto cuenta con un catálogo dinámico de productos con filtrado
        por categorías, estados de carga fluidos usando componentes esqueleto y
        un carrito de compras totalmente funcional gestionado mediante el hook
        useReducer con persistencia en localStorage.
      </p>
      <ul class="flex gap-2 w-full mt-5 flex-wrap">
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">Next.JS</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">React</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">TypeScript</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">GIT</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">UI5WebComponents</li>
        <li class="flex items-center justify-center shadow-md z-10 bg-gray-300 px-2 py-0.5 text-xs font-semibold rounded-md">TailwindCSS</li>
      </ul>
    </a>
  </li>
</ul>
  `;
  }
}

// Button English Handler
buttonEn.addEventListener("click", function () {
  language = "en";
  localStorage.setItem("language", JSON.stringify(language));
  applyLanguageStyle();
  applyContentWithLanguage();
});

// Button Spanish Handler
buttonEs.addEventListener("click", function () {
  language = "es";
  localStorage.setItem("language", JSON.stringify(language));
  applyLanguageStyle();
  applyContentWithLanguage();
});
