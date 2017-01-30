function stringy(size) {

	var word = "";
	for (var i =0; i < size; i++) {
		word += i%2 ===1? "0" : "1";
	}
	return word;
}