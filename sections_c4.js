/* =========================================================
   CONDICIÓN 4 – ORGANIZACIÓN DE ACTIVIDADES ACADÉMICAS
   Administración de Empresas · CETO · Benchmark SST C4
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
    </div>

    <!-- ===== TAB: ESTRATEGIAS DIDÁCTICAS ===== -->
    <div class="tab-panel" id="c4-estrategias">
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
