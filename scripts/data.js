// Interfaces
const interfazHome = document.getElementById('home');
const interfazDescripcion = document.getElementById('serie-description');
const interfazVideoPlayer = document.getElementById('video-player')
// Interfaz de inicio
let articlesHTML = [] // contenedor de los articulos en el html
// Elementos de interfazDescripcion
const descriptionImg = document.getElementById('serie-description__img')
const descriptionTxt = document.getElementById('serie-description__txt')
const descriptionTitle= document.getElementById('serie-description__title')
const seasonTitle = document.getElementById('caps__temporada')
const serieDescriptionSeason = document.getElementById('serie-description__season')
const seasonContainer = [    // botones de temporadas
document.getElementById('T1'),
document.getElementById('T2'),
document.getElementById('T3'),
document.getElementById('T4'),
document.getElementById('T5')
]
const descriptionCaps= [    // botones para seleccionar capitulos
    document.getElementById('ep1'),
    document.getElementById('ep2'),
    document.getElementById('ep3'),
    document.getElementById('ep4'),
    document.getElementById('ep5'),
    document.getElementById('ep6'),
    document.getElementById('ep7'),
    document.getElementById('ep8'),
    document.getElementById('ep9'),
    document.getElementById('ep10'),
    document.getElementById('ep11'),
    document.getElementById('ep12'),
    document.getElementById('ep13'),
    document.getElementById('ep14'),
    document.getElementById('ep15'),
    document.getElementById('ep16'),
    document.getElementById('ep17'),
    document.getElementById('ep18'),
    document.getElementById('ep19'),
    document.getElementById('ep20'),
    document.getElementById('ep21'),
    document.getElementById('ep22'),
    document.getElementById('ep23'),
    document.getElementById('ep24'),
    document.getElementById('ep25'),
    document.getElementById('ep26'),
    document.getElementById('ep27'),
    document.getElementById('ep28'),
    document.getElementById('ep29'),
    document.getElementById('ep30'),
    document.getElementById('ep31'),
    document.getElementById('ep32'),
    document.getElementById('ep33'),
    document.getElementById('ep34'),
    document.getElementById('ep35'),
    document.getElementById('ep36'),
    document.getElementById('ep37'),
    document.getElementById('ep38'),
    document.getElementById('ep39'),
    document.getElementById('ep40'),
    document.getElementById('ep41'),
    document.getElementById('ep42'),
    document.getElementById('ep43'),
    document.getElementById('ep44'),
    document.getElementById('ep45'),
    document.getElementById('ep46'),
    document.getElementById('ep47'),
    document.getElementById('ep48'),
    document.getElementById('ep49'),
    document.getElementById('ep50'),
    document.getElementById('ep51'),    
    document.getElementById('ep52'),
    document.getElementById('ep53'),
    document.getElementById('ep54'),
    document.getElementById('ep55'),
    document.getElementById('ep56'),
    document.getElementById('ep57'),
    document.getElementById('ep58'),
    document.getElementById('ep59'),
    document.getElementById('ep60'),
    document.getElementById('ep61'),
    document.getElementById('ep62'),
    document.getElementById('ep63'),
    document.getElementById('ep64'),
    document.getElementById('ep65')
]
// Elementos de interfazVideoPlayer
const videoTitle = document.getElementById('video-player__title')
const videoMedia = document.getElementById('video-player__media')
const videoDescription = document.getElementById('media-description')
const videoNext = document.getElementById('video-player__next')
const videoBack = document.getElementById('video-player__back')
//Otros
let seriesContainer = [] // contenedor de cada serie
let serieSelected
let seasonSelected = 0
let capSelected = 1
interfazDescripcion.style.display = 'none'
interfazHome.style.display = 'flex'
interfazVideoPlayer.style.display = 'none'

class article{
    constructor(article,img,description){
        this.article = document.getElementById(`${article}`)
        this.img = document.getElementById(`${img}`)
        this.description = document.getElementById(`${description}`)
        this.name = ""
    }

    setDescription(name,img){
        this.description.innerText = name
        this.img.src = img
        this.name = name
    }
}
    // poster de cada serie en el html (<article>, imagen, texto)
let article1 = new article('articleContainer1','articleImg1','articleTxt1')
let article2 = new article('articleContainer2', 'articleImg2' ,'articleTxt2')
let article3 = new article('articleContainer3', 'articleImg3' ,'articleTxt3')
let article4 = new article('articleContainer4', 'articleImg4' ,'articleTxt4')
let article5 = new article('articleContainer5', 'articleImg5' ,'articleTxt5')
let article6 = new article('articleContainer6','articleImg6','articleTxt6')
let article7 = new article('articleContainer7', 'articleImg7' ,'articleTxt7')
let article8 = new article('articleContainer8', 'articleImg8' ,'articleTxt8')
let article9 = new article('articleContainer9', 'articleImg9' ,'articleTxt9')
let article10 = new article('articleContainer10', 'articleImg10' ,'articleTxt10')
let article11 = new article('articleContainer11','articleImg11','articleTxt11')
let article12 = new article('articleContainer12', 'articleImg12' ,'articleTxt12')
let article13 = new article('articleContainer13', 'articleImg13' ,'articleTxt13')
let article14 = new article('articleContainer14', 'articleImg14' ,'articleTxt14')
let article15 = new article('articleContainer15', 'articleImg15' ,'articleTxt15')

articlesHTML.push(article1,article2,article3,article4,article5,article6,article7,article8,
                  article9,article10,article11,article12,article13,article14,article15)

class serie{
    constructor(name,description,imgPoster,caps){
        this.name = name
        this.caps = caps
        this.imgPoster = imgPoster
        this.description = description
    }
    setDescription(){
        descriptionImg.src = this.imgPoster
        descriptionTitle.innerText = this.name
        descriptionTxt.innerText = this.description
    }
}

let YoujoSenki = new serie("Youjo Senki",

"Youjo Senki Anime es una adaptación anime de la serie de novelas" +
"ligeras Youjo Senki producida por el estudio NUT que se transmite" + 
"en Japón desde el 6 de enero de 2017 y está siendo transmitida " + 
"simultáneamente por Crunchyroll. El anime se lanzo en tres volúmenes" + 
"de Blu-ray y DVD que contienen cuatro episodios cada uno.", 

"./assets/imgs/Youjo-Senki/Youjo-Senki-Poster.webp",
[
    [   // Temporada 1
        "https://mega.nz/embed/qpIy2AoI#nMWT9eQg5SJyt3QfxhcWjesd7xy_TlvXdYQNqAvB_lA!", //cap: 01  
        "https://mega.nz/embed/voZynbRK#h_72PDljbUm_W7yPL0AeC17XFbIQcU35RWbs2-4XcNw!", //cap: 02
        "https://mega.nz/embed/fkxE2LIJ#E3GHU6aZETa-J0Hz3j5XIFuI2B-7tfTiLwJwyxVqyMY!", //cap: 03
        "https://mega.nz/embed/mxghnazC#w2i1S9s2J0nHiIUVKO-Wglm9aT1fmpWef1yT5Gc0Q5Q!", //cap: 04
        "https://mega.nz/embed/HsIglaLT#ZVHj0j8xwDTU-wv5SgMVZjprBIdxi9VeYkQtsPsSzGA", //cap: 05
        "https://mega.nz/embed/HlAz0SIJ#4w90bVWw71pOvX0c5j0UUOeYx76EjdOF5RGHtAZkwXs", //cap: 06
        "https://mega.nz/embed/uhgFkZ7b#PbbQ7wSR8x2JCwAflNsfs5oHaAfxrPoQSMSIz61Lfhc", //cap: 6.5
        "https://mega.nz/embed/vlYTnb7S#EdG7Nfu67MTpJ7GpfmKWI5-f-RL58Z4IZ5Fva-jAsVA", //cap: 07
        "https://mega.nz/embed/vhhkxCLZ#MCFJWH6bRd7gob0ixgsSpc9as8kf-7uo_uljZuM9gFA", //cap: 08
        "https://mega.nz/embed/LoQCnY6A#GeUcenj7K2gWeuQvtdJAUfPsnX2nYA5axWtNdHWNtrY", //cap: 09
        "https://mega.nz/embed/K5wC2ZrZ#bd-VX02BdDtAeqc0tE0NlbYobX9BTct4K4uO6AJrCgs", //cap: 10
        "https://mega.nz/embed/bt4kRCab#x0vYM69WfX5dcftm9bsapIaB1thv0y_nHF46dsCRzKg", //cap: 11
        "https://mega.nz/embed/SopVnSxT#80Tqp8HJmxhYT2I11265XJszAKG9zX3VGBRqt_1oOTU", //cap: 12
    ]
]);


