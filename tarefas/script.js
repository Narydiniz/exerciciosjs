/*let res = document.getElementById('lista-tarefas')
let itemLi = document.getElementById('nova-tarefa')

function adicionar(){
    var li = document.createElement('li')
    var input = document.createElement('input')
    var remove = document.createElement('button')
    itens.push(nova-tarefa);
    remove.addEventListener('click',function(){
        res.removeChild(li)
    })
    
    input.setAttribute('type', 'checkbox')
    remove.textContent = 'Remover'
    res.appendChild(li).innerHTML = `${intemLi.value}`
    li.appendChild(input)
    li.appendChild(remove)
}*/

function adicionar(){
    let tarefa = document.getElementById('nova-tarefa').value;
    let list = document.getElementById('lista-tarefas').innerHTML;
    
    list += "<li>" +tarefa+ "<li>"

    document.getElementById('lista-tarefa').innerHTML = list;
    document.getElementById('nova-tarefa').value = null;

}
