import AnchorJS from "anchor-js";

/** @ref: https://www.bryanbraun.com/anchorjs/ */
const anchors = new AnchorJS();

anchors.options = {
    placement: "left",
};

anchors.add();

document.addEventListener('DOMContentLoaded', function () {
    let contentsTable = document.getElementById('toc-container');

    let elements = document.querySelectorAll('#page-content > h2[id], #page-content > h3[id]');

    for (let child of elements) {
        let _element;

        _element = document.createElement('a');
        _element.appendChild(document.createTextNode(child.innerText));
        _element.classList.add('block', 'hover:text-ninja-blue', 'py-1', 'toc-link');

        if (child.nodeName === 'H3') {
            _element.classList.add('ml-4');
        }

        _element.href = child.querySelector('a').getAttribute('href');

        contentsTable.appendChild(_element);
    }

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         const id = entry.target.getAttribute('id');
    //         if (entry.intersectionRatio > 0) {
    //             document.querySelector(`a[href="#${id}"].toc-link`).classList.add('text-ninja-blue');
    //         } else {
    //             document.querySelector(`a[href="#${id}"].toc-link`).classList.remove('text-ninja-blue');
    //         }
    //     });
    // });

    // elements.forEach((section) => {
    //     observer.observe(section);
    // });

    document.querySelectorAll('a.toc-link').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();

            let headingPosition = document.querySelector(anchor.getAttribute('href'));

            window.scrollTo({
                top: headingPosition.getBoundingClientRect().top + window.pageYOffset - 100,
                behavior: 'smooth'
            });
        });
    });

}, false);
