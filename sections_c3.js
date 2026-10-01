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

window.openSubjectModal = function(id) {
    const s = window.C3_SUBJECTS.find(item => item.id === id);
    if (!s) return;

    let existing = document.getElementById('c3SubjectModalOverlay');
    if (existing) existing.remove();

    const rasHtml = s.ras.map(r => `<li style="margin-bottom:6px; padding-left:10px; border-left:3px solid var(--orange); font-size:0.84rem;">${r}</li>`).join('');
    const temasHtml = s.temas.map(t => `<li style="margin-bottom:4px; font-size:0.84rem; color:var(--carbon);"><i class="fas fa-check-circle" style="color:var(--orange); margin-right:6px;"></i>${t}</li>`).join('');

    const pd_cr = Math.floor(s.presencial.directa / s.creditos);
    const pi_cr = Math.floor(s.presencial.independiente / s.creditos);
    const vm_cr = Math.floor(s.virtual.mediado / s.creditos);
    const vi_cr = Math.floor(s.virtual.independiente / s.creditos);

    const modalHtml = `
    <div class="c3-modal-overlay" id="c3SubjectModalOverlay" onclick="if(event.target===this) closeSubjectModal()">
        <div class="c3-modal-card">
            <div class="c3-modal-header">
                <div>
                    <span class="badge-presencial" style="margin-right:6px;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                    <span class="badge-virtual" style="margin-right:6px;"><i class="fas fa-layer-group"></i> ${s.area}</span>
                    <span style="background:rgba(255,255,255,0.2); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.7rem; font-weight:700;">${s.creditos} Créditos (Tipo ${s.tipo})</span>
                    <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:#fff; margin-top:8px;">${s.nombre}</h3>
                </div>
                <button class="c3-modal-close" onclick="closeSubjectModal()"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="c3-modal-body">
                <div class="c3-modal-section">
                    <div class="c3-modal-section-title"><i class="fas fa-clock"></i> Distribución de Horas por Modalidad (144h por Crédito)</div>
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
                <i class="fas fa-th"></i> Malla Curricular (Tabla 10 Oficial)
            </button>
            <button class="tab-btn" data-tab="c3-v-areas" onclick="switchTab('c3VigenteSubTabs','c3-v-areas')">
                <i class="fas fa-layer-group"></i> Áreas (Tabla 9 Oficial)
            </button>
            <button class="tab-btn" data-tab="c3-v-perfiles" onclick="switchTab('c3VigenteSubTabs','c3-v-perfiles')">
                <i class="fas fa-user-check"></i> Perfiles y RAPs (Anexo 1 Oficial)
            </button>
            <button class="tab-btn" data-tab="c3-v-flex" onclick="switchTab('c3VigenteSubTabs','c3-v-flex')">
                <i class="fas fa-arrows-alt"></i> Flexibilidad (Sec 3.6.3)
            </button>
            <button class="tab-btn" data-tab="c3-v-eval" onclick="switchTab('c3VigenteSubTabs','c3-v-eval')">
                <i class="fas fa-clipboard-check"></i> Evaluación RA e Institucional
            </button>
        </div>

        <!-- SUB TAB 1.1: MALLA VIGENTE (TABLA 10 OFICIAL) -->
        <div class="tab-panel active" id="c3-v-malla" style="display:block;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                Tabla 10. Distribución de Créditos en el Plan de Estudios por Semestre (Plan Vigente)
            </h3>
            <p style="color:var(--gray-text); font-size:0.82rem; margin-bottom:16px;">
                Estructura oficial del plan de estudios registrado ante SACES con 9 semestres, 158 créditos (148 obligatorios + 10 electivos) y 7.584 horas totales.
            </p>

            <div class="metric-row">
                <div class="metric-card"><div class="metric-val">158</div><div class="metric-lbl">Créditos Totales</div></div>
                <div class="metric-card"><div class="metric-val">9</div><div class="metric-lbl">Semestres</div></div>
                <div class="metric-card"><div class="metric-val">1.896h</div><div class="metric-lbl">Horas Directas / Mediadas</div></div>
                <div class="metric-card"><div class="metric-val">5.688h</div><div class="metric-lbl">Horas Trabajo Indep.</div></div>
            </div>

            <!-- Precision of Hours by Modality -->
            <div class="grid-2" style="margin:20px 0;">
                <div class="card-accent" style="background:#0F172A; border-bottom:4px solid #0284C7;">
                    <h4><i class="fas fa-university" style="color:#38BDF8;"></i> Precisión Horas - Modalidad Presencial (Vigente)</h4>
                    <p style="font-size:0.82rem; color:#94A3B8; margin-top:4px;">
                        • <strong>Horas Docencia Directa:</strong> 36 horas por crédito (o 24h para asignaturas de 2cr). Total: 1.896 horas en campus.<br>
                        • <strong>Horas Trabajo Independiente:</strong> 108 horas por crédito (o 72h para asignaturas de 2cr). Total: 5.688 horas autónomas.<br>
                        • <strong>Total Carga Horaria:</strong> 7.584 horas efectivas (144h por crédito).
                    </p>
                </div>
                <div class="card-accent" style="background:#064E3B; border-bottom:4px solid #10B981;">
                    <h4><i class="fas fa-laptop" style="color:#34D399;"></i> Precisión Horas - Modalidad Virtual (Vigente)</h4>
                    <p style="font-size:0.82rem; color:#A7F3D0; margin-top:4px;">
                        • <strong>Horas Trabajo Mediado TIC:</strong> 36 horas por crédito (o 24h) en plataforma LMS Moodle y tutorías sincrónicas.<br>
                        • <strong>Horas Trabajo Independiente:</strong> 108 horas por crédito (o 72h) de trabajo autónomo guiado.<br>
                        • <strong>Total Carga Horaria:</strong> 7.584 horas equivalentes en Registro Único.
                    </p>
                </div>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                Desglose Completo de Asignaturas por Semestre (Tabla 10 Oficial)
            </h4>

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

                    <!-- SEMESTRE 2 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE II (17 Créditos · 816 Horas Totales)</strong></td></tr>
                    <tr><td>2</td><td>Cálculo</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>2</td><td>Legislación Laboral</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>2</td><td>Teoría Organizacional</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>2</td><td>Costos</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>2</td><td>Metodología de la Investigación</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>2</td><td>Microeconomía</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>2</td><td>Inglés II</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <!-- SEMESTRE 3 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE III (17 Créditos · 816 Horas Totales)</strong></td></tr>
                    <tr><td>3</td><td>Estadística Descriptiva</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>3</td><td>Derecho Administrativo</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>3</td><td>Administración por Procesos</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>3</td><td>Electiva Profundización I</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>3</td><td>Cultura Emprendedora</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>3</td><td>Macroeconomía</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>3</td><td>Inglés III</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <!-- SEMESTRE 4 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE IV (18 Créditos · 864 Horas Totales)</strong></td></tr>
                    <tr><td>4</td><td>Estadística Inferencial</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>4</td><td>Legislación Tributaria</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>4</td><td>Electiva Humanística I</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>4</td><td>Liderazgo</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>4</td><td>Creatividad e Innovación</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>4</td><td>Entorno Económico Colombiano e Internacional</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>4</td><td>Inglés IV</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <!-- SEMESTRE 5 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE V (18 Créditos · 864 Horas Totales)</strong></td></tr>
                    <tr><td>5</td><td>Matemática Financiera</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>5</td><td>Investigación de Operaciones</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>5</td><td>Fundamentos de Mercadeo</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>5</td><td>Modelos de Desarrollo Económico</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>5</td><td>Administración de Salarios</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>5</td><td>Electiva Profundización II</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>5</td><td>Inglés V</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <!-- SEMESTRE 6 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE VI (18 Créditos · 864 Horas Totales)</strong></td></tr>
                    <tr><td>6</td><td>Legislación Comercial</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>6</td><td>Gerencia de Mercadeo</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>6</td><td>E-Commerce</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>6</td><td>Tecnología e Innovación</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>6</td><td>Métodos Cuantitativos y Cualitativos</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>6</td><td>Electiva Humanística II</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>6</td><td>Inglés VI</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <!-- SEMESTRE 7 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE VII (18 Créditos · 864 Horas Totales)</strong></td></tr>
                    <tr><td>7</td><td>Fundamentos de Administración Pública</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>7</td><td>Gestión de la Calidad</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>7</td><td>Presupuesto</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>7</td><td>Gerencia de Talento Humano</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>7</td><td>Proyecto Empresarial</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>7</td><td>Electiva Profundización III</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>7</td><td>Sistema de Información Gerencial</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>

                    <!-- SEMESTRE 8 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE VIII (16 Créditos · 768 Horas Totales)</strong></td></tr>
                    <tr><td>8</td><td>Habilidades Gerenciales</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>8</td><td>Gerencia de Producción</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>8</td><td>Investigación de Mercados</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>8</td><td>Gerencia Financiera</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>8</td><td>Deontología</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>8</td><td>Proyecto de Grado I</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <!-- SEMESTRE 9 -->
                    <tr class="row-accent"><td colspan="7"><strong>SEMESTRE IX (18 Créditos · 864 Horas Totales)</strong></td></tr>
                    <tr><td>9</td><td>Planeación y Prospectiva</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>9</td><td>Gerencia del Servicio</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>9</td><td>Evaluación de Proyectos de Inversión</td><td>T</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>9</td><td>Responsabilidad Social Empresarial</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>9</td><td>Gobierno Corporativo</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>
                    <tr><td>9</td><td>Distribución Física y Logística</td><td>TP</td><td>3</td><td>36h</td><td>108h</td><td>144h</td></tr>
                    <tr><td>9</td><td>Proyecto de Grado II</td><td>T</td><td>2</td><td>24h</td><td>72h</td><td>96h</td></tr>

                    <tr style="background:var(--carbon); color:#fff;">
                        <td colspan="3" style="color:#fff; font-weight:800;">TOTAL PROGRAMA VIGENTE</td>
                        <td style="color:#fff; font-weight:800;">158 cr</td>
                        <td style="color:#fff; font-weight:800;">1.896h</td>
                        <td style="color:#fff; font-weight:800;">5.688h</td>
                        <td style="color:#fff; font-weight:800;">7.584 Horas</td>
                    </tr>
                </tbody>
            </table>

            <div class="evidence-box" style="margin-top:20px;">
                <i class="fas fa-file-pdf"></i>
                <strong>Soporte Oficial:</strong> Anexo 5. Documento Maestro Administración de Empresas_RU inicial (Tabla 10).
            </div>
        </div>

        <!-- SUB TAB 1.2: ÁREAS VIGENTE (TABLA 9 OFICIAL) -->
        <div class="tab-panel" id="c3-v-areas" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Tabla 9. Distribución de Créditos y Asignaturas por Área de Formación (Plan Vigente)
            </h3>

            <div style="margin-bottom:20px;">
                <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--orange-dark); margin-bottom:8px;">
                    1. Área de Formación Transversal (17 Asignaturas · 41 Créditos · 1.968 Horas Totales)
                </h4>
                <p style="font-size:0.83rem; color:var(--gray-text); margin-bottom:10px;">
                    Conjunto de asignaturas que desarrollan competencias genéricas en habilidades comunicativas, razonamiento cuantitativo, ética, liderazgo e idioma extranjero:
                </p>
                <table class="tbl">
                    <thead><tr><th>Asignatura</th><th>Obligatoria/Electiva</th><th>Créditos</th><th>H. Directas / Mediadas</th><th>H. Independientes</th></tr></thead>
                    <tbody>
                        <tr><td>Matemáticas Básicas</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Constitución y Democracia</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Expresión Oral y Escrita</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Inglés I</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Cálculo</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Legislación Laboral</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Inglés II</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Estadística Descriptiva</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Derecho Administrativo</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Inglés III</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Estadística Inferencial</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Legislación Tributaria</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Inglés IV</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Inglés V</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Legislación Comercial</td><td>Obligatoria</td><td>3</td><td>36h</td><td>108h</td></tr>
                        <tr><td>Inglés VI</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Fundamentos de Administración Pública</td><td>Obligatoria</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr style="background:var(--orange-light); font-weight:700;"><td colspan="2">SUBTOTAL ÁREA TRANSVERSAL</td><td>41 cr</td><td>492h</td><td>1.476h</td></tr>
                    </tbody>
                </table>
            </div>

            <div style="margin-bottom:20px;">
                <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--carbon); margin-bottom:8px;">
                    2. Área de Formación Disciplinar (36 Asignaturas · 107 Créditos · 5.136 Horas Totales)
                </h4>
                <p style="font-size:0.83rem; color:var(--gray-text); margin-bottom:10px;">
                    Asignaturas técnicas y específicas de la gestión empresarial, finanzas, economía, mercadeo, producción y estrategia:
                </p>
                <div style="max-height:350px; overflow-y:auto; border:1px solid var(--gray-100); border-radius:6px;">
                    <table class="tbl" style="margin:0;">
                        <thead><tr><th>Asignatura</th><th>Tipo</th><th>Créditos</th><th>H. Directas / Mediadas</th><th>H. Independientes</th></tr></thead>
                        <tbody>
                            <tr><td>Fundamentos de Administración</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Fundamentos Contables</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Fundamentos de Economía</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Teoría Organizacional</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Costos</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Metodología de la Investigación</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Microeconomía</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Administración por Procesos</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Macroeconomía</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Cultura Emprendedora</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Liderazgo</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Creatividad e Innovación</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Entorno Económico Colombiano e Internacional</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Matemática Financiera</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Investigación de Operaciones</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Fundamentos de Mercadeo</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Modelos de Desarrollo Económico</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Administración de Salarios</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Gerencia de Mercadeo</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>E-Commerce</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Tecnología e Innovación</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Métodos Cuantitativos y Cualitativos</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Gestión de la Calidad</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Presupuesto</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Gerencia de Talento Humano</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Proyecto Empresarial</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Sistema de Información Gerencial</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Habilidades Gerenciales</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Gerencia de Producción</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Investigación de Mercados</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Gerencia Financiera</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Deontología</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Proyecto de Grado I</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Planeación y Prospectiva</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Gerencia del Servicio</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Evaluación de Proyectos de Inversión</td><td>T</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Responsabilidad Social Empresarial</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Gobierno Corporativo</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr><td>Distribución Física y Logística</td><td>TP</td><td>3</td><td>36h</td><td>108h</td></tr>
                            <tr><td>Proyecto de Grado II</td><td>T</td><td>2</td><td>24h</td><td>72h</td></tr>
                            <tr style="background:var(--orange-light); font-weight:700;"><td colspan="2">SUBTOTAL ÁREA DISCIPLINAR</td><td>107 cr</td><td>1.284h</td><td>3.852h</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--carbon); margin-bottom:8px;">
                    3. Área Electiva (5 Asignaturas · 10 Créditos · 480 Horas Totales)
                </h4>
                <table class="tbl">
                    <thead><tr><th>Asignatura Electiva</th><th>Tipo</th><th>Créditos</th><th>H. Directas / Mediadas</th><th>H. Independientes</th></tr></thead>
                    <tbody>
                        <tr><td>Electiva I Profundización</td><td>Electiva</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Electiva I Humanística</td><td>Electiva</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Electiva II Profundización</td><td>Electiva</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Electiva II Humanística</td><td>Electiva</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr><td>Electiva III Profundización</td><td>Electiva</td><td>2</td><td>24h</td><td>72h</td></tr>
                        <tr style="background:var(--orange-light); font-weight:700;"><td colspan="2">SUBTOTAL ÁREA ELECTIVA</td><td>10 cr</td><td>120h</td><td>360h</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SUB TAB 1.3: PERFILES Y RAPS VIGENTE (ANEXO 1 OFICIAL) -->
        <div class="tab-panel" id="c3-v-perfiles" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Anexo 1. Matriz de Resultados de Aprendizaje y Competencias del Plan Vigente
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

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                Matriz Oficial de Resultados de Aprendizaje del Programa (Anexo 1)
            </h4>

            <table class="tbl">
                <thead>
                    <tr>
                        <th style="width:5%;">Nro.</th>
                        <th style="width:30%;">Competencias del Egresado / Graduado</th>
                        <th style="width:35%;">Resultado de Aprendizaje del Programa (RAP)</th>
                        <th style="width:30%;">Asignaturas Asociadas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="lb">1</td>
                        <td>Implementar procesos de innovación para optimizar productos, servicios y procesos, promoviendo soluciones creativas y estrategias de marketing innovadoras que generen valor, mejoren la competitividad y adapten la organización a las demandas del mercado globalizado.</td>
                        <td>Diseña procesos de innovación para optimizar productos, servicios y procesos, utilizando estrategias de marketing innovadoras basadas en un análisis crítico del contexto y alineadas a las demandas del mercado global.</td>
                        <td>Creatividad e Innovación • Cultura Emprendedora • Gerencia de Mercadeo • Tecnología e Innovación • E-Commerce • Inglés I • Fundamentos de Mercadeo • Modelo de Desarrollo Económico • Evaluación de Proyectos de Inversión • Fundamentos Contables.</td>
                    </tr>
                    <tr class="row-accent">
                        <td class="lb">2</td>
                        <td>Dirigir equipos de trabajo de manera eficaz, guiando a las personas con visión, ética y comunicación efectiva, tomando decisiones estratégicas en los procesos organizacionales para optimizar la productividad, competitividad y el desarrollo general de la empresa.</td>
                        <td>Formula estrategias de innovación tecnológica y sistemas de información gerencial que optimicen la productividad y competitividad de una organización, ajustando las soluciones con la planeación estratégica y las demandas del mercado global, mejorando la sostenibilidad, eficiencia y capacidad de respuesta organizacional, mientras fomenta el bienestar social y ambiental.</td>
                        <td>Gestión de la Calidad • Investigación de Mercados • E-Commerce • Planeación y Prospectiva • Sistemas de Información Gerencial • Inglés II • Habilidades Gerenciales • Distribución Física y Logística • Administración de Salarios • Gerencia del Talento Humano.</td>
                    </tr>
                    <tr>
                        <td class="lb">3</td>
                        <td>Deducir los principios de sostenibilidad y responsabilidad social en la toma de decisiones empresariales, estableciendo estrategias que fomenten la conservación del medio ambiente, la equidad social y la viabilidad económica.</td>
                        <td>Elabora estrategias integradas para mejorar la competitividad, sostenibilidad y cuidado del medio ambiente en la organización, mediante el desarrollo de procedimientos operacionales que optimicen costos, aumenten las utilidades y minimicen el impacto ambiental.</td>
                        <td>Administración de Procesos • Gerencia de Producción • Fundamentos de Mercadeo • Investigación de Mercados • Gerencia Financiera • Responsabilidad Social Empresarial • Evaluación de Proyectos de Inversión • Sistemas de Información Gerencial • Liderazgo • Inglés III • Proyecto Empresarial • Metodología de la Investigación • Matemática Financiera • Presupuestos • Legislación Tributaria • Gobierno Corporativo.</td>
                    </tr>
                    <tr class="row-accent">
                        <td class="lb">4</td>
                        <td>Diseñar investigaciones de mercado utilizando herramientas cuantitativas y cualitativas, con el objetivo de analizar las tendencias del entorno y formular decisiones comerciales estratégicas.</td>
                        <td>Estructura proyectos de investigación aplicada y estudios de mercado que aporten datos rigurosos para la formulación de planes comerciales e internacionales.</td>
                        <td>Investigación de Mercados • Métodos Cuantitativos y Cualitativos • Metodología de la Investigación • Proyecto de Grado I y II • Entorno Económico Colombiano e Internacional • Comercio Exterior.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- SUB TAB 1.4: FLEXIBILIDAD VIGENTE (SECCIÓN 3.6.3 COMPLETA) -->
        <div class="tab-panel" id="c3-v-flex" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sustentación de la Flexibilidad Curricular del Plan Vigente (Sección 3.6.3)
            </h3>

            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card">
                    <h4><i class="fas fa-cubes" style="color:var(--orange);"></i> 1. Bolsa de Electividad Disciplinar y Humanística</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        El plan vigente contemplaba 10 créditos electivos divididos en:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Electivas de Profundización I, II y III (6 cr):</strong> Marketing Digital, Prevención y Control de Riesgos, Finanzas Corporativas.</li>
                        <li>• <strong>Electivas Humanísticas I y II (4 cr):</strong> Ética y Ciudadanía, Diversidad e Inclusión Social.</li>
                    </ul>
                </div>

                <div class="card">
                    <h4><i class="fas fa-graduation-cap" style="color:var(--orange);"></i> 2. Flexibilidad en las Opciones de Graduación</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Conforme al Reglamento de Opciones de Grado institucional (Anexo 8), el estudiante podía optar por:
                    </p>
                    <ul style="font-size:0.82rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• Desarrollo de Proyecto de Investigación Formativa (Proyecto de Grado I y II).</li>
                        <li>• Práctica Profesional Empresarial supervisada.</li>
                        <li>• Plan de Negocio o Emprendimiento validado.</li>
                    </ul>
                </div>
            </div>

            <div class="card-accent" style="margin-bottom:20px;">
                <h4><i class="fas fa-exclamation-triangle"></i> Diagnóstico de Limitaciones que Motivaron la Renovación Curricular</h4>
                <p style="font-size:0.84rem; color:rgba(255,255,255,0.85); margin-top:6px; line-height:1.6;">
                    El análisis de autoevaluación reveló que la flexibilidad del plan vigente presentaba barreras: dispersión de materias de 2 créditos (dificultando homologaciones), rigidez en la secuenciación de semestres y la falta de una plataforma de tránsito formal entre las modalidades presencial y virtual dentro del registro único.
                </p>
            </div>
        </div>

        <!-- SUB TAB 1.5: EVALUACIÓN RA VIGENTE (SISTEMA E HETERO/CO/AUTO EVALUACIÓN) -->
        <div class="tab-panel" id="c3-v-eval" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Modelo Institucional de Evaluación del Plan Vigente
            </h3>

            <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:16px;">
                Estructura del modelo evaluativo institucional de la CETO basado en la evaluación continua, formativa y sumativa articulada en tres agentes principales:
            </p>

            <div class="grid-3" style="margin-bottom:24px;">
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-chalkboard-teacher"></i> 1. Heteroevaluación (70% - 80%)</h4>
                    <p style="font-size:0.82rem; color:var(--gray-text);">
                        Valoración realizada por el docente a través de parciales escritos, pruebas teóricoprácticas, análisis de casos y proyectos finales entregables.
                    </p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-users"></i> 2. Coevaluación (10% - 15%)</h4>
                    <p style="font-size:0.82rem; color:var(--gray-text);">
                        Evaluación entre pares donde los estudiantes valoran el desempeño colaborativo, aportes al grupo y la solución conjunta de casos en aula virtual o presencial.
                    </p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-user-edit"></i> 3. Autoevaluación (10% - 15%)</h4>
                    <p style="font-size:0.82rem; color:var(--gray-text);">
                        Reflexión autocrítica del estudiante sobre su compromiso, aprendizaje autónomo, cumplimiento de lecturas y alcance de competencias de la asignatura.
                    </p>
                </div>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                Estructura de Cortes Académicos y Puntajes Institucionales
            </h4>
            <table class="tbl">
                <thead>
                    <tr><th>Corte Académico</th><th>Porcentaje</th><th>Escala de Calificación</th><th>Criterio de Aprobación</th></tr>
                </thead>
                <tbody>
                    <tr><td class="lb">Corte I (Semanas 1 a 5)</td><td><strong>30%</strong></td><td>0.0 a 5.0</td><td>Nota acumulativa registrada en plataforma.</td></tr>
                    <tr class="row-accent"><td class="lb">Corte II (Semanas 6 a 10)</td><td><strong>30%</strong></td><td>0.0 a 5.0</td><td>Nota acumulativa registrada en plataforma.</td></tr>
                    <tr><td class="lb">Corte III (Semanas 11 a 16)</td><td><strong>40%</strong></td><td>0.0 a 5.0</td><td>Evaluación integradora final.</td></tr>
                    <tr style="background:var(--carbon); color:#fff;"><td style="color:#fff; font-weight:800;">NOTA DEFINITIVA ASIGNATURA</td><td style="color:#fff; font-weight:800;">100%</td><td style="color:#fff; font-weight:800;">0.0 a 5.0</td><td style="color:#fff; font-weight:800;">Aprobado con Nota ≥ 3.0</td></tr>
                </tbody>
            </table>
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
                <i class="fas fa-th"></i> Malla Curricular (Propuesta)
            </button>
            <button class="tab-btn" data-tab="c3-p-areas" onclick="switchTab('c3PropuestoSubTabs','c3-p-areas')">
                <i class="fas fa-layer-group"></i> Áreas y Modalidades
            </button>
            <button class="tab-btn" data-tab="c3-p-perfiles" onclick="switchTab('c3PropuestoSubTabs','c3-p-perfiles')">
                <i class="fas fa-bullseye"></i> Perfiles y RAPs (Tabla 35 Oficial)
            </button>
            <button class="tab-btn" data-tab="c3-p-flex" onclick="switchTab('c3PropuestoSubTabs','c3-p-flex')">
                <i class="fas fa-arrows-alt"></i> Flexibilidad (Extensa)
            </button>
            <button class="tab-btn" data-tab="c3-p-eval" onclick="switchTab('c3PropuestoSubTabs','c3-p-eval')">
                <i class="fas fa-clipboard-check"></i> Evaluación RA (Decreto 1330)
            </button>
        </div>

        <!-- SUB TAB 2.1: MALLA PROPUESTA (INTERACTIVA) -->
        <div class="tab-panel active" id="c3-p-malla" style="display:block;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:10px;">
                <div>
                    <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                        Plan de Estudios Ajustado · 144 Créditos · 8 Semestres · 48 Asignaturas
                    </h3>
                    <p style="color:var(--gray-text); font-size:0.82rem; margin:2px 0 0 0;">
                        <i class="fas fa-mouse-pointer" style="color:var(--orange);"></i> <strong>Haga clic en cualquier asignatura</strong> para desplegar su microcurrículo, perfiles, RAP, RAs y temas.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span class="badge-presencial"><i class="fas fa-university"></i> Presencial: 48h Directa / 96h Indep</span>
                    <span class="badge-virtual"><i class="fas fa-laptop"></i> Virtual: 36h Mediado / 108h Indep</span>
                </div>
            </div>

            <div class="metric-row">
                <div class="metric-card"><div class="metric-val">48</div><div class="metric-lbl">Asignaturas (3cr c/u)</div></div>
                <div class="metric-card"><div class="metric-val">144</div><div class="metric-lbl">Créditos Totales</div></div>
                <div class="metric-card"><div class="metric-val">8</div><div class="metric-lbl">Semestres</div></div>
                <div class="metric-card"><div class="metric-val">6.912</div><div class="metric-lbl">Horas Totales (144h/cr)</div></div>
            </div>

            <!-- Grid 8 Semestres Propuesto -->
            <div class="malla">
                <div class="sh">SEM 1</div><div class="sh">SEM 2</div><div class="sh">SEM 3</div><div class="sh">SEM 4</div><div class="sh">SEM 5</div><div class="sh">SEM 6</div><div class="sh">SEM 7</div><div class="sh">SEM 8</div>

                <!-- Row 1 -->
                <div class="mc clickable" onclick="openSubjectModal('prop_1')">Álgebra Lineal</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_7')">Cálculo Diferencial</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_13')">Estadística Inferencial</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_19')">Competencias Investigativas</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_25')">Gerencia del Talento Humano</div>
                <div class="mc clickable highlight" onclick="openSubjectModal('prop_31')">Big Data y Analítica de Datos</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_37')">Pensamiento Estratégico y Prospectivo</div>
                <div class="mc clickable highlight" onclick="openSubjectModal('prop_43')">Inteligencia Artificial</div>

                <!-- Row 2 -->
                <div class="mc clickable" onclick="openSubjectModal('prop_2')">Comunicación Oral y Escrita</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_8')">Estadística Descriptiva</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_14')">Inglés II</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_20')">Inglés III</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_26')">Administración Financiera</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_32')">Métodos Cualitativos y Cuantitativos</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_38')">Formulación y Eval. de Proyectos</div>
                <div class="mc clickable highlight" onclick="openSubjectModal('prop_44')">Lab. de Innovación y Emprendimiento</div>

                <!-- Row 3 -->
                <div class="mc clickable" onclick="openSubjectModal('prop_3')">Cátedra de la Paz y Conflictos</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_9')">Inglés I</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_15')">Análisis Financiero</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_21')">Investigación de Mercados</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_27')">Gestión de Operaciones</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_33')">Gerencia de Marketing</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_39')">Gerencia de Ventas y Canales</div>
                <div class="mc clickable highlight" onclick="openSubjectModal('prop_45')">Juego Gerencial (Simulación)</div>

                <!-- Row 4 -->
                <div class="mc clickable" onclick="openSubjectModal('prop_4')">Fundamentos de Administración</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_10')">Microeconomía</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_16')">Macroeconomía</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_22')">Matemática Financiera</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_28')">Sistemas Integrados (HSEQ)</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_34')">Legislación Tributaria</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_40')">Gerencia de Producción</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_46')">Habilidades Gerenciales y Liderazgo</div>

                <!-- Row 5 -->
                <div class="mc clickable" onclick="openSubjectModal('prop_5')">Fund. Contables y Financieros</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_11')">Legislación Comercial</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_17')">Procesos Administrativos</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_23')">Economía Col. e Internacional</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_29')">Negocios y Gerencia Int.</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_35')">Modelos de Emprendimiento</div>
                <div class="mc clickable highlight" onclick="openSubjectModal('prop_41')">E-Commerce</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_47')">Gerencia de Calidad</div>

                <!-- Row 6 -->
                <div class="mc clickable" onclick="openSubjectModal('prop_6')">Fundamentos de Mercadeo</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_12')">Costos y Presupuestos</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_18')">Teoría Organizacional</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_24')">Derecho Laboral y Seg. Social</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_30')">Electiva Profesional I</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_36')">Electiva Profesional II</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_42')">Electiva Profesional III</div>
                <div class="mc clickable" onclick="openSubjectModal('prop_48')">Proyecto de Grado</div>
            </div>

            <div style="margin-top:16px; display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
                <span style="display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--gray-text); font-weight:600;">
                    <span style="display:inline-block; width:14px; height:14px; background:var(--orange-light); border-left:3px solid var(--orange); border-radius:2px;"></span> Asignaturas de Transformación Digital / Innovación
                </span>
                <span style="display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--gray-text); font-weight:600;">
                    <i class="fas fa-hand-pointer" style="color:var(--orange);"></i> Haga clic en cualquier casilla para ver la ficha completa
                </span>
            </div>

            <div class="evidence-box" style="margin-top:20px;">
                <i class="fas fa-file-excel"></i>
                <strong>Soporte Oficial:</strong> Anexo 3. Malla curricular ajustada por modalidad (Excel) · Anexo 2. Documento Maestro Cap. 3 y 4 (SACES).
            </div>
        </div>

        <!-- SUB TAB 2.2: ÁREAS Y MODALIDADES -->
        <div class="tab-panel" id="c3-p-areas" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Distribución por Áreas de Formación (Plan Propuesto · 144 Créditos)
            </h3>
            <table class="tbl">
                <thead>
                    <tr><th>Área de Formación</th><th>Asignaturas</th><th>Créditos</th><th>% del Plan</th></tr>
                </thead>
                <tbody>
                    <tr class="row-accent"><td class="lb">Transversal</td><td>14 asignaturas</td><td>42</td><td>29.2%</td></tr>
                    <tr><td class="lb">Disciplinar</td><td>31 asignaturas</td><td>93</td><td>64.6%</td></tr>
                    <tr class="row-accent"><td class="lb">Electiva</td><td>3 asignaturas</td><td>9</td><td>6.2%</td></tr>
                    <tr style="background:var(--carbon); color:#fff;"><td style="color:#fff; font-weight:800;">TOTAL</td><td style="color:#fff;">48 asignaturas</td><td style="color:#fff;">144</td><td style="color:#fff;">100%</td></tr>
                </tbody>
            </table>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:28px 0 12px;">
                <i class="fas fa-clock" style="color:var(--orange); margin-right:6px;"></i> Diferenciación Explicita de Horas por Modalidad (Registro Único)
            </h4>
            <div class="grid-2">
                <div class="card-accent" style="background:#0F172A; border-bottom:4px solid #0284C7;">
                    <h4><i class="fas fa-university" style="color:#38BDF8; margin-right:6px;"></i> Modalidad Presencial</h4>
                    <p style="font-size:0.82rem; color:#94A3B8; margin-bottom:12px;">Acompañamiento directo en campus e instalaciones físicas.</p>
                    <table style="width:100%; font-size:0.82rem; color:#E2E8F0;">
                        <tr><td>Horas Docencia Directa (por crédito)</td><td style="text-align:right; font-weight:700; color:#38BDF8;">48h</td></tr>
                        <tr><td>Horas Trabajo Independiente (por crédito)</td><td style="text-align:right; font-weight:700;">96h</td></tr>
                        <tr style="border-top:1px solid rgba(255,255,255,0.15);"><td style="font-weight:800;">Total por crédito</td><td style="text-align:right; font-weight:800; color:var(--orange);">144h</td></tr>
                        <tr><td style="font-weight:800;">Total Asignatura (3 cr)</td><td style="text-align:right; font-weight:800;">144h (48h directas + 96h indep)</td></tr>
                        <tr style="border-top:1px solid rgba(255,255,255,0.15);"><td style="font-weight:800;">Total Programa (144 cr)</td><td style="text-align:right; font-weight:800; color:var(--orange);">6.912 Horas</td></tr>
                    </table>
                </div>

                <div class="card-accent" style="background:#064E3B; border-bottom:4px solid #10B981;">
                    <h4><i class="fas fa-laptop-house" style="color:#34D399; margin-right:6px;"></i> Modalidad Virtual</h4>
                    <p style="font-size:0.82rem; color:#A7F3D0; margin-bottom:12px;">Interacción mediada por TIC, LMS Moodle y encuentros sincrónicos/asincrónicos.</p>
                    <table style="width:100%; font-size:0.82rem; color:#ECFDF5;">
                        <tr><td>Horas Trabajo Mediado (por crédito)</td><td style="text-align:right; font-weight:700; color:#34D399;">36h</td></tr>
                        <tr><td>Horas Trabajo Independiente (por crédito)</td><td style="text-align:right; font-weight:700;">108h</td></tr>
                        <tr style="border-top:1px solid rgba(255,255,255,0.15);"><td style="font-weight:800;">Total por crédito</td><td style="text-align:right; font-weight:800; color:var(--orange);">144h</td></tr>
                        <tr><td style="font-weight:800;">Total Asignatura (3 cr)</td><td style="text-align:right; font-weight:800;">144h (36h mediadas + 108h indep)</td></tr>
                        <tr style="border-top:1px solid rgba(255,255,255,0.15);"><td style="font-weight:800;">Total Programa (144 cr)</td><td style="text-align:right; font-weight:800; color:var(--orange);">6.912 Horas</td></tr>
                    </table>
                </div>
            </div>
        </div>

        <!-- SUB TAB 2.3: PERFILES Y RAPS PROPUESTO (TABLA 35 OFICIAL REQUERIDA) -->
        <div class="tab-panel" id="c3-p-perfiles" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Tabla 35. Matriz de Resultados de Aprendizaje del Programa (Documento Maestro)
            </h3>
            <p style="color:var(--gray-text); font-size:0.83rem; margin-bottom:20px;">
                Articulación directa entre las Competencias del Egresado/Graduado, los Resultados de Aprendizaje del Programa (RAP) y las Asignaturas Asociadas del plan propuesto.
            </p>

            <table class="tbl">
                <thead>
                    <tr>
                        <th style="width:30%;">Competencias del Egresado / Graduado</th>
                        <th style="width:35%;">Resultado de Aprendizaje del Programa (RAP)</th>
                        <th style="width:35%;">Asignaturas Asociadas del Plan Propuesto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gestiona estratégica y éticamente las organizaciones, articulando los recursos humanos, financieros y tecnológicos para el logro de los objetivos institucionales.</td>
                        <td><strong>RAP 1:</strong> Diseña e implementa estrategias organizacionales que optimizan los recursos y fortalecen la competitividad empresarial.</td>
                        <td>Fundamentos de Administración • Procesos Administrativos • Teoría Organizacional • Pensamiento Estratégico y Prospectivo • Juego Gerencial • Proyecto de Grado</td>
                    </tr>
                    <tr class="row-accent">
                        <td>Analiza información financiera, económica y contable para la toma de decisiones en contextos locales y globales.</td>
                        <td><strong>RAP 2:</strong> Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles.</td>
                        <td>Fundamentos Contables y Financieros • Análisis Financiero • Administración Financiera • Costos y Presupuestos • Matemática Financiera • Legislación Tributaria</td>
                    </tr>
                    <tr>
                        <td>Dirige el talento humano con liderazgo participativo, promoviendo la innovación, la cultura organizacional y el bienestar laboral.</td>
                        <td><strong>RAP 3:</strong> Diseña políticas y estrategias de gestión humana que potencian la productividad y el desarrollo del personal.</td>
                        <td>Gerencia del Talento Humano • Habilidades Gerenciales y Liderazgo • Cátedra de la Paz y Resolución de Conflictos • Comunicación Oral y Escrita</td>
                    </tr>
                    <tr class="row-accent">
                        <td>Formula y gestiona proyectos empresariales innovadores, sostenibles y socialmente responsables.</td>
                        <td><strong>RAP 4:</strong> Evalúa y ejecuta proyectos de emprendimiento y sostenibilidad que generen impacto económico y social.</td>
                        <td>Modelos de Emprendimiento • Laboratorio de Innovación y Emprendimiento • Formulación y Evaluación de Proyectos • Economía Colombiana e Internacional • Proyecto de Grado</td>
                    </tr>
                    <tr>
                        <td>Desarrolla estrategias de marketing y comunicación enfocadas en la satisfacción del cliente, la competitividad y la sostenibilidad.</td>
                        <td><strong>RAP 5:</strong> Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible.</td>
                        <td>Fundamentos de Mercadeo • Gerencia de Marketing • Investigación de Mercados • Gerencia de Ventas y Canales de Distribución • E-Commerce • Marketing Verde (Electiva)</td>
                    </tr>
                    <tr class="row-accent">
                        <td>Aplica herramientas tecnológicas, digitales y analíticas para la optimización de procesos y la toma de decisiones estratégicas.</td>
                        <td><strong>RAP 6:</strong> Integra tecnologías de información, analítica de datos e inteligencia artificial en la gestión administrativa.</td>
                        <td>Big Data y Analítica de Datos • Inteligencia Artificial • Sistemas Integrados de Gestión (HSEQ) • Transformación Digital (Electiva)</td>
                    </tr>
                    <tr>
                        <td>Promueve la sostenibilidad y la responsabilidad social como ejes de la gestión empresarial.</td>
                        <td><strong>RAP 7:</strong> Implementa prácticas de sostenibilidad, economía circular y responsabilidad social en la organización.</td>
                        <td>Desarrollo Sostenible y Economía Circular (Electiva) • Gerencia de la Calidad • Ética y Gobernanza Corporativa (Electiva) • Finanzas Sostenibles (Electiva)</td>
                    </tr>
                    <tr class="row-accent">
                        <td>Gestiona procesos operativos y de calidad con enfoque de mejora continua y eficiencia organizacional.</td>
                        <td><strong>RAP 8:</strong> Diseña e implementa sistemas integrados de gestión orientados a la calidad, productividad y sostenibilidad.</td>
                        <td>Gestión de Operaciones • Gerencia de Producción • Sistemas Integrados de Gestión (HSEQ) • Gerencia de la Calidad</td>
                    </tr>
                    <tr>
                        <td>Aplica la investigación y el análisis crítico para la solución de problemas organizacionales y el mejoramiento continuo.</td>
                        <td><strong>RAP 9:</strong> Diseña e implementa proyectos de investigación aplicada que aporten a la innovación y competitividad empresarial.</td>
                        <td>Competencias Investigativas • Métodos Cualitativos y Cuantitativos • Proyecto de Grado</td>
                    </tr>
                    <tr class="row-accent">
                        <td>Actúa con ética, responsabilidad y compromiso social en el ejercicio profesional.</td>
                        <td><strong>RAP 10:</strong> Toma decisiones con base en principios éticos, legales y de responsabilidad social empresarial.</td>
                        <td>Cátedra de la Paz y Resolución de Conflictos • Legislación Comercial • Derecho Laboral y Seguridad Social • Electiva de Diversidad e Inclusión</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- SUB TAB 2.4: FLEXIBILIDAD PROPUESTA (COMPLETA EN 4 DIMENSIONES) -->
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

        <!-- SUB TAB 2.5: EVALUACIÓN RA PROPUESTA (DECRETO 1330 Y BLOOM) -->
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

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-star" style="color:var(--orange); margin-right:6px;"></i> Escala Socioformativa de Valoración del Logro del RA
            </h4>
            <table class="tbl" style="margin-bottom:24px;">
                <thead>
                    <tr><th>Rango de Nota</th><th>Nivel Socioformativo</th><th>Criterio y Evidencia del Resultado de Aprendizaje</th></tr>
                </thead>
                <tbody>
                    <tr><td class="lb">0.0 – 1.0</td><td><span style="color:#DC2626; font-weight:700;">Nivel Receptivo Inicial</span></td><td>El estudiante no alcanza los resultados de aprendizaje previstos. No aporta evidencias mínimas requeridas.</td></tr>
                    <tr><td class="lb">1.1 – 2.0</td><td><span style="color:#EA580C; font-weight:700;">Nivel Receptivo</span></td><td>Alcanza de manera muy limitada los RA. Requiere plan de nivelación pedagógica.</td></tr>
                    <tr><td class="lb">2.1 – 2.9</td><td><span style="color:#D97706; font-weight:700;">Nivel Resolutivo Básico</span></td><td>Alcanza algunos RA con vacíos en la argumentación o aplicación técnica.</td></tr>
                    <tr class="row-accent"><td class="lb">3.0 – 4.0</td><td><span style="color:#0284C7; font-weight:700;">Nivel Autónomo</span></td><td>Alcanza satisfactoriamente los resultados de aprendizaje demostrando idoneidad y capacidad resolutiva.</td></tr>
                    <tr class="row-accent"><td class="lb">4.1 – 4.5</td><td><span style="color:#059669; font-weight:700;">Nivel Estratégico</span></td><td>Alcanza óptimamente los RA con capacidad de análisis crítico y solución de retos organizacionales.</td></tr>
                    <tr class="row-accent"><td class="lb">4.6 – 5.0</td><td><span style="color:#7C3AED; font-weight:700;">Nivel Sobresaliente</span></td><td>Alcanza plenamente los RA demostrando innovación, liderazgo y excelencia en el desempeño.</td></tr>
                </tbody>
            </table>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-users-cog" style="color:var(--orange); margin-right:6px;"></i> Agentes Evaluadores: Heteroevaluación, Coevaluación y Autoevaluación
            </h4>
            <div class="grid-3">
                <div class="card">
                    <h4><i class="fas fa-chalkboard-teacher" style="color:var(--orange);"></i> Heteroevaluación (70%)</h4>
                    <p style="font-size:0.83rem;">Evaluación continua y objetiva realizada por el docente mediante rúbricas de desempeño socioformativas, casos prácticos y entregables finales.</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-users" style="color:var(--orange);"></i> Coevaluación (15%)</h4>
                    <p style="font-size:0.83rem;">Valoración entre compañeros de equipo para juzgar el trabajo colaborativo, la responsabilidad compartida y los aportes a la solución de problemas.</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-user-edit" style="color:var(--orange);"></i> Autoevaluación (15%)</h4>
                    <p style="font-size:0.83rem;">Reflexión autónoma guiada donde el estudiante evalúa su propio nivel de logro respecto a los RA declarados en la asignatura.</p>
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

    <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:24px 0 12px;">
        <i class="fas fa-lightbulb" style="color:var(--orange); margin-right:6px;"></i> Ejes de la Modernización Curricular
    </h4>
    <div class="grid-3" style="margin-bottom:28px;">
        <div class="card">
            <h4><i class="fas fa-brain" style="color:var(--orange);"></i> 1. Integración de IA y Analítica</h4>
            <p>Se introducen <strong>Big Data y Analítica de Datos</strong> (Sem 6) e <strong>Inteligencia Artificial</strong> (Sem 8) para preparar al administrador en la toma de decisiones basada en datos.</p>
        </div>
        <div class="card">
            <h4><i class="fas fa-shopping-cart" style="color:var(--orange);"></i> 2. E-Commerce y Emprendimiento</h4>
            <p>Nuevas asignaturas como <strong>E-Commerce</strong> (Sem 7) y <strong>Laboratorio de Innovación y Emprendimiento</strong> (Sem 8) potencian la creación de negocios digitales.</p>
        </div>
        <div class="card">
            <h4><i class="fas fa-tasks" style="color:var(--orange);"></i> 3. Estandarización a 3 Créditos</h4>
            <p>Todas las 48 asignaturas tienen exactamente 3 créditos, facilitando la equivalencia, homologación y movilidad de los estudiantes.</p>
        </div>
    </div>

    <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:24px 0 12px;">
        <i class="fas fa-exchange-alt" style="color:var(--orange); margin-right:6px;"></i> Plan de Transición y Matriz de Homologación para Estudiantes Activos
    </h4>
    <div style="background:var(--white); padding:20px; border-radius:var(--radius-md); border:1px solid var(--gray-100);">
        <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:12px;">
            Para garantizar los derechos adquiridos de los estudiantes en tránsito del Plan Vigente al Plan Propuesto, se ha diseñado un régimen de homologación directa asignatura por asignatura.
        </p>
        <ul style="font-size:0.83rem; color:var(--carbon); padding-left:20px; line-height:1.7;">
            <li><strong>Estudiantes de Semestres 1 a 4:</strong> Migrarán automáticamente al Plan Propuesto sin pérdida de créditos ni sobrecostos.</li>
            <li><strong>Estudiantes de Semestres 5 a 9:</strong> Terminarán en el Plan Vigente con plan de contingencia de oferta de asignaturas o migración voluntaria equiparada.</li>
        </ul>
    </div>
</div>
`;

window.c3Init = function() {
    window.switchTab('c3MainTabsGroup', 'c3-main-vigente');
    window.switchTab('c3VigenteSubTabs', 'c3-v-malla');
    window.switchTab('c3PropuestoSubTabs', 'c3-p-malla');
};
