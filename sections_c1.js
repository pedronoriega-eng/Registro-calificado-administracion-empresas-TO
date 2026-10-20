/* =========================================================
   CONDICIÓN 1 – DENOMINACIÓN DEL PROGRAMA
   Administración de Empresas · Registro Calificado Único (Presencial & Virtual) · TO
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c1'] = `
<!-- ========================================================================= -->
<!-- 1. BANNER INSTITUCIONAL DE CABECERA                                       -->
<!-- ========================================================================= -->
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 1
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Normatividad Decreto 1330 de 2019</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.26rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-id-badge" style="color:#F39200;"></i> Denominación del Programa: Administración de Empresas
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0; line-height:1.45;">
                Trazabilidad evolutiva normativa, fichas técnicas oficiales del <strong>Registro Calificado Único (Presencial y Virtual)</strong>, matriz de coherencia entre perfil de egreso y resultados de aprendizaje (RAP), y componentes curriculares oficiales del Documento Maestro.
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span class="tag-legal" style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-check-double"></i> Registro Calificado Único
            </span>
            <span class="tag-legal" style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                SNIES Presencial: 108445 · Virtual: 115833
            </span>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- 2. BARRA DE NAVEGACIÓN RÁPIDA POR SUBSECCIONES (ACCESO INMEDIATO)         -->
<!-- ========================================================================= -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:10px 14px; margin-bottom:22px; box-shadow:0 2px 8px rgba(0,0,0,0.03); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.76rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-compass" style="color:#F39200;"></i> Ejes de Sustentación Condición 1:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;" id="c1-subtabs-bar">
        <button onclick="window.showC1Section('c1-linea-tiempo')" data-c1-target="c1-linea-tiempo" class="c1-subtab-btn" style="background:#1A1A1B; color:#FFFFFF; border:1.5px solid #F39200; padding:6px 13px; border-radius:20px; font-size:0.75rem; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; box-shadow:0 2px 8px rgba(243,146,0,0.25);">
            <i class="fas fa-route" style="color:#F39200;"></i> 1. Línea de Tiempo Normativa
        </button>
        <button onclick="window.showC1Section('c1-fichas-paralelo')" data-c1-target="c1-fichas-paralelo" class="c1-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:6px 13px; border-radius:20px; font-size:0.75rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-columns" style="color:#1A1A1B;"></i> 2. Fichas Vigente vs. Propuesto
        </button>
        <button onclick="window.showC1Section('c1-perfil-competencias')" data-c1-target="c1-perfil-competencias" class="c1-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:6px 13px; border-radius:20px; font-size:0.75rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-user-graduate" style="color:#10B981;"></i> 3. Perfil &amp; Competencias (Tabla 35)
        </button>
        <button onclick="window.showC1Section('c1-componentes-maestro')" data-c1-target="c1-componentes-maestro" class="c1-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:6px 13px; border-radius:20px; font-size:0.75rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-cubes" style="color:#EA580C;"></i> 4. Componentes Curriculares (Tabla 16)
        </button>
        <button onclick="window.showC1Section('c1-factores-diferenciadores')" data-c1-target="c1-factores-diferenciadores" class="c1-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:6px 13px; border-radius:20px; font-size:0.75rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-medal" style="color:#7C3AED;"></i> 5. Factores Diferenciadores (Interactivos)
        </button>
        <button onclick="window.showC1Section('c1-mapa-conceptual')" data-c1-target="c1-mapa-conceptual" class="c1-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:6px 13px; border-radius:20px; font-size:0.75rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;">
            <i class="fas fa-project-diagram" style="color:#3B82F6;"></i> 6. Mapa Sistémico
        </button>
    </div>
</div>

<!-- ========================================================================= -->
<!-- 3. LÍNEA DE TIEMPO NORMATIVA E HISTÓRICA (DE PRIMERO - ESTILO SERPENTINA)  -->
<!-- ========================================================================= -->
<div id="c1-linea-tiempo" style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #F39200; border-radius:12px; padding:18px 20px; margin-bottom:24px; box-shadow:0 4px 16px rgba(0,0,0,0.05); position:relative;">
    
    <!-- ENCABEZADO COMPACTO DE LA LÍNEA DE TIEMPO -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px; border-bottom:1px solid #F1F5F9; padding-bottom:10px;">
        <div style="display:flex; align-items:center; gap:10px;">
            <div style="background:#FFF9F2; color:#F39200; width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.15rem; border:1.5px solid #FED7AA;">
                <i class="fas fa-history"></i>
            </div>
            <div>
                <span style="font-size:0.68rem; text-transform:uppercase; font-weight:800; color:#C2410C; letter-spacing:0.5px;">Evolución Jurídica y Curricular (2018 - 2025)</span>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0;">
                    Línea de Tiempo Normativa: De la Creación a la Renovación del Registro Único
                </h4>
            </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
            <span style="background:#F8FAFC; border:1px solid #E2E8F0; color:#475569; font-size:0.72rem; font-weight:700; padding:4px 10px; border-radius:20px; display:inline-flex; align-items:center; gap:5px;">
                <i class="fas fa-file-signature" style="color:#F39200;"></i> 5 Hitos SACES
            </span>
            <button onclick="window.showC1Section('c1-fichas-paralelo')" style="background:#1A1A1B; color:#FFFFFF; border:none; font-size:0.72rem; font-weight:700; padding:5px 12px; border-radius:4px; display:inline-flex; align-items:center; gap:5px; cursor:pointer;">
                Ver Fichas en Paralelo <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>

    <!-- PIPELINE HORIZONTAL COMPACTO DE 5 HITOS (1 SOLA FILA ÁGIL) -->
    <div style="position:relative; margin-bottom:16px;">
        <!-- LÍNEA CONECTORA CONTINUA -->
        <div style="position:absolute; top:20px; left:8%; right:8%; height:3px; background:linear-gradient(90deg, #7C3AED 0%, #C8102E 25%, #F39200 50%, #D97706 75%, #059669 100%); z-index:1;"></div>

        <!-- GRID DE 5 COLUMNAS -->
        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:10px; position:relative; z-index:2;">
            
            <!-- HITO 1: 2018 -->
            <div style="background:#FFFFFF; border:1px solid #E9D5FF; border-top:3px solid #7C3AED; border-radius:8px; padding:10px 11px; box-shadow:0 2px 6px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="background:#7C3AED; color:#FFFFFF; font-family:'Montserrat',sans-serif; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:12px;">2018</span>
                        <div style="width:24px; height:24px; border-radius:50%; background:#FAF5FF; border:1.5px solid #7C3AED; color:#7C3AED; display:flex; align-items:center; justify-content:center; font-size:0.68rem;">
                            <i class="fas fa-scroll"></i>
                        </div>
                    </div>
                    <span style="font-size:0.64rem; font-weight:800; color:#6B21A8; text-transform:uppercase; display:block; margin-bottom:2px;">Acuerdo CS 05 (29/05/18)</span>
                    <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:4px; line-height:1.25;">Creación Institucional</strong>
                    <p style="font-size:0.7rem; color:#4B5563; margin:0 0 6px; line-height:1.35;">
                        Aprobación formal del programa por el Consejo Superior de la TO en modalidad presencial.
                    </p>
                </div>
                <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:4px; padding:3px 6px; font-size:0.67rem; color:#6B21A8; font-weight:700; text-align:center;">
                    <i class="fas fa-university"></i> Presencial Bucaramanga
                </div>
            </div>

            <!-- HITO 2: 2019 -->
            <div style="background:#FFFFFF; border:1px solid #FECDD3; border-top:3px solid #C8102E; border-radius:8px; padding:10px 11px; box-shadow:0 2px 6px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="background:#C8102E; color:#FFFFFF; font-family:'Montserrat',sans-serif; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:12px;">2019</span>
                        <div style="width:24px; height:24px; border-radius:50%; background:#FFF1F2; border:1.5px solid #C8102E; color:#C8102E; display:flex; align-items:center; justify-content:center; font-size:0.68rem;">
                            <i class="fas fa-award"></i>
                        </div>
                    </div>
                    <span style="font-size:0.64rem; font-weight:800; color:#9F1239; text-transform:uppercase; display:block; margin-bottom:2px;">Res. MEN 011375 (07/11/19)</span>
                    <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:4px; line-height:1.25;">Registro Inicial &amp; SNIES</strong>
                    <p style="font-size:0.7rem; color:#4B5563; margin:0 0 6px; line-height:1.35;">
                        MEN otorga Registro Calificado por 7 años. Código <strong>SNIES Presencial: 108445</strong>.
                    </p>
                </div>
                <div style="background:#FFF1F2; border:1px solid #FECDD3; border-radius:4px; padding:3px 6px; font-size:0.67rem; color:#9F1239; font-weight:700; text-align:center;">
                    <i class="fas fa-layer-group"></i> 158 Cr · 9 Sem · 62 Asig
                </div>
            </div>

            <!-- HITO 3: 2024 -->
            <div style="background:#FFFFFF; border:1px solid #FED7AA; border-top:3px solid #F39200; border-radius:8px; padding:10px 11px; box-shadow:0 2px 6px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="background:#F39200; color:#FFFFFF; font-family:'Montserrat',sans-serif; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:12px;">2024</span>
                        <div style="width:24px; height:24px; border-radius:50%; background:#FFF9F2; border:1.5px solid #F39200; color:#F39200; display:flex; align-items:center; justify-content:center; font-size:0.68rem;">
                            <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                    <span style="font-size:0.64rem; font-weight:800; color:#C2410C; text-transform:uppercase; display:block; margin-bottom:2px;">Acuerdo CS 011 (03/12/24)</span>
                    <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:4px; line-height:1.25;">Solicitud Registro Único</strong>
                    <p style="font-size:0.7rem; color:#4B5563; margin:0 0 6px; line-height:1.35;">
                        CS aprueba solicitud formal ante MEN para articular Presencial y Virtual (Exp. SACES 108524).
                    </p>
                </div>
                <div style="background:#FFF9F2; border:1px solid #FED7AA; border-radius:4px; padding:3px 6px; font-size:0.67rem; color:#C2410C; font-weight:700; text-align:center;">
                    <i class="fas fa-network-wired"></i> Tránsito Registro Único SACES
                </div>
            </div>

            <!-- HITO 4: 2024-2025 -->
            <div style="background:#FFFFFF; border:1px solid #FDE68A; border-top:3px solid #D97706; border-radius:8px; padding:10px 11px; box-shadow:0 2px 6px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="background:#D97706; color:#FFFFFF; font-family:'Montserrat',sans-serif; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:12px;">2024-25</span>
                        <div style="width:24px; height:24px; border-radius:50%; background:#FEF3C7; border:1.5px solid #D97706; color:#D97706; display:flex; align-items:center; justify-content:center; font-size:0.68rem;">
                            <i class="fas fa-file-check"></i>
                        </div>
                    </div>
                    <span style="font-size:0.64rem; font-weight:800; color:#B45309; text-transform:uppercase; display:block; margin-bottom:2px;">Aprobación MEN · Ampliación</span>
                    <strong style="font-size:0.78rem; color:#1A1A1B; display:block; margin-bottom:4px; line-height:1.25;">SNIES Virtual Asignado</strong>
                    <p style="font-size:0.7rem; color:#4B5563; margin:0 0 6px; line-height:1.35;">
                        MEN aprueba modalidad virtual articulada a presencial. <strong>SNIES Virtual: 115833</strong>.
                    </p>
                </div>
                <div style="background:#FEF3C7; border:1px solid #FDE68A; border-radius:4px; padding:3px 6px; font-size:0.67rem; color:#B45309; font-weight:700; text-align:center;">
                    <i class="fas fa-check-circle"></i> SNIES: 108445 + 115833
                </div>
            </div>

            <!-- HITO 5: 2025 -->
            <div style="background:#F0FDF4; border:1.5px solid #86EFAC; border-top:3px solid #059669; border-radius:8px; padding:10px 11px; box-shadow:0 3px 8px rgba(5,150,105,0.06); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="background:#059669; color:#FFFFFF; font-family:'Montserrat',sans-serif; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:12px;">2025</span>
                        <span style="background:#DCFCE7; color:#166534; font-size:0.62rem; font-weight:800; padding:1px 5px; border-radius:4px;">RENOVACIÓN</span>
                    </div>
                    <span style="font-size:0.64rem; font-weight:800; color:#166534; text-transform:uppercase; display:block; margin-bottom:2px;">Acuerdo CS 021 (25/07/25)</span>
                    <strong style="font-size:0.78rem; color:#064E3B; display:block; margin-bottom:4px; line-height:1.25;">Modificación Curricular</strong>
                    <p style="font-size:0.7rem; color:#14532D; margin:0 0 6px; line-height:1.35;">
                        Modernización a 8 semestres y titulación inclusiva <em>Administrador(a) de Empresas</em>.
                    </p>
                </div>
                <div style="background:#FFFFFF; border:1px solid #86EFAC; border-radius:4px; padding:3px 6px; font-size:0.67rem; color:#166534; font-weight:800; text-align:center;">
                    <i class="fas fa-star" style="color:#059669;"></i> 144 Cr · 8 Sem · 48 Asig
                </div>
            </div>

        </div>
    </div>

    <!-- TABLERO VISUAL DE EVOLUCIÓN Y CAMBIOS DEL PROGRAMA (SÍNTESIS COMPARATIVA DE ALTO IMPACTO) -->
    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:10px 14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
            <span style="font-size:0.72rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
                <i class="fas fa-exchange-alt" style="color:#F39200;"></i> Cuadro Comparativo de Evolución Curricular (Cambios Concretos en el Programa):
            </span>
            <span style="font-size:0.68rem; color:#64748B;">Evidencia directa para evaluación MEN / CONACES</span>
        </div>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
            
            <!-- ESTADO INICIAL 2019 -->
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #64748B; border-radius:6px; padding:8px 10px;">
                <span style="font-size:0.66rem; font-weight:800; color:#64748B; text-transform:uppercase; display:block;">1. Estado Inicial (2019)</span>
                <strong style="font-size:0.76rem; color:#1E293B; display:block; margin:2px 0;">Solo Presencial · 9 Semestres</strong>
                <div style="font-size:0.7rem; color:#475569; line-height:1.35;">
                    • <strong>158 Créditos</strong> · 62 Asignaturas<br>
                    • Código SNIES: <strong>108445</strong><br>
                    • Cobertura: Bucaramanga (Presencial)
                </div>
            </div>

            <!-- ESTADO INTERMEDIO 2024-2025 -->
            <div style="background:#FFFFFF; border:1px solid #FED7AA; border-left:3px solid #F39200; border-radius:6px; padding:8px 10px;">
                <span style="font-size:0.66rem; font-weight:800; color:#C2410C; text-transform:uppercase; display:block;">2. Adopción Registro Único (2024-2025)</span>
                <strong style="font-size:0.76rem; color:#1E293B; display:block; margin:2px 0;">Presencial + Virtual · 9 Semestres</strong>
                <div style="font-size:0.7rem; color:#475569; line-height:1.35;">
                    • <strong>158 Créditos</strong> · 62 Asignaturas<br>
                    • SNIES Presencial: <strong>108445</strong> | Virtual: <strong>115833</strong><br>
                    • Ampliación a Cobertura Nacional
                </div>
            </div>

            <!-- ESTADO RENOVACIÓN 2025 (PROPUESTO) -->
            <div style="background:#F0FDF4; border:1.5px solid #86EFAC; border-left:3px solid #059669; border-radius:6px; padding:8px 10px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:0.66rem; font-weight:800; color:#166534; text-transform:uppercase;">3. Propuesta de Renovación (2025)</span>
                    <span style="background:#059669; color:#FFFFFF; font-size:0.6rem; font-weight:800; padding:1px 5px; border-radius:3px;">OPTIMIZADO</span>
                </div>
                <strong style="font-size:0.76rem; color:#064E3B; display:block; margin:2px 0;">Registro Único (P+V) · 8 Semestres</strong>
                <div style="font-size:0.7rem; color:#14532D; line-height:1.35;">
                    • <strong>144 Créditos</strong> <span style="color:#059669; font-weight:800;">(-14 cr eficiencia)</span><br>
                    • <strong>48 Asignaturas</strong> <span style="color:#059669; font-weight:800;">(-14 modulares)</span><br>
                    • <strong>300 Cupos</strong> (240 Virtual / 60 Presencial)
                </div>
            </div>

        </div>
    </div>

</div>

<!-- ========================================================================= -->
<div id="c1-fichas-paralelo" style="display:none; margin-bottom:28px; display:none;">
    
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
        <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0; display:flex; align-items:center; gap:8px;">
            <i class="fas fa-columns" style="color:#F39200;"></i> Comparativo Técnico Oficial: Registro Único Vigente vs. Propuesto
        </h4>
        <span style="font-size:0.75rem; color:#64748B;">Evidencia de evolución curricular y eficiencia formativa</span>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap:22px;">
        
        <!-- ======================================= -->
        <!-- FICHA REGISTRO CALIFICADO VIGENTE       -->
        <!-- ======================================= -->
        <div style="background:#FFFFFF; border:1px solid #D1D1D1; border-top:5px solid #1A1A1B; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.06); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #E8E8E8; padding-bottom:12px; margin-bottom:14px;">
                    <div>
                        <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#6B6B6B; letter-spacing:0.5px;">Norma Base SACES · Acuerdo 011 de 2024</span>
                        <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0;">
                            Registro Calificado Vigente (Registro Único)
                        </h4>
                    </div>
                    <span style="background:#E8E8E8; color:#1A1A1B; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">
                        <i class="fas fa-history"></i> 158 Créditos · 9 Sem.
                    </span>
                </div>

                <table class="tbl" style="width:100%; font-size:0.83rem; margin:0;">
                    <tbody>
                        <tr>
                            <td class="lb" style="width:40%; font-weight:700; color:#6B6B6B;">Denominación</td>
                            <td><strong>Administración de Empresas</strong></td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Códigos SNIES</td>
                            <td>
                                <span style="font-family:monospace; background:#F4F4F4; padding:2px 6px; border-radius:4px; font-weight:700; margin-right:4px;">Presencial: 108445</span>
                                <span style="font-family:monospace; background:#F4F4F4; padding:2px 6px; border-radius:4px; font-weight:700;">Virtual: 115833</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Nivel de Formación</td>
                            <td>Pregrado · Profesional Universitario (Nivel 7 MNC)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Título Otorgado</td>
                            <td>Administrador de Empresas (Masculino genérico histórico)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Metodología / Modalidad</td>
                            <td><span class="tag-legal" style="background:#1A1A1B; color:#FFFFFF;">REGISTRO ÚNICO</span> <span class="tag-legal" style="background:#E8E8E8; color:#1A1A1B;">Presencial &amp; Virtual</span></td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Lugar de Desarrollo</td>
                            <td>Sede Principal Bucaramanga (Presencial) + Cobertura Nacional Digital (Virtual)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Duración Estimada</td>
                            <td><strong>9 semestres</strong> (4.5 años)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Número de Créditos</td>
                            <td><strong>158 créditos académicos</strong> (62 asignaturas)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Periodicidad</td>
                            <td>Semestral</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Cupos Primer Período</td>
                            <td><strong>300 estudiantes / cohorte</strong> (Oferta Registro Único autorizada)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Relación de Horas</td>
                            <td><strong>Presencial:</strong> 1:2 (48h directas / 96h indep.) · <strong>Virtual:</strong> 1:3 (36h mediadas / 108h autónomas)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div style="background:#F8F9FA; border-left:3px solid #1A1A1B; padding:10px 14px; border-radius:6px; margin-top:16px; font-size:0.77rem; color:#4B5563;">
                <i class="fas fa-info-circle" style="color:#1A1A1B; margin-right:4px;"></i>
                <strong>Origen Normativo:</strong> Aprobado inicialmente mediante <strong>Resolución MEN 011375 de 2019</strong> (presencial), formalizado a <strong>Registro Calificado Único (Presencial y Virtual)</strong> mediante <strong>Acuerdo CS No. 011 de 2024</strong> (base de 158 créditos y 9 semestres en Anexo 5 SACES).
            </div>
        </div>

        <!-- ======================================= -->
        <!-- FICHA REGISTRO CALIFICADO PROPUESTO     -->
        <!-- ======================================= -->
        <div style="background:#FFFFFF; border:2px solid #F39200; border-top:5px solid #F39200; border-radius:12px; padding:20px; box-shadow:0 8px 24px rgba(243,146,0,0.12); display:flex; flex-direction:column; justify-content:space-between; position:relative;">
            <div style="position:absolute; top:-12px; right:20px; background:#F39200; color:#FFFFFF; font-size:0.72rem; font-weight:800; padding:2px 10px; border-radius:12px; text-transform:uppercase; letter-spacing:0.5px; box-shadow:0 2px 6px rgba(243,146,0,0.4);">
                Propuesta en Renovación
            </div>
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #FFF3E0; padding-bottom:12px; margin-bottom:14px;">
                    <div>
                        <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#F39200; letter-spacing:0.5px;">Decreto 1330 · Renovación Curricular SACES</span>
                        <h4 style="font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0;">
                            Registro Calificado Único (Propuesto)
                        </h4>
                    </div>
                    <span style="background:rgba(243,146,0,0.15); color:#F39200; border:1px solid rgba(243,146,0,0.3); font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">
                        <i class="fas fa-bolt"></i> 144 Créditos · 8 Sem.
                    </span>
                </div>

                <table class="tbl" style="width:100%; font-size:0.83rem; margin:0;">
                    <tbody>
                        <tr style="background:#FFF9F2;">
                            <td class="lb" style="width:40%; font-weight:700; color:#F39200;">Denominación</td>
                            <td><strong>Administración de Empresas</strong> (Mantenida oficial por tradición y pertinencia)</td>
                        </tr>

                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Nivel de Formación</td>
                            <td>Pregrado · Profesional Universitario (Nivel 7 MNC)</td>
                        </tr>
                        <tr style="background:#FFF9F2;">
                            <td class="lb" style="font-weight:700; color:#F39200;">Titulación Inclusiva</td>
                            <td><strong>Administrador(a) de Empresas</strong><br><span style="font-size:0.74rem; color:#6B6B6B;">(Expedición con equidad de género: <em>Administrador de Empresas</em> / <em>Administradora de Empresas</em>)</span></td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Metodología / Modalidad</td>
                            <td><span class="tag-legal" style="background:#F39200; color:#FFFFFF;">REGISTRO ÚNICO</span> <span class="tag-legal" style="background:#1A1A1B; color:#FFFFFF;">Presencial &amp; Virtual</span></td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Lugar de Desarrollo</td>
                            <td>Sede Principal Bucaramanga (Presencial) + Cobertura Nacional Digital (Virtual)</td>
                        </tr>
                        <tr style="background:#FFF9F2;">
                            <td class="lb" style="font-weight:700; color:#F39200;">Duración Optimizada</td>
                            <td><strong>8 semestres</strong> (4.0 años) — Compactación y alineación con estándares internacionales</td>
                        </tr>
                        <tr style="background:#FFF9F2;">
                            <td class="lb" style="font-weight:700; color:#F39200;">Número de Créditos</td>
                            <td><strong>144 créditos académicos</strong> (48 asignaturas modulares)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Periodicidad</td>
                            <td>Semestral</td>
                        </tr>
                        <tr style="background:#FFF9F2;">
                            <td class="lb" style="font-weight:700; color:#F39200;">Distribución Cupos</td>
                            <td><strong>300 estudiantes / cohorte</strong>:<br>• <strong>240 estudiantes</strong> en Modalidad Virtual (Nacional)<br>• <strong>60 estudiantes</strong> en Modalidad Presencial (Bucaramanga)</td>
                        </tr>
                        <tr>
                            <td class="lb" style="font-weight:700; color:#6B6B6B;">Distribución Horas</td>
                            <td><strong>Presencial:</strong> 48h directas / 96h indep. · <strong>Virtual:</strong> 36h mediadas / 108h autónomas (x materia 3 cr)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="background:#FFF9F2; border-left:3px solid #F39200; padding:10px 14px; border-radius:6px; margin-top:16px; font-size:0.77rem; color:#8A5300;">
                <i class="fas fa-check-circle" style="color:#F39200; margin-right:4px;"></i>
                <strong>Transformación Institucional Aprobada:</strong> Adoptado por el Consejo Superior mediante <strong>Acuerdo CS No. 011 de 2024</strong> (adopción Registro Único) y <strong>Acuerdo CS No. 021 de 2025</strong> (plan optimizado a 144 créditos, 8 semestres y 48 asignaturas en Anexo 2 SACES).
            </div>
        </div>

    </div>

</div>

<!-- ========================================================================= -->
<!-- 5. PERFIL DE EGRESO Y COMPETENCIAS DEL EGRESADO (TABLA 35 DEL DOC. MAESTRO)-->
<!-- ========================================================================= -->
<div id="c1-perfil-competencias" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #10B981; border-radius:12px; padding:22px 24px; margin-bottom:28px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
    
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px; border-bottom:1px solid #F1F5F9; padding-bottom:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
            <div style="background:#ECFDF5; color:#10B981; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.35rem; border:1.5px solid #A7F3D0;">
                <i class="fas fa-user-graduate"></i>
            </div>
            <div>
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#065F46; letter-spacing:0.5px;">Alineación Curricular Directa</span>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.22rem; font-weight:800; color:#1A1A1B; margin:0;">
                    Perfil de Egreso &amp; Matriz de Competencias vs. Resultados de Aprendizaje (RAP)
                </h4>
            </div>
        </div>
        <span style="background:#ECFDF5; color:#065F46; border:1px solid #A7F3D0; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;">
            Tabla 35 Oficial · Doc. Maestro (Pág. 165-167)
        </span>
    </div>

    <!-- DECLARACIÓN OFICIAL DEL PERFIL DE EGRESO (PEP / DOC MAESTRO PÁG 241) -->
    <div style="background:linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%); border:1.5px solid #E2E8F0; border-left:5px solid #10B981; border-radius:10px; padding:16px 20px; margin-bottom:20px;">
        <span style="font-size:0.7rem; font-weight:800; text-transform:uppercase; color:#047857; letter-spacing:0.5px; display:block; margin-bottom:4px;">
            <i class="fas fa-quote-left"></i> Perfil de Egreso Oficial del Programa (Documento Maestro, Cap. 4.3.5)
        </span>
        <p style="font-size:0.86rem; color:#1E293B; margin:0; line-height:1.55; font-style:italic;">
            "El egresado del programa de <strong>Administración de Empresas</strong> de la Corporación Escuela Tecnológica del Oriente es un profesional con <strong>competencias gerenciales, estratégicas y tecnológicas</strong> que le permiten gestionar organizaciones de manera integral, innovadora y sostenible, en concordancia con las demandas del entorno productivo y social, liderando con visión ética y capacidad analítica de decisiones."
        </p>
    </div>

    <!-- TABLA DE ALINEACIÓN: 10 COMPETENCIAS VS 10 RAP VS ASIGNATURAS -->
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:10px;">
        <table class="tbl" style="width:100%; font-size:0.8rem; margin:0; border-collapse:collapse;">
            <thead style="background:#1A1A1B; color:#FFFFFF;">
                <tr>
                    <th style="width:5%; text-align:center;">#</th>
                    <th style="width:32%; text-align:left;">Competencia del Egresado / Graduado</th>
                    <th style="width:33%; text-align:left;">Resultado de Aprendizaje del Programa (RAP)</th>
                    <th style="width:30%; text-align:left;">Asignaturas Asociadas (Plan 144 cr)</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background:#FFFFFF;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">1</td>
                    <td><strong>Gestión Estratégica y Ética:</strong> Gestiona estratégica y éticamente las organizaciones, articulando los recursos humanos, financieros y tecnológicos para el logro de los objetivos institucionales.</td>
                    <td><strong style="color:#047857;">RAP 1:</strong> Diseña e implementa estrategias organizacionales que optimizan los recursos y fortalecen la competitividad empresarial.</td>
                    <td style="font-size:0.75rem; color:#475569;">Fundamentos de Administración · Procesos Administrativos · Teoría Organizacional · Pensamiento Estratégico y Prospectivo · Juego Gerencial · Proyecto de Grado</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">2</td>
                    <td><strong>Toma de Decisiones Financieras:</strong> Analiza información financiera, económica y contable para la toma de decisiones en contextos locales y globales.</td>
                    <td><strong style="color:#047857;">RAP 2:</strong> Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles.</td>
                    <td style="font-size:0.75rem; color:#475569;">Fundamentos Contables y Financieros · Análisis Financiero · Administración Financiera · Costos y Presupuestos · Matemática Financiera · Legislación Tributaria</td>
                </tr>
                <tr style="background:#FFFFFF;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">3</td>
                    <td><strong>Liderazgo y Talento Humano:</strong> Dirige el talento humano con liderazgo participativo, promoviendo la innovación, la cultura organizacional y el bienestar laboral.</td>
                    <td><strong style="color:#047857;">RAP 3:</strong> Diseña políticas y estrategias de gestión humana que potencian la productividad y el desarrollo del personal.</td>
                    <td style="font-size:0.75rem; color:#475569;">Gerencia del Talento Humano · Habilidades Gerenciales y Liderazgo · Cátedra de la Paz y Resolución de Conflictos · Comunicación Oral y Escrita</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">4</td>
                    <td><strong>Emprendimiento y Proyectos:</strong> Formula y gestiona proyectos empresariales innovadores, sostenibles y socialmente responsables.</td>
                    <td><strong style="color:#047857;">RAP 4:</strong> Evalúa y ejecuta proyectos de emprendimiento y sostenibilidad que generen impacto económico y social.</td>
                    <td style="font-size:0.75rem; color:#475569;">Modelos de Emprendimiento · Laboratorio de Innovación y Emprendimiento · Formulación y Evaluación de Proyectos · Economía Colombiana e Internacional · Proyecto de Grado</td>
                </tr>
                <tr style="background:#FFFFFF;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">5</td>
                    <td><strong>Marketing Estratégico y Sostenible:</strong> Desarrolla estrategias de marketing y comunicación enfocadas en la satisfacción del cliente, la competitividad y la sostenibilidad.</td>
                    <td><strong style="color:#047857;">RAP 5:</strong> Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible.</td>
                    <td style="font-size:0.75rem; color:#475569;">Fundamentos de Mercadeo · Gerencia de Marketing · Investigación de Mercados · Gerencia de Ventas y Canales de Distribución · E-commerce · Marketing Verde (Electiva)</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">6</td>
                    <td><strong>Tecnología, Big Data e IA:</strong> Aplica herramientas tecnológicas, digitales y analíticas para la optimización de procesos y la toma de decisiones estratégicas.</td>
                    <td><strong style="color:#047857;">RAP 6:</strong> Integra tecnologías de información, analítica de datos e inteligencia artificial en la gestión administrativa.</td>
                    <td style="font-size:0.75rem; color:#475569;">Big Data y Analítica de Datos · Inteligencia Artificial · Sistemas Integrados de Gestión (HSEQ) · Transformación Digital (Electiva)</td>
                </tr>
                <tr style="background:#FFFFFF;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">7</td>
                    <td><strong>Sostenibilidad y RSE:</strong> Promueve la sostenibilidad y la responsabilidad social como ejes de la gestión empresarial.</td>
                    <td><strong style="color:#047857;">RAP 7:</strong> Implementa prácticas de sostenibilidad, economía circular y responsabilidad social en la organización.</td>
                    <td style="font-size:0.75rem; color:#475569;">Desarrollo Sostenible y Economía Circular (Electiva) · Gerencia de la Calidad · Ética y Gobernanza Corporativa (Electiva) · Finanzas Sostenibles (Electiva)</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">8</td>
                    <td><strong>Operaciones y Calidad:</strong> Gestiona procesos operativos y de calidad con enfoque de mejora continua y eficiencia organizacional.</td>
                    <td><strong style="color:#047857;">RAP 8:</strong> Diseña e implementa sistemas integrados de gestión orientados a la calidad, productividad y sostenibilidad.</td>
                    <td style="font-size:0.75rem; color:#475569;">Gestión de Operaciones · Gerencia de Producción · Sistemas Integrados de Gestión (HSEQ) · Gerencia de la Calidad</td>
                </tr>
                <tr style="background:#FFFFFF;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">9</td>
                    <td><strong>Investigación y Solución de Problemas:</strong> Aplica la investigación y el análisis crítico para la solución de problemas organizacionales y el mejoramiento continuo.</td>
                    <td><strong style="color:#047857;">RAP 9:</strong> Diseña e implementa proyectos de investigación aplicada que aporten a la innovación y competitividad empresarial.</td>
                    <td style="font-size:0.75rem; color:#475569;">Competencias Investigativas · Métodos Cualitativos y Cuantitativos · Proyecto de Grado</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="text-align:center; font-weight:800; color:#F39200;">10</td>
                    <td><strong>Ética y Compromiso Ciudadano:</strong> Actúa con ética, responsabilidad y compromiso social en el ejercicio profesional.</td>
                    <td><strong style="color:#047857;">RAP 10:</strong> Toma decisiones con base en principios éticos, legales y de responsabilidad social empresarial.</td>
                    <td style="font-size:0.75rem; color:#475569;">Cátedra de la Paz y Resolución de Conflictos · Legislación Comercial · Derecho Laboral y Seguridad Social · Electiva de Diversidad e Inclusión</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

<!-- ========================================================================= -->
<!-- 6. COMPONENTES CURRICULARES OFICIALES DEL DOCUMENTO MAESTRO (TABLA 16)     -->
<!-- ========================================================================= -->
<div id="c1-componentes-maestro" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #EA580C; border-radius:12px; padding:22px 24px; margin-bottom:28px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
    
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px; border-bottom:1px solid #F1F5F9; padding-bottom:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
            <div style="background:#FFF7ED; color:#EA580C; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.35rem; border:1.5px solid #FFEDD5;">
                <i class="fas fa-cubes"></i>
            </div>
            <div>
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#9A3412; letter-spacing:0.5px;">Estructura Curricular Autorizada</span>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.22rem; font-weight:800; color:#1A1A1B; margin:0;">
                    Componentes de Formación del Documento Maestro (Tabla 16 Oficial)
                </h4>
            </div>
        </div>
        <span style="background:#FFF7ED; color:#9A3412; border:1px solid #FFEDD5; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;">
            Tabla 16 · Pág. 109-110 · 48 Asignaturas / 144 Créditos
        </span>
    </div>

    <p style="font-size:0.83rem; color:#475569; margin:0 0 16px; line-height:1.45;">
        De acuerdo con el Documento Maestro radicado ante el Ministerio de Educación Nacional, el plan de estudios optimizado a 144 créditos y 8 semestres se distribuye en los siguientes <strong>componentes formativos fidedignos</strong>:
    </p>

    <!-- GRID DE LOS COMPONENTES OFICIALES DE TABLA 16 -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:18px;">
        
        <!-- COMPONENTE 1: ADMINISTRACIÓN Y GESTIÓN -->
        <div style="background:#FFFFFF; border:1.5px solid #FED7AA; border-top:4px solid #F39200; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.88rem; color:#1A1A1B;"><i class="fas fa-sitemap" style="color:#F39200; margin-right:6px;"></i> 1. Administración y Gestión</strong>
                <span style="background:#FFF9F2; color:#C2410C; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #FED7AA;">11 Asig · 23%</span>
            </div>
            <div style="font-size:0.74rem; color:#475569; background:#F8FAFC; border-radius:6px; padding:10px; line-height:1.45;">
                • Fundamentos de Administración<br>
                • Procesos Administrativos<br>
                • Teoría Organizacional<br>
                • Pensamiento Estratégico y Prospectivo<br>
                • Gestión de Operaciones<br>
                • Gerencia de Producción<br>
                • Gerencia de la Calidad<br>
                • Sistemas Integrados de Gestión (HSEQ)<br>
                • Negocios y Gerencia Internacional<br>
                • <strong>Juego Gerencial (Simulación de Negocios)</strong><br>
                • Proyecto de Grado
            </div>
        </div>

        <!-- COMPONENTE 2: CIENCIAS BÁSICAS Y CUANTITATIVAS -->
        <div style="background:#FFFFFF; border:1.5px solid #E2E8F0; border-top:4px solid #1A1A1B; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.88rem; color:#1A1A1B;"><i class="fas fa-calculator" style="color:#1A1A1B; margin-right:6px;"></i> 2. Ciencias Básicas y Cuantitativas</strong>
                <span style="background:#F1F5F9; color:#1E293B; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #CBD5E1;">5 Asig · 10%</span>
            </div>
            <div style="font-size:0.74rem; color:#475569; background:#F8FAFC; border-radius:6px; padding:10px; line-height:1.45;">
                • Álgebra Lineal<br>
                • Cálculo Diferencial<br>
                • Estadística Descriptiva<br>
                • Estadística Inferencial<br>
                • Métodos Cualitativos y Cuantitativos
            </div>
        </div>

        <!-- COMPONENTE 3: ECONOMÍA Y FINANZAS -->
        <div style="background:#FFFFFF; border:1.5px solid #BBF7D0; border-top:4px solid #10B981; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.88rem; color:#1A1A1B;"><i class="fas fa-coins" style="color:#10B981; margin-right:6px;"></i> 3. Economía y Finanzas</strong>
                <span style="background:#F0FDF4; color:#166534; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #BBF7D0;">8 Asig · 16%</span>
            </div>
            <div style="font-size:0.74rem; color:#475569; background:#F8FAFC; border-radius:6px; padding:10px; line-height:1.45;">
                • Fundamentos Contables y Financieros<br>
                • Análisis Financiero<br>
                • Administración Financiera<br>
                • Costos y Presupuestos<br>
                • Matemática Financiera<br>
                • Legislación Tributaria<br>
                • Microeconomía<br>
                • Macroeconomía
            </div>
        </div>

        <!-- COMPONENTE 4: LEGISLACIÓN, INVESTIGACIÓN Y HABILIDADES -->
        <div style="background:#FFFFFF; border:1.5px solid #E9D5FF; border-top:4px solid #7C3AED; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.88rem; color:#1A1A1B;"><i class="fas fa-balance-scale" style="color:#7C3AED; margin-right:6px;"></i> 4. Legislación, Investigación &amp; Hab.</strong>
                <span style="background:#FAF5FF; color:#6B21A8; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #E9D5FF;">12 Asig · 25%</span>
            </div>
            <div style="font-size:0.74rem; color:#475569; background:#F8FAFC; border-radius:6px; padding:10px; line-height:1.45;">
                • Legislación Comercial<br>
                • Derecho Laboral y Seguridad Social<br>
                • Comunicación Oral y Escrita<br>
                • Cátedra de la Paz y Resolución de Conflictos<br>
                • Habilidades Gerenciales y Liderazgo<br>
                • Gerencia del Talento Humano<br>
                • Competencias Investigativas<br>
                • Inglés I, Inglés II, Inglés III (Formación bilingüe)
            </div>
        </div>

        <!-- COMPONENTE 5: MERCADEO, TECNOLOGÍA Y EMPRENDIMIENTO -->
        <div style="background:#FFFFFF; border:1.5px solid #FECDD3; border-top:4px solid #C8102E; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.88rem; color:#1A1A1B;"><i class="fas fa-rocket" style="color:#C8102E; margin-right:6px;"></i> 5. Mercadeo, Tec. &amp; Emprendimiento</strong>
                <span style="background:#FFF1F2; color:#9F1239; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #FECDD3;">9 Asig · 18%</span>
            </div>
            <div style="font-size:0.74rem; color:#475569; background:#F8FAFC; border-radius:6px; padding:10px; line-height:1.45;">
                • Fundamentos de Mercadeo<br>
                • Gerencia de Marketing<br>
                • Investigación de Mercados<br>
                • Gerencia de Ventas y Canales de Distribución<br>
                • E-commerce<br>
                • <strong>Big Data y Analítica de Datos</strong> (Sem 6)<br>
                • <strong>Inteligencia Artificial</strong> (Sem 8)<br>
                • Modelos de Emprendimiento<br>
                • <strong>Laboratorio de Innovación y Emprendimiento</strong>
            </div>
        </div>

        <!-- COMPONENTE 6: ÁREA ELECTIVA PROFESIONAL -->
        <div style="background:#FFFFFF; border:1.5px solid #FDE68A; border-top:4px solid #D97706; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.88rem; color:#1A1A1B;"><i class="fas fa-sliders-h" style="color:#D97706; margin-right:6px;"></i> 6. Área Electiva Flexible</strong>
                <span style="background:#FEF3C7; color:#92400E; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #FDE68A;">3 Asig · 8%</span>
            </div>
            <div style="font-size:0.74rem; color:#475569; background:#F8FAFC; border-radius:6px; padding:10px; line-height:1.45;">
                • Electiva Profesional I (Semestre 5)<br>
                • Electiva Profesional II (Semestre 6)<br>
                • Electiva Profesional III (Semestre 7)<br>
                <em>Rutas de profundización:</em> Desarrollo Sostenible y Economía Circular, Marketing Verde, Gobernanza Corporativa, Finanzas Sostenibles, Transformación Digital.
            </div>
        </div>

    </div>

    <!-- RESUMEN OFICIAL CONVERGENTE -->
    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="font-size:0.78rem; color:#334155;">
            <strong>Consolidado Total de la Malla Oficial:</strong> 48 Asignaturas · 144 Créditos Académicos (100% de la carga curricular).
        </div>
        <div style="display:flex; gap:12px; font-size:0.75rem; font-weight:700;">
            <span style="color:#F39200;"><i class="fas fa-check"></i> Transversal: 14 Asig (29%)</span>
            <span style="color:#10B981;"><i class="fas fa-check"></i> Disciplinar: 31 Asig (64%)</span>
            <span style="color:#7C3AED;"><i class="fas fa-check"></i> Electiva: 3 Asig (7%)</span>
        </div>
    </div>

</div>

<!-- ========================================================================= -->
<!-- 7. FACTORES DIFERENCIADORES DEL PROGRAMA (INTERACTIVOS CON SOLIDEZ)        -->
<!-- ========================================================================= -->
<div id="c1-factores-diferenciadores" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #7C3AED; border-radius:12px; padding:22px 24px; margin-bottom:28px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
    
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px; border-bottom:1px solid #F1F5F9; padding-bottom:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
            <div style="background:#FAF5FF; color:#7C3AED; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.35rem; border:1.5px solid #E9D5FF;">
                <i class="fas fa-medal"></i>
            </div>
            <div>
                <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#5B21B6; letter-spacing:0.5px;">Propuesta de Valor Institucional</span>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.22rem; font-weight:800; color:#1A1A1B; margin:0;">
                    Factores Diferenciadores de Administración de Empresas (TO)
                </h4>
            </div>
        </div>
        <span style="background:#FAF5FF; color:#5B21B6; border:1px solid #E9D5FF; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;">
            <i class="fas fa-mouse-pointer"></i> Haga clic en cada tarjeta para ver su solidez
        </span>
    </div>

    <p style="font-size:0.83rem; color:#475569; margin:0 0 16px; line-height:1.45;">
        El programa de Administración de Empresas se distingue en la región y el país por cinco pilares estratégicos respaldados en el Documento Maestro. <strong>Seleccione cualquier factor para desplegar los elementos que evidencian su solidez académica, metodológica y operativa:</strong>
    </p>

    <!-- GRID DE 5 FACTORES DIFERENCIADORES CON EVENTO ONCLICK -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
        
        <!-- FACTOR 1: TRANSFORMACIÓN DIGITAL, IA Y ANALÍTICA -->
        <div onclick="window.openDiferenciadorModal('digital_ia')" style="background:#FFF9F2; border:1.5px solid #FED7AA; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease; position:relative; display:flex; flex-direction:column; justify-content:space-between;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 20px rgba(243,146,0,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <div style="background:#F39200; color:#FFFFFF; width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                        <i class="fas fa-brain"></i>
                    </div>
                    <span style="background:#FFFFFF; color:#C2410C; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #FED7AA;">Semestres 6 y 8</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                    1. Transformación Digital, IA &amp; Big Data
                </h5>
                <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0 0 10px;">
                    Integración curricular de vanguardia con <strong>Big Data y Analítica de Datos</strong> e <strong>Inteligencia Artificial</strong>, preparando administradores para la toma de decisiones basada en datos (<em>Data-Driven Management</em>).
                </p>
            </div>
            <div style="border-top:1px dashed #FED7AA; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.72rem; font-weight:800; color:#C2410C;"><i class="fas fa-search-plus"></i> Ver Solidez y Evidencias</span>
                <i class="fas fa-arrow-right" style="color:#F39200; font-size:0.75rem;"></i>
            </div>
        </div>

        <!-- FACTOR 2: SOSTENIBILIDAD Y ECONOMÍA CIRCULAR -->
        <div onclick="window.openDiferenciadorModal('sostenibilidad')" style="background:#F0FDF4; border:1.5px solid #BBF7D0; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease; position:relative; display:flex; flex-direction:column; justify-content:space-between;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 20px rgba(16,185,129,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <div style="background:#10B981; color:#FFFFFF; width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <span style="background:#FFFFFF; color:#166534; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #BBF7D0;">Triple Impacto ODS</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                    2. Sostenibilidad &amp; Economía Circular
                </h5>
                <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0 0 10px;">
                    Articulación a la Agenda 2030 con asignaturas como <strong>Sistemas Integrados HSEQ</strong>, <strong>Gerencia de la Calidad</strong> y electivas de <strong>Economía Circular</strong> y Finanzas Sostenibles.
                </p>
            </div>
            <div style="border-top:1px dashed #BBF7D0; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.72rem; font-weight:800; color:#166534;"><i class="fas fa-search-plus"></i> Ver Solidez y Evidencias</span>
                <i class="fas fa-arrow-right" style="color:#10B981; font-size:0.75rem;"></i>
            </div>
        </div>

        <!-- FACTOR 3: RUTA EMPRENDEDORA Y SIMULADORES -->
        <div onclick="window.openDiferenciadorModal('emprendimiento')" style="background:#FFF1F2; border:1.5px solid #FECDD3; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease; position:relative; display:flex; flex-direction:column; justify-content:space-between;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 20px rgba(200,16,46,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <div style="background:#C8102E; color:#FFFFFF; width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <span style="background:#FFFFFF; color:#9F1239; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #FECDD3;">Secuencial Sem 6 a 8</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                    3. Ruta Emprendedora &amp; Simuladores
                </h5>
                <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0 0 10px;">
                    Cadena formativa aplicada: <strong>Modelos de Emprendimiento</strong> → <strong>Formulación de Proyectos</strong> → <strong>Laboratorio de Innovación</strong> → <strong>Juego Gerencial de Negocios</strong> en tiempo real.
                </p>
            </div>
            <div style="border-top:1px dashed #FECDD3; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.72rem; font-weight:800; color:#9F1239;"><i class="fas fa-search-plus"></i> Ver Solidez y Evidencias</span>
                <i class="fas fa-arrow-right" style="color:#C8102E; font-size:0.75rem;"></i>
            </div>
        </div>

        <!-- FACTOR 4: REGISTRO ÚNICO Y MOVILIDAD HORIZONTAL -->
        <div onclick="window.openDiferenciadorModal('registro_unico')" style="background:#FAF5FF; border:1.5px solid #E9D5FF; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease; position:relative; display:flex; flex-direction:column; justify-content:space-between;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 20px rgba(124,58,237,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <div style="background:#7C3AED; color:#FFFFFF; width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                        <i class="fas fa-random"></i>
                    </div>
                    <span style="background:#FFFFFF; color:#6B21A8; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #E9D5FF;">Dual Presencial &amp; Virtual</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                    4. Registro Único &amp; Movilidad Fluida
                </h5>
                <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0 0 10px;">
                    Idéntica promesa de formación, mismas 48 asignaturas y 144 RAP. Permite transferencia directa entre presencial y virtual según la dinámica laboral del estudiante sin costos de homologación.
                </p>
            </div>
            <div style="border-top:1px dashed #E9D5FF; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.72rem; font-weight:800; color:#6B21A8;"><i class="fas fa-search-plus"></i> Ver Solidez y Evidencias</span>
                <i class="fas fa-arrow-right" style="color:#7C3AED; font-size:0.75rem;"></i>
            </div>
        </div>

        <!-- FACTOR 5: FORMACIÓN EN CONTEXTOS DE APLICACIÓN Y EMPLEABILIDAD -->
        <div onclick="window.openDiferenciadorModal('empleabilidad')" style="background:#F8FAFC; border:1.5px solid #CBD5E1; border-radius:10px; padding:18px; cursor:pointer; transition:all 0.25s ease; position:relative; display:flex; flex-direction:column; justify-content:space-between;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 20px rgba(30,41,59,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <div style="background:#1A1A1B; color:#FFFFFF; width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <span style="background:#FFFFFF; color:#1E293B; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #CBD5E1;">71% OLE · 94.4% SAT</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">
                    5. Contextos de Aplicación &amp; Empleabilidad
                </h5>
                <p style="font-size:0.78rem; color:#4B5563; line-height:1.45; margin:0 0 10px;">
                    Modelo institucional de transferencia a problemas reales. <strong>Pasantías en diferentes sectores económicos</strong>, inserción laboral rápida (71% en menos de 6 meses) y 94.4% de retención semestral.
                </p>
            </div>
            <div style="border-top:1px dashed #CBD5E1; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.72rem; font-weight:800; color:#1E293B;"><i class="fas fa-search-plus"></i> Ver Solidez y Evidencias</span>
                <i class="fas fa-arrow-right" style="color:#1A1A1B; font-size:0.75rem;"></i>
            </div>
        </div>

    </div>

</div>

<!-- ========================================================================= -->
<!-- 8. MAPA CONCEPTUAL SISTÉMICO: PERTINENCIA INTEGRAL DE LA DENOMINACIÓN     -->
<!-- ========================================================================= -->
<div id="c1-mapa-conceptual" style="display:none; background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #10B981; border-radius:12px; padding:22px; margin-bottom:24px; box-shadow:0 4px 14px rgba(0,0,0,0.04);">
    
    <!-- ENCABEZADO DEL MAPA CONCEPTUAL -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:20px; border-bottom:1px solid #F1F5F9; padding-bottom:12px;">
        <div style="display:flex; align-items:center; gap:10px;">
            <div style="background:#F0FDF4; color:#10B981; width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.2rem; border:1px solid #BBF7D0;">
                <i class="fas fa-project-diagram"></i>
            </div>
            <div>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0 0 2px;">
                    Mapa Conceptual: Pertinencia Sistémica de la Denominación
                </h4>
                <span style="font-size:0.75rem; color:#64748B;">
                    Articulación integral entre denominación, taxonomía CINE, benchmarking, componentes de Tabla 16, Registro Único e impacto social
                </span>
            </div>
        </div>
        <span class="tag-legal" style="background:#F0FDF4; color:#166534; border:1px solid #BBF7D0; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;">
            Síntesis Condición 1
        </span>
    </div>

    <!-- NODO CENTRAL PRINCIPAL DEL MAPA -->
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border:3px solid #F39200; border-radius:12px; padding:18px 24px; margin-bottom:22px; text-align:center; box-shadow:0 6px 18px rgba(0,0,0,0.12); position:relative;">
        <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:3px 12px; border-radius:20px; text-transform:uppercase; letter-spacing:0.5px; display:inline-block; margin-bottom:8px;">
            Núcleo Rector de la Condición 1
        </span>
        <h3 style="font-family:'Montserrat',sans-serif; font-size:1.45rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; letter-spacing:0.5px;">
            ADMINISTRACIÓN DE EMPRESAS
        </h3>
        <p style="color:#FDBA74; font-size:0.86rem; font-weight:700; margin:0 0 10px;">
            Título Profesional: Administrador(a) de Empresas · Registro Calificado Único (Presencial y Virtual) · TO
        </p>
        <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:8px; font-size:0.75rem;">
            <span style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); padding:3px 10px; border-radius:15px; color:#FFFFFF;">
                <i class="fas fa-clock" style="color:#F39200;"></i> 8 Semestres (4 Años)
            </span>
            <span style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); padding:3px 10px; border-radius:15px; color:#FFFFFF;">
                <i class="fas fa-layer-group" style="color:#10B981;"></i> 144 Créditos Académicos
            </span>
            <span style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); padding:3px 10px; border-radius:15px; color:#FFFFFF;">
                <i class="fas fa-book" style="color:#38BDF8;"></i> 48 Asignaturas Modulares
            </span>
            <span style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); padding:3px 10px; border-radius:15px; color:#FFFFFF;">
                <i class="fas fa-users" style="color:#C084FC;"></i> 300 Cupos (240 Virt / 60 Pres)
            </span>
            <span style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); padding:3px 10px; border-radius:15px; color:#FFFFFF;">
                <i class="fas fa-fingerprint" style="color:#FB7185;"></i> SNIES 108445 / 115833
            </span>
        </div>
    </div>

    <!-- CONECTORES Y 5 RAMAS DEL MAPA CONCEPTUAL -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap:16px;">
        
        <!-- RAMA 1: MARCO TAXONÓMICO & NORMATIVO -->
        <div style="background:#FFFFFF; border:1.5px solid #E2E8F0; border-top:4px solid #1A1A1B; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#F1F5F9; color:#1E293B; width:30px; height:30px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                            <i class="fas fa-balance-scale"></i>
                        </div>
                        <strong style="font-size:0.88rem; color:#1A1A1B;">1. Marco Taxonómico &amp; Legal</strong>
                    </div>
                    <span style="background:#F1F5F9; color:#475569; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">Taxonomía</span>
                </div>
                <p style="font-size:0.75rem; color:#64748B; margin:0 0 10px; line-height:1.4;">
                    Reconocimiento universal y codificación formal en clasificaciones internacionales y nacionales:
                </p>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:6px; padding:10px; font-size:0.74rem; line-height:1.45; color:#334155;">
                    • <strong>UNESCO CINE-F 2013:</strong> Campo Amplio 04 (Administración y Derecho) · Detallado 0413 (Gestión y Administración).<br>
                    • <strong>SNIES / MEN:</strong> Área de Economía, Administración y afines · Núcleo Básico (NBC) Administración.<br>
                    • <strong>Sustento Legal:</strong> Decreto 1330 de 2019, Ley 30 de 1992 y Resolución 2767 de 2003.
                </div>
            </div>
            <button onclick="window.openC1Modal('benchmarking')" style="margin-top:12px; background:#F8FAFC; border:1px solid #CBD5E1; color:#1E293B; font-size:0.72rem; font-weight:700; padding:5px 10px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                Ver Taxonomía CINE <i class="fas fa-external-link-alt"></i>
            </button>
        </div>

        <!-- RAMA 2: BENCHMARKING DE ALTA CALIDAD -->
        <div style="background:#FFFFFF; border:1.5px solid #BBF7D0; border-top:4px solid #10B981; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#F0FDF4; color:#10B981; width:30px; height:30px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                            <i class="fas fa-globe-americas"></i>
                        </div>
                        <strong style="font-size:0.88rem; color:#1A1A1B;">2. Benchmarking Internacional</strong>
                    </div>
                    <span style="background:#DCFCE7; color:#166534; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">8 Semestres</span>
                </div>
                <p style="font-size:0.75rem; color:#64748B; margin:0 0 10px; line-height:1.4;">
                    Validación con la tendencia moderna de optimización del tiempo formativo sin perder rigor:
                </p>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:10px; font-size:0.74rem; line-height:1.45; color:#166534;">
                    • <strong>Tecnológico de Monterrey (México):</strong> 8 semestres / 144 equiv. (AACSB).<br>
                    • <strong>Universidad del Rosario (Bogotá):</strong> 8 semestres / 140 cr (Alta Calidad MEN).<br>
                    • <strong>Universidad EAN (Bogotá):</strong> 8 semestres / 142 cr (Presencial y Virtual).<br>
                    • <strong>Univ. Católica de Chile:</strong> 8 semestres / 144 equiv. (EQUIS / AACSB).
                </div>
            </div>
            <button onclick="window.openC1Modal('benchmarking')" style="margin-top:12px; background:#F0FDF4; border:1px solid #BBF7D0; color:#166534; font-size:0.72rem; font-weight:700; padding:5px 10px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                Ver Tabla Benchmarking <i class="fas fa-external-link-alt"></i>
            </button>
        </div>

        <!-- RAMA 3: COMPONENTES CURRICULARES (TABLA 16) -->
        <div style="background:#FFFFFF; border:1.5px solid #FED7AA; border-top:4px solid #F39200; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#FFF9F2; color:#F39200; width:30px; height:30px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                            <i class="fas fa-cubes"></i>
                        </div>
                        <strong style="font-size:0.88rem; color:#1A1A1B;">3. Componentes Curriculares</strong>
                    </div>
                    <span style="background:#FFEDD5; color:#C2410C; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">Tabla 16 Oficial</span>
                </div>
                <p style="font-size:0.75rem; color:#64748B; margin:0 0 10px; line-height:1.4;">
                    Estructura formal de 48 asignaturas basada en los componentes del Documento Maestro:
                </p>
                <div style="background:#FFF9F2; border:1px solid #FED7AA; border-radius:6px; padding:10px; font-size:0.74rem; line-height:1.45; color:#9A3412;">
                    • <strong>Administración y Gestión:</strong> 11 materias (23%).<br>
                    • <strong>Ciencias Básicas y Cuantitativas:</strong> 5 materias (10%).<br>
                    • <strong>Economía y Finanzas:</strong> 8 materias (16%).<br>
                    • <strong>Legislación, Investigación &amp; Hab.:</strong> 12 materias (25%).<br>
                    • <strong>Mercadeo, Tecnología &amp; Emprendimiento:</strong> 9 materias (18%).<br>
                    • <strong>Área Electiva Flexible:</strong> 3 materias (8%).
                </div>
            </div>
            <button onclick="window.openC1Modal('coherencia')" style="margin-top:12px; background:#FFF9F2; border:1px solid #FED7AA; color:#9A3412; font-size:0.72rem; font-weight:700; padding:5px 10px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                Ver Malla por Componentes <i class="fas fa-external-link-alt"></i>
            </button>
        </div>

        <!-- RAMA 4: ARMONIZACIÓN EN REGISTRO ÚNICO (PRESENCIAL Y VIRTUAL) -->
        <div style="background:#FFFFFF; border:1.5px solid #E9D5FF; border-top:4px solid #7C3AED; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#FAF5FF; color:#7C3AED; width:30px; height:30px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                            <i class="fas fa-balance-scale-right"></i>
                        </div>
                        <strong style="font-size:0.88rem; color:#1A1A1B;">4. Armonización en Registro Único</strong>
                    </div>
                    <span style="background:#F3E8FF; color:#6B21A8; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">Dualidad</span>
                </div>
                <p style="font-size:0.75rem; color:#64748B; margin:0 0 10px; line-height:1.4;">
                    Dos mediaciones pedagógicas convergentes que garantizan idéntica calidad y resultados:
                </p>
                <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:6px; padding:10px; font-size:0.74rem; line-height:1.45; color:#6B21A8;">
                    • <strong>Presencial (Bucaramanga):</strong> Campus físico, clases directas en aula y laboratorios, relación 1:2 (48h/96h).<br>
                    • <strong>Virtual (Nacional):</strong> Campus LMS Moodle 24/7, simuladores en la nube, relación 1:3 (36h/108h).<br>
                    • <strong>Identidad Común:</strong> Mismo título, mismas 48 asignaturas, idénticos 144 RAP, rúbrica de evaluación y libre movilidad.
                </div>
            </div>
            <button onclick="window.openC1Modal('modalidades')" style="margin-top:12px; background:#FAF5FF; border:1px solid #E9D5FF; color:#6B21A8; font-size:0.72rem; font-weight:700; padding:5px 10px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                Ver Registro Único <i class="fas fa-external-link-alt"></i>
            </button>
        </div>

        <!-- RAMA 5: PERTINENCIA SOCIAL, RAP & EGRESADOS (TABLA 35) -->
        <div style="background:#FFFFFF; border:1.5px solid #FECDD3; border-top:4px solid #C8102E; border-radius:10px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.02); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#FFF1F2; color:#C8102E; width:30px; height:30px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.85rem;">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <strong style="font-size:0.88rem; color:#1A1A1B;">5. Pertinencia Social &amp; Egresados</strong>
                    </div>
                    <span style="background:#FFE4E6; color:#9F1239; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">Impacto OLE</span>
                </div>
                <p style="font-size:0.75rem; color:#64748B; margin:0 0 10px; line-height:1.4;">
                    Validación de la denominación en el desempeño laboral e impacto en el sector empresarial:
                </p>
                <div style="background:#FFF1F2; border:1px solid #FECDD3; border-radius:6px; padding:10px; font-size:0.74rem; line-height:1.45; color:#9F1239;">
                    • <strong>Competencias &amp; RAP:</strong> 10 competencias alineadas 1 a 1 en Tabla 35 oficial.<br>
                    • <strong>Inserción Laboral Rápida:</strong> 71.0% empleados en menos de 6 meses (OLE).<br>
                    • <strong>Cotización Formal:</strong> 78.5% aportantes al sistema pensional y salud.<br>
                    • <strong>Permanencia:</strong> 94.4% de retención semestral consolidada (SAT TO).
                </div>
            </div>
            <button onclick="window.openC1Modal('impacto')" style="margin-top:12px; background:#FFF1F2; border:1px solid #FECDD3; color:#9F1239; font-size:0.72rem; font-weight:700; padding:5px 10px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                Ver Indicadores OLE <i class="fas fa-external-link-alt"></i>
            </button>
        </div>

    </div>

</div>

<!-- ========================================================================= -->
<!-- 9. VENTANA EMERGENTE MODAL (PROFUNDIZACIÓN TEMÁTICA EN SEGUNDO PLANO)     -->
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
            <button data-c1tab="benchmarking" onclick="window.switchC1ModalTab('benchmarking')" class="c1-mtab active" style="background:#FFFFFF; border:1.5px solid #10B981; color:#065F46; font-weight:800; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-network-wired" style="color:#10B981;"></i> Justificación &amp; Benchmarking
            </button>
            <button data-c1tab="coherencia" onclick="window.switchC1ModalTab('coherencia')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-cubes" style="color:#EA580C;"></i> Componentes Curriculares (Tabla 16)
            </button>
            <button data-c1tab="modalidades" onclick="window.switchC1ModalTab('modalidades')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-balance-scale-right" style="color:#7C3AED;"></i> Registro Único &amp; Modalidades
            </button>
            <button data-c1tab="impacto" onclick="window.switchC1ModalTab('impacto')" class="c1-mtab" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#475569; font-weight:700; font-size:0.75rem; padding:6px 12px; border-radius:6px; cursor:pointer;">
                <i class="fas fa-chart-line" style="color:#C8102E;"></i> Pertinencia, OLE &amp; RAP
            </button>
        </div>

        <!-- CUERPO DEL MODAL (SCROLL INTERNO AUTÓNOMO) -->
        <div style="padding:20px; overflow-y:auto; max-height:calc(90vh - 150px);">
            
            <!-- PANEL 1: JUSTIFICACIÓN & BENCHMARKING -->
            <div id="c1-panel-benchmarking" class="c1-modal-panel" style="display:block;">
                <div style="background:#F8F9FA; border-radius:10px; padding:14px; margin-bottom:16px; border:1px solid #E2E8F0;">
                    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-sitemap" style="color:#10B981;"></i> Alineación Taxonómica Internacional y Nacional
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
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #10B981; padding:10px 12px; border-radius:6px;">
                            <div style="font-size:0.68rem; font-weight:800; color:#6B6B6B; text-transform:uppercase;">SNIES / MEN Colombia</div>
                            <div style="font-weight:800; font-size:0.86rem; color:#1A1A1B; margin:2px 0;">Área de Conocimiento</div>
                            <div style="font-size:0.72rem; color:#64748B;">Economía, Administración, Contaduría y afines</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #F39200; padding:10px 12px; border-radius:6px;">
                            <div style="font-size:0.68rem; font-weight:800; color:#6B6B6B; text-transform:uppercase;">Núcleo Básico (NBC)</div>
                            <div style="font-weight:800; font-size:0.86rem; color:#1A1A1B; margin:2px 0;">NBC Administración</div>
                            <div style="font-size:0.72rem; color:#64748B;">SNIES Presencial 108445 · Virtual 115833</div>
                        </div>
                    </div>
                </div>

                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-balance-scale" style="color:#10B981;"></i> Benchmarking con IES Nacionales e Internacionales Acreditadas (Estándar 8 Semestres)
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
                                <td style="font-size:0.75rem;">Registro Calificado Único, Big Data, IA, Sostenibilidad, 48 asignaturas modulares.</td>
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

            <!-- PANEL 2: COHERENCIA CURRICULAR SEGÚN TABLA 16 DEL DOCUMENTO MAESTRO -->
            <div id="c1-panel-coherencia" class="c1-modal-panel" style="display:none;">
                <p style="font-size:0.82rem; color:#4B5563; margin:0 0 14px; line-height:1.45;">
                    La denominación <strong>"Administración de Empresas"</strong> se fundamenta en un plan de estudios estructurado en los <strong>componentes formativos fidedignos definidos en la Tabla 16 (págs. 109-110) del Documento Maestro oficial</strong>:
                </p>

                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #F39200; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-sitemap" style="color:#F39200;"></i> 1. Administración y Gestión</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#C2410C; background:#FFEDD5; padding:2px 5px; border-radius:4px;">11 Materias (23%)</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Fundamentos de Administración<br>
                            • Procesos Administrativos<br>
                            • Teoría Organizacional<br>
                            • Pensamiento Estratégico y Prospectivo<br>
                            • Gestión de Operaciones<br>
                            • Gerencia de Producción<br>
                            • Gerencia de la Calidad<br>
                            • Sistemas Integrados de Gestión (HSEQ)<br>
                            • Negocios y Gerencia Internacional<br>
                            • <strong>Juego Gerencial (Simulación de Negocios)</strong><br>
                            • Proyecto de Grado
                        </div>
                    </div>

                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #1A1A1B; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-calculator" style="color:#1A1A1B;"></i> 2. Ciencias Básicas &amp; Cuantitativas</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#1E293B; background:#F1F5F9; padding:2px 5px; border-radius:4px;">5 Materias (10%)</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Álgebra Lineal<br>
                            • Cálculo Diferencial<br>
                            • Estadística Descriptiva<br>
                            • Estadística Inferencial<br>
                            • Métodos Cualitativos y Cuantitativos
                        </div>
                    </div>

                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #10B981; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-coins" style="color:#10B981;"></i> 3. Economía y Finanzas</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#166534; background:#DCFCE7; padding:2px 5px; border-radius:4px;">8 Materias (16%)</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Fundamentos Contables y Financieros<br>
                            • Análisis Financiero<br>
                            • Administración Financiera<br>
                            • Costos y Presupuestos<br>
                            • Matemática Financiera<br>
                            • Legislación Tributaria<br>
                            • Microeconomía<br>
                            • Macroeconomía
                        </div>
                    </div>

                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #7C3AED; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-balance-scale" style="color:#7C3AED;"></i> 4. Legislación, Investigación &amp; Hab.</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#6B21A8; background:#F3E8FF; padding:2px 5px; border-radius:4px;">12 Materias (25%)</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Legislación Comercial<br>
                            • Derecho Laboral y Seguridad Social<br>
                            • Comunicación Oral y Escrita<br>
                            • Cátedra de la Paz y Resolución de Conflictos<br>
                            • Habilidades Gerenciales y Liderazgo<br>
                            • Gerencia del Talento Humano<br>
                            • Competencias Investigativas<br>
                            • Formación bilingüe: Inglés I, II, III
                        </div>
                    </div>

                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #C8102E; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-rocket" style="color:#C8102E;"></i> 5. Mercadeo, Tec. &amp; Emprendimiento</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#9F1239; background:#FFE4E6; padding:2px 5px; border-radius:4px;">9 Materias (18%)</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Fundamentos de Mercadeo<br>
                            • Gerencia de Marketing<br>
                            • Investigación de Mercados<br>
                            • Gerencia de Ventas y Canales de Distribución<br>
                            • E-commerce<br>
                            • <strong>Big Data y Analítica de Datos</strong> (Sem 6)<br>
                            • <strong>Inteligencia Artificial</strong> (Sem 8)<br>
                            • Modelos de Emprendimiento<br>
                            • <strong>Laboratorio de Innovación y Emprendimiento</strong>
                        </div>
                    </div>

                    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:4px solid #D97706; border-radius:8px; padding:12px; box-shadow:0 2px 5px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:0.84rem; color:#1A1A1B;"><i class="fas fa-sliders-h" style="color:#D97706;"></i> 6. Área Electiva Profesional</strong>
                            <span style="font-size:0.66rem; font-weight:800; color:#92400E; background:#FEF3C7; padding:2px 5px; border-radius:4px;">3 Materias (8%)</span>
                        </div>
                        <div style="font-size:0.73rem; color:#374151; background:#F8F9FA; padding:8px; border-radius:4px; line-height:1.4;">
                            • Electiva Profesional I (Semestre 5)<br>
                            • Electiva Profesional II (Semestre 6)<br>
                            • Electiva Profesional III (Semestre 7)<br>
                            <em>Profundizaciones:</em> Economía Circular, Marketing Verde, Gobernanza Corporativa, Finanzas Sostenibles y Transformación Digital.
                        </div>
                    </div>
                </div>
            </div>

            <!-- PANEL 3: REGISTRO ÚNICO & MODALIDADES -->
            <div id="c1-panel-modalidades" class="c1-modal-panel" style="display:none;">
                <div style="display:grid; grid-template-columns: 1fr 1.15fr 1fr; gap:12px; align-items:stretch;">
                    
                    <!-- MODALIDAD PRESENCIAL (CORREGIDA: CERO ENCUENTROS SINCRÓNICOS, PASANTÍAS EN DIFERENTES SECTORES) -->
                    <div style="background:#FFF9F2; border:1.5px solid #FED7AA; border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                                <div style="background:#F39200; color:#FFFFFF; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">
                                    <i class="fas fa-building"></i>
                                </div>
                                <div>
                                    <strong style="color:#C2410C; font-size:0.84rem; display:block;">Modalidad Presencial</strong>
                                    <span style="font-size:0.66rem; color:#7C2D12;">Sede Bucaramanga (SNIES 108445 · 60 cupos)</span>
                                </div>
                            </div>
                            <ul style="font-size:0.73rem; color:#431407; margin:0; padding-left:14px; line-height:1.45;">
                                <li><strong>Mediación Física:</strong> Clases presenciales en aulas interactivas en Sedes A, B y C de la TO.</li>
                                <li><strong>Infraestructura:</strong> Salas de cómputo especializadas y centros de simulación física.</li>
                                <li><strong>Interacción Directa:</strong> Clases presenciales directas en aula y tutoría docente directa en campus.</li>
                                <li><strong>Relación Crédito 1:2:</strong> 48h acompañamiento directo / 96h trabajo independiente.</li>
                                <li><strong>Networking Empresarial:</strong> Pasantías en diferentes sectores económicos del ámbito regional y nacional.</li>
                            </ul>
                        </div>
                        <div style="background:#FFFFFF; padding:5px 8px; border-radius:4px; font-size:0.7rem; color:#C2410C; font-weight:700; text-align:center; margin-top:8px; border:1px solid #FED7AA;">
                            <i class="fas fa-arrow-right"></i> Converge en los mismos 144 RAP
                        </div>
                    </div>

                    <!-- NÚCLEO COMÚN SACES REGISTRO ÚNICO -->
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
                            <div style="background:rgba(255,255,255,0.08); border-radius:6px; padding:8px 10px; font-size:0.72rem; color:#FFFFFF; text-align:left; line-height:1.45;">
                                <i class="fas fa-check" style="color:#10B981;"></i> <strong>Mismo Título:</strong> Administrador(a) de Empresas.<br>
                                <i class="fas fa-check" style="color:#10B981;"></i> <strong>Misma Duración:</strong> 144 créditos en 8 semestres.<br>
                                <i class="fas fa-check" style="color:#10B981;"></i> <strong>Mismas 48 Asignaturas:</strong> Sílabos idénticos.<br>
                                <i class="fas fa-check" style="color:#10B981;"></i> <strong>Mismos RAP:</strong> 10 RAP y 144 específicos.<br>
                                <i class="fas fa-check" style="color:#10B981;"></i> <strong>Rúbrica Institucional:</strong> 60% Saber, 30% Pro, 10% Ser.<br>
                                <i class="fas fa-check" style="color:#10B981;"></i> <strong>Movilidad Horizontal:</strong> Libre y sin costos de homologación.
                            </div>
                        </div>
                        <div style="font-size:0.7rem; color:#F39200; font-weight:700; margin-top:6px;">
                            <i class="fas fa-equals"></i> Equivalencia Científica Absoluta
                        </div>
                    </div>

                    <!-- MODALIDAD VIRTUAL -->
                    <div style="background:#FAF5FF; border:1.5px solid #E9D5FF; border-radius:8px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                                <div style="background:#7C3AED; color:#FFFFFF; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">
                                    <i class="fas fa-wifi"></i>
                                </div>
                                <div>
                                    <strong style="color:#6B21A8; font-size:0.84rem; display:block;">Modalidad Virtual</strong>
                                    <span style="font-size:0.66rem; color:#581C87;">Cobertura Nacional (SNIES 115833 · 240 cupos)</span>
                                </div>
                            </div>
                            <ul style="font-size:0.73rem; color:#3B0764; margin:0; padding-left:14px; line-height:1.45;">
                                <li><strong>Mediación Digital:</strong> Campus LMS Moodle activo 24/7 y plataforma Cloud.</li>
                                <li><strong>Simuladores en Nube:</strong> Laboratorios virtuales y juego gerencial en línea.</li>
                                <li><strong>Tutorías Telemáticas:</strong> Sesiones sincrónicas de profundización y foros asincrónicos.</li>
                                <li><strong>Relación Crédito 1:3:</strong> 36h acompañamiento mediado / 108h trabajo autónomo.</li>
                                <li><strong>Cobertura Total:</strong> Acceso nacional incluyente en 32 departamentos.</li>
                            </ul>
                        </div>
                        <div style="background:#FFFFFF; padding:5px 8px; border-radius:4px; font-size:0.7rem; color:#6B21A8; font-weight:700; text-align:center; margin-top:8px; border:1px solid #E9D5FF;">
                            <i class="fas fa-arrow-left"></i> Converge en los mismos 144 RAP
                        </div>
                    </div>

                </div>
            </div>

            <!-- PANEL 4: PERTINENCIA, OLE & RAP -->
            <div id="c1-panel-impacto" class="c1-modal-panel" style="display:none;">
                <div style="background:#F8F9FA; border-radius:8px; padding:14px; margin-bottom:14px; border:1px solid #E2E8F0;">
                    <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-chart-line" style="color:#C8102E;"></i> Pertinencia del Perfil en el Mercado Laboral (Fuente OLE / SPADIES)
                    </h5>
                    
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px;">
                        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #C8102E; border-radius:6px; padding:12px; text-align:center;">
                            <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Inserción Laboral Rápida</div>
                            <div style="font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:800; color:#C8102E; margin:2px 0;">71.0%</div>
                            <div style="font-size:0.7rem; color:#4B5563;">Empleados en menos de 6 meses tras graduarse (OLE).</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #F39200; border-radius:6px; padding:12px; text-align:center;">
                            <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Tasa de Cotización Formal</div>
                            <div style="font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:800; color:#F39200; margin:2px 0;">78.5%</div>
                            <div style="font-size:0.7rem; color:#4B5563;">Aportantes activos al sistema pensional y salud.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #10B981; border-radius:6px; padding:12px; text-align:center;">
                            <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Permanencia Semestral TO</div>
                            <div style="font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:800; color:#10B981; margin:2px 0;">94.4%</div>
                            <div style="font-size:0.7rem; color:#4B5563;">Consolidación mediante Alertas Tempranas SAT.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:3px solid #1A1A1B; border-radius:6px; padding:12px; text-align:center;">
                            <div style="font-size:0.68rem; color:#6B6B6B; font-weight:700; text-transform:uppercase;">Emprendedores Formales</div>
                            <div style="font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:800; color:#1A1A1B; margin:2px 0;">27.0%</div>
                            <div style="font-size:0.7rem; color:#4B5563;">Egresados independientes y creadores de empresa.</div>
                        </div>
                    </div>
                </div>

                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px 16px;">
                    <strong style="font-size:0.8rem; color:#1A1A1B; display:block; margin-bottom:4px;">
                        <i class="fas fa-check-circle" style="color:#10B981;"></i> Coherencia de los Resultados de Aprendizaje:
                    </strong>
                    <p style="font-size:0.75rem; color:#475569; margin:0; line-height:1.45;">
                        Los 10 Resultados de Aprendizaje del Programa (RAP) de la Tabla 35 aseguran que el graduado responda a los requerimientos de la productividad regional (Santander) y el despliegue nacional digital, integrando analítica de datos, sostenibilidad ambiental, gestión estratégica y bioética corporativa.
                    </p>
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
                    Cerrar Detalle
                </button>
            </div>
            <button onclick="window.navC1Modal(1)" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1E293B; font-weight:700; font-size:0.78rem; padding:6px 14px; border-radius:6px; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
                Siguiente <i class="fas fa-chevron-right"></i>
            </button>
        </div>

    </div>

</div>

<!-- ========================================================================= -->
<!-- 10. VENTANA EMERGENTE DE FACTORES DIFERENCIADORES (SOLIDEZ Y EVIDENCIAS)   -->
<!-- ========================================================================= -->
<div id="c1-modal-diferenciador" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15, 23, 42, 0.82); backdrop-filter:blur(6px); z-index:9999999; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;">
    
    <div style="background:#FFFFFF; width:100%; max-width:850px; max-height:88vh; border-radius:14px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); display:flex; flex-direction:column; overflow:hidden; border:1px solid rgba(255,255,255,0.25); animation:c1ModalFadeIn 0.25s ease-out;">
        
        <!-- CABECERA -->
        <div id="c1-dif-modal-header" style="background:#1A1A1B; color:#FFFFFF; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #F39200;">
            <div style="display:flex; align-items:center; gap:10px;">
                <div id="c1-dif-icon-box" style="background:#F39200; color:#FFFFFF; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                    <i class="fas fa-medal" id="c1-dif-icon"></i>
                </div>
                <div>
                    <h4 id="c1-dif-title" style="font-family:'Montserrat',sans-serif; font-size:1.06rem; font-weight:800; color:#FFFFFF; margin:0;">
                        Factor Diferenciador
                    </h4>
                    <span id="c1-dif-subtitle" style="font-size:0.72rem; color:#D1D1D1;">
                        Solidez y Evidencias Autorizadas del Documento Maestro
                    </span>
                </div>
            </div>
            <button onclick="window.closeDiferenciadorModal()" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25); color:#FFFFFF; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.95rem; cursor:pointer;">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- CUERPO CONTEXTUAL AUTÓNOMO -->
        <div id="c1-dif-body" style="padding:22px 24px; overflow-y:auto; max-height:calc(88vh - 120px);">
            <!-- Dinámico inyectado por JS -->
        </div>

        <!-- PIE -->
        <div style="background:#F8F9FA; padding:10px 20px; border-top:1px solid #E8E8E8; display:flex; justify-content:flex-end;">
            <button onclick="window.closeDiferenciadorModal()" style="background:#1A1A1B; color:#FFFFFF; border:none; font-weight:700; font-size:0.78rem; padding:7px 18px; border-radius:6px; cursor:pointer;">
                Entendido / Cerrar
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
   CONTROLADORES JS DE LAS VENTANAS EMERGENTES (MODALES C1)
   ========================================================= */
