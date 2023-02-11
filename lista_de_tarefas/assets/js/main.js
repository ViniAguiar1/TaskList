const inputTarefa =  document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}


function criaTarefa(textoInput){
    // console.log(textoInput)
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li); 
};

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.valeu) return;
    criaTarefa(inputTarefa.value);
});