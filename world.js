document.addEventListener("DOMContentLoaded",()=>{

    const countrylookup_button = document.getElementById("countrylookup")
    const citylookup_button = document.getElementById("citylookup")
    const country = document.getElementById("country")
    const results = document.getElementById("result")

    countrylookup_button.addEventListener("click", async(event)=>{
        event.preventDefault()
        results.replaceChildren()
        const input = country.value
        const response = await fetch(`http://localhost/info2180-lab5/world.php?country=${input}`)
        const feedback = await response.text()
        results.innerHTML = feedback
    })

    citylookup_button.addEventListener("click", async(event)=>{
        event.preventDefault()
        results.replaceChildren()
        const input = country.value
        const response = await fetch(`http://localhost/info2180-lab5/world.php?country=${input}&cities=${true}`)
        const feedback = await response.text()
        results.innerHTML = feedback
    })
})