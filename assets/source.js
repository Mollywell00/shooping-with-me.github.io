document.getElementById("year").innerHTML = new Date().getFullYear()

function buy(product_name, product_price){
    const message= `save aja nomornya bang, buat tambah2 temen sw XD. kalau mau beli ${product_name} yang harganya ${product_price} gak dijual disini`
    const whatsapp= `https://wa.me/6282138351384?text=${message}`
    open(whatsapp,"_blank")
}

function chat(){
    alert('halo min...')
}