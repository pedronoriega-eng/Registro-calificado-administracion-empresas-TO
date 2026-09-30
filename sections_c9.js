/* =========================================================
   CONDICIÓN 9 – INFRAESTRUCTURA FÍSICA Y TECNOLÓGICA
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c9'] = `
<div class="info-banner">
    <h4><i class="fas fa-building"></i> Condición 9 · Infraestructura Física y Tecnológica</h4>
    <p>Sedes, laboratorios, espacios de bienestar, infraestructura tecnológica y plan de mantenimiento del programa.</p>
</div>

<div class="metric-row">
    <div class="metric-card"><div class="metric-val">3</div><div class="metric-lbl">Sedes Habilitadas</div></div>
    <div class="metric-card"><div class="metric-val">AWS</div><div class="metric-lbl">Infraestructura Cloud</div></div>
    <div class="metric-card"><div class="metric-val">24/7</div><div class="metric-lbl">Disponibilidad LMS</div></div>
    <div class="metric-card"><div class="metric-val">404m²</div><div class="metric-lbl">Sede C Laboratorios</div></div>
</div>

<h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:24px 0 16px;">
    <i class="fas fa-map-marker-alt" style="color:var(--orange); margin-right:8px;"></i> Sedes Institucionales
</h3>

<div class="grid-3">
    <div class="card" style="border-top:4px solid var(--orange);">
        <h4><i class="fas fa-building" style="color:var(--orange);"></i> Sede A – Administrativa</h4>
        <p>Oficinas administrativas, aulas de clase y espacios de atención al estudiante. Contrato vigente (Anexo 22).</p>
        <span class="tag-legal">Bucaramanga</span>
    </div>
    <div class="card" style="border-top:4px solid var(--orange);">
        <h4><i class="fas fa-school" style="color:var(--orange);"></i> Sede B – Convenio</h4>
        <p>Espacios de formación complementaria bajo convenio institucional (Anexo 25).</p>
        <span class="tag-legal">Bucaramanga</span>
    </div>
    <div class="card" style="border-top:4px solid var(--orange);">
        <h4><i class="fas fa-flask" style="color:var(--orange);"></i> Sede C – Laboratorios</h4>
        <p>Laboratorios, salas de cómputo, espacios de tutorías y prácticas presenciales. <strong>404 m²</strong>. Contrato vigente (Anexo 24).</p>
        <span class="tag-legal">Bucaramanga</span>
    </div>
</div>

<h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:28px 0 16px;">
    <i class="fas fa-server" style="color:var(--orange); margin-right:8px;"></i> Infraestructura Tecnológica
</h3>

<div class="grid-2">
    <div class="card-accent">
        <h4><i class="fab fa-aws" style="margin-right:6px;"></i> Amazon Web Services (AWS)</h4>
        <p>Despliegue completo de la plataforma LMS Moodle sobre infraestructura AWS con bases de datos redundantes <strong>MariaDB RDS</strong>, balanceo de carga y escalabilidad automática para soportar el crecimiento de matrícula.</p>
    </div>
    <div class="card-accent">
        <h4><i class="fas fa-network-wired" style="margin-right:6px;"></i> Conectividad</h4>
        <p>Ancho de banda garantizado para sesiones sincrónicas, streaming de videoconferencias y acceso simultáneo a la biblioteca digital E-Libro desde cualquier ubicación geográfica.</p>
    </div>
</div>

<table class="tbl" style="margin-top:24px;">
    <thead><tr><th>Componente Tecnológico</th><th>Descripción</th><th>Estado</th></tr></thead>
    <tbody>
        <tr><td class="lb">LMS Moodle</td><td>Plataforma institucional de gestión del aprendizaje</td><td style="color:var(--green); font-weight:700;">✅ Operativo</td></tr>
        <tr><td class="lb">Sistema de Videoconferencia</td><td>Sesiones sincrónicas, grabación y streaming</td><td style="color:var(--green); font-weight:700;">✅ Operativo</td></tr>
        <tr><td class="lb">Correo Institucional</td><td>Correo corporativo para docentes y estudiantes</td><td style="color:var(--green); font-weight:700;">✅ Operativo</td></tr>
        <tr><td class="lb">Bases de Datos AWS</td><td>MariaDB RDS con réplicas de lectura y backups automáticos</td><td style="color:var(--green); font-weight:700;">✅ Operativo</td></tr>
        <tr class="row-accent"><td class="lb">Motor Antiplagio</td><td>Detección de similitud integrada en Moodle</td><td style="color:var(--green); font-weight:700;">✅ Operativo</td></tr>
    </tbody>
</table>

<div class="evidence-box" style="margin-top:24px;">
    <i class="fas fa-file-pdf"></i>
    <strong>Soportes:</strong> Contrato Sede A (Anexo 22) · Uso de Suelo y Lic. Construcción (Anexo 23) · Contrato Sede C (Anexo 24) · Convenio Sede B (Anexo 25) · Documento Maestro Cap. 9
</div>
`;

window.c9Init = function() {};
