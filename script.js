function checarAgendamento() {
    const horaFuncionamento = 18; // Horário de funcionamento do salão (18h)
    
    let horaDesejada = document.getElementById("hora").value; // Horário desejado pela cliente


    let textoResultado = document.getElementById("resultado");

    if (horaDesejada === "" || isNaN(horaDesejada)) {
        textoResultado.innerText = "Por favor, insira um horário válido. ⏰";
        textoResultado.style.color = "orange";

    } else if (horaDesejada <= horaFuncionamento) {
        textoResultado.innerText = "Horário disponível! 🎉";
        textoResultado.style.color = "green";

    } else {
        textoResultado.innerText = "Desculpe, o salão já estará fechado. ❌";
        textoResultado.style.color = "red";
    }

}


   
   
   
   
   
   
   
   
   
   
    
