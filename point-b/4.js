const array = ["aku", "suka", "makan", "nasi", "padang"];
const data_1 = [];
const data_2 = [];
for (let i = 0; i < array.length; i++) {
    data_1.push(array[i]);
    console.log(data_1);
}
for (let j = 4; j >= array.length - 5; j--) {
    data_2.push(array[j]);
    console.log(data_2);
}
