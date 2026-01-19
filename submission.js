const tbody = document.getElementById("tbody")
    const dataSurvey = JSON.parse(localStorage.getItem("hasilSurvey")) || []

    dataSurvey.forEach((item, index) => {
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.textContent = `${index + 1}`
        const td2 = document.createElement("td")
        td2.textContent = `${item.name}`
        const td3 = document.createElement("td")
        td3.textContent = `${item.age}`
        const td4 = document.createElement("td")
        td4.textContent = `${item.gender}`
        const td5 = document.createElement("td")
        td5.textContent = `${item.smoker}`
        const td6 = document.createElement("td")
        td6.textContent = `${item.rokok}`

        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.appendChild(tr)
    })