function getArcadeResult(history) {
    let arcadeTickets = {
      'Circus Ball Drop': 200,
      'Lucky Chicken': 100,
      'Street Basketball': 50,
      'Gold Rush': 20
    };
    // write your code here
        let result = {}
  
      let point = 0
  
      for (let i = 0 ; i < history.length ; i ++) {
          // console.log(history[i]);
          let perHistory = history[i]
          let perPoint = 0
  
          for (let j = 0 ; j <arcadeTickets.length ; j++) {
            console.log(arcadeTickets[j]);
            let perArcade = arcadeTickets[j]
            
            if (perHistory === perArcade) {
              perPoint ++
            }
          }
        }
        point += perPoint
        return result.point
  }
  
  function getPrizes(ticket) {
    let listPrize = [
      [200, 'Rautan', 'Pensil', 'Penghapus'],
      [500, 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut'],
      [1000, 'Boneka', 'Tas']
    ];
    // write your code here
    
  }
  
  function gamezone(user) {
    // panggil getArcadeResult dan getPrizes disini
    console.log(getArcadeResult(user.histories));
  }


  let obj = {
    "name": "Kosasih",
    "histories": [
    "Circus Ball Drop",
    "Circus Ball Drop",
    "Street Basketball",
    "Circus Ball Drop",
    "Lucky Chicken",
    "Street Basketball",
    "Gold Rush",
    "Gold Rush",
    "Gold Rush",
    "Circus Ball Drop",
    "Lucky Chicken",
    "Lucky Chicken",
    "Circus Ball Drop",
    "Street Basketball",
    "Street Basketball",
    "Street Basketball",
    "Gold Rush",
    "Circus Ball Drop",
    "Circus Ball Drop",
    "Gold Rush",
    "Gold Rush",
    "Lucky Chicken",
    "Lucky Chicken",
    "Street Basketball",
    "Street Basketball",
    "Circus Ball Drop",
    "Circus Ball Drop",
    "Circus Ball Drop",
    "Circus Ball Drop"
    ]
    }
    console.log(gamezone(obj));