let KenjaNoMago = new serie("Kenja no Mago",
" Un joven que seguramente habia muerto en un accidente, ¡renacio en otro mundo cuando era un bebe!" + 
"Después de eso, fue recogido por el heroe patriota 'sage' Merlin Wolford y se le dio el nombre de Shin.\n\n" +
"Fue criado como nieto por Merlin y absorbio las enseñanzas de Merlin, ganandole algunos poderes" +
"impactantes; sin embargo, cuando cumplio 15 años, su abuelo Merlin dijo: '¡Olvide enseñarle sentido comun!'",
'./assets/imgs/Kenja-No-Mago/Kenja-No-Mago-Poster.jpg',
[
    [   // Temporada 1
        "https://mega.nz/embed/C0ZnnLCJ#wwCGmak_fOhsl-ysYRlYR5pxexnK2fYdl6G8rugEIBY",
        "https://mega.nz/embed/CthUEboR#pa_36XR9sBkYXqJTZNBOQtjyW_fjhSmg3c6PqpE3WOs",
        "https://mega.nz/embed/exhn3RCB#ak2B0JPexJl418QUF0EtYFj0UMaUmeM-QHuhMKrwxQQ",
        "https://mega.nz/embed/65okVL6b#lhjA30fROudZXBdnOjPBvmSDZhNxaC_u_rhoTyPuYnM",
        "https://mega.nz/embed/iww2TIxI#K7ajAAf1aykfXfVeikX2Y5GlFW_rrEIHUq5WWQw0CJ4",
        "https://mega.nz/embed/i55EzA5L#DgaIkkSv6kf4UKPp7ZwnaTzDsmX20OpDG40x5GHJM-w",
        "https://mega.nz/embed/epZWkJjS#79Eg3nNaRV8PiD8AfbhJ3BwFtblHFF5aIpsAttrURRs",
        "https://mega.nz/embed/T1BB0YhI#k_na7u-QOo5P3SYv1YBYOfZmaIelDgfZnmzvKlIcKeQ",
        "https://mega.nz/embed/6sJl2Cib#rmdR5xpLLQYqfzi44FhMVs24nb0i5s1GhlYbE_aX4iA",
        "https://mega.nz/embed/Sk4SFL6a#GhDwuy7_crsg9TD20-cbWejLt0qU-UB1CH4IJ0BXadg",
        "https://mega.nz/embed/S8IVGTLJ#VdBlADqMG6f5vnlcdImQX_NQ4i0dosTMNYSJFAjEs-s",
        "https://mega.nz/embed/ilYh3QzD#kVMK7D-vkANn0zYFOsgR8w_AGPHSibtlxF12NrX4N9k"
    ]
])

