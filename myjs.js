function evenly_divisible(num) {
    var count = 0;
    var increment = 2;
    while (count != num) { // break only if for-loop says true 20 times
        count = 0;
        var result = num * increment;
        for (let i = 1; i <= 20; ++i) {
            if (result % i == 0) {
                count += 1;
            } else {
                break;
            }
        }
        increment++;
    }
    return result;
}
//console.log(evenly_divisible(10))
//console.log(evenly_divisible(20))

function largest_palindrome(max) {
    console.log("Computing..");
    var result = null;
    for (let i = 1; i <= max; ++i) {
        for (var j = 1; j <= max; ++j) {
            var pro = i * j;
            var strPro = pro.toString();
            var revPro = strPro.split("").reverse().join("");
            if (strPro == revPro) {
                result = pro;
            }
        }
    }
    return result;
}

// console.log(largest_palindrome(99));
// console.log(largest_palindrome(999));

function difference_sums(num) {
    var sq_sums = ((num / 2) * (1 + num)) ** 2; // square of sums
    //this is sum of arithmetic series formula >> https://www.mathwords.com/a/arithmetic_series.htm
    var sum_sqs = 0; // sum of squares
    for (let i = 1; i <= num; ++i) {
        sum_sqs += i ** 2;
    }
    //console.log(sq_sums, sum_sqs);
    return sq_sums - sum_sqs;
}
// console.log(difference_sums(10));
// console.log(difference_sums(100));

function Collatz_length(num) {
    var count = 0;
    while (num != 1) {
        if (num % 2 == 0) {
            num = num / 2;
            count += 1;
        } else {
            num = (num * 3) + 1;
            count += 1;
        }
    }
    return count;
}

function longest_Collatz(num) {
    var result = null;
    for (let i = 1; i <= num; ++i) {
        if (Collatz_length(i) >= result) {
            result = i;
        }
    }
    return result;
}
//console.log(longest_Collatz(20));

function Lattice_paths(num) {
    var routes = 1;
    for (var i = 1; i <= num; i++)
        routes = routes * (num + i) / i; //(Sample Size X Population) / (Sample Size + Population – 1)
    return routes;
}
console.log(Lattice_paths(8));