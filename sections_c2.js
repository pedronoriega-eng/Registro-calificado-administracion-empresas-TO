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
            <div id="toGeoMap" style="height:550px; width:100%; background:#E5E7EB; z-index:1;"></div>
            
            <!-- CONTROLES FLOTANTES DE ENCUADRE CARTOGRÁFICO -->
            <div style="position:absolute; top:12px; right:12px; z-index:1000; display:flex; gap:6px; background:rgba(26,26,27,0.88); padding:5px 8px; border-radius:8px; backdrop-filter:blur(4px); box-shadow:0 2px 8px rgba(0,0,0,0.2);">
                <button id="btnViewNacional" onclick="window.setMapView('colombia')" style="background:#F39200; color:#FFFFFF; border:none; padding:5px 10px; border-radius:5px; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px; transition:all 0.2s ease;">
                    <i class="fas fa-globe-americas"></i> Croquis Toda Colombia
                </button>
                <button id="btnViewSantander" onclick="window.setMapView('santander')" style="background:#334155; color:#FFFFFF; border:none; padding:5px 10px; border-radius:5px; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px; transition:all 0.2s ease;">
                    <i class="fas fa-search-location"></i> Enfocar Santander
                </button>
            </div>

            <!-- BADGE INFERIOR DE ESTADO -->
            <div style="position:absolute; bottom:12px; left:12px; background:rgba(26,26,27,0.88); color:#FFFFFF; padding:6px 14px; border-radius:6px; font-size:0.75rem; z-index:1000; backdrop-filter:blur(4px); display:flex; align-items:center; gap:8px;">
                <i class="fas fa-map-marked-alt" style="color:#F39200;"></i> 
                <span id="mapStatusText">Croquis Oficial de Colombia y División Departamental (MEN · DANE)</span>
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
        "id": "bga",
        "dcode": "68",
        "tipo": "municipio_santander",
        "nombre": "Bucaramanga (Sede Principal TO)",
        "subtitulo": "Distrito Capital – Eje Universitario y Empresarial",
        "programas": "11 Programas SNIES",
        "universidades": "8 Instituciones (7 Privadas / 1 Pública)",
        "porcentaje": "61.11% Oferta Dptal. (4.49% Nal.)",
        "coords": [
            7.1193,
            -73.1227
        ],
        "destacado": true,
        "ies_detalle": "TO (144 cr / 8 sem - Titulación inclusiva), UNAB (144 cr), USTA (138 cr), UCC (143 cr), UDI (147 cr), UNICIENCIA (141 cr), UMB (157 cr) y UTS (162/174 cr - Pública).",
        "empresas": "32.450 empresas activas registradas en CCB 2024.",
        "demanda": "Alta absorción en directores comerciales, analistas de datos, gerentes de operaciones y líderes de innovación.",
        "densidad": "Concentra el 68% de las MiPyMes del Área Metropolitana y el 65% del PIB departamental.",
        "to_ventaja": "Sedes A (Calle 35 # 21-42), Sede B y Sede C con aulas multimedia, laboratorios de cómputo y auditorios. Única oferta a 144 créditos y 8 semestres con titulación inclusiva Administrador(a) de Empresas."
    },
    {
        "id": "florida",
        "dcode": "68",
        "tipo": "municipio_santander",
        "nombre": "Floridablanca",
        "subtitulo": "Corredor Empresarial & Ecosistema Salud",
        "programas": "3 Programas SNIES",
        "universidades": "3 Universidades (3 Privadas / 0 Públicas)",
        "porcentaje": "16.67% Oferta Dptal. (1.22% Nal.)",
        "coords": [
            7.0622,
            -73.0864
        ],
        "destacado": false,
        "ies_detalle": "UPB (138 cr / 8 sem), USTA Campus Floridablanca y Universidad Libre Campus Floridablanca (143 cr / 8 sem).",
        "empresas": "7.890 empresas activas (clúster salud FOSCAL/ICV, dulces tradicionales, servicios y comercio minorista).",
        "demanda": "Gestión de instituciones prestadoras de salud (IPS), administración hospitalaria, talento humano y finanzas.",
        "densidad": "Segunda mayor concentración productiva del área metropolitana (18% del PIB departamental).",
        "to_ventaja": "Conexión directa por Metrolínea hacia la sede principal de la TO (15 min) con horarios flexibles nocturnos y sabatinos."
    },
    {
        "id": "giron",
        "dcode": "68",
        "tipo": "municipio_santander",
        "nombre": "Girón",
        "subtitulo": "Parque Industrial & Centro Logístico Chimita",
        "programas": "0 Programas Directos",
        "universidades": "0 Universidades en Parque Industrial",
        "porcentaje": "0.0% Oferta Directa (Absorción TO)",
        "coords": [
            7.0732,
            -73.1698
        ],
        "destacado": false,
        "ies_detalle": "Sin sedes universitarias presenciales de Administración; demanda 100% captada por Bucaramanga / TO.",
        "empresas": "4.120 empresas y plantas logísticas registradas (Chimita, bodegas de carga nacional y manufactura).",
        "demanda": "Logística de almacenamiento, distribución física internacional, cadena de suministro y HSEQ.",
        "densidad": "Polo logístico e industrial neurálgico con alta concentración de tecnólogos que requieren profesionalización.",
        "to_ventaja": "Planes de homologación directa para egresados técnicos del SENA y modalidades nocturna y virtual de la TO."
    },
    {
        "id": "piedecuesta",
        "dcode": "68",
        "tipo": "municipio_santander",
        "nombre": "Piedecuesta",
        "subtitulo": "Polo Tecnológico & Agroindustrial (ICP Ecopetrol)",
        "programas": "0 Programas Casco Urbano",
        "universidades": "0 Sedes Autónomas en Casco Urbano",
        "porcentaje": "0.0% Oferta Autónoma (Conurbación TO)",
        "coords": [
            6.9886,
            -73.0494
        ],
        "destacado": false,
        "ies_detalle": "Sin oferta de pregrado en administración dentro del casco urbano central (influencia UPB/USTA limítrofes).",
        "empresas": "3.210 empresas y unidades de investigación (ICP Ecopetrol, clúster avícola, tabaco y agroindustria).",
        "demanda": "Biotecnología, agroindustria, emprendimiento rural y proyectos sostenibles.",
        "densidad": "Municipio de mayor expansión habitacional y demográfica del departamento.",
        "to_ventaja": "Población con alta representación histórica en la matrícula de la TO por accesibilidad tarifaria y transporte directo."
    },
    {
        "id": "barranca",
        "dcode": "68",
        "tipo": "municipio_santander",
        "nombre": "Barrancabermeja",
        "subtitulo": "Distrito Petroquímico & Portuario del Río Magdalena",
        "programas": "3 Programas SNIES",
        "universidades": "3 Instituciones (1 Pública / 2 Privadas)",
        "porcentaje": "16.67% Oferta Dptal. (1.22% Nal.)",
        "coords": [
            7.0653,
            -73.8547
        ],
        "destacado": false,
        "ies_detalle": "UTS Sede Barrancabermeja (162 cr - Pública), UDI Sede Barrancabermeja (147 cr) y UCC (143 cr).",
        "empresas": "5.600 empresas activas (cadena de hidrocarburos, transporte fluvial sobre el Río Magdalena y metalmecánica).",
        "demanda": "Administración de contratos minero-energéticos, gestión de proyectos (PMI), transición energética y compras industriales.",
        "densidad": "Principal polo económico no metropolitano de Santander (14% del PIB departamental).",
        "to_ventaja": "Modalidad Virtual de la TO con el mismo plan de estudios de 144 créditos y valor asequible ($3.576.000)."
    },
    {
        "id": "sangil",
        "dcode": "68",
        "tipo": "municipio_santander",
        "nombre": "San Gil / Socorro (Guanentá y Comunera)",
        "subtitulo": "Capital Turística & Ecosistema Solidario",
        "programas": "1 Programa SNIES",
        "universidades": "1 Universidad (Privada)",
        "porcentaje": "5.56% Oferta Dptal. (0.41% Nal.)",
        "coords": [
            6.5544,
            -73.1311
        ],
        "destacado": false,
        "ies_detalle": "UDI Sede San Gil (147 cr / 9 sem) / Cobertura provincial UNISANGIL (150 cr / 9 sem).",
        "empresas": "3.450 unidades productivas (hotelería, turismo de aventura, café especial y sector cooperativo).",
        "demanda": "Gerencia de servicios turísticos, cooperativismo, finanzas agropecuarias y marketing digital de destinos.",
        "densidad": "Eje de desarrollo del sur de Santander con alta demanda de alternativas virtuales accesibles.",
        "to_ventaja": "Acceso directo mediante la Modalidad Virtual de la TO sin necesidad de desplazamiento a capitales."
    },
    {
        "id": "san_andres",
        "dcode": "88",
        "tipo": "departamento_colombia",
        "nombre": "San Andrés y Providencia (SNIES Oficial)",
        "subtitulo": "Archipiélago & Turismo de Frontera",
        "programas": "1 Programas SNIES",
        "universidades": "1 Instituciones Oferentes",
        "porcentaje": "0.41% Oferta Nal. (1 de 245)",
        "coords": [
            12.5847,
            -81.7006
        ],
        "destacado": false,
        "ies_detalle": "INSTITUTO NACIONAL DE FORMACION TECNICA PROFESIONAL DE SAN ANDRES Y PROVIDENCIA - INFOTEP (169 cr/10 sem)",
        "empresas": "Tejido productivo: Economía turística insular, comercio libre de impuestos y servicios portuarios.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 169 créditos y 10.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "norte_santander",
        "dcode": "54",
        "tipo": "departamento_colombia",
        "nombre": "Norte de Santander (SNIES Oficial)",
        "subtitulo": "Eje Fronterizo & Corredor Binacional",
        "programas": "5 Programas SNIES",
        "universidades": "4 Instituciones Oferentes",
        "porcentaje": "2.04% Oferta Nal. (5 de 245)",
        "coords": [
            7.8939,
            -72.5078
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD FRANCISCO DE PAULA SANTANDER (166 cr/10 sem), UNIVERSIDAD FRANCISCO DE PAULA SANTANDER (140 cr/10 sem), UNIVERSIDAD DE PAMPLONA (149 cr/9 sem), UNIVERSIDAD LIBRE (143 cr/8 sem), UNIVERSIDAD SIMON BOLIVAR (142 cr/9 sem)",
        "empresas": "Tejido productivo: Comercio internacional, logística binacional Colombia-Venezuela, calzado, arcilla y confección.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 148 créditos y 9.2 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "valle",
        "dcode": "76",
        "tipo": "departamento_colombia",
        "nombre": "Valle del Cauca (SNIES Oficial)",
        "subtitulo": "Eje Agroindustrial, Logístico & Portuario",
        "programas": "27 Programas SNIES",
        "universidades": "19 Instituciones Oferentes",
        "porcentaje": "11.02% Oferta Nal. (27 de 245)",
        "coords": [
            3.4516,
            -76.532
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD NACIONAL DE COLOMBIA (166 cr/10 sem), UNIVERSIDAD DEL VALLE (165 cr/10 sem), UNIVERSIDAD DEL VALLE (165 cr/10 sem), UNIVERSIDAD DEL VALLE (165 cr/10 sem), UNIVERSIDAD DEL VALLE (165 cr/10 sem), UNIVERSIDAD DEL VALLE (165 cr/10 sem) y 21 instituciones adicionales.",
        "empresas": "Tejido productivo: Clúster de azúcar, bioenergía, cosméticos, empaques y puerto marítimo de Buenaventura.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 155 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "bogota",
        "dcode": "11",
        "tipo": "departamento_colombia",
        "nombre": "Bogotá D.C. (SNIES Oficial)",
        "subtitulo": "Distrito Capital & Centro Financiero Nal.",
        "programas": "55 Programas SNIES",
        "universidades": "52 Instituciones Oferentes",
        "porcentaje": "22.45% Oferta Nal. (55 de 245)",
        "coords": [
            4.6097,
            -74.0817
        ],
        "destacado": true,
        "ies_detalle": "ENTO NÚMER O CRÉDIT OS ÓN UNIVERSIDAD NACIONAL DE COLOMBIA (164 cr/10 sem), UNIVERSIDAD MILITAR-NUEVA GRANADA (160 cr/9 sem), PONTIFICIA UNIVERSIDAD JAVERIANA (140 cr/8 sem), UNIVERSIDAD INCCA DE COLOMBIA (144 cr/9 sem), UNIVERSIDAD SANTO TOMAS (138 cr/8 sem), UNIVERSIDAD EXTERNADO DE COLOMBIA (157 cr/9 sem) y 49 instituciones adicionales.",
        "empresas": "Tejido productivo: Principal centro de servicios empresariales, corporativos, banca, tecnología e industrias 4.0.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 146 créditos y 8.3 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "cundinamarca",
        "dcode": "25",
        "tipo": "departamento_colombia",
        "nombre": "Cundinamarca (SNIES Oficial)",
        "subtitulo": "Sabana Agroindustrial & Parques Empresariales",
        "programas": "10 Programas SNIES",
        "universidades": "5 Instituciones Oferentes",
        "porcentaje": "4.08% Oferta Nal. (10 de 245)",
        "coords": [
            4.711,
            -74.23
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE CUNDINAMARCA (158 cr/9 sem), UNIVERSIDAD DE CUNDINAMARCA (158 cr/9 sem), UNIVERSIDAD DE CUNDINAMARCA (158 cr/9 sem), UNIVERSIDAD DE CUNDINAMARCA (150 cr/9 sem), UNIVERSIDAD DE CUNDINAMARCA (150 cr/9 sem), UNIVERSIDAD DE CUNDINAMARCA (158 cr/9 sem) y 4 instituciones adicionales.",
        "empresas": "Tejido productivo: Industria manufacturera, flores de exportación, logística en Sabana Centro y Occidente.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 159 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "santander",
        "dcode": "68",
        "tipo": "departamento_colombia",
        "nombre": "Santander (SNIES Oficial)",
        "subtitulo": "Sede Principal TO & Polo Tecnológico del Oriente",
        "programas": "16 Programas SNIES",
        "universidades": "12 Instituciones Oferentes",
        "porcentaje": "6.53% Oferta Nal. (16 de 245)",
        "coords": [
            7.1193,
            -73.1227
        ],
        "destacado": true,
        "ies_detalle": "UNIVERSIDAD SANTO TOMAS (138 cr/8 sem), UNIVERSIDAD PONTIFICIA BOLIVARIANA (138 cr/8 sem), UNIVERSIDAD LIBRE (143 cr/8 sem), UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/12 sem), ENTO NÚMER O CRÉDIT OS ÓN UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/8 sem), UNIVERSIDAD AUTONOMA DE BUCARAMANGA-UNAB (144 cr/8 sem) y 10 instituciones adicionales.",
        "empresas": "Tejido productivo: Liderazgo en salud, calzado, confección, metalmecánica, avicultura, energía y turismo.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 149 créditos y 8.9 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "antioquia",
        "dcode": "05",
        "tipo": "departamento_colombia",
        "nombre": "Antioquia (SNIES Oficial)",
        "subtitulo": "Distrito de Ciencia, Tecnología e Innovación",
        "programas": "24 Programas SNIES",
        "universidades": "22 Instituciones Oferentes",
        "porcentaje": "9.80% Oferta Nal. (24 de 245)",
        "coords": [
            6.2442,
            -75.5812
        ],
        "destacado": true,
        "ies_detalle": "UNIVERSIDAD DE ANTIOQUIA (162 cr/10 sem), UNIVERSIDAD PONTIFICIA BOLIVARIANA (151 cr/8 sem), UNIVERSIDAD CATOLICA DE ORIENTE -UCO (152 cr/9 sem), UNIVERSIDAD DE MEDELLIN (142 cr/8 sem), UNIVERSIDAD AUTONOMA LATINOAMERICANA-UNAULA (157 cr/8 sem), UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/8 sem) y 18 instituciones adicionales.",
        "empresas": "Tejido productivo: Clúster textil, confección, financiero, agroindustria bananera, café y transformación digital.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "atlantico",
        "dcode": "08",
        "tipo": "departamento_colombia",
        "nombre": "Atlántico (SNIES Oficial)",
        "subtitulo": "Puerta de Oro & Plataforma Logística del Caribe",
        "programas": "11 Programas SNIES",
        "universidades": "11 Instituciones Oferentes",
        "porcentaje": "4.49% Oferta Nal. (11 de 245)",
        "coords": [
            10.9685,
            -74.7813
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DEL ATLANTICO (152 cr/9 sem), ENTO NÚMER O CRÉDIT OS ÓN UNIVERSIDAD DEL NORTE (170 cr/10 sem), UNIVERSIDAD AUTONOMA DEL CARIBE- UNIAUTONOMA (159 cr/9 sem), UNIVERSIDAD SIMON BOLIVAR (142 cr/9 sem), CORPORACION UNIVERSIDAD DE LA COSTA CUC (157 cr/10 sem), CORPORACION UNIVERSITARIA MINUTO DE DIOS -UNIMINUTO (147 cr/9 sem) y 5 instituciones adicionales.",
        "empresas": "Tejido productivo: Comercio portuario, servicios BPO/KPO, químicos, metalmecánica y logística multimodal.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 157 créditos y 9.2 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "bolivar",
        "dcode": "13",
        "tipo": "departamento_colombia",
        "nombre": "Bolívar (SNIES Oficial)",
        "subtitulo": "Zona Petroquímica, Portuaria & Clúster Turístico",
        "programas": "12 Programas SNIES",
        "universidades": "11 Instituciones Oferentes",
        "porcentaje": "4.90% Oferta Nal. (12 de 245)",
        "coords": [
            10.391,
            -75.4794
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE CARTAGENA (162 cr/10 sem), UNIVERSIDAD PONTIFICIA (135 cr/8 sem), UNIVERSIDAD LIBRE (143 cr/8 sem), UNIVERSIDAD ANTONIO NARIÑO (147 cr/8 sem), UNIVERSIDAD TECNOLOGICA DE BOLIVAR (153 cr/9 sem), CORPORACION UNIVERSITARIA RAFAEL NUÑEZ (160 cr/8 sem) y 6 instituciones adicionales.",
        "empresas": "Tejido productivo: Zona Industrial de Mamonal (refinación, plásticos), turismo internacional y logística marítima.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 152 créditos y 8.8 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "cordoba",
        "dcode": "23",
        "tipo": "departamento_colombia",
        "nombre": "Córdoba (SNIES Oficial)",
        "subtitulo": "Capital Ganadera & Valle del Sinú",
        "programas": "6 Programas SNIES",
        "universidades": "2 Instituciones Oferentes",
        "porcentaje": "2.45% Oferta Nal. (6 de 245)",
        "coords": [
            8.7479,
            -75.8814
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD TE (158 cr/10 sem),  (140 cr/8 sem),  (141 cr/8 sem),  (158 cr/9 sem), ENTO NÚMER O (161 cr/9 sem),  (144 cr/8 sem)",
        "empresas": "Tejido productivo: Agroindustria ganadera, minería sostenible, piscicultura y comercio regional del Sinú.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 8.7 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "narino",
        "dcode": "52",
        "tipo": "departamento_colombia",
        "nombre": "Nariño (SNIES Oficial)",
        "subtitulo": "Frontera Sur & Desarrollo Andino-Pacífico",
        "programas": "10 Programas SNIES",
        "universidades": "5 Instituciones Oferentes",
        "porcentaje": "4.08% Oferta Nal. (10 de 245)",
        "coords": [
            1.2136,
            -77.2811
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE NARIÑO (170 cr/10 sem), UNIVERSIDAD DE NARIÑO (170 cr/10 sem), UNIVERSIDAD DE NARIÑO (170 cr/10 sem), UNIVERSIDAD ANTONIO (134 cr/8 sem), UNIVERSIDAD ANTONIO (134 cr/8 sem), UNIVERSIDAD ANTONIO (134 cr/8 sem) y 4 instituciones adicionales.",
        "empresas": "Tejido productivo: Comercio transfronterizo con Ecuador, café especial, papa, productos lácteos y turismo.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 155 créditos y 9.2 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "quindio",
        "dcode": "63",
        "tipo": "departamento_colombia",
        "nombre": "Quindío (SNIES Oficial)",
        "subtitulo": "Corazón del Eje Cafetero & Destino Turístico",
        "programas": "3 Programas SNIES",
        "universidades": "3 Instituciones Oferentes",
        "porcentaje": "1.22% Oferta Nal. (3 de 245)",
        "coords": [
            4.5339,
            -75.6811
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD LA GRAN COLOMBIA (148 cr/8 sem), CORPORACION UNIVERSITARIA EMPRESARIAL ALEXANDER VON HUMBOLDT - CUE (168 cr/7 sem), INSTITUCION UNIVERSITARIA EAM (138 cr/8 sem)",
        "empresas": "Tejido productivo: Caficultura tecnificada, turismo rural, parques temáticos y logística de distribución central.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 151 créditos y 7.7 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "boyaca",
        "dcode": "15",
        "tipo": "departamento_colombia",
        "nombre": "Boyacá (SNIES Oficial)",
        "subtitulo": "Despensa Agropecuaria & Eje Metalúrgico",
        "programas": "7 Programas SNIES",
        "universidades": "5 Instituciones Oferentes",
        "porcentaje": "2.86% Oferta Nal. (7 de 245)",
        "coords": [
            5.5353,
            -73.3678
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA - UPTC (156 cr/10 sem), UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA - UPTC (156 cr/10 sem), UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA - UPTC (157 cr/10 sem), UNIVERSIDAD SANTO TOMAS (138 cr/8 sem), UNIVERSIDAD DE BOYACA UNIBOYACA (140 cr/8 sem), FUNDACION UNIVERSITARIA JUAN DE CASTELLANOS (140 cr/8 sem) y 1 instituciones adicionales.",
        "empresas": "Tejido productivo: Sector siderúrgico y minero, agroindustria hortofrutícola, turismo patrimonial y artesanías.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 148 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "caqueta",
        "dcode": "18",
        "tipo": "departamento_colombia",
        "nombre": "Caquetá (SNIES Oficial)",
        "subtitulo": "Puerta de Oro de la Amazonía",
        "programas": "1 Programas SNIES",
        "universidades": "1 Instituciones Oferentes",
        "porcentaje": "0.41% Oferta Nal. (1 de 245)",
        "coords": [
            1.6144,
            -75.6062
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE LA AMAZONIA (160 cr/10 sem)",
        "empresas": "Tejido productivo: Ganadería regenerativa, agroforestería, productos maderables y ecoturismo de biodiversidad.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 160 créditos y 10.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "choco",
        "dcode": "27",
        "tipo": "departamento_colombia",
        "nombre": "Chocó (SNIES Oficial)",
        "subtitulo": "Biodiversidad del Pacífico & Bioeconomía",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            5.6947,
            -76.6611
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Bioeconomía, pesca artesanal, minería tradicional, ecoturismo y aprovechamiento forestal sostenible.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "guajira",
        "dcode": "44",
        "tipo": "departamento_colombia",
        "nombre": "La Guajira (SNIES Oficial)",
        "subtitulo": "Polo de Energías Renovables & Comercio Fronterizo",
        "programas": "2 Programas SNIES",
        "universidades": "1 Instituciones Oferentes",
        "porcentaje": "0.82% Oferta Nal. (2 de 245)",
        "coords": [
            11.5444,
            -72.9072
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE LA GUAJIRA (149 cr/10 sem), UNIVERSIDAD DE LA GUAJIRA (157 cr/10 sem)",
        "empresas": "Tejido productivo: Parques eólicos y solares, minería de carbón y sal marina, etnoturismo y comercio wayuu.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 153 créditos y 10.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "caldas",
        "dcode": "17",
        "tipo": "departamento_colombia",
        "nombre": "Caldas (SNIES Oficial)",
        "subtitulo": "Hub Universitario & Ecosistema Cafetero",
        "programas": "5 Programas SNIES",
        "universidades": "4 Instituciones Oferentes",
        "porcentaje": "2.04% Oferta Nal. (5 de 245)",
        "coords": [
            5.0689,
            -75.5174
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD NACIONAL DE COLOMBIA (162 cr/10 sem), UNIVERSIDAD NACIONAL DE COLOMBIA (162 cr/10 sem), UNIVERSIDAD DE MANIZALES (148 cr/9 sem), UNIVERSIDAD AUTONOMA DE MANIZALES (153 cr/9 sem), UNIVERSIDAD CATÓLICA LUIS AMIGÓ (153 cr/9 sem)",
        "empresas": "Tejido productivo: Metalmecánica liviana, BPO, biotecnología, café especial y servicios de conocimiento.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 156 créditos y 9.4 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "risaralda",
        "dcode": "66",
        "tipo": "departamento_colombia",
        "nombre": "Risaralda (SNIES Oficial)",
        "subtitulo": "Centro Logístico del Eje Cafetero & Servicios",
        "programas": "7 Programas SNIES",
        "universidades": "7 Instituciones Oferentes",
        "porcentaje": "2.86% Oferta Nal. (7 de 245)",
        "coords": [
            4.8133,
            -75.6961
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD TECNOLOGICA DE PEREIRA - UTP (156 cr/11 sem), UNIVERSIDAD LIBRE (143 cr/8 sem), UNIVERSIDAD CATOLICA DE PEREIRA (159 cr/9 sem), FUNDACION UNIVERSITARIA DEL AREA ANDINA (144 cr/9 sem), CORPORACION UNIVERSITARIA MINUTO DE DIOS -UNIMINUTO (147 cr/9 sem), CORPORACION INSTITUTO DE ADMINISTRACION Y FINANZAS - CIAF (155 cr/10 sem) y 1 instituciones adicionales.",
        "empresas": "Tejido productivo: Logística intermodal, confección, comercio mayorista y servicios de salud especializada.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 151 créditos y 9.4 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "tolima",
        "dcode": "73",
        "tipo": "departamento_colombia",
        "nombre": "Tolima (SNIES Oficial)",
        "subtitulo": "Eje Arrocero & Encrucijada Vial de Colombia",
        "programas": "6 Programas SNIES",
        "universidades": "5 Instituciones Oferentes",
        "porcentaje": "2.45% Oferta Nal. (6 de 245)",
        "coords": [
            4.4389,
            -75.2322
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DEL TOLIMA (157 cr/10 sem), UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/8 sem), UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/8 sem), UNIVERSIDAD DE IBAGUE (160 cr/9 sem), INSTITUCION UNIVERSITARIA DE EL ESPINAL - UNIESPINAL (165 cr/10 sem), CORPORACION UNIFICADA NACIONAL DE EDUCACION SUPERIOR-CUN (158 cr/9 sem)",
        "empresas": "Tejido productivo: Agroindustria de arroz, café, textiles, confección y nodo logístico del Túnel de La Línea.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 154 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "huila",
        "dcode": "41",
        "tipo": "departamento_colombia",
        "nombre": "Huila (SNIES Oficial)",
        "subtitulo": "Primer Productor Nacional de Café & Piscicultura",
        "programas": "6 Programas SNIES",
        "universidades": "3 Instituciones Oferentes",
        "porcentaje": "2.45% Oferta Nal. (6 de 245)",
        "coords": [
            2.9273,
            -75.2819
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD SURCOLOMBIANA (154 cr/9 sem), UNIVERSIDAD SURCOLOMBIANA (154 cr/9 sem), UNIVERSIDAD SURCOLOMBIANA (154 cr/9 sem), UNIVERSIDAD SURCOLOMBIANA (154 cr/9 sem), CORPORACION UNIFICADA NACIONAL DE EDUCACION SUPERIOR-CUN (158 cr/9 sem), FUNDACION UNIVERSITARIA NAVARRA - UNINAVARRA (147 cr/9 sem)",
        "empresas": "Tejido productivo: Cafés especiales de origen, piscicultura de tilapia en Betania, fruticultura y turismo arqueológico.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 154 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "cauca",
        "dcode": "19",
        "tipo": "departamento_colombia",
        "nombre": "Cauca (SNIES Oficial)",
        "subtitulo": "Agroindustria del Café & Región Multicultural",
        "programas": "7 Programas SNIES",
        "universidades": "7 Instituciones Oferentes",
        "porcentaje": "2.86% Oferta Nal. (7 de 245)",
        "coords": [
            2.4448,
            -76.6147
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DEL CAUCA (164 cr/10 sem), UNIVERSIDAD DEL VALLE (165 cr/10 sem), FUNDACION UNIVERSITARIA DE POPAYAN (149 cr/9 sem), CORPORACION UNIVERSITARIA MINUTO DE DIOS -UNIMINUTO (147 cr/9 sem), CORPORACION UNIVERSITARIA AUTONOMA DEL CAUCA (175 cr/9 sem), COLEGIO MAYOR DEL CAUCA (160 cr/10 sem) y 1 instituciones adicionales.",
        "empresas": "Tejido productivo: Agroindustria de caña panelera, café, piscicultura, turismo colonial y empresas cooperativas.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 159 créditos y 9.4 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "cesar",
        "dcode": "20",
        "tipo": "departamento_colombia",
        "nombre": "Cesar (SNIES Oficial)",
        "subtitulo": "Valle de Upar & Transición Minero-Energética",
        "programas": "3 Programas SNIES",
        "universidades": "2 Instituciones Oferentes",
        "porcentaje": "1.22% Oferta Nal. (3 de 245)",
        "coords": [
            10.4631,
            -73.2532
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD POPULAR DEL CESAR (168 cr/10 sem), UNIVERSIDAD POPULAR DEL CESAR (172 cr/10 sem), FUNDACION UNIVERSITARIA DEL AREA ANDINA (158 cr/9 sem)",
        "empresas": "Tejido productivo: Sector ganadero y lechero, palma de aceite, transición de minería de carbón y turismo cultural vallenato.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 166 créditos y 9.7 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "magdalena",
        "dcode": "47",
        "tipo": "departamento_colombia",
        "nombre": "Magdalena (SNIES Oficial)",
        "subtitulo": "Distrito Turístico, Portuario & Bananero",
        "programas": "4 Programas SNIES",
        "universidades": "4 Instituciones Oferentes",
        "porcentaje": "1.63% Oferta Nal. (4 de 245)",
        "coords": [
            11.2408,
            -74.199
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DEL MAGDALENA - UNIMAGDALENA (147 cr/9 sem), UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/10 sem), CORPORACION UNIVERSITARIA MINUTO DE DIOS -UNIMINUTO (147 cr/9 sem), CORPORACION UNIFICADA NACIONAL DE EDUCACION SUPERIOR-CUN (158 cr/9 sem)",
        "empresas": "Tejido productivo: Puerto de aguas profundas, clúster de banano y palma africana, turismo de playa y ecoturismo en Sierra Nevada.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 149 créditos y 9.2 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "meta",
        "dcode": "50",
        "tipo": "departamento_colombia",
        "nombre": "Meta (SNIES Oficial)",
        "subtitulo": "Puerta del Llano & Agroindustria de la Orinoquía",
        "programas": "6 Programas SNIES",
        "universidades": "6 Instituciones Oferentes",
        "porcentaje": "2.45% Oferta Nal. (6 de 245)",
        "coords": [
            4.142,
            -73.6266
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE LOS LLANOS (150 cr/9 sem), UNIVERSIDAD COOPERATIVA DE COLOMBIA (143 cr/8 sem), FUNDACIÓN UNIVERSITARIA COMPENSAR (155 cr/9 sem), CORPORACION UNIVERSITARIA DE COLOMBIA IDEAS (179 cr/10 sem), CORPORACION UNIVERSITARIA DEL META - UNIMETA (144 cr/9 sem), CORPORACION UNIVERSITARIA MINUTO DE DIOS -UNIMINUTO (147 cr/9 sem)",
        "empresas": "Tejido productivo: Petróleo, gas, palma de aceite, ganadería extensiva, soya, arroz y servicios de transporte de carga.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 153 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "sucre",
        "dcode": "70",
        "tipo": "departamento_colombia",
        "nombre": "Sucre (SNIES Oficial)",
        "subtitulo": "Sabana & Golfo de Morrosquillo",
        "programas": "4 Programas SNIES",
        "universidades": "4 Instituciones Oferentes",
        "porcentaje": "1.63% Oferta Nal. (4 de 245)",
        "coords": [
            9.3047,
            -75.3978
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE SUCRE (155 cr/9 sem), CORPORACION UNIVERSITARIA DEL CARIBE - CECAR (170 cr/10 sem), CORPORACION UNIVERSITARIA ANTONIO JOSE DE SUCRE - CORPOSUCRE (159 cr/9 sem), CORPORACION UNIFICADA NACIONAL DE EDUCACION SUPERIOR-CUN (158 cr/9 sem)",
        "empresas": "Tejido productivo: Ganadería doble propósito, sector porcícola, turismo en playas de Coveñas y Tolú, y tabaco.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 160 créditos y 9.2 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "casanare",
        "dcode": "85",
        "tipo": "departamento_colombia",
        "nombre": "Casanare (SNIES Oficial)",
        "subtitulo": "Capital Petrolera & Agroindustrial de los Llanos",
        "programas": "3 Programas SNIES",
        "universidades": "2 Instituciones Oferentes",
        "porcentaje": "1.22% Oferta Nal. (3 de 245)",
        "coords": [
            5.3377,
            -72.3959
        ],
        "destacado": false,
        "ies_detalle": "FUNDACION UNIVERSITARIA DE SAN GIL - UNISANGIL (134 cr/8 sem), UNIVERSIDAD INTERNACIONAL DEL TRÓPICO AMERICANO - UNITRÓPICO (157 cr/10 sem), UNIVERSIDAD INTERNACIONAL DEL TRÓPICO AMERICANO - UNITRÓPICO (154 cr/9 sem)",
        "empresas": "Tejido productivo: Explotación de hidrocarburos, agroindustria arrocera mecanizada, ganadería y palma de aceite.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 148 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "putumayo",
        "dcode": "86",
        "tipo": "departamento_colombia",
        "nombre": "Putumayo (SNIES Oficial)",
        "subtitulo": "Polo Petrolero & Puerta Amazónica del Sur",
        "programas": "2 Programas SNIES",
        "universidades": "1 Instituciones Oferentes",
        "porcentaje": "0.82% Oferta Nal. (2 de 245)",
        "coords": [
            1.1488,
            -76.6477
        ],
        "destacado": false,
        "ies_detalle": "INSTITUCIÓN UNIVERSITARIA DEL PUTUMAYO (169 cr/10 sem), INSTITUCIÓN UNIVERSITARIA DEL PUTUMAYO (169 cr/10 sem)",
        "empresas": "Tejido productivo: Hidrocarburos, pimienta negra amazónica, palmito, piscicultura y turismo de cascadas.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 169 créditos y 10.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "arauca",
        "dcode": "81",
        "tipo": "departamento_colombia",
        "nombre": "Arauca (SNIES Oficial)",
        "subtitulo": "Llanura Petrolera & Ganadería Fronteriza",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            7.0847,
            -70.7591
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Extracción de petróleo (Caño Limón), ganadería bovina, cacao criollo y comercio de frontera.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "amazonas",
        "dcode": "91",
        "tipo": "departamento_colombia",
        "nombre": "Amazonas (SNIES Oficial)",
        "subtitulo": "Pulmón del Mundo & Triple Frontera",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            -4.2153,
            -69.9406
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Ecoturismo internacional, investigación en biodiversidad, artesanías indígenas y comercio tri-fronterizo.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "guaviare",
        "dcode": "95",
        "tipo": "departamento_colombia",
        "nombre": "Guaviare (SNIES Oficial)",
        "subtitulo": "Puerta a la Serranía de Chiribiquete",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            2.5729,
            -72.6459
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Ecoturismo arqueológico, caucho natural, productos no maderables del bosque y ganadería sostenible.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "guainia",
        "dcode": "94",
        "tipo": "departamento_colombia",
        "nombre": "Guainía (SNIES Oficial)",
        "subtitulo": "Tierra de Muchas Aguas & Cerros de Mavecure",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            3.8653,
            -67.9239
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Ecoturismo de naturaleza, pesca ornamental, minería aluvial y preservación ecológica indígena.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "vaupes",
        "dcode": "97",
        "tipo": "departamento_colombia",
        "nombre": "Vaupés (SNIES Oficial)",
        "subtitulo": "Selva Amazónica & Culturas Ancestrales",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            1.1983,
            -70.1733
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Artesanías ancestrales, aprovechamiento forestal certificado y bioeconomía comunitaria.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    },
    {
        "id": "vichada",
        "dcode": "99",
        "tipo": "departamento_colombia",
        "nombre": "Vichada (SNIES Oficial)",
        "subtitulo": "Frontera Forestal & Altillanura Colombiana",
        "programas": "0 Programas Directos",
        "universidades": "Cobertura Virtual Nacional",
        "porcentaje": "0.00% Oferta Nal. (0 de 245)",
        "coords": [
            6.189,
            -67.4859
        ],
        "destacado": false,
        "ies_detalle": "Sin programas presenciales directos registrados en SNIES. Demanda territorial atendida mediante Modalidad Virtual de la TO y CERES.",
        "empresas": "Tejido productivo: Plantaciones forestales comerciales, caucho, acacia, ganadería y producción de granos en la altillanura.",
        "demanda": "Demanda en gestión estratégica, finanzas, analítica de datos y optimización de cadenas productivas regionales.",
        "densidad": "Promedio académico regional según SNIES: 150 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La TO ofrece una propuesta altamente competitiva: plan ágil de 144 créditos en 8 semestres, matrícula de $3.576.000 y titulación profesional Administrador(a) de Empresas."
    }
];

window._geoNodesVirtual = [
    {
        "id": "san_andres",
        "dcode": "88",
        "tipo": "departamento_colombia",
        "nombre": "San Andrés y Providencia (Modalidad Virtual SNIES)",
        "subtitulo": "Archipiélago & Turismo de Frontera",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            12.5847,
            -81.7006
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Economía turística insular, comercio libre de impuestos y servicios portuarios.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "norte_santander",
        "dcode": "54",
        "tipo": "departamento_colombia",
        "nombre": "Norte de Santander (Modalidad Virtual SNIES)",
        "subtitulo": "Eje Fronterizo & Corredor Binacional",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            7.8939,
            -72.5078
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Comercio internacional, logística binacional Colombia-Venezuela, calzado, arcilla y confección.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "valle",
        "dcode": "76",
        "tipo": "departamento_colombia",
        "nombre": "Valle del Cauca (Modalidad Virtual SNIES)",
        "subtitulo": "Eje Agroindustrial, Logístico & Portuario",
        "programas": "1 Programas Virtuales",
        "universidades": "1 IES con Sede Central",
        "porcentaje": "2.27% Oferta Virtual Nal.",
        "coords": [
            3.4516,
            -76.532
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD SANTIAGO DE CALI (136 cr/9 sem)",
        "empresas": "Tejido productivo: Clúster de azúcar, bioenergía, cosméticos, empaques y puerto marítimo de Buenaventura.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 136 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "bogota",
        "dcode": "11",
        "tipo": "departamento_colombia",
        "nombre": "Bogotá D.C. (Modalidad Virtual SNIES)",
        "subtitulo": "Distrito Capital & Centro Financiero Nal.",
        "programas": "23 Programas Virtuales",
        "universidades": "23 IES con Sede Central",
        "porcentaje": "52.27% Oferta Virtual Nal.",
        "coords": [
            4.6097,
            -74.0817
        ],
        "destacado": true,
        "ies_detalle": "FUNDACION UNIVERSITARIA INTERNACIONAL DE LA RIOJA - UNIR (136 cr/8 sem), CORPORACION UNIVERSITARIA DE CATALUÑA (140 cr/8 sem), UNIVERSITARIA VIRTUAL INTERNACIONAL (146 cr/9 sem), ESEIT - ESCUELA SUPERIOR DE EMPRESA, INGENIERÍA Y TECNOLOGÍA (140 cr/8 sem), CORPORACION UNIVERSITARIA DE ASTURIAS (145 cr/8 sem), FUNDACION UNIVERSITARIA COLOMBO GERMANA (140 cr/9 sem) y 17 instituciones adicionales.",
        "empresas": "Tejido productivo: Principal centro de servicios empresariales, corporativos, banca, tecnología e industrias 4.0.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 146 créditos y 8.6 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "cundinamarca",
        "dcode": "25",
        "tipo": "departamento_colombia",
        "nombre": "Cundinamarca (Modalidad Virtual SNIES)",
        "subtitulo": "Sabana Agroindustrial & Parques Empresariales",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            4.711,
            -74.23
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Industria manufacturera, flores de exportación, logística en Sabana Centro y Occidente.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "santander",
        "dcode": "68",
        "tipo": "departamento_colombia",
        "nombre": "Santander (Modalidad Virtual SNIES)",
        "subtitulo": "Sede Principal TO & Polo Tecnológico del Oriente",
        "programas": "3 Programas Virtuales",
        "universidades": "3 IES con Sede Central",
        "porcentaje": "6.82% Oferta Virtual Nal.",
        "coords": [
            7.1193,
            -73.1227
        ],
        "destacado": true,
        "ies_detalle": "UNIDADES TECNOLOGICAS DE SANTANDER (175 cr/10 sem), UNIVERSIDAD DE INVESTIGACION Y DESARROLLO - UDI (157 cr/9 sem), UNIVERSIDAD AUTONOMA DE BUCARAMANGA-UNAB (160 cr/8 sem)",
        "empresas": "Tejido productivo: Liderazgo en salud, calzado, confección, metalmecánica, avicultura, energía y turismo.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 164 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "antioquia",
        "dcode": "05",
        "tipo": "departamento_colombia",
        "nombre": "Antioquia (Modalidad Virtual SNIES)",
        "subtitulo": "Distrito de Ciencia, Tecnología e Innovación",
        "programas": "7 Programas Virtuales",
        "universidades": "7 IES con Sede Central",
        "porcentaje": "15.91% Oferta Virtual Nal.",
        "coords": [
            6.2442,
            -75.5812
        ],
        "destacado": true,
        "ies_detalle": "INSTITUCION UNIVERSITARIA DIGITAL DE ANTIOQUIA -IU. DIGITAL (140 cr/8 sem), INSTITUCION UNIVERSITARIA ESCOLME (160 cr/10 sem), CORPORACION UNIVERSITARIA REMINGTON (147 cr/9 sem), CORPORACION UNIVERSITARIA LASALLISTA (137 cr/8 sem), FUNDACION UNIVERSITARIA CATOLICA DEL NORTE (145 cr/9 sem), FUNDACION UNIVERSITARIA-CEIPA (163 cr/9 sem) y 1 instituciones adicionales.",
        "empresas": "Tejido productivo: Clúster textil, confección, financiero, agroindustria bananera, café y transformación digital.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 148 créditos y 8.7 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "atlantico",
        "dcode": "08",
        "tipo": "departamento_colombia",
        "nombre": "Atlántico (Modalidad Virtual SNIES)",
        "subtitulo": "Puerta de Oro & Plataforma Logística del Caribe",
        "programas": "2 Programas Virtuales",
        "universidades": "2 IES con Sede Central",
        "porcentaje": "4.55% Oferta Virtual Nal.",
        "coords": [
            10.9685,
            -74.7813
        ],
        "destacado": false,
        "ies_detalle": "CORPORACION UNIVERSITARIA AMERICANA (161 cr/9 sem), CORPORACION UNIVERSIDAD DE LA COSTA CUC (157 cr/10 sem)",
        "empresas": "Tejido productivo: Comercio portuario, servicios BPO/KPO, químicos, metalmecánica y logística multimodal.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 159 créditos y 9.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "bolivar",
        "dcode": "13",
        "tipo": "departamento_colombia",
        "nombre": "Bolívar (Modalidad Virtual SNIES)",
        "subtitulo": "Zona Petroquímica, Portuaria & Clúster Turístico",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            10.391,
            -75.4794
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Zona Industrial de Mamonal (refinación, plásticos), turismo internacional y logística marítima.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "cordoba",
        "dcode": "23",
        "tipo": "departamento_colombia",
        "nombre": "Córdoba (Modalidad Virtual SNIES)",
        "subtitulo": "Capital Ganadera & Valle del Sinú",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            8.7479,
            -75.8814
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Agroindustria ganadera, minería sostenible, piscicultura y comercio regional del Sinú.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "narino",
        "dcode": "52",
        "tipo": "departamento_colombia",
        "nombre": "Nariño (Modalidad Virtual SNIES)",
        "subtitulo": "Frontera Sur & Desarrollo Andino-Pacífico",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            1.2136,
            -77.2811
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Comercio transfronterizo con Ecuador, café especial, papa, productos lácteos y turismo.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "quindio",
        "dcode": "63",
        "tipo": "departamento_colombia",
        "nombre": "Quindío (Modalidad Virtual SNIES)",
        "subtitulo": "Corazón del Eje Cafetero & Destino Turístico",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            4.5339,
            -75.6811
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Caficultura tecnificada, turismo rural, parques temáticos y logística de distribución central.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "boyaca",
        "dcode": "15",
        "tipo": "departamento_colombia",
        "nombre": "Boyacá (Modalidad Virtual SNIES)",
        "subtitulo": "Despensa Agropecuaria & Eje Metalúrgico",
        "programas": "1 Programas Virtuales",
        "universidades": "1 IES con Sede Central",
        "porcentaje": "2.27% Oferta Virtual Nal.",
        "coords": [
            5.5353,
            -73.3678
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD DE BOYACA UNIBOYACA (136 cr/8 sem)",
        "empresas": "Tejido productivo: Sector siderúrgico y minero, agroindustria hortofrutícola, turismo patrimonial y artesanías.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 136 créditos y 8.0 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "caqueta",
        "dcode": "18",
        "tipo": "departamento_colombia",
        "nombre": "Caquetá (Modalidad Virtual SNIES)",
        "subtitulo": "Puerta de Oro de la Amazonía",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            1.6144,
            -75.6062
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Ganadería regenerativa, agroforestería, productos maderables y ecoturismo de biodiversidad.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "choco",
        "dcode": "27",
        "tipo": "departamento_colombia",
        "nombre": "Chocó (Modalidad Virtual SNIES)",
        "subtitulo": "Biodiversidad del Pacífico & Bioeconomía",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            5.6947,
            -76.6611
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Bioeconomía, pesca artesanal, minería tradicional, ecoturismo y aprovechamiento forestal sostenible.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "guajira",
        "dcode": "44",
        "tipo": "departamento_colombia",
        "nombre": "La Guajira (Modalidad Virtual SNIES)",
        "subtitulo": "Polo de Energías Renovables & Comercio Fronterizo",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            11.5444,
            -72.9072
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Parques eólicos y solares, minería de carbón y sal marina, etnoturismo y comercio wayuu.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "caldas",
        "dcode": "17",
        "tipo": "departamento_colombia",
        "nombre": "Caldas (Modalidad Virtual SNIES)",
        "subtitulo": "Hub Universitario & Ecosistema Cafetero",
        "programas": "2 Programas Virtuales",
        "universidades": "2 IES con Sede Central",
        "porcentaje": "4.55% Oferta Virtual Nal.",
        "coords": [
            5.0689,
            -75.5174
        ],
        "destacado": false,
        "ies_detalle": "UNIVERSIDAD AUTONOMA DE MANIZALES (153 cr/9 sem), UNIVERSIDAD DE MANIZALES (148 cr/8 sem)",
        "empresas": "Tejido productivo: Metalmecánica liviana, BPO, biotecnología, café especial y servicios de conocimiento.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 150 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "risaralda",
        "dcode": "66",
        "tipo": "departamento_colombia",
        "nombre": "Risaralda (Modalidad Virtual SNIES)",
        "subtitulo": "Centro Logístico del Eje Cafetero & Servicios",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            4.8133,
            -75.6961
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Logística intermodal, confección, comercio mayorista y servicios de salud especializada.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "tolima",
        "dcode": "73",
        "tipo": "departamento_colombia",
        "nombre": "Tolima (Modalidad Virtual SNIES)",
        "subtitulo": "Eje Arrocero & Encrucijada Vial de Colombia",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            4.4389,
            -75.2322
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Agroindustria de arroz, café, textiles, confección y nodo logístico del Túnel de La Línea.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "huila",
        "dcode": "41",
        "tipo": "departamento_colombia",
        "nombre": "Huila (Modalidad Virtual SNIES)",
        "subtitulo": "Primer Productor Nacional de Café & Piscicultura",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            2.9273,
            -75.2819
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Cafés especiales de origen, piscicultura de tilapia en Betania, fruticultura y turismo arqueológico.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "cauca",
        "dcode": "19",
        "tipo": "departamento_colombia",
        "nombre": "Cauca (Modalidad Virtual SNIES)",
        "subtitulo": "Agroindustria del Café & Región Multicultural",
        "programas": "1 Programas Virtuales",
        "universidades": "1 IES con Sede Central",
        "porcentaje": "2.27% Oferta Virtual Nal.",
        "coords": [
            2.4448,
            -76.6147
        ],
        "destacado": false,
        "ies_detalle": "FUNDACION UNIVERSITARIA DE POPAYAN (147 cr/9 sem)",
        "empresas": "Tejido productivo: Agroindustria de caña panelera, café, piscicultura, turismo colonial y empresas cooperativas.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 147 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "cesar",
        "dcode": "20",
        "tipo": "departamento_colombia",
        "nombre": "Cesar (Modalidad Virtual SNIES)",
        "subtitulo": "Valle de Upar & Transición Minero-Energética",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            10.4631,
            -73.2532
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Sector ganadero y lechero, palma de aceite, transición de minería de carbón y turismo cultural vallenato.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "magdalena",
        "dcode": "47",
        "tipo": "departamento_colombia",
        "nombre": "Magdalena (Modalidad Virtual SNIES)",
        "subtitulo": "Distrito Turístico, Portuario & Bananero",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            11.2408,
            -74.199
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Puerto de aguas profundas, clúster de banano y palma africana, turismo de playa y ecoturismo en Sierra Nevada.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "meta",
        "dcode": "50",
        "tipo": "departamento_colombia",
        "nombre": "Meta (Modalidad Virtual SNIES)",
        "subtitulo": "Puerta del Llano & Agroindustria de la Orinoquía",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            4.142,
            -73.6266
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Petróleo, gas, palma de aceite, ganadería extensiva, soya, arroz y servicios de transporte de carga.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "sucre",
        "dcode": "70",
        "tipo": "departamento_colombia",
        "nombre": "Sucre (Modalidad Virtual SNIES)",
        "subtitulo": "Sabana & Golfo de Morrosquillo",
        "programas": "1 Programas Virtuales",
        "universidades": "1 IES con Sede Central",
        "porcentaje": "2.27% Oferta Virtual Nal.",
        "coords": [
            9.3047,
            -75.3978
        ],
        "destacado": false,
        "ies_detalle": "CORPORACION UNIVERSITARIA DEL CARIBE - CECAR (151 cr/9 sem)",
        "empresas": "Tejido productivo: Ganadería doble propósito, sector porcícola, turismo en playas de Coveñas y Tolú, y tabaco.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 151 créditos y 9.0 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "casanare",
        "dcode": "85",
        "tipo": "departamento_colombia",
        "nombre": "Casanare (Modalidad Virtual SNIES)",
        "subtitulo": "Capital Petrolera & Agroindustrial de los Llanos",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            5.3377,
            -72.3959
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Explotación de hidrocarburos, agroindustria arrocera mecanizada, ganadería y palma de aceite.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "putumayo",
        "dcode": "86",
        "tipo": "departamento_colombia",
        "nombre": "Putumayo (Modalidad Virtual SNIES)",
        "subtitulo": "Polo Petrolero & Puerta Amazónica del Sur",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            1.1488,
            -76.6477
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Hidrocarburos, pimienta negra amazónica, palmito, piscicultura y turismo de cascadas.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "arauca",
        "dcode": "81",
        "tipo": "departamento_colombia",
        "nombre": "Arauca (Modalidad Virtual SNIES)",
        "subtitulo": "Llanura Petrolera & Ganadería Fronteriza",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            7.0847,
            -70.7591
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Extracción de petróleo (Caño Limón), ganadería bovina, cacao criollo y comercio de frontera.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "amazonas",
        "dcode": "91",
        "tipo": "departamento_colombia",
        "nombre": "Amazonas (Modalidad Virtual SNIES)",
        "subtitulo": "Pulmón del Mundo & Triple Frontera",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            -4.2153,
            -69.9406
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Ecoturismo internacional, investigación en biodiversidad, artesanías indígenas y comercio tri-fronterizo.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "guaviare",
        "dcode": "95",
        "tipo": "departamento_colombia",
        "nombre": "Guaviare (Modalidad Virtual SNIES)",
        "subtitulo": "Puerta a la Serranía de Chiribiquete",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            2.5729,
            -72.6459
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Ecoturismo arqueológico, caucho natural, productos no maderables del bosque y ganadería sostenible.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "guainia",
        "dcode": "94",
        "tipo": "departamento_colombia",
        "nombre": "Guainía (Modalidad Virtual SNIES)",
        "subtitulo": "Tierra de Muchas Aguas & Cerros de Mavecure",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            3.8653,
            -67.9239
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Ecoturismo de naturaleza, pesca ornamental, minería aluvial y preservación ecológica indígena.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "vaupes",
        "dcode": "97",
        "tipo": "departamento_colombia",
        "nombre": "Vaupés (Modalidad Virtual SNIES)",
        "subtitulo": "Selva Amazónica & Culturas Ancestrales",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            1.1983,
            -70.1733
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Artesanías ancestrales, aprovechamiento forestal certificado y bioeconomía comunitaria.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    },
    {
        "id": "vichada",
        "dcode": "99",
        "tipo": "departamento_colombia",
        "nombre": "Vichada (Modalidad Virtual SNIES)",
        "subtitulo": "Frontera Forestal & Altillanura Colombiana",
        "programas": "Región Receptora Virtual",
        "universidades": "Cobertura Virtual Total",
        "porcentaje": "Área de Expansión TO",
        "coords": [
            6.189,
            -67.4859
        ],
        "destacado": false,
        "ies_detalle": "Región receptora de educación virtual: estudiantes matriculados en programas virtuales nacionales del SNIES con cobertura territorial.",
        "empresas": "Tejido productivo: Plantaciones forestales comerciales, caucho, acacia, ganadería y producción de granos en la altillanura.",
        "demanda": "Acceso a educación superior flexible y de alta calidad sin barreras de desplazamiento geográfico.",
        "densidad": "Estándar virtual SNIES: 145 créditos y 8.5 semestres de duración.",
        "to_ventaja": "La Modalidad Virtual de la TO garantiza el mismo plan de estudios de 144 créditos y 8 semestres de la presencial, con plataforma LMS Moodle avanzada, simuladores de negocios y acompañamiento tutorial sincrónico y asincrónico."
    }
];

// ==========================================
// CONTROLADOR GEOESPACIAL: DEPARTAMENTOS Y MUNICIPIOS (SNIES - MEN)
// ==========================================
window._currentGeoMode = 'presencial';
window._geoChipFilter = 'all'; // 'santander', 'colombia', 'all'
window._leafletMapInstance = null;
window._leafletMarkers = [];
window._geoMarkerMap = {};
window._activeGeoNodeId = null;
window._colombiaGeoLayer = null;

// Inicializador robusto con reintentos para mapa Leaflet
window.c2Init = function() {
    const mapEl = document.getElementById('toGeoMap') || document.getElementById('mapaColombia');
    if (!mapEl) {
        return;
    }

    if (typeof L === 'undefined') {
        window._c2Retries = (window._c2Retries || 0) + 1;
        if (window._c2Retries < 25) {
            setTimeout(window.c2Init, 200);
        }
        return;
    }

    if (window._leafletMapInstance) {
        try {
            window._leafletMapInstance.remove();
        } catch(e) {}
        window._leafletMapInstance = null;
    }

    // Instanciar mapa centrado en el croquis de Colombia
    window._leafletMapInstance = L.map(mapEl, {
        center: [4.5709, -73.6500],
        zoom: 5.6,
        minZoom: 4.8,
        maxZoom: 16,
        scrollWheelZoom: true
    });

    // Capa base limpia y profesional
    const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB &copy; OpenStreetMap &copy; SNIES - MEN Colombia',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(window._leafletMapInstance);

    cartoLayer.on('tileerror', function() {
        if (!window._osmFallbackActive) {
            window._osmFallbackActive = true;
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap &copy; SNIES - MEN'
            }).addTo(window._leafletMapInstance);
        }
    });

    // Dibuja el croquis oficial de Colombia y las 33 entidades territoriales
    window._renderColombiaDepartamentos();

    // Renderizar chips y marcadores
    window.renderMunicipioChips(window._currentGeoMode);
    window.renderGeoMarkers(window._currentGeoMode);

    // Panel lateral inicial limpio
    window.renderInitialSidePanel(window._currentGeoMode);

    [100, 300, 600, 1200].forEach(delay => {
        setTimeout(() => {
            if (window._leafletMapInstance) {
                window._leafletMapInstance.invalidateSize(true);
            }
        }, delay);
    });
};

// Dibuja el croquis oficial de Colombia con interacción total para los 33 departamentos
window._renderColombiaDepartamentos = function() {
    if (!window._leafletMapInstance || !window.COLOMBIA_GEOJSON || typeof L === 'undefined') return;

    if (window._colombiaGeoLayer) {
        window._leafletMapInstance.removeLayer(window._colombiaGeoLayer);
        window._colombiaGeoLayer = null;
    }

    window._colombiaGeoLayer = L.geoJSON(window.COLOMBIA_GEOJSON, {
        style: function(feature) {
            const nom = (feature.properties && feature.properties.nombre) ? feature.properties.nombre.toUpperCase() : '';
            const isSantander = nom.includes('SANTANDER') && !nom.includes('NORTE');
            return {
                color: isSantander ? '#F39200' : '#475569',
                weight: isSantander ? 2.8 : 1.2,
                opacity: 0.95,
                fillColor: isSantander ? '#F39200' : '#E2E8F0',
                fillOpacity: isSantander ? 0.38 : 0.15,
                dashArray: isSantander ? '' : '3, 3'
            };
        },
        onEachFeature: function(feature, layer) {
            const props = feature.properties || {};
            const nom = props.nombre || '';
            const dcode = props.dpto || '';
            const isSantander = nom.toUpperCase().includes('SANTANDER') && !nom.toUpperCase().includes('NORTE');

            const mode = window._currentGeoMode || 'presencial';
            const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
            const matchingNode = nodes.find(n => n.dcode === dcode || (n.nombre && n.nombre.toUpperCase().includes(nom.toUpperCase())));

            const progCount = matchingNode ? matchingNode.programas.split(' ')[0] : '0';

            const tooltipHtml = isSantander 
                ? `<strong>${nom}</strong><br><span style="color:#D97F00; font-weight:800;">Sede Principal TO &bull; 18 Programas SNIES</span>`
                : `<strong>${nom}</strong><br><span style="color:#0F172A; font-weight:700;">SNIES: ${progCount} Programas</span><br><span style="font-size:0.65rem; color:#64748B;">Clic para ver datos oficiales MEN</span>`;

            layer.bindTooltip(tooltipHtml, {
                sticky: true,
                direction: 'top',
                className: 'custom-geo-tooltip'
            });

            layer.on('mouseover', function() {
                if (!isSantander) {
                    layer.setStyle({
                        weight: 2.2,
                        color: '#F39200',
                        fillColor: '#CBD5E1',
                        fillOpacity: 0.45
                    });
                }
            });

            layer.on('mouseout', function() {
                if (window._colombiaGeoLayer) {
                    window._colombiaGeoLayer.resetStyle(layer);
                }
            });

            // CLIC EN CUALQUIER DEPARTAMENTO DE COLOMBIA
            layer.on('click', function(e) {
                if (isSantander) {
                    window.setMapView('santander');
                    window.selectGeoNode('bga', window._currentGeoMode);
                } else if (matchingNode) {
                    window.selectGeoNode(matchingNode.id, window._currentGeoMode);
                }
            });
        }
    }).addTo(window._leafletMapInstance);
};

// Control de encuadre cartográfico
window.setMapView = function(target) {
    if (!window._leafletMapInstance) return;
    const btnNac = document.getElementById('btnViewNacional');
    const btnSan = document.getElementById('btnViewSantander');

    if (target === 'colombia') {
        window._leafletMapInstance.setView([4.5709, -73.6500], 5.6);
        if (btnNac) { btnNac.style.background = '#F39200'; btnNac.style.color = '#FFFFFF'; }
        if (btnSan) { btnSan.style.background = '#334155'; btnSan.style.color = '#FFFFFF'; }
    } else {
        window._leafletMapInstance.setView([7.0600, -73.1200], 9.8);
        if (btnSan) { btnSan.style.background = '#F39200'; btnSan.style.color = '#FFFFFF'; }
        if (btnNac) { btnNac.style.background = '#334155'; btnNac.style.color = '#FFFFFF'; }
    }
};

window.switchGeoMode = function(mode) {
    window._currentGeoMode = mode;
    const btnPre = document.getElementById('btnGeoPresencial');
    const btnVir = document.getElementById('btnGeoVirtual');
    const statusText = document.getElementById('mapStatusText');

    if (window._leafletMapInstance) {
        window._leafletMapInstance.closePopup();
    }
    window._activeGeoNodeId = null;

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
        if (statusText) statusText.innerText = 'Croquis Colombia: 245 Programas Presenciales SNIES en 26 Entidades Territoriales';
        if (window._leafletMapInstance) {
            window._leafletMapInstance.setView([4.5709, -73.6500], 5.6);
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
        if (statusText) statusText.innerText = 'Croquis Colombia: 44 Programas Virtuales SNIES & Cobertura en 32 Departamentos';
        if (window._leafletMapInstance) {
            window._leafletMapInstance.setView([4.5709, -73.6500], 5.6);
        }
    }

    window._renderColombiaDepartamentos();
    window.renderMunicipioChips(mode);
    window.renderGeoMarkers(mode);
    window.renderInitialSidePanel(mode);
};

window.setGeoChipFilter = function(filter) {
    window._geoChipFilter = filter;
    window.renderMunicipioChips(window._currentGeoMode);
};

window.renderMunicipioChips = function(mode) {
    const chipsContainer = document.getElementById('geoMunicipiosChips');
    if (!chipsContainer) return;

    const allNodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const currentFilter = window._geoChipFilter || 'all';

    let filteredNodes = allNodes;
    if (currentFilter === 'santander') {
        filteredNodes = allNodes.filter(n => n.tipo === 'municipio_santander' || n.id === 'santander');
    } else if (currentFilter === 'colombia') {
        filteredNodes = allNodes.filter(n => n.tipo === 'departamento_colombia');
    }

    const filterTabsHtml = `
        <div style="display:flex; gap:6px; margin-bottom:8px; width:100%; border-bottom:1px solid #E2E8F0; padding-bottom:6px;">
            <button onclick="window.setGeoChipFilter('all')" style="background:${currentFilter==='all'?'#1A1A1B':'#F1F5F9'}; color:${currentFilter==='all'?'#FFFFFF':'#475569'}; border:none; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
                Todos (${allNodes.length})
            </button>
            <button onclick="window.setGeoChipFilter('santander')" style="background:${currentFilter==='santander'?'#F39200':'#F1F5F9'}; color:${currentFilter==='santander'?'#FFFFFF':'#475569'}; border:none; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
                Santander & AMB (6)
            </button>
            <button onclick="window.setGeoChipFilter('colombia')" style="background:${currentFilter==='colombia'?'#1A1A1B':'#F1F5F9'}; color:${currentFilter==='colombia'?'#FFFFFF':'#475569'}; border:none; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
                Departamentos Colombia (${allNodes.filter(n=>n.tipo==='departamento_colombia').length})
            </button>
        </div>
    `;

    const chipsHtml = filteredNodes.map(node => {
        const isSantanderNode = node.tipo === 'municipio_santander' || node.id === 'santander';
        const progCount = node.programas.split(' ')[0];
        const isActive = window._activeGeoNodeId === node.id;
        return `
            <button 
                id="chip-${node.id}" 
                onclick="window.selectGeoNode('${node.id}', '${mode}')"
                style="background:${isActive ? '#FFF3E0' : '#FFFFFF'}; border:1px solid ${isActive ? '#F39200' : '#CBD5E1'}; padding:5px 10px; border-radius:16px; font-family:'Montserrat',sans-serif; font-size:0.72rem; font-weight:700; color:#1A1A1B; cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s ease; box-shadow:0 1px 2px rgba(0,0,0,0.04); margin-bottom:4px;"
                onmouseover="if(window._activeGeoNodeId !== '${node.id}') this.style.borderColor='#F39200'"
                onmouseout="if(window._activeGeoNodeId !== '${node.id}') this.style.borderColor='#CBD5E1'"
            >
                <i class="fas fa-map-marker-alt" style="color:${isSantanderNode ? '#F39200' : '#475569'}; font-size:0.7rem;"></i>
                <span>${node.nombre.split(' (')[0]}</span>
                <span style="background:${isSantanderNode ? 'rgba(243,146,0,0.18)' : '#F1F5F9'}; color:${isSantanderNode ? '#D97F00' : '#334155'}; padding:1px 5px; border-radius:8px; font-size:0.65rem; font-weight:800;">
                    ${progCount}
                </span>
            </button>
        `;
    }).join('');

    chipsContainer.innerHTML = filterTabsHtml + '<div style="display:flex; flex-wrap:wrap; gap:5px; max-height:120px; overflow-y:auto; padding:2px;">' + chipsHtml + '</div>';
};

window.renderGeoMarkers = function(mode) {
    if (!window._leafletMapInstance || typeof L === 'undefined') return;

    window._leafletMarkers.forEach(m => window._leafletMapInstance.removeLayer(m));
    window._leafletMarkers = [];
    window._geoMarkerMap = {};

    const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;

    nodes.forEach(node => {
        const isSantander = (node.dcode === '68' || node.id === 'santander' || node.tipo === 'municipio_santander');
        const marker = L.circleMarker(node.coords, {
            radius: node.destacado ? 10 : (isSantander ? 8 : 6),
            fillColor: node.destacado ? '#F39200' : (isSantander ? '#D97F00' : '#1E293B'),
            color: '#FFFFFF',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.95
        }).addTo(window._leafletMapInstance);

        marker.bindTooltip(`${node.nombre.split(' (')[0]} &bull; ${node.programas.split(' ')[0]} Prog`, {
            direction: 'top',
            offset: [0, -8]
        });

        marker.on('click', () => {
            window.selectGeoNode(node.id, mode);
        });

        const popupContent = `
            <div style="font-family:'Montserrat',sans-serif; min-width:275px; padding:4px 2px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #F39200; padding-bottom:6px; margin-bottom:8px;">
                    <div>
                        <strong style="color:#1A1A1B; font-size:0.9rem; display:block; line-height:1.2;">${node.nombre}</strong>
                        <span style="font-size:0.68rem; color:#64748B;">${node.subtitulo}</span>
                    </div>
                    <span style="background:#1A1A1B; color:#F39200; font-size:0.62rem; padding:2px 6px; border-radius:4px; font-weight:800; white-space:nowrap; margin-left:6px;">SNIES &bull; MEN</span>
                </div>

                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:6px; margin-bottom:8px;">
                    <div style="background:#FFF3E0; border:1px solid #FFE0B2; padding:5px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.56rem; color:#D97F00; text-transform:uppercase; font-weight:800;">Programas</span>
                        <strong style="color:#1A1A1B; font-size:0.9rem;">${node.programas.split(' ')[0]}</strong>
                    </div>
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:5px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.56rem; color:#166534; text-transform:uppercase; font-weight:800;">% Oferta</span>
                        <strong style="color:#166534; font-size:0.8rem;">${node.porcentaje.split(' ')[0]}</strong>
                    </div>
                    <div style="background:#F1F5F9; border:1px solid #CBD5E1; padding:5px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.56rem; color:#475569; text-transform:uppercase; font-weight:800;">IES</span>
                        <strong style="color:#0F172A; font-size:0.8rem;">${node.universidades.split(' ')[0]}</strong>
                    </div>
                </div>

                <div style="background:#F8FAFC; padding:6px 8px; border-radius:6px; font-size:0.72rem; color:#334155; margin-bottom:6px; border-left:3px solid #F39200; max-height:80px; overflow-y:auto;">
                    <strong style="color:#1A1A1B; font-size:0.68rem; text-transform:uppercase;">Oferta SNIES:</strong><br>
                    <span>${node.ies_detalle}</span>
                </div>

                <div style="font-size:0.7rem; color:#475569; margin-bottom:6px; line-height:1.35;">
                    <i class="fas fa-industry" style="color:#F39200;"></i> ${node.empresas}
                </div>

                <div style="background:#FFF9F2; border:1px solid #F39200; padding:4px 6px; border-radius:4px; text-align:center;">
                    <span style="font-size:0.68rem; color:#D97F00; font-weight:700;">
                        <i class="fas fa-check-circle"></i> Ficha técnica oficial desplegada en panel lateral
                    </span>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 320,
            autoPan: true,
            autoPanPaddingTopLeft: [25, 45],
            autoPanPaddingBottomRight: [25, 25],
            offset: [0, -6]
        });

        window._leafletMarkers.push(marker);
        window._geoMarkerMap[node.id] = marker;
    });
};

window.selectGeoNode = function(nodeId, mode) {
    window._activeGeoNodeId = nodeId;
    const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    if (window._leafletMapInstance) {
        const isMuni = node.tipo === 'municipio_santander';
        const targetZoom = isMuni ? 12 : 7.2;
        const latOffset = isMuni ? 0.012 : 0.45;
        window._leafletMapInstance.setView([node.coords[0] + latOffset, node.coords[1]], targetZoom);
    }

    if (window._geoMarkerMap[nodeId]) {
        setTimeout(() => {
            if (window._geoMarkerMap[nodeId]) {
                window._geoMarkerMap[nodeId].openPopup();
            }
        }, 150);
    }

    nodes.forEach(n => {
        const el = document.getElementById(`chip-${n.id}`);
        if (el) {
            if (n.id === nodeId) {
                el.style.background = '#FFF3E0';
                el.style.borderColor = '#F39200';
                el.style.boxShadow = '0 0 0 2px rgba(243,146,0,0.3)';
            } else {
                el.style.background = '#FFFFFF';
                el.style.borderColor = '#CBD5E1';
                el.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)';
            }
        }
    });

    window.updateSidePanel(node, mode);
};

window.renderInitialSidePanel = function(mode) {
    window._activeGeoNodeId = null;
    const title = document.getElementById('geoDetailTitle');
    const subtitle = document.getElementById('geoDetailSubtitle');
    const content = document.getElementById('geoDetailContent');
    const footer = document.getElementById('geoDetailFooter');

    if (!title || !content) return;

    if (mode === 'presencial') {
        title.innerText = 'Colombia & Santander: Oferta Presencial SNIES';
        if (subtitle) subtitle.innerText = '245 Programas en Colombia &bull; 18 en Santander (Sede Principal TO)';

        content.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
                <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                        <i class="fas fa-building"></i> Colombia
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B;">245</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Programas SNIES</span>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                        <i class="fas fa-map-marker-alt"></i> Santander
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#166534;">18</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">7,35% Oferta Nal.</span>
                </div>
                <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                        <i class="fas fa-award"></i> Estándar TO
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">144</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Créditos / 8 Sem.</span>
                </div>
            </div>

            <div style="background:#FFF9F2; border:1.5px dashed #F39200; border-radius:8px; padding:12px 14px; margin-bottom:12px; text-align:center;">
                <div style="color:#D97F00; font-size:1.1rem; margin-bottom:4px;"><i class="fas fa-hand-pointer"></i></div>
                <strong style="color:#1A1A1B; font-size:0.82rem; display:block;">Interacción Cartográfica Total SNIES - MEN</strong>
                <p style="margin:4px 0 0; color:#4B5563; font-size:0.75rem; line-height:1.4;">
                    Haga <strong>clic en cualquier departamento de Colombia o municipio del mapa</strong> para desplegar la cantidad oficial de programas SNIES, universidades oferentes, créditos y tejido empresarial vigente según el Ministerio de Educación Nacional.
                </p>
            </div>

            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px; margin-bottom:6px;">
                    <i class="fas fa-table" style="color:#F39200;"></i> Distribución Nacional SNIES (Tabla 5 DM):
                </span>
                <ul style="margin:0; padding-left:18px; font-size:0.75rem; color:#334155; line-height:1.55;">
                    <li><strong>Bogotá D.C.:</strong> 44 a 55 Programas (17.96% - 22.45%) &bull; 52 IES.</li>
                    <li><strong>Antioquia:</strong> 24 a 32 Programas (13.06%) &bull; 22 IES.</li>
                    <li><strong>Valle del Cauca:</strong> 27 a 28 Programas (11.43%) &bull; 19 IES.</li>
                    <li><strong>Santander (Sede TO):</strong> 18 Programas (7.35%) &bull; 12 IES (11 en Bucaramanga).</li>
                    <li><strong>Bolívar:</strong> 12 Programas (4.90%) &bull; 11 IES.</li>
                    <li><strong>Atlántico:</strong> 11 a 15 Programas (6.12%) &bull; 11 IES.</li>
                    <li><strong>Resto de Colombia:</strong> 62 Programas distribuidos en 20 departamentos.</li>
                </ul>
            </div>

            <div style="background:#F8FAFC; border-left:3.5px solid #F39200; padding:10px 12px; border-radius:4px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#1A1A1B;">Corporación Escuela Tecnológica del Oriente (TO):</span>
                <p style="margin:4px 0 0; font-size:0.75rem; color:#475569; line-height:1.45;">
                    Sede Principal Bucaramanga (Calle 35 # 21-42). Única oferta estructurada a 144 créditos y 8 semestres con titulación profesional inclusiva Administrador(a) de Empresas y articulación directa entre modalidades presencial y virtual.
                </p>
            </div>
        `;

        if (footer) {
            footer.innerHTML = `<strong>Fuente Oficial:</strong> SNIES - Ministerio de Educación Nacional de Colombia (Tabla 2 y Tabla 5 del Documento Maestro radicado).`;
        }
    } else {
        title.innerText = 'Colombia: Oferta Nacional Virtual SNIES';
        if (subtitle) subtitle.innerText = '44 Programas en Colombia &bull; Cobertura en los 32 Departamentos';

        content.innerHTML = `
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
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#166534;">245</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Programas Base</span>
                </div>
                <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                        <i class="fas fa-globe-americas"></i> Cobertura
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">32</span>
                    <span style="font-size:0.65rem; color:#6B6B6B; display:block;">Departamentos</span>
                </div>
            </div>

            <div style="background:#FFF9F2; border:1.5px dashed #F39200; border-radius:8px; padding:12px 14px; margin-bottom:12px; text-align:center;">
                <div style="color:#D97F00; font-size:1.1rem; margin-bottom:4px;"><i class="fas fa-hand-pointer"></i></div>
                <strong style="color:#1A1A1B; font-size:0.82rem; display:block;">Interacción Departamental SNIES</strong>
                <p style="margin:4px 0 0; color:#4B5563; font-size:0.75rem; line-height:1.4;">
                    Haga <strong>clic en cualquier departamento</strong> para explorar las instituciones líderes virtuales del SNIES (UNAD, Politécnico Grancolombiano, UNIMINUTO, Compensar, UDI, UTS, etc.).
                </p>
            </div>

            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px; margin-bottom:6px;">
                    <i class="fas fa-table" style="color:#F39200;"></i> Comparativa Virtual SNIES (Tabla 7 DM):
                </span>
                <ul style="margin:0; padding-left:18px; font-size:0.75rem; color:#334155; line-height:1.55;">
                    <li><strong>Bogotá D.C.:</strong> 23 programas virtuales (Politécnico, UNAD, UNIMINUTO, EAN).</li>
                    <li><strong>Antioquia:</strong> 7 programas virtuales (IU Digital, CEIPA, Remington).</li>
                    <li><strong>Santander:</strong> 3 programas virtuales (UDI 157 cr, UTS 175 cr, UNAB 160 cr).</li>
                    <li><strong>TO Virtual:</strong> Plan homologado de 144 créditos y 8 semestres ($3.576.000).</li>
                </ul>
            </div>
        `;

        if (footer) {
            footer.innerHTML = `<strong>Fuente Oficial:</strong> SNIES - Ministerio de Educación Nacional de Colombia (Tabla 7 del Documento Maestro radicado).`;
        }
    }
};

window.updateSidePanel = function(node, mode) {
    const title = document.getElementById('geoDetailTitle');
    const subtitle = document.getElementById('geoDetailSubtitle');
    const content = document.getElementById('geoDetailContent');
    const footer = document.getElementById('geoDetailFooter');

    if (!title || !content) return;

    title.innerText = node.nombre;
    if (subtitle) subtitle.innerText = node.subtitulo;

    const isSantander = (node.dcode === '68' || node.id === 'santander' || node.tipo === 'municipio_santander');

    content.innerHTML = `
        <div style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
            <span style="background:#0F172A; color:#F39200; font-size:0.65rem; padding:3px 8px; border-radius:4px; font-weight:800;">
                <i class="fas fa-certificate"></i> SNIES &bull; MEN
            </span>
            <button onclick="window.resetGeoSelection('${mode}')" style="background:#FFFFFF; border:1px solid #D1D1D1; color:#6B6B6B; font-size:0.72rem; padding:4px 10px; border-radius:14px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s ease;">
                <i class="fas fa-undo" style="color:#F39200;"></i> Ver Resumen General MEN
            </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
            <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                    <i class="fas fa-graduation-cap"></i> Programas MEN
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B;">${node.programas.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#6B6B6B; display:block;">${node.programas.includes('Directos') ? 'Directos' : 'Registrados'}</span>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                    <i class="fas fa-percentage"></i> % Oferta
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#166534;">${node.porcentaje.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#6B6B6B; display:block;">${node.tipo === 'municipio_santander' ? 'Santander' : 'Nacional'}</span>
            </div>
            <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                    <i class="fas fa-university"></i> Instituciones
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#0F172A;">${node.universidades.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#6B6B6B; display:block;">IES Oficiales</span>
            </div>
        </div>

        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#F39200; display:flex; align-items:center; gap:5px;">
                    <i class="fas fa-university"></i> Instituciones &amp; Oferta IES (${node.universidades})
                </span>
                <span style="font-size:0.68rem; background:#F4F4F4; color:#1A1A1B; padding:2px 6px; border-radius:4px; font-weight:700;">SNIES / MEN</span>
            </div>
            <p style="margin:2px 0 0; color:#1A1A1B; font-size:0.78rem; line-height:1.45;">${node.ies_detalle}</p>
        </div>

        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-briefcase" style="color:#F39200;"></i> Tejido Empresarial &amp; Demanda Productiva
            </span>
            <p style="margin:3px 0 0; color:#1A1A1B; font-weight:600; font-size:0.8rem; line-height:1.4;">${node.empresas}</p>
            <p style="margin:2px 0 0; color:#6B6B6B; font-size:0.75rem;">${node.densidad}</p>
        </div>

        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#1A1A1B; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-chart-pie" style="color:#2ECC71;"></i> Perfil de Pertinencia Laboral
            </span>
            <p style="margin:3px 0 0; font-size:0.78rem; color:#4B5563; line-height:1.45;">${node.demanda}</p>
        </div>

        <div style="background:#FFF9F2; border-left:4px solid #F39200; padding:10px 12px; border-radius:6px; box-shadow:0 1px 4px rgba(243,146,0,0.08);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-award"></i> Propuesta Diferencial TO
            </span>
            <p style="margin:3px 0 0; font-size:0.78rem; color:#1A1A1B; font-weight:500; line-height:1.45;">${node.to_ventaja}</p>
        </div>
    `;

    if (footer) {
        if (node.tipo === 'municipio_santander') {
            footer.innerHTML = `<strong>Santander (18 programas &bull; 7,35% del país):</strong> La propuesta de la <strong>TO</strong> es la única con articulación dual directa a 144 créditos y 8 semestres con titulación inclusiva.`;
        } else {
            footer.innerHTML = `<strong>Cobertura Nacional SNIES (245 programas presenciales &bull; 44 virtuales):</strong> Bajo el Registro Único, la <strong>TO</strong> amplía cobertura a 32 departamentos con unicidad curricular y estándares de alta calidad.`;
        }
    }
};

window.resetGeoSelection = function(mode) {
    if (window._leafletMapInstance) {
        window._leafletMapInstance.closePopup();
        window._leafletMapInstance.setView([4.5709, -73.6500], 5.6);
    }
    const btnNac = document.getElementById('btnViewNacional');
    const btnSan = document.getElementById('btnViewSantander');
    if (btnNac) { btnNac.style.background = '#F39200'; btnNac.style.color = '#FFFFFF'; }
    if (btnSan) { btnSan.style.background = '#334155'; btnSan.style.color = '#FFFFFF'; }
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

