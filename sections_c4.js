/* =========================================================
   CONDICIÓN 4 – ORGANIZACIÓN DE ACTIVIDADES ACADÉMICAS
   Administración de Empresas · TO · Benchmark SST C4
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c4'] = `
<div class="info-banner">
    <h4><i class="fas fa-cogs"></i> Condición 4 · Organización de Actividades Académicas y Proceso Formativo</h4>
    <p>Modelo pedagógico, estrategias didácticas, sistema de créditos, mecanismos de interacción y acompañamiento estudiantil. Adaptado del benchmark de sustentación del programa de SST.</p>
</div>


<!-- TABS -->
<div class="tabs-container" id="c4TabGroup">
    <div class="tabs-nav">
        <button class="tab-btn active" data-tab="c4-modelo" onclick="switchTab('c4TabGroup','c4-modelo')">
            <i class="fas fa-brain"></i> Modelo Pedagógico
        </button>
        <button class="tab-btn" data-tab="c4-creditos" onclick="switchTab('c4TabGroup','c4-creditos')">
            <i class="fas fa-clock"></i> Créditos Académicos
        </button>
        <button class="tab-btn" data-tab="c4-estrategias" onclick="switchTab('c4TabGroup','c4-estrategias')">
            <i class="fas fa-tools"></i> Estrategias Didácticas
        </button>
        <button class="tab-btn" data-tab="c4-evaluacion" onclick="switchTab('c4TabGroup','c4-evaluacion')">
            <i class="fas fa-tasks"></i> Sistema de Evaluación
        </button>
        <button class="tab-btn" data-tab="c4-retencion" onclick="switchTab('c4TabGroup','c4-retencion')">
            <i class="fas fa-users-cog"></i> Retención y SAT
        </button>
    </div>

    <!-- ===== TAB: MODELO PEDAGÓGICO ===== -->
    <div class="tab-panel active" id="c4-modelo">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:8px;">
            Modelo Pedagógico Institucional
        </h3>
        <p style="color:var(--gray-text); font-size:0.88rem; margin-bottom:20px;">
            Actualizado en 2021. Fundamentado en el <strong>Constructivismo Social</strong>, el <strong>Aprendizaje Significativo</strong> y los principios de la <strong>Escuela Nueva</strong>, con enfoque de competencias y Resultados de Aprendizaje.
        </p>

        <!-- Tres componentes -->
        <div class="grid-3">
            <div class="card-accent">
                <h4><i class="fas fa-book" style="margin-right:6px;"></i> Componente Teórico</h4>
                <p>Constructivismo Social · Aprendizaje Significativo · Escuela Nueva. Referentes: Bloom, Tobón, Vygotsky.</p>
            </div>
            <div class="card-accent">
                <h4><i class="fas fa-cog" style="margin-right:6px;"></i> Componente Metodológico</h4>
                <p>Estudiante como centro del aprendizaje · Docente como mediador · Trabajo colaborativo · Aprendizaje autónomo.</p>
            </div>
            <div class="card-accent">
                <h4><i class="fas fa-flask" style="margin-right:6px;"></i> Componente Práctico</h4>
                <p>Aprendizaje Basado en Problemas (ABP) · Estudios de Caso · Aprendizaje Basado en Proyectos · Simulación de negocios.</p>
            </div>
        </div>

        <!-- PEP Context -->
        <div style="margin-top:24px;">
            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin-bottom:12px;">
                <i class="fas fa-sitemap" style="color:var(--orange); margin-right:6px;"></i> Articulación PEI → Modelo Pedagógico → PEP
            </h4>
            <table class="tbl">
                <thead>
                    <tr><th>Nivel</th><th>Componente</th><th>Descripción</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="lb">PEI</td>
                        <td>Principios Institucionales</td>
                        <td>Corporatividad, Pertinencia, Coherencia, Innovación, Excelencia Académica, Desarrollo Sostenible, Formación Integral, Flexibilidad Curricular</td>
                    </tr>
                    <tr>
                        <td class="lb">Modelo Pedagógico</td>
                        <td>Taxonomía de Bloom + Tobón</td>
                        <td>Aplicación de los niveles cognitivos (Recordar → Crear) con enfoque socioformativo de competencias integrales</td>
                    </tr>
                    <tr class="row-accent">
                        <td class="lb">PEP</td>
                        <td>Programa de Administración</td>
                        <td>Perfil de Ingreso, Perfil de Egreso, Perfil Ocupacional, RAP alineados al Saber Pro y las competencias del ICFES</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="evidence-box" style="margin-top:20px;">
            <i class="fas fa-file-alt"></i>
            <strong>Soportes:</strong> PEI (Anexo 5) · Modelo Pedagógico (Anexo 6) · Política de Resultados de Aprendizaje (Anexo 7) · Lineamiento de Programas Académicos Virtuales (Anexo 8)
        </div>
    </div>

    <!-- ===== TAB: CRÉDITOS ACADÉMICOS ===== -->
    <div class="tab-panel" id="c4-creditos">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Sistema de Créditos Académicos
        </h3>
        <p style="color:var(--gray-text); font-size:0.88rem; margin-bottom:20px;">
            Conforme al Decreto 1330 de 2019, <strong>1 crédito académico = 48 horas de trabajo total del estudiante</strong>, distribuidas entre trabajo de acompañamiento docente y trabajo independiente, según la modalidad.
        </p>

        <div class="grid-2">
            <div class="card" style="border-top:4px solid var(--orange);">
                <h4><i class="fas fa-chalkboard" style="color:var(--orange);"></i> Modalidad Presencial</h4>
                <div style="margin-top:12px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <span style="font-size:0.82rem; font-weight:600;">Docencia Directa</span>
                        <span style="font-size:0.82rem; font-weight:800; color:var(--orange);">16h / crédito</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width:33%;"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin:12px 0 8px;">
                        <span style="font-size:0.82rem; font-weight:600;">Trabajo Independiente</span>
                        <span style="font-size:0.82rem; font-weight:800; color:var(--carbon);">32h / crédito</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width:67%; background:var(--carbon);"></div>
                    </div>
                    <p style="margin-top:12px; font-size:0.78rem; color:var(--gray-text);">Relación 1:2 (cada hora de docencia directa requiere 2 horas de trabajo independiente del estudiante)</p>
                </div>
            </div>
            <div class="card" style="border-top:4px solid var(--orange);">
                <h4><i class="fas fa-wifi" style="color:var(--orange);"></i> Modalidad Virtual</h4>
                <div style="margin-top:12px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <span style="font-size:0.82rem; font-weight:600;">Trabajo Mediado (TAD)</span>
                        <span style="font-size:0.82rem; font-weight:800; color:var(--orange);">12h / crédito</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width:25%;"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin:12px 0 8px;">
                        <span style="font-size:0.82rem; font-weight:600;">Trabajo Independiente</span>
                        <span style="font-size:0.82rem; font-weight:800; color:var(--carbon);">36h / crédito</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width:75%; background:var(--carbon);"></div>
                    </div>
                    <p style="margin-top:12px; font-size:0.78rem; color:var(--gray-text);">Relación 1:3 (cada hora de trabajo mediado requiere 3 horas de trabajo independiente en plataforma)</p>
                </div>
            </div>
        </div>

        <div class="metric-row" style="margin-top:24px;">
            <div class="metric-card"><div class="metric-val">144</div><div class="metric-lbl">Créditos Totales</div></div>
            <div class="metric-card"><div class="metric-val">6.912</div><div class="metric-lbl">Horas Totales Programa</div></div>
            <div class="metric-card"><div class="metric-val">2.304</div><div class="metric-lbl">Horas Docencia (Presencial)</div></div>
            <div class="metric-card"><div class="metric-val">1.728</div><div class="metric-lbl">Horas Mediadas (Virtual)</div></div>
        </div>

        <!-- TABLA COMPARATIVA OFICIAL DE DISTRIBUCIÓN DE HORAS POR CRÉDITO Y TOTALES -->
        <div style="margin-top:24px; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-balance-scale" style="color:#F39200;"></i> Comparativo Técnico de Horas por Modalidad (Decreto 1330 de 2019)
            </h4>
            <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; font-size:0.78rem;">
                    <thead>
                        <tr style="background:#1A1A1B; color:#FFFFFF;">
                            <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Tipo de Asignatura / Créditos</th>
                            <th style="padding:9px 12px; text-align:center; border:1px solid #334155;">Horas Totales (48h/cr)</th>
                            <th style="padding:9px 12px; text-align:center; border:1px solid #334155; background:#1E3A8A;">Presencial: HAD (1:2)</th>
                            <th style="padding:9px 12px; text-align:center; border:1px solid #334155; background:#1E3A8A;">Presencial: HTI</th>
                            <th style="padding:9px 12px; text-align:center; border:1px solid #334155; background:#065F46;">Virtual: HAD Mediadas (1:3)</th>
                            <th style="padding:9px 12px; text-align:center; border:1px solid #334155; background:#065F46;">Virtual: HTI Autónomo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:700;">Asignatura de 2 Créditos</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">96 h</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:700;">32 h (Docencia direct.)</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;">64 h</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; color:#059669; font-weight:700;">24 h (Sincr./Asincr.)</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;">72 h</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:700;">Asignatura de 3 Créditos</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">144 h</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:700;">48 h (Docencia direct.)</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;">96 h</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; color:#059669; font-weight:700;">36 h (Sincr./Asincr.)</td>
                            <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;">108 h</td>
                        </tr>
                        <tr style="background:#FFFBEB; font-weight:800;">
                            <td style="padding:9px 12px; border:1px solid #FCD34D; color:#92400E;">TOTAL PROGRAMA (144 Créditos)</td>
                            <td style="padding:9px 12px; border:1px solid #FCD34D; text-align:center; color:#92400E;">6.912 Horas</td>
                            <td style="padding:9px 12px; border:1px solid #FCD34D; text-align:center; color:#1D4ED8;">2.304 h (33.3%)</td>
                            <td style="padding:9px 12px; border:1px solid #FCD34D; text-align:center;">4.608 h (66.7%)</td>
                            <td style="padding:9px 12px; border:1px solid #FCD34D; text-align:center; color:#059669;">1.728 h (25.0%)</td>
                            <td style="padding:9px 12px; border:1px solid #FCD34D; text-align:center;">5.184 h (75.0%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- POLÍTICA INSTITUCIONAL DE ORGANIZACIÓN DE ESTUDIANTES POR GRUPO -->
        <div style="margin-top:20px; background:#F8FAFC; border:1px solid #CBD5E1; border-left:4px solid #F39200; border-radius:8px; padding:14px 16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
                <h4 style="font-family:var(--font-heading); font-size:0.92rem; font-weight:800; color:#1E293B; margin:0; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-users" style="color:#F39200;"></i> Política y Organización de Estudiantes por Grupo (Ratios Pedagógicos)
                </h4>
                <span style="background:#E2E8F0; color:#334155; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:12px;">Criterio Pedagógico Institucional</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:10px;">
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px 12px;">
                    <div style="font-size:0.75rem; font-weight:800; color:#1E3A8A; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-university"></i> Modalidad Presencial: 20 a 30 Estudiantes por Grupo
                    </div>
                    <p style="font-size:0.73rem; color:#475569; margin:0; line-height:1.4;">
                        Los grupos teóricos y prácticos se configuran con un rango de <strong>20 a 30 estudiantes</strong>. Esta escala garantiza una interacción directa y personalizada con el docente, dinamizando talleres de casos empresariales, debates y el uso eficaz de los laboratorios y salas de cómputo en las Sedes A y B de Bucaramanga.
                    </p>
                </div>
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px 12px;">
                    <div style="font-size:0.75rem; font-weight:800; color:#065F46; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-laptop"></i> Modalidad Virtual: 25 a 35 Estudiantes por Aula / Tutor
                    </div>
                    <p style="font-size:0.73rem; color:#475569; margin:0; line-height:1.4;">
                        En los entornos virtuales (Moodle AWS), cada curso se gestiona con un límite de <strong>25 a 35 estudiantes por aula</strong>, asegurando una retroalimentación cualitativa oportuna en foros, calificación formativa en menos de 48 horas y sesiones sincrónicas participativas con acompañamiento docente efectivo.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== TAB: ESTRATEGIAS DIDÁCTICAS ===== -->
    <div class="tab-panel" id="c4-estrategias">

        <!-- MODELO INSTITUCIONAL DE INTERACCIÓN Y PROCESO FORMATIVO (ACLARACIÓN OFICIAL CONACES) -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #059669; border-radius:10px; padding:18px 20px; margin-bottom:22px; box-shadow:0 3px 12px rgba(0,0,0,0.04);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:14px;">
                <div>
                    <span style="background:#ECFDF5; color:#059669; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                        Lineamiento de Educación Virtual · Acuerdo Institucional
                    </span>
                    <h4 style="font-family:var(--font-heading); font-size:1.08rem; font-weight:800; color:#1A1A1B; margin:4px 0 0; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-network-wired" style="color:#059669;"></i> Modelo de Interacción Pedagógica, Estrategias Didácticas y Gestión en Plataforma LMS
                    </h4>
                </div>
                <span style="font-size:0.75rem; color:#64748B; font-weight:700;">
                    <i class="fas fa-shield-alt" style="color:#059669;"></i> Anexos 1, 2 y 3 Oficiales
                </span>
            </div>
            <p style="font-size:0.8rem; color:#475569; line-height:1.5; margin-bottom:14px;">
                En coherencia con el modelo pedagógico socioformativo institucional y la relación <strong>1:3 de créditos académicos</strong> en modalidad virtual (12h de mediación docente y 36h de trabajo autónomo e independiente), la institución despliega una interacción activa y multidimensional soportada en 4 dimensiones estratégicas y 8 actividades formativas integradas en el Syllabus de cada asignatura:
            </p>

            <!-- 1. LAS 4 DIMENSIONES DE LA EDUCACIÓN VIRTUAL -->
            <div style="margin-bottom:16px;">
                <div style="font-size:0.78rem; font-weight:800; color:#1E293B; text-transform:uppercase; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-cubes" style="color:#F39200;"></i> Cuatro Dimensiones del Lineamiento de Educación Virtual (Anexo 2):
                </div>
                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #2563EB; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#1E3A8A; display:block; margin-bottom:3px;"><i class="fas fa-brain"></i> 1. Dimensión Pedagógica</strong>
                        <p style="font-size:0.71rem; color:#475569; margin:0; line-height:1.35;">
                            Aprendizaje activo, formación en contextos reales de aplicación, desarrollo de competencias prácticas y reflexivas, autonomía y autorregulación del estudiante.
                        </p>
                    </div>
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #059669; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#065F46; display:block; margin-bottom:3px;"><i class="fas fa-comments"></i> 2. Dimensión Comunicativa</strong>
                        <p style="font-size:0.71rem; color:#475569; margin:0; line-height:1.35;">
                            Acompañamiento continuo sincrónico y asincrónico, foros de debate guiados, tutorías de refuerzo y canales dialógicos multidireccionales docente-estudiante y entre pares.
                        </p>
                    </div>
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #7C3AED; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#5B21B6; display:block; margin-bottom:3px;"><i class="fas fa-server"></i> 3. Dimensión Tecnológica</strong>
                        <p style="font-size:0.71rem; color:#475569; margin:0; line-height:1.35;">
                            Campus Virtual LMS Moodle sobre arquitectura en la nube AWS elástica (disponibilidad 99.9%), Teams/Meet para sesiones en vivo y motor de originalidad académica.
                        </p>
                    </div>
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #D97706; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#92400E; display:block; margin-bottom:3px;"><i class="fas fa-sitemap"></i> 4. Dimensión Organizacional</strong>
                        <p style="font-size:0.71rem; color:#475569; margin:0; line-height:1.35;">
                            Mesa de ayuda TI con Matriz de Tiempos de Respuesta a Requerimientos, gobernanza académica, aseguramiento de permanencia y gestión curricular ágil.
                        </p>
                    </div>
                </div>
            </div>

            <!-- 2. LAS 8 ESTRATEGIAS PEDAGÓGICAS Y DIDÁCTICAS ACTIVAS -->
            <div style="margin-bottom:16px;">
                <div style="font-size:0.78rem; font-weight:800; color:#1E293B; text-transform:uppercase; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-chalkboard-teacher" style="color:#059669;"></i> Ocho Estrategias Didácticas de Interacción en el Syllabus de Cada Asignatura:
                </div>
                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-video" style="color:#2563EB;"></i> 1. Clases Sincrónicas</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Sesiones en vivo programadas en Moodle (Teams/Meet), participativas, grabadas y de <strong>consulta 24/7</strong> permanente.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-photo-video" style="color:#F39200;"></i> 2. Recursos Asincrónicos (RED)</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Videos explicativos, lecturas, infografías, podcasts, bases de datos y bancos de preguntas de navegación autónoma.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-comments" style="color:#059669;"></i> 3. Foros de Debate</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Análisis de casos prácticos a partir de preguntas orientadoras con argumentación y retroalimentación entre pares.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-headset" style="color:#7C3AED;"></i> 4. Mesa de Ayuda TI</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Soporte técnico y administrativo oportuno regido por la <strong>Matriz de Tiempos de Respuesta</strong> institucional.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-tasks" style="color:#EA580C;"></i> 5. Aprendizaje Activo</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Actividades cooperativas y colaborativas centradas en la resolución de problemas reales para alcanzar los RAPs.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-clipboard-check" style="color:#16A34A;"></i> 6. Evaluación Formativa</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Pruebas diagnósticas, cuestionarios interactivos, autoevaluación por unidad y rúbricas de evaluación significativa.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-users" style="color:#0284C7;"></i> 7. Trabajo Colaborativo</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Dinámicas grupales mediadas por herramientas digitales para potenciar negociación y resolución de conflictos.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:9px 10px;">
                        <span style="font-size:0.72rem; font-weight:800; color:#1E293B; display:block; margin-bottom:2px;"><i class="fas fa-user-friends" style="color:#DC2626;"></i> 8. Tutorías Virtuales</span>
                        <p style="font-size:0.7rem; color:#475569; margin:0; line-height:1.3;">Sesiones de atención individual y grupal agendadas directamente por el docente en Moodle para refuerzo continuo.</p>
                    </div>
                </div>
            </div>

            <!-- 3. ESTRUCTURA DEL AULA VIRTUAL (5 APARTADOS) Y DISTRIBUCIÓN HORARIA DOCENTE -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <!-- ESTRUCTURA DEL AULA -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                    <div style="font-size:0.76rem; font-weight:800; color:#1E3A8A; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-layer-group"></i> Estructura Estándar de las Aulas Virtuales en Moodle (5 Ejes):
                    </div>
                    <ul style="font-size:0.72rem; color:#475569; margin:0; padding-left:18px; line-height:1.45;">
                        <li><strong>1. Gestión del Aprendizaje:</strong> Guía de aprendizaje, ruta formativa, syllabus y cronograma.</li>
                        <li><strong>2. Comunicación y Colaboración:</strong> Foros de dudas, foros temáticos y mensajería directa.</li>
                        <li><strong>3. Evaluación y Seguimiento:</strong> Entregables con motor de similitud, rúbricas y libro de calificaciones.</li>
                        <li><strong>4. Recursos y Soporte TI:</strong> Enlaces a biblioteca E-Libro, simuladores y mesa de ayuda.</li>
                        <li><strong>5. Competencias Digitales:</strong> Guías interactivas y videos instructivos de uso de la plataforma.</li>
                    </ul>
                </div>

                <!-- DISTRIBUCIÓN PORCENTUAL DEL TIEMPO DOCENTE -->
                <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:8px; padding:12px 14px;">
                    <div style="font-size:0.76rem; font-weight:800; color:#92400E; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-clock"></i> Distribución Porcentual del Tiempo de Dedicación Docente:
                    </div>
                    <div style="font-size:0.72rem; color:#78350F; line-height:1.45;">
                        • <strong>50% Docencia:</strong> 30% Espacios sincrónicos (Teams/Meet) · 5% Tutorías académicas · 5% Foros de debate · 10% Revisión y retroalimentación de entregables.<br>
                        • <strong>15% Investigación:</strong> Semillero GESTNOVA, Grupo COLLEGIUM y dirección de proyectos.<br>
                        • <strong>10% Proyección Social:</strong> Seguimiento de prácticas, internacionalización y extensión.<br>
                        • <strong>10% Gestión y Permanencia:</strong> Preparación de clases, seguimiento a permanencia y cualificación.<br>
                        • <em>Aplica armónicamente para profesores de Tiempo Completo (TC - 40h) y Medio Tiempo (MT - 22h).</em>
                    </div>
                </div>
            </div>

            <!-- MODELO DE PRODUCCIÓN DE RECURSOS DIGITALES -->
            <div style="margin-top:10px; background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:8px 12px; font-size:0.72rem; color:#14532D; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                <span><i class="fas fa-check-circle" style="color:#059669; margin-right:4px;"></i> <strong>Modelo de Producción de Recursos Digitales (Anexo 3):</strong> Criterios de accesibilidad, interactividad, multimedia, adaptabilidad, actualización periódica y articulación curricular.</span>
                <span style="font-weight:800; color:#065F46;">Aprobado por Consejo Académico</span>
            </div>
        </div>

        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Metodologías Activas de Enseñanza-Aprendizaje
        </h3>

        <div class="grid-2">
            <div class="card">
                <h4><i class="fas fa-puzzle-piece" style="color:var(--orange);"></i> Aprendizaje Basado en Problemas (ABP)</h4>
                <p>Los estudiantes enfrentan <strong>problemas empresariales reales</strong> del contexto regional de Santander, desarrollando competencias de análisis, trabajo en equipo y propuesta de soluciones integrales.</p>
                <div style="margin-top:8px;">
                    <span class="tag-legal">Administración Financiera</span>
                    <span class="tag-legal">Gerencia de Producción</span>
                    <span class="tag-legal">Gestión de Operaciones</span>
                </div>
            </div>
            <div class="card">
                <h4><i class="fas fa-briefcase" style="color:var(--orange);"></i> Estudios de Caso</h4>
                <p>Análisis de <strong>casos empresariales nacionales e internacionales</strong> para el desarrollo del pensamiento crítico y la capacidad de diagnóstico organizacional.</p>
                <div style="margin-top:8px;">
                    <span class="tag-legal">Pensamiento Estratégico</span>
                    <span class="tag-legal">Negocios Internacionales</span>
                    <span class="tag-legal">Gerencia de Marketing</span>
                </div>
            </div>
            <div class="card">
                <h4><i class="fas fa-gamepad" style="color:var(--orange);"></i> Simulación de Negocios</h4>
                <p>Utilización de <strong>Juegos Gerenciales y simuladores empresariales</strong> donde los estudiantes toman decisiones estratégicas en entornos competitivos simulados.</p>
                <div style="margin-top:8px;">
                    <span class="tag-legal">Juego Gerencial</span>
                    <span class="tag-legal">Lab. de Innovación</span>
                    <span class="tag-legal">E-Commerce</span>
                </div>
            </div>
            <div class="card">
                <h4><i class="fas fa-laptop-code" style="color:var(--orange);"></i> Mediación Virtual (LMS Moodle)</h4>
                <p>Campus Virtual institucional con <strong>recursos asincrónicos, foros, wikis, cuestionarios adaptativos</strong> y sesiones sincrónicas para la modalidad virtual.</p>
                <div style="margin-top:8px;">
                    <span class="tag-legal">Todas las asignaturas virtuales</span>
                    <span class="tag-legal">Aula extendida presencial</span>
                </div>
            </div>
        </div>

        <!-- Ruta Metodológica -->
        <div style="margin-top:24px;">
            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin-bottom:12px;">
                <i class="fas fa-route" style="color:var(--orange); margin-right:6px;"></i> Ruta Metodológica del Programa
            </h4>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <div style="flex:1; min-width:150px; background:var(--carbon); color:var(--white); padding:16px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.5rem; margin-bottom:4px;">📘</div>
                    <div style="font-weight:700; font-size:0.8rem;">Sem 1-2</div>
                    <div style="font-size:0.72rem; color:rgba(255,255,255,0.6);">Fundamentación teórica y cuantitativa</div>
                </div>
                <div style="flex:1; min-width:150px; background:var(--carbon); color:var(--white); padding:16px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.5rem; margin-bottom:4px;">🔬</div>
                    <div style="font-weight:700; font-size:0.8rem;">Sem 3-4</div>
                    <div style="font-size:0.72rem; color:rgba(255,255,255,0.6);">Análisis, investigación y contexto económico</div>
                </div>
                <div style="flex:1; min-width:150px; background:var(--carbon); color:var(--white); padding:16px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.5rem; margin-bottom:4px;">🏢</div>
                    <div style="font-weight:700; font-size:0.8rem;">Sem 5-6</div>
                    <div style="font-size:0.72rem; color:rgba(255,255,255,0.6);">Gerencia, marketing y transformación digital</div>
                </div>
                <div style="flex:1; min-width:150px; background:var(--orange); color:var(--white); padding:16px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.5rem; margin-bottom:4px;">🚀</div>
                    <div style="font-weight:700; font-size:0.8rem;">Sem 7-8</div>
                    <div style="font-size:0.72rem; color:rgba(255,255,255,0.9);">Emprendimiento, IA, simulación y grado</div>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== TAB: SISTEMA DE EVALUACIÓN ===== -->
    <div class="tab-panel" id="c4-evaluacion">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Sistema de Evaluación de Aprendizajes
        </h3>

        <div class="grid-2">
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin-bottom:12px;">
                    Instrumentos de Evaluación
                </h4>
                <table class="tbl">
                    <thead><tr><th>Instrumento</th><th>Tipo de Evaluación</th></tr></thead>
                    <tbody>
                        <tr><td>Rúbricas Socioformativas</td><td>Heteroevaluación</td></tr>
                        <tr><td>Talleres y Prácticas</td><td>Formativa</td></tr>
                        <tr><td>Estudios de Caso</td><td>Sumativa</td></tr>
                        <tr><td>Proyectos de Aula</td><td>Formativa + Sumativa</td></tr>
                        <tr><td>Evaluaciones Escritas</td><td>Sumativa</td></tr>
                        <tr><td>Portafolio de Evidencias</td><td>Formativa</td></tr>
                        <tr class="row-accent"><td>Simulación de Negocios</td><td>Heteroevaluación</td></tr>
                        <tr class="row-accent"><td>Proyecto de Grado</td><td>Sumativa Final</td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin-bottom:12px;">
                    Encuadre Pedagógico
                </h4>
                <p style="color:var(--gray-text); font-size:0.85rem; margin-bottom:12px;">Cada asignatura cuenta con un Encuadre Pedagógico documentado que incluye:</p>
                <ul style="list-style:none; padding:0;">
                    <li style="padding:8px 12px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:6px; border-radius:4px; font-size:0.82rem;">✅ Competencias y Resultados de Aprendizaje</li>
                    <li style="padding:8px 12px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:6px; border-radius:4px; font-size:0.82rem;">✅ Contenidos temáticos por unidad</li>
                    <li style="padding:8px 12px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:6px; border-radius:4px; font-size:0.82rem;">✅ Estrategias didácticas y recursos</li>
                    <li style="padding:8px 12px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:6px; border-radius:4px; font-size:0.82rem;">✅ Criterios de evaluación y rúbrica</li>
                    <li style="padding:8px 12px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:6px; border-radius:4px; font-size:0.82rem;">✅ Bibliografía básica y complementaria</li>
                    <li style="padding:8px 12px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:6px; border-radius:4px; font-size:0.82rem;">✅ Plan de trabajo semanal</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- ===== TAB: RETENCIÓN Y SAT ===== -->
    <div class="tab-panel" id="c4-retencion">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Acompañamiento Estudiantil y Estrategias de Retención
        </h3>

        <div class="grid-2">
            <div class="card" style="border-top:4px solid var(--green);">
                <h4><i class="fas fa-bell" style="color:var(--green);"></i> Sistema de Alertas Tempranas (SAT)</h4>
                <p>Implementado desde 2021, el SAT permite la <strong>detección oportuna de estudiantes en riesgo académico</strong> mediante indicadores de asistencia, rendimiento y participación en plataforma. Los docentes generan alertas que activan el acompañamiento de Bienestar.</p>
            </div>
            <div class="card" style="border-top:4px solid var(--blue-info);">
                <h4><i class="fas fa-hands-helping" style="color:var(--blue-info);"></i> Comités Curriculares</h4>
                <p><strong>Comité Curricular Primario:</strong> Integrado por docentes y directivos que evalúan el desempeño académico y proponen ajustes pedagógicos.<br><strong>Comité Curricular Secundario:</strong> Revisa los syllabus, mallas y competencias con participación de egresados y sector externo.</p>
            </div>
        </div>

        <div class="grid-3" style="margin-top:16px;">
            <div class="card">
                <h4><i class="fas fa-user-graduate" style="color:var(--orange);"></i> Tutorías Académicas</h4>
                <p>Espacios de refuerzo individual y grupal con horarios flexibles para ambas modalidades.</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-heart" style="color:var(--orange);"></i> Bienestar Universitario</h4>
                <p>Atención psicológica, orientación vocacional y actividades de integración sociocultural.</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-chart-line" style="color:var(--orange);"></i> Seguimiento Académico</h4>
                <p>Monitoreo semestral de indicadores de deserción, reprobación y graduación acumulada.</p>
            </div>
        </div>

        <div style="margin-top:20px; background:#F8F9FA; border:1px solid #E8E8E8; border-left:4px solid var(--orange); border-radius:8px; padding:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
                <h5 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--carbon); margin:0 0 4px;">
                    <i class="fas fa-chart-line" style="color:var(--orange);"></i> Resultados Estadísticos del SAT y Permanencia Institucional
                </h5>
                <p style="font-size:0.82rem; color:var(--gray-text); margin:0;">
                    Trazabilidad de permanencia (>94% en 2025-1), evolución de matrícula y deserción por cohortes SPADIES (Tablas 11, 12 y 13).
                </p>
            </div>
            <button onclick="openPresentation('c10', '10. Datos Estadísticos Institucionales y Tendencias de Permanencia')" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; padding:8px 16px; border-radius:20px; font-weight:700; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-chart-pie" style="color:#F39200;"></i> Ver Datos Estadísticos (C10) <i class="fas fa-arrow-right"></i>
            </button>
        </div>

        <div class="evidence-box" style="margin-top:20px;">
            <i class="fas fa-file-alt"></i>
            <strong>Soportes:</strong> Reglamento Estudiantil (Anexo 10) · Lineamiento de Educación Virtual (Anexo 9) · Documento Maestro Cap. 4 · Actas de Comités Curriculares
        </div>
    </div>
</div>
`;

window.c4Init = function() {
    const firstTab = document.querySelector('#c4TabGroup .tab-btn');
    if (firstTab) firstTab.click();
};
