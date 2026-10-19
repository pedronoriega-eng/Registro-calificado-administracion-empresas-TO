// ===================================================================
// SECCIÓN: PRESENTACIÓN INSTITUCIONAL — v2 MEJORADA
// Fuente: Presentación Institucional.pptx (23 slides)
// Con gráficos Chart.js, fotos reales de sedes, estadísticas
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.inst = `
<div class="slide-header" style="border-bottom: 3px solid #C8102E; padding-bottom: 15px; margin-bottom: 25px;">
    <div style="display:flex; align-items:center; gap:15px; margin-bottom:10px;">
        <img src="assets/logo_oficial.png" alt="Logo TO" style="height:60px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.12);">
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase; font-size:1rem; letter-spacing:2px;">Corporación Escuela Tecnológica del Oriente</div>
            <h1 style="color:#1A1A1B; font-size:2.2rem; margin:0; font-weight:800;">Presentación Institucional</h1>
        </div>
    </div>
    <p style="color:#6b7280; font-size:0.95rem; margin:0; font-style:italic;">"Establecer metas es el primer paso para transformar lo invisible en visible." — Tony Robbins</p>
</div>

<!-- ============ NAVEGACIÓN POR PESTAÑAS ============ -->
<div id="instTabBar" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:25px; border-bottom:2px solid #e5e7eb; padding-bottom:12px;">
    <button class="inst-tab-btn active" onclick="window.switchInstTab('identidad')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#1A1A1B; color:white;"><i class="fas fa-university mr-1"></i> Identidad</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('pei')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-book mr-1"></i> PEI</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('evolucion')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-chart-line mr-1"></i> Evolución</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('convenios')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-handshake mr-1"></i> Convenios</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('oferta')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-graduation-cap mr-1"></i> Oferta</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('estudiantes')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-users mr-1"></i> Estudiantes</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('infra')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-building mr-1"></i> Infraestructura</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('retos')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-bullseye mr-1"></i> Retos</button>
</div>

<!-- ==================== TAB: IDENTIDAD ==================== -->
<div id="instTab_identidad" class="inst-tab-content" style="display:block;">
    <!-- Hero Banner -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; min-height:220px; background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 60%, #3A3A3B 100%);">
        <div style="position:absolute; top:0; right:0; width:45%; height:100%; opacity:0.15; background:url('assets/inst_slides/inst_slide_7_img_0.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <img src="assets/logo_oficial.png" alt="Logo" style="height:80px; background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">
                <div>
                    <h2 style="font-size:1.8rem; font-weight:800; margin:0; font-family:'Montserrat',sans-serif;">Tecnológica del Oriente</h2>
                    <p style="font-size:1rem; color:#cbd5e1; margin:5px 0 0;">Institución de Educación Superior · Bucaramanga, Santander</p>
                </div>
            </div>
            <p style="font-size:1.05rem; line-height:1.7; color:#ffffff; max-width:95%; text-align:justify; font-family:'Open Sans', sans-serif;">Institución de Educación Superior que contribuye al desarrollo integral de sus estudiantes, mediante un Modelo Pedagógico denominado <strong style="color:#fbbf24;">"Formación en Contextos de Aplicación"</strong> que incorpora la transferencia del conocimiento a la solución de los problemas reales del entorno.</p>
        </div>
    </div>

    <!-- Contadores animados -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:15px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(26, 26, 27,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #C8102E, #e53e3e); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-school" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">4</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Pregrado Presencial</div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(26, 26, 27,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #1A1A1B, #2D2D2E); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-laptop" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">6</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Pregrado Virtual</div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(26, 26, 27,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #d97706, #f59e0b); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-award" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">3</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Posgrado Presencial</div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(26, 26, 27,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #7c3aed, #8b5cf6); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-wifi" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">4</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Posgrado Virtual</div>
        </div>
    </div>

    <!-- Gráfico de programas -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
        <h3 style="color:#1A1A1B; font-weight:700; font-size:1.2rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#C8102E;"></i>Distribución de Oferta Académica</h3>
        <div style="max-width:400px; margin:0 auto;"><canvas id="instOfertaChart"></canvas></div>
    </div>
</div>

<!-- ==================== TAB: PEI ==================== -->
<div id="instTab_pei" class="inst-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:white; border-radius:16px; padding:30px; margin-bottom:25px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
            <div style="width:50px; height:50px; background:rgba(200,16,46,0.2); border:2px solid #C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-book-open" style="color:#C8102E; font-size:1.3rem;"></i></div>
            <div>
                <h3 style="font-weight:800; font-size:1.5rem; margin:0;">Proyecto Educativo Institucional</h3>
                <p style="color:#94a3b8; margin:0; font-size:0.9rem;">Modelo Pedagógico Constructivista</p>
            </div>
        </div>
        <div style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:10px; padding:20px; margin-bottom:20px;">
            <p style="font-size:1.1rem; line-height:1.7; color:#e2e8f0; margin:0; text-align:center;">"<strong style="color:#fbbf24;">Formación en Contextos de Aplicación</strong>" — Transferencia del conocimiento a la solución de problemas reales del entorno, bajo principios humanísticos y de responsabilidad social y ambiental.</p>
        </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #fef2f2, #fff); border:2px solid #fecaca; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-eye" style="font-size:1.5rem; color:#C8102E;"></i></div>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Visión</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Ser referente nacional en formación integral de profesionales competentes con impacto social y ambiental.</p>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #FFF7ED, #fff); border:2px solid #FED7AA; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-bullhorn" style="font-size:1.5rem; color:#1A1A1B;"></i></div>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Misión</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Contribuir al desarrollo integral mediante transferencia de conocimiento a problemas reales del entorno.</p>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #f0fdf4, #fff); border:2px solid #bbf7d0; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-hands-helping" style="font-size:1.5rem; color:#16a34a;"></i></div>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Principios</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Humanismo, responsabilidad social y ambiental, excelencia académica e innovación pedagógica.</p>
        </div>
    </div>

    <!-- Gráfico rueda interactiva PEI -->
    <!-- Gráfico rueda interactiva PEI -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; display:grid; grid-template-columns:1fr 1.2fr; gap:25px; align-items:start;">
        <div style="text-align:center;">
            <h3 style="color:#1A1A1B; font-weight:700; font-size:1.2rem; margin-bottom:15px; text-align:left;"><i class="fas fa-puzzle-piece mr-2" style="color:#C8102E;"></i>Ejes del Modelo Pedagógico</h3>
            <div style="background:#fafafa; border:1px solid #cbd5e1; border-radius:12px; padding:15px; box-shadow:0 4px 10px rgba(0,0,0,0.02); display:inline-block;">
                <img src="assets/media__1779920604503.png" alt="Ejes del Modelo Pedagógico - PEI" style="max-width:100%; max-height:360px; border-radius:8px; border:1px solid #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display:block; margin:0 auto;">
            </div>
        </div>
        
        <div>
            <h3 style="color:#1A1A1B; font-weight:700; font-size:1.2rem; margin-bottom:15px;"><i class="fas fa-hand-pointer mr-2" style="color:#FF6600;"></i>Seleccione un Eje para explorar</h3>
            
            <!-- Listado interactivo de ejes -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:15px;">
                <button onclick="window.showPeiAxisDetail('excelencia', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #4f46e5; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🛡️ Excelencia Académica</button>
                <button onclick="window.showPeiAxisDetail('corporatividad', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #16a34a; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🤝 Corporatividad</button>
                <button onclick="window.showPeiAxisDetail('flexibilidad', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #ca8a04; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🔄 Flexibilidad Curricular</button>
                <button onclick="window.showPeiAxisDetail('formacion', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #ea580c; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🌱 Formación Integral</button>
                <button onclick="window.showPeiAxisDetail('desarrollo', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #dc2626; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🍀 Desarrollo Sostenible</button>
                <button onclick="window.showPeiAxisDetail('coherencia', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #7c3aed; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🧩 Coherencia y Coexistencia</button>
                <button onclick="window.showPeiAxisDetail('pertinencia', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #EA580C; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🎯 Pertinencia</button>
                <button onclick="window.showPeiAxisDetail('innovacion', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #c084fc; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">💡 Innovación</button>
            </div>

            <!-- Panel de Detalles -->
            <div id="peiAxisDetailPanel" style="background:#f8fafc; border:2px solid #e5e7eb; border-radius:12px; padding:20px; min-height:170px; display:flex; flex-direction:column; justify-content:center; border-left:5px solid #1A1A1B; transition: border-left-color 0.3s;">
                <div id="peiAxisDetailDefault">
                    <h4 style="color:#1A1A1B; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-info-circle mr-2" style="color:#FF6600;"></i>Ejes del PEI</h4>
                    <p style="color:#475569; font-size:0.85rem; line-height:1.5; margin:0;">Seleccione cualquiera de los ejes del modelo PEI de la lista para ver su descripción conceptual y cómo se articula con nuestro modelo educativo.</p>
                </div>
                <div id="peiAxisDetailActive" style="display:none;">
                    <h4 id="peiAxisActiveTitle" style="color:#1A1A1B; font-weight:800; font-size:1.1rem; margin:0 0 8px 0; text-transform:uppercase;">Eje Seleccionado</h4>
                    <p id="peiAxisActiveDesc" style="color:#475569; font-size:0.85rem; line-height:1.5; margin:0; font-style:italic;">Descripción...</p>
                </div>
            </div>
        </div>
    </div>

    <div class="evidence-box" style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:15px; font-weight:bold; font-size:1rem; border-radius:4px; margin-top:20px;">
        <i class="fas fa-folder-open mr-2"></i> Anexo 5: Proyecto Educativo Institucional (PEI) · Anexo 6: Modelo Pedagógico
    </div>
</div>

<!-- ==================== TAB: EVOLUCIÓN ==================== -->
<div id="instTab_evolucion" class="inst-tab-content" style="display:none;">
    <!-- Imagen de la línea temporal del PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; margin-bottom:25px; text-align:center;">
        <h3 style="color:#1A1A1B; font-weight:800; font-size:1.5rem; margin-bottom:5px;"><i class="fas fa-history mr-2" style="color:#C8102E;"></i>Evolución Institucional (1992 – 2024)</h3>
        <p style="color:#6b7280; margin-bottom:15px; font-size:0.95rem;">Más de 30 años de trayectoria en educación superior</p>
        <img src="assets/evolucion_timeline.png" alt="Línea de Tiempo Institucional" style="max-width:100%; border-radius:10px; border:1px solid #e5e7eb; box-shadow:0 4px 15px rgba(0,0,0,0.08);">
    </div>

    <!-- Timeline interactivo -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
        <h3 style="color:#1A1A1B; font-weight:700; font-size:1.3rem; margin-bottom:20px;">Hitos Clave</h3>
        <div class="timeline" style="border-left:4px solid #C8102E; padding-left:25px; margin-left:15px;">
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #FFF7ED, #fff); padding:18px; border-radius:10px; border:1px solid #FED7AA; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#C8102E; border:3px solid white; box-shadow:0 0 0 2px #C8102E;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#C8102E; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">1992</span>
                        <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Fundación Institucional</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Creación de Estatutos Generales y constitución de la Asamblea de Corporados.</p>
                    </div>
                    <i class="fas fa-landmark" style="font-size:1.5rem; color:#C8102E; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #f0fdf4, #fff); padding:18px; border-radius:10px; border:1px solid #bbf7d0; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#16a34a; border:3px solid white; box-shadow:0 0 0 2px #16a34a;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#16a34a; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2004-2009</span>
                        <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Impacto Social</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Lidera el programa Nacional de Erradicación del Analfabetismo. Actualización del PEI.</p>
                    </div>
                    <i class="fas fa-heart" style="font-size:1.5rem; color:#16a34a; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #fef3c7, #fff); padding:18px; border-radius:10px; border:1px solid #fde68a; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#d97706; border:3px solid white; box-shadow:0 0 0 2px #d97706;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#d97706; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2012-2014</span>
                        <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Transformación Institucional</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Cambio de denominación a <strong>Corporación Escuela Tecnológica del Oriente</strong>. Fortalecimiento del modelo virtual e investigación.</p>
                    </div>
                    <i class="fas fa-sync-alt" style="font-size:1.5rem; color:#d97706; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #f5f3ff, #fff); padding:18px; border-radius:10px; border:1px solid #ddd6fe; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#7c3aed; border:3px solid white; box-shadow:0 0 0 2px #7c3aed;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#7c3aed; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2021-2022</span>
                        <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Expansión de Posgrados</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Especialización en Pedagogía y Didácticas Específicas (EGIRSST - EGP). Fortalecimiento de nuevos programas.</p>
                    </div>
                    <i class="fas fa-rocket" style="font-size:1.5rem; color:#7c3aed; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; background:linear-gradient(135deg, #1A1A1B, #2D2D2E); padding:18px; border-radius:10px; color:white; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#fbbf24; border:3px solid white; box-shadow:0 0 0 2px #fbbf24;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#fbbf24; color:#1A1A1B; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2023-2024</span>
                        <h4 style="font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Renovación RC · Concepto Favorable</h4>
                        <p style="color:#cbd5e1; font-size:0.9rem; margin:0;">Renovación de Registro Calificado LEI. Visita de condiciones institucionales exitosa. Acreditación en marcha.</p>
                    </div>
                    <i class="fas fa-trophy" style="font-size:1.5rem; color:#fbbf24; opacity:0.7;"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: CONVENIOS ==================== -->
<div id="instTab_convenios" class="inst-tab-content" style="display:none;">
    <!-- Hero Banner (Uniforme) -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; min-height:220px; background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 60%, #3A3A3B 100%);">
        <div style="position:absolute; top:0; right:0; width:45%; height:100%; opacity:0.15; background:url('assets/inst_slides/inst_slide_7_img_0.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <img src="assets/logo_oficial.png" alt="Logo" style="height:80px; background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">
                <div>
                    <h2 style="font-size:1.8rem; font-weight:800; margin:0; font-family:'Montserrat',sans-serif;">Tecnológica del Oriente</h2>
                    <p style="font-size:1rem; color:#cbd5e1; margin:5px 0 0;">Institución de Educación Superior · Bucaramanga, Santander</p>
                </div>
            </div>
            <p style="font-size:1.05rem; line-height:1.7; color:#ffffff; max-width:95%; text-align:justify; font-family:'Open Sans', sans-serif;">La Corporación Escuela Tecnológica del Oriente promueve activamente la cooperación interinstitucional para enriquecer los procesos de docencia, investigación y proyección social. A través de más de 25 convenios académicos con prestigiosas universidades, más de 100 alianzas estratégicas con el sector público y privado (incluyendo alcaldías, gobernaciones y gremios empresariales), y más de 4 convenios internacionales con instituciones de México, España, Ecuador y Panamá, garantizamos la transferencia efectiva de conocimiento, clases espejo, movilidad académica y espacios idóneos de práctica profesional en contextos reales de aplicación.</p>
        </div>
    </div>

    <!-- Mapa de convenios -->
    <div style="display:grid; grid-template-columns:1fr; gap:20px; margin-bottom:25px;">
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px;">
            <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E); color:white; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#fbbf24;">más de 4</div>
                <div style="font-size:0.85rem; font-weight:600; color:#94a3b8;">Convenios Internacionales</div>
                <div style="font-size:0.75rem; color:#64748b; margin-top:5px;">México · España · Ecuador · Panamá</div>
            </div>
            <div style="background:white; border:2px solid #C8102E; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#C8102E;">más de 25</div>
                <div style="font-size:0.85rem; font-weight:600; color:#6b7280;">Convenios Académicos</div>
                <div style="font-size:0.75rem; color:#9ca3af; margin-top:5px;">Universidades y centros de formación</div>
            </div>
            <div style="background:white; border:2px solid #1A1A1B; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#1A1A1B;">más de 100</div>
                <div style="font-size:0.85rem; font-weight:600; color:#6b7280;">Sector Público y Privado</div>
                <div style="font-size:0.75rem; color:#9ca3af; margin-top:5px;">Gobernaciones, alcaldías, empresas</div>
            </div>
        </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;"><i class="fas fa-globe mr-2" style="color:#C8102E;"></i>Internacionales</h4>
            <div style="display:grid; gap:8px;">
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #F39200;"><span style="font-size:1.2rem;">🇲🇽</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">UNADE de México</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #C8102E;"><span style="font-size:1.2rem;">🇪🇸</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">Universidad de Granada</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #fbbf24;"><span style="font-size:1.2rem;">🇪🇨</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">Universidad de Cuenca</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #16a34a;"><span style="font-size:1.2rem;">🇵🇦</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">UMECIT</div></div></div>
            </div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:15px; border-bottom:2px solid #1A1A1B; padding-bottom:8px;"><i class="fas fa-handshake mr-2" style="color:#1A1A1B;"></i>Nacionales Destacados</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏛️ Gobernación de Santander</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">👮 Policía Nacional</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🎓 SENA</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏢 Fenalco Santander</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏥 Positiva ARL</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏫 Cajasan</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🎓 U. Católica de Colombia</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">📜 Asonal Judicial</div>
            </div>
        </div>
    </div>

    <!-- Gráfico de convenios y galería de alianzas -->
    <div style="display:grid; grid-template-columns:1fr 1.6fr; gap:20px; margin-top:20px; align-items:start;">
        <div style="background:white; border:2px solid #E5E7EB; border-radius:12px; padding:20px;">
            <h3 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#F39200;"></i>Distribución de Convenios</h3>
            <canvas id="instConveniosChart" style="max-height:180px;"></canvas>
            <div style="margin-top:16px; background:#FFF7ED; border:1px solid #FED7AA; border-radius:8px; padding:12px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:900; color:#D97F00; font-family:'Montserrat';">+70 Convenios</div>
                <div style="font-size:0.75rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Activos en el Portal Institucional TO</div>
            </div>
        </div>
        <div style="background:white; border:2px solid #E5E7EB; border-radius:12px; padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:2px solid #F39200; padding-bottom:8px;">
                <h3 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin:0;"><i class="fas fa-handshake mr-2" style="color:#F39200;"></i>Alianzas Estratégicas y Convenios Oficiales</h3>
                <span style="background:#C8102E; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:12px;">15 Aliados Clave</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; max-height:480px; overflow-y:auto; padding-right:5px;">

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/bit_institute.png" alt="BIT Institute" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                BIT Institute
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Privado
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Tecnología y Capacitación Digital
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/strategy_minds.png" alt="Strategy Minds" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Strategy Minds
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Privado
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Consultoría y Estrategia Empresarial
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/ibero.png" alt="Corporación Universitaria Iberoamericana (IBERO)" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Corporación Universitaria Iberoamericana (IBERO)
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Educación Superior
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Cooperación Académica y Movilidad
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/upel.png" alt="UPEL (Univ. Pedagógica Experimental)" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                UPEL (Univ. Pedagógica Experimental)
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Internacional
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Convenio de Posgrados y Doctorado
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/positiva.png" alt="Positiva Compañía de Seguros" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Positiva Compañía de Seguros
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Asegurador / SST
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Prácticas Profesionales y SST
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/u_catolica.png" alt="Universidad Católica" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Universidad Católica
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Educación Superior
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Alianza Académica y Redes de Investigación
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/unigermana.png" alt="Unigermana" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Unigermana
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Educación Superior
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Cooperación Interinstitucional
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/umecit.png" alt="UMECIT Panamá" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                UMECIT Panamá
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Internacional
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Movilidad Internacional y Pasantías
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/prevent_group.png" alt="Prevent Group" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Prevent Group
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Empresarial
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Alianza Productiva y Seguridad Industrial
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/policia_nacional.png" alt="Policía Nacional de Colombia" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Policía Nacional de Colombia
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Nacional
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Formación y Bienestar Institucional
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/personeria_bucaramanga.png" alt="Personería de Bucaramanga" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Personería de Bucaramanga
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Municipal
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Prácticas Profesionales y Derechos
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/gobernacion_santander.png" alt="Gobernación de Santander" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Gobernación de Santander
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Departamental
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Desarrollo Regional y Becas
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/cajasan.png" alt="Cajasan (Caja de Compensación)" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Cajasan (Caja de Compensación)
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Compensación Familiar
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Prácticas, Empleo y Bienestar
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/alcaldia_lebrija.png" alt="Alcaldía Municipal de Lebrija" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Alcaldía Municipal de Lebrija
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Municipal
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Impacto Territorial y Extensión
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/alcaldia_bucaramanga.png" alt="Alcaldía de Bucaramanga" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Alcaldía de Bucaramanga
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Municipal
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Convenio Marco de Ciudad y Empleabilidad
            </div>
        </div>
        
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: OFERTA ==================== -->
<div id="instTab_oferta" class="inst-tab-content" style="display:none;">
    <!-- Encabezado Institucional (Paleta Administración: Carbon y Naranja TO) -->
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 50%, #1A1A1B 100%); color:white; border-left:6px solid #F39200; border-radius:14px; padding:24px 28px; margin-bottom:20px; box-shadow:0 8px 25px rgba(26,26,27,0.18);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
            <div>
                <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(243,146,0,0.18); border:1px solid #F39200; border-radius:20px; padding:4px 12px; margin-bottom:8px;">
                    <i class="fas fa-check-circle" style="color:#F39200; font-size:0.85rem;"></i>
                    <span style="font-size:0.75rem; font-weight:700; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">Información Oficial y Verificable MEN</span>
                </div>
                <h3 style="font-weight:800; font-size:1.55rem; margin:0 0 6px 0; font-family:'Montserrat',sans-serif; color:white;">
                    <i class="fas fa-graduation-cap mr-2" style="color:#F39200;"></i>Oferta Académica Vigente Institucional
                </h3>
                <p style="color:#D1D1D1; margin:0; font-size:0.88rem; max-width:850px; line-height:1.5;">
                    Seleccione cualquier programa para visualizar en ventana emergente sus características sintéticas oficiales (Nivel Académico, Modalidad, Duración en Semestres, Créditos Académicos y Código SNIES). Información sincronizada con el portal oficial: <a href="https://tecnologicadeloriente.edu.co/oferta-academica/" target="_blank" rel="noopener noreferrer" style="color:#F39200; text-decoration:underline; font-weight:700;">tecnologicadeloriente.edu.co/oferta-academica/</a>.
                </p>
            </div>
            <div>
                <a href="https://tecnologicadeloriente.edu.co/oferta-academica/" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; background:#F39200; color:#1A1A1B; font-size:0.82rem; font-weight:800; padding:10px 16px; border-radius:8px; text-decoration:none; box-shadow:0 4px 12px rgba(243,146,0,0.3); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">
                    <i class="fas fa-globe"></i> Portal Institucional TO ↗
                </a>
            </div>
        </div>
    </div>

    <!-- Indicadores Numéricos Consolidados -->
    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:white; border:2px solid #E5E7EB; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">17</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Total Programas</div>
        </div>
        <div style="background:white; border:2px solid #C8102E; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#C8102E; font-family:'Montserrat';">4</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Pregrados Presenciales</div>
        </div>
        <div style="background:white; border:2px solid #F39200; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#F39200; font-family:'Montserrat';">6</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Pregrados Virtuales</div>
        </div>
        <div style="background:white; border:2px solid #D97F00; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#D97F00; font-family:'Montserrat';">3</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Posgrados Presenciales</div>
        </div>
        <div style="background:white; border:2px solid #EA580C; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#EA580C; font-family:'Montserrat';">4</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Posgrados Virtuales</div>
        </div>
    </div>

    <!-- Panel de Selectores Interactivos por Nivel y Modalidad -->
    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px; margin-bottom:20px;">

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #C8102E; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-school" style="color:#C8102E; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Pregrado Presencial</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">4 Programas</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('adm_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-briefcase" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Administración de Empresas (Presencial)<span style="background:#FEF3C7; color:#92400E; font-size:0.6rem; font-weight:800; padding:1px 5px; border-radius:3px; margin-left:4px;">REGISTRO ÚNICO</span>
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>108445</strong> · 9 semestres (Plan Vigente) / 8 semestres (Propuesto)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('lic_infantil_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-child" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Licenciatura en Educación Infantil
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>116357</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('sst_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-shield-alt" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Seguridad y Salud en el Trabajo
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>106177</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('tecnica_sst')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-hard-hat" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Técnica Profesional en Higiene y Seguridad en el Trabajo
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>103527</strong> · 4 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #F39200; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-laptop" style="color:#F39200; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Pregrado Virtual</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">6 Programas</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('adm_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-chart-line" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Administración de Empresas Virtual<span style="background:#FEF3C7; color:#92400E; font-size:0.6rem; font-weight:800; padding:1px 5px; border-radius:3px; margin-left:4px;">REGISTRO ÚNICO</span>
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>115833</strong> · 9 semestres (Plan Vigente) / 8 semestres (Propuesto)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('derecho_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-balance-scale" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Derecho Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>119385</strong> · 10 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('software_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-code" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Ingeniería en Desarrollo de Software
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118074</strong> · 8 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('lic_infantil_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-shapes" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Licenciatura en Educación Infantil Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>115854</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('sst_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-user-shield" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Seguridad y Salud en el Trabajo Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118713</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('ind_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-industry" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Ingeniería Industrial Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>Registro Calificado MEN</strong> · 8 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #D97F00; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-award" style="color:#D97F00; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Posgrado Presencial</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">3 Especializaciones</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('esp_riesgo_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #D97F00; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-notes-medical" style="color:#D97F00; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gerencia Integral del Riesgo, SST
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>110536</strong> · 3 cuatrimestres (1 año)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#D97F00; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_proyectos_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #D97F00; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-tasks" style="color:#D97F00; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gerencia de Proyectos
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>103745</strong> · 2 semestres (1 año)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#D97F00; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_pedagogia_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #D97F00; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-chalkboard-teacher" style="color:#D97F00; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Pedagogía y Didácticas Específicas
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>101639</strong> · 4 trimestres (1 año)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#D97F00; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #EA580C; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-wifi" style="color:#EA580C; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Posgrado Virtual</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">4 Especializaciones</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('esp_bi_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-brain" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Inteligencia de Negocios y Analítica de Datos Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118755</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_innovacion_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-laptop-code" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Innovación Educativa en Entornos Virtuales de Aprendizaje Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>Res. 011264</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_proyectos_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-project-diagram" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gerencia de Proyectos Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118858</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_sst_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-shield-virus" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gestión de la Seguridad y Salud en el Trabajo Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118070</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        
    </div>

    <!-- Nota de Calidad Institucional -->
    <div style="background:#FFF7ED; border:1px solid #FED7AA; border-left:4px solid #F39200; border-radius:8px; padding:14px 18px;">
        <div style="display:flex; align-items:center; gap:12px;">
            <i class="fas fa-info-circle" style="color:#D97F00; font-size:1.2rem;"></i>
            <div style="font-size:0.82rem; color:#7C2D12; line-height:1.45;">
                <strong>Aseguramiento de la Calidad y Registro Único:</strong> Todos los 17 programas institucionales cuentan con Registro Calificado vigente otorgado por el MEN. Para <strong>Administración de Empresas</strong>, la institución defiende la Renovación y Modificación hacia <strong>Registro Único (Presencial y Virtual)</strong> con una estructura curricular consolidada de <strong>8 semestres y 144 créditos académicos</strong>.
            </div>
        </div>
    </div>
</div>

<!-- ==================== MODAL SINTÉTICO DE PROGRAMA ACADÉMICO ==================== -->
<div id="instProgModal" style="display:none; position:fixed; inset:0; background:rgba(26,26,27,0.75); z-index:99999; backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:20px;">
    <div style="background:white; border-radius:14px; max-width:560px; width:100%; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:2px solid #E5E7EB; overflow:hidden; animation:modalFadeIn 0.25s ease-out;">
        <!-- Cabecera del Modal -->
        <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:white; padding:18px 22px; display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #F39200;">
            <div style="display:flex; align-items:center; gap:10px;">
                <div id="modalProgIconWrap" style="width:36px; height:36px; border-radius:50%; background:rgba(243,146,0,0.2); border:1px solid #F39200; display:flex; align-items:center; justify-content:center;">
                    <i id="modalProgIcon" class="fas fa-graduation-cap" style="color:#F39200;"></i>
                </div>
                <div>
                    <span id="modalProgCat" style="font-size:0.68rem; font-weight:800; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">PREGRADO PRESENCIAL</span>
                    <h3 id="modalProgTitle" style="font-size:1.15rem; font-weight:800; margin:2px 0 0; color:white; font-family:'Montserrat'; line-height:1.25;">Administración de Empresas</h3>
                </div>
            </div>
            <button onclick="window.closeProgInfoModal()" style="background:transparent; border:none; color:#D1D1D1; font-size:1.3rem; cursor:pointer; padding:4px 8px; border-radius:4px; line-height:1;" onmouseover="this.style.color='#F39200'" onmouseout="this.style.color='#D1D1D1'">&times;</button>
        </div>

        <!-- Cuerpo del Modal: EXCLUSIVAMENTE Características Sintéticas -->
        <div style="padding:22px;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Nivel Académico</div>
                    <div id="modalProgNivel" style="font-size:0.92rem; font-weight:800; color:#1A1A1B; margin-top:3px;">Profesional Universitario</div>
                </div>
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Modalidad</div>
                    <div id="modalProgModalidad" style="font-size:0.92rem; font-weight:800; color:#F39200; margin-top:3px;">Presencial (Bucaramanga)</div>
                </div>
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Duración (Semestres)</div>
                    <div id="modalProgDuracion" style="font-size:0.92rem; font-weight:800; color:#1A1A1B; margin-top:3px;">9 semestres</div>
                </div>
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Créditos Académicos</div>
                    <div id="modalProgCreditos" style="font-size:0.92rem; font-weight:800; color:#D97F00; margin-top:3px;">158 créditos</div>
                </div>
            </div>

            <!-- Código SNIES y Norma -->
            <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:12px 14px; margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <div>
                        <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Código Oficial SNIES</div>
                        <div id="modalProgSnies" style="font-size:1.15rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat'; letter-spacing:0.5px;">108445</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Base Normativa MEN</div>
                        <div id="modalProgNorma" style="font-size:0.8rem; font-weight:700; color:#4B5563;">Resolución MEN / Acuerdo CS</div>
                    </div>
                </div>
            </div>

            <!-- Destacado opcional (para Administración de Empresas) -->
            <div id="modalProgDestacadoWrap" style="display:none; background:#FFFBEB; border:1px solid #FDE68A; border-radius:8px; padding:10px 14px; margin-bottom:16px; font-size:0.78rem; color:#92400E; font-weight:700;">
                <i class="fas fa-certificate mr-1 text-amber-600"></i><span id="modalProgDestacado"></span>
            </div>

            <!-- Botones de Acción -->
            <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
                <button onclick="window.closeProgInfoModal()" style="background:#E5E7EB; color:#1A1A1B; border:none; padding:8px 16px; border-radius:6px; font-size:0.82rem; font-weight:700; cursor:pointer; transition:background 0.2s;" onmouseover="this.style.background='#D1D1D1'" onmouseout="this.style.background='#E5E7EB'">
                    Cerrar
                </button>
                <a id="modalProgEnlace" href="#" target="_blank" rel="noopener noreferrer" style="background:#1A1A1B; color:#F39200; border:1px solid #F39200; padding:8px 16px; border-radius:6px; font-size:0.82rem; font-weight:800; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;" onmouseover="this.style.background='#F39200'; this.style.color='#1A1A1B'" onmouseout="this.style.background='#1A1A1B'; this.style.color='#F39200'">
                    Ver en Portal Institucional <i class="fas fa-external-link-alt" style="font-size:0.7rem;"></i>
                </a>
            </div>
        </div>
    </div>
</div>




<!-- ==================== TAB: ESTUDIANTES ==================== -->
<div id="instTab_estudiantes" class="inst-tab-content" style="display:none;">
    <!-- Banner con imagen de estudiantes -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; height:200px;">
        <img src="assets/inst_slides/inst_slide_7_img_0.png" alt="Estudiantes" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.4);">
        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column; color:white; text-align:center; padding:20px;">
            <h3 style="font-size:2rem; font-weight:800; margin-bottom:5px; font-family:'Montserrat';">Nuestros Estudiantes</h3>
            <p style="font-size:1.1rem; color:#e2e8f0;">Comunidad estudiantil de la Tecnológica del Oriente</p>
        </div>
    </div>

    <!-- Estadísticas de estudiantes -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:15px; margin-bottom:25px;">
        <div style="background:linear-gradient(135deg, #C8102E, #e53e3e); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-user-graduate" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">16</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Programas Activos</div>
        </div>
        <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-laptop-code" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">9</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Programas Virtuales</div>
        </div>
        <div style="background:linear-gradient(135deg, #16a34a, #22c55e); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-map-marker-alt" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">3</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Sedes Físicas</div>
        </div>
        <div style="background:linear-gradient(135deg, #7c3aed, #8b5cf6); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-globe-americas" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">Nacional</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Cobertura</div>
        </div>
    </div>

    <!-- Gráficos de caracterización -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#C8102E;"></i>Distribución por Modalidad</h4>
            <canvas id="instEstModalidadChart"></canvas>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-bar mr-2" style="color:#1A1A1B;"></i>Matrícula por Nivel</h4>
            <canvas id="instEstNivelChart"></canvas>
        </div>
    </div>

    <!-- Características -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-top:20px;">
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-users" style="font-size:2rem; color:#1A1A1B; margin-bottom:8px;"></i>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Perfil Diverso</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Estudiantes de diferentes departamentos, estratos socioeconómicos y edades.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-clock" style="font-size:2rem; color:#C8102E; margin-bottom:8px;"></i>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Horarios Flexibles</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Jornada mañana, nocturna y virtual para trabajadores y profesionales activos.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-hand-holding-heart" style="font-size:2rem; color:#16a34a; margin-bottom:8px;"></i>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Bienestar Integral</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Estrategias de permanencia, acompañamiento psicosocial y actividades de bienestar.</p>
        </div>
    </div>
</div>

<!-- ==================== TAB: INFRAESTRUCTURA ==================== -->
<div id="instTab_infra" class="inst-tab-content" style="display:none;">
    <!-- Banner Hero de Infraestructura -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; box-shadow:0 8px 30px rgba(26, 26, 27,0.15);">
        <img src="assets/sedes_institucionales.png" alt="Sedes de la Tecnológica del Oriente" style="width:100%; display:block;">
        <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top, rgba(26, 26, 27,0.92) 0%, rgba(26, 26, 27,0.5) 60%, transparent 100%); padding:25px 25px 20px;">
            <h3 style="color:white; font-size:1.6rem; font-weight:800; margin:0 0 5px; font-family:'Montserrat',sans-serif; text-shadow:0 2px 8px rgba(0,0,0,0.3);"><i class="fas fa-building mr-2" style="color:#fbbf24;"></i>Infraestructura Física</h3>
            <p style="color:#cbd5e1; margin:0; font-size:0.9rem;">3 sedes estratégicamente ubicadas en el corazón de Bucaramanga · Más de 3.071 m² de área construida</p>
        </div>
    </div>

    <!-- Tarjetas interactivas de Sedes -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:18px; margin-bottom:25px;">
        <!-- SEDE A -->
        <div style="background:white; border-radius:14px; overflow:hidden; border:2px solid #e5e7eb; transition:all 0.35s cubic-bezier(.4,0,.2,1); cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 35px rgba(200,16,46,0.2)'; this.style.borderColor='#C8102E';" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='#e5e7eb';">
            <div style="background:linear-gradient(135deg, #C8102E, #991b1b); color:white; padding:16px 18px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:800; font-family:'Montserrat';">SEDE A</div>
                <div style="font-size:0.78rem; color:rgba(255,255,255,0.8); margin-top:2px;">📍 Calle 41 # 10-30</div>
            </div>
            <div style="padding:18px;">
                <div style="text-align:center; margin-bottom:14px;">
                    <div style="font-size:2.2rem; font-weight:800; color:#C8102E; font-family:'Montserrat';">1.140</div>
                    <div style="font-size:0.72rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px;">Metros Cuadrados</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.78rem;">
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-door-open mr-1" style="font-size:0.65rem;"></i>11 Aulas</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-flask mr-1" style="font-size:0.65rem;"></i>1 Laboratorio</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-laptop mr-1" style="font-size:0.65rem;"></i>1 Sala Inf.</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-briefcase mr-1" style="font-size:0.65rem;"></i>24 Oficinas</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-book mr-1" style="font-size:0.65rem;"></i>1 Biblioteca</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-restroom mr-1" style="font-size:0.65rem;"></i>14 Bat. Baño</div>
                </div>
            </div>
        </div>
        <!-- SEDE B -->
        <div style="background:white; border-radius:14px; overflow:hidden; border:2px solid #e5e7eb; transition:all 0.35s cubic-bezier(.4,0,.2,1); cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 35px rgba(26, 26, 27,0.2)'; this.style.borderColor='#1A1A1B';" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='#e5e7eb';">
            <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E); color:white; padding:16px 18px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:800; font-family:'Montserrat';">SEDE B</div>
                <div style="font-size:0.78rem; color:rgba(255,255,255,0.8); margin-top:2px;">📍 Cra. 10 No. 35-40</div>
            </div>
            <div style="padding:18px;">
                <div style="text-align:center; margin-bottom:14px;">
                    <div style="font-size:2.2rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">1.527</div>
                    <div style="font-size:0.72rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px;">Metros Cuadrados</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.78rem;">
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-door-open mr-1" style="font-size:0.65rem;"></i>9 Aulas</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-flask mr-1" style="font-size:0.65rem;"></i>1 Laboratorio</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-laptop mr-1" style="font-size:0.65rem;"></i>1 Sala Inf.</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-briefcase mr-1" style="font-size:0.65rem;"></i>4 Oficinas</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-book mr-1" style="font-size:0.65rem;"></i>1 Biblioteca</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-theater-masks mr-1" style="font-size:0.65rem;"></i>1 Auditorio</div>
                </div>
            </div>
        </div>
        <!-- SEDE C -->
        <div style="background:white; border-radius:14px; overflow:hidden; border:2px solid #e5e7eb; transition:all 0.35s cubic-bezier(.4,0,.2,1); cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 35px rgba(217,119,6,0.2)'; this.style.borderColor='#d97706';" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='#e5e7eb';">
            <div style="background:linear-gradient(135deg, #d97706, #b45309); color:white; padding:16px 18px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:800; font-family:'Montserrat';">SEDE C</div>
                <div style="font-size:0.78rem; color:rgba(255,255,255,0.8); margin-top:2px;">📍 Cra 10 # 41-73</div>
            </div>
            <div style="padding:18px;">
                <div style="text-align:center; margin-bottom:14px;">
                    <div style="font-size:2.2rem; font-weight:800; color:#d97706; font-family:'Montserrat';">404</div>
                    <div style="font-size:0.72rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px;">Metros Cuadrados</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.78rem;">
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-door-open mr-1" style="font-size:0.65rem;"></i>6 Aulas</div>
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-briefcase mr-1" style="font-size:0.65rem;"></i>2 Oficinas</div>
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-laptop mr-1" style="font-size:0.65rem;"></i>1 Sala Inf.</div>
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-restroom mr-1" style="font-size:0.65rem;"></i>4 Bat. Baño</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Resumen de Recursos Totales -->
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); border-radius:14px; padding:22px 25px; margin-bottom:25px; display:flex; justify-content:space-around; flex-wrap:wrap; gap:12px;">
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">26</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Aulas de Clase</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">2</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Laboratorios</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">3</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Salas Informáticas</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">30</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Oficinas Admin.</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">3.071</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">m² Totales</div></div>
    </div>

    <!-- Sedes recreativas -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; overflow:hidden;">
        <div style="background:linear-gradient(135deg, #16a34a, #15803d); color:white; padding:15px 20px;"><h4 style="margin:0; font-weight:700; font-size:1.15rem;"><i class="fas fa-tree mr-2"></i>Sedes Recreativas y Deportivas</h4></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0;">
            <div style="padding:0;"><img src="assets/inst_slides/inst_slide_18_img_1.png" alt="Instalaciones deportivas" style="width:100%; height:200px; object-fit:cover;"></div>
            <div style="padding:0;"><img src="assets/inst_slides/inst_slide_18_img_2.jpg" alt="Cajasan Campo Alegre" style="width:100%; height:200px; object-fit:cover;"></div>
        </div>
        <div style="padding:15px; display:flex; gap:15px;">
            <div style="flex:1; background:#f0fdf4; padding:12px; border-radius:8px; border-left:3px solid #16a34a; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''"><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;"><i class="fas fa-futbol mr-1" style="color:#16a34a;"></i>Recrear la Victoria</div><div style="font-size:0.8rem; color:#6b7280;">Canchas, piscinas y zonas verdes</div></div>
            <div style="flex:1; background:#f0fdf4; padding:12px; border-radius:8px; border-left:3px solid #16a34a; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''"><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;"><i class="fas fa-swimming-pool mr-1" style="color:#16a34a;"></i>Cajasan Campo Alegre</div><div style="font-size:0.8rem; color:#6b7280;">Bienestar institucional</div></div>
        </div>
    </div>
</div>

<!-- ==================== TAB: RETOS ==================== -->
<div id="instTab_retos" class="inst-tab-content" style="display:none;">
    <!-- Imagen de retos del PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; margin-bottom:25px; text-align:center; display:flex; justify-content:center; align-items:center;">
        <img src="assets/inst_slides/inst_slide_19_img_1.png" alt="Retos Estratégicos" style="max-width:450px; width:100%; border-radius:10px; display:block; margin:0 auto;">
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <!-- Retos 2025 -->
        <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:white; border-radius:12px; padding:25px;">
            <h4 style="font-weight:700; font-size:1.25rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-flag-checkered mr-2"></i>Retos 2025</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #fbbf24; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                    <div style="font-weight:700; font-size:0.88rem; color:#fbbf24;">🌎 Presencia Nacional</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">11 programas nuevos</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #10b981;">
                    <div style="font-weight:700; font-size:0.88rem; color:#10b981;">🔬 Investigación</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">Grupo categoría B</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #F39200;">
                    <div style="font-weight:700; font-size:0.88rem; color:#F39200;">💙 Bienestar</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">Deserción 9%–11%</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #C8102E;">
                    <div style="font-weight:700; font-size:0.88rem; color:#f87171;">💰 Finanzas</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">EBITDA ≥ 15%</div>
                </div>
            </div>
        </div>

        <!-- Retos 2026 -->
        <div style="background:white; border:2px solid #C8102E; border-radius:12px; padding:25px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.25rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-chart-line mr-2" style="color:#C8102E;"></i>Retos 2026</h4>
            <div style="display:grid; gap:10px;">
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-medal" style="color:#d97706; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#1A1A1B; font-size:0.88rem;">Acreditación: 2 programas</div><div style="font-size:0.78rem; color:#6b7280;">SST y LEI</div></div>
                </div>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-shield-alt" style="color:#F39200; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#1A1A1B; font-size:0.88rem;">SIAC</div><div style="font-size:0.78rem; color:#6b7280;">Mejoramiento &gt; 80%</div></div>
                </div>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-server" style="color:#7c3aed; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#1A1A1B; font-size:0.88rem;">Infraestructura</div><div style="font-size:0.78rem; color:#6b7280;">Ambientes físicos y virtuales</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Marco Estratégico 2026-2030 -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
        <div style="background:linear-gradient(135deg, #1A1A1B, #3A3A3B, #C8102E); color:white; padding:15px 20px; text-align:center;">
            <h4 style="font-weight:800; font-size:1.3rem; margin:0;"><i class="fas fa-compass mr-2"></i>Marco Estratégico 2026–2030 · 8 Pilares</h4>
        </div>
        <div style="padding:20px;">
            <img src="assets/inst_slides/inst_slide_21_img_1.png" alt="Marco Estratégico 2026-2030 - 8 Pilares" style="width:100%; border-radius:8px;">
        </div>
    </div>
</div>
`;

