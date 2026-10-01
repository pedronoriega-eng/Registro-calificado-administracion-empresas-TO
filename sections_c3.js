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
    "descripcion": "Desarrolla el pensamiento lógico- matemático aplicado a la resolución de problemas empresariales, financieros y económicos mediante modelos lineales.",
    "ras": [
      "RA1: Emplea herramientas algebraicas en la resolución de",
      "RA2: Interpreta datos cuantitativos y desarrolla modelos",
      "RA3: Utiliza el razonamiento lógico para plantear soluciones",
      "RA1: Comprende los principios básicos del mercadeo y su"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Álgebra Lineal",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Álgebra Lineal"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "al como herramienta de liderazgo y trabajo en equipo. I Cátedra de la Paz y Resolución de Conflictos Promueve la reflexión sobre la convivencia, los valores democráticos, la cultura de paz y la gestión",
    "ras": [
      "RA1: Reconoce los principios de la cultura de paz y la",
      "RA2: Analiza conflictos organizacionales y propone",
      "RA1: Aplica conceptos de derivada en la interpretación de"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Comunicación Oral y Escrita",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Comunicación Oral y Escrita"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Asignatura del área Transversal que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Cátedra de la Paz y Resolución de Conflictos en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Cátedra de la Paz y Resolución de Conflictos.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Cátedra de la Paz y Resolución de Conflictos."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Cátedra de la Paz y Resolución de Conflictos",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Cátedra de la Paz y Resolución de Conflictos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Administración Introduce los principios, teorías y enfoques de la administración moderna, analizando la evolución del pensamiento administrativo y su aplicación en organizaciones contemporáneas.",
    "ras": [
      "RA1: Explica los fundamentos y funciones básicas de la",
      "RA2: Analiza la evolución histórica y los enfoques modernos",
      "RA3: Aplica conceptos de planeación, organización, dirección",
      "RA1: Reconoce los principios contables y su importancia en la"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Fundamentos de Administración",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Fundamentos de Administración"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Fundamentos Contables y Financieros en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Fundamentos Contables y Financieros.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Fundamentos Contables y Financieros."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Fundamentos Contables y Financieros",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Fundamentos Contables y Financieros"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "Administración Introduce los principios, teorías y enfoques de la administración moderna, analizando la evolución del pensamiento administrativo y su aplicación en organizaciones contemporáneas.",
    "ras": [
      "RA1: Explica los fundamentos y funciones básicas de la",
      "RA2: Analiza la evolución histórica y los enfoques modernos",
      "RA3: Aplica conceptos de planeación, organización, dirección",
      "RA1: Reconoce los principios contables y su importancia en la"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Fundamentos de mercadeo",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Fundamentos de mercadeo"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Transversal que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Cálculo Diferencial en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Cálculo Diferencial.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Cálculo Diferencial."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Cálculo Diferencial",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Cálculo Diferencial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "criptiva aplicada al análisis y la interpretación de datos en contextos empresariales y sociales.",
    "ras": [
      "RA1: Organiza y presenta información estadística mediante",
      "RA2: Analiza datos cuantitativos para apoyar procesos de",
      "RA3: Aplica métodos estadísticos descriptivos en estudios de",
      "RA1: Reconoce el marco legal que regula las actividades"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Estadística Descriptiva",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Estadística Descriptiva"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Desarrolla competencias comunicativas básicas en lengua inglesa, enfocadas en la comprensión y producción de textos relacionados con la administración y los negocios.",
    "ras": [
      "RA1: Comprende estructuras gramaticales básicas y vocabulario",
      "RA2: Produce textos orales y escritos simples en contextos",
      "RA3: Utiliza el inglés como herramienta para el acceso a",
      "RA1: Explica las principales variables macroeconómica"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Inglés I",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Inglés I"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Analiza los principios de la economía desde la perspectiva del consumidor y del productor, abordando temas como la oferta, demanda, elasticidad y formación de precios.",
    "ras": [
      "RA1: Explica el comportamiento del consumidor y del productor",
      "RA2: Interpreta modelos microeconómicos aplicados a la gestión",
      "RA3: Analiza el impacto de los cambios en el mercado sobre la",
      "RA1: Organiza y presenta información estadística mediante"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Microeconomía",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Microeconomía"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "ercial en la gestión y administración de organizaciones. II Costos y Presupuestos Introduce los fundamentos del costeo, la planeación presupuestal y el control financiero como herramientas de apoyo a la gestión administrativa.",
    "ras": [
      "RA1: Clasifica y calcula los diferentes tipos de costos según su",
      "RA2: Elabora presupuestos operativos y financieros básicos",
      "RA3: Aplica herramientas de mediación y diálogo para la",
      "RA3: Evalúa el comportamiento de los costos y presupuestos"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Legislación Comercial",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Legislación Comercial"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "uestos para mejorar la eficiencia organizacional. II Inglés I Desarrolla competencias comunicativas básicas en lengua inglesa, enfocadas en la comprensión y producción de textos relacionados con la administración y los negocios.",
    "ras": [
      "RA1: Comprende estructuras gramaticales básicas y vocabulario",
      "RA2: Produce textos orales y escritos simples en contextos",
      "RA3: Utiliza el inglés como herramienta para el acceso a"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Costos y Presupuestos",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Costos y Presupuestos"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "Asignatura del área Transversal que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Estadística Inferencial en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Estadística Inferencial.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Estadística Inferencial."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Estadística Inferencial",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Estadística Inferencial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Fortalece las habilidades comunicativas en inglés, con énfasis en la comprensión lectora y la interacción en contextos empresariales.",
    "ras": [
      "RA1: Utiliza estructuras intermedias del inglés en situaciones",
      "RA2: Interpreta textos técnicos y administrativos en lengua",
      "RA3: Se comunica oralmente en inglés en escenarios",
      "RA1: Diseña instrumentos y métodos para la recolección y análisis"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Inglés II",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Inglés II"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Analiza el funcionamiento general de la economía a nivel nacional e internacional, abordando variables como el PIB, inflación, desempleo, política fiscal y monetaria.",
    "ras": [
      "RA1: Explica las principales variables macroeconómicas y su",
      "RA2: Analiza el impacto de las políticas económicas en los",
      "RA3: Interpreta indicadores macroeconómicos para la toma de",
      "RA1: Aplica técnicas de análisis financiero para evaluar la"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Macroeconomía",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Macroeconomía"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "iero para evaluar la situación económica de una empresa. RA2: Calcula e interpreta indicadores financieros clave para la gestión organizacional. RA3: Propone estrategias de mejoramiento financiero basadas en evidencias cuantitativas. III Estadística Inferencial Introduce los conceptos de inferencia estadística, estimación y pruebas de hipótesis aplicados a la toma de decisiones empresariales.",
    "ras": [
      "RA2: Calcula e interpreta indicadores financieros clave para la",
      "RA3: Propone estrategias de mejoramiento financiero basadas",
      "RA1: Aplica métodos inferenciales para el análisis de muestras",
      "RA2: Interpreta resultados estadísticos para respaldar"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Análisis Financiero",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Análisis Financiero"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "strativos y financieros. RA3: Interpreta indicadores macroeconómicos para la toma de decisiones estratégicas. III Análisis Financiero Desarrolla herramientas para interpretar y evaluar los estados financieros, medir la rentabilidad, liquidez y solvencia de las organizaciones.",
    "ras": [
      "RA3: Interpreta indicadores macroeconómicos para la toma de",
      "RA1: Aplica técnicas de análisis financiero para evaluar la",
      "RA2: Calcula e interpreta indicadores financieros clave para la",
      "RA3: Propone estrategias de mejoramiento financiero basadas"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Procesos Administrativos",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Procesos Administrativos"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "cional, su estructura, cultura y comportamiento.",
    "ras": [
      "RA1: Analiza los principales modelos teóricos de la",
      "RA2: Evalúa la estructura organizacional como elemento clave",
      "RA3: Propone mejoras en la organización basadas en el",
      "RA1: Utiliza estructuras intermedias del inglés en situaciones"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Teoría Organizacional",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Teoría Organizacional"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Transversal que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Competencias Investigativas en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Competencias Investigativas.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Competencias Investigativas."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Competencias Investigativas",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Competencias Investigativas"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Consolida las competencias comunicativas en inglés, con énfasis en vocabulario técnico, redacción de informes y comprensión de textos empresariales.",
    "ras": [
      "RA1: Interpreta y redacta documentos administrativos y",
      "RA2: Participa en conversaciones y presentaciones orales en",
      "RA3: Aplica vocabulario técnico-administrativo en la comunicación",
      "RA1: Analiza la estructura financiera y"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Inglés III",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Inglés III"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "e mercados en estudios orientados a la innovación empresarial. IV Matemática Financiera Presenta los fundamentos de la matemática aplicada a las finanzas, incluyendo el valor del dinero en el tiempo, tasas de interés y amortización de créditos.",
    "ras": [
      "RA1: Aplica conceptos de valor del dinero en el tiempo en",
      "RA2: Calcula tasas, rentabilidades y flujos de efectivo en",
      "RA3: Utiliza herramientas financieras para analizar inversiones y",
      "RA1: Analiza los sectores productivos y el comportami"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Investigación de Mercados",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Investigación de Mercados"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión de mercadeo, canales digitales y transformación digital.",
    "rap_asociado": "RAP 2: Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Matemática Financiera en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Matemática Financiera.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Matemática Financiera."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Matemática Financiera",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Matemática Financiera"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Economía Colombiana e Internacional en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Economía Colombiana e Internacional.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Economía Colombiana e Internacional."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Economía Colombiana e Internacional",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Economía Colombiana e Internacional"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "y la seguridad social. RA3: Aplica la normativa vigente en procesos de contratación y gestión del talento humano. IV Inglés III Consolida las competencias comunicativas en inglés, con énfasis en vocabulario técnico, redacción de informes y comprensión de textos empresariales.",
    "ras": [
      "RA3: Aplica la normativa vigente en procesos de contratación y",
      "RA1: Interpreta y redacta documentos administrativos y",
      "RA2: Participa en conversaciones y presentaciones orales en",
      "RA3: Aplica vocabulario técnico-administrativo en la comunicación"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Derecho Laboral y Seguridad Social",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Derecho Laboral y Seguridad Social"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "lento Humano Aborda los fundamentos, procesos y estrategias de gestión del talento humano orientadas al desarrollo integral, la motivación y la productividad.",
    "ras": [
      "RA1: Diseña políticas y estrategias de",
      "RA2: Evalúa el desempeño laboral",
      "RA3:",
      "RA1: Formula estrategias de marketing"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Gerencia del Talento Humano",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Gerencia del Talento Humano"
    ],
    "perfil_asociado": "Competencia 5 & 6: Habilidades gerenciales, liderazgo colaborativo y compromiso ético.",
    "rap_asociado": "RAP 6: Diseña políticas de gestión humana y lidera equipos participativos."
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
    "descripcion": "Introduce los principios, teorías y enfoques de la administración moderna, analizando la evolución del pensamiento administrativo y su aplicación en organizaciones contemporáneas.",
    "ras": [
      "RA1: Explica los fundamentos y funciones básicas de la",
      "RA2: Analiza la evolución histórica y los enfoques modernos",
      "RA3: Aplica conceptos de planeación, organización, dirección",
      "RA1: Reconoce los principios contables y su importancia en la"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Administración Financiera",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Administración Financiera"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "aciones Estudia los procesos productivos y de servicios, la administración de recursos, la planeación de la capacidad y el control de la producción.",
    "ras": [
      "RA1:",
      "RA2: Aplica técnicas de planeación y",
      "RA3:",
      "RA1: Diseña políticas y estrategias de"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Gestión de Operaciones",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Gestión de Operaciones"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "ados de Gestión (HSEQ) Estudia los principios, normas y herramientas de los sistemas integrados de gestión de calidad, ambiente, seguridad y salud en el trabajo.",
    "ras": [
      "RA1: Explica la estructura y alcance de",
      "RA2: Aplica normas ISO y estándares",
      "RA3: Diseña propuestas de mejora",
      "RA1: Identifica estilos de liderazgo y su"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Sistemas Integrados de Gestión (HSEQ)",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Sistemas Integrados de Gestión (HSEQ)"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Negocios y Gerencia Internacional en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Negocios y Gerencia Internacional.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Negocios y Gerencia Internacional."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Negocios y Gerencia Internacional",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Negocios y Gerencia Internacional"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Electiva que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Electiva Profesional I en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Electiva Profesional I.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Electiva Profesional I."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Electiva Profesional I",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Electiva Profesional I"
    ],
    "perfil_asociado": "Competencia 3: Diseña y lidera proyectos de innovación y profundización.",
    "rap_asociado": "RAP 5: Formulación y gestión de proyectos innovadores y sostenibles."
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
    "descripcion": "ítica de Datos Introduce los conceptos, herramientas y aplicaciones de la analítica de datos y Big Data para la toma de decisiones en entornos empresariales.",
    "ras": [
      "RA1: Comprende los fundamentos del",
      "RA2: Utiliza herramientas digitales y",
      "RA3: Aplica la analítica de datos en la",
      "RA1:"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Big Data y Analítica de Datos",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Big Data y Analítica de Datos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Asignatura del área Transversal que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Métodos Cualitativos y Cuantitativos en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Métodos Cualitativos y Cuantitativos.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Métodos Cualitativos y Cuantitativos."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Métodos Cualitativos y Cuantitativos",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Métodos Cualitativos y Cuantitativos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "keting Analiza los principios de dirección y gestión estratégica del mercadeo, orientados al posicionamiento, segmentación y fidelización de clientes.",
    "ras": [
      "RA1: Formula estrategias de marketing",
      "RA2: Evalúa la efectividad de las",
      "RA3: Diseña planes de marketing con",
      "RA1: Analiza dilemas éticos en la gestión"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Gerencia de Marketing",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Gerencia de Marketing"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión de mercadeo, canales digitales y transformación digital.",
    "rap_asociado": "RAP 2: Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Legislación Tributaria en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Legislación Tributaria.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Legislación Tributaria."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Legislación Tributaria",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Legislación Tributaria"
    ],
    "perfil_asociado": "Competencia 2 & 7: Análisis financiero, económico y toma de decisiones éticas.",
    "rap_asociado": "RAP 3: Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Modelos de emprendimiento en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Modelos de emprendimiento.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Modelos de emprendimiento."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Modelos de emprendimiento",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Modelos de emprendimiento"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Electiva que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Electiva Profesional II en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Electiva Profesional II.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Electiva Profesional II."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Electiva Profesional II",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Electiva Profesional II"
    ],
    "perfil_asociado": "Competencia 3: Diseña y lidera proyectos de innovación y profundización.",
    "rap_asociado": "RAP 5: Formulación y gestión de proyectos innovadores y sostenibles."
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
    "descripcion": "ratégico y Prospectivo Profundiza en la planeación estratégica avanzada y la prospectiva empresarial para la anticipación de escenarios y la toma de decisiones en entornos dinámicos.",
    "ras": [
      "RA1: Aplica metodologías de análisis",
      "RA2:",
      "RA3: Diseña estrategias innovadoras",
      "RA1: Comprende los modelos de"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Pensamiento Estratégico y Prospectivo",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Pensamiento Estratégico y Prospectivo"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Formulación y Evaluación de Proyectos en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Formulación y Evaluación de Proyectos.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Formulación y Evaluación de Proyectos."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Formulación y Evaluación de Proyectos",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Formulación y Evaluación de Proyectos"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "tas y Canales de Distribución Analiza los procesos de planificación, ejecución y control de las estrategias de ventas y distribución en mercados nacionales e internacionales.",
    "ras": [
      "RA1: Diseña estrategias de ventas",
      "RA2: Evalúa la eficiencia de los canales",
      "RA3: Aplica técnicas de negociación y",
      "RA1: Comprende los fundamentos del"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Gerencia de Ventas y Canales de Distribución",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Gerencia de Ventas y Canales de Distribución"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión de mercadeo, canales digitales y transformación digital.",
    "rap_asociado": "RAP 2: Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible."
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
    "descripcion": "ducción Analiza los modelos de gestión de la producción y la optimización de procesos productivos bajo criterios de eficiencia, calidad y sostenibilidad.",
    "ras": [
      "RA1: Diseña y gestiona procesos",
      "RA2: Implementa técnicas de control de",
      "RA3:",
      "RA1: Diseña proyectos empresariales"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Gerencia de Producción",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Gerencia de Producción"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de E-comerce en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con E-comerce.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de E-comerce."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de E-comerce",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en E-comerce"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Asignatura del área Electiva que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Electiva Profesional III en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Electiva Profesional III.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Electiva Profesional III."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Electiva Profesional III",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Electiva Profesional III"
    ],
    "perfil_asociado": "Competencia 3: Diseña y lidera proyectos de innovación y profundización.",
    "rap_asociado": "RAP 5: Formulación y gestión de proyectos innovadores y sostenibles."
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
    "descripcion": "Asignatura del área Transversal que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Inteligencia artificial en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Inteligencia artificial.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Inteligencia artificial."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Inteligencia artificial",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Inteligencia artificial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Toma de decisiones informadas, analítica de datos y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 4 & RAP 8: Aplica herramientas tecnológicas, analítica de datos e investigación para la solución de problemas."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Laboratorio de Innovación y Emprendimiento en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Laboratorio de Innovación y Emprendimiento.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Laboratorio de Innovación y Emprendimiento."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Laboratorio de Innovación y Emprendimiento",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Laboratorio de Innovación y Emprendimiento"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "Simula la gestión integral de una organización a través de la toma de decisiones estratégicas en entornos competitivos.",
    "ras": [
      "RA1: Integra conocimientos de las",
      "RA2:",
      "RA3:"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Juego Gerencial (Simulación de Negocios)",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Juego Gerencial (Simulación de Negocios)"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "enciales y Liderazgo Desarrolla competencias de liderazgo, comunicación, negociación y gestión de equipos de trabajo orientadas a la efectividad organizacional.",
    "ras": [
      "RA1: Identifica estilos de liderazgo y su",
      "RA2:",
      "RA3: Evalúa su desempeño gerencial",
      "RA1: Analiza tendencias de marketing"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Habilidades gerenciales y liderazgo",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Habilidades gerenciales y liderazgo"
    ],
    "perfil_asociado": "Competencia 5 & 6: Habilidades gerenciales, liderazgo colaborativo y compromiso ético.",
    "rap_asociado": "RAP 6: Diseña políticas de gestión humana y lidera equipos participativos."
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
    "descripcion": "Asignatura del área Disciplinar que aporta al desarrollo de las competencias gerenciales y profesionales del estudiante en Administración de Empresas.",
    "ras": [
      "RA1: Aplica los conceptos fundamentales de Gerencia de  Calidad en contextos organizacionales.",
      "RA2: Analiza problemas y situaciones empresariales relacionadas con Gerencia de  Calidad.",
      "RA3: Propone soluciones innovadoras e integrales derivadas del estudio de Gerencia de  Calidad."
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Gerencia de  Calidad",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Gerencia de  Calidad"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
    "descripcion": "do Integra los conocimientos adquiridos a lo largo del programa mediante el desarrollo de un proyecto aplicado de investigación o intervención empresarial.",
    "ras": [
      "RA1: Formula un proyecto aplicado que",
      "RA2:",
      "RA3: Sustenta los resultados del",
      "RA1:"
    ],
    "temas": [
      "Unidad 1: Fundamentos y conceptos generales de Proyecto de Grado",
      "Unidad 2: Herramientas y metodologías aplicadas",
      "Unidad 3: Diagnóstico y toma de decisiones organizacionales",
      "Unidad 4: Evaluación, sostenibilidad e innovación en Proyecto de Grado"
    ],
    "perfil_asociado": "Competencia 1: Gestión estratégica de organizaciones, procesos administrativos, calidad y operaciones.",
    "rap_asociado": "RAP 1: Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad."
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
                <i class="fas fa-th"></i> Malla Curricular (Vigente)
            </button>
            <button class="tab-btn" data-tab="c3-v-areas" onclick="switchTab('c3VigenteSubTabs','c3-v-areas')">
                <i class="fas fa-layer-group"></i> Áreas de Formación
            </button>
            <button class="tab-btn" data-tab="c3-v-perfiles" onclick="switchTab('c3VigenteSubTabs','c3-v-perfiles')">
                <i class="fas fa-user-check"></i> Perfiles y RAPs
            </button>
            <button class="tab-btn" data-tab="c3-v-flex" onclick="switchTab('c3VigenteSubTabs','c3-v-flex')">
                <i class="fas fa-arrows-alt"></i> Flexibilidad
            </button>
            <button class="tab-btn" data-tab="c3-v-eval" onclick="switchTab('c3VigenteSubTabs','c3-v-eval')">
                <i class="fas fa-clipboard-check"></i> Evaluación RA
            </button>
        </div>

        <!-- SUB TAB 1.1: MALLA VIGENTE -->
        <div class="tab-panel active" id="c3-v-malla" style="display:block;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                Plan de Estudios Vigente · 158 Créditos · 9 Semestres · 62 Asignaturas
            </h3>
            <p style="color:var(--gray-text); font-size:0.82rem; margin-bottom:20px;">Estructura del plan de estudios inicial registrado ante SACES con 9 periodos académicos (148 créditos obligatorios + 10 electivos).</p>

            <div class="metric-row">
                <div class="metric-card"><div class="metric-val">62</div><div class="metric-lbl">Asignaturas Totales</div></div>
                <div class="metric-card"><div class="metric-val">158</div><div class="metric-lbl">Créditos Totales</div></div>
                <div class="metric-card"><div class="metric-val">9</div><div class="metric-lbl">Semestres</div></div>
                <div class="metric-card"><div class="metric-val">7.584</div><div class="metric-lbl">Horas Totales (144h/cr)</div></div>
            </div>

            <!-- Grid 9 Semestres Vigente -->
            <div class="malla" style="grid-template-columns: repeat(9, 1fr);">
                <div class="sh">SEM 1</div><div class="sh">SEM 2</div><div class="sh">SEM 3</div><div class="sh">SEM 4</div><div class="sh">SEM 5</div><div class="sh">SEM 6</div><div class="sh">SEM 7</div><div class="sh">SEM 8</div><div class="sh">SEM 9</div>

                <div class="mc">Álgebra Lineal</div>
                <div class="mc">Cálculo Diferencial</div>
                <div class="mc">Estadística Inferencial</div>
                <div class="mc">Metodología Investigación</div>
                <div class="mc">Gerencia Talento Humano</div>
                <div class="mc">Investigación Formativa</div>
                <div class="mc">Pensamiento Estratégico</div>
                <div class="mc">Electiva Profesional I</div>
                <div class="mc">Proyecto de Grado II</div>

                <div class="mc">Comunicación Escrita</div>
                <div class="mc">Estadística Descriptiva</div>
                <div class="mc">Inglés II</div>
                <div class="mc">Inglés III</div>
                <div class="mc">Admón. Financiera</div>
                <div class="mc">Métodos Cuantitativos</div>
                <div class="mc">Formulación Proyectos</div>
                <div class="mc">Electiva Profesional II</div>
                <div class="mc">Opción de Grado</div>

                <div class="mc">Cátedra Institucional</div>
                <div class="mc">Inglés I</div>
                <div class="mc">Análisis Financiero</div>
                <div class="mc">Inv. de Mercados</div>
                <div class="mc">Gestión Operaciones</div>
                <div class="mc">Gerencia Marketing</div>
                <div class="mc">Gerencia de Ventas</div>
                <div class="mc">Juego Gerencial</div>
                <div class="mc">Práctica Profesional</div>

                <div class="mc">Fund. Administración</div>
                <div class="mc">Microeconomía</div>
                <div class="mc">Macroeconomía</div>
                <div class="mc">Matemática Financiera</div>
                <div class="mc">Sistemas de Gestión</div>
                <div class="mc">Legislación Tributaria</div>
                <div class="mc">Gerencia Producción</div>
                <div class="mc">Habilidades Liderazgo</div>
                <div class="mc">Ética Profesional</div>

                <div class="mc">Fund. Contables</div>
                <div class="mc">Legislación Comercial</div>
                <div class="mc">Procesos Admón.</div>
                <div class="mc">Economía Colombiana</div>
                <div class="mc">Gerencia Internacional</div>
                <div class="mc">Emprendimiento I</div>
                <div class="mc">Comercio Exterior</div>
                <div class="mc">Gerencia Calidad</div>
                <div class="mc">Electiva V</div>

                <div class="mc">Fund. Mercadeo</div>
                <div class="mc">Costos Presupuestos</div>
                <div class="mc">Teoría Organizacional</div>
                <div class="mc">Derecho Laboral</div>
                <div class="mc">Electiva III</div>
                <div class="mc">Electiva IV</div>
                <div class="mc">Proyecto de Grado I</div>
                <div class="mc">Emprendimiento II</div>
                <div class="mc">Simulación Empresarial</div>
            </div>

            <div class="evidence-box" style="margin-top:20px;">
                <i class="fas fa-file-pdf"></i>
                <strong>Soporte Oficial:</strong> Anexo 5. Documento Maestro Administración de Empresas_RU inicial (PDF).
            </div>
        </div>

        <!-- SUB TAB 1.2: ÁREAS VIGENTE -->
        <div class="tab-panel" id="c3-v-areas" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Distribución por Áreas de Formación (Plan Vigente · 158 Créditos)
            </h3>
            <table class="tbl">
                <thead>
                    <tr><th>Área de Formación</th><th>Asignaturas</th><th>Créditos</th><th>% del Plan</th></tr>
                </thead>
                <tbody>
                    <tr><td class="lb">Transversal</td><td>17 asignaturas</td><td>41</td><td>25.95%</td></tr>
                    <tr class="row-accent"><td class="lb">Disciplinar</td><td>40 asignaturas</td><td>107</td><td>67.72%</td></tr>
                    <tr><td class="lb">Electiva</td><td>5 asignaturas</td><td>10</td><td>6.33%</td></tr>
                    <tr style="background:var(--carbon); color:#fff;"><td style="color:#fff; font-weight:800;">TOTAL</td><td style="color:#fff;">62 asignaturas</td><td style="color:#fff;">158</td><td style="color:#fff;">100%</td></tr>
                </tbody>
            </table>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:24px 0 12px;">
                <i class="fas fa-clock" style="color:var(--orange); margin-right:6px;"></i> Carga Horaria del Plan Vigente (144 horas por Crédito)
            </h4>
            <div class="grid-2">
                <div class="card">
                    <h4><i class="fas fa-users" style="color:var(--orange);"></i> Horas Acompañadas Directas</h4>
                    <p>En el plan inicial, cada crédito equivalía a <strong>36 horas de acompañamiento docente directo / mediado</strong> (sincrónico/asincrónico).</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-user-clock" style="color:var(--orange);"></i> Horas de Trabajo Independiente</h4>
                    <p>Cada crédito requería <strong>108 horas de trabajo independiente</strong> del estudiante para lecturas, talleres y actividades virtuales.</p>
                </div>
            </div>
        </div>

        <!-- SUB TAB 1.3: PERFILES Y RAPS VIGENTE -->
        <div class="tab-panel" id="c3-v-perfiles" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Perfiles del Egresado y Competencias (Plan Vigente · 158 Créditos)
            </h3>
            
            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card" style="border-left:4px solid var(--orange);">
                    <h4><i class="fas fa-briefcase" style="color:var(--orange);"></i> Perfil Profesional Vigente</h4>
                    <p style="font-size:0.85rem; color:var(--carbon); line-height:1.6;">
                        El profesional en Administración de Empresas del plan inicial se concibe con capacidad para gestionar organizaciones públicas y privadas, liderar procesos administrativos, diseñar presupuestos, supervisar operaciones y dirigir equipos de trabajo con visión ética y compromiso social.
                    </p>
                </div>
                <div class="card" style="border-left:4px solid var(--carbon);">
                    <h4><i class="fas fa-building" style="color:var(--carbon);"></i> Perfil Ocupacional Vigente</h4>
                    <p style="font-size:0.85rem; color:var(--carbon); line-height:1.6;">
                        El egresado del plan vigente puede desempeñarse como: Director Administrativo, Gerente Financiero, Coordinador del Talento Humano, Jefe de Ventas y Mercadeo, Analista de Operaciones o Consultor Organizacional en Pymes y microempresas regionales.
                    </p>
                </div>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-layer-group" style="color:var(--orange); margin-right:6px;"></i> Competencias Genéricas (Proyecto Tuning América Latina)
            </h4>
            <div class="grid-3" style="margin-bottom:20px;">
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-users"></i> 1. Componente Social</h4>
                    <p style="font-size:0.82rem;">Capacidad de toma de decisiones, trabajo en equipo, liderazgo motivacional, ética, responsabilidad social y valor de la diversidad multicultural.</p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-comments"></i> 2. Componente Comunicativo</h4>
                    <p style="font-size:0.82rem;">Comunicación oral y escrita, competencias en segundo idioma (Inglés B1), manejo de tecnologías TIC e innovación en nuevas situaciones.</p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-search"></i> 3. Componente Investigativo</h4>
                    <p style="font-size:0.82rem;">Abstracción, análisis y síntesis, aplicación práctica de conceptos, actualización continua y procesamiento crítico de información.</p>
                </div>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-bullseye" style="color:var(--orange); margin-right:6px;"></i> Resultados de Aprendizaje del Programa (RAP Vigentes)
            </h4>
            <div style="background:var(--gray-bg); padding:16px; border-radius:var(--radius-md);">
                <ul style="list-style:none; padding:0; margin:0; font-size:0.83rem;">
                    <li style="padding:8px 0; border-bottom:1px solid var(--gray-100);"><strong>RAP-V1:</strong> Aplica modelos de gestión administrativa y financiera en la toma de decisiones organizacionales.</li>
                    <li style="padding:8px 0; border-bottom:1px solid var(--gray-100);"><strong>RAP-V2:</strong> Diseña planes de trabajo operativo y estrategias comerciales orientadas al cumplimiento de metas.</li>
                    <li style="padding:8px 0; border-bottom:1px solid var(--gray-100);"><strong>RAP-V3:</strong> Coordina procesos de talento humano y resolución de conflictos en entornos laborales.</li>
                    <li style="padding:8px 0;"><strong>RAP-V4:</strong> Desarrolla proyectos de emprendimiento e investigación formativa aplicados al entorno regional.</li>
                </ul>
            </div>
        </div>

        <!-- SUB TAB 1.4: FLEXIBILIDAD VIGENTE -->
        <div class="tab-panel" id="c3-v-flex" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Estrategias de Flexibilidad en el Plan Vigente
            </h3>

            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card">
                    <h4><i class="fas fa-th-list" style="color:var(--orange);"></i> Bolsa de 10 Créditos Electivos</h4>
                    <p style="font-size:0.85rem; color:var(--gray-text);">El plan vigente contemplaba 5 asignaturas electivas (2 créditos c/u) distribuidas en los semestres 5, 6, 7, 8 y 9 para profundización o actualización disciplinar.</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-graduation-cap" style="color:var(--orange);"></i> Rutas de Graduación Tradicionales</h4>
                    <p style="font-size:0.85rem; color:var(--gray-text);">Opciones de grado compuestas por Proyecto de Grado I y II, Práctica Profesional o Seminario de Profundización disciplinar.</p>
                </div>
            </div>

            <div class="card-accent">
                <h4><i class="fas fa-balance-scale"></i> Limitaciones Identificadas en la Flexibilidad Vigente</h4>
                <p style="font-size:0.84rem; color:rgba(255,255,255,0.8); margin-top:6px;">
                    La estructura inicial de 9 semestres y 62 asignaturas generaba dispersión de créditos (asignaturas de 2 créditos), rigidez en prerrequisitos y una menor diferenciación entre las modalidades presencial y virtual en la guía de horas.
                </p>
            </div>
        </div>

        <!-- SUB TAB 1.5: EVALUACIÓN RA VIGENTE -->
        <div class="tab-panel" id="c3-v-eval" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sistema de Evaluación en el Plan Vigente
            </h3>

            <p style="font-size:0.85rem; color:var(--gray-text); margin-bottom:16px;">
                El esquema de evaluación inicial se basaba en el Reglamento Estudiantil institucional mediante 3 cortes académicos sumativos acumulativos:
            </p>

            <table class="tbl" style="margin-bottom:20px;">
                <thead>
                    <tr><th>Corte Académico</th><th>Ponderación</th><th>Componentes Evaluativos</th></tr>
                </thead>
                <tbody>
                    <tr><td class="lb">Primer Corte (Semana 1 a 5)</td><td><strong>30%</strong></td><td>Examen parcial teóricopráctico, talleres, actividades en plataforma.</td></tr>
                    <tr class="row-accent"><td class="lb">Segundo Corte (Semana 6 a 10)</td><td><strong>30%</strong></td><td>Segundo parcial, estudios de caso, avance de investigación.</td></tr>
                    <tr><td class="lb">Tercer Corte (Semana 11 a 16)</td><td><strong>40%</strong></td><td>Evaluación final integradora, sustentación de proyectos o entregable.</td></tr>
                </tbody>
            </table>

            <div class="card" style="border-left:4px solid var(--orange);">
                <h4><i class="fas fa-clipboard-check" style="color:var(--orange);"></i> Monitoreo de Logro Académico</h4>
                <p style="font-size:0.84rem; color:var(--gray-text);">
                    La medición del aprendizaje se realizaba mediante calificaciones cuantitativas de 0.0 a 5.0 con nota mínima de aprobación de 3.0, registrando notas en el sistema de información académico institucional.
                </p>
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
                <i class="fas fa-th"></i> Malla Curricular (Propuesta)
            </button>
            <button class="tab-btn" data-tab="c3-p-areas" onclick="switchTab('c3PropuestoSubTabs','c3-p-areas')">
                <i class="fas fa-layer-group"></i> Áreas y Modalidades
            </button>
            <button class="tab-btn" data-tab="c3-p-perfiles" onclick="switchTab('c3PropuestoSubTabs','c3-p-perfiles')">
                <i class="fas fa-bullseye"></i> Perfiles y RAPs (7 Competencias)
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

            <!-- Desglose de Horas por Modalidad -->
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

        <!-- SUB TAB 2.3: PERFILES Y RAPS PROPUESTO (7 COMPETENCIAS) -->
        <div class="tab-panel" id="c3-p-perfiles" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Perfil de Egreso (7 Competencias Clave) & 9 RAPs del Programa
            </h3>

            <div class="grid-2">
                <div>
                    <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                        <i class="fas fa-user-graduate" style="color:var(--orange); margin-right:6px;"></i> Competencias del Perfil de Egreso
                    </h4>
                    <ul style="list-style:none; padding:0; margin:0;">
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>1. Gestión Estratégica:</strong> Integra procesos administrativos, financieros, talento humano y operaciones con eficiencia y sostenibilidad.
                        </li>
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>2. Toma de Decisiones Ética:</strong> Utiliza análisis financiero, estadístico y digital para la competitividad empresarial.
                        </li>
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>3. Innovación y Emprendimiento:</strong> Lidera proyectos empresariales articulando investigación aplicada y creatividad.
                        </li>
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>4. Transformación Digital:</strong> Aplica tecnologías emergentes (analítica, IA, E-Commerce) para optimizar decisiones.
                        </li>
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>5. Liderazgo Colaborativo:</strong> Desarrolla habilidades gerenciales, resolución de conflictos y gestión del talento.
                        </li>
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>6. Compromiso Social y Ético:</strong> Actúa con responsabilidad social y visión sostenible en la comunidad.
                        </li>
                        <li style="padding:10px 12px; background:var(--white); border-left:3px solid var(--orange); margin-bottom:8px; border-radius:4px; font-size:0.82rem; box-shadow:var(--shadow-sm);">
                            <strong>7. Pensamiento Prospectivo:</strong> Interpreta el entorno económico y social anticipando escenarios de futuro.
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--carbon); margin-bottom:12px;">
                        <i class="fas fa-bullseye" style="color:var(--orange); margin-right:6px;"></i> Resultados de Aprendizaje del Programa (RAP)
                    </h4>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 1:</strong> Diseña e implementa estrategias organizacionales que optimizan recursos y fortalecen la competitividad.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 2:</strong> Interpreta estados financieros, evalúa indicadores de desempeño y propone estrategias financieras sostenibles.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 3:</strong> Diseña políticas y estrategias de gestión humana que potencian la productividad y el bienestar.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 4:</strong> Evalúa y ejecuta proyectos de emprendimiento y sostenibilidad con impacto económico y social.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 5:</strong> Diseña e implementa planes de mercadeo innovadores con enfoque digital y sostenible.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 6:</strong> Integra tecnologías de información, analítica de datos e inteligencia artificial en la gestión administrativa.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 7:</strong> Implementa prácticas de sostenibilidad, economía circular y responsabilidad social.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 8:</strong> Diseña e implementa sistemas integrados de gestión orientados a la calidad y mejora continua.
                        </div>
                        <div style="padding:8px 12px; background:var(--gray-bg); border-radius:6px; font-size:0.8rem;">
                            <strong style="color:var(--orange-dark);">RAP 9:</strong> Diseña e implementa proyectos de investigación aplicada que aporten a la innovación empresarial.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SUB TAB 2.4: FLEXIBILIDAD PROPUESTA (EXTENSA) -->
        <div class="tab-panel" id="c3-p-flex" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Estrategias de Flexibilidad Curricular en el Plan Propuesto (4 Dimensiones)
            </h3>

            <div class="grid-2" style="margin-bottom:20px;">
                <div class="card" style="border-top:4px solid var(--orange);">
                    <h4><i class="fas fa-cubes" style="color:var(--orange);"></i> 1. Flexibilidad Curricular y Electividad</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        El programa dispone de un banco de electivas de profundización profesional en semestres 5, 6 y 7 (9 créditos), estructurado en 3 líneas de vanguardia:
                    </p>
                    <ul style="font-size:0.8rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Línea de Transformación Digital:</strong> Inteligencia Artificial Aplicada, Big Data Gerencial, Marketing Digital y E-Commerce.</li>
                        <li>• <strong>Línea de Sostenibilidad:</strong> Finanzas Sostenibles, Desarrollo Sostenible y Economía Circular.</li>
                        <li>• <strong>Línea de Gobernanza:</strong> Ética y Gobernanza Corporativa, Gestión de la Inclusión y Diversidad.</li>
                    </ul>
                </div>

                <div class="card" style="border-top:4px solid var(--carbon);">
                    <h4><i class="fas fa-chalkboard-teacher" style="color:var(--carbon);"></i> 2. Flexibilidad Pedagógica</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Estrategias pedagógicas activas centradas en el estudiante:
                    </p>
                    <ul style="font-size:0.8rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Aulas Virtuales Interactivas:</strong> Campus LMS Moodle intuitivo con recursos educativos digitales, laboratorios y simuladores.</li>
                        <li>• <strong>Encuentros Sincrónicos y Asincrónicos:</strong> Flexibilidad de acceso a grabaciones y materiales formativos las 24/7.</li>
                        <li>• <strong>Metodologías de Caso y Proyectos:</strong> Aprendizaje basado en retos reales del entorno productivo.</li>
                    </ul>
                </div>
            </div>

            <div class="grid-2">
                <div class="card" style="border-top:4px solid #0284C7;">
                    <h4><i class="fas fa-random" style="color:#0284C7;"></i> 3. Flexibilidad Administrativa y Registro Único</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Mecanismos institucionales de movilidad interna y transitabilidad:
                    </p>
                    <ul style="font-size:0.8rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Transitabilidad de Modalidad:</strong> Estudiantes pueden cursar créditos entre modalidad Presencial y Virtual.</li>
                        <li>• <strong>Movilidad Inter-semestral:</strong> Sistema flexible de requisitos para aceleración o ritmo adaptado.</li>
                        <li>• <strong>Régimen de Homologaciones Directas:</strong> Reconocimiento de saberes previos y transferencia de créditos entre programas de la CETO.</li>
                    </ul>
                </div>

                <div class="card" style="border-top:4px solid #059669;">
                    <h4><i class="fas fa-globe-americas" style="color:#059669;"></i> 4. Flexibilidad e Internacionalización</h4>
                    <p style="font-size:0.84rem; color:var(--gray-text); line-height:1.6;">
                        Apertura global del currículo:
                    </p>
                    <ul style="font-size:0.8rem; color:var(--carbon); padding-left:16px; margin-top:6px; line-height:1.6;">
                        <li>• <strong>Clases Espejo Internacionales:</strong> Desarrollo de módulos conjuntos con universidades aliadas de América Latina.</li>
                        <li>• <strong>Plan de Bilingüismo Integrado:</strong> Asignaturas de Inglés I, II y III articuladas al marco MCER (Nivel B1).</li>
                        <li>• <strong>Profesores Invitados Internacionales:</strong> Seminarios y ponencias magistrales en modalidad virtual.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- SUB TAB 2.5: EVALUACIÓN RA PROPUESTA (DECRETO 1330) -->
        <div class="tab-panel" id="c3-p-eval" style="display:none;">
            <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin-bottom:16px;">
                Sistema de Evaluación de Resultados de Aprendizaje (Decreto 1330 de 2019)
            </h3>

            <div class="card-accent" style="margin-bottom:20px;">
                <h4><i class="fas fa-balance-scale"></i> Marco Normativo y Filosofía de Evaluación</h4>
                <p style="font-size:0.85rem; color:rgba(255,255,255,0.85); margin-top:6px; line-height:1.6;">
                    Conforme al Decreto 1330 de 2019, la CETO concibe los Resultados de Aprendizaje (RA) como las declaraciones expresas de lo que se espera que el estudiante conozca, comprenda y sea capaz de demostrar. La evaluación se asume como una herramienta formativa para el aprendizaje y la mejora continua del quehacer pedagógico.
                </p>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-sitemap" style="color:var(--orange); margin-right:6px;"></i> Fundamento en Taxonomía de Bloom (Revisada) y los 3 Planos del Aprendizaje
            </h4>
            <div class="grid-3" style="margin-bottom:24px;">
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-brain"></i> 1. Plano Cognitivo</h4>
                    <p style="font-size:0.82rem;">Estructurado en 6 niveles: Conocimiento, Comprensión, Aplicación, Análisis, Síntesis y Evaluación de problemáticas empresariales.</p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-heart"></i> 2. Plano Subjetivo (Afectivo)</h4>
                    <p style="font-size:0.82rem;">Desarrollo de competencias socioemocionales: Disposición, Reacción, Valoración ética, Organización y Caracterización profesional.</p>
                </div>
                <div class="card">
                    <h4 style="color:var(--orange-dark);"><i class="fas fa-hands"></i> 3. Plano Psicomotor</h4>
                    <p style="font-size:0.82rem;">Desarrollo de habilidades prácticas: Imitación, Manipulación de herramientas digitales, Precisión, Articulación y Naturalización del desempeño.</p>
                </div>
            </div>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-star" style="color:var(--orange); margin-right:6px;"></i> Escala Socioformativa de Valoración del Logro del RA
            </h4>
            <table class="tbl" style="margin-bottom:24px;">
                <thead>
                    <tr><th>Rango de Nota</th><th>Nivel de Logro Socioformativo</th><th>Criterio y Evidencia del Resultado de Aprendizaje</th></tr>
                </thead>
                <tbody>
                    <tr><td class="lb">0.0 – 1.0</td><td><span style="color:#DC2626; font-weight:700;">Nivel Receptivo Inicial</span></td><td>El estudiante no alcanza los resultados de aprendizaje previstos. No aporta evidencias mínimas.</td></tr>
                    <tr><td class="lb">1.1 – 2.0</td><td><span style="color:#EA580C; font-weight:700;">Nivel Receptivo</span></td><td>Alcanza de manera muy limitada los RA. Requiere refuerzo pedagógico significativo.</td></tr>
                    <tr><td class="lb">2.1 – 2.9</td><td><span style="color:#D97706; font-weight:700;">Nivel Resolutivo Básico</span></td><td>Alcanza algunos RA con inconsistencias en el desempeño o la aplicación técnica.</td></tr>
                    <tr class="row-accent"><td class="lb">3.0 – 4.0</td><td><span style="color:#0284C7; font-weight:700;">Nivel Autónomo</span></td><td>Alcanza satisfactoriamente los resultados de aprendizaje demostrando idoneidad y aplicación práctica.</td></tr>
                    <tr class="row-accent"><td class="lb">4.1 – 4.5</td><td><span style="color:#059669; font-weight:700;">Nivel Estratégico</span></td><td>Alcanza óptimamente los RA con capacidad de análisis crítico y solución de problemas organizacionales.</td></tr>
                    <tr class="row-accent"><td class="lb">4.6 – 5.0</td><td><span style="color:#7C3AED; font-weight:700;">Nivel Sobresaliente</span></td><td>Alcanza plenamente los RA demostrando innovación, liderazgo y excelencia técnica en el desempeño.</td></tr>
                </tbody>
            </table>

            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--carbon); margin:20px 0 12px;">
                <i class="fas fa-users-cog" style="color:var(--orange); margin-right:6px;"></i> Triada de Evaluativa y Mecanismos de Seguimiento
            </h4>
            <div class="grid-3">
                <div class="card">
                    <h4><i class="fas fa-user-edit" style="color:var(--orange);"></i> Autoevaluación</h4>
                    <p style="font-size:0.83rem;">Proceso metacognitivo donde el estudiante reflexiona sobre el logro de sus propios aprendizajes y fortalezas a mejorar.</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-users" style="color:var(--orange);"></i> Coevaluación</h4>
                    <p style="font-size:0.83rem;">Valoración entre pares mediante rúbricas objetivas durante trabajos en equipo, simulaciones y proyectos colaborativos.</p>
                </div>
                <div class="card">
                    <h4><i class="fas fa-chalkboard-teacher" style="color:var(--orange);"></i> Heteroevaluación</h4>
                    <p style="font-size:0.83rem;">Valoración docente directa respaldada por rúbricas socioformativas de desempeño medibles cualitativa y cuantitativamente.</p>
                </div>
            </div>

            <div class="evidence-box" style="margin-top:20px;">
                <i class="fas fa-check-circle"></i>
                <strong>Seguimiento Institucional:</strong> Los Comités Curriculares de Escuela y Reuniones de Área monitorean periódicamente los porcentajes de alcance de los RA por cohorte y asignatura para realizar intervenciones pedagógicas oportunas.
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
                <td>62 Asignaturas</td>
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
