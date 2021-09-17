import { DIVISION, EpisodeWinners } from "/data.mjs"

const levels = [...DIVISION.juniors, ...DIVISION.seniors]
const tbody = document.querySelector("tbody")

EpisodeWinners.forEach((episodeWinners, episodeNumber) => {

    const tr = document.createElement("tr")
    const td = document.createElement("td")
    td.textContent = EpisodeWinners.length - episodeNumber
    tr.appendChild(td)

    levels.forEach(level => {
        const td = document.createElement("td")
        const a = document.createElement("a")
        a.textContent = episodeWinners[level] ? episodeWinners[level].username : ""
        a.href = episodeWinners[level] ? episodeWinners[level].profile : ""
        td.appendChild(a)
        tr.appendChild(td)
    })
    
    tbody.appendChild(tr)
})

