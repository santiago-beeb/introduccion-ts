//No usar any, se podria usar en caso de migracion donde no usemos del todo ts o una libreria mal tipada
(() => {
  let mydinamicVar: any;
  mydinamicVar = '';
  mydinamicVar = {};
  mydinamicVar = null;
  mydinamicVar = 'sadw';
  mydinamicVar = true;

  mydinamicVar = 'hola';
  const rta = (mydinamicVar as string).toLowerCase(); //cambiar tipado de variable
  console.log(rta);

  mydinamicVar = 132123;
  const rta2 = (<number>mydinamicVar).toFixed(); //cambiar tipado de variable
  console.log(rta2);
})()
