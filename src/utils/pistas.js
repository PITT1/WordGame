
const pistas = [
    "De la letra a, a la letra z", // abecedario
    "Enigma resoluble", // acertijo
    "Que se admira mucho", // admirable
    "Elegante y fino", // afinado
    "Que causa agrado", // agradar
    "Sinonimo de apretar, acomodar, encajar", // ajustar
    "Operación rápida", // albatozo (aunque es menos común)
    "Sentimiento de felicidad", // alegría
    "Artículo de dormir", // almohada
    "Sinonimo de simpatia, agrado", // amabilidad
    "Deseo intenso", // ambición
    "Pieza en forma de aro", // anillo
    "Chocarse las manos repetidamente", // aplaudir
    "Persona del medio oriente", // árabe
    "Material para carreteras", // asfalto
    "Persona con disciplina en algun deporte", // atleta
    "Máquina voladora", // avión
    "Se usa para endulzar", // azúcar
    "Contenedor para llevar cosas", // balde
    "Casa de las monedas", // banco
    "Palanca de hierro", // barra
    "Desecho sólido", // basura
    "Se usa para refrescarte", // bebida
    "Persona arabe que habita el sahara en forma de nomada", // beduino
    "Parte superior del cuerpo", // cabeza
    "Grano molido", // café
    "Cuando la temperaturas suben", // calor
    "Prenda de vestir", // camisa
    "lugar para vivir y crecer", // casa
    "hortaliza que te hace llorar", // cebolla
    "Probablemente estes en frente de uno", // celular
    "animal de granja", // cerdo
    "hombre joven", // chico
    "New york, Los angeles, Sao paulo, Madrid", // ciudad
    "Muchos niños, un solo adulto", // clase
    "Forma elevada de terreno", // colina
    "Proceso de alimentación", // comer
    "Para trabajar y para jugar", // computadora
    "Persona que va al volante", // conductor
    "particula de nieve", // copo
    "Recinto cerrado para animales", // corral
    "Habito adquirido por repeticiones", // costumbre
    "figura geometrica", // cuadrado
    "Habitación pequeña", // cuarto
    "Baile ritmizado", // danza
    "Tomar decisión", // decidir
    "Comida matutina", // desayuno
    "Demonio malvado", // diablo
    "Garabatos en un papel", // dibujo
    "El mundo se mueve gracias a el", // dinero
    "Objeto circular", // disco
    "Eres un santo", // divinidad
    "Día de descanso", // domingo
    "Pregunta por alguna ubicación", // donde
    "Pasan cosas al mismo tiempo", // durante
    "Numero que define tu vida", // edad
    "Otra forma de decir dinero", // efectivo
    "Mamífero grande", // elefante
    "Iniciar acción", // empezar
    "Toz, fiebre, alergia, malestar", // enfermo
    "Electricidad, eolica, mareas, cinetica, potencial, nuclear debil", // energía
    "Comprender conceptos", // entender
    "Grupo de personas", // equipo
    "Institución educativa", // escuela
    "Sinonimo de aguardar, permanecer, quedarse", // esperar
    "nuestro planeta la orbita", // estrella
    "Sensacion rara", // extraño
    "Toreto, Lety, Bryan, Mia", // familia
    "Sentimiento positivo", // felicidad
    "Planta de mucha belleza", // flor
    "Temperatura baja", // frío
    "hogar del sistema solar", // galaxia
    "Animal doméstico", // gato
    "Antonimo de tacaño", // generoso
    "Otra forma de decir personas", // gente
    "Tipo de movimiento", // giro
    "Mandar sobre una gran comunidad", // gobernar
    "De gran tamaño", // grande
    "Conflicto armado", // guerra
    "Antonimo de hacer silencio", // hablar
    "Falta de comida", // hambre
    "Producto de grano", // harina
    "Persona consanguinea a ti", // hermano
    "Cuentos con pruebas que las convierten en hechos", // historia
    "otra forma de decir casa", // hogar
    "Medida de tiempo", // hora
    "Instalación médica", // hospital
    "Establecimiento alojamiento", // hotel
    "homosapiens", // humano
    "Edificio religioso", // iglesia
    "Sinonimo de apariencia, forma o figura", // imagen
    "Importancia crucial", // importante
    "accidente con productos inflamables", // incendio
    "Libertad, especialmente la de un Estado que no es tributario ni depende de otro", // independencia
    "Sentimiento negativo", // infeliz
    "Persona profecional", // ingeniero
    "Hacer algo para entretenerse", // jugar
    "Sinonimo de razon, entendimiento, discernimiento", // juicio
    "Principio moral que lleva a determinar que todos deben vivir honestamente", // justicia
    "Unidad de peso", // kilo
    "Lugar de experimentos cientificos", // laboratorio
    "Instrumento de escritura", // lápiz
    "Lactosa líquida", // leche
    "Tiene un monton de letras dentro", // libro
    "Limpiar superficies", // limpiar
    "Bonito aspecto", // lindo
    "Trasado en una pared, o papel", // línea
    "Illuminación natural", // luz
    "Persona que enseña a otros", // maestro
    "Matar ser vivo", // matar
    "Rama de la ciencia", // medicina
    "Lo usamos para recordar y tambien esta dentro de las computadoras y celulares", // memoria
    "Tabla con patas", // mesa
    "Sentimiento de temor", // miedo
    "1000", // mil
    "Intervalo de tiempo", // minuto
    "Persona maniqui", // modelo
    "Criatura muy temible", // monstruo
    "Irse con mama coco", // morir
    "Es el corazon de muchos vehiculos", // motor
    "Sinonimo de vacio, inexistencia", // nada
    "Sinonimo de innato, connatural, inherente, consustancial, congénito", // natural
    "muy pequeñas gotas de agua en la atmosfera", // neblina
    "Metodo de obtener dinero a cambio de productos o servicios", // negocio
    "Menor de 12 años", // niño
    "Cielo oscuro y estrellado", // noche
    "Narrativa literaria", // novela
    "Cosa fisica y tangible", // objeto
    "Sinonimo de escondido", // oculto
    "Lugar de trabajo", // oficina
    "Órganos visuales", // ojos
    "Lo contrario", // opuesto
    "Sinonimo de colocacion, disposicion, estructura, jerarquia", // orden
    "Metal precioso", // oro
    "Sinonimo de diferente, distinto", // otro
    "hombre que engendra un hijo", // padre
    "Unidad lingüística, dotada generalmente de significado", // palabra
    "Alimento hecho de trigo", // pan
    "Área verde para pasear", // parque
    "Porcion de un todo", // parte
    "Transcurrir tiempo", // pasar
    "Espacio abierto en una casa", // patio
    "Desagradable para Dios", // pecado
    "Largometraje", // película
    "Dejar de tener, o no hallar, aquello que poseía", // perder
    "Individuo humano", // persona
    "Estas pensando", // piensa
    "Material de la tabla periodica", // plata
    "Accion de sembrar una planta", // plantar
    "Zona publica para caminar", // plaza
    "Obra escrita en verso", // poema
    "Toma de decisiones en grupo, u otras formas de relaciones de poder entre personas", // política
    "Colocar algo", // poner
    "Población urbana", // pueblo
    "Lugar en la costa o en las orillas de un río", // puerto
    "Forman parte de i y j", // punto
    "Desear o apetecer", // querer
    "Rayo McQueen", // rápido
    "Línea de luz que procede de un cuerpo luminoso", // rayo
    "Tomar lo que le dan o le envían", // recibir
    "Pasar a tener en la mente algo del pasado", // recordar
    "Atemperar, moderar o disminuir el calor de algo", // refrescar
    "volver a un lugar que ya visitaste", // regresar
    "Creencia basada en dogmas", // religión
    "Liquido curativo", // remedio
    "Arrepentirse acto", // repentir
    "Sinonimo de inhalar", // respirar
    "Característica facial", // rostro
    "Sabiduría adquirida", // saber
    "Pasar de dentro afuera", // salir
    "Estado en que el ser orgánico ejerce normalmente todas sus funciones", // salud
    "Pan con jamon y queso", // sandwich
    "Cosa que cuidadosamente se tiene reservada y oculta", // secreto
    "Emociones internas", // sentimiento
    "En todo o en cualquier tiempo", // siempre
    "Ausencia de sonido", // silencio
    "Con simpleza o sencillez", // simplemente
    "Carencia o falta de algo", // sin
    "Lugar específico", // sitio
    "Lo hacemos cuando dormimos", // soñar
    "Exprecion facial de alegria", // sonrisa
    "Descanso nocturno", // sueño
    "Superficie firme", // suelo
    "Que está más alta y en lugar preeminente respecto de otra", // superior
    "Emerger aparentemente", // surgir
    "Deberes para hacer", // tarea
    "Primeras horas de la mañana", // temprano
    "Nos hace envejecer", // tiempo
    "Liquido oscuro usado para escribir", // tinta
    "Accion que tiene que ver con el tacto", // tocar
    "Fruta roja", // tomate
    "Cualidad de los sonidos", // tono
    "Sinonimo de laburo", // trabajo
    "Sinonimo de calmado", // tranquilo
    "Enviar informacion o contagiar enfermedad", // transmitir
    "Choque emocional que produce un daño duradero en el inconsciente", // trauma
    "Grupo étnico", // tribu
    "Actividad turística", // turismo
    "Está al final de una línea, de una serie o de una sucesión", // último
    "Antonimo de separarse", // unirse
    "Cualidad util", // utilidad
    "Mooo", // vaca
    "Antonimo de cobarde", // valiente
    "Grado de utilidad o aptitud de las cosas para satisfacer las necesidades o proporcionar bienestar o deleite", // valor
    "Cualidad de vario", // variedad
    "Móvil rápido", // veloz
    "Gran hueco en una pared que nunca se tapa aproposito", // ventana
    "Antonimo de mentira", // verdad
    "Todos los seres animados lo tienen", // vida
    "Instrumento musical", // violín
    "Pajaros y aviones", // volar
    "Que se hace por espontánea voluntad y no por obligación o deber", // voluntario
    "Movimiento de una cosa alrededor de un punto", // vuelta
    "Alimento fermentado", // yogur
    "zapato pero en femenino", // zapatilla
];

export default pistas;