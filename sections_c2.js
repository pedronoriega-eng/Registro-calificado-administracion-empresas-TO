/* =========================================================
   CONDICIÓN 2 – JUSTIFICACIÓN DEL PROGRAMA CON MAPA GEORREFERENCIADO
   Administración de Empresas · Registro Único (Presencial & Virtual) · TO
   Benchmark Geoespacial Leaflet.js · Tablas 5, 6 y 7 del Documento Maestro
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c2'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:10px; margin-bottom:24px; box-shadow:0 4px 15px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.25rem; font-weight:800; color:#FFFFFF; margin-bottom:4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-map-marked-alt" style="color:#F39200;"></i> Condición 2 · Justificación, Georreferenciación y Pertinencia
            </h4>
            <p style="color:#D1D1D1; font-size:0.88rem; margin:0;">
                Estudio de pertinencia contextualizada, demanda regional en Santander (Área Metropolitana) y distribución nacional SNIES bajo la figura de <strong>Registro Único</strong>.
            </p>
        </div>
        <div>
            <span class="tag-legal" style="background:rgba(243,146,0,0.25); color:#F39200; border:1px solid #F39200; font-weight:700; padding:6px 14px; border-radius:20px; font-size:0.8rem;">
                <i class="fas fa-chart-line"></i> Fuente: SNIES · CCB · OLE
            </span>
        </div>
    </div>
</div>

<!-- ========================================== -->
<!-- 1. MAPA GEORREFERENCIADO CON DUAL SWITCH -->
<!-- ========================================== -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:20px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    
    <!-- HEADER DEL MAPA Y CONMUTADOR DE MODALIDAD -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px; border-bottom:1px solid #E8E8E8; padding-bottom:14px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-globe-americas" style="color:#F39200; margin-right:6px;"></i> Observatorio Geoespacial de Demanda y Oferta
            </h4>
            <p style="color:#6B6B6B; font-size:0.82rem; margin:2px 0 0;">
                Haga clic en cualquier municipio o pin del mapa para consultar la cantidad de programas, universidades, porcentajes (%) y tejido empresarial.
            </p>
        </div>
        
        <!-- SWITCH DE MODALIDADES RESPONSIVO -->
        <div style="display:flex; flex-wrap:wrap; background:#F4F4F4; padding:4px; border-radius:30px; gap:6px; border:1px solid #D1D1D1; max-width:100%;">
            <button id="btnGeoPresencial" onclick="window.switchGeoMode('presencial')" style="background:#F39200; color:#FFFFFF; border:none; padding:8px 16px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease; box-shadow:0 2px 6px rgba(243,146,0,0.3);">
                <i class="fas fa-building"></i> 🏢 Modalidad Presencial (Santander / AMB)
            </button>
            <button id="btnGeoVirtual" onclick="window.switchGeoMode('virtual')" style="background:transparent; color:#6B6B6B; border:none; padding:8px 16px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease;">
                <i class="fas fa-wifi"></i> 🌐 Modalidad Virtual (Nacional / SNIES)
            </button>
        </div>
    </div>

    <!-- SELECTOR RÁPIDO DE MUNICIPIOS / NODOS CON CLIC DIRECTO -->
    <div style="background:#F8F9FA; border:1px solid #EBEBEB; border-radius:8px; padding:10px 14px; margin-bottom:14px; display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
        <span style="font-size:0.75rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px; margin-right:4px;">
            <i class="fas fa-map-marked-alt" style="color:#F39200;"></i> Municipios / Nodos:
        </span>
        <div id="geoMunicipiosChips" style="display:flex; flex-wrap:wrap; gap:6px; align-items:center;">
            <!-- Rellenado dinámico por renderMunicipioChips -->
        </div>
    </div>

    <!-- CONTENEDOR GRID: MAPA + PANEL DETALLE -->
    <div class="geo-map-grid">
        
        <!-- MAPA CANVAS LEAFLET -->
        <div style="position:relative; border-radius:10px; overflow:hidden; border:1px solid #D1D1D1; box-shadow:inset 0 0 10px rgba(0,0,0,0.05);">
            <div id="toGeoMap" style="height:540px; width:100%; background:#E5E7EB; z-index:1;"></div>
            <div style="position:absolute; bottom:12px; left:12px; background:rgba(26,26,27,0.85); color:#FFFFFF; padding:6px 12px; border-radius:6px; font-size:0.75rem; z-index:1000; backdrop-filter:blur(4px);">
                <i class="fas fa-map-pin" style="color:#F39200;"></i> <span id="mapStatusText">Enfoque: Área Metropolitana de Bucaramanga y Santander</span>
            </div>
        </div>

        <!-- PANEL DE DATOS LATERAL FLOTANTE -->
        <div style="background:#F8F9FA; border:1px solid #E8E8E8; border-radius:10px; padding:16px; display:flex; flex-direction:column; justify-content:space-between; height:520px; overflow-y:auto;">
            <div>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                    <div id="sideNodeBadge" style="background:#F39200; color:#FFFFFF; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem;">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h5 id="sideNodeTitle" style="font-family:'Montserrat',sans-serif; font-size:1rem; font-weight:800; color:#1A1A1B; margin:0;">
                            Bucaramanga (Sede Principal)
                        </h5>
                        <span id="sideNodeSubtitle" style="font-size:0.72rem; color:#6B6B6B; text-transform:uppercase; font-weight:700;">
                            Santander · Corredor Metropolitano
                        </span>
                    </div>
                </div>

                <div id="sideNodeContent" style="font-size:0.82rem; color:#4B5563; line-height:1.5;">
                    <!-- Relleno dinámico al hacer clic o switch -->
                </div>
            </div>

            <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:12px; margin-top:14px; font-size:0.78rem;">
                <div style="font-weight:700; color:#1A1A1B; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-info-circle" style="color:#F39200;"></i> Resumen de Cobertura
                </div>
                <div id="sideNodeFooter" style="color:#6B6B6B;">
                    Santander cuenta con 18 programas en Administración (7,35% del país). La propuesta de la TO es la única con articulación dual directa a 144 créditos y 8 semestres.
                </div>
            </div>
        </div>

    </div>
</div>

<!-- ========================================== -->
<!-- 2. TABLAS OFICIALES DEL DOCUMENTO MAESTRO -->
<!-- ========================================== -->
<div style="margin-bottom:28px;">
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap:20px;">
        
        <!-- TABLA 5: DISTRIBUCIÓN GEOGRÁFICA NACIONAL -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-table" style="color:#F39200; margin-right:6px;"></i> Tabla 5. Distribución Geográfica de la Oferta (SNIES)
                </h5>
                <span class="tag-legal" style="background:#E8E8E8; color:#1A1A1B; font-size:0.7rem;">Total: 245 Programas</span>
            </div>
            <div style="max-height:260px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:6px;">
                <table class="tbl" style="width:100%; font-size:0.8rem; margin:0;">
                    <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF;">
                        <tr><th style="text-align:left;">Región / Departamento</th><th>No. Programas</th><th>Porcentaje (%)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Bogotá D.C.</td><td style="text-align:center; font-weight:700;">44</td><td style="text-align:center;">17.96%</td></tr>
                        <tr><td>Antioquia</td><td style="text-align:center; font-weight:700;">32</td><td style="text-align:center;">13.06%</td></tr>
                        <tr><td>Valle del Cauca</td><td style="text-align:center; font-weight:700;">28</td><td style="text-align:center;">11.43%</td></tr>
                        <tr style="background:#FFF9F2; font-weight:700; color:#F39200;"><td>Santander (Sede TO)</td><td style="text-align:center;">18</td><td style="text-align:center;">7.35%</td></tr>
                        <tr><td>Atlántico</td><td style="text-align:center; font-weight:700;">15</td><td style="text-align:center;">6.12%</td></tr>
                        <tr><td>Bolívar</td><td style="text-align:center; font-weight:700;">12</td><td style="text-align:center;">4.90%</td></tr>
                        <tr><td>Norte de Santander</td><td style="text-align:center; font-weight:700;">10</td><td style="text-align:center;">4.08%</td></tr>
                        <tr><td>Córdoba</td><td style="text-align:center; font-weight:700;">9</td><td style="text-align:center;">3.67%</td></tr>
                        <tr><td>Huila</td><td style="text-align:center; font-weight:700;">8</td><td style="text-align:center;">3.27%</td></tr>
                        <tr><td>Nariño</td><td style="text-align:center; font-weight:700;">7</td><td style="text-align:center;">2.86%</td></tr>
                        <tr><td>Otros departamentos</td><td style="text-align:center; font-weight:700;">62</td><td style="text-align:center;">25.31%</td></tr>
                    </tbody>
                </table>
            </div>
            <p style="font-size:0.75rem; color:#6B6B6B; margin:8px 0 0;">
                El 42,45% se concentra en las tres grandes capitales, abriendo una ventana de oportunidad crítica para Santander y la virtualidad territorial.
            </p>
        </div>

        <!-- TABLA 6: NATURALEZA DE LAS INSTITUCIONES OFERENTES -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-university" style="color:#F39200; margin-right:6px;"></i> Tabla 6. Naturaleza de las Instituciones Oferentes
                </h5>
                <span class="tag-legal" style="background:#E8E8E8; color:#1A1A1B; font-size:0.7rem;">Ecosistema SNIES</span>
            </div>
            <div style="max-height:260px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:6px;">
                <table class="tbl" style="width:100%; font-size:0.8rem; margin:0;">
                    <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF;">
                        <tr><th style="text-align:left;">Tipo de Institución</th><th>No. Programas</th><th>Porcentaje (%)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Universidades Privadas</td><td style="text-align:center; font-weight:700;">110</td><td style="text-align:center;">44.90%</td></tr>
                        <tr><td>Universidades Públicas</td><td style="text-align:center; font-weight:700;">62</td><td style="text-align:center;">25.31%</td></tr>
                        <tr style="background:#FFF9F2; font-weight:700; color:#F39200;"><td>Instituciones Universitarias / Tecnológicas (TO)</td><td style="text-align:center;">49</td><td style="text-align:center;">20.00%</td></tr>
                        <tr><td>Instituciones Técnicas Profesionales</td><td style="text-align:center; font-weight:700;">24</td><td style="text-align:center;">9.80%</td></tr>
                        <tr style="background:#F4F4F4; font-weight:800;"><td>Total Nacional</td><td style="text-align:center;">245</td><td style="text-align:center;">100.0%</td></tr>
                    </tbody>
                </table>
            </div>
            <p style="font-size:0.75rem; color:#6B6B6B; margin:8px 0 0;">
                El 70,21% de la oferta está en universidades tradicionales. Las instituciones universitarias como la TO democratizan el acceso con matrículas asequibles ($3.576.000) y alta pertinencia técnica.
            </p>
        </div>

    </div>
</div>

<!-- ========================================== -->
<!-- 3. FACTORES DIFERENCIADORES BENTO GRID -->
<!-- ========================================== -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:22px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin-bottom:16px; display:flex; align-items:center; gap:8px;">
        <i class="fas fa-medal" style="color:#F39200;"></i> Factores Diferenciadores de Administración de Empresas (TO)
    </h4>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
        
        <div style="background:#F8F9FA; border:1px solid #E8E8E8; border-top:4px solid #F39200; border-radius:10px; padding:18px;">
            <div style="font-size:1.8rem; color:#F39200; margin-bottom:8px;"><i class="fas fa-brain"></i></div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                1. Transformación Digital, IA &amp; Analítica
            </h5>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                Malla curricular con asignaturas de vanguardia: <strong>Big Data y Analítica de Datos</strong> (Semestre 6) e <strong>Inteligencia Artificial en los Negocios</strong> (Semestre 7), formando directivos con toma de decisiones guiada por datos (<em>Data-Driven Decision Making</em>).
            </p>
        </div>

        <div style="background:#F8F9FA; border:1px solid #E8E8E8; border-top:4px solid #1A1A1B; border-radius:10px; padding:18px;">
            <div style="font-size:1.8rem; color:#1A1A1B; margin-bottom:8px;"><i class="fas fa-recycle"></i></div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                2. Sostenibilidad &amp; Economía Circular
            </h5>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                Articulación a los ODS (Objetivos de Desarrollo Sostenible) y sistemas integrados de gestión (<strong>Sistemas Integrados HSEQ</strong> y <strong>Gerencia de la Calidad</strong>) orientados a la descarbonización, eficiencia energética y modelos de negocio regenerativos en la región.
            </p>
        </div>

        <div style="background:#F8F9FA; border:1px solid #E8E8E8; border-top:4px solid #F39200; border-radius:10px; padding:18px;">
            <div style="font-size:1.8rem; color:#F39200; margin-bottom:8px;"><i class="fas fa-chess"></i></div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                3. Ruta Emprendedora &amp; Simuladores
            </h5>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                Línea continua de formación práctica: <strong>Modelos de Emprendimiento</strong> (Sem 5) → <strong>Laboratorio de Innovación</strong> (Sem 6) → <strong>Juego Gerencial de Negocios</strong> (Sem 7) con simuladores en tiempo real y articulación al Fondo Emprender e IMEBÚ.
            </p>
        </div>

        <div style="background:#F8F9FA; border:1px solid #E8E8E8; border-top:4px solid #1A1A1B; border-radius:10px; padding:18px;">
            <div style="font-size:1.8rem; color:#1A1A1B; margin-bottom:8px;"><i class="fas fa-random"></i></div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                4. Flexibilidad de Registro Único
            </h5>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                Unicidad del plan de estudios que permite al estudiante transferirse o cursar asignaturas entre la modalidad Presencial y Virtual sin traumatismos de homologación, respondiendo a la dinámica laboral y cambios de residencia del estudiante.
            </p>
        </div>

    </div>
</div>

<!-- ========================================== -->
<!-- 4. DATOS ESTADÍSTICOS INSTITUCIONALES Y TENDENCIAS GENERALES DE PERMANENCIA -->
<!-- ========================================== -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:22px; margin-top:28px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px; border-bottom:1px solid #E8E8E8; padding-bottom:14px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-chart-line" style="color:#F39200;"></i> Datos Estadísticos Institucionales y Tendencias Generales de Permanencia
            </h4>
            <p style="color:#6B6B6B; font-size:0.83rem; margin:3px 0 0;">
                Trazabilidad histórica de matrícula (Tabla 12), deserción por cohortes SPADIES (Tabla 11) y tasa de permanencia institucional (Tabla 13) del Anexo 2.
            </p>
        </div>
        <div>
            <button onclick="openPresentation('c10', '10. Datos Estadísticos Institucionales y Tendencias de Permanencia')" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; padding:8px 16px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                <i class="fas fa-chart-bar" style="color:#F39200;"></i> Ver Tablero Completo de Analítica (Condición 10) <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>

    <!-- 4 KPI SUMMARY CARDS -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap:14px; margin-bottom:20px;">
        <div style="background:#F8F9FA; border-left:4px solid #F39200; padding:14px; border-radius:8px;">
            <div style="font-size:0.72rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Matrícula Activa Reciente</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#1A1A1B; margin:2px 0;">186 Estudiantes</div>
            <div style="font-size:0.75rem; color:#2ECC71; font-weight:700;"><i class="fas fa-arrow-up"></i> +776% Crecimiento (2020 a 2025)</div>
        </div>
        <div style="background:#F8F9FA; border-left:4px solid #2ECC71; padding:14px; border-radius:8px;">
            <div style="font-size:0.72rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Permanencia Semestral 2025-1</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#1A1A1B; margin:2px 0;">94.4%</div>
            <div style="font-size:0.75rem; color:#2ECC71; font-weight:700;"><i class="fas fa-shield-alt"></i> Meta Institucional SAT: 80.0%</div>
        </div>
        <div style="background:#F8F9FA; border-left:4px solid #1A1A1B; padding:14px; border-radius:8px;">
            <div style="font-size:0.72rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Cupos Registro Único Solicitados</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#1A1A1B; margin:2px 0;">300 Cupos</div>
            <div style="font-size:0.75rem; color:#6B6B6B;">240 Virtuales / 60 Presenciales</div>
        </div>
        <div style="background:#F8F9FA; border-left:4px solid #3498DB; padding:14px; border-radius:8px;">
            <div style="font-size:0.72rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Retención por Cohortes</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#1A1A1B; margin:2px 0;">SPADIES / MEN</div>
            <div style="font-size:0.75rem; color:#3498DB; font-weight:700;"><i class="fas fa-check-circle"></i> Trazabilidad Cohorte 2020-2 a 2025-2</div>
        </div>
    </div>

    <!-- TABLAS RESUMEN DE MATRÍCULA Y PERMANENCIA (TABLAS 12 Y 13) -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap:18px;">
        
        <!-- RESUMEN TABLA 12: MATRÍCULA HISTÓRICA -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <h6 style="font-family:'Montserrat',sans-serif; font-size:0.85rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-users" style="color:#F39200; margin-right:4px;"></i> Tabla 12. Evolución de Matrícula (2020-2 a 2025-2)
                </h6>
                <span class="tag-legal" style="background:#FFF3E0; color:#F39200; font-size:0.68rem; font-weight:700;">Fuente DM</span>
            </div>
            <div style="max-height:200px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:4px;">
                <table class="tbl" style="width:100%; font-size:0.75rem; margin:0;">
                    <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF;">
                        <tr><th>Período</th><th>Inscritos</th><th>Admitidos</th><th>Matriculados</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>2020-2</td><td style="text-align:center;">25</td><td style="text-align:center;">20</td><td style="text-align:center; font-weight:700; color:#F39200;">13</td></tr>
                        <tr><td>2021-1</td><td style="text-align:center;">37</td><td style="text-align:center;">32</td><td style="text-align:center; font-weight:700;">28</td></tr>
                        <tr><td>2021-2</td><td style="text-align:center;">60</td><td style="text-align:center;">52</td><td style="text-align:center; font-weight:700;">46</td></tr>
                        <tr><td>2022-1</td><td style="text-align:center;">74</td><td style="text-align:center;">61</td><td style="text-align:center; font-weight:700;">54</td></tr>
                        <tr><td>2022-2</td><td style="text-align:center;">78</td><td style="text-align:center;">69</td><td style="text-align:center; font-weight:700;">62</td></tr>
                        <tr><td>2023-1</td><td style="text-align:center;">75</td><td style="text-align:center;">65</td><td style="text-align:center; font-weight:700;">59</td></tr>
                        <tr><td>2023-2</td><td style="text-align:center;">55</td><td style="text-align:center;">50</td><td style="text-align:center; font-weight:700;">48</td></tr>
                        <tr><td>2024-1</td><td style="text-align:center;">56</td><td style="text-align:center;">48</td><td style="text-align:center; font-weight:700;">42</td></tr>
                        <tr><td>2024-2</td><td style="text-align:center;">65</td><td style="text-align:center;">45</td><td style="text-align:center; font-weight:700;">38</td></tr>
                        <tr><td>2025-1</td><td style="text-align:center;">88</td><td style="text-align:center;">80</td><td style="text-align:center; font-weight:700; color:#2ECC71;">72</td></tr>
                        <tr style="background:#FFF9F2; font-weight:800;"><td>2025-2</td><td style="text-align:center;">127</td><td style="text-align:center;">120</td><td style="text-align:center; font-weight:800; color:#F39200;">114</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- RESUMEN TABLA 13: PERMANENCIA SEMESTRAL -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <h6 style="font-family:'Montserrat',sans-serif; font-size:0.85rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-shield-alt" style="color:#2ECC71; margin-right:4px;"></i> Tabla 13. Tasa de Permanencia Semestral (%)
                </h6>
                <span class="tag-legal" style="background:#DCFCE7; color:#166534; font-size:0.68rem; font-weight:700;">Consolidación SAT</span>
            </div>
            <div style="max-height:200px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:4px;">
                <table class="tbl" style="width:100%; font-size:0.75rem; margin:0;">
                    <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF;">
                        <tr><th>Período</th><th>Inicial</th><th>Final</th><th>Permanencia (%)</th><th>Estado SAT</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>2020-2</td><td style="text-align:center;">13</td><td style="text-align:center;">8</td><td style="text-align:center; font-weight:700;">61.5%</td><td><span class="badge" style="background:#FFF3CD; color:#856404; font-size:0.65rem;">Apertura</span></td></tr>
                        <tr><td>2021-1</td><td style="text-align:center;">28</td><td style="text-align:center;">23</td><td style="text-align:center; font-weight:700;">82.1%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Superada</span></td></tr>
                        <tr><td>2021-2</td><td style="text-align:center;">46</td><td style="text-align:center;">29</td><td style="text-align:center; font-weight:700;">63.0%</td><td><span class="badge" style="background:#FFF3CD; color:#856404; font-size:0.65rem;">Ajuste</span></td></tr>
                        <tr><td>2022-1</td><td style="text-align:center;">54</td><td style="text-align:center;">33</td><td style="text-align:center; font-weight:700;">61.1%</td><td><span class="badge" style="background:#FFF3CD; color:#856404; font-size:0.65rem;">Ajuste</span></td></tr>
                        <tr><td>2022-2</td><td style="text-align:center;">62</td><td style="text-align:center;">53</td><td style="text-align:center; font-weight:700;">85.5%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Superada</span></td></tr>
                        <tr><td>2023-1</td><td style="text-align:center;">59</td><td style="text-align:center;">45</td><td style="text-align:center; font-weight:700;">76.3%</td><td><span class="badge" style="background:#FFF3CD; color:#856404; font-size:0.65rem;">En seguimiento</span></td></tr>
                        <tr><td>2023-2</td><td style="text-align:center;">48</td><td style="text-align:center;">39</td><td style="text-align:center; font-weight:700;">81.3%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Superada</span></td></tr>
                        <tr style="background:#F0FDF4; font-weight:700;"><td>2024-1</td><td style="text-align:center;">42</td><td style="text-align:center;">39</td><td style="text-align:center; font-weight:800; color:#166534;">92.9%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Excelente</span></td></tr>
                        <tr style="background:#F0FDF4; font-weight:700;"><td>2024-2</td><td style="text-align:center;">38</td><td style="text-align:center;">35</td><td style="text-align:center; font-weight:800; color:#166534;">92.1%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Excelente</span></td></tr>
                        <tr style="background:#F0FDF4; font-weight:800;"><td>2025-1</td><td style="text-align:center;">72</td><td style="text-align:center;">68</td><td style="text-align:center; font-weight:800; color:#166534;">94.4%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Récord SAT</span></td></tr>
                        <tr style="font-weight:700;"><td>2025-2</td><td style="text-align:center;">114</td><td style="text-align:center;">98</td><td style="text-align:center; font-weight:800; color:#166534;">86.0%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Superada</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>

    <!-- BOTÓN DE ACCIÓN COMPLETO -->
    <div style="margin-top:16px;">
        <button onclick="openPresentation('c10', '10. Datos Estadísticos Institucionales y Tendencias de Permanencia')" style="width:100%; padding:14px; background:linear-gradient(135deg, #1A1A1B 0%, #333333 100%); color:#FFFFFF; border:2px solid #F39200; border-radius:8px; font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:12px; transition:all 0.3s ease; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
            <i class="fas fa-chart-line" style="color:#F39200; font-size:1.15rem;"></i>
            <span>Ver Tablero Gráfico Interactivo Chart.js · Matrícula, Deserción SPADIES y Cohortes (Condición 10)</span>
            <i class="fas fa-arrow-right" style="color:#F39200;"></i>
        </button>
    </div>
</div>
`;

// ==========================================
// DATA Y LÓGICA GEOESPACIAL LEAFLET (CONDICIÓN 2)
// ==========================================
window._geoNodesPresencial = [
    {
        id: 'bga',
        nombre: 'Bucaramanga (Sede Principal TO)',
        subtitulo: 'Distrito Capital · Eje Universitario y Empresarial',
        programas: '11 Programas',
        universidades: '8 Instituciones (7 Privadas / 1 Pública)',
        porcentaje: '61.11% Oferta Dptal.',
        coords: [7.1193, -73.1227],
        destacado: true,
        ies_detalle: 'TO (144 cr / 8 sem - Titulación inclusiva), UNAB (144 cr), USTA (138 cr), UCC (143 cr), UDI (147 cr), UNICIENCIA (141 cr), UMB (157 cr) y UTS (162/174 cr - Pública).',
        empresas: '32.450 empresas activas registradas en CCB 2024.',
        demanda: 'Alta absorción en directores comerciales, analistas de datos, gerentes de operaciones y líderes de innovación.',
        densidad: 'Concentra el 68% de las MiPyMes del Área Metropolitana y el 65% del PIB departamental.',
        to_ventaja: 'Sedes A (Calle 35 # 21-42), Sede B y Sede C con aulas multimedia, laboratorios de cómputo y auditorios. Única oferta a 144 créditos y 8 semestres con titulación inclusiva Administrador(a) de Empresas.'
    },
    {
        id: 'florida',
        nombre: 'Floridablanca',
        subtitulo: 'Corredor Empresarial & Ecosistema Salud',
        programas: '3 Programas',
        universidades: '3 Universidades (3 Privadas / 0 Públicas)',
        porcentaje: '16.67% Oferta Dptal.',
        coords: [7.0622, -73.0864],
        destacado: false,
        ies_detalle: 'UPB (138 cr / 8 sem), USTA Campus Floridablanca y Universidad Libre Campus Floridablanca (143 cr / 8 sem).',
        empresas: '7.890 empresas activas (clúster salud FOSCAL/ICV, dulces tradicionales, servicios y comercio minorista).',
        demanda: 'Gestión de instituciones prestadoras de salud (IPS), administración hospitalaria, talento humano y finanzas.',
        densidad: 'Segunda mayor concentración productiva del área metropolitana (18% del PIB departamental).',
        to_ventaja: 'Conexión directa por Metrolínea hacia la sede principal de la TO (15 min) con horarios flexibles.'
    },
    {
        id: 'giron',
        nombre: 'Girón',
        subtitulo: 'Parque Industrial & Centro Logístico',
        programas: '0 Programas directos',
        universidades: '0 Universidades en zona industrial',
        porcentaje: '0.0% Oferta Directa (Absorción TO)',
        coords: [7.0732, -73.1698],
        destacado: false,
        ies_detalle: 'Sin sedes universitarias presenciales de Administración; demanda 100% captada por Bucaramanga / TO.',
        empresas: '4.120 empresas y plantas logísticas registradas (Chimita, bodegas de carga nacional y manufactura).',
        demanda: 'Logística de almacenamiento, distribución física internacional, cadena de suministro y HSEQ.',
        densidad: 'Polo logístico e industrial neurálgico con alta concentración de tecnólogos que requieren profesionalización.',
        to_ventaja: 'Planes de homologación directa para egresados técnicos del SENA y modalidades nocturna y virtual de la TO.'
    },
    {
        id: 'piedecuesta',
        nombre: 'Piedecuesta',
        subtitulo: 'Polo Tecnológico & Agroindustrial',
        programas: '0 Programas en casco urbano',
        universidades: '0 Sedes autónomas en casco urbano',
        porcentaje: '0.0% Oferta Autónoma (Conurbación TO)',
        coords: [6.9886, -73.0494],
        destacado: false,
        ies_detalle: 'Sin oferta de pregrado en administración dentro del casco urbano central (influencia UPB/USTA limítrofes).',
        empresas: '3.210 empresas y unidades de investigación (ICP Ecopetrol, clúster avícola, tabaco y agroindustria).',
        demanda: 'Biotecnología, agroindustria, emprendimiento rural y proyectos sostenibles.',
        densidad: 'Municipio de mayor expansión habitacional y demográfica del departamento.',
        to_ventaja: 'Población con alta representación histórica en la matrícula de la TO por accesibilidad tarifaria y transporte directo.'
    },
    {
        id: 'barranca',
        nombre: 'Barrancabermeja',
        subtitulo: 'Distrito Petroquímico & Portuario',
        programas: '3 Programas',
        universidades: '3 Instituciones (1 Pública / 2 Privadas)',
        porcentaje: '16.67% Oferta Dptal.',
        coords: [7.0653, -73.8547],
        destacado: false,
        ies_detalle: 'UTS Sede Barrancabermeja (162 cr - Pública), UDI Sede Barrancabermeja (147 cr) y UCC (143 cr).',
        empresas: '5.600 empresas activas (cadena de hidrocarburos, transporte fluvial sobre el Río Magdalena y metalmecánica).',
        demanda: 'Administración de contratos minero-energéticos, gestión de proyectos (PMI), transición energética y compras industriales.',
        densidad: 'Principal polo económico no metropolitano de Santander (14% del PIB departamental).',
        to_ventaja: 'Modalidad Virtual de la TO con el mismo plan de estudios de 144 créditos y valor asequible ($3.576.000).'
    },
    {
        id: 'sangil',
        nombre: 'San Gil / Socorro (Guanentá y Comunera)',
        subtitulo: 'Capital Turística & Ecosistema Solidario',
        programas: '1 Programa',
        universidades: '1 Universidad (Privada)',
        porcentaje: '5.56% Oferta Dptal.',
        coords: [6.5544, -73.1311],
        destacado: false,
        ies_detalle: 'UDI Sede San Gil (147 cr / 9 sem) / Cobertura provincial UNISANGIL.',
        empresas: '3.450 unidades productivas (hotelería, turismo de aventura, café especial y sector cooperativo).',
        demanda: 'Gerencia de servicios turísticos, cooperativismo, finanzas agropecuarias y marketing digital de destinos.',
        densidad: 'Eje de desarrollo del sur de Santander con alta demanda de alternativas virtuales accesibles.',
        to_ventaja: 'Acceso directo mediante la Modalidad Virtual de la TO sin necesidad de desplazamiento a capitales.'
    }
];

window._geoNodesVirtual = [
    {
        id: 'bogota',
        nombre: 'Bogotá D.C. (Nodo Capital)',
        subtitulo: '17.96% Oferta Presencial (44 Prog) · 40.9% Virtual (18 Prog)',
        programas: '44 Presenciales / 18 Virtuales',
        universidades: '28 Instituciones de Educación Superior',
        porcentaje: '17.96% Oferta Nal. (44 de 245)',
        coords: [4.6097, -74.0817],
        destacado: true,
        ies_detalle: 'Concentra 44 programas presenciales y 18 virtuales en 28 instituciones (EAN, Javeriana, Andes, Politécnico, UNIMINUTO, UNIR, etc.).',
        empresas: '420.000+ empresas activas en Cámara de Comercio de Bogotá (servicios, banca, tecnología y gobierno).',
        demanda: 'Alta población de adultos trabajadores que demandan pregrado virtual de alta calidad y costo asequible.',
        densidad: 'Mayor centro de demanda del país; aranceles promedio en Bogotá superan $6.5M vs $3.576.000 en la TO.',
        to_ventaja: 'Plataforma LMS Moodle en nube AWS de la TO, tutorías sincrónicas nocturnas y plan compacto de 144 créditos y 8 semestres.'
    },
    {
        id: 'antioquia',
        nombre: 'Antioquia (Medellín / Subregiones)',
        subtitulo: '13.06% Oferta Presencial (32 Prog) · 11.4% Virtual (5 Prog)',
        programas: '32 Presenciales / 5 Virtuales',
        universidades: '16 Instituciones de Educación Superior',
        porcentaje: '13.06% Oferta Nal. (32 de 245)',
        coords: [6.2442, -75.5812],
        destacado: false,
        ies_detalle: 'EAFIT, U. de Medellín, U. de Antioquia, IU Digital de Antioquia, Remington, Lasallista, ESCOLME, etc.',
        empresas: '115.000+ empresas (textil, confección, servicios 4.0, biotecnología y agroexportación).',
        demanda: 'Población laboral en subregiones (Oriente Antioqueño, Urabá, Bajo Cauca) sin campus físicos cercanos.',
        densidad: 'Segundo departamento con mayor oferta y demanda del país.',
        to_ventaja: 'Semilleros de investigación virtuales y red de convenios empresariales con enfoque digital de la TO.'
    },
    {
        id: 'valle',
        nombre: 'Valle del Cauca (Cali / Buenaventura)',
        subtitulo: '11.43% Oferta Presencial (28 Prog) · 4.5% Virtual (2 Prog)',
        programas: '28 Presenciales / 2 Virtuales',
        universidades: '14 Instituciones de Educación Superior',
        porcentaje: '11.43% Oferta Nal. (28 de 245)',
        coords: [3.4516, -76.5320],
        destacado: false,
        ies_detalle: 'U. del Valle, ICESI, Javeriana Cali, U. Santiago de Cali, U. Autónoma de Occidente, etc.',
        empresas: '98.000+ empresas (clúster agroindustrial azucarero, bioenergía, farmacéutico y logística de Buenaventura).',
        demanda: 'Trabajadores portuarios e industriales que requieren titulación profesional nocturna y virtual.',
        densidad: 'Corredor Pacífico de comercio exterior más relevante de Colombia.',
        to_ventaja: 'Flexibilidad curricular y asignaturas diferenciadoras en Big Data, IA y Sostenibilidad de la TO.'
    },
    {
        id: 'costa',
        nombre: 'Región Caribe (Atlántico / Bolívar / Córdoba)',
        subtitulo: '14.69% Oferta Presencial (36 Prog) · 6.8% Virtual (3 Prog)',
        programas: '36 Presenciales (Atlántico 15, Bolívar 12, Córdoba 9)',
        universidades: '18 Instituciones de Educación Superior',
        porcentaje: '14.69% Oferta Nal. (36 de 245)',
        coords: [10.9685, -74.7813],
        destacado: false,
        ies_detalle: 'U. del Norte, U. de Cartagena, Tec. Comfenalco, UNICOLOMBO, CECAR, CUC, etc.',
        empresas: '82.000+ empresas (sector portuario, zonas francas, petroquímica, turismo y comercio internacional).',
        demanda: 'Población de municipios no capitales con baja cobertura universitaria tradicional.',
        densidad: 'Corredor logístico y turístico del litoral norte colombiano.',
        to_ventaja: 'Ruta de homologación directa y reconocimiento de aprendizajes previos para tecnólogos caribeños en la TO.'
    },
    {
        id: 'nororiente',
        nombre: 'Región Nororiente (Santander & N. Santander)',
        subtitulo: '11.43% Oferta Regional (Santander 18 Prog / N. Santander 10 Prog)',
        programas: '28 Presenciales / 3 Virtuales',
        universidades: '14 Instituciones de Educación Superior',
        porcentaje: '11.43% Oferta Nal. (28 de 245)',
        coords: [7.8939, -72.5078],
        destacado: true,
        ies_detalle: 'Santander (TO, UNAB, USTA, UCC, UDI, UNICIENCIA, UMB, UTS) y Norte de Santander (UFPS, U. de Pamplona, U. Libre, FESC).',
        empresas: '54.000+ empresas (comercio binacional fronterizo, calzado, confecciones, palma de aceite y servicios).',
        demanda: 'Consolidación de la marca TO en el nororiente colombiano con articulación directa a sedes físicas si se requiere.',
        densidad: 'Epicentro histórico y natural de influencia de la Institución (TO).',
        to_ventaja: 'Sinergia de Registro Único: el estudiante virtual cuenta con el respaldo de los campus físicos de la TO en Bucaramanga.'
    }
];

window._currentGeoMode = 'presencial';
window._leafletMapInstance = null;
window._leafletMarkers = [];
window._geoMarkerMap = {};
window._activeGeoNodeId = null;

window.c2Init = function() {
    const mapContainer = document.getElementById('toGeoMap');
    if (!mapContainer) return;

    // Retry si Leaflet aún no está cargado
    if (typeof L === 'undefined') {
        if (!window._c2Retries) window._c2Retries = 0;
        if (window._c2Retries < 30) {
            window._c2Retries++;
            setTimeout(window.c2Init, 120);
        }
        return;
    }
    window._c2Retries = 0;

    if (window._leafletMapInstance) {
        try {
            window._leafletMapInstance.remove();
        } catch(e) { console.warn(e); }
        window._leafletMapInstance = null;
    }

    try {
        // Inicializar Leaflet centrado en Bucaramanga
        window._leafletMapInstance = L.map('toGeoMap', {
            zoomControl: true,
            scrollWheelZoom: false
        }).setView([7.1193, -73.1227], 11);

        // Capa ESRI World Street Map (institucional, nítida, sin API key ni marcas de agua)
        const primaryTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, USGS, METI | TO 2026',
            maxZoom: 18
        });

        // Respaldo automático a OSM estándar
        primaryTileLayer.on('tileerror', function() {
            if (!window._osmFallbackActive && window._leafletMapInstance) {
                window._osmFallbackActive = true;
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors | TO',
                    maxZoom: 19
                }).addTo(window._leafletMapInstance);
            }
        });

        primaryTileLayer.addTo(window._leafletMapInstance);

        // Múltiples invalidateSize para sincronizar con transiciones de modal y visibilidad
        [50, 150, 300, 600, 1000].forEach(delay => {
            setTimeout(() => {
                if (window._leafletMapInstance) {
                    window._leafletMapInstance.invalidateSize();
                }
            }, delay);
        });

        window.switchGeoMode(window._currentGeoMode || 'presencial');
    } catch(err) {
        console.error('Error al inicializar Leaflet en el mapa:', err);
    }
};

window.switchGeoMode = function(mode) {
    window._currentGeoMode = mode;
    const btnPre = document.getElementById('btnGeoPresencial');
    const btnVir = document.getElementById('btnGeoVirtual');
    const statusText = document.getElementById('mapStatusText');

    // 1. Cerrar cualquier popup previo y resetear nodo activo
    if (window._leafletMapInstance) {
        window._leafletMapInstance.closePopup();
    }
    window._activeGeoNodeId = null;

    // 2. Actualizar botones de modalidad y centrar mapa en vista panorámica limpia
    if (mode === 'presencial') {
        if (btnPre) {
            btnPre.style.background = '#F39200';
            btnPre.style.color = '#FFFFFF';
            btnPre.style.boxShadow = '0 2px 6px rgba(243,146,0,0.3)';
        }
        if (btnVir) {
            btnVir.style.background = 'transparent';
            btnVir.style.color = '#6B6B6B';
            btnVir.style.boxShadow = 'none';
        }
        if (statusText) statusText.innerText = 'Enfoque: Santander y Área Metropolitana de Bucaramanga · Datos Oficiales MEN / SNIES';
        if (window._leafletMapInstance) {
            window._leafletMapInstance.setView([7.06, -73.12], 10.5);
        }
    } else {
        if (btnVir) {
            btnVir.style.background = '#F39200';
            btnVir.style.color = '#FFFFFF';
            btnVir.style.boxShadow = '0 2px 6px rgba(243,146,0,0.3)';
        }
        if (btnPre) {
            btnPre.style.background = 'transparent';
            btnPre.style.color = '#6B6B6B';
            btnPre.style.boxShadow = 'none';
        }
        if (statusText) statusText.innerText = 'Enfoque: Cobertura Nacional y Nodos Departamentales · Datos Oficiales MEN / SNIES';
        if (window._leafletMapInstance) {
            window._leafletMapInstance.setView([4.57, -74.29], 5.8);
        }
    }

    // 3. Renderizar chips neutrales y marcadores en el mapa (sin popup abierto en primer plano)
    window.renderMunicipioChips(mode);
    window.renderGeoMarkers(mode);

    // 4. Panel lateral muestra el resumen global del MEN, esperando el clic del usuario
    window.renderInitialSidePanel(mode);
};

window.renderMunicipioChips = function(mode) {
    const chipsContainer = document.getElementById('geoMunicipiosChips');
    if (!chipsContainer) return;

    const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    chipsContainer.innerHTML = nodes.map(node => `
        <button 
            id="chip-${node.id}" 
            onclick="window.selectGeoNode('${node.id}', '${mode}')"
            style="background:#FFFFFF; border:1px solid #D1D1D1; padding:6px 12px; border-radius:20px; font-family:'Montserrat',sans-serif; font-size:0.75rem; font-weight:700; color:#1A1A1B; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s ease; box-shadow:0 1px 3px rgba(0,0,0,0.05);"
            onmouseover="if(window._activeGeoNodeId !== '${node.id}') this.style.borderColor='#F39200'"
            onmouseout="if(window._activeGeoNodeId !== '${node.id}') this.style.borderColor='#D1D1D1'"
        >
            <i class="fas fa-map-marker-alt" style="color:#F39200; font-size:0.75rem;"></i>
            <span>${node.nombre.split(' (')[0]}</span>
            <span style="background:rgba(243,146,0,0.15); color:#D97F00; padding:1px 6px; border-radius:10px; font-size:0.68rem; font-weight:800;">
                ${node.programas.split(' ')[0]}
            </span>
        </button>
    `).join('');
};

window.renderGeoMarkers = function(mode) {
    if (!window._leafletMapInstance || typeof L === 'undefined') return;

    // Limpiar marcadores previos
    window._leafletMarkers.forEach(m => window._leafletMapInstance.removeLayer(m));
    window._leafletMarkers = [];
    window._geoMarkerMap = {};

    const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;

    nodes.forEach(node => {
        const marker = L.circleMarker(node.coords, {
            radius: node.destacado ? 11 : 8,
            fillColor: node.destacado ? '#F39200' : '#1A1A1B',
            color: '#FFFFFF',
            weight: 2.5,
            opacity: 1,
            fillOpacity: 0.95
        }).addTo(window._leafletMapInstance);

        // SOLO al dar clic se abre la información y se actualiza el panel
        marker.on('click', () => {
            window.selectGeoNode(node.id, mode);
        });

        // Popup interactivo con datos oficiales del MEN / SNIES
        const popupContent = `
            <div style="font-family:'Montserrat',sans-serif; min-width:270px; padding:4px 2px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #F39200; padding-bottom:6px; margin-bottom:8px;">
                    <div>
                        <strong style="color:#1A1A1B; font-size:0.92rem; display:block; line-height:1.2;">${node.nombre}</strong>
                        <span style="font-size:0.68rem; color:#6B6B6B;">${node.subtitulo}</span>
                    </div>
                    <span style="background:#1A1A1B; color:#F39200; font-size:0.65rem; padding:2px 6px; border-radius:4px; font-weight:800; white-space:nowrap; margin-left:6px;">MEN · SNIES</span>
                </div>

                <!-- 3 MÉTRICAS CLAVE DEL MEN -->
                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:6px; margin-bottom:8px;">
                    <div style="background:#FFF3E0; border:1px solid #FFE0B2; padding:6px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.58rem; color:#D97F00; text-transform:uppercase; font-weight:800;">Programas</span>
                        <strong style="color:#1A1A1B; font-size:0.92rem;">${node.programas.split(' ')[0]}</strong>
                    </div>
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:6px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.58rem; color:#166534; text-transform:uppercase; font-weight:800;">% Oferta</span>
                        <strong style="color:#166534; font-size:0.85rem;">${node.porcentaje.split(' ')[0]}</strong>
                    </div>
                    <div style="background:#F1F5F9; border:1px solid #CBD5E1; padding:6px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.58rem; color:#475569; text-transform:uppercase; font-weight:800;">Univ / IES</span>
                        <strong style="color:#0F172A; font-size:0.85rem;">${node.universidades.split(' ')[0]}</strong>
                    </div>
                </div>

                <!-- DESGLOSE OFICIAL DE IES (MEN) -->
                <div style="background:#F8F9FA; padding:6px 8px; border-radius:6px; font-size:0.75rem; color:#333; margin-bottom:6px; border-left:3px solid #F39200;">
                    <strong style="color:#1A1A1B; font-size:0.7rem; text-transform:uppercase;">Instituciones MEN:</strong><br>
                    <span>${node.universidades}</span>
                </div>

                <!-- TEJIDO EMPRESARIAL -->
                <div style="font-size:0.72rem; color:#4B5563; margin-bottom:8px; line-height:1.35;">
                    <i class="fas fa-building" style="color:#F39200;"></i> <strong>Empresas CCB:</strong> ${node.empresas.split('(')[0]}
                </div>

                <div style="background:#FFF9F2; border:1px solid #F39200; padding:5px 8px; border-radius:5px; text-align:center;">
                    <span style="font-size:0.7rem; color:#D97F00; font-weight:700;">
                        <i class="fas fa-check-circle"></i> Detalle completo abierto en panel lateral
                    </span>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 310,
            autoPan: true,
            autoPanPaddingTopLeft: [25, 45],
            autoPanPaddingBottomRight: [25, 25],
            offset: [0, -8]
        });

        window._leafletMarkers.push(marker);
        window._geoMarkerMap[node.id] = marker;
    });
};

// Se ejecuta ÚNICAMENTE al dar clic a un municipio o pin
window.selectGeoNode = function(nodeId, mode) {
    window._activeGeoNodeId = nodeId;
    const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    // 1. Mover mapa suavemente con offset vertical para que el popup flote centrado y no se corte arriba
    if (window._leafletMapInstance) {
        const targetZoom = (mode === 'presencial') ? 12 : 7;
        const latOffset = (mode === 'presencial') ? 0.014 : 0.6;
        window._leafletMapInstance.setView([node.coords[0] + latOffset, node.coords[1]], targetZoom);
    }

    // 2. Abrir popup del municipio
    if (window._geoMarkerMap[nodeId]) {
        window._geoMarkerMap[nodeId].openPopup();
    }

    // 3. Resaltar chip activo
    nodes.forEach(n => {
        const chip = document.getElementById(`chip-${n.id}`);
        if (chip) {
            if (n.id === nodeId) {
                chip.style.background = '#1A1A1B';
                chip.style.borderColor = '#F39200';
                chip.style.color = '#FFFFFF';
                chip.style.boxShadow = '0 2px 8px rgba(243,146,0,0.3)';
                const badge = chip.querySelector('span:last-child');
                if (badge) {
                    badge.style.background = '#F39200';
                    badge.style.color = '#FFFFFF';
                }
            } else {
                chip.style.background = '#FFFFFF';
                chip.style.borderColor = '#D1D1D1';
                chip.style.color = '#1A1A1B';
                chip.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                const badge = chip.querySelector('span:last-child');
                if (badge) {
                    badge.style.background = 'rgba(243,146,0,0.15)';
                    badge.style.color = '#D97F00';
                }
            }
        }
    });

    // 4. Resaltar marcador en mapa
    nodes.forEach(n => {
        const m = window._geoMarkerMap[n.id];
        if (m) {
            if (n.id === nodeId) {
                m.setRadius(13);
                m.setStyle({ fillColor: '#F39200', color: '#1A1A1B', weight: 3.5, fillOpacity: 1 });
            } else {
                m.setRadius(n.destacado ? 10 : 8);
                m.setStyle({ fillColor: n.destacado ? '#F39200' : '#1A1A1B', color: '#FFFFFF', weight: 2.5, fillOpacity: 0.95 });
            }
        }
    });

    // 5. Cargar la información detallada del municipio en el panel lateral
    window.updateSidePanel(node, mode);
};

// Panel lateral en estado inicial (esperando clic del usuario)
window.renderInitialSidePanel = function(mode) {
    const title = document.getElementById('sideNodeTitle');
    const subtitle = document.getElementById('sideNodeSubtitle');
    const content = document.getElementById('sideNodeContent');
    const footer = document.getElementById('sideNodeFooter');

    if (!title || !content) return;

    if (mode === 'presencial') {
        title.innerText = 'Santander: Oferta Global SNIES · MEN';
        subtitle.innerText = 'Documento Maestro · Registro Único Presencial (18 Programas)';

        content.innerHTML = `
            <!-- 3 TARJETAS KPI RESUMEN DE SANTANDER -->
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
                <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                        <i class="fas fa-graduation-cap"></i> Oferta Dptal.
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B;">18</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Programas SNIES</span>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                        <i class="fas fa-percentage"></i> % Nal.
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#166534;">7.35%</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">de 245 en el país</span>
                </div>
                <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                        <i class="fas fa-university"></i> IES Oferentes
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#0F172A;">12</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Instituciones</span>
                </div>
            </div>

            <!-- INSTRUCCIÓN OFICIAL INTERACTIVA -->
            <div style="background:#FFF9F2; border:1.5px dashed #F39200; border-radius:8px; padding:12px 14px; margin-bottom:12px; text-align:center;">
                <div style="color:#D97F00; font-size:1.1rem; margin-bottom:4px;"><i class="fas fa-hand-pointer"></i></div>
                <strong style="color:#1A1A1B; font-size:0.82rem; display:block;">Interacción Geoespacial Activa</strong>
                <p style="margin:4px 0 0; color:#4B5563; font-size:0.75rem; line-height:1.4;">
                    Haga <strong>clic en cualquier municipio o pin del mapa</strong> para consultar la cantidad oficial de programas, instituciones de educación superior, porcentaje de oferta y tejido empresarial vigente según el Ministerio de Educación Nacional.
                </p>
            </div>

            <!-- DISTRIBUCIÓN OFICIAL DE PROGRAMAS POR MUNICIPIO SEGÚN MEN -->
            <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px; margin-bottom:6px;">
                    <i class="fas fa-table" style="color:#F39200;"></i> Resumen Departamental MEN (18 Programas):
                </span>
                <ul style="margin:0; padding-left:18px; font-size:0.76rem; color:#4B5563; line-height:1.55;">
                    <li><strong>Bucaramanga:</strong> 11 Programas (61.11%) · 8 IES (1 Pública: UTS / 7 Privadas).</li>
                    <li><strong>Floridablanca:</strong> 3 Programas (16.67%) · 3 IES Privadas (UPB, USTA, Libre).</li>
                    <li><strong>Barrancabermeja:</strong> 3 Programas (16.67%) · 3 IES (1 Pública: UTS / 2 Privadas).</li>
                    <li><strong>San Gil / Socorro:</strong> 1 Programa (5.56%) · 1 IES Privada (UDI).</li>
                    <li><strong>Girón y Piedecuesta:</strong> Demanda conurbada atendida por Bucaramanga / TO.</li>
                </ul>
            </div>

            <!-- PROPUESTA DIFERENCIAL TO -->
            <div style="background:#F8F9FA; border-left:3px solid #1A1A1B; padding:8px 10px; border-radius:4px;">
                <span style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:#1A1A1B;">Sede Principal TO Bucaramanga:</span>
                <p style="margin:2px 0 0; font-size:0.74rem; color:#4B5563; line-height:1.4;">
                    Única oferta en Santander estructurada a 144 créditos y 8 semestres con titulación inclusiva Administrador(a) de Empresas y opción de tránsito a modalidad virtual.
                </p>
            </div>
        `;

        if (footer) {
            footer.innerHTML = `<strong>Santander (18 programas · 7,35% del país):</strong> Información oficial del Documento Maestro basada en registros vigentes del SNIES - Ministerio de Educación Nacional.`;
        }
    } else {
        title.innerText = 'Colombia: Oferta Nacional SNIES · MEN';
        subtitle.innerText = 'Registro Único Virtual · Cobertura en los 32 Departamentos';

        content.innerHTML = `
            <!-- 3 TARJETAS KPI RESUMEN NACIONAL -->
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
                <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                        <i class="fas fa-wifi"></i> Oferta Virtual
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B;">44</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Programas Colombia</span>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                        <i class="fas fa-building"></i> Presencial
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#166534;">245</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Programas Base</span>
                </div>
                <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                        <i class="fas fa-globe-americas"></i> Cobertura TO
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#0F172A;">32</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Departamentos</span>
                </div>
            </div>

            <!-- INSTRUCCIÓN OFICIAL INTERACTIVA -->
            <div style="background:#FFF9F2; border:1.5px dashed #F39200; border-radius:8px; padding:12px 14px; margin-bottom:12px; text-align:center;">
                <div style="color:#D97F00; font-size:1.1rem; margin-bottom:4px;"><i class="fas fa-hand-pointer"></i></div>
                <strong style="color:#1A1A1B; font-size:0.82rem; display:block;">Exploración de Nodos Regionales</strong>
                <p style="margin:4px 0 0; color:#4B5563; font-size:0.75rem; line-height:1.4;">
                    Haga <strong>clic en cualquier nodo regional en el mapa</strong> para consultar la concentración de programas presenciales y virtuales del MEN / SNIES y la pertinencia territorial del Registro Único.
                </p>
            </div>

            <!-- DISTRIBUCIÓN NACIONAL SEGÚN MEN -->
            <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px; margin-bottom:6px;">
                    <i class="fas fa-map-pin" style="color:#F39200;"></i> Nodos Principales de Demanda SNIES:
                </span>
                <ul style="margin:0; padding-left:18px; font-size:0.76rem; color:#4B5563; line-height:1.55;">
                    <li><strong>Bogotá D.C.:</strong> 44 Presenciales (17.96%) / 18 Virtuales (40.91%) · 28 IES.</li>
                    <li><strong>Antioquia:</strong> 32 Presenciales (13.06%) / 5 Virtuales · 16 IES.</li>
                    <li><strong>Valle del Cauca:</strong> 28 Presenciales (11.43%) / 2 Virtuales · 14 IES.</li>
                    <li><strong>Región Caribe:</strong> 36 Presenciales (14.69%) / 3 Virtuales · 18 IES.</li>
                    <li><strong>Región Nororiente:</strong> 28 Presenciales (11.43%) / 3 Virtuales · 14 IES.</li>
                </ul>
            </div>
        `;

        if (footer) {
            footer.innerHTML = `<strong>Cobertura Nacional SNIES (245 presenciales · 44 virtuales):</strong> Bajo el Registro Único, la <strong>TO</strong> amplía cobertura a 32 departamentos con unicidad curricular y estándares de alta calidad.`;
        }
    }
};

// Se ejecuta al dar clic a un municipio específico
window.updateSidePanel = function(node, mode) {
    const title = document.getElementById('sideNodeTitle');
    const subtitle = document.getElementById('sideNodeSubtitle');
    const content = document.getElementById('sideNodeContent');
    const footer = document.getElementById('sideNodeFooter');

    if (!title || !content) return;

    title.innerText = node.nombre;
    subtitle.innerText = node.subtitulo;

    content.innerHTML = `
        <!-- BOTÓN SUPERIOR PARA VOLVER A VISTA GENERAL -->
        <div style="margin-bottom:10px; display:flex; justify-content:flex-end;">
            <button onclick="window.resetGeoSelection('${mode}')" style="background:#FFFFFF; border:1px solid #D1D1D1; color:#6B6B6B; font-size:0.72rem; padding:4px 10px; border-radius:14px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s ease;">
                <i class="fas fa-undo" style="color:#F39200;"></i> Ver Resumen Departamental MEN
            </button>
        </div>

        <!-- 3 TARJETAS KPI DE OFERTA EN EL MUNICIPIO/REGIÓN (DATOS MEN / SNIES) -->
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
            <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                    <i class="fas fa-graduation-cap"></i> Programas MEN
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B;">${node.programas.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#6B6B6B; display:block;">${node.programas.includes('directos') ? 'Indirectos' : 'Registrados'}</span>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                    <i class="fas fa-percentage"></i> % Oferta
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#166534;">${node.porcentaje.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#6B6B6B; display:block;">${mode === 'presencial' ? 'Santander' : 'Nacional'}</span>
            </div>
            <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                    <i class="fas fa-university"></i> Instituciones
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#0F172A;">${node.universidades.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#6B6B6B; display:block;">IES Oficiales</span>
            </div>
        </div>

        <!-- DETALLE DE UNIVERSIDADES E INSTITUCIONES OFERENTES (MEN) -->
        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#F39200; display:flex; align-items:center; gap:5px;">
                    <i class="fas fa-university"></i> Universidades &amp; Oferta IES (${node.universidades})
                </span>
                <span style="font-size:0.68rem; background:#F4F4F4; color:#1A1A1B; padding:2px 6px; border-radius:4px; font-weight:700;">SNIES / MEN</span>
            </div>
            <p style="margin:2px 0 0; color:#1A1A1B; font-size:0.78rem; line-height:1.45;">${node.ies_detalle}</p>
        </div>

        <!-- TEJIDO EMPRESARIAL -->
        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-briefcase" style="color:#F39200;"></i> Tejido Empresarial (Cámara de Comercio)
            </span>
            <p style="margin:3px 0 0; color:#1A1A1B; font-weight:600; font-size:0.8rem; line-height:1.4;">${node.empresas}</p>
            <p style="margin:2px 0 0; color:#6B6B6B; font-size:0.75rem;">${node.densidad}</p>
        </div>

        <!-- PERFIL DE DEMANDA -->
        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-chart-pie" style="color:#2ECC71;"></i> Perfil de Demanda y Pertinencia
            </span>
            <p style="margin:3px 0 0; font-size:0.78rem; color:#4B5563; line-height:1.45;">${node.demanda}</p>
        </div>

        <!-- PROPUESTA DE VALOR TO -->
        <div style="background:#FFF9F2; border-left:4px solid #F39200; padding:10px 12px; border-radius:6px; box-shadow:0 1px 4px rgba(243,146,0,0.08);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-award"></i> Propuesta Diferencial TO
            </span>
            <p style="margin:3px 0 0; font-size:0.78rem; color:#1A1A1B; font-weight:500; line-height:1.45;">${node.to_ventaja}</p>
        </div>
    `;

    if (footer) {
        if (mode === 'presencial') {
            footer.innerHTML = `<strong>Santander (18 programas · 7,35% del país):</strong> La propuesta de la <strong>TO</strong> es la única con articulación dual directa a 144 créditos y 8 semestres con titulación inclusiva.`;
        } else {
            footer.innerHTML = `<strong>Cobertura Nacional SNIES (245 programas presenciales · 44 virtuales):</strong> Bajo el Registro Único, la <strong>TO</strong> amplía cobertura a 32 departamentos con unicidad curricular y estándares de alta calidad.`;
        }
    }
};

window.resetGeoSelection = function(mode) {
    if (window._leafletMapInstance) {
        window._leafletMapInstance.closePopup();
        if (mode === 'presencial') {
            window._leafletMapInstance.setView([7.06, -73.12], 10.5);
        } else {
            window._leafletMapInstance.setView([4.57, -74.29], 5.8);
        }
    }
    window._activeGeoNodeId = null;
    window.renderMunicipioChips(mode);
    window.renderGeoMarkers(mode);
    window.renderInitialSidePanel(mode);
};

// Auto-disparador cuando el elemento #toGeoMap entra en el DOM
(function initGeoAutoWatcher() {
    let attempts = 0;
    const watcher = setInterval(() => {
        attempts++;
        const mapEl = document.getElementById('toGeoMap');
        if (mapEl && mapEl.offsetParent !== null) {
            // El elemento existe y es visible en pantalla
            if (!window._leafletMapInstance && window.c2Init) {
                window.c2Init();
            }
        }
        if (attempts > 80) clearInterval(watcher);
    }, 200);
})();

