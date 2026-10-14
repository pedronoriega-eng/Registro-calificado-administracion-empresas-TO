/* =========================================================
   CONDICIÓN 3 – ASPECTOS CURRICULARES (DOCUMENTO MAESTRO RENOVACIÓN)
   Plan de Estudios Vigente (158 cr) vs Plan Propuesto (144 cr)
   VISTA GLOBAL DE MALLA EN MATRIZ DE COMPONENTES X SEMESTRES
   ========================================================= */

window.SECTIONS = window.SECTIONS || {};

window.switchTab = window.switchTab || function(tabGroupId, tabId) {
    const group = document.getElementById(tabGroupId);
    if (group) {
        group.querySelectorAll('.tab-btn, .c3-main-tab-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = group.querySelector(`[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    const targetPanel = document.getElementById(tabId);
    if (!targetPanel) return;

    const parent = targetPanel.parentElement;
    if (parent) {
        Array.from(parent.children).forEach(child => {
            if (child.classList && child.classList.contains('tab-panel')) {
                child.classList.remove('active');
                child.style.display = 'none';
            }
        });
    }

    targetPanel.classList.add('active');
    targetPanel.style.display = 'block';
};

window.C3_SUBJECTS = [
  {
    "id": "prop_1",
    "semestre": 1,
    "nombre": "Álgebra Lineal",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Álgebra Lineal (Plan Propuesto 144 cr - Semestre 1) desarrolla competencias integradas en el componente de Ciencias Básicas y Cuantitativas (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Álgebra Lineal en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Álgebra Lineal para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Álgebra Lineal."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Álgebra Lineal",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Álgebra Lineal en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Álgebra Lineal."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Álgebra Lineal",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Álgebra Lineal para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Álgebra Lineal."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Álgebra Lineal",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Álgebra Lineal.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Álgebra Lineal."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Álgebra Lineal",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Álgebra Lineal",
      "Unidad 3: Consolidación, Innovación y Sustentación en Álgebra Lineal"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Ciencias Básicas y Cuantitativas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Álgebra Lineal en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_2",
    "semestre": 1,
    "nombre": "Comunicación Oral y Escrita",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Comunicación Oral y Escrita (Plan Propuesto 144 cr - Semestre 1) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Comunicación Oral y Escrita en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Comunicación Oral y Escrita para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Comunicación Oral y Escrita."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Comunicación Oral y Escrita",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Comunicación Oral y Escrita en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Comunicación Oral y Escrita."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Comunicación Oral y Escrita",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Comunicación Oral y Escrita para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Comunicación Oral y Escrita."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Comunicación Oral y Escrita",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Comunicación Oral y Escrita.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Comunicación Oral y Escrita."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Comunicación Oral y Escrita",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Comunicación Oral y Escrita",
      "Unidad 3: Consolidación, Innovación y Sustentación en Comunicación Oral y Escrita"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Comunicación Oral y Escrita en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_3",
    "semestre": 1,
    "nombre": "Cátedra de la Paz y Resolución de Conflictos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Cátedra de la Paz y Resolución de Conflictos (Plan Propuesto 144 cr - Semestre 1) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Cátedra de la Paz y Resolución de Conflictos en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Cátedra de la Paz y Resolución de Conflictos para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Cátedra de la Paz y Resolución de Conflictos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cátedra de la Paz y Resolución de Conflictos",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Cátedra de la Paz y Resolución de Conflictos en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Cátedra de la Paz y Resolución de Conflictos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cátedra de la Paz y Resolución de Conflictos",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Cátedra de la Paz y Resolución de Conflictos para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Cátedra de la Paz y Resolución de Conflictos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Cátedra de la Paz y Resolución de Conflictos",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Cátedra de la Paz y Resolución de Conflictos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Cátedra de la Paz y Resolución de Conflictos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Cátedra de la Paz y Resolución de Conflictos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cátedra de la Paz y Resolución de Conflictos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Cátedra de la Paz y Resolución de Conflictos"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Cátedra de la Paz y Resolución de Conflictos en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_4",
    "semestre": 1,
    "nombre": "Fundamentos de Administración",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos de Administración (Plan Propuesto 144 cr - Semestre 1) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Fundamentos de Administración en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Fundamentos de Administración para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Fundamentos de Administración."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Fundamentos de Administración en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Administración."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Fundamentos de Administración para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Administración."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Fundamentos de Administración.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Administración."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Fundamentos de Administración en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_5",
    "semestre": 1,
    "nombre": "Fundamentos Contables y Financieros",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos Contables y Financieros (Plan Propuesto 144 cr - Semestre 1) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Fundamentos Contables y Financieros en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Fundamentos Contables y Financieros para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Fundamentos Contables y Financieros."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos Contables y Financieros",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Fundamentos Contables y Financieros en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos Contables y Financieros."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos Contables y Financieros",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Fundamentos Contables y Financieros para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos Contables y Financieros."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos Contables y Financieros",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Fundamentos Contables y Financieros.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos Contables y Financieros."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos Contables y Financieros",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos Contables y Financieros",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos Contables y Financieros"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Fundamentos Contables y Financieros en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_6",
    "semestre": 1,
    "nombre": "Fundamentos de Mercadeo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos de Mercadeo (Plan Propuesto 144 cr - Semestre 1) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Fundamentos de Mercadeo en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Fundamentos de Mercadeo para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Fundamentos de Mercadeo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Mercadeo",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Fundamentos de Mercadeo en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Mercadeo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Mercadeo",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Fundamentos de Mercadeo para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Mercadeo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Mercadeo",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Fundamentos de Mercadeo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Mercadeo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Mercadeo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Mercadeo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Mercadeo"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Fundamentos de Mercadeo en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_7",
    "semestre": 2,
    "nombre": "Cálculo Diferencial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Álgebra Lineal",
    "descripcion": "La asignatura Cálculo Diferencial (Plan Propuesto 144 cr - Semestre 2) desarrolla competencias integradas en el componente de Ciencias Básicas y Cuantitativas (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Cálculo Diferencial en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Cálculo Diferencial para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Cálculo Diferencial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cálculo Diferencial",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Cálculo Diferencial en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Cálculo Diferencial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cálculo Diferencial",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Cálculo Diferencial para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Cálculo Diferencial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Cálculo Diferencial",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Cálculo Diferencial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Cálculo Diferencial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Cálculo Diferencial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cálculo Diferencial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Cálculo Diferencial"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Ciencias Básicas y Cuantitativas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Cálculo Diferencial en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_8",
    "semestre": 2,
    "nombre": "Estadística Descriptiva",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Álgebra Lineal",
    "descripcion": "La asignatura Estadística Descriptiva (Plan Propuesto 144 cr - Semestre 2) desarrolla competencias integradas en el componente de Ciencias Básicas y Cuantitativas (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Estadística Descriptiva en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Estadística Descriptiva para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Estadística Descriptiva."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Descriptiva",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Estadística Descriptiva en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Estadística Descriptiva."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Descriptiva",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Estadística Descriptiva para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Estadística Descriptiva."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Descriptiva",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Estadística Descriptiva.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Estadística Descriptiva."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Descriptiva",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Descriptiva",
      "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Descriptiva"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Ciencias Básicas y Cuantitativas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Estadística Descriptiva en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_9",
    "semestre": 2,
    "nombre": "Inglés I",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Inglés I (Plan Propuesto 144 cr - Semestre 2) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Inglés I en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Inglés I para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inglés I."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés I",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Inglés I en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés I."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés I",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Inglés I para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés I."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés I",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inglés I.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés I."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés I",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés I",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés I"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Inglés I en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_10",
    "semestre": 2,
    "nombre": "Microeconomía",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Fundamentos Contables y Financieros",
    "descripcion": "La asignatura Microeconomía (Plan Propuesto 144 cr - Semestre 2) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Microeconomía en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Microeconomía para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Microeconomía."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Microeconomía",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Microeconomía en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Microeconomía."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Microeconomía",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Microeconomía para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Microeconomía."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Microeconomía",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Microeconomía.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Microeconomía."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Microeconomía",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Microeconomía",
      "Unidad 3: Consolidación, Innovación y Sustentación en Microeconomía"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Microeconomía en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_11",
    "semestre": 2,
    "nombre": "Legislación Comercial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Legislación Comercial (Plan Propuesto 144 cr - Semestre 2) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Legislación Comercial en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Legislación Comercial para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Legislación Comercial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Comercial",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Legislación Comercial en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Legislación Comercial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Comercial",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Legislación Comercial para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Legislación Comercial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Comercial",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Legislación Comercial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Legislación Comercial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Comercial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Comercial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Comercial"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Legislación Comercial en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_12",
    "semestre": 2,
    "nombre": "Costos y Presupuestos",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Fundamentos Contables y Financieros",
    "descripcion": "La asignatura Costos y Presupuestos (Plan Propuesto 144 cr - Semestre 2) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Costos y Presupuestos en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Costos y Presupuestos para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Costos y Presupuestos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Costos y Presupuestos",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Costos y Presupuestos en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Costos y Presupuestos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Costos y Presupuestos",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Costos y Presupuestos para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Costos y Presupuestos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Costos y Presupuestos",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Costos y Presupuestos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Costos y Presupuestos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Costos y Presupuestos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Costos y Presupuestos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Costos y Presupuestos"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Costos y Presupuestos en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_13",
    "semestre": 3,
    "nombre": "Estadística Inferencial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Estadística Descriptiva",
    "descripcion": "La asignatura Estadística Inferencial (Plan Propuesto 144 cr - Semestre 3) desarrolla competencias integradas en el componente de Ciencias Básicas y Cuantitativas (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Estadística Inferencial en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Estadística Inferencial para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Estadística Inferencial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Inferencial",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Estadística Inferencial en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Estadística Inferencial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Inferencial",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Estadística Inferencial para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Estadística Inferencial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Inferencial",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Estadística Inferencial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Estadística Inferencial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Inferencial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Inferencial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Inferencial"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Ciencias Básicas y Cuantitativas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Estadística Inferencial en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_14",
    "semestre": 3,
    "nombre": "Inglés II",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Inglés I",
    "descripcion": "La asignatura Inglés II (Plan Propuesto 144 cr - Semestre 3) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Inglés II en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Inglés II para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inglés II."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés II",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Inglés II en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés II."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés II",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Inglés II para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés II."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés II",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inglés II.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés II."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés II",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés II",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés II"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Inglés II en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_15",
    "semestre": 3,
    "nombre": "Macroeconomía",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Microeconomía",
    "descripcion": "La asignatura Macroeconomía (Plan Propuesto 144 cr - Semestre 3) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Macroeconomía en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Macroeconomía para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Macroeconomía."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Macroeconomía",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Macroeconomía en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Macroeconomía."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Macroeconomía",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Macroeconomía para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Macroeconomía."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Macroeconomía",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Macroeconomía.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Macroeconomía."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Macroeconomía",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Macroeconomía",
      "Unidad 3: Consolidación, Innovación y Sustentación en Macroeconomía"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Macroeconomía en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_16",
    "semestre": 3,
    "nombre": "Análisis Financiero",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Costos y Presupuestos",
    "descripcion": "La asignatura Análisis Financiero (Plan Propuesto 144 cr - Semestre 3) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Análisis Financiero en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Análisis Financiero para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Análisis Financiero."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Análisis Financiero",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Análisis Financiero en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Análisis Financiero."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Análisis Financiero",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Análisis Financiero para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Análisis Financiero."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Análisis Financiero",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Análisis Financiero.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Análisis Financiero."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Análisis Financiero",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Análisis Financiero",
      "Unidad 3: Consolidación, Innovación y Sustentación en Análisis Financiero"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Análisis Financiero en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_17",
    "semestre": 3,
    "nombre": "Procesos Administrativos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Fundamentos de Administración",
    "descripcion": "La asignatura Procesos Administrativos (Plan Propuesto 144 cr - Semestre 3) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Procesos Administrativos en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Procesos Administrativos para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Procesos Administrativos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Procesos Administrativos",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Procesos Administrativos en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Procesos Administrativos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Procesos Administrativos",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Procesos Administrativos para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Procesos Administrativos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Procesos Administrativos",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Procesos Administrativos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Procesos Administrativos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Procesos Administrativos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Procesos Administrativos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Procesos Administrativos"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Procesos Administrativos en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_18",
    "semestre": 3,
    "nombre": "Teoría Organizacional",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Fundamentos de Administración",
    "descripcion": "La asignatura Teoría Organizacional (Plan Propuesto 144 cr - Semestre 3) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Teoría Organizacional en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Teoría Organizacional para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Teoría Organizacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Teoría Organizacional",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Teoría Organizacional en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Teoría Organizacional."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Teoría Organizacional",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Teoría Organizacional para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Teoría Organizacional."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Teoría Organizacional",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Teoría Organizacional.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Teoría Organizacional."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Teoría Organizacional",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Teoría Organizacional",
      "Unidad 3: Consolidación, Innovación y Sustentación en Teoría Organizacional"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Teoría Organizacional en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_19",
    "semestre": 4,
    "nombre": "Competencias Investigativas",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Comunicación Oral y Escrita",
    "descripcion": "La asignatura Competencias Investigativas (Plan Propuesto 144 cr - Semestre 4) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Competencias Investigativas en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Competencias Investigativas para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Competencias Investigativas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Competencias Investigativas",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Competencias Investigativas en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Competencias Investigativas."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Competencias Investigativas",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Competencias Investigativas para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Competencias Investigativas."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Competencias Investigativas",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Competencias Investigativas.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Competencias Investigativas."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Competencias Investigativas",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Competencias Investigativas",
      "Unidad 3: Consolidación, Innovación y Sustentación en Competencias Investigativas"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Competencias Investigativas en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_20",
    "semestre": 4,
    "nombre": "Inglés III",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Inglés II",
    "descripcion": "La asignatura Inglés III (Plan Propuesto 144 cr - Semestre 4) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Inglés III en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Inglés III para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inglés III."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés III",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Inglés III en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés III."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés III",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Inglés III para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés III."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés III",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inglés III.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés III."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés III",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés III",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés III"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Inglés III en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_21",
    "semestre": 4,
    "nombre": "Investigación de Mercados",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Fundamentos de Mercadeo",
    "descripcion": "La asignatura Investigación de Mercados (Plan Propuesto 144 cr - Semestre 4) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Investigación de Mercados en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Investigación de Mercados para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Investigación de Mercados."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Mercados",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Investigación de Mercados en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Investigación de Mercados."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación de Mercados",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Investigación de Mercados para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Investigación de Mercados."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Investigación de Mercados",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Investigación de Mercados.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Investigación de Mercados."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Mercados",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación de Mercados",
      "Unidad 3: Consolidación, Innovación y Sustentación en Investigación de Mercados"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Investigación de Mercados en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_22",
    "semestre": 4,
    "nombre": "Matemática Financiera",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Cálculo Diferencial",
    "descripcion": "La asignatura Matemática Financiera (Plan Propuesto 144 cr - Semestre 4) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Matemática Financiera en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Matemática Financiera para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Matemática Financiera."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemática Financiera",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Matemática Financiera en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Matemática Financiera."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemática Financiera",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Matemática Financiera para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Matemática Financiera."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Matemática Financiera",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Matemática Financiera.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Matemática Financiera."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemática Financiera",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemática Financiera",
      "Unidad 3: Consolidación, Innovación y Sustentación en Matemática Financiera"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Matemática Financiera en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_23",
    "semestre": 4,
    "nombre": "Economía Colombiana e Internacional",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Macroeconomía",
    "descripcion": "La asignatura Economía Colombiana e Internacional (Plan Propuesto 144 cr - Semestre 4) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Economía Colombiana e Internacional en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Economía Colombiana e Internacional para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Economía Colombiana e Internacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Economía Colombiana e Internacional",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Economía Colombiana e Internacional en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Economía Colombiana e Internacional."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Economía Colombiana e Internacional",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Economía Colombiana e Internacional para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Economía Colombiana e Internacional."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Economía Colombiana e Internacional",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Economía Colombiana e Internacional.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Economía Colombiana e Internacional."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Economía Colombiana e Internacional",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Economía Colombiana e Internacional",
      "Unidad 3: Consolidación, Innovación y Sustentación en Economía Colombiana e Internacional"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Economía Colombiana e Internacional en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_24",
    "semestre": 4,
    "nombre": "Derecho Laboral y Seguridad Social",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Legislación Comercial",
    "descripcion": "La asignatura Derecho Laboral y Seguridad Social (Plan Propuesto 144 cr - Semestre 4) desarrolla competencias integradas en el componente de Legislación, Investigación y Habilidades (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Derecho Laboral y Seguridad Social en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Derecho Laboral y Seguridad Social para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Derecho Laboral y Seguridad Social."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Derecho Laboral y Seguridad Social",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Derecho Laboral y Seguridad Social en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Derecho Laboral y Seguridad Social."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Derecho Laboral y Seguridad Social",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Derecho Laboral y Seguridad Social para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Derecho Laboral y Seguridad Social."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Derecho Laboral y Seguridad Social",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Derecho Laboral y Seguridad Social.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Derecho Laboral y Seguridad Social."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Derecho Laboral y Seguridad Social",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Derecho Laboral y Seguridad Social",
      "Unidad 3: Consolidación, Innovación y Sustentación en Derecho Laboral y Seguridad Social"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Legislación, Investigación y Habilidades.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Derecho Laboral y Seguridad Social en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_25",
    "semestre": 5,
    "nombre": "Gerencia del Talento Humano",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Teoría Organizacional",
    "descripcion": "La asignatura Gerencia del Talento Humano (Plan Propuesto 144 cr - Semestre 5) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia del Talento Humano en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia del Talento Humano para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia del Talento Humano."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia del Talento Humano",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia del Talento Humano en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia del Talento Humano."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia del Talento Humano",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia del Talento Humano para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia del Talento Humano."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia del Talento Humano",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia del Talento Humano.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia del Talento Humano."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia del Talento Humano",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia del Talento Humano",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia del Talento Humano"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Gerencia del Talento Humano en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_26",
    "semestre": 5,
    "nombre": "Administración Financiera",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Análisis Financiero",
    "descripcion": "La asignatura Administración Financiera (Plan Propuesto 144 cr - Semestre 5) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Administración Financiera en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Administración Financiera para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Administración Financiera."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración Financiera",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Administración Financiera en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Administración Financiera."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Administración Financiera",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Administración Financiera para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Administración Financiera."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Administración Financiera",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Administración Financiera.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Administración Financiera."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración Financiera",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Administración Financiera",
      "Unidad 3: Consolidación, Innovación y Sustentación en Administración Financiera"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Administración Financiera en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_27",
    "semestre": 5,
    "nombre": "Gestión de Operaciones",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Procesos Administrativos",
    "descripcion": "La asignatura Gestión de Operaciones (Plan Propuesto 144 cr - Semestre 5) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Gestión de Operaciones en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Gestión de Operaciones para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gestión de Operaciones."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de Operaciones",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Gestión de Operaciones en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión de Operaciones."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de Operaciones",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Gestión de Operaciones para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión de Operaciones."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de Operaciones",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gestión de Operaciones.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión de Operaciones."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de Operaciones",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de Operaciones",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de Operaciones"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Gestión de Operaciones en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_28",
    "semestre": 5,
    "nombre": "Sistemas Integrados de Gestión (HSEQ)",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Procesos Administrativos",
    "descripcion": "La asignatura Sistemas Integrados de Gestión (HSEQ) (Plan Propuesto 144 cr - Semestre 5) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Sistemas Integrados de Gestión (HSEQ) en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Sistemas Integrados de Gestión (HSEQ) para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Sistemas Integrados de Gestión (HSEQ)."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Sistemas Integrados de Gestión (HSEQ)",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Sistemas Integrados de Gestión (HSEQ) en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Sistemas Integrados de Gestión (HSEQ)."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Sistemas Integrados de Gestión (HSEQ)",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Sistemas Integrados de Gestión (HSEQ) para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Sistemas Integrados de Gestión (HSEQ)."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Sistemas Integrados de Gestión (HSEQ)",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Sistemas Integrados de Gestión (HSEQ).",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Sistemas Integrados de Gestión (HSEQ)."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Sistemas Integrados de Gestión (HSEQ)",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Sistemas Integrados de Gestión (HSEQ)",
      "Unidad 3: Consolidación, Innovación y Sustentación en Sistemas Integrados de Gestión (HSEQ)"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Sistemas Integrados de Gestión (HSEQ) en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_29",
    "semestre": 5,
    "nombre": "Negocios y Gerencia Internacional",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Economía Colombiana e Internacional",
    "descripcion": "La asignatura Negocios y Gerencia Internacional (Plan Propuesto 144 cr - Semestre 5) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Negocios y Gerencia Internacional en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Negocios y Gerencia Internacional para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Negocios y Gerencia Internacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Negocios y Gerencia Internacional",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Negocios y Gerencia Internacional en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Negocios y Gerencia Internacional."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Negocios y Gerencia Internacional",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Negocios y Gerencia Internacional para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Negocios y Gerencia Internacional."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Negocios y Gerencia Internacional",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Negocios y Gerencia Internacional.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Negocios y Gerencia Internacional."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Negocios y Gerencia Internacional",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Negocios y Gerencia Internacional",
      "Unidad 3: Consolidación, Innovación y Sustentación en Negocios y Gerencia Internacional"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Negocios y Gerencia Internacional en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_30",
    "semestre": 5,
    "nombre": "Electiva Profesional I",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Electiva Profesional I (Plan Propuesto 144 cr - Semestre 5) desarrolla competencias integradas en el componente de Electivas Profesionales (Electiva).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Electiva Profesional I en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Electiva Profesional I para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Electiva Profesional I."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profesional I",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Electiva Profesional I en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Profesional I."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profesional I",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Electiva Profesional I para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Profesional I."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profesional I",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Electiva Profesional I.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Profesional I."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profesional I",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profesional I",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profesional I"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Electivas Profesionales.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Electiva Profesional I en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_31",
    "semestre": 6,
    "nombre": "Big Data y Analítica de Datos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Estadística Inferencial",
    "descripcion": "La asignatura Big Data y Analítica de Datos (Plan Propuesto 144 cr - Semestre 6) desarrolla competencias integradas en el componente de Ciencias Básicas y Cuantitativas (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Big Data y Analítica de Datos en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Big Data y Analítica de Datos para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Big Data y Analítica de Datos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Big Data y Analítica de Datos",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Big Data y Analítica de Datos en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Big Data y Analítica de Datos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Big Data y Analítica de Datos",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Big Data y Analítica de Datos para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Big Data y Analítica de Datos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Big Data y Analítica de Datos",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Big Data y Analítica de Datos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Big Data y Analítica de Datos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Big Data y Analítica de Datos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Big Data y Analítica de Datos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Big Data y Analítica de Datos"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Ciencias Básicas y Cuantitativas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Big Data y Analítica de Datos en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_32",
    "semestre": 6,
    "nombre": "Métodos Cualitativos y Cuantitativos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Competencias Investigativas",
    "descripcion": "La asignatura Métodos Cualitativos y Cuantitativos (Plan Propuesto 144 cr - Semestre 6) desarrolla competencias integradas en el componente de Ciencias Básicas y Cuantitativas (Transversal).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Métodos Cualitativos y Cuantitativos en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Métodos Cualitativos y Cuantitativos para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Métodos Cualitativos y Cuantitativos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Métodos Cualitativos y Cuantitativos",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Métodos Cualitativos y Cuantitativos en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Métodos Cualitativos y Cuantitativos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Métodos Cualitativos y Cuantitativos",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Métodos Cualitativos y Cuantitativos para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Métodos Cualitativos y Cuantitativos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Métodos Cualitativos y Cuantitativos",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Métodos Cualitativos y Cuantitativos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Métodos Cualitativos y Cuantitativos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Métodos Cualitativos y Cuantitativos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Métodos Cualitativos y Cuantitativos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Métodos Cualitativos y Cuantitativos"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Ciencias Básicas y Cuantitativas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Métodos Cualitativos y Cuantitativos en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_33",
    "semestre": 6,
    "nombre": "Gerencia de Marketing",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Investigación de Mercados",
    "descripcion": "La asignatura Gerencia de Marketing (Plan Propuesto 144 cr - Semestre 6) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de Marketing en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de Marketing para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de Marketing."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Marketing",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de Marketing en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de Marketing."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Marketing",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de Marketing para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de Marketing."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Marketing",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de Marketing.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de Marketing."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Marketing",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Marketing",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Marketing"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Gerencia de Marketing en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_34",
    "semestre": 6,
    "nombre": "Legislación Tributaria",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Derecho Laboral y Seguridad Social",
    "descripcion": "La asignatura Legislación Tributaria (Plan Propuesto 144 cr - Semestre 6) desarrolla competencias integradas en el componente de Economía y Finanzas (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Legislación Tributaria en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Legislación Tributaria para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Legislación Tributaria."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Tributaria",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Legislación Tributaria en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Legislación Tributaria."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Tributaria",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Legislación Tributaria para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Legislación Tributaria."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Tributaria",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Legislación Tributaria.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Legislación Tributaria."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Tributaria",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Tributaria",
      "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Tributaria"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Economía y Finanzas.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Legislación Tributaria en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_35",
    "semestre": 6,
    "nombre": "Modelos de Emprendimiento",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Modelos de Emprendimiento (Plan Propuesto 144 cr - Semestre 6) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Modelos de Emprendimiento en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Modelos de Emprendimiento para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Modelos de Emprendimiento."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Modelos de Emprendimiento",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Modelos de Emprendimiento en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Modelos de Emprendimiento."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Modelos de Emprendimiento",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Modelos de Emprendimiento para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Modelos de Emprendimiento."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Modelos de Emprendimiento",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Modelos de Emprendimiento.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Modelos de Emprendimiento."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Modelos de Emprendimiento",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Modelos de Emprendimiento",
      "Unidad 3: Consolidación, Innovación y Sustentación en Modelos de Emprendimiento"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Modelos de Emprendimiento en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_36",
    "semestre": 6,
    "nombre": "Electiva Profesional II",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Electiva Profesional I",
    "descripcion": "La asignatura Electiva Profesional II (Plan Propuesto 144 cr - Semestre 6) desarrolla competencias integradas en el componente de Electivas Profesionales (Electiva).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Electiva Profesional II en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Electiva Profesional II para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Electiva Profesional II."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profesional II",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Electiva Profesional II en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Profesional II."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profesional II",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Electiva Profesional II para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Profesional II."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profesional II",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Electiva Profesional II.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Profesional II."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profesional II",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profesional II",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profesional II"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Electivas Profesionales.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Electiva Profesional II en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_37",
    "semestre": 7,
    "nombre": "Pensamiento Estratégico y Prospectivo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Gerencia del Talento Humano",
    "descripcion": "La asignatura Pensamiento Estratégico y Prospectivo (Plan Propuesto 144 cr - Semestre 7) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Pensamiento Estratégico y Prospectivo en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Pensamiento Estratégico y Prospectivo para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Pensamiento Estratégico y Prospectivo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Pensamiento Estratégico y Prospectivo",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Pensamiento Estratégico y Prospectivo en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Pensamiento Estratégico y Prospectivo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Pensamiento Estratégico y Prospectivo",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Pensamiento Estratégico y Prospectivo para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Pensamiento Estratégico y Prospectivo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Pensamiento Estratégico y Prospectivo",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Pensamiento Estratégico y Prospectivo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Pensamiento Estratégico y Prospectivo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Pensamiento Estratégico y Prospectivo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Pensamiento Estratégico y Prospectivo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Pensamiento Estratégico y Prospectivo"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Pensamiento Estratégico y Prospectivo en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_38",
    "semestre": 7,
    "nombre": "Formulación y Evaluación de Proyectos",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Administración Financiera",
    "descripcion": "La asignatura Formulación y Evaluación de Proyectos (Plan Propuesto 144 cr - Semestre 7) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Formulación y Evaluación de Proyectos en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Formulación y Evaluación de Proyectos para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Formulación y Evaluación de Proyectos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Formulación y Evaluación de Proyectos",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Formulación y Evaluación de Proyectos en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Formulación y Evaluación de Proyectos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Formulación y Evaluación de Proyectos",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Formulación y Evaluación de Proyectos para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Formulación y Evaluación de Proyectos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Formulación y Evaluación de Proyectos",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Formulación y Evaluación de Proyectos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Formulación y Evaluación de Proyectos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Formulación y Evaluación de Proyectos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Formulación y Evaluación de Proyectos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Formulación y Evaluación de Proyectos"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Formulación y Evaluación de Proyectos en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_39",
    "semestre": 7,
    "nombre": "Gerencia de Ventas y Canales de Distribución",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Gerencia de Marketing",
    "descripcion": "La asignatura Gerencia de Ventas y Canales de Distribución (Plan Propuesto 144 cr - Semestre 7) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de Ventas y Canales de Distribución en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de Ventas y Canales de Distribución para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de Ventas y Canales de Distribución."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Ventas y Canales de Distribución",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de Ventas y Canales de Distribución en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de Ventas y Canales de Distribución."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Ventas y Canales de Distribución",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de Ventas y Canales de Distribución para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de Ventas y Canales de Distribución."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Ventas y Canales de Distribución",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de Ventas y Canales de Distribución.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de Ventas y Canales de Distribución."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Ventas y Canales de Distribución",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Ventas y Canales de Distribución",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Ventas y Canales de Distribución"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Gerencia de Ventas y Canales de Distribución en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_40",
    "semestre": 7,
    "nombre": "Gerencia de Producción",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Gestión de Operaciones",
    "descripcion": "La asignatura Gerencia de Producción (Plan Propuesto 144 cr - Semestre 7) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de Producción en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de Producción para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de Producción."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Producción",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de Producción en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de Producción."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Producción",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de Producción para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de Producción."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Producción",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de Producción.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de Producción."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Producción",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Producción",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Producción"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Gerencia de Producción en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_41",
    "semestre": 7,
    "nombre": "E-Commerce",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Gerencia de Marketing",
    "descripcion": "La asignatura E-Commerce (Plan Propuesto 144 cr - Semestre 7) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de E-Commerce en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de E-Commerce para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en E-Commerce."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de E-Commerce",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de E-Commerce en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre E-Commerce."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de E-Commerce",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de E-Commerce para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de E-Commerce."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en E-Commerce",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en E-Commerce.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de E-Commerce."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de E-Commerce",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de E-Commerce",
      "Unidad 3: Consolidación, Innovación y Sustentación en E-Commerce"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de E-Commerce en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_42",
    "semestre": 7,
    "nombre": "Electiva Profesional III",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Electiva Profesional II",
    "descripcion": "La asignatura Electiva Profesional III (Plan Propuesto 144 cr - Semestre 7) desarrolla competencias integradas en el componente de Electivas Profesionales (Electiva).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Electiva Profesional III en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Electiva Profesional III para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Electiva Profesional III."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profesional III",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Electiva Profesional III en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Profesional III."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profesional III",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Electiva Profesional III para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Profesional III."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profesional III",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Electiva Profesional III.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Profesional III."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profesional III",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profesional III",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profesional III"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Electivas Profesionales.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Electiva Profesional III en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_43",
    "semestre": 8,
    "nombre": "Inteligencia Artificial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Big Data y Analítica de Datos",
    "descripcion": "La asignatura Inteligencia Artificial (Plan Propuesto 144 cr - Semestre 8) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Inteligencia Artificial en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Inteligencia Artificial para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inteligencia Artificial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inteligencia Artificial",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Inteligencia Artificial en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inteligencia Artificial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inteligencia Artificial",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Inteligencia Artificial para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inteligencia Artificial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inteligencia Artificial",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Inteligencia Artificial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inteligencia Artificial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inteligencia Artificial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inteligencia Artificial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inteligencia Artificial"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Inteligencia Artificial en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_44",
    "semestre": 8,
    "nombre": "Laboratorio de Innovación y Emprendimiento",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Modelos de Emprendimiento",
    "descripcion": "La asignatura Laboratorio de Innovación y Emprendimiento (Plan Propuesto 144 cr - Semestre 8) desarrolla competencias integradas en el componente de Mercadeo, Tecnología y Emprendimiento (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Laboratorio de Innovación y Emprendimiento en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Laboratorio de Innovación y Emprendimiento para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Laboratorio de Innovación y Emprendimiento."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Laboratorio de Innovación y Emprendimiento",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Laboratorio de Innovación y Emprendimiento en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Laboratorio de Innovación y Emprendimiento."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Laboratorio de Innovación y Emprendimiento",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Laboratorio de Innovación y Emprendimiento para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Laboratorio de Innovación y Emprendimiento."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Laboratorio de Innovación y Emprendimiento",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Laboratorio de Innovación y Emprendimiento.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Laboratorio de Innovación y Emprendimiento."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Laboratorio de Innovación y Emprendimiento",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Laboratorio de Innovación y Emprendimiento",
      "Unidad 3: Consolidación, Innovación y Sustentación en Laboratorio de Innovación y Emprendimiento"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Mercadeo, Tecnología y Emprendimiento.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Laboratorio de Innovación y Emprendimiento en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_45",
    "semestre": 8,
    "nombre": "Juego Gerencial (Simulación de Negocios)",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Pensamiento Estratégico y Prospectivo",
    "descripcion": "La asignatura Juego Gerencial (Simulación de Negocios) (Plan Propuesto 144 cr - Semestre 8) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Juego Gerencial (Simulación de Negocios) en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Juego Gerencial (Simulación de Negocios) para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Juego Gerencial (Simulación de Negocios)."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Juego Gerencial (Simulación de Negocios)",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Juego Gerencial (Simulación de Negocios) en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Juego Gerencial (Simulación de Negocios)."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Juego Gerencial (Simulación de Negocios)",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Juego Gerencial (Simulación de Negocios) para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Juego Gerencial (Simulación de Negocios)."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Juego Gerencial (Simulación de Negocios)",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Juego Gerencial (Simulación de Negocios).",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Juego Gerencial (Simulación de Negocios)."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Juego Gerencial (Simulación de Negocios)",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Juego Gerencial (Simulación de Negocios)",
      "Unidad 3: Consolidación, Innovación y Sustentación en Juego Gerencial (Simulación de Negocios)"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Juego Gerencial (Simulación de Negocios) en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_46",
    "semestre": 8,
    "nombre": "Habilidades Gerenciales y Liderazgo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Gerencia del Talento Humano",
    "descripcion": "La asignatura Habilidades Gerenciales y Liderazgo (Plan Propuesto 144 cr - Semestre 8) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Habilidades Gerenciales y Liderazgo en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Habilidades Gerenciales y Liderazgo para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Habilidades Gerenciales y Liderazgo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Habilidades Gerenciales y Liderazgo",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Habilidades Gerenciales y Liderazgo en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Habilidades Gerenciales y Liderazgo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Habilidades Gerenciales y Liderazgo",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Habilidades Gerenciales y Liderazgo para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Habilidades Gerenciales y Liderazgo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Habilidades Gerenciales y Liderazgo",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Habilidades Gerenciales y Liderazgo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Habilidades Gerenciales y Liderazgo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Habilidades Gerenciales y Liderazgo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Habilidades Gerenciales y Liderazgo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Habilidades Gerenciales y Liderazgo"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Habilidades Gerenciales y Liderazgo en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_47",
    "semestre": 8,
    "nombre": "Gerencia de la Calidad",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Sistemas Integrados de Gestión (HSEQ)",
    "descripcion": "La asignatura Gerencia de la Calidad (Plan Propuesto 144 cr - Semestre 8) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de la Calidad en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de la Calidad para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de la Calidad."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de la Calidad",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Gerencia de la Calidad en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de la Calidad."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de la Calidad",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Gerencia de la Calidad para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de la Calidad."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de la Calidad",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Gerencia de la Calidad.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de la Calidad."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de la Calidad",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de la Calidad",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de la Calidad"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Gerencia de la Calidad en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "prop_48",
    "semestre": 8,
    "nombre": "Proyecto de Grado",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Métodos Cualitativos y Cuantitativos",
    "descripcion": "La asignatura Proyecto de Grado (Plan Propuesto 144 cr - Semestre 8) desarrolla competencias integradas en el componente de Administración y Gestión (Disciplinar).",
    "ras": [
      "RA1: Explica y contextualiza los fundamentos y modelos contemporáneos de Proyecto de Grado en entornos empresariales cambiantes.",
      "RA2: Aplica metodologías, tecnologías e instrumentos analíticos de Proyecto de Grado para optimizar la toma de decisiones gerenciales.",
      "RA3: Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Proyecto de Grado."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado",
        "ra": "Explica y contextualiza los fundamentos y modelos contemporáneos de Proyecto de Grado en entornos empresariales cambiantes.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Proyecto de Grado."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto de Grado",
        "ra": "Aplica metodologías, tecnologías e instrumentos analíticos de Proyecto de Grado para optimizar la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Proyecto de Grado."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto de Grado",
        "ra": "Diseña y sustenta propuestas estratégicas orientadas a la innovación, la sostenibilidad y la competitividad en Proyecto de Grado.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Proyecto de Grado."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto de Grado",
      "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto de Grado"
    ],
    "perfil_asociado": "Competencia profesional del egresado asociada a Administración y Gestión.",
    "rap_asociado": "RAP del programa propuesto: Aplica herramientas y principios de Proyecto de Grado en organizaciones sostenibles.",
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  }
];

window.C3_VIGENTE_SUBJECTS = [
  {
    "id": "vig_1",
    "semestre": 1,
    "nombre": "Matemáticas Básicas",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Matemáticas Básicas (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Matemáticas Básicas en las empresas.",
      "RA2: Utiliza herramientas técnicas de Matemáticas Básicas para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Matemáticas Básicas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemáticas Básicas",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Matemáticas Básicas en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Matemáticas Básicas."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemáticas Básicas",
        "ra": "Utiliza herramientas técnicas de Matemáticas Básicas para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Matemáticas Básicas."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Matemáticas Básicas",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Matemáticas Básicas.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Matemáticas Básicas."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemáticas Básicas",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemáticas Básicas",
      "Unidad 3: Consolidación, Innovación y Sustentación en Matemáticas Básicas"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_2",
    "semestre": 1,
    "nombre": "Constitución y Democracia",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Constitución y Democracia (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Constitución y Democracia en las empresas.",
      "RA2: Utiliza herramientas técnicas de Constitución y Democracia para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Constitución y Democracia."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Constitución y Democracia",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Constitución y Democracia en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Constitución y Democracia."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Constitución y Democracia",
        "ra": "Utiliza herramientas técnicas de Constitución y Democracia para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Constitución y Democracia."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Constitución y Democracia",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Constitución y Democracia.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Constitución y Democracia."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Constitución y Democracia",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Constitución y Democracia",
      "Unidad 3: Consolidación, Innovación y Sustentación en Constitución y Democracia"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_3",
    "semestre": 1,
    "nombre": "Expresión Oral y Escrita",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Expresión Oral y Escrita (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Expresión Oral y Escrita en las empresas.",
      "RA2: Utiliza herramientas técnicas de Expresión Oral y Escrita para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Expresión Oral y Escrita."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Expresión Oral y Escrita",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Expresión Oral y Escrita en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Expresión Oral y Escrita."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Expresión Oral y Escrita",
        "ra": "Utiliza herramientas técnicas de Expresión Oral y Escrita para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Expresión Oral y Escrita."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Expresión Oral y Escrita",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Expresión Oral y Escrita.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Expresión Oral y Escrita."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Expresión Oral y Escrita",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Expresión Oral y Escrita",
      "Unidad 3: Consolidación, Innovación y Sustentación en Expresión Oral y Escrita"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_4",
    "semestre": 1,
    "nombre": "Inglés I",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Inglés I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés I."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés I",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Inglés I en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés I."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés I",
        "ra": "Utiliza herramientas técnicas de Inglés I para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés I."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés I",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Inglés I.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés I."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés I",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés I",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés I"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_5",
    "semestre": 1,
    "nombre": "Fundamentos de Administración",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos de Administración (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Administración en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Administración para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Administración."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Administración en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Administración."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración",
        "ra": "Utiliza herramientas técnicas de Fundamentos de Administración para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Administración."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Administración.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Administración."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_6",
    "semestre": 1,
    "nombre": "Fundamentos Contables",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos Contables (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos Contables en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos Contables para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos Contables."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos Contables",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Fundamentos Contables en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos Contables."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos Contables",
        "ra": "Utiliza herramientas técnicas de Fundamentos Contables para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos Contables."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos Contables",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos Contables.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos Contables."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos Contables",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos Contables",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos Contables"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_7",
    "semestre": 1,
    "nombre": "Fundamentos de Economía",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos de Economía (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Economía en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Economía para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Economía."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Economía",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Economía en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Economía."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Economía",
        "ra": "Utiliza herramientas técnicas de Fundamentos de Economía para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Economía."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Economía",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Economía.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Economía."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Economía",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Economía",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Economía"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_8",
    "semestre": 2,
    "nombre": "Cálculo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Matemáticas Básicas",
    "descripcion": "La asignatura Cálculo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Cálculo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Cálculo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Cálculo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cálculo",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Cálculo en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Cálculo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cálculo",
        "ra": "Utiliza herramientas técnicas de Cálculo para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Cálculo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Cálculo",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Cálculo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Cálculo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Cálculo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cálculo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Cálculo"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_9",
    "semestre": 2,
    "nombre": "Legislación Laboral",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Legislación Laboral (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Legislación Laboral en las empresas.",
      "RA2: Utiliza herramientas técnicas de Legislación Laboral para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Laboral."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Laboral",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Legislación Laboral en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Legislación Laboral."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Laboral",
        "ra": "Utiliza herramientas técnicas de Legislación Laboral para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Legislación Laboral."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Laboral",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Laboral.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Legislación Laboral."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Laboral",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Laboral",
      "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Laboral"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_10",
    "semestre": 2,
    "nombre": "Teoría Organizacional",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Fundamentos de Administración",
    "descripcion": "La asignatura Teoría Organizacional (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Teoría Organizacional en las empresas.",
      "RA2: Utiliza herramientas técnicas de Teoría Organizacional para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Teoría Organizacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Teoría Organizacional",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Teoría Organizacional en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Teoría Organizacional."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Teoría Organizacional",
        "ra": "Utiliza herramientas técnicas de Teoría Organizacional para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Teoría Organizacional."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Teoría Organizacional",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Teoría Organizacional.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Teoría Organizacional."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Teoría Organizacional",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Teoría Organizacional",
      "Unidad 3: Consolidación, Innovación y Sustentación en Teoría Organizacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_11",
    "semestre": 2,
    "nombre": "Costos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Fundamentos Contables",
    "descripcion": "La asignatura Costos (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Costos en las empresas.",
      "RA2: Utiliza herramientas técnicas de Costos para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Costos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Costos",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Costos en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Costos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Costos",
        "ra": "Utiliza herramientas técnicas de Costos para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Costos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Costos",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Costos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Costos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Costos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Costos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Costos"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_12",
    "semestre": 2,
    "nombre": "Metodología de la Investigación",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Metodología de la Investigación (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Metodología de la Investigación en las empresas.",
      "RA2: Utiliza herramientas técnicas de Metodología de la Investigación para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Metodología de la Investigación."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Metodología de la Investigación",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Metodología de la Investigación en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Metodología de la Investigación."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Metodología de la Investigación",
        "ra": "Utiliza herramientas técnicas de Metodología de la Investigación para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Metodología de la Investigación."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Metodología de la Investigación",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Metodología de la Investigación.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Metodología de la Investigación."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Metodología de la Investigación",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Metodología de la Investigación",
      "Unidad 3: Consolidación, Innovación y Sustentación en Metodología de la Investigación"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_13",
    "semestre": 2,
    "nombre": "Microeconomía",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Fundamentos de Economía",
    "descripcion": "La asignatura Microeconomía (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Microeconomía en las empresas.",
      "RA2: Utiliza herramientas técnicas de Microeconomía para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Microeconomía."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Microeconomía",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Microeconomía en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Microeconomía."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Microeconomía",
        "ra": "Utiliza herramientas técnicas de Microeconomía para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Microeconomía."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Microeconomía",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Microeconomía.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Microeconomía."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Microeconomía",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Microeconomía",
      "Unidad 3: Consolidación, Innovación y Sustentación en Microeconomía"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_14",
    "semestre": 2,
    "nombre": "Inglés II",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Inglés I",
    "descripcion": "La asignatura Inglés II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés II."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés II",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Inglés II en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés II."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés II",
        "ra": "Utiliza herramientas técnicas de Inglés II para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés II."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés II",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Inglés II.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés II."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés II",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés II",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés II"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_15",
    "semestre": 3,
    "nombre": "Estadística Descriptiva",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Cálculo",
    "descripcion": "La asignatura Estadística Descriptiva (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Estadística Descriptiva en las empresas.",
      "RA2: Utiliza herramientas técnicas de Estadística Descriptiva para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Estadística Descriptiva."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Descriptiva",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Estadística Descriptiva en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Estadística Descriptiva."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Descriptiva",
        "ra": "Utiliza herramientas técnicas de Estadística Descriptiva para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Estadística Descriptiva."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Descriptiva",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Estadística Descriptiva.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Estadística Descriptiva."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Descriptiva",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Descriptiva",
      "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Descriptiva"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_16",
    "semestre": 3,
    "nombre": "Derecho Administrativo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Constitución y Democracia",
    "descripcion": "La asignatura Derecho Administrativo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Derecho Administrativo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Derecho Administrativo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Derecho Administrativo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Derecho Administrativo",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Derecho Administrativo en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Derecho Administrativo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Derecho Administrativo",
        "ra": "Utiliza herramientas técnicas de Derecho Administrativo para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Derecho Administrativo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Derecho Administrativo",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Derecho Administrativo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Derecho Administrativo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Derecho Administrativo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Derecho Administrativo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Derecho Administrativo"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_17",
    "semestre": 3,
    "nombre": "Administración por Procesos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Teoría Organizacional",
    "descripcion": "La asignatura Administración por Procesos (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Administración por Procesos en las empresas.",
      "RA2: Utiliza herramientas técnicas de Administración por Procesos para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Administración por Procesos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración por Procesos",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Administración por Procesos en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Administración por Procesos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Administración por Procesos",
        "ra": "Utiliza herramientas técnicas de Administración por Procesos para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Administración por Procesos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Administración por Procesos",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Administración por Procesos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Administración por Procesos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración por Procesos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Administración por Procesos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Administración por Procesos"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_18",
    "semestre": 3,
    "nombre": "Electiva Profundización I",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Área de Formación Electiva",
    "componente_id": "area_electiva",
    "componente_nombre": "Área de Formación Electiva",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Electiva Profundización I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Profundización I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización I."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profundización I",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización I en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Profundización I."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profundización I",
        "ra": "Utiliza herramientas técnicas de Electiva Profundización I para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Profundización I."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profundización I",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización I.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Profundización I."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profundización I",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profundización I",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profundización I"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_19",
    "semestre": 3,
    "nombre": "Cultura Emprendedora",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Cultura Emprendedora (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Cultura Emprendedora en las empresas.",
      "RA2: Utiliza herramientas técnicas de Cultura Emprendedora para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Cultura Emprendedora."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cultura Emprendedora",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Cultura Emprendedora en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Cultura Emprendedora."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cultura Emprendedora",
        "ra": "Utiliza herramientas técnicas de Cultura Emprendedora para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Cultura Emprendedora."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Cultura Emprendedora",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Cultura Emprendedora.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Cultura Emprendedora."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Cultura Emprendedora",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cultura Emprendedora",
      "Unidad 3: Consolidación, Innovación y Sustentación en Cultura Emprendedora"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_20",
    "semestre": 3,
    "nombre": "Macroeconomía",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Microeconomía",
    "descripcion": "La asignatura Macroeconomía (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Macroeconomía en las empresas.",
      "RA2: Utiliza herramientas técnicas de Macroeconomía para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Macroeconomía."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Macroeconomía",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Macroeconomía en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Macroeconomía."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Macroeconomía",
        "ra": "Utiliza herramientas técnicas de Macroeconomía para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Macroeconomía."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Macroeconomía",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Macroeconomía.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Macroeconomía."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Macroeconomía",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Macroeconomía",
      "Unidad 3: Consolidación, Innovación y Sustentación en Macroeconomía"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_21",
    "semestre": 3,
    "nombre": "Inglés III",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Inglés II",
    "descripcion": "La asignatura Inglés III (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés III en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés III para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés III."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés III",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Inglés III en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés III."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés III",
        "ra": "Utiliza herramientas técnicas de Inglés III para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés III."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés III",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Inglés III.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés III."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés III",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés III",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés III"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_22",
    "semestre": 4,
    "nombre": "Estadística Inferencial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Estadística Descriptiva",
    "descripcion": "La asignatura Estadística Inferencial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Estadística Inferencial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Estadística Inferencial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Estadística Inferencial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Inferencial",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Estadística Inferencial en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Estadística Inferencial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Inferencial",
        "ra": "Utiliza herramientas técnicas de Estadística Inferencial para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Estadística Inferencial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Inferencial",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Estadística Inferencial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Estadística Inferencial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Inferencial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estadística Inferencial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Estadística Inferencial"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_23",
    "semestre": 4,
    "nombre": "Legislación Tributaria",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Legislación Tributaria (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Legislación Tributaria en las empresas.",
      "RA2: Utiliza herramientas técnicas de Legislación Tributaria para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Tributaria."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Tributaria",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Legislación Tributaria en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Legislación Tributaria."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Tributaria",
        "ra": "Utiliza herramientas técnicas de Legislación Tributaria para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Legislación Tributaria."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Tributaria",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Tributaria.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Legislación Tributaria."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Tributaria",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Tributaria",
      "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Tributaria"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_24",
    "semestre": 4,
    "nombre": "Electiva Humanística I",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Área de Formación Electiva",
    "componente_id": "area_electiva",
    "componente_nombre": "Área de Formación Electiva",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Electiva Humanística I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Humanística I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Humanística I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Humanística I."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Humanística I",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Electiva Humanística I en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Humanística I."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Humanística I",
        "ra": "Utiliza herramientas técnicas de Electiva Humanística I para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Humanística I."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Humanística I",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Humanística I.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Humanística I."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Humanística I",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Humanística I",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Humanística I"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_25",
    "semestre": 4,
    "nombre": "Liderazgo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Liderazgo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Liderazgo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Liderazgo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Liderazgo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Liderazgo",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Liderazgo en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Liderazgo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Liderazgo",
        "ra": "Utiliza herramientas técnicas de Liderazgo para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Liderazgo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Liderazgo",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Liderazgo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Liderazgo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Liderazgo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Liderazgo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Liderazgo"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_26",
    "semestre": 4,
    "nombre": "Creatividad e Innovación",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Cultura Emprendedora",
    "descripcion": "La asignatura Creatividad e Innovación (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Creatividad e Innovación en las empresas.",
      "RA2: Utiliza herramientas técnicas de Creatividad e Innovación para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Creatividad e Innovación."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Creatividad e Innovación",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Creatividad e Innovación en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Creatividad e Innovación."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Creatividad e Innovación",
        "ra": "Utiliza herramientas técnicas de Creatividad e Innovación para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Creatividad e Innovación."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Creatividad e Innovación",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Creatividad e Innovación.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Creatividad e Innovación."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Creatividad e Innovación",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Creatividad e Innovación",
      "Unidad 3: Consolidación, Innovación y Sustentación en Creatividad e Innovación"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_27",
    "semestre": 4,
    "nombre": "Entorno Económico Colombiano e Internacional",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Macroeconomía",
    "descripcion": "La asignatura Entorno Económico Colombiano e Internacional (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Entorno Económico Colombiano e Internacional en las empresas.",
      "RA2: Utiliza herramientas técnicas de Entorno Económico Colombiano e Internacional para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Entorno Económico Colombiano e Internacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Entorno Económico Colombiano e Internacional",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Entorno Económico Colombiano e Internacional en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Entorno Económico Colombiano e Internacional."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Entorno Económico Colombiano e Internacional",
        "ra": "Utiliza herramientas técnicas de Entorno Económico Colombiano e Internacional para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Entorno Económico Colombiano e Internacional."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Entorno Económico Colombiano e Internacional",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Entorno Económico Colombiano e Internacional.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Entorno Económico Colombiano e Internacional."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Entorno Económico Colombiano e Internacional",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Entorno Económico Colombiano e Internacional",
      "Unidad 3: Consolidación, Innovación y Sustentación en Entorno Económico Colombiano e Internacional"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_28",
    "semestre": 4,
    "nombre": "Inglés IV",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Inglés III",
    "descripcion": "La asignatura Inglés IV (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés IV en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés IV para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés IV."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés IV",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Inglés IV en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés IV."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés IV",
        "ra": "Utiliza herramientas técnicas de Inglés IV para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés IV."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés IV",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Inglés IV.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés IV."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés IV",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés IV",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés IV"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_29",
    "semestre": 5,
    "nombre": "Matemática Financiera",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Costos",
    "descripcion": "La asignatura Matemática Financiera (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Matemática Financiera en las empresas.",
      "RA2: Utiliza herramientas técnicas de Matemática Financiera para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Matemática Financiera."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemática Financiera",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Matemática Financiera en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Matemática Financiera."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemática Financiera",
        "ra": "Utiliza herramientas técnicas de Matemática Financiera para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Matemática Financiera."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Matemática Financiera",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Matemática Financiera.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Matemática Financiera."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemática Financiera",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemática Financiera",
      "Unidad 3: Consolidación, Innovación y Sustentación en Matemática Financiera"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_30",
    "semestre": 5,
    "nombre": "Investigación de Operaciones",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Estadística Inferencial",
    "descripcion": "La asignatura Investigación de Operaciones (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Investigación de Operaciones en las empresas.",
      "RA2: Utiliza herramientas técnicas de Investigación de Operaciones para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Investigación de Operaciones."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Operaciones",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Investigación de Operaciones en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Investigación de Operaciones."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación de Operaciones",
        "ra": "Utiliza herramientas técnicas de Investigación de Operaciones para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Investigación de Operaciones."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Investigación de Operaciones",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Investigación de Operaciones.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Investigación de Operaciones."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Operaciones",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación de Operaciones",
      "Unidad 3: Consolidación, Innovación y Sustentación en Investigación de Operaciones"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_31",
    "semestre": 5,
    "nombre": "Fundamentos de Mercadeo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Fundamentos de Mercadeo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Mercadeo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Mercadeo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Mercadeo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Mercadeo",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Mercadeo en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Mercadeo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Mercadeo",
        "ra": "Utiliza herramientas técnicas de Fundamentos de Mercadeo para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Mercadeo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Mercadeo",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Mercadeo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Mercadeo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Mercadeo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Mercadeo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Mercadeo"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_32",
    "semestre": 5,
    "nombre": "Modelos de Desarrollo Económico",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Entorno Económico Colombiano e Internacional",
    "descripcion": "La asignatura Modelos de Desarrollo Económico (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Modelos de Desarrollo Económico en las empresas.",
      "RA2: Utiliza herramientas técnicas de Modelos de Desarrollo Económico para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Modelos de Desarrollo Económico."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Modelos de Desarrollo Económico",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Modelos de Desarrollo Económico en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Modelos de Desarrollo Económico."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Modelos de Desarrollo Económico",
        "ra": "Utiliza herramientas técnicas de Modelos de Desarrollo Económico para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Modelos de Desarrollo Económico."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Modelos de Desarrollo Económico",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Modelos de Desarrollo Económico.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Modelos de Desarrollo Económico."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Modelos de Desarrollo Económico",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Modelos de Desarrollo Económico",
      "Unidad 3: Consolidación, Innovación y Sustentación en Modelos de Desarrollo Económico"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_33",
    "semestre": 5,
    "nombre": "Administración de Salarios",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Legislación Laboral",
    "descripcion": "La asignatura Administración de Salarios (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Administración de Salarios en las empresas.",
      "RA2: Utiliza herramientas técnicas de Administración de Salarios para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Administración de Salarios."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración de Salarios",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Administración de Salarios en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Administración de Salarios."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Administración de Salarios",
        "ra": "Utiliza herramientas técnicas de Administración de Salarios para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Administración de Salarios."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Administración de Salarios",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Administración de Salarios.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Administración de Salarios."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración de Salarios",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Administración de Salarios",
      "Unidad 3: Consolidación, Innovación y Sustentación en Administración de Salarios"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_34",
    "semestre": 5,
    "nombre": "Electiva Profundización II",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Área de Formación Electiva",
    "componente_id": "area_electiva",
    "componente_nombre": "Área de Formación Electiva",
    "prerrequisito": "Electiva Profundización I",
    "descripcion": "La asignatura Electiva Profundización II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Profundización II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización II."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profundización II",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización II en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Profundización II."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profundización II",
        "ra": "Utiliza herramientas técnicas de Electiva Profundización II para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Profundización II."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profundización II",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización II.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Profundización II."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profundización II",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profundización II",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profundización II"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_35",
    "semestre": 5,
    "nombre": "Inglés V",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Inglés IV",
    "descripcion": "La asignatura Inglés V (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés V en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés V para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés V."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés V",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Inglés V en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés V."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés V",
        "ra": "Utiliza herramientas técnicas de Inglés V para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés V."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés V",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Inglés V.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés V."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés V",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés V",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés V"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_36",
    "semestre": 6,
    "nombre": "Legislación Comercial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Legislación Comercial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Legislación Comercial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Legislación Comercial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Comercial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Comercial",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Legislación Comercial en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Legislación Comercial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Comercial",
        "ra": "Utiliza herramientas técnicas de Legislación Comercial para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Legislación Comercial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Comercial",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Comercial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Legislación Comercial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Comercial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Legislación Comercial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Legislación Comercial"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_37",
    "semestre": 6,
    "nombre": "Gerencia de Mercadeo",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Fundamentos de Mercadeo",
    "descripcion": "La asignatura Gerencia de Mercadeo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia de Mercadeo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia de Mercadeo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Mercadeo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Mercadeo",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gerencia de Mercadeo en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de Mercadeo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Mercadeo",
        "ra": "Utiliza herramientas técnicas de Gerencia de Mercadeo para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de Mercadeo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Mercadeo",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Mercadeo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de Mercadeo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Mercadeo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Mercadeo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Mercadeo"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_38",
    "semestre": 6,
    "nombre": "E-Commerce",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Fundamentos de Mercadeo",
    "descripcion": "La asignatura E-Commerce (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de E-Commerce en las empresas.",
      "RA2: Utiliza herramientas técnicas de E-Commerce para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de E-Commerce."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de E-Commerce",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de E-Commerce en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre E-Commerce."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de E-Commerce",
        "ra": "Utiliza herramientas técnicas de E-Commerce para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de E-Commerce."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en E-Commerce",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de E-Commerce.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de E-Commerce."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de E-Commerce",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de E-Commerce",
      "Unidad 3: Consolidación, Innovación y Sustentación en E-Commerce"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_39",
    "semestre": 6,
    "nombre": "Tecnología e Innovación",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Creatividad e Innovación",
    "descripcion": "La asignatura Tecnología e Innovación (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Tecnología e Innovación en las empresas.",
      "RA2: Utiliza herramientas técnicas de Tecnología e Innovación para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Tecnología e Innovación."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Tecnología e Innovación",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Tecnología e Innovación en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Tecnología e Innovación."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Tecnología e Innovación",
        "ra": "Utiliza herramientas técnicas de Tecnología e Innovación para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Tecnología e Innovación."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Tecnología e Innovación",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Tecnología e Innovación.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Tecnología e Innovación."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Tecnología e Innovación",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Tecnología e Innovación",
      "Unidad 3: Consolidación, Innovación y Sustentación en Tecnología e Innovación"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_40",
    "semestre": 6,
    "nombre": "Métodos Cuantitativos y Cualitativos",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Estadística Inferencial",
    "descripcion": "La asignatura Métodos Cuantitativos y Cualitativos (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Métodos Cuantitativos y Cualitativos en las empresas.",
      "RA2: Utiliza herramientas técnicas de Métodos Cuantitativos y Cualitativos para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Métodos Cuantitativos y Cualitativos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Métodos Cuantitativos y Cualitativos",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Métodos Cuantitativos y Cualitativos en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Métodos Cuantitativos y Cualitativos."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Métodos Cuantitativos y Cualitativos",
        "ra": "Utiliza herramientas técnicas de Métodos Cuantitativos y Cualitativos para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Métodos Cuantitativos y Cualitativos."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Métodos Cuantitativos y Cualitativos",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Métodos Cuantitativos y Cualitativos.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Métodos Cuantitativos y Cualitativos."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Métodos Cuantitativos y Cualitativos",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Métodos Cuantitativos y Cualitativos",
      "Unidad 3: Consolidación, Innovación y Sustentación en Métodos Cuantitativos y Cualitativos"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_41",
    "semestre": 6,
    "nombre": "Electiva Humanística II",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Área de Formación Electiva",
    "componente_id": "area_electiva",
    "componente_nombre": "Área de Formación Electiva",
    "prerrequisito": "Electiva Humanística I",
    "descripcion": "La asignatura Electiva Humanística II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Humanística II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Humanística II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Humanística II."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Humanística II",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Electiva Humanística II en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Humanística II."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Humanística II",
        "ra": "Utiliza herramientas técnicas de Electiva Humanística II para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Humanística II."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Humanística II",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Humanística II.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Humanística II."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Humanística II",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Humanística II",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Humanística II"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_42",
    "semestre": 6,
    "nombre": "Inglés VI",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Inglés V",
    "descripcion": "La asignatura Inglés VI (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés VI en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés VI para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés VI."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés VI",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Inglés VI en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés VI."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés VI",
        "ra": "Utiliza herramientas técnicas de Inglés VI para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés VI."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés VI",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Inglés VI.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés VI."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés VI",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés VI",
      "Unidad 3: Consolidación, Innovación y Sustentación en Inglés VI"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_43",
    "semestre": 7,
    "nombre": "Fundamentos de Administración Pública",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Área de Formación Transversal",
    "componente_id": "area_transversal",
    "componente_nombre": "Área de Formación Transversal",
    "prerrequisito": "Derecho Administrativo",
    "descripcion": "La asignatura Fundamentos de Administración Pública (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Administración Pública en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Administración Pública para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Administración Pública."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración Pública",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Administración Pública en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Administración Pública."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración Pública",
        "ra": "Utiliza herramientas técnicas de Fundamentos de Administración Pública para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Administración Pública."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración Pública",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Administración Pública.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Administración Pública."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración Pública",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración Pública",
      "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración Pública"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_44",
    "semestre": 7,
    "nombre": "Gestión de la Calidad",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Administración por Procesos",
    "descripcion": "La asignatura Gestión de la Calidad (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gestión de la Calidad en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gestión de la Calidad para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gestión de la Calidad."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de la Calidad",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gestión de la Calidad en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión de la Calidad."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de la Calidad",
        "ra": "Utiliza herramientas técnicas de Gestión de la Calidad para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión de la Calidad."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de la Calidad",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gestión de la Calidad.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión de la Calidad."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de la Calidad",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de la Calidad",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de la Calidad"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_45",
    "semestre": 7,
    "nombre": "Presupuesto",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Costos",
    "descripcion": "La asignatura Presupuesto (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Presupuesto en las empresas.",
      "RA2: Utiliza herramientas técnicas de Presupuesto para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Presupuesto."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Presupuesto",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Presupuesto en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Presupuesto."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Presupuesto",
        "ra": "Utiliza herramientas técnicas de Presupuesto para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Presupuesto."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Presupuesto",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Presupuesto.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Presupuesto."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Presupuesto",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Presupuesto",
      "Unidad 3: Consolidación, Innovación y Sustentación en Presupuesto"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_46",
    "semestre": 7,
    "nombre": "Gerencia de Talento Humano",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Administración de Salarios",
    "descripcion": "La asignatura Gerencia de Talento Humano (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia de Talento Humano en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia de Talento Humano para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Talento Humano."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Talento Humano",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gerencia de Talento Humano en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de Talento Humano."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Talento Humano",
        "ra": "Utiliza herramientas técnicas de Gerencia de Talento Humano para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de Talento Humano."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Talento Humano",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Talento Humano.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de Talento Humano."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Talento Humano",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Talento Humano",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Talento Humano"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_47",
    "semestre": 7,
    "nombre": "Proyecto Empresarial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Cultura Emprendedora",
    "descripcion": "La asignatura Proyecto Empresarial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Proyecto Empresarial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Proyecto Empresarial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto Empresarial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto Empresarial",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Proyecto Empresarial en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Proyecto Empresarial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto Empresarial",
        "ra": "Utiliza herramientas técnicas de Proyecto Empresarial para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Proyecto Empresarial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto Empresarial",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto Empresarial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Proyecto Empresarial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto Empresarial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto Empresarial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto Empresarial"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_48",
    "semestre": 7,
    "nombre": "Electiva Profundización III",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Área de Formación Electiva",
    "componente_id": "area_electiva",
    "componente_nombre": "Área de Formación Electiva",
    "prerrequisito": "Electiva Profundización II",
    "descripcion": "La asignatura Electiva Profundización III (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización III en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Profundización III para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización III."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profundización III",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización III en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva Profundización III."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profundización III",
        "ra": "Utiliza herramientas técnicas de Electiva Profundización III para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva Profundización III."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profundización III",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización III.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva Profundización III."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva Profundización III",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva Profundización III",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva Profundización III"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_49",
    "semestre": 7,
    "nombre": "Sistema de Información Gerencial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Tecnología e Innovación",
    "descripcion": "La asignatura Sistema de Información Gerencial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Sistema de Información Gerencial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Sistema de Información Gerencial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Sistema de Información Gerencial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Sistema de Información Gerencial",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Sistema de Información Gerencial en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Sistema de Información Gerencial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Sistema de Información Gerencial",
        "ra": "Utiliza herramientas técnicas de Sistema de Información Gerencial para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Sistema de Información Gerencial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Sistema de Información Gerencial",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Sistema de Información Gerencial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Sistema de Información Gerencial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Sistema de Información Gerencial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Sistema de Información Gerencial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Sistema de Información Gerencial"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_50",
    "semestre": 8,
    "nombre": "Habilidades Gerenciales",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Liderazgo",
    "descripcion": "La asignatura Habilidades Gerenciales (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Habilidades Gerenciales en las empresas.",
      "RA2: Utiliza herramientas técnicas de Habilidades Gerenciales para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Habilidades Gerenciales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Habilidades Gerenciales",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Habilidades Gerenciales en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Habilidades Gerenciales."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Habilidades Gerenciales",
        "ra": "Utiliza herramientas técnicas de Habilidades Gerenciales para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Habilidades Gerenciales."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Habilidades Gerenciales",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Habilidades Gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Habilidades Gerenciales."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Habilidades Gerenciales",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Habilidades Gerenciales",
      "Unidad 3: Consolidación, Innovación y Sustentación en Habilidades Gerenciales"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_51",
    "semestre": 8,
    "nombre": "Gerencia de Producción",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Investigación de Operaciones",
    "descripcion": "La asignatura Gerencia de Producción (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia de Producción en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia de Producción para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Producción."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Producción",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gerencia de Producción en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de Producción."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Producción",
        "ra": "Utiliza herramientas técnicas de Gerencia de Producción para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de Producción."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Producción",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Producción.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de Producción."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Producción",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de Producción",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de Producción"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_52",
    "semestre": 8,
    "nombre": "Investigación de Mercados",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Gerencia de Mercadeo",
    "descripcion": "La asignatura Investigación de Mercados (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Investigación de Mercados en las empresas.",
      "RA2: Utiliza herramientas técnicas de Investigación de Mercados para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Investigación de Mercados."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Mercados",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Investigación de Mercados en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Investigación de Mercados."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación de Mercados",
        "ra": "Utiliza herramientas técnicas de Investigación de Mercados para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Investigación de Mercados."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Investigación de Mercados",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Investigación de Mercados.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Investigación de Mercados."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Mercados",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación de Mercados",
      "Unidad 3: Consolidación, Innovación y Sustentación en Investigación de Mercados"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_53",
    "semestre": 8,
    "nombre": "Gerencia Financiera",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Matemática Financiera",
    "descripcion": "La asignatura Gerencia Financiera (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia Financiera en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia Financiera para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia Financiera."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia Financiera",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gerencia Financiera en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia Financiera."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia Financiera",
        "ra": "Utiliza herramientas técnicas de Gerencia Financiera para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia Financiera."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia Financiera",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia Financiera.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia Financiera."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia Financiera",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia Financiera",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia Financiera"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_54",
    "semestre": 8,
    "nombre": "Deontología",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Ninguno",
    "descripcion": "La asignatura Deontología (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Deontología en las empresas.",
      "RA2: Utiliza herramientas técnicas de Deontología para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Deontología."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Deontología",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Deontología en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Deontología."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Deontología",
        "ra": "Utiliza herramientas técnicas de Deontología para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Deontología."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Deontología",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Deontología.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Deontología."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Deontología",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Deontología",
      "Unidad 3: Consolidación, Innovación y Sustentación en Deontología"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_55",
    "semestre": 8,
    "nombre": "Proyecto de Grado I",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Metodología de la Investigación",
    "descripcion": "La asignatura Proyecto de Grado I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Proyecto de Grado I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Proyecto de Grado I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto de Grado I."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado I",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Proyecto de Grado I en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Proyecto de Grado I."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto de Grado I",
        "ra": "Utiliza herramientas técnicas de Proyecto de Grado I para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Proyecto de Grado I."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto de Grado I",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto de Grado I.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Proyecto de Grado I."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado I",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto de Grado I",
      "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto de Grado I"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_56",
    "semestre": 9,
    "nombre": "Planeación y Prospectiva",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Habilidades Gerenciales",
    "descripcion": "La asignatura Planeación y Prospectiva (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Planeación y Prospectiva en las empresas.",
      "RA2: Utiliza herramientas técnicas de Planeación y Prospectiva para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Planeación y Prospectiva."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Planeación y Prospectiva",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Planeación y Prospectiva en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Planeación y Prospectiva."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Planeación y Prospectiva",
        "ra": "Utiliza herramientas técnicas de Planeación y Prospectiva para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Planeación y Prospectiva."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Planeación y Prospectiva",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Planeación y Prospectiva.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Planeación y Prospectiva."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Planeación y Prospectiva",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Planeación y Prospectiva",
      "Unidad 3: Consolidación, Innovación y Sustentación en Planeación y Prospectiva"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_57",
    "semestre": 9,
    "nombre": "Gerencia del Servicio",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Gerencia de Mercadeo",
    "descripcion": "La asignatura Gerencia del Servicio (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia del Servicio en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia del Servicio para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia del Servicio."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia del Servicio",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gerencia del Servicio en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia del Servicio."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia del Servicio",
        "ra": "Utiliza herramientas técnicas de Gerencia del Servicio para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia del Servicio."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia del Servicio",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia del Servicio.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia del Servicio."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia del Servicio",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia del Servicio",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia del Servicio"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_58",
    "semestre": 9,
    "nombre": "Evaluación de Proyectos de Inversión",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Gerencia Financiera",
    "descripcion": "La asignatura Evaluación de Proyectos de Inversión (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Evaluación de Proyectos de Inversión en las empresas.",
      "RA2: Utiliza herramientas técnicas de Evaluación de Proyectos de Inversión para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Evaluación de Proyectos de Inversión."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Evaluación de Proyectos de Inversión",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Evaluación de Proyectos de Inversión en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Evaluación de Proyectos de Inversión."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Evaluación de Proyectos de Inversión",
        "ra": "Utiliza herramientas técnicas de Evaluación de Proyectos de Inversión para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Evaluación de Proyectos de Inversión."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Evaluación de Proyectos de Inversión",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Evaluación de Proyectos de Inversión.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Evaluación de Proyectos de Inversión."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Evaluación de Proyectos de Inversión",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Evaluación de Proyectos de Inversión",
      "Unidad 3: Consolidación, Innovación y Sustentación en Evaluación de Proyectos de Inversión"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_59",
    "semestre": 9,
    "nombre": "Responsabilidad Social Empresarial",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Deontología",
    "descripcion": "La asignatura Responsabilidad Social Empresarial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Responsabilidad Social Empresarial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Responsabilidad Social Empresarial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Responsabilidad Social Empresarial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Responsabilidad Social Empresarial",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Responsabilidad Social Empresarial en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Responsabilidad Social Empresarial."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Responsabilidad Social Empresarial",
        "ra": "Utiliza herramientas técnicas de Responsabilidad Social Empresarial para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Responsabilidad Social Empresarial."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Responsabilidad Social Empresarial",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Responsabilidad Social Empresarial.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Responsabilidad Social Empresarial."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Responsabilidad Social Empresarial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Responsabilidad Social Empresarial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Responsabilidad Social Empresarial"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_60",
    "semestre": 9,
    "nombre": "Gobierno Corporativo",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Legislación Comercial",
    "descripcion": "La asignatura Gobierno Corporativo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gobierno Corporativo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gobierno Corporativo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gobierno Corporativo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gobierno Corporativo",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Gobierno Corporativo en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gobierno Corporativo."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gobierno Corporativo",
        "ra": "Utiliza herramientas técnicas de Gobierno Corporativo para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gobierno Corporativo."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gobierno Corporativo",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Gobierno Corporativo.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gobierno Corporativo."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gobierno Corporativo",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gobierno Corporativo",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gobierno Corporativo"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  },
  {
    "id": "vig_61",
    "semestre": 9,
    "nombre": "Distribución Física y Logística",
    "tipo": "TP",
    "tipo_desc": "Teórico-Práctica",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Gerencia de Producción",
    "descripcion": "La asignatura Distribución Física y Logística (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Distribución Física y Logística en las empresas.",
      "RA2: Utiliza herramientas técnicas de Distribución Física y Logística para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Distribución Física y Logística."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Distribución Física y Logística",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Distribución Física y Logística en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Distribución Física y Logística."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Distribución Física y Logística",
        "ra": "Utiliza herramientas técnicas de Distribución Física y Logística para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Distribución Física y Logística."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Distribución Física y Logística",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Distribución Física y Logística.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Distribución Física y Logística."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Distribución Física y Logística",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Distribución Física y Logística",
      "Unidad 3: Consolidación, Innovación y Sustentación en Distribución Física y Logística"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad.",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    }
  },
  {
    "id": "vig_62",
    "semestre": 9,
    "nombre": "Proyecto de Grado II",
    "tipo": "T",
    "tipo_desc": "Teórica",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Área de Formación Disciplinar",
    "componente_id": "area_disciplinar",
    "componente_nombre": "Área de Formación Disciplinar",
    "prerrequisito": "Proyecto de Grado I",
    "descripcion": "La asignatura Proyecto de Grado II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Proyecto de Grado II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Proyecto de Grado II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto de Grado II."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado II",
        "ra": "Explica los conceptos fundamentales y marcos analíticos de Proyecto de Grado II en las empresas.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Proyecto de Grado II."
          },
          {
            "nombre": "Quiz 1: Control de Lectura y Verificación Conceptual",
            "porcentaje": "5%",
            "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."
          }
        ]
      },
      {
        "numero": 2,
        "fase": "Fase de Desarrollo y Aplicación",
        "porcentaje_fase": "25%",
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto de Grado II",
        "ra": "Utiliza herramientas técnicas de Proyecto de Grado II para el diagnóstico y control de procesos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Proyecto de Grado II."
          },
          {
            "nombre": "Quiz 2: Evaluación Analítica de Procesos",
            "porcentaje": "5%",
            "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."
          }
        ]
      },
      {
        "numero": 3,
        "fase": "Fase de Cierre y Consolidación",
        "porcentaje_fase": "55%",
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto de Grado II",
        "ra": "Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto de Grado II.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Proyecto de Grado II."
          },
          {
            "nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje",
            "porcentaje": "35%",
            "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."
          }
        ]
      }
    ],
    "temas": [
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado II",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Proyecto de Grado II",
      "Unidad 3: Consolidación, Innovación y Sustentación en Proyecto de Grado II"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales.",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    }
  }
];


window.selectMatrixSubject = function(id, type) {
    let s = type === 'vig' ? window.C3_VIGENTE_SUBJECTS.find(i => i.id === id) : window.C3_SUBJECTS.find(i => i.id === id);
    if (!s) return;

    // Highlight selected card
    document.querySelectorAll('.malla-matrix-subject-card').forEach(c => c.classList.remove('selected-card'));
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('selected-card');
    }

    const panelId = type === 'vig' ? 'c3-vigente-matrix-detail-panel' : 'c3-propuesto-matrix-detail-panel';
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const pd_cr = Math.floor(s.presencial.directa / s.creditos);
    const pi_cr = Math.floor(s.presencial.independiente / s.creditos);
    const vm_cr = Math.floor(s.virtual.mediado / s.creditos);
    const vi_cr = Math.floor(s.virtual.independiente / s.creditos);

    const planTag = type === 'vig' ? '<span class="badge-presencial" style="background:#475569; color:#fff;"><i class="fas fa-history"></i> Plan Vigente SACES (158 cr)</span>' : '<span class="badge-presencial" style="background:#059669; color:#fff;"><i class="fas fa-rocket"></i> Plan Propuesto (144 cr)</span>';

    let unitsHtml = '';
    if (s.unidades && s.unidades.length) {
        unitsHtml = s.unidades.map(u => `
            <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-left:4px solid var(--orange); border-radius:8px; padding:12px; margin-bottom:10px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong style="color:var(--carbon); font-size:0.86rem;">
                        <i class="fas fa-book" style="color:var(--orange);"></i> ${u.titulo}
                    </strong>
                    <span style="background:var(--orange); color:#fff; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:12px;">
                        ${u.fase} · ${u.porcentaje_fase}
                    </span>
                </div>
                <div style="font-size:0.8rem; color:#1E293B; margin-bottom:8px; background:#EFF6FF; padding:8px 10px; border-radius:6px; border-left:3px solid #3B82F6;">
                    <strong><i class="fas fa-bullseye" style="color:#2563EB;"></i> Resultado de Aprendizaje (RA${u.numero}):</strong> ${u.ra}
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                    ${u.actividades.map(a => `
                        <div style="background:#fff; border:1px solid #E2E8F0; padding:8px; border-radius:6px; font-size:0.76rem;">
                            <div style="display:flex; justify-content:space-between; font-weight:800; color:#0F172A; margin-bottom:2px;">
                                <span>${a.nombre}</span>
                                <span style="color:#059669;">${a.porcentaje}</span>
                            </div>
                            <div style="color:var(--gray-text); font-size:0.72rem;">${a.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    panel.innerHTML = `
        <div style="border-bottom:2px solid var(--orange); padding-bottom:12px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
            <div>
                ${planTag}
                <span class="badge-presencial" style="margin-left:6px;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                <span class="matrix-area-badge area-${s.area.toLowerCase()}" style="margin-left:6px;"><i class="fas fa-layer-group"></i> ${s.area_name || s.area}</span>
                <span style="background:var(--carbon); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700; margin-left:6px;">Tipo: ${s.tipo === 'TP' ? 'Teórico-Práctica (TP)' : 'Teórica (T)'}</span>
                <span style="background:var(--orange); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700; margin-left:6px;">${s.creditos} Créditos</span>
                <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800; color:var(--carbon); margin-top:8px;">${s.nombre}</h3>
                <div style="font-size:0.8rem; color:var(--gray-text); margin-top:2px;"><i class="fas fa-link" style="color:var(--orange);"></i> <strong>Prerrequisito:</strong> ${s.prerrequisito}</div>
            </div>
            <button onclick="openSubjectModal('${s.id}', '${type}')" class="viewer-nav-btn next" style="padding:8px 14px; font-size:0.8rem;">
                <i class="fas fa-expand"></i> Ver Modal Ficha Completa
            </button>
        </div>

        <!-- HORAS DECRETO 1330 -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:12px; border-radius:8px;">
                <strong style="color:#0369A1; font-size:0.82rem;"><i class="fas fa-university"></i> Modalidad Presencial (1:2 · Decreto 1330 y Tabla 24)</strong>
                <div style="font-size:0.8rem; margin-top:4px; color:#0C4A6E;">
                    • Docencia Directa (Acompañamiento): <strong>${s.presencial.directa}h</strong> (${pd_cr}h/cr)<br>
                    • Trabajo Autónomo e Independiente: <strong>${s.presencial.independiente}h</strong> (${pi_cr}h/cr)<br>
                    • Total Horas Semestre: <strong>${s.presencial.total}h</strong> (48h por crédito)
                </div>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:12px; border-radius:8px;">
                <strong style="color:#15803D; font-size:0.82rem;"><i class="fas fa-laptop"></i> Modalidad Virtual (1:3 · Mediación en Plataforma)</strong>
                <div style="font-size:0.8rem; margin-top:4px; color:#14532D;">
                    • Acompañamiento Mediado: <strong>${s.virtual.mediado}h</strong> (${vm_cr}h/cr)<br>
                    • Trabajo Autónomo e Independiente: <strong>${s.virtual.independiente}h</strong> (${vi_cr}h/cr)<br>
                    • Total Horas Semestre: <strong>${s.virtual.total}h</strong> (48h por crédito)
                </div>
            </div>
        </div>

        <div style="margin-bottom:16px; background:#F8FAFC; border:1px solid #E2E8F0; padding:12px; border-radius:8px;">
            <strong style="color:var(--carbon); font-size:0.82rem;"><i class="fas fa-align-left" style="color:var(--orange);"></i> Descripción Académica de la Asignatura:</strong>
            <p style="font-size:0.82rem; color:var(--gray-text); margin:4px 0 0 0; line-height:1.5;">${s.descripcion}</p>
        </div>

        <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--carbon); margin-bottom:10px;">
            <i class="fas fa-layer-group" style="color:var(--orange);"></i> 3 Unidades Temáticas, RAs y Actividades Formativas (20%, 25%, 55%)
        </h4>
        ${unitsHtml}
    `;

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

window.openSubjectModal = function(id, type) {
    let s = type === 'vig' ? window.C3_VIGENTE_SUBJECTS.find(item => item.id === id) : window.C3_SUBJECTS.find(item => item.id === id);
    if (!s) return;

    let existing = document.getElementById('c3SubjectModalOverlay');
    if (existing) existing.remove();

    const pd_cr = Math.floor(s.presencial.directa / s.creditos);
    const pi_cr = Math.floor(s.presencial.independiente / s.creditos);
    const vm_cr = Math.floor(s.virtual.mediado / s.creditos);
    const vi_cr = Math.floor(s.virtual.independiente / s.creditos);

    const planBadge = type === 'vig' ? '<span style="background:#475569; color:#fff; padding:3px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; margin-right:6px;"><i class="fas fa-history"></i> Plan Vigente SACES (158 cr)</span>' : '<span style="background:#059669; color:#fff; padding:3px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; margin-right:6px;"><i class="fas fa-rocket"></i> Plan Propuesto (144 cr)</span>';

    let unitsHtml = '';
    if (s.unidades && s.unidades.length) {
        unitsHtml = s.unidades.map(u => `
            <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-left:4px solid var(--orange); border-radius:8px; padding:14px; margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong style="color:var(--carbon); font-size:0.9rem;">
                        <i class="fas fa-book" style="color:var(--orange);"></i> ${u.titulo}
                    </strong>
                    <span style="background:var(--orange); color:#fff; font-size:0.72rem; font-weight:800; padding:2px 10px; border-radius:12px;">
                        ${u.fase} · ${u.porcentaje_fase}
                    </span>
                </div>
                <div style="font-size:0.82rem; color:#1E293B; margin-bottom:10px; background:#EFF6FF; padding:10px 12px; border-radius:6px; border-left:3px solid #3B82F6;">
                    <strong><i class="fas fa-bullseye" style="color:#2563EB;"></i> Resultado de Aprendizaje (RA${u.numero}):</strong> ${u.ra}
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    ${u.actividades.map(a => `
                        <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:6px; font-size:0.78rem;">
                            <div style="display:flex; justify-content:space-between; font-weight:800; color:#0F172A; margin-bottom:4px;">
                                <span>${a.nombre}</span>
                                <span style="color:#059669; font-size:0.85rem;">${a.porcentaje}</span>
                            </div>
                            <div style="color:var(--gray-text); font-size:0.75rem; line-height:1.4;">${a.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    const modalHtml = `
        <div id="c3SubjectModalOverlay" class="subject-modal-overlay" onclick="closeSubjectModal(event)" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15,23,42,0.7); backdrop-filter:blur(4px); z-index:99999; display:flex; align-items:center; justify-content:center; padding:20px; box-sizing:border-box;">
            <div class="subject-modal-container" onclick="event.stopPropagation()" style="background:#fff; border-radius:12px; width:100%; max-width:850px; max-height:90vh; overflow-y:auto; box-shadow:0 20px 25px -5px rgba(0,0,0,0.3); border-top:6px solid var(--orange);">
                <div style="padding:20px 24px; border-bottom:1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; background:#fff; z-index:10;">
                    <div>
                        <div style="margin-bottom:4px;">
                            ${planBadge}
                            <span class="matrix-area-badge area-${s.area.toLowerCase()}"><i class="fas fa-layer-group"></i> ${s.area_name || s.area}</span>
                            <span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; margin-left:6px;">Tipo: ${s.tipo === 'TP' ? 'Teórico-Práctica (TP)' : 'Teórica (T)'}</span>
                            <span style="background:var(--orange); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; margin-left:6px;">${s.creditos} Créditos</span>
                        </div>
                        <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:var(--carbon); margin:0;">
                            ${s.nombre} (Semestre ${s.semestre})
                        </h3>
                    </div>
                    <button onclick="closeSubjectModal()" style="background:#F1F5F9; border:none; width:34px; height:34px; border-radius:50%; cursor:pointer; font-size:1.1rem; color:#64748B; display:flex; align-items:center; justify-content:center;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div style="padding:24px;">
                    <!-- HORAS MODALIDAD -->
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
                        <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:14px; border-radius:8px;">
                            <strong style="color:#0369A1; font-size:0.84rem;"><i class="fas fa-university"></i> Presencial (1:2 · Decreto 1330 y Tabla 24)</strong>
                            <div style="font-size:0.8rem; margin-top:6px; color:#0C4A6E; line-height:1.5;">
                                • Docencia Directa: <strong>${s.presencial.directa}h</strong> (${pd_cr}h/cr)<br>
                                • Trabajo Independiente: <strong>${s.presencial.independiente}h</strong> (${pi_cr}h/cr)<br>
                                • Total Horas Semestre: <strong>${s.presencial.total}h</strong> (48h/cr)
                            </div>
                        </div>
                        <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:14px; border-radius:8px;">
                            <strong style="color:#15803D; font-size:0.84rem;"><i class="fas fa-laptop"></i> Virtual (1:3 · Mediación)</strong>
                            <div style="font-size:0.8rem; margin-top:6px; color:#14532D; line-height:1.5;">
                                • Acompañamiento Mediado: <strong>${s.virtual.mediado}h</strong> (${vm_cr}h/cr)<br>
                                • Trabajo Independiente: <strong>${s.virtual.independiente}h</strong> (${vi_cr}h/cr)<br>
                                • Total Horas Semestre: <strong>${s.virtual.total}h</strong> (48h/cr)
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom:20px; background:#F8FAFC; border:1px solid #E2E8F0; padding:14px; border-radius:8px;">
                        <strong style="color:var(--carbon); font-size:0.85rem;"><i class="fas fa-align-left" style="color:var(--orange);"></i> Justificación y Propósito Formativo:</strong>
                        <p style="font-size:0.84rem; color:var(--gray-text); margin:6px 0 0 0; line-height:1.5;">${s.descripcion}</p>
                        <div style="margin-top:10px; font-size:0.82rem; color:var(--carbon);">
                            <i class="fas fa-link" style="color:var(--orange);"></i> <strong>Prerrequisito:</strong> ${s.prerrequisito}
                        </div>
                    </div>

                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                        <i class="fas fa-layer-group" style="color:var(--orange);"></i> Estructura Pedagógica: 3 Unidades Temáticas, RAs y Actividades (20%, 25%, 55%)
                    </h4>
                    ${unitsHtml}
                </div>

                <div style="padding:16px 24px; background:#F8FAFC; border-top:1px solid #E2E8F0; display:flex; justify-content:flex-end;">
                    <button onclick="closeSubjectModal()" style="background:var(--carbon); color:#fff; border:none; padding:8px 20px; border-radius:6px; font-weight:700; cursor:pointer;">
                        Cerrar Ficha
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.closeSubjectModal = function(e) {
    if (e && e.target && e.target.id !== 'c3SubjectModalOverlay' && !e.target.closest('button')) return;
    const modal = document.getElementById('c3SubjectModalOverlay');
    if (modal) modal.remove();
};


window.SECTIONS['c3'] = `
<div class="info-banner">
    <h4><i class="fas fa-sitemap"></i> Condición 3 · Aspectos Curriculares</h4>
    <p>Estructura curricular, plan de estudios en matriz global, perfiles, Resultados de Aprendizaje (RAP) y estrategias de flexibilidad del Programa de Administración de Empresas (Registro Único Presencial / Virtual).</p>
</div>

<!-- LEVEL 1 MAIN TABS (PLAN VIGENTE FIRST AND DEFAULT ACTIVE) -->
<div class="c3-main-tabs" id="c3MainTabsGroup">
    <button class="c3-main-tab-btn active" data-tab="c3-main-vigente" onclick="switchTab('c3MainTabsGroup','c3-main-vigente')">
        <i class="fas fa-history"></i> 1. Plan Vigente SACES (158 cr - 9 Semestres)
    </button>
    <button class="c3-main-tab-btn" data-tab="c3-main-propuesto" onclick="switchTab('c3MainTabsGroup','c3-main-propuesto')">
        <i class="fas fa-rocket"></i> 2. Plan Propuesto (144 cr - 8 Semestres)
    </button>
    <button class="c3-main-tab-btn" data-tab="c3-main-comparacion" onclick="switchTab('c3MainTabsGroup','c3-main-comparacion')">
        <i class="fas fa-balance-scale"></i> 3. Comparación y Justificación (Decreto 1330)
    </button>
</div>

<!-- =========================================================
     MAIN TAB 1: PLAN DE ESTUDIOS VIGENTE (158 CRÉDITOS - 9 SEMESTRES)
     ========================================================= -->
<div class="tab-panel active" id="c3-main-vigente" style="display:block;">
    <div class="tabs-container" id="c3VigenteSubTabs">
        <div class="tabs-nav">
            <button class="tab-btn active" data-tab="c3-v-malla" onclick="switchTab('c3VigenteSubTabs','c3-v-malla')">
                <i class="fas fa-table"></i> 1. Malla Curricular (Matriz Global)
            </button>
            <button class="tab-btn" data-tab="c3-v-areas" onclick="switchTab('c3VigenteSubTabs','c3-v-areas')">
                <i class="fas fa-layer-group"></i> 2. Áreas de Formación
            </button>
            <button class="tab-btn" data-tab="c3-v-perfiles" onclick="switchTab('c3VigenteSubTabs','c3-v-perfiles')">
                <i class="fas fa-user-graduate"></i> 3. Perfiles y RAPs
            </button>
            <button class="tab-btn" data-tab="c3-v-flex" onclick="switchTab('c3VigenteSubTabs','c3-v-flex')">
                <i class="fas fa-sliders-h"></i> 4. Flexibilidad Curricular
            </button>
            <button class="tab-btn" data-tab="c3-v-eval" onclick="switchTab('c3VigenteSubTabs','c3-v-eval')">
                <i class="fas fa-tasks"></i> 5. Sistema de Evaluación
            </button>
        </div>

        <!-- SUB TAB 2.1: MALLA GLOBAL VIGENTE -->
        <div class="tab-panel active" id="c3-v-malla" style="display:block;">
            <div style="margin-bottom:14px; background:#F8FAFC; border:1px solid #E2E8F0; padding:12px 16px; border-radius:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                    <i class="fas fa-table" style="color:var(--orange);"></i> Matriz Global del Plan de Estudios Vigente SACES (158 Créditos - 9 Semestres)
                </h4>
                <p style="font-size:0.83rem; color:var(--gray-text); margin-bottom:8px;">
                    Visualización en matriz continua: Áreas de Formación oficiales (filas) × Semestres Académicos (columnas I a IX) según la <strong>Tabla 24 del Documento Maestro</strong>. Haz clic sobre cualquier asignatura para desplegar su trazabilidad detallada.
                </p>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#0F172A; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-clock"></i> 62 Asignaturas Totales
                    </span>
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-history"></i> Plan SACES Anterior (158 Créditos)
                    </span>
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-certificate"></i> Tabla 24 Documento Maestro
                    </span>
                </div>
            </div>

            <!-- TABLA DE MALLA VIGENTE -->
            
    <!-- HEADER BADGE -->
    <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:10px 16px; border-radius:8px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="font-size:0.86rem; font-weight:800; color:#065F46;">
            <i class="fas fa-desktop" style="color:#059669; margin-right:6px;"></i> Vista 100% Pantalla Completa — Plan Vigente SACES (158 cr - 9 Semestres I a IX)
        </div>
        <div style="display:flex; gap:8px;">
            <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:20px;">
                <i class="fas fa-check-double"></i> Malla Oficial por Áreas (Tabla 24 Documento Maestro)
            </span>
            <span class="badge-presencial" style="background:#0F172A; color:#fff; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:20px;">
                <i class="fas fa-list-ol"></i> 62 Asignaturas · 158 Créditos
            </span>
        </div>
    </div>

    <div class="malla-matrix-scale-outer" id="malla-matrix-outer-vig">
        <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-vig">
            <table class="malla-matrix-table malla-matrix-table-9sem">
                <thead>
                    <tr>
                        <th class="matrix-comp-header-corner">
                            <i class="fas fa-layer-group" style="color:var(--orange); margin-right:4px;"></i> ÁREA DE FORMACIÓN
                        </th>
                        <th class="sem-header">SEM 1</th><th class="sem-header">SEM 2</th><th class="sem-header">SEM 3</th><th class="sem-header">SEM 4</th><th class="sem-header">SEM 5</th><th class="sem-header">SEM 6</th><th class="sem-header">SEM 7</th><th class="sem-header">SEM 8</th><th class="sem-header">SEM 9</th>
                    </tr>
                </thead>
                <tbody><tr>
            <td class="matrix-comp-header comp-border-area_transversal" style="border-left:4px solid #2563EB;">
                <span class="matrix-area-badge area-transversal">17 Asignaturas · 41 Créditos (25,95%)</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-layer-group" style="color:#2563EB; margin-right:4px;"></i> Área de Formación Transversal
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_1', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Matemáticas Básicas</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_2', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Constitución y Democracia</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_3', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Expresión Oral y Escrita</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_4', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_8', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Cálculo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemáticas Básicas</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_9', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Legislación Laboral</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_14', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_15', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_16', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Derecho Administrativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Constitución y Democracia</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_21', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_22', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_23', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Legislación Tributaria</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_28', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés IV</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés III</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_35', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés V</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés IV</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_36', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_42', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés VI</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés V</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_transversal" onclick="selectMatrixSubject('vig_43', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración Pública</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Administrativo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-area_disciplinar" style="border-left:4px solid #F39200;">
                <span class="matrix-area-badge area-disciplinar">40 Asignaturas · 107 Créditos (67,72%)</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-briefcase" style="color:#F39200; margin-right:4px;"></i> Área de Formación Disciplinar
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_5', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_6', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_7', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos de Economía</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_10', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_11', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Costos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_12', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Metodología de la Investigación</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_13', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Economía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_17', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Administración por Procesos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_19', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Cultura Emprendedora</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_20', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_25', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Liderazgo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_26', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Creatividad e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_27', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Entorno Económico Colombiano e Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_29', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_30', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Investigación de Operaciones</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_31', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_32', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Modelos de Desarrollo Económico</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico Colombiano e Internacional</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_33', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Administración de Salarios</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Laboral</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_37', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de Mercadeo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_38', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">E-Commerce</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_39', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Tecnología e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Creatividad e Innovación</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_40', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Métodos Cuantitativos y Cualitativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_44', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gestión de la Calidad</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración por Procesos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_45', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Presupuesto</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_46', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración de Salarios</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_47', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Proyecto Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_49', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Sistema de Información Gerencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Tecnología e Innovación</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_50', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Liderazgo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_51', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Operaciones</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_52', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_53', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_54', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Deontología</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_55', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado I</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Metodología de la Investigación</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_56', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Planeación y Prospectiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Habilidades Gerenciales</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_57', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia del Servicio</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_58', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Evaluación de Proyectos de Inversión</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia Financiera</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_59', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Responsabilidad Social Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Deontología</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_60', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gobierno Corporativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_61', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Distribución Física y Logística</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Producción</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 36h / 108h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-area_disciplinar" onclick="selectMatrixSubject('vig_62', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Proyecto de Grado I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-area_electiva" style="border-left:4px solid #D97706;">
                <span class="matrix-area-badge area-electiva">5 Asignaturas · 10 Créditos (6,33%)</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-sliders-h" style="color:#D97706; margin-right:4px;"></i> Área de Formación Electiva
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_electiva" onclick="selectMatrixSubject('vig_18', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Profundización I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_electiva" onclick="selectMatrixSubject('vig_24', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Humanística I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_electiva" onclick="selectMatrixSubject('vig_34', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Profundización II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_electiva" onclick="selectMatrixSubject('vig_41', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Humanística II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-area_electiva" onclick="selectMatrixSubject('vig_48', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Profundización III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización II</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 24h / 72h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr></tbody></table></div></div>

            <!-- PANEL INFERIOR DE DETALLE -->
            <div id="c3-vigente-matrix-detail-panel" style="margin-top:20px; background:#fff; border:1px solid #CBD5E1; border-radius:8px; padding:20px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="text-align:center; padding:24px; color:var(--gray-text);">
                    <i class="fas fa-mouse-pointer" style="font-size:1.8rem; color:var(--orange); margin-bottom:10px;"></i>
                    <h4 style="font-size:1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">Selecciona una Asignatura de la Malla</h4>
                    <p style="font-size:0.82rem; margin:0;">Haz clic sobre cualquier tarjeta de la matriz superior para inspeccionar sus unidades temáticas, resultados de aprendizaje y criterios de evaluación.</p>
                </div>
            </div>
        </div>

        
    <!-- SUB TAB 2.2: ÁREAS DE FORMACIÓN VIGENTE -->
    <div class="tab-panel" id="c3-v-areas" style="display:none;">
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:20px; border-radius:10px; margin-bottom:20px; border-left:6px solid #2563EB;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:#38BDF8; font-weight:800;">
                        <i class="fas fa-certificate"></i> Cuadros Maestros Oficiales · Documento Maestro [Anexo 2]
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:4px;">
                        Distribución de Créditos y Horas por Áreas de Formación (Plan Vigente 158 Créditos)
                    </h3>
                    <p style="font-size:0.84rem; color:#CBD5E1; margin:0;">
                        Información oficial extraída con fidelidad 100% de la <strong>Tabla 22</strong> (Áreas de Formación), <strong>Tabla 24</strong> (Distribución por Bloque) y <strong>Tabla 25</strong> (Distribución Semestral) del Documento Maestro radicado ante el MEN / SACES.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span class="badge-presencial" style="background:#2563EB; color:#fff; font-size:0.78rem; padding:4px 12px; border-radius:20px; font-weight:800;">
                        <i class="fas fa-layer-group"></i> 3 Áreas de Formación
                    </span>
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.78rem; padding:4px 12px; border-radius:20px; font-weight:800;">
                        <i class="fas fa-check-circle"></i> 62 Asignaturas · 158 Créditos
                    </span>
                </div>
            </div>
        </div>

        <!-- 4 KPI CARDS TABLA 22 -->
        <div class="grid-4" style="margin-bottom:24px;">
            <div class="card" style="border-top:4px solid #2563EB; text-align:center;">
                <div style="font-size:1.8rem; font-weight:900; color:#2563EB;">41 cr</div>
                <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:var(--carbon);">Área Transversal</h4>
                <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">17 Asignaturas (<strong>25,95%</strong>)</p>
            </div>
            <div class="card" style="border-top:4px solid #F39200; text-align:center;">
                <div style="font-size:1.8rem; font-weight:900; color:#F39200;">107 cr</div>
                <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:var(--carbon);">Área Disciplinar</h4>
                <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">40 Asignaturas (<strong>67,72%</strong>)</p>
            </div>
            <div class="card" style="border-top:4px solid #D97706; text-align:center;">
                <div style="font-size:1.8rem; font-weight:900; color:#D97706;">10 cr</div>
                <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:var(--carbon);">Área Electiva</h4>
                <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">5 Asignaturas (<strong>6,33%</strong>)</p>
            </div>
            <div class="card" style="border-top:4px solid var(--carbon); text-align:center; background:#F8FAFC;">
                <div style="font-size:1.8rem; font-weight:900; color:var(--carbon);">158 cr</div>
                <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:var(--carbon);">Total Programa Vigente</h4>
                <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">62 Asignaturas (<strong>100,00%</strong>)</p>
            </div>
        </div>

        <!-- CARD TABLA 22: RESUMEN DE ÁREAS -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-chart-pie" style="color:#0284C7; margin-right:6px;"></i> Tabla 22. Áreas de formación del programa vigente
                </h4>
                <span style="font-size:0.75rem; color:#475569; background:#F1F5F9; padding:3px 8px; border-radius:4px;">
                    Fuente: [Anexo 2. Documento Maestro], pág. 122
                </span>
            </div>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th>Área de Formación</th>
                            <th style="width:180px; text-align:center;">Número de Asignaturas</th>
                            <th style="width:160px; text-align:center;">Número de Créditos</th>
                            <th style="width:180px; text-align:center;">Porcentaje % de Créditos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:8px 12px; font-weight:700; color:#0369A1;">Área de Formación Transversal</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:700;">17</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:800; color:#0369A1;">41</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:800; color:#059669;">25,95%</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:8px 12px; font-weight:700; color:#C2410C;">Área de Formación Disciplinar</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:700;">40</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:800; color:#C2410C;">107</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:800; color:#059669;">67,72%</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:8px 12px; font-weight:700; color:#D97706;">Área de Formación Electiva</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:700;">5</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:800; color:#D97706;">10</td>
                            <td style="padding:8px 12px; text-align:center; font-weight:800; color:#059669;">6,33%</td>
                        </tr>
                        <tr style="background:#F1F5F9; font-weight:800; border-top:2px solid #CBD5E1;">
                            <td style="padding:10px 12px; font-size:0.9rem; color:var(--carbon);">Total Programa Vigente</td>
                            <td style="padding:10px 12px; text-align:center; font-size:0.9rem; color:var(--carbon);">62</td>
                            <td style="padding:10px 12px; text-align:center; font-size:0.95rem; color:var(--carbon);">158</td>
                            <td style="padding:10px 12px; text-align:center; font-size:0.95rem; color:#059669;">100,00%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- CARD TABLA 24: DISTRIBUCIÓN DETALLADA SEGÚN ÁREA DE FORMACIÓN -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <div>
                    <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                        <i class="fas fa-list-ol" style="color:#16A34A; margin-right:6px;"></i> Tabla 24. Distribución de créditos en el plan de estudios vigente (Según área de formación)
                    </h4>
                    <p style="font-size:0.8rem; color:var(--gray-text); margin:2px 0 0 0;">
                        Estructura canónica del Documento Maestro [Anexo 2], págs. 126-127. Desglosa las 62 asignaturas por Bloque/Área, carácter y horas de trabajo directo e independiente.
                    </p>
                </div>
                <span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:20px;">
                    <i class="fas fa-check-double"></i> 100% Autoritativo
                </span>
            </div>
            
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.81rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:140px;">BLOQUE</th>
                            <th>ASIGNATURAS</th>
                            <th style="width:65px; text-align:center;">OBLIG</th>
                            <th style="width:65px; text-align:center;">ELEC</th>
                            <th style="width:65px; text-align:center;">CRÉD</th>
                            <th style="width:140px; text-align:center;">H. TRABAJO DIRECTO DOCENTE</th>
                            <th style="width:150px; text-align:center;">H. TRABAJO INDEPENDIENTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Matemáticas Básicas</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Constitución y Democracia</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Expresión Oral y Escrita</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés I</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Cálculo</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Legislación Laboral</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés II</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Estadística Descriptiva</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Derecho Administrativo</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés III</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Estadística Inferencial</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Legislación Tributaria</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés IV</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés V</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Legislación Comercial</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés VI</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">TRANSVERSAL</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Administración Pública</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="4" style="padding:8px 10px; text-align:right; color:var(--carbon);">SUBTOTAL TRANSVERSAL (17 Asignaturas):</td>
            <td style="padding:8px 10px; text-align:center; color:var(--carbon); font-size:0.9rem;">41</td>
            <td style="padding:8px 10px; text-align:center; color:#0369A1;">492</td>
            <td style="padding:8px 10px; text-align:center; color:#0369A1;">1476</td>
        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Administración</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos Contables</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Economía</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Teoría Organizacional</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Costos</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Metodología de la Investigación</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Microeconomía</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Administración por Procesos</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Cultura Emprendedora</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Macroeconomía</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Liderazgo</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Creatividad e Innovación</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Entorno Económico Colombiano e Internacional</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Matemática Financiera</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Investigación de Operaciones</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Mercadeo</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Modelos de Desarrollo Económico</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Administración de Salarios</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia de Mercadeo</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">E-Commerce</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Tecnología e Innovación</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Métodos Cuantitativos y Cualitativos</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gestión de la Calidad</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Presupuesto</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia de Talento Humano</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Proyecto Empresarial</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Sistema de Información Gerencial</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Habilidades Gerenciales</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia de Producción</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Investigación de Mercados</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia Financiera</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Deontología</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Proyecto de Grado I</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Planeación y Prospectiva</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia del Servicio</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Evaluación de Proyectos de Inversión</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Responsabilidad Social Empresarial</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gobierno Corporativo</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Distribución Física y Logística</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">DISCIPLINAR</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Proyecto de Grado II</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="4" style="padding:8px 10px; text-align:right; color:var(--carbon);">SUBTOTAL DISCIPLINAR (40 Asignaturas):</td>
            <td style="padding:8px 10px; text-align:center; color:var(--carbon); font-size:0.9rem;">107</td>
            <td style="padding:8px 10px; text-align:center; color:#0369A1;">1284</td>
            <td style="padding:8px 10px; text-align:center; color:#0369A1;">3852</td>
        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">ELECTIVO</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Profundización I</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">ELECTIVO</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Humanística I</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">ELECTIVO</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Profundización II</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">ELECTIVO</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Humanística II</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:6px 10px; font-weight:700; color:#1E293B;">ELECTIVO</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Profundización III</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0284C7;"></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#D97706;">X</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="4" style="padding:8px 10px; text-align:right; color:var(--carbon);">SUBTOTAL ELECTIVO (5 Asignaturas):</td>
            <td style="padding:8px 10px; text-align:center; color:var(--carbon); font-size:0.9rem;">10</td>
            <td style="padding:8px 10px; text-align:center; color:#0369A1;">120</td>
            <td style="padding:8px 10px; text-align:center; color:#0369A1;">360</td>
        </tr>
                        <tr style="background:#0F172A; color:#fff; font-weight:900; font-size:0.9rem;">
                            <td colspan="4" style="padding:10px 12px; text-align:right; color:#fff;">TOTAL PROGRAMA VIGENTE (62 ASIGNATURAS):</td>
                            <td style="padding:10px 12px; text-align:center; color:#38BDF8;">158</td>
                            <td style="padding:10px 12px; text-align:center; color:#fff;">1896</td>
                            <td style="padding:10px 12px; text-align:center; color:#fff;">5688</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- CARD TABLA 25: DISTRIBUCIÓN POR SEMESTRE -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid var(--orange);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <div>
                    <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                        <i class="fas fa-calendar-alt" style="color:var(--orange); margin-right:6px;"></i> Tabla 25. Distribución de créditos en el plan de estudios por semestre vigente
                    </h4>
                    <p style="font-size:0.8rem; color:var(--gray-text); margin:2px 0 0 0;">
                        Estructura semestral (Semestres 1 a 9) con tipología (54 Teóricas, 8 Teórico-Prácticas) y carga horaria total (7.584 horas).
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span style="background:#EFF6FF; color:#0369A1; font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:4px; border:1px solid #BFDBFE;">54 Teóricas (T)</span>
                    <span style="background:#FEF3C7; color:#B45309; font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:4px; border:1px solid #FDE68A;">8 Teórico-Prácticas (TP)</span>
                </div>
            </div>
            
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.81rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px; text-align:center;">Sem.</th>
                            <th>Asignaturas</th>
                            <th style="width:65px; text-align:center;">Tipo</th>
                            <th style="width:70px; text-align:center;">Créditos</th>
                            <th style="width:130px; text-align:center;">H. Docencia Directa</th>
                            <th style="width:140px; text-align:center;">H. Trabajo Independiente</th>
                            <th style="width:140px; text-align:center;">Horas de Trabajo Totales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 1</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Matemáticas Básicas <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Constitución y Democracia <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Expresión Oral y Escrita <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés I <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Administración <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos Contables <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Economía <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 1 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">18</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">216</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">648</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">864</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 2</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Cálculo <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Legislación Laboral <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Teoría Organizacional <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Costos <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Metodología de la Investigación <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Microeconomía <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés II <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 2 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">17</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">204</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">612</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">816</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 3</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Estadística Descriptiva <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Derecho Administrativo <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Administración por Procesos <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Profundización I <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FEF3C7; color:#B45309;">ELECTIVA</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Cultura Emprendedora <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Macroeconomía <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés III <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 3 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">17</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">204</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">612</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">816</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 4</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Estadística Inferencial <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Legislación Tributaria <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Humanística I <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FEF3C7; color:#B45309;">ELECTIVA</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Liderazgo <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Creatividad e Innovación <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Entorno Económico Colombiano e Internacional <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés IV <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 4 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">18</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">216</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">648</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">864</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 5</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Matemática Financiera <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Investigación de Operaciones <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Mercadeo <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Modelos de Desarrollo Económico <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Administración de Salarios <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Profundización II <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FEF3C7; color:#B45309;">ELECTIVA</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés V <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 5 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">18</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">216</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">648</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">864</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 6</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Legislación Comercial <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia de Mercadeo <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">E-Commerce <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Tecnología e Innovación <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Métodos Cuantitativos y Cualitativos <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Humanística II <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FEF3C7; color:#B45309;">ELECTIVA</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Inglés VI <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 6 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">18</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">216</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">648</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">864</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 7</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Fundamentos de Administración Pública <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#E0F2FE; color:#0369A1;">TRANSVERSAL</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gestión de la Calidad <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Presupuesto <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia de Talento Humano <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Proyecto Empresarial <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Electiva Profundización III <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FEF3C7; color:#B45309;">ELECTIVA</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Sistema de Información Gerencial <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 7 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">18</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">216</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">648</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">864</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="6" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 8</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Habilidades Gerenciales <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia de Producción <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Investigación de Mercados <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia Financiera <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Deontología <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Proyecto de Grado I <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 8 (6 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">16</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">192</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">576</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">768</td>
        </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td rowspan="7" style="padding:8px 10px; text-align:center; font-weight:800; background:#F8FAFC; border-right:1px solid #E2E8F0; vertical-align:middle; font-size:0.95rem; color:#0369A1;">Semestre 9</td>
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Planeación y Prospectiva <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gerencia del Servicio <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Evaluación de Proyectos de Inversión <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Responsabilidad Social Empresarial <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Gobierno Corporativo <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Distribución Física y Logística <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">TP</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">3</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">36</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">108</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">144</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                
                <td style="padding:6px 10px; font-weight:600; color:var(--carbon);">Proyecto de Grado II <span style="font-size:0.68rem; font-weight:700; padding:1px 6px; border-radius:4px; margin-left:6px; background:#FFEDD5; color:#C2410C;">DISCIPLINAR</span></td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#475569;">T</td>
                <td style="padding:6px 10px; text-align:center; font-weight:800; background:#F8FAFC;">2</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">24</td>
                <td style="padding:6px 10px; text-align:center; color:#475569;">72</td>
                <td style="padding:6px 10px; text-align:center; font-weight:700; color:#0F172A;">96</td>
            </tr><tr style="background:#F1F5F9; font-weight:800; border-bottom:2px solid #CBD5E1;">
            <td colspan="2" style="padding:6px 10px; text-align:right; color:#0369A1;">Subtotal Semestre 9 (7 Asignaturas):</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">—</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">18</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">216</td>
            <td style="padding:6px 10px; text-align:center; color:#475569;">648</td>
            <td style="padding:6px 10px; text-align:center; color:#0369A1; font-size:0.9rem;">864</td>
        </tr>
                        <tr style="background:#0F172A; color:#fff; font-weight:900; font-size:0.92rem;">
                            <td colspan="3" style="padding:12px; text-align:right; color:#fff;">TOTAL PROGRAMA (9 SEMESTRES):</td>
                            <td style="padding:12px; text-align:center; color:#38BDF8; font-size:1rem;">158</td>
                            <td style="padding:12px; text-align:center; color:#fff;">1896</td>
                            <td style="padding:12px; text-align:center; color:#fff;">5688</td>
                            <td style="padding:12px; text-align:center; color:#34D399; font-size:1rem;">7584</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- CARD DE SUSTENTACIÓN CUALITATIVA DE LAS ÁREAS (DOCUMENTO MAESTRO PÁGS. 124-125) -->
        <div class="card" style="border-top:4px solid #7C3AED;">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:14px;">
                <i class="fas fa-book-reader" style="color:#7C3AED; margin-right:6px;"></i> Fundamentación Curricular y Peso de las Áreas en el Plan Vigente
            </h4>
            <div class="grid-3" style="gap:16px;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #2563EB; border-radius:8px; padding:16px;">
                    <h5 style="color:#1D4ED8; font-size:0.92rem; font-weight:800; margin-bottom:6px;">
                        <i class="fas fa-layer-group"></i> Área de Formación Transversal (25,95%)
                    </h5>
                    <p style="font-size:0.8rem; color:#475569; line-height:1.6; margin:0;">
                        Representa una proporción significativa (41 créditos de los 158 del plan de estudios). Garantiza que los estudiantes desarrollen una sólida base de competencias generales, analíticas, cuantitativas, comunicativas, normativas y de bilingüismo, asegurando no solo conocimientos técnicos sino habilidades para su desempeño profesional exitoso.
                    </p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #F39200; border-radius:8px; padding:16px;">
                    <h5 style="color:#C2410C; font-size:0.92rem; font-weight:800; margin-bottom:6px;">
                        <i class="fas fa-briefcase"></i> Área de Formación Disciplinar (67,72%)
                    </h5>
                    <p style="font-size:0.8rem; color:#475569; line-height:1.6; margin:0;">
                        Constituye el núcleo estructural del plan de estudios con 107 créditos (40 asignaturas). Proporciona los conocimientos y habilidades fundamentales para el ejercicio profesional del administrador en gerencia estratégica, finanzas, mercadeo, producción, calidad, talento humano y proyectos empresariales.
                    </p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #D97706; border-radius:8px; padding:16px;">
                    <h5 style="color:#B45309; font-size:0.92rem; font-weight:800; margin-bottom:6px;">
                        <i class="fas fa-sliders-h"></i> Área de Formación Electiva (6,33%)
                    </h5>
                    <p style="font-size:0.8rem; color:#475569; line-height:1.6; margin:0;">
                        Conjunto de 5 asignaturas (10 créditos) que permiten el desarrollo integral de los estudiantes de acuerdo con sus intereses personales, preferencias o necesidades de profundización en temas humanísticos y de especialización administrativa.
                    </p>
                </div>
            </div>
        </div>
    </div>
    

        <div class="tab-panel" id="c3-v-perfiles" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
 Perfil del Egresado y Resultados de Aprendizaje del Plan Vigente (Anexo 1 / RAPs 1 a 4)
 </h3>

 <div class="card" style="margin-bottom:24px; border-left:6px solid #0284C7;">
 <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin-bottom:8px;">
 <i class="fas fa-user-tie" style="color:#0284C7;"></i> Perfil Profesional del Egresado (Plan Vigente 158 cr)
 </h4>
 <p style="font-size:0.86rem; color:var(--gray-text); line-height:1.5;">
 El egresado del Plan Vigente de Administración de Empresas posee competencias orientadas a la gestión estratégica de organizaciones, operabilidad administrativa, toma de decisiones financieras, gestión de procesos y desarrollo operacional tradicional del administrador de empresas SACES.
 </p>
 </div>

 <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:14px;">
 <i class="fas fa-bullseye" style="color:#475569;"></i> Resultados de Aprendizaje del Programa (Plan Vigente SACES)
 </h4>
 <div class="grid-2" style="margin-bottom:28px;">
 <div class="card" style="border-top:4px solid #0284C7;">
 <span class="badge-presencial" style="background:#0284C7; color:#fff; font-weight:800;">RAP 1 - Gestión & Administración</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Diseña y aplica modelos de gestión administrativa y operabilidad organizativa.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Fundamentos de Administración, Teoría Organizacional, Procesos Administrativos.</div>
 </div>
 <div class="card" style="border-top:4px solid #7C3AED;">
 <span class="badge-presencial" style="background:#7C3AED; color:#fff; font-weight:800;">RAP 2 - Decisiones Financieras</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Analiza estados financieros y aplica presupuestos para evaluar la operabilidad del negocio.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Fundamentos Contables, Costos, Presupuesto, Gerencia Financiera.</div>
 </div>
 <div class="card" style="border-top:4px solid #16A34A;">
 <span class="badge-presencial" style="background:#16A34A; color:#fff; font-weight:800;">RAP 3 - Emprendimiento & Mercados</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Identifica oportunidades de mercado y formula proyectos de inversión tradicional.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Fundamentos de Mercadeo, Cultura Emprendedora, Evaluación de Proyectos.</div>
 </div>
 <div class="card" style="border-top:4px solid #EA580C;">
 <span class="badge-presencial" style="background:#EA580C; color:#fff; font-weight:800;">RAP 4 - Operaciones & Producción</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Supervisa procesos de manufactura, logística y administración de operaciones.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Gerencia de Producción, Distribución Física y Logística.</div>
 </div>
 </div>
 </div>

 <!-- SUB TAB 2.4: FLEXIBILIDAD VIGENTE -->

        
    <!-- =========================================================
         SUB TAB 2.4: FLEXIBILIDAD CURRICULAR PLAN VIGENTE
         Fuente oficial: [Anexo 5. Documento Maestro Administración de Empresas_RU inicial],
         Numeral 3.6.3. Estrategias de flexibilidad para el desarrollo del programa (págs. 109 a 114)
         ========================================================= -->
    <div class="tab-panel" id="c3-v-flex" style="display:none;">
        <!-- BANNER DE ENCABEZADO -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px; border-radius:10px; margin-bottom:24px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                        <i class="fas fa-certificate"></i> Numeral 3.6.3 · Documento Maestro Oficial [Anexo 5 - RU Inicial]
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:4px;">
                        3.6.3. Estrategias de Flexibilidad para el Desarrollo del Programa (Plan Vigente 158 Créditos)
                    </h3>
                    <p style="font-size:0.84rem; color:#CBD5E1; margin:0;">
                        Marco conceptual, dimensiones de flexibilización pedagógica, estrategias institucionales y operativas del programa de Administración de Empresas radicado ante el MEN / SACES (págs. 109 a 114).
                    </p>
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#F39200; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-sliders-h"></i> 4 Dimensiones Institucionales
                    </span>
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-layer-group"></i> 7 Estrategias Operativas
                    </span>
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-calendar-alt"></i> Bloques de 8 Semanas
                    </span>
                </div>
            </div>
        </div>

        <!-- 1. CONTEXTO Y CONCEPCIÓN DEL CURRÍCULO FLEXIBLE -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #2563EB;">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                <i class="fas fa-compass" style="color:#2563EB; margin-right:8px;"></i> 1. Concepción de la Flexibilidad en el Enfoque Pedagógico Institucional
            </h4>
            <div style="font-size:0.85rem; color:#334155; line-height:1.65; margin-bottom:14px;">
                <p style="margin-bottom:10px;">
                    El <strong>Enfoque Pedagógico de la Corporación Escuela Tecnológica del Oriente</strong> se caracteriza por promover el <strong>desarrollo autónomo del estudiante</strong>, en atención a sus necesidades, afinidades e intereses vocacionales, favoreciendo la flexibilidad académica y administrativa. Hace referencia a las diferentes <strong>rutas de aprendizaje</strong> que ofrece el programa para posibilitar la formación del estudiante de tal forma que pueda organizar su plan de estudios y elegir de acuerdo con sus intereses académicos y profesionales.
                </p>
                <p style="margin:0;">
                    La flexibilidad curricular articula el desarrollo del conocimiento con las capacidades y talentos individuales, la acción, los contextos del aprendizaje, los ritmos de asimilación, las alternativas de diversificación de saberes y la validación de estos, así como la <strong>autonomía del estudiante para apropiar el sistema de créditos (158 créditos)</strong> y adaptarlos a sus propias necesidades, proponiendo sus propias rutas de aprendizaje. Asimismo, implica la articulación de nuevos campos de estudio, ajustando, redimensionando y reconfigurando los contenidos formativos a partir de diferentes contextos, prácticas y problemas de la realidad empresarial.
                </p>
            </div>
        </div>

        <!-- 2. LAS 4 DIMENSIONES DE FLEXIBILIZACIÓN INSTITUCIONAL -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #059669;">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:14px;">
                <i class="fas fa-cubes" style="color:#059669; margin-right:8px;"></i> 2. Cuatro Dimensiones de la Flexibilización Institucional (CETO)
            </h4>
            <div class="grid-2" style="gap:16px;">
                <!-- a) Flexibilidad Pedagógica -->
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:5px solid #059669; border-radius:8px; padding:16px;">
                    <div style="font-weight:800; color:#14532D; font-size:0.95rem; margin-bottom:6px;">
                        <i class="fas fa-graduation-cap" style="color:#059669; margin-right:6px;"></i> a) Flexibilidad Pedagógica
                    </div>
                    <p style="font-size:0.83rem; color:#166534; line-height:1.55; margin:0;">
                        Los programas académicos favorecen la formación del estudiante al permitirle la <strong>gestión de su propio aprendizaje ("el qué y el cómo")</strong>, su autorregulación y la adquisición/desarrollo de competencias, a través de una <strong>delegación progresiva</strong> de las actividades que se ofrecen a lo largo de la malla curricular.
                    </p>
                </div>

                <!-- b) Flexibilidad en la Enseñanza -->
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-left:5px solid #2563EB; border-radius:8px; padding:16px;">
                    <div style="font-weight:800; color:#1E3A8A; font-size:0.95rem; margin-bottom:6px;">
                        <i class="fas fa-chalkboard-teacher" style="color:#2563EB; margin-right:6px;"></i> b) Flexibilidad en la Enseñanza
                    </div>
                    <p style="font-size:0.83rem; color:#1E40AF; line-height:1.55; margin:0;">
                        Los docentes apoyan y acompañan a los estudiantes mediante estrategias de formación activa que favorecen su participación protagónica, en especial aquellas relacionadas con la <strong>aplicación o transferencia del conocimiento</strong> a problemas organizacionales auténticos.
                    </p>
                </div>

                <!-- c) Flexibilidad en el Aprendizaje -->
                <div style="background:#FFFBEB; border:1px solid #FDE68A; border-left:5px solid #D97706; border-radius:8px; padding:16px;">
                    <div style="font-weight:800; color:#78350F; font-size:0.95rem; margin-bottom:6px;">
                        <i class="fas fa-laptop-code" style="color:#D97706; margin-right:6px;"></i> c) Flexibilidad en el Aprendizaje
                    </div>
                    <p style="font-size:0.83rem; color:#92400E; line-height:1.55; margin:0;">
                        Los estudiantes pueden elegir las <strong>formas, los espacios académicos y los momentos de aprendizaje</strong> de acuerdo con sus necesidades formativas y los recursos institucionales, apoyados en <strong>mediaciones pedagógicas a través de nuevas tecnologías virtuales</strong> y plataformas digitales interactivas.
                    </p>
                </div>

                <!-- d) Flexibilidad en la Gestión del Programa -->
                <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-left:5px solid #475569; border-radius:8px; padding:16px;">
                    <div style="font-weight:800; color:#0F172A; font-size:0.95rem; margin-bottom:6px;">
                        <i class="fas fa-sitemap" style="color:#475569; margin-right:6px;"></i> d) Flexibilidad en la Gestión del Programa
                    </div>
                    <p style="font-size:0.83rem; color:#334155; line-height:1.55; margin:0;">
                        Se materializa en la gestión académica a través del <strong>sistema de admisión y selección</strong>, el sistema de autoevaluación continua, la <strong>apertura a redes de conocimiento mediante la internacionalización</strong>, convenios de movilidad nacional/extranjera y la reflexión de la educación como derecho inalienable.
                    </p>
                </div>
            </div>
        </div>

        <!-- 3. LAS 12 ESTRATEGIAS INSTITUCIONALES DEL PROGRAMA -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-list-check" style="color:#7C3AED; margin-right:8px;"></i> 3. Estrategias Institucionales de Flexibilidad para Administración de Empresas
                </h4>
                <span style="font-size:0.75rem; color:#6D28D9; background:#EDE9FE; font-weight:800; padding:3px 10px; border-radius:12px;">
                    Documento Maestro [Anexo 5], págs. 111-112
                </span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.83rem; color:#334155;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 1. Portafolio Multiprograma:</strong> Oferta articulada de programas académicos CETO con similar denominación en modalidad virtual.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 2. Rutas Semestrales:</strong> Definición de rutas de aprendizaje estructuradas por semestres (1 a 9) para acompañar la progresión académica.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 3. Movilidad Nacional e Internacional:</strong> Convenios interinstitucionales que enriquecen la formación desde una mirada global y multicultural.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 4. Homologación y Saberes Previos:</strong> Reconocimiento de aprendizajes y competencias previas adquiridas en el campo laboral o académico.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 5. Diversas Opciones de Grado:</strong> Investigación formativa, proyectos aplicados, pasantías profesionales y módulos de posgrado.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 6. Bolsa de Electivas (10 Créditos):</strong> 5 asignaturas electivas (Humanísticas I-II y Profundización I-III) para personalizar el perfil.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 7. Formación Sincrónica y Asincrónica:</strong> Combinación balanceada de interacción en tiempo real y estudio autónomo guiado.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 8. Bloques de 8 Semanas:</strong> Organización modular bimestral que optimiza la concentración y el ritmo de aprendizaje del estudiante.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 9. Capacidad Tecnológica Instalada:</strong> Infraestructura de servidores, LMS y herramientas digitales de última generación.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 10. Investigación Vocacional:</strong> Atención a los intereses específicos del estudiante en semilleros y líneas de investigación aplicada.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 11. Retroalimentación Pedagógica:</strong> Fortalecimiento metodológico a partir de las evaluaciones y propuestas del estamento estudiantil.
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px 14px; border-radius:6px;">
                    <strong style="color:#0F172A;"><i class="fas fa-check-circle" style="color:#7C3AED; margin-right:6px;"></i> 12. Currículo Actualizable:</strong> Adaptación dinámica sustentada en autoevaluación continua y exigencias del entorno empresarial.
                </div>
            </div>
        </div>

        <!-- 4. LAS 7 ESTRATEGIAS OPERATIVAS DEL PROGRAMA ACADÉMICO -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #F39200;">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:14px;">
                <i class="fas fa-cogs" style="color:#F39200; margin-right:8px;"></i> 4. Siete Estrategias Operativas de Flexibilidad Curricular Aplicadas (págs. 112 a 114)
            </h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
                <!-- 1. Modalidad Virtual -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#FEF3C7; color:#B45309; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">1</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Modalidad Virtual / Acceso Ubicuo</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        Permite a los estudiantes acceder a los contenidos desde cualquier lugar geográfico y en horarios flexibles, facilitando la conciliación con sus actividades laborales y personales.
                    </p>
                </div>

                <!-- 2. Oferta de Asignaturas Electivas -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#E0F2FE; color:#0369A1; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">2</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Oferta de Asignaturas Electivas</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        Se incluyen 5 asignaturas electivas (10 créditos) en el plan de estudios, lo que permite a los estudiantes elegir temas que respondan a sus intereses vocacionales o necesidades específicas de profundización.
                    </p>
                </div>

                <!-- 3. Organización Modular -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#DCFCE7; color:#15803D; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">3</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Organización Modular (Bloques de 8 Semanas)</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        La estructura del plan de estudios en bloques temáticos de 8 semanas permite avanzar de forma gradual y coherente, dosificando la carga académica y adaptándose al propio ritmo de asimilación.
                    </p>
                </div>

                <!-- 4. Reconocimiento de Aprendizajes Previos -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#F3E8FF; color:#7E22CE; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">4</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Reconocimiento de Aprendizajes Previos</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        Contempla la validación y homologación de competencias adquiridas previamente, ya sea por experiencia laboral acreditada o formación académica técnica/tecnológica, reduciendo el tiempo de titulación.
                    </p>
                </div>

                <!-- 5. Horarios Personalizables -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#FFE4E6; color:#BE123C; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">5</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Horarios Personalizables</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        La asignación de actividades asincrónicas en plataforma 24/7 permite al estudiante organizar su tiempo, mientras que las sesiones sincrónicas se programan en horarios accesibles con grabaciones de consulta permanente.
                    </p>
                </div>

                <!-- 6. Diseño Interdisciplinar -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#CCFBF1; color:#0F766E; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">6</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Diseño Interdisciplinar</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        La posibilidad de articular asignaturas y proyectos en áreas afines dentro y fuera del programa fomenta una formación integral y versátil que responde a problemas complejos del entorno empresarial.
                    </p>
                </div>

                <!-- 7. Enfoque en Competencias -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:8px; padding:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span style="background:#F1F5F9; color:#334155; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.8rem;">7</span>
                        <strong style="color:var(--carbon); font-size:0.88rem;">Enfoque Basado en Competencias y RAs</strong>
                    </div>
                    <p style="font-size:0.8rem; color:var(--gray-text); line-height:1.5; margin:0;">
                        Permite al estudiante adquirir conocimientos y destrezas en función de sus ritmos y prioridades, asegurando el cumplimiento riguroso de los resultados de aprendizaje mediante rúbricas objetivas.
                    </p>
                </div>
            </div>
        </div>

        <!-- 5. REQUISITOS DE GRADO DEL PROGRAMA (NUMERAL 3.6.4) -->
        <div class="card" style="border-top:4px solid var(--carbon);">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:10px;">
                <i class="fas fa-user-graduate" style="color:var(--orange); margin-right:8px;"></i> 5. Requisitos de Grado Articulados (Numeral 3.6.4 · pág. 114)
            </h4>
            <div style="font-size:0.84rem; color:#475569; line-height:1.6;">
                <p style="margin-bottom:8px;">
                    En concordancia con el Reglamento Estudiantil y la política curricular institucional, el estudiante del programa de Administración de Empresas (Plan Vigente 158 cr) debe cumplir con:
                </p>
                <ul style="margin:0; padding-left:20px;">
                    <li><strong>Cursar y aprobar la totalidad de las 62 asignaturas</strong> correspondientes a los 158 créditos académicos del plan de estudios con una calificación mínima aprobatoria de <strong>3.0 sobre 5.0</strong>.</li>
                    <li><strong>Aprobar una de las modalidades de opción de grado</strong> contempladas en el reglamento institucional: Proyecto de Grado I y II sustentado, Práctica Empresarial, Seminario/Diplomado de Actualización o Cursos de Posgrado (co-terminal).</li>
                    <li><strong>Acreditar suficiencia en segunda lengua (Inglés) en nivel B1</strong> acorde con el Marco Común Europeo de Referencia (MCER) a través de la secuencia curricular de Inglés I a VI o examen estandarizado.</li>
                </ul>
            </div>
        </div>
    </div>
    

        
    <!-- =========================================================
         SUB TAB 2.5: SISTEMA INSTITUCIONAL DE EVALUACIÓN PLAN VIGENTE
         Fuente oficial: [Anexo 5. Documento Maestro Administración de Empresas_RU inicial],
         Numeral 3.7.1. Evaluación de resultados de aprendizaje (págs. 130-133)
         y Numeral 3.11. Mecanismos de evaluación (págs. 152-159) con Tabla 14 y Tabla 15
         ========================================================= -->
    <div class="tab-panel" id="c3-v-eval" style="display:none;">
        <!-- BANNER DE ENCABEZADO -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px; border-radius:10px; margin-bottom:24px; border-left:6px solid #0284C7; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#38BDF8; font-weight:800;">
                        <i class="fas fa-balance-scale"></i> Numerales 3.7.1 y 3.11 · Documento Maestro [Anexo 5 - RU Inicial]
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:4px;">
                        Sistema de Evaluación de Aprendizajes y Mecanismos de Valoración (Plan Vigente 158 Créditos)
                    </h3>
                    <p style="font-size:0.84rem; color:#CBD5E1; margin:0;">
                        Despliegue integral de la evaluación de Resultados de Aprendizaje (3.7.1), Rúbrica Institucional de 5 Niveles (Tabla 14) y Matriz de Estrategias e Instrumentos de Medición por Asignatura (Tabla 15).
                    </p>
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-bullseye"></i> 3 Valores Agregados RA
                    </span>
                    <span class="badge-presencial" style="background:#7C3AED; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-tasks"></i> Tabla 14 (Rúbrica 5 Niveles)
                    </span>
                    <span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-table"></i> Tabla 15 (12 RAPs y Medición)
                    </span>
                </div>
            </div>
        </div>

        <!-- SECCIÓN 1: NUMERAL 3.7.1 - EVALUACIÓN DE RESULTADOS DE APRENDIZAJE -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-bullseye" style="color:#0284C7; margin-right:8px;"></i> 1. Numeral 3.7.1. Evaluación de Resultados de Aprendizaje
                </h4>
                <span style="font-size:0.75rem; color:#0369A1; background:#E0F2FE; font-weight:800; padding:3px 10px; border-radius:12px;">
                    Fuente: Documento Maestro [Anexo 5], págs. 130 a 133
                </span>
            </div>

            <p style="font-size:0.85rem; color:#334155; line-height:1.6; margin-bottom:16px;">
                La <strong>Corporación Escuela Tecnológica del Oriente</strong> establece un ejercicio de valoración sistemática de los resultados de aprendizaje fundamentado en <strong>tres grandes valores agregados</strong>:
            </p>

            <!-- 3 VALORES AGREGADOS -->
            <div class="grid-3" style="margin-bottom:18px; gap:14px;">
                <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-radius:8px; padding:14px;">
                    <div style="font-size:1.1rem; color:#0284C7; font-weight:900; margin-bottom:4px;">
                        <i class="fas fa-check-double"></i> Valor Agregado 1
                    </div>
                    <strong style="color:#0369A1; font-size:0.86rem; display:block; margin-bottom:6px;">Demostración a Corto Plazo</strong>
                    <p style="font-size:0.8rem; color:#0C4A6E; line-height:1.5; margin:0;">
                        Permite demostrar en el corto plazo si los estudiantes logran alcanzar los resultados de aprendizaje esperados mediante evidencias tangibles, horizontes epistemológicos y actividades evaluativas contextualizadas.
                    </p>
                </div>

                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:14px;">
                    <div style="font-size:1.1rem; color:#16A34A; font-weight:900; margin-bottom:4px;">
                        <i class="fas fa-sitemap"></i> Valor Agregado 2
                    </div>
                    <strong style="color:#15803D; font-size:0.86rem; display:block; margin-bottom:6px;">Pertinencia Mesocurricular</strong>
                    <p style="font-size:0.8rem; color:#14532D; line-height:1.5; margin:0;">
                        Permite evaluar la pertinencia de los resultados de aprendizaje con el programa académico en el aula y, a nivel mesocurricular, sustentar acciones de intervención para garantizar la coherencia institucional.
                    </p>
                </div>

                <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:8px; padding:14px;">
                    <div style="font-size:1.1rem; color:#9333EA; font-weight:900; margin-bottom:4px;">
                        <i class="fas fa-chalkboard-teacher"></i> Valor Agregado 3
                    </div>
                    <strong style="color:#7E22CE; font-size:0.86rem; display:block; margin-bottom:6px;">Intervención Pedagógica Inmediata</strong>
                    <p style="font-size:0.8rem; color:#581C87; line-height:1.5; margin:0;">
                        Permite generar intervenciones didácticas oportunas tanto dentro del aula con los estudiantes como en los procesos de cualificación profesoral para alcanzar de manera efectiva las metas previstas.
                    </p>
                </div>
            </div>

            <!-- MODELO PEDAGÓGICO Y TRIADA SABER-SER-HACER -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:16px;">
                <h5 style="font-size:0.95rem; font-weight:800; color:var(--carbon); margin-top:0; margin-bottom:8px;">
                    <i class="fas fa-brain" style="color:var(--orange); margin-right:6px;"></i> Modelo Pedagógico Constructivista y Activación de la Tríada Saber-Ser-Hacer
                </h5>
                <p style="font-size:0.83rem; color:#475569; line-height:1.6; margin-bottom:10px;">
                    El modelo pedagógico institucional es constructivista, articulado al paradigma sistémico/complejo posmoderno. La pregunta rectora que permite al docente planificar sus actividades es: <strong>¿Cómo activar la tríada Saber - Ser - Hacer en los estudiantes?</strong> Esta tríada se activa ante un problema o reto real de las organizaciones que debe ser investigado, comprendido y explicado, permitiendo al estudiante visualizar alternativas estratégicas para la toma de decisiones resolutivas.
                </p>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; font-size:0.8rem;">
                    <div style="background:#fff; border:1px solid #CBD5E1; padding:8px 12px; border-radius:6px;">
                        <strong style="color:#0284C7;"><i class="fas fa-book"></i> Saber (Cognitivo):</strong> Dominio teórico y conceptual de las disciplinas administrativas.
                    </div>
                    <div style="background:#fff; border:1px solid #CBD5E1; padding:8px 12px; border-radius:6px;">
                        <strong style="color:#16A34A;"><i class="fas fa-hands-helping"></i> Ser (Actitudinal y Ético):</strong> Responsabilidad social, ética profesional y liderazgo.
                    </div>
                    <div style="background:#fff; border:1px solid #CBD5E1; padding:8px 12px; border-radius:6px;">
                        <strong style="color:#D97706;"><i class="fas fa-cogs"></i> Hacer (Procedimental):</strong> Aplicación técnica, modelación cuantitativa y resolución de casos.
                    </div>
                </div>
            </div>

            <!-- LINEAMIENTOS DE INNOVACIÓN PEDAGÓGICA (3.8.1) -->
            <h5 style="font-size:0.92rem; font-weight:800; color:var(--carbon); margin-bottom:8px;">
                <i class="fas fa-lightbulb" style="color:#EAB308; margin-right:6px;"></i> Lineamientos de Innovación Pedagógica y Didáctica (Numeral 3.8.1 · pág. 133)
            </h5>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; font-size:0.8rem; color:#334155;">
                <div style="padding:8px 10px; background:#fff; border:1px solid #E2E8F0; border-radius:6px;">
                    <strong>1. Enfoque centrado en el estudiante:</strong> Metodologías activas (ABP, casos, simulaciones).
                </div>
                <div style="padding:8px 10px; background:#fff; border:1px solid #E2E8F0; border-radius:6px;">
                    <strong>2. Integración tecnológica:</strong> Plataformas LMS, simuladores y recursos interactivos.
                </div>
                <div style="padding:8px 10px; background:#fff; border:1px solid #E2E8F0; border-radius:6px;">
                    <strong>3. Currículo contextualizado:</strong> Diseñado para responder a las demandas del entorno social y laboral.
                </div>
                <div style="padding:8px 10px; background:#fff; border:1px solid #E2E8F0; border-radius:6px;">
                    <strong>4. Competencias socioemocionales:</strong> Liderazgo ético, resiliencia y trabajo en equipo.
                </div>
                <div style="padding:8px 10px; background:#fff; border:1px solid #E2E8F0; border-radius:6px;">
                    <strong>5. Inclusión y equidad:</strong> Aprendizaje accesible que respeta los ritmos y singularidades.
                </div>
                <div style="padding:8px 10px; background:#fff; border:1px solid #E2E8F0; border-radius:6px;">
                    <strong>6. Evaluación innovadora:</strong> Rúbricas analíticas, portafolios y proyectos integradores.
                </div>
            </div>
        </div>

        <!-- SECCIÓN 2: NUMERAL 3.11 - MECANISMOS DE EVALUACIÓN Y TABLA 14 -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <div>
                    <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--carbon); margin:0;">
                        <i class="fas fa-tasks" style="color:#7C3AED; margin-right:8px;"></i> 2. Numeral 3.11. Mecanismos de Evaluación y Tabla 14
                    </h4>
                    <p style="font-size:0.82rem; color:var(--gray-text); margin:2px 0 0 0;">
                        Criterios de valoración y Matriz de Rúbrica Analítica Institucional de 5 Niveles de Desempeño (págs. 152 a 154).
                    </p>
                </div>
                <span style="font-size:0.75rem; color:#7C3AED; background:#EDE9FE; font-weight:800; padding:3px 10px; border-radius:12px;">
                    Tabla 14 Oficial Anexo 5
                </span>
            </div>

            <p style="font-size:0.84rem; color:#334155; line-height:1.6; margin-bottom:14px;">
                Los criterios de evaluación se constituyen en el referente de valoración para que profesores y estudiantes prevean y reconozcan si han sido evidentes los resultados de aprendizaje declarados. Permiten entender qué <strong>conoce, comprende y sabe hacer</strong> el estudiante en conocimientos teóricos, capacidad de resolución de problemas y habilidades orales y sociales.
            </p>

            <!-- TABLA 14 -->
            <div style="overflow-x:auto; margin-bottom:14px;">
                <table class="tbl" style="width:100%; font-size:0.8rem;">
                    <thead>
                        <tr style="background:#0F172A; color:#fff;">
                            <th style="width:180px; color:#fff;">Criterios de Evaluación</th>
                            <th style="width:160px; text-align:center; color:#38BDF8;">Nivel 5: Excelente</th>
                            <th style="width:160px; text-align:center; color:#4ADE80;">Nivel 4: Muy Bueno</th>
                            <th style="width:160px; text-align:center; color:#FCD34D;">Nivel 3: Bueno</th>
                            <th style="width:160px; text-align:center; color:#FB923C;">Nivel 2: Suficiente</th>
                            <th style="width:160px; text-align:center; color:#F87171;">Nivel 1: Insuficiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:var(--carbon); background:#F8FAFC;">
                                <strong>Criterio 1:</strong> Cumplimiento de requisitos
                            </td>
                            <td style="padding:8px; font-size:0.78rem;">Cumple completamente con los requisitos y supera las expectativas fijadas.</td>
                            <td style="padding:8px; font-size:0.78rem;">Cumple con los requisitos de manera clara y efectiva.</td>
                            <td style="padding:8px; font-size:0.78rem;">Cumple con los requisitos, pero con algunos aspectos mejorables.</td>
                            <td style="padding:8px; font-size:0.78rem;">Cumple parcialmente con los requisitos; faltan elementos importantes.</td>
                            <td style="padding:8px; font-size:0.78rem;">No cumple con los requisitos o presenta deficiencias significativas.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:var(--carbon); background:#F8FAFC;">
                                <strong>Criterio 2:</strong> Profundidad de análisis
                            </td>
                            <td style="padding:8px; font-size:0.78rem;">Muestra un análisis profundo y exhaustivo, integrando múltiples perspectivas.</td>
                            <td style="padding:8px; font-size:0.78rem;">Realiza un análisis completo con algunos elementos de integración.</td>
                            <td style="padding:8px; font-size:0.78rem;">Realiza un análisis correcto, pero con limitaciones en profundidad.</td>
                            <td style="padding:8px; font-size:0.78rem;">Presenta un análisis superficial o incompleto de la situación.</td>
                            <td style="padding:8px; font-size:0.78rem;">No presenta un análisis relevante o es completamente superficial.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:var(--carbon); background:#F8FAFC;">
                                <strong>Criterio 3:</strong> Estructura y organización
                            </td>
                            <td style="padding:8px; font-size:0.78rem;">Presenta una estructura clara, coherente y perfectamente bien organizada.</td>
                            <td style="padding:8px; font-size:0.78rem;">Presenta una estructura lógica con algunos detalles menores por mejorar.</td>
                            <td style="padding:8px; font-size:0.78rem;">Estructura básica, pero algunos elementos están desorganizados.</td>
                            <td style="padding:8px; font-size:0.78rem;">La estructura es inconsistente y confusa en varios puntos clave.</td>
                            <td style="padding:8px; font-size:0.78rem;">No presenta una estructura clara o es totalmente incoherente.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:var(--carbon); background:#F8FAFC;">
                                <strong>Criterio 4:</strong> Lenguaje técnico y formalidad
                            </td>
                            <td style="padding:8px; font-size:0.78rem;">Utiliza correctamente y de manera consistente el lenguaje técnico y académico.</td>
                            <td style="padding:8px; font-size:0.78rem;">Usa lenguaje técnico de manera adecuada, con muy pocas imprecisiones.</td>
                            <td style="padding:8px; font-size:0.78rem;">Usa lenguaje técnico con errores ocasionales que afectan la comprensión.</td>
                            <td style="padding:8px; font-size:0.78rem;">Usa lenguaje técnico de manera inconsistente o incorrecta.</td>
                            <td style="padding:8px; font-size:0.78rem;">No utiliza el lenguaje técnico adecuado o presenta errores frecuentes.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:var(--carbon); background:#F8FAFC;">
                                <strong>Criterio 5:</strong> Calidad de contenido y evidencia
                            </td>
                            <td style="padding:8px; font-size:0.78rem;">Presenta una calidad excepcional y evidencia un esfuerzo sobresaliente.</td>
                            <td style="padding:8px; font-size:0.78rem;">Calidad alta, con esfuerzos claros en la investigación y desarrollo.</td>
                            <td style="padding:8px; font-size:0.78rem;">Calidad aceptable, pero podría mejorarse en investigación y soporte.</td>
                            <td style="padding:8px; font-size:0.78rem;">La calidad es mínima y carece de evidencia sólida y contrastable.</td>
                            <td style="padding:8px; font-size:0.78rem;">La calidad es insuficiente y carece de evidencia o relevancia.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="font-size:0.75rem; color:var(--gray-text); text-align:right;">
                Fuente: [Anexo 5. Documento Maestro Administración de Empresas_RU inicial], Tabla 14, pág. 153.
            </div>
        </div>

        <!-- SECCIÓN 3: TABLA 15 - ESTRATEGIAS PARA LA EVALUACIÓN DEL APRENDIZAJE POR RAPs -->
        <div class="card" style="margin-bottom:24px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <div>
                    <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--carbon); margin:0;">
                        <i class="fas fa-table" style="color:#16A34A; margin-right:8px;"></i> 3. Tabla 15. Estrategias para la Evaluación del Aprendizaje de los Estudiantes
                    </h4>
                    <p style="font-size:0.82rem; color:var(--gray-text); margin:2px 0 0 0;">
                        Alineación canónica oficial entre los 12 RAPs del programa vigente, las asignaturas de la malla de 158 créditos y sus instrumentos de medición específicos (págs. 154 a 159).
                    </p>
                </div>
                <span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:20px;">
                    12 RAPs Oficiales
                </span>
            </div>

            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.8rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:40px; text-align:center;">#</th>
                            <th style="width:280px;">Resultado de Aprendizaje del Programa (RAP)</th>
                            <th style="width:220px; color:#0369A1;">Asignaturas Articuladas (Plan Vigente 158 cr)</th>
                            <th style="color:#15803D;">Instrumentos de Medición y Evidencias Evaluativas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- RAP 1 -->
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">1</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Resuelve problemas empresariales mediante el pensamiento numérico, algebraico y variacional, utilizando métodos cualitativos y cuantitativos para optimizar la toma de decisiones, la gestión de procesos y el diseño de estrategias de eficiencia.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Matemáticas Básicas (Sem 1)<br>
                                • Expresión Oral y Escrita (Sem 1)<br>
                                • Cálculo (Sem 2)<br>
                                • Estadística Descriptiva (Sem 3)<br>
                                • Estadística Inferencial (Sem 4)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Rúbricas analíticas de evaluación<br>
                                • Talleres de solución de problemas matemáticos aplicados<br>
                                • Pruebas parciales sumativas y formativas<br>
                                • Desarrollo de guías procedimentales guiadas
                            </td>
                        </tr>

                        <!-- RAP 2 -->
                        <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">2</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Diseña estrategias innovadoras que integren los principios del derecho administrativo, la legislación laboral, comercial y los fundamentos de la administración pública, con el fin de optimizar productos, servicios y procesos organizacionales.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Constitución y Democracia (Sem 1)<br>
                                • Legislación Laboral (Sem 2)<br>
                                • Derecho Administrativo (Sem 3)<br>
                                • Legislación Tributaria (Sem 4)<br>
                                • Legislación Comercial (Sem 6)<br>
                                • Fundamentos de Admón. Pública (Sem 7)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Rúbricas de evaluación de casos jurídicos<br>
                                • Estudios de caso en derecho laboral y comercial<br>
                                • Redacción de textos argumentativos sobre normas legales<br>
                                • Preguntas orientadoras de aplicación en contextos reales
                            </td>
                        </tr>

                        <!-- RAP 3 -->
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">3</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Propone mejoras al proceso organizacional, identificando oportunidades de crecimiento y sostenibilidad, fundamentadas en estrategias de gestión, teoría organizacional y planeación prospectiva para implementar innovación en productos y procesos.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Fundamentos de Administración (Sem 1)<br>
                                • Teoría Organizacional (Sem 2)<br>
                                • Administración por Procesos (Sem 3)<br>
                                • Gerencia de Mercadeo (Sem 6)<br>
                                • Habilidades Gerenciales (Sem 8)<br>
                                • Planeación y Prospectiva (Sem 9)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Rúbricas de evaluación de planes gerenciales<br>
                                • Estudios de caso organizacionales<br>
                                • Diagnóstico y solución de problemas organizacionales simulados<br>
                                • Pruebas parciales de conocimiento procedimental
                            </td>
                        </tr>

                        <!-- RAP 4 -->
                        <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">4</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Desarrolla procedimientos operacionales para optimizar costos y aumentar utilidades en la organización, utilizando herramientas de investigación de operaciones, gestión de la calidad, gerencia de producción y logística de distribución.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Investigación de Operaciones (Sem 5)<br>
                                • Gestión de la Calidad (Sem 7)<br>
                                • Gerencia de Producción (Sem 8)<br>
                                • Distribución Física y Logística (Sem 9)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Rúbricas de modelación operacional<br>
                                • Modelos de programación lineal y redes en IO<br>
                                • Simulación de líneas de producción y cuellos de botella<br>
                                • Estudios de caso de optimización en cadenas de suministro
                            </td>
                        </tr>

                        <!-- RAP 5 -->
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">5</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Desarrolla estrategias de marketing innovadoras basadas en el análisis del contexto para mejorar la competitividad y productividad organizacional, adaptando productos, servicios y procesos a las demandas del mercado globalizado.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Fundamentos de Mercadeo (Sem 5)<br>
                                • E-Commerce (Sem 6)<br>
                                • Investigación de Mercados (Sem 8)<br>
                                • Gerencia del Servicio (Sem 9)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Rúbricas de evaluación de planes de mercadeo<br>
                                • Matrices PESTEL, DOFA, Marketing Mix y 5 Fuerzas de Porter<br>
                                • Propuesta documentada de sitio de ventas online (e-commerce)<br>
                                • Estudios de caso y análisis de segmentación de mercado
                            </td>
                        </tr>

                        <!-- RAP 6 -->
                        <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">6</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Determina la viabilidad de un proyecto de inversión mediante análisis económico y financiero detallado, evaluando costos, beneficios, implicaciones macro y microeconómicas y aplicando modelos de evaluación financiera y flujos de caja.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Fundamentos Contables (Sem 1)<br>
                                • Fundamentos de Economía (Sem 1)<br>
                                • Costos (Sem 2)<br>
                                • Microeconomía (Sem 2)<br>
                                • Macroeconomía (Sem 3)<br>
                                • Entorno Económico (Sem 4)<br>
                                • Matemática Financiera (Sem 5)<br>
                                • Modelos de Desarrollo (Sem 5)<br>
                                • Presupuesto (Sem 7)<br>
                                • Gerencia Financiera (Sem 8)<br>
                                • Evaluación de Proyectos (Sem 9)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Presentación de estados financieros, balances y flujos de caja<br>
                                • Liquidación práctica de impuestos (IVA, RETEIVA, Retefuente, ICA)<br>
                                • Ensayos sobre PIB, inflación, desempleo y política monetaria<br>
                                • Cálculo de anualidades, tasas de interés, TIR, VPN y relación B/C<br>
                                • Talleres de presupuesto organizacional de ingresos y egresos<br>
                                • Formulación integral de proyectos de inversión (mercado, técnico, financiero, administrativo y legal)
                            </td>
                        </tr>

                        <!-- RAP 7 -->
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">7</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Diseña estrategias de gestión del talento humano enfocadas en la permanencia de los trabajadores, basadas en análisis de cargos, roles y responsabilidades, integrando enfoques innovadores en liderazgo, compensación salarial y bienestar integral.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Administración de Salarios (Sem 5)<br>
                                • Gerencia de Talento Humano (Sem 7)<br>
                                • Habilidades Gerenciales (Sem 8)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Elaboración de perfiles de cargo y manuales de funciones<br>
                                • Guías de trabajo para diseño de planes de compensación salarial<br>
                                • Propuesta documental con estrategias de retención y fidelización<br>
                                • Estudios de caso en clima y cultura organizacional
                            </td>
                        </tr>

                        <!-- RAP 8 -->
                        <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">8</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Diseña estrategias de innovación tecnológica y sistemas de información gerencial que optimicen la productividad y competitividad de la organización, alineando las soluciones con la planeación estratégica y la sostenibilidad.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Tecnología e Innovación (Sem 6)<br>
                                • Sistema de Información Gerencial (Sem 8)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Rúbricas de evaluación tecnológica<br>
                                • Propuesta documental de implementación tecnológica empresarial<br>
                                • Cronograma de etapas de despliegue, arquitectura e inversión<br>
                                • Pruebas parciales sobre auditoría y gobierno de datos
                            </td>
                        </tr>

                        <!-- RAP 9 -->
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">9</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Demuestra a través de textos escritos y relatos orales que puede comunicarse en segunda lengua (inglés) en nivel B1 acorde con los estándares del Marco Común Europeo de Referencia (MCER).
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Inglés I (Sem 1)<br>
                                • Inglés II (Sem 2)<br>
                                • Inglés III (Sem 3)<br>
                                • Inglés IV (Sem 4)<br>
                                • Inglés V (Sem 5)<br>
                                • Inglés VI (Sem 6)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Entrevistas y exposiciones orales en segunda lengua<br>
                                • Redacción de correos, resúmenes e informes técnicos en inglés<br>
                                • Mesas redondas y foros sobre temáticas de negocios en inglés<br>
                                • Evaluaciones estandarizadas de competencia lectora y auditiva
                            </td>
                        </tr>

                        <!-- RAP 10 -->
                        <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">10</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Ejecuta proyectos emprendedores innovadores mediante la identificación de oportunidades de negocio, creatividad en modelos de ingresos y desarrollo de planes estratégicos que optimicen los recursos disponibles.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Cultura Emprendedora (Sem 3)<br>
                                • Creatividad e Innovación (Sem 4)<br>
                                • Proyecto Empresarial (Sem 7)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Estudios de caso de emprendimientos y startups exitosas<br>
                                • Redacción de ensayos y justificaciones de modelos de negocio<br>
                                • Propuesta documental completa del Proyecto Empresarial<br>
                                • Sustentación y pitch de negocio ante panel evaluador
                            </td>
                        </tr>

                        <!-- RAP 11 -->
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">11</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Demuestra transparencia, responsabilidad e imparcialidad en la dirección del proceso administrativo, aplicando principios éticos, responsabilidad social empresarial (RSE) y directrices de gobierno corporativo.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Liderazgo (Sem 4)<br>
                                • Electiva Humanística I (Sem 4)<br>
                                • Electiva Humanística II (Sem 6)<br>
                                • Electivas Profundización I, II, III<br>
                                • Deontología (Sem 8)<br>
                                • Responsabilidad Social Emp. (Sem 9)<br>
                                • Gobierno Corporativo (Sem 9)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Foros y debates sobre casos de dilemas éticos y corrupción<br>
                                • Redacción de textos argumentativos sobre ética, RSE y familia<br>
                                • Propuesta documental de Código de Ética y Buen Gobierno<br>
                                • Evaluación de impactos ambientales y sociales de las decisiones
                            </td>
                        </tr>

                        <!-- RAP 12 -->
                        <tr style="border-bottom:2px solid #CBD5E1; background:#F8FAFC;">
                            <td style="text-align:center; font-weight:800; color:var(--carbon);">12</td>
                            <td style="padding:10px; font-weight:700; color:#1E293B; line-height:1.45;">
                                Formula y ejecuta proyectos de investigación formativa utilizando metodologías cualitativas y cuantitativas para abordar y resolver problemas específicos del contexto empresarial y social de acuerdo a su nivel formativo.
                            </td>
                            <td style="padding:10px; color:#0369A1; line-height:1.5;">
                                • Metodología de la Investigación (Sem 2)<br>
                                • Métodos Cualitativos y Cuantitativos (Sem 6)<br>
                                • Proyecto de Grado I (Sem 8)<br>
                                • Proyecto de Grado II (Sem 9)
                            </td>
                            <td style="padding:10px; color:#334155; line-height:1.5;">
                                • Propuesta preliminar y protocolo de investigación formal<br>
                                • Instrumentos de recolección de datos (guiones, encuestas, grupos focales)<br>
                                • Documento final del Proyecto de Grado estructurado<br>
                                • Redacción de artículo científico derivado de la investigación<br>
                                • Sustentación oral pública ante jurados calificadores
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="font-size:0.75rem; color:var(--gray-text); text-align:right;">
                Fuente: [Anexo 5. Documento Maestro Administración de Empresas_RU inicial], Tabla 15, págs. 154 a 159.
            </div>
        </div>
    </div>
    
    </div>
</div>

<!-- =========================================================
     MAIN TAB 2: PLAN DE ESTUDIOS PROPUESTO (144 CRÉDITOS - 8 SEMESTRES)
     ========================================================= -->
<div class="tab-panel" id="c3-main-propuesto" style="display:none;">
    <div class="tabs-container" id="c3PropuestoSubTabs">
        <div class="tabs-nav">
            <button class="tab-btn active" data-tab="c3-p-malla" onclick="switchTab('c3PropuestoSubTabs','c3-p-malla')">
                <i class="fas fa-table"></i> 1. Malla Curricular (Matriz Global)
            </button>
            <button class="tab-btn" data-tab="c3-p-areas" onclick="switchTab('c3PropuestoSubTabs','c3-p-areas')">
                <i class="fas fa-layer-group"></i> 2. Áreas de Formación
            </button>
            <button class="tab-btn" data-tab="c3-p-perfiles" onclick="switchTab('c3PropuestoSubTabs','c3-p-perfiles')">
                <i class="fas fa-user-graduate"></i> 3. Perfiles y RAPs
            </button>
            <button class="tab-btn" data-tab="c3-p-flex" onclick="switchTab('c3PropuestoSubTabs','c3-p-flex')">
                <i class="fas fa-sliders-h"></i> 4. Flexibilidad Curricular
            </button>
            <button class="tab-btn" data-tab="c3-p-eval" onclick="switchTab('c3PropuestoSubTabs','c3-p-eval')">
                <i class="fas fa-tasks"></i> 5. Evaluación de RA y Rúbricas
            </button>
        </div>

        <!-- SUB TAB 1.1: MALLA GLOBAL PROPUESTO -->
        <div class="tab-panel active" id="c3-p-malla" style="display:block;">
            <div style="margin-bottom:14px; background:#F8FAFC; border:1px solid #E2E8F0; padding:12px 16px; border-radius:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                    <i class="fas fa-table" style="color:var(--orange);"></i> Matriz Global del Plan de Estudios Propuesto (144 Créditos - 8 Semestres)
                </h4>
                <p style="font-size:0.83rem; color:var(--gray-text); margin-bottom:8px;">
                    Visualización en matriz continua: Componentes Curriculares (filas) × Semestres Académicos (columnas I a VIII) según las <strong>Tablas 15 y 16 del Documento Maestro</strong>. Haz clic sobre cualquier asignatura para desplegar su trazabilidad detallada.
                </p>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-clock"></i> Presencial (1:2): 48h Directas / 96h Indep.
                    </span>
                    <span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-laptop"></i> Virtual (1:3): 36h Mediadas / 108h Indep.
                    </span>
                    <span class="badge-presencial" style="background:#0F172A; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-check-circle"></i> 48 Asignaturas · 144 Créditos
                    </span>
                </div>
            </div>

            <!-- TABLA DE MALLA PROPUESTO -->
            
    <!-- HEADER BADGE -->
    <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:10px 16px; border-radius:8px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="font-size:0.86rem; font-weight:800; color:#065F46;">
            <i class="fas fa-desktop" style="color:#059669; margin-right:6px;"></i> Vista 100% Pantalla Completa — Plan Propuesto (144 cr - 8 Semestres I a VIII)
        </div>
        <div style="display:flex; gap:8px;">
            <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:20px;">
                <i class="fas fa-check-double"></i> Malla por Componentes (Tablas 15 y 16)
            </span>
            <span class="badge-presencial" style="background:#0F172A; color:#fff; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:20px;">
                <i class="fas fa-list-ol"></i> 48 Asignaturas · 144 Créditos
            </span>
        </div>
    </div>

    <div class="malla-matrix-scale-outer" id="malla-matrix-outer-prop">
        <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-prop">
            <table class="malla-matrix-table malla-matrix-table-8sem">
                <thead>
                    <tr>
                        <th class="matrix-comp-header-corner">
                            <i class="fas fa-layer-group" style="color:var(--orange); margin-right:4px;"></i> COMPONENTE CURRICULAR
                        </th>
                        <th class="sem-header">SEM 1</th><th class="sem-header">SEM 2</th><th class="sem-header">SEM 3</th><th class="sem-header">SEM 4</th><th class="sem-header">SEM 5</th><th class="sem-header">SEM 6</th><th class="sem-header">SEM 7</th><th class="sem-header">SEM 8</th>
                    </tr>
                </thead>
                <tbody><tr>
            <td class="matrix-comp-header comp-border-ciencias_basicas" style="border-left:4px solid #2563EB;">
                <span class="matrix-area-badge area-transversal">Área Transversal</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-calculator" style="color:#2563EB; margin-right:4px;"></i> Ciencias Básicas y Cuantitativas
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_1', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Álgebra Lineal</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_7', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Cálculo Diferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Álgebra Lineal</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_8', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Álgebra Lineal</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_13', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_31', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Big Data y Analítica de Datos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_32', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Métodos Cualitativos y Cuantitativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-legislacion_habilidades" style="border-left:4px solid #1D4ED8;">
                <span class="matrix-area-badge area-transversal">Área Transversal</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-balance-scale" style="color:#1D4ED8; margin-right:4px;"></i> Legislación, Investigación y Habilidades
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_2', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Comunicación Oral y Escrita</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_3', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Cátedra de la Paz y Resolución de Conflictos</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_9', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_11', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_14', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_19', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Competencias Investigativas</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Comunicación Oral y Escrita</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_20', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_24', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Derecho Laboral y Seguridad Social</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-admon_gestion" style="border-left:4px solid #F39200;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-briefcase" style="color:#F39200; margin-right:4px;"></i> Administración y Gestión
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_4', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_17', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Procesos Administrativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_18', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_25', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia del Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_27', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gestión de Operaciones</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_28', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Sistemas Integrados de Gestión (HSEQ)</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_37', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Pensamiento Estratégico y Prospectivo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_40', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gestión de Operaciones</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_45', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Juego Gerencial (Simulación de Negocios)</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_46', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales y Liderazgo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_47', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de la Calidad</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Sistemas Integrados de Gestión (HSEQ)</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_48', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Métodos Cualitativos y Cuantitativos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-economia_finanzas" style="border-left:4px solid #D97706;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-chart-pie" style="color:#D97706; margin-right:4px;"></i> Economía y Finanzas
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_5', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables y Financieros</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_10', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_12', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Costos y Presupuestos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_15', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_16', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Análisis Financiero</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos y Presupuestos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_22', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo Diferencial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_23', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Economía Colombiana e Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_26', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Administración Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Análisis Financiero</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_34', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Legislación Tributaria</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Laboral y Seguridad Social</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-mercadeo_tech" style="border-left:4px solid #EA580C;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-lightbulb" style="color:#EA580C; margin-right:4px;"></i> Mercadeo, Tecnología y Emprendimiento
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_6', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_21', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_29', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Negocios y Gerencia Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Economía Colombiana e Internacional</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_33', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de Marketing</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Mercados</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_35', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Modelos de Emprendimiento</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_38', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Formulación y Evaluación de Proyectos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración Financiera</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_39', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Gerencia de Ventas y Canales de Distribución</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Marketing</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_41', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">E-Commerce</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Marketing</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_43', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Inteligencia Artificial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Big Data y Analítica de Datos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_44', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">TP</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Laboratorio de Innovación y Emprendimiento</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Modelos de Emprendimiento</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-electivo" style="border-left:4px solid #475569;">
                <span class="matrix-area-badge area-electiva">Área Electiva</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-sliders-h" style="color:#475569; margin-right:4px;"></i> Electivas Profesionales
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_30', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Profesional I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_36', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Profesional II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profesional I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_42', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <div>
                                <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                                <span style="font-size:0.55rem; font-weight:800; color:#1E293B; background:#E2E8F0; padding:1px 3px; border-radius:3px; margin-left:2px;">T</span>
                            </div>
                        </div>
                        <div class="subject-card-title">Electiva Profesional III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profesional II</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr></tbody></table></div></div>

            <!-- PANEL INFERIOR DE DETALLE -->
            <div id="c3-propuesto-matrix-detail-panel" style="margin-top:20px; background:#fff; border:1px solid #CBD5E1; border-radius:8px; padding:20px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="text-align:center; padding:24px; color:var(--gray-text);">
                    <i class="fas fa-mouse-pointer" style="font-size:1.8rem; color:var(--orange); margin-bottom:10px;"></i>
                    <h4 style="font-size:1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">Selecciona una Asignatura de la Malla</h4>
                    <p style="font-size:0.82rem; margin:0;">Haz clic sobre cualquier tarjeta de la matriz superior para inspeccionar sus 3 unidades temáticas, resultados de aprendizaje y criterios de evaluación.</p>
                </div>
            </div>
        </div>

        <div class="tab-panel" id="c3-p-areas" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
 Distribución de Áreas de Formación (Plan Propuesto - 144 Créditos)
 </h3>
 <div class="grid-4" style="margin-bottom:24px;">
 <div class="card" style="border-top:4px solid #0284C7; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#0284C7;">24 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Básica</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">8 Asignaturas (16.7%)</p>
 </div>
 <div class="card" style="border-top:4px solid #7C3AED; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#7C3AED;">84 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Disciplinar</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">28 Asignaturas (58.3%)</p>
 </div>
 <div class="card" style="border-top:4px solid #16A34A; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#16A34A;">24 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Transversal</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">8 Asignaturas (16.7%)</p>
 </div>
 <div class="card" style="border-top:4px solid #D97706; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#D97706;">12 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Electiva</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">4 Asignaturas (8.3%)</p>
 </div>
 </div>
 """ + areas_propuesto_html + """
 </div>

 <!-- SUB TAB 1.3: PERFILES Y RAPS PROPUESTOS -->

        <div class="tab-panel" id="c3-p-perfiles" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
 Perfil del Egresado y Matriz de Resultados de Aprendizaje (RAP 1 a 10)
 </h3>

 <div class="card" style="margin-bottom:24px; border-left:6px solid #16A34A;">
 <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin-bottom:8px;">
 <i class="fas fa-user-tie" style="color:#16A34A;"></i> Perfil Profesional del Administrador de Empresas CETO
 </h4>
 <p style="font-size:0.86rem; color:var(--gray-text); line-height:1.5;">
 El Administrador de Empresas graduado de CETO es un profesional integral, innovador y ético, capacitado para dirigir, gestionar y transformar organizaciones sostenibles en entornos globalizados y digitales. Posee sólidas competencias en analítica de datos, toma de decisiones estratégicas, gestión financiera, liderazgo de equipos y formulación de proyectos con impacto social y ambiental.
 </p>
 </div>

 <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:14px;">
 <i class="fas fa-bullseye" style="color:var(--orange);"></i> Los 10 Resultados de Aprendizaje del Programa (RAPs Oficiales)
 </h4>
 <div class="grid-2" style="margin-bottom:28px;">
 <div class="card" style="border-top:4px solid #0284C7;">
 <span class="badge-presencial" style="background:#0284C7; color:#fff; font-weight:800;">RAP 1 - Gestión Estratégica</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Diseña y aplica modelos de gestión estratégica para optimizar la toma de decisiones organizacionales.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Teoría Organizacional, Gerencia Estratégica, Planeación y Prospectiva.</div>
 </div>
 <div class="card" style="border-top:4px solid #7C3AED;">
 <span class="badge-presencial" style="background:#7C3AED; color:#fff; font-weight:800;">RAP 2 - Gestión Financiera</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Evalúa y gestiona la sostenibilidad financiera empresarial mediante el análisis de costos y presupuestos.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Fundamentos Contables, Costos, Presupuesto, Gerencia Financiera.</div>
 </div>
 <div class="card" style="border-top:4px solid #16A34A;">
 <span class="badge-presencial" style="background:#16A34A; color:#fff; font-weight:800;">RAP 3 - Innovación & Emprendimiento</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Formula y consolida modelos de negocio innovadores y sostenibles en mercados competitivos.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Creatividad e Innovación, Modelo de Negocios, Laboratorio de Innovación.</div>
 </div>
 <div class="card" style="border-top:4px solid #EA580C;">
 <span class="badge-presencial" style="background:#EA580C; color:#fff; font-weight:800;">RAP 4 - Operaciones & Logística</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Optimiza procesos productivos, cadenas de suministro y logística operativa sostenible.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Gerencia de Producción, Logística y Cadena de Suministro.</div>
 </div>
 <div class="card" style="border-top:4px solid #DB2777;">
 <span class="badge-presencial" style="background:#DB2777; color:#fff; font-weight:800;">RAP 5 - Talento Humano & Liderazgo</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Lidera equipos de trabajo promoviendo el bienestar, el clima organizacional y la productividad.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Habilidades Gerenciales, Gestión del Talento Humano, Liderazgo.</div>
 </div>
 <div class="card" style="border-top:4px solid #0D9488;">
 <span class="badge-presencial" style="background:#0D9488; color:#fff; font-weight:800;">RAP 6 - Analítica & Big Data</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Aplica herramientas de analítica digital y business intelligence para diagnosticar problemas complejos.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Informática Empresarial, Big Data y Analítica, IA para los Negocios.</div>
 </div>
 <div class="card" style="border-top:4px solid #DC2626;">
 <span class="badge-presencial" style="background:#DC2626; color:#fff; font-weight:800;">RAP 7 - Ética & Sostenibilidad</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Actúa con responsabilidad social, bioética y cumplimiento normativo corporativo.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Deontología, Responsabilidad Social Empresarial, Gobierno Corporativo.</div>
 </div>
 <div class="card" style="border-top:4px solid #D97706;">
 <span class="badge-presencial" style="background:#D97706; color:#fff; font-weight:800;">RAP 8 - Investigación Gerencial</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Desarrolla proyectos de investigación aplicada orientados a solucionar problemáticas empresariales.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Metodología de Investigación, Proyecto de Grado I, Proyecto de Grado II.</div>
 </div>
 <div class="card" style="border-top:4px solid #2563EB;">
 <span class="badge-presencial" style="background:#2563EB; color:#fff; font-weight:800;">RAP 9 - Mercado Global & E-Commerce</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Diseña estrategias de comunicación digital, internacionalización y marketing electrónico.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Fundamentos de Mercadeo, E-Commerce y Marketing Digital, Negocios Internacionales.</div>
 </div>
 <div class="card" style="border-top:4px solid #475569;">
 <span class="badge-presencial" style="background:#475569; color:#fff; font-weight:800;">RAP 10 - Pensamiento Cuantitativo</span>
 <p style="font-size:0.84rem; color:var(--carbon); margin-top:8px; font-weight:600;">Analiza datos matemáticos y estadísticos para predecir tendencias y optimizar recursos.</p>
 <div style="font-size:0.78rem; color:var(--gray-text); margin-top:6px;"><strong>Asignaturas Clave:</strong> Álgebra Lineal, Cálculo Diferencial, Estadística Inferencial.</div>
 </div>
 </div>
 </div>

 <!-- SUB TAB 1.4: FLEXIBILIDAD PROPUESTA -->

        <div class="tab-panel" id="c3-p-flex" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
 Lineamientos de Flexibilidad Curricular en 4 Dimensiones (Plan Propuesto)
 </h3>
 <div class="grid-2" style="margin-bottom:24px;">
 <div class="card" style="border-top:4px solid #0284C7;">
 <h4><i class="fas fa-sliders-h" style="color:#0284C7;"></i> 1. Dimensión de Electividad (12 Créditos)</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">4 asignaturas electivas profesionales (Electivas I a IV) distribuídas en los semestres 5, 6, 7 y 8, permitiendo rutas de profundización en Big Data, Finanzas Digitales, Sostenibilidad o E-Commerce.</p>
 </div>
 <div class="card" style="border-top:4px solid #16A34A;">
 <h4><i class="fas fa-globe-americas" style="color:#16A34A;"></i> 2. Dimensión de Movilidad Académica</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Convenios de movilidad nacional e internacional para estudiantes de ambas modalidades (Presencial y Virtual), incluyendo clases espejo, estancias de investigación y pasantías.</p>
 </div>
 <div class="card" style="border-top:4px solid #7C3AED;">
 <h4><i class="fas fa-exchange-alt" style="color:#7C3AED;"></i> 3. Dimensión de Homologación & Coterminales</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Reconocimiento de saberes previos, homologación de egresados de programas técnicos/tecnológicos y opción de cursar asignaturas coterminales de nivel de posgrado (Especialización y Maestría).</p>
 </div>
 <div class="card" style="border-top:4px solid #EA580C;">
 <h4><i class="fas fa-certificate" style="color:#EA580C;"></i> 4. Dimensión de Doble Titulación & Microcredenciales</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Certificaciones intermedias por ciclos de competencias y posibilidades de doble titulación con programas afines de la institución.</p>
 </div>
 </div>
 </div>

 <!-- SUB TAB 1.5: EVALUACIÓN PROPUESTA -->

        
<div class="tab-panel" id="c3-p-eval" style="display:none;">
    <!-- BANNER DESTACADO CON BOTÓN A INDUCCIÓN DOCENTE -->
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D3748 100%); color:#fff; padding:24px; border-radius:12px; margin-bottom:28px; border-left:6px solid var(--orange); box-shadow:0 10px 25px rgba(0,0,0,0.15);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div style="max-width:700px;">
                <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:var(--orange); font-weight:800; margin-bottom:6px;">
                    <i class="fas fa-award"></i> Modelo Pedagógico y Alineación Curricular CETO · Decreto 1330
                </div>
                <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:8px;">
                    Inducción Docente Académico: Sistema de Evaluación por RAs y Rúbricas Analíticas
                </h3>
                <p style="color:#E2E8F0; font-size:0.88rem; line-height:1.6; margin:0;">
                    Guía institucional de alineación curricular para el cuerpo profesoral de la Corporación Escuela Tecnológica del Oriente. Define la coherencia pedagógica entre el Perfil de Egreso, los RAPs, el diseño del Syllabus en 3 Unidades Temáticas, la evaluación del aprendizaje con dos actividades por unidad (20%, 25%, 55%) y el sistema de Rúbricas Analíticas (60% Disciplinar, 30% Genéricas Saber Pro, 10% Formalidad).
                </p>
            </div>
            <div>
                <a href="induccion_docente.html" target="_blank" style="background:var(--orange); color:#fff; padding:12px 22px; border-radius:8px; font-weight:800; font-size:0.86rem; text-decoration:none; display:inline-flex; align-items:center; gap:10px; box-shadow:0 4px 15px rgba(243,146,0,0.4); transition:all 0.2s ease;">
                    <i class="fas fa-chalkboard-teacher"></i> Explorar Presentación Interactiva <i class="fas fa-external-link-alt" style="font-size:0.75rem;"></i>
                </a>
            </div>
        </div>
    </div>

    <!-- 1. RUTA DE COHERENCIA CURRICULAR -->
    <div class="card" style="margin-bottom:24px; border-top:4px solid #0284C7;">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
            <i class="fas fa-route" style="color:#0284C7;"></i> 1. Ruta de Coherencia Curricular Institucional
        </h4>
        <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:16px;">
            Flujo metodológico descendente que asegura la articulación entre el perfil profesional y el aula de clase:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; text-align:center;">
            <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:12px; border-radius:8px;">
                <div style="font-size:1.2rem; color:#0284C7; margin-bottom:6px;"><i class="fas fa-id-card"></i></div>
                <div style="font-size:0.75rem; font-weight:800; color:#0369A1;">PASO 1</div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--carbon);">Perfil de Egreso</div>
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">Competencias esperadas en el graduado</div>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:12px; border-radius:8px;">
                <div style="font-size:1.2rem; color:#16A34A; margin-bottom:6px;"><i class="fas fa-bullseye"></i></div>
                <div style="font-size:0.75rem; font-weight:800; color:#15803D;">PASO 2</div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--carbon);">RAPs del Programa</div>
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">Resultados a nivel de programa (1 a 8)</div>
            </div>
            <div style="background:#FEF3C7; border:1px solid #FDE68A; padding:12px; border-radius:8px;">
                <div style="font-size:1.2rem; color:#D97706; margin-bottom:6px;"><i class="fas fa-book-open"></i></div>
                <div style="font-size:0.75rem; font-weight:800; color:#B45309;">PASO 3</div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--carbon);">Syllabus del Curso</div>
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">Microcurrículo y 3 Unidades Temáticas</div>
            </div>
            <div style="background:#FAF5FF; border:1px solid #E9D5FF; padding:12px; border-radius:8px;">
                <div style="font-size:1.2rem; color:#9333EA; margin-bottom:6px;"><i class="fas fa-tasks"></i></div>
                <div style="font-size:0.75rem; font-weight:800; color:#7E22CE;">PASO 4</div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--carbon);">RAs de Asignatura</div>
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">3 RAs alineados a las 3 unidades</div>
            </div>
            <div style="background:#FFF1F2; border:1px solid #FECDD3; padding:12px; border-radius:8px;">
                <div style="font-size:1.2rem; color:#E11D48; margin-bottom:6px;"><i class="fas fa-clipboard-check"></i></div>
                <div style="font-size:0.75rem; font-weight:800; color:#BE123C;">PASO 5</div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--carbon);">Evidencias y Rúbricas</div>
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">Evaluación con rúbricas analíticas</div>
            </div>
        </div>
    </div>

    <!-- 2. FUNDAMENTOS TEÓRICOS DEL MODELO PEDAGÓGICO -->
    <div class="card" style="margin-bottom:24px; border-top:4px solid var(--carbon);">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
            <i class="fas fa-university" style="color:var(--orange);"></i> 2. Fundamentos Teóricos del Modelo Pedagógico CETO
        </h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background:#F5F3FF; border:1px solid #DDD6FE; padding:14px; border-radius:8px;">
                <div style="font-weight:800; color:#5B21B6; font-size:0.86rem; margin-bottom:4px;">
                    <i class="fas fa-brain"></i> David Ausubel · Aprendizaje Significativo
                </div>
                <p style="font-size:0.8rem; color:#4C1D95; line-height:1.5; margin:0;">
                    Los nuevos saberes se articulan sobre la estructura cognitiva previa del estudiante mediante organizadores previos, casos aplicados y proyectos contextuales.
                </p>
            </div>
            <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:14px; border-radius:8px;">
                <div style="font-weight:800; color:#065F46; font-size:0.86rem; margin-bottom:4px;">
                    <i class="fas fa-people-arrows"></i> Lev Vygotsky &amp; John Dewey · Zona de Desarrollo Próximo
                </div>
                <p style="font-size:0.8rem; color:#064E3B; line-height:1.5; margin:0;">
                    Andamiaje pedagógico del docente en la mediación presencial y virtual, aprendizaje experiencial y "aprender haciendo" en entornos simulados y empresariales.
                </p>
            </div>
        </div>
    </div>

    <!-- 3. CICLO OPERATIVO TRIMESTRAL DE EVALUACIÓN (8 SEMANAS) -->
    <div class="card" style="margin-bottom:24px; border-top:4px solid #16A34A;">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
            <i class="fas fa-calendar-alt" style="color:#16A34A;"></i> 3. Ciclo Operativo Trimestral de Evaluación (8 Semanas · 3 Unidades)
        </h4>
        <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:16px;">
            Distribución obligatoria de fases, unidades temáticas, resultados de aprendizaje y porcentajes evaluativos según el modelo CETO:
        </p>

        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px;">
            <!-- FASE 1 -->
            <div style="background:#F8FAFC; border:2px solid #3B82F6; border-radius:10px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="background:#3B82F6; color:#fff; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:12px;">
                        SEMANAS 1 - 2
                    </span>
                    <span style="font-size:1.1rem; font-weight:900; color:#3B82F6;">20%</span>
                </div>
                <h5 style="font-size:0.92rem; font-weight:800; color:var(--carbon); margin-bottom:6px;">Unidad 1: Fundamentación</h5>
                <p style="font-size:0.78rem; color:var(--gray-text); margin-bottom:12px;">
                    <i class="fas fa-bullseye" style="color:var(--orange);"></i> <strong>Alineada a: RA1</strong><br>
                    Diagnóstico inicial, fundamentación teórica y nivelación conceptual.
                </p>
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; padding:8px 10px; border-radius:6px; margin-bottom:6px; font-size:0.78rem; display:flex; justify-content:space-between;">
                    <span><strong>Actividad 1.1:</strong> Tarea 1 (Taller Aplicativo)</span>
                    <strong style="color:#1D4ED8;">15%</strong>
                </div>
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; padding:8px 10px; border-radius:6px; font-size:0.78rem; display:flex; justify-content:space-between;">
                    <span><strong>Actividad 1.2:</strong> Quiz 1 (Control de Lectura)</span>
                    <strong style="color:#1D4ED8;">5%</strong>
                </div>
            </div>

            <!-- FASE 2 -->
            <div style="background:#F8FAFC; border:2px solid var(--orange); border-radius:10px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="background:var(--orange); color:#fff; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:12px;">
                        SEMANAS 3 - 5
                    </span>
                    <span style="font-size:1.1rem; font-weight:900; color:var(--orange);">25%</span>
                </div>
                <h5 style="font-size:0.92rem; font-weight:800; color:var(--carbon); margin-bottom:6px;">Unidad 2: Desarrollo y Aplicación</h5>
                <p style="font-size:0.78rem; color:var(--gray-text); margin-bottom:12px;">
                    <i class="fas fa-bullseye" style="color:var(--orange);"></i> <strong>Alineada a: RA2</strong><br>
                    Cierre de brechas, estudios de casos empresariales y modelación ABP.
                </p>
                <div style="background:#FFFBEB; border:1px solid #FCD34D; padding:8px 10px; border-radius:6px; margin-bottom:6px; font-size:0.78rem; display:flex; justify-content:space-between;">
                    <span><strong>Actividad 2.1:</strong> Tarea 2 (Estudio de Caso)</span>
                    <strong style="color:#B45309;">20%</strong>
                </div>
                <div style="background:#FFFBEB; border:1px solid #FCD34D; padding:8px 10px; border-radius:6px; font-size:0.78rem; display:flex; justify-content:space-between;">
                    <span><strong>Actividad 2.2:</strong> Quiz 2 (Evaluación Analítica)</span>
                    <strong style="color:#B45309;">5%</strong>
                </div>
            </div>

            <!-- FASE 3 -->
            <div style="background:#F8FAFC; border:2px solid #16A34A; border-radius:10px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="background:#16A34A; color:#fff; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:12px;">
                        SEMANAS 6 - 8
                    </span>
                    <span style="font-size:1.1rem; font-weight:900; color:#16A34A;">55%</span>
                </div>
                <h5 style="font-size:0.92rem; font-weight:800; color:var(--carbon); margin-bottom:6px;">Unidad 3: Cierre y Consolidación</h5>
                <p style="font-size:0.78rem; color:var(--gray-text); margin-bottom:12px;">
                    <i class="fas fa-bullseye" style="color:var(--orange);"></i> <strong>Alineada a: RA3</strong><br>
                    Validación del RA, sustentación de producto y cierre curricular.
                </p>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:8px 10px; border-radius:6px; margin-bottom:6px; font-size:0.78rem; display:flex; justify-content:space-between;">
                    <span><strong>Actividad 3.1:</strong> Tarea 3 (Producto Integrador)</span>
                    <strong style="color:#15803D;">20%</strong>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:8px 10px; border-radius:6px; font-size:0.78rem; display:flex; justify-content:space-between;">
                    <span><strong>Actividad 3.2:</strong> Examen Final / Sustentación</span>
                    <strong style="color:#15803D;">35%</strong>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. RÚBRICAS ANALÍTICAS INSTITUCIONALES CETO -->
    <div class="card" style="margin-bottom:24px; border-top:4px solid #7C3AED;">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
            <i class="fas fa-tasks" style="color:#7C3AED;"></i> 4. Sistema Institucional de Rúbricas Analíticas CETO
        </h4>
        <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:16px;">
            Estructura estandarizada con la que todos los docentes deben calificar cada evidencia entregable:
        </p>

        <table class="tbl" style="margin-bottom:16px;">
            <thead>
                <tr>
                    <th style="width:25%;">Criterio Evaluativo</th>
                    <th style="width:10%; text-align:center;">Peso</th>
                    <th style="width:25%;">Excelente (4.6 - 5.0)</th>
                    <th style="width:20%;">Sobresaliente (4.0 - 4.5)</th>
                    <th style="width:20%;">Aceptable (3.0 - 3.9)</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row-accent">
                    <td class="lb">
                        <strong style="color:#3B82F6;"><i class="fas fa-cogs"></i> Criterio Disciplinar</strong><br>
                        <span style="font-size:0.75rem; color:var(--gray-text);">Dominio técnico, metodológico y conceptual del saber específico.</span>
                    </td>
                    <td style="text-align:center; font-weight:900; color:#3B82F6; font-size:1.1rem;">60%</td>
                    <td style="font-size:0.8rem;">Demuestra dominio exhaustivo de conceptos, rigor metodológico y aplicación innovadora a situaciones empresariales complejas.</td>
                    <td style="font-size:0.8rem;">Aplica adecuadamente los conceptos y metodologías con errores menores no estructurales en el análisis.</td>
                    <td style="font-size:0.8rem;">Aplica conceptos mínimos requeridos pero con debilidades en la profundización o rigor procedimental.</td>
                </tr>
                <tr>
                    <td class="lb">
                        <strong style="color:#14B8A6;"><i class="fas fa-brain"></i> Criterio Genérico / Saber Pro</strong><br>
                        <span style="font-size:0.75rem; color:var(--gray-text);">Lectura crítica, razonamiento cuantitativo y comunicación escrita.</span>
                    </td>
                    <td style="text-align:center; font-weight:900; color:#14B8A6; font-size:1.1rem;">30%</td>
                    <td style="font-size:0.8rem;">Argumentación sólida, pensamiento crítico analítico y comunicación técnica impecable acorde al nivel profesional.</td>
                    <td style="font-size:0.8rem;">Buena argumentación y claridad expositiva con estructura lógica coherente y fundamentación adecuada.</td>
                    <td style="font-size:0.8rem;">Argumentación básica con limitaciones en la profundidad del análisis crítico y la redacción formal.</td>
                </tr>
                <tr class="row-accent">
                    <td class="lb">
                        <strong style="color:#F59E0B;"><i class="fas fa-file-alt"></i> Criterio de Formalidad y Ética</strong><br>
                        <span style="font-size:0.75rem; color:var(--gray-text);">Normas APA, puntualidad, ética académica y trabajo en equipo.</span>
                    </td>
                    <td style="text-align:center; font-weight:900; color:#F59E0B; font-size:1.1rem;">10%</td>
                    <td style="font-size:0.8rem;">Cumplimiento riguroso de normas APA séptima edición, entrega oportuna y conducta ética ejemplar.</td>
                    <td style="font-size:0.8rem;">Cumple normas APA con detalles menores de citación bibliográfica y entrega en los plazos fijados.</td>
                    <td style="font-size:0.8rem;">Presenta inconsistencias en normas de citación formal o retrasos leves en la entrega de la evidencia.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 5. VISOR INTERACTIVO DE LA PRESENTACIÓN INSTITUCIONAL -->
    <div class="card" style="border-top:4px solid var(--carbon);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                <i class="fas fa-desktop" style="color:var(--orange);"></i> 5. Visor Interactivo Embebido: Presentación Inducción Docente Académico
            </h4>
            <a href="induccion_docente.html" target="_blank" style="font-size:0.8rem; color:var(--orange); font-weight:700; text-decoration:none;">
                <i class="fas fa-external-link-alt"></i> Abrir en ventana completa
            </a>
        </div>
        <div style="width:100%; height:550px; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; background:#F8FAFC;">
            <iframe src="induccion_docente.html" style="width:100%; height:100%; border:none;" title="Presentación Inducción Docente Académico"></iframe>
        </div>
    </div>
</div>

    </div>
</div>

<!-- =========================================================
     MAIN TAB 3: COMPARACIÓN Y JUSTIFICACIÓN DE LA REESTRUCTURACIÓN
     ========================================================= -->
<!-- MAIN TAB 3: COMPARACIÓN Y JUSTIFICACIÓN -->
<div class="tab-panel" id="c3-main-comparacion" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:var(--carbon); margin-bottom:6px;">
 <i class="fas fa-balance-scale" style="color:var(--orange);"></i> Cuadro Comparativo, Asignaturas Eliminadas, Nuevas y Tabla de Equivalencias (Decreto 1330)
 </h3>
 <p style="color:var(--gray-text); font-size:0.88rem; margin-bottom:20px;">
 Sustentación técnica y académica entregada a los Pares Académicos del Ministerio de Educación Nacional (MEN) para la Renovación del Registro Calificado Único de Administración de Empresas.
 </p>

    <!-- TABLA 26: COMPARATIVO ENTRE LAS DOS MALLAS CURRICULARES (DOCUMENTO MAESTRO PÁGS. 132-135) -->
    <div class="card" style="margin-bottom:28px; border-top:4px solid #2563EB;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-table" style="color:#2563EB; margin-right:6px;"></i> Tabla 26. Comparativo entre las dos mallas curriculares
                </h4>
                <p style="font-size:0.83rem; color:var(--gray-text); margin-top:2px; margin-bottom:0;">
                    Texto íntegro oficial de la Tabla 26 del Documento Maestro [Anexo 2], págs. 132 a 135.
                </p>
            </div>
            <span class="badge-presencial" style="background:#2563EB; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:20px;">
                <i class="fas fa-balance-scale"></i> Análisis Estructural
            </span>
        </div>

        <div style="overflow-x:auto;">
            <table class="tbl" style="width:100%; font-size:0.82rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:160px;">Aspecto</th>
                        <th style="width:230px; color:#059669;">Malla propuesta (144 cr)</th>
                        <th style="width:230px; color:#0284C7;">Malla Vigente (158 cr)</th>
                        <th style="width:160px;">Modificación realizada</th>
                        <th>Justificación académica y curricular</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #E2E8F0;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Duración del programa</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">8 semestres – 144 créditos</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">9 semestres – 158 créditos</td>
                        <td style="padding:10px; font-weight:600;">Reducción a 8 semestres</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Ajuste para cumplir estándares de eficiencia académica y coherencia con programas nacionales. Permite optimizar recursos y mantener la carga académica sin afectar la formación integral.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Enfoque formativo</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Gerencial, estratégico, tecnológico e innovador</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Tradicional, centrado en la administración funcional</td>
                        <td style="padding:10px; font-weight:600;">Actualización del enfoque</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se adopta un enfoque moderno que integra gestión, innovación, sostenibilidad y transformación digital.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Asignaturas de tecnología y digitalización</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Big Data y Analítica de Datos, Inteligencia Artificial, E-commerce, Sistemas Integrados de Gestión (HSEQ)</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Tecnología e Innovación, Sistema de Información Gerencial, E-commerce (aislada)</td>
                        <td style="padding:10px; font-weight:600;">Inclusión y fortalecimiento de competencias digitales</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se amplía la formación en herramientas digitales, datos e inteligencia artificial, respondiendo a la transformación tecnológica del entorno empresarial.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Asignaturas de innovación y emprendimiento</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Modelos de Emprendimiento, Laboratorio de Innovación y Emprendimiento, Juego Gerencial</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Cultura Emprendedora, Proyecto Empresarial</td>
                        <td style="padding:10px; font-weight:600;">Enfoque práctico e integrador</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se moderniza la línea de emprendimiento, con metodologías de simulación, prototipado y desarrollo de modelos de negocio innovadores.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Línea financiera y económica</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Fundamentos Contables y Financieros, Costos y Presupuestos, Administración Financiera, Análisis Financiero, Matemática Financiera</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Fundamentos Contables, Costos, Presupuesto, Gerencia Financiera</td>
                        <td style="padding:10px; font-weight:600;">Actualización conceptual y metodológica</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se integran finanzas corporativas, análisis financiero y gestión presupuestal con herramientas modernas de decisión.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Línea de gestión organizacional</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Fundamentos de Administración, Procesos Administrativos, Teoría Organizacional, Gerencia de Talento Humano, Pensamiento Estratégico y Prospectivo</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Fundamentos de Administración, Teoría Organizacional, Liderazgo, Administración de Salarios</td>
                        <td style="padding:10px; font-weight:600;">Reestructuración y profundización</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se refuerzan competencias de liderazgo estratégico, planeación prospectiva y desarrollo organizacional.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Línea de mercadeo y negocios internacionales</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Fundamentos de Mercadeo, Gerencia de Marketing, Investigación de Mercados, Negocios y Gerencia Internacional</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Fundamentos de Mercadeo, Gerencia de Mercadeo, Gerencia del Servicio</td>
                        <td style="padding:10px; font-weight:600;">Ampliación del enfoque global</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se fortalecen competencias de marketing estratégico, comercio digital y negocios internacionales.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Componente investigativo</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Competencias Investigativas, Métodos Cualitativos y Cuantitativos, Proyecto de Grado</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Metodología de la Investigación, Proyecto Empresarial, Proyecto de Grado I y II</td>
                        <td style="padding:10px; font-weight:600;">Integración y articulación de la investigación</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se consolida la formación investigativa en tres momentos (bases, métodos y aplicación), mejor articulada con el proyecto final.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Asignaturas de calidad y sostenibilidad</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Sistemas Integrados de Gestión (HSEQ), Gerencia de la Calidad</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Gestión de la Calidad, Responsabilidad Social Empresarial</td>
                        <td style="padding:10px; font-weight:600;">Ampliación temática</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se orienta la formación hacia la sostenibilidad, las normas ISO y la mejora continua.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Componente humanista y ético</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Cátedra de la Paz y Resolución de Conflictos, Comunicación Oral y Escrita, Inglés I–III</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Deontología, Constitución y Democracia, Expresión Oral y Escrita, Inglés I–VI</td>
                        <td style="padding:10px; font-weight:600;">Enfoque ético y ciudadano moderno</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Se prioriza la educación para la paz, la comunicación efectiva y la ética profesional, articuladas con la formación integral.</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E2E8F0;">
                        <td style="padding:10px; font-weight:800; color:var(--carbon);">Electivas</td>
                        <td style="padding:10px; font-weight:700; color:#059669;">Cuatro asignaturas orientadas a profundización profesional</td>
                        <td style="padding:10px; font-weight:700; color:#0284C7;">Tres electivas de profundización y dos humanísticas (5 total)</td>
                        <td style="padding:10px; font-weight:600;">Conserva número, amplía temática</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">Las electivas se orientan a temas actuales: analítica, sostenibilidad, innovación, liderazgo o finanzas.</td>
                    </tr>
                    <tr style="border-bottom:2px solid #CBD5E1; background:#F1F5F9; font-weight:800;">
                        <td style="padding:10px; color:var(--carbon);">Carga académica total</td>
                        <td style="padding:10px; color:#059669; font-size:0.9rem;">144 créditos – 6.912 horas totales</td>
                        <td style="padding:10px; color:#0284C7; font-size:0.9rem;">158 créditos – 7.584 horas totales</td>
                        <td style="padding:10px; color:#C2410C;">Reducción de 14 créditos y 672 horas</td>
                        <td style="padding:10px; color:#475569; line-height:1.5;">El rediseño mejora la eficiencia curricular y la pertinencia frente a estándares nacionales e internacionales.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


 <!-- RESUMEN EJECUTIVO DE INDICADORES -->
 <div class="card" style="margin-bottom:28px; border-top:4px solid var(--orange);">
 <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:14px;">
 <i class="fas fa-chart-line" style="color:var(--orange);"></i> 1. Matriz de Indicadores Curriculares Comparativos
 </h4>
 <table class="tbl">
 <thead>
 <tr>
 <th>Indicador Curricular</th>
 <th>Plan Vigente SACES</th>
 <th>Plan Propuesto (Rediseño)</th>
 <th>Impacto / Justificación Técnica MEN</th>
 </tr>
 </thead>
 <tbody>
 <tr class="row-accent">
 <td class="lb">Duración (Semestres)</td>
 <td>9 Semestres</td>
 <td><strong style="color:var(--orange);">8 Semestres</strong></td>
 <td><span style="color:#059669; font-weight:700;">Optimización de la ruta de titulación</span> adaptada al estándar nacional e internacional de 4 años.</td>
 </tr>
 <tr>
 <td class="lb">Créditos Académicos</td>
 <td>158 Créditos</td>
 <td><strong style="color:var(--orange);">144 Créditos</strong></td>
 <td>Reducción de 14 créditos (-8.86%) eliminando redundancias temáticas sin perder densidad conceptual.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Número de Asignaturas</td>
 <td>58 / 62 Asignaturas</td>
 <td><strong style="color:var(--orange);">48 Asignaturas</strong></td>
 <td>Asignaturas unificadas a 3 créditos cada una (144h totales por curso), garantizando mayor profundidad.</td>
 </tr>
 <tr>
 <td class="lb">Horas Totales del Plan</td>
 <td>7.584 Horas</td>
 <td><strong style="color:var(--orange);">6.912 Horas</strong></td>
 <td>Ruta más ágil y eficiente centrada en competencias y Resultados de Aprendizaje del Programa (RAP).</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Transformación Digital e IA</td>
 <td>Básica / Tradicional</td>
 <td><strong style="color:#0284C7;">Big Data, IA, E-Commerce, Lab. Innovación</strong></td>
 <td>Incorporación de 15 asignaturas de vanguardia tecnológica en los semestres 5, 6, 7 y 8.</td>
 </tr>
 <tr>
 <td class="lb">Ratio Presencial (Acompañamiento)</td>
 <td>36h Directas / 108h Indep.</td>
 <td><strong style="color:#059669;">48h Directas / 96h Indep. (1:2)</strong></td>
 <td><span style="color:#0284C7; font-weight:700;">Cumplimiento estricto MEN:</span> 1 hora acompañada por 2 horas independientes.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Ratio Virtual (Mediación)</td>
 <td>36h Mediadas / 108h Indep.</td>
 <td><strong style="color:#059669;">36h Mediadas / 108h Indep. (1:3)</strong></td>
 <td><span style="color:#059669; font-weight:700;">Cumplimiento estricto MEN:</span> Aprendizaje autónomo guiado en LMS Canvas/Moodle.</td>
 </tr>
 </tbody>
 </table>
 </div>

 <!-- SECCIÓN 2: ASIGNATURAS ELIMINADAS DE LA MALLA VIGENTE -->
 <div class="card" style="margin-bottom:28px; border-top:4px solid #DC2626;">
 <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
 <div>
 <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--carbon); margin:0;">
 <i class="fas fa-trash-alt" style="color:#DC2626; margin-right:8px;"></i> 2. Tabla 27. Asignaturas eliminadas Malla vigente (28 Asignaturas)
 </h4>
 <p style="font-size:0.83rem; color:var(--gray-text); margin-top:2px; margin-bottom:0;">
 Texto oficial de la <strong>Tabla 27</strong> del Documento Maestro [Anexo 2], págs. 136-138: Matriz detallada de las 28 asignaturas del plan de 158 créditos que fueron sustituidas, fusionadas o rearticuladas conceptualmente en el nuevo plan de 144 créditos.
 </p>
 </div>
 <span style="background:#FEE2E2; color:#991B1B; padding:4px 12px; border-radius:20px; font-weight:800; font-size:0.78rem;">
 -28 Asignaturas (-22.58% Reducción)
 </span>
 </div>
 
 <div style="max-height:480px; overflow-y:auto; border:1px solid #CBD5E1; border-radius:8px;">
 <table class="tbl" style="width:100%; margin:0;">
 <thead style="position:sticky; top:0; background:#1A1A1B; color:#fff; z-index:5;">
 <tr>
 <th style="width:220px; color:#fff;">Asignatura Eliminada</th>
 <th style="width:90px; text-align:center; color:#fff;">Sem. Anterior</th>
 <th style="width:140px; color:#fff;">Área de Formación</th>
 <th style="color:#fff;">Justificación Académica y Curricular de Retiro / Sustitución</th>
 </tr>
 </thead>
 <tbody>
 <tr class="row-accent"><td class="lb">Matemáticas Básicas</td><td style="text-align:center; font-weight:700;">1</td><td>Transversal</td><td>Reemplazada por <strong>Álgebra Lineal</strong> (Semestre I) para elevar la capacidad de modelación cuantitativa avanzada.</td></tr>
 <tr><td class="lb">Constitución y Democracia</td><td style="text-align:center; font-weight:700;">1</td><td>Transversal</td><td>Integrada de forma transversal en <strong>Cátedra de la Paz y Resolución de Conflictos</strong> (Semestre I).</td></tr>
 <tr class="row-accent"><td class="lb">Costos</td><td style="text-align:center; font-weight:700;">2</td><td>Disciplinar</td><td>FUSIONADA con Presupuesto en la nueva asignatura unificada <strong>Costos y Presupuestos</strong> (Semestre II, 3 cr).</td></tr>
 <tr><td class="lb">Legislación Laboral</td><td style="text-align:center; font-weight:700;">2</td><td>Transversal</td><td>Modernizada e integrada en la asignatura <strong>Derecho Laboral y Seguridad Social</strong> (Semestre IV, 3 cr).</td></tr>
 <tr class="row-accent"><td class="lb">Administración por Procesos</td><td style="text-align:center; font-weight:700;">3</td><td>Disciplinar</td><td>Reestructurada e incorporada en la asignatura <strong>Procesos Administrativos</strong> (Semestre III, 3 cr).</td></tr>
 <tr><td class="lb">Cultura Emprendedora</td><td style="text-align:center; font-weight:700;">3</td><td>Disciplinar</td><td>Evolucionó a <strong>Modelos de Emprendimiento</strong> (Sem VI) y <strong>Laboratorio de Innovación y Emprendimiento</strong> (Sem VIII).</td></tr>
 <tr class="row-accent"><td class="lb">Derecho Administrativo</td><td style="text-align:center; font-weight:700;">3</td><td>Transversal</td><td>Contenidos normativos clave rearticulados en Derecho Laboral y Legislación Comercial.</td></tr>
 <tr><td class="lb">Creatividad e Innovación</td><td style="text-align:center; font-weight:700;">4</td><td>Disciplinar</td><td>Integrada de forma práctica en el nuevo <strong>Laboratorio de Innovación y Emprendimiento</strong> (Semestre VIII).</td></tr>
 <tr class="row-accent"><td class="lb">Liderazgo</td><td style="text-align:center; font-weight:700;">4</td><td>Disciplinar</td><td>Integrada en la asignatura <strong>Habilidades Gerenciales y Liderazgo</strong> (Semestre VIII).</td></tr>
 <tr><td class="lb">Electiva Humanística I</td><td style="text-align:center; font-weight:700;">4</td><td>Electiva</td><td>Reestructurada dentro de la bolsa de Electivas Profesionales de profundización (I a IV).</td></tr>
 <tr class="row-accent"><td class="lb">Inglés IV</td><td style="text-align:center; font-weight:700;">4</td><td>Transversal</td><td>Plan de bilingüismo optimizado a 3 niveles intensivos integrados (Inglés I, II y III) alineados con MCER.</td></tr>
 <tr><td class="lb">Administración de Salarios</td><td style="text-align:center; font-weight:700;">5</td><td>Disciplinar</td><td>Integrada conceptualmente dentro del núcleo de <strong>Gerencia del Talento Humano</strong> (Semestre V).</td></tr>
 <tr class="row-accent"><td class="lb">Investigación de Operaciones</td><td style="text-align:center; font-weight:700;">5</td><td>Disciplinar</td><td>Reemplazada por la asignatura de vanguardia tecnológica <strong>Big Data y Analítica de Datos</strong> (Semestre VI).</td></tr>
 <tr><td class="lb">Inglés V</td><td style="text-align:center; font-weight:700;">5</td><td>Transversal</td><td>Optimización del esquema de bilingüismo garantizando suficiencia B1 en 3 módulos intensivos.</td></tr>
 <tr class="row-accent"><td class="lb">Electiva Profundización II</td><td style="text-align:center; font-weight:700;">5</td><td>Electiva</td><td>Reorganizada en las 4 Electivas Profesionales de 3 créditos cada una distribuidas en la ruta propuesto.</td></tr>
 <tr><td class="lb">Tecnología e Innovación</td><td style="text-align:center; font-weight:700;">6</td><td>Disciplinar</td><td>Evolucionó hacia las asignaturas especializadas <strong>Inteligencia Artificial</strong> y <strong>Big Data</strong>.</td></tr>
 <tr class="row-accent"><td class="lb">E-Commerce</td><td style="text-align:center; font-weight:700;">6</td><td>Disciplinar</td><td>Actualizada y reubicada estratégicamente en el Semestre VII con enfoque en ecosistemas y pasarelas digitales.</td></tr>
 <tr><td class="lb">Electiva Humanística II</td><td style="text-align:center; font-weight:700;">6</td><td>Electiva</td><td>Reestructurada dentro de la bolsa de Electivas Profesionales.</td></tr>
 <tr class="row-accent"><td class="lb">Inglés VI</td><td style="text-align:center; font-weight:700;">6</td><td>Transversal</td><td>Optimización de la densidad de horas lectivas del plan de estudios.</td></tr>
 <tr><td class="lb">Fundamentos de Admón. Pública</td><td style="text-align:center; font-weight:700;">7</td><td>Transversal</td><td>Contenidos de gestión pública articulados en Teoría Organizacional y Derecho Laboral.</td></tr>
 <tr class="row-accent"><td class="lb">Presupuesto</td><td style="text-align:center; font-weight:700;">7</td><td>Disciplinar</td><td>FUSIONADA en la asignatura <strong>Costos y Presupuestos</strong> (Semestre II).</td></tr>
 <tr><td class="lb">Proyecto Empresarial</td><td style="text-align:center; font-weight:700;">7</td><td>Disciplinar</td><td>Integrado en el nuevo <strong>Laboratorio de Innovación y Emprendimiento</strong> (Semestre VIII).</td></tr>
 <tr class="row-accent"><td class="lb">Gerencia Financiera</td><td style="text-align:center; font-weight:700;">8</td><td>Disciplinar</td><td>Actualizada conceptualmente a <strong>Administración Financiera</strong> (Semestre V).</td></tr>
 <tr><td class="lb">Deontología</td><td style="text-align:center; font-weight:700;">8</td><td>Disciplinar</td><td>Integrada transversalmente en Cátedra de la Paz, Ética Profesional y Responsabilidad Social.</td></tr>
 <tr class="row-accent"><td class="lb">Proyecto de Grado I</td><td style="text-align:center; font-weight:700;">8</td><td>Disciplinar</td><td>Unificado en un único <strong>Proyecto de Grado</strong> integrador (Semestre VIII).</td></tr>
 <tr><td class="lb">Planeación y Prospectiva</td><td style="text-align:center; font-weight:700;">9</td><td>Disciplinar</td><td>Modernizada a <strong>Pensamiento Estratégico y Prospectivo</strong> (Semestre VII).</td></tr>
 <tr class="row-accent"><td class="lb">Gerencia del Servicio</td><td style="text-align:center; font-weight:700;">9</td><td>Disciplinar</td><td>Integrada en Gerencia de Marketing y Gerencia de Ventas y Canales.</td></tr>
 <tr><td class="lb">Gobierno Corporativo</td><td style="text-align:center; font-weight:700;">9</td><td>Disciplinar</td><td>Integrada conceptualmente en Pensamiento Estratégico y Ética Organizacional.</td></tr>
 </tbody>
 </table>
 </div>
 </div>

 <!-- SECCIÓN 3: TABLA 28 - ASIGNATURAS NUEVAS EN LA MALLA PROPUESTA -->
 <div class="card" style="margin-bottom:28px; border-top:4px solid #0284C7;">
 <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
 <div>
 <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--carbon); margin:0;">
 <i class="fas fa-plus-circle" style="color:#0284C7; margin-right:8px;"></i> 3. Tabla 28. Asignaturas Nuevas en la Malla Propuesta (15 Asignaturas)
 </h4>
 <p style="font-size:0.83rem; color:var(--gray-text); margin-top:2px; margin-bottom:0;">
 Tabla 28 oficial del Documento Maestro: Asignaturas incorporadas en el rediseño curricular con su código, créditos, horas por modalidad, prerrequisitos y justificación.
 </p>
 </div>
 <span style="background:#E0F2FE; color:#0369A1; padding:4px 12px; border-radius:20px; font-weight:800; font-size:0.78rem;">
 15 Nuevas Asignaturas (+31.25% Innovación)
 </span>
 </div>

 <div style="max-height:500px; overflow-y:auto; border:1px solid #CBD5E1; border-radius:8px;">
 <table class="tbl" style="width:100%; margin:0;">
 <thead style="position:sticky; top:0; background:#1A1A1B; color:#fff; z-index:5;">
 <tr>
 <th style="width:210px; color:#fff;">Asignatura Nueva</th>
 <th style="width:75px; text-align:center; color:#fff;">Sem.</th>
 <th style="width:65px; text-align:center; color:#fff;">Cr.</th>
 <th style="width:140px; color:#fff;">Horas (Pres/Virt)</th>
 <th style="width:150px; color:#fff;">Prerrequisito Explícito</th>
 <th style="color:#fff;">Justificación Académica y Curricular (Decreto 1330)</th>
 </tr>
 </thead>
 <tbody>
 <tr class="row-accent">
 <td class="lb">Álgebra Lineal</td>
 <td style="text-align:center; font-weight:700;">1</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Ninguno</td>
 <td>Desarrolla el pensamiento lógico-matemático y modelos cuantitativos para la toma de decisiones.</td>
 </tr>
 <tr>
 <td class="lb">Costos y Presupuestos</td>
 <td style="text-align:center; font-weight:700;">2</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Fundamentos Contables</td>
 <td>Unifica el análisis de costeo y planeación presupuestal en una sola estructura analítica más eficiente.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Análisis Financiero</td>
 <td style="text-align:center; font-weight:700;">3</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Fundamentos Contables</td>
 <td>Proporciona diagnóstico cualitativo y cuantitativo de estados financieros para la toma de decisiones.</td>
 </tr>
 <tr>
 <td class="lb">Procesos Administrativos</td>
 <td style="text-align:center; font-weight:700;">3</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Fundamentos de Admón.</td>
 <td>Estructura la planeación, organización, dirección y control operativo de las organizaciones.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Competencias Investigativas</td>
 <td style="text-align:center; font-weight:700;">4</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Ninguno</td>
 <td>Fundamenta la metodología de investigación aplicada a la solución de problemas gerenciales.</td>
 </tr>
 <tr>
 <td class="lb">Derecho Laboral y Seguridad Social</td>
 <td style="text-align:center; font-weight:700;">4</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Ninguno</td>
 <td>Actualiza el marco normativo de relaciones de trabajo, contratación y sistema general de seguridad social.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Administración Financiera</td>
 <td style="text-align:center; font-weight:700;">5</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Análisis Financiero</td>
 <td>Fortalece la toma de decisiones en estructura de capital, fuentes de financiamiento e inversiones de largo plazo.</td>
 </tr>
 <tr>
 <td class="lb">Negocios y Gerencia Internacional</td>
 <td style="text-align:center; font-weight:700;">5</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Economía Colombiana</td>
 <td>Prepara al estudiante para la internacionalización de mercados, acuerdos comerciales y operaciones transfronterizas.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Sistemas Integrados de Gestión (HSEQ)</td>
 <td style="text-align:center; font-weight:700;">5</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Ninguno</td>
 <td>Especializa al administrador en normas ISO (9001, 14001, 45001), sostenibilidad y auditoría de procesos.</td>
 </tr>
 <tr style="background:#EFF6FF;">
 <td class="lb" style="color:#1D4ED8;"><i class="fas fa-microchip" style="color:var(--orange);"></i> Big Data y Analítica de Datos</td>
 <td style="text-align:center; font-weight:700;">6</td>
 <td style="text-align:center; font-weight:700; color:var(--orange);">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Estadística Inferencial</td>
 <td><strong>Asignatura de Vanguardia:</strong> Aplica inteligencia de negocios, minería de datos y visualización analítica.</td>
 </tr>
 <tr class="row-accent" style="background:#EFF6FF;">
 <td class="lb" style="color:#1D4ED8;"><i class="fas fa-shopping-cart" style="color:var(--orange);"></i> E-Commerce</td>
 <td style="text-align:center; font-weight:700;">7</td>
 <td style="text-align:center; font-weight:700; color:var(--orange);">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Fundamentos de Mercadeo</td>
 <td><strong>Asignatura de Vanguardia:</strong> Desarrolla competencias en comercio electrónico, pasarelas y marketing digital.</td>
 </tr>
 <tr>
 <td class="lb">Pensamiento Estratégico y Prospectivo</td>
 <td style="text-align:center; font-weight:700;">7</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Procesos Administrativos</td>
 <td>Capacita en construcción de escenarios de futuro, planeación estratégica y gestión del cambio organizacional.</td>
 </tr>
 <tr class="row-accent">
 <td class="lb">Gerencia de Calidad</td>
 <td style="text-align:center; font-weight:700;">8</td>
 <td style="text-align:center; font-weight:700; color:#0284C7;">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Sistemas Integrados HSEQ</td>
 <td>Implementa estrategias de gestión de calidad total, Six Sigma y mejora continua en organizaciones modernas.</td>
 </tr>
 <tr style="background:#EFF6FF;">
 <td class="lb" style="color:#1D4ED8;"><i class="fas fa-robot" style="color:var(--orange);"></i> Inteligencia Artificial</td>
 <td style="text-align:center; font-weight:700;">8</td>
 <td style="text-align:center; font-weight:700; color:var(--orange);">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Big Data y Analítica</td>
 <td><strong>Asignatura Disruptiva:</strong> Aplica IA generativa, automatización de procesos y machine learning gerencial.</td>
 </tr>
 <tr class="row-accent" style="background:#EFF6FF;">
 <td class="lb" style="color:#1D4ED8;"><i class="fas fa-flask" style="color:var(--orange);"></i> Lab. de Innovación y Emprendimiento</td>
 <td style="text-align:center; font-weight:700;">8</td>
 <td style="text-align:center; font-weight:700; color:var(--orange);">3</td>
 <td style="font-size:0.78rem;">48h Dir / 96h Indep (P)<br>36h Med / 108h Ind (V)</td>
 <td style="font-size:0.78rem;">Modelos de Emprendimiento</td>
 <td><strong>Laboratorio Práctico:</strong> Espacio de prototipado, aceleración de negocios y transferencia tecnológica.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>

 <!-- SECCIÓN 4: TABLA 29 - EQUIVALENCIAS ENTRE LA MALLA VIGENTE Y LA MALLA PROPUESTA -->
 <div class="card" style="margin-bottom:28px; border-top:4px solid #16A34A;">
 <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
 <div>
 <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--carbon); margin:0;">
 <i class="fas fa-exchange-alt" style="color:#16A34A; margin-right:8px;"></i> 4. Tabla 29. Equivalencias entre las Asignaturas de la Malla Vigente y Malla Propuesta
 </h4>
 <p style="font-size:0.83rem; color:var(--gray-text); margin-top:2px; margin-bottom:0;">
 Tabla 29 oficial del Documento Maestro: Matriz de homologación biunívoca entre las asignaturas del plan anterior (158 cr, 9 semestres) y el nuevo plan (144 cr, 8 semestres).
 </p>
 </div>
 <span style="background:#DCFCE7; color:#15803D; padding:4px 12px; border-radius:20px; font-weight:800; font-size:0.78rem;">
 38 Homologaciones Registradas
 </span>
 </div>

 <div style="max-height:550px; overflow-y:auto; border:1px solid #CBD5E1; border-radius:8px;">
 <table class="tbl" style="width:100%; margin:0;">
 <thead style="position:sticky; top:0; background:#1A1A1B; color:#fff; z-index:5;">
 <tr>
 <th style="width:230px; color:#fff;">Asignatura Malla Vigente (158 cr)</th>
 <th style="width:75px; text-align:center; color:#fff;">Sem. Ant.</th>
 <th style="width:230px; color:#fff;">Asignatura Malla Propuesta (144 cr)</th>
 <th style="width:75px; text-align:center; color:#fff;">Sem. Nue.</th>
 <th style="color:#fff;">Tipo de Homologación / Equivalencia Curricular</th>
 </tr>
 </thead>
 <tbody>
 <tr class="row-accent"><td class="lb">Expresión Oral y Escrita</td><td style="text-align:center; font-weight:700;">1</td><td style="color:#0284C7; font-weight:700;">Comunicación Oral y Escrita</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Inglés I</td><td style="text-align:center; font-weight:700;">1</td><td style="color:#0284C7; font-weight:700;">Inglés I</td><td style="text-align:center; font-weight:700;">2</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Fundamentos de Administración</td><td style="text-align:center; font-weight:700;">1</td><td style="color:#0284C7; font-weight:700;">Fundamentos de Administración</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Fundamentos Contables</td><td style="text-align:center; font-weight:700;">1</td><td style="color:#0284C7; font-weight:700;">Fundamentos Contables y Financieros</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Fundamentos de Economía</td><td style="text-align:center; font-weight:700;">1</td><td style="color:#0284C7; font-weight:700;">Fundamentos de Administración</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Contenido</span></td></tr>
 <tr><td class="lb">Teoría Organizacional</td><td style="text-align:center; font-weight:700;">2</td><td style="color:#0284C7; font-weight:700;">Teoría Organizacional</td><td style="text-align:center; font-weight:700;">3</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Metodología de la Investigación</td><td style="text-align:center; font-weight:700;">2</td><td style="color:#0284C7; font-weight:700;">Cátedra de la Paz y Resolución de Conflictos</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Créditos</span></td></tr>
 <tr><td class="lb">Inglés II</td><td style="text-align:center; font-weight:700;">2</td><td style="color:#0284C7; font-weight:700;">Inglés II</td><td style="text-align:center; font-weight:700;">3</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Estadística Descriptiva</td><td style="text-align:center; font-weight:700;">3</td><td style="color:#0284C7; font-weight:700;">Estadística Descriptiva</td><td style="text-align:center; font-weight:700;">2</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Electiva Profundización I</td><td style="text-align:center; font-weight:700;">3</td><td style="color:#0284C7; font-weight:700;">Electiva Profesional I</td><td style="text-align:center; font-weight:700;">5</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Inglés III</td><td style="text-align:center; font-weight:700;">3</td><td style="color:#0284C7; font-weight:700;">Inglés III</td><td style="text-align:center; font-weight:700;">4</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Estadística Inferencial</td><td style="text-align:center; font-weight:700;">4</td><td style="color:#0284C7; font-weight:700;">Estadística Inferencial</td><td style="text-align:center; font-weight:700;">3</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Legislación Tributaria</td><td style="text-align:center; font-weight:700;">4</td><td style="color:#0284C7; font-weight:700;">Legislación Tributaria</td><td style="text-align:center; font-weight:700;">6</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Electiva Humanística I</td><td style="text-align:center; font-weight:700;">4</td><td style="color:#0284C7; font-weight:700;">Electiva Profesional I</td><td style="text-align:center; font-weight:700;">5</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Créditos</span></td></tr>
 <tr class="row-accent"><td class="lb">Entorno Económico Colombiano</td><td style="text-align:center; font-weight:700;">4</td><td style="color:#0284C7; font-weight:700;">Economía Colombiana e Internacional</td><td style="text-align:center; font-weight:700;">4</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Matemática Financiera</td><td style="text-align:center; font-weight:700;">5</td><td style="color:#0284C7; font-weight:700;">Matemática Financiera</td><td style="text-align:center; font-weight:700;">4</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Investigación de Operaciones</td><td style="text-align:center; font-weight:700;">5</td><td style="color:#0284C7; font-weight:700;">Investigación de Mercados</td><td style="text-align:center; font-weight:700;">4</td><td><span class="badge-virtual" style="background:#7C3AED; color:#fff; font-size:0.7rem;">Homologación por Área</span></td></tr>
 <tr><td class="lb">Fundamentos de Mercadeo</td><td style="text-align:center; font-weight:700;">5</td><td style="color:#0284C7; font-weight:700;">Fundamentos de Mercadeo</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Modelos de Desarrollo Económico</td><td style="text-align:center; font-weight:700;">5</td><td style="color:#0284C7; font-weight:700;">Modelos de Emprendimiento</td><td style="text-align:center; font-weight:700;">6</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Contenido</span></td></tr>
 <tr><td class="lb">Administración de Salarios</td><td style="text-align:center; font-weight:700;">5</td><td style="color:#0284C7; font-weight:700;">Fundamentos de Administración</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-virtual" style="background:#D97706; color:#fff; font-size:0.7rem;">Fusión Conceptual</span></td></tr>
 <tr class="row-accent"><td class="lb">Electiva Profundización II</td><td style="text-align:center; font-weight:700;">5</td><td style="color:#0284C7; font-weight:700;">Electiva Profesional II</td><td style="text-align:center; font-weight:700;">6</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Legislación Comercial</td><td style="text-align:center; font-weight:700;">6</td><td style="color:#0284C7; font-weight:700;">Legislación Comercial</td><td style="text-align:center; font-weight:700;">2</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Gerencia de Mercadeo</td><td style="text-align:center; font-weight:700;">6</td><td style="color:#0284C7; font-weight:700;">Fundamentos de Mercadeo</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Contenido</span></td></tr>
 <tr><td class="lb">Métodos Cuantitativos y Cualitativos</td><td style="text-align:center; font-weight:700;">6</td><td style="color:#0284C7; font-weight:700;">Métodos Cualitativos y Cuantitativos</td><td style="text-align:center; font-weight:700;">6</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Electiva Humanística II</td><td style="text-align:center; font-weight:700;">6</td><td style="color:#0284C7; font-weight:700;">Electiva Profesional II</td><td style="text-align:center; font-weight:700;">6</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Créditos</span></td></tr>
 <tr><td class="lb">Fundamentos de Admón. Pública</td><td style="text-align:center; font-weight:700;">7</td><td style="color:#0284C7; font-weight:700;">Fundamentos de Administración</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-virtual" style="background:#D97706; color:#fff; font-size:0.7rem;">Fusión Conceptual</span></td></tr>
 <tr class="row-accent"><td class="lb">Gestión de la Calidad</td><td style="text-align:center; font-weight:700;">7</td><td style="color:#0284C7; font-weight:700;">Cátedra de la Paz y Res. Conflictos</td><td style="text-align:center; font-weight:700;">1</td><td><span class="badge-virtual" style="background:#7C3AED; color:#fff; font-size:0.7rem;">Fusión en HSEQ / Calidad</span></td></tr>
 <tr><td class="lb">Gerencia del Talento Humano</td><td style="text-align:center; font-weight:700;">7</td><td style="color:#0284C7; font-weight:700;">Gerencia del Talento Humano</td><td style="text-align:center; font-weight:700;">5</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Electiva Profundización III</td><td style="text-align:center; font-weight:700;">7</td><td style="color:#0284C7; font-weight:700;">Electiva Profesional III</td><td style="text-align:center; font-weight:700;">7</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Sistema de Información Gerencial</td><td style="text-align:center; font-weight:700;">7</td><td style="color:#0284C7; font-weight:700;">Juego Gerencial (Simulación)</td><td style="text-align:center; font-weight:700;">8</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Homologación por Aplicación</span></td></tr>
 <tr class="row-accent"><td class="lb">Habilidades Gerenciales</td><td style="text-align:center; font-weight:700;">8</td><td style="color:#0284C7; font-weight:700;">Habilidades Gerenciales y Liderazgo</td><td style="text-align:center; font-weight:700;">8</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Gerencia de Producción</td><td style="text-align:center; font-weight:700;">8</td><td style="color:#0284C7; font-weight:700;">Gerencia de Producción</td><td style="text-align:center; font-weight:700;">7</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Investigación de Mercados</td><td style="text-align:center; font-weight:700;">8</td><td style="color:#0284C7; font-weight:700;">Investigación de Mercados</td><td style="text-align:center; font-weight:700;">4</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr><td class="lb">Proyecto de Grado I</td><td style="text-align:center; font-weight:700;">8</td><td style="color:#0284C7; font-weight:700;">Proyecto de Grado</td><td style="text-align:center; font-weight:700;">8</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Unificación de Proyecto</span></td></tr>
 <tr class="row-accent"><td class="lb">Gerencia del Servicio</td><td style="text-align:center; font-weight:700;">9</td><td style="color:#0284C7; font-weight:700;">Gerencia del Talento Humano</td><td style="text-align:center; font-weight:700;">5</td><td><span class="badge-virtual" style="background:#7C3AED; color:#fff; font-size:0.7rem;">Homologación por Área</span></td></tr>
 <tr><td class="lb">Evaluación de Proyectos de Inversión</td><td style="text-align:center; font-weight:700;">9</td><td style="color:#0284C7; font-weight:700;">Formulación y Evaluación de Proyectos</td><td style="text-align:center; font-weight:700;">7</td><td><span class="badge-presencial" style="background:#16A34A; color:#fff; font-size:0.7rem;">Homologación Directa 1:1</span></td></tr>
 <tr class="row-accent"><td class="lb">Distribución Física y Logística</td><td style="text-align:center; font-weight:700;">9</td><td style="color:#0284C7; font-weight:700;">Gerencia de Ventas y Canales</td><td style="text-align:center; font-weight:700;">7</td><td><span class="badge-virtual" style="background:#7C3AED; color:#fff; font-size:0.7rem;">Homologación por Área</span></td></tr>
 <tr><td class="lb">Proyecto de Grado II</td><td style="text-align:center; font-weight:700;">9</td><td style="color:#0284C7; font-weight:700;">Proyecto de Grado</td><td style="text-align:center; font-weight:700;">8</td><td><span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.7rem;">Unificación de Proyecto</span></td></tr>
 </tbody>
 </table>
 </div>
 </div>
</div>
`;

window.c3Init = function() {
    window.switchTab('c3MainTabsGroup', 'c3-main-vigente');
    window.switchTab('c3VigenteSubTabs', 'c3-v-malla');
    window.switchTab('c3PropuestoSubTabs', 'c3-p-malla');
};
