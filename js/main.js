'use strict'

const listaSpesa = ['Latte', 'Prosciutto', 'Pane', 'Uova', 'Insalata', 'Acqua'];

const ul = document.getElementById('list')

let i = 0;

while(i < 6){
    const listItem = document.createElement('li');
    listItem.append(listaSpesa[i]);
    i++;
    ul.append(listItem)
}