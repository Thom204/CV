function tamper(jt, skills, exp) {
    const ctl = skills.split(", ");
    const ctexp = exp.split(", ");
    
    if (jt != "") {
        const jtc = document.createElement("p");
        jtc.innerHTML = `<p>Bucando un ${jt}</p>`;
        document.querySelector("header div").appendChild(jtc);
    }

    document.querySelectorAll(`#habilidades > .skill`).forEach( p => {
        if (ctl.length > 0) {
            const ne = document.createElement("span");
            ne.className = "skill";
            ne.innerHTML = `<p style = "">${p.innerHTML}</p><p class = "invisi">${ctl.pop()}</p>`;
            p.replaceWith(ne);
        }
    })

    document.querySelectorAll("#experiencia li").forEach( li => {
        console.log(li);
        if (ctexp.length > 0) {
            const ni = document.createElement("li");
            ni.innerHTML = `<p>${li.innerHTML}</p><p class = "invisi">${ctexp.pop()}</p>`;
            li.replaceWith(ni);
            console.log(li);
        }
    })
}


document.querySelectorAll("ul").forEach ( e => {e.style.listStyle = "disc";})


document.querySelectorAll(".nats").forEach(e => {
    e.style.backgroundImage = "none";
    console.log(e.innerHTML);
    if (e.innerHTML.startsWith("<a")) {
        const original = e.innerHTML;
        e.innerHTML = String(e.id) +": \t"+ original;
    }

})

const qstr = window.location.search;
const qparams = new URLSearchParams(qstr);

tamper(qparams.get("jt"), qparams.get("skkw"), qparams.get("expkw"));

