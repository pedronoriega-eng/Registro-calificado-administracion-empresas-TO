# MEMORIA TÉCNICA E INSTITUCIONAL DE CONTROL Y CONTINUIDAD
## PROYECTO: RENOVACIÓN DE REGISTRO CALIFICADO - ADMINISTRACIÓN DE EMPRESAS (REGISTRO ÚNICO)
### INSTITUCIÓN: CORPORACIÓN ESCUELA TECNOLÓGICA DEL ORIENTE (TO)
**Fecha de corte de sesión:** 19 de Octubre de 2026  
**Rama activa Git:** `main` (commit `a2783b3`)  
**Repositorio remoto:** `https://github.com/pedronoriega-eng/Registro-calificado-administracion-empresas-TO.git`  
**URL Pública (GitHub Pages):** `https://pedronoriega-eng.github.io/Registro-calificado-administracion-empresas-TO/`  
**Clave de acceso institucional:** `TO2026` (o `TO`)

---

### 1. DIRECTRICES FUNDAMENTALES Y REGLAS DE ORO (INMUTABLES)

1. **Sigla Institucional Exclusiva:**
   - La sigla oficial única de la institución es **TO** (*Corporación Escuela Tecnológica del Oriente*).
   - Queda terminantemente prohibido el uso de la sigla obsoleta *"CETO"*. En todo el código, textos y bases de datos hay 0 ocurrencias de CETO.

2. **Principio Canónico de Registro Único Dual (Condición 1):**
   - El programa se tramita bajo la figura de **Registro Calificado Único (Presencial y Virtual)** en ambas instancias:
     - **Plan Vigente (158 créditos, 9 semestres):** Aprobado inicialmente por Resolución MEN 011375 de 2019 (presencial) y adoptado formalmente a Registro Calificado Único (Presencial y Virtual) mediante **Acuerdo de Consejo Superior No. 011 de 2024** (Anexo 5 SACES). Incluye horas presenciales (1:2 - 16h/32h) y virtuales (1:3 - 12h/36h), y 300 cupos autorizados institucionalmente.
     - **Plan Propuesto (144 créditos, 8 semestres):** Renovación curricular aprobada mediante **Acuerdo de Consejo Superior No. 021 de 2025** (Anexo 2 SACES), manteniendo la figura de Registro Único con 240 cupos virtuales y 60 cupos presenciales, y titulación inclusiva *Administrador(a) de Empresas*.
   - Queda prohibido categorizar el plan vigente como «Presencial únicamente». Ambas fichas deben reflejar la dualidad metodológica autorizada.

3. **Paleta Oficial Exclusiva de Administración de Empresas (Zero Azul):**
   - **Regla estricta:** El color azul (`#0A2540`, `#173A66`, `#2563EB`, `#3B82F6`, etc.) pertenecía a la plantilla de Ingeniería Industrial y queda **terminantemente prohibido** en este aplicativo.
   - **Colores oficiales:**
     - Carbón Institucional: `#1A1A1B` y `#2D2D2E` (fondos de cabecera, textos oscuros y tarjetas).
     - Naranja TO Oficial: `#F39200` y `#D97F00` (acentos primarios, bordes destacados, botones de acción).
     - Rojo Institucional TO: `#C8102E` (badges de presencialidad, alertas y distinciones).
     - Terracota / Dorado: `#EA580C` y `#D97706` (subcategorías y métricas).
     - Neutros y Cremas: `#FFFFFF`, `#FAFAFA`, `#F4F4F4`, `#FFF7ED` y `#FFF3E0`.

