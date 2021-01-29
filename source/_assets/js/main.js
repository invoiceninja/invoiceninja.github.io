import AnchorJS from "anchor-js";

/** @ref: https://www.bryanbraun.com/anchorjs/ */
const anchors = new AnchorJS();

anchors.options = {
    placement: "left",
};

anchors.add();

document.addEventListener('DOMContentLoaded', function () {
    let h2s = document.querySelectorAll('#page-content > h2');
    let contentsTable = document.getElementById('toc-container');

    h2s.forEach((h2) => {
        let _element = document.createElement('a');
        _element.appendChild(document.createTextNode(h2.innerText));
        _element.classList.add('block', 'hover:text-ninja-blue', 'py-1', 'toc-link');
        _element.href = h2.querySelector('a').getAttribute('href');

        contentsTable.appendChild(_element);
    });

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
