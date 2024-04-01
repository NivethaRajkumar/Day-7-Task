//
// const a =["apple","mangoe","orange"]
// const result =a.map((ele)=>ele+'s')
// console.log(result)

// const greatest = [4,3,2,1,5]
// const result = greatest.filter((ele)=>ele>2)
// console.log(result.sort())

// const a=[1,2,3,4,5]
// const result = a.reduce((sum,i)=>{
//     return sum*i
// },1)
// console.log(result)

/*
//Get all the countries from Asia continent /region using Filter function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region==="Asia")
    var final = res.forEach((ele)=>console.log(ele.name.common))
}

//Get all the countries with a population of less than 2 lakhs using Filter function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res=result.filter(country => country.population < 200000)
    console.log('Countries with population less than 2 lakhs:',res);
}

//Print the following details name, capital, flag, using forEach function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res=result.forEach(country => {
        console.log('Name:', country.name.common);
        console.log('Capital:', country.capital[0]);
        console.log('Flag:', country.flags.svg);
    });
}

//Print the total population of countries using reduce function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.reduce((acc, country) => acc + country.population, 0);
        console.log('Total population of countries:', res);

}

//Print the country that uses US dollars as currency.
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res= result.find(country => {
        const currencies = Object.values(country.currencies);
        return currencies.includes('USD');
    });
    console.log('Country that uses US dollars:',res);
}
*/