let Overlord = new serie("Overlord",
"Cuando un popular MMORPG anuncia su cierre definitivo, el veterano jugador Momonoga decide quedarse en él hasta" +
"el mismo cierre, sin salir.\nEl problema es que pasa la horra de cierre y él no se desconecta, pero los NPC han ganado conciencia propia. ¿Está atrapado?",
"./assets/imgs/Overlord/overlord-poster.jpg",
[
    [   // Temporada 1
        "https://mega.nz/embed/W9gnhC5S#V5I2fJbzB5WeCv1xfRA6AtKyqixdERvb-EnIAI1JNNI",
        "https://mega.nz/embed/q05lgTQD#e0JPu5Cszv_tSy3ejz_9CrGBQS6Hi-Su6BUsIvjH244",
        "https://mega.nz/embed/e5ZQmSjB#zvMkq6rOCcQK5KBODnVupd5A2NdX3T4C4fzvWjLP-F0",
        "https://mega.nz/embed/3gY3ybTQ#0x8HrIPPmtwolkRS9J_F3T_-puBFr5n8A7TXZMmmxig",
        "https://mega.nz/embed/f8BHDCAI#NRbvICgd5RXDETrC5k7vOgvstDTmNWunyw_aLXv716c",
        "https://mega.nz/embed/f4QiSAKL#aEIp9P1xDLaC2H-35FSfXxL9lyqnTN219lsjBIT4vFo",
        "https://mega.nz/embed/roARjDiK#D968tZhSyf0U6g9cUxdmaAu_I5bY7-l2OgwkxN29IWs",
        "https://mega.nz/embed/DxICmSID#m1bCxlYrxfS06U4R_u67sqlOEHMO9y1TYI9la-fqhi4",
        "https://mega.nz/embed/ylIj3IAS#WL1k_DTzLy4W355NDsLAphVaViLTOSh7QuLbctuRSZI",
        "https://mega.nz/embed/zsoXAaga#wK8S_g4EYhX9A-X2UuIoXvLHjKp4DAijOrmS5jN2Rig",
        "https://mega.nz/embed/SlZTkDSD#1bxNWieONifqgaI1xdjQr_pU2qaGZn1DW3wniXn8CO8",
        "https://mega.nz/embed/DkoExaCD#el4jFIiSaxfRyL8MfBbi0GhZiwaHH9Z93iuwPKTGfu4",
        "https://mega.nz/embed/KpIwQB5J#t34Scfsa9LeKyBhRu_CiLi_ohFMHOHFsgubnHOVO8Yg"
    ],

    [   // Temporada 2
        "https://mega.nz/embed/n4QT2aSK#rMIziXZ70TfVFXNnxIlrQUmM1LQEdnD6X5NQkUcWWBg",
        "https://mega.nz/embed/i0AWyZwB#9z06rgZatMykMDwB9egOflXLlqBev0dd-NkTehb_RwE",
        "https://mega.nz/embed/j4QnzJgR#cMn501QsOkdFDf8MMWNkbQNikFxRSpxyWlFiW9BKjVk",
        "https://mega.nz/embed/HswHxQRJ#QUUGTORd05AiQ4hJ4vRBzmp_rsXYgNP1F5B6WbvQNnU",
        "https://mega.nz/embed/TkghEDqC#p4ltM_qJJ1SgXln6NEBZG1S2xNfibkZIqy4p3aT3h2g",
        "https://mega.nz/embed/qkgyWDbB#fpFO_vycWLSX8YzXseIX97xI1F3FxUlHrLMKIE50wKg",
        "https://mega.nz/embed/b5x0FZDI#hGcg9DZIU2k4XU-MRxZ2K0hr2atidT5KL6RdDfZnipw",
        "https://mega.nz/embed/6oZkjR4T#3NaCDVo9rpXn3QvQHUs4kyHYSaGzeu0zsdLV7bsL7NM",
        "https://mega.nz/embed/i9IBVTiR#UhyqE_OjNGwC9FdfS8DzLB_avpqPO32AoMGp7pykiWs",
        "https://mega.nz/embed/Xhoi0aKB#7LJdEZASoycDAh7IcJKFefT0Y07nXyRS7CR0Ypkfgso",
        "https://mega.nz/embed/rx5Fwa7B#h2xXBL91Az5ZY6TgFvD6VlUPsC2VYhfGvKBVDcgMwag",
        "https://mega.nz/embed/DlREzAjK#kFlHtPTAyX4QQKRi5e6VmWiJx3awV70fucZqW2RUlBs"
    ],

    [   // Temporada 3
        "https://mega.nz/embed/f0RxWbJA#cW3_1tG6ouZRYD6qRIXcHTJy2r8pvE4nRvgoyBtHEto",
        "https://mega.nz/embed/r4BVAa7J#Xh6LVFt5BJCRHDBnClUTHB1Xh--GWXcSs3VpNw05mJ8",
        "https://mega.nz/embed/7xZyHZKB#Fof40cq7xFUOJnmkaOWgPGTajJOPWM9Ey0PfIc6z-zs",
        "https://mega.nz/embed/joZmySJR#afV13eEy0SYClt8ACbkVYL6H1csc9F9OQBvOTbxrVfA",
        "https://mega.nz/embed/jlwBzIiY#2qACIPtySNM7o-LE5EitJqTyfe5723r6L3rzXV0VHoo",
        "https://mega.nz/embed/O4JSTAjB#BpAWshKHOcSJpwL10xO9QDIwdOegBl_x_KoA3y0z3WY",
        "https://mega.nz/embed/7t5kALoL#T6PVGqMMqsda5ZACIpm5tTtKpF-3CuzLeRk84IGlyOg",
        "https://mega.nz/embed/i8BGHajR#JBzBZ1WU4xJsB0Q0riP5_AAyR-NW5pc0QhBeT6epSUk",
        "https://mega.nz/embed/PxwQHSIA#_J1lkLHx-qLFAMIWJuIGIMapmS0mr6zNyvfFdV4IrXA",
        "https://mega.nz/embed/DoQmhAjQ#SccXSS_Y3uKwfpCC8mB5hG_GvJsvjgXhjNlNaHj0AN8",
        "https://mega.nz/embed/614jWZ4I#JOFsRPhV_-ge_IdamR2lfY5Y1X3NuyAnc8g2mKR_g4c",
        "https://mega.nz/embed/TogRRBgJ#55Y2FX662RjViRBTrG0JZ-pTZxpgtfisCN9PR8lN5pk",
        "https://mega.nz/embed/i0YRSJ6I#kBjbftljDuRdlaLcy7__g3SPt7pL-oEIDl46LS6VWsg"

    ],

    [   // Temporada 4
        "https://mega.nz/embed/yg4j1A5T#3X_qm7YWAi9ZuSqaoWL4YoGMBQQ2wJApFZLox8JHWJI",
        "https://mega.nz/embed/6l4DzDbR#qHb7WExxQEIGkHESwrs2RJOsu-_Mb9e2-t7nx6qQ150",
        "https://mega.nz/embed/qkxz0AIb#IdXib30KmXFtnXgqTVhllPfEpEB3ox6FIX4Cmv5NX-o",
        "https://mega.nz/embed/ftZEEDxB#hC_p-bQ97-cSDOTl890MS5yEoUMVMnTd7S4_qjC-vAQ",
        "https://mega.nz/embed/ChYHVD4B#Xm-UF-sNBK_KcQ4CMz31o2Ba5vM6SolYMahY58HVR0Q",
        "https://mega.nz/embed/r9p13ahZ#EQFWkqUQAgP5sfBQ24b95yFSxj1117Y4Xk6GpDBop94",
        "https://mega.nz/embed/K9wAECiR#j8_YXwYfx_7d6a2l8aQ1OYqfrVpgsRk9dYbJycu0BNA",
        "https://mega.nz/embed/CxAQhKoA#mtVromG7bm7a_KCSsXidizEzUUC2lvEeOCt2hD0vjOM",
        "https://mega.nz/embed/qhIChZJZ#yXWxhVWyKr6TbhSm_iFLITmZhovzTSwEHqHDDLTYBfI",
        "https://mega.nz/embed/OtxURIJD#iuz5ejtOAMWGmLE8QJBEoTof2l4OfbBmf4Z5143ov2U",
        "https://mega.nz/embed/n5I01R6a#jTVkJ2N6sFjv7oH1QtfcZlHKivBCzjeBe-TPmRYSUaM",
        "https://mega.nz/embed/jxBTELKR#PcRK_46DRTTy7j4oGKRAA6eoqoOCoqO8lK40wqRpOGA",
        // falta el capitulo 13

    ],

    [   // Ovas / Especiales
        "https://mega.nz/embed/fsJmETSC#nu3VNqH6sifWyguCY_k6N9WgpOi2Kg8-7iJ0crTFAx4",
        "https://mega.nz/embed/DpZkzCgT#hkbgFf_rDPZvvsMathz84tx_selpBfY7W2aY2ZGyM3s",
        "https://mega.nz/embed/OxYB3TLY#wxqioivCHxZgCtC7u9Oq5wPj1-9L47nMS17OTuczAJs",
        "https://mega.nz/embed/S1hQ3IaD#U_0l9IgjqO1au7Adj5Fn1ejHU4HqY2WVdeipvkKwJq0",
        "https://mega.nz/embed/mxxhhR6B#Q1hX57FxPMveYy88-ohdN3cZiTQdJZru2iKZKqGQZvg",
        "https://mega.nz/embed/W5B3jQib#UZB6L8j4kenxrTS1gcCr_210OzwIJkwrakN_HxQ7gjA",
        "https://mega.nz/embed/uoIyFTCB#pFi-kRhVmOH5CpDiBOS0-JiT8VIn0SJQmT_0s22ZriM",
        "https://mega.nz/embed/v8pjUBba#9DFPPS2SsHfrp6Ve_we3Ei-y_4zYKvwcbBTdb_y6wJo",
        "https://mega.nz/file/Im1VTbwT#y32HN3FQfvfqx_fW3F6_pL0cgLNctFCFKoFPoRPoPzA",
    ]
])

