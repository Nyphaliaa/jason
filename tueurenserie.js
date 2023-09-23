"use strict";

let caractéristiques=["nerd","sportif","débile","otaku","courageux"]; // définir une liste de caractéristiques
let prenoms=["Kishini","Henrique","Arthur","Julien","Johanna"]; // définir les prénoms des survivants


class characteristics{
    constructor(name,attack,die,dieAttack){ // paramètres de mes personnages
        this.name=name;
        this.attack=attack;
        this.die=die;
        this.dieAttack=dieAttack;
    } 
}

let nerd=new characteristics('nerd',0.2,0.3,0.5); // définir mes caractéristiques et les pourcentages d'action
let sportif=new characteristics('sportif',0.4,0.1,0.5);
let débile=new characteristics('débile',0.1,0.6,0.3);
let otaku=new characteristics('otaku',0.3,0.4,0.3);
let courageux=new characteristics('courageux',0.6,0.2,0.2);

class survivor{
    constructor(name,characteristics){ // paramètres des survivants
        this.name=name;
        this.characteristics=characteristics;
        this.dead=false;
    }
}

let survivor1=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],characteristics[Math.floor(Math.random()*characteristics.length)]) // prénom et caractéristique générés aléatoirement dans les tableaux qui leur correspondent
let survivor2=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],characteristics[Math.floor(Math.random()*characteristics.length)])
let survivor3=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],characteristics[Math.floor(Math.random()*characteristics.length)])
let survivor4=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],characteristics[Math.floor(Math.random()*characteristics.length)])
let survivor5=new survivor(prenoms[Math.floor(Math.random()*prenoms.length)],characteristics[Math.floor(Math.random()*characteristics.length)])
let morts=[]

class killer{
    constructor(name,hp){ // paramètres du tueur
        this.name=name
        this.hp=hp
    }
    attackSurvivor(survivor){ // méthode pour attaquer les survivants
        let action=Math.random();
        if(action>0.66){
            this.hp = this.hp-10
            console.log(survivor.name + " esquive et inflige 10 de dégâts à " + this.name );
            console.log("il reste " + this.hp + " points de vie à " + this.name);
        }
        else if(action<0.33){
            survivor.dead=true
            this.hp = this.hp-15
            console.log(survivor.name + " meurt et inflige 15 de dégâts à " + this.name);
            console.log("il reste " + this.hp + " points de vie à " + this.name);
            morts.push(survivor.name);
        }
        else{
            survivor.dead=true
            console.log(this.name + " a tué " + survivor.name);
            morts.push(survivor.name);
        }
    }
}

let tueur=new killer("Jason",100); // créer une variable tueur et lui attribuer des paramètres
let survivors=[survivor1,survivor2,survivor3,survivor4,survivor5]; // créer un tableau de survivants
let deathCount=0 // créer un compteur de morts

while(tueur.hp>=0){ // tant que le tueur est vivant
    for(let survivor of survivors){
        if(survivor.dead===true){ // si un des survivants meurt
            deathCount=deathCount+1 // ajouter 1 au compteur de morts
        }
    }
    if(deathCount===survivors.length){ // si le compteur de morts arrive au même nombre d'éléments dans le tableau
        console.log("Jason a gagné avec " + tueur.hp + " points de vie !");
        break; // finir la boucle
    }else{
        deathCount=0 // sinon reset à 0 et recommencer la boucle
    }
    for(let survivor of survivors){ // pour chaque survivants de la liste survivors
        if(survivor.dead===false){ // si les survivants sont vivants
            tueur.attackSurvivor(survivor); // le tueur les attaque
            if(tueur.hp<0){
                console.log("Les survivants ont gagné mais RIP à " + morts);
                break;
            }
        }
    }
}

for(let survivor of survivors){
    if(survivor.dead===false){
        console.log(survivor.name + " est en vie ");
    }
}

for(let survivor of survivors){
    if(survivor.dead===true){
        morts.push(survivor.name);
    }
}