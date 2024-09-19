document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transactionForm');
    const transactionsList = document.getElementById('transactionsList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        fetch('../php/add_transaction.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            form.reset();
            loadTransactions();
        });
    });

    function loadTransactions() {
        fetch('../php/get_transactions.php')
        .then(response => response.json())
        .then(data => {
            transactionsList.innerHTML = '';
            data.forEach(transaction => {
                const item = document.createElement('div');
                item.className = 'card mb-2';
                item.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${transaction.nama_pelanggan}</h5>
                        <p class="card-text">Layanan: ${transaction.layanan}</p>
                        <p class="card-text">Jumlah: ${transaction.jumlah}</p>
                        <p class="card-text">Total: ${transaction.total}</p>
                        <p class="card-text"><small class="text-muted">${new Date(transaction.tanggal).toLocaleString()}</small></p>
                    </div>
                `;
                transactionsList.appendChild(item);
            });
        });
    }

    loadTransactions();
});