let LogHorizon = new serie("Log Horizon",
"La historia se desarrolla en un universo donde 30.000 jugadores japoneses se encuentran atrapados en un mundo" + 
"de juego en línea de fantasía llamado Elder Tale.\n\n Para estos jugadores, lo que antes era un" + 
"'mundo de espada y brujería' es ahora el 'mundo real'! El personaje principal es un hombre llamado Shiroe" + 
"que se une a su viejo amigo Naotsugu y una hermosa asesina llamada Akatsuki mientras tratan de sobrevivir en este nuevo mundo.",
'./assets/imgs/Log-horizon/Log-Horizon-poster.webp',
[
    [   // Temporada 1
        "https://mega.nz/embed/R3FVlKzI#e-bcvUJqqqFnzBFKD9qg1zxJOhkylyeYVcDhyTmwSKc",
        "https://mega.nz/embed/hqcihYRI#HqsvISfrYebzo9sjbFRH2hKq_oow8wPKn-GzWVa-NXw",
        "https://mega.nz/embed/QiUmjSwa#bDeBoUfS1QQkrYCQKPot3x7j_1weYV2IR30m8TatzRU",
        "https://mega.nz/embed/gi802SjS#QBimaloVT40nn5wZ0--6swBuHqYZQI1YQ_TcOqkEaPA",
        "https://mega.nz/embed/p3U3yTBT#DnGRZ1iJLnRyzRO92wjg4FY1sxkfzWEoNrOUYMXTUh8",
        "https://mega.nz/embed/trkh1aia#c4J7IkFk4GkJe2oitcfNQwum7xYQi-wcbupz3ey5UWk",
        "https://mega.nz/embed/pyUXGC5I#PIWi9nWW4UGfmQ-7cE30OTsUaIYu0VHWn5hq5VZ_DBw",
        "https://mega.nz/embed/13lhFDoI#A1hB716ZkLFaR_GLowodCA0L3icqnvNhdDNd6J_Aalk",
        "https://mega.nz/embed/NqFSlSCa#MKdig1PdohaXGPrrkC303WC6REUpGUs-qQ7In6Wg_mI",
        "https://mega.nz/embed/E681XbYA#DSaKYWAGVvDYAyRl_RXhniDdwk1cFh2K3c42IKkv5LM",
        "https://mega.nz/embed/cydAVLbK#TfhY1jfhl-TT0G2Rx8xVn0ajzzMqgQJz6R3fPLz3SRw",
        "https://mega.nz/embed/07MAQKhY#EKdE52BkxHO5fZoSv-_VzFMgw-JLR0wDr_T8p9gmTco",
        "https://mega.nz/embed/ti0hhKoK#Hxx2rkd8BvohFWKGgGFauT7kNJZ6X12JKW9eAYbq8ms",
        "https://mega.nz/embed/hmF3jZBA#RAtix07RF9WDHmjUzJ7sCxu5bhxqdmpD35BHI5pgL8s",
        "https://mega.nz/embed/NzdySbhI#I5DktNPV26EQQ3yGldkEcJccamrEEMXeJYqTzVGWjk4",
        "https://mega.nz/embed/9idykb5S#my4PhCFUl9TK9pLHK7Y0osjULT3BT7cg-m9usteNBuE",
        "https://mega.nz/embed/9ilnVAhR#gzWXksWX5QHjs56vl9JTyPCJfg5IRgpXPR5L_c11h60",
        "https://mega.nz/embed/Q6UEHbSC#mVSo3L2OPw1HGj9cwrUJmk8X9AMILwabX16sYIX8Qmc",
        "https://mega.nz/embed/Em02HYga#PYFSgMnHBiq6PsvwkPgAxUC6WHTbB-mVkmdRFVzkYE4",
        "https://mega.nz/embed/tiECUKAY#kE2m6UaxnbFZUA5u-zJk0IAEIvZMVYBWJIg7sq9r5iY",
        "https://mega.nz/embed/9uk1yBRI#I6SOjzVhldWZVhUZr8SYISNsg0nHPhavJUWX686OlpE",
        "https://mega.nz/embed/0nsCCZDC#wVdSkRovE1gyEl7E-1a7muw7OiQifn0HBXtPO7PUYjM",
        "https://mega.nz/embed/x6lBnJib#htJp4C4ib9gU08S9ty7iQgpnJq84L0HKscawPUmczIM",
        "https://mega.nz/embed/VqEkBDRA#wWIhvt-HLn6V9V4Yl3Q1OeceEb3BVVRIm0vKUzMXh4Y",
        "https://mega.nz/embed/pqsxiSgA#ZUecg5fQaq1onp5sX39n2FDKPIJwcme_T8oamADTo58"
    ],

    [   // Temporada 2
        "https://mega.nz/embed/B31wwLzI#wQmVeuo-4bnxS7wuZ2WGS3-Geel7y1oIlnz4jOK1mdY",
        "https://mega.nz/embed/RiNhzCCD#VxRQaCF9zQaB9a3w8sUR7sGXeozGSQCdeL0gfAfaGXQ",
        "https://mega.nz/embed/9zMThLzY#E_Z7TqQM4dzgsVfUU4ostf6-de0KHZSwCYaYWqdcIKw",
        "https://mega.nz/embed/disBDZSa#mi98CYpBRTKqTpaOZdesYAe0Kd843PO0vAQb4U-covw",
        "https://mega.nz/embed/su9ziagS#NckIBN8ZGe9hKtHbriuL45Sb_aTvE335tQiMLiNt3-0",
        "https://mega.nz/embed/szsSCRYT#_iGQS_Y_CiVrOSZk7j8oKrrgTHGXpRDKqMGUQodxHe0",
        "https://mega.nz/embed/MqFXgIhI#Ah9Lns6OxThFdlJSYsqe-bcj92nC6PwfqGEeCiJIViU",
        "https://mega.nz/embed/hvUHUBjT#fgN8HCg3mXdflsIn2l95QxzpDma55KdIVf1_RGnPiq4",
        "https://mega.nz/embed/5mtgTI5D#OlIBJpQjp3nF86RairsVgVm7wOHsIqjhpbH8ET4128s",
        "https://mega.nz/embed/Ii9giBgb#VLjftfnJQf7zm3cF5Z25CijIiC2nDVVyUVEu-d8DtUE",
        "https://mega.nz/embed/ZiVFDKQT#_8G_HKfHURrOwUyENBAyqlw1kG0Je5vGmHTuuw1SC-E",
        "https://mega.nz/embed/Rn0EjDwA#OxPUjfn3_UezW2Z84xpKPpUl16W8k4Szyd93jSYdBPg",
        "https://mega.nz/embed/d6VQlCaL#40WO3wA2H1N7Q98DRswsncUQ-AjDu1bzSWw50j73feA",
        "https://mega.nz/embed/g71jHCwI#nVLrkkD7mJrFfNoxU8_drcYmfMRlYmNtgMUfYxDXq8g",
        "https://mega.nz/embed/dqVA1Rxa#wMVf7Tw3bOannLygMRSDluKARLJssbrH7h4_TSrN_Pw",
        "https://mega.nz/embed/JnkxlQwa#SZr7zphG2ms19vIvW-_K7Xx9jAz2ug1-eOXnM0IC6sA",
        "https://mega.nz/embed/Jqkm2abJ#L7MygSq0uFL0kRij72yqT7EZypYGXfHe9cy8b3zgqPI",
        "https://mega.nz/embed/YvF1DaLA#XueNMsMpkHSnwpdFIN8dY9Jzo8-9o_-5xZZPe3W8hq0",
        "https://mega.nz/embed/culXFTLT#KOkCPet30k5zf_ozIM7H7nNcZPoB4o9y2qKhV_tBFos",
        "https://mega.nz/embed/h31TRIQC#1wcAsmcY4q1b1q83vcvkkYadD9ySBhtJsLn-W7YTtLE",
        "https://mega.nz/embed/039DUCAI#ThvlyWOm3zcH5ldGQE9adBIyxdOUdvxovvEJLSssP6E",
        "https://mega.nz/embed/139zRSAC#R_h-QOIjWBSSSvqs9oReNcOHHHDSEujiQ_gu-AhOU3w",
        "https://mega.nz/embed/trtnBAhA#mFTku45wFkd8ZWynJ7lZTFum6brOFjxpceOKtxv1x6o",
        "https://mega.nz/embed/Vm8URCbS#n7jiy9gcUQ2PtBr6vbfHF6vMvxezjr2A-Yh8FdcUzIU",
        "https://mega.nz/embed/lzt1QaqC#0s3UDwLzA9u5PD-qd00NYMzeUZCj9pP7jX1Xd6pqEVg"
    ]
])

let Castlevania = new serie("Castlevania",
"Un cazavampiros lucha por salvar una ciudad asediada por un ejército de bestias controladas por Drácula. Serie inspirada en el clásico videojuego.",
"./assets/imgs/Castlevania/Castlevania-poster.webp",
[
    [   // Temporada 1
        "https://mega.nz/embed/8jszURaQ#TJ_0NBQQrQzrxHxQmnE21F7tYFUl6JJfZrSlO0Uj0gs",
        "https://mega.nz/embed/NjEWTBbS#vfsc9rx26OtB3MX50UafbmrRSkuEB_g_cvxl3mk5GNk",
        "https://mega.nz/embed/0it2gD4R#k-7IQpc4431eLfM2oaGiNyz0KXMFvwKBmWnEYRgPdB0",
        "https://mega.nz/embed/IvNFkDCT#BSYrRZg9fxCM55upBPUk290_z8Qz2iKrGaY3w_RNLRY"
    ],
            
    [   // Temporada 2
        "https://mega.nz/embed/I2kVBYYZ#kQjA9-Vpx2UKEexx-AYab3Jvt679IkRdA7UCjsU-fzk",
        "https://mega.nz/embed/xrskhAQZ#5oeRs2_XWSaDEYrb9cH4VIc-s3XM8Cyq3IrbUOKRAuU",
        "https://mega.nz/embed/cytlgD6R#PGZS4wzUBCIVCxFZwFKCovj0V9UVP8KLo48yqRmnz_c",
        "https://mega.nz/embed/BjckwCgS#X0WwLUX3abScQphvEMfZMe7zEj6reck1i4XPPVnGt7Y",
        "https://mega.nz/embed/Jn9DxCDS#4Dtaid3AxJeSEVFQ_uJ-ae8Y2pikoRS9Ca1TAViVK74",
        "https://mega.nz/embed/F2sljKhb#R17E7VOxJhuvQV9Xvb1hwJ33596a4p8OyMlkOSHLVbI",
        "https://mega.nz/embed/BydRkIBD#1wKkVY2Tm6UFvu6IC6syByK0fGU3z0XpRS2-APnpWAI",
        "https://mega.nz/embed/tjNDVBhC#wMDSEQ_PATzSEw3N2r4MC1FnZwxioRsdMCXjT4t9FKI"
    ],
            
    [   // Temporada 3
        "https://mega.nz/embed/Rr8VVbLa#0bgUrxqQSR13m1aVHMeQdk2ssFUh1nU8gv1EJH_uiI0",
        "https://mega.nz/embed/R78yXR5A#WaMNbvBsdGmsFipGnHx4tsO_-KOaWWgmuN0mQkmSm5Y",
        "https://mega.nz/embed/lqlWjLID#oF3aoZJ6RRGbyt7vRP60lAR7v-q8ef_A3raX2u57yzY",
        "https://mega.nz/embed/wit2BQZY#zl5s4_WBJopiNfZTWQTVdN3ImbcDPeLPyEmlUCIz1eo",
        "https://mega.nz/embed/InkCkTxI#dxI7W-OpquYPgA-hJGewm9xgnp1Q0xpJned4eGWX3yA",
        "https://mega.nz/embed/xnEUiBKR#9uTwu7UJUOtAhNHVoPO4ySq-95rwyuMJ3gu2RbNaIxA",
        "https://mega.nz/embed/1y8BRZYY#7f5YgReRu8RFq-kv2YGWuoj-osCgA3cXXIuczLDM_rE",
        "https://mega.nz/embed/Jz0D3T5L#AFGddm6q-q8GlInHxGPwjcN6-xmE-SRD5IRmGOl_SzU",
        "https://mega.nz/embed/BiE01S4Q#Oo9dV6WZW7MJXUparFL5eky2mEqLHaEhRORwlePQymo",
        "https://mega.nz/embed/sqsBWDoJ#5wsp7uzz9M0LZsrjpQCaZTk5HV8P7pR4ws3IBMixCqI"
    ]
])

