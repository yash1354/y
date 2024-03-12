const arr = [1,2,3,4,5];

function argument(i){
	if(i%2 == 0){
		return true;
	}
	else{
			return false;
		}
	}

const ans = arr.filter(argument);
console.log(ans);
