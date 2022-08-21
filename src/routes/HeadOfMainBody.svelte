<h2 class="c-main-heading"><strong>Hi there, I'm Hamid.</strong></h2>
<div class="pad">
  <div class="fakeMenu">
    <div class="fakeButtons fakeClose" />
    <div class="fakeButtons fakeMinimize" />
    <div class="fakeButtons fakeZoom" />
  </div>
  <div class="fakeScreen">
    <p class="line1 pM">
      &#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,<span class="cursor1"
        >_</span
      ><span />
    </p>
    <p class="line2 pM">
      &nbsp;&nbsp;&ldquo;and a mobile developer.&rdquo;,<span class="cursor2"
        >_</span
      >
    </p>
    <p class="line3 pM">
      &nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span
        class="cursor3">_</span
      >
    </p>
    <p class="line4 pM">><span class="cursor4">_</span></p>
  </div>

  <div />
</div>

<style>
   @media screen and (max-width: 500px) {
    .pM {
      margin-left: -5em;
    }
  }
  .pad {
    padding-top: 20px;
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

  .line1 {
    color: #9cd9f0;

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
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
</style>
