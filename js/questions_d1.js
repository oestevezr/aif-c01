// Domain 1: Fundamentals of AI and ML (100 questions)
const D1 = [
  {id:"q001",domain:1,subdomain:"1.1",service:null,difficulty:"easy",
  question:"¿Cuál es la diferencia fundamental entre Inteligencia Artificial (IA), Machine Learning (ML) y Deep Learning (DL)?",
  options:[
    {key:"A",text:"Son términos sinónimos que se usan indistintamente."},
    {key:"B",text:"La IA es el campo amplio; ML es un subconjunto que aprende de datos; DL es un subconjunto de ML que usa redes neuronales profundas."},
    {key:"C",text:"ML es el campo amplio; IA y DL son subcampos iguales dentro de ML."},
    {key:"D",text:"DL es el campo más amplio que contiene a ML e IA."}
  ],
  answer:"B",
  explanation:"La IA engloba toda máquina que simula inteligencia humana. ML es un subconjunto donde los algoritmos aprenden patrones de datos sin ser programados explícitamente. Deep Learning es un subconjunto de ML que utiliza redes neuronales con múltiples capas ocultas para aprender representaciones jerárquicas."},

  {id:"q002",domain:1,subdomain:"1.1",service:null,difficulty:"easy",
  question:"En aprendizaje supervisado, ¿qué característica distingue los datos de entrenamiento?",
  options:[
    {key:"A",text:"Los datos no tienen ninguna estructura definida."},
    {key:"B",text:"Los datos de entrenamiento incluyen etiquetas (labels) que indican la respuesta correcta para cada ejemplo."},
    {key:"C",text:"Los datos se generan sintéticamente sin intervención humana."},
    {key:"D",text:"El modelo nunca ve estos datos durante el entrenamiento."}
  ],
  answer:"B",
  explanation:"En aprendizaje supervisado, cada ejemplo de entrenamiento tiene una etiqueta conocida (por ejemplo, 'spam' o 'no spam'). El modelo aprende a mapear las características de entrada a la etiqueta de salida correcta, minimizando el error de predicción."},

  {id:"q003",domain:1,subdomain:"1.1",service:null,difficulty:"easy",
  question:"¿Qué tipo de aprendizaje automático se utiliza cuando no se dispone de datos etiquetados y se busca encontrar patrones o estructuras ocultas en los datos?",
  options:[
    {key:"A",text:"Aprendizaje supervisado"},
    {key:"B",text:"Aprendizaje por refuerzo"},
    {key:"C",text:"Aprendizaje no supervisado"},
    {key:"D",text:"Aprendizaje semi-supervisado"}
  ],
  answer:"C",
  explanation:"El aprendizaje no supervisado trabaja con datos sin etiquetar. El algoritmo busca patrones intrínsecos, agrupaciones (clustering) o estructuras en los datos. Ejemplos: k-means para clustering, PCA para reducción de dimensionalidad."},

  {id:"q004",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"Un agente de IA aprende a jugar ajedrez recibiendo una recompensa positiva cuando gana y negativa cuando pierde. ¿Qué tipo de aprendizaje representa esto?",
  options:[
    {key:"A",text:"Aprendizaje supervisado"},
    {key:"B",text:"Aprendizaje no supervisado"},
    {key:"C",text:"Aprendizaje por refuerzo"},
    {key:"D",text:"Transferencia de aprendizaje"}
  ],
  answer:"C",
  explanation:"El aprendizaje por refuerzo (Reinforcement Learning) implica un agente que interactúa con un entorno, toma acciones y recibe señales de recompensa o penalización. El objetivo es maximizar la recompensa acumulada a lo largo del tiempo."},

  {id:"q005",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es el 'overfitting' (sobreajuste) en un modelo de Machine Learning?",
  options:[
    {key:"A",text:"El modelo no aprende suficiente de los datos de entrenamiento y tiene mal desempeño en ambos conjuntos."},
    {key:"B",text:"El modelo aprende demasiado bien los datos de entrenamiento, incluyendo el ruido, y generaliza pobremente en datos nuevos."},
    {key:"C",text:"El modelo tiene demasiadas capas neuronales para el problema dado."},
    {key:"D",text:"El conjunto de datos de entrenamiento es demasiado grande para el algoritmo."}
  ],
  answer:"B",
  explanation:"El overfitting ocurre cuando el modelo memoriza los datos de entrenamiento (incluyendo el ruido) en vez de aprender los patrones generales. Resulta en alta precisión en entrenamiento pero baja precisión en datos nuevos (test). Técnicas como regularización, dropout y cross-validation ayudan a mitigarlo."},

  {id:"q006",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Cuál es la diferencia entre un problema de regresión y uno de clasificación en ML supervisado?",
  options:[
    {key:"A",text:"La regresión predice una categoría discreta; la clasificación predice un valor continuo."},
    {key:"B",text:"La regresión predice un valor continuo (ej. precio); la clasificación predice una categoría (ej. spam/no spam)."},
    {key:"C",text:"Ambos predicen valores continuos, pero con distintos algoritmos."},
    {key:"D",text:"No hay diferencia; ambos términos son intercambiables."}
  ],
  answer:"B",
  explanation:"La regresión predice valores numéricos continuos (precio de una casa, temperatura). La clasificación asigna una entrada a una categoría discreta (correo spam o no, tipo de tumor benigno o maligno)."},

  {id:"q007",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es el 'clustering' y a qué tipo de aprendizaje pertenece?",
  options:[
    {key:"A",text:"Es una técnica de clasificación supervisada que agrupa datos con etiquetas similares."},
    {key:"B",text:"Es una técnica de aprendizaje no supervisado que agrupa puntos de datos similares sin etiquetas previas."},
    {key:"C",text:"Es un método de preprocesamiento para limpiar datos antes del entrenamiento."},
    {key:"D",text:"Es una técnica exclusiva de procesamiento de lenguaje natural."}
  ],
  answer:"B",
  explanation:"El clustering es una técnica de aprendizaje no supervisado que agrupa datos similares. Algoritmos como k-means o DBSCAN encuentran grupos naturales en los datos sin que el modelo sepa previamente a qué clase pertenece cada punto."},

  {id:"q008",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"En una red neuronal, ¿cuál es la función de las funciones de activación como ReLU o Sigmoid?",
  options:[
    {key:"A",text:"Normalizar los datos de entrada a un rango entre 0 y 1."},
    {key:"B",text:"Introducir no linealidad en la red, permitiendo aprender relaciones complejas entre características."},
    {key:"C",text:"Calcular el error entre la predicción y el valor real."},
    {key:"D",text:"Determinar la tasa de aprendizaje óptima durante el entrenamiento."}
  ],
  answer:"B",
  explanation:"Las funciones de activación introducen no linealidad en las capas de la red neuronal. Sin ellas, la red sería equivalente a una regresión lineal sin importar cuántas capas tenga. ReLU (max(0,x)) es la más común en capas ocultas; Sigmoid se usa en salidas binarias."},

  {id:"q009",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué representa el 'hiperparámetro' en el contexto de Machine Learning?",
  options:[
    {key:"A",text:"Los parámetros internos del modelo que se aprenden durante el entrenamiento (pesos, sesgos)."},
    {key:"B",text:"Configuraciones externas al modelo definidas antes del entrenamiento, como la tasa de aprendizaje o el número de capas."},
    {key:"C",text:"Los datos adicionales que se añaden al conjunto de entrenamiento para mejorar el modelo."},
    {key:"D",text:"El resultado final de la función de pérdida después del entrenamiento."}
  ],
  answer:"B",
  explanation:"Los hiperparámetros son configuraciones que se definen antes del entrenamiento y no se aprenden de los datos (ej: learning rate, número de neuronas, profundidad del árbol). Los parámetros, en cambio, son los pesos y sesgos que el modelo ajusta durante el entrenamiento."},

  {id:"q010",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es el 'transfer learning' (aprendizaje por transferencia)?",
  options:[
    {key:"A",text:"Transferir datos de un conjunto de entrenamiento a otro entorno de producción."},
    {key:"B",text:"Reutilizar un modelo pre-entrenado en una tarea relacionada como punto de partida para una nueva tarea con menos datos."},
    {key:"C",text:"Copiar los pesos de un modelo a otro modelo idéntico para distribución."},
    {key:"D",text:"Transferir el conocimiento de un experto humano a un modelo de IA."}
  ],
  answer:"B",
  explanation:"El transfer learning aprovecha el conocimiento aprendido por un modelo en una tarea (ej. clasificación de imágenes en ImageNet) para otra tarea relacionada con menos datos (ej. detectar enfermedades en radiografías). Es clave en aplicaciones con datos limitados."},

  {id:"q011",domain:1,subdomain:"1.1",service:null,difficulty:"easy",
  question:"¿Qué es el procesamiento de lenguaje natural (NLP)?",
  options:[
    {key:"A",text:"La capacidad de las computadoras para procesar y entender texto o habla humana."},
    {key:"B",text:"Un lenguaje de programación especializado para IA."},
    {key:"C",text:"El procesamiento de señales de audio únicamente."},
    {key:"D",text:"Un tipo de base de datos diseñada para almacenar texto."}
  ],
  answer:"A",
  explanation:"NLP (Natural Language Processing) es la rama de la IA que permite a las computadoras comprender, interpretar y generar lenguaje humano. Incluye tareas como análisis de sentimientos, traducción automática, resumen de texto y generación de texto."},

  {id:"q012",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es un 'modelo de lenguaje grande' (LLM)?",
  options:[
    {key:"A",text:"Un diccionario digital con millones de palabras."},
    {key:"B",text:"Un modelo de ML entrenado en grandes cantidades de texto para predecir y generar lenguaje humano de forma coherente."},
    {key:"C",text:"Un sistema de traducción automática basado en reglas gramaticales."},
    {key:"D",text:"Una base de datos relacional optimizada para búsqueda de texto."}
  ],
  answer:"B",
  explanation:"Los LLMs (Large Language Models) son modelos de deep learning entrenados en corpus masivos de texto usando arquitecturas Transformer. Aprenden patrones estadísticos del lenguaje y pueden generar texto coherente, responder preguntas, resumir y más. Ejemplos: GPT-4, Claude, Llama."},

  {id:"q013",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Cuál es la diferencia entre inferencia y entrenamiento en el ciclo de vida de un modelo de ML?",
  options:[
    {key:"A",text:"El entrenamiento es cuando el modelo predice resultados; la inferencia es cuando el modelo aprende."},
    {key:"B",text:"El entrenamiento es cuando el modelo aprende de los datos ajustando sus parámetros; la inferencia es cuando el modelo aplica lo aprendido para hacer predicciones sobre datos nuevos."},
    {key:"C",text:"Ambos términos describen el mismo proceso con diferente nombre."},
    {key:"D",text:"La inferencia es exclusiva de modelos de deep learning; el entrenamiento aplica a todos los modelos."}
  ],
  answer:"B",
  explanation:"Durante el entrenamiento, el modelo itera sobre los datos, calcula el error y ajusta sus parámetros (pesos). La inferencia es la fase de producción donde el modelo entrenado recibe datos nuevos y genera predicciones sin modificar sus parámetros."},

  {id:"q014",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"¿Qué mide la 'curva ROC' y el 'AUC' en la evaluación de modelos de clasificación?",
  options:[
    {key:"A",text:"La velocidad de convergencia del modelo durante el entrenamiento."},
    {key:"B",text:"La curva ROC muestra el trade-off entre tasa de verdaderos positivos y falsos positivos; el AUC mide el área bajo esa curva (1.0 = perfecto, 0.5 = aleatorio)."},
    {key:"C",text:"El tiempo necesario para hacer inferencia en producción."},
    {key:"D",text:"La cantidad de datos necesarios para entrenar el modelo de forma efectiva."}
  ],
  answer:"B",
  explanation:"La curva ROC (Receiver Operating Characteristic) grafica la tasa de verdaderos positivos (sensibilidad) versus la tasa de falsos positivos a distintos umbrales. El AUC (Area Under the Curve) resume el rendimiento en un solo número: 1.0 es clasificación perfecta, 0.5 equivale a adivinar al azar."},

  {id:"q015",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es el 'bias' (sesgo) en el contexto de modelos de ML y cuándo ocurre?",
  options:[
    {key:"A",text:"El sesgo es el error debido a suposiciones demasiado simplistas en el modelo, que lleva a underfitting."},
    {key:"B",text:"El sesgo es exclusivamente un problema ético de discriminación en los datos."},
    {key:"C",text:"El sesgo mide qué tan aleatorio es el modelo ante cambios en los datos de entrenamiento."},
    {key:"D",text:"El sesgo es el parámetro de ajuste en la función de activación de una red neuronal."}
  ],
  answer:"A",
  explanation:"En el contexto de bias-variance tradeoff, el 'bias' (sesgo) es el error sistemático que surge cuando el modelo hace suposiciones demasiado simples sobre los datos (underfitting). Alta varianza indica overfitting; alto sesgo indica underfitting."},

  {id:"q016",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es un 'embedding' en el contexto del procesamiento de lenguaje natural?",
  options:[
    {key:"A",text:"Un método para comprimir imágenes en formato vectorial."},
    {key:"B",text:"Una representación numérica densa (vector) de palabras, frases u objetos que captura relaciones semánticas."},
    {key:"C",text:"Un tipo de base de datos especializada para guardar modelos de IA."},
    {key:"D",text:"El proceso de insertar código en un modelo de lenguaje."}
  ],
  answer:"B",
  explanation:"Los embeddings son vectores de números reales que representan palabras, oraciones o entidades. Palabras semánticamente similares tienen vectores cercanos en el espacio vectorial. Son fundamentales para NLP moderno y para sistemas RAG (Retrieval Augmented Generation)."},

  {id:"q017",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"¿Qué es la arquitectura Transformer y por qué fue revolucionaria para el NLP?",
  options:[
    {key:"A",text:"Es una arquitectura de red neuronal convolucional optimizada para clasificación de imágenes."},
    {key:"B",text:"Es una arquitectura basada en mecanismos de atención que procesa secuencias en paralelo, superando las limitaciones de las RNNs y permitiendo entrenar LLMs a gran escala."},
    {key:"C",text:"Es un modelo de base de datos diseñado para manejar grandes volúmenes de texto no estructurado."},
    {key:"D",text:"Es un tipo especial de red recurrente que procesa texto de forma bidireccional."}
  ],
  answer:"B",
  explanation:"Introducida en 2017 ('Attention is All You Need'), la arquitectura Transformer usa mecanismos de auto-atención (self-attention) que procesan toda la secuencia simultáneamente (no secuencialmente como las RNNs). Esto permite paralelización masiva y escalado a modelos gigantes como GPT, BERT y Claude."},

  {id:"q018",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Cuál es la diferencia entre una red neuronal convolucional (CNN) y una red neuronal recurrente (RNN)?",
  options:[
    {key:"A",text:"Las CNN son para texto; las RNN son para imágenes."},
    {key:"B",text:"Las CNN están diseñadas para datos espaciales como imágenes usando filtros convolucionales; las RNN están diseñadas para datos secuenciales como texto o series de tiempo."},
    {key:"C",text:"Ambas son idénticas pero se usan en diferentes industrias."},
    {key:"D",text:"Las CNN requieren más datos que las RNN para funcionar correctamente."}
  ],
  answer:"B",
  explanation:"Las CNN usan operaciones de convolución para detectar patrones espaciales locales en imágenes (bordes, texturas, objetos). Las RNN mantienen un estado oculto que captura dependencias temporales en secuencias, ideal para texto y series de tiempo, aunque hoy han sido mayormente superadas por Transformers."},

  {id:"q019",domain:1,subdomain:"1.1",service:null,difficulty:"easy",
  question:"¿Qué es la 'visión por computadora' (computer vision)?",
  options:[
    {key:"A",text:"La capacidad de las computadoras de procesar y entender información visual de imágenes o video."},
    {key:"B",text:"Un tipo especial de monitor que reduce la fatiga visual."},
    {key:"C",text:"Un sistema de seguridad para redes de computadoras."},
    {key:"D",text:"El proceso de convertir texto en representaciones visuales."}
  ],
  answer:"A",
  explanation:"La visión por computadora es la rama de la IA que permite a las máquinas interpretar y entender imágenes y videos. Incluye tareas como detección de objetos, reconocimiento facial, segmentación de imágenes y análisis de video."},

  {id:"q020",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es la 'tokenización' en el contexto de los modelos de lenguaje?",
  options:[
    {key:"A",text:"El proceso de cifrar datos sensibles en texto antes de enviarlos a un modelo."},
    {key:"B",text:"La división del texto en unidades más pequeñas llamadas tokens (palabras, subpalabras o caracteres) que el modelo puede procesar."},
    {key:"C",text:"La creación de tokens de autenticación para acceder a APIs de IA."},
    {key:"D",text:"Un método de compresión de texto para reducir el tamaño de los datos de entrenamiento."}
  ],
  answer:"B",
  explanation:"La tokenización convierte texto en una secuencia de tokens que el modelo puede procesar. Los LLMs modernos usan tokenización por subpalabras (BPE, WordPiece). El número de tokens afecta directamente el costo de las APIs y la ventana de contexto del modelo."},

  {id:"q021",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"¿Qué es la 'ventana de contexto' (context window) en los LLMs y por qué importa?",
  options:[
    {key:"A",text:"La interfaz gráfica del usuario para interactuar con el modelo."},
    {key:"B",text:"El número máximo de tokens que el modelo puede procesar en una sola llamada de entrada y salida combinada."},
    {key:"C",text:"El período de tiempo durante el cual el modelo recuerda conversaciones anteriores entre sesiones."},
    {key:"D",text:"La cantidad de datos de entrenamiento que el modelo puede memorizar."}
  ],
  answer:"B",
  explanation:"La ventana de contexto define cuántos tokens puede 'ver' el modelo a la vez. Determina cuánto texto puede procesar en una sola solicitud (documento largo, historial de conversación). Modelos con ventanas más grandes (ej. 200K tokens) pueden analizar documentos completos."},

  {id:"q022",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué significa 'foundation model' (modelo de fundación)?",
  options:[
    {key:"A",text:"Un modelo básico de regresión lineal que sirve de base para modelos más complejos."},
    {key:"B",text:"Un modelo de IA entrenado en grandes cantidades de datos a escala que puede adaptarse a muchas tareas con fine-tuning mínimo o prompts."},
    {key:"C",text:"El primer modelo de IA creado por una empresa antes de versiones mejoradas."},
    {key:"D",text:"Un modelo de código abierto que no tiene restricciones de uso."}
  ],
  answer:"B",
  explanation:"Los Foundation Models son modelos grandes pre-entrenados en datos masivos y diversos que pueden adaptarse a múltiples tareas (generación de texto, código, imágenes) mediante prompting o fine-tuning. Ejemplos: Claude, GPT-4, Stable Diffusion, Amazon Titan."},

  {id:"q023",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es la 'función de pérdida' (loss function) en el entrenamiento de ML?",
  options:[
    {key:"A",text:"Una métrica que mide la eficiencia computacional del proceso de entrenamiento."},
    {key:"B",text:"Una función que cuantifica qué tan lejos están las predicciones del modelo de los valores reales, guiando la optimización."},
    {key:"C",text:"La cantidad de datos de entrenamiento perdidos por errores de preprocesamiento."},
    {key:"D",text:"El número de neuronas inactivas en una red neuronal."}
  ],
  answer:"B",
  explanation:"La función de pérdida (ej. MSE para regresión, Cross-Entropy para clasificación) mide el error entre las predicciones del modelo y las etiquetas reales. Durante el entrenamiento, el optimizador (ej. Adam) ajusta los pesos para minimizar esta función."},

  {id:"q024",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"¿Qué es el 'gradient descent' (descenso de gradiente) y para qué se usa?",
  options:[
    {key:"A",text:"Un algoritmo de búsqueda que encuentra el mínimo global de cualquier función matemática."},
    {key:"B",text:"Un algoritmo de optimización que actualiza iterativamente los parámetros del modelo en la dirección opuesta al gradiente de la función de pérdida para minimizarla."},
    {key:"C",text:"Un método para normalizar los datos de entrenamiento."},
    {key:"D",text:"Una técnica para reducir el número de capas en una red neuronal."}
  ],
  answer:"B",
  explanation:"El gradient descent calcula el gradiente (derivada parcial) de la función de pérdida respecto a cada parámetro y actualiza los pesos en dirección opuesta al gradiente. Variantes: SGD (Stochastic), Mini-batch, Adam, RMSprop. Es el fundamento del entrenamiento de redes neuronales."},

  {id:"q025",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es el 'dropout' en el contexto de las redes neuronales?",
  options:[
    {key:"A",text:"El proceso de eliminar neuronas muertas de una red neuronal definitivamente."},
    {key:"B",text:"Una técnica de regularización que desactiva aleatoriamente un porcentaje de neuronas durante el entrenamiento para prevenir el overfitting."},
    {key:"C",text:"La tasa a la cual los usuarios abandonan una aplicación de IA."},
    {key:"D",text:"Un método para reducir el tamaño del modelo eliminando capas completas."}
  ],
  answer:"B",
  explanation:"El dropout es una técnica de regularización propuesta por Hinton. Durante el entrenamiento, se desactiva aleatoriamente una fracción de neuronas (ej. 20-50%) en cada iteración. Esto obliga a la red a aprender representaciones robustas y reduce el overfitting."},

  {id:"q026",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Cuál es la diferencia entre datos estructurados y no estructurados en el contexto de ML?",
  options:[
    {key:"A",text:"Los datos estructurados tienen buen formato; los no estructurados tienen errores."},
    {key:"B",text:"Los datos estructurados están organizados en tablas con filas y columnas (como SQL); los no estructurados incluyen texto, imágenes, audio y video sin esquema fijo."},
    {key:"C",text:"Los datos estructurados son grandes; los no estructurados son pequeños."},
    {key:"D",text:"No existe diferencia práctica para los algoritmos de ML modernos."}
  ],
  answer:"B",
  explanation:"Los datos estructurados tienen un esquema definido (bases de datos, hojas de cálculo). Los datos no estructurados no tienen formato predefinido (texto libre, imágenes, audio, video) y representan ~80% de los datos del mundo. Los LLMs y modelos multimodales son especialmente buenos para datos no estructurados."},

  {id:"q027",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"¿Qué es el 'attention mechanism' (mecanismo de atención) en redes neuronales?",
  options:[
    {key:"A",text:"Un sistema de alertas para notificar al equipo cuando el modelo falla."},
    {key:"B",text:"Un mecanismo que permite al modelo enfocarse dinámicamente en las partes más relevantes de la entrada al generar cada parte de la salida."},
    {key:"C",text:"Un proceso de calidad que revisa manualmente las predicciones del modelo."},
    {key:"D",text:"Una técnica para aumentar la velocidad de entrenamiento al ignorar datos irrelevantes."}
  ],
  answer:"B",
  explanation:"El mecanismo de atención, introducido en 2015 y generalizado en Transformers, permite que cada posición de la secuencia de salida 'atienda' a todas las posiciones de la entrada con diferente peso. El self-attention en Transformers captura dependencias entre todas las posiciones de la misma secuencia simultáneamente."},

  {id:"q028",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es la 'normalización de datos' y por qué es importante antes de entrenar un modelo de ML?",
  options:[
    {key:"A",text:"Eliminar duplicados del conjunto de datos para mejorar la calidad."},
    {key:"B",text:"Escalar las características a un rango común (ej. 0-1 o distribución normal) para que ninguna característica domine por magnitud, mejorando la convergencia del modelo."},
    {key:"C",text:"Convertir datos no estructurados en formato tabular estructurado."},
    {key:"D",text:"Aplicar reglas legales de privacidad a los datos antes del entrenamiento."}
  ],
  answer:"B",
  explanation:"La normalización/estandarización escala las características para que tengan rangos similares. Sin normalización, características con valores grandes (ej. ingresos en miles) dominarían sobre características pequeñas (ej. edad), afectando la convergencia del gradient descent y el rendimiento del modelo."},

  {id:"q029",domain:1,subdomain:"1.1",service:null,difficulty:"medium",
  question:"¿Qué es la 'ingeniería de características' (feature engineering)?",
  options:[
    {key:"A",text:"El proceso de construir la arquitectura de hardware para ejecutar modelos de ML."},
    {key:"B",text:"El proceso de crear, seleccionar o transformar variables de entrada para mejorar el rendimiento del modelo de ML."},
    {key:"C",text:"La programación de las capas de una red neuronal."},
    {key:"D",text:"El diseño de las interfaces de usuario para aplicaciones de IA."}
  ],
  answer:"B",
  explanation:"Feature engineering implica transformar los datos brutos en características que los algoritmos de ML puedan aprovechar mejor. Incluye: crear nuevas variables, normalización, encoding de variables categóricas, manejo de valores nulos, extracción de características temporales. Es crucial para el rendimiento del modelo."},

  {id:"q030",domain:1,subdomain:"1.1",service:null,difficulty:"hard",
  question:"¿Qué son los 'datos de validación' y cómo difieren de los datos de prueba (test)?",
  options:[
    {key:"A",text:"Son idénticos; ambos términos se refieren a los datos que no se usan en entrenamiento."},
    {key:"B",text:"Los datos de validación se usan durante el desarrollo para ajustar hiperparámetros y detectar overfitting; los datos de prueba se reservan para la evaluación final imparcial del modelo."},
    {key:"C",text:"Los datos de validación son un subconjunto de los datos de entrenamiento; los datos de prueba son datos completamente externos."},
    {key:"D",text:"Los datos de validación validan la calidad de los datos; los datos de prueba evalúan el modelo."}
  ],
  answer:"B",
  explanation:"La división estándar es: entrenamiento (para aprender parámetros), validación (para ajustar hiperparámetros y monitorear overfitting durante el desarrollo) y prueba (para evaluación final, nunca se debe 'ver' hasta la evaluación definitiva para evitar data leakage)."},

  {id:"q031",domain:1,subdomain:"1.2",service:"Amazon Rekognition",difficulty:"easy",
  question:"Una empresa de retail desea analizar automáticamente las imágenes de productos subidas por clientes para detectar contenido inapropiado. ¿Qué servicio de AWS es más adecuado?",
  options:[
    {key:"A",text:"Amazon Comprehend"},
    {key:"B",text:"Amazon Rekognition"},
    {key:"C",text:"Amazon Textract"},
    {key:"D",text:"Amazon Transcribe"}
  ],
  answer:"B",
  explanation:"Amazon Rekognition es el servicio de visión por computadora de AWS. Ofrece moderación de contenido para detectar imágenes inapropiadas, reconocimiento de objetos, caras y texto en imágenes y videos, sin necesidad de expertise en ML."},

  {id:"q032",domain:1,subdomain:"1.2",service:"Amazon Comprehend",difficulty:"easy",
  question:"Un equipo de marketing necesita analizar miles de reseñas de clientes para determinar automáticamente si son positivas, negativas o neutras. ¿Cuál es el servicio AWS más apropiado?",
  options:[
    {key:"A",text:"Amazon Translate"},
    {key:"B",text:"Amazon Lex"},
    {key:"C",text:"Amazon Comprehend"},
    {key:"D",text:"Amazon Polly"}
  ],
  answer:"C",
  explanation:"Amazon Comprehend es el servicio NLP de AWS que incluye análisis de sentimientos, detección de entidades, clasificación de texto y extracción de frases clave. Es ideal para analizar grandes volúmenes de texto sin entrenar modelos personalizados."},

  {id:"q033",domain:1,subdomain:"1.2",service:"Amazon Textract",difficulty:"easy",
  question:"Una institución financiera necesita extraer automáticamente información de formularios escaneados y documentos PDF para ingresarla a su sistema de gestión. ¿Qué servicio AWS debe usar?",
  options:[
    {key:"A",text:"Amazon Rekognition"},
    {key:"B",text:"Amazon Textract"},
    {key:"C",text:"Amazon Comprehend"},
    {key:"D",text:"Amazon Transcribe"}
  ],
  answer:"B",
  explanation:"Amazon Textract va más allá del OCR simple: extrae texto, datos de formularios (pares clave-valor) y tablas de documentos escaneados y PDFs, incluyendo identificación de la estructura del documento."},

  {id:"q034",domain:1,subdomain:"1.2",service:"Amazon Transcribe",difficulty:"easy",
  question:"Un call center quiere transcribir automáticamente todas sus llamadas de atención al cliente para análisis posterior. ¿Cuál es el servicio AWS adecuado?",
  options:[
    {key:"A",text:"Amazon Polly"},
    {key:"B",text:"Amazon Lex"},
    {key:"C",text:"Amazon Transcribe"},
    {key:"D",text:"Amazon Comprehend"}
  ],
  answer:"C",
  explanation:"Amazon Transcribe convierte voz en texto (speech-to-text) con soporte para múltiples idiomas, identificación de hablantes, vocabulario personalizado y redacción de información sensible (PII). Es ideal para transcripción de llamadas en call centers."},

  {id:"q035",domain:1,subdomain:"1.2",service:"Amazon Translate",difficulty:"easy",
  question:"Una empresa global necesita traducir automáticamente el contenido de su sitio web a 20 idiomas diferentes. ¿Qué servicio AWS ofrece traducción automática neural?",
  options:[
    {key:"A",text:"Amazon Comprehend"},
    {key:"B",text:"Amazon Polly"},
    {key:"C",text:"Amazon Translate"},
    {key:"D",text:"Amazon Lex"}
  ],
  answer:"C",
  explanation:"Amazon Translate es el servicio de traducción automática neural de AWS, soportando más de 75 idiomas. Permite traducción en tiempo real o por lotes, con opción de terminología personalizada para términos específicos del negocio."},

  {id:"q036",domain:1,subdomain:"1.2",service:"Amazon Polly",difficulty:"easy",
  question:"Una aplicación de aprendizaje de idiomas quiere convertir lecciones de texto en audio narrado con voz natural. ¿Qué servicio AWS debe utilizar?",
  options:[
    {key:"A",text:"Amazon Transcribe"},
    {key:"B",text:"Amazon Polly"},
    {key:"C",text:"Amazon Lex"},
    {key:"D",text:"Amazon Rekognition"}
  ],
  answer:"B",
  explanation:"Amazon Polly convierte texto en voz realista (text-to-speech) usando síntesis de habla profunda. Ofrece múltiples voces e idiomas, incluyendo voces neuronales con calidad muy natural, ideal para audiolibros, aplicaciones educativas y accesibilidad."},

  {id:"q037",domain:1,subdomain:"1.2",service:"Amazon Lex",difficulty:"medium",
  question:"Una empresa de e-commerce quiere construir un chatbot conversacional que entienda el lenguaje natural para ayudar a los clientes a rastrear pedidos y resolver dudas. ¿Qué servicio AWS es más apropiado?",
  options:[
    {key:"A",text:"Amazon Comprehend"},
    {key:"B",text:"Amazon Transcribe"},
    {key:"C",text:"Amazon Lex"},
    {key:"D",text:"Amazon Kendra"}
  ],
  answer:"C",
  explanation:"Amazon Lex es el servicio para construir interfaces conversacionales (chatbots y voicebots) usando las mismas tecnologías que Alexa. Proporciona comprensión de lenguaje natural (NLU) y reconocimiento automático de habla (ASR) para crear bots multicanal."},

  {id:"q038",domain:1,subdomain:"1.2",service:"Amazon Kendra",difficulty:"medium",
  question:"Una empresa con miles de documentos internos quiere que sus empleados puedan hacer preguntas en lenguaje natural y recibir respuestas precisas. ¿Qué servicio AWS habilita búsqueda inteligente empresarial?",
  options:[
    {key:"A",text:"Amazon Lex"},
    {key:"B",text:"Amazon Kendra"},
    {key:"C",text:"Amazon Comprehend"},
    {key:"D",text:"Amazon OpenSearch Service"}
  ],
  answer:"B",
  explanation:"Amazon Kendra es un servicio de búsqueda empresarial inteligente potenciado por ML. Permite búsqueda semántica sobre documentos corporativos (SharePoint, S3, Confluence, etc.) respondiendo preguntas en lenguaje natural con alta precisión."},

  {id:"q039",domain:1,subdomain:"1.2",service:"Amazon Personalize",difficulty:"medium",
  question:"Un servicio de streaming quiere implementar recomendaciones personalizadas de contenido en tiempo real para cada usuario basadas en su historial de visualización. ¿Qué servicio AWS es más apropiado?",
  options:[
    {key:"A",text:"Amazon Forecast"},
    {key:"B",text:"Amazon Personalize"},
    {key:"C",text:"Amazon Rekognition"},
    {key:"D",text:"Amazon SageMaker"}
  ],
  answer:"B",
  explanation:"Amazon Personalize usa las mismas tecnologías de ML que Amazon.com para crear sistemas de recomendación personalizados sin expertise en ML. Soporta recomendaciones de artículos, clasificación personalizada y segmentación de usuarios en tiempo real."},

  {id:"q040",domain:1,subdomain:"1.2",service:"Amazon Forecast",difficulty:"medium",
  question:"Una cadena de supermercados necesita predecir la demanda de productos para las próximas 8 semanas para optimizar su cadena de suministro. ¿Qué servicio AWS es más apropiado?",
  options:[
    {key:"A",text:"Amazon Personalize"},
    {key:"B",text:"Amazon Comprehend"},
    {key:"C",text:"Amazon Forecast"},
    {key:"D",text:"Amazon Rekognition"}
  ],
  answer:"C",
  explanation:"Amazon Forecast es un servicio de pronóstico de series temporales basado en ML que utiliza las mismas tecnologías de Amazon. Combina datos históricos con variables externas (clima, eventos) para generar predicciones de demanda, inventario y métricas de negocio."},

  {id:"q041",domain:1,subdomain:"1.2",service:"Amazon SageMaker",difficulty:"medium",
  question:"Un equipo de data science necesita una plataforma completa para construir, entrenar, depurar y desplegar modelos de ML con total control sobre el proceso. ¿Cuál es el servicio AWS principal para esto?",
  options:[
    {key:"A",text:"Amazon Rekognition"},
    {key:"B",text:"Amazon SageMaker"},
    {key:"C",text:"AWS Lambda"},
    {key:"D",text:"Amazon Comprehend"}
  ],
  answer:"B",
  explanation:"Amazon SageMaker es la plataforma ML completa de AWS que cubre todo el ciclo de vida: preparación de datos (Data Wrangler), entrenamiento distribuido, ajuste de hiperparámetros, depuración, despliegue y monitoreo de modelos en producción."},

  {id:"q042",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Cuál de los siguientes es un caso de uso típico de detección de anomalías en ML?",
  options:[
    {key:"A",text:"Clasificar correos electrónicos en categorías predefinidas."},
    {key:"B",text:"Detectar transacciones fraudulentas en tiempo real identificando patrones inusuales."},
    {key:"C",text:"Traducir documentos entre idiomas."},
    {key:"D",text:"Generar imágenes a partir de descripciones de texto."}
  ],
  answer:"B",
  explanation:"La detección de anomalías identifica observaciones que se desvían significativamente del comportamiento normal. El fraude financiero es un caso de uso clásico: el modelo aprende el comportamiento normal de transacciones y alerta cuando detecta patrones inusuales (montos, ubicaciones, frecuencias)."},

  {id:"q043",domain:1,subdomain:"1.2",service:null,difficulty:"easy",
  question:"¿Cuál es el principal uso de los sistemas de reconocimiento facial en aplicaciones empresariales?",
  options:[
    {key:"A",text:"Únicamente para entretenimiento y filtros de cámara."},
    {key:"B",text:"Para autenticación de identidad, control de acceso físico, seguridad y búsqueda de personas."},
    {key:"C",text:"Para mejorar la velocidad de procesamiento de imágenes."},
    {key:"D",text:"Para comprimir imágenes antes de almacenarlas."}
  ],
  answer:"B",
  explanation:"El reconocimiento facial tiene múltiples aplicaciones empresariales: autenticación biométrica (desbloqueo de dispositivos, acceso bancario), control de acceso físico a instalaciones, identificación de personas en sistemas de seguridad y asistencia en búsqueda de personas desaparecidas."},

  {id:"q044",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"Una empresa manufacturera quiere detectar defectos en productos en la línea de ensamblaje usando cámaras. ¿Qué tipo de IA se aplica principalmente en este caso?",
  options:[
    {key:"A",text:"Procesamiento de lenguaje natural (NLP)"},
    {key:"B",text:"Visión por computadora (Computer Vision)"},
    {key:"C",text:"Predicción de series temporales"},
    {key:"D",text:"Sistemas de recomendación"}
  ],
  answer:"B",
  explanation:"El control de calidad visual en manufactura es un caso de uso clásico de computer vision. Los modelos de clasificación y detección de objetos analizan imágenes de productos en tiempo real para identificar defectos, grietas, impurezas u otras anomalías con mayor precisión y velocidad que la inspección manual."},

  {id:"q045",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Qué técnica de IA se utiliza principalmente en los asistentes virtuales como Alexa o Google Assistant?",
  options:[
    {key:"A",text:"Computer vision exclusivamente."},
    {key:"B",text:"Combinación de reconocimiento de voz (ASR), NLP/NLU y síntesis de voz (TTS)."},
    {key:"C",text:"Sistemas de recomendación basados en filtrado colaborativo."},
    {key:"D",text:"Detección de anomalías en series temporales."}
  ],
  answer:"B",
  explanation:"Los asistentes virtuales combinan: ASR (Automatic Speech Recognition) para convertir voz a texto, NLU (Natural Language Understanding) para entender la intención del usuario, lógica de negocio para ejecutar la acción, y TTS (Text-to-Speech) para responder con voz natural."},

  {id:"q046",domain:1,subdomain:"1.2",service:"Amazon Comprehend",difficulty:"medium",
  question:"¿Cuál de los siguientes es un caso de uso de detección de entidades con Amazon Comprehend?",
  options:[
    {key:"A",text:"Convertir audio de reuniones en texto escrito."},
    {key:"B",text:"Identificar automáticamente personas, organizaciones, ubicaciones y fechas mencionadas en documentos de texto."},
    {key:"C",text:"Detectar objetos en imágenes de productos."},
    {key:"D",text:"Predecir precios de acciones basados en noticias."}
  ],
  answer:"B",
  explanation:"La detección de entidades nombradas (NER) en Amazon Comprehend identifica y clasifica entidades en texto: personas, organizaciones, ubicaciones, fechas, cantidades, eventos. Útil para extracción de información de documentos legales, noticias, contratos y más."},

  {id:"q047",domain:1,subdomain:"1.2",service:null,difficulty:"hard",
  question:"¿Cuál es la principal diferencia entre un sistema de IA 'narrow' (estrecha) y un sistema de Inteligencia Artificial General (AGI)?",
  options:[
    {key:"A",text:"La IA estrecha usa algoritmos de ML; la AGI usa solo reglas lógicas."},
    {key:"B",text:"La IA estrecha está diseñada para una tarea específica (reconocimiento facial, jugar ajedrez); la AGI hipotéticamente podría realizar cualquier tarea intelectual que pueda un humano."},
    {key:"C",text:"La IA estrecha requiere GPU; la AGI funciona en CPU."},
    {key:"D",text:"La IA estrecha es código abierto; la AGI es propietaria."}
  ],
  answer:"B",
  explanation:"Toda la IA actual es 'narrow' (estrecha): cada modelo está diseñado para una tarea o dominio específico. La AGI (Artificial General Intelligence) es un concepto teórico de un sistema que podría realizar cualquier tarea cognitiva con la flexibilidad y adaptabilidad de la inteligencia humana. No existe aún."},

  {id:"q048",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Qué es el 'mantenimiento predictivo' y cómo se aplica la IA en él?",
  options:[
    {key:"A",text:"Programar mantenimiento de equipos en intervalos fijos sin considerar su estado actual."},
    {key:"B",text:"Usar ML para analizar datos de sensores de maquinaria y predecir cuándo una falla ocurrirá antes de que suceda, optimizando el mantenimiento."},
    {key:"C",text:"Contratar técnicos de mantenimiento usando plataformas de IA."},
    {key:"D",text:"Automatizar la generación de reportes de mantenimiento con NLP."}
  ],
  answer:"B",
  explanation:"El mantenimiento predictivo usa ML y datos de sensores IoT (vibración, temperatura, presión) para detectar patrones que preceden a fallos. Permite intervenir antes de que el equipo falle, reduciendo tiempo de inactividad no planificado y costos de mantenimiento."},

  {id:"q049",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"Una empresa de seguros quiere evaluar automáticamente el riesgo de siniestros para cada solicitante de póliza. ¿Qué tipo de modelo ML es más apropiado?",
  options:[
    {key:"A",text:"Modelo generativo para crear nuevos datos de clientes."},
    {key:"B",text:"Modelo de clasificación o regresión supervisado para predecir probabilidad de siniestro."},
    {key:"C",text:"Modelo de clustering para agrupar clientes similares sin predicciones."},
    {key:"D",text:"Modelo de detección de objetos para analizar imágenes de propiedades."}
  ],
  answer:"B",
  explanation:"La evaluación de riesgo en seguros es típicamente un problema de clasificación (alto/bajo riesgo) o regresión (probabilidad de siniestro) supervisado. El modelo aprende de datos históricos de asegurados y siniestros para predecir el riesgo de nuevos solicitantes."},

  {id:"q050",domain:1,subdomain:"1.2",service:null,difficulty:"easy",
  question:"¿Cuál es el beneficio principal de usar IA para clasificación automática de documentos en una empresa?",
  options:[
    {key:"A",text:"Reduce la necesidad de almacenamiento de documentos."},
    {key:"B",text:"Permite clasificar y enrutar automáticamente grandes volúmenes de documentos a gran velocidad y con consistencia, reduciendo el trabajo manual."},
    {key:"C",text:"Garantiza que los documentos nunca contengan errores."},
    {key:"D",text:"Convierte automáticamente documentos a diferentes formatos."}
  ],
  answer:"B",
  explanation:"La clasificación automática de documentos con ML permite procesar miles de documentos por minuto de forma consistente, enrutarlos al departamento correcto y extraer información relevante. Reduce errores humanos, costos operativos y tiempo de procesamiento."},

  {id:"q051",domain:1,subdomain:"1.2",service:"Amazon Rekognition",difficulty:"medium",
  question:"¿Qué característica de Amazon Rekognition permite identificar texto escrito dentro de imágenes o videos?",
  options:[
    {key:"A",text:"Amazon Rekognition no puede detectar texto en imágenes."},
    {key:"B",text:"Text in Image / Text Detection, que extrae texto impreso y escrito a mano de imágenes y videos."},
    {key:"C",text:"Solo puede detectar texto mediante integración con Amazon Textract."},
    {key:"D",text:"Usa Amazon Comprehend internamente para detectar texto."}
  ],
  answer:"B",
  explanation:"Amazon Rekognition incluye Text Detection que localiza y extrae texto (impreso y manuscrito) en imágenes y videos. Es útil para leer matrículas de vehículos, carteles, placas y etiquetas en videos de vigilancia o imágenes de productos."},

  {id:"q052",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Cuál es el uso principal del aprendizaje por refuerzo en aplicaciones del mundo real?",
  options:[
    {key:"A",text:"Principalmente para generar imágenes realistas."},
    {key:"B",text:"Para optimizar decisiones secuenciales en entornos dinámicos: robots, juegos, trading algorítmico, optimización de recursos."},
    {key:"C",text:"Para clasificar emails de spam con alta precisión."},
    {key:"D",text:"Para traducir documentos entre idiomas con mayor precisión."}
  ],
  answer:"B",
  explanation:"El aprendizaje por refuerzo es ideal cuando hay una secuencia de decisiones que optimizar. Aplicaciones: robots que aprenden a caminar, sistemas de juego (AlphaGo), optimización de rutas de entrega, gestión de redes de telecomunicaciones y trading algorítmico."},

  {id:"q053",domain:1,subdomain:"1.2",service:null,difficulty:"easy",
  question:"¿Qué tipo de IA se usa en los filtros de spam de correo electrónico?",
  options:[
    {key:"A",text:"Aprendizaje por refuerzo con agentes autónomos."},
    {key:"B",text:"Clasificación supervisada (binaria) que aprende a distinguir spam de correo legítimo basándose en características del texto y metadatos."},
    {key:"C",text:"Generación de imágenes para visualizar el contenido del spam."},
    {key:"D",text:"Traducción automática para detectar spam en múltiples idiomas."}
  ],
  answer:"B",
  explanation:"Los filtros de spam son modelos de clasificación binaria supervisada. Aprenden de miles de ejemplos etiquetados de spam y correo legítimo, analizando palabras, remitentes, estructura y metadatos para clasificar nuevos mensajes en tiempo real."},

  {id:"q054",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Cuál es la aplicación de IA más común en el diagnóstico médico por imagen?",
  options:[
    {key:"A",text:"Traducir reportes médicos a múltiples idiomas automáticamente."},
    {key:"B",text:"Detectar y clasificar anomalías (tumores, lesiones, enfermedades) en radiografías, TACs y resonancias magnéticas para apoyar el diagnóstico médico."},
    {key:"C",text:"Programar citas médicas automáticamente usando NLP."},
    {key:"D",text:"Generar imágenes médicas sintéticas para reemplazar imágenes reales."}
  ],
  answer:"B",
  explanation:"La IA en diagnóstico por imagen usa modelos de visión por computadora (CNNs) para analizar radiografías, TACs y RMN. Pueden detectar cáncer de pulmón, mamografías anómalas, retinopatía diabética y otras condiciones a veces con precisión comparable a médicos especialistas."},

  {id:"q055",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Qué ventaja ofrece el 'aprendizaje federado' (federated learning) sobre el ML centralizado tradicional?",
  options:[
    {key:"A",text:"Entrena modelos más rápido centralizando todos los datos."},
    {key:"B",text:"Permite entrenar modelos en datos distribuidos sin que los datos brutos salgan de los dispositivos locales, preservando privacidad."},
    {key:"C",text:"Reduce la necesidad de GPUs durante el entrenamiento."},
    {key:"D",text:"Elimina la necesidad de conjuntos de datos etiquetados."}
  ],
  answer:"B",
  explanation:"El federated learning entrena el modelo localmente en cada dispositivo/institución y solo comparte actualizaciones de gradientes (no datos brutos). Clave para sectores con datos sensibles: salud (hospitales no comparten datos de pacientes) y móviles (Google keyboard predictions sin subir texto)."},

  {id:"q056",domain:1,subdomain:"1.2",service:"Amazon SageMaker",difficulty:"hard",
  question:"¿Qué es Amazon SageMaker Ground Truth y para qué se utiliza?",
  options:[
    {key:"A",text:"Un servicio para monitorear modelos de ML en producción y detectar drift."},
    {key:"B",text:"Un servicio para crear conjuntos de datos de entrenamiento etiquetados usando una combinación de trabajadores humanos y ML automatizado."},
    {key:"C",text:"Un repositorio central de modelos pre-entrenados de AWS."},
    {key:"D",text:"Una herramienta para visualizar los resultados de inferencia de modelos en tiempo real."}
  ],
  answer:"B",
  explanation:"Amazon SageMaker Ground Truth es un servicio de etiquetado de datos que combina trabajadores humanos (Amazon Mechanical Turk, equipos privados o proveedores certificados) con auto-etiquetado ML para crear datasets de entrenamiento de alta calidad de forma eficiente y rentable."},

  {id:"q057",domain:1,subdomain:"1.2",service:null,difficulty:"easy",
  question:"¿Cuál es el principal caso de uso de los sistemas de IA para análisis de sentimientos en redes sociales para empresas?",
  options:[
    {key:"A",text:"Generar automáticamente contenido para redes sociales."},
    {key:"B",text:"Monitorear la percepción de marca, detectar crisis de reputación tempranamente y entender la satisfacción de clientes en tiempo real."},
    {key:"C",text:"Traducir publicaciones de redes sociales a múltiples idiomas."},
    {key:"D",text:"Filtrar contenido inadecuado de las plataformas sociales."}
  ],
  answer:"B",
  explanation:"El análisis de sentimientos en redes sociales permite a las empresas monitorear su reputación de marca en tiempo real, detectar crisis emergentes antes de que escalen, medir el impacto de campañas de marketing y entender qué temas generan emociones positivas o negativas entre sus clientes."},

  {id:"q058",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Qué es el 'procesamiento inteligente de documentos' (IDP) y qué tecnologías de IA combina?",
  options:[
    {key:"A",text:"Un sistema de gestión de bases de datos para documentos."},
    {key:"B",text:"La combinación de OCR, NLP y ML para extraer, clasificar y procesar automáticamente información de documentos no estructurados como facturas, contratos y formularios."},
    {key:"C",text:"Un formato de archivo estándar para intercambio de documentos entre sistemas de IA."},
    {key:"D",text:"Un sistema de firma digital para documentos empresariales."}
  ],
  answer:"B",
  explanation:"El IDP combina OCR (extracción de texto), Computer Vision (comprensión de layout), NLP (extracción de entidades y relaciones) y modelos de clasificación ML. Automatiza el procesamiento de facturas, contratos, formularios médicos y reclamaciones de seguros, reduciendo el trabajo manual en hasta 80%."},

  {id:"q059",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Cuál es el caso de uso de IA más adecuado para optimizar el precio dinámico en una aerolínea?",
  options:[
    {key:"A",text:"Análisis de sentimientos de reseñas de clientes."},
    {key:"B",text:"Modelos de ML que predicen la demanda por vuelo, ajustan precios en tiempo real basándose en ocupación, fecha, temporada y comportamiento de la competencia."},
    {key:"C",text:"Reconocimiento facial para autenticación de pasajeros."},
    {key:"D",text:"Traducción automática de menús de vuelo a múltiples idiomas."}
  ],
  answer:"B",
  explanation:"El pricing dinámico en aerolíneas usa modelos de ML para predecir la demanda por vuelo y ajustar precios en tiempo real maximizando ingresos. Considera: ocupación actual, días para el vuelo, temporada, eventos especiales, precios de competidores y elasticidad de demanda histórica."},

  {id:"q060",domain:1,subdomain:"1.2",service:null,difficulty:"easy",
  question:"¿Cuál es el beneficio principal de usar IA en la detección de fraude con tarjetas de crédito en tiempo real?",
  options:[
    {key:"A",text:"Eliminar completamente el fraude en todas las transacciones."},
    {key:"B",text:"Analizar miles de variables por transacción en milisegundos para detectar patrones anómalos y bloquear transacciones sospechosas antes de que se completen."},
    {key:"C",text:"Reducir el número de transacciones que los clientes pueden realizar."},
    {key:"D",text:"Reemplazar completamente al equipo humano de análisis de fraude."}
  ],
  answer:"B",
  explanation:"Los sistemas de detección de fraude con ML analizan en < 100ms docenas de variables (monto, ubicación, historial, dispositivo, hora) para cada transacción, detectando patrones anómalos con mucha mayor precisión y velocidad que métodos basados en reglas, reduciendo falsos positivos y negativos."},

  {id:"q061",domain:1,subdomain:"1.2",service:"Amazon SageMaker",difficulty:"hard",
  question:"¿Qué es Amazon SageMaker Autopilot y qué problema resuelve?",
  options:[
    {key:"A",text:"Automatiza el despliegue de modelos en producción sin configuración manual."},
    {key:"B",text:"Realiza AutoML: explora automáticamente diferentes algoritmos, preprocesamiento e hiperparámetros para encontrar el mejor modelo para un dataset tabular dado."},
    {key:"C",text:"Monitorea automáticamente el rendimiento de modelos en producción."},
    {key:"D",text:"Genera automáticamente datos de entrenamiento sintéticos para aumentar datasets pequeños."}
  ],
  answer:"B",
  explanation:"SageMaker Autopilot es el servicio AutoML de AWS. Dado un dataset tabular y una variable objetivo, explora automáticamente preprocesamiento, feature engineering, selección de algoritmos y ajuste de hiperparámetros, proporcionando el mejor modelo y explicando transparentemente cada paso del proceso."},

  {id:"q062",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿En qué se diferencia la IA prescriptiva de la IA predictiva?",
  options:[
    {key:"A",text:"La IA predictiva es más precisa que la prescriptiva."},
    {key:"B",text:"La IA predictiva forecasta qué pasará; la IA prescriptiva recomienda qué acción tomar para lograr el mejor resultado dado lo que se predice."},
    {key:"C",text:"La IA prescriptiva es solo para NLP; la predictiva es para datos numéricos."},
    {key:"D",text:"Ambas hacen lo mismo pero con nombres distintos."}
  ],
  answer:"B",
  explanation:"La IA predictiva responde '¿qué pasará?' (ej: esta transacción tiene 87% de probabilidad de ser fraude). La IA prescriptiva responde '¿qué debo hacer?' (ej: bloquea la transacción, solicita verificación adicional, o permite con límite reducido). Combina predicción con optimización de decisiones."},

  {id:"q063",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Qué es la 'generación aumentada de recuperación' (RAG) y en qué casos de uso es más útil?",
  options:[
    {key:"A",text:"Una técnica de data augmentation para aumentar datasets de imágenes."},
    {key:"B",text:"Una arquitectura que combina un LLM con recuperación de información de fuentes externas para generar respuestas más precisas y actualizadas basadas en documentos específicos."},
    {key:"C",text:"Un método de entrenamiento que recupera modelos anteriores para continuar el aprendizaje."},
    {key:"D",text:"Una técnica de compresión de modelos para reducir su tamaño en producción."}
  ],
  answer:"B",
  explanation:"RAG (Retrieval Augmented Generation) combina la búsqueda en una base de conocimiento (vectorial) con la generación del LLM. El LLM genera respuestas basadas en documentos recuperados relevantes, reduciendo alucinaciones y permitiendo actualizar el conocimiento sin reentrenar. Ideal para Q&A corporativo sobre documentos internos."},

  {id:"q064",domain:1,subdomain:"1.2",service:null,difficulty:"medium",
  question:"¿Cuál es el principal reto de implementar IA en el sector salud en comparación con otras industrias?",
  options:[
    {key:"A",text:"Los datos de salud son menos abundantes que en otras industrias."},
    {key:"B",text:"Las regulaciones estrictas de privacidad (HIPAA), la heterogeneidad de datos clínicos, la necesidad de alta explicabilidad y los altos costos de errores hacen que la implementación sea más compleja."},
    {key:"C",text:"Los médicos no están dispuestos a usar tecnología de IA."},
    {key:"D",text:"Los sistemas hospitalarios no tienen acceso a computación en la nube."}
  ],
  answer:"B",
  explanation:"El sector salud enfrenta desafíos únicos: regulaciones de privacidad (HIPAA, GDPR), datos fragmentados entre sistemas incompatibles (EHR), necesidad de explicabilidad de las decisiones (el médico debe entender el razonamiento), alto costo de errores (consecuencias en vidas) y sesgos potenciales en datos históricos."},

  {id:"q065",domain:1,subdomain:"1.2",service:null,difficulty:"hard",
  question:"¿Cuándo es más apropiado usar un modelo de ML personalizado entrenado desde cero versus usar un servicio de IA gestionado de AWS (como Rekognition o Comprehend)?",
  options:[
    {key:"A",text:"Siempre es mejor entrenar desde cero para tener mayor control."},
    {key:"B",text:"Los servicios gestionados son preferibles cuando la tarea es estándar, se necesita rapidez y no hay expertise ML. El modelo personalizado es mejor cuando se necesitan capacidades muy específicas del dominio, datos únicos o mayor control."},
    {key:"C",text:"Los servicios gestionados siempre son más precisos que los modelos personalizados."},
    {key:"D",text:"Solo se debe usar modelos personalizados para datos estructurados; los servicios gestionados son para datos no estructurados."}
  ],
  answer:"B",
  explanation:"Los servicios gestionados de AWS (Rekognition, Comprehend, Textract, etc.) ofrecen modelos pre-entrenados de alta calidad sin expertise en ML, con precios por uso y escalabilidad automática. Los modelos personalizados en SageMaker son más apropiados cuando el dominio es muy específico (terminología médica especializada, datos propietarios únicos) o cuando los servicios estándar no alcanzan la precisión requerida."},

  {id:"q066",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Cuáles son las etapas principales del ciclo de vida de desarrollo de ML (MLOps)?",
  options:[
    {key:"A",text:"Solo hay dos etapas: entrenamiento y despliegue."},
    {key:"B",text:"Las etapas son: definición del problema, recolección de datos, preparación de datos, ingeniería de características, entrenamiento del modelo, evaluación, despliegue y monitoreo continuo."},
    {key:"C",text:"El ciclo de vida es: programación, testing y producción, igual que el desarrollo de software tradicional."},
    {key:"D",text:"Solo incluye entrenamiento, validación y producción."}
  ],
  answer:"B",
  explanation:"El ciclo de vida de ML es iterativo: (1) Definir el problema de negocio, (2) Recolectar y etiquetar datos, (3) Explorar y preparar datos (EDA), (4) Feature engineering, (5) Seleccionar y entrenar modelo, (6) Evaluar y ajustar, (7) Desplegar en producción, (8) Monitorear y reentrenar cuando hay drift."},

  {id:"q067",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es el 'model drift' y por qué es importante monitorearlo en producción?",
  options:[
    {key:"A",text:"Cuando el modelo se mueve físicamente entre servidores durante el escalado."},
    {key:"B",text:"El deterioro del rendimiento de un modelo en producción porque la distribución de los datos del mundo real cambia con el tiempo respecto a los datos de entrenamiento."},
    {key:"C",text:"Cuando el modelo supera el almacenamiento disponible y necesita compresión."},
    {key:"D",text:"La diferencia de rendimiento entre el entrenamiento y el conjunto de validación."}
  ],
  answer:"B",
  explanation:"El model drift ocurre cuando la distribución de los datos reales cambia con el tiempo (drift de datos) o cuando las relaciones entre características y target cambian (concept drift). Ej: un modelo de detección de fraude entrenado antes de COVID puede fallar cuando cambian los patrones de transacción. Monitoreo y reentrenamiento periódico son esenciales."},

  {id:"q068",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es Amazon SageMaker Model Monitor y para qué se utiliza?",
  options:[
    {key:"A",text:"Un dashboard para visualizar la arquitectura de los modelos de ML."},
    {key:"B",text:"Un servicio que monitorea automáticamente los endpoints de ML en producción para detectar desviaciones en la calidad de los datos y el rendimiento del modelo."},
    {key:"C",text:"Una herramienta para comparar diferentes versiones de modelos antes del despliegue."},
    {key:"D",text:"Un servicio de logging que registra todas las predicciones del modelo."}
  ],
  answer:"B",
  explanation:"SageMaker Model Monitor detecta automáticamente: data drift (cambios en la distribución de features de entrada), model quality drift (degradación en métricas como accuracy), bias drift (cambios en equidad del modelo) y feature attribution drift (cambios en la importancia relativa de features)."},

  {id:"q069",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"hard",
  question:"¿Qué es Amazon SageMaker Pipelines y qué problema de MLOps resuelve?",
  options:[
    {key:"A",text:"Un servicio de streaming de datos para pipelines de ingesta en tiempo real."},
    {key:"B",text:"Un servicio de orquestación para automatizar y reproducir flujos de trabajo de ML (preprocesamiento, entrenamiento, evaluación, aprobación y despliegue) como pipelines versionados."},
    {key:"C",text:"Una herramienta de visualización de datos para exploración en notebooks."},
    {key:"D",text:"Un servicio de CI/CD para aplicaciones de software sin relación con ML."}
  ],
  answer:"B",
  explanation:"SageMaker Pipelines automatiza el ciclo de vida completo de ML: define el flujo de trabajo (DAG), versiona cada paso, permite reproducibilidad y auditoría, y integra con SageMaker Model Registry para despliegue controlado. Es fundamental para MLOps a escala empresarial."},

  {id:"q070",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es el 'ajuste de hiperparámetros' (hyperparameter tuning) y cómo lo gestiona AWS?",
  options:[
    {key:"A",text:"Es el proceso de cambiar los pesos del modelo después del entrenamiento."},
    {key:"B",text:"Es el proceso de encontrar automáticamente la combinación óptima de hiperparámetros que maximiza el rendimiento del modelo. SageMaker Automatic Model Tuning lo automatiza lanzando múltiples trabajos de entrenamiento en paralelo."},
    {key:"C",text:"Es la optimización del código de entrenamiento para reducir el tiempo de ejecución."},
    {key:"D",text:"Es el ajuste manual de los datos de entrenamiento para mejorar la calidad."}
  ],
  answer:"B",
  explanation:"SageMaker Automatic Model Tuning (AMT) utiliza Bayesian Optimization para explorar el espacio de hiperparámetros eficientemente, lanzando múltiples trabajos de entrenamiento en paralelo. Es mucho más eficiente que grid search o random search manual."},

  {id:"q071",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es la 'validación cruzada' (cross-validation) y por qué se usa en ML?",
  options:[
    {key:"A",text:"Un método para validar que los datos de dos fuentes diferentes son compatibles."},
    {key:"B",text:"Una técnica que divide los datos en K subconjuntos y entrena/evalúa el modelo K veces, rotando el conjunto de validación, para estimar el rendimiento real de forma más robusta."},
    {key:"C",text:"El proceso de comparar dos modelos diferentes entre sí para elegir el mejor."},
    {key:"D",text:"Una técnica de seguridad para validar la autenticidad de los datos de entrenamiento."}
  ],
  answer:"B",
  explanation:"K-fold cross-validation divide los datos en K partes, usa K-1 para entrenar y 1 para validar, rotando K veces. Promedia las métricas de las K iteraciones para obtener una estimación más robusta y con menor varianza del rendimiento real del modelo, especialmente útil con datasets pequeños."},

  {id:"q072",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es el 'data leakage' (fuga de datos) en ML y por qué es perjudicial?",
  options:[
    {key:"A",text:"Cuando los datos de entrenamiento se exponen accidentalmente fuera de la organización."},
    {key:"B",text:"Cuando información del conjunto de prueba o del futuro se filtra inadvertidamente al conjunto de entrenamiento, causando métricas de evaluación artificialmente altas que no se reproducen en producción."},
    {key:"C",text:"Cuando el modelo pierde información importante durante la compresión del modelo."},
    {key:"D",text:"Cuando los datos de producción son significativamente diferentes a los de entrenamiento."}
  ],
  answer:"B",
  explanation:"El data leakage ocurre cuando el modelo tiene acceso a información que no estaría disponible en producción. Ejemplo: normalizar los datos usando estadísticas calculadas incluyendo el test set, o incluir features que son consecuencia del target. Resulta en métricas de evaluación infladas que no se reproducen en producción."},

  {id:"q073",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es el 'ensemble learning' (aprendizaje en conjunto) y cuáles son sus tipos principales?",
  options:[
    {key:"A",text:"Un método que usa un solo modelo muy grande en lugar de varios modelos pequeños."},
    {key:"B",text:"Una técnica que combina múltiples modelos base para obtener mejores predicciones. Tipos: Bagging (Random Forest), Boosting (XGBoost, AdaBoost) y Stacking."},
    {key:"C",text:"El entrenamiento simultáneo del mismo modelo en múltiples servidores para mayor velocidad."},
    {key:"D",text:"Una técnica de regularización que combina múltiples funciones de pérdida."}
  ],
  answer:"B",
  explanation:"El ensemble learning combina varios modelos débiles para crear uno fuerte. Bagging entrena modelos independientes en muestras bootstrap (Random Forest). Boosting entrena modelos secuencialmente, corrigiendo errores del anterior (XGBoost, LightGBM). Stacking usa las predicciones de modelos base como features de un meta-modelo."},

  {id:"q074",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"hard",
  question:"¿Qué es Amazon SageMaker Clarify y cómo contribuye al MLOps?",
  options:[
    {key:"A",text:"Un servicio de edición de datos para limpiar datasets de entrenamiento."},
    {key:"B",text:"Un servicio que detecta sesgos en datos y modelos, y genera explicaciones de predicciones (feature importance) para modelos de ML tanto antes del entrenamiento como en producción."},
    {key:"C",text:"Una herramienta de visualización para comparar la arquitectura de diferentes modelos."},
    {key:"D",text:"Un servicio de encriptación de datos para proteger modelos en tránsito."}
  ],
  answer:"B",
  explanation:"SageMaker Clarify evalúa el bias estadístico en datasets (distribución desigual de clases protegidas) y en predicciones del modelo (disparate impact, demographic parity). También genera explicaciones SHAP (SHapley Additive exPlanations) para entender la importancia de cada feature en cada predicción."},

  {id:"q075",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Cuál es la diferencia entre SageMaker Training Jobs y SageMaker Processing Jobs?",
  options:[
    {key:"A",text:"No hay diferencia; ambos realizan el mismo tipo de computación."},
    {key:"B",text:"Training Jobs están diseñados para entrenar modelos ML; Processing Jobs están diseñados para ejecutar tareas de preprocesamiento de datos, postprocesamiento o evaluación de modelos."},
    {key:"C",text:"Training Jobs usan GPUs; Processing Jobs solo usan CPUs."},
    {key:"D",text:"Processing Jobs son más rápidos que Training Jobs para todas las tareas."}
  ],
  answer:"B",
  explanation:"SageMaker Training Jobs ejecutan el bucle de entrenamiento del modelo en instancias gestionadas. SageMaker Processing Jobs son para tareas generales de preprocesamiento (normalización, feature engineering), evaluación de modelos o cualquier script Python/R que necesite computación escalable sin ser entrenamiento de ML."},

  {id:"q076",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es Amazon SageMaker Model Registry y cuál es su función principal en MLOps?",
  options:[
    {key:"A",text:"Un almacén de objetos para guardar los archivos del modelo de forma segura."},
    {key:"B",text:"Un catálogo centralizado para versionar, catalogar, aprobar y gestionar el ciclo de vida de los modelos de ML, facilitando el despliegue controlado y la auditoría."},
    {key:"C",text:"Un marketplace para comprar modelos de ML pre-entrenados de terceros."},
    {key:"D",text:"Un servicio de compresión de modelos para reducir su tamaño antes del despliegue."}
  ],
  answer:"B",
  explanation:"SageMaker Model Registry mantiene un catálogo versionado de modelos, permite flujos de aprobación (manual o automático) antes del despliegue, registra metadatos (métricas, artefactos, linaje de datos) y facilita la comparación entre versiones. Es fundamental para gobernanza de modelos en producción."},

  {id:"q077",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es el 'data augmentation' (aumento de datos) y cuándo se utiliza?",
  options:[
    {key:"A",text:"El proceso de agregar más servidores para procesar datos más rápido."},
    {key:"B",text:"Técnicas para generar variaciones artificiales de los datos de entrenamiento existentes (rotaciones, flips, ruido) para aumentar el dataset y mejorar la generalización, especialmente con datos limitados."},
    {key:"C",text:"La compra de datos adicionales de terceros para complementar el dataset."},
    {key:"D",text:"Un proceso de normalización avanzada que multiplica el dataset original."}
  ],
  answer:"B",
  explanation:"El data augmentation crea nuevos ejemplos de entrenamiento aplicando transformaciones a los datos existentes. En imágenes: rotaciones, zoom, flip, brillo. En texto: paráfrasis, sustitución de sinónimos. Reduce overfitting y mejora la robustez cuando se tienen pocos datos de entrenamiento etiquetados."},

  {id:"q078",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"hard",
  question:"¿Qué es el despliegue 'canary' (canario) en el contexto de modelos de ML y cómo lo soporta SageMaker?",
  options:[
    {key:"A",text:"Un tipo de modelo de ML para reconocimiento de sonidos de aves."},
    {key:"B",text:"Una estrategia de despliegue que envía un pequeño porcentaje del tráfico real al nuevo modelo antes de migrar completamente, permitiendo detectar problemas con riesgo mínimo."},
    {key:"C",text:"Un método de entrenamiento que usa datos de múltiples regiones simultáneamente."},
    {key:"D",text:"Un tipo de monitoreo que alerta sobre fallos de infraestructura en endpoints de ML."}
  ],
  answer:"B",
  explanation:"El despliegue canary envía un pequeño % del tráfico (ej. 5%) al nuevo modelo mientras el 95% va al modelo actual. Si el nuevo modelo muestra problemas (peores métricas, errores), se revierte con mínimo impacto. SageMaker soporta esto en Endpoints con tráfico por variantes (production variants)."},

  {id:"q079",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué significa 'reproducibilidad' en MLOps y por qué es importante?",
  options:[
    {key:"A",text:"La capacidad de ejecutar el modelo en cualquier dispositivo sin modificaciones."},
    {key:"B",text:"La capacidad de recrear exactamente los mismos resultados dado el mismo código, datos y configuración, fundamental para auditoría, debugging y cumplimiento normativo."},
    {key:"C",text:"La velocidad a la que el modelo puede responder solicitudes repetidas de los mismos usuarios."},
    {key:"D",text:"La facilidad de replicar el modelo en múltiples regiones de AWS simultáneamente."}
  ],
  answer:"B",
  explanation:"La reproducibilidad en MLOps requiere versionado de: código (Git), datos (DVC, S3), hiperparámetros, dependencias (Docker) y artefactos del modelo. Es esencial para auditoría regulatoria, debugging de problemas en producción, comparación rigurosa de experimentos y cumplimiento de normativas como EU AI Act."},

  {id:"q080",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es Amazon SageMaker Data Wrangler y cuál es su principal función?",
  options:[
    {key:"A",text:"Un servicio para gestionar pipelines de datos en streaming de alta velocidad."},
    {key:"B",text:"Una herramienta visual para preparar, transformar y analizar datos para ML sin escribir código, con más de 300 transformaciones incorporadas."},
    {key:"C",text:"Un servicio de ETL para mover datos entre bases de datos relacionales."},
    {key:"D",text:"Una herramienta de visualización de datos tipo Power BI para analistas de negocio."}
  ],
  answer:"B",
  explanation:"SageMaker Data Wrangler simplifica la preparación de datos para ML con una interfaz visual low-code. Permite conectar a múltiples fuentes de datos (S3, Redshift, Athena, Snowflake), aplicar 300+ transformaciones, visualizar distribuciones y exportar el flujo como código o pipeline de SageMaker Pipelines."},

  {id:"q081",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es el 'class imbalance' (desbalance de clases) en ML y cómo se aborda?",
  options:[
    {key:"A",text:"Cuando el modelo tiene diferente rendimiento en distintos tipos de hardware."},
    {key:"B",text:"Cuando algunas clases tienen muchos más ejemplos que otras en el dataset de entrenamiento, causando que el modelo se sesgue hacia las clases mayoritarias. Se aborda con oversampling, undersampling o pesos de clase."},
    {key:"C",text:"Cuando se usan demasiadas clases en un problema de clasificación multi-clase."},
    {key:"D",text:"Diferencias en el tamaño de las imágenes de un dataset de visión por computadora."}
  ],
  answer:"B",
  explanation:"El desbalance de clases es común en fraude (0.1% fraudulentas), enfermedades raras, etc. Técnicas: SMOTE (oversampling sintético de la clase minoritaria), undersampling de la mayoritaria, class weights en la función de pérdida, o usar métricas apropiadas (F1-score, AUC-ROC en lugar de accuracy)."},

  {id:"q082",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué herramienta de AWS permite explorar, limpiar y visualizar datos directamente en notebooks sin gestionar servidores?",
  options:[
    {key:"A",text:"Amazon QuickSight"},
    {key:"B",text:"Amazon SageMaker Studio (Notebooks)"},
    {key:"C",text:"AWS Glue DataBrew"},
    {key:"D",text:"Amazon Athena"}
  ],
  answer:"B",
  explanation:"Amazon SageMaker Studio proporciona un entorno de desarrollo integrado (IDE) basado en JupyterLab completamente gestionado. Los Data Scientists pueden explorar datos, construir modelos, ejecutar experimentos y desplegar modelos desde una sola interfaz sin gestionar la infraestructura subyacente."},

  {id:"q083",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué métricas se utilizan típicamente para evaluar un modelo de clasificación binaria?",
  options:[
    {key:"A",text:"Solo el accuracy (exactitud) es suficiente para evaluar cualquier modelo."},
    {key:"B",text:"Accuracy, Precision, Recall, F1-Score, AUC-ROC y matriz de confusión, eligiendo según el costo relativo de falsos positivos vs. falsos negativos del caso de uso."},
    {key:"C",text:"MSE (Mean Squared Error) y RMSE son las métricas estándar para clasificación."},
    {key:"D",text:"Solo la precisión importa para modelos de clasificación en producción."}
  ],
  answer:"B",
  explanation:"Para clasificación binaria: Precision (de los positivos predichos, cuántos son realmente positivos), Recall/Sensitividad (de los positivos reales, cuántos detecta), F1-Score (media armónica de precision y recall), AUC-ROC. La elección depende del contexto: en diagnóstico médico, el recall es crítico (minimizar falsos negativos)."},

  {id:"q084",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es la 'matriz de confusión' y qué información proporciona sobre el rendimiento de un clasificador?",
  options:[
    {key:"A",text:"Una matriz matemática usada internamente por las redes neuronales para calcular gradientes."},
    {key:"B",text:"Una tabla que muestra el número de predicciones correctas e incorrectas por clase, desglosando verdaderos positivos, falsos positivos, verdaderos negativos y falsos negativos."},
    {key:"C",text:"Una visualización del espacio de hiperparámetros explorado durante el tuning."},
    {key:"D",text:"Una representación de la incertidumbre del modelo ante entradas ambiguas."}
  ],
  answer:"B",
  explanation:"La matriz de confusión para clasificación binaria tiene 4 celdas: TP (predicho positivo, real positivo), FP (predicho positivo, real negativo - error tipo I), FN (predicho negativo, real positivo - error tipo II), TN (predicho negativo, real negativo). De ella se derivan precision, recall, F1 y specificity."},

  {id:"q085",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es Amazon SageMaker Experiments y para qué sirve en el contexto de MLOps?",
  options:[
    {key:"A",text:"Una plataforma para realizar experimentos A/B con usuarios finales en producción."},
    {key:"B",text:"Un servicio para rastrear, organizar y comparar múltiples ejecuciones de entrenamiento con sus hiperparámetros, métricas y artefactos, facilitando la reproducibilidad y el análisis."},
    {key:"C",text:"Un laboratorio virtual para simular el comportamiento de los modelos antes del despliegue."},
    {key:"D",text:"Un servicio de testing de carga para endpoints de ML en producción."}
  ],
  answer:"B",
  explanation:"SageMaker Experiments registra automáticamente todos los detalles de cada ejecución de entrenamiento (hiperparámetros, métricas, código, artefactos), organiza experimentos en trials y permite comparar visualmente múltiples runs para identificar la mejor configuración del modelo."},

  {id:"q086",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es la 'regularización L1 (Lasso) y L2 (Ridge)' en ML y para qué sirve?",
  options:[
    {key:"A",text:"Métodos de optimización de hardware para acelerar el entrenamiento de redes neuronales."},
    {key:"B",text:"Técnicas que añaden un término de penalización a la función de pérdida para prevenir el overfitting reduciendo la magnitud de los pesos del modelo. L1 produce pesos dispersos (selección de features); L2 reduce los pesos uniformemente."},
    {key:"C",text:"Algoritmos de normalización de datos para escalar características al rango [0,1]."},
    {key:"D",text:"Métodos para acelerar la convergencia del gradient descent."}
  ],
  answer:"B",
  explanation:"La regularización penaliza pesos grandes en la función de pérdida. L1 (Lasso): penalización |w|, lleva algunos pesos exactamente a 0 (selección automática de features). L2 (Ridge): penalización w², reduce todos los pesos suavemente. Elastic Net combina ambas. Ambas combaten el overfitting."},

  {id:"q087",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Cuál es el propósito del 'análisis exploratorio de datos' (EDA) en el proceso de ML?",
  options:[
    {key:"A",text:"Configurar la infraestructura de hardware antes de comenzar el entrenamiento."},
    {key:"B",text:"Comprender la estructura, distribución, relaciones y problemas de calidad de los datos antes de construir el modelo, guiando las decisiones de preprocesamiento y modelado."},
    {key:"C",text:"Exportar los datos a un formato compatible con el algoritmo de ML elegido."},
    {key:"D",text:"Documentar los resultados del modelo para presentar a stakeholders."}
  ],
  answer:"B",
  explanation:"El EDA usa estadística descriptiva y visualizaciones para entender los datos: distribuciones (histogramas), correlaciones (heatmaps), outliers (boxplots), valores nulos, desbalance de clases. Guía las decisiones de feature engineering, selección de algoritmo y estrategia de tratamiento de datos problemáticos."},

  {id:"q088",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es el 'aprendizaje continuo' (continual learning) y cuál es su desafío principal?",
  options:[
    {key:"A",text:"El entrenamiento de modelos en secuencias de tareas, con el desafío del 'olvido catastrófico' donde el modelo olvida tareas anteriores al aprender nuevas."},
    {key:"B",text:"El entrenamiento sin interrupciones durante períodos prolongados usando hardware especializado."},
    {key:"C",text:"La capacidad de un modelo de aprender de datos en streaming en tiempo real."},
    {key:"D",text:"El proceso de continuar el entrenamiento de un modelo después de un fallo del sistema."}
  ],
  answer:"A",
  explanation:"El continual learning busca que los modelos aprendan de nuevas tareas sin olvidar las anteriores. El principal desafío es el 'olvido catastrófico' (catastrophic forgetting): al actualizar los pesos para la nueva tarea, el modelo sobreescribe el conocimiento de las tareas previas. Técnicas: EWC, progressive networks, memory replay."},

  {id:"q089",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué tipo de instancias AWS se recomiendan para el entrenamiento de modelos de deep learning y por qué?",
  options:[
    {key:"A",text:"Instancias de propósito general (m5) porque tienen el mayor almacenamiento de RAM."},
    {key:"B",text:"Instancias con GPU (p3, p4, g4, g5) o con chips especializados AWS Trainium (trn1), que aceleran las operaciones matriciales masivas del deep learning."},
    {key:"C",text:"Instancias optimizadas para cómputo (c5) por su alta frecuencia de CPU."},
    {key:"D",text:"Instancias de memoria optimizada (r5) para almacenar grandes datasets en RAM."}
  ],
  answer:"B",
  explanation:"El deep learning requiere multiplicaciones matriciales masivas paralelas para las cuales las GPUs son ~100x más rápidas que CPUs. AWS ofrece: instancias con NVIDIA GPUs (p3/p4/g5), chips AWS Trainium (trn1) para entrenamiento y AWS Inferentia (inf1/inf2) para inferencia de bajo costo."},

  {id:"q090",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es el 'batch inference' versus 'real-time inference' en el despliegue de modelos de ML?",
  options:[
    {key:"A",text:"Son idénticos en términos de latencia y costo, solo difieren en el algoritmo usado."},
    {key:"B",text:"La inferencia batch procesa grandes volúmenes de datos en un schedule periódico; la inferencia en tiempo real responde a solicitudes individuales con baja latencia (milisegundos)."},
    {key:"C",text:"El batch inference es solo para modelos de texto; el real-time es solo para imágenes."},
    {key:"D",text:"El real-time inference siempre es más barato que el batch inference independientemente del volumen."}
  ],
  answer:"B",
  explanation:"Batch inference: procesa miles/millones de registros a la vez en horario programado (ej: predicciones nocturnas de demanda). SageMaker Batch Transform. Real-time inference: responde solicitudes individuales en milisegundos para aplicaciones interactivas. SageMaker Real-time Endpoints. La elección depende del caso de uso."},

  {id:"q091",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es el 'SHAP' (SHapley Additive exPlanations) y cómo se usa en ML explicable?",
  options:[
    {key:"A",text:"Un algoritmo de optimización alternativo al gradient descent para entrenar modelos."},
    {key:"B",text:"Un método de explicabilidad basado en teoría de juegos que calcula la contribución marginal de cada feature a una predicción específica, permitiendo entender por qué el modelo predijo lo que predijo."},
    {key:"C",text:"Una técnica de visualización para mostrar la arquitectura de redes neuronales complejas."},
    {key:"D",text:"Una métrica de evaluación para modelos de generación de texto en NLP."}
  ],
  answer:"B",
  explanation:"SHAP values cuantifican la contribución de cada feature a la predicción de un ejemplo específico, basándose en la teoría de valores de Shapley de la teoría de juegos cooperativos. Permite explicaciones locales (por qué este préstamo fue denegado) y globales (qué features importan más en general). SageMaker Clarify lo implementa."},

  {id:"q092",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Qué es SageMaker Neo y para qué se usa?",
  options:[
    {key:"A",text:"Una interfaz gráfica nueva para crear notebooks de ML sin código."},
    {key:"B",text:"Un compilador que optimiza modelos de ML para inferencia en hardware específico (edge devices, GPUs, CPUs) reduciendo latencia y tamaño del modelo."},
    {key:"C",text:"Un servicio para conectar modelos de SageMaker con bases de datos relacionales."},
    {key:"D",text:"Una herramienta de testing automático para modelos de ML antes del despliegue."}
  ],
  answer:"B",
  explanation:"SageMaker Neo compila modelos entrenados (TensorFlow, PyTorch, MXNet) optimizándolos para hardware específico (edge devices como Raspberry Pi, NVIDIA Jetson, cámaras industriales, o instancias de nube) consiguiendo hasta 2x de aceleración en inferencia con el mismo hardware."},

  {id:"q093",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es el 'A/B testing' de modelos de ML en producción?",
  options:[
    {key:"A",text:"Un método estadístico para comparar dos datasets de entrenamiento distintos."},
    {key:"B",text:"Una técnica que divide el tráfico de producción entre dos versiones del modelo (A y B) para comparar su rendimiento en condiciones reales antes de decidir cuál desplegar completamente."},
    {key:"C",text:"Un proceso para probar el modelo con alfabeto A-Z y del 0-9 para verificar su cobertura."},
    {key:"D",text:"La comparación de dos arquitecturas de red neuronal en entrenamiento simultáneo."}
  ],
  answer:"B",
  explanation:"El A/B testing en ML envía, por ejemplo, 50% del tráfico real al Modelo A (actual) y 50% al Modelo B (nuevo). Se comparan métricas de negocio reales (conversión, satisfacción) además de métricas técnicas, permitiendo validar que el nuevo modelo mejora el KPI antes del despliegue completo."},

  {id:"q094",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es el 'entrenamiento distribuido' en deep learning y cuándo es necesario?",
  options:[
    {key:"A",text:"Entrenar el mismo modelo simultáneamente en múltiples países para representar diversidad cultural."},
    {key:"B",text:"Distribuir el entrenamiento en múltiples GPUs o instancias cuando el modelo o dataset es demasiado grande para una sola GPU, usando paralelismo de datos (copias del modelo, diferentes datos) o de modelo (capas en distintas GPUs)."},
    {key:"C",text:"Ejecutar múltiples experimentos de ML en paralelo para optimizar el tiempo."},
    {key:"D",text:"Un método de entrenamiento federado donde los datos permanecen en los dispositivos locales."}
  ],
  answer:"B",
  explanation:"El entrenamiento distribuido es esencial para LLMs y modelos grandes. Data parallelism: replica el modelo en cada GPU, cada una procesa un mini-batch diferente, los gradientes se sincronizan. Model parallelism: divide el modelo entre GPUs cuando no cabe en una. AWS SageMaker soporta ambos con training distributed libraries."},

  {id:"q095",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es la 'cuantización' de modelos en el contexto de inferencia de ML?",
  options:[
    {key:"A",text:"El proceso de convertir datos continuos en datos discretos para el entrenamiento."},
    {key:"B",text:"Una técnica de compresión que reduce la precisión numérica de los pesos del modelo (ej. de float32 a int8) para reducir el tamaño del modelo y acelerar la inferencia con mínima pérdida de precisión."},
    {key:"C",text:"La medición del número total de parámetros de un modelo de deep learning."},
    {key:"D",text:"Un método de optimización que discretiza el espacio de hiperparámetros."}
  ],
  answer:"B",
  explanation:"La cuantización reduce la precisión de los pesos (float32 → float16 → int8 → int4). Beneficios: menor tamaño del modelo (hasta 4x), menor huella de memoria, mayor velocidad de inferencia (2-4x), menor consumo energético. Esencial para desplegar LLMs en hardware limitado o reducir costos de inferencia."},

  {id:"q096",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"hard",
  question:"¿Qué diferencia a SageMaker Serverless Inference de un endpoint de tiempo real estándar?",
  options:[
    {key:"A",text:"Serverless es más rápido porque no necesita arrancar instancias."},
    {key:"B",text:"Serverless Inference no requiere aprovisionar instancias; escala a cero cuando no hay tráfico (pagando solo por inferencia ejecutada), siendo ideal para cargas de trabajo intermitentes o de baja frecuencia."},
    {key:"C",text:"Serverless solo soporta modelos de hasta 1 GB; el estándar no tiene límite."},
    {key:"D",text:"Serverless Inference es solo para modelos de NLP; el estándar soporta todos los tipos."}
  ],
  answer:"B",
  explanation:"SageMaker Serverless Inference escala automáticamente desde cero, eliminando el costo de instancias inactivas. Tiene cold start (~1-2 seg), por lo que no es ideal para aplicaciones con SLA de baja latencia. Perfecto para endpoints de uso infrecuente donde el costo de mantener instancias activas no se justifica."},

  {id:"q097",domain:1,subdomain:"1.3",service:null,difficulty:"medium",
  question:"¿Qué es el 'feature store' y qué problema resuelve en MLOps a escala empresarial?",
  options:[
    {key:"A",text:"Un almacén de datos en S3 donde se guardan los archivos de modelos entrenados."},
    {key:"B",text:"Un repositorio centralizado para almacenar, compartir y reutilizar features calculadas para ML, eliminando el cálculo redundante, garantizando consistencia entre entrenamiento y producción."},
    {key:"C",text:"Una tienda de modelos pre-entrenados disponibles para comprar en el AWS Marketplace."},
    {key:"D",text:"Un servicio de caché para acelerar las consultas a bases de datos de features."}
  ],
  answer:"B",
  explanation:"El feature store (SageMaker Feature Store) resuelve el 'training-serving skew': las mismas features deben calcularse igual en entrenamiento y en producción. Centraliza features para que múltiples equipos las reutilicen, permite features en tiempo real (online store) e históricas (offline store) desde la misma fuente."},

  {id:"q098",domain:1,subdomain:"1.3",service:null,difficulty:"hard",
  question:"¿Qué es el 'concept drift' y cómo se diferencia del 'data drift'?",
  options:[
    {key:"A",text:"Son sinónimos que describen el mismo fenómeno de deterioro del modelo."},
    {key:"B",text:"El data drift es cuando la distribución de los features de entrada cambia; el concept drift es cuando la relación estadística entre features y target cambia, afectando la validez del modelo aunque los inputs sean similares."},
    {key:"C",text:"El concept drift es un problema de código; el data drift es un problema de infraestructura."},
    {key:"D",text:"El data drift ocurre durante el entrenamiento; el concept drift ocurre durante el despliegue."}
  ],
  answer:"B",
  explanation:"Data drift (covariable shift): la distribución P(X) de las features de entrada cambia. Concept drift: la distribución condicional P(Y|X) cambia, es decir, el mismo input ahora debería tener un output diferente. Ejemplo: el comportamiento de compra de clientes cambia post-pandemia, aunque las variables demográficas sean similares. Ambos requieren reentrenamiento."},

  {id:"q099",domain:1,subdomain:"1.3",service:"Amazon SageMaker",difficulty:"medium",
  question:"¿Cuál es la diferencia entre SageMaker Training Jobs con algoritmos integrados (built-in) vs. contenedores personalizados?",
  options:[
    {key:"A",text:"Los algoritmos integrados son siempre más precisos que los contenedores personalizados."},
    {key:"B",text:"Los algoritmos integrados (XGBoost, Linear Learner, etc.) están listos para usar sin configurar el entorno; los contenedores personalizados permiten usar cualquier framework (PyTorch, TF, JAX) empaquetando el propio código en Docker."},
    {key:"C",text:"Los contenedores personalizados solo se pueden usar en instancias específicas."},
    {key:"D",text:"Los algoritmos integrados no se pueden escalar a múltiples instancias; los personalizados sí."}
  ],
  answer:"B",
  explanation:"SageMaker ofrece algoritmos built-in optimizados (XGBoost, K-Means, PCA, Object Detection, etc.) con mínima configuración. Los contenedores personalizados empaquetan código propio + framework en Docker, dando control total sobre el entorno. También existen containers gestionados de AWS para TensorFlow, PyTorch, HuggingFace."},

  {id:"q100",domain:1,subdomain:"1.3",service:"AWS Inferentia",difficulty:"hard",
  question:"¿Cuál es el propósito de AWS Inferentia y en qué se diferencia de AWS Trainium?",
  options:[
    {key:"A",text:"Ambos son idénticos en función; solo difieren en el precio."},
    {key:"B",text:"AWS Inferentia es un chip diseñado para inferencia de ML de alto rendimiento y bajo costo en producción; AWS Trainium es un chip diseñado específicamente para el entrenamiento de modelos de deep learning a gran escala."},
    {key:"C",text:"Inferentia es para modelos de visión; Trainium es para modelos de lenguaje."},
    {key:"D",text:"Trainium es más antiguo y ha sido reemplazado por Inferentia en todas las funciones."}
  ],
  answer:"B",
  explanation:"AWS Trainium (trn1) está optimizado para el entrenamiento de modelos de deep learning, especialmente LLMs, ofreciendo hasta 50% mejor relación precio-rendimiento que GPU comparables. AWS Inferentia (inf1, inf2) está optimizado para inferencia en producción, con bajo costo por predicción y alta throughput para servir modelos en escala."}
];
