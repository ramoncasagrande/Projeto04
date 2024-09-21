async function buscarCep(){
    const cep = document.getElementById("inCep").value;

    if(!cep || isNaN(cep) || cep.length != 8){
        alert('Insira um CEP válido \n (Apenas números)');
        document.getElementById('inCep').value = "";
        document.getElementById('inCep').focus();
    }

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json()

    document.getElementById('outRua').value = dados.logradouro;
    document.getElementById('outBairro').value = dados.bairro;
    document.getElementById('outCidade').value = dados.localidade;
    document.getElementById('outEstado').value = dados.uf;

}