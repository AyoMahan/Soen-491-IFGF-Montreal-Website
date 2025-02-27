<template>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Care Group</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Adult Icare</option>
      <option>Teens Icare</option>
      <option>Sunday School</option>
      <option>Prayer Ministry</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Age</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Reply to me
      </label>
    </div>
  </div>
  <div class="input-group">
    <span class="input-group-text">Tell us about yourself</span>
    <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

</template>

<script>
export default{
    name: "Form",
}
</script>