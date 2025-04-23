console.log("Página carregada com sucesso!");

document.querySelectorAll('.project-title').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Projeto acessado: ${link.textContent}`);
    });
});
