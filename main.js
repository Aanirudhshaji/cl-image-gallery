
const imageFilenames = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png', 'pic5.png'];


const imageAltText = {
  'pic1.png': 'Taj Mahal ',
  'pic2.png': 'Taj Mahal',
  'pic3.png': 'Qutub Minar',
  'pic4.png': 'India gate',
  'pic5.png': 'Manali'
};


const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'Images/' + imageFilenames[i]);
  newImage.setAttribute('alt', imageAltText[imageFilenames[i]]);
  thumbBar.appendChild(newImage);
  
  newImage.addEventListener('click', function() {
    const displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src', 'Images/' + imageFilenames[i]);
    displayedImage.setAttribute('alt', imageAltText[imageFilenames[i]]);
  });
}


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
