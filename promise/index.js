console.log("Promise");

function registration() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Registration Done.");
      resolve();
    }, 800);
  });
}

function sendOtp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("OTP Send.");
      resolve();
    }, 200);
  });
}

function veridicationSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Verification Success");
      resolve();
    }, 100);
  });
}

function Login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login done.");
      resolve();
    }, 900);
  });
}

registration()
  .then(sendOtp)
  .then(veridicationSuccess)
  .then(Login)
  .catch((error) => console.error("Error:", error));
