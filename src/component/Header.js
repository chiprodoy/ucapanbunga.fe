export default function Header(){
    return (
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Pesan Ucapan Bunga Tanpa Ribet</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">
                            <ul style={{ listStyle:"none",fontWeight:"bolder"}}>
                                <li><i class='bi bi-check-lg'></i> Gratis Ongkir,</li>
                                <li><i class='bi bi-check-lg'></i> Bisa bayar dimana saja</li>
                                <li><i class='bi bi-check-lg'></i> bisa pesan kapan saja</li>
                                <li><i class='bi bi-check-lg'></i> Promo menarik</li>

                            </ul>
                        </p>
                        <a class="btn btn-primary btn-xl" href="#about">Pesan Sekarang</a>
                    </div>
                </div>
            </div>
        </header>
    );
}