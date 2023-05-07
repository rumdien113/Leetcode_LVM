var addDigits = function(num) {
    function sum(num) {
      var nums = num.toString().split('')
      num = 0
      for (let x of nums) num += parseInt(x)
      return num
    }
    while(num > 9) num = sum(num)
    return num
};