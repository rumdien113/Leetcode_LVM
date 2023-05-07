var hammingDistance = function(x, y) {
    var ans = 0
      var s1 = x.toString(2)
      var s2 = y.toString(2)
      if (s1.length > s2.length)
        [s1, s2] = [s2, s1]
      while (s1.length < s2.length)
        s1 = '0' + s1
      for (let i = 0; i < s1.length; i++) 
        if (s1[i] != s2[i])
          ans++
      return ans
  };