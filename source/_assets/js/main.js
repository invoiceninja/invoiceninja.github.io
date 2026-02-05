import AnchorJS from "anchor-js";

/** @ref: https://www.bryanbraun.com/anchorjs/ */
const anchors = new AnchorJS();

anchors.options = {
    placement: "left",
};

anchors.add();

document.addEventListener('DOMContentLoaded', function () {
    // Add copy-to-clipboard buttons for code blocks
    document.querySelectorAll('#page-content pre').forEach(function (pre) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'code-block-copy';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        wrapper.appendChild(button);

        button.addEventListener('click', function () {
            const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
            navigator.clipboard.writeText(code).then(function () {
                button.textContent = 'Copied!';
                button.classList.add('code-block-copy-done');
                setTimeout(function () {
                    button.textContent = 'Copy';
                    button.classList.remove('code-block-copy-done');
                }, 2000);
            });
        });
    });

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
