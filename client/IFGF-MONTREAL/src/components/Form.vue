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

<style scoped>
/* Form Container */
.form-container {
  background: #f5efe6; 
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  margin-top: 30px;
}

/* Form Title */
.form-title {
  text-align: center;
  font-size: 1.8rem;
  color: #5a4a42; 
  margin-bottom: 20px;
}

/* Labels */
.form-label {
  font-weight: 600;
  color: #5a4a42;
}

/* Form Inputs */
.form-control, .form-select {
  border-radius: 10px;
  border: 1px solid #c2b8a3; 
  padding: 10px;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.form-control:focus, .form-select:focus {
  border-color: #8b7765; 
  box-shadow: 0 0 5px rgba(139, 119, 101, 0.5);
}

/* Textarea */
textarea {
  resize: none;
}

/* Checkbox */
.form-check-input {
  border-color: #5a4a42;
}

.form-check-input:checked {
  background-color: #8b7765;
  border-color: #8b7765;
}

/* Submit Button */
.btn-custom {
  background: #5a4a42;
  color: white;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 25px;
  border: none;
  transition: all 0.3s ease-in-out;
}

.btn-custom:hover {
  background: #8b7765;
}
</style>
