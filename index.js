let inp = document.querySelector('input');
let img = document.querySelector('img');
let btn = document.querySelector('button');

inp.addEventListener('change', (e) => {
    let locImg = URL.createObjectURL(e.target.files[0]);
    img.src = locImg;

})

btn.addEventListener('click', () => {
    var qr = new QrcodeDecoder();
    document.querySelector('span').innerHTML = "";
    document.querySelector('.pass').innerHTML = "";

    qr.decodeFromImage(img).then((res) => {
        console.log(res);
        // if (!res.data.contains(';')) {
        // }
        // else{
        // }
        if (res.data.split(";")[2] == null) {
            document.querySelector('span').innerHTML = res.data;
        }
        else {
            document.querySelector('.pass').innerHTML = res.data.split(";")[2].slice(2);
        }

    });
})

// document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
// })