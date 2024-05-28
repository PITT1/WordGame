
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
    "Laboratorio científico", // laboratorio
    "Instrumento de escritura", // lápiz
    "Lactosa líquida", // leche
    "Tiene un monton de letras dentro", // libro
    "Limpiar superficies", // limpiar
    "Bonito aspecto", // lindo
    "Línea recta", // línea
    "Illuminación natural", // luz
    "Maestro docente", // maestro
    "Matar ser vivo", // matar
    "Rama de la medicina", // medicina
    "Memoria mental", // memoria
    "Pieza de mobiliario", // mesa
    "Miedo al riesgo", // miedo
    "Mil unidades", // mil
    "Intervalo de tiempo", // minuto
    "Modelo de referencia", // modelo
    "Criatura monstruosa", // monstruo
    "Morir definitivamente", // morir
    "Motor mecánico", // motor
    "Nada absoluto", // nada
    "Naturalmente", // natural
    "Neblina atmosférica", // neblina
    "Negocio comercial", // negocio
    "Niño menor de edad", // niño
    "Periodo nocturno", // noche
    "Narrativa literaria", // novela
    "Objeto físico", // objeto
    "Oculto secreto", // oculto
    "Oficina de trabajo", // oficina
    "Órganos visuales", // ojos
    "Contrario opuesto", // opuesto
    "Ordenar elementos", // orden
    "Metal precioso", // oro
    "Otro diferente", // otro
    "Padre biológico", // padre
    "Palabra hablada", // palabra
    "Pan de trigo", // pan
    "Área verde", // parque
    "Parte de algo", // parte
    "Transcurrir tiempo", // pasar
    "Espacio abierto", // patio
    "Pecado grave", // pecado
    "Película cinematográfica", // película
    "Perder algo", // perder
    "Individuo humano", // persona
    "Piensa reflexionar", // piensa
    "Moneda plateada", // plata
    "Plantar semillas", // plantar
    "Plaza pública", // plaza
    "Poema lírico", // poema
    "Política gubernamental", // política
    "Colocar algo", // poner
    "Población urbana", // pueblo
    "Puerto marítimo", // puerto
    "Punto cardinal", // punto
    "Querer intensamente", // querer
    "Velocidad alta", // rápido
    "Rayo eléctrico", // rayo
    "Recibir algo", // recibir
    "Recordar eventos", // recordar
    "Refrescar mente", // refrescar
    "Regresar lugar", // regresar
    "Religión creencias", // religión
    "Remedio curativo", // remedio
    "Arrepentirse acto", // repentir
    "Respirar aire", // respirar
    "Característica facial", // rostro
    "Sabiduría adquirida", // saber
    "Salir fuera", // salir
    "Salud bienestar", // salud
    "Sandwich relleno", // sandwich
    "Secreto privado", // secreto
    "Sentimiento emocional", // sentimiento
    "Siempre continuamente", // siempre
    "Silencio total", // silencio
    "Simplemente solo", // simplemente
    "Sin presencia", // sin
    "Lugar específico", // sitio
    "Soñar imágenes", // soñar
    "Sonrisa feliz", // sonrisa
    "Descanso nocturno", // sueño
    "Superficie firme", // suelo
    "Superior a otros", // superior
    "Emerger aparentemente", // surgir
    "Tarea asignada", // tarea
    "Temprano madrugada", // temprano
    "Tiempo transcurrido", // tiempo
    "Tinta escribible", // tinta
    "ToCAR instrumento", // tocar
    "Fruta roja", // tomate
    "Tonos musicales", // tono
    "Trabajo manual", // trabajo
    "Calmado tranquilo", // tranquilo
    "Transmitir información", // transmitir
    "Trauma dañino", // trauma
    "Grupo étnico", // tribu
    "Actividad turística", // turismo
    "Último final", // último
    "Unirse grupo", // unirse
    "Utilidad práctica", // utilidad
    "Vaca mamífero", // vaca
    "Valiente arrojado", // valiente
    "Valor monetario", // valor
    "Variedad diversa", // variedad
    "Móvil rápido", // veloz
    "Ventana abierta", // ventana
    "Verdad real", // verdad
    "Vida existencia", // vida
    "Instrumento musical", // violín
    "Volar en el aire", // volar
    "Voluntario ofrecimiento", // voluntario
    "Vuelta retorno", // vuelta
    "Alimento fermentado", // yogur
    "zapato pero en femenino", // zapatilla
];

export default pistas;