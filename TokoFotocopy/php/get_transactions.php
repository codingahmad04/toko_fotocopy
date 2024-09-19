<?php
include 'connect.php';

$sql = "SELECT * FROM transaksi ORDER BY tanggal DESC";
$result = $conn->query($sql);

$transactions = [];
while ($row = $result->fetch_assoc()) {
    $transactions[] = $row;
}

header('Content-Type: application/json');
echo json_encode($transactions);

$conn->close();
?>