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
                fileName: "doc2.pdf",
                
            },
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "PROGRAMME DES MISSIONS DE MAINTENANCE CUISINES BIR DECEMBRE 2021.",
                date: "",
                fileName: "doc4.pdf",
                
            },
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "ORDRE DE MISSION",
                date: "",
                fileName: "doc6.pdf",
                
            },
            {
                type:"SERVICE TECHNIQUE DES CUISINES BIR" ,
                title: "PROGRAMME DES MISSIONS DE MAINTENANCE CUISINES BIR MARS 2022.",
                date: "",
                fileName: "doc7.pdf",
                
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
                fileName: "doc1.pdf",
                
            },
            {
                type:"SERVICE TECHNIQUE DES BIR" ,
                title: "BORDEREAU DE RECEPTION, BASE DE MAN O WAR BAY",
                date: "",
                fileName: "doc3.pdf",
                 
            },
            {
                type:"SERVICE TECHNIQUE DES BIR" ,
                title: "BORDEREAU DE RECEPTION",
                date: "",
                fileName: "doc5.pdf",
                
            },
        ]
    },

    devis:{type:"DEVIS",
        service:[]
    },
        
}

export default services;