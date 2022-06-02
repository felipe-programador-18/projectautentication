//doing connection with timestamp of firebase!!!
const Time = ({TIMESTAMP}) => {
    const data = new Date(TIMESTAMP)
    const hours =  data.getHours()
    const second = '0' + data.getSeconds()
    const minute = '0' + data.getMinutes()
    const day = '0' + (data.getDate())
    const month = '0' + (data.getMonth()+1)
    const years = (data.getFullYear())

    return `${day.substr(-2)}/${month.substr(-2)}/${years} ${hours}:${minute.substr(-2)}:${second.substr(-2)}`
}

export default Time