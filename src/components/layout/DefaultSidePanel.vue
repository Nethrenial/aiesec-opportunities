<script lang="ts" setup></script>

<template>
  <aside class="default-side-panel">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.default-side-panel {
  display: none;

  background-color: var(--clr-foreground);
  padding: 1rem;
  @include mq(md) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}
</style>
