import { ui } from "./ui.js"
export class detaile{
    constructor(id){
        this.ui=new ui()
        document.getElementById('close').addEventListener('click',()=>{
            document.getElementById('game1').classList.remove('d-none')
            document.getElementById('second').classList.add('d-none')
        })   
    }
    async getDetailes(id) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dfb185d476msh17efdf06212ebdbp1154bfjsnf3029fc0f8c9',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        document.querySelector('#game1').classList.add('d-none')
        document.querySelector('.spinner').classList.remove('d-none')
        const api2=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        const respons=await api2.json()
        document.querySelector('.spinner').classList.add('d-none')
        document.querySelector('.first').classList.add('d-none')
        document.querySelector('#second').classList.remove('d-none')
        this.ui.displayDetails(respons)
        
        }
}

