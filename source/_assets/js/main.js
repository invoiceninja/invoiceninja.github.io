import AnchorJS from "anchor-js";

/** @ref: https://www.bryanbraun.com/anchorjs/ */
const anchors = new AnchorJS();

anchors.options = {
    placement: "left",
};

anchors.add();

// Smooth scroll to the div.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
