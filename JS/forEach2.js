var coures = ['javascript', 'php', 'python']

Array.prototype.forEach2 = function(callback) {
    for (var index in this)
        if(this.hasOwnProperty(index))
            callback(this[index], index, this)
}

//phương thức hasOwnProperty() được sử dụng để kiểm tra xem 
//một thuộc tính cụ thể có thuộc về đối tượng đó hay không.

coures.forEach2(function(course, index, array) {
    console.log(course, index, array)
})