let HellsParadise = new serie("Hell´s Paradise",
"El período Edo está llegando a su fin. A Gabimaru, un shinobi anteriormente conocido como el más fuerte de Iwagakure que ahora" + 
"es un condenado a muerte, se le dice que será absuelto y puesto en libertad si puede recuperar el Elixir de la Vida de una isla" + 
"que se rumorea que es la tierra pura budista. Sukhavati.\n\n Con la esperanza de reunirse con su amada esposa, Gabimaru se dirige" + 
"a la isla junto con el verdugo Yamada Asaemon Sagiri. Al llegar allí, se encuentran con otros condenados a muerte en busca del" + 
"Elixir de la Vida... así como con una gran cantidad de criaturas desconocidas, estatuas espeluznantes hechas por el hombre y los" + 
"ermitaños que gobiernan la isla. ¿Podrá Gabimaru encontrar el Elixir de la Vida en esta isla misteriosa y regresar vivo a casa?",
"./assets/imgs/Hell´s-Paradise/Hell-paradise-poster.jpg",
[
    [   // Temporada 1
        "https://mega.nz/embed/gn9RBRhA#KEdidCRyuKFXuMmWwfWS7GHfWmpWt498L1uOBUUYkKI",
        "https://mega.nz/embed/w7VAEBAJ#y5ryS0mLub2FVgOx5DKpjCyT_bHbBnKcbvbIeSfLiHE",
        "https://mega.nz/embed/tqNHFSJB#0DRZz71RZO9U5d26YJe5uaXdJn-C65AFE4jdfoOaEgU",
        "https://mega.nz/embed/06EhGYiT#Lyrb0TU29fnUd_6fY2bzGS3qUu3GTBxVpI0e-kJkE4M",
        "https://mega.nz/embed/13N3QDhR#K8ehV32cLghBr2a1iA_8y--xb8D0rhxn-UNRMZmIB9w",
        "https://mega.nz/embed/huslgQhQ#gSA-NkJZGA4NpDPNmQkYyEqGUSj0JU85FuLEouNAxCY",
        "https://mega.nz/embed/p7Fy0ZoI#uShrAbM2fCCil_BatobI7bNfJZL5HHYAj_xND3m_SC0",
        "https://mega.nz/embed/U29gzSRD#Y292FGaNMW6FqL3zcMzoZazL-Z1pG47T0ESTCCfrPXU",
        "https://mega.nz/embed/5mdxmIxI#vUf7GqZfILWeKhDh5_pD-xgSkH971bhnQ_Zcnhbua5U",
        "https://mega.nz/embed/4jkhwaRK#pS5-kNYXx8Mk37rfxyv5czSLgcIhxZ9Gya9Jlqh3rUE",
        "https://mega.nz/embed/g28CGQ5I#up-cPMZ6DCGiAsQEAfJNnGCe_ooowmJMmY-oI4xIDCk"
    ]
])

let TheEminenceInShadows = new serie("The Eminence in Shadows",
"Incluso en su vida pasada, el sueño de Cid no era convertirse en protagonista o jefe final. Prefiere pasar desapercibido" + 
"como un personaje secundario hasta que sea el momento de máxima audiencia para revelar que es un autor intelectual… o" + 
"al menos, hacer lo siguiente mejor: ¡pretender serlo! Y ahora que ha renacido en otro mundo, está listo para establecer" + 
"las condiciones perfectas para vivir sus sueños al máximo.\n\n Armado con su imaginación hiperactiva, Cid recluta en" + 
"broma miembros para su organización e inventa toda una historia de fondo sobre un culto malvado que deben acabar. \nBueno,"+ 
"por suerte, estos adversarios imaginarios resultan ser reales, ¡y todos saben la verdad menos él!",
"./assets/imgs/The-Eminence-in-Shadows/The-Eminence-in-Shadows-poster.webp",
[
    [   // Temporada 1
        "https://mega.nz/embed/Zn03TYhC#lcmnAL4AY0kZwyM5QiXGVjP9NPtNOZ4i8pwkUuAPgqg",
        "https://mega.nz/embed/snVF3aLQ#uRQ09KWjCueSkJW4I2k500Sv63rT66B59N1qUym3ySw",
        "https://mega.nz/embed/cv0wDQID#arypT1qkKyk7zNNh1avjyhP15aQPLVQ6WM6q4tNbqOI",
        "https://mega.nz/embed/t60EDSoS#GjG_UUkia38x5vi1cZTc93vOlG3C_1gXpQBGBfLceFk",
        "https://mega.nz/embed/0rlniL4a#7JQ3f_J4COmAlM_-cgGp87rlwM9IXpBUBgmySwpbt-I",
        "https://mega.nz/embed/MqNhRK4a#1D0VK0wZH4QNYGTXP4DtVQdfEtiM71e0KYzLSOrbeIg",
        "https://mega.nz/embed/gzdExLRL#34RymRW0Mpqx4R39KjCwMERQKFQcGdeeE5hTG6cTw9s",
        "https://mega.nz/embed/J6sm1RYL#b4vN4AnwfThCEAx-zZ5idr9uS4Qr6aBrPxX2JBMFA1Y",
        "https://mega.nz/embed/B2kCUbLa#zU1DF2W7qK3Z1Q4632ryEO7BzySBxLaL-MvjTLbWkVE",
        "https://mega.nz/embed/l6cTFQJa#wXwBtWmJDvEFTErhyN5dQJoFlZNOC3u_IaKqtUnvias",
        "https://mega.nz/embed/EzUDFBJA#opGRl8FVtopHDiDZzPvYVdkYw2nCnfUvdbaE_os0R2A",
        "https://mega.nz/embed/FzMn2RAQ#8ZS8Rf6faLkIUZPYMsmZeO3NUkmITsTa-E-W85ivbOI",
        "https://mega.nz/embed/sv1mVDJZ#8Vo8ZWMPaWWQW0q_43OlSNyfAGrgaEwMc4jXmyk_3RM",
        "https://mega.nz/embed/9u1zwRLY#9mzum2Ot0q-qza2JTC7Ry_F_pDoLsxLxM-yREed5Sa8",
        "https://mega.nz/embed/cyVVCLoa#_ae_w-M6Rmld3ZJZcjznSJzQ6_VQWl3HS-SVqleHhxs",
        "https://mega.nz/embed/MuUBGCQB#jTr69a-qzFshqO9Yz8PSvMq4d5G9tcyUc6cwX_V89d8",
        "https://mega.nz/embed/Y28UQIaK#dU00aYmC5jqDVvap9-VUHikDJIlfJXYbdhV1DasiWzc",
        "https://mega.nz/embed/trFCAKCA#PlBSq84TQvbw8iTDrzMDJDYI9B9yzrmMg-h2Y9DhqrM",
        "https://mega.nz/embed/52t33YpQ#sYCEG4iEcuDKkDhwHY4TdHM8APNqvuEZa6UG4PLPF0U",
        "https://mega.nz/embed/tv9hhBbb#RReZ17C_qQzYqJxdlz7DllkdWbfAkf1yAXLiL5YYTeo"
    ]
])

