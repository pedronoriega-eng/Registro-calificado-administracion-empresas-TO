/* CONDICIÓN 3 – ASPECTOS CURRICULARES */
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
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "ciencias_basicas",
    "descripcion": "La asignatura Álgebra Lineal proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Álgebra Lineal en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Álgebra Lineal.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Álgebra Lineal."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Álgebra Lineal",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Álgebra Lineal"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_2",
    "semestre": 1,
    "nombre": "Comunicación Oral y Escrita",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Comunicación Oral y Escrita proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Comunicación Oral y Escrita en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Comunicación Oral y Escrita.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Comunicación Oral y Escrita."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Comunicación Oral y Escrita",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Comunicación Oral y Escrita"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_3",
    "semestre": 1,
    "nombre": "Cátedra de la Paz y Resolución de Conflictos",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Cátedra de la Paz y Resolución de Conflictos proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Cátedra de la Paz y Resolución de Conflictos en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Cátedra de la Paz y Resolución de Conflictos.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Cátedra de la Paz y Resolución de Conflictos."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Cátedra de la Paz y Resolución de Conflictos",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Cátedra de la Paz y Resolución de Conflictos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_4",
    "semestre": 1,
    "nombre": "Fundamentos de Administración",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Fundamentos de Administración proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Fundamentos de Administración en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Fundamentos de Administración.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Fundamentos de Administración."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Fundamentos de Administración",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Fundamentos de Administración"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_5",
    "semestre": 1,
    "nombre": "Fundamentos Contables y Financieros",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Fundamentos Contables y Financieros proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Fundamentos Contables y Financieros en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Fundamentos Contables y Financieros.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Fundamentos Contables y Financieros."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Fundamentos Contables y Financieros",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Fundamentos Contables y Financieros"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_6",
    "semestre": 1,
    "nombre": "Fundamentos de mercadeo",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Fundamentos de mercadeo proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Fundamentos de mercadeo en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Fundamentos de mercadeo.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Fundamentos de mercadeo."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Fundamentos de mercadeo",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Fundamentos de mercadeo"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión de mercadeo, comunicación, canales digitales y transformación digital.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible."
  },
  {
    "id": "prop_7",
    "semestre": 2,
    "nombre": "Cálculo Diferencial",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Álgebra Lineal",
    "componente_id": "ciencias_basicas",
    "descripcion": "La asignatura Cálculo Diferencial proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Cálculo Diferencial en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Cálculo Diferencial.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Cálculo Diferencial."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Cálculo Diferencial",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Cálculo Diferencial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_8",
    "semestre": 2,
    "nombre": "Estadística Descriptiva",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "ciencias_basicas",
    "descripcion": "La asignatura Estadística Descriptiva proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Estadística Descriptiva en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Estadística Descriptiva.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Estadística Descriptiva."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Estadística Descriptiva",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Estadística Descriptiva"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_9",
    "semestre": 2,
    "nombre": "Inglés I",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Inglés I proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Inglés I en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Inglés I.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Inglés I."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Inglés I",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Inglés I"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_10",
    "semestre": 2,
    "nombre": "Microeconomía",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Microeconomía proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Microeconomía en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Microeconomía.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Microeconomía."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Microeconomía",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Microeconomía"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_11",
    "semestre": 2,
    "nombre": "Legislación Comercial",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Legislación Comercial proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Legislación Comercial en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Legislación Comercial.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Legislación Comercial."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Legislación Comercial",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Legislación Comercial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_12",
    "semestre": 2,
    "nombre": "Costos y Presupuestos",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos Contables y Financieros",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Costos y Presupuestos proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Costos y Presupuestos en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Costos y Presupuestos.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Costos y Presupuestos."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Costos y Presupuestos",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Costos y Presupuestos"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_13",
    "semestre": 3,
    "nombre": "Estadística Inferencial",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Estadística Descriptiva",
    "componente_id": "ciencias_basicas",
    "descripcion": "La asignatura Estadística Inferencial proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Estadística Inferencial en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Estadística Inferencial.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Estadística Inferencial."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Estadística Inferencial",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Estadística Inferencial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_14",
    "semestre": 3,
    "nombre": "Inglés II",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés I",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Inglés II proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Inglés II en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Inglés II.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Inglés II."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Inglés II",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Inglés II"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_15",
    "semestre": 3,
    "nombre": "Macroeconomía",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Microeconomía",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Macroeconomía proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Macroeconomía en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Macroeconomía.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Macroeconomía."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Macroeconomía",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Macroeconomía"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_16",
    "semestre": 3,
    "nombre": "Análisis Financiero",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos Contables y Financieros",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Análisis Financiero proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Análisis Financiero en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Análisis Financiero.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Análisis Financiero."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Análisis Financiero",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Análisis Financiero"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_17",
    "semestre": 3,
    "nombre": "Procesos Administrativos",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Administración",
    "componente_id": "procesos_operaciones",
    "descripcion": "La asignatura Procesos Administrativos proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Procesos Administrativos en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Procesos Administrativos.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Procesos Administrativos."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Procesos Administrativos",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Procesos Administrativos"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_18",
    "semestre": 3,
    "nombre": "Teoría Organizacional",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Administración",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Teoría Organizacional proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Teoría Organizacional en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Teoría Organizacional.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Teoría Organizacional."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Teoría Organizacional",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Teoría Organizacional"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_19",
    "semestre": 4,
    "nombre": "Competencias Investigativas",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "descripcion": "La asignatura Competencias Investigativas proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Competencias Investigativas en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Competencias Investigativas.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Competencias Investigativas."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Competencias Investigativas",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Competencias Investigativas"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_20",
    "semestre": 4,
    "nombre": "Inglés III",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés II",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Inglés III proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Inglés III en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Inglés III.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Inglés III."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Inglés III",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Inglés III"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_21",
    "semestre": 4,
    "nombre": "Investigación de Mercados",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de mercadeo",
    "componente_id": "investigacion_innovacion",
    "descripcion": "La asignatura Investigación de Mercados proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Investigación de Mercados en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Investigación de Mercados.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Investigación de Mercados."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Investigación de Mercados",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Investigación de Mercados"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_22",
    "semestre": 4,
    "nombre": "Matemática Financiera",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Análisis Financiero",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Matemática Financiera proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Matemática Financiera en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Matemática Financiera.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Matemática Financiera."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Matemática Financiera",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Matemática Financiera"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_23",
    "semestre": 4,
    "nombre": "Economía Colombiana e Internacional",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Macroeconomía",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Economía Colombiana e Internacional proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Economía Colombiana e Internacional en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Economía Colombiana e Internacional.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Economía Colombiana e Internacional."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Economía Colombiana e Internacional",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Economía Colombiana e Internacional"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_24",
    "semestre": 4,
    "nombre": "Derecho Laboral y Seguridad Social",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Derecho Laboral y Seguridad Social proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Derecho Laboral y Seguridad Social en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Derecho Laboral y Seguridad Social.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Derecho Laboral y Seguridad Social."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Derecho Laboral y Seguridad Social",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Derecho Laboral y Seguridad Social"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_25",
    "semestre": 5,
    "nombre": "Gerencia del Talento Humano",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Procesos Administrativos",
    "componente_id": "talento_liderazgo",
    "descripcion": "La asignatura Gerencia del Talento Humano proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Gerencia del Talento Humano en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Gerencia del Talento Humano.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Gerencia del Talento Humano."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Gerencia del Talento Humano",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Gerencia del Talento Humano"
    ],
    "perfil_asociado": "Competencia 5 & 6: Liderazgo colaborativo, habilidades gerenciales, compromiso ético y responsabilidad social.",
    "rap_asociado": "RAP 3 & RAP 10: Diseña políticas de gestión humana y toma decisiones éticas en la organización."
  },
  {
    "id": "prop_26",
    "semestre": 5,
    "nombre": "Administración Financiera",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Matemática Financiera",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Administración Financiera proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Administración Financiera en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Administración Financiera.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Administración Financiera."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Administración Financiera",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Administración Financiera"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_27",
    "semestre": 5,
    "nombre": "Gestión de Operaciones",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Procesos Administrativos",
    "componente_id": "procesos_operaciones",
    "descripcion": "La asignatura Gestión de Operaciones proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Gestión de Operaciones en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Gestión de Operaciones.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Gestión de Operaciones."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Gestión de Operaciones",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Gestión de Operaciones"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_28",
    "semestre": 5,
    "nombre": "Sistemas Integrados de Gestión (HSEQ)",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "procesos_operaciones",
    "descripcion": "La asignatura Sistemas Integrados de Gestión (HSEQ) proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Sistemas Integrados de Gestión (HSEQ) en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Sistemas Integrados de Gestión (HSEQ).",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Sistemas Integrados de Gestión (HSEQ)."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Sistemas Integrados de Gestión (HSEQ)",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Sistemas Integrados de Gestión (HSEQ)"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_29",
    "semestre": 5,
    "nombre": "Negocios y Gerencia Internacional",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Economía Colombiana e Internacional",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Negocios y Gerencia Internacional proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Negocios y Gerencia Internacional en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Negocios y Gerencia Internacional.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Negocios y Gerencia Internacional."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Negocios y Gerencia Internacional",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Negocios y Gerencia Internacional"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_30",
    "semestre": 5,
    "nombre": "Electiva Profesional I",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "descripcion": "La asignatura Electiva Profesional I proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Electiva necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Electiva Profesional I en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Electiva Profesional I.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Electiva Profesional I."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Electiva Profesional I",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Electiva Profesional I"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de innovación, desarrollo sostenible y profundización profesional.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, sostenibilidad y economía circular."
  },
  {
    "id": "prop_31",
    "semestre": 6,
    "nombre": "Big Data y Analítica de Datos",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Estadística Inferencial",
    "componente_id": "tecnologia",
    "descripcion": "La asignatura Big Data y Analítica de Datos proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Big Data y Analítica de Datos en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Big Data y Analítica de Datos.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Big Data y Analítica de Datos."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Big Data y Analítica de Datos",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Big Data y Analítica de Datos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_32",
    "semestre": 6,
    "nombre": "Métodos Cualitativos y Cuantitativos",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Competencias Investigativas",
    "componente_id": "ciencias_basicas",
    "descripcion": "La asignatura Métodos Cualitativos y Cuantitativos proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Métodos Cualitativos y Cuantitativos en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Métodos Cualitativos y Cuantitativos.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Métodos Cualitativos y Cuantitativos."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Métodos Cualitativos y Cuantitativos",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Métodos Cualitativos y Cuantitativos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_33",
    "semestre": 6,
    "nombre": "Gerencia de Marketing",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de mercadeo",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Gerencia de Marketing proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Gerencia de Marketing en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Gerencia de Marketing.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Gerencia de Marketing."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Gerencia de Marketing",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Gerencia de Marketing"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión de mercadeo, comunicación, canales digitales y transformación digital.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible."
  },
  {
    "id": "prop_34",
    "semestre": 6,
    "nombre": "Legislación Tributaria",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "La asignatura Legislación Tributaria proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Legislación Tributaria en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Legislación Tributaria.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Legislación Tributaria."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Legislación Tributaria",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Legislación Tributaria"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, económico y contable para la toma de decisiones estratégicas.",
    "rap_asociado": "RAP 2: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles."
  },
  {
    "id": "prop_35",
    "semestre": 6,
    "nombre": "Modelos de emprendimiento",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "descripcion": "La asignatura Modelos de emprendimiento proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Modelos de emprendimiento en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Modelos de emprendimiento.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Modelos de emprendimiento."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Modelos de emprendimiento",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Modelos de emprendimiento"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_36",
    "semestre": 6,
    "nombre": "Electiva Profesional II",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "ELECTIVA",
    "prerrequisito": "Electiva Profesional I",
    "componente_id": "electivo",
    "descripcion": "La asignatura Electiva Profesional II proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Electiva necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Electiva Profesional II en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Electiva Profesional II.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Electiva Profesional II."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Electiva Profesional II",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Electiva Profesional II"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de innovación, desarrollo sostenible y profundización profesional.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, sostenibilidad y economía circular."
  },
  {
    "id": "prop_37",
    "semestre": 7,
    "nombre": "Pensamiento Estratégico y Prospectivo",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Teoría Organizacional",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Pensamiento Estratégico y Prospectivo proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Pensamiento Estratégico y Prospectivo en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Pensamiento Estratégico y Prospectivo.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Pensamiento Estratégico y Prospectivo."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Pensamiento Estratégico y Prospectivo",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Pensamiento Estratégico y Prospectivo"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_38",
    "semestre": 7,
    "nombre": "Formulación y Evaluación de Proyectos",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Análisis Financiero",
    "componente_id": "investigacion_innovacion",
    "descripcion": "La asignatura Formulación y Evaluación de Proyectos proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Formulación y Evaluación de Proyectos en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Formulación y Evaluación de Proyectos.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Formulación y Evaluación de Proyectos."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Formulación y Evaluación de Proyectos",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Formulación y Evaluación de Proyectos"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_39",
    "semestre": 7,
    "nombre": "Gerencia de Ventas y Canales de Distribución",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia de Marketing",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Gerencia de Ventas y Canales de Distribución proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Gerencia de Ventas y Canales de Distribución en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Gerencia de Ventas y Canales de Distribución.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Gerencia de Ventas y Canales de Distribución."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Gerencia de Ventas y Canales de Distribución",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Gerencia de Ventas y Canales de Distribución"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión de mercadeo, comunicación, canales digitales y transformación digital.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible."
  },
  {
    "id": "prop_40",
    "semestre": 7,
    "nombre": "Gerencia de Producción",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Gestión de Operaciones",
    "componente_id": "procesos_operaciones",
    "descripcion": "La asignatura Gerencia de Producción proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Gerencia de Producción en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Gerencia de Producción.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Gerencia de Producción."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Gerencia de Producción",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Gerencia de Producción"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_41",
    "semestre": 7,
    "nombre": "E-comerce",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de mercadeo",
    "componente_id": "tecnologia",
    "descripcion": "La asignatura E-comerce proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de E-comerce en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de E-comerce.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en E-comerce."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de E-comerce",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en E-comerce"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_42",
    "semestre": 7,
    "nombre": "Electiva Profesional III",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "ELECTIVA",
    "prerrequisito": "Electiva Profesional II",
    "componente_id": "electivo",
    "descripcion": "La asignatura Electiva Profesional III proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Electiva necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Electiva Profesional III en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Electiva Profesional III.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Electiva Profesional III."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Electiva Profesional III",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Electiva Profesional III"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de innovación, desarrollo sostenible y profundización profesional.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, sostenibilidad y economía circular."
  },
  {
    "id": "prop_43",
    "semestre": 8,
    "nombre": "Inteligencia artificial",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "TRANSVERSAL",
    "prerrequisito": "Big Data y Analítica de Datos",
    "componente_id": "tecnologia",
    "descripcion": "La asignatura Inteligencia artificial proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Transversal necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Inteligencia artificial en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Inteligencia artificial.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Inteligencia artificial."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Inteligencia artificial",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Inteligencia artificial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, pensamiento crítico, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la innovación empresarial."
  },
  {
    "id": "prop_44",
    "semestre": 8,
    "nombre": "Laboratorio de Innovación y Emprendimiento",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Modelos de emprendimiento",
    "componente_id": "investigacion_innovacion",
    "descripcion": "La asignatura Laboratorio de Innovación y Emprendimiento proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Laboratorio de Innovación y Emprendimiento en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Laboratorio de Innovación y Emprendimiento.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Laboratorio de Innovación y Emprendimiento."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Laboratorio de Innovación y Emprendimiento",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Laboratorio de Innovación y Emprendimiento"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_45",
    "semestre": 8,
    "nombre": "Juego Gerencial (Simulación de Negocios)",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Pensamiento Estratégico y Prospectivo",
    "componente_id": "gestion_financiera",
    "descripcion": "La asignatura Juego Gerencial (Simulación de Negocios) proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Juego Gerencial (Simulación de Negocios) en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Juego Gerencial (Simulación de Negocios).",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Juego Gerencial (Simulación de Negocios)."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Juego Gerencial (Simulación de Negocios)",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Juego Gerencial (Simulación de Negocios)"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_46",
    "semestre": 8,
    "nombre": "Habilidades gerenciales y liderazgo",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia del Talento Humano",
    "componente_id": "talento_liderazgo",
    "descripcion": "La asignatura Habilidades gerenciales y liderazgo proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Habilidades gerenciales y liderazgo en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Habilidades gerenciales y liderazgo.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Habilidades gerenciales y liderazgo."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Habilidades gerenciales y liderazgo",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Habilidades gerenciales y liderazgo"
    ],
    "perfil_asociado": "Competencia 5 & 6: Liderazgo colaborativo, habilidades gerenciales, compromiso ético y responsabilidad social.",
    "rap_asociado": "RAP 3 & RAP 10: Diseña políticas de gestión humana y toma decisiones éticas en la organización."
  },
  {
    "id": "prop_47",
    "semestre": 8,
    "nombre": "Gerencia de  Calidad",
    "tipo": "TP",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Sistemas Integrados de Gestión (HSEQ)",
    "componente_id": "procesos_operaciones",
    "descripcion": "La asignatura Gerencia de  Calidad proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Gerencia de  Calidad en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Gerencia de  Calidad.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Gerencia de  Calidad."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Gerencia de  Calidad",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Gerencia de  Calidad"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  },
  {
    "id": "prop_48",
    "semestre": 8,
    "nombre": "Proyecto de Grado",
    "tipo": "T",
    "creditos": 3,
    "presencial": {
      "directa": 48,
      "independiente": 96,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "area": "DISCIPLINAR",
    "prerrequisito": "Competencias Investigativas",
    "componente_id": "investigacion_innovacion",
    "descripcion": "La asignatura Proyecto de Grado proporciona al estudiante las herramientas teóricas, conceptuales y prácticas del área Disciplinar necesarias para el análisis, diagnóstico y toma de decisiones empresariales en entornos competitivos y sostenibles.",
    "ras": [
      "RA1: Comprende y explica los principios y marcos teóricos fundamentales de Proyecto de Grado en las organizaciones.",
      "RA2: Diagnostica problemáticas y evalúa escenarios empresariales mediante la aplicación de herramientas de Proyecto de Grado.",
      "RA3: Diseña e implementa soluciones estratégicas e innovadoras orientadas al mejoramiento continuo en Proyecto de Grado."
    ],
    "temas": [
      "Unidad 1: Marco teórico y conceptos fundamentales de Proyecto de Grado",
      "Unidad 2: Herramientas de análisis, diagnóstico y evaluación",
      "Unidad 3: Formulación de estrategias organizacionales y aplicación práctica",
      "Unidad 4: Evaluación de impacto, sostenibilidad e innovación tecnológica en Proyecto de Grado"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa estrategias organizacionales y sistemas integrados de gestión."
  }
];

window.C3_VIGENTE_SUBJECTS = [
  {
    "id": "vig_1",
    "semestre": 1,
    "nombre": "Matemáticas Básicas",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Matemáticas Básicas (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Matemáticas Básicas en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Matemáticas Básicas para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Matemáticas Básicas en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Matemáticas Básicas",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Matemáticas Básicas"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_2",
    "semestre": 1,
    "nombre": "Constitución y Democracia",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Constitución y Democracia (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Constitución y Democracia en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Constitución y Democracia para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Constitución y Democracia en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Constitución y Democracia",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Constitución y Democracia"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_3",
    "semestre": 1,
    "nombre": "Expresión Oral y Escrita",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Expresión Oral y Escrita (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Expresión Oral y Escrita en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Expresión Oral y Escrita para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Expresión Oral y Escrita en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Expresión Oral y Escrita",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Expresión Oral y Escrita"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_4",
    "semestre": 1,
    "nombre": "Inglés I",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Inglés I (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Inglés I en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Inglés I para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Inglés I en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Inglés I",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Inglés I"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_5",
    "semestre": 1,
    "nombre": "Fundamentos de Administración",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Fundamentos de Administración (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Fundamentos de Administración en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Fundamentos de Administración para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Fundamentos de Administración en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Fundamentos de Administración",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Fundamentos de Administración"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_6",
    "semestre": 1,
    "nombre": "Fundamentos Contables",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Fundamentos Contables (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Fundamentos Contables en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Fundamentos Contables para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Fundamentos Contables en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Fundamentos Contables",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Fundamentos Contables"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_7",
    "semestre": 1,
    "nombre": "Fundamentos de Economía",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Fundamentos de Economía (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Fundamentos de Economía en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Fundamentos de Economía para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Fundamentos de Economía en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Fundamentos de Economía",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Fundamentos de Economía"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_8",
    "semestre": 2,
    "nombre": "Cálculo",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Matemáticas Básicas",
    "componente_id": "ciencias_basicas",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Cálculo (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Cálculo en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Cálculo para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Cálculo en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Cálculo",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Cálculo"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_9",
    "semestre": 2,
    "nombre": "Legislación Laboral",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Legislación Laboral (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Legislación Laboral en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Legislación Laboral para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Legislación Laboral en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Legislación Laboral",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Legislación Laboral"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_10",
    "semestre": 2,
    "nombre": "Teoría Organizacional",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Administración",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Teoría Organizacional (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Teoría Organizacional en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Teoría Organizacional para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Teoría Organizacional en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Teoría Organizacional",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Teoría Organizacional"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_11",
    "semestre": 2,
    "nombre": "Costos",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos Contables",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Costos (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Costos en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Costos para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Costos en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Costos",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Costos"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_12",
    "semestre": 2,
    "nombre": "Metodología de la Investigación",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Metodología de la Investigación (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Metodología de la Investigación en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Metodología de la Investigación para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Metodología de la Investigación en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Metodología de la Investigación",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Metodología de la Investigación"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_13",
    "semestre": 2,
    "nombre": "Microeconomía",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Economía",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Microeconomía (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Microeconomía en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Microeconomía para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Microeconomía en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Microeconomía",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Microeconomía"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_14",
    "semestre": 2,
    "nombre": "Inglés II",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés I",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Inglés II (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Inglés II en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Inglés II para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Inglés II en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Inglés II",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Inglés II"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_15",
    "semestre": 3,
    "nombre": "Estadística Descriptiva",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Cálculo",
    "componente_id": "ciencias_basicas",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Estadística Descriptiva (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Estadística Descriptiva en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Estadística Descriptiva para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Estadística Descriptiva en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Estadística Descriptiva",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Estadística Descriptiva"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_16",
    "semestre": 3,
    "nombre": "Derecho Administrativo",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Constitución y Democracia",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Derecho Administrativo (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Derecho Administrativo en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Derecho Administrativo para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Derecho Administrativo en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Derecho Administrativo",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Derecho Administrativo"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_17",
    "semestre": 3,
    "nombre": "Administración por Procesos",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Teoría Organizacional",
    "componente_id": "procesos_operaciones",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Administración por Procesos (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Administración por Procesos en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Administración por Procesos para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Administración por Procesos en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Administración por Procesos",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Administración por Procesos"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_18",
    "semestre": 3,
    "nombre": "Electiva Profundización I",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Electiva Profundización I (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Electiva para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Electiva Profundización I en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Electiva Profundización I para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Electiva Profundización I en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Electiva Profundización I",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Electiva Profundización I"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la electiva."
  },
  {
    "id": "vig_19",
    "semestre": 3,
    "nombre": "Cultura Emprendedora",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Cultura Emprendedora (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Cultura Emprendedora en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Cultura Emprendedora para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Cultura Emprendedora en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Cultura Emprendedora",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Cultura Emprendedora"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_20",
    "semestre": 3,
    "nombre": "Macroeconomía",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Microeconomía",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Macroeconomía (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Macroeconomía en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Macroeconomía para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Macroeconomía en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Macroeconomía",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Macroeconomía"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_21",
    "semestre": 3,
    "nombre": "Inglés III",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés II",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Inglés III (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Inglés III en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Inglés III para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Inglés III en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Inglés III",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Inglés III"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_22",
    "semestre": 4,
    "nombre": "Estadística Inferencial",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Estadística Descriptiva",
    "componente_id": "ciencias_basicas",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Estadística Inferencial (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Estadística Inferencial en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Estadística Inferencial para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Estadística Inferencial en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Estadística Inferencial",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Estadística Inferencial"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_23",
    "semestre": 4,
    "nombre": "Legislación Tributaria",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Legislación Tributaria (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Legislación Tributaria en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Legislación Tributaria para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Legislación Tributaria en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Legislación Tributaria",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Legislación Tributaria"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_24",
    "semestre": 4,
    "nombre": "Electiva Humanística I",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Electiva Humanística I (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Electiva para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Electiva Humanística I en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Electiva Humanística I para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Electiva Humanística I en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Electiva Humanística I",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Electiva Humanística I"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la electiva."
  },
  {
    "id": "vig_25",
    "semestre": 4,
    "nombre": "Liderazgo",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "talento_liderazgo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Liderazgo (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Liderazgo en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Liderazgo para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Liderazgo en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Liderazgo",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Liderazgo"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_26",
    "semestre": 4,
    "nombre": "Creatividad e Innovación",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Cultura Emprendedora",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Creatividad e Innovación (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Creatividad e Innovación en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Creatividad e Innovación para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Creatividad e Innovación en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Creatividad e Innovación",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Creatividad e Innovación"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_27",
    "semestre": 4,
    "nombre": "Entorno Económico Colombiano e Internacional",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Macroeconomía",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Entorno Económico Colombiano e Internacional (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Entorno Económico Colombiano e Internacional en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Entorno Económico Colombiano e Internacional para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Entorno Económico Colombiano e Internacional en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Entorno Económico Colombiano e Internacional",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Entorno Económico Colombiano e Internacional"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_28",
    "semestre": 4,
    "nombre": "Inglés IV",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés III",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Inglés IV (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Inglés IV en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Inglés IV para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Inglés IV en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Inglés IV",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Inglés IV"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_29",
    "semestre": 5,
    "nombre": "Matemática Financiera",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Costos",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Matemática Financiera (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Matemática Financiera en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Matemática Financiera para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Matemática Financiera en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Matemática Financiera",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Matemática Financiera"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_30",
    "semestre": 5,
    "nombre": "Investigación de Operaciones",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Estadística Inferencial",
    "componente_id": "procesos_operaciones",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Investigación de Operaciones (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Investigación de Operaciones en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Investigación de Operaciones para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Investigación de Operaciones en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Investigación de Operaciones",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Investigación de Operaciones"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_31",
    "semestre": 5,
    "nombre": "Fundamentos de Mercadeo",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Fundamentos de Mercadeo (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Fundamentos de Mercadeo en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Fundamentos de Mercadeo para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Fundamentos de Mercadeo en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Fundamentos de Mercadeo",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Fundamentos de Mercadeo"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_32",
    "semestre": 5,
    "nombre": "Modelos de Desarrollo Económico",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Entorno Económico",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Modelos de Desarrollo Económico (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Modelos de Desarrollo Económico en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Modelos de Desarrollo Económico para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Modelos de Desarrollo Económico en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Modelos de Desarrollo Económico",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Modelos de Desarrollo Económico"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_33",
    "semestre": 5,
    "nombre": "Administración de Salarios",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Legislación Laboral",
    "componente_id": "talento_liderazgo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Administración de Salarios (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Administración de Salarios en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Administración de Salarios para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Administración de Salarios en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Administración de Salarios",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Administración de Salarios"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_34",
    "semestre": 5,
    "nombre": "Electiva Profundización II",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "prerrequisito": "Electiva Profundización I",
    "componente_id": "electivo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Electiva Profundización II (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Electiva para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Electiva Profundización II en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Electiva Profundización II para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Electiva Profundización II en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Electiva Profundización II",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Electiva Profundización II"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la electiva."
  },
  {
    "id": "vig_35",
    "semestre": 5,
    "nombre": "Inglés V",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés IV",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Inglés V (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Inglés V en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Inglés V para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Inglés V en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Inglés V",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Inglés V"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_36",
    "semestre": 6,
    "nombre": "Legislación Comercial",
    "tipo": "T",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Legislación Comercial (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Legislación Comercial en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Legislación Comercial para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Legislación Comercial en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Legislación Comercial",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Legislación Comercial"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_37",
    "semestre": 6,
    "nombre": "Gerencia de Mercadeo",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Mercadeo",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Gerencia de Mercadeo (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gerencia de Mercadeo en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gerencia de Mercadeo para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gerencia de Mercadeo en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gerencia de Mercadeo",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gerencia de Mercadeo"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_38",
    "semestre": 6,
    "nombre": "E-Commerce",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Mercadeo",
    "componente_id": "tecnologia",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura E-Commerce (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de E-Commerce en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de E-Commerce para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de E-Commerce en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de E-Commerce",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de E-Commerce"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_39",
    "semestre": 6,
    "nombre": "Tecnología e Innovación",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Creatividad e Innovación",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Tecnología e Innovación (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Tecnología e Innovación en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Tecnología e Innovación para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Tecnología e Innovación en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Tecnología e Innovación",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Tecnología e Innovación"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_40",
    "semestre": 6,
    "nombre": "Métodos Cuantitativos y Cualitativos",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Estadística Inferencial",
    "componente_id": "ciencias_basicas",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Métodos Cuantitativos y Cualitativos (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Métodos Cuantitativos y Cualitativos en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Métodos Cuantitativos y Cualitativos para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Métodos Cuantitativos y Cualitativos en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Métodos Cuantitativos y Cualitativos",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Métodos Cuantitativos y Cualitativos"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_41",
    "semestre": 6,
    "nombre": "Electiva Humanística II",
    "tipo": "T",
    "creditos": 3,
    "area": "ELECTIVA",
    "prerrequisito": "Electiva Humanística I",
    "componente_id": "electivo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Electiva Humanística II (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Electiva para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Electiva Humanística II en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Electiva Humanística II para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Electiva Humanística II en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Electiva Humanística II",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Electiva Humanística II"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la electiva."
  },
  {
    "id": "vig_42",
    "semestre": 6,
    "nombre": "Inglés VI",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Inglés V",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Inglés VI (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Inglés VI en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Inglés VI para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Inglés VI en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Inglés VI",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Inglés VI"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_43",
    "semestre": 7,
    "nombre": "Fundamentos de Administración Pública",
    "tipo": "T",
    "creditos": 2,
    "area": "TRANSVERSAL",
    "prerrequisito": "Derecho Administrativo",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Fundamentos de Administración Pública (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Transversal para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Fundamentos de Administración Pública en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Fundamentos de Administración Pública para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Fundamentos de Administración Pública en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Fundamentos de Administración Pública",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Fundamentos de Administración Pública"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la transversal."
  },
  {
    "id": "vig_44",
    "semestre": 7,
    "nombre": "Gestión de la Calidad",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Administración por Procesos",
    "componente_id": "procesos_operaciones",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Gestión de la Calidad (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gestión de la Calidad en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gestión de la Calidad para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gestión de la Calidad en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gestión de la Calidad",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gestión de la Calidad"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_45",
    "semestre": 7,
    "nombre": "Presupuesto",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Costos",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Presupuesto (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Presupuesto en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Presupuesto para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Presupuesto en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Presupuesto",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Presupuesto"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_46",
    "semestre": 7,
    "nombre": "Gerencia de Talento Humano",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Administración de Salarios",
    "componente_id": "talento_liderazgo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Gerencia de Talento Humano (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gerencia de Talento Humano en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gerencia de Talento Humano para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gerencia de Talento Humano en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gerencia de Talento Humano",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gerencia de Talento Humano"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_47",
    "semestre": 7,
    "nombre": "Proyecto Empresarial",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Cultura Emprendedora",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Proyecto Empresarial (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Proyecto Empresarial en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Proyecto Empresarial para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Proyecto Empresarial en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Proyecto Empresarial",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Proyecto Empresarial"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_48",
    "semestre": 7,
    "nombre": "Electiva Profundización III",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "prerrequisito": "Electiva Profundización II",
    "componente_id": "electivo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Electiva Profundización III (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Electiva para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Electiva Profundización III en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Electiva Profundización III para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Electiva Profundización III en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Electiva Profundización III",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Electiva Profundización III"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la electiva."
  },
  {
    "id": "vig_49",
    "semestre": 7,
    "nombre": "Sistema de Información Gerencial",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Tecnología e Innovación",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Sistema de Información Gerencial (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Sistema de Información Gerencial en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Sistema de Información Gerencial para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Sistema de Información Gerencial en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Sistema de Información Gerencial",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Sistema de Información Gerencial"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_50",
    "semestre": 8,
    "nombre": "Habilidades Gerenciales",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Liderazgo",
    "componente_id": "talento_liderazgo",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Habilidades Gerenciales (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Habilidades Gerenciales en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Habilidades Gerenciales para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Habilidades Gerenciales en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Habilidades Gerenciales",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Habilidades Gerenciales"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_51",
    "semestre": 8,
    "nombre": "Gerencia de Producción",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Investigación de Operaciones",
    "componente_id": "procesos_operaciones",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Gerencia de Producción (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gerencia de Producción en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gerencia de Producción para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gerencia de Producción en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gerencia de Producción",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gerencia de Producción"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_52",
    "semestre": 8,
    "nombre": "Investigación de Mercados",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia de Mercadeo",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Investigación de Mercados (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Investigación de Mercados en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Investigación de Mercados para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Investigación de Mercados en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Investigación de Mercados",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Investigación de Mercados"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_53",
    "semestre": 8,
    "nombre": "Gerencia Financiera",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Matemática Financiera",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Gerencia Financiera (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gerencia Financiera en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gerencia Financiera para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gerencia Financiera en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gerencia Financiera",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gerencia Financiera"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_54",
    "semestre": 8,
    "nombre": "Deontología",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "talento_liderazgo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Deontología (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Deontología en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Deontología para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Deontología en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Deontología",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Deontología"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_55",
    "semestre": 8,
    "nombre": "Proyecto de Grado I",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Metodología de la Investigación",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Proyecto de Grado I (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Proyecto de Grado I en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Proyecto de Grado I para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Proyecto de Grado I en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Proyecto de Grado I",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Proyecto de Grado I"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_56",
    "semestre": 9,
    "nombre": "Planeación y Prospectiva",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Habilidades Gerenciales",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Planeación y Prospectiva (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Planeación y Prospectiva en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Planeación y Prospectiva para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Planeación y Prospectiva en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Planeación y Prospectiva",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Planeación y Prospectiva"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_57",
    "semestre": 9,
    "nombre": "Gerencia del Servicio",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia de Mercadeo",
    "componente_id": "gestion_financiera",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Gerencia del Servicio (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gerencia del Servicio en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gerencia del Servicio para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gerencia del Servicio en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gerencia del Servicio",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gerencia del Servicio"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_58",
    "semestre": 9,
    "nombre": "Evaluación de Proyectos de Inversión",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia Financiera",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Evaluación de Proyectos de Inversión (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Evaluación de Proyectos de Inversión en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Evaluación de Proyectos de Inversión para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Evaluación de Proyectos de Inversión en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Evaluación de Proyectos de Inversión",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Evaluación de Proyectos de Inversión"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_59",
    "semestre": 9,
    "nombre": "Responsabilidad Social Empresarial",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Deontología",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Responsabilidad Social Empresarial (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Responsabilidad Social Empresarial en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Responsabilidad Social Empresarial para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Responsabilidad Social Empresarial en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Responsabilidad Social Empresarial",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Responsabilidad Social Empresarial"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_60",
    "semestre": 9,
    "nombre": "Gobierno Corporativo",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Legislación Comercial",
    "componente_id": "humanistica_bilinguismo",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Gobierno Corporativo (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Gobierno Corporativo en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Gobierno Corporativo para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Gobierno Corporativo en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Gobierno Corporativo",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Gobierno Corporativo"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_61",
    "semestre": 9,
    "nombre": "Distribución Física y Logística",
    "tipo": "TP",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia de Producción",
    "componente_id": "procesos_operaciones",
    "presencial": {
      "directa": 36,
      "independiente": 108,
      "total": 144
    },
    "virtual": {
      "mediado": 36,
      "independiente": 108,
      "total": 144
    },
    "descripcion": "La asignatura Distribución Física y Logística (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Distribución Física y Logística en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Distribución Física y Logística para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Distribución Física y Logística en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Distribución Física y Logística",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Distribución Física y Logística"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  },
  {
    "id": "vig_62",
    "semestre": 9,
    "nombre": "Proyecto de Grado II",
    "tipo": "T",
    "creditos": 2,
    "area": "DISCIPLINAR",
    "prerrequisito": "Proyecto de Grado I",
    "componente_id": "investigacion_innovacion",
    "presencial": {
      "directa": 24,
      "independiente": 72,
      "total": 96
    },
    "virtual": {
      "mediado": 24,
      "independiente": 72,
      "total": 96
    },
    "descripcion": "La asignatura Proyecto de Grado II (Plan Vigente SACES) desarrolla contenidos conceptuales y analíticos indispensables del área Disciplinar para la formación integral del administrador de empresas.",
    "ras": [
      "RA1: Identifica y analiza los fundamentos conceptuales de Proyecto de Grado II en el contexto organizacional.",
      "RA2: Aplica técnicas y herramientas de Proyecto de Grado II para el diagnóstico operacional y la toma de decisiones.",
      "RA3: Evalúa el impacto de la gestión de Proyecto de Grado II en la eficiencia y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Introducción y fundamentos teóricos de Proyecto de Grado II",
      "Unidad 2: Herramientas técnicas de análisis y medición",
      "Unidad 3: Casos prácticos y aplicación organizacional",
      "Unidad 4: Evaluación y prospectiva de Proyecto de Grado II"
    ],
    "perfil_asociado": "Competencias del Egresado (Plan Vigente 158 cr) en gestión estratégica, operabilidad y toma de decisiones.",
    "rap_asociado": "RAP del Programa (Plan Vigente): Diseña y aplica soluciones organizacionales en el marco de la disciplinar."
  }
];

window.scrollMatrix = function(direction, type) {
    const wrapper = document.getElementById('malla-matrix-wrapper-' + type);
    if (!wrapper) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

window.toggleMatrixFit = function(type) {
    const wrapper = document.getElementById('malla-matrix-wrapper-' + type);
    const btn = document.getElementById('toggleMatrixBtn_' + type);
    if (!wrapper) return;

    if (wrapper.classList.contains('matrix-fit-screen')) {
        wrapper.classList.remove('matrix-fit-screen');
        if (btn) btn.innerHTML = '<i class="fas fa-compress-alt"></i> Ajustar a Pantalla';
    } else {
        wrapper.classList.add('matrix-fit-screen');
        if (btn) btn.innerHTML = '<i class="fas fa-expand-alt"></i> Vista Con Desplazamiento';
    }
};

window.selectMatrixSubject = function(id, type) {
    let s = type === 'vig' ? window.C3_VIGENTE_SUBJECTS.find(i => i.id === id) : window.C3_SUBJECTS.find(i => i.id === id);
    if (!s) return;

    document.querySelectorAll('.malla-matrix-subject-card').forEach(c => c.classList.remove('selected-card'));
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('selected-card');
    }

    const panelId = type === 'vig' ? 'c3-vigente-matrix-detail-panel' : 'c3-propuesto-matrix-detail-panel';
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const rasHtml = s.ras.map(r => `<li style="margin-bottom:6px; padding-left:10px; border-left:3px solid var(--orange); font-size:0.84rem;">${r}</li>`).join('');
    const temasHtml = s.temas.map(t => `<li style="margin-bottom:4px; font-size:0.84rem; color:var(--carbon);"><i class="fas fa-check-circle" style="color:var(--orange); margin-right:6px;"></i>${t}</li>`).join('');

    const planTag = type === 'vig' ? '<span class="badge-presencial" style="background:#475569; color:#fff;"><i class="fas fa-history"></i> Plan Vigente (158 cr)</span>' : '<span class="badge-presencial" style="background:#059669; color:#fff;"><i class="fas fa-rocket"></i> Plan Propuesto (144 cr)</span>';

    panel.innerHTML = `
        <div style="border-bottom:2px solid var(--orange); padding-bottom:12px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
            <div>
                ${planTag}
                <span class="badge-presencial" style="margin-left:6px;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                <span class="badge-virtual" style="margin-left:6px;"><i class="fas fa-layer-group"></i> ${s.area}</span>
                <span style="background:var(--carbon); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700; margin-left:6px;">${s.creditos} Créditos (Tipo ${s.tipo})</span>
                <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800; color:var(--carbon); margin-top:8px;">${s.nombre}</h3>
                <div style="font-size:0.8rem; color:var(--gray-text); margin-top:2px;"><i class="fas fa-link" style="color:var(--orange);"></i> <strong>Prerrequisito:</strong> ${s.prerrequisito}</div>
            </div>
            <button onclick="openSubjectModal('${s.id}', '${type}')" class="viewer-nav-btn next" style="padding:8px 14px; font-size:0.8rem;">
                <i class="fas fa-expand"></i> Ver Modal Completo
            </button>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:12px; border-radius:8px;">
                <h4 style="font-size:0.85rem; font-weight:800; color:#0369A1; margin-bottom:6px;"><i class="fas fa-user-graduate"></i> Perfil del Egresado Asociado</h4>
                <p style="font-size:0.82rem; color:#0C4A6E; margin:0;">${s.perfil_asociado}</p>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:12px; border-radius:8px;">
                <h4 style="font-size:0.85rem; font-weight:800; color:#15803D; margin-bottom:6px;"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</h4>
                <p style="font-size:0.82rem; color:#14532D; margin:0;">${s.rap_asociado}</p>
            </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
            <div>
                <h4 style="font-size:0.88rem; font-weight:800; color:var(--carbon); margin-bottom:8px;"><i class="fas fa-list-ol" style="color:var(--orange);"></i> Resultados de Aprendizaje (RAs) de la Asignatura:</h4>
                <ul style="list-style:none; padding:0; margin:0;">${rasHtml}</ul>
            </div>
            <div>
                <h4 style="font-size:0.88rem; font-weight:800; color:var(--carbon); margin-bottom:8px;"><i class="fas fa-book-open" style="color:var(--orange);"></i> Contenidos Temáticos Desagregados:</h4>
                <ul style="list-style:none; padding:0; margin:0;">${temasHtml}</ul>
            </div>
        </div>

        <div style="background:#FAF5FF; border:1px solid #E9D5FF; padding:10px 14px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div style="font-size:0.8rem; color:#6B21A8;">
                <strong><i class="fas fa-clock"></i> Modalidad Presencial (1:2):</strong> ${s.presencial.directa}h Acompañamiento Directo + ${s.presencial.independiente}h Trabajo Independiente = <strong>${s.presencial.total}h Totales</strong>
            </div>
            <div style="font-size:0.8rem; color:#047857;">
                <strong><i class="fas fa-laptop-code"></i> Modalidad Virtual (1:3):</strong> ${s.virtual.mediado}h Acompañamiento Mediado + ${s.virtual.independiente}h Trabajo Autónomo = <strong>${s.virtual.total}h Totales</strong>
            </div>
        </div>
    `;
};

window.SECTIONS.c3 = `
<div class="c3-header-card" style="background:linear-gradient(135deg, #1A1A1B 0%, #2A2A2C 100%); color:#fff; padding:24px; border-radius:12px; margin-bottom:24px; border-left:6px solid var(--orange);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div>
            <span class="badge-presencial" style="background:var(--orange); color:#fff; font-weight:800; padding:4px 10px; border-radius:4px; font-size:0.75rem;">DECRETO 1330 / RESOLUCIÓN 021795</span>
            <h2 style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; margin-top:8px; margin-bottom:4px;">Condición 3: Aspectos Curriculares</h2>
            <p style="color:#D1D5DB; font-size:0.9rem; max-width:850px; margin:0;">
                Documento Maestro de Registro Calificado Único — Programa de Administración de Empresas (Modalidad Presencial y Virtual). Sustentación técnica del Plan Propuesto (144 créditos, 8 semestres) frente al Plan Vigente (158 créditos, 9 semestres).
            </p>
        </div>
        <div style="display:flex; gap:10px;">
            <div style="background:rgba(255,255,255,0.1); padding:10px 16px; border-radius:8px; text-align:center; border:1px solid rgba(255,255,255,0.15);">
                <div style="font-size:1.4rem; font-weight:800; color:var(--orange);">144 cr</div>
                <div style="font-size:0.7rem; color:#AAA;">Plan Propuesto</div>
            </div>
            <div style="background:rgba(255,255,255,0.1); padding:10px 16px; border-radius:8px; text-align:center; border:1px solid rgba(255,255,255,0.15);">
                <div style="font-size:1.4rem; font-weight:800; color:#94A3B8;">158 cr</div>
                <div style="font-size:0.7rem; color:#AAA;">Plan Vigente</div>
            </div>
        </div>
    </div>
</div>

<!-- MAIN TABS CONTROL -->
<div id="c3MainTabsGroup" class="tab-buttons" style="margin-bottom:20px; display:flex; gap:8px; background:#E2E8F0; padding:6px; border-radius:10px;">
    <button class="tab-btn active" data-tab="c3-main-propuesto" onclick="switchTab('c3MainTabsGroup', 'c3-main-propuesto')" style="flex:1; padding:12px; font-weight:800;">
        <i class="fas fa-rocket" style="color:var(--orange);"></i> Plan Propuesto (144 Créditos - 8 Semestres)
    </button>
    <button class="tab-btn" data-tab="c3-main-vigente" onclick="switchTab('c3MainTabsGroup', 'c3-main-vigente')" style="flex:1; padding:12px; font-weight:800;">
        <i class="fas fa-history" style="color:#64748B;"></i> Plan Vigente SACES (158 Créditos - 9 Semestres)
    </button>
    <button class="tab-btn" data-tab="c3-main-comparacion" onclick="switchTab('c3MainTabsGroup', 'c3-main-comparacion')" style="padding:12px 20px; font-weight:800;">
        <i class="fas fa-balance-scale" style="color:#0284C7;"></i> Comparación y Justificación
    </button>
</div>

<!-- MAIN TAB 1: PLAN PROPUESTO (144 CR) -->
<div class="tab-panel active" id="c3-main-propuesto">
    
    <!-- SUB TAB NAVIGATION (LEVEL 2) -->
    <div id="c3PropuestoSubTabs" class="tab-buttons" style="margin-bottom:20px; display:flex; gap:6px; background:#F1F5F9; padding:4px; border-radius:8px;">
        <button class="tab-btn active" data-tab="c3-p-malla" onclick="switchTab('c3PropuestoSubTabs', 'c3-p-malla')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-th" style="color:var(--orange);"></i> 1. Malla Curricular (Matriz Global)
        </button>
        <button class="tab-btn" data-tab="c3-p-areas" onclick="switchTab('c3PropuestoSubTabs', 'c3-p-areas')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-layer-group" style="color:#0284C7;"></i> 2. Áreas de Formación
        </button>
        <button class="tab-btn" data-tab="c3-p-perfiles" onclick="switchTab('c3PropuestoSubTabs', 'c3-p-perfiles')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-user-graduate" style="color:#16A34A;"></i> 3. Perfiles y RAPs
        </button>
        <button class="tab-btn" data-tab="c3-p-flex" onclick="switchTab('c3PropuestoSubTabs', 'c3-p-flex')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-sliders-h" style="color:#7C3AED;"></i> 4. Flexibilidad Curricular
        </button>
        <button class="tab-btn" data-tab="c3-p-eval" onclick="switchTab('c3PropuestoSubTabs', 'c3-p-eval')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-tasks" style="color:#DC2626;"></i> 5. Evaluación de RA
        </button>
    </div>

    <!-- SUB TAB 1.1: MALLA PROPUESTA -->
    <div class="tab-panel active" id="c3-p-malla">
        <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:14px; border-radius:8px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#065F46; margin:0;">
                    <i class="fas fa-table" style="color:#059669;"></i> Matriz Global del Plan de Estudios Propuesto (144 Créditos - 8 Semestres)
                </h4>
                <p style="font-size:0.83rem; color:#047857; margin-top:2px; margin-bottom:0;">
                    Visualización en matriz continua: Componentes Curriculares (filas) × Semestres Académicos (columnas I a VIII). Haz clic sobre cualquier asignatura para desplegar su trazabilidad detallada.
                </p>
            </div>
            <div style="display:flex; gap:10px;">
                <span class="badge-presencial" style="background:#059669; color:#fff; font-weight:800; font-size:0.75rem;">
                    <i class="fas fa-clock"></i> Presencial (1:2): 48h Directas / 96h Indep.
                </span>
                <span class="badge-virtual" style="background:#0284C7; color:#fff; font-weight:800; font-size:0.75rem;">
                    <i class="fas fa-laptop"></i> Virtual (1:3): 36h Mediadas / 108h Indep.
                </span>
            </div>
        </div>

        
    <!-- INSTRUCTION & CONTROL BANNER -->
    <div style="background:#FFF7ED; border:1px solid #FFEDD5; color:#C2410C; padding:12px 18px; border-radius:10px; margin-bottom:14px; font-weight:700; font-size:0.86rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; box-shadow:0 2px 8px rgba(243,146,0,0.08);">
        <div style="display:flex; align-items:center; gap:10px;">
            <i class="fas fa-arrows-left-right" style="font-size:1.2rem; color:var(--orange);"></i>
            <span><strong>Malla Curricular Completa (Semestres I a VIII (144 cr)):</strong> Desliza la tabla hacia la derecha para ver todos los semestres. La columna de <strong>Componentes Curriculares permanece fija</strong> a la izquierda.</span>
        </div>
        <span class="badge-presencial" style="background:var(--orange); color:#fff; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px;">
            <i class="fas fa-th-large"></i> Matriz Global 100% Sin Distorsión
        </span>
    </div>

    <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-prop">
        <table class="malla-matrix-table">
            <thead>
                <tr>
                    <th class="matrix-comp-header-corner">
                        <i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> COMPONENTE
                    </th>
                    <th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 1</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 2</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 3</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 4</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 5</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 6</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 7</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 8</th>
                </tr>
            </thead>
            <tbody><tr>
            <td class="matrix-comp-header comp-border-ciencias_basicas">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-calculator" style="color:#0284C7; margin-right:6px;"></i> Fundamentación Científica y Razonamiento Cuantitativo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_1', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Álgebra Lineal</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_7', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Cálculo Diferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Álgebra Lineal</div>
                    </div><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_8', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_13', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_32', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Métodos Cualitativos y Cuantitativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-tecnologia">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-laptop-code" style="color:#0D9488; margin-right:6px;"></i> Tecnología, Análisis y Transformación Digital
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('prop_31', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Big Data y Analítica de Datos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('prop_41', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">E-comerce</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de mercadeo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('prop_43', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Inteligencia artificial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Big Data y Analítica de Datos</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-procesos_operaciones">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-cogs" style="color:#EA580C; margin-right:6px;"></i> Procesos, Operaciones y Sistemas Productivos
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_17', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Procesos Administrativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_27', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gestión de Operaciones</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</div>
                    </div><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_28', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Sistemas Integrados de Gestión (HSEQ)</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_40', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gestión de Operaciones</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_47', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de  Calidad</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Sistemas Integrados de Gestión (HSEQ)</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-gestion_financiera">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-chart-pie" style="color:#7C3AED; margin-right:6px;"></i> Gestión Organizacional, Económica y Financiera
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_4', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_5', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables y Financieros</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_6', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de mercadeo</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_10', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_12', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Costos y Presupuestos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_15', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_16', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Análisis Financiero</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_18', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_22', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Análisis Financiero</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_23', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Economía Colombiana e Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_26', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Administración Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_29', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Negocios y Gerencia Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Economía Colombiana e Internacional</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_33', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Marketing</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de mercadeo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_37', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Pensamiento Estratégico y Prospectivo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_39', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Ventas y Canales de Distribución</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Marketing</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_45', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Juego Gerencial (Simulación de Negocios)</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-talento_liderazgo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-users-cog" style="color:#DB2777; margin-right:6px;"></i> Gestión del Talento Humano y Liderazgo
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('prop_25', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia del Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('prop_46', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Habilidades gerenciales y liderazgo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-investigacion_innovacion">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-lightbulb" style="color:#16A34A; margin-right:6px;"></i> Investigación, Innovación y Emprendimiento
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_19', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Competencias Investigativas</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_21', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de mercadeo</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_35', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Modelos de emprendimiento</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_38', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Formulación y Evaluación de Proyectos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Análisis Financiero</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_44', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Laboratorio de Innovación y Emprendimiento</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Modelos de emprendimiento</div>
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_48', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-humanistica_bilinguismo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-globe" style="color:#DC2626; margin-right:6px;"></i> Formación Humanística, Ética y Bilingüismo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_2', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Comunicación Oral y Escrita</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_3', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Cátedra de la Paz y Resolución de Conflictos</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_9', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_11', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_14', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_20', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</div>
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_24', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Derecho Laboral y Seguridad Social</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_34', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Tributaria</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-electivo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-cubes" style="color:#D97706; margin-right:6px;"></i> Componente Electivo (Profundización / Humanística)
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_30', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profesional I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_36', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profesional II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profesional I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_42', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profesional III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profesional II</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr></tbody></table></div>

        <div class="matrix-detail-panel" id="c3-propuesto-matrix-detail-panel" style="margin-top:24px;">
            <div style="text-align:center; padding:30px 20px; color:var(--gray-text);">
                <i class="fas fa-hand-pointer" style="font-size:2rem; color:var(--orange); margin-bottom:10px;"></i>
                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon);">Selecciona una Asignatura de la Matriz Global Superior</h4>
                <p style="font-size:0.83rem; margin-top:4px;">Al hacer clic sobre cualquier asignatura, se cargará aquí su Perfil del Egresado, Resultado de Aprendizaje del Programa (RAP), RAs específicos, Temáticas desagregadas y Prerrequisito explícito.</p>
            </div>
        </div>

        <div class="card" style="margin-top:28px; border-top:4px solid var(--orange);">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                <i class="fas fa-list-alt" style="color:var(--orange);"></i> Tabla 36. Distribución de Créditos y Horas del Plan Propuesto por Componente
            </h4>
            <table class="tbl">
                <thead>
                    <tr>
                        <th>Área de Formación</th>
                        <th>Componente Curricular</th>
                        <th style="text-align:center;">Asignaturas</th>
                        <th style="text-align:center;">Créditos</th>
                        <th style="text-align:center;">% Créditos</th>
                        <th>Horas Presenciales (1:2)</th>
                        <th>Horas Virtuales (1:3)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="lb">Básica</td><td>Fundamentación Científica y Cuantitativa</td><td style="text-align:center;">8</td><td style="text-align:center;">24</td><td style="text-align:center;">16.7%</td><td>384h Dir / 768h Indep</td><td>288h Med / 864h Indep</td></tr>
                    <tr class="row-accent"><td class="lb">Disciplinar</td><td>Gestión Organizacional, Financiera y Operativa</td><td style="text-align:center;">28</td><td style="text-align:center;">84</td><td style="text-align:center;">58.3%</td><td>1.344h Dir / 2.688h Indep</td><td>1.008h Med / 3.024h Indep</td></tr>
                    <tr><td class="lb">Transversal</td><td>Tecnología, Innovación y Bilingüismo</td><td style="text-align:center;">8</td><td style="text-align:center;">24</td><td style="text-align:center;">16.7%</td><td>384h Dir / 768h Indep</td><td>288h Med / 864h Indep</td></tr>
                    <tr class="row-accent"><td class="lb">Electiva</td><td>Componente Electivo de profundización</td><td style="text-align:center;">4</td><td style="text-align:center;">12</td><td style="text-align:center;">8.3%</td><td>192h Dir / 384h Indep</td><td>144h Med / 432h Indep</td></tr>
                    <tr style="background:var(--carbon); color:#fff; font-weight:800;"><td colspan="2" style="color:#fff;">TOTAL PLAN DE ESTUDIOS PROPUESTO</td><td style="text-align:center; color:#fff;">48</td><td style="text-align:center; color:var(--orange);">144</td><td style="text-align:center; color:#fff;">100%</td><td style="color:#fff;">2.304h Dir / 4.608h Indep</td><td style="color:#fff;">1.728h Med / 5.184h Indep</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- SUB TAB 1.2: ÁREAS DE FORMACIÓN PROPUESTAS -->
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
                    <i class="fas fa-calculator" style="color:#0284C7; margin-right:8px;"></i> Área de Formación Básica
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#0284C7; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">0 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">0 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Proporciona las herramientas fundamentales del pensamiento cuantitativo, razonamiento lógico-matemático, análisis económico, estadística y marco analítico básico para la toma de decisiones empresariales.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-briefcase" style="color:#7C3AED; margin-right:8px;"></i> Área de Formación Disciplinar
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#7C3AED; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">31 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">93 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Núcleo estructurante de la profesión de Administración de Empresas. Agrupa las competencias en gestión estratégica, finanzas, operaciones, talento humano, mercadeo, derecho corporativo y responsabilidad social.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Administración</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Microeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Comercial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Costos y Presupuestos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Macroeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Análisis Financiero</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Procesos Administrativos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Teoría Organizacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Investigación de Mercados</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Matemática Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Análisis Financiero</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Economía Colombiana e Internacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Derecho Laboral y Seguridad Social</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia del Talento Humano</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Administración Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gestión de Operaciones</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Sistemas Integrados de Gestión (HSEQ)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Negocios y Gerencia Internacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Economía Colombiana e Internacional</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Marketing</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Tributaria</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Modelos de emprendimiento</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Formulación y Evaluación de Proyectos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Análisis Financiero</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Ventas y Canales de Distribución</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Marketing</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Producción</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gestión de Operaciones</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">E-comerce</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Laboratorio de Innovación y Emprendimiento</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Modelos de emprendimiento</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Juego Gerencial (Simulación de Negocios)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Habilidades gerenciales y liderazgo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de  Calidad</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sistemas Integrados de Gestión (HSEQ)</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-microscope" style="color:#16A34A; margin-right:8px;"></i> Área de Formación Transversal e Investigativa
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#16A34A; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">14 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">42 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Desarrolla el pensamiento crítico, las habilidades comunicativas, el bilingüismo, la metodología de la investigación gerencial, la formulación de proyectos y la analítica digital de datos.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Álgebra Lineal</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Comunicación Oral y Escrita</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cátedra de la Paz y Resolución de Conflictos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cálculo Diferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Álgebra Lineal</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Descriptiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Inferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Competencias Investigativas</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Big Data y Analítica de Datos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Métodos Cualitativos y Cuantitativos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Pensamiento Estratégico y Prospectivo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inteligencia artificial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Big Data y Analítica de Datos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #D97706;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-sliders-h" style="color:#D97706; margin-right:8px;"></i> Área de Electividad y Profundización
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#D97706; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">3 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">9 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Garantiza la flexibilidad del plan de estudios permitiendo al estudiante personalizar su ruta formativa en tendencias tecnológicas, sostenibilidad, emprendimiento gerencial o negocios globales.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profesional I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profesional II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profesional I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profesional III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profesional II</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (48h dir / 96h indep)</td>
            </tr></tbody>
            </table>
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
        <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Sistema de Evaluación de RAPs (Plan Propuesto - Decreto 1330)
        </h3>
        <div class="grid-3" style="margin-bottom:24px;">
            <div class="card" style="border-top:4px solid var(--orange);">
                <h4><i class="fas fa-chart-pie" style="color:var(--orange);"></i> 3 Cortes Sumativos</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">Corte 1 (30%), Corte 2 (30%), Corte 3 (40%) integrados en la plataforma LMS Canvas/Moodle con rúbricas de evaluación por RAs.</p>
            </div>
            <div class="card" style="border-top:4px solid #0284C7;">
                <h4><i class="fas fa-brain" style="color:#0284C7;"></i> Taxonomía de Bloom</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">Evaluación por niveles cognitivos: Recordar, Comprender, Aplicar, Analizar, Evaluar y Crear aplicados en simulaciones y pruebas Saber Pro.</p>
            </div>
            <div class="card" style="border-top:4px solid #16A34A;">
                <h4><i class="fas fa-users-cog" style="color:#16A34A;"></i> Triada Evaluativa</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">Heteroevaluación docente (70%), Coevaluación entre pares (15%) y Autoevaluación consciente del estudiante (15%).</p>
            </div>
        </div>
    </div>

</div>

<!-- MAIN TAB 2: PLAN VIGENTE (158 CR) -->
<div class="tab-panel" id="c3-main-vigente" style="display:none;">

    <!-- SUB TAB NAVIGATION (LEVEL 2) -->
    <div id="c3VigenteSubTabs" class="tab-buttons" style="margin-bottom:20px; display:flex; gap:6px; background:#F1F5F9; padding:4px; border-radius:8px;">
        <button class="tab-btn active" data-tab="c3-v-malla" onclick="switchTab('c3VigenteSubTabs', 'c3-v-malla')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-th" style="color:#475569;"></i> 1. Malla Curricular (Matriz Global)
        </button>
        <button class="tab-btn" data-tab="c3-v-areas" onclick="switchTab('c3VigenteSubTabs', 'c3-v-areas')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-layer-group" style="color:#0284C7;"></i> 2. Áreas de Formación
        </button>
        <button class="tab-btn" data-tab="c3-v-perfiles" onclick="switchTab('c3VigenteSubTabs', 'c3-v-perfiles')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-user-graduate" style="color:#16A34A;"></i> 3. Perfiles y RAPs
        </button>
        <button class="tab-btn" data-tab="c3-v-flex" onclick="switchTab('c3VigenteSubTabs', 'c3-v-flex')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-sliders-h" style="color:#7C3AED;"></i> 4. Flexibilidad Curricular
        </button>
        <button class="tab-btn" data-tab="c3-v-eval" onclick="switchTab('c3VigenteSubTabs', 'c3-v-eval')" style="flex:1; padding:9px; font-weight:700; font-size:0.83rem;">
            <i class="fas fa-tasks" style="color:#DC2626;"></i> 5. Evaluación del Aprendizaje
        </button>
    </div>

    <!-- SUB TAB 2.1: MALLA VIGENTE -->
    <div class="tab-panel active" id="c3-v-malla">
        <div style="background:#F1F5F9; border:1px solid #CBD5E1; padding:14px; border-radius:8px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#334155; margin:0;">
                    <i class="fas fa-table" style="color:#475569;"></i> Matriz Global del Plan de Estudios Vigente SACES (158 Créditos - 9 Semestres)
                </h4>
                <p style="font-size:0.83rem; color:#475569; margin-top:2px; margin-bottom:0;">
                    Visualización en matriz continua: Componentes Curriculares (filas) × Semestres Académicos (columnas I a IX). Haz clic sobre cualquier asignatura para desplegar su trazabilidad detallada.
                </p>
            </div>
            <div style="display:flex; gap:10px;">
                <span class="badge-presencial" style="background:#475569; color:#fff; font-weight:800; font-size:0.75rem;">
                    <i class="fas fa-clock"></i> 58 Asignaturas Totales
                </span>
                <span class="badge-virtual" style="background:#0284C7; color:#fff; font-weight:800; font-size:0.75rem;">
                    <i class="fas fa-history"></i> Plan SACES Anterior
                </span>
            </div>
        </div>

        
    <!-- INSTRUCTION & CONTROL BANNER -->
    <div style="background:#FFF7ED; border:1px solid #FFEDD5; color:#C2410C; padding:12px 18px; border-radius:10px; margin-bottom:14px; font-weight:700; font-size:0.86rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; box-shadow:0 2px 8px rgba(243,146,0,0.08);">
        <div style="display:flex; align-items:center; gap:10px;">
            <i class="fas fa-arrows-left-right" style="font-size:1.2rem; color:var(--orange);"></i>
            <span><strong>Malla Curricular Completa (Semestres I a IX (158 cr)):</strong> Desliza la tabla hacia la derecha para ver todos los semestres. La columna de <strong>Componentes Curriculares permanece fija</strong> a la izquierda.</span>
        </div>
        <span class="badge-presencial" style="background:var(--orange); color:#fff; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px;">
            <i class="fas fa-th-large"></i> Matriz Global 100% Sin Distorsión
        </span>
    </div>

    <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-vig">
        <table class="malla-matrix-table">
            <thead>
                <tr>
                    <th class="matrix-comp-header-corner">
                        <i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> COMPONENTE
                    </th>
                    <th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 1</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 2</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 3</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 4</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 5</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 6</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 7</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 8</th><th style="text-align:center; min-width:165px; padding:12px 10px;">SEM 9</th>
                </tr>
            </thead>
            <tbody><tr>
            <td class="matrix-comp-header comp-border-ciencias_basicas">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-calculator" style="color:#0284C7; margin-right:6px;"></i> Fundamentación Científica y Razonamiento Cuantitativo
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_8', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Cálculo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemáticas Básicas</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_15', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_22', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_40', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Métodos Cuantitativos y Cualitativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-tecnologia">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-laptop-code" style="color:#0D9488; margin-right:6px;"></i> Tecnología, Análisis y Transformación Digital
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('vig_38', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">E-Commerce</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-procesos_operaciones">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-cogs" style="color:#EA580C; margin-right:6px;"></i> Procesos, Operaciones y Sistemas Productivos
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_17', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Administración por Procesos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_30', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Operaciones</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_44', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gestión de la Calidad</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración por Procesos</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_51', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Operaciones</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_61', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Distribución Física y Logística</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Producción</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-gestion_financiera">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-chart-pie" style="color:#7C3AED; margin-right:6px;"></i> Gestión Organizacional, Económica y Financiera
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_1', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Matemáticas Básicas</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_3', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Expresión Oral y Escrita</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_5', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_6', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_7', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Economía</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_10', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_11', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Costos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_13', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Economía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_19', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Cultura Emprendedora</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_20', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_27', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Entorno Económico Colombiano e Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_29', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_31', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_32', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Modelos de Desarrollo Económico</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_37', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Mercadeo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_45', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Presupuesto</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_47', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_49', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Sistema de Información Gerencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Tecnología e Innovación</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_53', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_56', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Planeación y Prospectiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Habilidades Gerenciales</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_57', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia del Servicio</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-talento_liderazgo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-users-cog" style="color:#DB2777; margin-right:6px;"></i> Gestión del Talento Humano y Liderazgo
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_25', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Liderazgo</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_33', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Administración de Salarios</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Laboral</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_46', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración de Salarios</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_50', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Liderazgo</div>
                    </div><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_54', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Deontología</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-investigacion_innovacion">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-lightbulb" style="color:#16A34A; margin-right:6px;"></i> Investigación, Innovación y Emprendimiento
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_12', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Metodología de la Investigación</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_26', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Creatividad e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_39', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Tecnología e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Creatividad e Innovación</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_52', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_55', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 8</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado I</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Metodología de la Investigación</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_58', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Evaluación de Proyectos de Inversión</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia Financiera</div>
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_62', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Proyecto de Grado I</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-humanistica_bilinguismo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-globe" style="color:#DC2626; margin-right:6px;"></i> Formación Humanística, Ética y Bilingüismo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_2', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Constitución y Democracia</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_4', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 1</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_9', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Laboral</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_14', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 2</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_16', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Derecho Administrativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Constitución y Democracia</div>
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_21', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_23', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Tributaria</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_28', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés IV</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés III</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_35', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés V</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés IV</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_36', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_42', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Inglés VI</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés V</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_43', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración Pública</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Administrativo</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_59', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Responsabilidad Social Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Deontología</div>
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_60', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 9</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Gobierno Corporativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-electivo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.82rem; line-height:1.3;">
                    <i class="fa-cubes" style="color:#D97706; margin-right:6px;"></i> Componente Electivo (Profundización / Humanística)
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_18', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 3</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_24', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 4</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Humanística I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_34', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 5</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_41', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 6</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">3 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Humanística II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_48', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:2px 6px; border-radius:4px;">Sem 7</span>
                            <span style="font-size:0.65rem; font-weight:800; color:#475569; background:#F1F5F9; padding:2px 6px; border-radius:4px;">2 cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización II</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:54px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr></tbody></table></div>

        <div class="matrix-detail-panel" id="c3-vigente-matrix-detail-panel" style="margin-top:24px;">
            <div style="text-align:center; padding:30px 20px; color:var(--gray-text);">
                <i class="fas fa-hand-pointer" style="font-size:2rem; color:#475569; margin-bottom:10px;"></i>
                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon);">Selecciona una Asignatura de la Matriz Vigente Superior</h4>
                <p style="font-size:0.83rem; margin-top:4px;">Al hacer clic sobre cualquier asignatura del plan vigente (158 cr), se cargará aquí su Perfil del Egresado, Resultado de Aprendizaje del Programa (RAP), RAs específicos, Temáticas desagregadas y Prerrequisito explícito.</p>
            </div>
        </div>

        <div class="card" style="margin-top:28px; border-top:4px solid #475569;">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                <i class="fas fa-list-alt" style="color:#475569;"></i> Tabla 10. Distribución de Créditos del Plan de Estudios por Semestre (Plan Vigente)
            </h4>
            <table class="tbl">
                <thead>
                    <tr>
                        <th style="text-align:center;">Semestre</th>
                        <th style="text-align:center;">Número de Asignaturas</th>
                        <th style="text-align:center;">Créditos Académicos</th>
                        <th>Horas Acompañamiento Directo</th>
                        <th>Horas Trabajo Independiente</th>
                        <th>Horas Totales del Semestre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center; font-weight:700;">Semestre I</td><td style="text-align:center;">7</td><td style="text-align:center; font-weight:700;">18</td><td>288h</td><td>576h</td><td>864h</td></tr>
                    <tr class="row-accent"><td style="text-align:center; font-weight:700;">Semestre II</td><td style="text-align:center;">7</td><td style="text-align:center; font-weight:700;">18</td><td>288h</td><td>576h</td><td>864h</td></tr>
                    <tr><td style="text-align:center; font-weight:700;">Semestre III</td><td style="text-align:center;">7</td><td style="text-align:center; font-weight:700;">18</td><td>288h</td><td>576h</td><td>864h</td></tr>
                    <tr class="row-accent"><td style="text-align:center; font-weight:700;">Semestre IV</td><td style="text-align:center;">7</td><td style="text-align:center; font-weight:700;">18</td><td>288h</td><td>576h</td><td>864h</td></tr>
                    <tr><td style="text-align:center; font-weight:700;">Semestre V</td><td style="text-align:center;">7</td><td style="text-align:center; font-weight:700;">18</td><td>288h</td><td>576h</td><td>864h</td></tr>
                    <tr class="row-accent"><td style="text-align:center; font-weight:700;">Semestre VI</td><td style="text-align:center;">7</td><td style="text-align:center; font-weight:700;">18</td><td>288h</td><td>576h</td><td>864h</td></tr>
                    <tr><td style="text-align:center; font-weight:700;">Semestre VII</td><td style="text-align:center;">6</td><td style="text-align:center; font-weight:700;">17</td><td>272h</td><td>544h</td><td>816h</td></tr>
                    <tr class="row-accent"><td style="text-align:center; font-weight:700;">Semestre VIII</td><td style="text-align:center;">5</td><td style="text-align:center; font-weight:700;">17</td><td>272h</td><td>544h</td><td>816h</td></tr>
                    <tr><td style="text-align:center; font-weight:700;">Semestre IX</td><td style="text-align:center;">5</td><td style="text-align:center; font-weight:700;">16</td><td>256h</td><td>512h</td><td>768h</td></tr>
                    <tr style="background:var(--carbon); color:#fff; font-weight:800;"><td style="text-align:center; color:#fff;">TOTALES PLAN VIGENTE</td><td style="text-align:center; color:#fff;">58</td><td style="text-align:center; color:var(--orange);">158</td><td style="color:#fff;">2.528h Directas</td><td style="color:#fff;">5.056h Independientes</td><td style="color:#fff;">7.584h Totales</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- SUB TAB 2.2: ÁREAS DE FORMACIÓN VIGENTES -->
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
                    <i class="fas fa-calculator" style="color:#0284C7; margin-right:8px;"></i> Área de Formación Básica (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#0284C7; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">0 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">0 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Fundamentación científica, contable y económica tradicional del administrador en la estructura SACES.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-briefcase" style="color:#7C3AED; margin-right:8px;"></i> Área de Formación Disciplinar (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#7C3AED; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">40 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">107 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Conjunto de asignaturas profesionales de la gestión operacional, administrativa, contable y de mercado.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Administración</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos Contables</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Economía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Teoría Organizacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Costos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Metodología de la Investigación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Microeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Economía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Administración por Procesos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cultura Emprendedora</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Macroeconomía</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Liderazgo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Creatividad e Innovación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Entorno Económico Colombiano e Internacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Matemática Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Investigación de Operaciones</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Modelos de Desarrollo Económico</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Administración de Salarios</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Laboral</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">E-Commerce</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Tecnología e Innovación</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Creatividad e Innovación</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Métodos Cuantitativos y Cualitativos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gestión de la Calidad</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Administración por Procesos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Presupuesto</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Talento Humano</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Administración de Salarios</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Sistema de Información Gerencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Tecnología e Innovación</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Habilidades Gerenciales</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Liderazgo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Producción</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Operaciones</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Investigación de Mercados</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Deontología</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Metodología de la Investigación</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Planeación y Prospectiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Habilidades Gerenciales</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia del Servicio</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Evaluación de Proyectos de Inversión</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia Financiera</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Responsabilidad Social Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Deontología</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gobierno Corporativo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Distribución Física y Logística</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Producción</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">TP (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 9</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Proyecto de Grado I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-globe" style="color:#16A34A; margin-right:8px;"></i> Área de Formación Transversal (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#16A34A; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">17 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">41 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Formación humanística, de lenguaje, ética y metodología investigativa tradicional del programa.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Matemáticas Básicas</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Constitución y Democracia</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Expresión Oral y Escrita</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cálculo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Matemáticas Básicas</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Laboral</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Descriptiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Derecho Administrativo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Constitución y Democracia</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Estadística Inferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Tributaria</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés IV</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés III</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés V</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés IV</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Legislación Comercial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Inglés VI</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés V</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Administración Pública</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Administrativo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #D97706;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-sliders-h" style="color:#D97706; margin-right:8px;"></i> Área Electiva (Plan Vigente 158 cr)
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#D97706; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">5 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">11 Créditos Totales</span>
                </div>
            </div>
            <p style="font-size:0.84rem; color:var(--gray-text); margin-bottom:14px;">Espacios de flexibilidad y complementariedad académica ofrecidos en la versión anterior.</p>
            <table class="tbl" style="width:100%; font-size:0.83rem;">
                <thead>
                    <tr style="background:#F8FAFC;">
                        <th style="width:100px;">Semestre</th>
                        <th>Asignatura</th>
                        <th style="width:80px; text-align:center;">Créditos</th>
                        <th>Prerrequisito</th>
                        <th>Modalidad Presencial</th>
                    </tr>
                </thead>
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profundización I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Humanística I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profundización II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Humanística II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva Profundización III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización II</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
            </tr></tbody>
            </table>
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
        <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
            Sistema Institucional de Evaluación del Aprendizaje (Plan Vigente)
        </h3>
        <div class="grid-3" style="margin-bottom:24px;">
            <div class="card" style="border-top:4px solid var(--orange);">
                <h4><i class="fas fa-percentage" style="color:var(--orange);"></i> 3 Cortes Sumativos</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">Corte 1 (30%), Corte 2 (30%), Corte 3 (40%) registrados en el sistema académico institucional.</p>
            </div>
            <div class="card" style="border-top:4px solid var(--carbon);">
                <h4><i class="fas fa-sliders-h" style="color:var(--carbon);"></i> Escala Cuantitativa</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">Calificación cuantitativa de 0.0 a 5.0 con nota mínima de aprobación de 3.0.</p>
            </div>
            <div class="card" style="border-top:4px solid #059669;">
                <h4><i class="fas fa-users-cog" style="color:#059669;"></i> Triada Evaluativa</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">Integración activa de Heteroevaluación, Coevaluación y Autoevaluación en el aula de clase.</p>
            </div>
        </div>
    </div>

</div>

<!-- MAIN TAB 3: COMPARACIÓN Y JUSTIFICACIÓN -->
<div class="tab-panel" id="c3-main-comparacion" style="display:none;">
    <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800; color:var(--carbon); margin-bottom:6px;">
        Cuadro Comparativo y Sustentación Técnica de la Reestructuración Curricular
    </h3>
    <p style="color:var(--gray-text); font-size:0.85rem; margin-bottom:20px;">
        Sustentación entregada a los Pares Académicos del Ministerio de Educación Nacional para la Renovación de Registro Calificado.
    </p>

    <table class="tbl" style="margin-bottom:28px;">
        <thead>
            <tr>
                <th>Indicador Curricular</th>
                <th>Plan Vigente</th>
                <th>Plan Propuesto</th>
                <th>Impacto / Justificación Técnica</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row-accent">
                <td class="lb">Duración (Semestres)</td>
                <td>9 Semestres</td>
                <td><strong>8 Semestres</strong></td>
                <td><span style="color:#059669; font-weight:700;">Optimización de la ruta de titulación</span> adaptada al estándar nacional de 4 años.</td>
            </tr>
            <tr>
                <td class="lb">Créditos Académicos</td>
                <td>158 Créditos</td>
                <td><strong>144 Créditos</strong></td>
                <td>Reducción de 14 créditos sin perder densidad conceptual, eliminando redundancias temáticas.</td>
            </tr>
            <tr class="row-accent">
                <td class="lb">Número de Asignaturas</td>
                <td>58 Asignaturas</td>
                <td><strong>48 Asignaturas</strong></td>
                <td>Asignaturas unificadas a 3 créditos cada una, garantizando dedicación estándar de 144h.</td>
            </tr>
            <tr>
                <td class="lb">Horas Totales del Plan</td>
                <td>7.584 Horas</td>
                <td><strong>6.912 Horas</strong></td>
                <td>Ruta más ágil y eficiente centrada en competencias y resultados de aprendizaje (RA).</td>
            </tr>
            <tr class="row-accent">
                <td class="lb">Transformación Digital e IA</td>
                <td>Básica / Tradicional</td>
                <td><strong>Big Data, IA, E-Commerce, Lab. Innovación</strong></td>
                <td>Incorporación explícita de asignaturas de vanguardia tecnológica en los semestres 6, 7 y 8.</td>
            </tr>
            <tr>
                <td class="lb">Horas Modalidad Presencial</td>
                <td>36h Directas / 108h Indep.</td>
                <td><strong>48h Directas / 96h Indep.</strong></td>
                <td><span style="color:#0284C7; font-weight:700;">Cumplimiento estricto MEN:</span> 1 hora acompañada por 2 independientes (1:2).</td>
            </tr>
            <tr class="row-accent">
                <td class="lb">Horas Modalidad Virtual</td>
                <td>36h Mediadas / 108h Indep.</td>
                <td><strong>36h Mediadas / 108h Indep.</strong></td>
                <td><span style="color:#059669; font-weight:700;">Cumplimiento estricto MEN:</span> Aprendizaje autónomo guiado por LMS (1:3).</td>
            </tr>
        </tbody>
    </table>
</div>
`;

window.c3Init = function() {
    window.switchTab('c3MainTabsGroup', 'c3-main-propuesto');
    window.switchTab('c3PropuestoSubTabs', 'c3-p-malla');
    window.switchTab('c3VigenteSubTabs', 'c3-v-malla');
};
