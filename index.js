    let mpdm = ['Minus', 'Multiply', 'Devide', 'Plus'];
    let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    
    for (let index = 0; index < mpdm.length; index++) {
        const element = mpdm[index];
        if (str.includes(element)) {
            if (element == 'Minus') {
                str = str.split(' ');
                isone = false;
                for (let index = 0; index < str.length; index++) {
                    let number = str[index];
                    if (numbers.indexOf(number) != -1) {
                        if (isone == false) {
                            isone = true;
                            result = `${numbers.indexOf(number)} -`;
                        } else {
                            result = `${result} ${numbers.indexOf(number)}`;
                        }
                    }
                }
                result = eval(result);
                result = String(result);
                final_result = '';
                if(result.startsWith('-')) {
                    final_result = 'Minus ';
                }
                for (let index = 0; index < result.length; index++) {
                    if (numbers[parseInt(result[index])]) {
                        final_result += numbers[parseInt(result[index])]
                    }
                }
            }
            if (element == 'Plus') {
                str = str.split(' ');
                isone = false;
                for (let index = 0; index < str.length; index++) {
                    let number = str[index];
                    if (numbers.indexOf(number) != -1) {
                        if (isone == false) {
                            isone = true;
                            result = `${numbers.indexOf(number)} +`;
                        } else {
                            result = `${result} ${numbers.indexOf(number)}`;
                        }
                    }
                }
                result = eval(result);
                result = String(result);
                final_result = '';
                for (let index = 0; index < result.length; index++) {
                    if (numbers[parseInt(result[index])]) {
                        if (index >= 1) {
                            final_result += ' ' + numbers[parseInt(result[index])]
                        } else {
                            final_result += numbers[parseInt(result[index])]
                        }
                    }
                }
            }
            if (element == 'Multiply') {
                str = str.split(' ');
                isone = false;
                for (let index = 0; index < str.length; index++) {
                    let number = str[index];
                    if (numbers.indexOf(number) != -1) {
                        if (isone == false) {
                            isone = true;
                            result = `${numbers.indexOf(number)} *`;
                        } else {
                            result = `${result} ${numbers.indexOf(number)}`;
                        }
                    }
                }
                result = eval(result);
                result = String(result);
                final_result = '';
                for (let index = 0; index < result.length; index++) {
                    if (numbers[parseInt(result[index])]) {
                        if (index >= 1) {
                            final_result += ' ' + numbers[parseInt(result[index])]
                        } else {
                            final_result += numbers[parseInt(result[index])]
                        }
                    }
                }
            }
            if (element == 'Devide') {
                str = str.split(' ');
                isone = false;
                for (let index = 0; index < str.length; index++) {
                    let number = str[index];
                    if (numbers.indexOf(number) != -1) {
                        if (isone == false) {
                            isone = true;
                            result = `${numbers.indexOf(number)} /`;
                        } else {
                            result = `${result} ${numbers.indexOf(number)}`;
                        }
                    }
                }
                result = eval(result);
                result = Math.round(result)                
                result = String(result);
                final_result = '';
                for (let index = 0; index < result.length; index++) {
                    if (numbers[parseInt(result[index])]) {
                        if (index >= 1) {
                            final_result += ' ' + numbers[parseInt(result[index])]
                        } else {
                            final_result += numbers[parseInt(result[index])]
                        }
                    }
                }
                if (final_result == '') {
                    final_result = 'Undefined';
                }
            }
            break;
        }

    }
    return final_result;
