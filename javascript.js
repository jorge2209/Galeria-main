const FullImgBox = document.getElementById("fullimgbox");
const fullimg = document.getElementById("fullimg");
const prevBtn = document.getElementById('anterior-imagen');
const nextBtn = document.getElementById('siguiente-imagen');
const currentImageIndexText = document.getElementById('current-image-index');

const images = [ 
  'https://picsum.photos/300?random=1', 
  'https://picsum.photos/300?random=6',
  'https://picsum.photos/300?random=11',
  'https://picsum.photos/300?random=16',
  'https://picsum.photos/300?random=2',
  'https://picsum.photos/300?random=7',
  'https://picsum.photos/300?random=12',
  'https://picsum.photos/300?random=17',
  'https://picsum.photos/300?random=3',
  'https://picsum.photos/300?random=8',
  'https://picsum.photos/300?random=13',
  'https://picsum.photos/300?random=18',
  'https://picsum.photos/300?random=4',
  'https://picsum.photos/300?random=9',
  'https://picsum.photos/300?random=14',
  'https://picsum.photos/300?random=19',
  'https://picsum.photos/300?random=5',
  'https://picsum.photos/300?random=10',
  'https://picsum.photos/300?random=15',
  'https://picsum.photos/300?random=20',
];

let currentIndex = 0; 

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  fullimg.src = images[currentIndex];
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  fullimg.src = images[currentIndex];
}

function openfullimg(reference){
    FullImgBox.style.display = "flex";
    currentIndex = images.indexOf(reference);
    fullimg.src = reference;
}

function closeimg(){
    FullImgBox.style.display = "none";
}

function updateCurrentImageIndexText() {
  currentImageIndexText.innerText = `Imagen ${currentIndex + 1} de ${images.length}`;
}
 