4. **Oferta Académica Vigente Oficial (17 Programas del MEN):**
   - Toda la información proviene estrictamente del portal oficial institucional ([tecnologicadeloriente.edu.co/oferta-academica/](https://tecnologicadeloriente.edu.co/oferta-academica/)).
   - Los 17 programas se presentan mediante 4 paneles de selectores compactos (Pregrado Presencial, Pregrado Virtual, Posgrado Presencial, Posgrado Virtual), evitando el desplazamiento vertical excesivo.
   - Al hacer clic en cualquier programa, se abre una **ventana emergente (modal sintético)** en segundo plano que muestra exclusivamente: Nombre, Nivel Académico, Modalidad, Duración (Semestres), Créditos Académicos, Código SNIES y enlace directo al portal institucional.

5. **Convenios y Alianzas Oficiales de la TO:**
   - Se utilizan exclusivamente los **15 logotipos oficiales de convenios** descargados del carrusel oficial del portal de la TO (`assets/convenios/`), articulados con los +70 convenios activos de la institución. Cero banners genéricos o imágenes desactualizadas.

6. **Control de Calidad "Zero Regression":**
   - No alterar, sobreescribir ni eliminar componentes previamente validados:
     - Malla Curricular Condición 3 (Presencial 1:2 con 48h/crédito, Virtual 1:3 con 36h/crédito, 144 créditos, 8 semestres, 48 asignaturas modulares, 100% fit-to-screen sin scroll horizontal).
     - Factores Diferenciadores y Resultados de Aprendizaje (RAP).
     - Condición 2: Observatorio Geoespacial Google Maps Relieve con datos oficiales del SNIES y gráficas de tendencia Chart.js en Tablas 12 y 13.
     - Condición 10: Tableros dinámicos de permanencia, matrícula histórica y seguimiento a la deserción estudiantil (SPADIES/SAT).

---

### 2. REGISTRO DE CAMBIOS APROBADOS Y COMPONENTES ACTIVOS

#### A. Condición 1 — Denominación del Programa (`sections_c1.js`)
- **Ficha Técnica Oficial Dual en Paralelo:** Visible inmediatamente tras las subsecciones. Muestra lado a lado:
  - Plan Vigente: 158 créditos, 9 semestres, Acuerdo CS 011/2024, Registro Único (Presencial y Virtual).
  - Plan Propuesto: 144 créditos, 8 semestres, Acuerdo CS 021/2025, Registro Único (Presencial y Virtual), titulación inclusiva *Administrador(a) de Empresas*.
- **Mapa Conceptual Sistémico de Pertinencia:** 5 ramas conceptuales integradas (Taxonómico/Normativo, Benchmarking Alta Calidad, Coherencia Curricular, Armonización RU, Pertinencia Social/OLE).
- **Ventanas Emergentes (Modales en segundo plano):** Profundización interactiva por dimensión sin romper la continuidad visual.
- **Limpieza de Protocolo para Pares:** 0 notas internas de orador, 0 consejos de exposición, lenguaje 100% formal y académico.

#### B. Condición 2 — Justificación y Estudio de Demanda (`sections_c2_google.js` / `sections_c2.js`)
- **Observatorio Geoespacial Google Maps Relieve:** 18 programas en Santander (Bucaramanga: 11, Floridablanca: 3, Barrancabermeja: 3, San Gil/Socorro: 1; Girón y Piedecuesta filtrados por tener 0 programas).
- **Gráficas de Tendencia Interactivas (Chart.js):** Integradas en Tablas 12 y 13 (matrícula histórica, permanencia y cobertura SAT).
- **Planos Internacional, Nacional y Regional:** Tendencias WEF/OCDE, PND 2022-2026, PDD Santander 2024-2027, PDM Bucaramanga 2024-2027 y OLE (78.5% cotización formal).

#### C. Condición 3 — Aspectos Curriculares (`sections_c3.js`)
- **Pestaña 1 (Predeterminada al abrir):** Plan Vigente SACES (158 Créditos - 9 Semestres).
- **Pestaña 2:** Plan Propuesto (144 Créditos - 8 Semestres).
- **Pestaña 3:** Comparación Curricular (28 reestructuradas, 15 nuevas, 38 homologables).
- **Subpestañas:** 2. Áreas de Formación, 5. Inducción Docente Académico, 6. Rutas de Formación.
- **Diseño Fit-to-Screen:** 100% responsive, ancho proporcional exacto, sin barra de desplazamiento horizontal.
- **Paleta de Colores:** Totalmente unificada a la paleta oficial (0 azul).

#### D. Presentación Institucional (`sections_inst.js`)
- **8 Secciones Completas:** Identidad corporativa, PEI (Modelo Constructivista), Evolución Histórica, Convenios y Alianzas, Oferta Académica Vigente, Estudiantes, Bienestar e Infraestructura Física.
- **Convenios y Alianzas:** 15 logos oficiales de aliados en `assets/convenios/` (BIT Institute, Strategy Minds, IBERO, UPEL, Positiva, U. Católica, Unigermana, UMECIT, Prevent Group, Policía Nacional, Personería Bucaramanga, Gobernación Santander, Cajasan, Alcaldía Lebrija, Alcaldía Bucaramanga). Indicador de +70 convenios activos.
- **Oferta Académica Vigente:** Catálogo de 17 programas oficiales del MEN con selectores interactivos y ventana emergente (modal sintético con Nombre, Nivel, Modalidad, Duración, Créditos y SNIES).

#### E. Sistema de Educación Virtual (`sections_virtual.js`)
- **5 Dimensiones del Modelo Virtual:** Pedagógica, Tecnológica, Organizacional, Diseño Curricular y Calidad.
- **Arquitectura de Plataforma:** Campus LMS Moodle 24/7, simuladores en la nube, acompañamiento tutorial y analítica de aprendizaje.

#### F. Condición 10 — Permanencia y Graduación (`sections_c10.js`)
- Tableros dinámicos SPADIES, Sistema de Alertas Tempranas (SAT), tasa de retención institucional >94%.

---

### 3. LO NO APROBADO / DESCARTADO / TERMINANTEMENTE PROHIBIDO

1. **RECHAZADO: Ficha del Registro Calificado Vigente como "Presencial únicamente".** (Viola Acuerdo 011/2024 y Anexo 5 oficial).
2. **RECHAZADO: Uso de la paleta de color Azul.** (Perteneciente a Ingeniería Industrial; prohibido en Administración de Empresas).
3. **RECHAZADO: Despliegue de fichas gigantes con textos extensos en Oferta Académica.** (Se exige el uso de selectores y modales sintéticos).
4. **RECHAZADO: Uso de la sigla "CETO".** (Única sigla válida: **TO**).
5. **RECHAZADO: Logos de convenios obsoletos o banners institucionales en la sección de Alianzas.**
6. **RECHAZADO: URLs externas de Moodle para logotipos.** (Todo activo debe residir localmente en `sitio_web/assets/`).
7. **RECHAZADO: Barra de desplazamiento horizontal en mallas curriculares.** (Las tablas deben ser 100% fit-to-screen).
8. **RECHAZADO: Poner el Plan Propuesto como primera pestaña.** (El Plan Vigente SACES debe abrir siempre de primero).

---

### 4. ARCHIVOS CRÍTICOS Y ESTADO DEL REPOSITORIO

| Archivo | Estado en Git (`main`) | Función Principal |
|---|---|---|
| `sitio_web/sections_c1.js` | Sincronizado (`a2783b3`) | Ficha técnica dual RU Vigente vs Propuesto, mapa conceptual y modales |
| `sitio_web/sections_c2_google.js` | Sincronizado (`a2783b3`) | Motor Google Maps relieve con datos SNIES oficiales y 18 programas Santander |
| `sitio_web/sections_c2.js` | Sincronizado (`a2783b3`) | Estudio de mercado, tendencias y gráficas Chart.js Tablas 12 y 13 |
| `sitio_web/sections_c3.js` | Sincronizado (`a2783b3`) | Malla curricular fit-to-screen, modales pedagógicos, paleta 0 azul |
| `sitio_web/sections_inst.js` | Sincronizado (`a2783b3`) | 8 secciones institucionales, 15 logos convenios, oferta con modal sintético |
| `sitio_web/sections_virtual.js` | Sincronizado (`a2783b3`) | Sistema de Educación Virtual, 5 dimensiones, paleta 0 azul |
| `sitio_web/sections_c10.js` | Sincronizado (`a2783b3`) | Tableros de permanencia, SPADIES y SAT |
| `sitio_web/styles.css` | Sincronizado (`a2783b3`) | Sistema de diseño institucional Glassmorphism, paleta Carbón / Naranja / Rojo |
| `sitio_web/app.js` | Sincronizado (`a2783b3`) | Navegación global, apertura de modales, paleta unificada |
| `sitio_web/index.html` | Sincronizado (`a2783b3`) | Contenedor principal con cachebusters activos |
| `sitio_web/assets/convenios/` | Sincronizado (`a2783b3`) | 15 logotipos PNG oficiales de convenios institucionales |
| `MEMORIA_INTERNA_PROYECTO_TO.md` | Actualizado | Memoria técnica institucional de cabecera |
| `MEMORIA_INTERNA_TRAZABILIDAD.md` | Actualizado | Trazabilidad histórica completa |

---

### 5. PROCEDIMIENTO PARA REANUDAR EL TRABAJO EN LA PRÓXIMA SESIÓN

1. Encender el equipo e ingresar al IDE Antigravity.
2. Iniciar el servidor web local en el puerto 8085 ejecutando:
   ```powershell
   python -m http.server 8085 --directory "c:\Users\Estudiante 08\Documents\Pedro_Noriega\Acreditación_Alta Calidad\Visitas_programas\Administración de empresas_Renovación RU\sitio_web"
   ```
3. Abrir en el navegador: `http://localhost:8085/`
4. Contraseña de acceso institucional: `TO2026`
5. Para sincronizar futuros cambios con GitHub:
   ```powershell
   git status
   git add .
   git commit -m "..."
   git push origin main
   ```
