<script>
  import Swal from "sweetalert2";
  import twitter from "/src/lib/twitter.png";
  import logo from "/src/lib/Swift.webp";
  import github from "/src/lib/github.png";
  import email from "/src/lib/email.png";
  import ig from "/src/lib/instagram.png";

  Swal.fire({
    title: "<strong>🚧{In development}🚧</strong>",
    background: "#F0EBE3",

    html: "<div> Please be kind to my newly born website :] </div> ",
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });

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

    %visually-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
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
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
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

    // Magic area
    .c-magic-area {
      position: absolute;
      z-index: -1;
    }

    .c-magic-area--menu {
      background-color: var(--gray);
      border-radius: rem(2);
    }

    .c-magic-area--content {
      background-color: var(--gray);
      border-radius: rem(2);

      &::before {
        background-color: var(--black);
        content: "";
        height: 70%;
        left: rem(-3);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: rem(6);
      }
    }

    // Author & FE30
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

    .c-fe30 {
      animation: fe30-anime 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 4s forwards;
      bottom: 0;
      display: none;
      opacity: 0;
      position: fixed;
      right: 0;

      .is-desktop & {
        display: block;
      }
    }

    .c-fe30__inner {
      background-color: #fff;
      border-radius: 7px;
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);
      color: #2d2f31;
      font-size: 14px;
      line-height: 1.45;
      margin: 10px;
      padding: 20px 20px 10px;
      transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1);
      transform-style: preserve-3d;
      width: 250px;
    }

    .c-fe30__photo {
      border: 3px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);
      display: block;
      height: 80px;
      position: absolute;
      top: -50px;
      left: 50%;
      overflow: hidden;
      transform: translateX(-50%) translateZ(26px);
      width: 80px;
    }

    .c-fe30__img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }

    .c-fe30__link {
      color: #ffbd48;
      display: inline-block;
      transform: translateZ(18px);

      &:hover {
        text-decoration: none;
      }
    }

    @keyframes fe30-anime {
      0% {
        opacity: 0;
        transform: translate(0, 100%);
      }

      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    /**
 * Utilities
 */

    .u-visually-hidden {
      @extend %visually-hidden;
    }
  </style>
  <div
    class="c-magic-area c-magic-area--menu"
    data-target-class=".c-main-menu__link"
    data-tween-back="true"
    aria-hidden="true"
  />
  <div
    class="c-magic-area c-magic-area--content"
    data-target-class=".c-article__link"
    data-tween-back="false"
    aria-hidden="true"
  />

  <main id="page" class="o-page">
    <header class="o-header">
      <style lang="less">
        .linear-wipe {
          text-align: center;

          background: linear-gradient(
            to right,
            #576f72 20%,
            #576f72 40%,
            black 60%,
            #576f72 80%
          );
          background-size: 200% auto;

          color: #a08d7b;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          animation: shine 3s linear infinite;
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        }
      </style>
      <h1 class="c-logo">
        <a class="c-logo__link linear-wipe" href="" target="_blank"
          >PORTFOLIO!</a
        >
      </h1>
      <style>
        .selected {
          background-color: transparent;
          -webkit-animation: vibrate-1 0.5s linear infinite both;
          animation: vibrate-1 0.5s linear infinite both;
        }
        @-webkit-keyframes vibrate- {
          0% {
            -webkit-transform: translate(0);
            transform: translate(0);
          }
          20% {
            -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
          }
          40% {
            -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
          }
          60% {
            -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
          }
          80% {
            -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
          }
          100% {
            -webkit-transform: translate(0);
            transform: translate(0);
          }
        }
      </style>
      <nav class="c-main-menu" aria-labelledby="mainmenulabel">
     
        <ul class="c-main-menu__list">
          <li>
            <style>
              .contact{
                display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 15px;
    padding-left: 15px;
              }
            </style>
            
            
          </li>
          <li>
            <a
              class="c-main-menu__link selected"
              href=""
              on:click={handleClick}
            >
              <div>
                <style lang="scss">
                  .content {
                    &__container {
                      
                      margin-top: 8px;
                      font-weight: 600;
                      overflow: hidden;
                      height: 40px;
                      padding: 0 40px;

                      &:before {
                        content: "";
                        left: 0;
                      }

                      &:after {
                        content: "";
                        position: absolute;
                        right: 0;
                      }

                      &:after,
                      &:before {
                        position: absolute;
                        top: 0;

                        color: #16a085;
                        font-size: 42px;
                        line-height: 40px;

                        -webkit-animation-name: opacity;
                        -webkit-animation-duration: 2s;
                        -webkit-animation-iteration-count: infinite;
                        animation-name: opacity;
                        animation-duration: 2s;
                        animation-iteration-count: infinite;
                      }

                      &__text1 {
                        display: inline;
                        float: right;
                        padding-right: 200px;
                        margin: 0;
                        font-size: 1em;
                        left: 0%;
                      }

                      &__list {
                        margin-top: 0;

                        padding-left: 60%;
                        text-align: right;
                        list-style: none;

                        -webkit-animation-name: change;
                        -webkit-animation-duration: 10s;
                        -webkit-animation-iteration-count: infinite;
                        animation-name: change;
                        animation-duration: 10s;
                        animation-iteration-count: infinite;

                        &__item {
                          text-decoration: underline;
                          line-height: 40px;
                          margin: 0;
                        }
                      }
                    }
                  }
                  @media screen and (max-width: 400px) {
                    .content__container__list {
                      padding-left: 60px;
                    }
                  }
                  @media screen and (max-width: 500px) {
                    .content__container__list {
                      padding-left: 165px;
                    }
                  }
                  @media screen and (max-width: 450px) {
                    .content__container__list {
                      padding-left: 80%;
                    }
                  }
                  @-webkit-keyframes opacity {
                    0%,
                    100% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @-webkit-keyframes change {
                    0%,
                    12.66%,
                    100% {
                      transform: translate3d(0, 0, 0);
                    }
                    16.66%,
                    29.32% {
                      transform: translate3d(0, -25%, 0);
                    }
                    33.32%,
                    45.98% {
                      transform: translate3d(0, -50%, 0);
                    }
                    49.98%,
                    62.64% {
                      transform: translate3d(0, -75%, 0);
                    }
                    66.64%,
                    79.3% {
                      transform: translate3d(0, -50%, 0);
                    }
                    83.3%,
                    95.96% {
                      transform: translate3d(0, -25%, 0);
                    }
                  }

                  @-o-keyframes opacity {
                    0%,
                    100% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @-o-keyframes change {
                    0%,
                    12.66%,
                    100% {
                      transform: translate3d(0, 0, 0);
                    }
                    16.66%,
                    29.32% {
                      transform: translate3d(0, -25%, 0);
                    }
                    33.32%,
                    45.98% {
                      transform: translate3d(0, -50%, 0);
                    }
                    49.98%,
                    62.64% {
                      transform: translate3d(0, -75%, 0);
                    }
                    66.64%,
                    79.3% {
                      transform: translate3d(0, -50%, 0);
                    }
                    83.3%,
                    95.96% {
                      transform: translate3d(0, -25%, 0);
                    }
                  }

                  @-moz-keyframes opacity {
                    0%,
                    100% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @-moz-keyframes change {
                    0%,
                    12.66%,
                    100% {
                      transform: translate3d(0, 0, 0);
                    }
                    16.66%,
                    29.32% {
                      transform: translate3d(0, -25%, 0);
                    }
                    33.32%,
                    45.98% {
                      transform: translate3d(0, -50%, 0);
                    }
                    49.98%,
                    62.64% {
                      transform: translate3d(0, -75%, 0);
                    }
                    66.64%,
                    79.3% {
                      transform: translate3d(0, -50%, 0);
                    }
                    83.3%,
                    95.96% {
                      transform: translate3d(0, -25%, 0);
                    }
                  }

                  @keyframes opacity {
                    0%,
                    100% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @keyframes change {
                    0%,
                    12.66%,
                    100% {
                      transform: translate3d(0, 0, 0);
                    }
                    16.66%,
                    29.32% {
                      transform: translate3d(0, -25%, 0);
                    }
                    33.32%,
                    45.98% {
                      transform: translate3d(0, -50%, 0);
                    }
                    49.98%,
                    62.64% {
                      transform: translate3d(0, -75%, 0);
                    }
                    66.64%,
                    79.3% {
                      transform: translate3d(0, -50%, 0);
                    }
                    83.3%,
                    95.96% {
                      transform: translate3d(0, -25%, 0);
                    }
                  }

                  // 6 is the number of animation.
                  // Here, there are 4 lines :

                  // 1 to 2
                  // 2 to 3
                  // 3 to 4
                  // 4 to 3
                  // 3 to 2
                  // 2 to 1

                  // 6x + 6y = 100 (100% duration)

                  // HERE :
                  // y = 4 -> Animation between two lines
                  // x = 12.66 -> Time spent on a line

                  // You can define a value and calculate the other if you want change speed or the number of lines
                </style>
                <div class="content">
                  <div class="content__container">
                    <!-- <p class="content__container__text1 text3">
                      I'm Hamid
                    </p> -->
                    <ul class="content__container__list">
                      <style>
                        .c-article__img-wrapper2 {
                          height: auto;
                          width: 30px;
                        }
                      </style>

                      <li class="content__container__list__item">
                        <img
                          class="c-article__img-wrapper2"
                          src={github}
                          alt=""
                        />
                      </li>
                      <li class="content__container__list__item">
                        <img
                          class="c-article__img-wrapper2"
                          src={twitter}
                          alt=""
                        />
                      </li>
                      <li class="content__container__list__item">
                        <img class="c-article__img-wrapper2" src={ig} alt="" />
                      </li>
                      <li class="content__container__list__item">
                        <img
                          class="c-article__img-wrapper2"
                          src={email}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div></a
            >
          </li>
        </ul>
      </nav>
    </header>

    <section class="o-main-section">
      <h2 class="c-main-heading"><strong>Hi there, I'm Hamid!</strong></h2>
      <style>
        .ontop {
          position: absolute;
        }
      </style>
      <div class="pad">
        <div class="fakeMenu">
          <div class="fakeButtons fakeClose" />
          <div class="fakeButtons fakeMinimize" />
          <div class="fakeButtons fakeZoom" />
        </div>
        <div class="fakeScreen">
          <p class="line1">
            &#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,<span class="cursor1"
              >_</span
            ><span />
          </p>
          <p class="line2">
            &nbsp;&nbsp;&ldquo;I'm a mobile developer.&rdquo;,<span
              class="cursor2">_</span
            >
          </p>
          <p class="line3">
            &nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span
              class="cursor3">_</span
            >
          </p>
          <p class="line4">><span class="cursor4">_</span></p>
        </div>
        <div />
      </div>

      <article class="c-article">
        <a class="c-article__link">
          <div>
            <style>
              .ryersonuni {
                background: #002d72;
                color: white;
                border: 3px solid #002d72;
                box-shadow: 10px 10px orange;
                border-radius: 5px;
                text-decoration: none;
              }
              .cs {
                background: #a41f35;
                color: white;
                border: 2px solid #a41f35;
                border-radius: 5px;
              }
            </style>
            <header>
              <h3 class="c-article__heading" id="about">
                A learning developer, in the middle of getting a <a class="cs"
                  >CS</a
                >
                degere at the university of
                <a class="ryersonuni" on:click={handleClick}>Ryerson/TMU</a>
              </h3>
            </header>
          </div>
          <div class="c-article__img-wrapper">
            <img class="c-article__img" src={logo} alt="" />
          </div>
        </a>
      </article>

      <article class="c-article">
        <a class="c-article__link">
          <div>
            <header>
              <style>
                @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
                .swift {
                  background: #9a9a9a;

                  border: 2px solid #9a9a9a;
                  border-radius: 5px;
                  font-family: "Roboto", sans-serif;
                  color: -webkit-linear-gradient(#eee, #ff6a32);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
                .js {
                  background: #f7e018;
                  color: #2d2f27;
                  border: 1px solid #f7e018;
                  border-radius: 5px;
                }
                .css {
                  background: -webkit-linear-gradient(#173459, #27a8e1);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
                .html {
                  background: -webkit-linear-gradient(#fc490b, black);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
                .background {
                }
                .linux {
                  background: black;
                  color: white;
                  border: 2px solid black;
                  border-radius: 5px;
                }
              </style>

              <h3 class="c-article__heading background">
                <a
                  >Experienced working with <a class="swift">Swift🐦</a>,
                  <a class="js">Js</a>, <a class="html">>HTML</a> /
                  <a class="css">CSS</a>
                  , <a class="linux">Linux🐧</a> & Backend.</a
                >
              </h3>
            </header>
            <div class="c-article__content" />
          </div>
          <div class="c-article__img-wrapper">
            <style lang="scss">
              $base-typing-speed: 300ms;
              $code-typing-animation-duration: 1200ms;

              .contentcat {
                position: relative;
              }

              .containercat {
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }

              .typing-animation {
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-duration: $code-typing-animation-duration;
              }

              @for $line from 1 through 9 {
                $fn-group: ceil($line / 3);
                path#f#{$fn-group}-l#{$line} {
                  animation-name: typing-f#{$fn-group}-l#{$line};
                }
              }

              @keyframes typing-f3-l9 {
                0% {
                  d: path("M8,25L8,25");
                }
                82% {
                  d: path("M8,25L8,25");
                }
                92% {
                  d: path("M8,25L96,25");
                }
                100% {
                  d: path("M8,25L96,25");
                }
              }

              @keyframes typing-f3-l8 {
                0% {
                  d: path("M8,13L8,13");
                }
                68% {
                  d: path("M8,13L8,13");
                }
                82% {
                  d: path("M8,13L146,13");
                }
                100% {
                  d: path("M8,13L146,13");
                }
              }

              @keyframes typing-f3-l7 {
                0% {
                  d: path("M0,1L0,1");
                }
                60% {
                  d: path("M0,1L0,1");
                }
                68% {
                  d: path("M0,1L96,1");
                }
                100% {
                  d: path("M0,1L96,1");
                }
              }

              @keyframes typing-f2-l6 {
                0% {
                  d: path("M8,25L8,25");
                }
                54% {
                  d: path("M8,25L8,25");
                }
                60% {
                  d: path("M8,25L69,25");
                }
                100% {
                  d: path("M8,25L69,25");
                }
              }

              @keyframes typing-f2-l5 {
                0% {
                  d: path("M8,13L8,13");
                }
                44% {
                  d: path("M8,13L8,13");
                }
                54% {
                  d: path("M8,13L114,13");
                }
                100% {
                  d: path("M8,13L114,13");
                }
              }

              @keyframes typing-f2-l4 {
                0% {
                  d: path("M0,1L0,1");
                }
                30% {
                  d: path("M0,1L0,1");
                }
                44% {
                  d: path("M0,1L136,1");
                }
                100% {
                  d: path("M0,1L136,1");
                }
              }

              @keyframes typing-f1-l3 {
                0% {
                  d: path("M8,25L8,25");
                }
                24% {
                  d: path("M8,25L8,25");
                }
                30% {
                  d: path("M8,25L61,25");
                }
                100% {
                  d: path("M8,25L61,25");
                }
              }

              @keyframes typing-f1-l2 {
                0% {
                  d: path("M8,13L8,13");
                }
                14% {
                  d: path("M8,13L8,13");
                }
                24% {
                  d: path("M8,13L124,13");
                }
                100% {
                  d: path("M8,13L124,13");
                }
              }

              @keyframes typing-f1-l1 {
                0% {
                  d: path("M0,1L0,1");
                }
                14% {
                  d: path("M0,1L160,1");
                }
                100% {
                  d: path("M0,1L160,1");
                }
              }

              #paw-right--up,
              #paw-right--down,
              #paw-left--up,
              #paw-left--down {
                animation: blink $base-typing-speed infinite;
              }

              #paw-right--up,
              #paw-left--down {
                animation-delay: $base-typing-speed/2;
              }

              @keyframes blink {
                0% {
                  opacity: 0;
                }
                49% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
              }

              #laptop__code {
                transform: rotateX(-37deg) rotateY(-46deg) rotateZ(-23deg)
                  translateX(8px) translateY(20px) translateZ(-50px);
              }
            </style>
            <template lang="pug">
              .content
              .container
                svg#bongo-cat(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', viewBox='0 0 787.3 433.8')
                  defs
                    symbol#eye(data-name='eye', viewBox='0 0 19.2 18.7')
                      circle(cx='9.4', cy='9.1', r='8')
                      path(d='M16.3,5.1a1.3,1.3,0,0,1-1.4-.3,7.2,7.2,0,0,0-4.5-2.6A7.2,7.2,0,0,0,5.5,3.5,6.8,6.8,0,0,0,2.8,7.8a6.8,6.8,0,0,0,1,4.8,6.2,6.2,0,0,0,4,2.7,6.1,6.1,0,0,0,4.6-.7,6.7,6.7,0,0,0,2.9-3.7,6.4,6.4,0,0,0-.5-4.5c-.1-.2.8-1,1.5-1.3s2.2,0,2.3.5a9.4,9.4,0,0,1-.2,7.2,9.4,9.4,0,0,1-5.1,5.1,9,9,0,0,1-7,.2A9.6,9.6,0,0,1,1,13.5,9.2,9.2,0,0,1,.4,6.6,8.9,8.9,0,0,1,4.6,1.3,9,9,0,0,1,11.2.2,9.3,9.3,0,0,1,16.7,4C16.9,4.3,17,4.8,16.3,5.1Z')
                    symbol#paw-pads(data-name='paw-pads', viewBox='0 0 31.4 33.9')
                      path(d='M6.8,16a3.7,3.7,0,0,1,1.1,2.8,3.2,3.2,0,0,1-1.6,2.6L5,21.8H4.4a2.8,2.8,0,0,1-1.8.3A4.2,4.2,0,0,1,.2,19.1,7.7,7.7,0,0,1,0,17.6a2.8,2.8,0,0,1,.6-2,3.2,3.2,0,0,1,2.1-.8H4A5,5,0,0,1,6.8,16Zm7.3-4.8a1.8,1.8,0,0,0,.7-.5l.7-.4a3.5,3.5,0,0,0,1.1-1,3.2,3.2,0,0,0,.3-1.4,1.4,1.4,0,0,0-.2-.6,3.4,3.4,0,0,0-.3-2.4,3.2,3.2,0,0,0-2.1-1.5H13.1a4.7,4.7,0,0,0-1.6.4,2,2,0,0,0-.9.9l-.4.6v.4a6.1,6.1,0,0,0-.5,1.2,4.3,4.3,0,0,0,0,1.6,3.5,3.5,0,0,0,.5,2l.7.6a3.3,3.3,0,0,0,1.7.7A3,3,0,0,0,14.1,11.2ZM22.7,7l.6.2h.3A2.3,2.3,0,0,0,25,6.8l.4-.3.6-.3a7.5,7.5,0,0,0,1.5-.9,4.2,4.2,0,0,0,.8-1.2,1.9,1.9,0,0,0,.1-1.5A2.6,2.6,0,0,0,27.5,1,3.5,3.5,0,0,0,23.6.3a3.8,3.8,0,0,0-2,1.5,4.8,4.8,0,0,0-.7,2,3.6,3.6,0,0,0,.9,2.6ZM31,24.1a13.5,13.5,0,0,0-2.2-4.7,36.6,36.6,0,0,0-3.2-3.9,5.3,5.3,0,0,0-5-1.9,10.5,10.5,0,0,0-4.5,2.2A5.6,5.6,0,0,0,13.5,20a15.1,15.1,0,0,0,1.2,6.3c.8,2,1.7,4,2.6,5.9a1.6,1.6,0,0,0,1.5.8,1.7,1.7,0,0,0,1.9.9,17.1,17.1,0,0,0,8.7-4.8,8.2,8.2,0,0,0,1.7-2C31.6,26.3,31.3,25,31,24.1Z', fill='#ef97b0')
                  g#head
                    g#head__outline
                      path(d='M303.2,186.3c4-7,14.8-20.2,20-26,17-19,34.6-34.9,43-41l12-8s16.6-32,21-33c9-2,33,22,33,22s20-9,79,7c41,11.1,47,14,57,22,7.5,6,18,16,18,16s33.7-19.5,41-15-2,66-2,66,5.9,12.9,11,22c9.1,16.2,13.6,20.2,19,31,3.6,7.2,8.4,28.5,10.5,43.5l-385-62Z', fill='#fff')
                      path(d='M302.9,186.9c-1.2,3-5.9,12.6-9,18.8l-12.5,25.5-.6-1.2c32.2,4.8,64.4,9.2,96.6,13.6s64.4,8.9,96.5,13.7,64.3,9.7,96.4,14.9,64.1,10.5,96.2,15.8l-5.6,5.5c-1.2-8.5-2.8-17.1-4.8-25.6-1-4.1-2.1-8.4-3.4-12.3l-.5-1.4-.5-1.4-.6-1.3-.7-1.3a59.5,59.5,0,0,0-3.1-5.5c-2.2-3.6-4.7-7.2-7.1-11s-4.8-7.6-7-11.5c-4.5-7.9-8.3-15.9-12.1-24a4,4,0,0,1-.3-2.6h0c1.4-9.1,2.7-18.2,3.7-27.4.5-4.5.9-9.1,1.2-13.7s.4-9.1.2-13.4a26.4,26.4,0,0,0-.8-6,8.1,8.1,0,0,0-.3-1.1c-.1-.3-.2-.4-.1-.3h.3c0,.1.1.1,0,.1h-.6a11.9,11.9,0,0,0-2.5.2,16.3,16.3,0,0,0-3,.7,56.7,56.7,0,0,0-6.2,2.1,212.6,212.6,0,0,0-24.5,11.9h-.1a3.9,3.9,0,0,1-4.7-.6c-4.9-4.7-10-9.4-15.1-13.8a86.6,86.6,0,0,0-7.9-6,46.1,46.1,0,0,0-8.5-4.6c-6-2.6-12.6-4.6-19.2-6.7l-19.8-5.7a324.9,324.9,0,0,0-40-8.9,196.8,196.8,0,0,0-20.2-1.8c-1.7,0-3.4-.1-5.1,0h-2.5l-2.5.2-2.5.2-2.4.4-2.4.5-1.1.3h-.5l-.4.2H433a2.5,2.5,0,0,1-2.6-.7c-4.6-4.6-9.5-9.1-14.5-13.2a82.7,82.7,0,0,0-7.9-5.7L403.9,81a10.8,10.8,0,0,0-4-.9c-.1,0-.3,0-.3.1h0l-.7.5-1.5,1.7c-1,1.2-2,2.6-2.9,3.9s-3.6,5.5-5.3,8.3c-3.5,5.7-6.8,11.4-9.9,17.3h0l-.4.4-10.2,6.6a53.6,53.6,0,0,0-4.9,3.4l-4.6,3.8c-6.2,5.1-12.1,10.6-17.9,16.2s-11.3,11.4-16.7,17.4c-2.7,3-5.3,6.1-7.8,9.2s-5,6.3-7.4,9.5c-4.2,5.6-7,10-5.7,7.1a34.1,34.1,0,0,1,2.1-3.8l3.8-5.6c2.9-4,6.3-8.3,8.5-10.9s4.4-5.2,6.7-7.7l6.9-7.4c4.7-4.9,9.4-9.7,14.3-14.3s9.8-9.3,15-13.7l4-3.2,4.2-2.9,8.3-5.7-.4.4c3-5.9,6.1-11.8,9.4-17.7,1.6-2.9,3.3-5.8,5.1-8.6l2.9-4.3,1.8-2a7.5,7.5,0,0,1,1.3-1.1c.1-.2.6-.4,1-.5l.9-.2h1.7l1.4.2,2.7.8c1.7.7,3.3,1.5,4.8,2.3a84,84,0,0,1,8.5,5.7A175.7,175.7,0,0,1,434,98.5l-2.9-.6.8-.3.7-.2L434,97l2.7-.7,2.7-.5a23,23,0,0,1,2.6-.3l2.7-.3,2.7-.2h5.3a182.1,182.1,0,0,1,21,1.3,332.5,332.5,0,0,1,41.1,8.4l20,5.5c6.7,2,13.4,4,20.1,6.7a65.3,65.3,0,0,1,9.8,5.1c3.1,2.1,5.9,4.3,8.6,6.5,5.4,4.5,10.6,9.2,15.7,14l-4.8-.6c4.1-2.4,8.2-4.6,12.4-6.7s8.6-4.2,13-6c2.3-.9,4.6-1.7,7-2.4a23.4,23.4,0,0,1,3.8-.9,20,20,0,0,1,4.4-.4h1.3l1.5.4a5.1,5.1,0,0,1,1.7.7l.9.7.8.7a8.3,8.3,0,0,1,1.6,2.6,12.7,12.7,0,0,1,.8,2.3,44.6,44.6,0,0,1,1.1,7.7c.2,5,.1,9.7-.1,14.4s-.7,9.5-1.2,14.1c-.9,9.4-2.1,18.6-3.6,27.9l-.3-2.6c3.7,7.9,7.5,15.8,11.8,23.3,2.1,3.7,4.4,7.4,6.8,11s4.9,7.2,7.3,11.1c1.3,2,2.4,4,3.5,6.1a10.9,10.9,0,0,0,.8,1.5l.8,1.8.7,1.7.6,1.7c1.5,4.4,2.6,8.7,3.7,13.1a262,262,0,0,1,5.2,26.4,4.9,4.9,0,0,1-4.1,5.6h-1.5c-32.1-5-64.2-9.9-96.3-15.1s-64.1-10.6-96.1-16.1-64-11.4-96-17.4-63.9-11.9-95.9-17.4h-.1a.8.8,0,0,1-.6-.9v-.2l16.6-32.1C299.8,192.2,304.1,183.9,302.9,186.9Z')
                    g#head__face
                      g#eyes
                        use(width='19.2', height='18.7', transform='translate(474.8 195.2)', xlink:href='#eye')
                        use(width='19.2', height='18.7', transform='matrix(-0.51, -0.85, 0.82, -0.5, 370.39, 192.59)', xlink:href='#eye')
                      g#mouth
                        path(d='M399.2,186.3c.9,3.6,2.6,7.8,6,9,6.4,2.3,19-6,19-6s4.1,12.4,10,15,10.7-1.7,16-6', fill='#fff')
                        path(d='M450.2,198.3c.6,1.2.2,1.9-.2,2.2a36.7,36.7,0,0,1-7.6,4.9,14.9,14.9,0,0,1-4.8,1.4h-1.4l-1.3-.2-1.4-.4-1.3-.6a21.6,21.6,0,0,1-6.4-7.2,52.8,52.8,0,0,1-4-8.3l3.8,1.3a62.3,62.3,0,0,1-7.1,4.1,32.1,32.1,0,0,1-7.9,2.8,13.2,13.2,0,0,1-4.9.2l-1.4-.3a7.5,7.5,0,0,1-1.3-.6,7.9,7.9,0,0,1-2.3-1.6,16.8,16.8,0,0,1-2.9-4,24.1,24.1,0,0,1-1.6-4.2c-.1-.5,1.6-1.3,3-1.4s3.5.2,3.6.6a10.3,10.3,0,0,0,2.6,4.9l.7.5h2.4l1.5-.2a28.4,28.4,0,0,0,6.5-2c2.1-1,4.3-2.1,6.3-3.3h.1a2.5,2.5,0,0,1,3.4.9l.3.5a43.1,43.1,0,0,0,3.2,7.7,19.8,19.8,0,0,0,2.2,3.4,8.1,8.1,0,0,0,2.6,2.6,5,5,0,0,0,3,.7,10.8,10.8,0,0,0,3.7-1,33.4,33.4,0,0,0,7.2-4.3C448.8,197.4,449.5,197.2,450.2,198.3Z')
                  g#table
                    path(d='M65.7,181.8l714,124c0,74-2,54-2,128l-673-161Z', fill='#fff')
                    path(d='M786.7,304.2c-2.7,1.2-10.8,0-16.1-.9L31.1,176.4c-5.2-.9-8.9-3.8-6.2-5s14.3-1.4,19.5-.5L777.1,300.6C782.3,301.6,789.4,303.1,786.7,304.2Z')
                  g#laptop
                    g#laptop__base
                      polygon(points='641.9 304.1 454.7 348.2 103.8 271.3 254.6 230.3 641.9 304.1', fill='#f2f2f2')
                      path(d='M641.9,304.1c1.5-.1-2.3,1.5-10.3,3.6-28.9,7.5-58.1,15.2-87.7,22.6s-59.1,14.5-88.4,21.3l-.8.2-.8-.2-349.5-78-1.1-.2-8.7-1.9,8.6-2.3,150.6-41.5.6-.2h.7c62.5,11.7,125.5,23.6,188.4,35.9s125.6,25.1,188,37.6c8,1.6,11.9,3,10.4,3a185.6,185.6,0,0,1-18.4-2.6c-61.9-11.2-123.6-22.2-185-33.5s-122.7-23.1-184.4-35h1.2L104.4,273.4h-.1v-4.3l351.2,75.7h-1.5c28.3-6.7,56.3-13.3,84.3-19.5s56.5-12,85.2-18.1C631.3,305.6,640.4,304.1,641.9,304.1Z', fill='#231f20')
                    g#laptop__keyboard
                      polygon(points='371.1 274.8 256.8 253.5 257 252.7 266.2 251.1 382.4 271.5 382.3 272.3 371.1 274.8', fill='#3e3e54')
                      polygon(points='237.4 265.6 221.3 262.4 221.4 261.7 230.2 260.2 246.8 262.6 246.6 263.4 237.4 265.6', fill='#3e3e54')
                      polygon(points='474.6 312.9 249.9 268.1 250.1 267.3 259.2 265.8 487.7 309.6 487.5 310.5 474.6 312.9', fill='#3e3e54')
                      polygon(points='411.8 309.4 204.2 266.7 204.4 266 212.9 264.5 423.9 306.3 423.7 307.2 411.8 309.4', fill='#3e3e54')
                      polygon(points='450 317.3 428.5 312.9 428.8 312 440.7 310.6 462.7 314.1 462.5 315 450 317.3', fill='#3e3e54')
                      polygon(points='201.6 273.9 187.5 270.9 187.7 270.2 196 268.7 210.4 271 210.3 271.7 201.6 273.9', fill='#3e3e54')
                      polygon(points='222.6 278.3 208.1 275.3 208.3 274.5 216.9 273.1 231.8 275.4 231.6 276.2 222.6 278.3', fill='#3e3e54')
                      polygon(points='362.9 308.1 231.5 280.2 231.7 279.5 240.7 278.1 374.2 305.1 374 305.9 362.9 308.1', fill='#3e3e54')
                      polygon(points='444.3 288.4 385.2 277.4 385.4 276.5 396.6 274.9 456.9 285.1 456.7 285.9 444.3 288.4', fill='#3e3e54')
                      polygon(points='526.1 303.6 460.1 291.3 460.3 290.4 472.8 288.9 540.1 300.2 539.9 301.1 526.1 303.6', fill='#3e3e54')
                      polygon(points='426.2 321.6 376.1 310.9 376.3 310.1 387.4 308.7 438.5 318.5 438.3 319.4 426.2 321.6', fill='#3e3e54')
                      g
                        polygon(points='410.6 286.5 399.1 288 398.9 288.8 499.9 308.3 513.3 305.9 513.5 305 410.6 286.5', fill='#3e3e54')
                        polygon(points='395.7 283.7 395.9 282.8 248.2 255.7 239.2 257.3 239 258 384.3 286 395.7 283.7', fill='#3e3e54')
                      polygon(points='371.3 273.9 256.9 252.7 266.4 250.3 382.4 271.5 371.3 273.9', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='237.6 264.9 221.4 261.7 230.4 259.4 246.8 262.6 237.6 264.9', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='474.8 312 250 267.3 259.4 265.1 487.7 309.6 474.8 312', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='412 308.5 204.4 266 213.1 263.8 423.9 306.3 412 308.5', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='450.2 316.4 428.8 312 440.9 309.7 462.8 314.1 450.2 316.4', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='201.7 273.1 187.7 270.2 196.2 268 210.4 271 201.7 273.1', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='222.8 277.6 208.3 274.5 217.1 272.4 231.8 275.4 222.8 277.6', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='363.1 307.3 231.7 279.5 240.9 277.3 374.2 305.1 363.1 307.3', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='444.6 287.5 385.4 276.5 396.8 274.1 456.9 285 444.6 287.5', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='526.3 302.7 460.3 290.4 473 288 540.1 300.2 526.3 302.7', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      polygon(points='426.4 320.7 376.3 310.1 387.6 307.9 438.5 318.5 426.4 320.7', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                      g
                        polygon(points='410.7 285.6 399.1 288 500.1 307.4 513.5 305 410.7 285.6', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                        polygon(points='395.9 282.8 248.4 255 239.2 257.3 384.5 285.2 395.9 282.8', stroke='#000', stroke-linecap='round', stroke-linejoin='round', stroke-width='1.2')
                    g#paw-right
                      g#paw-right--down
                        path(d='M293.2,191.3l10-7s-18.4,11.1-24,20-13,20.4-9,31c4.7,12.4,20.5,15.7,22,16,20,3.8,47.8-24.3,47.8-24.3s1.9-3.3,2.2-3.7', fill='#fff')
                        path(d='M342.1,223.4c.9,1.2.2,2.8-.3,3.7l-.4.7-.3.3a118.1,118.1,0,0,1-14.2,12.3,83.2,83.2,0,0,1-16.2,9.8,43.9,43.9,0,0,1-9.3,3,26.3,26.3,0,0,1-10.1.2,44.5,44.5,0,0,1-9.3-3.2,34.2,34.2,0,0,1-8.3-5.5,23,23,0,0,1-5.8-8.5,21.3,21.3,0,0,1-1.3-10.3,34.9,34.9,0,0,1,2.7-9.7,76.1,76.1,0,0,1,4.5-8.5l2.4-4,.6-1,.8-1.1a15.6,15.6,0,0,1,1.6-2,49.9,49.9,0,0,1,7-6.8,136.1,136.1,0,0,1,15.3-11.2,3.1,3.1,0,0,1,4.4,1,3,3,0,0,1-.8,4.2H305l-8.6,6.2c-.9.6-2.7-.5-3.1-1.9s.5-4.4,1.5-5l6.6-4.5,3.5,5.3A131.9,131.9,0,0,0,290,197.4a52.7,52.7,0,0,0-6.4,6,6.5,6.5,0,0,0-1.3,1.6l-.6.8-.7,1-2.4,3.8c-1.6,2.6-3.1,5.2-4.4,7.8a27.7,27.7,0,0,0-2.4,8.1,15.6,15.6,0,0,0,.8,8,17.4,17.4,0,0,0,4.4,6.7,27.2,27.2,0,0,0,7.1,4.9,39.5,39.5,0,0,0,8.1,3,21.6,21.6,0,0,0,8.4,0,37.8,37.8,0,0,0,8.5-2.6,84.9,84.9,0,0,0,15.7-9,142.4,142.4,0,0,0,14.1-11.6l-.3.3,1.1-1.8C340.3,223.4,341.3,222.2,342.1,223.4Z')
                      g#paw-right--up
                        g
                          path(d='M282.2,215.2c-1.6-1.6-12.8-17.9-14-34.3-.1-2.5,1.7-16,12.9-22.4s22.3-1.9,26.2.4c12.2,7.3,21.2,19.1,22.8,22.4', fill='#fff')
                          path(d='M330,181.2a2.4,2.4,0,0,1-2.6-1.3,71.4,71.4,0,0,0-9.8-10.8,64,64,0,0,0-11.7-8.6,26.3,26.3,0,0,0-6.5-2.3,26.9,26.9,0,0,0-6.9-.6,24.9,24.9,0,0,0-6.7,1.3,20.8,20.8,0,0,0-5.8,3.3,23.1,23.1,0,0,0-7.6,11,32.5,32.5,0,0,0-1.4,6.6,6.6,6.6,0,0,0,.1,1.4l.2,1.8c.1,1.2.4,2.3.6,3.5a65,65,0,0,0,4.8,13.4c1,2.2,2.2,4.3,3.4,6.4a43.1,43.1,0,0,0,3.9,5.9.6.6,0,0,1,0,.6c0,.2-.2.4-.4.7a5.7,5.7,0,0,1-1.5,1.6c-1.3.6-4.1.1-4.6-.6a89.5,89.5,0,0,1-7.2-13.7,63.7,63.7,0,0,1-4.3-14.9,25.7,25.7,0,0,1-.5-4c0-.3-.1-.6-.1-1v-1.2a12.5,12.5,0,0,1,.2-2.1,35.2,35.2,0,0,1,2.4-7.8,28.6,28.6,0,0,1,4.1-6.9,24.6,24.6,0,0,1,6.1-5.5,26.2,26.2,0,0,1,15.5-4.2,28.9,28.9,0,0,1,7.8,1.2l3.8,1.3,1.8.9,1.8,1a78.2,78.2,0,0,1,11.9,9.6,80.2,80.2,0,0,1,9.7,11.8C331.1,179.7,331.4,181,330,181.2Z')
                        use(width='31.4', height='33.93', transform='translate(273.2 166.1) rotate(-5.6)', xlink:href='#paw-pads')
                    g#laptop__terminal
                      path(d='M316.9,238.7,153.5,205.2a5.1,5.1,0,0,1-4-3.5L109.8,75.4c-1-3.3,1.9-6.6,5.6-6.3L277.9,84.5a5.2,5.2,0,0,1,4.6,3.7l40.7,144.4C324.2,236.2,320.8,239.5,316.9,238.7Z')
                      path(d='M317.3,238.7a7.9,7.9,0,0,0,2.2-.7,5,5,0,0,0,2.2-1.9,3.7,3.7,0,0,0,.6-2.9l-.3-.8-.2-.9a15.4,15.4,0,0,1-.5-1.7L300,154.6l-10.7-37.5L284,98.3l-2.6-9.4a7.9,7.9,0,0,0-.4-.9,4.3,4.3,0,0,0-.4-.7,3.3,3.3,0,0,0-1.5-1.1l-.9-.3h-1.1l-2.4-.2L119.2,71.2l-2.4-.3h-2.2a3.3,3.3,0,0,0-2.8,1.6,2.4,2.4,0,0,0-.5,1.4v.8c.1.1.1.2.1.4l.2.6,1.5,4.6L119,98.8l11.8,37.3,11.7,37.2,5.9,18.6,2.9,9.3a3.4,3.4,0,0,0,2.2,2h1l1.2.3,2.4.4,153,31.1c4.3.9,7.4,2.9,5.2,3.3s-11.7-.1-16-1l-75.8-15.7L186.6,214l-19-3.9-9.5-2-4.7-1h-.7l-.8-.3a6.1,6.1,0,0,1-1.4-.7,7.6,7.6,0,0,1-2.3-2.4l-.4-.8a1.9,1.9,0,0,1-.2-.7l-.4-1.2-.7-2.3-1.4-4.6-2.9-9.2-5.8-18.5-11.5-36.9-11.5-37-2.9-9.2L109,78.5l-.7-2.3v-.6c0-.3-.1-.6-.1-.8a4.8,4.8,0,0,1,0-1.7,6.8,6.8,0,0,1,3.8-5,10.1,10.1,0,0,1,3-.7h2.6l9.6,1L204.1,76l38.5,3.7,19.3,1.9,9.6.9,4.8.5h2.6a6.6,6.6,0,0,1,2.7,1.2,7.2,7.2,0,0,1,1.9,2.4,12.1,12.1,0,0,1,.5,1.4l.3,1.1,1.3,4.7,2.6,9.3,5.2,18.6,10.4,37.3,10.4,37.3,5.3,18.6,2.6,9.4,1.3,4.6.6,2.4a7,7,0,0,1,.4,2.7,5.7,5.7,0,0,1-1.8,3.7,5.9,5.9,0,0,1-3.4,1.6,3.5,3.5,0,0,1-2.1-.4C316.7,239,316.8,238.9,317.3,238.7Z')
                    
                    g#laptop__terminal_code_scene 
                      g#laptop__code
                        g(stroke='#3DE0E8', stroke-width='6', transform='matrix(-1 0 0 1 278 103)')
                          g#f3(transform='translate(0 76)')
                            path#f3-l9.typing-animation(d='M8,25L8,25', stroke-dasharray='60,10')
                            path#f3-l8.typing-animation(d='M8,13L8,13', stroke-dasharray='50,10')
                            path#f3-l7.typing-animation(d='M0,1L0,1', stroke-dasharray='25,10')
                          g#f2(transform='translate(0 38)')
                            path#f2-l6.typing-animation(d='M8,25L8,25', stroke-dasharray='40,10')
                            path#f2-l5.typing-animation(d='M8,13L8,13', stroke-dasharray='60,10')
                            path#f2-l4.typing-animation(d='M0,1L0,1', stroke-dasharray='30,10')
                          g#f1
                            path#f1-l3.typing-animation(d='M8,25L8,25', stroke-dasharray='60,10')
                            path#f1-l2.typing-animation(d='M8,13L8,13', stroke-dasharray='60,10')
                            path#f1-l1.typing-animation(d='M0,1L0,1', stroke-dasharray='60,10')
                    g#laptop__cover(style='mix-blend-mode: hard-light;')
                      polygon(points='440.7 347.2 90.3 275.6 4.7 3.8 353 36.7 440.7 347.2', fill='#f2f2f2')
                      path(d='M440.4,346.4c-2.5-5.3-6.5-18.8-9-27.4L390.7,178c-13.6-46.8-26.9-93.7-40.3-140.6l2.3,2L4.4,7.1,7.9,2.8,94,274.5l-2.9-2.6q83.7,16.8,166.8,34.2t166.8,35.4c8.8,1.9,17.5,5.1,14.7,5.5s-6.3-.2-12-.9-12.3-1.5-16.8-2.3Q330.5,328.1,250,312.1c-53.5-10.8-107.1-21.7-160.4-32.7l-2.3-.5-.6-2.1L1.5,4.8,0,0,5,.5,353.3,34l1.8.2.5,1.8q20.7,73.8,41.2,147.8l40.6,147.5C439.8,340.1,442.9,351.7,440.4,346.4Z')
                  g#paw-left
                    g#paw-left--up
                      g
                        path(d='M545.4,261.9c-7.1-13-12.9-31.1-13.3-37.6-.6-9,0-15.6,5.2-22.2s15-9.8,22.7-8.8a26.7,26.7,0,0,1,17.3,9.4c5.3,5.8,9.4,12.9,11.6,16.6', fill='#fff')
                        path(d='M588.9,219.2c-1.4.4-2.3-.7-2.8-1.4a93.9,93.9,0,0,0-8.9-12.5c-3.3-3.9-7.1-7-11.7-8.6a24.2,24.2,0,0,0-7.1-1.4,24.5,24.5,0,0,0-7.1.7,27,27,0,0,0-6.6,2.7,21,21,0,0,0-5.2,4.6,20.6,20.6,0,0,0-3.5,6.1,22.2,22.2,0,0,0-1.3,6.9,47.3,47.3,0,0,0,.1,7.5,52.2,52.2,0,0,0,1.4,7.1c1.4,4.8,3.1,9.7,5,14.4a147.7,147.7,0,0,0,6.5,13.9c.4.7-1,2.3-2.4,2.6s-4-.6-4.4-1.4c-2.3-4.8-4.3-9.7-6.1-14.6a128.8,128.8,0,0,1-4.6-15.3c-.3-1.3-.5-2.6-.7-4a16.4,16.4,0,0,1-.2-2.2v-2a57,57,0,0,1,.4-8.2,27.2,27.2,0,0,1,2.3-8.2c.7-1.3,1.4-2.5,2.2-3.7l1.3-1.7,1.4-1.6a28.8,28.8,0,0,1,7-5,27.6,27.6,0,0,1,8-2.5,25.6,25.6,0,0,1,8.3-.2,27.4,27.4,0,0,1,15.1,6.7,50.6,50.6,0,0,1,5.5,5.9,111.3,111.3,0,0,1,8.7,13.2C589.8,217.7,590.3,218.9,588.9,219.2Z')
                      use(width='31.4', height='33.93', transform='matrix(0.99, -0.03, 0.04, 1, 539.85, 203.52)', xlink:href='#paw-pads')
                    g#paw-left--down
                      path(d='M538.2,239.3c-3.2,1.6-33,10.8-37,28-.4,1.8-2.1,18.9,7,26,5.5,4.3,12.7,2.8,25,0,10.3-2.3,19-5.8,40-16,9.1-4.4,16.6-8.2,22-11', fill='#fff')
                      path(d='M595.1,266.4c.1,1.4-1.4,2.4-2.4,2.9l-18.3,9.4c-6.2,3.1-12.3,6.1-18.6,9a120.8,120.8,0,0,1-19.6,7.2l-5.1,1.2-5.1,1.1a43.4,43.4,0,0,1-5.2.9,33.8,33.8,0,0,1-5.6.3,17.8,17.8,0,0,1-5.8-1.5,6.1,6.1,0,0,1-1.4-.7l-1.3-.9-2.2-2a23.6,23.6,0,0,1-5.2-10.2,44.5,44.5,0,0,1-1.3-10.9c0-.9.1-1.8.1-2.7a6.6,6.6,0,0,0,.1-1.4v-.7c.1-.3.1-.7.2-.9a21.6,21.6,0,0,1,2.1-5.5,33.4,33.4,0,0,1,7.1-8.7,67.1,67.1,0,0,1,8.7-6.4,121.7,121.7,0,0,1,19-9,1.5,1.5,0,0,1,1.7.6,3.4,3.4,0,0,1,.9,1.9c.1,1.5-1.6,4.2-2.6,4.6a91.1,91.1,0,0,0-17.8,8.5,40.1,40.1,0,0,0-7.6,5.8,22.8,22.8,0,0,0-5.2,7.3l-.4,1-.3,1a1.7,1.7,0,0,0-.2.5v.4c-.1.4-.1.8-.2,1.2s-.1,3.1-.1,4.7a35.4,35.4,0,0,0,1.4,9.3,15.6,15.6,0,0,0,4.5,7.3c2,1.9,4.7,2.6,7.8,2.5a55.9,55.9,0,0,0,9.7-1.2l4.9-1.1,4.9-1.1a121,121,0,0,0,18.8-6.8c12.4-5.3,24.6-11.5,36.8-17.4C593.4,265.4,595,264.9,595.1,266.4Z')
            </template>
          </div>
        </a>
      </article>

      <article class="c-article">
        <a class="c-article__link">
          <div>
            <header>
              <h3 class="c-article__heading">
                Open to New Experiences, and always eager
                <div id="flip" />
                to try out diffrent approaches.
              </h3>
            </header>
            <div class="c-article__content" />
          </div>
          <div class="c-article__img-wrapper">
            <img
              class="c-article__img"
              src="https://assets.codepen.io/204808/17.Space-Rocket-with-requestAnimationFrame.png"
              alt="Responsive Mondrian art with CSS grid"
            />
          </div>
        </a>
      </article>
    </section>
  </main>

  <div class="c-author">
    Built with 💛&☕ by <a
      target="_blank"
      class="c-author__link"
      href="https://hamidrezakhoramrokh@gmail.com">Hamidreza Khoramrokh</a
    >
  </div>
</html>

<style>
  .pad {
    padding-top: 20px;
  }
  body {
    background-color: #272727;
    padding: 10px;
  }

  .fakeButtons {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 6px;
    left: 6px;
    background-color: #ff3b47;
    border-color: #9d252b;
    display: inline-block;
  }

  .fakeMinimize {
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
  }

  .fakeZoom {
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
  }

  .fakeMenu {
    width: auto;
    box-sizing: border-box;
    height: 25px;
    background-color: #e4dccf;
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .fakeScreen {
    background-color: #576f72;
    box-sizing: border-box;
    width: auto;
    margin: 0 auto;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  p {
    position: relative;
    left: 30%;
    margin-left: -9em;
    text-align: left;
    font-size: 1.25em;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }
  @media screen and (max-width: 500px) {
    p {
      margin-left: -5em;
    }
  }
  span {
    color: #fff;
    font-weight: bold;
  }

  .line1 {
    color: #9cd9f0;
    -webkit-animation: type 0.5s 1s steps(20, end) forwards;
    -moz-animation: type 0.5s 1s steps(20, end) forwards;
    -o-animation: type 0.5s 1s steps(20, end) forwards;
    animation: type 0.5s 1s steps(20, end) forwards;
  }

  .cursor1 {
    -webkit-animation: blink 1s 2s 2 forwards;
    -moz-animation: blink 1s 2s 2 forwards;
    -o-animation: blink 1s 2s 2 forwards;
    animation: blink 1s 2s 2 forwards;
  }

  .line2 {
    color: #cdee69;
    -webkit-animation: type 0.5s 4.25s steps(20, end) forwards;
    -moz-animation: type 0.5s 4.25s steps(20, end) forwards;
    -o-animation: type 0.5s 4.25s steps(20, end) forwards;
    animation: type 0.5s 4.25s steps(20, end) forwards;
  }
  .text3 {
    padding-right: auto;
    left: 0%;
    overflow: visible;
  }

  .cursor2 {
    -webkit-animation: blink 1s 5.25s 2 forwards;
    -moz-animation: blink 1s 5.25s 2 forwards;
    -o-animation: blink 1s 5.25s 2 forwards;
    animation: blink 1s 5.25s 2 forwards;
  }

  .line3 {
    color: #e09690;
    -webkit-animation: type 0.5s 7.5s steps(20, end) forwards;
    -moz-animation: type 0.5s 7.5s steps(20, end) forwards;
    -o-animation: type 0.5s 7.5s steps(20, end) forwards;
    animation: type 0.5s 7.5s steps(20, end) forwards;
  }

  .cursor3 {
    -webkit-animation: blink 1s 8.5s 2 forwards;
    -moz-animation: blink 1s 8.5s 2 forwards;
    -o-animation: blink 1s 8.5s 2 forwards;
    animation: blink 1s 8.5s 2 forwards;
  }

  .line4 {
    color: #fff;
    -webkit-animation: type 0.5s 10.75s steps(20, end) forwards;
    -moz-animation: type 0.5s 10.75s steps(20, end) forwards;
    -o-animation: type 0.5s 10.75s steps(20, end) forwards;
    animation: type 0.5s 10.75s steps(20, end) forwards;
  }

  .cursor4 {
    -webkit-animation: blink 1s 11.5s infinite;
    -moz-animation: blink 1s 8.5s infinite;
    -o-animation: blink 1s 8.5s infinite;
    animation: blink 1s 8.5s infinite;
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes type {
    to {
      width: 17em;
    }
  }

  @-moz-keyframes type {
    to {
      width: 17em;
    }
  }

  @-o-keyframes type {
    to {
      width: 17em;
    }
  }

  @keyframes type {
    to {
      width: 17em;
    }
  }

  /* global*/
  :global(body) {
    background-color: #f0ebe3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='232' height='232' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23576F72' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%237D9D9C'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
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

  .plist {
    font-size: 11pt auto;
  }

  .phead {
    font-size: 15pt;
    padding-left: 5pt;
    padding: 10pt;
  }
</style>
