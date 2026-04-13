//----------------------------------------------------------
//                DECLARATION DES CONSTANTES
//----------------------------------------------------------
const textInput = document.getElementById('id_input');
const fileInput = document.getElementById('file-input');
const generateBtn = document.getElementById('boutonGenerer');
const qrOutput = document.getElementById('qrgenere');
const result = document.getElementById('result');
const downloadBtn = document.getElementById('telecharger');

function generate(){
const contenue = textInput.value.trim();//trim sert à supprimer les espaces de trop.
 if (contenue === '') {
    alert('Saisis un lien ou du texte !');
    return;
 }
 qrOutput.innerHTML = '';//on supprime le QR code d'avant avec innerHTML
 new QRCode(qrOutput, {
    text: contenue,
    width: 200,
    height: 200
 });
}
generateBtn.addEventListener('click', generate); //Si on click sur le bouton alors on lance la fonction generate.

fileInput.addEventListener('change', lireNomPDF);

function lireNomPDF(){
    const fichier = fileInput.files[0];
    if (fichier){
        fileInput.value = fichier.name;//.name c'est la ou est stocké le nom
    }
}

downloadBtn.addEventListener('click', telecharger);
function telecharger(){
    const canvas = qrOutput.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
     a.click();
}


//--------------------------------------------------------
//      CREATION QR  (LIBRAIRIE QR DISPO SUR INDEX.html)
//--------------------------------------------------------

    //new QRcode(qrOutput, {
    //text: content,
  //width: 200,
  //height: 200
//});