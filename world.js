document.addEventListener("DOMContentLoaded",()=>{

    const lookup_button = document.getElementById("lookup")
    const country = document.getElementById("country")
    const results = document.getElementById("result")

    lookup_button.addEventListener("click", async()=>{
        const input = country.value
        const response = await fetch(`http://localhost/info2180-lab5/world.php?country=${input}`)
        const feedback = await response.text()
        results.innerHTML = feedback
    })
})