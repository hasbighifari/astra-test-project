const { data } = require('./data_response')
const dataResponse = require('./data_response')
const datas = dataResponse.data
const response = datas.response
const billdetails = response.billdetails
const arrayBody = billdetails.map(item => item.body)
const arrayBodyGabung = arrayBody.map(item => Number(item[0].split(":")[1]))
const result = arrayBodyGabung.filter(item => item >= 100000)
console.log("response", result)