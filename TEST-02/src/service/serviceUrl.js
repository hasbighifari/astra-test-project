export const serviceUrl = (serviceCode, request) => {
    switch (serviceCode) {
        case 'login':
            return 'https://reqres.in/api/login'
        case 'register':
            return 'https://reqres.in/api/register' 
        default:
            break;
    }
}