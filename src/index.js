module.exports = function toReadable (number) {
    let str = String(number);
    let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if ( number < 20) {
      return (zeroToNineteen[number]);
    } else if (str.length == 2 && str.charAt(1) == 0) {
      return (dozens[str.charAt(0)-1])
    } else if (str.length == 2 && str.charAt(1) != 0) {
      return (`${dozens[str.charAt(0)-1]} ${zeroToNineteen[str.charAt(1)]}`)
    } else if (str.length == 3 && str.charAt(1) == 0 && str.charAt(2) == 0) {
      return (`${zeroToNineteen[str.charAt(0)]} hundred`)
    } else if (str.length == 3 && str.charAt(1) != 0 && str.charAt(2) == 0) {
      return (`${zeroToNineteen[str.charAt(0)]} hundred ${dozens[str.charAt(1)-1]}`)
    } else if ((str.length == 3 && str.charAt(1) == 0 && str.charAt(2) != 0) ){
     return (`${zeroToNineteen[str.charAt(0)]} hundred ${zeroToNineteen[str.charAt(2)]}`)
    } else if ((str.length == 3 && str.charAt(1) < 2)) {
      return (`${zeroToNineteen[str.charAt(0)]} hundred ${zeroToNineteen[str.slice(1)]}`)
    } else if ((str.length == 3 && str.charAt(1) != 0 && str.charAt(2) != 0)) {
      return (`${zeroToNineteen[str.charAt(0)]} hundred ${dozens[str.charAt(1)-1]} ${zeroToNineteen[str.charAt(2)]}`)
    }
  }
