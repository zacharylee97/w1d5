var list = [];

function sortList(arr) {
    var result = arr.sort(function(a,b) {
      return a - b;
    });
    return result;
  }

module.exports = {
  addToList: function(number) {
    list.push(number);
  },
  sortedList: function() {
    return sortList(list);
  }

}