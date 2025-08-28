
//#region 
//v1 do script.js - versão antiga com envio manual dos dados pro forms, n funciona quando usado imagens!!!
//função que é chamada quando o formulário é enviado
//     const handleSubmit = (event) => {
//     event.preventDefault(); //evita o recarregamento da página
    
//     const nome = document.querySelector('input[name="Nome"]').value; //pega o valor do campo nome
//     const email = document.querySelector('input[name="Email"]').value; //pega o valor do campo email
//     const contato = document.querySelector('input[name="Contato"]').value; //pega o valor do campo contato
    
//     //metodo post para enviar os dados do formulario por api
//     fetch('https://api.sheetmonkey.io/form/mc1qMLesDQkG9EGYZdMgLp', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json', 
//         },
//         body: JSON.stringify({nome, email, contato})
//     });
// }

// document.querySelector('form').addEventListener('submit', handleSubmit);
//#endregion