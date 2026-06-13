document.getElementById("btn-wa").addEventListener("click", function(){

  let nama = document.getElementById("nama").value;
  let wa = document.getElementById("wa").value;
  let pesan = document.getElementById("pesan").value;

  if(nama === "" || wa === "" || pesan === ""){
    alert("Harap isi semua data");
    return;
  }

  let nomorTujuan = "6281266970069";

  let text = 
`Halo, saya ${nama}

Nomor WA: ${wa}

Pesan:
${pesan}`;

  let url =
  "https://wa.me/" + nomorTujuan +
  "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");

});

window.addEventListener('scroll', function(){

    const header = document.querySelector('.header');

    if(window.scrollY > 50){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }

});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add('active');
        }

    });

});