let OnePiece = new serie("One piece",

"One Piece es una serie de manga japonesa escrita e ilustrada por Eiichiro Oda." +
"Ha sido serializado en la revista de manga shōnen de Shueisha Weekly " + 
"Shōnen Jump desde julio de 1997, con sus capítulos individuales compilados" + 
" en 105 volúmenes de tankōbon a partir de marzo de 2023" + 
"", 

"./assets/imgs/One piece/571106.webp",
[
    [   // Arco East bLUE   
        "https://terabox.com/sharing/embed?surl=Ci4DnZlp6V2jWJYAloIYdQ&resolution=720", //cap: 01  
        "https://terabox.com/sharing/embed?surl=PIjbCLt16uKMvXQTpu-SuQ&resolution=720", //cap: 02
        "https://terabox.com/sharing/embed?surl=cKuRyOYrk-arFQYSJz3KwQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=himWVvM02xQQlYC2iWOrVQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=5HFtFoJ7vyXqIMrsGBNhMw&resolution=720",
        "https://terabox.com/sharing/embed?surl=Z8yxTB2amJXaDAbSuKrCTw&resolution=720",
        "https://terabox.com/sharing/embed?surl=XsKXLCylqUrPZtiaRBurjQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=T6ZX7niE_7R5zTgONLITOg&resolution=720",
        "https://terabox.com/sharing/embed?surl=1kPlSyAaqipn3bGcY2CFpQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=Ql1DgLPCu3UWZUAa1Fm-vA&resolution=720",
        "https://terabox.com/sharing/embed?surl=yzMNJALe6hrlOQ6iVzR-YA&resolution=720",
        "https://terabox.com/sharing/embed?surl=pSiuZp86QXSU2OuqRojtzA&resolution=720",
        "https://terabox.com/sharing/embed?surl=YLPyVlWdprwP0mSChPdskQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=LIFZx3OzZSsXsslSUQDr1g&resolution=720",
        "https://terabox.com/sharing/embed?surl=lh7QY8Gc4OAGmOLPMwB-Nw&resolution=720",
        "https://terabox.com/sharing/embed?surl=jQ4In1fs2HLgEH_XgST5jw&resolution=720",
        "https://terabox.com/sharing/embed?surl=gL3vWDn8jaBOwsWZBhih9w&resolution=720",
        "https://terabox.com/sharing/embed?surl=1lgeeWv8x3Rs6J0ajrFyWw&resolution=720",
        "https://terabox.com/sharing/embed?surl=YFzWjPzJ898j1ZU2POVgHQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=R9MKdxbtVnzD4rm1X5VO9A&resolution=720",
        "https://terabox.com/sharing/embed?surl=Qjx6A0aOGzcvrIsweshD6Q&resolution=720",
        "https://terabox.com/sharing/embed?surl=rxIXaE1G42anQmt7qdXMyQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=v8SzrmneUNcWAMmZbnxqKw&resolution=720",
        "https://terabox.com/sharing/embed?surl=ZtjenN5YHgNjs2MIsPjs7g&resolution=720",
        "https://terabox.com/sharing/embed?surl=IXeA2DrmHa7kmfxJdL7a2g&resolution=720",
        "https://terabox.com/sharing/embed?surl=sYxF0OgU5zARkZqTKwPLrA&resolution=720",
        "https://terabox.com/sharing/embed?surl=1l1r33N3opKK3a_ee39ACQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=MbVFY3S3Scy5K11gkx6vgg&resolution=720",
        "https://terabox.com/sharing/embed?surl=WOV65T3le7LWcEs-dKcryA&resolution=720",
        "https://terabox.com/sharing/embed?surl=It6k99b0i1xbB6xmmPrgAg&resolution=720",
        "https://terabox.com/sharing/embed?surl=KR20NX-x6BD33q7xwXifJw&resolution=720",
        "https://terabox.com/sharing/embed?surl=hNR7mh9Q1syAZB7zqxoAAQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=31u9DIwpH1HNV8mRdk3yDw&resolution=720",
        "https://terabox.com/sharing/embed?surl=NVnWEAU-GLtrTWXKtCrLmA&resolution=720",
        "https://terabox.com/sharing/embed?surl=tg1_TirknLCu1GE0CyikqA&resolution=720",
        "https://terabox.com/sharing/embed?surl=TpnL5tGSII27AmzvHccRLA&resolution=720",
        "https://terabox.com/sharing/embed?surl=4qU_ZkG0ijUgaec7AhJpPg&resolution=720",
        "https://terabox.com/sharing/embed?surl=Q6dVMgAltR9izBn6L1AeWg&resolution=720",
        "https://terabox.com/sharing/embed?surl=fMMFTdDm0cauHQo6f0Vcqw&resolution=720",
        "https://terabox.com/sharing/embed?surl=L-wCfT9pkiBDWN4_hiPhMw&resolution=720",
        "https://terabox.com/sharing/embed?surl=S_cvaXpcuXjqFuxyFHfC5Q&resolution=720",
        "https://terabox.com/sharing/embed?surl=JHw1gMrnsMSMdJe9T9GY2w&resolution=720",
        "https://terabox.com/sharing/embed?surl=Cx6V3QwtFbMuWOwy53y0mA&resolution=720",
        "https://terabox.com/sharing/embed?surl=Njw3H_DUdy5HZf7X-Lh00g&resolution=720",
        "https://terabox.com/sharing/embed?surl=tM1bTBJwd4mBKMY2yHbtSA&resolution=720",
        "https://terabox.com/sharing/embed?surl=6AOfsm6h52F7L3cG8zA0cw&resolution=720",
        "https://terabox.com/sharing/embed?surl=W5JMGGk1j-sCgAYi5czU9w&resolution=720",
        "https://terabox.com/sharing/embed?surl=0Z7LjJwVopDFUke4aK40HQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=lFkWmNJAN5w3AxS54bYNAQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=0zLVACYL5UhSIW2H9XkUTg&resolution=720",
        "https://terabox.com/sharing/embed?surl=b7sedjJ_SpbV_7K7uZfnMg&resolution=720",
        "https://terabox.com/sharing/embed?surl=QPlNLY_hdERPtZO8JdHsyw&resolution=720",
        "https://terabox.com/sharing/embed?surl=1gJh8_ZnXJBWjYWoyhxzMQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=4pJWDhwLOGR159FAFxXWTg&resolution=720",
        "https://terabox.com/sharing/embed?surl=6vG4RNaFJE7C0VFR9ZJRZQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=vHj8iKCbn9jBtgRYvbBCLQ&resolution=720",
        "https://terabox.com/sharing/embed?surl=8VuhL5kj4FD4hkTC5_mYsA&resolution=720",
        "https://terabox.com/sharing/embed?surl=8VuhL5kj4FD4hkTC5_mYsA&resolution=720",
        "https://terabox.com/sharing/embed?surl=zaJzwCDwFJhpy-JccjtvOw&resolution=720",
        "https://terabox.com/sharing/embed?surl=2HBO5DVu7RMT6vWSHQWAcw&resolution=720",
        "https://terabox.com/sharing/embed?surl=_EGOzSACJlSKXQA20nOcXQ&resolution=720",
    ],

    [ //arco 2
    "https://terabox.com/sharing/embed?surl=azV4zO2wjd9YbvtHPinTRA&resolution=720",
    "https://terabox.com/sharing/embed?surl=zWaHwT_vTVcddPUzrONb1A&resolution=720",
    "https://terabox.com/sharing/embed?surl=CeQaLnptx4kw1E5fsoKpAg&resolution=720",
    "https://terabox.com/sharing/embed?surl=fJjB2ADmf5CComXhRDzYLA&resolution=720",
    "https://terabox.com/sharing/embed?surl=YSGDoPZfHbsadVh8lf8pOQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=olVZu0hdK3qUxMGXyRZZGA&resolution=720",
    "https://terabox.com/sharing/embed?surl=czI1XxkEkIQB_-rwmfJPbA&resolution=720",
    "https://terabox.com/sharing/embed?surl=myV7C-RNwjw1ivZWjNHKmA&resolution=720",
    "https://terabox.com/sharing/embed?surl=Kjv-1qFZBOEhhcLyMOrI4A&resolution=720",
    "https://terabox.com/sharing/embed?surl=kJEnn8zKNldmuREiJyRjhw&resolution=720",
    "https://terabox.com/sharing/embed?surl=bOhMVFp4ez-Vgt-9RLawHg&resolution=720",
    "https://terabox.com/sharing/embed?surl=2yS--fqRr5SQT764MD_IjA&resolution=720",
    "https://terabox.com/sharing/embed?surl=dy2Fnd69-qSPKx2SeROxlg&resolution=720",
    "https://terabox.com/sharing/embed?surl=OiGU4u74zqHYDZJvL5t4nw&resolution=720",
    "https://terabox.com/sharing/embed?surl=9y4aq3w4EWJSvcLepIMTdA&resolution=720",
    "https://terabox.com/sharing/embed?surl=lo4qm6lqLErRb7Rz9KefaQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=9iBlPxaPn-iyaAs0meez8Q&resolution=720",
    "https://terabox.com/sharing/embed?surl=GNPEObcAeuCn4PifehjbaA&resolution=720",
    "https://terabox.com/sharing/embed?surl=L05qTJWHi2rAHJHFPOalnw&resolution=720",
    "https://terabox.com/sharing/embed?surl=mhi3g-cfX2E3uQAm7kCIPg&resolution=720",
    "https://terabox.com/sharing/embed?surl=Ku61HTKP36z3-ObUXvvJrA&resolution=720",
    "https://terabox.com/sharing/embed?surl=x0FPrJD6xU_0Jrzbhm683A&resolution=720",
    "https://terabox.com/sharing/embed?surl=BHJcAKOGAOTQUtys_hvOZw&resolution=720",
    "https://terabox.com/sharing/embed?surl=ggpqa8B84A5OAdbwTrHFYg&resolution=720",
    "https://terabox.com/sharing/embed?surl=1FMh3aCq481H11NPuVGong&resolution=720",
    "https://terabox.com/sharing/embed?surl=E9_C2AEQ-LrjNH8BPBPMsw&resolution=720",
    "https://terabox.com/sharing/embed?surl=_7lXushvlrobx5SwEtKaaA&resolution=720",
    "https://terabox.com/sharing/embed?surl=4NTWioR-zLVoKUHcudR0yg&resolution=720",
    "https://terabox.com/sharing/embed?surl=Z_j3pLOqDcSaYj9yHZ6YKg&resolution=720",
    "https://terabox.com/sharing/embed?surl=A8oxi51ijMdqhPd-vfeHlA&resolution=720",
    "https://terabox.com/sharing/embed?surl=KgfJz1TGIBp37Uji20glKA&resolution=720",
    "https://terabox.com/sharing/embed?surl=TGulT_w6_r8Gsdl3nEzfHQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=SjJfVWMtSS3deArDwd_WWA&resolution=720",
    "https://terabox.com/sharing/embed?surl=GHDgtU36MqCt4FD4M9AKjQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=y7nGtTHaQth3MfDOkSrvKA&resolution=720",
    "https://terabox.com/sharing/embed?surl=d_UEzFXbMwkDGi5p0biWaA&resolution=720",
    "https://terabox.com/sharing/embed?surl=fVNimuTktCmB20F_ZJwH8A&resolution=720",
    "https://terabox.com/sharing/embed?surl=e_u3uIg3CEeFge82gzt_CA&resolution=720",
    "https://terabox.com/sharing/embed?surl=mHIRczS4gJVFUOfiUw7Wsg&resolution=720",
    "https://terabox.com/sharing/embed?surl=8Ulz8ieMNDZQpnMFDGP9dA&resolution=720",
    "https://terabox.com/sharing/embed?surl=27U3-C9M4JugDrA4iY1kYg&resolution=720",
    "https://terabox.com/sharing/embed?surl=IqlYtzEFtRgNI2tpt9hI3w&resolution=720",
    "https://terabox.com/sharing/embed?surl=lNFPA8rCaXhGsMcJkX_vxg&resolution=720",
    "https://terabox.com/sharing/embed?surl=ktbjV0oS8aFt-S_dLblolQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=jNoA8isyb2ty0j_ewijPew&resolution=720",
    "https://terabox.com/sharing/embed?surl=qPrP8GosoMUvHrhGKQTwRg&resolution=720",
    "https://terabox.com/sharing/embed?surl=Ds-lMjbJIG1PUk5bwnnROA&resolution=720",
    "https://terabox.com/sharing/embed?surl=nZPyv2AEddpttkhma3ImxA&resolution=720",
    "https://terabox.com/sharing/embed?surl=35hygEhQ8x7_GL6ZEMFmyQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=v4-WK-NvorYXR5O0286qbg&resolution=720",
    "https://terabox.com/sharing/embed?surl=PKf83fL-kEhy9eSMeGapAQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=Vdqny0ABCSZChZCD4lJaTA&resolution=720",
    "https://terabox.com/sharing/embed?surl=XaFyxzd9Cpufy0t8ARgxYg&resolution=720",
    "https://terabox.com/sharing/embed?surl=T1jaUbs2gKAz8j6naBSVbA&resolution=720",
    "https://terabox.com/sharing/embed?surl=HHO0qtmYsrBhnbeevwyeNA&resolution=720",
    "https://terabox.com/sharing/embed?surl=y971KF8chJwvrrYebC5qZg&resolution=720",
    "https://terabox.com/sharing/embed?surl=RJbOSrMGGPrePaXq11ZpvQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=Wm9W4jZqTx0F8qR829xBNw&resolution=720",
    "https://terabox.com/sharing/embed?surl=uabnRKmg6HVidJ5QkHe73g&resolution=720",
    "https://terabox.com/sharing/embed?surl=5kfUJBpQj_weOFNj1p6raA&resolution=720",
    "https://terabox.com/sharing/embed?surl=vyesQImEIpAVZHvl7z8DNA&resolution=720",
    "https://terabox.com/sharing/embed?surl=OsBG56G-eJfxeplx3mhclg&resolution=720",
    "https://terabox.com/sharing/embed?surl=j2mbjwjhl4bGbokyhfbmjw&resolution=720",
    "https://terabox.com/sharing/embed?surl=TPQYIj4zgpw-2ufwh6eQJw&resolution=720",
    "https://terabox.com/sharing/embed?surl=z0GHD8aRogqRTA6ti4JjTQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=3sFFm5gATKSgR991QVqLPA&resolution=720",
    "https://terabox.com/sharing/embed?surl=7nv9uOUsqBWNDILuy_3KaQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=Zm9OaBnBCmvOMNYe8u5VxQ&resolution=720",
    "https://terabox.com/sharing/embed?surl=c6Z3SVhOBmBt1qvwoouFvw&resolution=720",
    "https://terabox.com/sharing/embed?surl=OVcruRy6AeNqQzae8zuLDA&resolution=720",
    "https://terabox.com/sharing/embed?surl=oIeMBBRxOfiCR_W3yNulvg&resolution=720",
    "https://terabox.com/sharing/embed?surl=NXanwJhLL9fxZO2mYyHH8Q&resolution=720",
    "https://terabox.com/sharing/embed?surl=AaFcaelew46UlqAhOPCgSg&resolution=720",
    "https://terabox.com/sharing/embed?surl=fOgPgwm7w8sdpyG0S_5_9w&resolution=720",
]

]);

