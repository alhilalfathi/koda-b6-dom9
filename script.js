
const form = document.getElementById("form")

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const gender = document.querySelector('input[name="gender"]:checked')?.value
    const smoker = document.querySelector('input[name="apakah-perokok"]:checked')?.value

    const rokok = []
    document.querySelectorAll('input[name="jenisRokok"]:checked').forEach(item => {
        rokok.push(item.nextElementSibling.textContent)
    })

    const dataBaru = {
        name,
        age,
        gender,
        smoker,
        rokok
    }

    
    let dataSurvey = JSON.parse(localStorage.getItem("hasilSurvey")) || []
    dataSurvey.push(dataBaru)

    localStorage.setItem("hasilSurvey", JSON.stringify(dataSurvey))

    window.location.href = "submission.html"
})
