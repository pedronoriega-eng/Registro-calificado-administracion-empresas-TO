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
    if (window.fitAllMatricesToScreen) setTimeout(window.fitAllMatricesToScreen, 50);
};

window.C3_SUBJECTS = [
  {
    "id": "prop_1",
    "semestre": 1,
    "nombre": "Fundamentos de AdministraciÃ³n",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Introduce los principios, teorÃas y enfoques de la administraciÃ³n moderna, analizando la evoluciÃ³n del pensamiento administrativo y su aplicaciÃ³n en organizaciones contemporÃ¡neas.",
    "ras": [
      "RARA1: : : Explica los fundamentos y funciones bÃ¡sicas de la administraciÃ³n en diferentes contextos organizacionales. RA",
      "RARA2: : : Analiza la evoluciÃ³n histÃ³rica y los enfoques modernos de la administraciÃ³n. RA",
      "RARA3: : : Aplica conceptos de planeaciÃ³n, organizaciÃ³n, direcciÃ³n y control en situaciones simuladas."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Fundamentos de AdministraciÃ³n",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Fundamentos de AdministraciÃ³n"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_2",
    "semestre": 1,
    "nombre": "Fundamentos Contables y Financieros",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Presenta los principios bÃ¡sicos de la contabilidad y las finanzas, el ciclo contable, los estados financieros y su interpretaciÃ³n para la toma de decisiones.",
    "ras": [
      "RARA1: : : Reconoce los principios contables y su importancia en la gestiÃ³n financiera. RA",
      "RARA2: : : Elabora registros contables bÃ¡sicos y analiza estados financieros simples. RA",
      "RARA3: : : Interpreta informaciÃ³n financiera para apoyar decisiones administrativas."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Fundamentos Contables y Financieros",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Fundamentos Contables y Financieros"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_3",
    "semestre": 1,
    "nombre": "Álgebra Lineal",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "BASICA",
    "prerrequisito": "Ninguno",
    "componente_id": "ciencias_basicas",
    "descripcion": "Desarrolla el pensamiento lÃ³gico- matemÃ¡tico aplicado a la resoluciÃ³n de problemas empresariales, financieros y econÃ³micos mediante modelos lineales.",
    "ras": [
      "RARA1: : : Emplea herramientas aaÁaÁaÁlgebraicas en la resoluciÃ³n de problemas administrativos y financieros. RA",
      "RARA2: : : Interpreta datos cuantitativos y desarrolla modelos lineales aplicados. RA",
      "RARA3: : : Utiliza el razonamiento lÃ³gico para plantear soluciones numÃ©ricas a situaciones reales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Álgebra Lineal",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Álgebra Lineal"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_4",
    "semestre": 1,
    "nombre": "Fundamentos de Mercadeo",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Aborda los conceptos esenciales del marketing, el comportamiento del consumidor y las estrategias de producto, precio, plaza y promociÃ³n.",
    "ras": [
      "RARA1: : : Comprende los principios bÃ¡sicos del mercadeo y su funciÃ³n en la gestiÃ³n empresarial. RA",
      "RARA2: : : Analiza el entorno del mercado y los factores que influyen en el comportamiento del consumidor. RA",
      "RARA3: : : DiseÃ±a estrategias bÃ¡sicas de mercadeo alineadas con los objetivos organizacionales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Fundamentos de Mercadeo",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Fundamentos de Mercadeo"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión estratégica de mercadeo, posicionamiento de marca y canales de distribución digitales.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y comercial.",
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
    "id": "prop_5",
    "semestre": 1,
    "nombre": "ComunicaciÃ³n Oral y Escrita",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Desarrolla competencias comunicativas para la expresiÃ³n oral y escrita en contextos acadÃ©micos y profesionales, fortaleciendo la argumentaciÃ³n y la redacciÃ³n tÃ©cnica.",
    "ras": [
      "RARA1: : : Aplica tÃ©cnicas de comunicaciÃ³n efectiva en contextos empresariales. RA",
      "RARA2: : : Redacta textos acadÃ©micos y profesionales con claridad y coherencia. RA",
      "RARA3: : : Utiliza la comunicaciÃ³n oral como herramienta de liderazgo y trabajo en equipo."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de ComunicaciÃ³n Oral y Escrita",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en ComunicaciÃ³n Oral y Escrita"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_6",
    "semestre": 1,
    "nombre": "Cátedra de la Paz y Resolución de Conflictos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "Promueve la reflexiÃ³n sobre la convivencia, los valores democrÃ¡ticos, la cultura de paz y la gestiÃ³n",
    "ras": [
      "RA1: Explica los principios teóricos y conceptos clave de Cátedra de la Paz y Resolución de Conflictos.",
      "RA2: Aplica herramientas metodológicas de Cátedra de la Paz y Resolución de Conflictos en la resolución de problemas empresariales.",
      "RA3: Diseña propuestas innovadoras y sostenibles para la toma de decisiones en Cátedra de la Paz y Resolución de Conflictos."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Cátedra de la Paz y Resolución de Conflictos",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Cátedra de la Paz y Resolución de Conflictos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_7",
    "semestre": 2,
    "nombre": "CÃ¡lculo Diferencial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Introduce los conceptos fundamentales del cÃ¡lculo aplicados al anÃ¡lisis de funciones, tasas de cambio y optimizaciÃ³n en procesos administrativos, econÃ³micos y financieros.",
    "ras": [
      "RARA1: : : Aplica conceptos de derivada en la interpretaciÃ³n de fenÃ³menos econÃ³micos y empresariales. RA",
      "RARA2: : : Resuelve problemas de optimizaciÃ³n relacionados con costos, ingresos y productividad. RA",
      "RARA3: : : Utiliza el cÃ¡lculo como herramienta analÃÉÉÉtica en la toma de decisiones administrativas."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de CÃ¡lculo Diferencial",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en CÃ¡lculo Diferencial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_8",
    "semestre": 2,
    "nombre": "MicroeconomÃa",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Analiza los principios de la economÃa desde la perspectiva del consumidor y del productor, abordando temas como la oferta, demanda, elasticidad y formaciÃ³n de precios.",
    "ras": [
      "RARA1: : : Explica el comportamiento del consumidor y del productor en distintos mercados. RA",
      "RARA2: : : Interpreta modelos microeconÃ³micos aplicados a la gestiÃ³n empresarial. RA",
      "RARA3: : : Analiza el impacto de los cambios en el mercado sobre la toma de decisiones empresariales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de MicroeconomÃa",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en MicroeconomÃa"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_9",
    "semestre": 2,
    "nombre": "EstadÃsÉÉtica Descriptiva",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Presenta los fundamentos de la estadÃsÉÉtica descriptiva aplicada al anÃ¡lisis y la interpretaciÃ³n de datos en contextos empresariales y sociales.",
    "ras": [
      "RARA1: : : Organiza y presenta informaciÃ³n estadÃsÉÉÉtica mediante tablas, grÃ¡ficos y medidas de tendencia central. RA",
      "RARA2: : : Analiza datos cuantitativos para apoyar procesos de decisiÃ³n administrativa. RA",
      "RARA3: : : Aplica mÃ©todos estadÃsticos descriptivos en estudios de mercado y diagnÃ³sticos empresariales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de EstadÃsÉÉtica Descriptiva",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en EstadÃsÉÉtica Descriptiva"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_10",
    "semestre": 2,
    "nombre": "LegislaciÃ³n Comercial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Estudia las normas bÃ¡sicas del derecho mercantil y su aplicaciÃ³n en la constituciÃ³n, funcionamiento y relaciones contractuales de las empresas.",
    "ras": [
      "RARA1: : : Reconoce el marco legal que regula las actividades comerciales y empresariales en Colombia. RA",
      "RARA2: : : Analiza casos prÃ¡cticos sobre contratos, sociedades y obligaciones mercantiles. RA",
      "RARA3: : : Aplica principios de legislaciÃ³n comercial en la gestiÃ³n y administraciÃ³n de organizaciones."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de LegislaciÃ³n Comercial",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en LegislaciÃ³n Comercial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_11",
    "semestre": 2,
    "nombre": "Costos y Presupuestos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos Contables y Financieros",
    "componente_id": "gestion_financiera",
    "descripcion": "Introduce los fundamentos del costeo, la planeaciÃ³n presupuestal y el control financiero como herramientas de apoyo a la gestiÃ³n administrativa.",
    "ras": [
      "RARA1: : : Clasifica y calcula los diferentes tipos de costos segÃºn su naturaleza y funciÃ³n empresarial. RA",
      "RARA2: : : Elabora presupuestos operativos y financieros bÃ¡sicos para la toma de decisiones. constructiva de los conflictos en entornos sociales y organizacionales. RA",
      "RARA3: : : Aplica herramientas de mediaciÃ³n y diÃ¡logo para la gestiÃ³n pacÃfica de conflictos. RARA3: : EvalÃºa el comportamiento de los costos y presupuestos para mejorar la eficiencia organizacional."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Costos y Presupuestos",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Costos y Presupuestos"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_12",
    "semestre": 2,
    "nombre": "InglÃ©s I",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Desarrolla competencias comunicativas bÃ¡sicas en lengua inglesa, enfocadas en la comprensiÃ³n y producciÃ³n de textos relacionados con la administraciÃ³n y los negocios.",
    "ras": [
      "RARA1: : : Comprende estructuras gramaÉÉÉticales bÃ¡sicas y vocabulario tÃ©cnico relacionado con el Ã¡mbito empresarial. RA",
      "RARA2: : : Produce textos orales y escritos simples en contextos acadÃ©micos y laborales. RA",
      "RARA3: : : Utiliza el inglÃ©s como herramienta para el acceso a informaciÃ³n y comunicaciÃ³n profesional. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de InglÃ©s I",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en InglÃ©s I"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_13",
    "semestre": 3,
    "nombre": "MacroeconomÃa",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Analiza el funcionamiento general de la economÃa a nivel nacional e internacional, abordando variables como el PIB, inflaciÃ³n, desempleo, polÃÉÉtica fiscal y monetaria.",
    "ras": [
      "RARA1: : : Explica las principales variables macroeconÃ³micas y su relaciÃ³n con la gestiÃ³n empresarial. RA",
      "RARA2: : : Analiza el impacto de las polÃÉÉÉticas econÃ³micas en los procesos administrativos y financieros. RA",
      "RARA3: : : Interpreta indicadores macroeconÃ³micos para la toma de decisiones estratÃ©gicas."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de MacroeconomÃa",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en MacroeconomÃa"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_14",
    "semestre": 3,
    "nombre": "AnÃ¡lisis Financiero",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Desarrolla herramientas para interpretar y evaluar los estados financieros, medir la rentabilidad, liquidez y solvencia de las organizaciones.",
    "ras": [
      "RARA1: : : Aplica tÃ©cnicas de anÃ¡lisis financiero para evaluar la situaciÃ³n econÃ³mica de una empresa. RA",
      "RARA2: : : Calcula e interpreta indicadores financieros clave para la gestiÃ³n organizacional. RA",
      "RARA3: : : Propone estrategias de mejoramiento financiero basadas en evidencias cuantitativas."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de AnÃ¡lisis Financiero",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en AnÃ¡lisis Financiero"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_15",
    "semestre": 3,
    "nombre": "EstadÃsÉÉtica Inferencial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Introduce los conceptos de inferencia estadÃsÉÉtica, estimaciÃ³n y pruebas de hipÃ³tesis aplicados a la toma de decisiones empresariales.",
    "ras": [
      "RARA1: : : Aplica mÃ©todos inferenciales para el anÃ¡lisis de muestras y poblaciones en contextos empresariales. RA",
      "RARA2: : : Interpreta resultados estadÃsticos para respaldar decisiones estratÃ©gicas. RA",
      "RARA3: : : DiseÃ±a y ejecuta estudios de muestreo y anÃ¡lisis de hipÃ³tesis aplicadas a la administraciÃ³n."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de EstadÃsÉÉtica Inferencial",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en EstadÃsÉÉtica Inferencial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_16",
    "semestre": 3,
    "nombre": "Procesos Administrativos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Administración",
    "componente_id": "procesos_operaciones",
    "descripcion": "Estudia las etapas del proceso administrativo y su aplicaciÃ³n prÃ¡cÉÉtica en la planeaciÃ³n, ejecuciÃ³n y control de actividades empresariales.",
    "ras": [
      "RARA1: : : Explica las fases del proceso administrativo y su aplicaciÃ³n en diferentes tipos de organizaciÃ³n. RA",
      "RARA2: : : DiseÃ±a planes operativos y de control aplicando herramientas de gestiÃ³n. RA",
      "RARA3: : : EvalÃºa la eficiencia de los procesos administrativos para el logro de objetivos organizacionales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Procesos Administrativos",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Procesos Administrativos"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_17",
    "semestre": 3,
    "nombre": "TeorÃa Organizacional",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Examina los enfoques clÃ¡sicos, modernos y contemporÃ¡neos de la teorÃa organizacional, su estructura, cultura y comportamiento.",
    "ras": [
      "RARA1: : : Analiza los principales modelos teÃ³ricos de la organizaciÃ³n y su evoluciÃ³n histÃ³rica. RA",
      "RARA2: : : EvalÃºa la estructura organizacional como elemento clave del desempeÃ±o institucional. RA",
      "RARA3: : : Propone mejoras en la organizaciÃ³n basadas en el anÃ¡lisis de cultura y estructura."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de TeorÃa Organizacional",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en TeorÃa Organizacional"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_18",
    "semestre": 3,
    "nombre": "InglÃ©s II",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Fortalece las habilidades comunicativas en inglÃ©s, con Ã©éénfasis en la comprensiÃ³n lectora y la interacciÃ³n en contextos empresariales.",
    "ras": [
      "RARA1: : : Utiliza estructuras intermedias del inglÃ©s en situaciones acadÃ©micas y profesionales. RA",
      "RARA2: : : Interpreta textos tÃ©cnicos y administrativos en lengua extranjera. RA",
      "RARA3: : : Se comunica oralmente en inglÃ©s en escenarios laborales y de trabajo colaborativo. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de InglÃ©s II",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en InglÃ©s II"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_19",
    "semestre": 4,
    "nombre": "InvestigaciÃ³n de Mercados",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "descripcion": "Analiza los principios, mÃ©todos y herramientas para la recolecciÃ³n, procesamiento e interpretaciÃ³n de informaciÃ³n del mercado, con el fin de apoyar la toma de decisiones comerciales.",
    "ras": [
      "RARA1: : : DiseÃ±a instrumentos y mÃ©todos para la recolecciÃ³n y anÃ¡lisis de datos de mercado. RA",
      "RARA2: : : Interpreta informaciÃ³n cuantitativa y cualitativa para la formulaciÃ³n de estrategias comerciales. RA",
      "RARA3: : : Aplica tÃ©cnicas de investigaciÃ³n de mercados en estudios orientados a la innovaciÃ³n empresarial."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de InvestigaciÃ³n de Mercados",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en InvestigaciÃ³n de Mercados"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_20",
    "semestre": 4,
    "nombre": "MatemÃ¡ÉÉtica Financiera",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Presenta los fundamentos de la matemÃ¡ÉÉtica aplicada a las finanzas, incluyendo el valor del dinero en el tiempo, tasas de interÃ©s y amortizaciÃ³n de crÃ©ditos.",
    "ras": [
      "RARA1: : : Aplica conceptos de valor del dinero en el tiempo en operaciones financieras. RA",
      "RARA2: : : Calcula tasas, rentabilidades y flujos de efectivo en contextos administrativos. RA",
      "RARA3: : : Utiliza herramientas financieras para analizar inversiones y decisiones de financiamiento."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de MatemÃ¡ÉÉtica Financiera",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en MatemÃ¡ÉÉtica Financiera"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_21",
    "semestre": 4,
    "nombre": "EconomÃa Colombiana e Internacional",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Examina las caracterÃsÉÉticas, estructura y dinÃ¡mica de la economÃa colombiana y su relaciÃ³n con los sistemas econÃ³micos internacionales.",
    "ras": [
      "RARA1: : : Analiza los sectores productivos y el comportamiento macroeconÃ³mico de Colombia. RA",
      "RARA2: : : EvalÃºa el impacto de la globalizaciÃ³n en el entorno empresarial nacional. RA",
      "RARA3: : : Interpreta las polÃÉÉÉticas econÃ³micas y su influencia en el comercio y la gestiÃ³n organizacional."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de EconomÃa Colombiana e Internacional",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en EconomÃa Colombiana e Internacional"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_22",
    "semestre": 4,
    "nombre": "Competencias Investigativas",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "descripcion": "Fortalece las habilidades investigativas para la formulaciÃ³n, diseÃ±o y desarrollo de proyectos de investigaciÃ³n aplicada en el campo empresarial.",
    "ras": [
      "RARA1: : : Identifica problemas de investigaciÃ³n en el Ã¡mbito de la administraciÃ³n. RA",
      "RARA2: : : DiseÃ±a proyectos de investigaciÃ³n con metodologÃa cientÃfica. RA",
      "RARA3: : : Aplica herramientas para la recolecciÃ³n, anÃ¡lisis e interpretaciÃ³n de datos en estudios empresariales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Competencias Investigativas",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Competencias Investigativas"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_23",
    "semestre": 4,
    "nombre": "Derecho Laboral y Seguridad Social",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "Estudia el marco jurÃdico que regula las relaciones laborales, los contratos de trabajo y el sistema de seguridad social en Colombia.",
    "ras": [
      "RARA1: : : Explica los principios legales que rigen las relaciones laborales y el empleo. RA",
      "RARA2: : : Analiza casos prÃ¡cticos relacionados con la aplicaciÃ³n del derecho laboral y la seguridad social. RA",
      "RARA3: : : Aplica la normativa vigente en procesos de contrataciÃ³n y gestiÃ³n del talento humano."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Derecho Laboral y Seguridad Social",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Derecho Laboral y Seguridad Social"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_24",
    "semestre": 4,
    "nombre": "InglÃ©s III",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Consolida las competencias comunicativas en inglÃ©s, con Ã©éénfasis en vocabulario tÃ©cnico, redacciÃ³n de informes y comprensiÃ³n de textos empresariales.",
    "ras": [
      "RARA1: : : Interpreta y redacta documentos administrativos y financieros en inglÃ©s. RA",
      "RARA2: : : Participa en conversaciones y presentaciones orales en contextos profesionales. RA",
      "RARA3: : : Aplica vocabulario tÃ©cnico-administrativo en la comunicaciÃ³n escrita y oral. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de InglÃ©s III",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en InglÃ©s III"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_25",
    "semestre": 5,
    "nombre": "AdministraciÃ³n Financiera",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Profundiza en la gestiÃ³n financiera empresarial, abarcando la planeaciÃ³n, inversiÃ³n, financiaciÃ³n y control de los recursos econÃ³micos.",
    "ras": [
      "RARA1: : : Analiza la estructura financiera y los flujos de efectivo de las organizaciones. RA",
      "RARA2: : : EvalÃºa proyectos de inversiÃ³n aplicando herramientas financieras. RA",
      "RARA3: : : Propone estrategias de financiaciÃ³n y control financiero para la sostenibilidad organizacional."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de AdministraciÃ³n Financiera",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en AdministraciÃ³n Financiera"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_26",
    "semestre": 5,
    "nombre": "GestiÃ³n de Operaciones",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "procesos_operaciones",
    "descripcion": "Estudia los procesos productivos y de servicios, la administraciÃ³n de recursos, la planeaciÃ³n de la capacidad y el control de la producciÃ³n.",
    "ras": [
      "RARA1: : : DiseÃ±a procesos productivos eficientes basados en modelos de gestiÃ³n de operaciones. RA",
      "RARA2: : : Aplica tÃ©cnicas de planeaciÃ³n y control de operaciones para optimizar recursos. RA",
      "RARA3: : : EvalÃºa indicadores de productividad y calidad en procesos organizacionales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de GestiÃ³n de Operaciones",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en GestiÃ³n de Operaciones"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_27",
    "semestre": 5,
    "nombre": "Gerencia del Talento Humano",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Procesos Administrativos",
    "componente_id": "talento_liderazgo",
    "descripcion": "Aborda los fundamentos, procesos y estrategias de gestiÃ³n del talento humano orientadas al desarrollo integral, la motivaciÃ³n y la productividad.",
    "ras": [
      "RARA1: : : DiseÃ±a polÃÉÉÉticas y estrategias de gestiÃ³n humana coherentes con los objetivos organizacionales. RA",
      "RARA2: : : EvalÃºa el desempeÃ±o laboral aplicando instrumentos de mediciÃ³n de competencias. RA",
      "RARA3: : : Implementa programas de bienestar y desarrollo del talento humano."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Gerencia del Talento Humano",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Gerencia del Talento Humano"
    ],
    "perfil_asociado": "Competencia 5 & 6: Liderazgo colaborativo, gestión de equipos, compromiso ético y desarrollo organizacional.",
    "rap_asociado": "RAP 3 & RAP 10: Diseña políticas de gestión humana y aplica principios éticos en la toma de decisiones.",
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
    "id": "prop_28",
    "semestre": 5,
    "nombre": "Gerencia de Marketing",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Fundamentos de Mercadeo",
    "componente_id": "gestion_financiera",
    "descripcion": "Analiza los principios de direcciÃ³n y gestiÃ³n estratÃ©gica del mercadeo, orientados al posicionamiento, segmentaciÃ³n y fidelizaciÃ³n de clientes.",
    "ras": [
      "RARA1: : : Formula estrategias de marketing alineadas con los objetivos organizacionales. RA",
      "RARA2: : : EvalÃºa la efectividad de las estrategias de producto, precio, plaza y promociÃ³n. RA",
      "RARA3: : : DiseÃ±a planes de marketing con enfoque sostenible y digital."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Gerencia de Marketing",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Gerencia de Marketing"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión estratégica de mercadeo, posicionamiento de marca y canales de distribución digitales.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y comercial.",
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
    "id": "prop_29",
    "semestre": 5,
    "nombre": "ÃÉÉtica y Responsabilidad Social Empresarial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "humanistica_bilinguismo",
    "descripcion": "Promueve la reflexiÃ³n Ã©ÉÉtica y el compromiso social del administrador frente a las implicaciones econÃ³micas, ambientales y humanas de sus decisiones.",
    "ras": [
      "RARA1: : : Analiza dilemas Ã©ticos en la gestiÃ³n y toma de decisiones empresariales. RA",
      "RARA2: : : Propone estrategias de responsabilidad social corporativa y sostenibilidad. RA",
      "RARA3: : : Aplica principios Ã©ticos en la gestiÃ³n organizacional y la proyecciÃ³n social."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de ÃÉÉtica y Responsabilidad Social Empresarial",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en ÃÉÉtica y Responsabilidad Social Empresarial"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_30",
    "semestre": 5,
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "descripcion": "Introduce los principios de sostenibilidad y economÃa circular aplicados a la administraciÃ³n y la innovaciÃ³n empresarial.",
    "ras": [
      "RARA1: : : Explica los fundamentos de la sostenibilidad y la economÃa circular. RA",
      "RARA2: : : EvalÃºa prÃ¡cÉÉÉticas empresariales sostenibles orientadas a la eficiencia y al uso responsable de recursos. RA",
      "RARA3: : : Propone estrategias de economÃa circular aplicadas a procesos organizacionales. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "id": "prop_31",
    "semestre": 6,
    "nombre": "PlaneaciÃ³n EstratÃ©gica y Prospectiva",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Desarrolla metodologÃas y herramientas para la formulaciÃ³n, implementaciÃ³n y evaluaciÃ³n de estrategias organizacionales con enfoque prospectivo y competitivo.",
    "ras": [
      "RARA1: : : Formula planes estratÃ©gicos alineados con la misiÃ³n y visiÃ³n institucional. RA",
      "RARA2: : : Aplica metodologÃas prospectivas para anticipar escenarios organizacionales. RA",
      "RARA3: : : EvalÃºa resultados estratÃ©gicos mediante indicadores de desempeÃ±o y control."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de PlaneaciÃ³n EstratÃ©gica y Prospectiva",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en PlaneaciÃ³n EstratÃ©gica y Prospectiva"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_32",
    "semestre": 6,
    "nombre": "Gerencia de ProducciÃ³n",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Analiza los modelos de gestiÃ³n de la producciÃ³n y la optimizaciÃ³n de procesos productivos bajo criterios de eficiencia, calidad y sostenibilidad.",
    "ras": [
      "RARA1: : : DiseÃ±a y gestiona procesos productivos orientados a la eficiencia y calidad. RA",
      "RARA2: : : Implementa tÃ©cnicas de control de inventarios y planeaciÃ³n de la producciÃ³n. RA",
      "RARA3: : : EvalÃºa la productividad y sostenibilidad de los sistemas productivos."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Gerencia de ProducciÃ³n",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Gerencia de ProducciÃ³n"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_33",
    "semestre": 6,
    "nombre": "FormulaciÃ³n y EvaluaciÃ³n de Proyectos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "descripcion": "Presenta los fundamentos tÃ©cnicos, financieros y metodolÃ³gicos para el diseÃ±o, formulaciÃ³n y evaluaciÃ³n de proyectos empresariales y sociales.",
    "ras": [
      "RARA1: : : DiseÃ±a proyectos empresariales con enfoque metodolÃ³gico y financiero. RA",
      "RARA2: : : EvalÃºa la viabilidad tÃ©cnica, econÃ³mica y social de proyectos. RA",
      "RARA3: : : Utiliza herramientas de planeaciÃ³n y evaluaciÃ³n para la gestiÃ³n de proyectos sostenibles."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de FormulaciÃ³n y EvaluaciÃ³n de Proyectos",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en FormulaciÃ³n y EvaluaciÃ³n de Proyectos"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_34",
    "semestre": 6,
    "nombre": "Sistemas Integrados de GestiÃ³n (HSEQ)",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "procesos_operaciones",
    "descripcion": "Estudia los principios, normas y herramientas de los sistemas integrados de gestiÃ³n de calidad, ambiente, seguridad y salud en el trabajo.",
    "ras": [
      "RARA1: : : Explica la estructura y alcance de los sistemas integrados de gestiÃ³n. RA",
      "RARA2: : : Aplica normas ISO y estÃ¡ndares internacionales en procesos empresariales. RA",
      "RARA3: : : DiseÃ±a propuestas de mejora continua para la gestiÃ³n de la calidad y sostenibilidad."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Sistemas Integrados de GestiÃ³n (HSEQ)",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Sistemas Integrados de GestiÃ³n (HSEQ)"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_35",
    "semestre": 6,
    "nombre": "Habilidades Gerenciales y Liderazgo",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Gerencia del Talento Humano",
    "componente_id": "talento_liderazgo",
    "descripcion": "Desarrolla competencias de liderazgo, comunicaciÃ³n, negociaciÃ³n y gestiÃ³n de equipos de trabajo orientadas a la efectividad organizacional.",
    "ras": [
      "RARA1: : : Identifica estilos de liderazgo y su impacto en la dinÃ¡mica organizacional. RA",
      "RARA2: : : Aplica estrategias de comunicaciÃ³n y negociaciÃ³n en la gestiÃ³n de equipos. RA",
      "RARA3: : : EvalÃºa su desempeÃ±o gerencial mediante procesos de retroalimentaciÃ³n y liderazgo colaborativo."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Habilidades Gerenciales y Liderazgo",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Habilidades Gerenciales y Liderazgo"
    ],
    "perfil_asociado": "Competencia 5 & 6: Liderazgo colaborativo, gestión de equipos, compromiso ético y desarrollo organizacional.",
    "rap_asociado": "RAP 3 & RAP 10: Diseña políticas de gestión humana y aplica principios éticos en la toma de decisiones.",
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
    "id": "prop_36",
    "semestre": 6,
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "descripcion": "Profundiza en temÃ¡ÉÉticas emergentes del marketing sostenible y la transformaciÃ³n digital en entornos empresariales contemporÃ¡neos.",
    "ras": [
      "RARA1: : : Analiza tendencias de marketing sostenible y digital. RA",
      "RARA2: : : DiseÃ±a estrategias de comunicaciÃ³n responsables e innovadoras. RA",
      "RARA3: : : Aplica herramientas digitales para la gestiÃ³n del mercadeo y la promociÃ³n empresarial. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "id": "prop_37",
    "semestre": 7,
    "nombre": "Gerencia Financiera",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Profundiza en las estrategias de gestiÃ³n financiera avanzada, incluyendo la planeaciÃ³n financiera, estructura de capital, valoraciÃ³n de empresas y anÃ¡lisis de inversiones.",
    "ras": [
      "RARA1: : : EvalÃºa la estructura de capital y la rentabilidad de las organizaciones. RA",
      "RARA2: : : Aplica modelos financieros para la valoraciÃ³n de empresas y toma de decisiones de inversiÃ³n. RA",
      "RARA3: : : Formula estrategias financieras orientadas al crecimiento y sostenibilidad empresarial."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Gerencia Financiera",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Gerencia Financiera"
    ],
    "perfil_asociado": "Competencia 2: Análisis financiero, contable y económico para la optimización de recursos y sostenibilidad.",
    "rap_asociado": "RAP 2: Interpreta información financiera, evalúa indicadores de gestión y propone estrategias de valor.",
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
    "id": "prop_38",
    "semestre": 7,
    "nombre": "Gerencia de Ventas y Canales de DistribuciÃ³n",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Analiza los procesos de planificaciÃ³n, ejecuciÃ³n y control de las estrategias de ventas y distribuciÃ³n en mercados nacionales e internacionales.",
    "ras": [
      "RARA1: : : DiseÃ±a estrategias de ventas efectivas alineadas con los objetivos organizacionales RA",
      "RARA2: : : EvalÃºa la eficiencia de los canales de distribuciÃ³n y su impacto en la competitividad. RA",
      "RARA3: : : Aplica tÃ©cnicas de negociaciÃ³n y liderazgo comercial para fortalecer las relaciones con clientes."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Gerencia de Ventas y Canales de DistribuciÃ³n",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Gerencia de Ventas y Canales de DistribuciÃ³n"
    ],
    "perfil_asociado": "Competencia 1 & 4: Gestión estratégica de mercadeo, posicionamiento de marca y canales de distribución digitales.",
    "rap_asociado": "RAP 5: Diseña e implementa planes de mercadeo innovadores con enfoque digital y comercial.",
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
    "id": "prop_39",
    "semestre": 7,
    "nombre": "Big Data y AnalÃÉÉtica de Datos",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Ninguno",
    "componente_id": "tecnologia",
    "descripcion": "Introduce los conceptos, herramientas y aplicaciones de la analÃÉÉtica de datos y Big Data para la toma de decisiones en entornos empresariales.",
    "ras": [
      "RARA1: : : Comprende los fundamentos del anÃ¡lisis de grandes volÃºmenes de datos aplicados a la gestiÃ³n empresarial. RA",
      "RARA2: : : Utiliza herramientas digitales y modelos analÃticos para la interpretaciÃ³n de datos. RA",
      "RARA3: : : Aplica la analÃÉÉÉtica de datos en la optimizaciÃ³n de procesos administrativos y estratÃ©gicos."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Big Data y AnalÃÉÉtica de Datos",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Big Data y AnalÃÉÉtica de Datos"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_40",
    "semestre": 7,
    "nombre": "Emprendimiento e InnovaciÃ³n",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "investigacion_innovacion",
    "descripcion": "Desarrolla competencias para la creaciÃ³n, desarrollo y sostenibilidad de nuevos modelos de negocio basados en la innovaciÃ³n y el pensamiento creativo.",
    "ras": [
      "RARA1: : : Formula ideas de negocio innovadoras con potencial de sostenibilidad. RA",
      "RARA2: : : DiseÃ±a planes de emprendimiento con enfoque estratÃ©gico y financiero. RA",
      "RARA3: : : EvalÃºa la viabilidad y escalabilidad de proyectos emprendedores."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Emprendimiento e InnovaciÃ³n",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Emprendimiento e InnovaciÃ³n"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_41",
    "semestre": 7,
    "nombre": "GestiÃ³n de la Calidad",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "procesos_operaciones",
    "descripcion": "Examina los principios, metodologÃas y herramientas de la gestiÃ³n de la calidad total, orientadas a la mejora continua y la satisfacciÃ³n del cliente.",
    "ras": [
      "RARA1: : : Aplica modelos y estÃ¡ndares de calidad en procesos organizacionales. RA",
      "RARA2: : : EvalÃºa la eficacia de los sistemas de control y mejoramiento continuo. RA",
      "RARA3: : : DiseÃ±a estrategias para el fortalecimiento de la cultura de calidad."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de GestiÃ³n de la Calidad",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en GestiÃ³n de la Calidad"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_42",
    "semestre": 7,
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "descripcion": "Profundiza en la gestiÃ³n Ã©ÉÉtica, la equidad y la inclusiÃ³n como pilares de la gobernanza corporativa y la sostenibilidad organizacional.",
    "ras": [
      "RARA1: : : Analiza los principios Ã©ticos y de buen gobierno en la administraciÃ³n empresarial. RA",
      "RARA2: : : EvalÃºa polÃÉÉÉticas organizacionales orientadas a la inclusiÃ³n y equidad. RA",
      "RARA3: : : Propone estrategias de gobernanza responsable para el fortalecimiento institucional. Semestre Asignatura Contenido del Curso Resultados de Aprendizaje (RA)"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "id": "prop_43",
    "semestre": 8,
    "nombre": "Pensamiento EstratÃ©gico y Prospectivo",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Profundiza en la planeaciÃ³n estratÃ©gica avanzada y la prospectiva empresarial para la anticipaciÃ³n de escenarios y la toma de decisiones en entornos dinÃ¡micos.",
    "ras": [
      "RARA1: : : Aplica metodologÃas de anÃ¡lisis estratÃ©gico y prospectivo en la formulaciÃ³n de planes organizacionales. RA",
      "RARA2: : : EvalÃºa escenarios futuros considerando factores econÃ³micos, sociales y tecnolÃ³gicos. RA",
      "RARA3: : : DiseÃ±a estrategias innovadoras orientadas a la sostenibilidad y la competitividad."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Pensamiento EstratÃ©gico y Prospectivo",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Pensamiento EstratÃ©gico y Prospectivo"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_44",
    "semestre": 8,
    "nombre": "Gerencia de la InnovaciÃ³n y la TecnologÃa",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Analiza los procesos de gestiÃ³n de la innovaciÃ³n, la transferencia tecnolÃ³gica y la transformaciÃ³n digital en las organizaciones.",
    "ras": [
      "RARA1: : : Comprende los modelos de innovaciÃ³n y su aplicaciÃ³n en la gestiÃ³n empresarial. RA",
      "RARA2: : : EvalÃºa el impacto de la tecnologÃa en la productividad y sostenibilidad organizacional. RA",
      "RARA3: : : Formula estrategias para la incorporaciÃ³n de la innovaciÃ³n en los procesos empresariales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Gerencia de la InnovaciÃ³n y la TecnologÃa",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Gerencia de la InnovaciÃ³n y la TecnologÃa"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_45",
    "semestre": 8,
    "nombre": "Proyecto de Grado",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "TRANSVERSAL",
    "prerrequisito": "Competencias Investigativas",
    "componente_id": "investigacion_innovacion",
    "descripcion": "Integra los conocimientos adquiridos a lo largo del programa mediante el desarrollo de un proyecto aplicado de investigaciÃ³n o intervenciÃ³n empresarial.",
    "ras": [
      "RARA1: : : Formula un proyecto aplicado que responda a una necesidad empresarial o social. RA",
      "RARA2: : : Aplica metodologÃas de investigaciÃ³n para la soluciÃ³n de problemas administrativos. RA",
      "RARA3: : : Sustenta los resultados del proyecto de manera tÃ©cnica, Ã©ÉÉÉtica y argumentada."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Proyecto de Grado",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Proyecto de Grado"
    ],
    "perfil_asociado": "Competencia 2 & 4: Pensamiento crítico, investigación aplicada, bilingüismo y herramientas tecnológicas emergentes.",
    "rap_asociado": "RAP 6 & RAP 9: Aplica tecnologías de la información, analítica de datos e investigación para la solución de problemas empresariales.",
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
    "id": "prop_46",
    "semestre": 8,
    "nombre": "Seminario de ActualizaciÃ³n Empresarial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Ninguno",
    "componente_id": "gestion_financiera",
    "descripcion": "Aborda temas contemporÃ¡neos en administraciÃ³n, liderazgo, sostenibilidad y transformaciÃ³n digital a partir del anÃ¡lisis de casos y tendencias globales.",
    "ras": [
      "RARA1: : : Analiza tendencias y retos actuales de la gestiÃ³n empresarial global. RA",
      "RARA2: : : EvalÃºa buenas prÃ¡cÉÉÉticas de direcciÃ³n y liderazgo en contextos internacionales. RA",
      "RARA3: : : Propone estrategias innovadoras basadas en el anÃ¡lisis de casos reales."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Seminario de ActualizaciÃ³n Empresarial",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Seminario de ActualizaciÃ³n Empresarial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "id": "prop_47",
    "semestre": 8,
    "nombre": "Electiva I (Desarrollo Sostenible y Economía Circular)",
    "tipo": "Electiva",
    "creditos": 3,
    "area": "ELECTIVA",
    "prerrequisito": "Ninguno",
    "componente_id": "electivo",
    "descripcion": "Desarrolla competencias para integrar la transformaciÃ³n digital y la sostenibilidad financiera en los procesos organizacionales.",
    "ras": [
      "RARA1: : : Analiza la relaciÃ³n entre innovaciÃ³n tecnolÃ³gica y sostenibilidad econÃ³mica. RA",
      "RARA2: : : Propone estrategias financieras sostenibles para la gestiÃ³n organizacional. RA",
      "RARA3: : : Aplica herramientas digitales en la planeaciÃ³n y control financiero."
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Electiva I (Desarrollo Sostenible y Economía Circular)",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Electiva I (Desarrollo Sostenible y Economía Circular)"
    ],
    "perfil_asociado": "Competencia 3 & 7: Diseña y lidera proyectos de profundización profesional, desarrollo sostenible e innovación.",
    "rap_asociado": "RAP 4 & RAP 7: Evalúa proyectos de emprendimiento, economía circular y responsabilidad social.",
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
    "id": "prop_48",
    "semestre": 8,
    "nombre": "Juego Gerencial",
    "tipo": "Obligatoria",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Pensamiento Estratégico y Prospectivo",
    "componente_id": "gestion_financiera",
    "descripcion": "Simula la gestiÃ³n integral de una organizaciÃ³n a travÃ©s de la toma de decisiones estratÃ©gicas en entornos competitivos.",
    "ras": [
      "RARA1: : : Integra conocimientos de las diferentes Ã¡reas funcionales para la toma de decisiones gerenciales. RA",
      "RARA2: : : EvalÃºa el desempeÃ±o organizacional en escenarios simulados de competencia empresarial. RA",
      "RARA3: : : Demuestra liderazgo, pensamiento crÃtico y capacidad de negociaciÃ³n en la gestiÃ³n estratÃ©gica. Fuente: ConstrucciÃ³n del programa 3.8.1. Lineamientos de innovaciÃ³n pedagÃ³gica y didÃ¡cÉÉÉtica adoptados por la instituciÃ³n La CorporaciÃ³n fundamenta su modelo pedagÃ³gico âFormaciÃ³n en contextos de aplicaciÃ³nâ en las teorÃas del aprendizaje del constructivismo social, escuela nueva y aprendizaje significativo. De la misma forma, el modelo encuentra coherencia con el lema del Proyecto Educativo institucional âAprender a convertirseâ en cuanto la a la capacidad que tiene el estudiante en la autotransformaciÃ³n y la de su entorno y mediante la construcciÃ³n colectiva del conocimiento. Los lineamientos de innovaciÃ³n pedagÃ³gica y didÃ¡cÉÉÉtica adoptados por la CorporaciÃ³n Escuela TecnolÃ³gica de Oriente probablemente estÃ¡n diseÃ±ados para alinearse con su misiÃ³n educativa y sus objetivos estratÃ©gicos. Los lineamientos incluyen aspectos como: 1. Enfoque centrado en el estudiante: MetodologÃas activas que promueven el aprendizaje autÃ³nomo y colaborativo, como aprendizaje basado en proyectos (ABP), aprendizaje-servicio, y el aprendizaje significativo. 2. IntegraciÃ³n tecnolÃ³gica: Uso de herramientas digitales y plataformas virtuales que faciliten el acceso al conocimiento y fortalezcan las competencias digitales de estudiantes y docentes. 3. CurrÃculo flexible y contextualizado: DiseÃ±ado para responder a las necesidades del entorno laboral y social, promoviendo la adaptabilidad de los programas acadÃ©micos a los cambios del mercado y las tendencias globales. 4. Fortalecimiento de competencias socioemocionales: IncorporaciÃ³n de estrategias que fomenten el liderazgo, la resoluciÃ³n de problemas, la comunicaciÃ³n efectiva y el trabajo en equipo. 5. InclusiÃ³n y equidad: Fomentar un aprendizaje accesible y diverso que respete y valore las diferencias individuales. 6. EvaluaciÃ³n innovadora: Uso de rÃºbricas, portafolios, proyectos integradores y evaluaciones continuas para medir el aprendizaje de manera integral. 3.9. Componentes de interacciÃ³n En el marco del programa de AdministraciÃ³n de Empresas ofertado en modalidad de registro Ãºnico (presencial â virtual), la interacciÃ³n entre los actores del proceso formativo se concibe de manera diferenciada segÃºn la modalidad, en coherencia con sus particularidades pedagÃ³gicas, didÃ¡cÉÉÉticas y tecnolÃ³gicas. En la modalidad presencial, los componentes de interacciÃ³n se fundamentan en la relaciÃ³n directa entre estudiante y docente en ambientes fÃsicos institucionales, favoreciendo el desarrollo de actividades acadÃ©micas con acompaÃ±amiento continuo mediante clases, talleres, seminarios y demÃ¡s estrategias propias del trabajo en aula. Por su parte, en la modalidad virtual, la interacciÃ³n se desarrolla a travÃ©s de ambientes virtuales de aprendizaje, donde la mediaciÃ³n tecnolÃ³gica es el eje central del proceso formativo. En este sentido, la interacciÃ³n se da mediante: â¢ Espacios asincrÃ³nicos, como foros, recursos digitales, actividades en plataforma y retroalimentaciÃ³n diferida. â¢ Espacios sincrÃ³nicos virtuales, concebidos como estrategias de acompaÃ±amiento pedagÃ³gico en lÃnea, sin que impliquen presencialidad fÃsica ni equivalencia con clases tradicionales. En esta modalidad, el proceso formativo privilegia el aprendizaje autÃ³nomo del estudiante, orientado y acompaÃ±ado por el docente a travÃ©s de herramientas tecnolÃ³gicas institucionales, garantizando la interacciÃ³n, el seguimiento y el logro de los resultados de aprendizaje. 3.9.1. ArticulaciÃ³n del programa con los contextos locales, regionales y globales El programa de AdministraciÃ³n de Empresas en modalidad de registro Ãºnico se articula de manera integral con los contextos locales, regionales y globales al formar profesionales con capacidades para comprender y responder a las dinÃ¡micas econÃ³micas, sociales y culturales de su entorno inmediato. SegÃºn (GarcÃa & SÃ¡nchez, 2020), la educaciÃ³n virtual fomenta la inclusiÃ³n al permitir el acceso a la formaciÃ³n desde cualquier lugar, potenciando la interacciÃ³n entre estudiantes de diversos contextos culturales y socioeconÃ³micos. AdemÃ¡s, este enfoque facilita el anÃ¡lisis de las necesidades especÃficas de las comunidades locales, permitiendo la identificaciÃ³n de oportunidades de emprendimiento y desarrollo sostenible, lo que refuerza la conexiÃ³n entre la academia y el entorno social inmediato (ÃÁlvarez, MuÃ±oz, & PÃ©rez, 2019). En el Ã¡mbito regional y global, el programa incorpora contenidos que promueven competencias interculturales, pensamiento crÃtico y habilidades estratÃ©gicas esenciales para enfrentar los retos de la globalizaciÃ³n. SegÃºn Porter (2008), la competitividad de las organizaciones depende de la capacidad de sus lÃderes para interpretar tendencias internacionales y aprovechar oportunidades en mercados globales. Asimismo, las metodologÃas activas, como la simulaciÃ³n empresarial y el aprendizaje basado en proyectos, desarrollan en los estudiantes una visiÃ³n estratÃ©gica y adaptativa que les permite tomar decisiones informadas y Ã©ÉÉÉticas, contribuyendo al fortalecimiento de sus organizaciones y su integraciÃ³n con el entorno global (Morin, 2017) 3.9.2. Estrategias para la promociÃ³n de la internacionalizaciÃ³n del currÃculo La CorporaciÃ³n Escuela TecnolÃ³gica del Oriente en el marco de su polÃÉÉÉtica de internacionalizaciÃ³n establece los lineamientos para la internacionalizaciÃ³n del currÃculo de los programas acadÃ©micos, los siguientes elementos: â¢ Coordinar esfuerzos entre las facultades y Ã¡reas acadÃ©micas para garantizar la participaciÃ³n de la InstituciÃ³n en foros, congresos y demÃ¡s actividades acadÃ©micas que generen visibilidad internacional. â¢ Ofrecer al estudiante acercamientos a contextos internacionales e interculturales que le permitan tener una mentalidad âglobalâ a travÃ©s de docentes, tutores y expositores internacionales. â¢ Trabajar desde las facultades y Ã¡reas acadÃ©micas para lograr doble titulaciÃ³n, titulaciÃ³n conjunta y homologaciÃ³n de programas acadÃ©micos de la InstituciÃ³n. â¢ Actualizar permanentemente los currÃculos de los programas acadÃ©micos de acuerdo con las tendencias nacionales e internacionales que permitan dar respuesta a las necesidades del entorno global. â¢ Incluir innovaciÃ³n tecnolÃ³gica dentro de los currÃculos acadÃ©micos. Las estrategias del programa de AdministraciÃ³n de Empresas, de la CorporaciÃ³n Escuela TecnolÃ³gica de Oriente, para incorporar dimensiones internacionales e interculturales en el currÃculo y en las prÃ¡cÉÉÉticas pedagÃ³gicas, se enfoca en varias Ã¡reas clave para enriquecer el aprendizaje de los estudiantes y promover competencias distintivas de un ciudadano global. A continuaciÃ³n, se detallan algunas de estas estrategias: 1. CurrÃculo Globalizado y Multicultural â¢ MÃ³dulos internacionales: Incluir cursos que aborden temas clave de la gestiÃ³n empresarial global, como comercio internacional, gestiÃ³n de la diversidad cultural, Ã©ÉÉÉtica global y sostenibilidad internacional. â¢ Estudios de caso internacionales: Incorporar ejemplos prÃ¡cticos y estudios de caso de empresas de diferentes regiones del mundo para analizar cÃ³mo las decisiones empresariales son influenciadas por contextos internacionales y culturales diversos. â¢ Asignaturas interculturales: Cursos que profundicen en la comprensiÃ³n de diferentes culturas empresariales, costumbres, valores y prÃ¡cÉÉÉticas laborales en distintas partes del mundo. 2. ColaboraciÃ³n Internacional â¢ Proyectos en equipo con estudiantes internacionales: Fomentar la colaboraciÃ³n entre estudiantes de diferentes paÃses a travÃ©s de proyectos grupales virtuales. Esto ayuda a los estudiantes a desarrollar habilidades de comunicaciÃ³n intercultural, trabajo en equipo global y resoluciÃ³n de problemas desde diversas perspectivas. â¢ Intercambios acadÃ©micos virtuales: Establecer alianzas con universidades extranjeras para permitir que los estudiantes participen en programas de intercambio acadÃ©mico, debates y seminarios virtuales internacionales. 3. TecnologÃas de Aprendizaje Global â¢ Plataformas colaborativas internacionales: Utilizar plataformas digitales que faciliten la interacciÃ³n entre estudiantes de diferentes paÃses. Herramientas como foros, videoconferencias y wikis permiten intercambiar ideas y experiencias en tiempo real. â¢ Simuladores de negocios internacionales: Integrar simuladores de gestiÃ³n empresarial que permitan a los estudiantes enfrentar situaciones de toma de decisiones empresariales en un contexto global, como mercados internacionales y relaciones interculturales 4. Perspectiva Internacional en la EvaluaciÃ³n â¢ EvaluaciÃ³n de competencias interculturales: Implementar mÃ©todos de evaluaciÃ³n que no solo midan los conocimientos tÃ©cnicos, sino tambiÃ©n las habilidades interculturales y la capacidad para adaptarse a contextos multiculturales. â¢ Portafolios de experiencias internacionales: Los estudiantes pueden documentar sus experiencias virtuales e interculturales en portafolios, lo que les permite reflexionar sobre su aprendizaje y sus capacidades para gestionar equipos y empresas a nivel global. 5. Desarrollo de Competencias Transversales â¢ Lenguas extranjeras: Incluir mÃ³dulos o recursos para el aprendizaje de lenguas extranjeras, especialmente inglÃ©s y otros idiomas relevantes en los negocios internacionales, promoviendo asÃ la comunicaciÃ³n efectiva en un entorno multicultural. â¢ ÃÉÉÉtica y Responsabilidad Social Empresarial Global: Incorporar el estudio de la Ã©ÉÉÉtica empresarial global y los desafÃos de la responsabilidad social empresarial en diferentes culturas y regiones del mundo. 6. Red de Contactos Internacionales â¢ Redes profesionales globales: Establecer vÃnculos con redes de empresas y profesionales internacionales para proporcionar a los estudiantes acceso a eventos, conferencias y seminarios globales, ampliando su visiÃ³n sobre la administraciÃ³n de empresas en un contexto internacional. â¢ MentorÃa internacional: Conectar a los estudiantes con mentores internacionales que puedan guiarlos en su desarrollo profesional y ayudarles a comprender mejor los desafÃos y oportunidades de operar en mercados globales. Estas estrategias permiten que los estudiantes no solo comprendan la teorÃa y las prÃ¡cÉÉÉticas de la administraciÃ³n de empresas, sino que tambiÃ©n estÃ©n preparados para enfrentar y prosperar en un entorno empresarial globalizado y multicultural. Estas estrategias pueden llevarse a cabo en los siguientes Ã¡mbitos: contenidos curriculares, estrategias pedagÃ³gicas, actividades extracurriculares y/o recursos. Los contenidos curriculares del programa de AdministraciÃ³n de Empresas de la CorporaciÃ³n Escuela TecnolÃ³gica de Oriente deben reflejar las tendencias y problemÃ¡ÉÉÉticas globales, regionales e internacionales que son relevantes para la formaciÃ³n de profesionales con visiÃ³n global y habilidades interculturales. A continuaciÃ³n, se detallan algunas temÃ¡ÉÉÉticas clave a incorporar: 1. Tendencias Globales y Regionales en el Campo de la AdministraciÃ³n de Empresas â¢ TransformaciÃ³n digital y automatizaciÃ³n: Estudio de las nuevas tecnologÃas, como la inteligencia artificial, la automatizaciÃ³n de procesos, el big data y el anÃ¡lisis predictivo, y su impacto en la gestiÃ³n empresarial a nivel global. â¢ GlobalizaciÃ³n y mercados emergentes: Estrategias para operar en mercados globalizados, con Ã©ééénfasis en las oportunidades y desafÃos que representan los mercados emergentes, como Asia, ÃÁfrica y AmÃ©rica Latina. â¢ Sostenibilidad y negocios verdes: Tendencias hacia la sostenibilidad empresarial, incluyendo la economÃa circular, la responsabilidad social empresarial (RSE) y la integraciÃ³n de polÃÉÉÉticas ecolÃ³gicas dentro de los modelos de negocio. â¢ EconomÃa digital y comercio electrÃ³nico: Cambios en el comercio internacional debido al auge del comercio electrÃ³nico, plataformas digitales, marketing en redes sociales y la globalizaciÃ³n de los negocios en lÃnea. 2. Perspectivas Nacionales, PolÃÉÉÉticas, HistÃ³ricas y Culturales Diversas â¢ AnÃ¡lisis de contextos polÃticos y econÃ³micos: Abordar las diversas estructuras polÃÉÉÉticas y econÃ³micas que impactan las prÃ¡cÉÉÉticas empresariales, incluidas las polÃÉÉÉticas gubernamentales, las reformas econÃ³micas y la legislaciÃ³n laboral, tanto a nivel nacional como internacional. â¢ Cultura organizacional y liderazgo intercultural: Estudio de las diferencias en los estilos de liderazgo, las costumbres empresariales y la toma de decisiones en diferentes regiones y culturas. Esto incluye la comprensiÃ³n de la jerarquÃa, las negociaciones y las relaciones laborales en diferentes contextos. â¢ Historia de la administraciÃ³n de empresas: ProfundizaciÃ³n en los orÃgenes y la evoluciÃ³n de la administraciÃ³n de empresas, destacando los hitos y los cambios paradigmÃ¡ticos que han influido en la gestiÃ³n moderna en diversos paÃses y continentes. 3. Leyes y Normas Nacionales e Internacionales â¢ Normativa internacional en negocios: Contenidos sobre los acuerdos internacionales como los tratados de libre comercio, las polÃÉÉÉticas de la OMC (OrganizaciÃ³n Mundial del Comercio) y las normativas de la UE (UniÃ³n Europea) que afectan el comercio y la gestiÃ³n empresarial internacional. â¢ Derechos laborales y legislaciÃ³n internacional: Incluir la normativa internacional sobre derechos laborales, como la legislaciÃ³n de la OIT (OrganizaciÃ³n Internacional del Trabajo) y las leyes nacionales que protegen a los trabajadores en diferentes paÃses. â¢ ProtecciÃ³n de datos y privacidad: Leyes internacionales sobre privacidad y seguridad de la informaciÃ³n, como el GDPR (Reglamento General de ProtecciÃ³n de Datos) en la UE, que impactan la gestiÃ³n empresarial en un entorno digital globalizado. 4. Cuestiones ÃÉÉÉticas y Problemas en la GlobalizaciÃ³n â¢ ÃÉÉÉtica empresarial global: ReflexiÃ³n sobre la Ã©ÉÉÉtica en los negocios, incluyendo la responsabilidad de las empresas en la toma de decisiones que afecten la sociedad y el medio ambiente, tanto a nivel local como global. Esto incluye la gestiÃ³n Ã©ÉÉÉtica de las relaciones laborales, la transparencia y la integridad empresarial. â¢ Justicia social y equidad: Estudio de cÃ³mo las empresas pueden contribuir a la justicia social y la equidad, considerando la diversidad de sus empleados y el impacto de sus operaciones en diferentes comunidades. â¢ Derechos humanos y corporaciones: AnÃ¡lisis de la responsabilidad de las empresas en la promociÃ³n y protecciÃ³n de los derechos humanos, tanto en sus cadenas de suministro como en sus operaciones directas. â¢ Problemas sociales, econÃ³micos y ambientales: DesafÃos contemporÃ¡neos como la pobreza, el desempleo, las desigualdades sociales, el cambio climÃ¡tico y los problemas ambientales. Incluir la integraciÃ³n de la sostenibilidad y la responsabilidad social en las estrategias empresariales. 5. Costumbres, Problemas y TerminologÃa en Diferentes Contextos Culturales â¢ PrÃ¡cÉÉÉticas empresariales interculturales: Enfoque en cÃ³mo las empresas deben adaptarse a las costumbres y normas culturales de diferentes paÃses, considerando aspectos como el comportamiento de los consumidores, la negociaciÃ³n y el marketing en contextos culturales diversos. â¢ TerminologÃa y prÃ¡cÉÉÉticas profesionales globales: Estudio de la terminologÃa empresarial que se utiliza en diversas regiones y sectores, y cÃ³mo las diferencias en el lenguaje y las costumbres pueden afectar las negociaciones y las relaciones comerciales. â¢ SoluciÃ³n de conflictos interculturales: FormaciÃ³n sobre cÃ³mo manejar y resolver disputas y desacuerdos que surgen debido a diferencias culturales en las relaciones laborales y comerciales. 6. Competencias y Capacidades Globales â¢ Liderazgo global: Desarrollo de competencias en liderazgo que incluyan la habilidad para gestionar equipos multiculturales y tomar decisiones Ã©ÉÉÉticas en un contexto global. â¢ Adaptabilidad en mercados globalizados: FormaciÃ³n en la capacidad de adaptarse y ser flexible frente a cambios rÃ¡pidos en mercados internacionales, especialmente en tiempos de crisis econÃ³micas o cambios geopolÃticos. Integrando estos contenidos en el currÃculo, el programa de AdministraciÃ³n de Empresas virtual de la CorporaciÃ³n Escuela TecnolÃ³gica de Oriente no solo proporciona una formaciÃ³n sÃ³lida en gestiÃ³n empresarial, sino que tambiÃ©n prepara a los estudiantes para actuar como lÃderes responsables y Ã©ticos en un entorno global y multicultural. En las estrategias pedagÃ³gicas del programa, se busca fomentar el uso y apropiaciÃ³n de metodologÃas activas de aprendizaje que permitan a los estudiantes abordar temas o problemas desde diversas perspectivas interculturales e internacionales. Esto incluye el anÃ¡lisis de problemÃ¡ÉÉÉticas locales y globales relacionadas con"
    ],
    "temas": [
      "Unidad 1: Marco conceptual y fundamentos teóricos de Juego Gerencial",
      "Unidad 2: Herramientas analíticas y diagnóstico situacional",
      "Unidad 3: Formulación e implementación de estrategias organizacionales",
      "Unidad 4: Evaluación de resultados, innovación y sostenibilidad en Juego Gerencial"
    ],
    "perfil_asociado": "Competencia 1 & 8: Gestión gerencial, dirección estratégica de operaciones, calidad y mejoramiento continuo.",
    "rap_asociado": "RAP 1 & RAP 8: Diseña e implementa modelos de gestión organizacional y sistemas integrados de producción.",
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
    "descripcion": "La asignatura Matemáticas Básicas (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Matemáticas Básicas en las empresas.",
      "RA2: Utiliza herramientas técnicas de Matemáticas Básicas para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Matemáticas Básicas."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Matemáticas Básicas",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Constitución y Democracia (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Constitución y Democracia en las empresas.",
      "RA2: Utiliza herramientas técnicas de Constitución y Democracia para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Constitución y Democracia."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Constitución y Democracia",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
  },
  {
    "id": "vig_3",
    "semestre": 1,
    "nombre": "Expresión Oral y Escrita",
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
    "descripcion": "La asignatura Expresión Oral y Escrita (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Expresión Oral y Escrita en las empresas.",
      "RA2: Utiliza herramientas técnicas de Expresión Oral y Escrita para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Expresión Oral y Escrita."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Expresión Oral y Escrita",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Inglés I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés I."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Inglés I",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Fundamentos de Administración (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Administración en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Administración para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Administración."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Fundamentos de Administración",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Fundamentos Contables (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos Contables en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos Contables para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos Contables."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Fundamentos Contables",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Fundamentos de Economía (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Economía en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Economía para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Economía."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Fundamentos de Economía",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Cálculo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Cálculo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Cálculo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Cálculo."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Cálculo",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Legislación Laboral (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Legislación Laboral en las empresas.",
      "RA2: Utiliza herramientas técnicas de Legislación Laboral para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Laboral."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Legislación Laboral",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Teoría Organizacional (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Teoría Organizacional en las empresas.",
      "RA2: Utiliza herramientas técnicas de Teoría Organizacional para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Teoría Organizacional."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Teoría Organizacional",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Costos (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Costos en las empresas.",
      "RA2: Utiliza herramientas técnicas de Costos para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Costos."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Costos",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Metodología de la Investigación (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Metodología de la Investigación en las empresas.",
      "RA2: Utiliza herramientas técnicas de Metodología de la Investigación para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Metodología de la Investigación."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Metodología de la Investigación",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales."
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
    "descripcion": "La asignatura Microeconomía (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Microeconomía en las empresas.",
      "RA2: Utiliza herramientas técnicas de Microeconomía para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Microeconomía."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Microeconomía",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Inglés II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés II."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Inglés II",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Estadística Descriptiva (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Estadística Descriptiva en las empresas.",
      "RA2: Utiliza herramientas técnicas de Estadística Descriptiva para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Estadística Descriptiva."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Estadística Descriptiva",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Derecho Administrativo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Derecho Administrativo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Derecho Administrativo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Derecho Administrativo."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Derecho Administrativo",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Administración por Procesos (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Administración por Procesos en las empresas.",
      "RA2: Utiliza herramientas técnicas de Administración por Procesos para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Administración por Procesos."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Administración por Procesos",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Electiva Profundización I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Profundización I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización I."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Electiva Profundización I",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Cultura Emprendedora (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Cultura Emprendedora en las empresas.",
      "RA2: Utiliza herramientas técnicas de Cultura Emprendedora para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Cultura Emprendedora."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Cultura Emprendedora",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Macroeconomía (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Macroeconomía en las empresas.",
      "RA2: Utiliza herramientas técnicas de Macroeconomía para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Macroeconomía."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Macroeconomía",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Inglés III (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés III en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés III para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés III."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Inglés III",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Estadística Inferencial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Estadística Inferencial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Estadística Inferencial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Estadística Inferencial."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Estadística Inferencial",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Legislación Tributaria (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Legislación Tributaria en las empresas.",
      "RA2: Utiliza herramientas técnicas de Legislación Tributaria para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Tributaria."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Legislación Tributaria",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Electiva Humanística I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Humanística I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Humanística I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Humanística I."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Electiva Humanística I",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Liderazgo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Liderazgo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Liderazgo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Liderazgo."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Liderazgo",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Creatividad e Innovación (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Creatividad e Innovación en las empresas.",
      "RA2: Utiliza herramientas técnicas de Creatividad e Innovación para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Creatividad e Innovación."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Creatividad e Innovación",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Entorno Económico Colombiano e Internacional (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Entorno Económico Colombiano e Internacional en las empresas.",
      "RA2: Utiliza herramientas técnicas de Entorno Económico Colombiano e Internacional para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Entorno Económico Colombiano e Internacional."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Entorno Económico Colombiano e Internacional",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales."
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
    "descripcion": "La asignatura Inglés IV (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés IV en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés IV para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés IV."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Inglés IV",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
  },
  {
    "id": "vig_29",
    "semestre": 5,
    "nombre": "Matemática Financiera",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Costos",
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
    "descripcion": "La asignatura Matemática Financiera (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Matemática Financiera en las empresas.",
      "RA2: Utiliza herramientas técnicas de Matemática Financiera para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Matemática Financiera."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Matemática Financiera",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Investigación de Operaciones (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Investigación de Operaciones en las empresas.",
      "RA2: Utiliza herramientas técnicas de Investigación de Operaciones para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Investigación de Operaciones."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Investigación de Operaciones",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Fundamentos de Mercadeo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Mercadeo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Mercadeo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Mercadeo."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Fundamentos de Mercadeo",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
  },
  {
    "id": "vig_32",
    "semestre": 5,
    "nombre": "Modelos de Desarrollo Económico",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Entorno Económico Colombiano e Internacional",
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
    "descripcion": "La asignatura Modelos de Desarrollo Económico (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Modelos de Desarrollo Económico en las empresas.",
      "RA2: Utiliza herramientas técnicas de Modelos de Desarrollo Económico para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Modelos de Desarrollo Económico."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Modelos de Desarrollo Económico",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Administración de Salarios (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Administración de Salarios en las empresas.",
      "RA2: Utiliza herramientas técnicas de Administración de Salarios para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Administración de Salarios."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Administración de Salarios",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Electiva Profundización II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Profundización II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización II."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Electiva Profundización II",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Inglés V (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés V en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés V para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés V."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Inglés V",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Legislación Comercial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Legislación Comercial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Legislación Comercial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Legislación Comercial."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Legislación Comercial",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Gerencia de Mercadeo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia de Mercadeo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia de Mercadeo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Mercadeo."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gerencia de Mercadeo",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura E-Commerce (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de E-Commerce en las empresas.",
      "RA2: Utiliza herramientas técnicas de E-Commerce para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de E-Commerce."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de E-Commerce",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
  },
  {
    "id": "vig_39",
    "semestre": 6,
    "nombre": "Tecnología e Innovación",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Creatividad e Innovación",
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
    "descripcion": "La asignatura Tecnología e Innovación (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Tecnología e Innovación en las empresas.",
      "RA2: Utiliza herramientas técnicas de Tecnología e Innovación para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Tecnología e Innovación."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Tecnología e Innovación",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Métodos Cuantitativos y Cualitativos (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Métodos Cuantitativos y Cualitativos en las empresas.",
      "RA2: Utiliza herramientas técnicas de Métodos Cuantitativos y Cualitativos para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Métodos Cuantitativos y Cualitativos."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Métodos Cuantitativos y Cualitativos",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales."
  },
  {
    "id": "vig_41",
    "semestre": 6,
    "nombre": "Electiva Humanística II",
    "tipo": "T",
    "creditos": 2,
    "area": "ELECTIVA",
    "prerrequisito": "Electiva Humanística I",
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
    "descripcion": "La asignatura Electiva Humanística II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Humanística II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Humanística II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Humanística II."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Electiva Humanística II",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Inglés VI (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Inglés VI en las empresas.",
      "RA2: Utiliza herramientas técnicas de Inglés VI para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Inglés VI."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Inglés VI",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Fundamentos de Administración Pública (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Fundamentos de Administración Pública en las empresas.",
      "RA2: Utiliza herramientas técnicas de Fundamentos de Administración Pública para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Fundamentos de Administración Pública."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Fundamentos de Administración Pública",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Gestión de la Calidad (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gestión de la Calidad en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gestión de la Calidad para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gestión de la Calidad."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gestión de la Calidad",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Presupuesto (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Presupuesto en las empresas.",
      "RA2: Utiliza herramientas técnicas de Presupuesto para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Presupuesto."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Presupuesto",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Gerencia de Talento Humano (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia de Talento Humano en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia de Talento Humano para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Talento Humano."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gerencia de Talento Humano",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
  },
  {
    "id": "vig_47",
    "semestre": 7,
    "nombre": "Proyecto Empresarial",
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
    "descripcion": "La asignatura Proyecto Empresarial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Proyecto Empresarial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Proyecto Empresarial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto Empresarial."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Proyecto Empresarial",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Electiva Profundización III (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Electiva Profundización III en las empresas.",
      "RA2: Utiliza herramientas técnicas de Electiva Profundización III para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Electiva Profundización III."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Electiva Profundización III",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
  },
  {
    "id": "vig_49",
    "semestre": 7,
    "nombre": "Sistema de Información Gerencial",
    "tipo": "T",
    "creditos": 3,
    "area": "DISCIPLINAR",
    "prerrequisito": "Tecnología e Innovación",
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
    "descripcion": "La asignatura Sistema de Información Gerencial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Sistema de Información Gerencial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Sistema de Información Gerencial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Sistema de Información Gerencial."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Sistema de Información Gerencial",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Habilidades Gerenciales (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Habilidades Gerenciales en las empresas.",
      "RA2: Utiliza herramientas técnicas de Habilidades Gerenciales para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Habilidades Gerenciales."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Habilidades Gerenciales",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Gerencia de Producción (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia de Producción en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia de Producción para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia de Producción."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gerencia de Producción",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Investigación de Mercados (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Investigación de Mercados en las empresas.",
      "RA2: Utiliza herramientas técnicas de Investigación de Mercados para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Investigación de Mercados."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Investigación de Mercados",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Gerencia Financiera (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia Financiera en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia Financiera para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia Financiera."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gerencia Financiera",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Deontología (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Deontología en las empresas.",
      "RA2: Utiliza herramientas técnicas de Deontología para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Deontología."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Deontología",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Proyecto de Grado I (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Proyecto de Grado I en las empresas.",
      "RA2: Utiliza herramientas técnicas de Proyecto de Grado I para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto de Grado I."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Proyecto de Grado I",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales."
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
    "descripcion": "La asignatura Planeación y Prospectiva (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Planeación y Prospectiva en las empresas.",
      "RA2: Utiliza herramientas técnicas de Planeación y Prospectiva para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Planeación y Prospectiva."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Planeación y Prospectiva",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Gerencia del Servicio (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gerencia del Servicio en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gerencia del Servicio para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gerencia del Servicio."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gerencia del Servicio",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Evaluación de Proyectos de Inversión (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Evaluación de Proyectos de Inversión en las empresas.",
      "RA2: Utiliza herramientas técnicas de Evaluación de Proyectos de Inversión para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Evaluación de Proyectos de Inversión."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Evaluación de Proyectos de Inversión",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 1: Innovación y optimización de productos, servicios y procesos organizacionales.",
    "rap_asociado": "RAP 1 (Plan Vigente): Diseña procesos de innovación para optimizar productos, servicios y procesos con estrategias de mercadeo innovadoras."
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
    "descripcion": "La asignatura Responsabilidad Social Empresarial (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Responsabilidad Social Empresarial en las empresas.",
      "RA2: Utiliza herramientas técnicas de Responsabilidad Social Empresarial para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Responsabilidad Social Empresarial."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Responsabilidad Social Empresarial",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Gobierno Corporativo (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Gobierno Corporativo en las empresas.",
      "RA2: Utiliza herramientas técnicas de Gobierno Corporativo para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Gobierno Corporativo."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Gobierno Corporativo",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 3: Principios de sostenibilidad, viabilidad económica y responsabilidad social empresarial.",
    "rap_asociado": "RAP 3 (Plan Vigente): Elabora estrategias integradas para la sostenibilidad, competitividad y cuidado del medio ambiente en la organización."
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
    "descripcion": "La asignatura Distribución Física y Logística (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Distribución Física y Logística en las empresas.",
      "RA2: Utiliza herramientas técnicas de Distribución Física y Logística para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Distribución Física y Logística."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Distribución Física y Logística",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 2: Dirección eficaz de equipos, liderazgo con visión ética y toma de decisiones tecnológicas.",
    "rap_asociado": "RAP 2 (Plan Vigente): Formula estrategias de innovación tecnológica y sistemas de información gerencial para la optimización de la productividad."
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
    "descripcion": "La asignatura Proyecto de Grado II (Plan Vigente 158 cr) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar.",
    "ras": [
      "RA1: Explica los conceptos fundamentales y marcos analíticos de Proyecto de Grado II en las empresas.",
      "RA2: Utiliza herramientas técnicas de Proyecto de Grado II para el diagnóstico y control de procesos.",
      "RA3: Propone alternativas de mejora operacional sustentadas en la gestión de Proyecto de Grado II."
    ],
    "temas": [
      "Unidad 1: Fundamentos conceptuales e historia de Proyecto de Grado II",
      "Unidad 2: Herramientas de medición y procedimiento operacional",
      "Unidad 3: Casos de estudio y aplicación en contextos reales",
      "Unidad 4: Evaluación de desempeño y mejoramiento operacional"
    ],
    "perfil_asociado": "Competencia 4: Diseño de investigaciones de mercado y estudios de entorno gerencial.",
    "rap_asociado": "RAP 4 (Plan Vigente): Estructura proyectos de investigación aplicada y estudios de mercado para planes comerciales e internacionales."
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

window.fitAllMatricesToScreen = function() {
    document.querySelectorAll('.malla-matrix-scale-outer').forEach(outer => {
        const wrapper = outer.querySelector('.malla-matrix-wrapper');
        if (!wrapper) return;
        
        const outerWidth = outer.clientWidth;
        const targetWidth = 1480;
        
        if (outerWidth > 100 && outerWidth < targetWidth) {
            const scale = outerWidth / targetWidth;
            wrapper.style.transform = `scale(${scale})`;
            wrapper.style.transformOrigin = 'top left';
            outer.style.height = (wrapper.offsetHeight * scale + 10) + 'px';
        } else {
            wrapper.style.transform = 'none';
            outer.style.height = 'auto';
        }
    });
};

window.addEventListener('resize', function() {
    window.fitAllMatricesToScreen();
});

setTimeout(function() {
    window.fitAllMatricesToScreen();
}, 100);

setTimeout(function() {
    window.fitAllMatricesToScreen();
}, 500);

window.closeSubjectModal = function() {
    const overlay = document.getElementById('c3-subject-modal-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
};

if (typeof document !== 'undefined') {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.closeSubjectModal();
        }
    });
}

window.openSubjectModal = function(id, type) {
    let s = type === 'vig' ? window.C3_VIGENTE_SUBJECTS.find(i => i.id === id) : window.C3_SUBJECTS.find(i => i.id === id);
    if (!s) return;

    let overlay = document.getElementById('c3-subject-modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'c3-subject-modal-overlay';
        overlay.className = 'c3-modal-overlay';
        overlay.style.cssText = 'position:fixed; inset:0; z-index:99999; background:rgba(15,23,42,0.8); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; padding:16px; overflow-y:auto;';
        overlay.onclick = function(e) {
            if (e.target === overlay) window.closeSubjectModal();
        };
        document.body.appendChild(overlay);
    }

    const planTag = type === 'vig' 
        ? '<span style="background:#475569; color:#fff; padding:4px 10px; border-radius:6px; font-weight:700; font-size:0.78rem; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-history"></i> Plan Vigente (158 cr, 9 semestres)</span>'
        : '<span style="background:#059669; color:#fff; padding:4px 10px; border-radius:6px; font-weight:700; font-size:0.78rem; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-rocket"></i> Plan Propuesto (144 cr, 8 semestres)</span>';

    const rasHtml = s.ras.map(r => `<li style="margin-bottom:8px; padding:10px 14px; background:#FEF3C7; border-left:4px solid #D97706; border-radius:6px; font-size:0.88rem; color:#92400E; font-weight:600;"><i class="fas fa-check-circle" style="color:#D97706; margin-right:8px;"></i>${r}</li>`).join('');

    const temasHtml = s.temas.map(t => `<li style="margin-bottom:6px; padding:8px 12px; background:#F1F5F9; border-left:3px solid var(--orange); border-radius:6px; font-size:0.86rem; color:#334155; font-weight:500;"><i class="fas fa-book-open" style="color:var(--orange); margin-right:8px;"></i>${t}</li>`).join('');

    overlay.innerHTML = `
        <div class="c3-modal-card" style="background:#ffffff; width:100%; max-width:850px; max-height:90vh; border-radius:16px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.4); overflow-y:auto; display:flex; flex-direction:column; border:1px solid rgba(0,0,0,0.1);">
            <!-- Modal Header -->
            <div style="background:var(--carbon); color:#ffffff; padding:20px 24px; border-bottom:4px solid var(--orange); position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:flex-start; gap:16px;">
                <div>
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:8px;">
                        ${planTag}
                        <span style="background:rgba(255,255,255,0.15); color:#fff; padding:3px 9px; border-radius:6px; font-size:0.78rem; font-weight:700;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                        <span style="background:rgba(243,146,0,0.3); color:#FDBA74; padding:3px 9px; border-radius:6px; font-size:0.78rem; font-weight:700;"><i class="fas fa-layer-group"></i> ${s.area}</span>
                        <span style="background:rgba(255,255,255,0.2); color:#fff; padding:3px 9px; border-radius:6px; font-size:0.78rem; font-weight:700;">${s.creditos} Créditos (${s.tipo})</span>
                    </div>
                    <h2 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:800; color:#ffffff; margin:4px 0 6px 0; line-height:1.2;">${s.nombre}</h2>
                    <div style="font-size:0.84rem; color:#CBD5E1;"><i class="fas fa-link" style="color:var(--orange);"></i> <strong>Prerrequisito Explícito:</strong> ${s.prerrequisito}</div>
                </div>
                <button onclick="closeSubjectModal()" style="background:rgba(255,255,255,0.15); border:none; color:#ffffff; width:36px; height:36px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0; transition:all 0.2s;" onmouseover="this.style.background='#EF4444'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div style="padding:24px; color:#1E293B; font-size:0.9rem; line-height:1.6;">
                <!-- Grid 2 Columnas para Perfil y RAP -->
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
                    <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:16px; border-radius:10px;">
                        <h4 style="font-size:0.92rem; font-weight:800; color:#0369A1; margin:0 0 8px 0; display:flex; align-items:center; gap:8px;">
                            <i class="fas fa-user-graduate" style="font-size:1.1rem;"></i> Perfil de Egreso (Competencia)
                        </h4>
                        <p style="font-size:0.86rem; color:#0C4A6E; margin:0; line-height:1.5;">${s.perfil_asociado}</p>
                    </div>
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:16px; border-radius:10px;">
                        <h4 style="font-size:0.92rem; font-weight:800; color:#15803D; margin:0 0 8px 0; display:flex; align-items:center; gap:8px;">
                            <i class="fas fa-bullseye" style="font-size:1.1rem;"></i> Resultado de Aprendizaje del Programa (RAP)
                        </h4>
                        <p style="font-size:0.86rem; color:#14532D; margin:0; line-height:1.5;">${s.rap_asociado}</p>
                    </div>
                </div>

                <!-- Resultados de Aprendizaje de la Asignatura -->
                <div style="margin-bottom:20px;">
                    <h4 style="font-size:0.95rem; font-weight:800; color:var(--carbon); margin:0 0 10px 0; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-list-ol" style="color:var(--orange);"></i> Resultados de Aprendizaje de la Asignatura (RA):
                    </h4>
                    <ul style="list-style:none; padding:0; margin:0;">${rasHtml}</ul>
                </div>

                <!-- Contenidos Temáticos Desagregados -->
                <div style="margin-bottom:20px;">
                    <h4 style="font-size:0.95rem; font-weight:800; color:var(--carbon); margin:0 0 10px 0; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-book-open" style="color:var(--orange);"></i> Contenidos Temáticos y Unidades Desagregadas:
                    </h4>
                    <ul style="list-style:none; padding:0; margin:0;">${temasHtml}</ul>
                </div>

                <!-- Horas por Modalidad -->
                <div style="background:#FAF5FF; border:1px solid #E9D5FF; padding:14px 18px; border-radius:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                    <div style="font-size:0.84rem; color:#6B21A8;">
                        <strong><i class="fas fa-clock"></i> Modalidad Presencial (Ratio 1:2):</strong> ${s.presencial.directa}h Acompañamiento Directo + ${s.presencial.independiente}h Trabajo Independiente = <strong>${s.presencial.total}h Totales</strong>
                    </div>
                    <div style="font-size:0.84rem; color:#047857;">
                        <strong><i class="fas fa-laptop-code"></i> Modalidad Virtual (Ratio 1:3):</strong> ${s.virtual.mediado}h Acompañamiento Mediado + ${s.virtual.independiente}h Trabajo Autónomo = <strong>${s.virtual.total}h Totales</strong>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div style="background:#F8FAFC; padding:12px 24px; border-top:1px solid #E2E8F0; text-align:right; border-bottom-left-radius:16px; border-bottom-right-radius:16px;">
                <button onclick="closeSubjectModal()" class="viewer-nav-btn next" style="padding:8px 20px; font-size:0.85rem; font-weight:700;">
                    <i class="fas fa-check"></i> Entendido / Cerrar
                </button>
            </div>
        </div>
    `;

    overlay.style.display = 'flex';
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
    if (panel) {
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
    }

    window.openSubjectModal(id, type);
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

        
    <!-- HEADER BADGE -->
    <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:10px 16px; border-radius:8px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="font-size:0.86rem; font-weight:800; color:#065F46;">
            <i class="fas fa-desktop" style="color:#059669; margin-right:6px;"></i> Vista 100% Pantalla Completa — Plan Propuesto (144 cr - 8 Semestres I a VIII)
        </div>
        <div style="display:flex; gap:8px;">
            <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:20px;">
                <i class="fas fa-check-double"></i> Todos los Semestres Visibles
            </span>
        </div>
    </div>

    <div class="malla-matrix-scale-outer" id="malla-matrix-outer-prop">
        <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-prop">
            <table class="malla-matrix-table malla-matrix-table-8sem">
                <thead>
                    <tr>
                        <th class="matrix-comp-header-corner">
                            <i class="fas fa-layer-group" style="color:var(--orange); margin-right:4px;"></i> COMPONENTE
                        </th>
                        <th class="sem-header">SEM 1</th><th class="sem-header">SEM 2</th><th class="sem-header">SEM 3</th><th class="sem-header">SEM 4</th><th class="sem-header">SEM 5</th><th class="sem-header">SEM 6</th><th class="sem-header">SEM 7</th><th class="sem-header">SEM 8</th>
                    </tr>
                </thead>
                <tbody><tr>
            <td class="matrix-comp-header comp-border-ciencias_basicas">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-calculator" style="color:#0284C7; margin-right:4px;"></i> Fundamentación Científica y Razonamiento Cuantitativo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('prop_3', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Álgebra Lineal</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-tecnologia">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-laptop-code" style="color:#0D9488; margin-right:4px;"></i> Tecnología, Análisis y Transformación Digital
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('prop_39', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Big Data y AnalÃÉÉtica de Datos</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-procesos_operaciones">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-cogs" style="color:#EA580C; margin-right:4px;"></i> Procesos, Operaciones y Sistemas Productivos
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_16', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Procesos Administrativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_26', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">GestiÃ³n de Operaciones</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_34', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Sistemas Integrados de GestiÃ³n (HSEQ)</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('prop_41', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">GestiÃ³n de la Calidad</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-gestion_financiera">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-chart-pie" style="color:#7C3AED; margin-right:4px;"></i> Gestión Organizacional, Económica y Financiera
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_1', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de AdministraciÃ³n</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_2', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables y Financieros</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_4', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_5', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">ComunicaciÃ³n Oral y Escrita</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_7', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">CÃ¡lculo Diferencial</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_8', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">MicroeconomÃa</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_9', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">EstadÃsÉÉtica Descriptiva</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_10', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">LegislaciÃ³n Comercial</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_11', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Costos y Presupuestos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_12', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">InglÃ©s I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_13', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">MacroeconomÃa</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_14', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">AnÃ¡lisis Financiero</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_15', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">EstadÃsÉÉtica Inferencial</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_17', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">TeorÃa Organizacional</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_18', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">InglÃ©s II</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_20', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">MatemÃ¡ÉÉtica Financiera</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_21', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">EconomÃa Colombiana e Internacional</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_24', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">InglÃ©s III</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_25', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">AdministraciÃ³n Financiera</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_28', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Marketing</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_31', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">PlaneaciÃ³n EstratÃ©gica y Prospectiva</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_32', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de ProducciÃ³n</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_37', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia Financiera</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_38', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Ventas y Canales de DistribuciÃ³n</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_43', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Pensamiento EstratÃ©gico y Prospectivo</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_44', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de la InnovaciÃ³n y la TecnologÃa</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_46', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Seminario de ActualizaciÃ³n Empresarial</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('prop_48', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Juego Gerencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-talento_liderazgo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-users-cog" style="color:#DB2777; margin-right:4px;"></i> Gestión del Talento Humano y Liderazgo
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('prop_27', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia del Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('prop_35', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales y Liderazgo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-investigacion_innovacion">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-lightbulb" style="color:#16A34A; margin-right:4px;"></i> Investigación, Innovación y Emprendimiento
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_19', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">InvestigaciÃ³n de Mercados</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_22', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Competencias Investigativas</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_33', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">FormulaciÃ³n y EvaluaciÃ³n de Proyectos</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_40', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Emprendimiento e InnovaciÃ³n</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('prop_45', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-humanistica_bilinguismo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-globe" style="color:#DC2626; margin-right:4px;"></i> Formación Humanística, Ética y Bilingüismo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_6', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cátedra de la Paz y Resolución de Conflictos</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_23', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Derecho Laboral y Seguridad Social</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('prop_29', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">ÃÉÉtica y Responsabilidad Social Empresarial</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-electivo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-cubes" style="color:#D97706; margin-right:4px;"></i> Componente Electivo (Profundización / Humanística)
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_30', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_36', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_42', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('prop_47', 'prop')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Electiva I (Desarrollo Sostenible y Economía Circular)</div>
                        
                    </div></td></tr></tbody></table></div></div>

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
                    <span style="background:#0284C7; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">1 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">3 Créditos Totales</span>
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
                <tbody><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Álgebra Lineal</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #7C3AED;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-briefcase" style="color:#7C3AED; margin-right:8px;"></i> Área de Formación Disciplinar
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#7C3AED; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">34 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">102 Créditos Totales</span>
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
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de AdministraciÃ³n</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 1</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">ComunicaciÃ³n Oral y Escrita</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">CÃ¡lculo Diferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">MicroeconomÃa</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">LegislaciÃ³n Comercial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Costos y Presupuestos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables y Financieros</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">InglÃ©s I</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">MacroeconomÃa</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">AnÃ¡lisis Financiero</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Procesos Administrativos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">TeorÃa Organizacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">InglÃ©s II</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">InvestigaciÃ³n de Mercados</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">EconomÃa Colombiana e Internacional</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">InglÃ©s III</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">AdministraciÃ³n Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">GestiÃ³n de Operaciones</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia del Talento Humano</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Procesos Administrativos</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Marketing</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">PlaneaciÃ³n EstratÃ©gica y Prospectiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de ProducciÃ³n</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">FormulaciÃ³n y EvaluaciÃ³n de Proyectos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Sistemas Integrados de GestiÃ³n (HSEQ)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Habilidades Gerenciales y Liderazgo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia del Talento Humano</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de Ventas y Canales de DistribuciÃ³n</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Emprendimiento e InnovaciÃ³n</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">GestiÃ³n de la Calidad</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Pensamiento EstratÃ©gico y Prospectivo</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Gerencia de la InnovaciÃ³n y la TecnologÃa</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Seminario de ActualizaciÃ³n Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Juego Gerencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Pensamiento Estratégico y Prospectivo</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-microscope" style="color:#16A34A; margin-right:8px;"></i> Área de Formación Transversal e Investigativa
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#16A34A; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">9 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">27 Créditos Totales</span>
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
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Cátedra de la Paz y Resolución de Conflictos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 2</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">EstadÃsÉÉtica Descriptiva</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 3</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">EstadÃsÉÉtica Inferencial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">MatemÃ¡ÉÉtica Financiera</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Competencias Investigativas</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 4</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Derecho Laboral y Seguridad Social</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 5</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">ÃÉÉtica y Responsabilidad Social Empresarial</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Big Data y AnalÃÉÉtica de Datos</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Proyecto de Grado</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Competencias Investigativas</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Obligatoria (36h dir / 108h indep)</td>
            </tr></tbody>
            </table>
        </div><div class="card" style="margin-bottom:16px; border-top:4px solid #D97706;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--carbon); margin:0;">
                    <i class="fas fa-sliders-h" style="color:#D97706; margin-right:8px;"></i> Área de Electividad y Profundización
                </h4>
                <div style="display:flex; gap:10px;">
                    <span style="background:#D97706; color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">4 Asignaturas</span>
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">12 Créditos Totales</span>
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
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 6</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 7</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (36h dir / 108h indep)</td>
            </tr><tr style="border-bottom:1px solid #E2E8F0;">
                <td style="padding:8px 12px; font-weight:700; color:var(--carbon); font-size:0.83rem;">Semestre 8</td>
                <td style="padding:8px 12px; font-weight:700; color:#0284C7; font-size:0.85rem;">Electiva I (Desarrollo Sostenible y Economía Circular)</td>
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">3 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Sin prerrequisito</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">Electiva (36h dir / 108h indep)</td>
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

        
    <!-- HEADER BADGE -->
    <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:10px 16px; border-radius:8px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="font-size:0.86rem; font-weight:800; color:#065F46;">
            <i class="fas fa-desktop" style="color:#059669; margin-right:6px;"></i> Vista 100% Pantalla Completa — Plan Vigente (158 cr - 9 Semestres I a IX)
        </div>
        <div style="display:flex; gap:8px;">
            <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:20px;">
                <i class="fas fa-check-double"></i> Todos los Semestres Visibles
            </span>
        </div>
    </div>

    <div class="malla-matrix-scale-outer" id="malla-matrix-outer-vig">
        <div class="malla-matrix-wrapper" id="malla-matrix-wrapper-vig">
            <table class="malla-matrix-table malla-matrix-table-9sem">
                <thead>
                    <tr>
                        <th class="matrix-comp-header-corner">
                            <i class="fas fa-layer-group" style="color:var(--orange); margin-right:4px;"></i> COMPONENTE
                        </th>
                        <th class="sem-header">SEM 1</th><th class="sem-header">SEM 2</th><th class="sem-header">SEM 3</th><th class="sem-header">SEM 4</th><th class="sem-header">SEM 5</th><th class="sem-header">SEM 6</th><th class="sem-header">SEM 7</th><th class="sem-header">SEM 8</th><th class="sem-header">SEM 9</th>
                    </tr>
                </thead>
                <tbody><tr>
            <td class="matrix-comp-header comp-border-ciencias_basicas">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-calculator" style="color:#0284C7; margin-right:4px;"></i> Fundamentación Científica y Razonamiento Cuantitativo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_1', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Matemáticas Básicas</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_8', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cálculo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemáticas Básicas</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_15', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Descriptiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cálculo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_22', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Estadística Inferencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Descriptiva</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_29', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Matemática Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-ciencias_basicas" onclick="selectMatrixSubject('vig_40', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Métodos Cuantitativos y Cualitativos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-tecnologia">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-laptop-code" style="color:#0D9488; margin-right:4px;"></i> Tecnología, Análisis y Transformación Digital
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('vig_38', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">E-Commerce</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                    </div><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('vig_39', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Tecnología e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Creatividad e Innovación</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-tecnologia" onclick="selectMatrixSubject('vig_49', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Sistema de Información Gerencial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Tecnología e Innovación</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-procesos_operaciones">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-cogs" style="color:#EA580C; margin-right:4px;"></i> Procesos, Operaciones y Sistemas Productivos
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_17', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Administración por Procesos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Teoría Organizacional</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_30', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Operaciones</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Estadística Inferencial</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_44', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gestión de la Calidad</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración por Procesos</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_51', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Producción</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Investigación de Operaciones</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-procesos_operaciones" onclick="selectMatrixSubject('vig_61', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Distribución Física y Logística</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Producción</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-gestion_financiera">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-chart-pie" style="color:#7C3AED; margin-right:4px;"></i> Gestión Organizacional, Económica y Financiera
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_5', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_6', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos Contables</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_7', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Economía</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_10', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Teoría Organizacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Administración</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_11', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Costos</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos Contables</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_13', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Microeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Economía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_19', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Cultura Emprendedora</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_20', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Macroeconomía</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Microeconomía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_27', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Entorno Económico Colombiano e Internacional</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Macroeconomía</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_31', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Mercadeo</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_32', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Modelos de Desarrollo Económico</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico Colombiano e Internacional</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_37', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Mercadeo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Fundamentos de Mercadeo</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_45', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Presupuesto</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Costos</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_53', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia Financiera</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Matemática Financiera</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_56', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Planeación y Prospectiva</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Habilidades Gerenciales</div>
                    </div><div class="malla-matrix-subject-card comp-border-gestion_financiera" onclick="selectMatrixSubject('vig_57', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia del Servicio</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-talento_liderazgo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-users-cog" style="color:#DB2777; margin-right:4px;"></i> Gestión del Talento Humano y Liderazgo
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_25', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Liderazgo</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_33', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Administración de Salarios</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Laboral</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_46', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Gerencia de Talento Humano</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Administración de Salarios</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_50', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Habilidades Gerenciales</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Liderazgo</div>
                    </div><div class="malla-matrix-subject-card comp-border-talento_liderazgo" onclick="selectMatrixSubject('vig_54', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Deontología</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr><tr>
            <td class="matrix-comp-header comp-border-investigacion_innovacion">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-lightbulb" style="color:#16A34A; margin-right:4px;"></i> Investigación, Innovación y Emprendimiento
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_12', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Metodología de la Investigación</div>
                        
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_26', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Creatividad e Innovación</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_47', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Cultura Emprendedora</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_52', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Investigación de Mercados</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia de Mercadeo</div>
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_55', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S8</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado I</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Metodología de la Investigación</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_58', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Evaluación de Proyectos de Inversión</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Gerencia Financiera</div>
                    </div><div class="malla-matrix-subject-card comp-border-investigacion_innovacion" onclick="selectMatrixSubject('vig_62', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Proyecto de Grado II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Proyecto de Grado I</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-humanistica_bilinguismo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-globe" style="color:#DC2626; margin-right:4px;"></i> Formación Humanística, Ética y Bilingüismo
                </div>
            </td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_2', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Constitución y Democracia</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_3', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Expresión Oral y Escrita</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_4', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S1</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_9', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Laboral</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_14', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S2</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_16', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Derecho Administrativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Constitución y Democracia</div>
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_21', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés II</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_23', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Tributaria</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_28', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés IV</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés III</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_35', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés V</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés IV</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_36', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">3cr</span>
                        </div>
                        <div class="subject-card-title">Legislación Comercial</div>
                        
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_42', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Inglés VI</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Inglés V</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_43', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Fundamentos de Administración Pública</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Derecho Administrativo</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_59', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Responsabilidad Social Empresarial</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Deontología</div>
                    </div><div class="malla-matrix-subject-card comp-border-humanistica_bilinguismo" onclick="selectMatrixSubject('vig_60', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S9</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Gobierno Corporativo</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Legislación Comercial</div>
                    </div></td></tr><tr>
            <td class="matrix-comp-header comp-border-electivo">
                <div style="font-weight:800; color:var(--carbon); font-size:0.74rem; line-height:1.2;">
                    <i class="fa-cubes" style="color:#D97706; margin-right:4px;"></i> Componente Electivo (Profundización / Humanística)
                </div>
            </td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_18', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S3</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_24', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S4</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Humanística I</div>
                        
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_34', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S5</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_41', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S6</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Humanística II</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</div>
                    </div></td><td class="matrix-cell"><div class="malla-matrix-subject-card comp-border-electivo" onclick="selectMatrixSubject('vig_48', 'vig')">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2px; margin-bottom:2px;">
                            <span style="font-size:0.58rem; font-weight:800; color:#0369A1; background:#E0F2FE; padding:1px 3px; border-radius:3px;">S7</span>
                            <span style="font-size:0.58rem; font-weight:800; color:#475569; background:#F1F5F9; padding:1px 3px; border-radius:3px;">2cr</span>
                        </div>
                        <div class="subject-card-title">Electiva Profundización III</div>
                        <div class="matrix-card-prereq"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Profundización II</div>
                    </div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td><td class="matrix-cell"><div style="height:100%; min-height:48px; background:#F8FAFC; border:1px dashed #E2E8F0; border-radius:6px;"></div></td></tr></tbody></table></div></div>

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
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Entorno Económico Colombiano e Internacional</td>
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
                    <span style="background:var(--carbon); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.78rem; font-weight:800;">10 Créditos Totales</span>
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
                <td style="padding:8px 12px; text-align:center;"><span style="background:var(--carbon); color:#fff; padding:2px 8px; border-radius:4px; font-weight:700; font-size:0.75rem;">2 cr</span></td>
                <td style="padding:8px 12px; font-size:0.8rem; color:#64748B;"><i class="fas fa-link" style="color:var(--orange);"></i> Electiva Humanística I</td>
                <td style="padding:8px 12px; font-size:0.78rem; color:var(--gray-text);">T (24h dir / 72h indep)</td>
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
