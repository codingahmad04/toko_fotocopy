<?php
include 'connect.php';

$nama_pelanggan = $_POST['nama_pelanggan'];
$layanan = $_POST['layanan'];
$jumlah = $_POST['jumlah'];
$total = $_POST['total'];

$sql = "INSERT INTO transaksi (nama_pelanggan, layanan, jumlah, total) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssii", $nama_pelanggan, $layanan, $jumlah, $total);

if ($stmt->execute()) {
    echo "Transaksi berhasil ditambahkan!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>