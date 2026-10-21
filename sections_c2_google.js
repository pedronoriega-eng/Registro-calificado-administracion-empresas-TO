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
                <i class="fas fa-globe-americas" style="color:#F39200;"></i> Condición 2 · Justificación y Pertinencia Multinivel
            </h4>
            <p style="color:#D1D1D1; font-size:0.88rem; margin:0;">
                Estudio integral de pertinencia desde el plano <strong>Internacional</strong>, <strong>Nacional</strong> y <strong>Regional/Local</strong> para el programa de Administración de Empresas en <strong>Registro Calificado Único (Presencial y Virtual)</strong>.
            </p>
        </div>
        <div>
            <span class="tag-legal" style="background:rgba(243,146,0,0.25); color:#F39200; border:1px solid #F39200; font-weight:700; padding:6px 14px; border-radius:20px; font-size:0.8rem;">
                <i class="fas fa-certificate"></i> Decreto 1330 · SNIES · OLE · CCB
            </span>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- BARRA DE NAVEGACIÓN RÁPIDA POR EJES DE PERTINENCIA (PRIMER PLANO EXCLUSIVO)-->
<!-- ========================================================================= -->
<div id="c2-subtabs-bar" style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:12px 14px; margin-bottom:22px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; flex-direction:column; gap:10px;">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span style="font-size:0.78rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; letter-spacing:0.5px; display:flex; align-items:center; gap:8px;">
            <i class="fas fa-compass" style="color:#F39200;"></i> Ejes de Justificación y Pertinencia (Primer Plano):
        </span>
        <span style="font-size:0.72rem; color:#6B7280; font-weight:600;">
            Haga clic en cada eje para proyectarlo en vista exclusiva
        </span>
    </div>
    
    <div style="display:flex; flex-wrap:wrap; gap:8px;">
        <button class="c2-subtab-btn" data-c2-target="c2-eje-1" onclick="window.showC2Section('c2-eje-1')" style="background:#1A1A1B; color:#FFFFFF; border:1.5px solid #F39200; font-size:0.76rem; font-weight:800; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; box-shadow:0 2px 8px rgba(243,146,0,0.25); transition:all 0.2s;">
            <i class="fas fa-globe" style="color:#F39200;"></i> 1. Internacional
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-2" onclick="window.showC2Section('c2-eje-2')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-flag" style="color:#F39200;"></i> 2. Nacional &amp; SNIES
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-3" onclick="window.showC2Section('c2-eje-3')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-map-marked-alt" style="color:#F39200;"></i> 3. Observatorio Geoespacial
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-4" onclick="window.showC2Section('c2-eje-4')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-city" style="color:#F39200;"></i> 4. Regional &amp; Local
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-5" onclick="window.showC2Section('c2-eje-5')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-chart-line" style="color:#F39200;"></i> 5. Demanda &amp; OLE
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-6" onclick="window.showC2Section('c2-eje-6')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-layer-group" style="color:#F39200;"></i> 6. Registro Único (Modalidades)
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-7" onclick="window.showC2Section('c2-eje-7')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-medal" style="color:#F39200;"></i> 7. Factores Diferenciadores
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-8" onclick="window.showC2Section('c2-eje-8')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-chart-bar" style="color:#F39200;"></i> 8. SPADIES &amp; Permanencia
        </button>
        <button class="c2-subtab-btn" data-c2-target="c2-eje-9" onclick="window.showC2Section('c2-eje-9')" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.76rem; font-weight:700; padding:8px 13px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-user-graduate" style="color:#F39200;"></i> 9. Estudio de Egresados (940/44)
        </button>
    </div>
</div>

<!-- ========================================================================= -->
<!-- 1. PERTINENCIA EN EL PLANO INTERNACIONAL (GLOBAL BENCHMARKING & TENDENCIAS) -->
<!-- ========================================================================= -->
<div id="c2-eje-1" class="c2-eje-panel" style="display:block; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #F39200; border-radius:12px; padding:22px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #E8E8E8; padding-bottom:12px;">
        <div>
            <span style="font-size:0.75rem; font-weight:800; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">Eje 1 · Visión Global</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:2px 0 0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-globe" style="color:#F39200;"></i> Pertinencia en el Plano Internacional
            </h4>
        </div>
        <span class="tag-legal" style="background:#FFF9F2; color:#C2410C; border:1px solid #FED7AA; font-weight:800; font-size:0.75rem; padding:4px 10px; border-radius:20px;">
            <i class="fas fa-chart-pie"></i> OCDE · WEF · UNESCO · AACSB
        </span>
    </div>

    <!-- TENDENCIAS GLOBALES Y ORGANISMOS INTERNACIONALES -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:16px; margin-bottom:20px;">
        <div style="background:#F8F9FA; border-left:4px solid #1A1A1B; padding:14px; border-radius:8px;">
            <div style="font-weight:800; font-size:0.88rem; color:#1A1A1B; margin-bottom:4px;">
                <i class="fas fa-chart-line" style="color:#F39200; margin-right:4px;"></i> Foro Económico Mundial (WEF)
            </div>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                El <em>Future of Jobs Report</em> destaca que para el horizonte 2025-2030, las habilidades más demandadas en el ámbito gerencial son: <strong>pensamiento analítico</strong>, <strong>toma de decisiones basada en datos (Big Data/IA)</strong>, <strong>liderazgo e influencia social</strong> y <strong>resiliencia y flexibilidad operativa</strong>.
            </p>
        </div>
        <div style="background:#F8F9FA; border-left:4px solid #F39200; padding:14px; border-radius:8px;">
            <div style="font-weight:800; font-size:0.88rem; color:#1A1A1B; margin-bottom:4px;">
                <i class="fas fa-laptop-code" style="color:#F39200; margin-right:4px;"></i> OCDE: Aceleración de la Virtualidad
            </div>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                Los reportes de la OCDE en América Latina evidencian un <strong>crecimiento del 35%</strong> en la matrícula de programas de ciencias empresariales en modalidades no presenciales y virtuales, permitiendo derribar barreras geográficas y combinar formación de alta calidad con actividad laboral.
            </p>
        </div>
        <div style="background:#F8F9FA; border-left:4px solid #2ECC71; padding:14px; border-radius:8px;">
            <div style="font-weight:800; font-size:0.88rem; color:#1A1A1B; margin-bottom:4px;">
                <i class="fas fa-leaf" style="color:#2ECC71; margin-right:4px;"></i> Estándares Globales ESG y UNESCO
            </div>
            <p style="font-size:0.8rem; color:#4B5563; line-height:1.45; margin:0;">
                La UNESCO y la Clasificación CINE-F 2013 (Campo 0413) exigen programas que articulen la rentabilidad corporativa con la <strong>sostenibilidad ambiental, la responsabilidad social empresarial (RSE)</strong> y la gobernanza ética en mercados internacionales cambiantes.
            </p>
        </div>
    </div>

    <!-- BENCHMARKING DE PROGRAMAS INTERNACIONALES (TABLA OFICIAL DOCUMENTO MAESTRO) -->
    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-university" style="color:#F39200;"></i> Estudio Comparativo de Referentes Internacionales (Documento Maestro Págs. 63-67)
    </h5>
    <div style="overflow-x:auto; margin-bottom:12px; border:1px solid #E8E8E8; border-radius:8px;">
        <table class="tbl" style="width:100%; font-size:0.8rem; margin:0;">
            <thead style="background:#1A1A1B; color:#FFFFFF;">
                <tr>
                    <th style="text-align:left;">País / IES Internacional</th>
                    <th>Programa Académico</th>
                    <th>Duración / Créditos</th>
                    <th style="text-align:left;">Énfasis Formativo y Enfoque</th>
                    <th style="text-align:left;">Convergencia con el Plan TO (144 cr)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="font-weight:700;">Estados Unidos<br><span style="font-size:0.72rem; color:#6B6B6B;">Harvard Business School</span></td>
                    <td>Bachelor in Business Administration</td>
                    <td style="text-align:center;">4 años (8 sem)</td>
                    <td style="font-size:0.76rem;">Toma de decisiones directiva, liderazgo ejecutivo, método del caso y simulación en tiempo real.</td>
                    <td style="font-size:0.76rem; color:#166534;"><i class="fas fa-check"></i> Asignatura Juego Gerencial y Simuladores de Negocios en Semestre 7.</td>
                </tr>
                <tr style="background:#FFF9F2;">
                    <td style="font-weight:700; color:#F39200;">México<br><span style="font-size:0.72rem; color:#6B6B6B;">Tecnológico de Monterrey</span></td>
                    <td>Licenciatura en Administración y Estrategia</td>
                    <td style="text-align:center; font-weight:700;">8 semestres</td>
                    <td style="font-size:0.76rem;">Innovación disruptiva, emprendimiento escalable, transformación digital y entornos de negocio 4.0.</td>
                    <td style="font-size:0.76rem; color:#166534;"><i class="fas fa-check"></i> Compactación curricular a 8 semestres, Big Data (Sem 6) e IA en Negocios (Sem 7).</td>
                </tr>
                <tr>
                    <td style="font-weight:700;">Chile<br><span style="font-size:0.72rem; color:#6B6B6B;">Pontificia Univ. Católica de Chile</span></td>
                    <td>Ingeniería Comercial / Administración</td>
                    <td style="text-align:center;">8 semestres</td>
                    <td style="font-size:0.76rem;">Analítica cuantitativa, finanzas corporativas, gestión estratégica y competitividad en comercio exterior.</td>
                    <td style="font-size:0.76rem; color:#166534;"><i class="fas fa-check"></i> Finanzas Corporativas, Negocios y Gerencia Internacional y E-commerce.</td>
                </tr>
                <tr style="background:#FFF9F2;">
                    <td style="font-weight:700; color:#F39200;">México<br><span style="font-size:0.72rem; color:#6B6B6B;">UNAM (Modalidad Abierta y a Distancia)</span></td>
                    <td>Licenciatura en Administración</td>
                    <td style="text-align:center; font-weight:700;">8 semestres (Registro Único)</td>
                    <td style="font-size:0.76rem;">Modalidad presencial y a distancia con plataforma virtual de aprendizaje continuo y gestión pública/privada.</td>
                    <td style="font-size:0.76rem; color:#166534;"><i class="fas fa-check"></i> Modelo de <strong>Registro Calificado Único</strong> (Presencial y Virtual) con misma malla.</td>
                </tr>
                <tr>
                    <td style="font-weight:700;">Argentina<br><span style="font-size:0.72rem; color:#6B6B6B;">Universidad de Buenos Aires (UBA)</span></td>
                    <td>Licenciatura en Administración</td>
                    <td style="text-align:center;">4.0 años</td>
                    <td style="font-size:0.76rem;">Administración en entornos volátiles, optimización de recursos, economía circular y gestión del talento humano.</td>
                    <td style="font-size:0.76rem; color:#166534;"><i class="fas fa-check"></i> Sistemas Integrados HSEQ, RSE y Sostenibilidad y Gestión del Talento Humano.</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div style="font-size:0.78rem; color:#4B5563; background:#F8F9FA; border-left:3px solid #F39200; padding:8px 12px; border-radius:4px;">
        <strong>Conclusión del Contexto Internacional:</strong> Los programas líderes a nivel mundial han evolucionado hacia planes de <strong>8 semestres</strong> que integran tecnología 4.0, analítica de datos y modalidades virtuales de aprendizaje flexible. La propuesta de renovación de la TO a <strong>144 créditos y 8 semestres</strong> responde exactamente a este estándar global.
    </div>
</div>

