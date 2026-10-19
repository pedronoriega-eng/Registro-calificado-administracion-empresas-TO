/* =========================================================
   CONDICIÓN 1 – DENOMINACIÓN DEL PROGRAMA (SISTEMA INTERACTIVO MODAL)
   Administración de Empresas · Registro Único (Presencial & Virtual) · TO
   Estructura Ejecutiva de Sustentación ante Pares Académicos (MEN)
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c1'] = `
<!-- BANNER INSTITUCIONAL DE CABECERA -->
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:16px 20px; border-radius:10px; margin-bottom:18px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.22rem; font-weight:800; color:#FFFFFF; margin-bottom:3px; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-id-badge" style="color:#F39200;"></i> Condición 1 · Denominación del Programa
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0;">
                Sustentación técnica y curricular del <strong>Registro Calificado Único (Presencial y Virtual)</strong> · 144 créditos · 8 semestres · Corporación Escuela Tecnológica del Oriente (TO).
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
            <span class="tag-legal" style="background:rgba(243,146,0,0.25); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.78rem;">
                <i class="fas fa-shield-alt"></i> Decreto 1330 de 2019
            </span>
            <span class="tag-legal" style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.78rem;">
                SNIES: 108524
            </span>
        </div>
    </div>
</div>

<!-- BARRA DE SUBPESTAÑAS DE ACCESO RÁPIDO A VENTANAS EMERGENTES -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:10px 14px; margin-bottom:20px; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.76rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-layer-group" style="color:#F39200;"></i> Subsecciones de Sustentación:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;" id="c1-subtabs-bar">
        <button onclick="window.openC1Modal('ficha')" style="background:#FFF9F2; color:#C2410C; border:1px solid #FED7AA; padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-id-card" style="color:#F39200;"></i> Ficha Técnica Oficial
        </button>
        <button onclick="window.openC1Modal('benchmarking')" style="background:#F0FDF4; color:#166534; border:1px solid #BBF7D0; padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-network-wired" style="color:#2ECC71;"></i> Justificación &amp; Benchmarking
        </button>
        <button onclick="window.openC1Modal('coherencia')" style="background:#F0F9FF; color:#0369A1; border:1px solid #BAE6FD; padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-sitemap" style="color:#0369A1;"></i> Coherencia Curricular (48 Asignaturas)
        </button>
        <button onclick="window.openC1Modal('modalidades')" style="background:#FAF5FF; color:#6B21A8; border:1px solid #E9D5FF; padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-balance-scale-right" style="color:#6B21A8;"></i> Registro Único &amp; Modalidades
        </button>
        <button onclick="window.openC1Modal('impacto')" style="background:#FFF1F2; color:#BE123C; border:1px solid #FECDD3; padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-chart-line" style="color:#BE123C;"></i> Pertinencia &amp; Impacto Social
        </button>
    </div>
</div>

<!-- PANEL PRINCIPAL EJECUTIVO (SIN SCROLL VERTICAL LARGO) -->
<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:14px; margin-bottom:20px;">
    
    <!-- TARJETA 1 -->
    <div onclick="window.openC1Modal('ficha')" style="background:#FFFFFF; border:1.5px solid #FED7AA; border-radius:10px; padding:16px; cursor:pointer; transition:all 0.25s ease; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
        <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="background:#FFF9F2; color:#F39200; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.05rem;">
                    <i class="fas fa-id-card"></i>
                </div>
                <span style="background:#FFEDD5; color:#C2410C; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">144 Créditos</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                Ficha Técnica Oficial
            </h5>
            <p style="font-size:0.76rem; color:#6B6B6B; margin:0; line-height:1.4;">
                Denominación oficial, titulación inclusiva, 8 semestres, 48 materias y trazabilidad evolutiva SACES.
            </p>
        </div>
        <div style="margin-top:12px; font-size:0.74rem; font-weight:800; color:#F39200; display:flex; align-items:center; gap:4px;">
            Ver Sustentación <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <!-- TARJETA 2 -->
    <div onclick="window.openC1Modal('benchmarking')" style="background:#FFFFFF; border:1.5px solid #BBF7D0; border-radius:10px; padding:16px; cursor:pointer; transition:all 0.25s ease; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
        <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="background:#F0FDF4; color:#2ECC71; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.05rem;">
                    <i class="fas fa-network-wired"></i>
                </div>
                <span style="background:#DCFCE7; color:#166534; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">CINE 0413</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                Justificación &amp; Benchmarking
            </h5>
            <p style="font-size:0.76rem; color:#6B6B6B; margin:0; line-height:1.4;">
                Clasificación internacional UNESCO CINE-F, SNIES y referenciación con IES acreditadas nacionales e internacionales.
            </p>
        </div>
        <div style="margin-top:12px; font-size:0.74rem; font-weight:800; color:#2ECC71; display:flex; align-items:center; gap:4px;">
            Ver Sustentación <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <!-- TARJETA 3 -->
    <div onclick="window.openC1Modal('coherencia')" style="background:#FFFFFF; border:1.5px solid #BAE6FD; border-radius:10px; padding:16px; cursor:pointer; transition:all 0.25s ease; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
        <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="background:#F0F9FF; color:#0369A1; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.05rem;">
                    <i class="fas fa-sitemap"></i>
                </div>
                <span style="background:#E0F2FE; color:#0369A1; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">5 Pilares</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                Coherencia Curricular
            </h5>
            <p style="font-size:0.76rem; color:#6B6B6B; margin:0; line-height:1.4;">
                Distribución integral de las 48 materias en áreas funcionales y asignaturas insignia 4.0 (Big Data e IA).
            </p>
        </div>
        <div style="margin-top:12px; font-size:0.74rem; font-weight:800; color:#0369A1; display:flex; align-items:center; gap:4px;">
            Ver Sustentación <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <!-- TARJETA 4 -->
    <div onclick="window.openC1Modal('modalidades')" style="background:#FFFFFF; border:1.5px solid #E9D5FF; border-radius:10px; padding:16px; cursor:pointer; transition:all 0.25s ease; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
        <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="background:#FAF5FF; color:#6B21A8; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.05rem;">
                    <i class="fas fa-balance-scale-right"></i>
                </div>
                <span style="background:#F3E8FF; color:#6B21A8; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">Registro Único</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                Registro Único &amp; Modalidades
            </h5>
            <p style="font-size:0.76rem; color:#6B6B6B; margin:0; line-height:1.4;">
                Equivalencia presencial y virtual: idénticos Resultados de Aprendizaje, misma titulación y mediaciones específicas.
            </p>
        </div>
        <div style="margin-top:12px; font-size:0.74rem; font-weight:800; color:#6B21A8; display:flex; align-items:center; gap:4px;">
            Ver Sustentación <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <!-- TARJETA 5 -->
    <div onclick="window.openC1Modal('impacto')" style="background:#FFFFFF; border:1.5px solid #FECDD3; border-radius:10px; padding:16px; cursor:pointer; transition:all 0.25s ease; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
        <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="background:#FFF1F2; color:#BE123C; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.05rem;">
                    <i class="fas fa-chart-line"></i>
                </div>
                <span style="background:#FFE4E6; color:#BE123C; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">78.5% OLE</span>
            </div>
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                Pertinencia &amp; Impacto Social
            </h5>
            <p style="font-size:0.76rem; color:#6B6B6B; margin:0; line-height:1.4;">
                Resultados de Aprendizaje del Programa (RAP) y métricas de empleabilidad, permanencia y cotización formal de egresados.
            </p>
        </div>
        <div style="margin-top:12px; font-size:0.74rem; font-weight:800; color:#BE123C; display:flex; align-items:center; gap:4px;">
            Ver Sustentación <i class="fas fa-arrow-right"></i>
        </div>
    </div>

</div>

<!-- SÍNTESIS EJECUTIVA DE IDENTIDAD (TABLERO RESUMEN COMPACTO) -->
<div style="background:linear-gradient(135deg, #FFF9F2 0%, #FFFFFF 100%); border:1.5px solid #FED7AA; border-radius:10px; padding:14px 18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="display:flex; align-items:center; gap:10px;">
            <div style="background:#F39200; color:#FFFFFF; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.9rem; font-weight:800;">
                <i class="fas fa-award"></i>
            </div>
            <div>
                <strong style="color:#1A1A1B; font-size:0.88rem; display:block;">Administración de Empresas · Registro Calificado Único</strong>
                <span style="color:#6B6B6B; font-size:0.75rem;">Título: Administrador(a) de Empresas · Nivel Profesional Universitario · Presencial &amp; Virtual</span>
            </div>
        </div>
        <div style="display:flex; gap:14px; font-size:0.78rem;">
            <div style="text-align:center; padding:0 8px; border-right:1px solid #FED7AA;">
                <strong style="color:#F39200; font-size:0.98rem; display:block;">144</strong>
                <span style="color:#6B6B6B; font-size:0.7rem;">Créditos</span>
            </div>
            <div style="text-align:center; padding:0 8px; border-right:1px solid #FED7AA;">
                <strong style="color:#1A1A1B; font-size:0.98rem; display:block;">8</strong>
                <span style="color:#6B6B6B; font-size:0.7rem;">Semestres</span>
            </div>
            <div style="text-align:center; padding:0 8px; border-right:1px solid #FED7AA;">
                <strong style="color:#2ECC71; font-size:0.98rem; display:block;">48</strong>
                <span style="color:#6B6B6B; font-size:0.7rem;">Materias</span>
            </div>
            <div style="text-align:center; padding:0 8px;">
                <strong style="color:#0369A1; font-size:0.98rem; display:block;">Dual</strong>
                <span style="color:#6B6B6B; font-size:0.7rem;">Modalidad</span>
            </div>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- VENTANA EMERGENTE MODAL EN SEGUNDO PLANO (BACKDROP SUPERPUESTO)           -->
<!-- ========================================================================= -->
<div id="c1-modal-overlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15, 23, 42, 0.78); backdrop-filter:blur(5px); z-index:999999; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;">
    
    <!-- CONTENEDOR MODAL -->
    <div style="background:#FFFFFF; width:100%; max-width:1050px; max-height:90vh; border-radius:14px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.45); display:flex; flex-direction:column; overflow:hidden; border:1px solid rgba(255,255,255,0.2); animation:c1ModalFadeIn 0.25s ease-out;">
        
        <!-- CABECERA DEL MODAL CON BOTÓN DE CIERRE -->
        <div style="background:#1A1A1B; color:#FFFFFF; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #F39200;">
            <div style="display:flex; align-items:center; gap:10px;">
                <div id="c1-modal-icon-container" style="background:#F39200; color:#FFFFFF; width:32px; height:32px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.95rem;">
                    <i class="fas fa-id-card" id="c1-modal-icon"></i>
                </div>
                <div>
                    <h4 id="c1-modal-title" style="font-family:'Montserrat',sans-serif; font-size:1.08rem; font-weight:800; color:#FFFFFF; margin:0;">
                        Ficha Técnica Oficial del Programa
                    </h4>
                    <span style="font-size:0.72rem; color:#D1D1D1;">Condición 1 · Denominación del Programa · Corporación Escuela Tecnológica del Oriente</span>
                </div>
            </div>
            <button onclick="window.closeC1Modal()" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25); color:#FFFFFF; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1rem; cursor:pointer; transition:all 0.2s;">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- SUBPESTAÑAS DE NAVEGACIÓN DENTRO DEL MODAL -->
        <div style="background:#F8F9FA; padding:8px 16px; border-bottom:1px solid #E8E8E8; display:flex; flex-wrap:wrap; gap:6px;" id="c1-modal-nav-tabs">
            <button data-c1tab="ficha" onclick="window.switchC1ModalTab('ficha')" class="c1-mtab active" style="background:#FFFFFF; border:1.5px solid #F39200; color:#C2410C; font-weight:800; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-id-card" style="color:#F39200;"></i> Ficha Técnica Oficial
            </button>
            <button data-c1tab="benchmarking" onclick="window.switchC1ModalTab('benchmarking')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-network-wired" style="color:#2ECC71;"></i> Justificación &amp; Benchmarking
            </button>
            <button data-c1tab="coherencia" onclick="window.switchC1ModalTab('coherencia')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-sitemap" style="color:#0369A1;"></i> Coherencia Curricular (48 Asignaturas)
            </button>
            <button data-c1tab="modalidades" onclick="window.switchC1ModalTab('modalidades')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-balance-scale-right" style="color:#6B21A8;"></i> Registro Único &amp; Modalidades
            </button>
            <button data-c1tab="impacto" onclick="window.switchC1ModalTab('impacto')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-chart-line" style="color:#BE123C;"></i> Pertinencia &amp; Impacto Social
            </button>
        </div>

        <!-- CUERPO DEL MODAL (SCROLL INTERNO AUTÓNOMO) -->
        <div style="padding:20px; overflow-y:auto; max-height:calc(90vh - 150px);">
            
            <!-- PANEL 1: FICHA TÉCNICA OFICIAL -->
            <div id="c1-panel-ficha" class="c1-modal-panel" style="display:block;">
                
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:18px;">
                    
                    <!-- TABLA OFICIAL -->
                    <div style="background:#FFFFFF; border:2px solid #F39200; border-radius:10px; padding:16px; box-shadow:0 2px 10px rgba(243,146,0,0.06);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1.5px solid #FFF3E0; padding-bottom:8px;">
                            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                                <i class="fas fa-certificate" style="color:#F39200;"></i> Ficha Oficial · Registro Calificado Único
                            </h5>
                            <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px;">
                                Acuerdo CS 021 de 2025
                            </span>
                        </div>

                        <table class="tbl" style="width:100%; font-size:0.82rem; margin:0;">
                            <tbody>
                                <tr style="background:#FFF9F2;">
                                    <td class="lb" style="width:40%; font-weight:700; color:#F39200;">Denominación</td>
                                    <td><strong>Administración de Empresas</strong></td>
                                </tr>
                                <tr>
                                    <td class="lb" style="font-weight:700; color:#6B6B6B;">Título a Otorgar</td>
                                    <td><strong>Administrador(a) de Empresas</strong> <span style="font-size:0.74rem; color:#6B6B6B;">(Titulación Inclusiva)</span></td>
                                </tr>
                                <tr style="background:#FFF9F2;">
                                    <td class="lb" style="font-weight:700; color:#F39200;">Nivel de Formación</td>
                                    <td><strong>Profesional Universitario</strong> (Pregrado)</td>
                                </tr>
                                <tr>
                                    <td class="lb" style="font-weight:700; color:#6B6B6B;">Número de Créditos</td>
                                    <td><strong>144 créditos académicos</strong></td>
                                </tr>
                                <tr style="background:#FFF9F2;">
                                    <td class="lb" style="font-weight:700; color:#F39200;">Duración Estimada</td>
                                    <td><strong>8 semestres</strong> (4.0 años) — Eficiencia formativa</td>
                                </tr>
                                <tr>
                                    <td class="lb" style="font-weight:700; color:#6B6B6B;">Número de Asignaturas</td>
                                    <td><strong>48 asignaturas modulares</strong> (6 por semestre)</td>
                                </tr>
                                <tr style="background:#FFF9F2;">
                                    <td class="lb" style="font-weight:700; color:#F39200;">Modalidades Ofertadas</td>
                                    <td><span class="tag-legal" style="background:#F39200; color:#FFFFFF;">REGISTRO ÚNICO</span> <span class="tag-legal" style="background:#1A1A1B; color:#FFFFFF;">Presencial &amp; Virtual</span></td>
                                </tr>
                                <tr>
                                    <td class="lb" style="font-weight:700; color:#6B6B6B;">Distribución de Cupos</td>
                                    <td><strong>300 cupos / cohorte:</strong> 240 Virtuales / 60 Presenciales</td>
                                </tr>
                                <tr>
                                    <td class="lb" style="font-weight:700; color:#6B6B6B;">Lugar de Desarrollo</td>
                                    <td>Sede Principal Bucaramanga (Presencial) + Cobertura Nacional Digital (Virtual)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- EVOLUCIÓN SACES -->
                    <div style="background:#F8F9FA; border:1px solid #CBD5E1; border-radius:10px; padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1.5px solid #E2E8F0; padding-bottom:8px;">
                                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                                    <i class="fas fa-history" style="color:#64748B;"></i> Evolución Curricular SACES
                                </h5>
                                <span style="background:#E2E8F0; color:#1E293B; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:4px;">
                                    Trazabilidad Normativa
                                </span>
                            </div>

                            <table class="tbl" style="width:100%; font-size:0.8rem; margin:0;">
                                <thead style="background:#1A1A1B; color:#FFFFFF;">
                                    <tr>
                                        <th style="text-align:left;">Parámetro</th>
                                        <th>Vigente SACES</th>
                                        <th style="background:#F39200;">Propuesto Renovación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight:700;">Duración</td>
                                        <td style="text-align:center;">9 semestres</td>
                                        <td style="text-align:center; font-weight:800; color:#F39200; background:#FFF9F2;">8 semestres</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight:700;">Créditos</td>
                                        <td style="text-align:center;">158 créditos</td>
                                        <td style="text-align:center; font-weight:800; color:#F39200; background:#FFF9F2;">144 créditos</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight:700;">Asignaturas</td>
                                        <td style="text-align:center;">62 materias</td>
                                        <td style="text-align:center; font-weight:800; color:#F39200; background:#FFF9F2;">48 materias</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight:700;">Modalidad</td>
                                        <td style="text-align:center; font-size:0.72rem;">Registro Único (Dual)</td>
                                        <td style="text-align:center; font-size:0.72rem; font-weight:800; color:#F39200; background:#FFF9F2;">Registro Único (Dual)</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight:700;">Titulación</td>
                                        <td style="text-align:center; font-size:0.72rem;">Masc. Genérico</td>
                                        <td style="text-align:center; font-size:0.72rem; font-weight:800; color:#F39200; background:#FFF9F2;">Administrador(a)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style="background:#FFFFFF; border-left:3px solid #F39200; padding:10px 12px; border-radius:6px; margin-top:12px; font-size:0.75rem; color:#4B5563;">
                            <strong>Alineación Jurídica:</strong> Ambos planes se encuentran formalizados institucionalmente como <strong>Registro Único</strong> ante SACES (Acuerdos CS 011 de 2024 y 021 de 2025). La renovación a 144 créditos optimiza la permanencia y graduación sin reducir el rigor científico.
                        </div>
                    </div>

                </div>

            </div>

            <!-- PANEL 2: JUSTIFICACIÓN & BENCHMARKING -->
            <div id="c1-panel-benchmarking" class="c1-modal-panel" style="display:none;">
                
                <!-- TAXONOMÍA CINE -->
                <div style="background:#F8F9FA; border-radius:10px; padding:14px; margin-bottom:16px; border:1px solid #E2E8F0;">
                    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-sitemap" style="color:#2ECC71;"></i> Alineación Taxonómica Internacional y Nacional
                    </h5>
                    
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap:10px;">
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #1A1A1B; padding:10px 12px; border-radius:6px;">
                            <div style="font-size:0.68rem; font-weight:800; color:#6B6B6B; text-transform:uppercase;">UNESCO CINE-F 2013</div>
                            <div style="font-weight:800; font-size:0.86rem; color:#1A1A1B; margin:2px 0;">Campo Amplio 04</div>
                            <div style="font-size:0.72rem; color:#64748B;">Administración de Empresas y Derecho</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #F39200; padding:10px 12px; border-radius:6px;">
                            <div style="font-size:0.68rem; font-weight:800; color:#6B6B6B; text-transform:uppercase;">CINE Específico &amp; Detallado</div>
                            <div style="font-weight:800; font-size:0.86rem; color:#1A1A1B; margin:2px 0;">0413 · Gestión y Administración</div>
                            <div style="font-size:0.72rem; color:#64748B;">Dirección estratégica de organizaciones</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #2ECC71; padding:10px 12px; border-radius:6px;">
                            <div style="font-size:0.68rem; font-weight:800; color:#6B6B6B; text-transform:uppercase;">SNIES / MEN Colombia</div>
                            <div style="font-weight:800; font-size:0.86rem; color:#1A1A1B; margin:2px 0;">Área de Conocimiento</div>
                            <div style="font-size:0.72rem; color:#64748B;">Economía, Administración, Contaduría y afines</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #3498DB; padding:10px 12px; border-radius:6px;">
                            <div style="font-size:0.68rem; font-weight:800; color:#6B6B6B; text-transform:uppercase;">Núcleo Básico (NBC)</div>
                            <div style="font-weight:800; font-size:0.86rem; color:#1A1A1B; margin:2px 0;">NBC Administración</div>
                            <div style="font-size:0.72rem; color:#64748B;">Código SNIES Oficial SACES: 108524</div>
                        </div>
                    </div>
                </div>

                <!-- TABLA BENCHMARKING -->
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-balance-scale" style="color:#2ECC71;"></i> Benchmarking con IES Nacionales e Internacionales Acreditadas (Estándar 8 Semestres)
                </h5>
                
                <div style="overflow-x:auto; border:1px solid #E8E8E8; border-radius:8px;">
                    <table class="tbl" style="width:100%; font-size:0.8rem; margin:0;">
                        <thead style="background:#1A1A1B; color:#FFFFFF;">
                            <tr>
                                <th style="text-align:left;">Institución de Referencia</th>
                                <th>Ámbito</th>
                                <th>Duración</th>
                                <th>Créditos</th>
                                <th style="text-align:left;">Modelo y Enfoque Formativo</th>
                                <th>Acreditación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background:#FFF9F2; font-weight:700;">
                                <td style="color:#C2410C;"><i class="fas fa-check-circle" style="color:#F39200;"></i> Tecnológica del Oriente (TO)</td>
                                <td style="text-align:center;">Local / Nal.</td>
                                <td style="text-align:center; color:#C2410C;">8 semestres</td>
                                <td style="text-align:center; color:#C2410C;">144 cr</td>
                                <td style="font-size:0.75rem;">Registro Único (Dual), Big Data, IA, Sostenibilidad, 48 asignaturas modulares.</td>
                                <td style="text-align:center;"><span class="badge" style="background:#FFEDD5; color:#C2410C; font-size:0.65rem;">Renovación RU</span></td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">Tecnológico de Monterrey</td>
                                <td style="text-align:center;">Internacional (México)</td>
                                <td style="text-align:center;">8 semestres</td>
                                <td style="text-align:center;">144 equiv.</td>
                                <td style="font-size:0.75rem;">Modelo Tec21 por retos, analítica empresarial y emprendimiento ágil.</td>
                                <td style="text-align:center;"><span class="badge" style="background:#DCFCE7; color:#166534; font-size:0.65rem;">AACSB / SACS</span></td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">Universidad del Rosario</td>
                                <td style="text-align:center;">Nacional (Bogotá)</td>
                                <td style="text-align:center;">8 semestres</td>
                                <td style="text-align:center;">140 cr</td>
                                <td style="font-size:0.75rem;">Optimización curricular, estrategia corporativa y formación ejecutiva global.</td>
                                <td style="text-align:center;"><span class="badge" style="background:#DCFCE7; color:#166534; font-size:0.65rem;">Alta Calidad MEN</span></td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">Universidad EAN</td>
                                <td style="text-align:center;">Nacional (Bogotá)</td>
                                <td style="text-align:center;">8 semestres</td>
                                <td style="text-align:center;">142 cr</td>
                                <td style="font-size:0.75rem;">Modalidad presencial y virtual, sostenibilidad y modelos de negocio digitales.</td>
                                <td style="text-align:center;"><span class="badge" style="background:#DCFCE7; color:#166534; font-size:0.65rem;">Alta Calidad MEN</span></td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">Pontificia Universidad Católica de Chile</td>
                                <td style="text-align:center;">Internacional (Chile)</td>
                                <td style="text-align:center;">8 semestres</td>
                                <td style="text-align:center;">144 equiv.</td>
                                <td style="font-size:0.75rem;">Finanzas aplicadas, economía de empresas y gestión directiva estratégica.</td>
                                <td style="text-align:center;"><span class="badge" style="background:#DCFCE7; color:#166534; font-size:0.65rem;">EQUIS / AACSB</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <!-- PANEL 3: COHERENCIA CURRICULAR (48 ASIGNATURAS) -->
            <div id="c1-panel-coherencia" class="c1-modal-panel" style="display:none;">
                
                <p style="font-size:0.82rem; color:#4B5563; margin:0 0 14px; line-height:1.45;">
                    La denominación <strong>"Administración de Empresas"</strong> se fundamenta en un plan de estudios estructurado en <strong>5 pilares disciplinares</strong> que cubren rigurosamente todas las áreas funcionales de la organización:
                </p>

                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
                    
                    <!-- PILAR 1 -->
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #1A1A1B; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-sitemap" style="color:#F39200;"></i> 1. Estratégico y Organizacional</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#1A1A1B; background:#E8E8E8; padding:2px 5px; border-radius:4px;">10 Materias</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Fundamentos de Administración<br>
                            • Teorías Organizacionales<br>
                            • Planeación Estratégica<br>
                            • Dirección y Gobierno Corporativo<br>
                            • <strong>Simulación Gerencial (Juego de Negocios)</strong><br>
                            • Gestión Pública y Empresarial
                        </div>
                    </div>

                    <!-- PILAR 2 -->
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #2ECC71; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-coins" style="color:#2ECC71;"></i> 2. Financiero y Económico</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#166534; background:#DCFCE7; padding:2px 5px; border-radius:4px;">11 Materias</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Matemáticas Financieras<br>
                            • Contabilidad Financiera y Gerencial<br>
                            • Costos y Presupuestos Empresariales<br>
                            • Microeconomía y Macroeconomía<br>
                            • Finanzas Corporativas y Mercado de Capitales<br>
                            • Evaluación Financiera de Proyectos
                        </div>
                    </div>

                    <!-- PILAR 3 -->
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #F39200; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-truck-moving" style="color:#F39200;"></i> 3. Operaciones &amp; Mercadeo</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#C2410C; background:#FFEDD5; padding:2px 5px; border-radius:4px;">10 Materias</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Gestión de Operaciones y Procesos<br>
                            • Logística y Cadena de Suministro (SCM)<br>
                            • Sistemas Integrados de Gestión (HSEQ)<br>
                            • Gerencia de la Calidad y Productividad<br>
                            • Marketing Estratégico y E-commerce<br>
                            • Negocios y Gerencia Internacional
                        </div>
                    </div>

                    <!-- PILAR 4 -->
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #9B59B6; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-users-cog" style="color:#9B59B6;"></i> 4. Talento Humano y Ética</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#6B21A8; background:#F3E8FF; padding:2px 5px; border-radius:4px;">8 Materias</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Gestión del Talento Humano<br>
                            • Comportamiento Organizacional y Clima<br>
                            • Habilidades Gerenciales y Liderazgo Ético<br>
                            • Legislación Laboral y Comercial<br>
                            • Responsabilidad Social Empresarial (RSE)<br>
                            • Cátedra Institucional TO y Ética
                        </div>
                    </div>

                    <!-- PILAR 5 -->
                    <div style="background:#FFF9F2; border:2px solid #FED7AA; border-radius:8px; padding:12px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#C2410C;"><i class="fas fa-robot" style="color:#F39200;"></i> 5. Sello Diferenciador 4.0</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#FFFFFF; background:#F39200; padding:2px 5px; border-radius:4px;">Vanguardia TO</span>
                        </div>
                        <div style="font-size:0.73rem; color:#431407; background:#FFFFFF; padding:8px; border-radius:4px; line-height:1.4; border:1px solid #FED7AA;">
                            • <strong>Big Data y Analítica de Datos</strong> (Sem 6)<br>
                            • <strong>Inteligencia Artificial en los Negocios</strong> (Sem 7)<br>
                            • Modelos de Emprendimiento Sostenible (Sem 5)<br>
                            • <strong>Laboratorio de Innovación Empresarial</strong> (Sem 6)<br>
                            • Transformación Digital Organizacional
                        </div>
                    </div>

                </div>

            </div>

            <!-- PANEL 4: REGISTRO ÚNICO & MODALIDADES -->
            <div id="c1-panel-modalidades" class="c1-modal-panel" style="display:none;">
                
                <div style="display:grid; grid-template-columns: 1fr 1.15fr 1fr; gap:12px; align-items:stretch;">
                    
                    <!-- PRESENCIAL -->
                    <div style="background:#FFF9F2; border:1.5px solid #FED7AA; border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                                <div style="background:#F39200; color:#FFFFFF; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">
                                    <i class="fas fa-building"></i>
                                </div>
                                <div>
                                    <strong style="color:#C2410C; font-size:0.84rem; display:block;">Modalidad Presencial</strong>
                                    <span style="font-size:0.66rem; color:#7C2D12;">Sede Principal Bucaramanga (60 cupos)</span>
                                </div>
                            </div>
                            <ul style="font-size:0.73rem; color:#431407; margin:0; padding-left:14px; line-height:1.4;">
                                <li><strong>Mediación Física:</strong> Aulas interactivas en Sedes A, B y C de la TO.</li>
                                <li><strong>Laboratorios:</strong> Salas de cómputo y centros de simulación física.</li>
                                <li><strong>Interacción Directa:</strong> Encuentros sincrónicos en campus.</li>
                                <li><strong>Relación Crédito 1:2:</strong> 48h acompañamiento / 96h independiente.</li>
                                <li><strong>Networking Local:</strong> Pasantías en 32.450 empresas de Santander.</li>
                            </ul>
                        </div>
                        <div style="background:#FFFFFF; padding:5px 8px; border-radius:4px; font-size:0.7rem; color:#C2410C; font-weight:700; text-align:center; margin-top:8px; border:1px solid #FED7AA;">
                            <i class="fas fa-arrow-right"></i> Converge en los mismos RAP
                        </div>
                    </div>

                    <!-- CENTRO REGISTRO ÚNICO -->
                    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border:2px solid #F39200; border-radius:10px; padding:14px; text-align:center; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="background:#F39200; color:#FFFFFF; display:inline-block; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:20px; text-transform:uppercase; margin-bottom:8px;">
                                Núcleo Común SACES
                            </div>
                            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.98rem; font-weight:800; color:#FFFFFF; margin:0 0 6px;">
                                REGISTRO CALIFICADO ÚNICO
                            </h5>
                            <p style="font-size:0.74rem; color:#D1D1D1; margin:0 0 10px;">
                                Idéntica promesa de formación y perfil:
                            </p>
                            <div style="background:rgba(255,255,255,0.08); border-radius:6px; padding:8px 10px; font-size:0.72rem; color:#FFFFFF; text-align:left; line-height:1.4;">
                                <i class="fas fa-check" style="color:#2ECC71;"></i> <strong>Mismo Título:</strong> Administrador(a) de Empresas.<br>
                                <i class="fas fa-check" style="color:#2ECC71;"></i> <strong>Misma Duración:</strong> 144 créditos en 8 semestres.<br>
                                <i class="fas fa-check" style="color:#2ECC71;"></i> <strong>Mismas 48 Asignaturas:</strong> Sílabos idénticos.<br>
                                <i class="fas fa-check" style="color:#2ECC71;"></i> <strong>Mismos RAP:</strong> 3 RA por materia (144 totales).<br>
                                <i class="fas fa-check" style="color:#2ECC71;"></i> <strong>Rúbrica Institucional:</strong> 60% Saber, 30% Pro, 10% Ser.<br>
                                <i class="fas fa-check" style="color:#2ECC71;"></i> <strong>Movilidad Fluida:</strong> Sin costos de homologación.
                            </div>
                        </div>
                        <div style="font-size:0.7rem; color:#F39200; font-weight:700; margin-top:6px;">
                            <i class="fas fa-equals"></i> Equivalencia Científica Absoluta
                        </div>
                    </div>

                    <!-- VIRTUAL -->
                    <div style="background:#F0F9FF; border:1.5px solid #BAE6FD; border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                                <div style="background:#0369A1; color:#FFFFFF; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">
                                    <i class="fas fa-wifi"></i>
                                </div>
                                <div>
                                    <strong style="color:#0369A1; font-size:0.84rem; display:block;">Modalidad Virtual</strong>
                                    <span style="font-size:0.66rem; color:#0C4A6E;">Cobertura 32 Dptos. (240 cupos)</span>
                                </div>
                            </div>
                            <ul style="font-size:0.73rem; color:#082F49; margin:0; padding-left:14px; line-height:1.4;">
                                <li><strong>Mediación Digital:</strong> Campus LMS Moodle activo 24/7.</li>
                                <li><strong>Simuladores en Nube:</strong> Software analítico y juego gerencial.</li>
                                <li><strong>Tutorías Híbridas:</strong> Sesiones sincrónicas y asincrónicas.</li>
                                <li><strong>Relación Crédito 1:3:</strong> 36h telemáticas / 108h autónomas.</li>
                                <li><strong>Cobertura Total:</strong> Acceso nacional incluyente.</li>
                            </ul>
                        </div>
                        <div style="background:#FFFFFF; padding:5px 8px; border-radius:4px; font-size:0.7rem; color:#0369A1; font-weight:700; text-align:center; margin-top:8px; border:1px solid #BAE6FD;">
                            <i class="fas fa-arrow-left"></i> Converge en los mismos RAP
                        </div>
                    </div>

                </div>

            </div>

            <!-- PANEL 5: PERTINENCIA & IMPACTO SOCIAL -->
            <div id="c1-panel-impacto" class="c1-modal-panel" style="display:none;">
                
                <!-- RAP -->
                <div style="background:#F8F9FA; border-radius:8px; padding:14px; margin-bottom:14px; border:1px solid #E2E8F0;">
                    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-graduation-cap" style="color:#BE123C;"></i> Resultados de Aprendizaje del Programa (RAP Institucionales)
                    </h5>
                    
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:10px;">
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #F39200; padding:10px 12px; border-radius:6px;">
                            <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:3px;">RAP 1: Dirección Estratégica</strong>
                            <p style="font-size:0.72rem; color:#4B5563; margin:0; line-height:1.4;">
                                Formula y ejecuta planes de direccionamiento estratégico alineados a la competitividad, la gestión del cambio y la generación de valor sostenible.
                            </p>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #1A1A1B; padding:10px 12px; border-radius:6px;">
                            <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:3px;">RAP 2: Toma de Decisiones 4.0</strong>
                            <p style="font-size:0.72rem; color:#4B5563; margin:0; line-height:1.4;">
                                Aplica herramientas analíticas, Big Data e inteligencia artificial para optimizar recursos financieros y mitigar riesgos organizacionales.
                            </p>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #2ECC71; padding:10px 12px; border-radius:6px;">
                            <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:3px;">RAP 3: Liderazgo y Sostenibilidad</strong>
                            <p style="font-size:0.72rem; color:#4B5563; margin:0; line-height:1.4;">
                                Lidera equipos multidisciplinarios con visión bioética, articulando sistemas integrados HSEQ y responsabilidad social corporativa.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- MÉTRICAS OLE / SPADIES -->
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #BE123C; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Inserción Laboral Rápida</div>
                        <div style="font-family:'Montserrat',sans-serif; font-size:1.45rem; font-weight:800; color:#BE123C; margin:2px 0;">71.0%</div>
                        <div style="font-size:0.7rem; color:#4B5563;">Empleados en menos de 6 meses (Fuente OLE).</div>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #F39200; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Tasa de Cotización Formal</div>
                        <div style="font-family:'Montserrat',sans-serif; font-size:1.45rem; font-weight:800; color:#F39200; margin:2px 0;">78.5%</div>
                        <div style="font-size:0.7rem; color:#4B5563;">Aportantes activos a seguridad social.</div>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #2ECC71; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Permanencia Semestral TO</div>
                        <div style="font-family:'Montserrat',sans-serif; font-size:1.45rem; font-weight:800; color:#2ECC71; margin:2px 0;">94.4%</div>
                        <div style="font-size:0.7rem; color:#4B5563;">Consolidación mediante Alertas SAT.</div>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #1A1A1B; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Emprendedores Formales</div>
                        <div style="font-family:'Montserrat',sans-serif; font-size:1.45rem; font-weight:800; color:#1A1A1B; margin:2px 0;">27.0%</div>
                        <div style="font-size:0.7rem; color:#4B5563;">Egresados independientes y creadores de empresa.</div>
                    </div>
                </div>

            </div>

        </div>

        <!-- PIE DEL MODAL CON BOTONES DE NAVEGACIÓN -->
        <div style="background:#F8F9FA; padding:12px 20px; border-top:1px solid #E8E8E8; display:flex; justify-content:space-between; align-items:center;">
            <button onclick="window.navC1Modal(-1)" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1E293B; font-weight:700; font-size:0.78rem; padding:6px 14px; border-radius:6px; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <div style="display:flex; gap:8px;">
                <button onclick="window.closeC1Modal()" style="background:#1A1A1B; color:#FFFFFF; border:none; font-weight:700; font-size:0.78rem; padding:7px 18px; border-radius:6px; cursor:pointer;">
                    Cerrar Sustentación
                </button>
            </div>
            <button onclick="window.navC1Modal(1)" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1E293B; font-weight:700; font-size:0.78rem; padding:6px 14px; border-radius:6px; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
                Siguiente <i class="fas fa-chevron-right"></i>
            </button>
        </div>

    </div>

</div>

<style>
@keyframes c1ModalFadeIn {
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1); }
}
.c1-mtab.active {
    background: #FFF9F2 !important;
    border: 1.5px solid #F39200 !important;
    color: #C2410C !important;
    font-weight: 800 !important;
}
</style>
`;

/* =========================================================
   CONTROLADORES JS DE LA VENTANA EMERGENTE (MODAL C1)
   ========================================================= */
