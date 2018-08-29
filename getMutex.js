const getMutex = (mockProps, mutex, convertMutexStatus = {}, log = false) => {
    try {
        let mutexState = {},evalStr = "",hasConver = Object.getOwnPropertyNames(convertMutexStatus).length > 0;
        log && console.debug(mutex, "mutex ")
        log && console.debug(hasConver, "hasConver ")
        log && console.debug(mockProps, "mockProps ")
        Object.keys(mockProps).forEach((element) => {
            log && console.debug(element, "mockProps conver")
            if (hasConver && convertMutexStatus.hasOwnProperty(element)) { //协议参数名称转换
                log && console.debug(element, "\n", evalStr, "\n", convertMutexStatus[element], "参数")
                evalStr += "var " + convertMutexStatus[element] + "=" + (mockProps[element] ? mockProps[element] : 0) + ";"
            } else if (mutex.hasOwnProperty(element)) {
                // console.debug("mutex有这个参数",element)
                evalStr += "var " + element + "=" + (mockProps[element] ? mockProps[element] : 0) + ";"
            } else {
                hasConver && log && console.warn(convertMutexStatus, "该平台没有做协议参数名称转换", element)
                log && console.debug("mutex没有这个参数", element)
            }
        })
        log && console.debug(mutex, evalStr, "mutex conver")
        Object.keys(mutex).forEach(element => {
            if (hasConver && mutex.hasOwnProperty(element)) {//协议参数名称转换,且转换后的参数在互斥表中
                mutexState[element] = eval(evalStr + mutex[element]);
            } else if (mockProps.hasOwnProperty(element)) {
                mutexState[element] = eval(evalStr + mockProps[element]);
            } else {
                hasConver && log && console.warn(convertMutexStatus, "该平台没有做协议参数名称转换", element)
                log && console.debug("mockProps没有这个参数", element);
            }
        });
        if (hasConver) {
            log && console.debug("start conver")
            for (let oo in convertMutexStatus) {
                log && console.log(oo, convertMutexStatus[oo], mutexState[convertMutexStatus[oo]], "再次转换")
                if (mutexState[convertMutexStatus[oo]] != undefined) mutexState[oo] = mutexState[convertMutexStatus[oo]];
                delete mutexState[convertMutexStatus[oo]];
            }
        }
        //是否待机, false为可以点击，状态有效
        // console.debug(mutexState,"mutexState")
        return mutexState;
    } catch (error) {
        console.error(error)
    }
}