<!-- ========================================================================= -->
<!-- 2. PERTINENCIA EN EL PLANO NACIONAL (POLÍTICAS PÚBLICAS & ECOSISTEMA SNIES) -->
<!-- ========================================================================= -->
<div id="c2-eje-2" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #1A1A1B; border-radius:12px; padding:22px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #E8E8E8; padding-bottom:12px;">
        <div>
            <span style="font-size:0.75rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; letter-spacing:0.5px;">Eje 2 · Cobertura y Políticas de País</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:2px 0 0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-flag" style="color:#F39200;"></i> Pertinencia en el Plano Nacional
            </h4>
        </div>
        <span class="tag-legal" style="background:#F4F4F4; color:#1A1A1B; font-weight:800; font-size:0.75rem; padding:4px 10px; border-radius:20px;">
            <i class="fas fa-landmark"></i> PND 2022-2026 · Plan Decenal · SNIES MEN
        </span>
    </div>

    <!-- ARTICULACIÓN CON PLANES Y DIRECTRICES NACIONALES -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:14px; margin-bottom:20px;">
        <div style="background:#FFF9F2; border:1px solid #FED7AA; border-radius:8px; padding:14px;">
            <div style="font-weight:800; font-size:0.85rem; color:#C2410C; margin-bottom:4px;">
                <i class="fas fa-balance-scale"></i> Plan Nacional de Desarrollo (PND 2022-2026)
            </div>
            <p style="font-size:0.78rem; color:#7C2D12; line-height:1.45; margin:0;">
                <em>"Colombia Potencia Mundial de la Vida"</em> prioriza la <strong>reindustrialización basada en el conocimiento</strong>, el fortalecimiento de la economía popular y comunitaria, la inclusión financiera y el estímulo al emprendimiento formal en todas las regiones del país.
            </p>
        </div>
        <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:14px;">
            <div style="font-weight:800; font-size:0.85rem; color:#166534; margin-bottom:4px;">
                <i class="fas fa-book-reader"></i> Plan Decenal de Educación 2016-2026
            </div>
            <p style="font-size:0.78rem; color:#14532D; line-height:1.45; margin:0;">
                Enfocado en garantizar la <strong>calidad, equidad y pertinencia territorial</strong> de la educación superior, promoviendo la expansión de modalidades virtuales para cerrar la brecha de acceso entre las capitales y las zonas periféricas del territorio colombiano.
            </p>
        </div>
        <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-radius:8px; padding:14px;">
            <div style="font-weight:800; font-size:0.85rem; color:#0369A1; margin-bottom:4px;">
                <i class="fas fa-users"></i> ASCOLFA, ASCUN y Sinergia SENA
            </div>
            <p style="font-size:0.78rem; color:#0C4A6E; line-height:1.45; margin:0;">
                ASCOLFA promueve la flexibilización de créditos y la incorporación de tecnologías emergentes; paralelamente, la TO ofrece una <strong>ruta de homologación expedita para tecnólogos del SENA</strong> que desean culminar su pregrado profesional universitario.
            </p>
        </div>
    </div>

    <!-- SÍNTESIS DE OFERTA SNIES NACIONAL (TABLAS 5 Y 6) -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:18px; margin-bottom:12px;">
        
        <!-- RESUMEN TABLA 5 SNIES -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.85rem; color:#1A1A1B;"><i class="fas fa-map-marked" style="color:#F39200;"></i> Concentración de Oferta Presencial (SNIES)</strong>
                <span style="font-size:0.7rem; font-weight:800; color:#1A1A1B; background:#E8E8E8; padding:2px 6px; border-radius:4px;">245 Programas</span>
            </div>
            <p style="font-size:0.77rem; color:#4B5563; margin:0 0 8px;">
                El 42.45% de la oferta presencial se concentra en Bogotá (44), Antioquia (32) y Valle del Cauca (28). <strong>Santander ocupa el 4.° puesto nacional con 18 programas (7.35%)</strong>, consolidándose como polo educativo del nororiente colombiano.
            </p>
            <div style="font-size:0.74rem; background:#FFF9F2; color:#8A5300; padding:6px 10px; border-radius:4px;">
                <i class="fas fa-bullseye"></i> <strong>Nicho Estratégico:</strong> La oferta virtual (44 programas) amplía la cobertura nacional de la TO a los 32 departamentos donde la oferta presencial es limitada o nula.
            </div>
        </div>

        <!-- RESUMEN INTERVALOS DE CRÉDITOS Y DURACIÓN -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.85rem; color:#1A1A1B;"><i class="fas fa-clock" style="color:#2ECC71;"></i> Estándar de Duración y Créditos</strong>
                <span style="font-size:0.7rem; font-weight:800; color:#166534; background:#DCFCE7; padding:2px 6px; border-radius:4px;">Optimización Curricular</span>
            </div>
            <p style="font-size:0.77rem; color:#4B5563; margin:0 0 8px;">
                El estudio del SNIES (Documento Maestro Págs. 30-35) demuestra que el <strong>74.28% de los programas</strong> en Colombia tienen entre 140 y 155 créditos, y más del 70% se cursa en 8 a 9 semestres.
            </p>
            <div style="font-size:0.74rem; background:#F0FDF4; color:#166534; padding:6px 10px; border-radius:4px;">
                <i class="fas fa-check-circle"></i> <strong>Alineación TO:</strong> La transición de 158 cr (9 sem) a <strong>144 cr (8 sem)</strong> posiciona al programa en el punto óptimo de eficiencia formativa y competitividad económica.
            </div>
        </div>

    </div>
</div>

<!-- ========================================================================= -->
<!-- 3. OBSERVATORIO GEOESPACIAL DE DEMANDA Y OFERTA (GOOGLE MAPS RELIEVE)     -->
<!-- ========================================================================= -->
<div id="c2-eje-3" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:20px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    
    <!-- HEADER DEL MAPA Y CONMUTADOR DE MODALIDAD -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px; border-bottom:1px solid #E8E8E8; padding-bottom:14px;">
        <div>
            <span style="font-size:0.75rem; font-weight:800; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">Eje 3 · Visualización Territorial</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:2px 0 0;">
                <i class="fas fa-map-marked-alt" style="color:#F39200; margin-right:6px;"></i> Observatorio Geoespacial de Oferta y Demanda (Google Maps Relieve)
            </h4>
            <p style="color:#6B6B6B; font-size:0.82rem; margin:2px 0 0;">
                Filtro georreferenciado: <strong>solo se presentan los municipios y nodos con programas académicos formalmente registrados</strong> ante el SNIES.
            </p>
        </div>
        
        <!-- SWITCH DE MODALIDADES RESPONSIVO -->
        <div style="display:flex; flex-wrap:wrap; background:#F4F4F4; padding:4px; border-radius:30px; gap:6px; border:1px solid #D1D1D1; max-width:100%;">
            <button id="btnGeoPresencial" onclick="window.switchGeoMode('presencial')" style="background:#F39200; color:#FFFFFF; border:none; padding:8px 16px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease; box-shadow:0 2px 6px rgba(243,146,0,0.3);">
                <i class="fas fa-building"></i> 🏢 Modalidad Presencial (Santander / Oferta Registrada)
            </button>
            <button id="btnGeoVirtual" onclick="window.switchGeoMode('virtual')" style="background:transparent; color:#6B6B6B; border:none; padding:8px 16px; border-radius:24px; font-family:'Montserrat',sans-serif; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s ease;">
                <i class="fas fa-wifi"></i> 🌐 Modalidad Virtual (Nacional / SNIES)
            </button>
        </div>
    </div>

    <!-- SELECTOR RÁPIDO DE MUNICIPIOS / NODOS CON CLIC DIRECTO -->
    <div style="background:#F8F9FA; border:1px solid #EBEBEB; border-radius:8px; padding:10px 14px; margin-bottom:14px; display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
        <span style="font-size:0.75rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px; margin-right:4px;">
            <i class="fas fa-map-pin" style="color:#F39200;"></i> Nodos con Oferta Registrada:
        </span>
        <div id="geoMunicipiosChips" style="display:flex; flex-wrap:wrap; gap:6px; align-items:center;">
            <!-- Rellenado dinámico por renderMunicipioChips (solo nodos con programas > 0) -->
        </div>
    </div>

    <!-- CONTENEDOR GRID: MAPA + PANEL DETALLE -->
    <div class="geo-map-grid">
        
        <!-- MAPA CANVAS CON EXPERIENCIA GOOGLE MAPS AUTÉNTICA -->
        <div style="position:relative; border-radius:12px; overflow:hidden; border:1px solid #CBD5E1; box-shadow:0 4px 20px rgba(0,0,0,0.12); background:#AAD3DF;">
            <div id="toGeoMap" style="height:580px; width:100%; background:#AAD3DF; z-index:1;"></div>
            
            <!-- BARRA DE BÚSQUEDA FLOTANTE ORIGINAL GOOGLE MAPS -->
            <div style="position:absolute; top:12px; left:12px; z-index:1000; width:320px; max-width:85%;">
                <div style="background:#FFFFFF; border-radius:24px; box-shadow:0 2px 10px rgba(0,0,0,0.22); display:flex; align-items:center; padding:5px 14px; border:1px solid #E2E8F0;">
                    <i class="fab fa-google" style="color:#4285F4; font-size:1.05rem; margin-right:8px;"></i>
                    <input 
                        type="text" 
                        id="googleSearchInput" 
                        placeholder="Buscar departamento o universidad..." 
                        oninput="window.filterGoogleMapSearch(this.value)"
                        style="border:none; outline:none; font-family:'Montserrat',sans-serif; font-size:0.78rem; width:100%; color:#0F172A; background:transparent;"
                    />
                    <i class="fas fa-search" style="color:#64748B; font-size:0.85rem; margin-left:6px; cursor:pointer;"></i>
                </div>
                <div id="googleSearchResults" style="display:none; background:#FFFFFF; border-radius:10px; box-shadow:0 4px 16px rgba(0,0,0,0.2); margin-top:6px; max-height:190px; overflow-y:auto; border:1px solid #E2E8F0;">
                </div>
            </div>

            <!-- CONTROLES FLOTANTES SUPERIORES (ENCUADRE + CAPAS GOOGLE MAPS) -->
            <div style="position:absolute; top:12px; right:12px; z-index:1000; display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
                <!-- ENCUADRE TERRITORIAL -->
                <div style="display:flex; gap:3px; background:#FFFFFF; padding:3px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.2); border:1px solid #CBD5E1;">
                    <button id="btnViewNacional" onclick="window.setMapView('colombia')" style="background:#F39200; color:#FFFFFF; border:none; padding:6px 12px; font-family:'Montserrat',sans-serif; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px; border-radius:5px; transition:all 0.2s ease;">
                        <i class="fas fa-globe-americas"></i> Toda Colombia
                    </button>
                    <button id="btnViewSantander" onclick="window.setMapView('santander')" style="background:#1E293B; color:#FFFFFF; border:none; padding:6px 12px; font-family:'Montserrat',sans-serif; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px; border-radius:5px; transition:all 0.2s ease;">
                        <i class="fas fa-map-pin"></i> Santander (TO)
                    </button>
                </div>

                <!-- SELECTOR DE CAPA GOOGLE MAPS -->
                <div style="display:flex; gap:3px; background:#FFFFFF; padding:3px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.2); border:1px solid #CBD5E1;">
                    <button id="btnGoogleTerrain" onclick="window.switchGoogleMapLayer('terrain')" style="background:#4285F4; color:#FFFFFF; border:none; padding:6px 10px; font-family:'Montserrat',sans-serif; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:4px; border-radius:5px; transition:all 0.2s ease;" title="Vista de Terreno con Relieve Oficial de Google">
                        <i class="fas fa-mountain"></i> Relieve
                    </button>
                    <button id="btnGoogleStreet" onclick="window.switchGoogleMapLayer('roadmap')" style="background:#FFFFFF; color:#1A1A1B; border:none; padding:6px 10px; font-family:'Montserrat',sans-serif; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:4px; border-radius:5px; transition:all 0.2s ease;" title="Vista de Calles Google Maps">
                        <i class="fas fa-road"></i> Calles
                    </button>
                    <button id="btnGoogleSat" onclick="window.switchGoogleMapLayer('satellite')" style="background:#FFFFFF; color:#1A1A1B; border:none; padding:6px 10px; font-family:'Montserrat',sans-serif; font-size:0.72rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:4px; border-radius:5px; transition:all 0.2s ease;" title="Vista Satelital Fotográfica Google">
                        <i class="fas fa-satellite"></i> Satélite
                    </button>
                </div>
            </div>

            <!-- LOGO OFICIAL DE GOOGLE MAPS (ESQUINA INFERIOR IZQUIERDA) -->
            <div style="position:absolute; bottom:12px; left:12px; z-index:1000; display:flex; align-items:center; gap:8px;">
                <div style="background:rgba(255,255,255,0.95); padding:4px 9px; border-radius:5px; box-shadow:0 2px 6px rgba(0,0,0,0.25); display:flex; align-items:center; gap:5px;">
                    <span style="font-family:'Product Sans',Arial,sans-serif; font-weight:700; font-size:0.88rem; color:#4285F4; letter-spacing:-0.5px;">G<span style="color:#EA4335;">o</span><span style="color:#FBBC05;">o</span><span style="color:#4285F4;">g</span><span style="color:#34A853;">l</span><span style="color:#EA4335;">e</span></span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:0.68rem; color:#5F6368; font-weight:700;">Maps</span>
                </div>
                <div style="background:rgba(15,23,42,0.88); color:#FFFFFF; padding:4px 10px; border-radius:4px; font-size:0.68rem; font-weight:700; display:flex; align-items:center; gap:5px; backdrop-filter:blur(3px);">
                    <i class="fas fa-university" style="color:#F39200;"></i>
                    <span id="mapStatusText">SNIES &bull; Ministerio de Educación Nacional</span>
                </div>
            </div>
        </div>

        <!-- PANEL DE DATOS LATERAL OFICIAL DEL SNIES -->
        <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:12px; padding:16px; display:flex; flex-direction:column; justify-content:space-between; height:580px; overflow-y:auto; box-shadow:0 4px 15px rgba(0,0,0,0.06);">
            <div>
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px; padding-bottom:10px; border-bottom:2.5px solid #F39200;">
                    <div id="sideNodeBadge" style="background:#EA4335; color:#FFFFFF; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.95rem; box-shadow:0 2px 6px rgba(234,67,53,0.35);">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h5 id="sideNodeTitle" style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#0F172A; margin:0; line-height:1.2;">
                            Colombia: Oferta Presencial SNIES
                        </h5>
                        <span id="sideNodeSubtitle" style="font-size:0.7rem; color:#64748B; font-weight:600;">
                            245 Programas en Colombia &bull; 18 en Santander (Sede Principal TO)
                        </span>
                    </div>
                </div>

                <div id="sideNodeContent">
                    <!-- Rellenado dinámico por renderInitialSidePanel / selectGeoNode -->
                </div>
            </div>

            <div id="sideNodeFooter" style="margin-top:14px; padding-top:10px; border-top:1px solid #E2E8F0; font-size:0.68rem; color:#64748B; line-height:1.4;">
                <strong>Fuente Oficial:</strong> SNIES - Ministerio de Educación Nacional de Colombia (Corte Oficial Documento Maestro Radicado 2024-2026).
            </div>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- 4. PERTINENCIA EN EL PLANO REGIONAL Y LOCAL (SANTANDER Y BUCARAMANGA)     -->
