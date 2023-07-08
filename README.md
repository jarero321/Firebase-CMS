Holaaaaaaa geeeek que estara revisando esto:
Pueeeees hoy quise hacer algo diferente y puse la tematica de cyberpunk edge runners, la idea es poder registrar a todo los cyberpsicopatas que existan, 
para ello realize 3 paginas.
pero antes de eso para instalar este proyecto necesitas ejecutar:
pnpm install o npm install
despues ejecutas el script de npm run dev o pnpm run dev,
ahora si la aplicacion correra en un localhost:3000, 
esta aplicacion esta realizada con las siguientes tecnologias:
Next js 13,
Typescript,
Firebase y Firestore,
react-hook-form,
material UI,
y modular css (que es css a la warrior),
La aplicacion usa ServerComponents (si llegas a ver las pages con async no es una mounstrosidad xD), entonces tiene unos conceptos un poco mas definidos,
ahora bien todo se penso en trabajo con clean architecture o clean code (seeeeeeeee por eso me llevo mas tiempo de lo planeado), la idea de esto es que se pueda reutilizar cada parte del codigo en distintas secciones, y a su vez separar la logica de la aplicacion (todo firebase esta en la carpeta de api).

Ahora bien, la estructura de carpetas es la siguiente:

adapters (es un design pattern para poder limpiar la informacion que llega y/o se envia al back-end en este caso firebase)
api (aqui va todo lo relacionado a la conexion con firebase, lo queria llamar services pero creo que hace mas sentido llamarlo como api, por que creo nuevos registros jeje)
app (es el router de next js entonces ese esta izzi)
components(todo los componentes que se van a llegar a reutilizar entre paginas)
models (aqui van todas las waiufus o monas chinas avedaaaaaa, aqui va todo lo que tenga que ver con la logica de negocio, en este caso son para los psicopatas y sus tipados)
utils (esta vacia :( pero es para funciones que puedan servir de utilidad)
views te preguntaras este bato todo separa xD, peroooo me gusta tener una carpeta de views o pages, para ahi tener los componentes que solo se usan en x pagina es decir, en la pagina para registrar un psicopata uso un registerForm y este solo se va a usar en ese ambito de la app, no vale la pena tener una carpeta llena de componentes que no se va a reutilizar entonces lo excluimos jsjsjsjs,

y es todooooo lo de estructura de carpetas jaja, no pude tomar redux, y/o algo mas crazy por que todo lo hacia con conexiones a firebase entonces no tenia sentido pipipipi.

Ahora el proyecto tiene una serie de reglas para el estilo (pa que se vea freson el codigo)

todo esta en prettierrc, y como me gusta sufrir tengo un lintern bien exigente que llora por todo, esto con la finalidad de poder tener una estandarizacion.


Ahora eso es en cuanto a mi codigo, me gustaria despedirme dando el top 5 motivos por los que puedo ser el candidato ideal:

1 Me gustan los capibaras a quien no le gustan los capibaras??
2 No soy malacopa entonces en los convivios me la puedo llevar bien chido.
3 Soy un rockola musical y eso hace que pueda acoplarme a cualquier equipo de trabajo.
4 me gusta trabajar y jugar videojuegos nos podemos echar unas partidas de cualquier juego :) .
5 Ya tumbe muchas veces prod, entonceeeeeees se que hacer en caso de que se queme prod xD.
Bonus: Me gusta poder compartir mi conocimiento entonces me gusta mucho documentar el codigo :),