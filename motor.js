// Após carregar, iniciar os eventos em JS
document.addEventListener("DOMContentLoaded",function(){
    let nm = document.getElementById("nm").value;
    let sobreNm = document.getElementById("sobre_nm").value;
    document.getElementById("btnSubmit").addEventListener("click",(e) => {
        nm = document.getElementById("nm").value;
        sobreNm = document.getElementById("sobre_nm").value;
        if (nm.trim() == "" || sobreNm.trim() == ""){
            e.preventDefault();
            checker();
        }
    });    
    document.getElementById("nm").addEventListener("keyup",nm_update);
    document.getElementById("sobre_nm").addEventListener("keyup",nm_update);
});

// Variável de Função de Atualizar NM
const nm_update = function(){
    let nm = document.getElementById("nm").value;
    let sobreNm = document.getElementById("sobre_nm").value;

    // Checador de Inputs
    if (nm.trim() != ""){
        document.getElementById("nm_completo").textContent = "Nome Completo: "+nm+" "+sobreNm;
        document.getElementById("nm_catalogo").textContent = "Nome Catálogo: "+sobreNm.toUpperCase()+" "+nm;
    }
    if (sobreNm.trim() != ""){
        document.getElementById("nm_completo").textContent = "Nome Completo: "+nm+" "+sobreNm;
        document.getElementById("nm_catalogo").textContent = "Nome Catálogo: "+sobreNm.toUpperCase()+" "+nm;
    }
}

// Adição e Remoção da cor Vermelha CSS
const checker = function(){
    let nm = document.getElementById("nm").value;
    let sobreNm = document.getElementById("sobre_nm").value;

    if(document.getElementById("nm").classList.contains("inputWrong")){
        document.getElementById("nm").classList.remove("inputWrong");
    }

    if(document.getElementById("sobre_nm").classList.contains("inputWrong")){
        document.getElementById("sobre_nm").classList.remove("inputWrong");
    }

    if(nm.trim() == ""){
        document.getElementById("nm").classList.add("inputWrong");
    }
    if(sobreNm.trim() == ""){
        document.getElementById("sobre_nm").classList.add("inputWrong");
    }
}
