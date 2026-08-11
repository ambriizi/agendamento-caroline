function checarAgendamento() {
    const horaFechamento = 18; 
    const horaAbertura = 8; // Boa prática: definir também quando abre!
    
    let nome = document.getElementById("nomeCliente").value.trim();
    let dataHoraInput = document.getElementById("dataHoraDesejada").value;
    let textoResultado = document.getElementById("resultado");

    if (nome === "" || dataHoraInput === "") {
        textoResultado.innerText = "Por favor, preencha seu nome e escolha uma data/horário. ⏰";
        textoResultado.style.color = "orange";
        return; // Para a execução aqui
    }

    // Transforma a string do input em um objeto de Data do JavaScript
    let dataObjeto = new Date(dataHoraInput);
    let horaDesejada = dataObjeto.getHours();

    // Nova validação inteligente
    if (horaDesejada >= horaAbertura && horaDesejada < horaFechamento) {
        textoResultado.innerText = `Sucesso, ${nome}! Horário disponível. 🎉`;
        textoResultado.style.color = "green";
    } else {
        textoResultado.innerText = "Desculpe, o salão funciona das 08h às 18h. ❌";
        textoResultado.style.color = "red";
    }
}
