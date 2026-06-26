document.getElementById('btnAcao').addEventListener('click', function() {
    const missao = document.getElementById('missao');
    
    if (missao.classList.contains('hidden')) {
        missao.classList.remove('hidden');
        this.textContent = 'Fechar';
    } else {
        missao.classList.add('hidden');
        this.textContent = 'Descobrir Missão';
    }
});
