/* =========================================================
   CONDICIÓN 7 – PERSONAL DOCENTE
   Administración de Empresas · Registro Calificado Único (Presencial & Virtual) · TO
   Marco Normativo: Decreto 1330 de 2019
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c7'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 7
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Decreto 1330 de 2019 · Planta Docente Integral y Planes de Trabajo</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.26rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-chalkboard-teacher" style="color:#F39200;"></i> Personal Docente y Desarrollo Profesoral
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0; line-height:1.45;">
                Cuerpo profesoral asignado para las modalidades <strong>Presencial y Virtual</strong>: perfiles de posgrado, cualificación en competencias digitales, distribución coherente de carga horaria (docencia, investigación, extensión y gestión) y ratios estudiante/docente.
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-graduation-cap"></i> 100% Posgrado
            </span>
            <span style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                Ratio 1:15 a 1:20
            </span>
        </div>
    </div>
</div>

<!-- BARRA DE SUBSECCIONES EN PRIMER PLANO -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:10px 14px; margin-bottom:20px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.74rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-sitemap" style="color:#F39200;"></i> Subsecciones de Sustentación:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;">
        <button class="c7-pill-btn active" onclick="switchC7Sub('c7-sec-planta', this)" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            1. Planta Profesoral Asignada
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-virtual', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            2. Competencias Digitales (Virtualidad)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-horas', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            3. Distribución Coherente de Horas
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-grupos', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            4. Organización de Grupos y Ratios
        </button>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 1: PLANTA PROFESORAL ASIGNADA
     ========================================================= -->
<div id="c7-sec-planta" class="c7-sub-panel" style="display:block;">
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #F39200; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">100%</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Nivel Posgradual</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #16A34A; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">15+</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Años Exp. Promedio</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #2563EB; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">2</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Candidatos Doctorales</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #7C3AED; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">TC / MT</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Dedicación Exclusiva</div>
        </div>
    </div>

    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
        <i class="fas fa-users" style="color:#F39200;"></i> Planta Docente Oficial Asignada al Programa (Presencial y Virtual)
    </h4>
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Nombre del Docente</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Formación Académica y Posgrados</th>
                    <th style="padding:10px 12px; text-align:center; border:1px solid #334155;">Vinculación</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Áreas Disciplinares Asignadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Andrea Katherine Hernández</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Magíster en Administración · Esp. en Gestión y Seguridad en BD · Ingeniera Industrial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">MT (22 h)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Big Data y Analítica · Sistemas Integrados de Gestión · TICs aplicadas (Sems. 1–4)</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Jean Margareth Correa Gustines</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Maestría en Educación · Esp. en Gerencia de Proyectos · Esp. Riesgos Laborales · Administradora de Empresas</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">MT (22 h)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Fundamentos de Administración · Procesos Administrativos · Teoría Organizacional</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Pedro Noriega</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Cursante Doctorado en Educación · Magíster en Informática · Ingeniero Industrial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#B45309; font-weight:700; padding:2px 8px; border-radius:4px;">TC (40 h)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Dirección Estratégica · Metodología de la Investigación · Liderazgo GESTNOVA</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Fredy Castellanos</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Magíster en Prevención de Riesgos · Ingeniero Industrial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#B45309; font-weight:700; padding:2px 8px; border-radius:4px;">TC (40 h)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Operaciones · Productividad · Logística y Cadena de Suministro</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Leonardo Pérez</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Máster en Finanzas · Magíster en Dirección de Empresas · Ingeniero Industrial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">MT (22 h)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Matemáticas Financieras · Evaluación de Proyectos · Finanzas Corporativas</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Guillermo Meléndez</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Cursante Doctorado · Maestría en Riesgos Laborales · Abogado</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#B45309; font-weight:700; padding:2px 8px; border-radius:4px;">TC (40 h)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Legislación Laboral · Derecho Comercial · Ética Profesional</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 2: COMPETENCIAS DIGITALES (VIRTUALIDAD)
     ========================================================= -->
<div id="c7-sec-virtual" class="c7-sub-panel" style="display:none;">
    <div style="background:#F5F3FF; border:1.5px solid #DDD6FE; border-radius:10px; padding:18px; margin-bottom:18px;">
        <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#6D28D9; margin:0 0 6px;">
            <i class="fas fa-laptop-code"></i> Perfil Docente en Entornos Virtuales y Marco DigComp 2.2
        </h4>
        <p style="font-size:0.8rem; color:#4B5563; line-height:1.5; margin:0;">
            Los profesores con responsabilidad en la <strong>Modalidad Virtual</strong> cuentan con formación pedagógica certificada en diseño instruccional, administración de plataformas LMS (Moodle/SIGA), dinamización de foros y evaluación mediada por TIC, cumpliendo los lineamientos del Ministerio de Educación Nacional.
        </p>
    </div>

    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Docente</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Plataformas y Herramientas Dominadas</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Evidencias de Competencias Digitales</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Andrea Katherine Hernández</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Moodle LMS · Power BI · Excel Avanzado · Zoom/Teams · Google Workspace</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Especialización en Gestión de BD · 10 años en docencia virtual · Manejo certificado Power BI</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Jean Margareth Correa</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Moodle LMS · Canva Edu · Foros evaluativos · Rúbricas interactivas en línea</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Maestría en Educación con énfasis en didácticas mediadas por TIC · 8 años en tutoría virtual</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Pedro Noriega</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">LMS Moodle Administrator · Python educativo · Scopus · Repositorios abiertos</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Especialista en Informática para la Docencia · 15 años en plataformas e-learning</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 3: DISTRIBUCIÓN COHERENTE DE HORAS
     ========================================================= -->
<div id="c7-sec-horas" class="c7-sub-panel" style="display:none;">
    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
        <i class="fas fa-clock" style="color:#F39200;"></i> Planes de Trabajo y Distribución Horaria Semanal (Decreto 1330)
    </h4>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
        <!-- MT Presencial -->
        <div style="background:#FFFFFF; border:1.5px solid #FED7AA; border-radius:10px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #FED7AA; padding-bottom:6px;">
                <h5 style="margin:0; font-size:0.9rem; font-weight:800; color:#C2410C;">Medio Tiempo Académico (MT - 22 h)</h5>
                <span style="font-size:0.68rem; background:#FFEDD5; color:#9A3412; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial / Virtual</span>
            </div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem;">
                <tr><td style="padding:4px 0; font-weight:700;">Docencia Directa (clases/talleres/campus):</td><td style="text-align:right; font-weight:800; color:#1A1A1B;">11 h (50%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Preparación, asesoría y evaluación:</td><td style="text-align:right; font-weight:600;">4 h (18%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Investigación formativa (Semillero GESTNOVA):</td><td style="text-align:right; font-weight:600;">3 h (14%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Extensión y consultoría (CIDRE):</td><td style="text-align:right; font-weight:600;">2 h (9%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Gestión académica y comités de área:</td><td style="text-align:right; font-weight:600;">2 h (9%)</td></tr>
                <tr style="border-top:1.5px solid #FED7AA; font-weight:800; color:#C2410C;"><td style="padding:6px 0;">Total Semanal:</td><td style="text-align:right;">22 Horas (100%)</td></tr>
            </table>
        </div>

        <!-- TC Institucional -->
        <div style="background:#FFFFFF; border:1.5px solid #BBF7D0; border-radius:10px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #BBF7D0; padding-bottom:6px;">
                <h5 style="margin:0; font-size:0.9rem; font-weight:800; color:#15803D;">Tiempo Completo Académico (TC - 40 h)</h5>
                <span style="font-size:0.68rem; background:#DCFCE7; color:#166534; font-weight:700; padding:2px 8px; border-radius:4px;">Institucional Articulado</span>
            </div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem;">
                <tr><td style="padding:4px 0; font-weight:700;">Docencia directa / tutoría virtual:</td><td style="text-align:right; font-weight:800; color:#1A1A1B;">20 h (50%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Preparación, diseño instruccional y evaluación:</td><td style="text-align:right; font-weight:600;">8 h (20%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Investigación (Grupo COLLEGIUM Minciencias):</td><td style="text-align:right; font-weight:600;">6 h (15%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Extensión, proyectos y alianzas CUEES:</td><td style="text-align:right; font-weight:600;">3 h (7.5%)</td></tr>
                <tr><td style="padding:4px 0; color:#475569;">Gestión académica y autoevaluación:</td><td style="text-align:right; font-weight:600;">3 h (7.5%)</td></tr>
                <tr style="border-top:1.5px solid #BBF7D0; font-weight:800; color:#15803D;"><td style="padding:6px 0;">Total Semanal:</td><td style="text-align:right;">40 Horas (100%)</td></tr>
            </table>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 4: ORGANIZACIÓN DE GRUPOS Y RATIOS
     ========================================================= -->
<div id="c7-sec-grupos" class="c7-sub-panel" style="display:none;">
    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
        <i class="fas fa-layer-group" style="color:#F39200;"></i> Ratios Estudiante/Docente y Política de Tamaño de Grupos
    </h4>
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Criterio Pedagógico</th>
                    <th style="padding:10px 12px; text-align:center; border:1px solid #334155;">Modalidad Presencial</th>
                    <th style="padding:10px 12px; text-align:center; border:1px solid #334155;">Modalidad Virtual</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Fundamentación Normativa y Pedagógica</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Máximo de estudiantes por grupo (Asignaturas teóricas)</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E293B;">30 estudiantes</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E293B;">35 estudiantes</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Capacidad física de aulas institucionales y estándar de retroalimentación activa en LMS</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Máximo por grupo (Laboratorios, salas y talleres)</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E293B;">25 estudiantes</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E293B;">25 estudiantes</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Disponibilidad de estaciones individuales de cómputo y seguimiento personalizado</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Relación Docente / Estudiante (Proyección cohorte plena)</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">1:15 a 1:20</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">1:20 a 1:25</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Garantiza acompañamiento tutorial continuo y cumplimiento de resultados de aprendizaje</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="evidence-box" style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #16A34A; border-radius:8px; padding:12px 16px;">
        <i class="fas fa-folder-open" style="color:#16A34A; margin-right:8px;"></i>
        <strong>Soportes Oficiales de la Condición:</strong> Hojas de Vida de docentes (Anexo 4) · Estatuto Docente Institucional (Anexo 17) · Lineamiento de Asignación y Distribución de Planes de Trabajo (Anexo 5) · Resoluciones de nombramiento y contratos vigentes.
    </div>
</div>
`;

window.switchC7Sub = function(targetId, btn) {
    document.querySelectorAll('.c7-sub-panel').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.c7-pill-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = '#F8FAFC';
        b.style.color = '#334155';
        b.style.borderColor = '#CBD5E1';
    });
    const panel = document.getElementById(targetId);
    if (panel) panel.style.display = 'block';
    if (btn) {
        btn.classList.add('active');
        btn.style.background = '#1A1A1B';
        btn.style.color = '#FFFFFF';
        btn.style.borderColor = '#F39200';
    }
};

window.c7Init = function() {};