(function() {
    // 1. MODAL GENERAL DE PROFUNDIZACIÓN
    const tabOrder = ['benchmarking', 'coherencia', 'modalidades', 'impacto'];
    const tabMeta = {
        'benchmarking': { title: 'Justificación, Clasificación CINE y Benchmarking', icon: 'fas fa-network-wired', color: '#10B981' },
        'coherencia': { title: 'Componentes Curriculares Oficiales (Tabla 16 - 48 Asignaturas)', icon: 'fas fa-cubes', color: '#EA580C' },
        'modalidades': { title: 'Equivalencia de Modalidades en el Registro Único', icon: 'fas fa-balance-scale-right', color: '#7C3AED' },
        'impacto': { title: 'Pertinencia Social, Egresados, OLE y Resultados de Aprendizaje', icon: 'fas fa-chart-line', color: '#C8102E' }
    };
    let currentTab = 'benchmarking';

    
    // CONTROL DE SUBSECCIONES EN PRIMER PLANO (EXCLUSIVAS)
    window.showC1Section = function(sectionId) {
        const sectionIds = [
            'c1-linea-tiempo',
            'c1-fichas-paralelo',
            'c1-perfil-competencias',
            'c1-componentes-maestro',
            'c1-factores-diferenciadores',
            'c1-mapa-conceptual'
        ];
        sectionIds.forEach(function(id) {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = (id === sectionId) ? 'block' : 'none';
            }
        });

        const bar = document.getElementById('c1-subtabs-bar');
        if (bar) {
            const btns = bar.querySelectorAll('.c1-subtab-btn');
            btns.forEach(function(btn) {
                const target = btn.getAttribute('data-c1-target');
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
        }
    };

    window.c1Init = function() {
        window.showC1Section('c1-linea-tiempo');
    };

    window.openC1Modal = function(tabKey) {
        const overlay = document.getElementById('c1-modal-overlay');
        if (!overlay) return;
        overlay.style.display = 'flex';
        window.switchC1ModalTab(tabKey || 'benchmarking');
    };

    window.closeC1Modal = function() {
        const overlay = document.getElementById('c1-modal-overlay');
        if (overlay) overlay.style.display = 'none';
    };

    window.switchC1ModalTab = function(tabKey) {
        if (!tabOrder.includes(tabKey)) tabKey = 'benchmarking';
        currentTab = tabKey;

        tabOrder.forEach(key => {
            const panel = document.getElementById('c1-panel-' + key);
            if (panel) panel.style.display = (key === tabKey) ? 'block' : 'none';
        });

        const buttons = document.querySelectorAll('#c1-modal-nav-tabs .c1-mtab');
        buttons.forEach(btn => {
            const isTarget = btn.getAttribute('data-c1tab') === tabKey;
            if (isTarget) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

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

    // 2. MODAL DEDICADO DE FACTORES DIFERENCIADORES CON SOLIDEZ Y EVIDENCIAS
    const diferenciadoresData = {
        'digital_ia': {
            title: 'Transformación Digital, Big Data & Inteligencia Artificial',
            subtitle: 'Enfoque Data-Driven Management en los Negocios 4.0',
            icon: 'fas fa-brain',
            color: '#F39200',
            content: `
                <div style="background:#FFF9F2; border-left:4px solid #F39200; padding:12px 16px; border-radius:6px; margin-bottom:16px;">
                    <strong style="color:#C2410C; font-size:0.86rem; display:block; margin-bottom:4px;">Fundamento en Documento Maestro (Págs. 80, 107 y 166):</strong>
                    <p style="font-size:0.77rem; color:#431407; margin:0; line-height:1.45;">
                        "La inclusión de espacios como Big Data y Analítica de Datos, Inteligencia Artificial y E-commerce refuerza la capacidad del futuro profesional para tomar decisiones basadas en datos y adaptarse a la digitalización empresarial, diferenciando el programa frente a la oferta tradicional."
                    </p>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#F39200; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-book-open"></i> Asignaturas Obligatorias en la Malla
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Big Data y Analítica de Datos:</strong> Semestre 6 (3 Créditos, 144 horas).</li>
                            <li><strong>Inteligencia Artificial en Negocios:</strong> Semestre 8 (3 Créditos, 144 horas).</li>
                            <li><strong>E-commerce &amp; Canales Digitales:</strong> Semestre 7 (3 Créditos).</li>
                            <li><strong>Electiva en Transformación Digital:</strong> Semestre 6/7.</li>
                        </ul>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#10B981; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-laptop-code"></i> Evidencias de Solidez Operativa
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Software y Herramientas:</strong> Power BI, Python para analítica, librerías de Machine Learning y dashboards en la nube.</li>
                            <li><strong>Laboratorios Virtuales:</strong> Servidores dedicados para minería de datos y analítica predictiva.</li>
                            <li><strong>RAP Asociado:</strong> RAP 6 (Integración de tecnologías analíticas e IA en la toma de decisiones).</li>
                        </ul>
                    </div>
                </div>

                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <strong style="font-size:0.8rem; color:#1E293B; display:block; margin-bottom:4px;">Impacto Comprobado en la Formación:</strong>
                    <p style="font-size:0.74rem; color:#64748B; margin:0; line-height:1.45;">
                        Los administradores graduados no son usuarios pasivos de tecnología; diseñan modelos de automatización de procesos, tableros de control gerencial predictivo y arquitecturas de negocio digital adaptables al entorno regional y global.
                    </p>
                </div>
            `
        },
        'sostenibilidad': {
            title: 'Sostenibilidad, Economía Circular & Sistemas HSEQ',
            subtitle: 'Compromiso Ético y Gestión de Triple Impacto (ODS 2030)',
            icon: 'fas fa-leaf',
            color: '#10B981',
            content: `
                <div style="background:#F0FDF4; border-left:4px solid #10B981; padding:12px 16px; border-radius:6px; margin-bottom:16px;">
                    <strong style="color:#065F46; font-size:0.86rem; display:block; margin-bottom:4px;">Fundamento en Documento Maestro (Págs. 104-105 y 166):</strong>
                    <p style="font-size:0.77rem; color:#064E3B; margin:0; line-height:1.45;">
                        "La teoría de la Responsabilidad Social y Sostenibilidad integra las propuestas de Carroll y Elkington (Triple Bottom Line), articulando la sostenibilidad y la bioética corporativa en la toma de decisiones organizacionales y la preservación ambiental."
                    </p>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#10B981; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-book-open"></i> Asignaturas Obligatorias y Electivas
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Sistemas Integrados de Gestión (HSEQ):</strong> Semestre 5 (ISO 9001, ISO 14001, ISO 45001).</li>
                            <li><strong>Gerencia de la Calidad &amp; Productividad:</strong> Semestre 8.</li>
                            <li><strong>Electiva en Desarrollo Sostenible &amp; Economía Circular:</strong> Semestre 5/6.</li>
                            <li><strong>Finanzas Sostenibles &amp; Gobernanza Corporativa:</strong> Semestre 7.</li>
                        </ul>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#F39200; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-shield-alt"></i> Solidez y Articulación Externa
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Convenios Regionales:</strong> Proyectos aplicados con el sector productivo de Santander para descarbonización y gestión de residuos.</li>
                            <li><strong>RAP Asociados:</strong> RAP 7 (Prácticas de sostenibilidad y economía circular) y RAP 8 (Sistemas integrados de calidad).</li>
                            <li><strong>Enfoque ODS:</strong> Articulación directa a los ODS 8 (Trabajo Decente), 9 (Industria e Innovación) y 12 (Producción Responsable).</li>
                        </ul>
                    </div>
                </div>

                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <strong style="font-size:0.8rem; color:#1E293B; display:block; margin-bottom:4px;">Solidez en el Perfil de Egreso:</strong>
                    <p style="font-size:0.74rem; color:#64748B; margin:0; line-height:1.45;">
                        Capacita a los egresados para auditar procesos organizacionales bajo normas internacionales, liderar la transición ecológica de pymes y optimizar costos mediante modelos circulares regenerativos.
                    </p>
                </div>
            `
        },
        'emprendimiento': {
            title: 'Ruta Progresiva de Emprendimiento & Simuladores Gerenciales',
            subtitle: 'Formación Experiencial desde la Ideación hasta el Juego de Negocios',
            icon: 'fas fa-rocket',
            color: '#C8102E',
            content: `
                <div style="background:#FFF1F2; border-left:4px solid #C8102E; padding:12px 16px; border-radius:6px; margin-bottom:16px;">
                    <strong style="color:#9F1239; font-size:0.86rem; display:block; margin-bottom:4px;">Fundamento en Documento Maestro (Págs. 104, 116 y 166):</strong>
                    <p style="font-size:0.77rem; color:#881337; margin:0; line-height:1.45;">
                        "El enfoque emprendedor se sustenta en las teorías de Shane y Drucker, organizando una secuencia modular práctica que traslada al estudiante desde el diseño del modelo de negocio hasta la simulación gerencial de alta complejidad."
                    </p>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#C8102E; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-layer-group"></i> Ruta Secuencial en 4 Fases
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Fase 1 (Sem 6):</strong> Modelos de Emprendimiento (Lean Startup, Canvas, Pitch).</li>
                            <li><strong>Fase 2 (Sem 7):</strong> Formulación y Evaluación de Proyectos (Viabilidad financiera y de mercado).</li>
                            <li><strong>Fase 3 (Sem 8):</strong> Laboratorio de Innovación y Emprendimiento (Prototipado ágil y validación).</li>
                            <li><strong>Fase 4 (Sem 8):</strong> Juego Gerencial (Simulador de Negocios en entornos competitivos).</li>
                        </ul>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#10B981; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-chart-pie"></i> Evidencias Cuantitativas
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>27.0% de Egresados Emprendedores:</strong> Tasa institucional de egresados que han fundado o dirigen su propia empresa formal.</li>
                            <li><strong>Ecosistema Institucional:</strong> Vinculación activa con Fondo Emprender SENA, IMEBÚ y Cámara de Comercio de Bucaramanga.</li>
                            <li><strong>RAP Asociado:</strong> RAP 4 (Evaluación y ejecución de proyectos de emprendimiento sostenible).</li>
                        </ul>
                    </div>
                </div>

                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <strong style="font-size:0.8rem; color:#1E293B; display:block; margin-bottom:4px;">Solidez del Simulador en Tiempo Real:</strong>
                    <p style="font-size:0.74rem; color:#64748B; margin:0; line-height:1.45;">
                        En el Juego Gerencial, los estudiantes administran empresas virtuales compitiendo entre sí por cuota de mercado, precios, liquidez y talento humano, experimentando las consecuencias directas de sus decisiones estratégicas antes de graduarse.
                    </p>
                </div>
            `
        },
        'registro_unico': {
            title: 'Registro Único, Flexibilidad & Libre Movilidad Horizontal',
            subtitle: 'Unicidad Curricular con Equivalencia Absoluta entre Presencial y Virtual',
            icon: 'fas fa-random',
            color: '#7C3AED',
            content: `
                <div style="background:#FAF5FF; border-left:4px solid #7C3AED; padding:12px 16px; border-radius:6px; margin-bottom:16px;">
                    <strong style="color:#5B21B6; font-size:0.86rem; display:block; margin-bottom:4px;">Fundamento en Documento Maestro (Págs. 14, 16, 107 y 122):</strong>
                    <p style="font-size:0.77rem; color:#4C1D95; margin:0; line-height:1.45;">
                        "El Registro Calificado Único asegura que ambas modalidades (Presencial y Virtual) comparten la misma denominación, idéntico plan de estudios de 144 créditos, las mismas 48 asignaturas y los mismos Resultados de Aprendizaje, permitiendo la libre movilidad estudiantil."
                    </p>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#7C3AED; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-check-circle"></i> Garantías Institucionales de Unicidad
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Mismo Título Otorgado:</strong> Administrador(a) de Empresas sin distinciones de modalidad en el diploma.</li>
                            <li><strong>Idénticos Microcurrículos:</strong> Mismos sílabos, rúbricas de evaluación institucional (60% Saber, 30% Saber Pro, 10% Ser).</li>
                            <li><strong>Mismos RAP Institucionales:</strong> 10 RAP del programa y 144 específicos por asignatura.</li>
                        </ul>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#F39200; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-sync-alt"></i> Beneficios de la Movilidad Horizontal
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Sin Costos de Homologación:</strong> Paso transparente de presencial a virtual (o viceversa) si el estudiante cambia de empleo o ciudad.</li>
                            <li><strong>Cero Pérdida de Créditos:</strong> Continuidad inmediata sin retrasar el tiempo de graduación oportuna.</li>
                            <li><strong>Inclusión Geográfica:</strong> 240 cupos virtuales para cobertura en 32 departamentos y 60 presenciales en Bucaramanga.</li>
                        </ul>
                    </div>
                </div>

                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <strong style="font-size:0.8rem; color:#1E293B; display:block; margin-bottom:4px;">Diferenciación Metodológica Rigurosa:</strong>
                    <p style="font-size:0.74rem; color:#64748B; margin:0; line-height:1.45;">
                        Mientras la modalidad presencial se apoya en interacción directa en campus con relación 1:2 (48h directas / 96h independientes), la modalidad virtual utiliza mediación telemática en plataforma Moodle 24/7 con relación 1:3 (36h mediadas / 108h autónomas).
                    </p>
                </div>
            `
        },
        'empleabilidad': {
            title: 'Contextos de Aplicación, Alta Empleabilidad & Retención',
            subtitle: 'Modelo Pedagógico Institucional con Impacto Laboral Comprobado (OLE)',
            icon: 'fas fa-briefcase',
            color: '#1A1A1B',
            content: `
                <div style="background:#F8FAFC; border-left:4px solid #1A1A1B; padding:12px 16px; border-radius:6px; margin-bottom:16px;">
                    <strong style="color:#1E293B; font-size:0.86rem; display:block; margin-bottom:4px;">Fundamento en Documento Maestro (Págs. 14, 20 y 241):</strong>
                    <p style="font-size:0.77rem; color:#334155; margin:0; line-height:1.45;">
                        "El modelo pedagógico institucional de Formación en Contextos de Aplicación traslada la teoría a la solución directa de problemas reales del sector productivo, sustentando los altos indicadores de enganche laboral verificados por el Observatorio Laboral para la Educación (OLE)."
                    </p>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-chart-line"></i> Indicadores Oficiales OLE &amp; SPADIES
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>71.0% de Inserción Laboral:</strong> Graduados vinculados activamente al mercado en menos de 6 meses (fuente OLE del MEN).</li>
                            <li><strong>78.5% de Cotización Formal:</strong> Aportantes efectivos al sistema de seguridad social y pensiones.</li>
                            <li><strong>94.4% de Permanencia Semestral:</strong> Retención estudiantil apoyada en el Sistema de Alertas Tempranas (SAT TO).</li>
                        </ul>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <span style="font-size:0.7rem; font-weight:800; color:#F39200; text-transform:uppercase; display:block; margin-bottom:4px;">
                            <i class="fas fa-handshake"></i> Prácticas y Pasantías Empresariales
                        </span>
                        <ul style="font-size:0.75rem; color:#334155; margin:0; padding-left:14px; line-height:1.4;">
                            <li><strong>Diversos Sectores Económicos:</strong> Pasantías en manufactura, comercio, servicios financieros, salud, agroindustria y tecnología.</li>
                            <li><strong>15 Convenios Institucionales:</strong> Alianzas formales con gremios, empresas líderes y entidades públicas regionales.</li>
                            <li><strong>Opciones de Grado Diversificadas:</strong> Práctica empresarial, diplomado de posgrado, proyecto de investigación o plan de negocio.</li>
                        </ul>
                    </div>
                </div>

                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <strong style="font-size:0.8rem; color:#1E293B; display:block; margin-bottom:4px;">Solidez de la Propuesta Formativa:</strong>
                    <p style="font-size:0.74rem; color:#64748B; margin:0; line-height:1.45;">
                        Los empleadores reconocen en el egresado de la TO a un profesional versátil, con capacidad inmediata para incorporarse a las dinámicas operativas de la organización, manejar herramientas de gestión de la calidad y proponer mejoras en la productividad.
                    </p>
                </div>
            `
        }
    };

    window.openDiferenciadorModal = function(difKey) {
        const data = diferenciadoresData[difKey];
        if (!data) return;
        let overlay = document.getElementById('c1-modal-diferenciador');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'c1-modal-diferenciador';
            overlay.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15, 23, 42, 0.82); backdrop-filter:blur(6px); z-index:9999999; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;';
            overlay.innerHTML = `
                <div style="background:#FFFFFF; width:100%; max-width:850px; max-height:88vh; border-radius:14px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); display:flex; flex-direction:column; overflow:hidden; border:1px solid rgba(255,255,255,0.25); animation:c1ModalFadeIn 0.25s ease-out;">
                    <div id="c1-dif-modal-header" style="background:#1A1A1B; color:#FFFFFF; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #F39200;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <div id="c1-dif-icon-box" style="background:#F39200; color:#FFFFFF; width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;">
                                <i class="fas fa-medal" id="c1-dif-icon"></i>
                            </div>
                            <div>
                                <h4 id="c1-dif-title" style="font-family:'Montserrat',sans-serif; font-size:1.06rem; font-weight:800; color:#FFFFFF; margin:0;">Factor Diferenciador</h4>
                                <span id="c1-dif-subtitle" style="font-size:0.72rem; color:#D1D1D1;">Solidez y Evidencias Autorizadas del Documento Maestro</span>
                            </div>
                        </div>
                        <button onclick="window.closeDiferenciadorModal()" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25); color:#FFFFFF; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.95rem; cursor:pointer;"><i class="fas fa-times"></i></button>
                    </div>
                    <div id="c1-dif-body" style="padding:22px 24px; overflow-y:auto; max-height:calc(88vh - 120px);"></div>
                    <div style="background:#F8F9FA; padding:10px 20px; border-top:1px solid #E8E8E8; display:flex; justify-content:flex-end;">
                        <button onclick="window.closeDiferenciadorModal()" style="background:#1A1A1B; color:#FFFFFF; border:none; font-weight:700; font-size:0.78rem; padding:7px 18px; border-radius:6px; cursor:pointer;">Entendido / Cerrar</button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
        }

        const titleElem = document.getElementById('c1-dif-title');
        const subtitleElem = document.getElementById('c1-dif-subtitle');
        const iconElem = document.getElementById('c1-dif-icon');
        const iconBox = document.getElementById('c1-dif-icon-box');
        const header = document.getElementById('c1-dif-modal-header');
        const bodyElem = document.getElementById('c1-dif-body');

        if (titleElem) titleElem.innerText = data.title;
        if (subtitleElem) subtitleElem.innerText = data.subtitle;
        if (iconElem) iconElem.className = data.icon;
        if (iconBox) iconBox.style.background = data.color;
        if (header) header.style.borderBottomColor = data.color;
        if (bodyElem) bodyElem.innerHTML = data.content;

        overlay.style.display = 'flex';
    };

    window.closeDiferenciadorModal = function() {
        const overlay = document.getElementById('c1-modal-diferenciador');
        if (overlay) overlay.style.display = 'none';
    };

    // Cerrar al hacer clic en el backdrop
    document.addEventListener('click', function(e) {
        const overlay1 = document.getElementById('c1-modal-overlay');
        if (overlay1 && e.target === overlay1) {
            window.closeC1Modal();
        }
        const overlay2 = document.getElementById('c1-modal-diferenciador');
        if (overlay2 && e.target === overlay2) {
            window.closeDiferenciadorModal();
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const overlay2 = document.getElementById('c1-modal-diferenciador');
            if (overlay2 && overlay2.style.display === 'flex') {
                window.closeDiferenciadorModal();
                e.stopPropagation();
                return;
            }
            const overlay1 = document.getElementById('c1-modal-overlay');
            if (overlay1 && overlay1.style.display === 'flex') {
                window.closeC1Modal();
                e.stopPropagation();
            }
        }
    });
})();
