<script>
  import github from "/src/photo/github.png";
  import email from "/src/photo/email.png";
  import ig from "/src/photo/instagram.png";
  import twitter from "/src/photo/twitter.png";
</script>

<div>
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
          <img class="c-article__img-wrapper2" src={github} alt="" />
        </li>
        <li class="content__container__list__item">
          <img class="c-article__img-wrapper2" src={twitter} alt="" />
        </li>
        <li class="content__container__list__item">
          <img class="c-article__img-wrapper2" src={ig} alt="" />
        </li>
        <li class="content__container__list__item">
          <img class="c-article__img-wrapper2" src={email} alt="" />
        </li>
      </ul>
    </div>
  </div>
</div>

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
