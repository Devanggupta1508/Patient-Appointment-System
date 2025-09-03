let btn = document.querySelector("#btn");
let count = 0;

let container = document.getElementById("patientsList");


btn.addEventListener("click", (e) => {
  e.preventDefault();

  // ek patient ka box
  let div = document.createElement("div");
  div.classList.add("patientlist");

  // patient number badge
  let number = document.createElement("span");
  number.classList.add("patientNumber");   // yaha dot hata diya
  number.innerText = "🆔 #" + (++count);
  div.appendChild(number);

  // patient info wrapper
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  // input se name liya
  let input = document.getElementById("name");
  let name = input.value;

  let p = document.createElement("p");
  p.innerText = "👤 Name: " + name;
  infoDiv.appendChild(p);

  // age
  let userAge = document.getElementById("age").value;
  let ageP = document.createElement("p");
  ageP.innerText = "🎂 Age: " + userAge;
  infoDiv.appendChild(ageP);

  // gender
  let gender = document.getElementById("gender").value;
  let genP = document.createElement("p");
  genP.innerText = "⚥ Gender: " + gender;
  infoDiv.appendChild(genP);

  // mobile
  let mobile = document.getElementById("mobile").value;
  let mobileP = document.createElement("p");
  mobileP.innerText = "📞 Mobile: " + mobile;
  infoDiv.appendChild(mobileP);

  // date
  let date = document.getElementById("date").value;
  let dateP = document.createElement("p");
  dateP.innerText = "📅 Date: " + date;
  infoDiv.appendChild(dateP);

  // time
  let time = document.getElementById("time").value;
  let timeP = document.createElement("p");
  timeP.innerText = "⏰ Time: " + time;
  infoDiv.appendChild(timeP);

  // reason
  let reason = document.getElementById("reason").value;
  let reasonP = document.createElement("p");
  reasonP.innerText = "💊 Reason: " + reason;
  infoDiv.appendChild(reasonP);

  // buttons wrapper
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-group");

  // visit button
  let visit = document.createElement("button");
  visit.innerText = "✅ Visit Complete";
  visit.addEventListener("click", () => div.style.backgroundColor = "lightgreen");
  btnDiv.appendChild(visit);

  // regular
  let regular = document.createElement("button");
  regular.innerText = "🔵 Regular";
  regular.addEventListener("click", () => div.style.backgroundColor = "lightblue");
  btnDiv.appendChild(regular);

  // emergency
  let emer = document.createElement("button");
  emer.innerText = "🔴 Emergency";
  emer.addEventListener("click", () => div.style.backgroundColor = "lightcoral");
  btnDiv.appendChild(emer);

  // pending
  let pending = document.createElement("button");
  pending.innerText = "🟡 Pending";
  pending.addEventListener("click", () => div.style.backgroundColor = "khaki");
  btnDiv.appendChild(pending);

  // follow-up
  let followUP = document.createElement("button");
  followUP.innerText = "🟣 Follow-up";
  followUP.addEventListener("click", () => div.style.backgroundColor = "plum");
  btnDiv.appendChild(followUP);

  // delete
  let del = document.createElement("button");
  del.innerText = "❌ Delete";
  del.addEventListener("click", () => div.remove());
  btnDiv.appendChild(del);

  // info + buttons ko ek patientlist ke andar dal do
  div.appendChild(infoDiv);
  div.appendChild(btnDiv);

  // container me add
  container.appendChild(div);
});
