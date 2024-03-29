import axios from "axios";
import {countries} from "country-data";

export const common =  {
        baseUrl: 'https://api-staging.lexpulse.app/',
}

export function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getAbbreviation = (num) => {

    if (num === 1 || num === 21 || num === 31) {
        return num.toString() + 'st'
    } else {
        return num.toString() + 'th'
    }
}

export const monthString = (num) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[num];
}

export const monthStringShort = (num) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return months[num];
}

export const monthInt = (month) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let finalIndex = 0;
    for (let index = 0; index <= months.length; index++) {
        if (months.at(index).toLocaleLowerCase() === month.toLocaleLowerCase()) {
            finalIndex = index;
        }
    }
    return finalIndex;
}

export const dayStringShort = (num) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",]
    return days[num];
}

export const dateReader = ({date, month = true, years = true, weekDay = false}) => {

    let _date = new Date(date);
    let dateString = '';
    if (weekDay) {
        dateString = dateString.concat(dayStringShort(_date.getDay()), ' ')
    }
    dateString = dateString.concat(_date.getDate().toString(), ' ')
    if (month) {
        dateString = dateString.concat(monthStringShort(_date.getMonth()), ' ')
    }
    if (years) {
        dateString = dateString.concat(_date.getFullYear().toString())
    }

    return dateString;
}

export async function getCountry() {
    let data = await axios.get('https://api.country.is');
    console.log(data.data.country);
    return countries[data.data.country].name;
}

export function serviceCountries() {
    let list = ['KE', 'GH', 'UK','CY']
    return list.map((e) => countries[e])
}

export async function createFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
        type: 'image/jpeg'
    };
    // ... do something with the file or return it
    return new File([data], "picture.jpg", metadata);
}