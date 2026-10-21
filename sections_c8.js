/* =========================================================
   CONDICIÓN 8 – MEDIOS EDUCATIVOS
   Administración de Empresas · Registro Calificado Único (Presencial & Virtual) · TO
   Marco Normativo: Decreto 1330 de 2019
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c8'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 8
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Decreto 1330 de 2019 · Ecosistema Digital y Físico de Aprendizaje</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.26rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-laptop-code" style="color:#F39200;"></i> Medios Educativos y Recursos de Aprendizaje
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0; line-height:1.45;">
                Recursos bibliográficos físicos y digitales, plataforma LMS Moodle sobre Amazon Web Services (AWS), simuladores empresariales, software especializado, plan de capacitación y protocolos de inclusión (Decreto 1421 de 2017).
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-book"></i> 98K+ Títulos E-Libro
            </span>
            <span style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                AWS Cloud 24/7
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
        <button class="c8-pill-btn active" onclick="switchC8Sub('c8-sec-biblio', this)" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            1. Biblioteca Física y Digital
        </button>
        <button class="c8-pill-btn" onclick="switchC8Sub('c8-sec-campus', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            2. Campus LMS &amp; AWS Cloud
        </button>
        <button class="c8-pill-btn" onclick="switchC8Sub('c8-sec-software', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            3. Software y Simuladores
        </button>
        <button class="c8-pill-btn" onclick="switchC8Sub('c8-sec-inclusion', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            4. Inclusión y Ajustes Razonables
        </button>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 1: BIBLIOTECA FÍSICA Y DIGITAL
     ========================================================= -->
<div id="c8-sec-biblio" class="c8-sub-panel" style="display:block;">
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #F39200; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">98,222</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Títulos E-Libro</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #16A34A; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">515</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Editoriales Académicas</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #2563EB; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">1,450+</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Volúmenes Físicos Bucaramanga</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #7C3AED; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">100%</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Cobertura de Syllabus</div>
        </div>
    </div>

    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
        <i class="fas fa-book-reader" style="color:#F39200;"></i> Recursos Bibliográficos Digitales y Bases de Datos Especializadas
    </h4>
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Recurso Digital / Base de Datos</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Tipo de Contenido</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Cobertura Temática</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Acceso Institucional</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">E-Libro Cátedra España/Latam</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Libros electrónicos texto completo multiusuario</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Administración, Finanzas, Mercadeo, Economía, Derecho y TIC</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial y Virtual (24/7)</span></td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Pearson MyLab / Biblioteca Digital</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Textos guía y simuladores interactivos</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Contabilidad, Matemáticas Financieras, Estadística y Operaciones</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial y Virtual (24/7)</span></td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Dialnet Plus &amp; Redalyc / SciELO</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Artículos científicos indexados y tesis doctorales</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Investigación en Ciencias Económicas, Administrativas y Sociales</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial y Virtual (24/7)</span></td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">LEGIS / Sistema Jurídico y Tributario</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Jurisprudencia, estatuto tributario y normativa comercial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Legislación comercial, laboral, tributaria y aduanera colombiana</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial y Virtual (24/7)</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 2: CAMPUS LMS & AWS CLOUD
     ========================================================= -->
<div id="c8-sec-campus" class="c8-sub-panel" style="display:none;">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
        <div style="background:#FFFFFF; border:1.5px solid #E2E8F0; border-radius:10px; padding:18px;">
            <h5 style="margin:0 0 10px; font-size:0.95rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat',sans-serif;">
                <i class="fab fa-aws" style="color:#F39200;"></i> Infraestructura Cloud Amazon Web Services (AWS)
            </h5>
            <p style="font-size:0.78rem; color:#475569; line-height:1.55; margin-bottom:10px;">
                El Campus Virtual TO está implementado sobre una arquitectura de alta disponibilidad en AWS:
            </p>
            <ul style="margin:0; padding-left:18px; font-size:0.76rem; color:#475569; line-height:1.5;">
                <li>Servidores dedicados con balanceador de carga elástico (ALB).</li>
                <li>Base de datos gestionada <strong>MariaDB RDS</strong> con réplicas de lectura y copias automáticas diarias.</li>
                <li>Almacenamiento de recursos educativos en Amazon S3 con CDN CloudFront.</li>
                <li>Disponibilidad garantizada del <strong>99.9% (24/7/365)</strong>.</li>
            </ul>
        </div>

        <div style="background:#FFFFFF; border:1.5px solid #E2E8F0; border-radius:10px; padding:18px;">
            <h5 style="margin:0 0 10px; font-size:0.95rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat',sans-serif;">
                <i class="fas fa-shield-alt" style="color:#16A34A;"></i> Integridad Académica y Motor de Similitud
            </h5>
            <p style="font-size:0.78rem; color:#475569; line-height:1.55; margin-bottom:10px;">
                Mecanismos de verificación de originalidad y honestidad académica integrados en el LMS:
            </p>
            <ul style="margin:0; padding-left:18px; font-size:0.76rem; color:#475569; line-height:1.5;">
                <li>Revisión automática de similitud documental en todas las entregas de proyectos de grado y tareas.</li>
                <li>Comparación contra repositorios académicos globales, páginas web y entregas de cohortes anteriores.</li>
                <li>Rúbricas institucionales de citación bajo normas APA 7.ª edición.</li>
                <li>Reglamento estudiantil con protocolo disciplinario y formativo para casos de coincidencia no justificada.</li>
            </ul>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 3: SOFTWARE Y SIMULADORES
     ========================================================= -->
<div id="c8-sec-software" class="c8-sub-panel" style="display:none;">
    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
        <i class="fas fa-tools" style="color:#F39200;"></i> Software Especializado Integrado en el Plan de Estudios
    </h4>
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Área de Formación</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Herramientas / Software</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Asignaturas que lo Utilizan</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Competencia Desarrollada</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Analítica y Big Data</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Power BI Desktop · Excel Avanzado (Solver, Macros) · Google Looker Studio</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Big Data y Analítica · Estadística Descriptiva e Inferencial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Toma de decisiones gerenciales basada en modelos predictivos y tableros de control</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Simulación Gerencial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Simuladores de Negocios (Marketplace Live / Business Strategy Game)</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Gerencia Estratégica · Juego Gerencial · Finanzas Corporativas</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Competitividad empresarial, gestión de inventarios, precios y marketing en mercados simulados</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Gestión y Productividad</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Microsoft 365 Institucional · Google Workspace · Trello / Asana</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">TICs aplicadas · Procesos Administrativos · Formulación de Proyectos</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Trabajo colaborativo sincrónico/asincrónico y dirección ágil de proyectos</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 4: INCLUSIÓN Y AJUSTES RAZONABLES
     ========================================================= -->
<div id="c8-sec-inclusion" class="c8-sub-panel" style="display:none;">
    <div style="background:#F0FDF4; border:1.5px solid #BBF7D0; border-radius:10px; padding:18px; margin-bottom:18px;">
        <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#15803D; margin:0 0 6px;">
            <i class="fas fa-universal-access"></i> Protocolo Institucional de Accesibilidad y Ajustes Razonables (Decreto 1421 de 2017)
        </h4>
        <p style="font-size:0.8rem; color:#334155; line-height:1.5; margin:0;">
            Garantías para atender barreras de acceso y características de la población estudiantil en modalidades <strong>Presencial y Virtual</strong>:
        </p>
    </div>

    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Población / Barrera Atendida</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Estrategia Institucional Habilitada</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Mecanismo Operativo y Soporte</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Estudiantes sin dispositivo de cómputo propio</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Préstamo de computadores portátiles en biblioteca y acceso libre a salas de cómputo</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">10 portátiles para préstamo circulante y salas abiertas de Lunes a Sábado de 7:00 a.m. a 10:00 p.m. (Sede B)</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Estudiantes con limitación de conectividad</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Descarga asincrónica offline en E-Libro y aplicación móvil de Moodle</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Moodle Mobile App permite descargar contenidos y actividades para estudio sin conexión</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Discapacidad auditiva o visual</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Subtítulos automáticos en sesiones sincrónicas (Teams/Zoom) y lectores de pantalla</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Protocolo de ajustes razonables (Decreto 1421 de 2017) activado desde la inducción institucional</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="evidence-box" style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #16A34A; border-radius:8px; padding:12px 16px;">
        <i class="fas fa-folder-open" style="color:#16A34A; margin-right:8px;"></i>
        <strong>Soportes Oficiales de la Condición:</strong> Contrato E-Libro Cátedra (Anexo 21) · Lineamiento de Virtualización y Producción de Recursos Digitales (Anexo 20) · Instructivo Campus Virtual (Anexo 13) · Protocolo de Ajustes Razonables Institucional.
    </div>
</div>
`;

window.switchC8Sub = function(targetId, btn) {
    document.querySelectorAll('.c8-sub-panel').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.c8-pill-btn').forEach(b => {
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

window.c8Init = function() {};
