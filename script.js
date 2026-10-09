function gerarValor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function atualizarBarra(id, valor) {
    const barra = document.getElementById(id);

    barra.style.width = valor + "%";
}


function atualizarDados() {

    const cpu = gerarValor(20, 85);
    const ram = gerarValor(30, 90);
    const gpu = gerarValor(10, 80);
    const disk = gerarValor(50, 85);

    const temperature = gerarValor(40, 75);
    const network = gerarValor(50, 950);


    document.getElementById("cpu-value").textContent = cpu + "%";
    document.getElementById("ram-value").textContent = ram + "%";
    document.getElementById("gpu-value").textContent = gpu + "%";
    document.getElementById("disk-value").textContent = disk + "%";


    atualizarBarra("cpu-bar", cpu);
    atualizarBarra("ram-bar", ram);
    atualizarBarra("gpu-bar", gpu);
    atualizarBarra("disk-bar", disk);


    document.getElementById("temperature").textContent =
        temperature + " °C";

    document.getElementById("network").textContent =
        network + " Mbps";


    document.querySelector(".last-update").textContent =
        "Atualizado agora";
}


document
    .getElementById("refresh-button")
    .addEventListener("click", atualizarDados);


atualizarDados();


if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .then(() => {
                console.log("Service Worker registrado.");
            })
            .catch(error => {
                console.error(
                    "Erro ao registrar Service Worker:",
                    error
                );
            });

    });

}