// =====================================================
// LÓGICA DE PESTAÑAS
// =====================================================
window.switchInstTab = function(tabId) {
    document.querySelectorAll('.inst-tab-content').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.inst-tab-btn').forEach(function(btn) {
        btn.style.background = '#e5e7eb';
        btn.style.color = '#374151';
    });
    var tab = document.getElementById('instTab_' + tabId);
    if (tab) tab.style.display = 'block';
    var buttons = document.querySelectorAll('.inst-tab-btn');
    var tabNames = ['identidad','pei','evolucion','convenios','oferta','estudiantes','infra','retos'];
    var idx = tabNames.indexOf(tabId);
    if (idx >= 0 && buttons[idx]) {
        buttons[idx].style.background = '#1A1A1B';
        buttons[idx].style.color = 'white';
    }
    // Inicializar gráficos de la pestaña
    setTimeout(function() { window._initInstCharts(tabId); }, 200);
};

// =====================================================
// GRÁFICOS CHART.JS
// =====================================================
window._instCharts = {};

window._initInstCharts = function(tabId) {
    // Identidad - Oferta
    if (tabId === 'identidad') {
        var ctx = document.getElementById('instOfertaChart');
        if (ctx && !window._instCharts.oferta) {
            window._instCharts.oferta = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Pregrado Presencial (4)', 'Pregrado Virtual (6)', 'Posgrado Presencial (3)', 'Posgrado Virtual (4)'],
                    datasets: [{
                        data: [4, 6, 3, 4],
                        backgroundColor: ['#C8102E', '#1A1A1B', '#d97706', '#7c3aed'],
                        borderWidth: 3,
                        borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '55%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 12, weight: 'bold' }, padding: 15 } } } }
            });
        }
    }

    // PEI (Inicialización Rueda)
    if (tabId === 'pei') {
        setTimeout(function() {
            if (typeof window.showPeiAxisDetail === 'function') {
                window.showPeiAxisDetail('excelencia');
            }
        }, 100);
    }

    // Convenios
    if (tabId === 'convenios') {
        var ctx3 = document.getElementById('instConveniosChart');
        if (ctx3 && !window._instCharts.conv) {
            window._instCharts.conv = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['Internacionales', 'Académicos', 'Sector Público y Privado'],
                    datasets: [{
                        label: 'Convenios',
                        data: [4, 25, 100],
                        backgroundColor: ['#1A1A1B', '#C8102E', '#F39200'],
                        borderRadius: 8,
                        barThickness: 30
                    }]
                },
                options: { responsive: true, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: '#e5e7eb' }, ticks: { color: '#374151' } }, y: { grid: { display: false }, ticks: { color: '#374151', font: { size: 11, weight: 'bold' } } } } }
            });
        }
    }

    // Estudiantes
    if (tabId === 'estudiantes') {
        var ctx4 = document.getElementById('instEstModalidadChart');
        if (ctx4 && !window._instCharts.estMod) {
            window._instCharts.estMod = new Chart(ctx4, {
                type: 'doughnut',
                data: {
                    labels: ['Presencial', 'Virtual'],
                    datasets: [{
                        data: [58, 42],
                        backgroundColor: ['#1A1A1B', '#C8102E'],
                        borderWidth: 3, borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 12, weight: 'bold' } } } } }
            });
        }
        var ctx5 = document.getElementById('instEstNivelChart');
        if (ctx5 && !window._instCharts.estNiv) {
            window._instCharts.estNiv = new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: ['Técnico', 'Profesional', 'Especialización'],
                    datasets: [{
                        label: 'Estudiantes (%)',
                        data: [15, 60, 25],
                        backgroundColor: ['#d97706', '#1A1A1B', '#C8102E'],
                        borderRadius: 8,
                        barThickness: 35
                    }]
                },
                options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 70, grid: { color: '#e5e7eb' }, ticks: { color: '#374151', callback: function(v) { return v + '%'; } } }, x: { grid: { display: false }, ticks: { color: '#374151', font: { weight: 'bold' } } } } }
            });
        }
    }

    // Infraestructura - no charts needed, pure interactive HTML cards
};

