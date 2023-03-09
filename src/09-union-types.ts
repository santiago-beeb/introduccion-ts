(() => {
  let userId: string | number;
  userId = 135;
  userId = 'qwdqw';

  function greeting(text: string | number) {
    if (typeof text === 'string') {
      console.log(`string ${text.toLowerCase()}`);
    } else {
      console.log(`${text.toFixed()}`);
    }
  }
  greeting('hola');
  greeting(645123);
})()
