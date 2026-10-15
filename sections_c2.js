/* =========================================================
   CONDICIÓN 2 – JUSTIFICACIÓN DEL PROGRAMA CON MAPA GEORREFERENCIADO
   Administración de Empresas · Registro Único (Presencial & Virtual) · CETO
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
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #E8E8E8; padding-bottom:14px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-globe-americas" style="color:#F39200; margin-right:6px;"></i> Observatorio Geoespacial de Demanda y Oferta
            </h4>
            <p style="color:#6B6B6B; font-size:0.82rem; margin:2px 0 0;">
                Haga clic en los pines para explorar el tejido empresarial y la oferta del programa según modalidad.
            </p>
        </div>
        
        <!-- SWITCH DE MODALIDADES -->
        <div style="display:flex; background:#F4F4F4; padding:4px; border-radius:30px; gap:4px; border:1px solid #D1D1D1;">
            <button id="btnGeoPresencial" onclick="window.switchGeoMode('presencial')" style="background:#F39200; color:#FFFFFF; border:none; padding:8px 18px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease; box-shadow:0 2px 6px rgba(243,146,0,0.3);">
                <i class="fas fa-building"></i> 🏢 Modalidad Presencial (Santander / AMB)
            </button>
            <button id="btnGeoVirtual" onclick="window.switchGeoMode('virtual')" style="background:transparent; color:#6B6B6B; border:none; padding:8px 18px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease;">
                <i class="fas fa-wifi"></i> 🌐 Modalidad Virtual (Nacional / SNIES)
            </button>
        </div>
    </div>

    <!-- CONTENEDOR GRID: MAPA + PANEL DETALLE -->
    <div style="display:grid; grid-template-columns: 1fr 340px; gap:18px;">
        
        <!-- MAPA CANVAS LEAFLET -->
        <div style="position:relative; border-radius:10px; overflow:hidden; border:1px solid #D1D1D1; box-shadow:inset 0 0 10px rgba(0,0,0,0.05);">
            <div id="cetoGeoMap" style="height:520px; width:100%; background:#E5E7EB; z-index:1;"></div>
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
                    Santander cuenta con 18 programas en Administración (7,35% del país). La propuesta de CETO es la única con articulación dual directa a 144 créditos y 8 semestres.
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
                        <tr style="background:#FFF9F2; font-weight:700; color:#F39200;"><td>Santander (Sede CETO)</td><td style="text-align:center;">18</td><td style="text-align:center;">7.35%</td></tr>
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
                        <tr style="background:#FFF9F2; font-weight:700; color:#F39200;"><td>Instituciones Universitarias / Tecnológicas (CETO)</td><td style="text-align:center;">49</td><td style="text-align:center;">20.00%</td></tr>
                        <tr><td>Instituciones Técnicas Profesionales</td><td style="text-align:center; font-weight:700;">24</td><td style="text-align:center;">9.80%</td></tr>
                        <tr style="background:#F4F4F4; font-weight:800;"><td>Total Nacional</td><td style="text-align:center;">245</td><td style="text-align:center;">100.0%</td></tr>
                    </tbody>
                </table>
            </div>
            <p style="font-size:0.75rem; color:#6B6B6B; margin:8px 0 0;">
                El 70,21% de la oferta está en universidades tradicionales. Las instituciones universitarias como la CETO democratizan el acceso con matrículas asequibles ($3.576.000) y alta pertinencia técnica.
            </p>
        </div>

    </div>
</div>

<!-- ========================================== -->
<!-- 3. FACTORES DIFERENCIADORES BENTO GRID -->
<!-- ========================================== -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:22px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin-bottom:16px; display:flex; align-items:center; gap:8px;">
        <i class="fas fa-medal" style="color:#F39200;"></i> Factores Diferenciadores de Administración de Empresas (CETO)
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
`;

// ==========================================
// DATA Y LÓGICA GEOESPACIAL LEAFLET (CONDICIÓN 2)
// ==========================================
window._geoNodesPresencial = [
    {
        id: 'bga',
        nombre: 'Bucaramanga (Sede Principal)',
        subtitulo: 'Distrito Capital · Tejido Empresarial Central',
        coords: [7.1193, -73.1227],
        empresas: '32,450 empresas activas (CCB 2024)',
        demanda: 'Alta demanda en directores comerciales, analistas de datos y gerentes de operaciones.',
        densidad: 'Concentra el 68% de las MiPyMes registradas en el área metropolitana.',
        ceto: 'Sedes A (Calle 35), B y C con aulas multimedia, laboratorios de cómputo y auditorios.',
        destacado: true
    },
    {
        id: 'florida',
        nombre: 'Floridablanca',
        subtitulo: 'Corredor Empresarial & Salud',
        coords: [7.0622, -73.0864],
        empresas: '7,890 empresas activas',
        demanda: 'Sector salud (Zona Franca FOSCAL / ICV), servicios y manufactura dulce.',
        densidad: 'Segunda mayor concentración de unidades productivas metropolitanas.',
        ceto: 'Conexión directa por Metrolínea hacia la sede principal de CETO (15 min).',
        destacado: false
    },
    {
        id: 'giron',
        nombre: 'Girón',
        subtitulo: 'Parque Industrial & Logístico',
        coords: [7.0732, -73.1698],
        empresas: '4,120 empresas y plantas logísticas',
        demanda: 'Logística, transporte de carga, distribución mayorista y bodegaje.',
        densidad: 'Polo logístico con alta demanda de administradores en cadena de suministro.',
        ceto: 'Población con alta necesidad de profesionalización nocturna y flexible.',
        destacado: false
    },
    {
        id: 'piedecuesta',
        nombre: 'Piedecuesta',
        subtitulo: 'Polo Tecnológico & Agroindustrial',
        coords: [6.9886, -73.0494],
        empresas: '3,210 empresas y centros de I+D (ICP Ecopetrol)',
        demanda: 'Biotecnología, agroindustria y servicios de consultoría técnica.',
        densidad: 'Zona de expansión demográfica con creciente población universitaria.',
        ceto: 'Población estudiantil representativa en la matrícula histórica de CETO.',
        destacado: false
    },
    {
        id: 'barranca',
        nombre: 'Barrancabermeja',
        subtitulo: 'Distrito Petroquímico & Portuario',
        coords: [7.0653, -73.8547],
        empresas: '5,600 empresas del sector hidrocarburos y logística fluvial',
        demanda: 'Gestión de proyectos (PMI), contratación estatal y administración de compras.',
        densidad: 'Corredor del Magdalena Medio con alto interés en modalidades flexibles.',
        ceto: 'Convenios de articulación con empresas contratistas de la región.',
        destacado: false
    }
];

window._geoNodesVirtual = [
    {
        id: 'bogota',
        nombre: 'Bogotá D.C. (Nodo Capital)',
        subtitulo: '17.96% Oferta Nacional (44 Programas)',
        coords: [4.6097, -74.0817],
        empresas: '420,000+ empresas activas en Cámara de Comercio de Bogotá',
        demanda: 'Alta receptividad a ofertas de bajo costo y alta calidad como CETO ($3.576.000 vs. $6.5M promedio).',
        cobertura: 'Acceso total a través de la plataforma LMS Moodle y servidores AWS de CETO.',
        destacado: true
    },
    {
        id: 'antioquia',
        nombre: 'Antioquia (Medellín / Regiones)',
        subtitulo: '13.06% Oferta Nacional (32 Programas)',
        coords: [6.2442, -75.5812],
        empresas: 'Ecosistema de innovación, textil y agroexportación.',
        demanda: 'Demanda de formación virtual en subregiones (Oriente, Urabá, Bajo Cauca).',
        cobertura: 'Estudiantes vinculados a semilleros remotos de CETO.',
        destacado: false
    },
    {
        id: 'valle',
        nombre: 'Valle del Cauca (Cali / Buenaventura)',
        subtitulo: '11.43% Oferta Nacional (28 Programas)',
        coords: [3.4516, -76.5320],
        empresas: 'Clúster de bioenergía, logística portuaria y alimentos.',
        demanda: 'Necesidad de titulación profesional para tecnólogos en ejercicio laboral.',
        cobertura: 'Flexibilidad de tutorías sincrónicas nocturnas.',
        destacado: false
    },
    {
        id: 'costa',
        nombre: 'Caribe (Atlántico / Bolívar / Córdoba)',
        subtitulo: '14.69% Oferta Nacional (36 Programas)',
        coords: [10.9685, -74.7813],
        empresas: 'Sector turismo, portuario y comercio exterior.',
        demanda: 'Alta población sin acceso a campus físicos en municipios no capitales.',
        cobertura: 'Ruta de homologación directa desde programas tecnológicos del SENA.',
        destacado: false
    },
    {
        id: 'nororiente',
        nombre: 'Nororiente (Santander / Norte de Santander)',
        subtitulo: '11.43% Oferta Regional (28 Programas)',
        coords: [7.8939, -72.5078],
        empresas: 'Comercio binacional, calzado, confecciones y servicios.',
        demanda: 'Fuerte arraigo y reconocimiento de la marca institucional CETO.',
        cobertura: 'Sinergia de Registro Único con acceso a sedes físicas si se requiere.',
        destacado: true
    }
];

window._currentGeoMode = 'presencial';
window._leafletMapInstance = null;
window._leafletMarkers = [];

window.c2Init = function() {
    const mapContainer = document.getElementById('cetoGeoMap');
    if (!mapContainer) return;

    if (window._leafletMapInstance) {
        window._leafletMapInstance.remove();
        window._leafletMapInstance = null;
    }

    if (typeof L === 'undefined') {
        console.warn('Leaflet no está cargado aún.');
        return;
    }

    // Inicializar Leaflet centrado en Bucaramanga
    window._leafletMapInstance = L.map('cetoGeoMap', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView([7.1193, -73.1227], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors | CETO'
    }).addTo(window._leafletMapInstance);

    // Corregir tamaño del mapa si el modal abrió con display flex/none
    setTimeout(() => {
        if (window._leafletMapInstance) window._leafletMapInstance.invalidateSize();
    }, 200);

    window.renderGeoMarkers(window._currentGeoMode);
};

window.switchGeoMode = function(mode) {
    window._currentGeoMode = mode;
    const btnPre = document.getElementById('btnGeoPresencial');
    const btnVir = document.getElementById('btnGeoVirtual');
    const statusText = document.getElementById('mapStatusText');

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
        if (statusText) statusText.innerText = 'Enfoque: Área Metropolitana de Bucaramanga y Santander';
        if (window._leafletMapInstance) window._leafletMapInstance.flyTo([7.1193, -73.1227], 11);
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
        if (statusText) statusText.innerText = 'Enfoque: Cobertura Nacional y Nodos Departamentales SNIES';
        if (window._leafletMapInstance) window._leafletMapInstance.flyTo([4.5709, -74.2973], 6);
    }

    window.renderGeoMarkers(mode);
};

window.renderGeoMarkers = function(mode) {
    if (!window._leafletMapInstance || typeof L === 'undefined') return;

    // Limpiar marcadores previos
    window._leafletMarkers.forEach(m => window._leafletMapInstance.removeLayer(m));
    window._leafletMarkers = [];

    const nodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;

    nodes.forEach(node => {
        const marker = L.circleMarker(node.coords, {
            radius: node.destacado ? 10 : 7,
            fillColor: node.destacado ? '#F39200' : '#1A1A1B',
            color: '#FFFFFF',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9
        }).addTo(window._leafletMapInstance);

        marker.on('click', () => {
            window.updateSidePanel(node, mode);
        });

        marker.bindPopup(`<b>${node.nombre}</b><br><span style="font-size:0.75rem;color:#666;">${node.subtitulo}</span>`);
        window._leafletMarkers.push(marker);
    });

    // Cargar en el panel lateral el primer nodo
    if (nodes.length > 0) {
        window.updateSidePanel(nodes[0], mode);
    }
};

window.updateSidePanel = function(node, mode) {
    const title = document.getElementById('sideNodeTitle');
    const subtitle = document.getElementById('sideNodeSubtitle');
    const content = document.getElementById('sideNodeContent');
    const footer = document.getElementById('sideNodeFooter');

    if (!title || !content) return;

    title.innerText = node.nombre;
    subtitle.innerText = node.subtitulo;

    if (mode === 'presencial') {
        content.innerHTML = `
            <div style="margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#F39200;">Tejido Empresarial</span>
                <p style="margin:2px 0 0; color:#1A1A1B; font-weight:600;">${node.empresas}</p>
            </div>
            <div style="margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#6B6B6B;">Perfil de Demanda</span>
                <p style="margin:2px 0 0;">${node.demanda}</p>
            </div>
            <div style="margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#6B6B6B;">Densidad Productiva</span>
                <p style="margin:2px 0 0;">${node.densidad}</p>
            </div>
            <div style="background:#FFF9F2; border-left:3px solid #F39200; padding:8px 10px; border-radius:4px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#D97F00;">Infraestructura CETO</span>
                <p style="margin:2px 0 0; font-size:0.78rem;">${node.ceto}</p>
            </div>
        `;
        if (footer) footer.innerText = 'El área metropolitana concentra el 82% del PIB departamental. Los profesionales de CETO se insertan en cadenas comerciales y de servicios.';
    } else {
        content.innerHTML = `
            <div style="margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#F39200;">Ecosistema Laboral</span>
                <p style="margin:2px 0 0; color:#1A1A1B; font-weight:600;">${node.empresas}</p>
            </div>
            <div style="margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#6B6B6B;">Oportunidad de Penetración</span>
                <p style="margin:2px 0 0;">${node.demanda}</p>
            </div>
            <div style="background:#F0FDF4; border-left:3px solid #2ECC71; padding:8px 10px; border-radius:4px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#166534;">Conectividad LMS CETO</span>
                <p style="margin:2px 0 0; font-size:0.78rem;">${node.cobertura}</p>
            </div>
        `;
        if (footer) footer.innerText = 'Bajo el Registro Único, la modalidad virtual amplía la cobertura a 32 departamentos con el mismo estándar de calidad y plan de estudios.';
    }
};
