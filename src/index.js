import "./style/style.scss";

const userStack = { language: "JavaScript", framework: "React" };

const user = { name: "Altynbek", country: "Kyrgyzstan", ...userStack };
console.log(user);
