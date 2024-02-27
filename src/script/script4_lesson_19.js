// Урок 19 
// Домашнее задание

// Задание 1


let myObject = {
    key1: 'значение1',
    key2: 'значение2'
};

console.log('Исходный объект:', myObject);

delete myObject.key1;
// delete myObject.key2;

console.log('Объект после удаления ключей:', myObject);



// Задание 2



let myObjectKeys = {
    key1: 'значение1',
    key2: 'значение2'
};
if ('key1' in myObjectKeys) {
    console.log(true);
} else {
    console.log(false);
}

