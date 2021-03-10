import { serviceUrl } from './serviceUrl'
import { serviceStart, serviceEnd } from '../actions/systemAction'
import { snackbarErrorMsg, snackbarErrorStatus, closeSnackbar } from '../actions/systemAction';
// import { loginStatus } from '../actions/userAction'
import store from '../store'

export const SendToService = (request, method, serviceCode, onsucceed) => {
    let requestJson = JSON.stringify(request)
    let oReq = new XMLHttpRequest();
    console.log('request', request)
    console.log('url', serviceUrl(serviceCode, request))
    console.log('method', method)
    store.dispatch(serviceStart())
    oReq.open(method, serviceUrl(serviceCode, request), true);
    oReq.setRequestHeader("Content-Type", "application/json")
    // if (serviceCode !== 'login') {
    //     oReq.setRequestHeader('x-auth-token', xAuthToken)
    // }
    oReq.send(requestJson)
    oReq.addEventListener('load', () => {
        if (oReq.readyState === 4 && oReq.status === 200) {
            let response = {
                headers: {
                    'statusCode': String(oReq.status),
                },
                body: JSON.parse(oReq.responseText)
            }
            store.dispatch(serviceEnd())
            if (serviceCode === 'login') {
                store.dispatch(snackbarErrorMsg("login is success"))
                store.dispatch(snackbarErrorStatus("success"))
            }
            console.log("response",response)
            onsucceed(response)
        }
        else {
            let response = {
                headers: {
                    'statusCode': String(oReq.status),
                },
                body: JSON.parse(oReq.responseText)
            }
            console.log('response', response)
            store.dispatch(serviceEnd())
            store.dispatch(snackbarErrorMsg(response.body.error))
            store.dispatch(snackbarErrorStatus("error"))
        }
    })
}