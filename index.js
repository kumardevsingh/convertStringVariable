function changeStringVariable(string1) {

    //if a string has _ or not
    const format = /[_]/;
    let _tempReturnStr = [];
    let _tempStrArr = []
    if (string1.match(format)) {
        _tempStrArr = string1.split("_");
        for (let i = 0; i < _tempStrArr.length; i++) {
            if (i > 0) {
                _tempReturnStr.push(_tempStrArr[i].charAt(0).toLocaleUpperCase() + _tempStrArr[i].slice(1));
            } else {
                _tempReturnStr.push(_tempStrArr[i].charAt(0).toLowerCase() + _tempStrArr[i].slice(1));
            }
        }//for loop end
    } else {
        _tempStrArr = string1.split('');
        for (let i = 0; i < _tempStrArr.length; i++) {
            if (_tempStrArr[i] === _tempStrArr[i].toLocaleUpperCase()) {
                if (i !== 0) {
                    //_tempReturnStr.push(`_${_tempStrArr[i]}`)
                    _tempReturnStr.push(`_${_tempStrArr[i].charAt(0).toLocaleLowerCase()}`);
                } else {
                    _tempReturnStr.push(`${_tempStrArr[i].toLowerCase()}`)
                }
            } else {
                _tempReturnStr.push(_tempStrArr[i]);
            }
        }//end of for loop
    }
    return _tempReturnStr.join('');
}

console.log(changeStringVariable("aaa_bee_cee_dee"));
