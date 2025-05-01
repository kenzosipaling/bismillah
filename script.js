const akunList = [
    {
      id: 1,
      nama: "Akun ML Sultan Alucard Legend",
      kategori: "ML",
      gambar: "img/akunml2.jpg",
      deskripsi: "Rank Mythic, 252 skin",
      harga: 150000,
      wa: "62881025138150"
    },
    {
      id: 2,
      nama: "Akun ML Lancelot",
      kategori: "ML",
      gambar: "img/akunml3.jpg",
      deskripsi: "Rank Mythic, 252 skin",
      harga: 100000,
      wa: "62881025138150"
    },
    {
      id: 3,
      nama: "Akun ML Ling",
      kategori: "ML",
      gambar: "img/akunml1.jpg",
      deskripsi: "Rank Mythic, 252 skin",
      harga: 180000,
      wa: "62881025138150"
    },
    // Tambah akun lain di sini
  ];
  
  const container = document.getElementById("accountContainer");
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  
  function renderAccounts() {
    const keyword = searchInput.value.toLowerCase();
    const kategoriDipilih = categorySelect.value;
  
    container.innerHTML = "";
  
    akunList
      .filter((akun) =>
        (kategoriDipilih === "all" || akun.kategori === kategoriDipilih) &&
        akun.nama.toLowerCase().includes(keyword)
      )
      .forEach((akun) => {
        container.innerHTML += `
          <div class="bg-white shadow-md rounded-xl overflow-hidden">
            <img src="${akun.gambar}" alt="${akun.nama}" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h2 class="font-bold text-xl">${akun.nama}</h2>
              <p class="text-gray-700">${akun.deskripsi}</p>
              <p class="text-green-600 font-bold mt-2">Rp ${akun.harga.toLocaleString("id-ID")}</p>
              <a href="https://wa.me/${akun.wa}?text=Halo%2C%20saya%20ingin%20beli%20${encodeURIComponent(akun.nama)}" target="_blank"
                class="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Beli via WhatsApp
              </a>
            </div>
          </div>
        `;
      });
  }
  
  searchInput.addEventListener("input", renderAccounts);
  categorySelect.addEventListener("change", renderAccounts);
  
  renderAccounts(); // render saat awal
  