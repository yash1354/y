const arr = ["harkirat","yash","mass","jaay"];

function arg(i) {
	if(i.startsWith("y")){
		return true;
	}
		else{
			return false;
		}
}
const ans = arr.filter(arg);
console.log(ans);

