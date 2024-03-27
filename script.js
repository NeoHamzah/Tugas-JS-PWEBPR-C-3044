const tittle = document.getElementById('tittle');
const box = document.getElementById('box');
const image = document.getElementById('image');
const description = document.getElementById('description');
const groupBtn = document.getElementById('groupBtn');
const btnIjo = document.getElementById('btnIjo');
const btnMerah = document.getElementById('btnMerah');

btnIjo.onclick = function () {
  klikIjo();
};
btnMerah.onclick = function () {
  klikMerah();
};

function klikIjo() {
  tittle.innerHTML = 'Anda Berbohong!';
  description.innerHTML = 'Anda adalah seorang Teknisi';
  box.style.backgroundColor = '#E12E2E';
  image.src = 'img/teknisi.png';
  image.style.marginTop = '-170px';
  groupBtn.style.display = 'none';
};

function klikMerah() {
    tittle.innerHTML = 'Anda Benar!';
    description.innerHTML = 'Anda adalah seorang Mahasiswa';
    box.style.backgroundColor = '#6FD240';
    image.src = 'img/mahasiswa.png';
    image.style.marginTop = '-170px';
    groupBtn.style.display = 'none';
};
