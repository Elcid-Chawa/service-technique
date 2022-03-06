import React from "react";

const services = {
    maintenance: {
            type:"MAINTENANCE",
            service:[

            ]
            },
    
    installations:{
        type:"INSTALLATIONS",
        service:[]
    },

    intervension: {
        type:"INTERVENTION",
        service:[]
    },
    
    mission:{
        type:"MISSION",
        service:[
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "PROGRAMME DES MISSIONS DE MAINTENANCE CUISINES BIR SEPTEMBRE 2021.",
                date: "",
                filePath: "missions/doc2",
                
            },
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "PROGRAMME DES MISSIONS DE MAINTENANCE CUISINES BIR DECEMBRE 2021.",
                date: "",
                filePath: "missions/doc4",
                
            },
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "ORDRE DE MISSION",
                date: "",
                filePath: "missions/doc6",
                
            },
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "PROGRAMME DES MISSIONS DE MAINTENANCE CUISINES BIR MARS 2022.",
                date: "",
                filePath: "missions/doc7",
                
            },

        ]},
    
    admin:{
        type:"ADMINISTRATION",
        service:[]},

    personnel:{
        type:"PERSONNEL",
        service:[]
    },

    achats:{type:"ACHATS",
        service:[
            {
                type: "CUISIN BIR, BORDEREAU DE LIVRAISON",
                title:"BORDEREAU DE LIVRAISON, BASE DE MAN O WAR BAY",
                date:"",
                filePath: "achats/doc1",
                
            },
            {
                type:"SERVICE TECHNIQUE DES BIR" ,
                title: "BORDEREAU DE RECEPTION, BASE DE MAN O WAR BAY",
                date: "",
                filePath: "achats/doc3",
                 
            },
            {
                type:"SERVICE TECHNIQUE DES BIR" ,
                title: "BORDEREAU DE RECEPTION",
                date: "",
                filePath: "achats/doc5",
                
            },
        ]
    },

    devis:{type:"DEVIS",
        service:[]
    },
        
}

export default services;