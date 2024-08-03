
<template>
	<div class="">
	<div class="original-ui  ">
	  <div class="body">
		<div class="container" id="container">
		  <div class="form-container sign-up-container">
			<img src="/src/assets/login.png"/>
		  </div>
		  <div class="form-container sign-in-container">
			<form @submit.prevent="submitForm" >
			  <h1>Log in</h1>
			  <div class="social-container">
				<a href="#" class="social"><i class="bi bi-facebook hover"></i></a>
				<a href="#" class="social"><i class="bi bi-twitter hover"></i></a>
				<a href="#" class="social"><i class="bi bi-linkedin hover"></i></a>
			  </div>
			  <span>or use your account</span>
			  <!-- <div class="infield">
				<input type="email" placeholder="Email" name="email" v-model="email" @input="validateEmail" />
				<label></label>
			  </div>
			  <div>
				<small style="font-size: 10px;" v-if="emailError" class=" d-flex justify-content-startform-text text-danger">{{ emailError }}</small>
			  </div> -->
        <div class="infield">
        <input type="email" placeholder="Email" name="email" v-model="email" @input="validateEmail" />
        
        <small v-if="emailError" class="d-flex justify-content-start" style="font-size: 10px;color: #FF0000">
          {{ emailError }}
        </small>
        <!-- <label></label> -->
      </div>
      <div class="mb-3 infield">
        <input type="password" placeholder="Password" v-model="password" @input="validatePassword">
        <div v-if="password">
        <small class="form-text d-flex justify-content-start text-start text-muted">
        <strong style="font-size: 10px;font-weight: 400;"
           :style="passwordStrengthStyle">{{ passwordStrength }}</strong>
        </small>
      </div>
      </div>

			  <!-- <div class=" mb-3 infield">
				<input type="password"  placeholder="Password" v-model="password">
				<label></label>
			</div>
				<div>
				<small  class="form-text text-muted">
				<strong :style="passwordStrengthStyle">{{ passwordStrength }}</strong>
				</small>
				</div> -->

			  <a href="#" class="forgot">Forgot your password?</a>
			  <button type="submit">Log In</button>
			</form>
		  </div>
		  <div class="overlay-container" id="overlayCon">
			<div class="overlay">
			  <div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<div class="mb-3">
				  <button @click="togglePanel">Let's Start</button>
				</div>
			  </div>
			  <div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<div class="mt-4 p-1 ">
				  <button @click="togglePanel">JOin Us</button>
				</div>
			  </div>
			</div>
			<button id="overlayBtn" @click="togglePanel"></button>
		  </div>
		</div>
	  </div>
	</div>
</div>
<!-- mobile	 -->
	<!-- <div style="display:flex;justify-content: center;align-items: center; margin:10px" class="alternative-ui d-lg-none ">
	<div class=" box  ">
        <form @submit.prevent="submitForm">
              <h1 class="m-2">Log in</h1>
              <div class="social-container">
                  <a href="#" class="social"><i class="bi bi-facebook  hover"></i></a>
                  <a href="#" class="social"><i class="bi bi-twitter  hover"></i></a>
                  <a href="#" class="social"><i class="bi bi-linkedin  hover"></i></a>
              </div>
              <span>or use your account</span>
          
              <div class="infield">
				<input type="email" placeholder="Email" name="email" v-model="email" @input="validateEmail" />
				<label></label>
			  </div>
			   <div class="text-start" >  
				<small style="font-size: 10px;" v-if="emailError" class=" d-flex justify-content-start text-danger">{{ emailError }}</small>
			   </div> 
			  <div class=" mb-3 infield">
				<input type="password"  placeholder="Password" v-model="password">
				<label></label>
			</div>
				<div>
				<small  class="form-text text-muted">
				<strong :style="passwordStrengthStyle">{{ passwordStrength }}</strong>
				</small>
				</div >
              <small  class="forgot">Forgot your password?</small>
             <div class="pb-2"> <button type="submit"  >Log In</button></div>
          </form>
    </div>
	</div> -->
  <div style="display:flex;justify-content: center;align-items: center; margin:10px" class="alternative-ui d-lg-none ">
  <div class="box">
    <form @submit.prevent="submitForm">
      <h1 class="m-2">Log in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="bi bi-facebook hover"></i></a>
        <a href="#" class="social"><i class="bi bi-twitter hover"></i></a>
        <a href="#" class="social"><i class="bi bi-linkedin hover"></i></a>
      </div>
      <span>or use your account</span>

      <div class="infield">
        <input type="email" placeholder="Email" name="email" v-model="email" @input="validateEmail" />
        <small v-if="emailError" class="d-flex justify-content-start text-danger" style="font-size: 10px;">
          {{ emailError }}
        </small>
      </div>

      <div class="mb-3 infield">
        <input type="password" placeholder="Password" v-model="password" @input="validatePassword">
        <div v-if="password">
        <small class="form-text d-flex justify-content-start text-start text-muted">
        <strong style="font-size: 10px;"
           :style="passwordStrengthStyle">{{ passwordStrength }}</strong>
        </small>
      </div>
      </div>

      <!-- Password strength feedback -->
      <!-- <div v-if="password">
        <small class="form-text d-flex justify-content-start text-start text-muted" style="font-size: 10px;"
           :style="passwordStrengthStyle">{{ passwordStrength }}
        </small>
      </div> -->
      <small class="forgot">Forgot your password?</small>
      <div class="pb-2">
        <button type="submit">Log In</button>
      </div>
    </form>
  </div>
