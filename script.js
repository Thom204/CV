const mode = "nTS_FRIENDLY"

if (mode == "ATS_FRIENDLY") {
    document.querySelectorAll("ul").forEach ( e => {e.style.listStyle = "disc";})


    document.querySelectorAll(".nats").forEach(e => {
        e.style.backgroundImage = "none";
        console.log(e.innerHTML);
        if (e.innerHTML.startsWith("<a")) {
            const original = e.innerHTML;
            e.innerHTML = String(e.id) +": \t"+ original;
        }

    })
}