<!-- ========================================================================= -->
<div id="c2-eje-4" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #F39200; border-radius:12px; padding:22px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #E8E8E8; padding-bottom:12px;">
        <div>
            <span style="font-size:0.75rem; font-weight:800; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">Eje 4 · Impacto Territorial y Productivo</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:2px 0 0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-city" style="color:#F39200;"></i> Pertinencia en el Plano Regional y Local
            </h4>
        </div>
        <span class="tag-legal" style="background:#FFF9F2; color:#C2410C; border:1px solid #FED7AA; font-weight:800; font-size:0.75rem; padding:4px 10px; border-radius:20px;">
            <i class="fas fa-building"></i> PDD 2024-2027 · PDM Bucaramanga · CCB
        </span>
    </div>

    <!-- MATRIZ DE PLANES DE DESARROLLO Y TEJIDO PRODUCTIVO -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-bottom:20px;">
        
        <!-- PDD SANTANDER 2024-2027 -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-left:4px solid #1A1A1B; border-radius:8px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight:800; font-size:0.92rem; color:#1A1A1B; margin-bottom:6px;">
                <i class="fas fa-map" style="color:#F39200; margin-right:4px;"></i> PDD Santander 2024-2027: "Es Tiempo de Santander"
            </div>
            <p style="font-size:0.79rem; color:#4B5563; line-height:1.45; margin:0 0 8px;">
                La Gobernación de Santander prioriza la <strong>diversificación económica</strong> y la competitividad en clústeres clave:
            </p>
            <ul style="font-size:0.76rem; color:#374151; margin:0; padding-left:18px; line-height:1.4;">
                <li><strong>Clúster de Salud y Alta Complejidad:</strong> Gestión administrativa hospitalaria e IPS (FOSCAL, ICV, HIC).</li>
                <li><strong>Clúster Agroindustrial y Cafés Especiales:</strong> Provincias de Guanentá, Comunera y Mares.</li>
                <li><strong>Clúster Energético y Petroquímico:</strong> Barrancabermeja y Magdalena Medio en transición energética.</li>
                <li><strong>Clúster Turístico y Destinos Sostenibles:</strong> San Gil, Barichara y Mesa de Los Santos.</li>
            </ul>
        </div>

        <!-- PDM BUCARAMANGA 2024-2027 -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-left:4px solid #F39200; border-radius:8px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight:800; font-size:0.92rem; color:#1A1A1B; margin-bottom:6px;">
                <i class="fas fa-landmark" style="color:#F39200; margin-right:4px;"></i> PDM Bucaramanga 2024-2027: "Bucaramanga Avanza Segura"
            </div>
            <p style="font-size:0.79rem; color:#4B5563; line-height:1.45; margin:0 0 8px;">
                Eje de <strong>Desarrollo Económico, Ciudad Universitaria y Capital del Conocimiento</strong>:
            </p>
            <ul style="font-size:0.76rem; color:#374151; margin:0; padding-left:18px; line-height:1.4;">
                <li><strong>Emprendimiento y Formalización:</strong> Articulación activa con el Instituto Municipal de Empleo y Fomento Empresarial (IMEBÚ).</li>
                <li><strong>Modernización del Comercio y MiPyMes:</strong> Transformación digital para los sectores calzado, confección y gastronomía.</li>
                <li><strong>Hub de Servicios Digitales:</strong> Atracción de centros de servicios compartidos (BPO/KPO) que demandan gestores bilingües y analíticos.</li>
            </ul>
        </div>

        <!-- TEJIDO EMPRESARIAL CÁMARA DE COMERCIO (CCB) -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-left:4px solid #2ECC71; border-radius:8px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight:800; font-size:0.92rem; color:#1A1A1B; margin-bottom:6px;">
                <i class="fas fa-store" style="color:#2ECC71; margin-right:4px;"></i> Tejido Empresarial CCB &amp; Demanda Real
            </div>
            <p style="font-size:0.79rem; color:#4B5563; line-height:1.45; margin:0 0 8px;">
                La Cámara de Comercio de Bucaramanga reporta más de <strong>32.450 unidades productivas activas</strong>:
            </p>
            <ul style="font-size:0.76rem; color:#374151; margin:0; padding-left:18px; line-height:1.4;">
                <li><strong>98.2% son MiPyMes:</strong> Negocios familiares que requieren urgentemente profesionalización directiva y analítica de costos.</li>
                <li><strong>Demanda de Perfiles TO:</strong> Directores comerciales, coordinadores de talento humano, analistas de operaciones y líderes de innovación.</li>
                <li><strong>Alianzas Institucionales:</strong> Convenios activos de prácticas y proyectos de consultoría aplicada con gremios de Santander.</li>
            </ul>
        </div>

    </div>
</div>

<!-- ========================================================================= -->
<!-- 5. DEMANDA DE MERCADO, GOOGLE TRENDS Y OBSERVATORIO LABORAL (OLE)        -->
<!-- ========================================================================= -->
<div id="c2-eje-5" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #1A1A1B; border-radius:12px; padding:22px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #E8E8E8; padding-bottom:12px;">
        <div>
            <span style="font-size:0.75rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; letter-spacing:0.5px;">Eje 5 · Evidencia Verificable y Empleabilidad</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:2px 0 0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-chart-line" style="color:#F39200;"></i> Demanda Laboral, Tendencias Google Trends y Reportes OLE
            </h4>
        </div>
        <span class="tag-legal" style="background:#F0FDF4; color:#166534; border:1px solid #BBF7D0; font-weight:800; font-size:0.75rem; padding:4px 10px; border-radius:20px;">
            <i class="fas fa-user-tie"></i> 78% Cotización OLE · Top Búsquedas
        </span>
    </div>

    <!-- ANÁLISIS GOOGLE TRENDS COLOMBIA Y SANTANDER -->
    <div style="background:#F8F9FA; border-radius:10px; padding:18px; margin-bottom:20px; border:1px solid #E2E8F0;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
            <div style="font-family:'Montserrat',sans-serif; font-weight:800; font-size:0.95rem; color:#1A1A1B;">
                <i class="fab fa-google" style="color:#4285F4; margin-right:6px;"></i> Interés y Tendencias de Búsqueda Digital (Google Trends 2024-2026)
            </div>
            <span style="font-size:0.72rem; color:#64748B; background:#FFFFFF; padding:3px 8px; border-radius:12px; border:1px solid #CBD5E1;">
                Frecuencia de Búsqueda Sostenida: 100/100 Index Score
            </span>
        </div>
        <p style="font-size:0.8rem; color:#475569; margin:0 0 14px; line-height:1.5;">
            El análisis de tendencias en <strong>Google Trends Colombia</strong> confirma que <em>"Administración de Empresas"</em> es el término formativo líder indiscutible en pregrados de ciencias económicas, con un crecimiento acelerado en términos asociados a la modalidad digital y analítica:
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap:12px;">
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:3px solid #4285F4;">
                <div style="font-size:0.72rem; color:#64748B; font-weight:700;">Término Principal</div>
                <div style="font-weight:800; font-size:0.92rem; color:#0F172A; margin:2px 0;">"Administración de Empresas"</div>
                <div style="font-size:0.72rem; color:#2ECC71; font-weight:700;"><i class="fas fa-arrow-up"></i> Top 1 en demanda vocacional</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:3px solid #F39200;">
                <div style="font-size:0.72rem; color:#64748B; font-weight:700;">Tendencia Modalidad</div>
                <div style="font-weight:800; font-size:0.92rem; color:#0F172A; margin:2px 0;">"Administración Virtual"</div>
                <div style="font-size:0.72rem; color:#F39200; font-weight:700;"><i class="fas fa-bolt"></i> +210% Consultas activas</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:3px solid #2ECC71;">
                <div style="font-size:0.72rem; color:#64748B; font-weight:700;">Competencia 4.0</div>
                <div style="font-weight:800; font-size:0.92rem; color:#0F172A; margin:2px 0;">"Big Data y Analítica"</div>
                <div style="font-size:0.72rem; color:#2ECC71; font-weight:700;"><i class="fas fa-fire"></i> +185% Requerimiento laboral</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:3px solid #9B59B6;">
                <div style="font-size:0.72rem; color:#64748B; font-weight:700;">Región de Interés</div>
                <div style="font-weight:800; font-size:0.92rem; color:#0F172A; margin:2px 0;">Santander / Bucaramanga</div>
                <div style="font-size:0.72rem; color:#9B59B6; font-weight:700;"><i class="fas fa-chart-bar"></i> Top 5 departamentos</div>
            </div>
        </div>
    </div>

    <!-- CIFRAS CLAVE DEL OBSERVATORIO LABORAL (OLE - MEN) -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-bottom:14px;">
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #1A1A1B; border-radius:8px; padding:14px;">
            <div style="font-size:0.72rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Tasa de Cotización Formal (OLE)</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#1A1A1B; margin:2px 0;">77.4% - 78.5%</div>
            <p style="font-size:0.75rem; color:#4B5563; margin:0;">
                Porcentaje de recién graduados vinculados y aportando formalmente a seguridad social durante el primer año tras graduarse.
            </p>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #F39200; border-radius:8px; padding:14px;">
            <div style="font-size:0.72rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Velocidad de Inserción Laboral</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#F39200; margin:2px 0;">71.0%</div>
            <p style="font-size:0.75rem; color:#4B5563; margin:0;">
                El 71% de los graduados de Administración de Empresas se ubica laboralmente en sus primeros seis (6) meses post-graduación (OLE).
            </p>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #2ECC71; border-radius:8px; padding:14px;">
            <div style="font-size:0.72rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Versatilidad y Emprendimiento</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#2ECC71; margin:2px 0;">27.0%</div>
            <p style="font-size:0.75rem; color:#4B5563; margin:0;">
                Tasa de egresados que generan empresa propia o cotizan como independientes formales, ratificando la fuerza del componente emprendedor.
            </p>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- 6. DEMOSTRACIÓN DE PERTINENCIA: REGISTRO CALIFICADO ÚNICO (PRESENCIAL Y VIRTUAL) -->
