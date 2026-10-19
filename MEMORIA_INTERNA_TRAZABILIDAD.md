# Memoria Interna y Trazabilidad Exhaustiva del Proyecto
## Renovación de Registro Calificado Único — Administración de Empresas
**Institución:** Corporación Escuela Tecnológica del Oriente (**TO**)  
**Modalidades:** Presencial y Virtual · **Normativa:** Decreto 1330 de 2019  
**Fecha de corte:** 19 de Octubre de 2026  
**Repositorio GitHub:** [`pedronoriega-eng/Registro-calificado-administracion-empresas-TO`](https://github.com/pedronoriega-eng/Registro-calificado-administracion-empresas-TO)  
**URL Pública (GitHub Pages):** [Plataforma de Evidencias TO](https://pedronoriega-eng.github.io/Registro-calificado-administracion-empresas-TO/)  
**Último Commit en `main`:** `a2783b3` (`fix(oferta-convenios-palette): integrar 15 logos oficiales de convenios web TO, selectores interactivos con modal sintético y unificar paleta oficial de Administración de Empresas (0 azul)`)  
**Clave de Acceso Institucional:** `TO2026` (o `TO`)

---

## 1. Lo Aprobado y Construido (Ground Truth Oficial)

Todos los siguientes elementos están formalmente aprobados, implementados en código, validados visualmente y desplegados en el repositorio:

### A. Condición 1 — Denominación y Ficha Técnica Dual de Registro Único
- **Ficha Registro Calificado Vigente (158 créditos - 9 semestres):**
  - **Norma Base:** Aprobado inicialmente mediante Resolución MEN 011375 de 2019 (presencial), adoptado formalmente a **Registro Calificado Único (Presencial y Virtual)** mediante **Acuerdo de Consejo Superior No. 011 de 2024** (Anexo 5 SACES).
  - **Modalidad:** `REGISTRO ÚNICO` | `Presencial & Virtual`.
  - **Lugar de Desarrollo:** Sede Principal Bucaramanga (Presencial) + Cobertura Nacional Digital (Virtual).
  - **Cupos:** 300 estudiantes / cohorte (Capacidad institucional autorizada en ambas modalidades).
  - **Relación de Horas:** Presencial 1:2 (16h directas / 32h indep.) y Virtual 1:3 (12h mediadas / 36h autónomas).
  - **Título:** Administrador de Empresas (Masculino genérico histórico).
- **Ficha Registro Calificado Propuesto (144 créditos - 8 semestres):**
  - **Norma Base:** Renovación y compactación curricular aprobada mediante **Acuerdo de Consejo Superior No. 021 de 2025** (Anexo 2 SACES).
  - **Modalidad:** `REGISTRO ÚNICO` | `Presencial & Virtual`.
  - **Titulación Inclusiva:** Administrador(a) de Empresas (según identidad de género).
  - **Cupos:** 300 estudiantes / cohorte desglosados en: 240 Virtuales y 60 Presenciales.
  - **Horas Estándar (3 cr):** Presencial 48h directa / 96h indep. · Virtual 36h mediada / 108h autónoma.
- **Fichas Técnicas Abiertas y Visibles:** Desplegadas en paralelo inmediatamente tras las subsecciones.
- **Mapa Conceptual Sistémico de Pertinencia:** Resumen de la pertinencia de la denominación a través de 5 ramas rectoras integradas.
- **Modales en Segundo Plano:** Profundización por dimensiones curriculares en ventanas emergentes sin generar scroll vertical.
- **Limpieza de Protocolo:** Cero notas de orador, cero prefijos de «Diapositiva», lenguaje 100% formal para pares evaluadores.

### B. Condición 2 — Observatorio Geoespacial y Estudio de Demanda
- Motor Google Maps Relieve (`lyrs=p`) 100% nativo sin marcas de agua.
- Conmutador a Calles y Satélite.
- GeoJSON vectorial de 33 entidades territoriales con interacción completa.
- Base oficial del SNIES del MEN (245 programas presenciales, 44 virtuales).
- Santander municipal: 18 programas formales en Bucaramanga (11), Floridablanca (3), Barrancabermeja (3) y San Gil/Socorro (1). Girón y Piedecuesta filtrados por tener 0 programas.
- Gráficas de tendencia interactivas (Chart.js) para matrícula histórica y permanencia institucional (Tablas 12 y 13).

### C. Condición 3 — Aspectos Curriculares
- **Pestaña 1 (Predeterminada al abrir):** `Plan Vigente SACES (158 Créditos - 9 Semestres)`.
- **Pestaña 2:** `Plan Propuesto (144 Créditos - 8 Semestres)`.
- **Pestaña 3:** `Comparación y Justificación Curricular` (Tableros analíticos de 28 reestructuradas, 15 nuevas y 38 homologables).
- **Subpestañas Oficiales:** 2. Áreas de Formación, 5. Inducción Docente Académico, 6. Rutas de Formación.
- **Diseño Fit-to-Screen:** 100% responsive, ancho proporcional exacto, sin barra de desplazamiento horizontal.
- **Paleta de Colores:** 100% unificada a Carbón / Naranja / Rojo (0 azul).

### D. Presentación Institucional y Sistema de Educación Virtual
- **Presentación Institucional (`sections_inst.js`):** 8 secciones completas.
  - **Convenios:** 15 logos oficiales de aliados en `assets/convenios/` (BIT Institute, Strategy Minds, IBERO, UPEL, Positiva, Universidad Católica, Unigermana, UMECIT, Prevent Group, Policía Nacional, Personería Bucaramanga, Gobernación Santander, Cajasan, Alcaldía Lebrija, Alcaldía Bucaramanga).
  - **Oferta Académica Vigente:** Catálogo oficial del MEN con los 17 programas académicos activos en el portal TO.
  - **Selectores y Modal Sintético:** 4 paneles de selectores compactos por nivel y modalidad, con ventana emergente que muestra exclusivamente Nombre, Nivel, Modalidad, Duración, Créditos y SNIES.
- **Sistema de Educación Virtual (`sections_virtual.js`):** 5 dimensiones (Pedagógica, Tecnológica, Organizacional, Diseño Curricular, Calidad).

### E. Paleta de Colores Oficial de Administración de Empresas (Zero Azul)
- **Erradicación del Azul:** Todo el código fue limpiado de azul (`#0A2540`, `#173A66`, `#2563EB`, `#3B82F6`, etc.), el cual pertenecía a Ingeniería Industrial.
- **Paleta Oficial Aplicada:**
  - Carbón Institucional: `#1A1A1B`, `#2D2D2E`
  - Naranja TO Oficial: `#F39200`, `#D97F00`
  - Rojo Institucional TO: `#C8102E`
  - Terracota / Dorado: `#EA580C`, `#D97706`
  - Neutros / Cremas: `#FFFFFF`, `#FAFAFA`, `#F4F4F4`, `#FFF7ED`, `#FFF3E0`

---

## 2. Historial de Decisiones y Trazabilidad de Sesiones

| Fecha | Commit | Descripción del Hito |
|---|---|---|
| **19-Oct-2026** | `a2783b3` | Integrar 15 logos oficiales de convenios de la web TO, selectores interactivos con modal sintético de oferta académica y unificar paleta oficial de Administración de Empresas (0 azul en todo el código). |
| **19-Oct-2026** | `bfc302b` | Solucionar imágenes de PEI y Convenios (`media__*.png`, 0 rotas) y sincronizar los 17 programas de la Oferta Académica del portal web institucional. |
| **19-Oct-2026** | `42f584b` | Integrar secciones completas de Presentación Institucional (8 pestañas) y Sistema de Educación Virtual (5 dimensiones). |
| **19-Oct-2026** | `134a534` | Integrar gráficas de tendencia interactivas Chart.js en Condición 2 para Tablas 12 y 13 (matrícula y permanencia). |
| **19-Oct-2026** | `e7d2f2f` | Reestructurar Condición 1: Ficha técnica dual en paralelo abierta (Acuerdo 011/2024 vs Acuerdo 021/2025) y Mapa Conceptual de pertinencia. |
| **16-Oct-2026** | `082dcf0` | Ajustar ficha técnica del Registro Calificado Vigente a Registro Único (Presencial y Virtual) según Acuerdo 011 de 2024 y Anexo 5 SACES. |
| **16-Oct-2026** | `8fb2c4e` | Corrección canónica del Anexo 5 y Acuerdo 011 de 2024 en ficha vigente. |
| **16-Oct-2026** | `c3a1b2d` | Creación de memoria técnica de continuidad y trazabilidad institucional. |

---

## 3. Estado de Ejecución para Reapertura de Sesión

1. Servidor local en puerto 8085:
   `python -m http.server 8085 --directory "sitio_web"`
2. URL local: `http://localhost:8085/`
3. Clave de acceso institucional: `TO2026`
4. URL en GitHub Pages: `https://pedronoriega-eng.github.io/Registro-calificado-administracion-empresas-TO/`
5. Rama remota sincronizada: `origin/main` (commit `a2783b3`).
