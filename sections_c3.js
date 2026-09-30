/* =========================================================
   CONDICIÓN 3 – ASPECTOS CURRICULARES (FOCO PRIORITARIO)
   Malla Curricular Completa · Administración de Empresas
   Benchmark: SST Condición 3 · CETO
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c3'] = `
<div class="info-banner">
    <h4><i class="fas fa-sitemap"></i> Condición 3 · Aspectos Curriculares</h4>
    <p>Estructura curricular, plan de estudios, competencias, Resultados de Aprendizaje del Programa (RAP) y estrategias de flexibilidad e interdisciplinariedad. Benchmark adaptado del modelo SST.</p>
</div>

<!-- TABS NAV -->
<div class="tabs-container" id="c3TabGroup">
    <div class="tabs-nav">
        <button class="tab-btn active" data-tab="c3-malla" onclick="switchTab('c3TabGroup','c3-malla')">
            <i class="fas fa-th"></i> Malla Curricular
        </button>
        <button class="tab-btn" data-tab="c3-areas" onclick="switchTab('c3TabGroup','c3-areas')">
            <i class="fas fa-layer-group"></i> Áreas de Formación
        </button>
        <button class="tab-btn" data-tab="c3-rap" onclick="switchTab('c3TabGroup','c3-rap')">
            <i class="fas fa-bullseye"></i> Perfiles y RAP
        </button>
        <button class="tab-btn" data-tab="c3-flex" onclick="switchTab('c3TabGroup','c3-flex')">
            <i class="fas fa-arrows-alt"></i> Flexibilidad
        </button>
        <button class="tab-btn" data-tab="c3-eval" onclick="switchTab('c3TabGroup','c3-eval')">
            <i class="fas fa-clipboard-check"></i> Evaluación RA
        </button>
    </div>

    <!-- ===== TAB: MALLA CURRICULAR ===== -->
    <div class="tab-panel active" id="c3-malla">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
            Plan de Estudios · 144 Créditos · 8 Semestres
        </h3>
        <p style="color:var(--gray-text); font-size:0.82rem; margin-bottom:20px;">Malla curricular unificada para las modalidades Presencial y Virtual. Cada asignatura cuenta con 3 créditos académicos.</p>

        <div class="metric-row">
            <div class="metric-card"><div class="metric-val">48</div><div class="metric-lbl">Asignaturas</div></div>
            <div class="metric-card"><div class="metric-val">144</div><div class="metric-lbl">Créditos Totales</div></div>
            <div class="metric-card"><div class="metric-val">6.912</div><div class="metric-lbl">Horas Totales</div></div>
            <div class="metric-card"><div class="metric-val">3</div><div class="metric-lbl">Áreas de Formación</div></div>
        </div>

        <!-- MALLA GRID -->
        <div class="malla">
            <div class="sh">SEM 1</div><div class="sh">SEM 2</div><div class="sh">SEM 3</div><div class="sh">SEM 4</div><div class="sh">SEM 5</div><div class="sh">SEM 6</div><div class="sh">SEM 7</div><div class="sh">SEM 8</div>

            <div class="mc">Álgebra Lineal</div>
            <div class="mc">Cálculo Diferencial</div>
            <div class="mc">Estadística Inferencial</div>
            <div class="mc">Competencias Investigativas</div>
            <div class="mc">Gerencia del Talento Humano</div>
            <div class="mc highlight">Big Data y Analítica de Datos</div>
            <div class="mc">Pensamiento Estratégico y Prospectivo</div>
            <div class="mc highlight">Inteligencia Artificial</div>

            <div class="mc">Comunicación Oral y Escrita</div>
            <div class="mc">Estadística Descriptiva</div>
            <div class="mc">Inglés II</div>
            <div class="mc">Inglés III</div>
            <div class="mc">Administración Financiera</div>
            <div class="mc">Métodos Cualitativos y Cuantitativos</div>
            <div class="mc">Formulación y Eval. de Proyectos</div>
            <div class="mc highlight">Lab. de Innovación y Emprendimiento</div>

            <div class="mc">Cátedra de la Paz</div>
            <div class="mc">Inglés I</div>
            <div class="mc">Análisis Financiero</div>
            <div class="mc">Investigación de Mercados</div>
            <div class="mc">Gestión de Operaciones</div>
            <div class="mc">Gerencia de Marketing</div>
            <div class="mc">Gerencia de Ventas y Canales</div>
            <div class="mc highlight">Juego Gerencial (Simulación)</div>

            <div class="mc">Fund. de Administración</div>
            <div class="mc">Microeconomía</div>
            <div class="mc">Macroeconomía</div>
            <div class="mc">Matemática Financiera</div>
            <div class="mc">Sistemas Integrados de Gestión</div>
            <div class="mc">Legislación Tributaria</div>
            <div class="mc">Gerencia de Producción</div>
            <div class="mc">Habilidades Gerenciales y Liderazgo</div>

            <div class="mc">Fund. Contables y Financieros</div>
            <div class="mc">Legislación Comercial</div>
            <div class="mc">Procesos Administrativos</div>
            <div class="mc">Economía Colombiana e Internacional</div>
            <div class="mc">Negocios y Gerencia Internacional</div>
            <div class="mc">Modelos de Emprendimiento</div>
            <div class="mc">E-Commerce</div>
            <div class="mc">Gerencia de Calidad</div>

            <div class="mc">Fund. de Mercadeo</div>
            <div class="mc">Costos y Presupuestos</div>
            <div class="mc">Teoría Organizacional</div>
            <div class="mc">Derecho Laboral y Seg. Social</div>
            <div class="mc">Electiva Profesional I</div>
            <div class="mc">Electiva Profesional II</div>
            <div class="mc">Electiva Profesional III</div>
            <div class="mc">Proyecto de Grado</div>
        </div>

        <div style="margin-top:16px; display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
            <span style="display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--gray-text); font-weight:600;">
                <span style="display:inline-block; width:14px; height:14px; background:var(--orange-light); border-left:3px solid var(--orange); border-radius:2px;"></span> Asignaturas con componente de Transformación Digital / IA
            </span>
        </div>

        <div class="evidence-box" style="margin-top:20px;">
            <i class="fas fa-file-excel"></i>
            <strong>Soporte:</strong> Anexo 3. Malla curricular ajustada por modalidad (Excel) · Documento Maestro Cap. 3
        </div>
    </div>

    <!-- ===== TAB: ÁREAS DE FORMACIÓN ===== -->
    <div class="tab-panel" id="c3-areas">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Distribución por Áreas de Formación
        </h3>

        <table class="tbl">
            <thead>
                <tr>
                    <th>Área de Formación</th>
                    <th>Asignaturas</th>
                    <th>Créditos</th>
                    <th>% del Plan</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row-accent">
                    <td class="lb">Transversal</td>
                    <td>14 asignaturas</td>
                    <td>42</td>
                    <td><strong>29.2%</strong></td>
                </tr>
                <tr>
                    <td class="lb">Disciplinar</td>
                    <td>31 asignaturas</td>
                    <td>93</td>
                    <td><strong>64.6%</strong></td>
                </tr>
                <tr class="row-accent">
                    <td class="lb">Electivo</td>
                    <td>3 asignaturas</td>
                    <td>9</td>
                    <td><strong>6.3%</strong></td>
                </tr>
                <tr style="background:var(--carbon); color:var(--white);">
                    <td style="font-weight:800; color:var(--white);">TOTAL</td>
                    <td style="color:var(--white);"><strong>48 asignaturas</strong></td>
                    <td style="color:var(--white);"><strong>144</strong></td>
                    <td style="color:var(--white);"><strong>100%</strong></td>
                </tr>
            </tbody>
        </table>

        <!-- Desglose de Horas por Modalidad -->
        <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin:28px 0 12px;">
            <i class="fas fa-clock" style="color:var(--orange); margin-right:6px;"></i> Distribución de Horas por Modalidad y Crédito
        </h4>

        <div class="grid-2">
            <div class="card-accent">
                <h4><i class="fas fa-chalkboard" style="margin-right:6px;"></i> Modalidad Presencial</h4>
                <table style="width:100%; font-size:0.82rem; color:rgba(255,255,255,0.9); margin-top:8px;">
                    <tr><td>Horas Docencia Directa (por crédito)</td><td style="text-align:right; font-weight:700;">48h</td></tr>
                    <tr><td>Horas Trabajo Independiente (por crédito)</td><td style="text-align:right; font-weight:700;">96h</td></tr>
                    <tr style="border-top:1px solid rgba(255,255,255,0.2);"><td style="font-weight:800;">Total por crédito</td><td style="text-align:right; font-weight:800; color:var(--orange);">144h</td></tr>
                    <tr><td style="font-weight:800;">Total Programa (144 cr.)</td><td style="text-align:right; font-weight:800; color:var(--orange);">6.912h</td></tr>
                </table>
            </div>
            <div class="card-accent">
                <h4><i class="fas fa-wifi" style="margin-right:6px;"></i> Modalidad Virtual</h4>
                <table style="width:100%; font-size:0.82rem; color:rgba(255,255,255,0.9); margin-top:8px;">
                    <tr><td>Horas Trabajo Mediado (por crédito)</td><td style="text-align:right; font-weight:700;">36h</td></tr>
                    <tr><td>Horas Trabajo Independiente (por crédito)</td><td style="text-align:right; font-weight:700;">108h</td></tr>
                    <tr style="border-top:1px solid rgba(255,255,255,0.2);"><td style="font-weight:800;">Total por crédito</td><td style="text-align:right; font-weight:800; color:var(--orange);">144h</td></tr>
                    <tr><td style="font-weight:800;">Total Programa (144 cr.)</td><td style="text-align:right; font-weight:800; color:var(--orange);">6.912h</td></tr>
                </table>
            </div>
        </div>

        <!-- Componentes Transversales -->
        <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin:28px 0 12px;">
            Componente Transversal (14 asignaturas · 42 créditos)
        </h4>
        <table class="tbl">
            <thead><tr><th>Sem.</th><th>Asignatura</th><th>Tipo</th><th>Créditos</th></tr></thead>
            <tbody>
                <tr><td>1</td><td>Álgebra Lineal</td><td>T</td><td>3</td></tr>
                <tr><td>1</td><td>Comunicación Oral y Escrita</td><td>T</td><td>3</td></tr>
                <tr><td>1</td><td>Cátedra de la Paz y Resolución de Conflictos</td><td>T</td><td>3</td></tr>
                <tr><td>2</td><td>Cálculo Diferencial</td><td>T</td><td>3</td></tr>
                <tr><td>2</td><td>Estadística Descriptiva</td><td>T</td><td>3</td></tr>
                <tr><td>2</td><td>Inglés I</td><td>TP</td><td>3</td></tr>
                <tr><td>3</td><td>Estadística Inferencial</td><td>T</td><td>3</td></tr>
                <tr><td>3</td><td>Inglés II</td><td>TP</td><td>3</td></tr>
                <tr><td>4</td><td>Competencias Investigativas</td><td>TP</td><td>3</td></tr>
                <tr><td>4</td><td>Inglés III</td><td>TP</td><td>3</td></tr>
                <tr class="row-accent"><td>6</td><td>Big Data y Analítica de Datos</td><td>T</td><td>3</td></tr>
                <tr><td>6</td><td>Métodos Cualitativos y Cuantitativos</td><td>T</td><td>3</td></tr>
                <tr><td>7</td><td>Pensamiento Estratégico y Prospectivo</td><td>T</td><td>3</td></tr>
                <tr class="row-accent"><td>8</td><td>Inteligencia Artificial</td><td>T</td><td>3</td></tr>
            </tbody>
        </table>

        <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--carbon); margin:28px 0 12px;">
            Componente Disciplinar (31 asignaturas · 93 créditos)
        </h4>
        <table class="tbl">
            <thead><tr><th>Sem.</th><th>Asignatura</th><th>Tipo</th><th>Créditos</th></tr></thead>
            <tbody>
                <tr><td>1</td><td>Fundamentos de Administración</td><td>T</td><td>3</td></tr>
                <tr><td>1</td><td>Fundamentos Contables y Financieros</td><td>T</td><td>3</td></tr>
                <tr><td>1</td><td>Fundamentos de Mercadeo</td><td>T</td><td>3</td></tr>
                <tr><td>2</td><td>Microeconomía</td><td>T</td><td>3</td></tr>
                <tr><td>2</td><td>Legislación Comercial</td><td>T</td><td>3</td></tr>
                <tr><td>2</td><td>Costos y Presupuestos</td><td>TP</td><td>3</td></tr>
                <tr><td>3</td><td>Macroeconomía</td><td>T</td><td>3</td></tr>
                <tr><td>3</td><td>Análisis Financiero</td><td>T</td><td>3</td></tr>
                <tr><td>3</td><td>Procesos Administrativos</td><td>T</td><td>3</td></tr>
                <tr><td>3</td><td>Teoría Organizacional</td><td>T</td><td>3</td></tr>
                <tr><td>4</td><td>Investigación de Mercados</td><td>TP</td><td>3</td></tr>
                <tr><td>4</td><td>Matemática Financiera</td><td>T</td><td>3</td></tr>
                <tr><td>4</td><td>Economía Colombiana e Internacional</td><td>T</td><td>3</td></tr>
                <tr><td>4</td><td>Derecho Laboral y Seguridad Social</td><td>T</td><td>3</td></tr>
                <tr><td>5</td><td>Gerencia del Talento Humano</td><td>TP</td><td>3</td></tr>
                <tr><td>5</td><td>Administración Financiera</td><td>TP</td><td>3</td></tr>
                <tr><td>5</td><td>Gestión de Operaciones</td><td>T</td><td>3</td></tr>
                <tr><td>5</td><td>Sistemas Integrados de Gestión (HSEQ)</td><td>TP</td><td>3</td></tr>
                <tr><td>5</td><td>Negocios y Gerencia Internacional</td><td>T</td><td>3</td></tr>
                <tr><td>6</td><td>Gerencia de Marketing</td><td>TP</td><td>3</td></tr>
                <tr><td>6</td><td>Legislación Tributaria</td><td>T</td><td>3</td></tr>
                <tr><td>6</td><td>Modelos de Emprendimiento</td><td>TP</td><td>3</td></tr>
                <tr><td>7</td><td>Formulación y Evaluación de Proyectos</td><td>TP</td><td>3</td></tr>
                <tr><td>7</td><td>Gerencia de Ventas y Canales de Distribución</td><td>TP</td><td>3</td></tr>
                <tr><td>7</td><td>Gerencia de Producción</td><td>T</td><td>3</td></tr>
                <tr class="row-accent"><td>7</td><td>E-Commerce</td><td>T</td><td>3</td></tr>
                <tr class="row-accent"><td>8</td><td>Laboratorio de Innovación y Emprendimiento</td><td>TP</td><td>3</td></tr>
                <tr class="row-accent"><td>8</td><td>Juego Gerencial (Simulación de Negocios)</td><td>TP</td><td>3</td></tr>
                <tr><td>8</td><td>Habilidades Gerenciales y Liderazgo</td><td>T</td><td>3</td></tr>
                <tr><td>8</td><td>Gerencia de Calidad</td><td>TP</td><td>3</td></tr>
                <tr><td>8</td><td>Proyecto de Grado</td><td>T</td><td>3</td></tr>
            </tbody>
        </table>
    </div>

    <!-- ===== TAB: PERFILES Y RAP ===== -->
    <div class="tab-panel" id="c3-rap">
        <div class="grid-2">
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                    <i class="fas fa-user-graduate" style="color:var(--orange); margin-right:6px;"></i> Perfil de Egreso
                </h4>
                <p style="font-size:0.88rem; color:var(--gray-text); margin-bottom:16px;">El egresado del programa de Administración de Empresas de la CETO será un profesional integral capaz de:</p>
                <ul style="list-style:none; padding:0;">
                    <li style="padding:10px 14px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.85rem;">
                        <strong>PE1.</strong> Liderar y gestionar organizaciones con visión estratégica, ética y responsabilidad social.
                    </li>
                    <li style="padding:10px 14px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.85rem;">
                        <strong>PE2.</strong> Diseñar e implementar estrategias de marketing, comercialización y gestión financiera.
                    </li>
                    <li style="padding:10px 14px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.85rem;">
                        <strong>PE3.</strong> Aplicar herramientas de transformación digital (IA, Big Data, E-Commerce) a la gestión empresarial.
                    </li>
                    <li style="padding:10px 14px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.85rem;">
                        <strong>PE4.</strong> Formular, evaluar y gestionar proyectos de inversión y emprendimiento sostenible.
                    </li>
                    <li style="padding:10px 14px; background:var(--gray-bg); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.85rem;">
                        <strong>PE5.</strong> Tomar decisiones basadas en el análisis cuantitativo y cualitativo con orientación a resultados.
                    </li>
                </ul>
            </div>
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                    <i class="fas fa-bullseye" style="color:var(--orange); margin-right:6px;"></i> Resultados de Aprendizaje del Programa (RAP)
                </h4>
                <ul style="list-style:none; padding:0;">
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 1.</strong> Analizar el entorno organizacional aplicando modelos económicos y de gestión estratégica.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 2.</strong> Diseñar planes de mercadeo, ventas y relacionamiento con el cliente usando herramientas digitales.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 3.</strong> Gestionar los recursos financieros, contables y presupuestales de una organización.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 4.</strong> Aplicar técnicas de analítica de datos e IA para la toma de decisiones empresariales.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 5.</strong> Formular y evaluar proyectos de emprendimiento con criterios de sostenibilidad y viabilidad financiera.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 6.</strong> Liderar equipos de trabajo con competencias comunicativas, éticas y de responsabilidad social.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 7.</strong> Gestionar procesos de producción, calidad y cadena de suministro con enfoque de mejora continua.
                    </li>
                    <li style="padding:10px 14px; background:var(--white); border:1px solid var(--gray-100); margin-bottom:6px; border-radius:6px; font-size:0.82rem;">
                        <strong style="color:var(--orange);">RAP 8.</strong> Desarrollar competencias investigativas para la generación de conocimiento organizacional.
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- ===== TAB: FLEXIBILIDAD ===== -->
    <div class="tab-panel" id="c3-flex">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Estrategias de Flexibilidad Curricular
        </h3>
        <div class="grid-2">
            <div class="card">
                <h4><i class="fas fa-exchange-alt" style="color:var(--orange);"></i> Flexibilidad Horizontal</h4>
                <p>El estudiante puede elegir entre <strong>3 Electivas Profesionales</strong> (semestres 5, 6 y 7) de un banco de opciones que incluye asignaturas de otras escuelas, profundización sectorial y cursos de actualización tecnológica.</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-project-diagram" style="color:var(--orange);"></i> Flexibilidad Vertical</h4>
                <p>El plan de estudios permite la <strong>movilidad inter-semestral</strong> mediante el sistema de requisitos y correquisitos, favoreciendo la aceleración o desaceleración del ritmo académico según las necesidades del estudiante.</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-globe" style="color:var(--orange);"></i> Internacionalización</h4>
                <p>Clases espejo con universidades internacionales, invitados expertos internacionales, participación en congresos virtuales y plan de bilingüismo integrado en 3 niveles de inglés (B1 MCER).</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-code-branch" style="color:var(--orange);"></i> Doble Modalidad</h4>
                <p>El Registro Calificado Único permite al estudiante <strong>migrar entre modalidad presencial y virtual</strong> manteniendo el mismo plan de estudios, competencias y resultados de aprendizaje.</p>
            </div>
        </div>
    </div>

    <!-- ===== TAB: EVALUACIÓN RA ===== -->
    <div class="tab-panel" id="c3-eval">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Seguimiento y Evaluación de Resultados de Aprendizaje
        </h3>
        <p style="color:var(--gray-text); font-size:0.88rem; margin-bottom:16px;">El modelo de evaluación de la CETO, fundamentado en la Taxonomía de Bloom (revisada) y el enfoque socioformativo de Sergio Tobón, establece una escala de verificación del logro de los Resultados de Aprendizaje:</p>

        <table class="tbl">
            <thead>
                <tr>
                    <th>Rango</th>
                    <th>Criterio de Logro del RA</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="lb">0 – 1.0</td><td>El estudiante no alcanza los resultados de aprendizaje planteados.</td></tr>
                <tr><td class="lb">1.1 – 2.0</td><td>El estudiante alcanza mínimamente los resultados de aprendizaje.</td></tr>
                <tr><td class="lb">2.1 – 2.9</td><td>El estudiante alcanza algunos RA sin grado aceptable.</td></tr>
                <tr class="row-accent"><td class="lb">3.0 – 4.0</td><td>El estudiante alcanza buenos resultados de aprendizaje.</td></tr>
                <tr class="row-accent"><td class="lb">4.1 – 4.5</td><td>El estudiante alcanza óptimamente la mayoría de los RA.</td></tr>
                <tr class="row-accent"><td class="lb">4.6 – 5.0</td><td>El estudiante alcanza plenamente los resultados de aprendizaje.</td></tr>
            </tbody>
        </table>

        <div class="grid-3" style="margin-top:24px;">
            <div class="card">
                <h4><i class="fas fa-clipboard-list" style="color:var(--orange);"></i> Autoevaluación</h4>
                <p>El estudiante reflexiona sobre su propio proceso de aprendizaje y nivel de logro de competencias.</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-users" style="color:var(--orange);"></i> Coevaluación</h4>
                <p>Evaluación entre pares que fomenta el trabajo colaborativo y la retroalimentación constructiva.</p>
            </div>
            <div class="card">
                <h4><i class="fas fa-chalkboard-teacher" style="color:var(--orange);"></i> Heteroevaluación</h4>
                <p>Evaluación docente con rúbricas socioformativas alineadas a los RA y competencias del perfil.</p>
            </div>
        </div>

        <div class="evidence-box" style="margin-top:20px;">
            <i class="fas fa-book-open"></i>
            <strong>Referentes:</strong> Taxonomía de Bloom (Anderson & Krathwohl, 2001) · Enfoque Socioformativo (Tobón, 2017) · Modelo Pedagógico CETO (Anexo 6) · Política de RA Institucional (Anexo 7)
        </div>
    </div>
</div>
`;

window.c3Init = function() {
    // Auto-activate first tab on load
    const firstTab = document.querySelector('#c3TabGroup .tab-btn');
    if (firstTab) firstTab.click();
};