let KimetsuNoYaiba = new serie("Kimetsu no Yaiba",
"Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su " +  
"familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente" + 
" de la masacre, ha sufrido una transformación en demonio.\n\n"+

"Destrozado por los acontecimientos Tanjiro decide convertirse en un cazador de demonios para poder devolver a su" + 
" hermana a la normalidad y matar al demonio que masacró a su familia.",
"./assets/imgs/Kimetsu-No-Yaiba/Kimetsu-No-Yaiba-poster.webp",
[
    [   // Temporada 1
"https://mega.nz/embed/RyVQQIaK#2Q337aeQobM-FfoKdLOW6b59NqoWGQrpHiAR6D5HeIY",
"https://mega.nz/embed/8z1AzTZJ#a8W5X4ffBLzdpXaQ_A3J-GMQ5bDO0hR9N5R_Lm1K6DE",
"https://mega.nz/embed/BydwxLTA#3dxoeRIthGPVtnodl7gIAWrwSxi23U3IX4ju4MM-E6I",
"https://mega.nz/embed/lyFAFZgA#d73ReEXbqYL9RALQo7AVWIFlbEHuZp_z9KSuMaX2ZbE",
"https://mega.nz/embed/JmV0EATJ#8jT4AR--Ov8UAgg7opZLz-nqCs7jeA_ppfGGmUeDPFM",
"https://mega.nz/embed/susXAILS#fe94CexL7s4wnfLDsvBfO-KrfYPwbk7UrIJXi2CA9zI",
"https://mega.nz/embed/Vn9HGaQY#qOH8JMsCDHOUaBfYB-aPSsTWh55NtXlgn03WMm5YC50",
"https://mega.nz/embed/B2Ni0BpR#MlWDO3DIRQgvECjytq9l6Gys2TsJMhNgQYOVtW_dweU",
"https://mega.nz/embed/kuFwzYYS#8aXt9mb-mTgbrVNsPIqlbxGz3v5wRpwc3r7JvGmy3Dw",
"https://mega.nz/embed/9nkVVSDB#csjMWKwzsExSoBnyj1JFPLpIwcBOe2BDs3X8Z2PVM0E",
"https://mega.nz/embed/EmckUTgQ#7ElgMse4AeZrSoFowNDy6HGYh0fWFabDY1SHbwUjGf4",
"https://mega.nz/embed/giMFiTwY#eI1PbylyaKMaRHx-uGr1Cb16Bq91btn890sVvyPksyg",
"https://mega.nz/embed/9q9zxAiI#0gZnWvh10q_FX9JakaCelkKypVCJd403s7ApFTMEdX4",
"https://mega.nz/embed/dmNXEK5J#nFyk7YC0RkakNhffuq1AqlBsBn9B1Fuj9kJ4-LUTzIk",
"https://mega.nz/embed/VmlyzCRD#J5K21IbvlUfg1KAF9R_NnF0Vr8CgerLpa9CZ740sVpk",
"https://mega.nz/embed/xiFhlBoS#xP7uQwJztMger5-wgDLfkqruoQ1_IGZs1ukew42-LIk",
"https://mega.nz/embed/F70BxaDI#5j4Pyp0c22Vdo8lcqWO0ziMxU928NfJKcGhV0wuWrVI",
"https://mega.nz/embed/dm0QhQQK#f66OP6Yqi4UWfKtHDkzeJjZ6YpuM-01E02tKcTFgsnA",
"https://mega.nz/embed/IqEiUYyL#bdlC9LEDf8M5DH31usCtpzsHMdj9zsUyAWhm4qP2jRM",
"https://mega.nz/embed/g6dBUCCC#h8-yfFrRPOB-NWUJoUz2zs1tpJSEmDCdCLH0YZFAjAE",
"https://mega.nz/embed/Br0mGByQ#rRR5z98TWztbVQ2hLz3cFZR3_OdUg9g6groAHFaQvZI",
"https://mega.nz/embed/xyFQHaIR#axkUgQzikqJhhpND4rm_CFBYPowIdsuUT4x_DrGuQ9Y",
"https://mega.nz/embed/FyNk1JwC#lth9HLYyrd73xSx7OgcGvA_GYs6eJiqYTDcPRahzYuY",
"https://mega.nz/embed/E6MW2ZqZ#cFWlZR27l5pbozMjv8WnEjjXDaQdXmECeRdf5azp0y4",
"https://mega.nz/embed/h70GDILb#X6uy1bhcHJBsu1isG6t_MVEL5LswsM8E4_wQ8eamTY0",
"https://mega.nz/embed/R2EBwJBZ#RvVFpXVNzm7A7BKfqKuhZWjlVXM3VIryMbSJSZqk0iY"
    ],
    
    [    // Temporada 2 - Latino
 "https://mega.nz/embed/oPETgb5Z#ft1ZLu4ygyhQLuMLWZhvPEKRlYydfeL0jalLuJ0kmho",
 "https://mega.nz/embed/FCdjhIYa#EBb9HK8aQ6eufCyOYMfEmcCiQyquOjj9FTsLoI-lZ58",
 "https://mega.nz/embed/MTs0hb6Q#NzYL4GcsmYUvydQ6QjP9OwNJU0SHwzCkBIkJ-nx9qAk",
 "https://mega.nz/embed/AXtjSLjR#cOYyVKTenKIJ_WTbyhNY2mXAASZRezRgjxvsjsDrwcI",
 "https://mega.nz/embed/VPFhxS7I#H5H1uwef-gcO7Ka7RUr1GjfWxZo2A5ZUchgfc5zXhug",
 "https://mega.nz/embed/VfMlwYpZ#rQRLtipH8BMYESjiiyNUySf4DQ4CgvbLwIX5KxGUMJE",
 "https://mega.nz/embed/VfN11AoI#N3rDefO6EAJhJyouZQFACm5WJzwFVoUWyaTvm4_esHM",
 "https://mega.nz/embed/RLMEzKQK#U5o1Vg-Q53mEHmdnalJjW-yDrFiPR-zLbJjl4FDf_cE",
 "https://mega.nz/embed/VH0DRLrT#dQXKNcQqM_F_V3WQp-RdkpOUzgIDxGmKCsCjluoUy0Y",
 "https://mega.nz/embed/gCVwDSDJ#7LCO8dRPHu4BXAcznTbsjrr94DMo2GGdheHI0LS8rIc",
 "https://mega.nz/embed/lOUhHDAD#3SvaxEVMM1B_ehZwyHTqDRw24teDqoDtcI7cxb20Aaw" 
    ],
    [    // Temporada 3
 "https://mega.nz/embed/gPVklSgZ#utS0Od1lRKyMIWhtJqld-aTztlhr2EPKTsvSbqREln0",
 "https://mega.nz/embed/8WsnSJJA#9lK91Da8mlWS9wgt99SAsXhayR9gt6QWT2IpAen2QcQ",
 "https://mega.nz/embed/pKMCXbIa#NmcnQNdE2ZdApR6eTzFofpHKO-YTno3x9KXzUIifMGI",
 "https://mega.nz/embed/dDllAKyB#Jdmxls9D5sujlmC1ITUsLty3NCZ4uN9vwpEM9jj_-0E",
 "https://mega.nz/embed/YGN0EK6D#apuGekze3AA8QqWvJug8juANE-fwGcIwKUAKwbj4i2U",
 "https://mega.nz/embed/BK12xAzJ#Z5vhDgjpGLs9CDo6k7Vtgx64COKoSEPQd0W9TWX7D0c",
 "https://mega.nz/embed/4LdXzAQb#nLJA1ZDN23XeU1mPmpja3xP27LlS_fU_VAe94y338nw",
 "https://mega.nz/embed/tWUj3AaI#9DxhCDUNTuY26P5Fdb9PEpSdp8fSEDnZTxUma2TH4S0",
 "https://mega.nz/embed/1PNyDTRS#-5W9LUsRWzJhaM6y30d-g5f2bqc9QGGmmiFd5JaPE94",
 "https://mega.nz/embed/4eElzBQJ#5iQDInJPCifCoGMWb1LGStCa_pBHxngD5e7HchLyKXk",
 "https://mega.nz/embed/0Pl0UZzD#9A9BreqFRLSgy7zhJO4m1dbiIgWY1ReLbjTRq2AH81U"
    ]
])

seriesContainer.push(YoujoSenki,KenjaNoMago,Overlord,LogHorizon,Castlevania, HellsParadise,TheEminenceInShadows, OnePiece,KimetsuNoYaiba)
