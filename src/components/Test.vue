<template>
  <div class="test-view">
    <br>
    <label class="label" for="email">Password</label>
    <br>
    <input
        v-validate="'required|truthy|punctuation|min:3'"
        name="password"
        type="password"
        placeholder="Password"
    >
    <br>
    <span
        v-show="errors.has('password')"
        class="error">
          {{ errors.first('password') }}
    </span>
    <br>
    {{ errors }}
  </div>
</template>

<script>
export default {
    name: 'Test',
    created () {
      console.log(this);
    }
}
</script>
