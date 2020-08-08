const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Samuel Rocha",
        avatar: "https://avatars1.githubusercontent.com/u/48805911?s=460&u=2ae5b9e4158115ee0ca3ece50596e2d4d6f78e30&v=4",
        whatsapp: "997820414",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class id vira pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados

    // todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar dados de um determinado professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1219"
        AND class_schedule.time_to > "1219"
    `)

    console.log(selectClassesSchedules)
})