let index = 0;
const contents = [
    { title: "Complete Auth Flow 1", text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions." },
    { title: "Complete Auth Flow 2", text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions." },
    { title: "Complete Auth Flow 3", text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions." }
];

function update() {
    document.querySelector('.slider-content h3').innerText = contents[index].title;
    document.querySelector('.slider-content p').innerText = contents[index].text;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function next() {
    index = (index + 1) % contents.length;
    update();
}

function prev() {
    index = (index - 1 + contents.length) % contents.length;
    update();
}


setInterval(next, 4000);


update();