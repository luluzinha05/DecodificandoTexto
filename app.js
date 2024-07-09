let typing = false;

function startTyping() {
    if (!typing) {
        const placeholder = document.getElementById('input-placeholder');
        placeholder.contentEditable = true;
        placeholder.focus();
        placeholder.innerText = '';
        typing = true;
    }
}

function criptografar() {
    let texto = document.getElementById("input-placeholder").innerText;
    if (texto === '') {
        alert("Digite um texto para criptografar!");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById("input-placeholder").innerText;
    if (texto === '') {
        alert("Digite um texto para descriptografar!");
        return;
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDescriptografado);
}

function mostrarResultado(texto) {
    const outputContainer = document.getElementById('output-container');
    const outputImage = document.getElementById('output-image');
    const outputTitle = document.getElementById('output-title');
    const outputText = document.getElementById('output-text');
    const outputTextSaida = document.getElementById('outputTextSaida')

    outputImage.classList.add('hidden');
    outputTitle.classList.add('hidden');
    outputText.classList.add('hidden')
    outputTextSaida.innerText = texto;
    outputTextSaida.style.display = 'block';
}
