const getData = () => {
    return [
        {id: 1,
         title: "Lifecycle",
         body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.",
         archieved: false,
         createdAt: "2024-10-31T23:32"
        },
        {id: 2,
         title: "Babel",
         body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
         archieved: false,
         createdAt: "2024-10-31T23:32"
        },
        {
        id: 3,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        archived: false,
        createdAt: '2024-10-31T23:32Z',
        },
        {
        id: 4,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        archived: false,
        createdAt: '2024-10-31T23:32Z',
        },
        {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        archived: false,
        createdAt: '2024-10-31T23:32Z',
        },
        {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        archived: false,
        createdAt: '2024-10-31T23:32Z',
        },
    ]

}

export { getData };