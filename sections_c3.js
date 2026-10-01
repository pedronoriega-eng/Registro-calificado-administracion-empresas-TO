/* =========================================================
   CONDICIÓN 3 – ASPECTOS CURRICULARES (DOCUMENTO MAESTRO RENOVACIÓN)
   Plan de Estudios Vigente (158 cr) vs Plan Propuesto (144 cr)
   Registro Único: Modalidad Presencial y Virtual · CETO
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

window.toggleMallaView = function(viewGroupId, mode) {
    const gridEl = document.getElementById(viewGroupId + '-grid-view');
    const tableEl = document.getElementById(viewGroupId + '-table-view');
    const btnGrid = document.getElementById(viewGroupId + '-btn-grid');
    const btnTable = document.getElementById(viewGroupId + '-btn-table');

    if (mode === 'grid') {
        if (gridEl) gridEl.style.display = 'block';
        if (tableEl) tableEl.style.display = 'none';
        if (btnGrid) btnGrid.classList.add('active');
        if (btnTable) btnTable.classList.remove('active');
    } else {
        if (gridEl) gridEl.style.display = 'none';
        if (tableEl) tableEl.style.display = 'block';
        if (btnGrid) btnGrid.classList.remove('active');
        if (btnTable) btnTable.classList.add('active');
    }
};

window.openSubjectModal = function(id, type) {
    let s = null;
    if (type === 'vig') {
        s = window.C3_VIGENTE_SUBJECTS.find(item => item.id === id);
    } else {
        s = window.C3_SUBJECTS.find(item => item.id === id);
    }
    if (!s) return;

    let existing = document.getElementById('c3SubjectModalOverlay');
    if (existing) existing.remove();

    const rasHtml = s.ras.map(r => `<li style="margin-bottom:6px; padding-left:10px; border-left:3px solid var(--orange); font-size:0.84rem;">${r}</li>`).join('');
    const temasHtml = s.temas.map(t => `<li style="margin-bottom:4px; font-size:0.84rem; color:var(--carbon);"><i class="fas fa-check-circle" style="color:var(--orange); margin-right:6px;"></i>${t}</li>`).join('');

    const pd_cr = Math.floor(s.presencial.directa / s.creditos);
    const pi_cr = Math.floor(s.presencial.independiente / s.creditos);
    const vm_cr = Math.floor(s.virtual.mediado / s.creditos);
    const vi_cr = Math.floor(s.virtual.independiente / s.creditos);

    const planBadge = type === 'vig' ? '<span style="background:#475569; color:#fff; padding:3px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; margin-right:6px;"><i class="fas fa-history"></i> Plan Vigente (158 cr)</span>' : '<span style="background:#059669; color:#fff; padding:3px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; margin-right:6px;"><i class="fas fa-rocket"></i> Plan Propuesto (144 cr)</span>';

    const modalHtml = `
    <div class="c3-modal-overlay" id="c3SubjectModalOverlay" onclick="if(event.target===this) closeSubjectModal()">
        <div class="c3-modal-card">
            <div class="c3-modal-header">
                <div>
                    ${planBadge}
                    <span class="badge-presencial" style="margin-right:6px;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                    <span class="badge-virtual" style="margin-right:6px;"><i class="fas fa-layer-group"></i> ${s.area}</span>
                    <span style="background:rgba(255,255,255,0.2); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.7rem; font-weight:700;">${s.creditos} Créditos (Tipo ${s.tipo})</span>
                    <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:#fff; margin-top:8px;">${s.nombre}</h3>
                </div>
                <button class="c3-modal-close" onclick="closeSubjectModal()"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="c3-modal-body">
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-clock"></i> Distribución de Horas por Modalidad (48h por Crédito)</div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:8px;">
                        <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:12px; border-radius:8px;">
                            <strong style="color:#0369A1; font-size:0.82rem;"><i class="fas fa-university"></i> Modalidad Presencial</strong>
                            <div style="font-size:0.8rem; margin-top:4px; color:#0C4A6E;">
                                • Directa: <strong>${s.presencial.directa}h</strong> (${pd_cr}h/cr)<br>
                                • Independiente: <strong>${s.presencial.independiente}h</strong> (${pi_cr}h/cr)<br>
                                • Total: <strong>${s.presencial.total}h</strong>
                            </div>
                        </div>
                        <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:12px; border-radius:8px;">
                            <strong style="color:#15803D; font-size:0.82rem;"><i class="fas fa-laptop"></i> Modalidad Virtual</strong>
                            <div style="font-size:0.8rem; margin-top:4px; color:#14532D;">
                                • Mediado: <strong>${s.virtual.mediado}h</strong> (${vm_cr}h/cr)<br>
                                • Independiente: <strong>${s.virtual.independiente}h</strong> (${vi_cr}h/cr)<br>
                                • Total: <strong>${s.virtual.total}h</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-bullseye"></i> Articulación con Perfil de Egreso y RAP del Programa</div>
                    <div style="background:var(--gray-bg); padding:12px; border-radius:8px; font-size:0.83rem;">
                        <p style="margin-bottom:6px;"><strong>Perfil de Egreso:</strong> ${s.perfil_asociado}</p>
                        <p style="margin:0;"><strong>RAP del Programa:</strong> ${s.rap_asociado}</p>
                    </div>
                </div>

                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-file-alt"></i> Descripción y Resultados de Aprendizaje (RA)</div>
                    <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:12px;">${s.descripcion}</p>
                    <ul style="list-style:none; padding:0; margin:0;">
                        ${rasHtml}
                    </ul>
                </div>

                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-list-ol"></i> Temas y Subtemas Principales</div>
                    <ul style="list-style:none; padding:0; margin:0;">
                        ${temasHtml}
                    </ul>
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
    <p>Estructura curricular, plan de estudios, perfiles, Resultados de Aprendizaje (RAP) y estrategias de flexibilidad del Programa de Administración de Empresas (Registro Único Presencial / Virtual).</p>
</div>

<!-- LEVEL 1 MAIN TABS -->
<div class="c3-main-tabs" id="c3MainTabsGroup">
    <button class="c3-main-tab-btn active" data-tab="c3-main-vigente" onclick="switchTab('c3MainTabsGroup','c3-main-vigente')">
        <i class="fas fa-history"></i> 1. Plan Vigente (158 cr)
    </button>
    <button class="c3-main-tab-btn" data-tab="c3-main-propuesto" onclick="switchTab('c3MainTabsGroup','c3-main-propuesto')">
        <i class="fas fa-rocket"></i> 2. Plan Propuesto (144 cr)
    </button>
    <button class="c3-main-tab-btn" data-tab="c3-main-comparacion" onclick="switchTab('c3MainTabsGroup','c3-main-comparacion')">
        <i class="fas fa-balance-scale"></i> 3. Comparación y Justificación
    </button>
</div>

<!-- =========================================================
     MAIN TAB 1: PLAN DE ESTUDIOS VIGENTE (158 CRÉDITOS)
     ========================================================= -->
<div class="tab-panel active" id="c3-main-vigente" style="display:block;">
    <div class="tabs-container" id="c3VigenteSubTabs">
        <div class="tabs-nav">
            <button class="tab-btn active" data-tab="c3-v-malla" onclick="switchTab('c3VigenteSubTabs','c3-v-malla')">
                <i class="fas fa-th"></i> Malla Curricular (58 Asignaturas)
            </button>
            <button class="tab-btn" data-tab="c3-v-areas" onclick="switchTab('c3VigenteSubTabs','c3-v-areas')">
                <i class="fas fa-layer-group"></i> Áreas de Formación
            </button>
            <button class="tab-btn" data-tab="c3-v-perfiles" onclick="switchTab('c3VigenteSubTabs','c3-v-perfiles')">
                <i class="fas fa-user-check"></i> Perfiles y RAPs (Anexo 1)
            </button>
            <button class="tab-btn" data-tab="c3-v-flex" onclick="switchTab('c3VigenteSubTabs','c3-v-flex')">
                <i class="fas fa-arrows-alt"></i> Flexibilidad Curricular
            </button>
            <button class="tab-btn" data-tab="c3-v-eval" onclick="switchTab('c3VigenteSubTabs','c3-v-eval')">
                <i class="fas fa-clipboard-check"></i> Evaluación de RA e Institucional
            </button>
        </div>

        <!-- SUB TAB 1.1: MALLA VIGENTE INTERACTIVA -->
        <div class="tab-panel active" id="c3-v-malla" style="display:block;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                Malla Curricular del Plan de Estudios Vigente (Tabla 10 Oficial)
            </h3>
            <p style="color:var(--gray-text); font-size:0.82rem; margin-bottom:16px;">
                Estructura curricular de 9 semestres, 158 créditos y 58 asignaturas registrada ante SACES. Haga clic en cualquier asignatura para inspeccionar sus horas, perfiles, RAs y temas.
            </p>

            <div class="metric-row">
                <div class="metric-card"><div class="metric-val">158</div><div class="metric-lbl">Créditos Totales</div></div>
                <div class="metric-card"><div class="metric-val">9</div><div class="metric-lbl">Semestres</div></div>
                <div class="metric-card"><div class="metric-val">58</div><div class="metric-lbl">Asignaturas</div></div>
                <div class="metric-card"><div class="metric-val">1.896h</div><div class="metric-lbl">Horas Directas / Mediadas</div></div>
                <div class="metric-card"><div class="metric-val">5.688h</div><div class="metric-lbl">Horas Trabajo Indep.</div></div>
            </div>

            <!-- Modal Horas breakdown -->
            <div class="grid-2" style="margin:20px 0;">
                <div class="card-accent" style="background:#0F172A; border-bottom:4px solid #0284C7;">
                    <h4><i class="fas fa-university" style="color:#38BDF8;"></i> Modalidad Presencial (Plan Vigente)</h4>
                    <p style="font-size:0.82rem; color:#94A3B8; margin-top:4px;">
                        • <strong>Horas Docencia Directa:</strong> 36h por crédito (o 24h para 2cr). Total: 1.896 horas en aula.<br>
                        • <strong>Horas Trabajo Independiente:</strong> 108h por crédito (o 72h para 2cr). Total: 5.688 horas autónomas.<br>
                        • <strong>Total Carga Horaria:</strong> 7.584 horas efectivas (144h por crédito).
                    </p>
                </div>
                <div class="card-accent" style="background:#064E3B; border-bottom:4px solid #10B981;">
                    <h4><i class="fas fa-laptop" style="color:#34D399;"></i> Modalidad Virtual (Plan Vigente)</h4>
                    <p style="font-size:0.82rem; color:#A7F3D0; margin-top:4px;">
                        • <strong>Horas Trabajo Mediado TIC:</strong> 36h por crédito en LMS Moodle y tutorías sincrónicas.<br>
                        • <strong>Horas Trabajo Independiente:</strong> 108h por crédito de trabajo autónomo guiado.<br>
                        • <strong>Total Carga Horaria:</strong> 7.584 horas equivalentes en Registro Único.
                    </p>
                </div>
            </div>

            <!-- View Mode Switcher Bar -->
            <div class="view-toggle-bar">
                <button class="view-toggle-btn active" id="c3-vmalla-btn-grid" onclick="toggleMallaView('c3-vmalla','grid')">
                    <i class="fas fa-th-large"></i> Vista Cuadrícula de Semestres (Interactiva)
                </button>
                <button class="view-toggle-btn" id="c3-vmalla-btn-table" onclick="toggleMallaView('c3-vmalla','table')">
                    <i class="fas fa-table"></i> Vista Tabla Oficial (Tabla 10)
                </button>
            </div>

            <!-- Grid View (Interactive) -->
            <div id="c3-vmalla-grid-view" style="display:block;">
                <div class="malla-interactive-grid">
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 1</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_1', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Matemáticas Básicas</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_2', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Constitución y Democracia</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_3', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Expresión Oral y Escrita</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_4', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés I</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_5', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos de Administración</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_6', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos Contables</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_7', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos de Economía</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 2</span>
            <span class="malla-semestre-badge">17 CR · 816h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_8', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Cálculo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_9', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Legislación Laboral</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_10', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Teoría Organizacional</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_11', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Costos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_12', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Metodología de la Investigación</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_13', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Microeconomía</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_14', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés II</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 3</span>
            <span class="malla-semestre-badge">17 CR · 816h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_15', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Estadística Descriptiva</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_16', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Derecho Administrativo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_17', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Administración por Procesos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_18', 'vig')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Profundización I</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_19', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Cultura Emprendedora</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_20', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Macroeconomía</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_21', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés III</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 4</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_22', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Estadística Inferencial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_23', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Legislación Tributaria</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_24', 'vig')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Humanística I</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_25', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Liderazgo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_26', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Creatividad e Innovación</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_27', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Entorno Económico Colombiano e Internacional</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_28', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés IV</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 5</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_29', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Matemática Financiera</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_30', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Investigación de Operaciones</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_31', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos de Mercadeo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_32', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Modelos de Desarrollo Económico</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_33', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Administración de Salarios</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_34', 'vig')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Profundización II</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_35', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés V</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 6</span>
            <span class="malla-semestre-badge">19 CR · 912h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_36', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Legislación Comercial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_37', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de Mercadeo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_38', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">E-Commerce</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_39', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Tecnología e Innovación</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_40', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Métodos Cuantitativos y Cualitativos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_41', 'vig')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Humanística II</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_42', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés VI</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 7</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_43', 'vig')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Fundamentos de Administración Pública</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_44', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gestión de la Calidad</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_45', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Presupuesto</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_46', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de Talento Humano</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_47', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Proyecto Empresarial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_48', 'vig')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Profundización III</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_49', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Sistema de Información Gerencial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 8</span>
            <span class="malla-semestre-badge">16 CR · 768h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_50', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Habilidades Gerenciales</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_51', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de Producción</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_52', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Investigación de Mercados</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_53', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia Financiera</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_54', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Deontología</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_55', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Proyecto de Grado I</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 9</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_56', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Planeación y Prospectiva</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_57', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia del Servicio</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_58', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Evaluación de Proyectos de Inversión</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_59', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Responsabilidad Social Empresarial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_60', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gobierno Corporativo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_61', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Distribución Física y Logística</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 36h / 108h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('vig_62', 'vig')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Proyecto de Grado II</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 2 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 24h / 72h</span>
                </div>
            </div>
        </div></div></div>
            </div>

            <!-- Table View (Tabla 10 Official) -->
            <div id="c3-vmalla-table-view" style="display:none;">
                <table class="tbl">
                    <thead>
                        <tr>
                            <th>Sem.</th>
                            <th>Asignatura</th>
                            <th>Tipo</th>
                            <th>Créditos</th>
                            <th>H. Docencia Directa / Mediada</th>
                            <th>H. Trabajo Independiente</th>
                            <th>Horas Totales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- SEMESTRE 1 -->
                        <tr class="row-accent"><td colspan="7"><strong>SEMESTRE I (18 Créditos · 864 Horas Totales)</strong></td></tr>
                        <tr><td>1</td><td>Matemáticas Básicas</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                        <tr><td>1</td><td>Constitución y Democracia</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                        <tr><td>1</td><td>Expresión Oral y Escrita</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                        <tr><td>1</td><td>Inglés I</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                        <tr><td>1</td><td>Fundamentos de Administración</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                        <tr><td>1</td><td>Fundamentos Contables</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                        <tr><td>1</td><td>Fundamentos de Economía</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                        <tr style="background:var(--carbon); color:#fff;">
                            <td colspan="3" style="color:#fff; font-weight:800;">TOTAL PROGRAMA VIGENTE (58 Asignaturas)</td>
                            <td style="color:#fff; font-weight:800;">158 cr</td>
                            <td style="color:#fff; font-weight:800;">1.896h</td>
                            <td style="color:#fff; font-weight:800;">5.688h</td>
                            <td style="color:#fff; font-weight:800;">7.584 Horas</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="evidence-box" style="margin-top:20px;">
                <i class="fas fa-file-pdf"></i>
                <strong>Soporte Oficial:</strong> Anexo 5. Documento Maestro Administración de Empresas_RU inicial (Tabla 10).
            </div>
        </div>

        <!-- SUB TAB 1.2: ÁREAS VIGENTE -->
        <div class="tab-panel" id="c3-v-areas" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Distribución de Créditos y Asignaturas por Área de Formación (Tabla 9 Oficial)
            </h3>

            
<div class="grid-3" style="margin-bottom:24px;">
    <div class="card" style="border-top:4px solid #0284C7;">
        <h4 style="color:#0284C7;"><i class="fas fa-book-reader"></i> 1. Área Transversal (Humanística y Básica)</h4>
        <p style="font-size:0.83rem; margin-bottom:10px;"><strong>17 Asignaturas · 41 Créditos · 1.968 Horas Totales</strong></p>
        <p style="font-size:0.8rem; color:var(--gray-text);">Desarrolla competencias genéricas en matemáticas, cálculo, estadísticas, comunicación, inglés (I a VI), legislación y democracia.</p>
    </div>
    <div class="card" style="border-top:4px solid #C2410C;">
        <h4 style="color:#C2410C;"><i class="fas fa-briefcase"></i> 2. Área Disciplinar / Específica</h4>
        <p style="font-size:0.83rem; margin-bottom:10px;"><strong>36 Asignaturas · 107 Créditos · 5.136 Horas Totales</strong></p>
        <p style="font-size:0.8rem; color:var(--gray-text);">Desarrolla la fundamentación profesional en gestión, contabilidad, economía, finanzas, mercadeo, operaciones y talento humano.</p>
    </div>
    <div class="card" style="border-top:4px solid #15803D;">
        <h4 style="color:#15803D;"><i class="fas fa-cubes"></i> 3. Área Electiva</h4>
        <p style="font-size:0.83rem; margin-bottom:10px;"><strong>5 Asignaturas · 10 Créditos · 480 Horas Totales</strong></p>
        <p style="font-size:0.8rem; color:var(--gray-text);">Bolsa de electividad dividida en 3 Electivas de Profundización (6cr) y 2 Electivas Humanísticas (4cr).</p>
    </div>
</div>


            <div class="evidence-box">
                <i class="fas fa-check-circle"></i>
                <strong>Soporte Institucional:</strong> Las 58 asignaturas del plan vigente se encuentran completamente articuladas en las áreas Transversal (41 cr), Disciplinar (107 cr) y Electiva (10 cr).
            </div>
        </div>

        <!-- SUB TAB 1.3: PERFILES Y RAPS VIGENTE -->
        <div class="tab-panel" id="c3-v-perfiles" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Matriz de Resultados de Aprendizaje y Competencias del Plan Vigente (Anexo 1 Oficial)
            </h3>

            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card" style="border-left:4px solid var(--orange);">
                    <h4><i class="fas fa-briefcase" style="color:var(--orange);"></i> Perfil Profesional del Plan Vigente</h4>
                    <p style="font-size:0.85rem; color:var(--carbon); line-height:1.6;">
                        El profesional en Administración de Empresas del plan vigente es un egresado formado para la comprensión integral de las organizaciones, el manejo estratégico de sus recursos humanos, financieros y tecnológicos, la toma de decisiones informadas en entornos dinámicos y la conducción ética de proyectos empresariales regionales.
                    </p>
                </div>
                <div class="card" style="border-left:4px solid var(--carbon);">
                    <h4><i class="fas fa-building" style="color:var(--carbon);"></i> Perfil Ocupacional del Plan Vigente</h4>
                    <p style="font-size:0.85rem; color:var(--carbon); line-height:1.6;">
                        Desempeño en roles como: Director General, Gerente Administrativo o Financiero, Director de Mercadeo y Ventas, Coordinador de Talento Humano, Gestor de Calidad y Operaciones, Consultor Organizacional o Empresario Independiente.
                    </p>
                </div>
            </div>

            
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 1</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Innovación y Optimización de Productos, Servicios y Procesos</span>
            </div>
            <i class="fas fa-check-circle" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Vigente)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Implementar procesos de innovación para optimizar productos, servicios y procesos, promoviendo soluciones creativas y estrategias de marketing innovadoras que generen valor, mejoren la competitividad y adapten la organización a las demandas del mercado globalizado.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Diseña procesos de innovación para optimizar productos, servicios y procesos, utilizando estrategias de marketing innovadoras basadas en un análisis crítico del contexto y alineadas a las demandas del mercado global.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Vigente (10 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Creatividad e Innovación</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Cultura Emprendedora</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Gerencia de Mercadeo</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Tecnología e Innovación</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> E-Commerce</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Inglés I</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Fundamentos de Mercadeo</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Modelos de Desarrollo Económico</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Evaluación de Proyectos de Inversión</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Fundamentos Contables</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 2</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Liderazgo, Productividad y Sistemas de Información Gerencial</span>
            </div>
            <i class="fas fa-check-circle" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Vigente)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Dirigir equipos de trabajo de manera eficaz, guiando a las personas con visión, ética y comunicación efectiva, tomando decisiones estratégicas en los procesos organizacionales para optimizar la productividad, competitividad y el desarrollo general de la empresa.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Formula estrategias de innovación tecnológica y sistemas de información gerencial que optimicen la productividad y competitividad de una organización, ajustando las soluciones con la planeación estratégica y las demandas del mercado global.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Vigente (10 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Gestión de la Calidad</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Investigación de Mercados</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> E-Commerce</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Planeación y Prospectiva</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Sistemas de Información Gerencial</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Inglés II</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Habilidades Gerenciales</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Distribución Física y Logística</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Administración de Salarios</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Gerencia de Talento Humano</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 3</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Sostenibilidad, Operaciones y Responsabilidad Social Empresarial</span>
            </div>
            <i class="fas fa-check-circle" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Vigente)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Deducir los principios de sostenibilidad y responsabilidad social en la toma de decisiones empresariales, estableciendo estrategias que fomenten la conservación del medio ambiente, la equidad social y la viabilidad económica.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Elabora estrategias integradas para mejorar la competitividad, sostenibilidad y cuidado del medio ambiente en la organización, mediante el desarrollo de procedimientos operacionales que optimicen costos, aumenten las utilidades y minimicen el impacto ambiental.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Vigente (16 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Administración por Procesos</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Gerencia de Producción</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Fundamentos de Mercadeo</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Investigación de Mercados</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Gerencia Financiera</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Responsabilidad Social Empresarial</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Evaluación de Proyectos de Inversión</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Sistemas de Información Gerencial</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Liderazgo</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Inglés III</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Proyecto Empresarial</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Metodología de la Investigación</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Matemática Financiera</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Presupuestos</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Legislación Tributaria</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Gobierno Corporativo</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 4</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Investigación de Mercados y Estudios Aplicados</span>
            </div>
            <i class="fas fa-check-circle" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Vigente)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Diseñar investigaciones de mercado utilizando herramientas cuantitativas y cualitativas, con el objetivo de analizar las tendencias del entorno y formular decisiones comerciales estratégicas.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Estructura proyectos de investigación aplicada y estudios de mercado que aporten datos rigurosos para la formulación de planes comerciales e internacionales.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Vigente (6 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Investigación de Mercados</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Métodos Cuantitativos y Cualitativos</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Metodología de la Investigación</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Proyecto de Grado I</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Proyecto de Grado II</span><span class="subject-chip-item"><i class="fas fa-book" style="color:var(--orange);"></i> Entorno Económico Colombiano e Internacional</span>
                </div>
            </div>
        </div>
    </div>
    
        </div>

        <!-- SUB TAB 1.4: FLEXIBILIDAD VIGENTE -->
        <div class="tab-panel" id="c3-v-flex" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sustentación de la Flexibilidad Curricular del Plan Vigente (Sección 3.6.3)
            </h3>

            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card" style="border-top:4px solid var(--orange);">
                    <h4><i class="fas fa-cubes" style="color:var(--orange);"></i> 1. Bolsa de Electividad Disciplinar y Humanística</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        El plan vigente contemplaba 10 créditos electivos divididos en:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Electivas de Profundización I, II y III (6 cr):</strong> Marketing Digital, Prevención y Control de Riesgos, Finanzas Corporativas.</li>
                        <li>• <strong>Electivas Humanísticas I y II (4 cr):</strong> Ética y Ciudadanía, Diversidad e Inclusión Social.</li>
                    </ul>
                </div>

                <div class="card" style="border-top:4px solid var(--carbon);">
                    <h4><i class="fas fa-graduation-cap" style="color:var(--carbon);"></i> 2. Flexibilidad en Opciones de Graduación</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Conforme al Reglamento de Opciones de Grado institucional (Anexo 8):
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• Desarrollo de Proyecto de Investigación Formativa (Proyecto de Grado I y II).</li>
                        <li>• Práctica Profesional en Organizaciones Aliadas.</li>
                        <li>• Seminario Especializado de Profundización Posgradual.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- SUB TAB 1.5: EVALUACIÓN VIGENTE -->
        <div class="tab-panel" id="c3-v-eval" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sistema Institucional de Evaluación del Aprendizaje (Plan Vigente)
            </h3>

            <div class="grid-3" style="margin-bottom:20px;">
                <div class="card" style="border-top:4px solid var(--orange);">
                    <h4><i class="fas fa-percentage" style="color:var(--orange);"></i> 3 Cortes Evaluativos Sumativos</h4>
                    <p style="font-size:0.83rem;">• Primer Corte: 30%<br>• Segundo Corte: 30%<br>• Tercer Corte Final: 40%</p>
                </div>
                <div class="card" style="border-top:4px solid var(--carbon);">
                    <h4><i class="fas fa-sliders-h" style="color:var(--carbon);"></i> Escala Cuantitativa</h4>
                    <p style="font-size:0.83rem;">Calificación de 0.0 a 5.0.<br>Nota mínima de aprobación: <strong>3.0</strong>.</p>
                </div>
                <div class="card" style="border-top:4px solid #059669;">
                    <h4><i class="fas fa-users-cog" style="color:#059669;"></i> Triada de Agentes Evaluadores</h4>
                    <p style="font-size:0.83rem;">Integración activa de Heteroevaluación, Coevaluación y Autoevaluación en cada asignatura.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- =========================================================
     MAIN TAB 2: PLAN DE ESTUDIOS PROPUESTO (144 CRÉDITOS)
     ========================================================= -->
<div class="tab-panel" id="c3-main-propuesto" style="display:none;">
    <div class="tabs-container" id="c3PropuestoSubTabs">
        <div class="tabs-nav">
            <button class="tab-btn active" data-tab="c3-p-malla" onclick="switchTab('c3PropuestoSubTabs','c3-p-malla')">
                <i class="fas fa-th"></i> Malla Curricular (48 Asignaturas)
            </button>
            <button class="tab-btn" data-tab="c3-p-perfiles" onclick="switchTab('c3PropuestoSubTabs','c3-p-perfiles')">
                <i class="fas fa-star"></i> Perfiles y RAPs (Tabla 35)
            </button>
            <button class="tab-btn" data-tab="c3-p-flex" onclick="switchTab('c3PropuestoSubTabs','c3-p-flex')">
                <i class="fas fa-arrows-alt"></i> Flexibilidad en 4 Dimensiones
            </button>
            <button class="tab-btn" data-tab="c3-p-eval" onclick="switchTab('c3PropuestoSubTabs','c3-p-eval')">
                <i class="fas fa-clipboard-check"></i> Evaluación RAPs (Dec. 1330)
            </button>
        </div>

        <!-- SUB TAB 2.1: MALLA PROPUESTA INTERACTIVA -->
        <div class="tab-panel active" id="c3-p-malla" style="display:block;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                Malla Curricular del Plan de Estudios Propuesto (144 Créditos · 8 Semestres)
            </h3>
            <p style="color:var(--gray-text); font-size:0.82rem; margin-bottom:16px;">
                Plan modernizado en 8 semestres y 48 asignaturas (3 créditos c/u), con incorporación de Big Data, Inteligencia Artificial y Laboratorio de Innovación. Haga clic en cualquier asignatura para ver sus RAs y temas completos.
            </p>

            <div class="metric-row">
                <div class="metric-card"><div class="metric-val">144</div><div class="metric-lbl">Créditos Totales</div></div>
                <div class="metric-card"><div class="metric-val">8</div><div class="metric-lbl">Semestres</div></div>
                <div class="metric-card"><div class="metric-val">48</div><div class="metric-lbl">Asignaturas</div></div>
                <div class="metric-card"><div class="metric-val">2.304h</div><div class="metric-lbl">Horas Directas Presencial</div></div>
                <div class="metric-card"><div class="metric-val">1.728h</div><div class="metric-lbl">Horas Mediadas Virtual</div></div>
            </div>

            <!-- View Mode Switcher Bar -->
            <div class="view-toggle-bar">
                <button class="view-toggle-btn active" id="c3-pmalla-btn-grid" onclick="toggleMallaView('c3-pmalla','grid')">
                    <i class="fas fa-th-large"></i> Vista Cuadrícula de Semestres (Interactiva)
                </button>
            </div>

            <!-- Grid View (Interactive) -->
            <div id="c3-pmalla-grid-view" style="display:block;">
                <div class="malla-interactive-grid">
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 1</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_1', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Álgebra Lineal</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_2', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Comunicación Oral y Escrita</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_3', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Cátedra de la Paz y Resolución de Conflictos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_4', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos de Administración</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_5', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos Contables y Financieros</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_6', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Fundamentos de mercadeo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 2</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_7', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Cálculo Diferencial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_8', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Estadística Descriptiva</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_9', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés I</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_10', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Microeconomía</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_11', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Legislación Comercial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_12', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Costos y Presupuestos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 3</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_13', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Estadística Inferencial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_14', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés II</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_15', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Macroeconomía</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_16', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Análisis Financiero</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_17', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Procesos Administrativos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_18', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Teoría Organizacional</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 4</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_19', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Competencias Investigativas</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_20', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inglés III</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_21', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Investigación de Mercados</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_22', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Matemática Financiera</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_23', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Economía Colombiana e Internacional</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_24', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Derecho Laboral y Seguridad Social</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 5</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_25', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia del Talento Humano</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_26', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Administración Financiera</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_27', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gestión de Operaciones</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_28', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Sistemas Integrados de Gestión (HSEQ)</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_29', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Negocios y Gerencia Internacional</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_30', 'prop')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Profesional I</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 6</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_31', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Big Data y Analítica de Datos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_32', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Métodos Cualitativos y Cuantitativos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_33', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de Marketing</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_34', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Legislación Tributaria</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_35', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Modelos de emprendimiento</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_36', 'prop')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Profesional II</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 7</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_37', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Pensamiento Estratégico y Prospectivo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_38', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Formulación y Evaluación de Proyectos</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_39', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de Ventas y Canales de Distribución</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_40', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de Producción</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_41', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">E-comerce</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_42', 'prop')">
                <span class="subject-area-pill area-electiva">ELECTIVA</span>
                <h4 class="subject-card-name">Electiva Profesional III</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div>
    <div class="malla-semestre-card">
        <div class="malla-semestre-header">
            <span class="malla-semestre-title"><i class="fas fa-rocket" style="color:var(--orange); margin-right:6px;"></i> SEMESTRE 8</span>
            <span class="malla-semestre-badge">18 CR · 864h</span>
        </div>
        <div class="malla-semestre-body">
    
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_43', 'prop')">
                <span class="subject-area-pill area-transversal">TRANSVERSAL</span>
                <h4 class="subject-card-name">Inteligencia artificial</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_44', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Laboratorio de Innovación y Emprendimiento</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_45', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Juego Gerencial (Simulación de Negocios)</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_46', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Habilidades gerenciales y liderazgo</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_47', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Gerencia de  Calidad</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (TP)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        
            <div class="subject-interactive-card" onclick="openSubjectModal('prop_48', 'prop')">
                <span class="subject-area-pill area-disciplinar">DISCIPLINAR</span>
                <h4 class="subject-card-name">Proyecto de Grado</h4>
                <div class="subject-card-meta">
                    <span class="subject-cr-tag"><i class="fas fa-award"></i> 3 Créditos (T)</span>
                    <span class="subject-hours-tag"><i class="fas fa-clock"></i> 48h / 96h</span>
                </div>
            </div>
        </div></div></div>
            </div>
        </div>

        <!-- SUB TAB 2.2: PERFILES Y RAPS PROPUESTO (TABLA 35 OFICIAL) -->
        <div class="tab-panel" id="c3-p-perfiles" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Tabla 35. Matriz de Resultados de Aprendizaje del Plan Propuesto (10 RAPs)
            </h3>

            
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 1</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Estrategia y Gestión Organizacional</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Gestiona estratégica y éticamente las organizaciones, articulando los recursos humanos, financieros y tecnológicos para el logro de los objetivos institucionales.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Diseña e implementa estrategias organizacionales que optimizan los recursos y fortalecen la competitividad empresarial.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (6 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Fundamentos de Administración</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Procesos Administrativos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Teoría Organizacional</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Juego Gerencial</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Proyecto de Grado</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 2</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Análisis Financiero y Sostenibilidad Económica</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Analiza información financiera, económica y contable para la toma de decisiones en contextos locales y globales.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (6 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Análisis Financiero</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Administración Financiera</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Costos y Presupuestos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Matemática Financiera</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Legislación Tributaria</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 3</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Liderazgo y Gestión Humana</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Dirige el talento humano con liderazgo participativo, promoviendo la innovación, la cultura organizacional y el bienestar laboral.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Diseña políticas y estrategias de gestión humana que potencian la productividad y el desarrollo del personal.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (4 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gerencia del Talento Humano</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Habilidades Gerenciales y Liderazgo</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Cátedra de la Paz y Resolución de Conflictos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Comunicación Oral y Escrita</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 4</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Emprendimiento e Innovación Sostenible</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Formula y gestiona proyectos empresariales innovadores, sostenibles y socialmente responsables.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Evalúa y ejecuta proyectos de emprendimiento y sostenibilidad que generen impacto económico y social.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (5 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Modelos de Emprendimiento</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Laboratorio de Innovación y Emprendimiento</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Formulación y Evaluación de Proyectos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Economía Colombiana e Internacional</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Proyecto de Grado</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 5</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Mercadeo Estratégico y Canales Digitales</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Desarrolla estrategias de marketing y comunicación enfocadas en la satisfacción del cliente, la competitividad y la sostenibilidad.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (6 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Fundamentos de Mercadeo</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gerencia de Marketing</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Investigación de Mercados</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gerencia de Ventas y Canales de Distribución</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> E-Commerce</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Marketing Verde (Electiva)</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 6</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Analítica de Datos e Inteligencia Artificial</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Aplica herramientas tecnológicas, digitales y analíticas para la optimización de procesos y la toma de decisiones estratégicas.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Integra tecnologías de información, analítica de datos e inteligencia artificial en la gestión administrativa.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (4 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Big Data y Analítica de Datos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Inteligencia Artificial</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Sistemas Integrados de Gestión (HSEQ)</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Transformación Digital (Electiva)</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 7</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Sostenibilidad y Economía Circular</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Promueve la sostenibilidad y la responsabilidad social como ejes de la gestión empresarial.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Implementa prácticas de sostenibilidad, economía circular y responsabilidad social en la organización.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (4 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Desarrollo Sostenible y Economía Circular (Electiva)</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gerencia de la Calidad</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Ética y Gobernanza Corporativa (Electiva)</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Finanzas Sostenibles (Electiva)</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 8</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Gestión de Operaciones y Calidad</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Gestiona procesos operativos y de calidad con enfoque de mejora continua y eficiencia organizacional.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Diseña e implementa sistemas integrados de gestión orientados a la calidad, productividad y sostenibilidad.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (4 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gestión de Operaciones</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gerencia de Producción</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Sistemas Integrados de Gestión (HSEQ)</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Gerencia de la Calidad</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 9</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Investigación Aplicada e Innovación</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Aplica la investigación y el análisis crítico para la solución de problemas organizacionales y el mejoramiento continuo.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Diseña e implementa proyectos de investigación aplicada que aporten a la innovación y competitividad empresarial.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (3 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Competencias Investigativas</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Métodos Cualitativos y Cuantitativos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Proyecto de Grado</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="rap-card-item">
        <div class="rap-card-header">
            <div>
                <span class="rap-card-num">RAP 10</span>
                <span style="font-family:var(--font-heading); font-weight:800; font-size:1rem; margin-left:10px;">Ética, Gobernanza y Responsabilidad Social</span>
            </div>
            <i class="fas fa-star" style="color:var(--orange); font-size:1.2rem;"></i>
        </div>
        <div class="rap-card-body">
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-user-graduate"></i> Competencia del Egresado (Plan Propuesto)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#F8FAFC; padding:12px; border-radius:8px; border-left:3px solid #0284C7; margin:0;">
                    Actúa con ética, responsabilidad y compromiso social en el ejercicio profesional.
                </p>
            </div>
            <div style="margin-bottom:14px;">
                <div class="rap-section-label"><i class="fas fa-bullseye"></i> Resultado de Aprendizaje del Programa (RAP)</div>
                <p style="font-size:0.85rem; color:var(--carbon); background:#FFFDF9; padding:12px; border-radius:8px; border-left:3px solid var(--orange); margin:0;">
                    Toma decisiones con base en principios éticos, legales y de responsabilidad social empresarial.
                </p>
            </div>
            <div>
                <div class="rap-section-label"><i class="fas fa-layer-group"></i> Asignaturas Asociadas del Plan Propuesto (4 asignaturas)</div>
                <div class="subject-chip-grid">
                    <span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Cátedra de la Paz y Resolución de Conflictos</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Legislación Comercial</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Derecho Laboral y Seguridad Social</span><span class="subject-chip-item"><i class="fas fa-rocket" style="color:var(--orange);"></i> Electiva de Diversidad e Inclusión</span>
                </div>
            </div>
        </div>
    </div>
    
        </div>

        <!-- SUB TAB 2.3: FLEXIBILIDAD PROPUESTA (4 DIMENSIONES) -->
        <div class="tab-panel" id="c3-p-flex" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sustentación de la Flexibilidad Curricular en el Plan Propuesto (4 Dimensiones)
            </h3>

            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card" style="border-top:4px solid var(--orange);">
                    <h4><i class="fas fa-cubes" style="color:var(--orange);"></i> 1. Flexibilidad Curricular y Electividad de Profundización</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        El programa dispone de un banco de electivas en semestres 5, 6 y 7 (9 créditos de 3cr c/u), estructurado en líneas avanzadas de actualización tecnológica:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Línea de Transformación Digital & IA:</strong> Inteligencia Artificial Aplicada a Negocios, Analítica Avanzada, Marketing Digital.</li>
                        <li>• <strong>Línea de Sostenibilidad & Economía Circular:</strong> Finanzas Sostenibles, Gerencia Ambiental y Economía Circular.</li>
                        <li>• <strong>Línea de Gobernanza & Ética:</strong> Ética y Gobernanza Corporativa, Gestión de la Diversidad e Inclusión.</li>
                    </ul>
                </div>

                <div class="card" style="border-top:4px solid var(--carbon);">
                    <h4><i class="fas fa-chalkboard-teacher" style="color:var(--carbon);"></i> 2. Flexibilidad Pedagógica y Didáctica Mediada</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Estrategias activas adaptadas a las necesidades del estudiante profesional:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Aulas Virtuales Interactivas:</strong> Campus LMS Moodle intuitivo con laboratorios virtuales y simuladores empresariales 24/7.</li>
                        <li>• <strong>Acceso Asincrónico y Sincrónico:</strong> Flexibilidad horaria para trabajadores y estudiantes de regiones alejadas.</li>
                        <li>• <strong>Aprendizaje Basado en Retos:</strong> Casos reales de empresas de Tocancipá y Sabana Centro.</li>
                    </ul>
                </div>
            </div>

            <div class="grid-2">
                <div class="card" style="border-top:4px solid #0284C7;">
                    <h4><i class="fas fa-random" style="color:#0284C7;"></i> 3. Flexibilidad Administrativa y Transitabilidad en Registro Único</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Mecanismos institucionales de movilidad interna:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Transitabilidad de Modalidad:</strong> Estudiantes de modalidad Presencial pueden cursar asignaturas virtuales y viceversa dentro del Registro Único.</li>
                        <li>• <strong>Movilidad Inter-semestral:</strong> Sistema simplificado de requisitos para avanzar al ritmo del estudiante.</li>
                        <li>• <strong>Homologaciones y Transferencias:</strong> Régimen automatizado de reconocimiento de saberes y transferencia de créditos.</li>
                    </ul>
                </div>

                <div class="card" style="border-top:4px solid #059669;">
                    <h4><i class="fas fa-globe-americas" style="color:#059669;"></i> 4. Flexibilidad e Internacionalización del Currículo</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Dimensión internacional integrada en la experiencia formativa:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Clases Espejo Internacionales:</strong> Convenios activos con universidades de México, Perú y Chile.</li>
                        <li>• <strong>Plan de Bilingüismo (Inglés I, II y III):</strong> Alineado al estándar MCER (Nivel B1) con contenidos de negocios.</li>
                        <li>• <strong>Conferencias Magistrales Internacionales:</strong> Docentes y consultores internacionales invitados a aulas virtuales.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- SUB TAB 2.4: EVALUACIÓN PROPUESTA -->
        <div class="tab-panel" id="c3-p-eval" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sistema de Evaluación de Resultados de Aprendizaje (Decreto 1330 de 2019)
            </h3>

            <div class="card-accent" style="margin-bottom:20px;">
                <h4><i class="fas fa-balance-scale"></i> Marco Normativo e Integración en la CETO</h4>
                <p style="font-size:0.85rem; color:rgba(255,255,255,0.85); margin-top:6px; line-height:1.6;">
                    El programa asume los Resultados de Aprendizaje (RA) en cumplimiento del Decreto 1330 de 2019 y los acuerdos del Men, estructurando el aprendizaje como la manifestación verificable de lo que el estudiante conoce, comprende y puede ejecutar al culminar su formación.
                </p>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-sitemap" style="color:var(--orange); margin-right:6px;"></i> Fundamento en Taxonomía de Bloom (Revisada) y los 3 Planos del Aprendizaje
            </h4>
            <div class="grid-3" style="margin-bottom:24px;">
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-brain"></i> 1. Plano Cognitivo</h4>
                    <p style="font-size:0.82rem;">Niveles: Conocimiento, Comprensión, Aplicación, Análisis, Síntesis y Evaluación de modelos empresariales.</p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-heart"></i> 2. Plano Subjetivo (Afectivo)</h4>
                    <p style="font-size:0.82rem;">Niveles: Disposición, Reacción, Valoración ética, Organización de valores y Caracterización del perfil profesional.</p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-hands"></i> 3. Plano Psicomotor</h4>
                    <p style="font-size:0.82rem;">Niveles: Imitación, Manipulación de software/LMS, Precisión, Articulación y Naturalización de habilidades gerenciales.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- =========================================================
     MAIN TAB 3: COMPARACIÓN Y JUSTIFICACIÓN DE LA REESTRUCTURACIÓN
     ========================================================= -->
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
    window.switchTab('c3MainTabsGroup', 'c3-main-vigente');
    window.switchTab('c3VigenteSubTabs', 'c3-v-malla');
    window.switchTab('c3PropuestoSubTabs', 'c3-p-malla');
};
