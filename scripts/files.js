//Codigo importado do site do sheetmonkey para acompanhar o progresso do upload de arquivos https://docs.sheetmonkey.io/guides/file-uploads
window.addEventListener('message', (event) => {
    const { name, file, percent, errorCode } = event.data;

    if (name === 'sheetmonkey-upload-start') {
        console.log('Upload iniciado:', file);
    }

    if (name === 'sheetmonkey-upload-progress') {
        console.log(`Progresso ${file}: ${percent}%`);
        document.getElementById("sheetmonkey-upload-progress").value = percent;
    }

    if (name === 'sheetmonkey-upload-error') {
        console.error('Erro no upload:', errorCode, file);
    }

    if (name === 'sheetmonkey-upload-complete') {
        console.log('Upload concluído:', file);
    }
});