<!-- ========================================================================= -->
<div id="c2-eje-6" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #F39200; border-radius:12px; padding:22px; margin-bottom:28px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #E8E8E8; padding-bottom:12px;">
        <div>
            <span style="font-size:0.75rem; font-weight:800; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">Eje 6 · Articulación y Pertinencia de las Modalidades (Registro Único)</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:2px 0 0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-layer-group" style="color:#F39200;"></i> Demostración de Pertinencia para las Dos Modalidades (Registro Único)
            </h4>
        </div>
        <span class="tag-legal" style="background:#FFF9F2; color:#F39200; border:1px solid #FED7AA; font-weight:800; font-size:0.75rem; padding:4px 10px; border-radius:20px;">
            <i class="fas fa-check-double"></i> Mismo Plan · Idénticos RAP · Flexibilidad
        </span>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap:20px; margin-bottom:18px;">
        
        <!-- CARD MODALIDAD PRESENCIAL -->
        <div style="background:#FFF9F2; border:2px solid #FED7AA; border-radius:10px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:1rem; font-weight:800; color:#C2410C; margin:0;">
                    <i class="fas fa-building"></i> Modalidad Presencial (Sede Bucaramanga)
                </h5>
                <span style="font-size:0.72rem; font-weight:800; background:#FFEDD5; color:#C2410C; padding:3px 8px; border-radius:4px;">60 Cupos / Cohorte</span>
            </div>
            <p style="font-size:0.8rem; color:#7C2D12; line-height:1.45; margin:0 0 10px;">
                <strong>Justificación Técnica y Pertinencia Local:</strong>
            </p>
            <ul style="font-size:0.78rem; color:#431407; margin:0; padding-left:18px; line-height:1.5;">
                <li><strong>Campus Central Bucaramanga:</strong> Sede Principal (Calle 41 # 10-30 Centro, Bucaramanga), dotada de aulas multimedia, laboratorios de cómputo especializados y salas de simulación.</li>
                <li><strong>Interacción Vivencial:</strong> Talleres prácticos presenciales (Juego Gerencial, Costos y Presupuestos) y desarrollo de habilidades socioemocionales de liderazgo directo.</li>
                <li><strong>Conexión con el Ecosistema Productivo:</strong> Prácticas empresariales y pasantías directas en diferentes sectores económicos del ámbito regional y nacional.</li>
                <li><strong>Relación Crédito:</strong> 1:2 (48 horas directas con acompañamiento docente y 96 horas de trabajo independiente por asignatura de 3 créditos).</li>
            </ul>
        </div>

        <!-- CARD MODALIDAD VIRTUAL -->
        <div style="background:#F0F9FF; border:2px solid #BAE6FD; border-radius:10px; padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:1rem; font-weight:800; color:#0369A1; margin:0;">
                    <i class="fas fa-wifi"></i> Modalidad Virtual (Cobertura Nacional)
                </h5>
                <span style="font-size:0.72rem; font-weight:800; background:#E0F2FE; color:#0369A1; padding:3px 8px; border-radius:4px;">240 Cupos / Cohorte</span>
            </div>
            <p style="font-size:0.8rem; color:#0369A1; line-height:1.45; margin:0 0 10px;">
                <strong>Justificación Técnica y Pertinencia Social:</strong>
            </p>
            <ul style="font-size:0.78rem; color:#082F49; margin:0; padding-left:18px; line-height:1.5;">
                <li><strong>Equidad e Inclusión Territorial:</strong> Llega a los 87 municipios de Santander (incluyendo provincias sin IES presenciales) y a los 32 departamentos del país.</li>
                <li><strong>Flexibilidad para Adultos Trabajadores:</strong> Plataforma LMS Moodle 24/7 con contenidos modulares de 8 semanas, tutorías sincrónicas y asincrónicas.</li>
                <li><strong>Asequibilidad Económica:</strong> Matrícula de $3.576.000 sin sobrecostos de traslado, alimentación o hospedaje en ciudades intermedias.</li>
                <li><strong>Relación Crédito:</strong> 1:3 (36 horas de mediación pedagógica virtual interactiva y 108 horas de aprendizaje autónomo por asignatura de 3 créditos).</li>
            </ul>
        </div>

    </div>

    <!-- VALOR ESTRATÉGICO DE LA FIGURA DE REGISTRO ÚNICO -->
    <div style="background:#F8F9FA; border-left:4px solid #1A1A1B; border-radius:8px; padding:14px 18px; font-size:0.82rem; color:#374151; line-height:1.5;">
        <strong style="color:#1A1A1B;"><i class="fas fa-link" style="color:#F39200;"></i> Beneficios de la Integración en Registro Calificado Único:</strong>
        Ambas modalidades comparten la misma malla curricular (144 créditos / 8 semestres), idénticos Resultados de Aprendizaje del Programa (RAP), los mismos criterios de evaluación institucional y el mismo cuerpo docente calificado. El estudiante goza de <strong>movilidad horizontal</strong> entre la modalidad presencial y virtual según cambie su situación laboral o territorial, garantizando cero reprocesos administrativos o demoras en su graduación oportuna.
    </div>
</div>

<!-- ========================================== -->
<!-- 7. FACTORES DIFERENCIADORES BENTO GRID     -->
<!-- ========================================== -->
<div id="c2-eje-7" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:22px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
        <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
            <i class="fas fa-medal" style="color:#F39200;"></i> Factores Diferenciadores de Administración de Empresas (TO)
        </h4>
        <span style="font-size:0.75rem; color:#6B21A8; font-weight:700; background:#FAF5FF; border:1px solid #E9D5FF; padding:3px 10px; border-radius:20px;">
            <i class="fas fa-mouse-pointer"></i> Clic en cada factor para desplegar evidencias y solidez
        </span>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
        
        <div onclick="window.openDiferenciadorModal('digital_ia')" style="background:#FFF9F2; border:1.5px solid #FED7AA; border-top:4px solid #F39200; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease;" onmouseover="this.style.transform='translateY(-4px)';" onmouseout="this.style.transform='none';">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-size:1.6rem; color:#F39200;"><i class="fas fa-brain"></i></div>
                <span style="font-size:0.68rem; font-weight:800; color:#C2410C; background:#FFFFFF; padding:2px 6px; border-radius:4px; border:1px solid #FED7AA;"><i class="fas fa-search-plus"></i> Ver Solidez</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                1. Transformación Digital, IA &amp; Analítica
            </h5>
            <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0;">
                Malla curricular con asignaturas de vanguardia: <strong>Big Data y Analítica de Datos</strong> (Semestre 6) e <strong>Inteligencia Artificial en los Negocios</strong> (Semestre 8), formando directivos con toma de decisiones guiada por datos (<em>Data-Driven Decision Making</em>).
            </p>
        </div>

        <div onclick="window.openDiferenciadorModal('sostenibilidad')" style="background:#F0FDF4; border:1.5px solid #BBF7D0; border-top:4px solid #10B981; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease;" onmouseover="this.style.transform='translateY(-4px)';" onmouseout="this.style.transform='none';">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-size:1.6rem; color:#10B981;"><i class="fas fa-recycle"></i></div>
                <span style="font-size:0.68rem; font-weight:800; color:#166534; background:#FFFFFF; padding:2px 6px; border-radius:4px; border:1px solid #BBF7D0;"><i class="fas fa-search-plus"></i> Ver Solidez</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                2. Sostenibilidad &amp; Economía Circular
            </h5>
            <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0;">
                Articulación a los ODS y sistemas integrados de gestión (<strong>Sistemas Integrados HSEQ</strong> y <strong>Gerencia de la Calidad</strong>) orientados a la descarbonización, eficiencia energética y modelos regenerativos en la región.
            </p>
        </div>

        <div onclick="window.openDiferenciadorModal('emprendimiento')" style="background:#FFF1F2; border:1.5px solid #FECDD3; border-top:4px solid #C8102E; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease;" onmouseover="this.style.transform='translateY(-4px)';" onmouseout="this.style.transform='none';">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-size:1.6rem; color:#C8102E;"><i class="fas fa-chess"></i></div>
                <span style="font-size:0.68rem; font-weight:800; color:#9F1239; background:#FFFFFF; padding:2px 6px; border-radius:4px; border:1px solid #FECDD3;"><i class="fas fa-search-plus"></i> Ver Solidez</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                3. Ruta Emprendedora &amp; Simuladores
            </h5>
            <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0;">
                Línea continua de formación práctica: <strong>Modelos de Emprendimiento</strong> (Sem 6) → <strong>Laboratorio de Innovación</strong> (Sem 8) → <strong>Juego Gerencial de Negocios</strong> (Sem 8) con simuladores en tiempo real.
            </p>
        </div>

        <div onclick="window.openDiferenciadorModal('registro_unico')" style="background:#FAF5FF; border:1.5px solid #E9D5FF; border-top:4px solid #7C3AED; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease;" onmouseover="this.style.transform='translateY(-4px)';" onmouseout="this.style.transform='none';">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-size:1.6rem; color:#7C3AED;"><i class="fas fa-random"></i></div>
                <span style="font-size:0.68rem; font-weight:800; color:#6B21A8; background:#FFFFFF; padding:2px 6px; border-radius:4px; border:1px solid #E9D5FF;"><i class="fas fa-search-plus"></i> Ver Solidez</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                4. Flexibilidad de Registro Único
            </h5>
            <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0;">
                Unicidad del plan de estudios que permite al estudiante transferirse o cursar asignaturas entre la modalidad Presencial y Virtual sin costos de homologación, respondiendo a su dinámica laboral.
            </p>
        </div>

        <div onclick="window.openDiferenciadorModal('empleabilidad')" style="background:#F8FAFC; border:1.5px solid #CBD5E1; border-top:4px solid #1A1A1B; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease;" onmouseover="this.style.transform='translateY(-4px)';" onmouseout="this.style.transform='none';">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-size:1.6rem; color:#1A1A1B;"><i class="fas fa-briefcase"></i></div>
                <span style="font-size:0.68rem; font-weight:800; color:#1E293B; background:#FFFFFF; padding:2px 6px; border-radius:4px; border:1px solid #CBD5E1;"><i class="fas fa-search-plus"></i> Ver Solidez</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:6px;">
                5. Contextos de Aplicación &amp; Empleabilidad
            </h5>
            <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0;">
                Pasantías en diferentes sectores económicos, inserción laboral rápida del <strong>71.0% en menos de 6 meses (OLE)</strong> y 94.4% de permanencia semestral consolidada con SAT TO.
            </p>
        </div>

    </div>
</div>

<!-- ========================================== -->
<!-- 8. DATOS ESTADÍSTICOS Y PERMANENCIA SPADIES-->
<!-- ========================================== -->
<div id="c2-eje-8" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:22px; margin-top:28px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px; border-bottom:1px solid #E8E8E8; padding-bottom:14px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-chart-line" style="color:#F39200;"></i> Datos Estadísticos Institucionales y Tendencias de Permanencia
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
        <div style="background:#F8F9FA; border-left:4px solid #F39200; padding:14px; border-radius:8px;">
            <div style="font-size:0.72rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Retención por Cohortes</div>
            <div style="font-family:'Montserrat',sans-serif; font-size:1.6rem; font-weight:800; color:#1A1A1B; margin:2px 0;">SPADIES / MEN</div>
            <div style="font-size:0.75rem; color:#F39200; font-weight:700;"><i class="fas fa-check-circle"></i> Trazabilidad Cohorte 2020-2 a 2025-2</div>
        </div>
    </div>

    <!-- TABLAS RESUMEN Y GRÁFICAS DE TENDENCIA (TABLAS 12 Y 13) -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap:20px; margin-bottom:16px;">
        
        <!-- RESUMEN TABLA 12: MATRÍCULA HISTÓRICA Y TENDENCIA -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:16px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; flex-direction:column;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; gap:8px; flex-wrap:wrap;">
                <div>
                    <h6 style="font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B; margin:0 0 4px 0; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-users" style="color:#F39200;"></i> Tabla 12. Evolución y Tendencia de Matrícula (2020-2 a 2025-2)
                    </h6>
                    <div style="font-size:0.7rem; color:#6B6B6B;">
                        <span style="font-weight:700; color:#F39200;"><i class="fas fa-arrow-trend-up"></i> +776% Crecimiento</span> &bull; Apertura: 13 &bull; Cierre: 114 Matriculados
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="tag-legal" style="background:#FFF3E0; color:#F39200; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px;">Fuente DM</span>
                    <div style="display:inline-flex; background:#F3F4F6; padding:2px; border-radius:6px; border:1px solid #E5E7EB;">
                        <button id="btnT12Chart" onclick="switchT12View('chart')" title="Ver solo gráfica" style="border:none; background:#F3F4F6; color:#4B5563; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer; transition:all 0.2s;"><i class="fas fa-chart-line"></i> Gráfica</button>
                        <button id="btnT12Table" onclick="switchT12View('table')" title="Ver solo tabla" style="border:none; background:#F3F4F6; color:#4B5563; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer; transition:all 0.2s;"><i class="fas fa-table"></i> Tabla</button>
                        <button id="btnT12Both" onclick="switchT12View('both')" title="Ver gráfica y tabla" style="border:none; background:#F39200; color:#FFFFFF; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer; transition:all 0.2s;"><i class="fas fa-columns"></i> Ambas</button>
                    </div>
                </div>
            </div>

            <!-- CONTENEDOR GRÁFICA T12 -->
            <div id="t12ChartWrap" style="position:relative; height:200px; width:100%; margin-bottom:12px; background:#FAFAFA; border-radius:8px; padding:8px 8px 4px 8px; border:1px solid #F0F0F0;">
                <canvas id="chartC2Matricula"></canvas>
            </div>

            <!-- CONTENEDOR TABLA T12 -->
            <div id="t12TableWrap" style="max-height:175px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:6px;">
                <table class="tbl" style="width:100%; font-size:0.75rem; margin:0;">
                    <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF; z-index:2;">
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

            <!-- PIE DE TARJETA T12 -->
            <div style="margin-top:10px; font-size:0.72rem; color:#4B5563; background:#FFF8F0; border-left:3px solid #F39200; padding:6px 10px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <span><i class="fas fa-check-circle" style="color:#F39200; margin-right:4px;"></i> <strong>Tendencia:</strong> Crecimiento sostenido con pico de 127 aspirantes inscritos y 114 matriculados en 2025-2.</span>
                <span style="font-weight:700; color:#F39200; white-space:nowrap;">Demanda Activa</span>
            </div>
        </div>

        <!-- RESUMEN TABLA 13: PERMANENCIA SEMESTRAL Y TENDENCIA -->
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:16px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; flex-direction:column;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; gap:8px; flex-wrap:wrap;">
                <div>
                    <h6 style="font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B; margin:0 0 4px 0; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-shield-alt" style="color:#2ECC71;"></i> Tabla 13. Tasa de Permanencia Semestral (%)
                    </h6>
                    <div style="font-size:0.7rem; color:#6B6B6B;">
                        <span style="font-weight:700; color:#166534;"><i class="fas fa-chart-line"></i> Consolidación SAT > 90%</span> &bull; 2025-1: 94.4% vs Meta: 80.0%
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="tag-legal" style="background:#DCFCE7; color:#166534; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px;">Consolidación SAT</span>
                    <div style="display:inline-flex; background:#F3F4F6; padding:2px; border-radius:6px; border:1px solid #E5E7EB;">
                        <button id="btnT13Chart" onclick="switchT13View('chart')" title="Ver solo gráfica" style="border:none; background:#F3F4F6; color:#4B5563; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer; transition:all 0.2s;"><i class="fas fa-chart-line"></i> Gráfica</button>
                        <button id="btnT13Table" onclick="switchT13View('table')" title="Ver solo tabla" style="border:none; background:#F3F4F6; color:#4B5563; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer; transition:all 0.2s;"><i class="fas fa-table"></i> Tabla</button>
                        <button id="btnT13Both" onclick="switchT13View('both')" title="Ver gráfica y tabla" style="border:none; background:#2ECC71; color:#FFFFFF; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer; transition:all 0.2s;"><i class="fas fa-columns"></i> Ambas</button>
                    </div>
                </div>
            </div>

            <!-- CONTENEDOR GRÁFICA T13 -->
            <div id="t13ChartWrap" style="position:relative; height:200px; width:100%; margin-bottom:12px; background:#FAFAFA; border-radius:8px; padding:8px 8px 4px 8px; border:1px solid #F0F0F0;">
                <canvas id="chartC2Permanencia"></canvas>
            </div>

            <!-- CONTENEDOR TABLA T13 -->
            <div id="t13TableWrap" style="max-height:175px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:6px;">
                <table class="tbl" style="width:100%; font-size:0.75rem; margin:0;">
                    <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF; z-index:2;">
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
                        <tr style="background:#F0FDF4; font-weight:700;"><td>2024-2</td><td style="text-align:center;">38</td><td style="text-align:center; font-weight:800; color:#166534;">92.1%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Excelente</span></td></tr>
                        <tr style="background:#F0FDF4; font-weight:800;"><td>2025-1</td><td style="text-align:center;">72</td><td style="text-align:center;">68</td><td style="text-align:center; font-weight:800; color:#166534;">94.4%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Récord SAT</span></td></tr>
                        <tr style="font-weight:700;"><td>2025-2</td><td style="text-align:center;">114</td><td style="text-align:center;">98</td><td style="text-align:center; font-weight:800; color:#166534;">86.0%</td><td><span class="badge" style="background:#D4EDDA; color:#155724; font-size:0.65rem;">Superada</span></td></tr>
                    </tbody>
                </table>
            </div>

            <!-- PIE DE TARJETA T13 -->
            <div style="margin-top:10px; font-size:0.72rem; color:#166534; background:#F0FDF4; border-left:3px solid #2ECC71; padding:6px 10px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <span><i class="fas fa-shield-halved" style="color:#2ECC71; margin-right:4px;"></i> <strong>Eficacia SAT:</strong> Permanencia semestral estabilizada por encima del 92% (14.4 puntos sobre la meta institucional del 80%).</span>
                <span style="font-weight:700; color:#166534; white-space:nowrap;">Retención Exitosa</span>
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


<!-- ========================================================================= -->
<!-- ESTUDIO DE PERTINENCIA E INSERCIÓN LABORAL DE GRADUADOS (ENCUESTA OFICIAL) -->
<!-- Fuente: ENCUESTA DE SEGUIMIENTO A EGRESADOS (940 Institucional · 44 Admon)  -->
<!-- ========================================================================= -->
<div id="c2-eje-9" class="c2-eje-panel" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #10B981; border-radius:12px; padding:24px 28px; margin-top:28px; margin-bottom:28px; box-shadow:0 4px 18px rgba(0,0,0,0.06); position:relative;">
    
    <!-- ENCABEZADO DEL ESTUDIO -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:22px; border-bottom:1px solid #F1F5F9; padding-bottom:16px;">
        <div style="display:flex; align-items:center; gap:14px;">
            <div style="background:#ECFDF5; color:#059669; width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.45rem; border:1.5px solid #A7F3D0; box-shadow:0 2px 8px rgba(16,185,129,0.15);">
                <i class="fas fa-user-check"></i>
            </div>
            <div>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px;">
                    <span style="background:#10B981; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                        Evidencia Empírica de Pertinencia
                    </span>
                    <span style="color:#64748B; font-size:0.75rem;">Estudio Censal Institucional · 43 Variables Analizadas</span>
                </div>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.24rem; font-weight:800; color:#1A1A1B; margin:0;">
                    Estudio de Seguimiento a Graduados e Inserción Laboral · Administración de Empresas
                </h4>
            </div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span style="background:#F8FAFC; border:1px solid #E2E8F0; color:#0F172A; font-size:0.74rem; font-weight:700; padding:5px 12px; border-radius:20px; display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-database" style="color:#10B981;"></i> 940 Egresados Globales · 44 Administración
            </span>
            <span style="background:#ECFDF5; border:1px solid #A7F3D0; color:#065F46; font-size:0.74rem; font-weight:700; padding:5px 12px; border-radius:20px; display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-certificate" style="color:#10B981;"></i> Tasa de Ocupación: 93.2%
            </span>
        </div>
    </div>

    <!-- TARJETAS DE INDICADORES HERO (4 KPIS PRINCIPALES) -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:16px; margin-bottom:26px;">
        
        <!-- KPI 1: TASA DE OCUPACIÓN -->
        <div style="background:linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border:1.5px solid #86EFAC; border-radius:10px; padding:18px; box-shadow:0 3px 10px rgba(16,185,129,0.08);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size:0.72rem; font-weight:800; color:#15803D; text-transform:uppercase; letter-spacing:0.5px;">Tasa de Inserción / Ocupación</span>
                <span style="background:#16A34A; color:#FFFFFF; width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                    <i class="fas fa-briefcase"></i>
                </span>
            </div>
            <div style="font-family:'Montserrat',sans-serif; font-size:2.1rem; font-weight:900; color:#14532D; line-height:1; margin-bottom:6px;">
                93.2%
            </div>
            <p style="font-size:0.76rem; color:#166534; margin:0 0 8px; line-height:1.4;">
                <strong>41 de 44 graduados activos</strong> en el mercado productivo formal (70.5% empleados vinculados + 18.2% independientes + 4.5% empresarios constituidos).
            </p>
            <div style="font-size:0.68rem; color:#15803D; font-weight:700; border-top:1px dashed #86EFAC; padding-top:6px;">
                <i class="fas fa-chart-line"></i> +13.7% sobre la media institucional (79.5%)
            </div>
        </div>

        <!-- KPI 2: COHERENCIA CON PERFIL -->
        <div style="background:linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); border:1.5px solid #FDE68A; border-radius:10px; padding:18px; box-shadow:0 3px 10px rgba(245,158,11,0.08);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size:0.72rem; font-weight:800; color:#B45309; text-transform:uppercase; letter-spacing:0.5px;">Coherencia con el Perfil</span>
                <span style="background:#D97706; color:#FFFFFF; width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                    <i class="fas fa-user-graduate"></i>
                </span>
            </div>
            <div style="font-family:'Montserrat',sans-serif; font-size:2.1rem; font-weight:900; color:#78350F; line-height:1; margin-bottom:6px;">
                85.4%
            </div>
            <p style="font-size:0.76rem; color:#92400E; margin:0 0 8px; line-height:1.4;">
                <strong>35 de 41 ocupados</strong> certifican que su cargo y responsabilidades laborales corresponden directamente al perfil del Administrador de Empresas TO.
            </p>
            <div style="font-size:0.68rem; color:#B45309; font-weight:700; border-top:1px dashed #FDE68A; padding-top:6px;">
                <i class="fas fa-check-circle"></i> Alta alineación competencias - mercado laboral
            </div>
        </div>

        <!-- KPI 3: TIEMPO DE UBICACIÓN -->
        <div style="background:linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%); border:1.5px solid #FED7AA; border-radius:10px; padding:18px; box-shadow:0 3px 10px rgba(234,88,12,0.08);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size:0.72rem; font-weight:800; color:#C2410C; text-transform:uppercase; letter-spacing:0.5px;">Rapidez de Colocación</span>
                <span style="background:#EA580C; color:#FFFFFF; width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                    <i class="fas fa-stopwatch"></i>
                </span>
            </div>
            <div style="font-family:'Montserrat',sans-serif; font-size:2.1rem; font-weight:900; color:#7C2D12; line-height:1; margin-bottom:6px;">
                &lt; 6 Meses
            </div>
            <p style="font-size:0.76rem; color:#9A3412; margin:0 0 8px; line-height:1.4;">
                <strong>Más del 75%</strong> de los egresados que buscaron empleo se colocaron en el mercado laboral formal en menos de 6 meses tras su graduación.
            </p>
            <div style="font-size:0.68rem; color:#C2410C; font-weight:700; border-top:1px dashed #FED7AA; padding-top:6px;">
                <i class="fas fa-bolt"></i> Rápida absorción por el ecosistema empresarial
            </div>
        </div>

        <!-- KPI 4: SATISFACCIÓN Y PROYECTO DE VIDA -->
        <div style="background:linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%); border:1.5px solid #CBD5E1; border-radius:10px; padding:18px; box-shadow:0 3px 10px rgba(15,23,42,0.06);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span style="font-size:0.72rem; font-weight:800; color:#334155; text-transform:uppercase; letter-spacing:0.5px;">Satisfacción &amp; Vida</span>
                <span style="background:#1A1A1B; color:#F39200; width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                    <i class="fas fa-heart"></i>
                </span>
            </div>
            <div style="font-family:'Montserrat',sans-serif; font-size:2.1rem; font-weight:900; color:#0F172A; line-height:1; margin-bottom:6px;">
                95.5%
            </div>
            <p style="font-size:0.76rem; color:#475569; margin:0 0 8px; line-height:1.4;">
                <strong>42 de 44 graduados</strong> califican con 4 o 5 (sobre 5) la calidad recibida, y el <strong>93.2%</strong> afirma que mejoró su proyecto de vida.
            </p>
            <div style="font-size:0.68rem; color:#1E293B; font-weight:700; border-top:1px dashed #CBD5E1; padding-top:6px;">
                <i class="fas fa-thumbs-up"></i> 95.5% Recomienda a la Institución
            </div>
        </div>

    </div>

    <!-- SECCIÓN DE SECTORES ECONÓMICOS DE INSERCIÓN Y EMPRESAS REALES -->
    <div style="display:grid; grid-template-columns:1.15fr 0.85fr; gap:22px; margin-bottom:24px;">
        
        <!-- COLUMNA IZQUIERDA: SECTORES ECONÓMICOS DE INSERCIÓN -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:10px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-chart-pie" style="color:#F39200;"></i> Sectores Económicos de Inserción Laboral
                </h5>
                <span style="font-size:0.7rem; font-weight:700; color:#64748B;">Distribución de Graduados Ocupados</span>
            </div>

            <p style="font-size:0.76rem; color:#4B5563; margin:0 0 14px; line-height:1.4;">
                Los graduados de Administración de Empresas se desempeñan activamente en <strong>diferentes sectores económicos</strong> del departamento de Santander y del territorio nacional, demostrando la versatilidad y pertinencia del diseño curricular:
            </p>

            <div style="display:flex; flex-direction:column; gap:10px;">
                
                <!-- SECTOR 1: BANCA Y SERVICIOS FINANCIEROS -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-university" style="color:#D97706; width:16px;"></i> Banca, Seguros y Servicios Financieros</span>
                        <span style="color:#D97706;">13.6% (6 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:13.6%; height:100%; background:#D97706; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 2: COMERCIO AL POR MAYOR Y DETAL -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-store" style="color:#EA580C; width:16px;"></i> Comercio al por Mayor y al Detal (Retail)</span>
                        <span style="color:#EA580C;">11.4% (5 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:11.4%; height:100%; background:#EA580C; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 3: TRANSPORTE Y LOGÍSTICA -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-truck-moving" style="color:#2563EB; width:16px;"></i> Transporte, Envíos y Logística de Carga</span>
                        <span style="color:#2563EB;">11.4% (5 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:11.4%; height:100%; background:#2563EB; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 4: ALIMENTOS Y AGROINDUSTRIA -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-utensils" style="color:#10B981; width:16px;"></i> Alimentos, Gastronomía y Agroindustria</span>
                        <span style="color:#10B981;">11.4% (5 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:11.4%; height:100%; background:#10B981; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 5: SALUD Y FARMACÉUTICO -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-heartbeat" style="color:#C8102E; width:16px;"></i> Salud, Clínicas y Sector Farmacéutico</span>
                        <span style="color:#C8102E;">9.1% (4 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:9.1%; height:100%; background:#C8102E; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 6: INDUSTRIA, AUTOMOTRIZ Y ENERGÍA -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-car" style="color:#7C3AED; width:16px;"></i> Manufactura, Textil, Automotriz y Gas/Petróleo</span>
                        <span style="color:#7C3AED;">9.1% (4 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:9.1%; height:100%; background:#7C3AED; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 7: EDUCACIÓN Y FORMACIÓN -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-graduation-cap" style="color:#0284C7; width:16px;"></i> Educación Superior y Formación para el Trabajo</span>
                        <span style="color:#0284C7;">9.1% (4 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:9.1%; height:100%; background:#0284C7; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 8: PÚBLICO Y SERVICIOS PÚBLICOS -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-landmark" style="color:#475569; width:16px;"></i> Sector Público y Servicios Públicos Domiciliarios</span>
                        <span style="color:#475569;">4.5% (2 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:4.5%; height:100%; background:#475569; border-radius:4px;"></div>
                    </div>
                </div>

                <!-- SECTOR 9: CONSULTORÍA Y SERVICIOS EMPRESARIALES -->
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; margin-bottom:3px;">
                        <span style="color:#1E293B;"><i class="fas fa-users-cog" style="color:#1A1A1B; width:16px;"></i> Consultoría, Gestión Humana y Otros Servicios</span>
                        <span style="color:#1A1A1B;">20.4% (9 egresados)</span>
                    </div>
                    <div style="height:7px; background:#F1F5F9; border-radius:4px; overflow:hidden;">
                        <div style="width:20.4%; height:100%; background:#1A1A1B; border-radius:4px;"></div>
                    </div>
                </div>

            </div>
        </div>

        <!-- COLUMNA DERECHA: NIVEL DE CARGO Y RANGO SALARIAL -->
        <div style="display:flex; flex-direction:column; gap:16px;">
            
            <!-- NIVEL DE CARGOS -->
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-id-badge" style="color:#10B981;"></i> Nivel de Cargo Desempeñado
                    </h5>
                    <span style="font-size:0.68rem; font-weight:700; color:#16A34A;">Ascenso Profesional</span>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:10px; text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#166534;">22.7%</div>
                        <div style="font-size:0.7rem; font-weight:800; color:#15803D; text-transform:uppercase;">Directivo / Gerencial</div>
                        <div style="font-size:0.65rem; color:#4B5563;">Directores, Coordinadores, Jefaturas</div>
                    </div>
                    <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:8px; padding:10px; text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#1E40AF;">18.2%</div>
                        <div style="font-size:0.7rem; font-weight:800; color:#1D4ED8; text-transform:uppercase;">Profesional / Docente</div>
                        <div style="font-size:0.65rem; color:#4B5563;">Asesores y Profesionales Especializados</div>
                    </div>
                    <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:8px; padding:10px; text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#C2410C;">40.9%</div>
                        <div style="font-size:0.7rem; font-weight:800; color:#EA580C; text-transform:uppercase;">Asistente / Analista</div>
                        <div style="font-size:0.65rem; color:#4B5563;">Gestión Administrativa y Financiera</div>
                    </div>
                    <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:8px; padding:10px; text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#0F172A;">18.2%</div>
                        <div style="font-size:0.7rem; font-weight:800; color:#334155; text-transform:uppercase;">Empresario / Indep.</div>
                        <div style="font-size:0.65rem; color:#4B5563;">Emprendimiento y Operaciones</div>
                    </div>
                </div>
            </div>

            <!-- RANGO SALARIAL -->
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-dollar-sign" style="color:#F39200;"></i> Rango Salarial Percibido
                    </h5>
                    <span style="font-size:0.68rem; font-weight:700; color:#B45309;">Retorno de Inversión</span>
                </div>
                <p style="font-size:0.75rem; color:#4B5563; margin:0 0 10px; line-height:1.4;">
                    El <strong>56.8%</strong> de los egresados percibe ingresos superiores a 1.5 SMMLV, alcanzando hasta 4 SMMLV en cargos directivos y de coordinación:
                </p>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                    <span style="background:#F1F5F9; border:1px solid #E2E8F0; padding:4px 10px; border-radius:15px; font-size:0.72rem; color:#334155; font-weight:700;">
                        1 a 1.5 MM: <strong>34.1%</strong>
                    </span>
                    <span style="background:#FEF3C7; border:1px solid #FDE68A; padding:4px 10px; border-radius:15px; font-size:0.72rem; color:#92400E; font-weight:700;">
                        1.5 a 2 MM: <strong>27.3%</strong>
                    </span>
                    <span style="background:#DCFCE7; border:1px solid #86EFAC; padding:4px 10px; border-radius:15px; font-size:0.72rem; color:#166534; font-weight:700;">
                        2 a 2.5 MM: <strong>15.9%</strong>
                    </span>
                    <span style="background:#EFF6FF; border:1px solid #BFDBFE; padding:4px 10px; border-radius:15px; font-size:0.72rem; color:#1E40AF; font-weight:700;">
                        2.5 a 4 MM: <strong>13.6%</strong>
                    </span>
                </div>
            </div>

        </div>

    </div>

    <!-- VITRINA DE EMPRESAS EMPLEADORAS REALES REPORTADAS POR LOS GRADUADOS -->
    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:18px 22px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px; border-bottom:1px solid #E2E8F0; padding-bottom:10px;">
            <div style="display:flex; align-items:center; gap:8px;">
                <i class="fas fa-building" style="color:#F39200; font-size:1.1rem;"></i>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0;">
                    Empresas e Instituciones Empleadoras de los Graduados del Programa
                </h5>
            </div>
            <span style="font-size:0.7rem; color:#64748B; font-weight:700;">Evidencias Verificables en Santander y Colombia</span>
        </div>
        
        <p style="font-size:0.76rem; color:#475569; margin:0 0 12px; line-height:1.45;">
            Los graduados encuestados certifican su vinculación laboral, directiva o empresarial en destacadas organizaciones de los sectores agroindustrial, financiero, logístico, salud, comercio y gubernamental:
        </p>

        <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-egg" style="color:#F59E0B;"></i> Incubadora Santander (Huevos Kikes)
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-shipping-fast" style="color:#DC2626;"></i> DHL Express Colombia S.A.S.
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-notes-medical" style="color:#0284C7;"></i> Colsanitas Medicina Prepagada
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-hospital" style="color:#059669;"></i> Hospital Internacional de Colombia (HIC)
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-university" style="color:#2563EB;"></i> Banco BBVA Colombia
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-hand-holding-usd" style="color:#16A34A;"></i> Mi Banco
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-shield-alt" style="color:#D97706;"></i> Aprogresar Seguros
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-file-invoice-dollar" style="color:#7C3AED;"></i> AML Seguros &amp; Servicios Ltda.
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-landmark" style="color:#475569;"></i> Gobernación de Santander
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-graduation-cap" style="color:#EA580C;"></i> SENA (Servicio Nacional de Aprendizaje)
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-car" style="color:#10B981;"></i> MYB Soluciones e Inversiones Automotrices S.A.S.
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-pills" style="color:#C8102E;"></i> Laboratorios Bussié S.A.
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-flask" style="color:#0284C7;"></i> Zambon Colombia
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-capsules" style="color:#059669;"></i> Laboratorio Magnofarma SAS
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-cogs" style="color:#64748B;"></i> Pioneer Group S.A.S.
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-tint" style="color:#0284C7;"></i> Empas S.A. (Alcantarillado Santander)
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-shopping-basket" style="color:#EA580C;"></i> Supermercados Más Por Menos
            </span>
            <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#0F172A; padding:5px 12px; border-radius:6px; font-size:0.75rem; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.05); display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-lightbulb" style="color:#D97706;"></i> Strategy Consultoría Estratégica
            </span>
        </div>
    </div>

    <!-- SÍNTESIS DE PERTINENCIA INSTITUCIONAL PARA LA RENOVACIÓN -->
    <div style="background:#FFF9F2; border:1.5px solid #FED7AA; border-left:4px solid #F39200; border-radius:8px; padding:14px 18px; margin-top:20px; display:flex; align-items:flex-start; gap:12px;">
        <i class="fas fa-balance-scale" style="color:#F39200; font-size:1.3rem; margin-top:2px;"></i>
        <div style="font-size:0.78rem; color:#431407; line-height:1.5;">
            <strong>Conclusión del Estudio para la Renovación del Registro Único:</strong> La combinación de una <strong>tasa de ocupación del 93.2%</strong>, coherencia profesional del <strong>85.4%</strong>, rápida inserción laboral (&lt;6 meses) y amplia presencia en los sectores financieros, logísticos, productivos, de salud y agroindustriales de Santander demuestra que el programa de <strong>Administración de Empresas</strong> cuenta con una pertinencia contrastada en el sector productivo real, justificando plenamente la renovación de su Registro Calificado y su optimización a <strong>8 semestres y 144 créditos</strong> bajo la modalidad de <strong>Registro Único (Presencial y Virtual)</strong>.
        </div>
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
        "to_ventaja": "Sede Principal (Calle 41 # 10-30 Centro, Bucaramanga), dotada de aulas multimedia, laboratorios de cómputo y auditorios. Única oferta a 144 créditos y 8 semestres con titulación inclusiva Administrador(a) de Empresas."
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
window.createGooglePinIcon = function(isSantander, progCount) {
    const pinColor = isSantander ? '#EA4335' : '#1A73E8'; // Rojo Google Maps para Santander/TO, Azul Google para resto
    const textColor = isSantander ? '#EA4335' : '#1A73E8';

    return L.divIcon({
        className: 'google-maps-pin',
        html: `
            <div style="position:relative; width:30px; height:40px; cursor:pointer; filter:drop-shadow(0 2px 5px rgba(0,0,0,0.35)); transition:transform 0.18s ease;" onmouseover="this.style.transform='scale(1.2) translateY(-2px)'" onmouseout="this.style.transform='scale(1)'">
                <svg viewBox="0 0 24 36" width="30" height="40" style="display:block;">
                    <path fill="${pinColor}" stroke="#FFFFFF" stroke-width="1.2" d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24c0-6.627-5.373-12-12-12z"/>
                    <circle fill="#FFFFFF" cx="12" cy="11.5" r="5.2"/>
                    <text x="12" y="14" font-family="'Montserrat',Arial,sans-serif" font-size="7.5" font-weight="900" fill="${textColor}" text-anchor="middle">${progCount}</text>
                </svg>
            </div>
        `,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -38]
    });
};


// ==========================================
// CONTROL DE SUBSECCIONES EN PRIMER PLANO (CONDICION 2)
// ==========================================
window.showC2Section = function(sectionId) {
    window._c2ActiveSection = sectionId;
    const sectionIds = [
        'c2-eje-1',
        'c2-eje-2',
        'c2-eje-3',
        'c2-eje-4',
        'c2-eje-5',
        'c2-eje-6',
        'c2-eje-7',
        'c2-eje-8',
        'c2-eje-9'
    ];
    sectionIds.forEach(function(id) {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = (id === sectionId) ? 'block' : 'none';
        }
    });

    const bar = document.getElementById('c2-subtabs-bar');
    if (bar) {
        const btns = bar.querySelectorAll('.c2-subtab-btn');
        btns.forEach(function(btn) {
            const target = btn.getAttribute('data-c2-target');
            if (target === sectionId) {
                btn.style.background = '#1A1A1B';
                btn.style.color = '#FFFFFF';
                btn.style.border = '1.5px solid #F39200';
                btn.style.fontWeight = '800';
                btn.style.boxShadow = '0 2px 8px rgba(243,146,0,0.25)';
            } else {
                btn.style.background = '#F8FAFC';
                btn.style.color = '#334155';
                btn.style.border = '1px solid #CBD5E1';
                btn.style.fontWeight = '700';
                btn.style.boxShadow = 'none';
            }
        });

        try {
            bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch(e) {}
    }

    if (sectionId === 'c2-eje-3') {
        setTimeout(function() {
            if (window._leafletMapInstance) {
                window._leafletMapInstance.invalidateSize();
            }
        }, 150);
    }
    if (sectionId === 'c2-eje-8') {
        setTimeout(function() {
            if (window._chartC2MatInstance) window._chartC2MatInstance.resize();
            if (window._chartC2PermInstance) window._chartC2PermInstance.resize();
        }, 150);
    }
};

window.c2Init = function() {
    if (!window._c2ActiveSection) window._c2ActiveSection = "c2-eje-1";
    window.showC2Section(window._c2ActiveSection);
    const mapEl = document.getElementById('toGeoMap') || document.getElementById('mapaColombia');
    if (!mapEl) return;

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

    // Instanciar mapa centrado en Colombia
    window._leafletMapInstance = L.map(mapEl, {
        center: [4.5709, -73.6500],
        zoom: 5.6,
        minZoom: 4.8,
        maxZoom: 18,
        scrollWheelZoom: true,
        zoomControl: true
    });

    // ========================================================
    // CAPAS BASE GOOGLE MAPS OFICIALES (CERO MARCAS DE AGUA)
    // ========================================================
    // 1. Google Terrain (Relieve con sombreado de montañas y vegetación natural)
    window._googleTerrain = L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps &copy; SNIES - MEN'
    });

    // 2. Google Roadmap (Calles y carreteras)
    window._googleRoadmap = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps &copy; SNIES - MEN'
    });

    // 3. Google Satellite Hybrid (Satelital fotográfico de alta resolución)
    window._googleSatellite = L.tileLayer('https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps Satélite'
    });

    // CAPA BASE POR DEFECTO: Google Maps Terreno / Relieve (Verde natural, océanos azules, relieve andino)
    window._currentBaseLayer = window._googleTerrain;
    window._currentBaseLayer.addTo(window._leafletMapInstance);

    // Dibuja el croquis de departamentos adaptado a Google Maps
    window._renderColombiaDepartamentos();

    // Renderizar chips y marcadores estilo Google Pins
    window.renderMunicipioChips(window._currentGeoMode);
    window.renderGeoMarkers(window._currentGeoMode);

    // Panel lateral inicial limpio
    window.renderInitialSidePanel(window._currentGeoMode);

    // Inicializar gráficas de tendencia Condición 2 (Tablas 12 y 13)
    if (window.initC2Charts) {
        window.initC2Charts();
    }

    [80, 250, 500, 1000].forEach(delay => {
        setTimeout(() => {
            if (window._leafletMapInstance) {
                window._leafletMapInstance.invalidateSize(true);
            }
        }, delay);
    });
};

window.switchGoogleMapLayer = function(layerType) {
    if (!window._leafletMapInstance) return;

    if (window._currentBaseLayer) {
        window._leafletMapInstance.removeLayer(window._currentBaseLayer);
    }

    const btnTerrain = document.getElementById('btnGoogleTerrain');
    const btnStreet = document.getElementById('btnGoogleStreet');
    const btnSat = document.getElementById('btnGoogleSat');

    [btnTerrain, btnStreet, btnSat].forEach(btn => {
        if (btn) { btn.style.background = '#FFFFFF'; btn.style.color = '#1A1A1B'; }
    });

    if (layerType === 'satellite') {
        window._currentBaseLayer = window._googleSatellite;
        if (btnSat) { btnSat.style.background = '#4285F4'; btnSat.style.color = '#FFFFFF'; }
    } else if (layerType === 'roadmap') {
        window._currentBaseLayer = window._googleRoadmap;
        if (btnStreet) { btnStreet.style.background = '#4285F4'; btnStreet.style.color = '#FFFFFF'; }
    } else {
        window._currentBaseLayer = window._googleTerrain;
        if (btnTerrain) { btnTerrain.style.background = '#4285F4'; btnTerrain.style.color = '#FFFFFF'; }
    }

    window._currentBaseLayer.addTo(window._leafletMapInstance);
    if (window._currentBaseLayer.bringToBack) {
        window._currentBaseLayer.bringToBack();
    }
};

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
                color: isSantander ? '#EA4335' : '#1E293B',
                weight: isSantander ? 2.8 : 1.2,
                opacity: 0.9,
                fillColor: isSantander ? '#F39200' : '#FFFFFF',
                fillOpacity: isSantander ? 0.22 : 0.04,
                dashArray: isSantander ? '' : '3, 3'
            };
        },
        onEachFeature: function(feature, layer) {
            const props = feature.properties || {};
            const nom = props.nombre || '';
            const dcode = props.dpto || '';
            const isSantander = nom.toUpperCase().includes('SANTANDER') && !nom.toUpperCase().includes('NORTE');

            const mode = window._currentGeoMode || 'presencial';
            const rawNodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const nodes = rawNodes.filter(n => !n.programas.startsWith('0') && !n.programas.startsWith('0 '));
            const matchingNode = nodes.find(n => n.dcode === dcode || (n.nombre && n.nombre.toUpperCase().includes(nom.toUpperCase())));

            const progCount = matchingNode ? matchingNode.programas.split(' ')[0] : '0';

            const tooltipHtml = isSantander 
                ? `<strong>${nom}</strong><br><span style="color:#EA4335; font-weight:800;">Sede Principal TO &bull; 18 Programas SNIES</span>`
                : `<strong>${nom}</strong><br><span style="color:#0F172A; font-weight:700;">SNIES: ${progCount} Programas</span><br><span style="font-size:0.65rem; color:#64748B;">Clic para ver ficha oficial MEN</span>`;

            layer.bindTooltip(tooltipHtml, {
                sticky: true,
                direction: 'top',
                className: 'custom-geo-tooltip'
            });

            layer.on('mouseover', function() {
                if (!isSantander) {
                    layer.setStyle({
                        weight: 2.2,
                        color: '#EA4335',
                        fillColor: '#EA4335',
                        fillOpacity: 0.2
                    });
                }
            });

            layer.on('mouseout', function() {
                if (window._colombiaGeoLayer) {
                    window._colombiaGeoLayer.resetStyle(layer);
                }
            });

            layer.on('click', function() {
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

window.setMapView = function(target) {
    if (!window._leafletMapInstance) return;
    const btnNac = document.getElementById('btnViewNacional');
    const btnSan = document.getElementById('btnViewSantander');

    if (target === 'colombia') {
        window._leafletMapInstance.setView([4.5709, -73.6500], 5.6);
        if (btnNac) { btnNac.style.background = '#F39200'; btnNac.style.color = '#FFFFFF'; }
        if (btnSan) { btnSan.style.background = '#1E293B'; btnSan.style.color = '#FFFFFF'; }
    } else {
        window._leafletMapInstance.setView([7.0600, -73.1200], 9.8);
        if (btnSan) { btnSan.style.background = '#F39200'; btnSan.style.color = '#FFFFFF'; }
        if (btnNac) { btnNac.style.background = '#1E293B'; btnNac.style.color = '#FFFFFF'; }
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
        if (statusText) statusText.innerText = 'Presencial: 245 Programas SNIES en 26 Entidades Territoriales';
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
        if (statusText) statusText.innerText = 'Virtual: 44 Programas SNIES & Cobertura en 32 Departamentos';
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

    let filteredNodes = allNodes.filter(n => !n.programas.startsWith('0') && !n.programas.startsWith('0 '));
    if (currentFilter === 'santander') {
        filteredNodes = allNodes.filter(n => n.tipo === 'municipio_santander' || n.id === 'santander');
    } else if (currentFilter === 'colombia') {
        filteredNodes = allNodes.filter(n => n.tipo === 'departamento_colombia');
    }

    const filterTabsHtml = `
        <div style="display:flex; gap:6px; margin-bottom:8px; width:100%; border-bottom:1px solid #E2E8F0; padding-bottom:6px;">
            <button onclick="window.setGeoChipFilter('all')" style="background:${currentFilter==='all'?'#0F172A':'#F1F5F9'}; color:${currentFilter==='all'?'#FFFFFF':'#475569'}; border:none; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
                Todos (${allNodes.length})
            </button>
            <button onclick="window.setGeoChipFilter('santander')" style="background:${currentFilter==='santander'?'#F39200':'#F1F5F9'}; color:${currentFilter==='santander'?'#FFFFFF':'#475569'}; border:none; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
                Santander con Oferta Registrada (4)
            </button>
            <button onclick="window.setGeoChipFilter('colombia')" style="background:${currentFilter==='colombia'?'#0F172A':'#F1F5F9'}; color:${currentFilter==='colombia'?'#FFFFFF':'#475569'}; border:none; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
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
                <i class="fas fa-map-marker-alt" style="color:${isSantanderNode ? '#EA4335' : '#1A73E8'}; font-size:0.7rem;"></i>
                <span>${node.nombre.split(' (')[0]}</span>
                <span style="background:${isSantanderNode ? 'rgba(234,67,53,0.12)' : 'rgba(26,115,232,0.12)'}; color:${isSantanderNode ? '#EA4335' : '#1A73E8'}; padding:1px 5px; border-radius:8px; font-size:0.65rem; font-weight:800;">
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

    const rawNodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const nodes = rawNodes.filter(n => !n.programas.startsWith('0') && !n.programas.startsWith('0 '));

    nodes.forEach(node => {
        const isSantander = (node.dcode === '68' || node.id === 'santander' || node.tipo === 'municipio_santander');
        const progCount = node.programas.split(' ')[0];

        const pinIcon = window.createGooglePinIcon(isSantander, progCount);

        const marker = L.marker(node.coords, {
            icon: pinIcon,
            zIndexOffset: isSantander ? 1000 : 500
        }).addTo(window._leafletMapInstance);

        marker.bindTooltip(`${node.nombre.split(' (')[0]} &bull; ${progCount} Prog`, {
            direction: 'top',
            offset: [0, -38]
        });

        marker.on('click', () => {
            window.selectGeoNode(node.id, mode);
        });

        const popupContent = `
            <div style="font-family:'Montserrat',sans-serif; min-width:280px; padding:4px 2px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #EA4335; padding-bottom:6px; margin-bottom:8px;">
                    <div>
                        <strong style="color:#0F172A; font-size:0.92rem; display:block; line-height:1.2;">${node.nombre}</strong>
                        <span style="font-size:0.68rem; color:#64748B;">${node.subtitulo}</span>
                    </div>
                    <span style="background:#0F172A; color:#F39200; font-size:0.62rem; padding:2px 6px; border-radius:4px; font-weight:800; white-space:nowrap; margin-left:6px;">SNIES &bull; MEN</span>
                </div>

                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:6px; margin-bottom:8px;">
                    <div style="background:#FFF3E0; border:1px solid #FFE0B2; padding:5px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.56rem; color:#D97F00; text-transform:uppercase; font-weight:800;">Programas</span>
                        <strong style="color:#0F172A; font-size:0.92rem;">${progCount}</strong>
                    </div>
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:5px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.56rem; color:#166534; text-transform:uppercase; font-weight:800;">% Oferta</span>
                        <strong style="color:#166534; font-size:0.82rem;">${node.porcentaje.split(' ')[0]}</strong>
                    </div>
                    <div style="background:#F1F5F9; border:1px solid #CBD5E1; padding:5px 2px; border-radius:6px; text-align:center;">
                        <span style="display:block; font-size:0.56rem; color:#475569; text-transform:uppercase; font-weight:800;">IES</span>
                        <strong style="color:#0F172A; font-size:0.82rem;">${node.universidades.split(' ')[0]}</strong>
                    </div>
                </div>

                <div style="background:#F8FAFC; padding:6px 8px; border-radius:6px; font-size:0.72rem; color:#334155; margin-bottom:6px; border-left:3px solid #EA4335; max-height:80px; overflow-y:auto;">
                    <strong style="color:#0F172A; font-size:0.68rem; text-transform:uppercase;">Oferta Registrada en SNIES:</strong><br>
                    <span>${node.ies_detalle}</span>
                </div>

                <div style="font-size:0.7rem; color:#475569; margin-bottom:6px; line-height:1.35;">
                    <i class="fas fa-industry" style="color:#EA4335;"></i> ${node.empresas}
                </div>

                <div style="background:#FFF5F5; border:1px solid #FED7D7; padding:4px 6px; border-radius:4px; text-align:center;">
                    <span style="font-size:0.68rem; color:#C53030; font-weight:700;">
                        <i class="fas fa-check-circle"></i> Ficha oficial abierta en panel lateral
                    </span>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 320,
            autoPan: true,
            autoPanPaddingTopLeft: [30, 50],
            autoPanPaddingBottomRight: [25, 25],
            offset: [0, -36]
        });

        window._leafletMarkers.push(marker);
        window._geoMarkerMap[node.id] = marker;
    });
};

window.filterGoogleMapSearch = function(query) {
    const resultsContainer = document.getElementById('googleSearchResults');
    if (!resultsContainer) return;

    if (!query || query.trim().length < 2) {
        resultsContainer.style.display = 'none';
        return;
    }

    const q = query.toLowerCase().trim();
    const mode = window._currentGeoMode || 'presencial';
    const rawNodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const nodes = rawNodes.filter(n => !n.programas.startsWith('0') && !n.programas.startsWith('0 '));

    const matches = nodes.filter(n => 
        n.nombre.toLowerCase().includes(q) || 
        n.subtitulo.toLowerCase().includes(q) || 
        n.ies_detalle.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
        resultsContainer.innerHTML = '<div style="padding:8px 12px; font-size:0.72rem; color:#64748B;">No se encontraron resultados en el SNIES</div>';
        resultsContainer.style.display = 'block';
        return;
    }

    resultsContainer.innerHTML = matches.slice(0, 6).map(m => `
        <div 
            onclick="window.selectGeoNode('${m.id}', '${mode}'); document.getElementById('googleSearchResults').style.display='none'; document.getElementById('googleSearchInput').value='${m.nombre.split(' (')[0]}';"
            style="padding:8px 12px; border-bottom:1px solid #F1F5F9; cursor:pointer; font-size:0.75rem; color:#0F172A; display:flex; justify-content:space-between; align-items:center; transition:background 0.15s ease;"
            onmouseover="this.style.background='#F8FAFC'"
            onmouseout="this.style.background='#FFFFFF'"
        >
            <div>
                <strong>${m.nombre.split(' (')[0]}</strong>
                <span style="display:block; font-size:0.65rem; color:#64748B;">${m.subtitulo.slice(0, 35)}...</span>
            </div>
            <span style="background:#FFF7ED; color:#D97F00; padding:2px 6px; border-radius:10px; font-size:0.65rem; font-weight:800;">
                ${m.programas.split(' ')[0]} Prog
            </span>
        </div>
    `).join('');

    resultsContainer.style.display = 'block';
};

window.selectGeoNode = function(nodeId, mode) {
    window._activeGeoNodeId = nodeId;
    const rawNodes = (mode === 'presencial') ? window._geoNodesPresencial : window._geoNodesVirtual;
    const nodes = rawNodes.filter(n => !n.programas.startsWith('0') && !n.programas.startsWith('0 '));
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
    const titleEl = document.getElementById('sideNodeTitle') || document.getElementById('geoDetailTitle');
    const subtitleEl = document.getElementById('sideNodeSubtitle') || document.getElementById('geoDetailSubtitle');
    const contentEl = document.getElementById('sideNodeContent') || document.getElementById('geoDetailContent');
    const footerEl = document.getElementById('sideNodeFooter') || document.getElementById('geoDetailFooter');

    if (!titleEl || !contentEl) return;

    if (mode === 'presencial') {
        titleEl.innerText = 'Colombia & Santander: Oferta Presencial SNIES';
        if (subtitleEl) subtitleEl.innerText = '245 Programas en Colombia &bull; 18 en Santander (Sede Principal TO)';

        contentEl.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
                <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                        <i class="fas fa-building"></i> Colombia
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">245</span>
                    <span style="font-size:0.65rem; color:#64748B; display:block;">Programas SNIES</span>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                        <i class="fas fa-map-marker-alt"></i> Santander
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#166534;">18</span>
                    <span style="font-size:0.65rem; color:#64748B; display:block;">7,35% Oferta Nal.</span>
                </div>
                <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                        <i class="fas fa-award"></i> Estándar TO
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">144</span>
                    <span style="font-size:0.65rem; color:#64748B; display:block;">Créditos / 8 Sem.</span>
                </div>
            </div>

            <div style="background:#FFF9F2; border:1.5px dashed #F39200; border-radius:8px; padding:12px 14px; margin-bottom:12px; text-align:center;">
                <div style="color:#D97F00; font-size:1.1rem; margin-bottom:4px;"><i class="fas fa-hand-pointer"></i></div>
                <strong style="color:#0F172A; font-size:0.82rem; display:block;">Interacción Cartográfica Total SNIES - MEN</strong>
                <p style="margin:4px 0 0; color:#475569; font-size:0.75rem; line-height:1.4;">
                    Haga <strong>clic en cualquier departamento o pin de Google Maps</strong> para desplegar la cantidad oficial de programas SNIES, universidades oferentes, créditos y tejido empresarial vigente.
                </p>
            </div>

            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#0F172A; display:flex; align-items:center; gap:5px; margin-bottom:6px;">
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
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#0F172A;">Corporación Escuela Tecnológica del Oriente (TO):</span>
                <p style="margin:4px 0 0; font-size:0.75rem; color:#475569; line-height:1.45;">
                    Sede Principal Bucaramanga (Calle 41 # 10-30 Centro). Única oferta estructurada a 144 créditos y 8 semestres con titulación profesional inclusiva Administrador(a) de Empresas y articulación directa entre modalidades presencial y virtual.
                </p>
            </div>
        `;

        if (footerEl) {
            footerEl.innerHTML = `<strong>Fuente Oficial:</strong> SNIES - Ministerio de Educación Nacional de Colombia (Tabla 2 y Tabla 5 del Documento Maestro radicado).`;
        }
    } else {
        titleEl.innerText = 'Colombia: Oferta Nacional Virtual SNIES';
        if (subtitleEl) subtitleEl.innerText = '44 Programas en Colombia &bull; Cobertura en los 32 Departamentos';

        contentEl.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
                <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                        <i class="fas fa-wifi"></i> Oferta Virtual
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">44</span>
                    <span style="font-size:0.65rem; color:#64748B; display:block;">Programas Colombia</span>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                        <i class="fas fa-building"></i> Presencial
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#166534;">245</span>
                    <span style="font-size:0.65rem; color:#64748B; display:block;">Programas Base</span>
                </div>
                <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                    <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                        <i class="fas fa-globe-americas"></i> Cobertura
                    </span>
                    <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">32</span>
                    <span style="font-size:0.65rem; color:#64748B; display:block;">Departamentos</span>
                </div>
            </div>

            <div style="background:#FFF9F2; border:1.5px dashed #F39200; border-radius:8px; padding:12px 14px; margin-bottom:12px; text-align:center;">
                <div style="color:#D97F00; font-size:1.1rem; margin-bottom:4px;"><i class="fas fa-hand-pointer"></i></div>
                <strong style="color:#0F172A; font-size:0.82rem; display:block;">Interacción Departamental SNIES</strong>
                <p style="margin:4px 0 0; color:#475569; font-size:0.75rem; line-height:1.4;">
                    Haga <strong>clic en cualquier departamento</strong> para explorar las instituciones líderes virtuales del SNIES (UNAD, Politécnico Grancolombiano, UNIMINUTO, Compensar, UDI, UTS, etc.).
                </p>
            </div>

            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; margin-bottom:10px;">
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#0F172A; display:flex; align-items:center; gap:5px; margin-bottom:6px;">
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

        if (footerEl) {
            footerEl.innerHTML = `<strong>Fuente Oficial:</strong> SNIES - Ministerio de Educación Nacional de Colombia (Tabla 7 del Documento Maestro radicado).`;
        }
    }
};

window.updateSidePanel = function(node, mode) {
    const titleEl = document.getElementById('sideNodeTitle') || document.getElementById('geoDetailTitle');
    const subtitleEl = document.getElementById('sideNodeSubtitle') || document.getElementById('geoDetailSubtitle');
    const contentEl = document.getElementById('sideNodeContent') || document.getElementById('geoDetailContent');
    const footerEl = document.getElementById('sideNodeFooter') || document.getElementById('geoDetailFooter');

    if (!titleEl || !contentEl) return;

    titleEl.innerText = node.nombre;
    if (subtitleEl) subtitleEl.innerText = node.subtitulo;

    const isSantander = (node.dcode === '68' || node.id === 'santander' || node.tipo === 'municipio_santander');
    const progCount = node.programas.split(' ')[0];

    contentEl.innerHTML = `
        <div style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
            <span style="background:#0F172A; color:#F39200; font-size:0.65rem; padding:3px 8px; border-radius:4px; font-weight:800;">
                <i class="fas fa-certificate"></i> SNIES &bull; MEN
            </span>
            <button onclick="window.resetGeoSelection('${mode}')" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-size:0.72rem; padding:4px 10px; border-radius:14px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s ease;">
                <i class="fas fa-undo" style="color:#F39200;"></i> Ver Resumen General
            </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
            <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-left:3px solid #F39200; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:block;">
                    <i class="fas fa-graduation-cap"></i> Programas
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#0F172A;">${progCount}</span>
                <span style="font-size:0.65rem; color:#64748B; display:block;">${node.programas.includes('Directos') ? 'Directos' : 'Registrados'}</span>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:3px solid #2ECC71; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#166534; display:block;">
                    <i class="fas fa-percentage"></i> % Oferta
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#166534;">${node.porcentaje.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#64748B; display:block;">${node.tipo === 'municipio_santander' ? 'Santander' : 'Nacional'}</span>
            </div>
            <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-left:3px solid #475569; border-radius:6px; padding:10px 4px; text-align:center;">
                <span style="font-size:0.62rem; text-transform:uppercase; font-weight:800; color:#475569; display:block;">
                    <i class="fas fa-university"></i> Instituciones
                </span>
                <span style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#0F172A;">${node.universidades.split(' ')[0]}</span>
                <span style="font-size:0.65rem; color:#64748B; display:block;">IES Oficiales</span>
            </div>
        </div>

        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#EA4335; display:flex; align-items:center; gap:5px;">
                    <i class="fas fa-university"></i> Oferta IES (${node.universidades})
                </span>
                <span style="font-size:0.68rem; background:#F1F5F9; color:#0F172A; padding:2px 6px; border-radius:4px; font-weight:700;">SNIES / MEN</span>
            </div>
            <p style="margin:2px 0 0; color:#0F172A; font-size:0.78rem; line-height:1.45;">${node.ies_detalle}</p>
        </div>

        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#0F172A; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-briefcase" style="color:#F39200;"></i> Tejido Empresarial &amp; Demanda Productiva
            </span>
            <p style="margin:3px 0 0; color:#0F172A; font-weight:600; font-size:0.8rem; line-height:1.4;">${node.empresas}</p>
            <p style="margin:2px 0 0; color:#64748B; font-size:0.75rem;">${node.densidad}</p>
        </div>

        <div style="margin-bottom:10px; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#0F172A; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-chart-pie" style="color:#2ECC71;"></i> Perfil de Pertinencia Laboral
            </span>
            <p style="margin:3px 0 0; font-size:0.78rem; color:#475569; line-height:1.45;">${node.demanda}</p>
        </div>

        <div style="background:#FFF9F2; border-left:4px solid #F39200; padding:10px 12px; border-radius:6px; box-shadow:0 1px 4px rgba(243,146,0,0.08);">
            <span style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:#D97F00; display:flex; align-items:center; gap:5px;">
                <i class="fas fa-award"></i> Propuesta Diferencial TO
            </span>
            <p style="margin:3px 0 0; font-size:0.78rem; color:#0F172A; font-weight:500; line-height:1.45;">${node.to_ventaja}</p>
        </div>
    `;

    if (footerEl) {
        if (node.tipo === 'municipio_santander') {
            footerEl.innerHTML = `<strong>Santander (18 programas &bull; 7,35% del país):</strong> La propuesta de la <strong>TO</strong> es la única con articulación directa a 144 créditos y 8 semestres en Registro Calificado Único con titulación inclusiva.`;
        } else {
            footerEl.innerHTML = `<strong>Cobertura Nacional SNIES (245 programas presenciales &bull; 44 virtuales):</strong> Bajo el Registro Único, la <strong>TO</strong> amplía cobertura a 32 departamentos con unicidad curricular y estándares de alta calidad.`;
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
    if (btnSan) { btnSan.style.background = '#1E293B'; btnSan.style.color = '#FFFFFF'; }
    window._activeGeoNodeId = null;
    window.renderMunicipioChips(mode);
    window.renderGeoMarkers(mode);
    window.renderInitialSidePanel(mode);
};



// ==========================================
// GRÁFICAS DE TENDENCIA CONDICIÓN 2 (TABLAS 12 Y 13)
// ==========================================
window.initC2Charts = function() {
    // 1. Gráfico de Matrícula (Tabla 12)
    const ctxMat = document.getElementById('chartC2Matricula');
    if (ctxMat && typeof Chart !== 'undefined') {
        if (window._chartC2MatInstance) {
            try { window._chartC2MatInstance.destroy(); } catch(e) {}
            window._chartC2MatInstance = null;
        }

        window._chartC2MatInstance = new Chart(ctxMat, {
            data: {
                labels: ['2020-2', '2021-1', '2021-2', '2022-1', '2022-2', '2023-1', '2023-2', '2024-1', '2024-2', '2025-1', '2025-2'],
                datasets: [
                    {
                        label: 'Matriculados (Tendencia)',
                        type: 'line',
                        data: [13, 28, 46, 54, 62, 59, 48, 42, 38, 72, 114],
                        borderColor: '#F39200',
                        backgroundColor: 'rgba(243, 146, 0, 0.16)',
                        borderWidth: 3.5,
                        pointBackgroundColor: '#FFFFFF',
                        pointBorderColor: '#F39200',
                        pointBorderWidth: 2.5,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        fill: true,
                        tension: 0.35,
                        order: 1
                    },
                    {
                        label: 'Admitidos',
                        type: 'bar',
                        data: [20, 32, 52, 61, 69, 65, 50, 48, 45, 80, 120],
                        backgroundColor: 'rgba(52, 152, 219, 0.55)',
                        hoverBackgroundColor: 'rgba(52, 152, 219, 0.8)',
                        borderRadius: 4,
                        barPercentage: 0.65,
                        order: 2
                    },
                    {
                        label: 'Inscritos',
                        type: 'bar',
                        data: [25, 37, 60, 74, 78, 75, 55, 56, 65, 88, 127],
                        backgroundColor: 'rgba(26, 26, 27, 0.25)',
                        hoverBackgroundColor: 'rgba(26, 26, 27, 0.45)',
                        borderRadius: 4,
                        barPercentage: 0.65,
                        order: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { boxWidth: 12, font: { family: 'Montserrat', size: 10, weight: '700' } }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(26, 26, 27, 0.92)',
                        titleFont: { family: 'Montserrat', size: 11, weight: '700' },
                        bodyFont: { family: 'Montserrat', size: 10 },
                        padding: 8,
                        callbacks: {
                            label: function(ctx) {
                                return ' ' + ctx.dataset.label + ': ' + ctx.parsed.y + ' est.';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#F3F4F6' },
                        ticks: { font: { family: 'Montserrat', size: 9 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: 'Montserrat', size: 9, weight: '600' } }
                    }
                }
            }
        });
    }

    // 2. Gráfico de Permanencia (Tabla 13)
    const ctxPerm = document.getElementById('chartC2Permanencia');
    if (ctxPerm && typeof Chart !== 'undefined') {
        if (window._chartC2PermInstance) {
            try { window._chartC2PermInstance.destroy(); } catch(e) {}
            window._chartC2PermInstance = null;
        }

        window._chartC2PermInstance = new Chart(ctxPerm, {
            type: 'line',
            data: {
                labels: ['2020-2', '2021-1', '2021-2', '2022-1', '2022-2', '2023-1', '2023-2', '2024-1', '2024-2', '2025-1', '2025-2'],
                datasets: [
                    {
                        label: 'Permanencia Semestral (%)',
                        data: [61.5, 82.1, 63.0, 61.1, 85.5, 76.3, 81.3, 92.9, 92.1, 94.4, 86.0],
                        borderColor: '#2ECC71',
                        backgroundColor: 'rgba(46, 204, 113, 0.16)',
                        borderWidth: 3.5,
                        pointBackgroundColor: '#2ECC71',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        fill: true,
                        tension: 0.35
                    },
                    {
                        label: 'Meta Institucional SAT (80.0%)',
                        data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
                        borderColor: '#E74C3C',
                        borderWidth: 2,
                        borderDash: [6, 4],
                        pointRadius: 0,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { boxWidth: 12, font: { family: 'Montserrat', size: 10, weight: '700' } }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(26, 26, 27, 0.92)',
                        titleFont: { family: 'Montserrat', size: 11, weight: '700' },
                        bodyFont: { family: 'Montserrat', size: 10 },
                        padding: 8,
                        callbacks: {
                            label: function(ctx) {
                                return ' ' + ctx.dataset.label + ': ' + ctx.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 50,
                        max: 100,
                        grid: { color: '#F3F4F6' },
                        ticks: {
                            stepSize: 10,
                            callback: function(v) { return v + '%'; },
                            font: { family: 'Montserrat', size: 9 }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: 'Montserrat', size: 9, weight: '600' } }
                    }
                }
            }
        });
    }
};

window.switchT12View = function(view) {
    const chartWrap = document.getElementById('t12ChartWrap');
    const tableWrap = document.getElementById('t12TableWrap');
    const btnChart = document.getElementById('btnT12Chart');
    const btnTable = document.getElementById('btnT12Table');
    const btnBoth = document.getElementById('btnT12Both');
    if (!chartWrap || !tableWrap) return;

    [btnChart, btnTable, btnBoth].forEach(b => {
        if (b) {
            b.style.background = '#F3F4F6';
            b.style.color = '#4B5563';
        }
    });

    if (view === 'chart') {
        chartWrap.style.display = 'block';
        chartWrap.style.height = '310px';
        tableWrap.style.display = 'none';
        if (btnChart) { btnChart.style.background = '#F39200'; btnChart.style.color = '#FFFFFF'; }
    } else if (view === 'table') {
        chartWrap.style.display = 'none';
        tableWrap.style.display = 'block';
        tableWrap.style.maxHeight = '310px';
        if (btnTable) { btnTable.style.background = '#F39200'; btnTable.style.color = '#FFFFFF'; }
    } else { // both
        chartWrap.style.display = 'block';
        chartWrap.style.height = '200px';
        tableWrap.style.display = 'block';
        tableWrap.style.maxHeight = '175px';
        if (btnBoth) { btnBoth.style.background = '#F39200'; btnBoth.style.color = '#FFFFFF'; }
    }

    if (window._chartC2MatInstance) {
        window._chartC2MatInstance.resize();
    }
};

window.switchT13View = function(view) {
    const chartWrap = document.getElementById('t13ChartWrap');
    const tableWrap = document.getElementById('t13TableWrap');
    const btnChart = document.getElementById('btnT13Chart');
    const btnTable = document.getElementById('btnT13Table');
    const btnBoth = document.getElementById('btnT13Both');
    if (!chartWrap || !tableWrap) return;

    [btnChart, btnTable, btnBoth].forEach(b => {
        if (b) {
            b.style.background = '#F3F4F6';
            b.style.color = '#4B5563';
        }
    });

    if (view === 'chart') {
        chartWrap.style.display = 'block';
        chartWrap.style.height = '310px';
        tableWrap.style.display = 'none';
        if (btnChart) { btnChart.style.background = '#2ECC71'; btnChart.style.color = '#FFFFFF'; }
    } else if (view === 'table') {
        chartWrap.style.display = 'none';
        tableWrap.style.display = 'block';
        tableWrap.style.maxHeight = '310px';
        if (btnTable) { btnTable.style.background = '#2ECC71'; btnTable.style.color = '#FFFFFF'; }
    } else { // both
        chartWrap.style.display = 'block';
        chartWrap.style.height = '200px';
        tableWrap.style.display = 'block';
        tableWrap.style.maxHeight = '175px';
        if (btnBoth) { btnBoth.style.background = '#2ECC71'; btnBoth.style.color = '#FFFFFF'; }
    }

    if (window._chartC2PermInstance) {
        window._chartC2PermInstance.resize();
    }
};

(function initC2AutoWatcher() {
    let attempts = 0;
    const watcher = setInterval(() => {
        attempts++;
        const mapEl = document.getElementById('toGeoMap');
        if (mapEl && mapEl.offsetParent !== null) {
            if (!window._leafletMapInstance && window.c2Init) {
                window.c2Init();
            }
        }
        const chartEl = document.getElementById('chartC2Matricula');
        if (chartEl && chartEl.offsetParent !== null) {
            if (!window._chartC2MatInstance && window.initC2Charts) {
                window.initC2Charts();
            }
        }
        if (attempts > 100) clearInterval(watcher);
    }, 250);
})();
