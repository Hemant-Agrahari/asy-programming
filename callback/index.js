console.log("Promise");

function registration(callback) {
  setTimeout(() => {
    console.log("Registration Done.");
    callback();
  }, 300);
}

function sendOtp(callback) {
  setTimeout(() => {
    console.log("OTP Send.");
    callback();
  }, 200);
}

function veridicationSuccess(callback) {
  setTimeout(() => {
    console.log("Verification Success");
    callback();
  }, 1500);
}

function Login() {
  setTimeout(() => {
    console.log("Login done.");
  }, 800);
}

registration(function () {
  sendOtp(function () {
    veridicationSuccess(function () {
      Login();
    });
  });
});
