(() => {
  //alias type
  type UserId = string | number | boolean;
  //let userId:  string | number | boolean; error
  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  //literal types
  type Size = 'S' | 'M' | 'L';
  let shirtSize: Size;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  //shirtSize = 'XL'; error
})()
