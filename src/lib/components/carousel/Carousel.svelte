<script>
</script>

<section id="slider" class="container slider h-70">
    <h2 class="slider-image">Proximos eventos</h2>
    <ul>
        <li>
            <h2>Page 1</h2>
        </li>
        <li>
            <h2>Page 2</h2>
        </li>
        <li>
            <h2>Page 3</h2>
        </li>
        <li>
            <h2>Page 4</h2>
        </li>
    </ul>
</section>

<style>
    .slider {
        width: 100%;
        height: 100%;
        border: solid 1px blue;
    }

    .slider-image {
        width: 100%;
        height: 100%;
        border: solid 1px blue;
    }

    ul {
        width: 100vw;
        height: 300px;
        padding: 20px;
        display: flex;
        gap: 4vw;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        anchor-name: --my-carousel;
        scroll-marker-group: after;
    }

    ul::scroll-button(*) {
        border: 0;
        font-size: 2rem;
        background: none;
        color: black;
        opacity: 0.7;
        cursor: pointer;
        position: absolute;
        position-anchor: --my-carousel;
    }

    ul::scroll-button(*):hover,
    ul::scroll-button(*):focus {
        opacity: 1;
    }

    ul::scroll-button(*):active {
        translate: 1px 1px;
    }

    ul::scroll-button(*):disabled {
        opacity: 0.2;
        cursor: unset;
    }

    ul::scroll-button(left) {
        content: "◄";
        right: calc(anchor(left) - 70px);
        bottom: calc(anchor(top) + 13px);
    }

    ul::scroll-button(right) {
        left: calc(anchor(right) - 70px);
        bottom: calc(anchor(top) + 13px);
        content: "►";
    }

    ul::scroll-marker-group {
        position: absolute;
        position-anchor: --my-carousel;
        top: calc(anchor(bottom) - 70px);
        justify-self: anchor-center;

        display: flex;
        justify-content: center;
        gap: 20px;
    }

    li::scroll-marker {
        content: "";
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: 2px solid black;
        border-radius: 50%;
    }

    li {
        list-style-type: none;
        background-color: #eeeeee;
        border: 1px solid #dddddd;
        padding: 20px;
        flex: 0 0 100%;
        scroll-snap-align: center;
    }

    li:nth-child(even) {
        background-color: cyan;
    }

    li::scroll-marker:target-current {
        background-color: black;
    }
</style>
