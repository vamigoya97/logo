let canvas, logo, index, title, description, fontSize, div;

let myFonts = [
  'Alfa Slab One',
  'Anton',
  'Bangers',
  'Caveat',
  'Codystar',
  'Cormorant Garamond',
  'Creepster',
  'Dancing Script',
  'Faster One',
  'Frijole',
  'Goblin One',
  'Major Mono Display',
  'Monoton',
  'Montserrat Subrayada', 
  'Mountains of Christmas',
  'Nosifer',
  'Orbitron',
  'Pacifico',
  'Press Start 2P',
  'Russo One',
  'Shojumaru',
  'Train One',
  'Vampiro One',
  'Vast Shadow',
  'Bungee Shade'
]



function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(255, 255, 255);

  logo = createElement('h1', 'Cinepub');
  logo.style('font-size', '150px');
  logo.style('display', "flex")
  logo.style('justify-content', 'center');
  logo.style('font-family', myFonts[0]);
  logo.style('padding', '1%');
  logo.style('margin', '1%');
  logo.style('background-color', 'white');

  // title = createElement('h1', 'Final Project');
  // description = createElement('p', `For the final assignment I decided to create a logo for a webpage I'm developing. The webpage intends to bring together avid movie-goers and show intellectually and culturally defiant films in smaller-sized screening areas. Since the product it delivers is new and exiting, I wanted to create an animated logo that captivates the eye and gives an idea of the diversity of movies our collection holds. My biggest challenge was to include it to my already developed file. Similarly, changing the font-family of the element as well as position it in the right place after the animation was finished was somewhat of a challenge. Also, it was very difficult to change the size of the canvas so that it fit my webpage.`);
  // title.style('text-align', 'center');
  // description.style('text-align', 'center');
  // description.style('margin', '10px 10px 10px 10px');
  // title.style('justify-content', 'center');

  div = createDiv().size(600, 300).hide();
  // title.parent(div);
  // description.parent(div);

  index = 0;
  fontSize = 150;


  frameRate(7);
}

function draw() {
  // put drawing code here
  
  logo.style('font-family', myFonts[index]);
  logo.style('font-size', `${fontSize}px`);
  index += 1;

  if (index > 30){
    fontSize = 0.1*fontSize;
    logo.style('display', 'block');
  }
  if (fontSize < 60) {
    fontSize = 60;
    div.style('display', 'flex');
    div.style('flex-direction', 'column');
    div.style('justify-content', 'center');
    // div.style('border', '5px solid black');
  }

}