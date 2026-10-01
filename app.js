/* =========================================================
   APP.JS – Lógica principal de la Plataforma de Renovación
   Registro Calificado · Administración de Empresas · CETO
   ========================================================= */

const PWD_HASH = "CETO2026";

// ---- Conditions Info ----
const condInfo = [
    { id: 'c1', title: '1. Denominación del Programa', icon: 'fas fa-id-badge', desc: 'Denominación académica, título otorgado, NBC y clasificación CINE.', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80' },
    { id: 'c2', title: '2. Justificación del Programa', icon: 'fas fa-chart-line', desc: 'Pertinencia, estudios de contexto, necesidades del sector y análisis de oferta.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
    { id: 'c3', title: '3. Aspectos Curriculares', icon: 'fas fa-sitemap', desc: 'Malla curricular, competencias, RAP, flexibilidad y plan de estudios unificado.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' },
    { id: 'c4', title: '4. Organización de Actividades Académicas', icon: 'fas fa-cogs', desc: 'Modelo pedagógico, créditos, estrategias didácticas y sistema de evaluación.', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80' },
    { id: 'c5', title: '5. Investigación', icon: 'fas fa-flask', desc: 'Grupos, líneas, semilleros, producción académica y proyección investigativa.', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80' },
    { id: 'c6', title: '6. Relación con el Sector Externo', icon: 'fas fa-handshake', desc: 'Convenios, prácticas empresariales, proyección social e internacionalización.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80' },
    { id: 'c7', title: '7. Personal Docente', icon: 'fas fa-chalkboard-teacher', desc: 'Perfiles docentes, dedicación, formación posgradual y plan de cualificación.', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80' },
    { id: 'c8', title: '8. Medios Educativos', icon: 'fas fa-laptop-code', desc: 'Biblioteca digital, LMS Moodle, software especializado y recursos de aprendizaje.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80' },
    { id: 'c9', title: '9. Infraestructura Física y Tecnológica', icon: 'fas fa-building', desc: 'Sedes, laboratorios, infraestructura AWS, conectividad y plan de mantenimiento.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80' }
];

// ---- Auth Functions ----
function checkAuth() {
    const pwd = document.getElementById('pwdInput').value.trim().toUpperCase();
    const err = document.getElementById('pwdError');
    if (pwd === PWD_HASH) {
        const gw = document.getElementById('authGateway');
        gw.style.opacity = '0';
        setTimeout(() => {
            gw.style.display = 'none';
            document.getElementById('mainApp').classList.remove('hidden');
        }, 500);
    } else {
        err.classList.remove('hidden');
        setTimeout(() => err.classList.add('hidden'), 4000);
    }
}

function logout() {
    document.getElementById('pwdInput').value = '';
    document.getElementById('mainApp').classList.add('hidden');
    const gw = document.getElementById('authGateway');
    gw.style.display = 'flex';
    gw.style.opacity = '1';
}

// ---- Build Condition Cards ----
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('gridCards');
    if (!grid) return;

    grid.innerHTML = condInfo.map(c => `
        <div class="cond-card" onclick="openPresentation('${c.id}', '${c.title.replace(/'/g, "\\'")}')">
            <div class="cond-card-img">
                <img src="${c.img}" alt="${c.title}" onerror="this.parentElement.outerHTML='<div class=\\'cond-card-icon-bg\\'><i class=\\'${c.icon}\\'></i></div>';">
                <div class="cond-card-badge">Condición ${c.id.replace('c','')}</div>
            </div>
            <div class="cond-card-body">
                <h4 class="cond-card-title">${c.title}</h4>
                <p class="cond-card-desc">${c.desc}</p>
                <div class="cond-card-action"><i class="${c.icon}"></i> Ver Sustentación</div>
            </div>
        </div>
    `).join('');
});

// ---- Presentation Viewer ----
let currentConditionId = 'c1';

function openPresentation(id, title) {
    currentConditionId = id;
    const viewer = document.getElementById('presentationViewer');
    const cond = condInfo.find(c => c.id === id);

    document.getElementById('viewerTitle').innerText = title || cond?.title || id;
    document.getElementById('slideCategory').innerText = `CONDICIÓN ${id.replace('c','')} · RENOVACIÓN REGISTRO CALIFICADO`;
    document.getElementById('slideTitle').innerText = cond?.title || title;

    // Update counter
    const idx = condInfo.findIndex(c => c.id === id);
    document.getElementById('slideCounter').innerText = idx >= 0 ? idx + 1 : '-';
    document.getElementById('slideTotalCounter').innerText = condInfo.length;

    // Load content
    if (window.SECTIONS && window.SECTIONS[id]) {
        document.getElementById('slideBody').innerHTML = window.SECTIONS[id];
    } else {
        document.getElementById('slideBody').innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="${cond?.icon || 'fas fa-spinner'}" style="font-size:3rem; color:#F39200; margin-bottom:16px; display:block;"></i>
                <h3 style="color:#1A1A1B; font-family:'Montserrat',sans-serif; margin-bottom:8px;">Contenido en Preparación</h3>
                <p style="color:#6B6B6B; font-size:0.9rem;">La documentación de esta condición se encuentra en proceso de consolidación.<br>Consulte el Documento Maestro en SACES.</p>
            </div>`;
    }

    // Show viewer
    viewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Scroll to top
    const scroller = document.getElementById('scrollContainer');
    if (scroller) scroller.scrollTop = 0;

    // Run init scripts
    runSlideScripts(id);
}

function nextSlide() {
    const idx = condInfo.findIndex(c => c.id === currentConditionId);
    if (idx >= 0 && idx < condInfo.length - 1) {
        openPresentation(condInfo[idx + 1].id, condInfo[idx + 1].title);
    }
}

function prevSlide() {
    const idx = condInfo.findIndex(c => c.id === currentConditionId);
    if (idx > 0) {
        openPresentation(condInfo[idx - 1].id, condInfo[idx - 1].title);
    }
}

function closePresentation() {
    document.getElementById('presentationViewer').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function runSlideScripts(id) {
    setTimeout(() => {
        if (id === 'c3' && window.c3Init) window.c3Init();
        if (id === 'c4' && window.c4Init) window.c4Init();
        if (id === 'c5' && window.c5Init) window.c5Init();
        if (id === 'c7' && window.c7Init) window.c7Init();
        if (id === 'c9' && window.c9Init) window.c9Init();
    }, 300);
}

// Keyboard navigation
document.addEventListener('keydown', e => {
    const viewer = document.getElementById('presentationViewer');
    if (viewer && !viewer.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') closePresentation();
    }
});

// Tab switching utility
window.switchTab = function(tabGroupId, tabId) {
    const group = document.getElementById(tabGroupId);
    if (!group) return;
    
    // Deactivate all tab buttons in this group
    group.querySelectorAll('.tab-btn, .c3-main-tab-btn').forEach(b => b.classList.remove('active'));
    const btn = group.querySelector(`[data-tab="${tabId}"]`);
    if (btn) btn.classList.add('active');

    // Activate target panel and deactivate sibling panels at the same nesting level
    const panel = document.getElementById(tabId);
    if (panel) {
        const parent = panel.parentElement;
        if (parent) {
            Array.from(parent.children).forEach(child => {
                if (child.classList.contains('tab-panel')) {
                    child.classList.remove('active');
                }
            });
        }
        panel.classList.add('active');
    }
};

