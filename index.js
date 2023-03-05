const arr = [
    {
        signal: 1,
        startTime: "03:00",
        endTime: "03:05",
        shift: 1

    },
    {
        signal: 0,
        startTime: "03:05",
        endTime: "03:10",
        shift: 1
    },
    {
        signal: 0,
        startTime: "03:10",
        endTime: "03:15",
        shift: 1
    },
    {
        signal: 1,
        startTime: "03:15",
        endTime: "03:20",
        shift: 1
    },
    {
        signal: 1,
        startTime: "03:20",
        endTime: "03:25",
        shift: 2
    },
    {
        signal: 1,
        startTime: "03:25",
        endTime: "03:30",
        shift: 2
    },
    {
        signal: 0,
        startTime: "03:30",
        endTime: "03:35",
        shift: 2
    },
    {
        signal: 1,
        startTime: "03:35",
        endTime: "03:40",
        shift: 2
    }
]



const renderDiv = (signal, msg, shift) => {
    if (shift == 1) {
        const parent = document.getElementById('area1');
        const child = document.createElement('div')
        const grandChild = document.createElement('div');
        grandChild.setAttribute("class", "grandChild");
        grandChild.innerText = msg;
        child.appendChild(grandChild);
        const classname = signal ? "green" : "red";
        child.setAttribute("class", classname);
        parent.appendChild(child);
    } else {
        const parent = document.getElementById('area2');
        const child = document.createElement('div')
        const grandChild = document.createElement('div');
        grandChild.setAttribute("class", "grandChild");
        grandChild.innerText = msg;
        child.appendChild(grandChild);
        const classname = signal ? "green" : "red";
        child.setAttribute("class", classname);
        parent.appendChild(child);
    }
}

arr.map((elm) => {
    console.log(elm);
    renderDiv(elm.signal, `${elm.startTime}   ${elm.endTime}`, elm.shift);
})

