// let keranjang = [];
// let totalHarga = 0;

// function tambahKeKeranjang(id) {
//     let produk = document.querySelector(`.item:nth-child(${id}) h2`).textContent;
//     let harga = parseInt(document.querySelector(`.item:nth-child(${id}) .harga`).textContent.replace('$', ''));
    
//     keranjang.push({ nama: produk, harga: harga });
//     totalHarga += harga;
    
//     let keranjangList = document.getElementById('keranjang-list');
//     let listItem = document.createElement('li');
//     listItem.textContent = `${produk} - $${harga}`;
//     keranjangList.appendChild(listItem);
    
//     let totalHargaElement = document.querySelector('.total-harga');
//     totalHargaElement.textContent = `Total Harga: $${totalHarga}`;
// }
let keranjang = [];
let totalHarga = 0;

function tambahKeKeranjang(id) {
    let produk = document.querySelector(`.item:nth-child(${id}) h2`).textContent;
    let hargaText = document.querySelector(`.item:nth-child(${id}) .harga`).textContent;
    
    // Menghilangkan karakter '$' dan mengonversi harga menjadi angka.
    let harga = parseInt(hargaText.replace('12.500.000', '12.200.000','10.200.000'));
    // let harga = parseInt(document.querySelector(`.item:nth-child(${id}) .harga`).textContent.replace('$', ''));
    
    keranjang.push({ nama: produk, harga: harga });
    totalHarga =+ harga;
    
    let keranjangList = document.getElementById('keranjang-list');
    let listItem = document.createElement('li');
    listItem.textContent = `${produk} - ${hargaText}`;
    keranjangList.appendChild(listItem);
    
    let totalHargaElement = document.querySelector('.total-harga');
    totalHargaElement.textContent = `Total Harga: $${totalHarga}`;
    
    // Menampilkan pesan item berhasil ditambahkan ke keranjang.
    alert(`${produk} berhasil ditambahkan ke keranjang.`);
}