window.showPeiAxisDetail = function(axisId, btnEl) {
    // Quitar clase activa y resetear estilos de todos los botones de ejes
    document.querySelectorAll('.pei-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = '#f8fafc';
        btn.style.boxShadow = 'none';
        btn.style.color = '#334155';
    });

    const axisData = {
        excelencia: {
            title: "Excelencia Académica",
            desc: "Compromiso institucional constante con la calidad educativa, procesos de autoevaluación, mejoramiento de mallas curriculares y cualificación de primer nivel para la planta docente.",
            color: "#4f46e5"
        },
        corporatividad: {
            title: "Corporatividad",
            desc: "Articulación institucional, identidad corporativa y sentido de pertenencia. Promueve el trabajo en equipo interdisciplinar alineado a metas colectivas y de responsabilidad social.",
            color: "#16a34a"
        },
        flexibilidad: {
            title: "Flexibilidad Curricular",
            desc: "Rutas de aprendizaje adaptables y personalizadas, opciones de doble titulación, homologación ágil y múltiples alternativas de trabajo de grado acordes con el perfil profesional.",
            color: "#ca8a04"
        },
        formacion: {
            title: "Formación Integral",
            desc: "Equilibrio formativo entre el ser, el saber y el hacer. Integramos competencias técnicas de ingeniería con un fuerte sentido ético, humanístico e integral de la persona.",
            color: "#ea580c"
        },
        desarrollo: {
            title: "Desarrollo Sostenible",
            desc: "Promoción de prácticas ambientales responsables, economía circular y uso eficiente de los recursos en la cadena de suministros para un desarrollo socialmente responsable.",
            color: "#dc2626"
        },
        coherencia: {
            title: "Coherencia y Coexistencia",
            desc: "Garantía de sintonía absoluta entre las intenciones del Proyecto Educativo Institucional (PEI), los planes de estudio prácticos y las demandas socioeconómicas externas.",
            color: "#7c3aed"
        },
        pertinencia: {
            title: "Pertinencia",
            desc: "Enfoque en la solución directa de problemas reales y urgentes del entorno, transfiriendo activamente los saberes de la ingeniería a las necesidades de la región y el país.",
            color: "#EA580C"
        },
        innovacion: {
            title: "Innovación",
            desc: "Fomento de una cultura emprendedora de base tecnológica, metodologías de enseñanza activa e incorporación de tendencias de vanguardia digital como la Inteligencia Artificial.",
            color: "#c084fc"
        }
    };

    const data = axisData[axisId];
    if (data) {
        const def = document.getElementById('peiAxisDetailDefault');
        const act = document.getElementById('peiAxisDetailActive');
        const tit = document.getElementById('peiAxisActiveTitle');
        const dsc = document.getElementById('peiAxisActiveDesc');
        const pnl = document.getElementById('peiAxisDetailPanel');
        
        if (def) def.style.display = 'none';
        if (act) act.style.display = 'block';
        if (tit) {
            tit.innerText = data.title;
            tit.style.color = data.color;
        }
        if (dsc) dsc.innerText = data.desc;
        if (pnl) pnl.style.borderLeftColor = data.color;

        if (btnEl) {
            btnEl.classList.add('active');
            btnEl.style.background = '#FFF7ED';
            btnEl.style.boxShadow = '0 0 0 1px ' + data.color + ' inset, 0 2px 8px rgba(0,0,0,0.05)';
            btnEl.style.color = '#1A1A1B';
        } else {
            // Highlight programmatically on init
            const btns = document.querySelectorAll('.pei-btn');
            btns.forEach(btn => {
                if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + axisId + "'")) {
                    btn.classList.add('active');
                    btn.style.background = '#FFF7ED';
                    btn.style.boxShadow = '0 0 0 1px ' + data.color + ' inset, 0 2px 8px rgba(0,0,0,0.05)';
                    btn.style.color = '#1A1A1B';
                }
            });
        }
    }
};

