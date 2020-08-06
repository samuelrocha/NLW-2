const proffys = [
    {
        name: "Samuel Rocha",
        avatar: "https://avatars1.githubusercontent.com/u/48805911?s=460&u=2ae5b9e4158115ee0ca3ece50596e2d4d6f78e30&v=4",
        whatsapp: "997820414",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Samuel Rocha 2",
        avatar: "https://avatars1.githubusercontent.com/u/48805911?s=460&u=2ae5b9e4158115ee0ca3ece50596e2d4d6f78e30&v=4",
        whatsapp: "997820414",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isEmpty = Object.keys(data).length > 0
    // adicionar dados a lista de proffys
    if(isEmpty){

        data.subject = getSubject(data.subject)
        
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", { weekdays , subjects})
}

const express = require('express')
const server = express()

// Configurar numjucks

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)