</div>

  </template>
  
  <script>
  export default {
	data: function () {
	  return {
		password: '',
		has_minimum_length: false,
		has_number: false,
		has_lowercase: false,
		has_uppercase: false,
		has_special: false,
		email: '',
      emailError: ''
		
	  };
	},
	watch: {
    password() {
      this.has_minimum_length = this.password.length >= 8;
      this.has_number = /\d/.test(this.password);
      this.has_lowercase = /[a-z]/.test(this.password);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
    }
  },
  computed: {
    passwordStrength() {
      let score = 0;
      if (this.password.length >= 8) score++;
      if (this.has_number) score++;
      if (this.has_lowercase) score++;
      if (this.has_uppercase) score++;
      if (this.has_special) score++;

      switch (score) {
        case 0:
        case 1:
          return 'Very Poor';
        case 2:
          return 'Poor';
        case 3:
          return 'Okay';
        case 4:
          return 'Good';
        case 5:
          return 'Strong';
        default:
          return 'Very Poor';
      }
    },
    passwordStrengthStyle() {
      switch (this.passwordStrength) {
        case 'Very Poor':
          return { color: ' #FF0000' }; // Bootstrap's 'danger' color
        case 'Poor':
          return { color: ' #FF0000' }; // Bootstrap's 'warning' color
        case 'Okay':
          return { color: '#90EE90' }; // Bootstrap's 'secondary' color
        case 'Good':
          return { color: '#90EE90' }; // Bootstrap's 'info' color
        case 'Strong':
          return { color: '#013220' }; // Bootstrap's 'success' color
        default:
          return { color: '#dc3545' }; // Default to 'danger' color
      }
    }
  },
	methods: {

          async submitForm() {

      if (!this.email || !this.password ) {

      return false;
      }
      const userData = {
      email: this.email,
      password: this.password
      };
      console.log('User Data:', userData);

      try {
      const response = await fetch("http://localhost:8080/userLogin/saveuser", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert("User is added successfully");
      this.$router.push('/Rough');
      } catch (error) {
      console.error('Error fetching data:', error);
      }
      this.email = '';
      this.password = '';
      },
		validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = '* Please enter a valid email address *';
      } else {
        this.emailError = '';
      }
    },
	  changeValue: function (islog) {
		this.islogin = islog;
		console.log(islog);
	  },
	  togglePanel() {
		const container = document.getElementById("container");
		container.classList.toggle("right-panel-active");
	  },
	},
  };
  </script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
 
  .has_required {
  text-decoration: line-through;
  color: #689868;
}
  .body {
	height: 100vh;
	background: #f6f5f7;
	display: grid;
	place-content: center;
	font-family: 'Poppins', sans-serif;
  }
  .container {
	position: relative;
	width: 850px;
	height: 500px;
	background-color: #fff;
	box-shadow: 25px 30px 55px #5557;
	border-radius: 13px;
	overflow: hidden;
  }
  .form-container {
	position: absolute;
	width: 60%;
	height: 100%;
	padding: 0px 40px;
	transition: all 0.6s ease-in-out;
  }
  .sign-up-container {
	opacity: 0;
	z-index: 1;
  }
  .sign-in-container {
	z-index: 2;
  }
  form {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 50px;
  }
  h1 {
	color: #141e30;
  }
  .social-container {
	margin: 20px 0px;
  }
  .social-container a {
	border: 1px solid #ddd;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0px 5px;
	height: 40px;
	width: 40px;
  }
  span {
	font-size: 12px;
  }
  .infield {
	position: relative;
	margin: 8px 0px;
	width: 100%;
  }
  input {
	width: 100%;
	padding: 12px 15px;
	background-color: #f3f3f3;
	border: none;
	outline: none;
  }
  label {
	position: absolute;
	background: linear-gradient(to right, #141e30, #243b55);
	height: 2px;
	width: 0%;
	transition: 0.3s;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
  }
  input:focus ~ label {
	width: 100%;
  }
  a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
  }
  a.forgot {
	padding-bottom: 3px;
	border-bottom: 2px solid #eee;
  }
  button {
	border-radius: 20px;
	border: 1px solid #141e30;
	background: #243b55;
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
  }
  .form-container button {
	margin-top: 17px;
	transition: 80ms ease-in;
  }
  
  .form-container button:hover {
	background: #fff;
	color: #141e30;
  }
  .overlay-container {
	position: absolute;
	top: 0;
	left: 60%;
	width: 40%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 9;
  }
  #overlayBtn {
	cursor: pointer;
	position: absolute;
	border: 1px solid #fff;
	border-radius: 20px;
	top: 317px;
	left: 50%;
	transform: translateX(-50%);
	width: 143.67px;
	height: 40px;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
  }
  .overlay {
	position: relative;
	background: black;
	color: #fff;
	height: 100%;
	transition: transform 0.06s ease-in-out;
	left: -150%;
	width: 250%;
  }
  .overlay-panel {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
	text-align: center;
	height: 100%;
	width: 340px;
	transition: 0.6s ease-in-out;
  }
  .overlay-left {
	right: 60%;
	transform: translateX(-12%);
  }
  .overlay-right {
	right: 0;
	transform: translateX(0%);
  }
  .overlay-panel h1 {
	color: #fff;
  }
  p {
	font-size: 14px;
	font-weight: 300;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 25px 0px 35px;
  }
  .overlay-panel button {
	border: none;
	background-color: transparent;
  }
  
  .right-panel-active .overlay-container {
	transform: translateX(-150%);
  }
  .right-panel-active .overlay {
	transform: translateX(50%);
  }
  .right-panel-active .overlay-left {
	transform: translateX(25%);
  }
  .right-panel-active .overlay-right {
	transform: translateX(35%);
  }
  .right-panel-active .sign-in-container {
	transform: translateX(20%);
	opacity: 0;
  }
  .right-panel-active .sign-up-container {
	transform: translateX(66.7%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
  }
  @keyframes show {
	0%,
	50% {
	  opacity: 0;
	  z-index: 1;
	}
	50.1%,
	100% {
	  opacity: 1;
	  z-index: 5;
	}
  }
  .btnScaled {
	animation: scaleBtn 0.6s;
  }
  @keyframes scaleBtn {
	0% {
	  width: 143.67px;
	}
	50% {
	  width: 250px;
	}
	100% {
	  width: 143.67px;
	}
  }
  @media screen and (max-width: 1024px) {
	.body {
	  margin-top: 30px;
	  overflow: hidden;
	  height: 80vh;
	}
	.container {
	  position: relative;
	  width: 850px;
	  height: 500px;
	  background-color: #fff;
	  box-shadow: 25px 30px 55px #5557;
	  overflow: hidden;
	}
  }
  @media screen and (max-width: 769px) {
	.body {
	  margin-top: 30px;
	  overflow: hidden;
	  height: 80vh;
	}
	.container {
	  position: relative;
	  width: 700px;
	  height: 500px;
	  background-color: #fff;
	  box-shadow: 25px 30px 55px #5557;
	  margin-top: 26px;
	}
  }
  .btns {
	display: inline-block;
	background-color: black;
	color: white;
	font-family: 'Bai Jamjuree', sans-serif;
	padding: 7px 14px;
	margin: 5px;
	cursor: pointer;
	font-weight: bold;
  }
  @media screen and (max-width: 1050px) and (max-width: 780px) {
	/* Hide original UI and show alternative UI */
	.original-ui {
	  display: block;
	}
  
	.alternative-ui {
	  display: none;
	}
  }
  @media screen and (max-width: 1050px) and (min-width: 780px) {
	/* Hide original UI and show alternative UI */
	.original-ui {
	  display: block;
	}
  
	.alternative-ui {
	  display: none;
	}
  }
  @media screen and (max-width: 769px) {
	.original-ui {
	  display: none;
	}
  
	.alternative-ui {
	  display: block;
	}
  }

  /* next ui desing */
  .box{
    height:500px;
    width:400px;
    border:2px solid black;
    border-radius: 15px;
}

        form{
            height:100%;
            
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:0 50px;
        }
        h1{
            color:#141E30;
        }
    .social-container{
    margin:20px 0px;
        }
.social-container a{
    border:1px solid #DDD;
    border-radius:50%;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    margin:0px 5px;
    height:40px;
    width:40px;
}

span{
    font-size:12px;
}
.infield{
  position: relative;
  margin: 8px 0px;
  width:100%;
}

input{
    width:100%;
    padding:12px 15px;
    background-color: #f3f3f3;
    border:none;
    outline:none;
}

label{
    position: absolute;
    background: linear-gradient(to right, #141E30, #243B55);
    height:2px;
    width:0%;
    transition:0.3s;
    top:100%;
    left:50%;
    transform: translateX(-50%);

}

input:focus ~ label{
    width:100%;
}

a{
    color:#333;
    font-size: 14px;
    text-decoration: none;
    margin:15px 0;
}
a.forgot{
    padding-bottom: 3px;
    border-bottom: 2px solid #EEE;
}
button{
    border-radius: 20px;
    border: 1px solid #141E30;
    background: #243B55;
    color:#FFF;
    font-size:12px;
    font-weight:bold;
    padding:12px 45px;
    letter-spacing:1px;
    text-transform: uppercase;
}
 button{
    margin-top: 17px;
    transition: 80ms ease-in;
}
 button:hover{
background: #FFF;
color:#141E30;
}


@media screen and ( max-width:426px) {
    .box{
    height:450px;
    width:350px;
    border:2px solid black;
    border-radius: 15px;

}

        form{
            height:100%;
            
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:0 25px;
        }
        h1{
            color:#141E30;
            font-size:30px;
        }
    .social-container{
    margin:15px 0px;
        }
.social-container a{
    border:1px solid #DDD;
    border-radius:50%;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    margin:0px 5px;
    height:40px;
    width:40px;
}

span{
    font-size:11px;
}
.infield{
  position: relative;
  margin: 8px 0px;
  width:100%;
}

input{
    width:100%;
    padding:12px 10px;
    background-color: #f3f3f3;
    border:none;
    outline:none;
}

label{
    position: absolute;
    background: linear-gradient(to right, #141E30, #243B55);
    height:2px;
    width:0%;
    transition:0.3s;
    top:100%;
    left:50%;
    transform: translateX(-50%);

}

input:focus ~ label{
    width:100%;
}

a{
    color:#333;
    font-size: 14px;
    text-decoration: none;
    margin:15px 0;
}
a.forgot{
    padding-bottom: 3px;
    border-bottom: 2px solid #EEE;
}
button{
    border-radius: 20px;
    border: 1px solid #141E30;
    background: #243B55;
    color:#FFF;
    font-size:12px;
    font-weight:bold;
    padding:12px 40px;
    letter-spacing:1px;
    text-transform: uppercase;
}
 button{
    margin-top: 17px;
    transition: 80ms ease-in;
}
 button:hover{
background: #FFF;
color:#141E30;
} 
    
}
 @media screen and (max-width:376px) {
    .box{
    height:400px;
    width:300px;
    border:2px solid black;
    border-radius: 15px;
    margin: 10px;

}
} 
@media screen and (max-width:321px) {
    .box{
    height:430px;
    width:280px;
    border:2px solid black;
    border-radius: 15px;
    margin: 10px;
}
} 
  </style>
  