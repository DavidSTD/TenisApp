import Category from '../models/category';
import Tenis from '../models/Tenis';

export const CATEGORIES = [
  new Category('c1', 'Nike', 'orange'),
  new Category('c2', 'Vans', 'red'),
  new Category('c3', 'Lacoste', 'green'),
  new Category('c4', 'Adidas', '#64B5F6'),
 
];

export const TENIS = [
  new Tenis(
    'a1',
    ['c1',],
    'Dunk',
    'https://www.sneakers-actus.fr/wp-content/uploads/2023/11/Shinpei-Ueno-x-Nike-Dunk-Low-SB-Blanche-et-noire.jpg',
    [
      'Valor:',
      '$2,500',
      'Materiales:',
      'Los Nike Dunk se componen de Cuero, entresuela de espuma y cuello acolchado. '
    ],
    [
      'En 2005, un equipo de Osaka liderado por Shinpei Ueno destacó el arte nocturno del skateboarding japonés. Gracias a sus viajes y 15 años creando la serie de videos alternativos Lenz, ayudó a difundir el estilo de pies veloces y las exploraciones de color y entorno que ahora son el sello del escenario local y del estilo TIGHTBOOTH®.'
    ],

  ),

  new Tenis(
    'a2',
    ['c1',],
    'Industrial Blue',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0c073ec4-35f6-4f83-bb7f-057bbb07af5a/tenis-grandes-air-jordan-4-retro-industrial-blue-bBK8Zg.png',
    [
      'Valor:',
      '$4,599',
      'Materiales:',
      'Están compuestos com cuero, material sintético, tela y entresuela de espuma.'
    ],
    [
      'Regresa a lo clásico. Los amados AJ4 vuelven con cuero blanco cáscara de huevo premium, nobuk gris neutro y toques llamativos de azul industrial, lo que crea una estética general impecable. Manteniéndonos fiel a la forma, volvimos a rediseñar estratégicamente este ícono con las características originales de 1989 y todos los detalles exclusivos: un logotipo Jumpman audaz, detalles de malla, las famosas "alas" y la marca Nike Air en el talón para darle el toque de herencia.'
    ],

  ),

  new Tenis(
    'a3',
    ['c1',],
    'Artisanal Red',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/94b72044-b254-42cd-bfc9-7f42688fc3e2/tenis-air-jordan-1-retro-high-og-BFqZfb.png',
    [
      'Valor:',
      '$4,199',
      'Materiales:',
      'Se elaboran con cuero de varios colores y plantilla espumosa.'
    ],
    [
      'Con la cancha como su lienzo en blanco, el arte inigualable de MJ con la pelota lo consolidó como el jugador de básquetbol con más talento del momento. Todo es gracias a su increíble genio con los saltos y a su capacidad insuperable para rematar cada jugada maestra con carácter. La excelencia de MJ se refleja en esta edición "Artisanal Red" del AJ1 High. Igual que su famoso tiro en suspensión y su actitud elegante, esta impecable combinación de colores ofrece un estilo atemporal que se merece su propia exposición. Póntelo, encuentra tu lienzo y honra el legado.'
    ],

  ),

  new Tenis(
    'a4',
    ['c1',],
    'Air Force 1',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4ee7f9e9-9f1f-4395-95f4-ceca25120f39/tenis-grandes-air-force-1-le-sCkTz9.png',
    [
      'Valor:',
      '$1,700',
      'Materiales:',
      'Se compone de cuero, goma y tela.'
    ],
    [
      'Su diseño, al igual que otros modelos de zapatillas Nike, está inspirado en el baloncesto, por lo que son unas zapatillas deportivas robustas y su suela presenta una plataforma elevada y curvada para brindar un buen soporte en el juego.'
    ],

  ),


  new Tenis(
    'a11',
    ['c2'],
    'Old Skool',
    'https://vansmx.vtexassets.com/arquivos/ids/1726074-800-auto?v=638494226624570000&width=800&height=auto&aspect=true',
    [
      'Valor:',
      '$1,599',
      'Materiales:',
      'Diseño bajo con parte superior de lona y cuero, disponible en varios colores.',
      'Fecha de creación:',
      'Fue introducido en 1977.'
    ],
    [
      'Un clásico desde 1977, conocido por su icónica franja lateral.'
    ],

  ),

  new Tenis(
    'a22',
    ['c2'],
    'Sk8-Hi',
    'https://vansmx.vtexassets.com/arquivos/ids/1524219-800-auto?v=638460421387400000&width=800&height=auto&aspect=true',
    [
      'Valor:',
      '$1,399',
      'Materiales:',
      'Caña, tela y suela de caucho.',
      'Fecha de creación:',
      'Se lanzaron a finales de los años 70.'
    ],
    [
      'Un favorito para los skaters, con un diseño que ofrece soporte adicional en el tobillo. Tenis de caña alta con la clásica franja lateral de Vans y construcción reforzada para soportar el desgaste del skateboarding.'
    ],

  ),


  new Tenis(
    'a33',
    ['c2'],
    'Knu Skool',
    'https://vansmx.vtexassets.com/arquivos/ids/1818335-800-auto?v=638530431453430000&width=800&height=auto&aspect=true',
    [
      'Valor:',
      '$1,699',
      'Materiales:',
      'Tela, suela de caucho y gamuza.',
      'Fecha de creación:',
      'Uno de los más reciente en la línea Vans, introducido en los últimos años.'
    ],
    [
      'Un estilo de los 90 inspirado en el pasado, pero construido para hoy. El Knu Skool es una interpretación moderna de un estilo clásico de los años 90, definido por su lengüeta acolchonada y Sidestripe moldeado en 3D, y atado con agujetas con estilo más grueso. Con su perfil llamativo y detalles de estilo inspirados en lo dramático , el Knu Skool juega con el Old Skool original mientras combina un ícono del pasado con las tendencias actuales.'
    ],

  ),

  new Tenis(
    'a44',
    ['c2'],
    'Ultrarange',
    'https://vansmx.vtexassets.com/arquivos/ids/1816615-800-auto?v=638530419328300000&width=800&height=auto&aspect=true',
    [
      'Valor:',
      '$1,899',
      'Materiales:',
      'Tela, suela de caucho y una nueva suela para mayor comodidad.',
      'Fecha de creación:',
      'Una adición más nueva a la familia Vans.'
    ],
    [
      'Diseñado para la comodidad durante todo el día y la exploración. Cuenta con una suela UltraCush para mayor comodidad y una parte superior transpirable para mantener los pies frescos.'
    ],

  ),


  new Tenis(
    'a111',
    ['c3'],
    'CHAYMON',
    'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwaaca7ee1/41CMA0038MX_312_01.jpg?imwidth=915&impolicy=product',
    [
      'VALOR:',
      '$2,712',
      'Materiales:',
      'Forro de tela, empeine de material sintético y piel y suela de goma.'
    ],
    [
      'Con su diseño estilizado único, el Chaymon de caña baja tiene el encanto urbano del día a día. Este sneaker sencillo se inspira en los modelos tradicionales de tenis, modernizándolos con tonos fáciles de llevar y atemporales. El empeine, confeccionado en lujosa piel de napa, se realza con líneas pulidas con clara inspiración en la pista. El sello de la marca lo pone el acabado del cocodrilo verde bordado en el lateral.'
    ],

  ),

  new Tenis(
    'a222',
    ['c3'],
    'LEROND PRO',
    'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw21451328/45CMA0055_407_01.jpg?imwidth=915&impolicy=product',
    [
      'Valor:',
      '$2,632',
      'Materiales:',
      'Forro de tela, empeine de piel y sintéticos, diseño en piel y suela con goma vulcanizada.'
    ],
    [
      'Camina con paso firme gracias a estas clásicos sneakers. Diseño elegante y minimalista cuyo resultado es un estilo fácil.'
    ],

  ),

  new Tenis(
    'a333',
    ['c3'],
    'GRADUATE',
    'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw7c854064/37SMA0022MX_02H_01.jpg?imwidth=915&impolicy=product',
    [
      'Valor:',
      '$1,813',
      'Materiales:',
      'Parte superior de piel, suela de goma, forros sintéticos y textiles.'
    ],
    [
      'Presentado en elegantes tonos neutros para un atractivo versátil y fácil de usar, el Graduate es un calzado deportivo atemporal con cordones que ofrece una versión elegante del legado de tenis de Lacoste. Diseñado con una silueta refinada inspirada en la cancha, combina una parte superior de piel con una suela de goma a juego, y tiene un acabado con detalles de lujo para una apariencia y una sensación decididamente premium.'
    ],

  ),

  new Tenis(
    'a444',
    ['c3'],
    'LACOSTE',
    'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwe07b5066/46CMA0005_2G1_01.jpg?imwidth=915&impolicy=product',
    [
      'Valor:',
      '$2,373',
      'Materiales:',
      'Parte superior de cuero, gamuza, material sintético y rubber outsole.'
    ],
    [
      'La atemporalidad y la excelencia van de la mano al crear el Chaymon. La parte superior de múltiples texturas se eleva a través de lujosos detalles de cuero caído, mientras que los paneles de gamuza de colores contrastantes ofrecen un borde elegante. Para terminar, el icónico cocodrilo hace su aparición a un lado para una firma de firma.'
    ],

  ),

  new Tenis(
    'a1111',
    ['c4'],
    'SUPERSTAR ADV',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78c41bfea78142c59397edca66d0cef1_9366/Tenis_Superstar_ADV_Negro_IG1705_01_standard.jpg',
    [
      'Valor:',
      '$2,299',
      'Materiales:',
      'Se conforman con la parte superior en piel, forro interno textil, y suela de caucho'
    ],
    [
      'Con sus raíces en las canchas de básquet de los años 70, estos tenis adidas Superstar se actualizan para el parque de skate. Ya sea que estés en casa o en las calles de la ciudad, estos tenis le inyectan rendimiento y estilo a cualquier viaje. La distintiva punta con relieve, una vez diseñada para proteger, ahora simboliza un ícono del calzado. Una capa adicional de puntadas y una lengüeta de una sola pieza brindan la durabilidad que exige el mundo del skate. Viste una leyenda.'
    ],

  ),

  new Tenis(
    'a2222',
    ['c4'],
    'GAZELLE BOLD',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e745acb29cd248e8994a6820a4ac6a29_9366/Tenis_Gazelle_Amarillo_IF5937_01_standard.jpg',
    [
      'Valor:',
      '$2,399',
      'Materiales:',
      'Están compuestos con gamuza premium, piel y suela tipo cupsole de caucho.'
    ],
    [
      'Tus tenis casuales favoritos están de vuelta y se reinventan. Estos tenis adidas Gazelle llevan tu estilo del día a día a otro nivel. Originalmente diseñados en los 60 como unos tenis de entrenamiento, los Gazelle ahora son un clásico de la moda urbana que se adapta perfectamente del día a la noche. La gamuza premium y la piel envuelven tus pies con comodidad retro, mientras que la emblemática suela tipo cupsole de caucho brinda una pisada suave. El tirador del talón está confeccionado en un tejido de felpa que le confiere un toque vintage. Las líneas definidas y la estética minimalista de este par causan una gran impresión. Póntelos y luce un clásico.'
    ],

  ),

  new Tenis(
    'a3333',
    ['c4'],
    'YEEZY BOOST 700',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b31ceb2708c4d2aaa6fa9e30140dbc7_9366/YEEZY_BOOST_700_Blanco_EG7487_01_standard.jpg',
    [
      'Valor:',
      '$5,499',
      'Materiales:',
      'Están compuestos por malla, recubierta de ante y piel lisa, acabado en negro con suela voluminosa.'
    ],
    [
      'Las Yeezy Boost 700 Utility Black aportan un look bicolor elevado a su característica construcción. La parte superior de la zapatilla está fabricada con una base de malla, recubierta de ante y piel lisa para mayor sujeción. Acabada en negro, la voluminosa entresuela continúa el look y aloja una unidad Boost para la amortiguación. La suela exterior está fabricada en goma para ofrecer tracción y un acabado de lujo.'
    ],

  ),

  new Tenis(
    'a4444',
    ['c4'],
    'TYSHAWN',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b4480f7eb8244cd7bdd9c0e8edaf0438_9366/Tenis_Tyshawn_Negro_IG4113_01_standard.jpg',
    [
      'Valor:',
      '$2,599',
      'Materiales:',
      'Presentan exterior en piel y plantilla con espuma viscoelástica.'
    ],
    [
      'Los tenis Tyshawn remasterizados reinventan la silueta original de Tyshawn Jones con una nueva suela y detalles inspirados en el Rey de Nueva York. Inspirados en el calzado clásico del básquet y creados para las calles, los tenis Tyshawn presentan un exterior de piel y amortiguación Adiprene que propoporciona gran estabilidad. La plantilla moldeada y el ribete con espuma viscoelástica alrededor del tobillo brindan un ajuste cómodo, mientras que la suela rediseñada fusiona el excelente contacto y control de la tabla con la durabilidad y gran amortiguación contra impactos. adidas y Tyshawn se vuelven a unir una vez más para ofrecerte el mejor rendimiento y estilo sobre la tabla.'
    ],

  )
];
