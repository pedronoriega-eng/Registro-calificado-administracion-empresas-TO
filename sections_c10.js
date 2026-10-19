/* =========================================================
   SECCIÓN DE ESTADÍSTICAS INSTITUCIONALES Y TENDENCIAS DE PERMANENCIA
   Administración de Empresas · Registro Único · TO
   Datos Oficiales: Tablas 11, 12 y 13 del Documento Maestro (Anexo 2)
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c10'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:10px; margin-bottom:24px; box-shadow:0 4px 15px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.25rem; font-weight:800; color:#FFFFFF; margin-bottom:4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-chart-line" style="color:#F39200;"></i> Datos Estadísticos Institucionales y Tendencias Generales de Permanencia
            </h4>
            <p style="color:#D1D1D1; font-size:0.88rem; margin:0;">
                Trazabilidad estadística de la vigencia del Registro Calificado: comportamiento de matrícula (2020-2 a 2025-2), efectividad del Sistema de Alertas Tempranas (SAT) y deserción por cohortes SPADIES.
            </p>
        </div>
        <div>
            <span class="tag-legal" style="background:rgba(243,146,0,0.25); color:#F39200; border:1px solid #F39200; font-weight:700; padding:6px 14px; border-radius:20px; font-size:0.8rem;">
                <i class="fas fa-database"></i> Registro &amp; Control TO 2025
            </span>
        </div>
    </div>
</div>

<!-- ========================================== -->
<!-- 1. TARJETAS KPI DE IMPACTO INSTITUCIONAL -->
<!-- ========================================== -->
<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-bottom:24px;">
    
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04); border-top:4px solid #F39200;">
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:#6B6B6B;">Matrícula Activa Reciente</div>
        <div style="font-family:'Montserrat',sans-serif; font-size:2rem; font-weight:800; color:#1A1A1B; margin:4px 0;">186</div>
        <div style="font-size:0.75rem; color:#2ECC71; font-weight:700;"><i class="fas fa-arrow-up"></i> +776% Crecimiento (2020 a 2025)</div>
    </div>

    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04); border-top:4px solid #2ECC71;">
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:#6B6B6B;">Índice de Permanencia (2025-1)</div>
        <div style="font-family:'Montserrat',sans-serif; font-size:2rem; font-weight:800; color:#1A1A1B; margin:4px 0;">94.4%</div>
        <div style="font-size:0.75rem; color:#2ECC71; font-weight:700;"><i class="fas fa-shield-alt"></i> Consolidación SAT > 90%</div>
    </div>

    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04); border-top:4px solid #1A1A1B;">
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:#6B6B6B;">Cupos Solicitados en RU</div>
        <div style="font-family:'Montserrat',sans-serif; font-size:2rem; font-weight:800; color:#1A1A1B; margin:4px 0;">300</div>
        <div style="font-size:0.75rem; color:#6B6B6B;">240 Virtuales / 60 Presenciales</div>
    </div>

    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04); border-top:4px solid #F39200;">
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:#6B6B6B;">Duración Optimizada</div>
        <div style="font-family:'Montserrat',sans-serif; font-size:2rem; font-weight:800; color:#1A1A1B; margin:4px 0;">8 Sem.</div>
        <div style="font-size:0.75rem; color:#F39200; font-weight:700;"><i class="fas fa-check"></i> 144 Créditos (Decreto 1330)</div>
    </div>

</div>

<!-- ========================================== -->
<!-- 2. DASHBOARD DE GRÁFICOS CHART.JS -->
<!-- ========================================== -->
<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap:20px; margin-bottom:28px;">
    
    <!-- GRÁFICO 1: EVOLUCIÓN HISTÓRICA DE MATRÍCULA -->
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-users" style="color:#F39200; margin-right:6px;"></i> Evolución Histórica de Matrícula (2020-2 a 2025-2)
            </h5>
            <span class="tag-legal" style="background:#FFF3E0; color:#F39200; font-size:0.7rem; font-weight:700;">Tabla 12 DM</span>
        </div>
        <div style="position:relative; height:280px; width:100%;">
            <canvas id="chartMatricula"></canvas>
        </div>
        <p style="font-size:0.75rem; color:#6B6B6B; margin:10px 0 0;">
            De 13 estudiantes en la cohorte de apertura (2020-2) a 114 estudiantes matriculados en 2025-2, confirmando la consolidación y demanda institucional.
        </p>
    </div>

    <!-- GRÁFICO 2: TENDENCIA DEL ÍNDICE DE PERMANENCIA -->
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-shield-alt" style="color:#2ECC71; margin-right:6px;"></i> Índice de Permanencia Semestral (%)
            </h5>
            <span class="tag-legal" style="background:#DCFCE7; color:#166534; font-size:0.7rem; font-weight:700;">Tabla 13 DM</span>
        </div>
        <div style="position:relative; height:280px; width:100%;">
            <canvas id="chartPermanencia"></canvas>
        </div>
        <p style="font-size:0.75rem; color:#6B6B6B; margin:10px 0 0;">
            A partir de 2024, el Sistema de Alertas Tempranas (SAT) estabiliza la permanencia por encima del 92%, superando el promedio nacional de SPADIES.
        </p>
    </div>

</div>

<!-- ========================================== -->
<!-- 3. TABLA 13 DETALLADA Y ANÁLISIS DE COHORTES -->
<!-- ========================================== -->
<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap:20px; margin-bottom:28px;">
    
    <!-- TABLA 13 DM: MATRÍCULA Y PERMANENCIA -->
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
            <i class="fas fa-clipboard-check" style="color:#F39200; margin-right:6px;"></i> Tabla 13. Comportamiento de Matrícula y Permanencia Oficial
        </h5>
        <div style="max-height:270px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:6px;">
            <table class="tbl" style="width:100%; font-size:0.8rem; margin:0; text-align:center;">
                <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF;">
                    <tr><th>Periodo</th><th>Matriculados</th><th>Permanecen</th><th>Índice Permanencia</th></tr>
                </thead>
                <tbody>
                    <tr><td>2020-2</td><td>13</td><td>8</td><td>61.5%</td></tr>
                    <tr><td>2021-1</td><td>28</td><td>23</td><td>82.1%</td></tr>
                    <tr><td>2021-2</td><td>46</td><td>29</td><td>63.0%</td></tr>
                    <tr><td>2022-1</td><td>54</td><td>33</td><td>61.1%</td></tr>
                    <tr><td>2022-2</td><td>62</td><td>53</td><td>85.5%</td></tr>
                    <tr><td>2023-1</td><td>59</td><td>45</td><td>76.3%</td></tr>
                    <tr><td>2023-2</td><td>48</td><td>39</td><td>81.3%</td></tr>
                    <tr style="background:#F0FDF4; font-weight:700; color:#166534;"><td>2024-1</td><td>42</td><td>39</td><td>92.9%</td></tr>
                    <tr style="background:#F0FDF4; font-weight:700; color:#166534;"><td>2024-2</td><td>38</td><td>35</td><td>92.1%</td></tr>
                    <tr style="background:#FFF9F2; font-weight:800; color:#F39200;"><td>2025-1</td><td>72</td><td>68</td><td>94.4%</td></tr>
                    <tr style="background:#FFF9F2; font-weight:800; color:#F39200;"><td>2025-2</td><td>114</td><td>98</td><td>86.0%</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- TABLA 11 DM: TASAS DE DESERCIÓN POR COHORTE SPADIES -->
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <h5 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
            <i class="fas fa-user-times" style="color:#E74C3C; margin-right:6px;"></i> Tabla 11. Tasas de Deserción Acumulada por Cohorte (SPADIES)
        </h5>
        <div style="max-height:270px; overflow-y:auto; border:1px solid #E8E8E8; border-radius:6px;">
            <table class="tbl" style="width:100%; font-size:0.8rem; margin:0; text-align:center;">
                <thead style="position:sticky; top:0; background:#1A1A1B; color:#FFFFFF;">
                    <tr><th>Cohorte</th><th>Sem 1 (S1)</th><th>Sem 2 (S2)</th><th>Sem 3 (S3)</th><th>Sem 4 (S4)</th><th>Sem 5 (S5)</th></tr>
                </thead>
                <tbody>
                    <tr><td style="font-weight:700;">2018-1</td><td>22.49%</td><td>34.03%</td><td>40.69%</td><td>44.82%</td><td>47.40%</td></tr>
                    <tr><td style="font-weight:700;">2018-2</td><td>19.61%</td><td>30.35%</td><td>37.80%</td><td>41.44%</td><td>44.19%</td></tr>
                    <tr><td style="font-weight:700;">2019-1</td><td>19.77%</td><td>30.80%</td><td>37.72%</td><td>41.44%</td><td>43.76%</td></tr>
                    <tr><td style="font-weight:700;">2019-2</td><td>24.89%</td><td>33.29%</td><td>40.22%</td><td>44.63%</td><td>48.15%</td></tr>
                    <tr><td style="font-weight:700;">2020-1</td><td>19.31%</td><td>29.28%</td><td>38.42%</td><td>44.36%</td><td>-</td></tr>
                    <tr><td style="font-weight:700;">2020-2</td><td>23.37%</td><td>31.28%</td><td>42.72%</td><td>-</td><td>-</td></tr>
                    <tr style="background:#F0FDF4; font-weight:700; color:#166534;"><td style="font-weight:700;">2021-1</td><td>22.14%</td><td>30.83%</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr style="background:#F0FDF4; font-weight:700; color:#166534;"><td style="font-weight:700;">2021-2</td><td>25.09%</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                </tbody>
            </table>
        </div>
        <p style="font-size:0.75rem; color:#6B6B6B; margin:8px 0 0;">
            Los mayores picos de deserción histórica se concentraban en S4 y S5. La compactación curricular a 8 semestres en el plan propuesto reduce los tiempos de exposición y mitiga la deserción tardía.
        </p>
    </div>

</div>

<!-- ========================================== -->
<!-- 4. ESTRATEGIAS SAT Y CONCLUSIONES EJECUTIVAS -->
<!-- ========================================== -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:14px; display:flex; align-items:center; gap:8px;">
        <i class="fas fa-check-double" style="color:#2ECC71;"></i> Estrategias del Sistema de Alertas Tempranas (SAT) y Sinergia del Registro Único
    </h4>
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:14px;">
        <div style="background:#F8F9FA; border-left:3px solid #2ECC71; padding:12px; border-radius:6px;">
            <div style="font-weight:800; font-size:0.85rem; color:#1A1A1B; margin-bottom:4px;">1. Tutorías Académicas Preventivas</div>
            <p style="font-size:0.78rem; color:#4B5563; margin:0;">Refuerzo individual en asignaturas de alto impacto cuantitativo (Cálculo, Costos, Estadística) antes de los cortes evaluativos.</p>
        </div>
        <div style="background:#F8F9FA; border-left:3px solid #F39200; padding:12px; border-radius:6px;">
            <div style="font-weight:800; font-size:0.85rem; color:#1A1A1B; margin-bottom:4px;">2. Alivios Financieros y Convenios</div>
            <p style="font-size:0.78rem; color:#4B5563; margin:0;">Becas por rendimiento, descuentos familiares y financiación directa sin intermediarios bancarios con tasas de fomento.</p>
        </div>
        <div style="background:#F8F9FA; border-left:3px solid #F39200; padding:12px; border-radius:6px;">
            <div style="font-weight:800; font-size:0.85rem; color:#1A1A1B; margin-bottom:4px;">3. Flexibilidad de Registro Único</div>
            <p style="font-size:0.78rem; color:#4B5563; margin:0;">El estudiante que consigue empleo o cambia de residencia puede migrar a la modalidad virtual sin perder materias ni retrasar su graduación.</p>
        </div>
        <div style="background:#F8F9FA; border-left:3px solid #1A1A1B; padding:12px; border-radius:6px;">
            <div style="font-weight:800; font-size:0.85rem; color:#1A1A1B; margin-bottom:4px;">4. Acompañamiento Psicosocial</div>
            <p style="font-size:0.78rem; color:#4B5563; margin:0;">Equipo de psicólogos de Bienestar Institucional para orientación vocacional, manejo del estrés y adaptación a la vida universitaria.</p>
        </div>
    </div>
</div>
`;

// ==========================================
// INICIALIZADOR DE GRÁFICOS CHART.JS
// ==========================================
window.c10Init = function() {
    // 1. Gráfico de Matrícula
    const ctxMat = document.getElementById('chartMatricula');
    if (ctxMat && typeof Chart !== 'undefined') {
        if (window._chartMatriculaInstance) window._chartMatriculaInstance.destroy();
        
        window._chartMatriculaInstance = new Chart(ctxMat, {
            type: 'bar',
            data: {
                labels: ['2020-2', '2021-1', '2021-2', '2022-1', '2022-2', '2023-1', '2023-2', '2024-1', '2024-2', '2025-1', '2025-2'],
                datasets: [
                    {
                        label: 'Estudiantes Matriculados',
                        data: [13, 28, 46, 54, 62, 59, 48, 42, 38, 72, 114],
                        backgroundColor: '#F39200',
                        borderRadius: 6
                    },
                    {
                        label: 'Aspirantes Inscritos',
                        data: [25, 37, 60, 74, 78, 75, 55, 56, 65, 88, 127],
                        backgroundColor: '#1A1A1B',
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { font: { family: 'Montserrat', size: 11 } } }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#E8E8E8' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 2. Gráfico de Permanencia
    const ctxPerm = document.getElementById('chartPermanencia');
    if (ctxPerm && typeof Chart !== 'undefined') {
        if (window._chartPermInstance) window._chartPermInstance.destroy();

        window._chartPermInstance = new Chart(ctxPerm, {
            type: 'line',
            data: {
                labels: ['2020-2', '2021-1', '2021-2', '2022-1', '2022-2', '2023-1', '2023-2', '2024-1', '2024-2', '2025-1', '2025-2'],
                datasets: [
                    {
                        label: 'Índice de Permanencia (%)',
                        data: [61.5, 82.1, 63.0, 61.1, 85.5, 76.3, 81.3, 92.9, 92.1, 94.4, 86.0],
                        borderColor: '#2ECC71',
                        backgroundColor: 'rgba(46, 204, 113, 0.12)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.35,
                        pointRadius: 5,
                        pointBackgroundColor: '#2ECC71'
                    },
                    {
                        label: 'Meta Institucional SAT (80%)',
                        data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
                        borderColor: '#E74C3C',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { font: { family: 'Montserrat', size: 11 } } }
                },
                scales: {
                    y: { min: 50, max: 100, grid: { color: '#E8E8E8' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
};

// Auto-disparador cuando los canvas de C10 entran en el DOM
(function initStatsAutoWatcher() {
    let attempts = 0;
    const watcher = setInterval(() => {
        attempts++;
        const chartEl = document.getElementById('chartMatricula');
        if (chartEl && chartEl.offsetParent !== null) {
            if (!window._chartMatInstance && window.c10Init) {
                window.c10Init();
            }
        }
        if (attempts > 80) clearInterval(watcher);
    }, 200);
})();

