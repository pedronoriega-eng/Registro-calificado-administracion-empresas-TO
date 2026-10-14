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
    "nombre": "Fundamentos de Administración",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Introduce los principios, teorías y enfoques de la administración moderna, analizando la evolución del pensamiento administrativo y su aplicación en organizaciones contemporáneas.",
    "ras": [
      "RA1: Explica los fundamentos y funciones básicas de la administración en diferentes contextos organizacionales.",
      "RA2: Analiza la evolución histórica y los enfoques modernos de la administración.",
      "RA3: Aplica conceptos de planeación, organización, dirección y control en situaciones simuladas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración",
        "ra": "Explica los fundamentos y funciones básicas de la administración en diferentes contextos organizacionales.",
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
        "ra": "Analiza la evolución histórica y los enfoques modernos de la administración.",
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
        "ra": "Aplica conceptos de planeación, organización, dirección y control en situaciones simuladas.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Fundamentos Contables y Financieros",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Ninguno",
    "descripcion": "Presenta los principios básicos de la contabilidad y las finanzas, el ciclo contable, los estados financieros y su interpretación para la toma de decisiones.",
    "ras": [
      "RA1: Reconoce los principios contables y su importancia en la gestión financiera.",
      "RA2: Elabora registros contables básicos y analiza estados financieros simples.",
      "RA3: Interpreta información financiera para apoyar decisiones administrativas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos Contables y Financieros",
        "ra": "Reconoce los principios contables y su importancia en la gestión financiera.",
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
        "ra": "Elabora registros contables básicos y analiza estados financieros simples.",
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
        "ra": "Interpreta información financiera para apoyar decisiones administrativas.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Álgebra Lineal",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla el pensamiento lógico- matemático aplicado a la resolución de problemas empresariales, financieros y económicos mediante modelos lineales.",
    "ras": [
      "RA1: Emplea herramientas álgebraicas en la resolución de problemas administrativos y financieros.",
      "RA2: Interpreta datos cuantitativos y desarrolla modelos lineales aplicados.",
      "RA3: Utiliza el razonamiento lógico para plantear soluciones numéricas a situaciones reales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Álgebra Lineal",
        "ra": "Emplea herramientas algebraicas en la resolución de problemas administrativos y financieros.",
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
        "ra": "Interpreta datos cuantitativos y desarrolla modelos lineales aplicados.",
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
        "ra": "Utiliza el razonamiento lógico para plantear soluciones numéricas a situaciones reales.",
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
    "perfil_asociado": "Competencia 2: Pensamiento cuantitativo, razonamiento lógico-matemático y análisis económico.",
    "rap_asociado": "RAP 2 & RAP 6: Aplica herramientas estadísticas, matemáticas y analíticas en el diagnóstico organizacional.",
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
    "nombre": "Fundamentos de Mercadeo",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "Aborda los conceptos esenciales del marketing, el comportamiento del consumidor y las estrategias de producto, precio, plaza y promoción.",
    "ras": [
      "RA1: Comprende los principios básicos del mercadeo y su función en la gestión empresarial.",
      "RA2: Analiza el entorno del mercado y los factores que influyen en el comportamiento del consumidor.",
      "RA3: Diseña estrategias básicas de mercadeo alineadas con los objetivos organizacionales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Mercadeo",
        "ra": "Comprende los principios básicos del mercadeo y su función en la gestión empresarial.",
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
        "ra": "Analiza el entorno del mercado y los factores que influyen en el comportamiento del consumidor.",
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
        "ra": "Diseña estrategias básicas de mercadeo alineadas con los objetivos organizacionales.",
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
    "perfil_asociado": "Competencia 1 & 4: Gestión estratégica de mercadeo, posicionamiento de marca y canales de distribución digitales.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y comercial.",
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
    "nombre": "Comunicación Oral y Escrita",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla competencias comunicativas para la expresión oral y escrita en contextos académicos y profesionales, fortaleciendo la argumentación y la redacción técnica.",
    "ras": [
      "RA1: Aplica técnicas de comunicación efectiva en contextos empresariales.",
      "RA2: Redacta textos académicos y profesionales con claridad y coherencia.",
      "RA3: Utiliza la comunicación oral como herramienta de liderazgo y trabajo en equipo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Comunicación Oral y Escrita",
        "ra": "Aplica técnicas de comunicación efectiva en contextos empresariales.",
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
        "ra": "Redacta textos académicos y profesionales con claridad y coherencia.",
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
        "ra": "Utiliza la comunicación oral como herramienta de liderazgo y trabajo en equipo.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Cátedra de la Paz y Resolución de Conflictos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Promueve la reflexión sobre la convivencia, los valores democráticos, la cultura de paz y la gestión",
    "ras": [
      "RA1: Explica los principios teóricos y conceptos clave de Cátedra de la Paz y Resolución de Conflictos.",
      "RA2: Aplica herramientas metodológicas de Cátedra de la Paz y Resolución de Conflictos en la resolución de problemas empresariales.",
      "RA3: Diseña propuestas innovadoras y sostenibles para la toma de decisiones en Cátedra de la Paz y Resolución de Conflictos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cátedra de la Paz y Resolución de Conflictos",
        "ra": "Explica los principios teóricos y conceptos clave de Cátedra de la Paz y Resolución de Conflictos.",
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
        "ra": "Aplica herramientas metodológicas de Cátedra de la Paz y Resolución de Conflictos en la resolución de problemas empresariales.",
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
        "ra": "Diseña propuestas innovadoras y sostenibles para la toma de decisiones en Cátedra de la Paz y Resolución de Conflictos.",
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
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "ciencias_basicas",
    "componente_nombre": "Ciencias Básicas y Cuantitativas",
    "prerrequisito": "Ninguno",
    "descripcion": "Introduce los conceptos fundamentales del cálculo aplicados al análisis de funciones, tasas de cambio y optimización en procesos administrativos, económicos y financieros.",
    "ras": [
      "RA1: Aplica conceptos de derivada en la interpretación de fenómenos económicos y empresariales.",
      "RA2: Resuelve problemas de optimización relacionados con costos, ingresos y productividad.",
      "RA3: Utiliza el cálculo como herramienta analítica en la toma de decisiones administrativas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cálculo Diferencial",
        "ra": "Aplica conceptos de derivada en la interpretación de fenómenos económicos y empresariales.",
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
        "ra": "Resuelve problemas de optimización relacionados con costos, ingresos y productividad.",
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
        "ra": "Utiliza el cálculo como herramienta analítica en la toma de decisiones administrativas.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Microeconomía",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Analiza los principios de la economía desde la perspectiva del consumidor y del productor, abordando temas como la oferta, demanda, elasticidad y formación de precios.",
    "ras": [
      "RA1: Explica el comportamiento del consumidor y del productor en distintos mercados.",
      "RA2: Interpreta modelos microeconómicos aplicados a la gestión empresarial.",
      "RA3: Analiza el impacto de los cambios en el mercado sobre la toma de decisiones empresariales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Microeconomía",
        "ra": "Explica el comportamiento del consumidor y del productor en distintos mercados.",
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
        "ra": "Interpreta modelos microeconómicos aplicados a la gestión empresarial.",
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
        "ra": "Analiza el impacto de los cambios en el mercado sobre la toma de decisiones empresariales.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Estadística Descriptiva",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Presenta los fundamentos de la estadística descriptiva aplicada al análisis y la interpretación de datos en contextos empresariales y sociales.",
    "ras": [
      "RA1: Organiza y presenta información estadística mediante tablas, gráficos y medidas de tendencia central.",
      "RA2: Analiza datos cuantitativos para apoyar procesos de decisión administrativa.",
      "RA3: Aplica métodos estadísticos descriptivos en estudios de mercado y diagnósticos empresariales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Descriptiva",
        "ra": "Organiza y presenta información estadística mediante tablas, gráficos y medidas de tendencia central.",
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
        "ra": "Analiza datos cuantitativos para apoyar procesos de decisión administrativa.",
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
        "ra": "Aplica métodos estadísticos descriptivos en estudios de mercado y diagnósticos empresariales.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Legislación Comercial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Estudia las normas básicas del derecho mercantil y su aplicación en la constitución, funcionamiento y relaciones contractuales de las empresas.",
    "ras": [
      "RA1: Reconoce el marco legal que regula las actividades comerciales y empresariales en Colombia.",
      "RA2: Analiza casos prácticos sobre contratos, sociedades y obligaciones mercantiles.",
      "RA3: Aplica principios de legislación comercial en la gestión y administración de organizaciones."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Legislación Comercial",
        "ra": "Reconoce el marco legal que regula las actividades comerciales y empresariales en Colombia.",
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
        "ra": "Analiza casos prácticos sobre contratos, sociedades y obligaciones mercantiles.",
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
        "ra": "Aplica principios de legislación comercial en la gestión y administración de organizaciones.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Costos y Presupuestos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Fundamentos Contables y Financieros",
    "descripcion": "Introduce los fundamentos del costeo, la planeación presupuestal y el control financiero como herramientas de apoyo a la gestión administrativa.",
    "ras": [
      "RA1: Clasifica y calcula los diferentes tipos de costos según su naturaleza y función empresarial.",
      "RA2: Elabora presupuestos operativos y financieros básicos para la toma de decisiones. constructiva de los conflictos en entornos sociales y organizacionales.",
      "RA3: Aplica herramientas de mediación y diálogo para la gestión pacífica de conflictos. RA3: Evalúa el comportamiento de los costos y presupuestos para mejorar la eficiencia organizacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Costos y Presupuestos",
        "ra": "Clasifica y calcula los diferentes tipos de costos según su naturaleza y función empresarial.",
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
        "ra": "Elabora presupuestos operativos y financieros básicos para la toma de decisiones. constructiva de los conflictos en entornos sociales y organizacionales.",
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
        "ra": "Aplica herramientas de mediación y diálogo para la gestión pacífica de conflictos. RA3: Evalúa el comportamiento de los costos y presupuestos para mejorar la eficiencia organizacional.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Inglés I",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla competencias comunicativas básicas en lengua inglesa, enfocadas en la comprensión y producción de textos relacionados con la administración y los negocios.",
    "ras": [
      "RA1: Comprende estructuras gramaticales básicas y vocabulario técnico relacionado con el ámbito empresarial.",
      "RA2: Produce textos orales y escritos simples en contextos académicos y laborales.",
      "RA3: Utiliza el inglés como herramienta para el acceso a información y comunicación profesional. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés I",
        "ra": "Comprende estructuras gramaticales básicas y vocabulario técnico relacionado con el ámbito empresarial.",
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
        "ra": "Produce textos orales y escritos simples en contextos académicos y laborales.",
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
        "ra": "Utiliza el inglés como herramienta para el acceso a información y comunicación profesional. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Macroeconomía",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Analiza el funcionamiento general de la economía a nivel nacional e internacional, abordando variables como el PIB, inflación, desempleo, política fiscal y monetaria.",
    "ras": [
      "RA1: Explica las principales variables macroeconómicas y su relación con la gestión empresarial.",
      "RA2: Analiza el impacto de las políticas económicas en los procesos administrativos y financieros.",
      "RA3: Interpreta indicadores macroeconómicos para la toma de decisiones estratégicas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Macroeconomía",
        "ra": "Explica las principales variables macroeconómicas y su relación con la gestión empresarial.",
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
        "ra": "Analiza el impacto de las políticas económicas en los procesos administrativos y financieros.",
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
        "ra": "Interpreta indicadores macroeconómicos para la toma de decisiones estratégicas.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Análisis Financiero",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla herramientas para interpretar y evaluar los estados financieros, medir la rentabilidad, liquidez y solvencia de las organizaciones.",
    "ras": [
      "RA1: Aplica técnicas de análisis financiero para evaluar la situación económica de una empresa.",
      "RA2: Calcula e interpreta indicadores financieros clave para la gestión organizacional.",
      "RA3: Propone estrategias de mejoramiento financiero basadas en evidencias cuantitativas."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Análisis Financiero",
        "ra": "Aplica técnicas de análisis financiero para evaluar la situación económica de una empresa.",
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
        "ra": "Calcula e interpreta indicadores financieros clave para la gestión organizacional.",
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
        "ra": "Propone estrategias de mejoramiento financiero basadas en evidencias cuantitativas.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Estadística Inferencial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Introduce los conceptos de inferencia estadística, estimación y pruebas de hipótesis aplicados a la toma de decisiones empresariales.",
    "ras": [
      "RA1: Aplica métodos inferenciales para el análisis de muestras y poblaciones en contextos empresariales.",
      "RA2: Interpreta resultados estadísticos para respaldar decisiones estratégicas.",
      "RA3: Diseña y ejecuta estudios de muestreo y análisis de hipótesis aplicadas a la administración."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estadística Inferencial",
        "ra": "Aplica métodos inferenciales para el análisis de muestras y poblaciones en contextos empresariales.",
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
        "ra": "Interpreta resultados estadísticos para respaldar decisiones estratégicas.",
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
        "ra": "Diseña y ejecuta estudios de muestreo y análisis de hipótesis aplicadas a la administración.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Procesos Administrativos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Fundamentos de Administración",
    "descripcion": "Estudia las etapas del proceso administrativo y su aplicación práctica en la planeación, ejecución y control de actividades empresariales.",
    "ras": [
      "RA1: Explica las fases del proceso administrativo y su aplicación en diferentes tipos de organización.",
      "RA2: Diseña planes operativos y de control aplicando herramientas de gestión.",
      "RA3: Evalúa la eficiencia de los procesos administrativos para el logro de objetivos organizacionales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Procesos Administrativos",
        "ra": "Explica las fases del proceso administrativo y su aplicación en diferentes tipos de organización.",
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
        "ra": "Diseña planes operativos y de control aplicando herramientas de gestión.",
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
        "ra": "Evalúa la eficiencia de los procesos administrativos para el logro de objetivos organizacionales.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Teoría Organizacional",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Examina los enfoques clásicos, modernos y contemporáneos de la teoría organizacional, su estructura, cultura y comportamiento.",
    "ras": [
      "RA1: Analiza los principales modelos teóricos de la organización y su evolución histórica.",
      "RA2: Evalúa la estructura organizacional como elemento clave del desempeño institucional.",
      "RA3: Propone mejoras en la organización basadas en el análisis de cultura y estructura."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Teoría Organizacional",
        "ra": "Analiza los principales modelos teóricos de la organización y su evolución histórica.",
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
        "ra": "Evalúa la estructura organizacional como elemento clave del desempeño institucional.",
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
        "ra": "Propone mejoras en la organización basadas en el análisis de cultura y estructura.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Inglés II",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Fortalece las habilidades comunicativas en inglés, con énfasis en la comprensión lectora y la interacción en contextos empresariales.",
    "ras": [
      "RA1: Utiliza estructuras intermedias del inglés en situaciones académicas y profesionales.",
      "RA2: Interpreta textos técnicos y administrativos en lengua extranjera.",
      "RA3: Se comunica oralmente en inglés en escenarios laborales y de trabajo colaborativo. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés II",
        "ra": "Utiliza estructuras intermedias del inglés en situaciones académicas y profesionales.",
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
        "ra": "Interpreta textos técnicos y administrativos en lengua extranjera.",
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
        "ra": "Se comunica oralmente en inglés en escenarios laborales y de trabajo colaborativo. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Investigación de Mercados",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "Analiza los principios, métodos y herramientas para la recolección, procesamiento e interpretación de información del mercado, con el fin de apoyar la toma de decisiones comerciales.",
    "ras": [
      "RA1: Diseña instrumentos y métodos para la recolección y análisis de datos de mercado.",
      "RA2: Interpreta información cuantitativa y cualitativa para la formulación de estrategias comerciales.",
      "RA3: Aplica técnicas de investigación de mercados en estudios orientados a la innovación empresarial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación de Mercados",
        "ra": "Diseña instrumentos y métodos para la recolección y análisis de datos de mercado.",
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
        "ra": "Interpreta información cuantitativa y cualitativa para la formulación de estrategias comerciales.",
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
        "ra": "Aplica técnicas de investigación de mercados en estudios orientados a la innovación empresarial.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Matemática Financiera",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Presenta los fundamentos de la matemática aplicada a las finanzas, incluyendo el valor del dinero en el tiempo, tasas de interés y amortización de créditos.",
    "ras": [
      "RA1: Aplica conceptos de valor del dinero en el tiempo en operaciones financieras.",
      "RA2: Calcula tasas, rentabilidades y flujos de efectivo en contextos administrativos.",
      "RA3: Utiliza herramientas financieras para analizar inversiones y decisiones de financiamiento."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemática Financiera",
        "ra": "Aplica conceptos de valor del dinero en el tiempo en operaciones financieras.",
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
        "ra": "Calcula tasas, rentabilidades y flujos de efectivo en contextos administrativos.",
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
        "ra": "Utiliza herramientas financieras para analizar inversiones y decisiones de financiamiento.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Economía Colombiana e Internacional",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Examina las características, estructura y dinámica de la economía colombiana y su relación con los sistemas económicos internacionales.",
    "ras": [
      "RA1: Analiza los sectores productivos y el comportamiento macroeconómico de Colombia.",
      "RA2: Evalúa el impacto de la globalización en el entorno empresarial nacional.",
      "RA3: Interpreta las políticas económicas y su influencia en el comercio y la gestión organizacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Economía Colombiana e Internacional",
        "ra": "Analiza los sectores productivos y el comportamiento macroeconómico de Colombia.",
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
        "ra": "Evalúa el impacto de la globalización en el entorno empresarial nacional.",
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
        "ra": "Interpreta las políticas económicas y su influencia en el comercio y la gestión organizacional.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Competencias Investigativas",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Fortalece las habilidades investigativas para la formulación, diseño y desarrollo de proyectos de investigación aplicada en el campo empresarial.",
    "ras": [
      "RA1: Identifica problemas de investigación en el ámbito de la administración.",
      "RA2: Diseña proyectos de investigación con metodología científica.",
      "RA3: Aplica herramientas para la recolección, análisis e interpretación de datos en estudios empresariales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Competencias Investigativas",
        "ra": "Identifica problemas de investigación en el ámbito de la administración.",
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
        "ra": "Diseña proyectos de investigación con metodología científica.",
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
        "ra": "Aplica herramientas para la recolección, análisis e interpretación de datos en estudios empresariales.",
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
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "nombre": "Derecho Laboral y Seguridad Social",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Estudia el marco jurídico que regula las relaciones laborales, los contratos de trabajo y el sistema de seguridad social en Colombia.",
    "ras": [
      "RA1: Explica los principios legales que rigen las relaciones laborales y el empleo.",
      "RA2: Analiza casos prácticos relacionados con la aplicación del derecho laboral y la seguridad social.",
      "RA3: Aplica la normativa vigente en procesos de contratación y gestión del talento humano."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Derecho Laboral y Seguridad Social",
        "ra": "Explica los principios legales que rigen las relaciones laborales y el empleo.",
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
        "ra": "Analiza casos prácticos relacionados con la aplicación del derecho laboral y la seguridad social.",
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
        "ra": "Aplica la normativa vigente en procesos de contratación y gestión del talento humano.",
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
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "nombre": "Inglés III",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "legislacion_habilidades",
    "componente_nombre": "Legislación, Investigación y Habilidades",
    "prerrequisito": "Ninguno",
    "descripcion": "Consolida las competencias comunicativas en inglés, con énfasis en vocabulario técnico, redacción de informes y comprensión de textos empresariales.",
    "ras": [
      "RA1: Interpreta y redacta documentos administrativos y financieros en inglés.",
      "RA2: Participa en conversaciones y presentaciones orales en contextos profesionales.",
      "RA3: Aplica vocabulario técnico-administrativo en la comunicación escrita y oral. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés III",
        "ra": "Interpreta y redacta documentos administrativos y financieros en inglés.",
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
        "ra": "Participa en conversaciones y presentaciones orales en contextos profesionales.",
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
        "ra": "Aplica vocabulario técnico-administrativo en la comunicación escrita y oral. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Administración Financiera",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Ninguno",
    "descripcion": "Profundiza en la gestión financiera empresarial, abarcando la planeación, inversión, financiación y control de los recursos económicos.",
    "ras": [
      "RA1: Analiza la estructura financiera y los flujos de efectivo de las organizaciones.",
      "RA2: Evalúa proyectos de inversión aplicando herramientas financieras.",
      "RA3: Propone estrategias de financiación y control financiero para la sostenibilidad organizacional."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Administración Financiera",
        "ra": "Analiza la estructura financiera y los flujos de efectivo de las organizaciones.",
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
        "ra": "Evalúa proyectos de inversión aplicando herramientas financieras.",
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
        "ra": "Propone estrategias de financiación y control financiero para la sostenibilidad organizacional.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Gestión de Operaciones",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Estudia los procesos productivos y de servicios, la administración de recursos, la planeación de la capacidad y el control de la producción.",
    "ras": [
      "RA1: Diseña procesos productivos eficientes basados en modelos de gestión de operaciones.",
      "RA2: Aplica técnicas de planeación y control de operaciones para optimizar recursos.",
      "RA3: Evalúa indicadores de productividad y calidad en procesos organizacionales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de Operaciones",
        "ra": "Diseña procesos productivos eficientes basados en modelos de gestión de operaciones.",
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
        "ra": "Aplica técnicas de planeación y control de operaciones para optimizar recursos.",
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
        "ra": "Evalúa indicadores de productividad y calidad en procesos organizacionales.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Gerencia del Talento Humano",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Procesos Administrativos",
    "descripcion": "Aborda los fundamentos, procesos y estrategias de gestión del talento humano orientadas al desarrollo integral, la motivación y la productividad.",
    "ras": [
      "RA1: Diseña políticas y estrategias de gestión humana coherentes con los objetivos organizacionales.",
      "RA2: Evalúa el desempeño laboral aplicando instrumentos de medición de competencias.",
      "RA3: Implementa programas de bienestar y desarrollo del talento humano."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia del Talento Humano",
        "ra": "Diseña políticas y estrategias de gestión humana coherentes con los objetivos organizacionales.",
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
        "ra": "Evalúa el desempeño laboral aplicando instrumentos de medición de competencias.",
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
        "ra": "Implementa programas de bienestar y desarrollo del talento humano.",
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
    "perfil_asociado": "Competencia 5 & 6: Liderazgo colaborativo, gestión de equipos, compromiso ético y desarrollo organizacional.",
    "rap_asociado": "RAP 3 & RAP 10: Diseña políticas de gestión humana y aplica principios éticos en la toma de decisiones.",
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
    "nombre": "Gerencia de Marketing",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Fundamentos de Mercadeo",
    "descripcion": "Analiza los principios de dirección y gestión estratégica del mercadeo, orientados al posicionamiento, segmentación y fidelización de clientes.",
    "ras": [
      "RA1: Formula estrategias de marketing alineadas con los objetivos organizacionales.",
      "RA2: Evalúa la efectividad de las estrategias de producto, precio, plaza y promoción.",
      "RA3: Diseña planes de marketing con enfoque sostenible y digital."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Marketing",
        "ra": "Formula estrategias de marketing alineadas con los objetivos organizacionales.",
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
        "ra": "Evalúa la efectividad de las estrategias de producto, precio, plaza y promoción.",
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
        "ra": "Diseña planes de marketing con enfoque sostenible y digital.",
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
    "perfil_asociado": "Competencia 1 & 4: Gestión estratégica de mercadeo, posicionamiento de marca y canales de distribución digitales.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y comercial.",
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
    "nombre": "Ética y Responsabilidad Social Empresarial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Promueve la reflexión ética y el compromiso social del administrador frente a las implicaciones económicas, ambientales y humanas de sus decisiones.",
    "ras": [
      "RA1: Analiza dilemas éticos en la gestión y toma de decisiones empresariales.",
      "RA2: Propone estrategias de responsabilidad social corporativa y sostenibilidad.",
      "RA3: Aplica principios éticos en la gestión organizacional y la proyección social."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Ética y Responsabilidad Social Empresarial",
        "ra": "Analiza dilemas éticos en la gestión y toma de decisiones empresariales.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Ética y Responsabilidad Social Empresarial."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Ética y Responsabilidad Social Empresarial",
        "ra": "Propone estrategias de responsabilidad social corporativa y sostenibilidad.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Ética y Responsabilidad Social Empresarial."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Ética y Responsabilidad Social Empresarial",
        "ra": "Aplica principios éticos en la gestión organizacional y la proyección social.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Ética y Responsabilidad Social Empresarial."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Ética y Responsabilidad Social Empresarial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Ética y Responsabilidad Social Empresarial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Ética y Responsabilidad Social Empresarial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Ninguno",
    "descripcion": "Introduce los principios de sostenibilidad y economía circular aplicados a la administración y la innovación empresarial.",
    "ras": [
      "RA1: Explica los fundamentos de la sostenibilidad y la economía circular.",
      "RA2: Evalúa prácticas empresariales sostenibles orientadas a la eficiencia y al uso responsable de recursos.",
      "RA3: Propone estrategias de economía circular aplicadas a procesos organizacionales. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Explica los fundamentos de la sostenibilidad y la economía circular.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Evalúa prácticas empresariales sostenibles orientadas a la eficiencia y al uso responsable de recursos.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Propone estrategias de economía circular aplicadas a procesos organizacionales. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "nombre": "Planeación Estratégica y Prospectiva",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla metodologías y herramientas para la formulación, implementación y evaluación de estrategias organizacionales con enfoque prospectivo y competitivo.",
    "ras": [
      "RA1: Formula planes estratégicos alineados con la misión y visión institucional.",
      "RA2: Aplica metodologías prospectivas para anticipar escenarios organizacionales.",
      "RA3: Evalúa resultados estratégicos mediante indicadores de desempeño y control."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Planeación Estratégica y Prospectiva",
        "ra": "Formula planes estratégicos alineados con la misión y visión institucional.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Planeación Estratégica y Prospectiva."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Planeación Estratégica y Prospectiva",
        "ra": "Aplica metodologías prospectivas para anticipar escenarios organizacionales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Planeación Estratégica y Prospectiva."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Planeación Estratégica y Prospectiva",
        "ra": "Evalúa resultados estratégicos mediante indicadores de desempeño y control.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Planeación Estratégica y Prospectiva."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Planeación Estratégica y Prospectiva",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Planeación Estratégica y Prospectiva",
      "Unidad 3: Consolidación, Innovación y Sustentación en Planeación Estratégica y Prospectiva"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Gerencia de Producción",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Analiza los modelos de gestión de la producción y la optimización de procesos productivos bajo criterios de eficiencia, calidad y sostenibilidad.",
    "ras": [
      "RA1: Diseña y gestiona procesos productivos orientados a la eficiencia y calidad.",
      "RA2: Implementa técnicas de control de inventarios y planeación de la producción.",
      "RA3: Evalúa la productividad y sostenibilidad de los sistemas productivos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Producción",
        "ra": "Diseña y gestiona procesos productivos orientados a la eficiencia y calidad.",
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
        "ra": "Implementa técnicas de control de inventarios y planeación de la producción.",
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
        "ra": "Evalúa la productividad y sostenibilidad de los sistemas productivos.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Formulación y Evaluación de Proyectos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "Presenta los fundamentos técnicos, financieros y metodológicos para el diseño, formulación y evaluación de proyectos empresariales y sociales.",
    "ras": [
      "RA1: Diseña proyectos empresariales con enfoque metodológico y financiero.",
      "RA2: Evalúa la viabilidad técnica, económica y social de proyectos.",
      "RA3: Utiliza herramientas de planeación y evaluación para la gestión de proyectos sostenibles."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Formulación y Evaluación de Proyectos",
        "ra": "Diseña proyectos empresariales con enfoque metodológico y financiero.",
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
        "ra": "Evalúa la viabilidad técnica, económica y social de proyectos.",
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
        "ra": "Utiliza herramientas de planeación y evaluación para la gestión de proyectos sostenibles.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Sistemas Integrados de Gestión (HSEQ)",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Estudia los principios, normas y herramientas de los sistemas integrados de gestión de calidad, ambiente, seguridad y salud en el trabajo.",
    "ras": [
      "RA1: Explica la estructura y alcance de los sistemas integrados de gestión.",
      "RA2: Aplica normas ISO y estándares internacionales en procesos empresariales.",
      "RA3: Diseña propuestas de mejora continua para la gestión de la calidad y sostenibilidad."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Sistemas Integrados de Gestión (HSEQ)",
        "ra": "Explica la estructura y alcance de los sistemas integrados de gestión.",
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
        "ra": "Aplica normas ISO y estándares internacionales en procesos empresariales.",
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
        "ra": "Diseña propuestas de mejora continua para la gestión de la calidad y sostenibilidad.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Habilidades Gerenciales y Liderazgo",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Gerencia del Talento Humano",
    "descripcion": "Desarrolla competencias de liderazgo, comunicación, negociación y gestión de equipos de trabajo orientadas a la efectividad organizacional.",
    "ras": [
      "RA1: Identifica estilos de liderazgo y su impacto en la dinámica organizacional.",
      "RA2: Aplica estrategias de comunicación y negociación en la gestión de equipos.",
      "RA3: Evalúa su desempeño gerencial mediante procesos de retroalimentación y liderazgo colaborativo."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Habilidades Gerenciales y Liderazgo",
        "ra": "Identifica estilos de liderazgo y su impacto en la dinámica organizacional.",
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
        "ra": "Aplica estrategias de comunicación y negociación en la gestión de equipos.",
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
        "ra": "Evalúa su desempeño gerencial mediante procesos de retroalimentación y liderazgo colaborativo.",
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
    "perfil_asociado": "Competencia 5 & 6: Liderazgo colaborativo, gestión de equipos, compromiso ético y desarrollo organizacional.",
    "rap_asociado": "RAP 3 & RAP 10: Diseña políticas de gestión humana y aplica principios éticos en la toma de decisiones.",
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
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Ninguno",
    "descripcion": "Profundiza en temáticas emergentes del marketing sostenible y la transformación digital en entornos empresariales contemporáneos.",
    "ras": [
      "RA1: Analiza tendencias de marketing sostenible y digital.",
      "RA2: Diseña estrategias de comunicación responsables e innovadoras.",
      "RA3: Aplica herramientas digitales para la gestión del mercadeo y la promoción empresarial. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Analiza tendencias de marketing sostenible y digital.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Diseña estrategias de comunicación responsables e innovadoras.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Aplica herramientas digitales para la gestión del mercadeo y la promoción empresarial. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "nombre": "Gerencia Financiera",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "economia_finanzas",
    "componente_nombre": "Economía y Finanzas",
    "prerrequisito": "Ninguno",
    "descripcion": "Profundiza en las estrategias de gestión financiera avanzada, incluyendo la planeación financiera, estructura de capital, valoración de empresas y análisis de inversiones.",
    "ras": [
      "RA1: Evalúa la estructura de capital y la rentabilidad de las organizaciones.",
      "RA2: Aplica modelos financieros para la valoración de empresas y toma de decisiones de inversión.",
      "RA3: Formula estrategias financieras orientadas al crecimiento y sostenibilidad empresarial."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia Financiera",
        "ra": "Evalúa la estructura de capital y la rentabilidad de las organizaciones.",
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
        "ra": "Aplica modelos financieros para la valoración de empresas y toma de decisiones de inversión.",
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
        "ra": "Formula estrategias financieras orientadas al crecimiento y sostenibilidad empresarial.",
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
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "nombre": "Gerencia de Ventas y Canales de Distribución",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "Analiza los procesos de planificación, ejecución y control de las estrategias de ventas y distribución en mercados nacionales e internacionales.",
    "ras": [
      "RA1: Diseña estrategias de ventas efectivas alineadas con los objetivos organizacionales",
      "RA2: Evalúa la eficiencia de los canales de distribución y su impacto en la competitividad.",
      "RA3: Aplica técnicas de negociación y liderazgo comercial para fortalecer las relaciones con clientes."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de Ventas y Canales de Distribución",
        "ra": "Diseña estrategias de ventas efectivas alineadas con los objetivos organizacionales",
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
        "ra": "Evalúa la eficiencia de los canales de distribución y su impacto en la competitividad.",
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
        "ra": "Aplica técnicas de negociación y liderazgo comercial para fortalecer las relaciones con clientes.",
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
    "perfil_asociado": "Competencia 1 & 4: Gestión estratégica de mercadeo, posicionamiento de marca y canales de distribución digitales.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y comercial.",
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
    "nombre": "Big Data y Analítica de Datos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Introduce los conceptos, herramientas y aplicaciones de la analítica de datos y Big Data para la toma de decisiones en entornos empresariales.",
    "ras": [
      "RA1: Comprende los fundamentos del análisis de grandes volúmenes de datos aplicados a la gestión empresarial.",
      "RA2: Utiliza herramientas digitales y modelos analíticos para la interpretación de datos.",
      "RA3: Aplica la analítica de datos en la optimización de procesos administrativos y estratégicos."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Big Data y Analítica de Datos",
        "ra": "Comprende los fundamentos del análisis de grandes volúmenes de datos aplicados a la gestión empresarial.",
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
        "ra": "Utiliza herramientas digitales y modelos analíticos para la interpretación de datos.",
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
        "ra": "Aplica la analítica de datos en la optimización de procesos administrativos y estratégicos.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Emprendimiento e Innovación",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla competencias para la creación, desarrollo y sostenibilidad de nuevos modelos de negocio basados en la innovación y el pensamiento creativo.",
    "ras": [
      "RA1: Formula ideas de negocio innovadoras con potencial de sostenibilidad.",
      "RA2: Diseña planes de emprendimiento con enfoque estratégico y financiero.",
      "RA3: Evalúa la viabilidad y escalabilidad de proyectos emprendedores."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Emprendimiento e Innovación",
        "ra": "Formula ideas de negocio innovadoras con potencial de sostenibilidad.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Emprendimiento e Innovación."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Emprendimiento e Innovación",
        "ra": "Diseña planes de emprendimiento con enfoque estratégico y financiero.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Emprendimiento e Innovación."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Emprendimiento e Innovación",
        "ra": "Evalúa la viabilidad y escalabilidad de proyectos emprendedores.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Emprendimiento e Innovación."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Emprendimiento e Innovación",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Emprendimiento e Innovación",
      "Unidad 3: Consolidación, Innovación y Sustentación en Emprendimiento e Innovación"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Gestión de la Calidad",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Examina los principios, metodologías y herramientas de la gestión de la calidad total, orientadas a la mejora continua y la satisfacción del cliente.",
    "ras": [
      "RA1: Aplica modelos y estándares de calidad en procesos organizacionales.",
      "RA2: Evalúa la eficacia de los sistemas de control y mejoramiento continuo.",
      "RA3: Diseña estrategias para el fortalecimiento de la cultura de calidad."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de la Calidad",
        "ra": "Aplica modelos y estándares de calidad en procesos organizacionales.",
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
        "ra": "Evalúa la eficacia de los sistemas de control y mejoramiento continuo.",
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
        "ra": "Diseña estrategias para el fortalecimiento de la cultura de calidad.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Ninguno",
    "descripcion": "Profundiza en la gestión ética, la equidad y la inclusión como pilares de la gobernanza corporativa y la sostenibilidad organizacional.",
    "ras": [
      "RA1: Analiza los principios éticos y de buen gobierno en la administración empresarial.",
      "RA2: Evalúa políticas organizacionales orientadas a la inclusión y equidad.",
      "RA3: Propone estrategias de gobernanza responsable para el fortalecimiento institucional. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Analiza los principios éticos y de buen gobierno en la administración empresarial.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Evalúa políticas organizacionales orientadas a la inclusión y equidad.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Propone estrategias de gobernanza responsable para el fortalecimiento institucional. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "nombre": "Pensamiento Estratégico y Prospectivo",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Profundiza en la planeación estratégica avanzada y la prospectiva empresarial para la anticipación de escenarios y la toma de decisiones en entornos dinámicos.",
    "ras": [
      "RA1: Aplica metodologías de análisis estratégico y prospectivo en la formulación de planes organizacionales.",
      "RA2: Evalúa escenarios futuros considerando factores económicos, sociales y tecnológicos.",
      "RA3: Diseña estrategias innovadoras orientadas a la sostenibilidad y la competitividad."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Pensamiento Estratégico y Prospectivo",
        "ra": "Aplica metodologías de análisis estratégico y prospectivo en la formulación de planes organizacionales.",
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
        "ra": "Evalúa escenarios futuros considerando factores económicos, sociales y tecnológicos.",
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
        "ra": "Diseña estrategias innovadoras orientadas a la sostenibilidad y la competitividad.",
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
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Gerencia de la Innovación y la Tecnología",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Analiza los procesos de gestión de la innovación, la transferencia tecnológica y la transformación digital en las organizaciones.",
    "ras": [
      "RA1: Comprende los modelos de innovación y su aplicación en la gestión empresarial.",
      "RA2: Evalúa el impacto de la tecnología en la productividad y sostenibilidad organizacional.",
      "RA3: Formula estrategias para la incorporación de la innovación en los procesos empresariales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de la Innovación y la Tecnología",
        "ra": "Comprende los modelos de innovación y su aplicación en la gestión empresarial.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gerencia de la Innovación y la Tecnología."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de la Innovación y la Tecnología",
        "ra": "Evalúa el impacto de la tecnología en la productividad y sostenibilidad organizacional.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gerencia de la Innovación y la Tecnología."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de la Innovación y la Tecnología",
        "ra": "Formula estrategias para la incorporación de la innovación en los procesos empresariales.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gerencia de la Innovación y la Tecnología."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Gerencia de la Innovación y la Tecnología",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gerencia de la Innovación y la Tecnología",
      "Unidad 3: Consolidación, Innovación y Sustentación en Gerencia de la Innovación y la Tecnología"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Proyecto de Grado",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Competencias Investigativas",
    "descripcion": "Integra los conocimientos adquiridos a lo largo del programa mediante el desarrollo de un proyecto aplicado de investigación o intervención empresarial.",
    "ras": [
      "RA1: Formula un proyecto aplicado que responda a una necesidad empresarial o social.",
      "RA2: Aplica metodologías de investigación para la solución de problemas administrativos.",
      "RA3: Sustenta los resultados del proyecto de manera técnica, ética y argumentada."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Proyecto de Grado",
        "ra": "Formula un proyecto aplicado que responda a una necesidad empresarial o social.",
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
        "ra": "Aplica metodologías de investigación para la solución de problemas administrativos.",
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
        "ra": "Sustenta los resultados del proyecto de manera técnica, ética y argumentada.",
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
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "nombre": "Seminario de Actualización Empresarial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "admon_gestion",
    "componente_nombre": "Administración y Gestión",
    "prerrequisito": "Ninguno",
    "descripcion": "Aborda temas contemporáneos en administración, liderazgo, sostenibilidad y transformación digital a partir del análisis de casos y tendencias globales.",
    "ras": [
      "RA1: Analiza tendencias y retos actuales de la gestión empresarial global.",
      "RA2: Evalúa buenas prácticas de dirección y liderazgo en contextos internacionales.",
      "RA3: Propone estrategias innovadoras basadas en el análisis de casos reales."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Seminario de Actualización Empresarial",
        "ra": "Analiza tendencias y retos actuales de la gestión empresarial global.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Seminario de Actualización Empresarial."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Seminario de Actualización Empresarial",
        "ra": "Evalúa buenas prácticas de dirección y liderazgo en contextos internacionales.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Seminario de Actualización Empresarial."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Seminario de Actualización Empresarial",
        "ra": "Propone estrategias innovadoras basadas en el análisis de casos reales.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Seminario de Actualización Empresarial."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Seminario de Actualización Empresarial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Seminario de Actualización Empresarial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Seminario de Actualización Empresarial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "electivo",
    "componente_nombre": "Electivas Profesionales",
    "prerrequisito": "Ninguno",
    "descripcion": "Desarrolla competencias para integrar la transformación digital y la sostenibilidad financiera en los procesos organizacionales.",
    "ras": [
      "RA1: Analiza la relación entre innovación tecnológica y sostenibilidad económica.",
      "RA2: Propone estrategias financieras sostenibles para la gestión organizacional.",
      "RA3: Aplica herramientas digitales en la planeación y control financiero."
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Analiza la relación entre innovación tecnológica y sostenibilidad económica.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Propone estrategias financieras sostenibles para la gestión organizacional.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)",
        "ra": "Aplica herramientas digitales en la planeación y control financiero.",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva I (Desarrollo Sostenible y Economía Circular)."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "nombre": "Juego Gerencial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "mercadeo_tech",
    "componente_nombre": "Mercadeo, Tecnología y Emprendimiento",
    "prerrequisito": "Pensamiento Estratégico y Prospectivo",
    "descripcion": "Simula la gestión integral de una organización a través de la toma de decisiones estratégicas en entornos competitivos.",
    "ras": [
      "RA1: Integra conocimientos de las diferentes áreas funcionales para la toma de decisiones gerenciales.",
      "RA2: Evalúa el desempeño organizacional en escenarios simulados de competencia empresarial.",
      "RA3: Demuestra liderazgo, pensamiento crítico y capacidad de negociación en la gestión estratégica. Fuente: Construcción del programa 3.8.1. Lineamientos de innovación pedagógica y didáctica adoptados por la institución La Corporación fundamenta su modelo pedagógico âFormación en contextos de aplicaciónâ en las teorías del aprendizaje del constructivismo social, escuela nueva y aprendizaje significativo. De la misma forma, el modelo encuentra coherencia con el lema del Proyecto Educativo institucional âAprender a convertirseâ en cuanto la a la capacidad que tiene el estudiante en la autotransformación y la de su entorno y mediante la construcción colectiva del conocimiento. Los lineamientos de innovación pedagógica y didáctica adoptados por la Corporación Escuela Tecnológica de Oriente probablemente están diseñados para alinearse con su misión educativa y sus objetivos estratégicos. Los lineamientos incluyen aspectos como: 1. Enfoque centrado en el estudiante: Metodologías activas que promueven el aprendizaje autónomo y colaborativo, como aprendizaje basado en proyectos (ABP), aprendizaje-servicio, y el aprendizaje significativo. 2. Integración tecnológica: Uso de herramientas digitales y plataformas virtuales que faciliten el acceso al conocimiento y fortalezcan las competencias digitales de estudiantes y docentes. 3. Currículo flexible y contextualizado: Diseñado para responder a las necesidades del entorno laboral y social, promoviendo la adaptabilidad de los programas académicos a los cambios del mercado y las tendencias globales. 4. Fortalecimiento de competencias socioemocionales: Incorporación de estrategias que fomenten el liderazgo, la resolución de problemas, la comunicación efectiva y el trabajo en equipo. 5. Inclusión y equidad: Fomentar un aprendizaje accesible y diverso que respete y valore las diferencias individuales. 6. Evaluación innovadora: Uso de rúbricas, portafolios, proyectos integradores y evaluaciones continuas para medir el aprendizaje de manera integral. 3.9. Componentes de interacción En el marco del programa de Administración de Empresas ofertado en modalidad de registro único (presencial â virtual), la interacción entre los actores del proceso formativo se concibe de manera diferenciada según la modalidad, en coherencia con sus particularidades pedagógicas, didácticas y tecnológicas. En la modalidad presencial, los componentes de interacción se fundamentan en la relación directa entre estudiante y docente en ambientes físicos institucionales, favoreciendo el desarrollo de actividades académicas con acompañamiento continuo mediante clases, talleres, seminarios y demás estrategias propias del trabajo en aula. Por su parte, en la modalidad virtual, la interacción se desarrolla a través de ambientes virtuales de aprendizaje, donde la mediación tecnológica es el eje central del proceso formativo. En este sentido, la interacción se da mediante: â¢ Espacios asincrónicos, como foros, recursos digitales, actividades en plataforma y retroalimentación diferida. â¢ Espacios sincrónicos virtuales, concebidos como estrategias de acompañamiento pedagógico en línea, sin que impliquen presencialidad física ni equivalencia con clases tradicionales. En esta modalidad, el proceso formativo privilegia el aprendizaje autónomo del estudiante, orientado y acompañado por el docente a través de herramientas tecnológicas institucionales, garantizando la interacción, el seguimiento y el logro de los resultados de aprendizaje. 3.9.1. Articulación del programa con los contextos locales, regionales y globales El programa de Administración de Empresas en modalidad de registro único se articula de manera integral con los contextos locales, regionales y globales al formar profesionales con capacidades para comprender y responder a las dinámicas económicas, sociales y culturales de su entorno inmediato. Según (García & Sánchez, 2020), la educación virtual fomenta la inclusión al permitir el acceso a la formación desde cualquier lugar, potenciando la interacción entre estudiantes de diversos contextos culturales y socioeconómicos. Además, este enfoque facilita el análisis de las necesidades específicas de las comunidades locales, permitiendo la identificación de oportunidades de emprendimiento y desarrollo sostenible, lo que refuerza la conexión entre la academia y el entorno social inmediato (Álvarez, Muñoz, & Pérez, 2019). En el ámbito regional y global, el programa incorpora contenidos que promueven competencias interculturales, pensamiento crítico y habilidades estratégicas esenciales para enfrentar los retos de la globalización. Según Porter (2008), la competitividad de las organizaciones depende de la capacidad de sus líderes para interpretar tendencias internacionales y aprovechar oportunidades en mercados globales. Asimismo, las metodologías activas, como la simulación empresarial y el aprendizaje basado en proyectos, desarrollan en los estudiantes una visión estratégica y adaptativa que les permite tomar decisiones informadas y éticas, contribuyendo al fortalecimiento de sus organizaciones y su integración con el entorno global (Morin, 2017) 3.9.2. Estrategias para la promoción de la internacionalización del currículo La Corporación Escuela Tecnológica del Oriente en el marco de su política de internacionalización establece los lineamientos para la internacionalización del currículo de los programas académicos, los siguientes elementos: â¢ Coordinar esfuerzos entre las facultades y áreas académicas para garantizar la participación de la Institución en foros, congresos y demás actividades académicas que generen visibilidad internacional. â¢ Ofrecer al estudiante acercamientos a contextos internacionales e interculturales que le permitan tener una mentalidad âglobalâ a través de docentes, tutores y expositores internacionales. â¢ Trabajar desde las facultades y áreas académicas para lograr doble titulación, titulación conjunta y homologación de programas académicos de la Institución. â¢ Actualizar permanentemente los currículos de los programas académicos de acuerdo con las tendencias nacionales e internacionales que permitan dar respuesta a las necesidades del entorno global. â¢ Incluir innovación tecnológica dentro de los currículos académicos. Las estrategias del programa de Administración de Empresas, de la Corporación Escuela Tecnológica de Oriente, para incorporar dimensiones internacionales e interculturales en el currículo y en las prácticas pedagógicas, se enfoca en varias áreas clave para enriquecer el aprendizaje de los estudiantes y promover competencias distintivas de un ciudadano global. A continuación, se detallan algunas de estas estrategias: 1. Currículo Globalizado y Multicultural â¢ Módulos internacionales: Incluir cursos que aborden temas clave de la gestión empresarial global, como comercio internacional, gestión de la diversidad cultural, ética global y sostenibilidad internacional. â¢ Estudios de caso internacionales: Incorporar ejemplos prácticos y estudios de caso de empresas de diferentes regiones del mundo para analizar cómo las decisiones empresariales son influenciadas por contextos internacionales y culturales diversos. â¢ Asignaturas interculturales: Cursos que profundicen en la comprensión de diferentes culturas empresariales, costumbres, valores y prácticas laborales en distintas partes del mundo. 2. Colaboración Internacional â¢ Proyectos en equipo con estudiantes internacionales: Fomentar la colaboración entre estudiantes de diferentes países a través de proyectos grupales virtuales. Esto ayuda a los estudiantes a desarrollar habilidades de comunicación intercultural, trabajo en equipo global y resolución de problemas desde diversas perspectivas. â¢ Intercambios académicos virtuales: Establecer alianzas con universidades extranjeras para permitir que los estudiantes participen en programas de intercambio académico, debates y seminarios virtuales internacionales. 3. Tecnologías de Aprendizaje Global â¢ Plataformas colaborativas internacionales: Utilizar plataformas digitales que faciliten la interacción entre estudiantes de diferentes países. Herramientas como foros, videoconferencias y wikis permiten intercambiar ideas y experiencias en tiempo real. â¢ Simuladores de negocios internacionales: Integrar simuladores de gestión empresarial que permitan a los estudiantes enfrentar situaciones de toma de decisiones empresariales en un contexto global, como mercados internacionales y relaciones interculturales 4. Perspectiva Internacional en la Evaluación â¢ Evaluación de competencias interculturales: Implementar métodos de evaluación que no solo midan los conocimientos técnicos, sino también las habilidades interculturales y la capacidad para adaptarse a contextos multiculturales. â¢ Portafolios de experiencias internacionales: Los estudiantes pueden documentar sus experiencias virtuales e interculturales en portafolios, lo que les permite reflexionar sobre su aprendizaje y sus capacidades para gestionar equipos y empresas a nivel global. 5. Desarrollo de Competencias Transversales â¢ Lenguas extranjeras: Incluir módulos o recursos para el aprendizaje de lenguas extranjeras, especialmente inglés y otros idiomas relevantes en los negocios internacionales, promoviendo así la comunicación efectiva en un entorno multicultural. â¢ Ética y Responsabilidad Social Empresarial Global: Incorporar el estudio de la ética empresarial global y los desafíos de la responsabilidad social empresarial en diferentes culturas y regiones del mundo. 6. Red de Contactos Internacionales â¢ Redes profesionales globales: Establecer vínculos con redes de empresas y profesionales internacionales para proporcionar a los estudiantes acceso a eventos, conferencias y seminarios globales, ampliando su visión sobre la administración de empresas en un contexto internacional. â¢ Mentoría internacional: Conectar a los estudiantes con mentores internacionales que puedan guiarlos en su desarrollo profesional y ayudarles a comprender mejor los desafíos y oportunidades de operar en mercados globales. Estas estrategias permiten que los estudiantes no solo comprendan la teoría y las prácticas de la administración de empresas, sino que también estén preparados para enfrentar y prosperar en un entorno empresarial globalizado y multicultural. Estas estrategias pueden llevarse a cabo en los siguientes ámbitos: contenidos curriculares, estrategias pedagógicas, actividades extracurriculares y/o recursos. Los contenidos curriculares del programa de Administración de Empresas de la Corporación Escuela Tecnológica de Oriente deben reflejar las tendencias y problemáticas globales, regionales e internacionales que son relevantes para la formación de profesionales con visión global y habilidades interculturales. A continuación, se detallan algunas temáticas clave a incorporar: 1. Tendencias Globales y Regionales en el Campo de la Administración de Empresas â¢ Transformación digital y automatización: Estudio de las nuevas tecnologías, como la inteligencia artificial, la automatización de procesos, el big data y el análisis predictivo, y su impacto en la gestión empresarial a nivel global. â¢ Globalización y mercados emergentes: Estrategias para operar en mercados globalizados, con énfasis en las oportunidades y desafíos que representan los mercados emergentes, como Asia, África y América Latina. â¢ Sostenibilidad y negocios verdes: Tendencias hacia la sostenibilidad empresarial, incluyendo la economía circular, la responsabilidad social empresarial (RSE) y la integración de políticas ecológicas dentro de los modelos de negocio. â¢ Economía digital y comercio electrónico: Cambios en el comercio internacional debido al auge del comercio electrónico, plataformas digitales, marketing en redes sociales y la globalización de los negocios en línea. 2. Perspectivas Nacionales, Políticas, Históricas y Culturales Diversas â¢ Análisis de contextos políticos y económicos: Abordar las diversas estructuras políticas y económicas que impactan las prácticas empresariales, incluidas las políticas gubernamentales, las reformas económicas y la legislación laboral, tanto a nivel nacional como internacional. â¢ Cultura organizacional y liderazgo intercultural: Estudio de las diferencias en los estilos de liderazgo, las costumbres empresariales y la toma de decisiones en diferentes regiones y culturas. Esto incluye la comprensión de la jerarquía, las negociaciones y las relaciones laborales en diferentes contextos. â¢ Historia de la administración de empresas: Profundización en los orígenes y la evolución de la administración de empresas, destacando los hitos y los cambios paradigmáticos que han influido en la gestión moderna en diversos países y continentes. 3. Leyes y Normas Nacionales e Internacionales â¢ Normativa internacional en negocios: Contenidos sobre los acuerdos internacionales como los tratados de libre comercio, las políticas de la OMC (Organización Mundial del Comercio) y las normativas de la UE (Unión Europea) que afectan el comercio y la gestión empresarial internacional. â¢ Derechos laborales y legislación internacional: Incluir la normativa internacional sobre derechos laborales, como la legislación de la OIT (Organización Internacional del Trabajo) y las leyes nacionales que protegen a los trabajadores en diferentes países. â¢ Protección de datos y privacidad: Leyes internacionales sobre privacidad y seguridad de la información, como el GDPR (Reglamento General de Protección de Datos) en la UE, que impactan la gestión empresarial en un entorno digital globalizado. 4. Cuestiones Éticas y Problemas en la Globalización â¢ Ética empresarial global: Reflexión sobre la ética en los negocios, incluyendo la responsabilidad de las empresas en la toma de decisiones que afecten la sociedad y el medio ambiente, tanto a nivel local como global. Esto incluye la gestión ética de las relaciones laborales, la transparencia y la integridad empresarial. â¢ Justicia social y equidad: Estudio de cómo las empresas pueden contribuir a la justicia social y la equidad, considerando la diversidad de sus empleados y el impacto de sus operaciones en diferentes comunidades. â¢ Derechos humanos y corporaciones: Análisis de la responsabilidad de las empresas en la promoción y protección de los derechos humanos, tanto en sus cadenas de suministro como en sus operaciones directas. â¢ Problemas sociales, económicos y ambientales: Desafíos contemporáneos como la pobreza, el desempleo, las desigualdades sociales, el cambio climático y los problemas ambientales. Incluir la integración de la sostenibilidad y la responsabilidad social en las estrategias empresariales. 5. Costumbres, Problemas y Terminología en Diferentes Contextos Culturales â¢ Prácticas empresariales interculturales: Enfoque en cómo las empresas deben adaptarse a las costumbres y normas culturales de diferentes países, considerando aspectos como el comportamiento de los consumidores, la negociación y el marketing en contextos culturales diversos. â¢ Terminología y prácticas profesionales globales: Estudio de la terminología empresarial que se utiliza en diversas regiones y sectores, y cómo las diferencias en el lenguaje y las costumbres pueden afectar las negociaciones y las relaciones comerciales. â¢ Solución de conflictos interculturales: Formación sobre cómo manejar y resolver disputas y desacuerdos que surgen debido a diferencias culturales en las relaciones laborales y comerciales. 6. Competencias y Capacidades Globales â¢ Liderazgo global: Desarrollo de competencias en liderazgo que incluyan la habilidad para gestionar equipos multiculturales y tomar decisiones éticas en un contexto global. â¢ Adaptabilidad en mercados globalizados: Formación en la capacidad de adaptarse y ser flexible frente a cambios rápidos en mercados internacionales, especialmente en tiempos de crisis económicas o cambios geopolíticos. Integrando estos contenidos en el currículo, el programa de Administración de Empresas virtual de la Corporación Escuela Tecnológica de Oriente no solo proporciona una formación sólida en gestión empresarial, sino que también prepara a los estudiantes para actuar como líderes responsables y éticos en un entorno global y multicultural. En las estrategias pedagógicas del programa, se busca fomentar el uso y apropiación de metodologías activas de aprendizaje que permitan a los estudiantes abordar temas o problemas desde diversas perspectivas interculturales e internacionales. Esto incluye el análisis de problemáticas locales y globales relacionadas con"
    ],
    "unidades": [
      {
        "numero": 1,
        "fase": "Fase de Fundamentación",
        "porcentaje_fase": "20%",
        "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Juego Gerencial",
        "ra": "Integra conocimientos de las diferentes áreas funcionales para la toma de decisiones gerenciales.",
        "actividades": [
          {
            "nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial",
            "porcentaje": "15%",
            "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Juego Gerencial."
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
        "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Juego Gerencial",
        "ra": "Evalúa el desempeño organizacional en escenarios simulados de competencia empresarial.",
        "actividades": [
          {
            "nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)",
            "porcentaje": "20%",
            "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Juego Gerencial."
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
        "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Juego Gerencial",
        "ra": "Demuestra liderazgo, pensamiento crítico y capacidad de negociación en la gestión estratégica. Fuente: Construcción del programa 3.8.1. Lineamientos de innovación pedagógica y didáctica adoptados por la institución La Corporación fundamenta su modelo pedagógico âFormación en contextos de aplicaciónâ en las teorías del aprendizaje del constructivismo social, escuela nueva y aprendizaje significativo. De la misma forma, el modelo encuentra coherencia con el lema del Proyecto Educativo institucional âAprender a convertirseâ en cuanto la a la capacidad que tiene el estudiante en la autotransformación y la de su entorno y mediante la construcción colectiva del conocimiento. Los lineamientos de innovación pedagógica y didáctica adoptados por la Corporación Escuela Tecnológica de Oriente probablemente están diseñados para alinearse con su misión educativa y sus objetivos estratégicos. Los lineamientos incluyen aspectos como: 1. Enfoque centrado en el estudiante: Metodologías activas que promueven el aprendizaje autónomo y colaborativo, como aprendizaje basado en proyectos (ABP), aprendizaje-servicio, y el aprendizaje significativo. 2. Integración tecnológica: Uso de herramientas digitales y plataformas virtuales que faciliten el acceso al conocimiento y fortalezcan las competencias digitales de estudiantes y docentes. 3. Currículo flexible y contextualizado: Diseñado para responder a las necesidades del entorno laboral y social, promoviendo la adaptabilidad de los programas académicos a los cambios del mercado y las tendencias globales. 4. Fortalecimiento de competencias socioemocionales: Incorporación de estrategias que fomenten el liderazgo, la resolución de problemas, la comunicación efectiva y el trabajo en equipo. 5. Inclusión y equidad: Fomentar un aprendizaje accesible y diverso que respete y valore las diferencias individuales. 6. Evaluación innovadora: Uso de rúbricas, portafolios, proyectos integradores y evaluaciones continuas para medir el aprendizaje de manera integral. 3.9. Componentes de interacción En el marco del programa de Administración de Empresas ofertado en modalidad de registro único (presencial â virtual), la interacción entre los actores del proceso formativo se concibe de manera diferenciada según la modalidad, en coherencia con sus particularidades pedagógicas, didácticas y tecnológicas. En la modalidad presencial, los componentes de interacción se fundamentan en la relación directa entre estudiante y docente en ambientes físicos institucionales, favoreciendo el desarrollo de actividades académicas con acompañamiento continuo mediante clases, talleres, seminarios y demás estrategias propias del trabajo en aula. Por su parte, en la modalidad virtual, la interacción se desarrolla a través de ambientes virtuales de aprendizaje, donde la mediación tecnológica es el eje central del proceso formativo. En este sentido, la interacción se da mediante: â¢ Espacios asincrónicos, como foros, recursos digitales, actividades en plataforma y retroalimentación diferida. â¢ Espacios sincrónicos virtuales, concebidos como estrategias de acompañamiento pedagógico en línea, sin que impliquen presencialidad física ni equivalencia con clases tradicionales. En esta modalidad, el proceso formativo privilegia el aprendizaje autónomo del estudiante, orientado y acompañado por el docente a través de herramientas tecnológicas institucionales, garantizando la interacción, el seguimiento y el logro de los resultados de aprendizaje. 3.9.1. Articulación del programa con los contextos locales, regionales y globales El programa de Administración de Empresas en modalidad de registro único se articula de manera integral con los contextos locales, regionales y globales al formar profesionales con capacidades para comprender y responder a las dinámicas económicas, sociales y culturales de su entorno inmediato. Según (García & Sánchez, 2020), la educación virtual fomenta la inclusión al permitir el acceso a la formación desde cualquier lugar, potenciando la interacción entre estudiantes de diversos contextos culturales y socioeconómicos. Además, este enfoque facilita el análisis de las necesidades específicas de las comunidades locales, permitiendo la identificación de oportunidades de emprendimiento y desarrollo sostenible, lo que refuerza la conexión entre la academia y el entorno social inmediato (Álvarez, Muñoz, & Pérez, 2019). En el ámbito regional y global, el programa incorpora contenidos que promueven competencias interculturales, pensamiento crítico y habilidades estratégicas esenciales para enfrentar los retos de la globalización. Según Porter (2008), la competitividad de las organizaciones depende de la capacidad de sus líderes para interpretar tendencias internacionales y aprovechar oportunidades en mercados globales. Asimismo, las metodologías activas, como la simulación empresarial y el aprendizaje basado en proyectos, desarrollan en los estudiantes una visión estratégica y adaptativa que les permite tomar decisiones informadas y éticas, contribuyendo al fortalecimiento de sus organizaciones y su integración con el entorno global (Morin, 2017) 3.9.2. Estrategias para la promoción de la internacionalización del currículo La Corporación Escuela Tecnológica del Oriente en el marco de su política de internacionalización establece los lineamientos para la internacionalización del currículo de los programas académicos, los siguientes elementos: â¢ Coordinar esfuerzos entre las facultades y áreas académicas para garantizar la participación de la Institución en foros, congresos y demás actividades académicas que generen visibilidad internacional. â¢ Ofrecer al estudiante acercamientos a contextos internacionales e interculturales que le permitan tener una mentalidad âglobalâ a través de docentes, tutores y expositores internacionales. â¢ Trabajar desde las facultades y áreas académicas para lograr doble titulación, titulación conjunta y homologación de programas académicos de la Institución. â¢ Actualizar permanentemente los currículos de los programas académicos de acuerdo con las tendencias nacionales e internacionales que permitan dar respuesta a las necesidades del entorno global. â¢ Incluir innovación tecnológica dentro de los currículos académicos. Las estrategias del programa de Administración de Empresas, de la Corporación Escuela Tecnológica de Oriente, para incorporar dimensiones internacionales e interculturales en el currículo y en las prácticas pedagógicas, se enfoca en varias áreas clave para enriquecer el aprendizaje de los estudiantes y promover competencias distintivas de un ciudadano global. A continuación, se detallan algunas de estas estrategias: 1. Currículo Globalizado y Multicultural â¢ Módulos internacionales: Incluir cursos que aborden temas clave de la gestión empresarial global, como comercio internacional, gestión de la diversidad cultural, ética global y sostenibilidad internacional. â¢ Estudios de caso internacionales: Incorporar ejemplos prácticos y estudios de caso de empresas de diferentes regiones del mundo para analizar cómo las decisiones empresariales son influenciadas por contextos internacionales y culturales diversos. â¢ Asignaturas interculturales: Cursos que profundicen en la comprensión de diferentes culturas empresariales, costumbres, valores y prácticas laborales en distintas partes del mundo. 2. Colaboración Internacional â¢ Proyectos en equipo con estudiantes internacionales: Fomentar la colaboración entre estudiantes de diferentes países a través de proyectos grupales virtuales. Esto ayuda a los estudiantes a desarrollar habilidades de comunicación intercultural, trabajo en equipo global y resolución de problemas desde diversas perspectivas. â¢ Intercambios académicos virtuales: Establecer alianzas con universidades extranjeras para permitir que los estudiantes participen en programas de intercambio académico, debates y seminarios virtuales internacionales. 3. Tecnologías de Aprendizaje Global â¢ Plataformas colaborativas internacionales: Utilizar plataformas digitales que faciliten la interacción entre estudiantes de diferentes países. Herramientas como foros, videoconferencias y wikis permiten intercambiar ideas y experiencias en tiempo real. â¢ Simuladores de negocios internacionales: Integrar simuladores de gestión empresarial que permitan a los estudiantes enfrentar situaciones de toma de decisiones empresariales en un contexto global, como mercados internacionales y relaciones interculturales 4. Perspectiva Internacional en la Evaluación â¢ Evaluación de competencias interculturales: Implementar métodos de evaluación que no solo midan los conocimientos técnicos, sino también las habilidades interculturales y la capacidad para adaptarse a contextos multiculturales. â¢ Portafolios de experiencias internacionales: Los estudiantes pueden documentar sus experiencias virtuales e interculturales en portafolios, lo que les permite reflexionar sobre su aprendizaje y sus capacidades para gestionar equipos y empresas a nivel global. 5. Desarrollo de Competencias Transversales â¢ Lenguas extranjeras: Incluir módulos o recursos para el aprendizaje de lenguas extranjeras, especialmente inglés y otros idiomas relevantes en los negocios internacionales, promoviendo así la comunicación efectiva en un entorno multicultural. â¢ Ética y Responsabilidad Social Empresarial Global: Incorporar el estudio de la ética empresarial global y los desafíos de la responsabilidad social empresarial en diferentes culturas y regiones del mundo. 6. Red de Contactos Internacionales â¢ Redes profesionales globales: Establecer vínculos con redes de empresas y profesionales internacionales para proporcionar a los estudiantes acceso a eventos, conferencias y seminarios globales, ampliando su visión sobre la administración de empresas en un contexto internacional. â¢ Mentoría internacional: Conectar a los estudiantes con mentores internacionales que puedan guiarlos en su desarrollo profesional y ayudarles a comprender mejor los desafíos y oportunidades de operar en mercados globales. Estas estrategias permiten que los estudiantes no solo comprendan la teoría y las prácticas de la administración de empresas, sino que también estén preparados para enfrentar y prosperar en un entorno empresarial globalizado y multicultural. Estas estrategias pueden llevarse a cabo en los siguientes ámbitos: contenidos curriculares, estrategias pedagógicas, actividades extracurriculares y/o recursos. Los contenidos curriculares del programa de Administración de Empresas de la Corporación Escuela Tecnológica de Oriente deben reflejar las tendencias y problemáticas globales, regionales e internacionales que son relevantes para la formación de profesionales con visión global y habilidades interculturales. A continuación, se detallan algunas temáticas clave a incorporar: 1. Tendencias Globales y Regionales en el Campo de la Administración de Empresas â¢ Transformación digital y automatización: Estudio de las nuevas tecnologías, como la inteligencia artificial, la automatización de procesos, el big data y el análisis predictivo, y su impacto en la gestión empresarial a nivel global. â¢ Globalización y mercados emergentes: Estrategias para operar en mercados globalizados, con énfasis en las oportunidades y desafíos que representan los mercados emergentes, como Asia, África y América Latina. â¢ Sostenibilidad y negocios verdes: Tendencias hacia la sostenibilidad empresarial, incluyendo la economía circular, la responsabilidad social empresarial (RSE) y la integración de políticas ecológicas dentro de los modelos de negocio. â¢ Economía digital y comercio electrónico: Cambios en el comercio internacional debido al auge del comercio electrónico, plataformas digitales, marketing en redes sociales y la globalización de los negocios en línea. 2. Perspectivas Nacionales, Políticas, Históricas y Culturales Diversas â¢ Análisis de contextos políticos y económicos: Abordar las diversas estructuras políticas y económicas que impactan las prácticas empresariales, incluidas las políticas gubernamentales, las reformas económicas y la legislación laboral, tanto a nivel nacional como internacional. â¢ Cultura organizacional y liderazgo intercultural: Estudio de las diferencias en los estilos de liderazgo, las costumbres empresariales y la toma de decisiones en diferentes regiones y culturas. Esto incluye la comprensión de la jerarquía, las negociaciones y las relaciones laborales en diferentes contextos. â¢ Historia de la administración de empresas: Profundización en los orígenes y la evolución de la administración de empresas, destacando los hitos y los cambios paradigmáticos que han influido en la gestión moderna en diversos países y continentes. 3. Leyes y Normas Nacionales e Internacionales â¢ Normativa internacional en negocios: Contenidos sobre los acuerdos internacionales como los tratados de libre comercio, las políticas de la OMC (Organización Mundial del Comercio) y las normativas de la UE (Unión Europea) que afectan el comercio y la gestión empresarial internacional. â¢ Derechos laborales y legislación internacional: Incluir la normativa internacional sobre derechos laborales, como la legislación de la OIT (Organización Internacional del Trabajo) y las leyes nacionales que protegen a los trabajadores en diferentes países. â¢ Protección de datos y privacidad: Leyes internacionales sobre privacidad y seguridad de la información, como el GDPR (Reglamento General de Protección de Datos) en la UE, que impactan la gestión empresarial en un entorno digital globalizado. 4. Cuestiones Éticas y Problemas en la Globalización â¢ Ética empresarial global: Reflexión sobre la ética en los negocios, incluyendo la responsabilidad de las empresas en la toma de decisiones que afecten la sociedad y el medio ambiente, tanto a nivel local como global. Esto incluye la gestión ética de las relaciones laborales, la transparencia y la integridad empresarial. â¢ Justicia social y equidad: Estudio de cómo las empresas pueden contribuir a la justicia social y la equidad, considerando la diversidad de sus empleados y el impacto de sus operaciones en diferentes comunidades. â¢ Derechos humanos y corporaciones: Análisis de la responsabilidad de las empresas en la promoción y protección de los derechos humanos, tanto en sus cadenas de suministro como en sus operaciones directas. â¢ Problemas sociales, económicos y ambientales: Desafíos contemporáneos como la pobreza, el desempleo, las desigualdades sociales, el cambio climático y los problemas ambientales. Incluir la integración de la sostenibilidad y la responsabilidad social en las estrategias empresariales. 5. Costumbres, Problemas y Terminología en Diferentes Contextos Culturales â¢ Prácticas empresariales interculturales: Enfoque en cómo las empresas deben adaptarse a las costumbres y normas culturales de diferentes países, considerando aspectos como el comportamiento de los consumidores, la negociación y el marketing en contextos culturales diversos. â¢ Terminología y prácticas profesionales globales: Estudio de la terminología empresarial que se utiliza en diversas regiones y sectores, y cómo las diferencias en el lenguaje y las costumbres pueden afectar las negociaciones y las relaciones comerciales. â¢ Solución de conflictos interculturales: Formación sobre cómo manejar y resolver disputas y desacuerdos que surgen debido a diferencias culturales en las relaciones laborales y comerciales. 6. Competencias y Capacidades Globales â¢ Liderazgo global: Desarrollo de competencias en liderazgo que incluyan la habilidad para gestionar equipos multiculturales y tomar decisiones éticas en un contexto global. â¢ Adaptabilidad en mercados globalizados: Formación en la capacidad de adaptarse y ser flexible frente a cambios rápidos en mercados internacionales, especialmente en tiempos de crisis económicas o cambios geopolíticos. Integrando estos contenidos en el currículo, el programa de Administración de Empresas virtual de la Corporación Escuela Tecnológica de Oriente no solo proporciona una formación sólida en gestión empresarial, sino que también prepara a los estudiantes para actuar como líderes responsables y éticos en un entorno global y multicultural. En las estrategias pedagógicas del programa, se busca fomentar el uso y apropiación de metodologías activas de aprendizaje que permitan a los estudiantes abordar temas o problemas desde diversas perspectivas interculturales e internacionales. Esto incluye el análisis de problemáticas locales y globales relacionadas con",
        "actividades": [
          {
            "nombre": "Tarea 3: Producto Integrador de la Asignatura",
            "porcentaje": "20%",
            "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Juego Gerencial."
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
      "Unidad 1: Fundamentación Teórica y Diagnóstico de Juego Gerencial",
      "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Juego Gerencial",
      "Unidad 3: Consolidación, Innovación y Sustentación en Juego Gerencial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_2",
    "semestre": 1,
    "nombre": "Constitución y Democracia",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
    "id": "vig_4",
    "semestre": 1,
    "nombre": "Inglés I",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_6",
    "semestre": 1,
    "nombre": "Fundamentos Contables",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_7",
    "semestre": 1,
    "nombre": "Fundamentos de Economía",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_9",
    "semestre": 2,
    "nombre": "Legislación Laboral",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_11",
    "semestre": 2,
    "nombre": "Costos",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_investigacion_grado",
    "componente_nombre": "Investigación, Emprendimiento y Grado",
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
    "id": "vig_13",
    "semestre": 2,
    "nombre": "Microeconomía",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_16",
    "semestre": 3,
    "nombre": "Derecho Administrativo",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_18",
    "semestre": 3,
    "nombre": "Electiva Profundización I",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "v_electivo",
    "componente_nombre": "Electivas de Profundización y Humanísticas",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_investigacion_grado",
    "componente_nombre": "Investigación, Emprendimiento y Grado",
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
    "id": "vig_20",
    "semestre": 3,
    "nombre": "Macroeconomía",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_23",
    "semestre": 4,
    "nombre": "Legislación Tributaria",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_24",
    "semestre": 4,
    "nombre": "Electiva Humanística I",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_26",
    "semestre": 4,
    "nombre": "Creatividad e Innovación",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_investigacion_grado",
    "componente_nombre": "Investigación, Emprendimiento y Grado",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_28",
    "semestre": 4,
    "nombre": "Inglés IV",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_30",
    "semestre": 5,
    "nombre": "Investigación de Operaciones",
    "tipo": "TP",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_ciencias_basicas",
    "componente_nombre": "Ciencias Básicas",
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
    "id": "vig_31",
    "semestre": 5,
    "nombre": "Fundamentos de Mercadeo",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_mercadeo_comercial",
    "componente_nombre": "Mercadeo y Gestión Comercial",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_33",
    "semestre": 5,
    "nombre": "Administración de Salarios",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_34",
    "semestre": 5,
    "nombre": "Electiva Profundización II",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "v_electivo",
    "componente_nombre": "Electivas de Profundización y Humanísticas",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_37",
    "semestre": 6,
    "nombre": "Gerencia de Mercadeo",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_mercadeo_comercial",
    "componente_nombre": "Mercadeo y Gestión Comercial",
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
    "id": "vig_38",
    "semestre": 6,
    "nombre": "E-Commerce",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_mercadeo_comercial",
    "componente_nombre": "Mercadeo y Gestión Comercial",
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
    "id": "vig_39",
    "semestre": 6,
    "nombre": "Tecnología e Innovación",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_mercadeo_comercial",
    "componente_nombre": "Mercadeo y Gestión Comercial",
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
    "id": "vig_40",
    "semestre": 6,
    "nombre": "Métodos Cuantitativos y Cualitativos",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_45",
    "semestre": 7,
    "nombre": "Presupuesto",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_46",
    "semestre": 7,
    "nombre": "Gerencia de Talento Humano",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_47",
    "semestre": 7,
    "nombre": "Proyecto Empresarial",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_investigacion_grado",
    "componente_nombre": "Investigación, Emprendimiento y Grado",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "ELECTIVA",
    "area_name": "Electiva",
    "componente_id": "v_electivo",
    "componente_nombre": "Electivas de Profundización y Humanísticas",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_mercadeo_comercial",
    "componente_nombre": "Mercadeo y Gestión Comercial",
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
    "id": "vig_50",
    "semestre": 8,
    "nombre": "Habilidades Gerenciales",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_51",
    "semestre": 8,
    "nombre": "Gerencia de Producción",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_52",
    "semestre": 8,
    "nombre": "Investigación de Mercados",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_53",
    "semestre": 8,
    "nombre": "Gerencia Financiera",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_54",
    "semestre": 8,
    "nombre": "Deontología",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "area_name": "Transversal",
    "componente_id": "v_socio_humanistica",
    "componente_nombre": "Socio-Humanística y Bilingüismo",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_investigacion_grado",
    "componente_nombre": "Investigación, Emprendimiento y Grado",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_57",
    "semestre": 9,
    "nombre": "Gerencia del Servicio",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_58",
    "semestre": 9,
    "nombre": "Evaluación de Proyectos de Inversión",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_finanzas_contabilidad",
    "componente_nombre": "Economía, Finanzas y Contabilidad",
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
    "id": "vig_59",
    "semestre": 9,
    "nombre": "Responsabilidad Social Empresarial",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
      "directa": 32,
      "independiente": 64,
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
    "creditos": 3,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_admon_procesos",
    "componente_nombre": "Administración, Procesos y Operaciones",
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
    "id": "vig_62",
    "semestre": 9,
    "nombre": "Proyecto de Grado II",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "area_name": "Disciplinar",
    "componente_id": "v_investigacion_grado",
    "componente_nombre": "Investigación, Emprendimiento y Grado",
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
      "directa": 32,
      "independiente": 64,
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
                <span class="matrix-area-badge area-${s.area.toLowerCase()}" style="margin-left:6px;"><i class="fas fa-layer-group"></i> Área ${s.area_name || s.area}</span>
                <span style="background:#0284C7; color:#fff; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700; margin-left:6px;"><i class="fas fa-cube"></i> ${s.componente_nombre || 'Componente'}</span>
                <span style="background:var(--carbon); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700; margin-left:6px;">${s.creditos} Créditos</span>
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
                <strong style="color:#0369A1; font-size:0.82rem;"><i class="fas fa-university"></i> Modalidad Presencial (1:2 · Decreto 1330)</strong>
                <div style="font-size:0.8rem; margin-top:4px; color:#0C4A6E;">
                    • Docencia Directa (Acompañamiento): <strong>${s.presencial.directa}h</strong> (${pd_cr}h/cr)<br>
                    • Trabajo Autónomo e Independiente: <strong>${s.presencial.independiente}h</strong> (${pi_cr}h/cr)<br>
                    • Total Horas Semestre: <strong>${s.presencial.total}h</strong> (48h por crédito)
                </div>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:12px; border-radius:8px;">
                <strong style="color:#15803D; font-size:0.82rem;"><i class="fas fa-laptop"></i> Modalidad Virtual (1:3 · Decreto 1330)</strong>
                <div style="font-size:0.8rem; margin-top:4px; color:#14532D;">
                    • Trabajo Mediado (LMS y Sincrónico): <strong>${s.virtual.mediado}h</strong> (${vm_cr}h/cr)<br>
                    • Trabajo Autónomo e Independiente: <strong>${s.virtual.independiente}h</strong> (${vi_cr}h/cr)<br>
                    • Total Horas Semestre: <strong>${s.virtual.total}h</strong> (48h por crédito)
                </div>
            </div>
        </div>

        <div style="margin-bottom:16px;">
            <div class="c3-modal-section-title"><i class="fas fa-info-circle"></i> Descripción Oficial del Curso</div>
            <p style="font-size:0.85rem; color:var(--carbon); line-height:1.6; margin:0;">${s.descripcion}</p>
        </div>

        <div style="margin-bottom:16px;">
            <div class="c3-modal-section-title"><i class="fas fa-layer-group"></i> 3 Unidades Temáticas, RAs y Criterios Evaluativos (20% - 25% - 55%)</div>
            ${unitsHtml}
        </div>
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
                <div style="font-size:0.82rem; color:#1E293B; margin-bottom:10px; background:#EFF6FF; padding:8px 12px; border-radius:6px; border-left:3px solid #3B82F6;">
                    <strong><i class="fas fa-bullseye" style="color:#2563EB;"></i> Resultado de Aprendizaje (RA${u.numero}):</strong> ${u.ra}
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    ${u.actividades.map(a => `
                        <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:6px; font-size:0.78rem;">
                            <div style="display:flex; justify-content:space-between; font-weight:800; color:#0F172A; margin-bottom:3px;">
                                <span>${a.nombre}</span>
                                <span style="color:#059669;">${a.porcentaje}</span>
                            </div>
                            <div style="color:var(--gray-text); font-size:0.74rem;">${a.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    const modalHtml = `
    <div class="c3-modal-overlay" id="c3SubjectModalOverlay" onclick="if(event.target===this) closeSubjectModal()">
        <div class="c3-modal-card" style="max-width:880px; max-height:90vh; overflow-y:auto;">
            <div class="c3-modal-header" style="position:sticky; top:0; z-index:10;">
                <div>
                    ${planBadge}
                    <span class="badge-presencial" style="margin-right:6px;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                    <span class="matrix-area-badge area-${s.area.toLowerCase()}" style="margin-right:6px;"><i class="fas fa-layer-group"></i> Área ${s.area_name || s.area}</span>
                    <span style="background:rgba(255,255,255,0.25); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.72rem; font-weight:700;"><i class="fas fa-cube"></i> ${s.componente_nombre || 'Componente'}</span>
                    <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:#fff; margin-top:8px;">${s.nombre}</h3>
                    <div style="font-size:0.78rem; color:rgba(255,255,255,0.85); margin-top:2px;"><i class="fas fa-link"></i> Prerrequisito: ${s.prerrequisito} · Créditos: ${s.creditos}</div>
                </div>
                <button class="c3-modal-close" onclick="closeSubjectModal()"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="c3-modal-body">
                <!-- HORAS POR MODALIDAD -->
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-clock"></i> Distribución de Horas por Modalidad (Decreto 1330 · 48h por Crédito)</div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:8px;">
                        <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:12px; border-radius:8px;">
                            <strong style="color:#0369A1; font-size:0.84rem;"><i class="fas fa-university"></i> Modalidad Presencial (1:2)</strong>
                            <div style="font-size:0.8rem; margin-top:4px; color:#0C4A6E; line-height:1.5;">
                                • Docencia Directa (Acompañamiento): <strong>${s.presencial.directa}h</strong> (${pd_cr}h/cr)<br>
                                • Trabajo Autónomo e Independiente: <strong>${s.presencial.independiente}h</strong> (${pi_cr}h/cr)<br>
                                • Total Horas Semestre: <strong>${s.presencial.total}h</strong>
                            </div>
                        </div>
                        <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:12px; border-radius:8px;">
                            <strong style="color:#15803D; font-size:0.84rem;"><i class="fas fa-laptop"></i> Modalidad Virtual (1:3)</strong>
                            <div style="font-size:0.8rem; margin-top:4px; color:#14532D; line-height:1.5;">
                                • Trabajo Mediado (LMS y Asesoría): <strong>${s.virtual.mediado}h</strong> (${vm_cr}h/cr)<br>
                                • Trabajo Autónomo e Independiente: <strong>${s.virtual.independiente}h</strong> (${vi_cr}h/cr)<br>
                                • Total Horas Semestre: <strong>${s.virtual.total}h</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- DESCRIPCIÓN -->
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-align-left"></i> Contenido y Descripción Oficial del Curso</div>
                    <p style="font-size:0.85rem; color:var(--carbon); line-height:1.6; margin:0;">${s.descripcion}</p>
                </div>

                <!-- 3 UNIDADES, 3 RAS, Y ACTIVIDADES -->
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-tasks"></i> 3 Unidades Temáticas, Resultados de Aprendizaje y Actividades (20% - 25% - 55%)</div>
                    ${unitsHtml}
                </div>

                <!-- RÚBRICA CETO -->
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-check-double"></i> Rúbrica Analítica Institucional CETO</div>
                    <table class="tbl" style="margin-top:8px;">
                        <thead>
                            <tr>
                                <th>Criterio Evaluativo</th>
                                <th style="text-align:center;">Peso</th>
                                <th>Excelente (4.6-5.0)</th>
                                <th>Sobresaliente (4.0-4.5)</th>
                                <th>Aceptable (3.0-3.9)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="row-accent">
                                <td class="lb"><strong>Disciplinar</strong></td>
                                <td style="text-align:center; font-weight:900; color:#3B82F6;">60%</td>
                                <td style="font-size:0.76rem;">Dominio conceptual exhaustivo y rigor técnico en la solución aplicada.</td>
                                <td style="font-size:0.76rem;">Aplica adecuadamente los métodos y conceptos con errores menores.</td>
                                <td style="font-size:0.76rem;">Aplica conceptos básicos con limitaciones en el análisis profundo.</td>
                            </tr>
                            <tr>
                                <td class="lb"><strong>Genérico / Saber Pro</strong></td>
                                <td style="text-align:center; font-weight:900; color:#14B8A6;">30%</td>
                                <td style="font-size:0.76rem;">Pensamiento crítico analítico, razonamiento cuantitativo y redacción formal sólida.</td>
                                <td style="font-size:0.76rem;">Buena argumentación con estructura lógica y fundamentación apropiada.</td>
                                <td style="font-size:0.76rem;">Argumentación elemental con restricciones en la articulación conceptual.</td>
                            </tr>
                            <tr class="row-accent">
                                <td class="lb"><strong>Formalidad y Ética</strong></td>
                                <td style="text-align:center; font-weight:900; color:#F59E0B;">10%</td>
                                <td style="font-size:0.76rem;">Normas APA impecables, entrega oportuna y ética académica ejemplar.</td>
                                <td style="font-size:0.76rem;">Cumple normas APA con detalles menores de citación y puntualidad.</td>
                                <td style="font-size:0.76rem;">Presenta inconsistencias formales de citación o entregas tardías.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- PERFILES Y RAP -->
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-user-graduate"></i> Articulación con Perfil de Egreso y RAP del Programa</div>
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:12px; border-radius:8px; font-size:0.83rem;">
                        <p style="margin-bottom:6px;"><strong>Perfil del Egresado:</strong> ${s.perfil_asociado}</p>
                        <p style="margin:0;"><strong>RAP del Programa:</strong> ${s.rap_asociado}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.closeSubjectModal = function() {
    const el = document.getElementById('c3SubjectModalOverlay');
    if (el) el.remove();
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
                    Visualización en matriz continua: Componentes Curriculares (filas) × Semestres Académicos (columnas I a IX). Haz clic sobre cualquier asignatura para desplegar su trazabilidad detallada.
                </p>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#0F172A; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-clock"></i> 58 Asignaturas Totales
                    </span>
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-history"></i> Plan SACES Anterior
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
                <i class="fas fa-check-double"></i> Malla Curricular por Áreas y Componentes
            </span>
        </div>
    </div>

    <div class="malla-matrix-scale-outer" id="malla-matrix-outer-vig">
        <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-vig">
            <table class="malla-matrix-table malla-matrix-table-9sem">
                <thead>
                    <tr>
                        <th class="matrix-comp-header-corner">
                            <i class="fas fa-layer-group" style="color:var(--orange); margin-right:4px;"></i> ÁREA / COMPONENTE
                        </th>
                        <th class="sem-header">SEM 1</th><th class="sem-header">SEM 2</th><th class="sem-header">SEM 3</th><th class="sem-header">SEM 4</th><th class="sem-header">SEM 5</th><th class="sem-header">SEM 6</th><th class="sem-header">SEM 7</th><th class="sem-header">SEM 8</th><th class="sem-header">SEM 9</th>
                    </tr>
                </thead>
                <tbody><tr>
            <td class="matrix-comp-header comp-border-v_ciencias_basicas" style="border-left:4px solid #2563EB;">
                <span class="matrix-area-badge area-transversal">Área Transversal</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-calculator" style="color:#2563EB; margin-right:4px;"></i> Ciencias Básicas
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_ciencias_basicas" onclick="selectMatrixSubject('vig_30', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Operaciones</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-v_socio_humanistica" style="border-left:4px solid #1D4ED8;">
                <span class="matrix-area-badge area-transversal">Área Transversal</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-globe-americas" style="color:#1D4ED8; margin-right:4px;"></i> Socio-Humanística y Bilingüismo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_2', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Constitución y Democracia</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_3', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Expresión Oral y Escrita</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_4', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_14', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_21', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_28', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés IV</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés III</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_35', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés V</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés IV</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_42', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés VI</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés V</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_socio_humanistica" onclick="selectMatrixSubject('vig_54', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Deontología</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-v_admon_procesos" style="border-left:4px solid #F39200;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-briefcase" style="color:#F39200; margin-right:4px;"></i> Administración, Procesos y Operaciones
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_1', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Matemáticas Básicas</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_5', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_8', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cálculo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemáticas Básicas</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_10', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_15', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_17', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Administración por Procesos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_22', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_24', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Humanística I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_25', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Liderazgo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_27', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Entorno Económico Colombiano e Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_29', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_33', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Administración de Salarios</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Laboral</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_40', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Métodos Cuantitativos y Cualitativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_41', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Humanística II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_43', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración Pública</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Administrativo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_44', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gestión de la Calidad</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración por Procesos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_46', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración de Salarios</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_50', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Liderazgo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_51', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Operaciones</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_52', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_56', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Planeación y Prospectiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Habilidades Gerenciales</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_57', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia del Servicio</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_59', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Responsabilidad Social Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Deontología</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_60', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Gobierno Corporativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_admon_procesos" onclick="selectMatrixSubject('vig_61', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Distribución Física y Logística</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Producción</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-v_finanzas_contabilidad" style="border-left:4px solid #D97706;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-chart-pie" style="color:#D97706; margin-right:4px;"></i> Economía, Finanzas y Contabilidad
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_6', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_7', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Economía</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_9', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Laboral</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_11', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Costos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_13', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Economía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_16', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Derecho Administrativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Constitución y Democracia</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_20', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_23', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Tributaria</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_32', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Modelos de Desarrollo Económico</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico Colombiano e Internacional</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_36', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_45', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Presupuesto</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_53', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_finanzas_contabilidad" onclick="selectMatrixSubject('vig_58', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Evaluación de Proyectos de Inversión</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia Financiera</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-v_mercadeo_comercial" style="border-left:4px solid #EA580C;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-shopping-cart" style="color:#EA580C; margin-right:4px;"></i> Mercadeo y Gestión Comercial
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_mercadeo_comercial" onclick="selectMatrixSubject('vig_31', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_mercadeo_comercial" onclick="selectMatrixSubject('vig_37', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Mercadeo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_mercadeo_comercial" onclick="selectMatrixSubject('vig_38', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">E-Commerce</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-v_mercadeo_comercial" onclick="selectMatrixSubject('vig_39', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Tecnología e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Creatividad e Innovación</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_mercadeo_comercial" onclick="selectMatrixSubject('vig_49', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Sistema de Información Gerencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Tecnología e Innovación</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-v_investigacion_grado" style="border-left:4px solid #059669;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-flask" style="color:#059669; margin-right:4px;"></i> Investigación, Emprendimiento y Grado
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_investigacion_grado" onclick="selectMatrixSubject('vig_12', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Metodología de la Investigación</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_investigacion_grado" onclick="selectMatrixSubject('vig_19', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cultura Emprendedora</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_investigacion_grado" onclick="selectMatrixSubject('vig_26', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Creatividad e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_investigacion_grado" onclick="selectMatrixSubject('vig_47', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_investigacion_grado" onclick="selectMatrixSubject('vig_55', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado I</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Metodología de la Investigación</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_investigacion_grado" onclick="selectMatrixSubject('vig_62', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Proyecto de Grado I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-v_electivo" style="border-left:4px solid #475569;">
                <span class="matrix-area-badge area-electiva">Área Electiva</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-sliders-h" style="color:#475569; margin-right:4px;"></i> Electivas de Profundización y Humanísticas
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_electivo" onclick="selectMatrixSubject('vig_18', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_electivo" onclick="selectMatrixSubject('vig_34', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización I</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-v_electivo" onclick="selectMatrixSubject('vig_48', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización II</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 32h / 64h
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

        <div class="tab-panel" id="c3-v-areas" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
 Distribución de Áreas de Formación (Plan Vigente - 158 Créditos)
 </h3>
 <div class="grid-4" style="margin-bottom:24px;">
 <div class="card" style="border-top:4px solid #0284C7; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#0284C7;">28 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Básica</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">10 Asignaturas (17.7%)</p>
 </div>
 <div class="card" style="border-top:4px solid #7C3AED; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#7C3AED;">96 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Disciplinar</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">34 Asignaturas (60.8%)</p>
 </div>
 <div class="card" style="border-top:4px solid #16A34A; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#16A34A;">26 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Transversal</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">10 Asignaturas (16.5%)</p>
 </div>
 <div class="card" style="border-top:4px solid #D97706; text-align:center;">
 <div style="font-size:2rem; font-weight:800; color:#D97706;">8 cr</div>
 <h4 style="font-size:0.9rem; margin-top:4px;">Área Electiva</h4>
 <p style="font-size:0.78rem; color:var(--gray-text); margin:0;">4 Asignaturas (5.1%)</p>
 </div>
 </div>
 <div class="card" style="margin-bottom:16px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-calculator" style="color:#0284C7; margin-right:8px;"></i> Área de Formación Transversal y Básica (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#0284C7; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">10 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">22 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Fundamentación científica, cuantitativa, humanística, comunicativa y de bilingüismo del administrador de empresas (10 asignaturas / 22 créditos).</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Constitución y Democracia</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Expresión Oral y Escrita</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés IV</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés III</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Investigación de Operaciones</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés V</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés IV</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés VI</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés V</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Deontología</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr></tbody>
                </table>
            </div>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-briefcase" style="color:#7C3AED; margin-right:8px;"></i> Área de Formación Disciplinar y Específica (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#7C3AED; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">49 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">130 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Núcleo estructurante profesional en gestión, finanzas, operaciones, mercadeo, derecho corporativo y estrategia (49 asignaturas / 130 créditos).</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Matemáticas Básicas</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Administración</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos Contables</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Economía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cálculo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Matemáticas Básicas</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Laboral</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Teoría Organizacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Costos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Metodología de la Investigación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Microeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Economía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Descriptiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Derecho Administrativo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Constitución y Democracia</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Administración por Procesos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cultura Emprendedora</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Macroeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Inferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Tributaria</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Humanística I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Liderazgo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Creatividad e Innovación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Entorno Económico Colombiano e Internacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Matemática Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Modelos de Desarrollo Económico</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico Colombiano e Internacional</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Administración de Salarios</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Laboral</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Comercial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">E-Commerce</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Tecnología e Innovación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Creatividad e Innovación</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Métodos Cuantitativos y Cualitativos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Humanística II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Administración Pública</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Administrativo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gestión de la Calidad</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Administración por Procesos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Presupuesto</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Talento Humano</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Administración de Salarios</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Sistema de Información Gerencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Tecnología e Innovación</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Habilidades Gerenciales</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Liderazgo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Producción</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Operaciones</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Investigación de Mercados</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Metodología de la Investigación</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Planeación y Prospectiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Habilidades Gerenciales</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia del Servicio</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Evaluación de Proyectos de Inversión</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia Financiera</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Responsabilidad Social Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Deontología</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gobierno Corporativo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Distribución Física y Logística</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Producción</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Proyecto de Grado I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr></tbody>
                </table>
            </div>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #D97706;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-sliders-h" style="color:#D97706; margin-right:8px;"></i> Área Electiva y de Profundización (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#D97706; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">3 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">6 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Bolsa de flexibilidad académica dividida en Electivas de Profundización y Electivas Humanísticas (3 asignaturas / 6 créditos).</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profundización I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profundización II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profundización III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización II</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (32h dir / 64h indep = 96h)</td>
            </tr></tbody>
                </table>
            </div>
        </div>
 </div>

 <!-- SUB TAB 2.3: PERFILES Y RAPS VIGENTES -->

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

        <div class="tab-panel" id="c3-v-flex" style="display:none;">
 <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
 Lineamientos de Flexibilidad Curricular (Plan Vigente 158 cr)
 </h3>
 <div class="grid-2" style="margin-bottom:24px;">
 <div class="card" style="border-top:4px solid #0284C7;">
 <h4><i class="fas fa-sliders-h" style="color:#0284C7;"></i> 1. Dimensión de Electividad (8 Créditos)</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Asignaturas electivas de profundización ofrecidas en los semestres 7 y 8 según la oferta institucional disponible.</p>
 </div>
 <div class="card" style="border-top:4px solid #16A34A;">
 <h4><i class="fas fa-globe-americas" style="color:#16A34A;"></i> 2. Dimensión de Movilidad Académica</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Movilidad académica tradicional bajo convenios institucionales vigentes para programas presenciales.</p>
 </div>
 <div class="card" style="border-top:4px solid #7C3AED;">
 <h4><i class="fas fa-exchange-alt" style="color:#7C3AED;"></i> 3. Dimensión de Homologación & Reconocimiento</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Estudio de homologación de asignaturas según el reglamento estudiantil institucional.</p>
 </div>
 <div class="card" style="border-top:4px solid #EA580C;">
 <h4><i class="fas fa-certificate" style="color:#EA580C;"></i> 4. Opción de Grado & Modalidades</h4>
 <p style="font-size:0.84rem; color:var(--gray-text);">Proyectos de grado I y II como opción principal de titulación profesional.</p>
 </div>
 </div>
 </div>

 <!-- SUB TAB 2.5: EVALUACIÓN VIGENTE -->

        
<div class="tab-panel" id="c3-v-eval" style="display:none;">
    <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
        Sistema Institucional de Evaluación del Aprendizaje (Plan Vigente SACES - 158 Créditos)
    </h3>
    <div class="grid-3">
        <div class="card" style="border-top:4px solid var(--orange);">
            <h4><i class="fas fa-percentage" style="color:var(--orange);"></i> 3 Cortes Sumativos</h4>
            <p style="font-size:0.83rem; line-height:1.6;">• Primer Corte: <strong>30%</strong> (Semanas 1-5)<br>• Segundo Corte: <strong>30%</strong> (Semanas 6-11)<br>• Tercer Corte: <strong>40%</strong> (Semanas 12-16)</p>
        </div>
        <div class="card" style="border-top:4px solid var(--carbon);">
            <h4><i class="fas fa-sliders-h" style="color:var(--carbon);"></i> Escala Cuantitativa</h4>
            <p style="font-size:0.83rem; line-height:1.6;">Calificación en escala de 0.0 a 5.0.<br>Nota mínima de aprobación: <strong>3.0</strong>.<br>Registro en plataforma institucional SAC.</p>
        </div>
        <div class="card" style="border-top:4px solid #059669;">
            <h4><i class="fas fa-users-cog" style="color:#059669;"></i> Triada Evaluativa</h4>
            <p style="font-size:0.83rem; line-height:1.6;">Integración activa de Heteroevaluación docente, Coevaluación entre pares y Autoevaluación del estudiante.</p>
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
                    Visualización en matriz continua: Componentes Curriculares (filas) × Semestres Académicos (columnas I a VIII). Haz clic sobre cualquier asignatura para desplegar su trazabilidad detallada.
                </p>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-clock"></i> Presencial (1:2): 48h Directas / 96h Indep.
                    </span>
                    <span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.74rem;">
                        <i class="fas fa-laptop"></i> Virtual (1:3): 36h Mediadas / 108h Indep.
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
                <i class="fas fa-check-double"></i> Malla Curricular por Áreas y Componentes
            </span>
        </div>
    </div>

    <div class="malla-matrix-scale-outer" id="malla-matrix-outer-prop">
        <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-prop">
            <table class="malla-matrix-table malla-matrix-table-8sem">
                <thead>
                    <tr>
                        <th class="matrix-comp-header-corner">
                            <i class="fas fa-layer-group" style="color:var(--orange); margin-right:4px;"></i> ÁREA / COMPONENTE
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
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_7', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cálculo Diferencial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-legislacion_habilidades" style="border-left:4px solid #1D4ED8;">
                <span class="matrix-area-badge area-transversal">Área Transversal</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-balance-scale" style="color:#1D4ED8; margin-right:4px;"></i> Legislación, Investigación y Habilidades
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_5', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Comunicación Oral y Escrita</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_6', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cátedra de la Paz y Resolución de Conflictos</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_10', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_12', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_18', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_22', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Competencias Investigativas</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_23', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Derecho Laboral y Seguridad Social</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-legislacion_habilidades" onclick="selectMatrixSubject('prop_24', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-admon_gestion" style="border-left:4px solid #F39200;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-briefcase" style="color:#F39200; margin-right:4px;"></i> Administración y Gestión
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_1', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_3', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Álgebra Lineal</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_8', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_9', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_13', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_15', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_16', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Procesos Administrativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_17', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_20', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_21', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Economía Colombiana e Internacional</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_26', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gestión de Operaciones</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_27', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia del Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_29', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Ética y Responsabilidad Social Empresarial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_31', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Planeación Estratégica y Prospectiva</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_32', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_34', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Sistemas Integrados de Gestión (HSEQ)</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_35', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales y Liderazgo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_39', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Big Data y Analítica de Datos</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_41', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gestión de la Calidad</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_43', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Pensamiento Estratégico y Prospectivo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_44', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de la Innovación y la Tecnología</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_45', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-admon_gestion" onclick="selectMatrixSubject('prop_46', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Seminario de Actualización Empresarial</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-economia_finanzas" style="border-left:4px solid #D97706;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-chart-pie" style="color:#D97706; margin-right:4px;"></i> Economía y Finanzas
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_2', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables y Financieros</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_11', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Costos y Presupuestos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_14', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Análisis Financiero</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_25', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Administración Financiera</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-economia_finanzas" onclick="selectMatrixSubject('prop_37', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia Financiera</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-mercadeo_tech" style="border-left:4px solid #EA580C;">
                <span class="matrix-area-badge area-disciplinar">Área Disciplinar</span>
                <div class="matrix-comp-title" style="color:var(--carbon); font-weight:800; font-size:0.75rem; margin-top:3px;">
                    <i class="fas fa-lightbulb" style="color:#EA580C; margin-right:4px;"></i> Mercadeo, Tecnología y Emprendimiento
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_4', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_19', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_28', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Marketing</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_33', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Formulación y Evaluación de Proyectos</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_38', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Ventas y Canales de Distribución</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_40', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Emprendimiento e Innovación</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-mercadeo_tech" onclick="selectMatrixSubject('prop_48', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Juego Gerencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</div>
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
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_36', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_42', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_47', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                        <div style="font-size:0.55rem; color:#64748B; margin-top:2px;">
                            <i class="fas fa-clock" style="color:#059669;"></i> P: 48h / 96h
                        </div>
                    </div></td></tr></tbody></table></div></div>

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
 <div class="card" style="margin-bottom:16px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-calculator" style="color:#0284C7; margin-right:8px;"></i> Área de Formación Básica (Plan Propuesto 144 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#0284C7; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">9 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">27 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Herramientas cuantitativas, razonamiento lógico-matemático, análisis económico y modelación estadística fundamental.</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Álgebra Lineal</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cálculo Diferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Microeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Descriptiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Costos y Presupuestos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Macroeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Análisis Financiero</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Inferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr></tbody>
                </table>
            </div>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-briefcase" style="color:#7C3AED; margin-right:8px;"></i> Área de Formación Disciplinar (Plan Propuesto 144 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#7C3AED; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">27 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">81 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Núcleo estructurante de la profesión: gestión estratégica, operaciones, talento humano, marketing, proyectos y analítica de datos.</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Administración</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Procesos Administrativos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Teoría Organizacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Investigación de Mercados</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Matemática Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Economía Colombiana e Internacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Administración Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gestión de Operaciones</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia del Talento Humano</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Marketing</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Ética y Responsabilidad Social Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Planeación Estratégica y Prospectiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Producción</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Formulación y Evaluación de Proyectos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Sistemas Integrados de Gestión (HSEQ)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Habilidades Gerenciales y Liderazgo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Ventas y Canales de Distribución</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Big Data y Analítica de Datos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Emprendimiento e Innovación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gestión de la Calidad</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Pensamiento Estratégico y Prospectivo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de la Innovación y la Tecnología</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Seminario de Actualización Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Juego Gerencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr></tbody>
                </table>
            </div>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-globe-americas" style="color:#16A34A; margin-right:8px;"></i> Área de Formación Transversal e Investigativa (Plan Propuesto 144 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#16A34A; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">9 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">27 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Competencias genéricas en comunicación, competencias ciudadanas, investigación formativa, legislación y bilingüismo.</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Comunicación Oral y Escrita</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cátedra de la Paz y Resolución de Conflictos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cálculo Diferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Comercial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Competencias Investigativas</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Derecho Laboral y Seguridad Social</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (48h dir / 96h indep = 144h)</td>
            </tr></tbody>
                </table>
            </div>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #D97706;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-sliders-h" style="color:#D97706; margin-right:8px;"></i> Área de Electividad y Profundización (Plan Propuesto 144 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#D97706; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">4 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">12 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Rutas de profundización en tendencias globales, sostenibilidad, transformación digital y nuevos modelos de negocio.</p>
            <div style="overflow-x:auto;">
                <table class="tbl" style="width:100%; font-size:0.83rem;">
                    <thead>
                        <tr style="background:#F8FAFC;">
                            <th style="width:110px;">Semestre</th>
                            <th>Asignatura</th>
                            <th style="width:80px; text-align:center;">Créditos</th>
                            <th>Prerrequisito</th>
                            <th>Modalidad Presencial (Decreto 1330)</th>
                        </tr>
                    </thead>
                    <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (48h dir / 96h indep = 144h)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem; white-space:nowrap;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (48h dir / 96h indep = 144h)</td>
            </tr></tbody>
                </table>
            </div>
        </div>
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
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">1 RA por cada Unidad Temática</div>
            </div>
            <div style="background:#EFF6FF; border:1px solid #BFDBFE; padding:12px; border-radius:8px;">
                <div style="font-size:1.2rem; color:#2563EB; margin-bottom:6px;"><i class="fas fa-clipboard-check"></i></div>
                <div style="font-size:0.75rem; font-weight:800; color:#1D4ED8;">PASO 5</div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--carbon);">Actividades y Rúbricas</div>
                <div style="font-size:0.72rem; color:var(--gray-text); margin-top:4px;">2 actividades/unidad + Rúbrica CETO</div>
            </div>
        </div>
    </div>

    <!-- 2. REFERENTES TEÓRICOS INSTITUCIONALES -->
    <div class="card" style="margin-bottom:24px; border-top:4px solid var(--orange);">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
            <i class="fas fa-graduation-cap" style="color:var(--orange);"></i> 2. Referentes Teóricos Institucionales de la Evaluación
        </h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
            <div style="background:#FFFBEB; border:1px solid #FCD34D; padding:14px; border-radius:8px;">
                <div style="font-weight:800; color:#92400E; font-size:0.86rem; margin-bottom:4px;">
                    <i class="fas fa-link"></i> John Biggs · Alineamiento Constructivo
                </div>
                <p style="font-size:0.8rem; color:#78350F; line-height:1.5; margin:0;">
                    El aprendizaje se concibe como lo que el estudiante hace. Los objetivos, las actividades de aprendizaje y las tareas de evaluación deben estar perfectamente alineados para garantizar la adquisición del RA.
                </p>
            </div>
            <div style="background:#FEF2F2; border:1px solid #FECACA; padding:14px; border-radius:8px;">
                <div style="font-weight:800; color:#991B1B; font-size:0.86rem; margin-bottom:4px;">
                    <i class="fas fa-users-cog"></i> Sergio Tobón · Enfoque Socioformativo
                </div>
                <p style="font-size:0.8rem; color:#7F1D1D; line-height:1.5; margin:0;">
                    Formación integral basada en competencias orientadas a la resolución de problemas reales del contexto, con ética, trabajo colaborativo y mejoramiento continuo.
                </p>
            </div>
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
 <i class="fas fa-trash-alt" style="color:#DC2626; margin-right:8px;"></i> 2. Asignaturas Eliminadas / Reestructuradas de la Malla Vigente (28 Asignaturas)
 </h4>
 <p style="font-size:0.83rem; color:var(--gray-text); margin-top:2px; margin-bottom:0;">
 Matriz detallada de las 28 asignaturas del plan de 158 créditos que fueron sustituidas, fusionadas o rearticuladas conceptualmente en el nuevo plan de 144 créditos.
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