(function() {
    const tabOrder = ['ficha', 'benchmarking', 'coherencia', 'modalidades', 'impacto'];
    const tabMeta = {
        'ficha': { title: 'Ficha Técnica Oficial del Programa', icon: 'fas fa-id-card', color: '#F39200' },
        'benchmarking': { title: 'Justificación, Clasificación CINE y Benchmarking', icon: 'fas fa-network-wired', color: '#2ECC71' },
        'coherencia': { title: 'Coherencia Curricular y Áreas Funcionales (48 Asignaturas)', icon: 'fas fa-sitemap', color: '#0369A1' },
        'modalidades': { title: 'Equivalencia de Modalidades en el Registro Único', icon: 'fas fa-balance-scale-right', color: '#6B21A8' },
        'impacto': { title: 'Pertinencia Social, Egresados y Resultados de Aprendizaje', icon: 'fas fa-chart-line', color: '#BE123C' }
    };
    let currentTab = 'ficha';

    window.openC1Modal = function(tabKey) {
        const overlay = document.getElementById('c1-modal-overlay');
        if (!overlay) return;
        overlay.style.display = 'flex';
        window.switchC1ModalTab(tabKey || 'ficha');
    };

    window.closeC1Modal = function() {
        const overlay = document.getElementById('c1-modal-overlay');
        if (overlay) overlay.style.display = 'none';
    };

    window.switchC1ModalTab = function(tabKey) {
        if (!tabOrder.includes(tabKey)) tabKey = 'ficha';
        currentTab = tabKey;

        // Ocultar todos los paneles y mostrar el activo
        tabOrder.forEach(key => {
            const panel = document.getElementById('c1-panel-' + key);
            if (panel) panel.style.display = (key === tabKey) ? 'block' : 'none';
        });

        // Actualizar tabs en el modal
        const buttons = document.querySelectorAll('#c1-modal-nav-tabs .c1-mtab');
        buttons.forEach(btn => {
            const isTarget = btn.getAttribute('data-c1tab') === tabKey;
            if (isTarget) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Actualizar título e icono
        const meta = tabMeta[tabKey];
        if (meta) {
            const titleElem = document.getElementById('c1-modal-title');
            const iconElem = document.getElementById('c1-modal-icon');
            const iconBox = document.getElementById('c1-modal-icon-container');
            if (titleElem) titleElem.innerText = meta.title;
            if (iconElem) iconElem.className = meta.icon;
            if (iconBox) iconBox.style.background = meta.color;
        }
    };

    window.navC1Modal = function(delta) {
        const idx = tabOrder.indexOf(currentTab);
        let nextIdx = idx + delta;
        if (nextIdx < 0) nextIdx = tabOrder.length - 1;
        if (nextIdx >= tabOrder.length) nextIdx = 0;
        window.switchC1ModalTab(tabOrder[nextIdx]);
    };

    // Cerrar al hacer clic en el backdrop
    document.addEventListener('click', function(e) {
        const overlay = document.getElementById('c1-modal-overlay');
        if (overlay && e.target === overlay) {
            window.closeC1Modal();
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('c1-modal-overlay');
            if (overlay && overlay.style.display === 'flex') {
                window.closeC1Modal();
                e.stopPropagation();
            }
        }
    });
})();
