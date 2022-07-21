<script>
  import Swal from "sweetalert2";
  import HeadOfMainBody from "./HeadOfMainBody.svelte";
  import H1 from "./H1.svelte";
  import FlashCards from "./FlashCards.svelte";
  import Footer from "./Footer.svelte";
  import FirstPartOfText from "./FirstPartOfText.svelte";
  import SecondSectionOfText from "./SecondSectionOfText.svelte";
  import CuteCat from "./CuteCat.svelte";
  import ThirdPartOfText from "./ThirdPartOfText.svelte";
  //For button popup handling!
  function handleClick() {
    Swal.fire({
      title: "<strong>My Contacts</strong>",
      background: "#F0EBE3",
      icon: "info",
      html:
        '<a href="https://github.com/HamidRezaKhoram">GitHub</a> ' +
        '<a href="https://www.instagram.com/hamid.khoram.8/">IG</a> ' +
        '<a href="https://www.linkedin.com/in/hamidreza-khoramrokh-239786219/">LikdedIn</a> ' +
        '<a href="mailto:hamidrezakhoramrokh@gmail.com">Mail</a> ' +
        '<a href="https://twitter.com/hrkh1380">Twitter</a> ',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  }
</script>

<html lang="eng">
  <style lang="scss">
    :root {
      --black: #404040;
      --white: #fff;
      --gray: rgba(64, 64, 64, 0.15);

      --font-courgett: "Courgette", cursive;
      --font-open-sans: "Open Sans", sans-serif;

      --font-light: 300;
    }

    @function rem($pixel) {
      @return $pixel / 16 + rem;
    }

    %list-reset {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: var(--white);
      color: var(--black);
      font-family: var(--font-open-sans);
    }

    .o-page {
      max-width: 100%;
      overflow-x: hidden;
      width: 100%;
    }

    .o-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: rem(20);

      // background: black;
      // border-radius: 5px;
      // margin: 10px;
    }

    .o-main-section {
      margin: 0 auto;
      max-width: rem(600);
    }

    .c-logo {
      @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");
      font-family: "Roboto Slab", serif;
      font-size: rem(26);
      margin: 0;
    }

    .c-logo__link {
      color: #576f72;
      text-decoration: none;
    }

    // Main menu
    .c-main-menu {
      font-weight: 500;
    }

    .c-main-menu__list {
      @extend %list-reset;
      display: flex;
    }

    .c-main-menu__link {
      color: #576f72;
      display: inline-block;
      font-size: rem(14);
      letter-spacing: rem(4);
      margin: 0 rem(0);
      padding: rem(0);
      text-decoration: none;
      text-transform: uppercase;
    }

    // Heading
    .c-main-heading {
      max-width: rem(380);
      font-size: rem(30);
      font-weight: var(--font-light);
      letter-spacing: rem(3);
      margin: rem(60) 0;
      text-align: center;
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid orange; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: 0.15em; /* Adjust as needed */
      animation: blink-caret 1.5s step-end infinite;

      // text-transform: uppercase;
    }
    /* The typing effect */
    /*media things*/
    @media screen and (max-width: 400px) {
      .c-logo {
        margin-left: -0.7em;
        margin-top: -0.2em;
        font-size: rem(20);
      }
    }

    @media screen and (max-width: 500px) {
      .c-main-heading {
        max-width: rem(250);
        font-size: rem(20);
      }
      .c-main-menu__link {
        font-size: rem(13);
        margin: 0 rem(5);
        padding: rem(1);
        // margin-left: 2.5em;
        margin-right: 0.1em;
      }
      .c-logo {
        margin-left: -0.7em;
        margin-top: -0.2em;
        font-size: rem(25);
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: orange;
      }
    }

    // Articles
    .c-article__link {
      align-items: center;
      color: var(--black);
      display: flex;
      justify-content: space-between;
      margin: rem(30) 0;
      padding: rem(20);
      text-decoration: none;

      // * {
      //   pointer-events: none;
      // }
    }
    @media screen and (max-width: 500px) {
    }
    .c-article__heading {
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
      font-family: "Roboto", sans-serif;
      font-size: rem(15);
      margin: rem(5) 0;
      display: inline-block;
    }

    .c-article__content {
      line-height: 1.2;
      margin: rem(1) 0;
    }

    .c-article__img-wrapper {
      height: auto;
      width: 400px;

      margin-left: rem(10);
      // min-width: rem(80);
      // width: rem(180);
    }

    .c-article__img {
      border-radius: rem(10);
      display: block;
      height: 120%;
      filter: grayscale(0);
      object-fit: cover;
      transition: filter 0.3s ease-in;
      width: 100%;

      .c-article__link:hover & {
        filter: grayscale(0);
      }
    }

    //
    .c-author {
      color: black;
      margin: 10px 0;
      text-align: center;
    }

    .c-author__link {
      color: black;
      display: inline-block;
      position: relative;
      text-decoration: none;

      &::before,
      &::after {
        bottom: 0;
        content: "";
        height: 8px;
        left: 0;
        position: absolute;
        z-index: -1;
      }

      &::before {
        background-color: rgba(64, 64, 64, 0.5);
        width: 100%;
      }

      &::after {
        background-color: rgba(244, 177, 62, 1);
        transition: width 0.3s ease-in-out;
        width: 0;
        will-change: width;
      }

      &:hover::after {
        width: 100%;
      }
    }
  </style>

  <main id="page" class="o-page">
    <header class="o-header">
      <!-- menu -->
      <H1 />
      <nav class="c-main-menu" aria-labelledby="mainmenulabel">
        <ul class="c-main-menu__list">
          <li>
            <div class="c-main-menu__link selected" on:click={handleClick}>
              <!-- contact -->
              <FlashCards />
            </div>
          </li>
        </ul>
      </nav>
    </header>

    <section class="o-main-section">
      <!-- intro & terminal -->
      <HeadOfMainBody />

      <article class="c-article">
        <div class="c-article__link">
          <FirstPartOfText />
        </div>
      </article>

      <article class="c-article">
        <div class="c-article__link">
          <div>
            <header>
              <SecondSectionOfText />
            </header>
            <div class="c-article__content" />
          </div>
          <div class="c-article__img-wrapper">
            <CuteCat />
          </div>
        </div>
      </article>

      <article class="c-article">
        <div class="c-article__link">
          <ThirdPartOfText />
        </div>
      </article>
    </section>
  </main>

  <Footer />
</html>
