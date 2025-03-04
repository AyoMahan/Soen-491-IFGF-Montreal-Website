<template>
  <div class="form-container">
    <h2 class="form-title">Get in Touch</h2>
    <form class="row g-3" @submit.prevent="sendEmail">
      <div class="col-md-6">
        <label for="inputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputName" v-model="formData.name" required>
      </div>

      <div class="col-md-6">
        <label for="inputEmail" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail" v-model="formData.email" required>
      </div>

      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" v-model="formData.address">
      </div>

      <div class="col-md-6">
        <label for="inputPhone" class="form-label">Phone Number</label>
        <input type="text" class="form-control" id="inputPhone" v-model="formData.phone">
      </div>

      <div class="col-md-4">
        <label for="inputCareGroup" class="form-label">Care Group</label>
        <select id="inputCareGroup" class="form-select" v-model="formData.careGroup">
          <option disabled value="">Choose...</option>
          <option>Adult Icare</option>
          <option>Teens Icare</option>
          <option>Sunday School</option>
          <option>Prayer Ministry</option>
        </select>
      </div>

      <div class="col-md-2">
        <label for="inputAge" class="form-label">Age</label>
        <input type="text" class="form-control" id="inputAge" v-model="formData.age">
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" v-model="formData.reply">
          <label class="form-check-label" for="gridCheck">Reply to me</label>
        </div>
      </div>

      <div class="col-12">
        <label for="message" class="form-label">Tell us about yourself</label>
        <textarea class="form-control" id="message" v-model="formData.message" rows="4"></textarea>
      </div>

      <div class="col-12 text-center">
        <button type="submit" class="btn btn-custom">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        address: "",
        phone: "",
        careGroup: "",
        age: "",
        reply: false,
        message: "",
      }
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });

        const result = await response.json();
        if (response.ok) {
          alert("Email sent successfully!");
          this.resetForm();
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        alert("Failed to send email.");
        console.error(error);
      }
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        address: "",
        phone: "",
        careGroup: "",
        age: "",
        reply: false,
        message: "",
      };
    }
  }
};
</script>


