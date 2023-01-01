function cockroachSpeed(s) {
    // 1 km = 10 ** 3 (1000) m (1)
    // 1 m = 10 ** 2 (100) cm   (2)
    // 1 min = 60 sec
    // 1 h = 60 min = 60 * 60 = 3600 s
    /*
     1 km  = 1 * 1000 * 100 = 100000 (10 ** 5) cm
                 (1)    (2)
    */
    return  Math.floor(s * ( (10 ** 5) / 3600))
  }