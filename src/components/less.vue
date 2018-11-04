<template lang="pug">
  div
    .container
      .button-color-cycle.button Hover Color Change!
      .button-transform.button Hover 3D Transform!
      .button-squishy.button Hover Squishy!
    .container
      .spinner-circle
</template>

<style lang="less" scoped>
  @initial-color: #B6D0D1;
  @hover-color: #87B2B3;
  @button-border-color: #516a6b;
  @secondary-color: #879cb3;
  @tertiary-color: #87b39e;

  .container{
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 3em;
  }

  .button{
    height: 4rem;
    width: 12em;
    background: @initial-color;
    border-radius: 20px;
    box-shadow: 3px 4px 5px 2px @secondary-color;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    color: white;
    text-shadow: 2px 2px 5px gray;
  }

  //button that cycles colors on hover
  .button-color-cycle:hover{
    background: @hover-color;
    text-shadow: none;
    cursor: pointer;
    animation: colorchangehover 2s infinite alternate;
    cursor: pointer;
  }

  .button-color-cycle:active{
    background: @secondary-color;
    box-shadow: none;
    text-shadow: none;
    cursor: pointer;
    animation: none;
  }

  @keyframes colorchangehover{
    0%{
      &:extend(.button:hover);
      box-shadow:
        inset 0rem 1rem 2rem 3rem @initial-color,
        3px 4px 5px 2px @secondary-color;
    }
    50%{
      &:extend(.button:hover);
      box-shadow:
        inset 0rem 1rem 2rem 3rem @secondary-color,
        3px 4px 5px 2px @secondary-color;
    }
    100%{
      &:extend(.button:hover);
      box-shadow:
        inset 0rem 2rem 3rem 4rem @tertiary-color,
        3px 4px 5px 2px @secondary-color;
    }
  }

  //button 3d transform

  .button-transform:hover{
    animation: forwardandback 2s infinite;
    background: @secondary-color;
    cursor: pointer;
  }

  .button-transform:active{
    background: @secondary-color;
    cursor: pointer;
    animation: none;
  }

  @keyframes forwardandback{
    from {
      transform: translateZ(100px) perspective(500px);
    }
    to {
      transform: translateZ(-100px);
    }
  }

  //squishy button
  .button-squishy:hover{
    animation: squishy 1s infinite alternate;
    cursor: pointer;
  }

  @keyframes squishy{
    to{
      box-shadow: 3px 4px 0px 0px @secondary-color;
    }
  }
  .button-squishy:active{
    box-shadow: 3px 4px 0px 0px @secondary-color;
    cursor: pointer;
  }

  //spinner circle

  .spinner-circle{
    border-radius: 50%;
    height: 8em;
    width: 8em;
    display: flex;
    flex-direction: column;
    animation: spinnercyclecolor 2s infinite;
    border-top: 4px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 1px solid transparent;
  }

  @keyframes spinnercyclecolor{
    25% {
      border-top: 4px solid @initial-color;
    }
    50% {
      border-right: 3px solid @secondary-color;
    }
    75% {
      border-bottom: 2px solid @tertiary-color;
    }
    100% {
      border-left: 1px solid @secondary-color;
    }
  }
</style>
