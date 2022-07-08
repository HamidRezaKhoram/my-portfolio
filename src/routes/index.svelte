<script>
import Swal from 'sweetalert2'

import logo from '/src/lib/Swift.webp';

  function handleClick() {
    Swal.fire({
  title: '<strong>Contacts</strong>',
  background: '#F0EBE3',
  icon: 'info',
  html:
    '<a href="https://github.com/HamidRezaKhoram">GitHub</a> '+
    '<a href="https://www.instagram.com/hamid.khoram.8/">Instagram</a> '+
    '<a href="https://www.linkedin.com/in/hamidreza-khoramrokh-239786219/">LikdedIn</a> '+
    '<a href="https://twitter.com/hrkh1380">Twitter</a> ' ,
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!'
})
  }

  
</script>



<style>
  .pad{
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
  background-color: #E4DCCF;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #576F72;
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
@media screen and (max-width: 500px){
  p{
    margin-left: -5em;
  }
}
span {
  color: #fff;
  font-weight: bold;
}

.line1 {
  color: #9CD9F0;
  -webkit-animation: type .5s 1s steps(20, end) forwards;
  -moz-animation: type .5s 1s steps(20, end) forwards;
  -o-animation: type .5s 1s steps(20, end) forwards;
  animation: type .5s 1s steps(20, end) forwards;
}

.cursor1 {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
}

.line2 {
  color: #CDEE69;
  -webkit-animation: type .5s 4.25s steps(20, end) forwards;
  -moz-animation: type .5s 4.25s steps(20, end) forwards;
  -o-animation: type .5s 4.25s steps(20, end) forwards;
  animation: type .5s 4.25s steps(20, end) forwards;
}

.cursor2 {
  -webkit-animation: blink 1s 5.25s 2 forwards;
  -moz-animation: blink 1s 5.25s 2 forwards;
  -o-animation: blink 1s 5.25s 2 forwards;
  animation: blink 1s 5.25s 2 forwards;
}

.line3 {
  color: #E09690;
  -webkit-animation: type .5s 7.5s steps(20, end) forwards;
  -moz-animation: type .5s 7.5s steps(20, end) forwards;
  -o-animation: type .5s 7.5s steps(20, end) forwards;
  animation: type .5s 7.5s steps(20, end) forwards;
}

.cursor3 {
  -webkit-animation: blink 1s 8.5s 2 forwards;
  -moz-animation: blink 1s 8.5s 2 forwards;
  -o-animation: blink 1s 8.5s 2 forwards;
  animation: blink 1s 8.5s 2 forwards;
}

.line4 {
  color: #fff;
  -webkit-animation: type .5s 10.75s steps(20, end) forwards;
  -moz-animation: type .5s 10.75s steps(20, end) forwards;
  -o-animation: type .5s 10.75s steps(20, end) forwards;
  animation: type .5s 10.75s steps(20, end) forwards;
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

   
    :global(body) { 
    background-color: #F0EBE3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='232' height='232' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23576F72' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%237D9D9C'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}



/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

.plist{
  font-size: 11pt auto;
}

.phead{
  font-size: 15pt;
  padding-left: 5pt;
  padding: 10pt;
}

</style>

<html lang="eng">
  <style lang="scss">
    /**
 * CSS custom properties
 */

:root {
  --black: #404040;
  --white: #fff;
  --gray: rgba(64, 64, 64, 0.15);

  --font-courgett: "Courgette", cursive;
  --font-open-sans: "Open Sans", sans-serif;

  --font-light: 300;
}

/**
 * Functions
 */

// Convert a pixel value to REM units
@function rem($pixel) {
  @return $pixel / 16 + rem;
}

/**
 * Placeholders
 */

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

/**
 * Styles
 */

/**
 * Elements
 */
body {
  background-color: var(--white);
  color: var(--black);
  font-family: var(--font-open-sans);
}

/**
 * Objects
 */

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
}

.o-main-section {
  margin: 0 auto;
  max-width: rem(600);
}

/**
 * Components
 */

// Logo


.c-logo {
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
  font-family: 'Roboto Slab', serif;
  font-size: rem(26);
  margin: 0;
  
  
}

.c-logo__link {
  color: #576F72;
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
  color:  #576F72;
  display: inline-block;
  font-size: rem(14);
  letter-spacing: rem(4);
  margin: 0 rem(6);
  padding: rem(10);
  text-decoration: none;
  text-transform: uppercase;
}

// Heading
.c-main-heading {
  
  max-width: rem(350);
  font-size: rem(30);
  font-weight: var(--font-light);
  letter-spacing: rem(3);
  margin: rem(60) 0;
  text-align: center;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
    
    blink-caret 1s step-end infinite;
    
  // text-transform: uppercase;
}
  /* The typing effect */
  @media screen and (max-width: 500px){

    .c-main-heading{
      
      font-size: rem(25);
    }
    .c-main-menu__link{
      font-size: rem(13);
      margin: 0 rem(5);
      padding: rem(1);
      margin-left: 2.5em;
      margin-right: 0.1em;
      
    }
    .c-logo{
      margin-left: -0.7em;
      margin-top: -0.2em;
      font-size: rem(25);
    }
   
    

    
  }
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
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

  * {
    pointer-events: none;
  }
}

.c-article__heading {
  font-size: rem(20);
  margin: rem(5) 0;
}

.c-article__content {
  line-height: 1.2;
  margin: rem(1) 0;
}

.c-article__img-wrapper {
  height: rem(100);
  margin-left: rem(10);
  min-width: rem(160);
  width: rem(160);
}

.c-article__img {

  border-radius: rem(10);
  display: block;
  height: 120%;
  filter: grayscale(1);
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
  color: #404040;
  margin: 10px 0;
  text-align: center;
}

.c-author__link {
  color: #404040;
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
    background-color: rgba(64, 64, 64, 0.15);
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
  <div class="c-magic-area c-magic-area--menu" data-target-class=".c-main-menu__link" data-tween-back="true" aria-hidden="true"></div>
<div class="c-magic-area c-magic-area--content" data-target-class=".c-article__link" data-tween-back="false" aria-hidden="true"></div>

<main id="page" class="o-page">
  <header class="o-header">
    <h1 class="c-logo"><a class="c-logo__link" href="" target="_blank">PORTFOLIO</a></h1>
    
    <nav class="c-main-menu" aria-labelledby="mainmenulabel">
      <h2 id="mainmenulabel" class="u-visually-hidden">Main Menu</h2>
      <ul class="c-main-menu__list">
        
        
        <li><a class="c-main-menu__link" href="#about">About</a></li>
        <li><a class="c-main-menu__link" href="" on:click={handleClick}>Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="o-main-section">

    <h2 class="c-main-heading">Hi there, I'm Hamid.</h2>
    <div class="pad">
      <div class=fakeMenu>
        <div class="fakeButtons fakeClose"></div>
        <div class="fakeButtons fakeMinimize"></div>
        <div class="fakeButtons fakeZoom"></div>
      </div>
      <div class="fakeScreen">
        <p class="line1">&#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,<span class="cursor1">_</span><span></span></p>
        <p class="line2">&nbsp;&nbsp;&ldquo;I'm a mobile developer.&rdquo;,<span class="cursor2">_</span></p>
        <p class="line3">&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span class="cursor3">_</span></p>
        <p class="line4">><span class="cursor4">_</span></p>
        
      </div>
      <div>
        
      </div>
    </div>
    
    <article class="c-article">
      <a class="c-article__link">
        <div>
          <header>
            <h3 class="c-article__heading" id="about">A learning developer, in the middle of getting a CS degere at Ryerson/TMU University</h3>
          </header>
          <div class="c-article__content">
           
            
            

            
          </div>
        </div>
        
        <div class="c-article__img-wrapper">
          <img>
          <img class="c-article__img" src={logo} alt="" />
          
        </div>
      </a>
    </article>

    <article class="c-article">
      <a class="c-article__link">
        <div>
          <header>
            <h3 class="c-article__heading">I have experience working with <a href="">Swift</a>,
              <a>JS & HTML/CSS</a>, and
              <a>Simple Linux & backend server setups.</a></h3>
          </header>
          <div class="c-article__content">
            
          </div>
        </div>
        <div class="c-article__img-wrapper">
          <img class="c-article__img" src="https://assets.codepen.io/204808/css-grid-mondrian.png" alt="Responsive Mondrian art with CSS grid" />
        </div>
      </a>
    </article>

    <article class="c-article">
      <a class="c-article__link">
        <div>
          <header>
            <h3 class="c-article__heading">Open to New Experiences, and always eagear to try out diffrent </h3>
          </header>
          <div class="c-article__content">
            
          </div>
        </div>
        <div class="c-article__img-wrapper">
          <img class="c-article__img" src="https://assets.codepen.io/204808/17.Space-Rocket-with-requestAnimationFrame.png" alt="Responsive Mondrian art with CSS grid" />
        </div>
      </a>
    </article>
  </section>
</main>

<div class="c-author">
  Built with 💛&nbsp; by <a target="_blank" class="c-author__link" href="">Hamidreza Khoramrokh</a>
</div>


</html>