CREATE TABLE transaksi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_pelanggan VARCHAR(100),
    layanan VARCHAR(100),
    jumlah INT,
    total DECIMAL(10, 2),
    tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
