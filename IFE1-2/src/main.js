import san from 'san';

const MyApp =san.defineComponent({
    template:`<h1>Hello,{{name}}!</h1>`,
});
console.log(1);
let myApp = new MyApp({
    data: {
        name: 'World'
    }
});
myApp.attach(document.body);
console.log(3);