// =====================================================
// INICIALIZACIÓN
// =====================================================
window.instInit = function() {
    // Reset all chart refs
    window._instCharts = {};
    // Activar primera pestaña con gráficos
    window.switchInstTab('identidad');
};


// =====================================================
// SELECTORES Y MODAL DE OFERTA ACADÉMICA (SINTÉTICO)
// =====================================================
window._programasDetalle = {"adm_presencial": {"id": "adm_presencial", "nombre": "Administración de Empresas (Presencial)", "nivel": "Profesional Universitario", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "9 semestres (Plan Vigente) / 8 semestres (Propuesto)", "creditos": "158 créditos (Plan Vigente) / 144 créditos (Propuesto RU)", "snies": "108445", "norma": "Resolución MEN 011375 de 2019 / Acuerdo CS 011 de 2024", "icono": "fa-briefcase", "color": "#F39200", "categoria": "Pregrado Presencial", "destacado": "⭐ Programa en proceso de Acreditación / Renovación hacia Registro Calificado Único (Presencial y Virtual) de 8 semestres y 144 créditos académicos.", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/administracion-de-empresas/"}, "lic_infantil_presencial": {"id": "lic_infantil_presencial", "nombre": "Licenciatura en Educación Infantil", "nivel": "Profesional Universitario", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "9 semestres", "creditos": "158 créditos académicos", "snies": "116357", "norma": "Resolución Registro Calificado MEN", "icono": "fa-child", "color": "#EA580C", "categoria": "Pregrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/licenciatura-en-educacion-infantil/"}, "sst_presencial": {"id": "sst_presencial", "nombre": "Seguridad y Salud en el Trabajo", "nivel": "Profesional Universitario", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "9 semestres", "creditos": "155 créditos académicos", "snies": "106177", "norma": "Resolución Registro Calificado MEN", "icono": "fa-shield-alt", "color": "#16A34A", "categoria": "Pregrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/seguridad-y-salud-en-el-trabajo/"}, "tecnica_sst": {"id": "tecnica_sst", "nombre": "Técnica Profesional en Higiene y Seguridad en el Trabajo", "nivel": "Técnico Profesional", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "4 semestres", "creditos": "64 créditos académicos", "snies": "103527", "norma": "Resolución Registro Calificado MEN", "icono": "fa-hard-hat", "color": "#D97706", "categoria": "Pregrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/tecnica-profesional-en-higiene-y-seguridad-en-el-trabajo/"}, "adm_virtual": {"id": "adm_virtual", "nombre": "Administración de Empresas Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "9 semestres (Plan Vigente) / 8 semestres (Propuesto)", "creditos": "158 créditos (Plan Vigente) / 144 créditos (Propuesto RU)", "snies": "115833", "norma": "Resolución Registro Calificado MEN / Acuerdo CS 011 de 2024", "icono": "fa-chart-line", "color": "#F39200", "categoria": "Pregrado Virtual", "destacado": "⭐ Integrado con la modalidad presencial bajo la figura de Registro Calificado Único dual (8 semestres / 144 créditos / 1:3 horas virtuales).", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/administracion-de-empresas-virtual/"}, "derecho_virtual": {"id": "derecho_virtual", "nombre": "Derecho Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "10 semestres", "creditos": "160 créditos académicos", "snies": "119385", "norma": "Resolución Registro Calificado MEN", "icono": "fa-balance-scale", "color": "#C8102E", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/derecho-virtual/"}, "software_virtual": {"id": "software_virtual", "nombre": "Ingeniería en Desarrollo de Software", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "8 semestres", "creditos": "144 créditos académicos", "snies": "118074", "norma": "Resolución Registro Calificado MEN", "icono": "fa-code", "color": "#7C3AED", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/ingenieria-de-software-virtual/"}, "lic_infantil_virtual": {"id": "lic_infantil_virtual", "nombre": "Licenciatura en Educación Infantil Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "9 semestres", "creditos": "158 créditos académicos", "snies": "115854", "norma": "Resolución Registro Calificado MEN", "icono": "fa-shapes", "color": "#EA580C", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/licenciatura-en-educacion-infantil-virtual/"}, "sst_virtual": {"id": "sst_virtual", "nombre": "Seguridad y Salud en el Trabajo Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "9 semestres", "creditos": "155 créditos académicos", "snies": "118713", "norma": "Resolución Registro Calificado MEN", "icono": "fa-user-shield", "color": "#16A34A", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/seguridad-y-salud-en-el-trabajo-virtual/"}, "ind_virtual": {"id": "ind_virtual", "nombre": "Ingeniería Industrial Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "8 semestres", "creditos": "144 créditos académicos", "snies": "Registro Calificado MEN", "norma": "Resolución Registro Calificado MEN", "icono": "fa-industry", "color": "#D97706", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/ingenieria-industrial-virtual/"}, "esp_riesgo_presencial": {"id": "esp_riesgo_presencial", "nombre": "Especialización en Gerencia Integral del Riesgo, SST", "nivel": "Posgrado (Especialización)", "modalidad": "Presencial (Sábados)", "duracion": "3 cuatrimestres (1 año)", "creditos": "30 créditos académicos", "snies": "110536", "norma": "Resolución Registro Calificado MEN", "icono": "fa-notes-medical", "color": "#C8102E", "categoria": "Posgrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gerencia-integral-del-riesgo-seguridad-y-salud-en-el-trabajo/"}, "esp_proyectos_presencial": {"id": "esp_proyectos_presencial", "nombre": "Especialización en Gerencia de Proyectos", "nivel": "Posgrado (Especialización)", "modalidad": "Presencial (Sábados)", "duracion": "2 semestres (1 año)", "creditos": "28 créditos académicos", "snies": "103745", "norma": "Resolución Registro Calificado MEN", "icono": "fa-tasks", "color": "#F39200", "categoria": "Posgrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gerencia-de-proyectos/"}, "esp_pedagogia_presencial": {"id": "esp_pedagogia_presencial", "nombre": "Especialización en Pedagogía y Didácticas Específicas", "nivel": "Posgrado (Especialización)", "modalidad": "Presencial (Sábados)", "duracion": "4 trimestres (1 año)", "creditos": "35 créditos académicos", "snies": "101639", "norma": "Resolución Registro Calificado MEN", "icono": "fa-chalkboard-teacher", "color": "#EA580C", "categoria": "Posgrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-pedagogia-y-didacticas-especificas/"}, "esp_bi_virtual": {"id": "esp_bi_virtual", "nombre": "Especialización en Inteligencia de Negocios y Analítica de Datos Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "24 créditos académicos", "snies": "118755", "norma": "Resolución MEN N° 005278", "icono": "fa-brain", "color": "#7C3AED", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-inteligencia-de-negocios-y-analitica-de-datos/"}, "esp_innovacion_virtual": {"id": "esp_innovacion_virtual", "nombre": "Especialización en Innovación Educativa en Entornos Virtuales de Aprendizaje Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "24 créditos académicos", "snies": "Res. 011264", "norma": "Resolución MEN N° 011264", "icono": "fa-laptop-code", "color": "#F39200", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-innovacion-educativa-en-entornos-virtuales-de-aprendizaje-virtual/"}, "esp_proyectos_virtual": {"id": "esp_proyectos_virtual", "nombre": "Especialización en Gerencia de Proyectos Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "28 créditos académicos", "snies": "118858", "norma": "Resolución MEN N° 010313", "icono": "fa-project-diagram", "color": "#D97706", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gerencia-de-proyectos-virtual/"}, "esp_sst_virtual": {"id": "esp_sst_virtual", "nombre": "Especialización en Gestión de la Seguridad y Salud en el Trabajo Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "24 créditos académicos", "snies": "118070", "norma": "Resolución Registro Calificado MEN", "icono": "fa-shield-virus", "color": "#16A34A", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gestion-de-la-seguridad-y-salud-en-el-trabajo/"}};

window.showProgInfoModal = function(progId) {
    var p = window._programasDetalle[progId];
    if (!p) return;
    
    // Ensure modal element exists
    var m = document.getElementById('instProgModal');
    if (!m) return;
    
    // Set synthetic fields requested by user
    var titleEl = document.getElementById('modalProgTitle');
    if (titleEl) titleEl.textContent = p.nombre;
    
    var catEl = document.getElementById('modalProgCat');
    if (catEl) catEl.textContent = p.categoria;
    
    var nivelEl = document.getElementById('modalProgNivel');
    if (nivelEl) nivelEl.textContent = p.nivel;
    
    var modEl = document.getElementById('modalProgModalidad');
    if (modEl) modEl.textContent = p.modalidad;
    
    var durEl = document.getElementById('modalProgDuracion');
    if (durEl) durEl.textContent = p.duracion;
    
    var credEl = document.getElementById('modalProgCreditos');
    if (credEl) credEl.textContent = p.creditos;
    
    var sniesEl = document.getElementById('modalProgSnies');
    if (sniesEl) sniesEl.textContent = p.snies;
    
    var normaEl = document.getElementById('modalProgNorma');
    if (normaEl) normaEl.textContent = p.norma;
    
    var linkEl = document.getElementById('modalProgEnlace');
    if (linkEl) linkEl.href = p.enlace;
    
    var iconEl = document.getElementById('modalProgIcon');
    if (iconEl) {
        iconEl.className = 'fas ' + p.icono;
        iconEl.style.color = p.color;
    }
    
    var wrapEl = document.getElementById('modalProgIconWrap');
    if (wrapEl) wrapEl.style.borderColor = p.color;
    
    var destWrap = document.getElementById('modalProgDestacadoWrap');
    var destEl = document.getElementById('modalProgDestacado');
    if (destWrap && destEl) {
        if (p.destacado) {
            destWrap.style.display = 'block';
            destEl.textContent = p.destacado;
        } else {
            destWrap.style.display = 'none';
        }
    }
    
    // Move modal to body if inside relative container to ensure absolute viewport center
    if (m.parentElement !== document.body) {
        document.body.appendChild(m);
    }
    
    m.style.display = 'flex';
};

window.closeProgInfoModal = function() {
    var m = document.getElementById('instProgModal');
    if (m) m.style.display = 'none';
};

// Global listeners for closing modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        window.closeProgInfoModal();
    }
});

document.addEventListener('click', function(e) {
    var m = document.getElementById('instProgModal');
    if (m && m.style.display === 'flex' && e.target === m) {
        window.closeProgInfoModal();
    }
});
